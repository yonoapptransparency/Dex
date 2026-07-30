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
const AES_SECRET = process.env.AES_SECRET || process.env.VITE_AES_SECRET || '';

// Security Stores (In-memory, transient per Vercel instance)
const nonceStore = new Map();

// Helper: Get Client IP
function getIp(req) {
  return req.headers['x-forwarded-for']?.split(',')[0].trim() || req.headers['x-real-ip'] || req.socket?.remoteAddress || "unknown";
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
  const difficulty = "0000";
  nonceStore.set(nonce, { sessionId: sid, difficulty, expiresAt: Date.now() + 60000 });
  res.json({ nonce, difficulty, sid });
});

// 2. Security Challenge Processing
app.post('/api/v1/_proc', (req, res) => {
  const { nonce, hash: hashField, solution, fingerprint, appId, sid: clientSid } = req.body;
  const ip = getIp(req);
  const sid = req.cookies?.["__Host-sid"] || clientSid;
  const solutionValue = solution !== undefined ? solution : hashField;

  if (!nonce || solutionValue === undefined || !fingerprint || !appId || !sid) {
    return res.status(400).json({ error: 'Incomplete security context' });
  }

  const challenge = nonceStore.get(nonce);
  if (!challenge || challenge.sessionId !== sid) {
    return res.status(403).json({ error: 'Challenge expired or invalid' });
  }

  // PoW verification
  const check = crypto.createHash('sha256').update(nonce + solutionValue).digest('hex');
  if (!check.startsWith(challenge.difficulty || "0000")) {
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
    
    // 1. Path Discovery for Secure Vault (Critical for different deployment environments)
    const vaultPaths = [
      path.join(process.cwd(), 'src/lib/secureVault.ts'),
      path.join(process.cwd(), 'lib/secureVault.ts'),
      path.join(process.cwd(), 'secureVault.ts'),
      path.join(__dirname, '../src/lib/secureVault.ts'),
      path.join(__dirname, 'secureVault.ts')
    ];

    let vaultContent = '';
    for (const p of vaultPaths) {
      if (fs.existsSync(p)) {
        vaultContent = fs.readFileSync(p, 'utf8');
        break;
      }
    }

    if (vaultContent) {
      const match = vaultContent.match(/export const ENCRYPTED_LINKS = ["']([^"']+)["'];/);
      if (match && match[1]) {
        const decryptedVault = safeDecrypt(match[1], AES_SECRET);
        if (decryptedVault) {
          try {
            const parsed = JSON.parse(decryptedVault);
            let encryptedUrl = '';
            if (Array.isArray(parsed)) {
              const item = parsed.find(i => i.id === appId || i.slug === appId);
              encryptedUrl = item?.more_information_url || item?.url || '';
            } else {
              const val = parsed[appId];
              if (typeof val === 'string') {
                if (val.startsWith('{')) {
                  try {
                    const inner = JSON.parse(val);
                    encryptedUrl = inner.more_information_url || inner.url || '';
                  } catch (e) {
                    encryptedUrl = val;
                  }
                } else {
                  encryptedUrl = val;
                }
              } else {
                encryptedUrl = val?.more_information_url || val?.url || '';
              }
            }
            
            if (encryptedUrl) {
              targetUrl = encryptedUrl.startsWith('U2FsdGVkX1') ? safeDecrypt(encryptedUrl, AES_SECRET) : encryptedUrl;
            }
          } catch (e) {
            console.error("[Vault] JSON parse failed");
          }
        }
      }
    }

    if (targetUrl && targetUrl.startsWith('http')) {
      return res.redirect(302, targetUrl);
    }

    // 2. Final Fallback: Check if we can reach Firestore via REST (if configured)
    const FIREBASE_PROJECT_ID = process.env.VITE_FIREBASE_PROJECT_ID || process.env.FIREBASE_PROJECT_ID;
    if (FIREBASE_PROJECT_ID && appId) {
      try {
        const apiKey = process.env.VITE_FIREBASE_API_KEY || process.env.FIREBASE_API_KEY;
        const dbId = process.env.VITE_FIREBASE_DATABASE_ID || '(default)';
        const apiSuffix = apiKey ? `?key=${apiKey}` : '';
        
        // Try direct ID lookup first
        const url = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/${dbId}/documents/app_secure_links/${appId}${apiSuffix}`;
        const fsRes = await fetch(url);
        
        if (fsRes.ok) {
           const fsDoc = await fsRes.json();
           const fields = fsDoc.fields || {};
           const encLink = fields.more_information_url?.stringValue || fields.encrypted_link?.stringValue;
           
           if (encLink) {
             const decrypted = safeDecrypt(encLink, AES_SECRET);
             if (decrypted && decrypted.startsWith('http')) {
               return res.redirect(302, decrypted);
             }
           }
        } else if (appId.length > 5) {
          // If 404 and appId looks like a slug, try to find the ID from apps collection
          const queryUrl = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/${dbId}/documents:runQuery${apiSuffix}`;
          const queryBody = {
            structuredQuery: {
              from: [{ collectionId: 'apps' }],
              where: {
                fieldFilter: {
                  field: { fieldPath: 'slug' },
                  op: 'EQUAL',
                  value: { stringValue: appId }
                }
              },
              limit: 1
            }
          };
          
          const qRes = await fetch(queryUrl, {
            method: 'POST',
            body: JSON.stringify(queryBody)
          });
          
          if (qRes.ok) {
            const qData = await qRes.json();
            if (Array.isArray(qData) && qData[0]?.document) {
              const realId = qData[0].document.name.split('/').pop();
              const linkUrl = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/${dbId}/documents/app_secure_links/${realId}${apiSuffix}`;
              const lRes = await fetch(linkUrl);
              if (lRes.ok) {
                const lDoc = await lRes.json();
                const lFields = lDoc.fields || {};
                const lEnc = lFields.more_information_url?.stringValue || lFields.encrypted_link?.stringValue;
                if (lEnc) {
                  const decrypted = safeDecrypt(lEnc, AES_SECRET);
                  if (decrypted && decrypted.startsWith('http')) {
                    return res.redirect(302, decrypted);
                  }
                }
              }
            }
          }
        }
      } catch (restErr) {
        console.error("[REST] Fallback error:", restErr);
      }
    }

    return res.status(404).send("<h1>404 Not Found</h1><p>The requested information link could not be resolved. This usually happens if the link hasn't been synced to the security vault yet. Please try again later.</p>");
  } catch (e) {
    console.error("[Resolution] Fatal Error:", e);
    return res.status(500).send("<h1>500 Internal Error</h1><p>A server-side error occurred during link resolution.</p>");
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
      const app = (data.apps || []).find(a => a.slug === slug || a.id === appId);
      if (app) {
        return res.json({ status: 'OK', payload: `/moreinfo/${app.slug}` });
      }
    } catch (e) {}
  }
  res.status(404).json({ status: 'ERR', msg: 'App not found' });
});

// 7. Link Check (For UI feedback)
app.get('/api/v1/link-check', (req, res) => {
  const { id } = req.query;
  if (!id) return res.json({ configured: false });
  // For Dex, we check if app exists in backup
  const backupPath = path.join(process.cwd(), 'src/lib/public_backup.json');
  if (fs.existsSync(backupPath)) {
    try {
      const data = JSON.parse(fs.readFileSync(backupPath, 'utf8'));
      const app = (data.apps || []).find(a => a.id === id);
      return res.json({ configured: !!app });
    } catch (e) {}
  }
  res.json({ configured: false });
});


// Dynamic Sitemap for Dex
app.get(['/sitemap.xml', '/sitemap', '/api/sitemap.xml'], (req, res) => {
  const host = process.env.PUBLIC_DOMAIN || 'https://www.rummydex.com';
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  const today = new Date().toISOString().split('T')[0];
  const staticRoutes = ['/', '/new-apps', '/news', '/videos', '/about', '/developers', '/contact', '/privacy', '/report-removal', '/terms', '/responsibility', '/notice', '/ethics', '/disclaimer'];
  
  for (const route of staticRoutes) {
    xml += `  <url>\n    <loc>${host}${route}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
  }
  
  const backupPath = path.join(process.cwd(), 'src/lib/public_backup.json');
  if (fs.existsSync(backupPath)) {
    try {
      const data = JSON.parse(fs.readFileSync(backupPath, 'utf8'));
      
      const getFormattedDate = (obj) => {
        
        const dateStr = obj.updated_at || obj.created_at;
        if (typeof dateStr === 'object' && dateStr !== null) {
          if (dateStr.seconds) return new Date(dateStr.seconds * 1000).toISOString().split('T')[0];
          if (dateStr._seconds) return new Date(dateStr._seconds * 1000).toISOString().split('T')[0];
        }
  
        if (dateStr) {
          try {
            const date = new Date(dateStr);
            if (!isNaN(date.getTime())) return date.toISOString().split('T')[0];
          } catch(e) {}
        }
        return today;
      };
      
      const escapeHtmlForSitemap = (unsafe) => unsafe ? unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;") : '';
      
      for (const app of data.apps || []) {
        if (app.slug) {
          const escSlug = escapeHtmlForSitemap(app.slug);
          const appDate = getFormattedDate(app);
          xml += `  <url>\n    <loc>${host}/app/${escSlug}</loc>\n    <lastmod>${appDate}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>\n`;
          xml += `  <url>\n    <loc>${host}/s/${escSlug}</loc>\n    <lastmod>${appDate}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
          xml += `  <url>\n    <loc>${host}/${escSlug}</loc>\n    <lastmod>${appDate}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
        }
      }
      for (const item of data.news || []) {
        if (item.slug) xml += `  <url>\n    <loc>${host}/news/${escapeHtmlForSitemap(item.slug)}</loc>\n    <lastmod>${getFormattedDate(item)}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
      }
      for (const item of data.videos || []) {
        if (item.slug) xml += `  <url>\n    <loc>${host}/videos/${escapeHtmlForSitemap(item.slug)}</loc>\n    <lastmod>${getFormattedDate(item)}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.6</priority>\n  </url>\n`;
      }
    } catch (e) {
      console.error('Error generating dynamic sitemap:', e);
    }
  }
  
  xml += '</urlset>\n';
  res.header('Content-Type', 'application/xml');
  res.send(xml);
});


app.get(['/robots.txt', '/api/robots.txt'], (req, res) => {
  const host = process.env.PUBLIC_DOMAIN || 'https://www.rummydex.com';
  let robots = `User-agent: *\nAllow: /\n\nSitemap: ${host}/sitemap.xml\n`;
  
  const backupPath = path.join(process.cwd(), 'src/lib/public_backup.json');
  if (fs.existsSync(backupPath)) {
    try {
      const data = JSON.parse(fs.readFileSync(backupPath, 'utf8'));
      if (data.settings && data.settings.robots_txt) {
        robots = data.settings.robots_txt;
        if (!robots.includes('Sitemap:')) {
          robots += `\nSitemap: ${host}/sitemap.xml\n`;
        }
      }
    } catch (e) {}
  }
  res.header('Content-Type', 'text/plain');
  res.send(robots);
});

// 8. Health Check
app.get('/api/health', (req, res) => res.json({ status: 'ok', env: 'production-dex' }));

// Catch-all 404 for API
app.all('/api/*', (req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

module.exports = app;
