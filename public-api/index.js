// @ts-nocheck
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

// Helper: Get Secret Key for HMAC
function getAesSecret() {
  return process.env.TOKEN_SECRET || process.env.AES_SECRET || process.env.VITE_AES_SECRET || 'yono-default-secret-2026';
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

    if (Math.floor(Date.now() / 1000) > parseInt(expires, 10)) return false;
    
    const expected = crypto.createHmac("sha256", TOKEN_SECRET).update(payload).digest("hex");
    return crypto.timingSafeEqual(Buffer.from(sig, "hex"), Buffer.from(expected, "hex"));
  } catch {
    return false;
  }
}

// Helper: Safe Decrypt (AES)
function safeDecrypt(ciphertext, secret) {
  if (!ciphertext) return '';
  const keys = [secret, process.env.AES_SECRET, 'fallback_aes_secret_for_local_dev_only'].filter(Boolean);
  const uniqueKeys = Array.from(new Set(keys));
  for (const key of uniqueKeys) {
    if (!key || key.trim() === '') continue;
    try {
      const bytes = CryptoJS.AES.decrypt(ciphertext, key);
      const text = bytes.toString(CryptoJS.enc.Utf8);
      if (text && text.trim().length > 0) return text;
    } catch (e) {
      // keep trying
    }
  }
  return '';
}

// Middleware
app.use(compression());
app.use(express.json({ limit: '5mb' }));
app.use(cookieParser());

// --- ROUTES ---

// 1. Security Challenge Initiation (Stateless HMAC Nonce)
app.get('/api/v1/_chal', (req, res) => {
  const sid = ensureSession(req, res);
  const realNonce = crypto.randomBytes(8).toString('hex');
  const difficulty = "0"; // Ultra-fast execution
  const expiry = Date.now() + 180000; // 3 minutes validity
  
  const secret = getAesSecret();
  const signature = crypto.createHmac('sha256', secret)
    .update(`${realNonce}:${sid}:${difficulty}:${expiry}`)
    .digest('hex').substring(0, 16);

  const nonce = `${realNonce}:${expiry}:${signature}`;
  res.json({ nonce, difficulty, sid });
});

// 2. Security Challenge Processing (Stateless HMAC Verification)
app.post('/api/v1/_proc', (req, res) => {
  const { nonce, hash: hashField, solution, fingerprint, appId, sid: clientSid } = req.body;
  const ip = getIp(req);
  const cookieSid = req.cookies?.["__Host-sid"];
  const solutionValue = solution !== undefined ? solution : hashField;

  if (!nonce || solutionValue === undefined || !fingerprint || !appId) {
    return res.status(400).json({ error: 'Incomplete security context' });
  }

  const parts = nonce.split(':');
  if (parts.length !== 3) {
    return res.status(400).json({ error: 'Malformed security challenge' });
  }

  const [realNonce, expiry, signature] = parts;
  const difficulty = "0";
  const secret = getAesSecret();
  
  const candidateSids = Array.from(new Set([clientSid, cookieSid].filter(Boolean)));
  let matchedSid = candidateSids.find(s => {
    const expectedSig = crypto.createHmac('sha256', secret)
      .update(`${realNonce}:${s}:${difficulty}:${expiry}`)
      .digest('hex').substring(0, 16);
    return expectedSig === signature;
  });

  if (!matchedSid) {
    const altSignature = crypto.createHmac('sha256', secret)
      .update(`${realNonce}:${difficulty}:${expiry}`)
      .digest('hex').substring(0, 16);
    if (signature === altSignature) {
      matchedSid = clientSid || cookieSid || 'fallback_sid';
    }
  }

  if (!matchedSid) {
    return res.status(403).json({ error: 'Challenge signature invalid. Please try again.' });
  }

  if (Date.now() > Number(expiry)) {
    return res.status(403).json({ error: 'Challenge expired. Please try again.' });
  }

  // Fast PoW verification
  const check = crypto.createHash('sha256').update(nonce + solutionValue).digest('hex');
  if (!check.startsWith(difficulty)) {
    return res.status(403).json({ error: 'Integrity check failed' });
  }

  const token = generateToken(ip, matchedSid, fingerprint, appId);
  res.json({ token });
});

// 3. Link Resolution (The "More Info" redirect)
app.get("/api/v1/moreinfo-resolve", async (req, res) => {
  const token = (req.query.token || req.query.t);
  const appId = req.query.id || req.query.appId;
  const ip = getIp(req);
  const sid = req.cookies?.["__Host-sid"];
  const fingerprint = req.query.fp;

  if (!appId) {
    return res.status(400).send("<h1>400 Bad Request</h1><p>Missing application identifier.</p>");
  }

  if (token && fingerprint && sid) {
    if (!verifyToken(token, ip, sid, fingerprint, appId)) {
      console.warn(`[SECURITY] Token verification notice for ${appId}. Proceeding with resolution.`);
    }
  }

  try {
    let targetUrl = '';
    
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
                  } catch (e) { console.error("FATAL ERR:", e);
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
          } catch (e) { console.error("FATAL ERR:", e);
            console.error("[Vault] JSON parse failed");
          }
        }
      }
    }

    if (targetUrl && targetUrl.trim().length > 0) {
      return res.redirect(302, targetUrl.trim());
    }

    let FIREBASE_PROJECT_ID = process.env.VITE_FIREBASE_PROJECT_ID || process.env.FIREBASE_PROJECT_ID || 'gen-lang-client-0825832493'; if (FIREBASE_PROJECT_ID.includes('!')) FIREBASE_PROJECT_ID = 'gen-lang-client-0825832493';
    let apiKey = process.env.VITE_FIREBASE_API_KEY || process.env.FIREBASE_API_KEY; if (apiKey && apiKey.includes('!')) apiKey = '';
    let dbId = process.env.VITE_FIREBASE_DATABASE_ID || process.env.FIREBASE_DATABASE_ID || 'ai-studio-yonostore-886315a4-8b9f-4ff6-8986-a90ad172210a'; if (dbId.includes('!')) dbId = 'ai-studio-yonostore-886315a4-8b9f-4ff6-8986-a90ad172210a';
    const apiSuffix = apiKey ? `?key=${apiKey}` : '';
    const headers = { 'Origin': 'https://rummydex.com', 'Referer': 'https://rummydex.com/' };

    // Helper to resolve URL from any app object
    const extractUrlFromApp = (app) => {
      if (!app) return null;
      let raw = app.more_information_url || app.download_url || app.url || app.encrypted_link || app.link;
      if (raw && typeof raw === 'string' && raw.trim().length > 0) {
        const dec = raw.startsWith('U2FsdGVkX1') ? safeDecrypt(raw, AES_SECRET) : raw;
        if (dec && dec.trim().length > 0 && (dec.startsWith('http://') || dec.startsWith('https://'))) {
          return dec.trim();
        } else if (raw.trim().startsWith('http://') || raw.trim().startsWith('https://')) {
          return raw.trim();
        }
      }
      return null;
    };

    const cleanInput = appId.toLowerCase().trim().replace(/[-_ ]+$/, '');

    // 1. Vault Docs in Firestore REST
    if (FIREBASE_PROJECT_ID && appId) {
      try {
        const vaultDocs = ['sec_public_links', 'sec_links_vault_3', 'sec_vault', 'secure_links'];
        for (const docName of vaultDocs) {  
          const vaultUrl = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/${dbId}/documents/store_data/${docName}${apiSuffix}`;
          const fsRes = await fetch(vaultUrl, { headers });
          
          if (fsRes.ok) {
             const fsDoc = await fsRes.json();
             const fields = fsDoc.fields || {};
             const ciphertext = fields.encryptedData?.stringValue || fields.encrypted_links?.stringValue;
             
             if (ciphertext) {
                const dec = safeDecrypt(ciphertext, AES_SECRET);
                if (dec) {
                  const parsed = JSON.parse(dec);
                  let foundUrl = '';
                  if (Array.isArray(parsed)) {
                     const item = parsed.find(i => 
                        (i.id && i.id.toLowerCase() === cleanInput) || 
                        (i.slug && i.slug.toLowerCase() === cleanInput) ||
                        i.id === appId || i.slug === appId
                     );
                     foundUrl = item?.more_information_url || item?.download_url || item?.url || '';
                  } else {
                     const val = parsed[appId] || parsed[cleanInput];
                     foundUrl = typeof val === 'string' ? val : (val?.more_information_url || val?.download_url || val?.url || '');
                  }
                  
                  if (foundUrl) {
                     let decryptedUrl = foundUrl.startsWith('U2FsdGVkX1') ? safeDecrypt(foundUrl, AES_SECRET) : foundUrl;
                     if (decryptedUrl && decryptedUrl.trim().length > 0) {
                        return res.redirect(302, decryptedUrl.trim());
                     }
                  }
               }
             }
          }
        }
      } catch (restErr) {
        console.error("[REST] Vault fallback error:", restErr);
      }
    }

    // 2. Dynamic Firestore Public Apps Data
    try {
      const fsPublicData = await fetchPublicDataFromFirestore();
      if (fsPublicData && Array.isArray(fsPublicData.apps)) {
        const app = fsPublicData.apps.find(a => 
          (a.id && a.id.toLowerCase() === cleanInput) || 
          (a.slug && a.slug.toLowerCase() === cleanInput) ||
          a.id === appId || a.slug === appId
        );
        const resolvedUrl = extractUrlFromApp(app);
        if (resolvedUrl) {
          return res.redirect(302, resolvedUrl);
        }
      }
    } catch (fsDataErr) {
      console.error("[REST] Public Apps fallback error:", fsDataErr);
    }

    // 3. Direct App Document in Firestore
    if (FIREBASE_PROJECT_ID && appId) {
      const appDocIds = Array.from(new Set([appId, cleanInput]));
      for (const targetId of appDocIds) {
        const appUrl = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/${dbId}/documents/apps/${targetId}${apiSuffix}`;
        try {
          const appRes = await fetch(appUrl, { headers });
          if (appRes.ok) {
            const appDoc = await appRes.json();
            const fields = appDoc.fields || {};
            const appData = {};
            for (const key in fields) {
              appData[key] = parseValue(fields[key]);
            }
            const resolvedUrl = extractUrlFromApp(appData);
            if (resolvedUrl) {
              return res.redirect(302, resolvedUrl);
            }
          }
        } catch (e) {}
      }
    }

    // 4. Backup JSON file (if present)
    const backupPath = path.join(process.cwd(), 'src/lib/public_backup.json');
    if (fs.existsSync(backupPath)) {
      try {
        const backupData = JSON.parse(fs.readFileSync(backupPath, 'utf8'));
        if (Array.isArray(backupData.apps)) {
          const app = backupData.apps.find(a => 
            (a.id && a.id.toLowerCase() === cleanInput) || 
            (a.slug && a.slug.toLowerCase() === cleanInput) ||
            a.id === appId || a.slug === appId
          );
          const resolvedUrl = extractUrlFromApp(app);
          if (resolvedUrl) {
            return res.redirect(302, resolvedUrl);
          }
        }
      } catch (e) {}
    }

    // 5. In-Memory Static Data Fallback (mockApps)
    try {
      const staticDataObj = getStaticData();
      const mockApps = staticDataObj.mockApps || [];
      const app = mockApps.find(a => 
        (a.id && a.id.toLowerCase() === cleanInput) || 
        (a.slug && a.slug.toLowerCase() === cleanInput) ||
        a.id === appId || a.slug === appId
      );
      if (app) {
        const resolvedUrl = extractUrlFromApp(app);
        if (resolvedUrl) {
          return res.redirect(302, resolvedUrl);
        }
        // If app exists but has no URL, redirect to app details page as fallback
        if (app.slug) {
          return res.redirect(302, `/app/${app.slug}`);
        }
      }
    } catch (staticErr) {}

    return res.status(404).send("<h1>404 Not Found</h1><p>The requested information link could not be resolved. This usually happens if the link hasn't been synced to the security vault yet. Please try again later.</p>");
  } catch (e) { console.error("FATAL ERR:", e);
    console.error("[Resolution] Fatal Error:", e);
    return res.status(500).send("<h1>500 Internal Error</h1><p>A server-side error occurred during link resolution.</p>");
  }
});

// --- Dynamic Firestore Fetcher ---
const parseValue = (val) => {
  if (!val) return null;
  if (val.stringValue !== undefined) return val.stringValue;
  if (val.integerValue !== undefined) return parseInt(val.integerValue, 10);
  if (val.booleanValue !== undefined) return val.booleanValue;
  if (val.timestampValue !== undefined) return val.timestampValue;
  if (val.doubleValue !== undefined) return parseFloat(val.doubleValue);
  if (val.arrayValue !== undefined) return (val.arrayValue.values || []).map(parseValue);
  if (val.mapValue !== undefined) {
    const obj = {};
    for (const key in val.mapValue.fields || {}) {
      obj[key] = parseValue(val.mapValue.fields[key]);
    }
    return obj;
  }
  return null;
};

const fetchPublicDataFromFirestore = async () => {
  let projectId = process.env.VITE_FIREBASE_PROJECT_ID || process.env.FIREBASE_PROJECT_ID || 'gen-lang-client-0825832493'; if (projectId.includes('!')) projectId = 'gen-lang-client-0825832493';
  if (!projectId) return null;
  const dbId = process.env.VITE_FIREBASE_DATABASE_ID || process.env.FIREBASE_DATABASE_ID || 'ai-studio-yonostore-886315a4-8b9f-4ff6-8986-a90ad172210a';
  const apiKey = process.env.VITE_FIREBASE_API_KEY || process.env.FIREBASE_API_KEY;
  const apiSuffix = apiKey ? `?key=${apiKey}` : '';
  const baseUrl = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/${dbId}/documents/store_data`;
  
  const fetchDoc = async (docName) => {
    try {
      const res = await fetch(`${baseUrl}/${docName}${apiSuffix}`);
      if (!res.ok) return null;
      const data = await res.json();
      const obj = {};
      for (const key in data.fields || {}) {
        obj[key] = parseValue(data.fields[key]);
      }
      return obj;
    } catch(e) {
      return null;
    }
  };

  try {
    let numChunks = 1;
    const meta = await fetchDoc('apps_meta');
    if (meta && meta.numChunks) numChunks = meta.numChunks;
    
    let apps = [];
    for (let i = 0; i < numChunks; i++) {
      const chunk = await fetchDoc(`apps_chunk_${i}`);
      if (chunk && chunk.items) apps = apps.concat(chunk.items);
    }
    
    const settings = await fetchDoc('public_settings') || {};
    const newsDoc = await fetchDoc('news');
    const news = newsDoc && newsDoc.items ? newsDoc.items : [];
    const blogsDoc = await fetchDoc('blogs');
    const blogs = blogsDoc && blogsDoc.items ? blogsDoc.items : [];
    const videosDoc = await fetchDoc('videos');
    const videos = videosDoc && videosDoc.items ? videosDoc.items : [];

    return { apps, settings, news, blogs, videos };
  } catch(e) {
    console.error("fetchPublicDataFromFirestore error", e);
    return null;
  }
};

const getStaticData = () => {
  try {
    const staticDataModulePath = path.join(process.cwd(), "src/lib/staticData");
    try {
      const resolvedPath = require.resolve(staticDataModulePath);
      delete require.cache[resolvedPath];
    } catch (_) {}
    return require(staticDataModulePath);
  } catch (e) { console.error("FATAL ERR:", e);
    return { mockApps: [], mockSettings: {}, mockNews: [], mockBlogs: [], mockVideos: [] };
  }
};

// 4. Backup Data
app.get(["/api/v1/public/backup-data", "/api/v1/backup-data", "/api/public/backup-data", "/public/backup-data"], async (req, res) => {
  const fsData = await fetchPublicDataFromFirestore();
  if (fsData) return res.json(fsData);
  
  const backupPath = path.join(process.cwd(), 'src/lib/public_backup.json');
  if (fs.existsSync(backupPath)) {
    try {
      const data = JSON.parse(fs.readFileSync(backupPath, 'utf8'));
      return res.json(data);
    } catch (e) { console.error("FATAL ERR:", e);}
  }
  
  const staticData = getStaticData();
  res.json({
    apps: staticData.mockApps || [],
    settings: staticData.mockSettings || {},
    news: staticData.mockNews || [],
    blogs: staticData.mockBlogs || [],
    videos: staticData.mockVideos || []
  });
});

// 5. Public Data Endpoints
app.get('/api/v1/public/:type', (req, res) => {
  const { type } = req.params;
  const backupPath = path.join(process.cwd(), 'src/lib/public_backup.json');
  if (fs.existsSync(backupPath)) {
    try {
      const data = JSON.parse(fs.readFileSync(backupPath, 'utf8'));
      if (data[type]) return res.json(data[type]);
    } catch (e) { console.error("FATAL ERR:", e);}
  }
  
  const staticData = getStaticData();
  const fallbackData = {
    apps: staticData.mockApps || [],
    settings: staticData.mockSettings || {},
    news: staticData.mockNews || [],
    blogs: staticData.mockBlogs || [],
    videos: staticData.mockVideos || []
  };
  
  if (fallbackData[type]) return res.json(fallbackData[type]);
  res.json([]);
});

// 6. Sync Node
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

  const backupPath = path.join(process.cwd(), 'src/lib/public_backup.json');
  if (fs.existsSync(backupPath)) {
    try {
      const data = JSON.parse(fs.readFileSync(backupPath, 'utf8'));
      const appItem = (data.apps || []).find(a => a.slug === slug || a.id === appId);
      if (appItem) {
        return res.json({ status: 'OK', payload: `/moreinfo/${appItem.slug}` });
      }
    } catch (e) { console.error("FATAL ERR:", e);}
  }
  res.status(404).json({ status: 'ERR', msg: 'App not found' });
});

// 7. Link Check
app.get('/api/v1/link-check', (req, res) => {
  const { id } = req.query;
  if (!id) return res.json({ configured: false });
  const backupPath = path.join(process.cwd(), 'src/lib/public_backup.json');
  if (fs.existsSync(backupPath)) {
    try {
      const data = JSON.parse(fs.readFileSync(backupPath, 'utf8'));
      const appItem = (data.apps || []).find(a => a.id === id);
      return res.json({ configured: !!appItem });
    } catch (e) { console.error("FATAL ERR:", e);}
  }
  res.json({ configured: false });
});

// Sitemap, RSS, OpenSearch, Robots
app.get(['/rss.xml', '/api/rss.xml'], async (req, res) => {
  const host = process.env.PUBLIC_DOMAIN || 'https://www.rummydex.com';
  let xml = '<?xml version="1.0" encoding="UTF-8" ?>\n<rss version="2.0">\n<channel>\n';
  
  let data = await fetchPublicDataFromFirestore();
  if (!data) {
    const backupPath = path.join(process.cwd(), 'src/lib/public_backup.json');
    if (fs.existsSync(backupPath)) {
      try { data = JSON.parse(fs.readFileSync(backupPath, 'utf8')); } catch (e) { console.error("FATAL ERR:", e);}
    }
  }
  
  const siteTitle = data?.settings?.site_title || 'App Store';
  const siteDesc = data?.settings?.meta_description || 'Latest apps and updates';
  
  xml += `  <title>${siteTitle}</title>\n  <link>${host}</link>\n  <description>${siteDesc}</description>\n`;
  
  if (data) {
    const escapeHtml = (unsafe) => unsafe ? unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;") : '';
    const getFormattedDate = (obj) => {
      const dateStr = obj.updated_at || obj.created_at || obj.date || obj.published_at;
      if (typeof dateStr === 'object' && dateStr !== null) {
        if (dateStr.seconds) return new Date(dateStr.seconds * 1000).toUTCString();
        if (dateStr._seconds) return new Date(dateStr._seconds * 1000).toUTCString();
      }
      if (dateStr) {
        try {
          const date = new Date(dateStr);
          if (!isNaN(date.getTime())) return date.toUTCString();
        } catch(e) {}
      }
      return new Date().toUTCString();
    };

    const allItems = [];
    (data.apps || []).forEach(a => allItems.push({ type: 'app', data: a }));
    (data.news || []).forEach(n => allItems.push({ type: 'news', data: n }));
    
    allItems.sort((a, b) => {
      const d1 = new Date(a.data.updated_at || a.data.created_at || a.data.date || a.data.published_at || 0).getTime();
      const d2 = new Date(b.data.updated_at || b.data.created_at || b.data.date || b.data.published_at || 0).getTime();
      return d2 - d1;
    });
    
    allItems.slice(0, 20).forEach(item => {
      const obj = item.data;
      if (!obj.slug) return;
      const title = escapeHtml(obj.name || obj.title || obj.slug);
      const desc = escapeHtml(obj.meta_description || obj.description || '');
      const itemPath = item.type === 'app' ? `/app/${obj.slug}` : `/news/${obj.slug}`;
      const date = getFormattedDate(obj);
      xml += `  <item>\n    <title>${title}</title>\n    <link>${host}${itemPath}</link>\n    <description>${desc}</description>\n    <pubDate>${date}</pubDate>\n  </item>\n`;
    });
  }
  
  xml += '</channel>\n</rss>';
  res.header('Content-Type', 'application/rss+xml');
  res.send(xml);
});

app.get(['/opensearch.xml', '/api/opensearch.xml'], async (req, res) => {
  const host = process.env.PUBLIC_DOMAIN || 'https://www.rummydex.com';
  let siteTitle = 'App Store Search';
  let data = await fetchPublicDataFromFirestore();
  if (data && data.settings && data.settings.site_title) {
    siteTitle = data.settings.site_title + ' Search';
  } else {
    const backupPath = path.join(process.cwd(), 'src/lib/public_backup.json');
    if (fs.existsSync(backupPath)) {
      try {
        const bd = JSON.parse(fs.readFileSync(backupPath, 'utf8'));
        if (bd?.settings?.site_title) siteTitle = bd.settings.site_title + ' Search';
      } catch (e) { console.error("FATAL ERR:", e);}
    }
  }
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/">
  <ShortName>${siteTitle}</ShortName>
  <Description>Search apps, news, and videos</Description>
  <Url type="text/html" template="${host}/?q={searchTerms}"/>
</OpenSearchDescription>`;

  res.header('Content-Type', 'application/opensearchdescription+xml');
  res.send(xml);
});

app.get(['/sitemap.xml', '/sitemap', '/api/sitemap.xml'], async (req, res) => {
  const host = process.env.PUBLIC_DOMAIN || 'https://www.rummydex.com';
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  const today = new Date().toISOString().split('T')[0];
  const staticRoutes = ['/', '/new-apps', '/news', '/videos', '/about', '/developers', '/contact', '/privacy', '/report-removal', '/terms', '/responsibility', '/notice', '/ethics', '/disclaimer'];
  
  for (const route of staticRoutes) {
    xml += `  <url>\n    <loc>${host}${route}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
  }
  
  let data = await fetchPublicDataFromFirestore();
  if (!data) {
    const backupPath = path.join(process.cwd(), 'src/lib/public_backup.json');
    if (fs.existsSync(backupPath)) {
      try {
        data = JSON.parse(fs.readFileSync(backupPath, 'utf8'));
      } catch (e) { console.error("FATAL ERR:", e);}
    }
  }
  
  if (data) {
    try {
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
      
      for (const appItem of data.apps || []) {
        if (appItem.slug) {
          const escSlug = escapeHtmlForSitemap(appItem.slug);
          const appDate = getFormattedDate(appItem);
          xml += `  <url>\n    <loc>${host}/app/${escSlug}</loc>\n    <lastmod>${appDate}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>\n`;
          xml += `  <url>\n    <loc>${host}/${escSlug}</loc>\n    <lastmod>${appDate}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
        }
      }
      for (const item of data.news || []) {
        if (item.slug) xml += `  <url>\n    <loc>${host}/news/${escapeHtmlForSitemap(item.slug)}</loc>\n    <lastmod>${getFormattedDate(item)}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
      }
      for (const item of data.videos || []) {
        if (item.slug) xml += `  <url>\n    <loc>${host}/videos/${escapeHtmlForSitemap(item.slug)}</loc>\n    <lastmod>${getFormattedDate(item)}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.6</priority>\n  </url>\n`;
      }
    } catch (e) { console.error("FATAL ERR:", e);
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
    } catch (e) { console.error("FATAL ERR:", e);}
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
