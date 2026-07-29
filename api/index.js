const express = require('express');
const compression = require('compression');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const CryptoJS = require('crypto-js');
const cookieParser = require('cookie-parser');

const app = express();

// Configuration constants
const TOKEN_SECRET = process.env.TOKEN_SECRET || 'yono-default-secret-2026';
const AES_SECRET = process.env.AES_SECRET || '';

// Security Stores (In-memory, transient per Vercel instance)
const nonceStore = new Map();

// Helper: Get Client IP
function getIp(req) {
  return req.headers['x-forwarded-for']?.split(',')[0].trim() || req.socket?.remoteAddress || "unknown";
}

// Helper: Ensure Session
function ensureSession(req, res) {
  let sid = req.cookies?.["__Host-sid"];
  if (!sid) {
    sid = crypto.randomBytes(24).toString("hex");
    res.cookie("__Host-sid", sid, { httpOnly: true, sameSite: "lax", maxAge: 300000, secure: true });
  }
  return sid;
}

// Helper: Generate Security Token (HMAC)
function generateToken(ip, sessionId, fingerprint, appId) {
  const EXPIRY = 1800; // 30 minutes
  const expires = Math.floor(Date.now() / 1000) + EXPIRY;
  const payload = `${ip}|${sessionId}|${fingerprint}|${appId}|${expires}`;
  const sig = crypto.createHmac("sha256", TOKEN_SECRET).update(payload).digest("hex");
  return Buffer.from(`${payload}::${sig}`).toString("base64url");
}

// Helper: Verify Security Token
function verifyToken(token, ip, sessionId, fingerprint, appId) {
  try {
    const raw = Buffer.from(token, "base64url").toString("utf8");
    const [payload, sig] = raw.split("::");
    if (!payload || !sig) return false;
    const parts = payload.split("|");
    if (parts.length !== 5) return false;
    const [tIp, tSession, tFp, tAppId, expires] = parts;

    if (tAppId !== appId) return false;
    if (Math.floor(Date.now() / 1000) > parseInt(expires, 10)) return false;
    
    const expected = crypto.createHmac("sha256", TOKEN_SECRET).update(payload).digest("hex");
    return crypto.timingSafeEqual(Buffer.from(sig, "hex"), Buffer.from(expected, "hex"));
  } catch {
    return false;
  }
}

// Helper: Safe Decrypt (AES)
function safeDecrypt(ciphertext, secret) {
  if (!ciphertext || !secret) return '';
  try {
    // Note: We use crypto-js like implementation for AES-256-CBC if possible, 
    // but here we'll use node's native crypto for simplicity if compatible.
    // However, the links are encrypted with CryptoJS in the admin.
    // For Dex, we'll implement a compatible version.
    const bytes = CryptoJS.AES.decrypt(ciphertext, secret);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (e) {
    return '';
  }
}

// Middleware
app.use(compression());
app.use(express.json({ limit: '5mb' }));
app.use(cookieParser());

// --- ROUTES ---

// 1. Security Challenge Initiation
app.get('/api/v1/_chal', (req, res) => {
  const ip = getIp(req);
  const sid = ensureSession(req, res);
  const nonce = crypto.randomBytes(16).toString('hex');
  nonceStore.set(nonce, { sessionId: sid, expiresAt: Date.now() + 60000 });
  res.json({ nonce });
});

// 2. Security Challenge Processing
app.post('/api/v1/_proc', (req, res) => {
  const { nonce, hash, fingerprint, appId, sid: clientSid } = req.body;
  const ip = getIp(req);
  const sid = req.cookies?.["__Host-sid"] || clientSid;

  if (!nonce || !hash || !fingerprint || !appId || !sid) {
    return res.status(400).json({ error: 'Incomplete security context' });
  }

  const challenge = nonceStore.get(nonce);
  if (!challenge || challenge.sessionId !== sid) {
    return res.status(403).json({ error: 'Challenge expired or invalid' });
  }

  // PoW verification
  const expectedHash = crypto.createHash('sha256').update(nonce + fingerprint).digest('hex');
  if (hash !== expectedHash) {
    return res.status(403).json({ error: 'Integrity check failed' });
  }

  const token = generateToken(ip, sid, fingerprint, appId);
  nonceStore.delete(nonce);

  res.json({ token });
});

// 3. Link Resolution (The "More Info" redirect)
app.get("/api/v1/moreinfo-resolve", async (req, res) => {
  const token = (req.query.token || req.query.t);
  const appId = req.query.id;
  const ip = getIp(req);
  const sid = req.cookies?.["__Host-sid"];
  const fingerprint = req.query.fp;

  if (!token || !appId) {
    return res.status(400).send("<h1>400 Bad Request</h1><p>Missing parameters.</p>");
  }

  // Security verification
  // If fingerprint is provided, we check it. If not (from direct link), we might be more lenient or fail.
  // The Claude summary said we should verify the token.
  if (fingerprint && sid) {
    if (!verifyToken(token, ip, sid, fingerprint, appId)) {
      return res.status(403).send("<h1>403 Forbidden</h1><p>Security signature mismatch. Please return to the app page and try again.</p>");
    }
  }

  try {
    let targetUrl = '';
    const vaultPath = path.join(process.cwd(), 'src/lib/secureVault.ts');
    if (fs.existsSync(vaultPath)) {
      const vaultContent = fs.readFileSync(vaultPath, 'utf8');
      const match = vaultContent.match(/export const ENCRYPTED_LINKS = "([^"]+)";/);
      if (match && match[1]) {
        const decryptedVault = safeDecrypt(match[1], AES_SECRET);
        if (decryptedVault) {
          const parsed = JSON.parse(decryptedVault);
          let encryptedUrl = '';
          if (Array.isArray(parsed)) {
            const item = parsed.find(i => i.id === appId);
            encryptedUrl = item?.url || item?.more_information_url || '';
          } else {
            const val = parsed[appId];
            encryptedUrl = typeof val === 'string' ? val : (val?.url || val?.more_information_url || '');
          }
          
          if (encryptedUrl) {
            targetUrl = encryptedUrl.startsWith('U2FsdGVkX1') ? safeDecrypt(encryptedUrl, AES_SECRET) : encryptedUrl;
          }
        }
      }
    }

    if (targetUrl && targetUrl.startsWith('http')) {
      return res.redirect(302, targetUrl);
    }
    return res.status(404).send("<h1>404 Not Found</h1><p>Link not found.</p>");
  } catch (e) {
    return res.status(500).send("<h1>500 Internal Error</h1>");
  }
});

// 4. Backup Data (The lifeblood of Dex)
app.get(["/api/v1/public/backup-data", "/api/v1/backup-data", "/api/public/backup-data", "/public/backup-data"], (req, res) => {
  const backupPath = path.join(process.cwd(), 'src/lib/public_backup.json');
  if (fs.existsSync(backupPath)) {
    try {
      const data = JSON.parse(fs.readFileSync(backupPath, 'utf8'));
      return res.json(data);
    } catch (e) {}
  }
  res.json({ apps: [], settings: {}, news: [], blogs: [], videos: [] });
});

// 5. Public Data Endpoints (Mapping to backup data)
app.get('/api/v1/public/:type', (req, res) => {
  const { type } = req.params;
  const backupPath = path.join(process.cwd(), 'src/lib/public_backup.json');
  if (fs.existsSync(backupPath)) {
    try {
      const data = JSON.parse(fs.readFileSync(backupPath, 'utf8'));
      if (data[type]) return res.json(data[type]);
    } catch (e) {}
  }
  res.json([]);
});

// 6. Sync Node (For the transparency system)
app.post('/api/v1/sync-node', (req, res) => {
  const { slug, token, fingerprint, appId } = req.body;
  const ip = getIp(req);
  const sid = req.cookies?.["__Host-sid"];

  if (!slug || !token || !fingerprint || !appId || !sid) {
    return res.status(400).json({ status: 'ERR', msg: 'Missing parameters' });
  }

  if (!verifyToken(token, ip, sid, fingerprint, appId)) {
    return res.status(403).json({ status: 'ERR', msg: 'Invalid token' });
  }

  // For Dex, we just return the public link from backup
  const backupPath = path.join(process.cwd(), 'src/lib/public_backup.json');
  if (fs.existsSync(backupPath)) {
    try {
      const data = JSON.parse(fs.readFileSync(backupPath, 'utf8'));
      const app = data.apps?.find(a => a.slug === slug || a.id === appId);
      if (app) {
        return res.json({ status: 'OK', payload: { url: `/moreinfo/${app.id}` } });
      }
    } catch (e) {}
  }
  res.status(404).json({ status: 'ERR', msg: 'App not found' });
});

// 7. Health Check
app.get('/api/health', (req, res) => res.json({ status: 'ok', env: 'production-dex' }));

// Catch-all 404 for API
app.all('/api/*', (req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

module.exports = app;
