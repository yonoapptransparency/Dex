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
  const appId = (req.query.id || req.query.appId || '').toString().trim();
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

  function respondWithUrl(targetUrl) {
    const cleanUrl = targetUrl.trim();
    if (req.query.json === 'true' || (req.headers.accept && req.headers.accept.includes('application/json'))) {
      return res.json({ success: true, url: cleanUrl });
    }
    return res.redirect(302, cleanUrl);
  }

  function fallbackToAppPage(slugOrId) {
    const target = (slugOrId || appId).toString().trim();
    const appPath = `/app/${encodeURIComponent(target)}`;
    if (req.query.json === 'true' || (req.headers.accept && req.headers.accept.includes('application/json'))) {
      return res.json({ success: false, url: appPath });
    }
    return res.redirect(302, appPath);
  }

  try {
    const secret = getAesSecret();
    const rawInput = appId;
    const cleanInput = rawInput.toLowerCase().trim();
    const cleanInputNoSep = cleanInput.replace(/[-_ ]/g, '');
    const cleanInputNoTrailingDash = cleanInput.replace(/[-_ ]+$/, '');

    const isValidTargetUrl = (url) => {
      if (!url || typeof url !== 'string') return false;
      const clean = url.trim().toLowerCase();
      if (clean === '' || clean === 'undefined' || clean === 'null' || clean === '#') return false;
      if (clean.includes('com.rummydex') || clean.includes('com.example')) return false;
      return clean.startsWith('http://') || clean.startsWith('https://');
    };

    const extractAndDecryptUrl = (raw) => {
      if (!raw || typeof raw !== 'string') return null;
      const trimmed = raw.trim();
      if (!trimmed) return null;
      const dec = trimmed.startsWith('U2FsdGVkX1') ? safeDecrypt(trimmed, secret) : trimmed;
      if (isValidTargetUrl(dec)) return dec.trim();
      return null;
    };

    const extractUrlFromApp = (app) => {
      if (!app) return null;
      const candidates = [
        app.more_information_url,
        app.encrypted_link,
        app.download_url,
        app.url,
        app.link,
        app.payload
      ];
      for (const cand of candidates) {
        const url = extractAndDecryptUrl(cand);
        if (url) return url;
      }
      return null;
    };

    // 1. FAST IN-MEMORY VAULT LOOKUP
    const HARDCODED_ENCRYPTED_LINKS = "U2FsdGVkX19aMEo5JIhfa86Wlzc7acf/vMJEBABB99XC1A/1xR932zFIlptK336fa+aHcx6aaZCdhTaqVn3tSQJPu3PwXifjWdxHHJGGSd2f0LlWOlPdTUWB9K7AbVlTvatvaG9EGaK3i21GpGWc/A4R+Ttk9it3erbWt4idjbK8cyYKp6JuOJfqqAI0SydXYKl5LTPwinGICpXU2PSbtuxHQ8tN9a8DxtfU62gud+xCe5weJLOk8bbzs0KtCJAwlRfFPF8KgpSio5/LzmisUmVm2cC8xWvpq5YLsSzgqVs=";
    
    if (HARDCODED_ENCRYPTED_LINKS) {
      const decVault = safeDecrypt(HARDCODED_ENCRYPTED_LINKS, secret);
      if (decVault) {
        try {
          const parsed = JSON.parse(decVault);
          if (Array.isArray(parsed)) {
            const item = parsed.find(i => {
              const iId = (i.id || '').toString().toLowerCase().trim();
              const iSlug = (i.slug || '').toString().toLowerCase().trim();
              const iIdNoSep = iId.replace(/[-_ ]/g, '');
              const iSlugNoSep = iSlug.replace(/[-_ ]/g, '');
              return iId === cleanInput || iSlug === cleanInput || iIdNoSep === cleanInputNoSep || iSlugNoSep === cleanInputNoSep;
            });
            const url = extractUrlFromApp(item);
            if (url) return respondWithUrl(url);
          } else if (typeof parsed === 'object') {
            for (const [k, v] of Object.entries(parsed)) {
              const kLower = k.toLowerCase().trim();
              const kNoSep = kLower.replace(/[-_ ]/g, '');
              if (kLower === cleanInput || kNoSep === cleanInputNoSep) {
                const rawUrl = typeof v === 'string' ? v : (v.more_information_url || v.encrypted_link || v.download_url || v.url);
                const url = extractAndDecryptUrl(rawUrl);
                if (url) return respondWithUrl(url);
              }
            }
          }
        } catch (e) {}
      }
    }

    // 2. IN-MEMORY STATIC DATA LOOKUP (mockApps from staticData.json / public_backup.json)
    const staticData = getStaticData();
    const mockApps = staticData.mockApps || staticData.apps || [];
    
    const matchedApp = mockApps.find(a => {
      const sId = (a.id || '').toString().toLowerCase().trim();
      const sSlug = (a.slug || '').toString().toLowerCase().trim();
      const sIdNoSep = sId.replace(/[-_ ]/g, '');
      const sSlugNoSep = sSlug.replace(/[-_ ]/g, '');
      const sIdClean = sId.replace(/[-_ ]+$/, '');
      const sSlugClean = sSlug.replace(/[-_ ]+$/, '');

      return sId === cleanInput ||
             sSlug === cleanInput ||
             sIdClean === cleanInputNoTrailingDash ||
             sSlugClean === cleanInputNoTrailingDash ||
             sIdNoSep === cleanInputNoSep ||
             sSlugNoSep === cleanInputNoSep;
    });

    if (matchedApp) {
      const url = extractUrlFromApp(matchedApp);
      if (url) return respondWithUrl(url);
      // App exists in catalogue but no active external link set -> redirect smoothly to app detail page
      return fallbackToAppPage(matchedApp.slug || matchedApp.id || appId);
    }

    // 3. FIRESTORE REST FALLBACK
    let FIREBASE_PROJECT_ID = process.env.VITE_FIREBASE_PROJECT_ID || process.env.FIREBASE_PROJECT_ID || 'gen-lang-client-0825832493';
    if (FIREBASE_PROJECT_ID.includes('!')) FIREBASE_PROJECT_ID = 'gen-lang-client-0825832493';
    let apiKey = process.env.VITE_FIREBASE_API_KEY || process.env.FIREBASE_API_KEY;
    if (apiKey && apiKey.includes('!')) apiKey = '';
    let dbId = process.env.VITE_FIREBASE_DATABASE_ID || process.env.FIREBASE_DATABASE_ID || 'ai-studio-yonostore-886315a4-8b9f-4ff6-8986-a90ad172210a';
    if (dbId.includes('!')) dbId = 'ai-studio-yonostore-886315a4-8b9f-4ff6-8986-a90ad172210a';

    const apiSuffix = apiKey ? `?key=${apiKey}` : '';
    const headers = { 'Origin': 'https://rummydex.com', 'Referer': 'https://rummydex.com/' };

    if (FIREBASE_PROJECT_ID) {
      try {
        const vaultDocs = ['sec_public_links', 'sec_links_vault_3', 'sec_vault', 'secure_links'];
        for (const docName of vaultDocs) {  
          const vaultUrl = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/${dbId}/documents/store_data/${docName}${apiSuffix}`;
          const fsRes = await fetch(vaultUrl, { headers }).catch(() => null);
          
          if (fsRes && fsRes.ok) {
             const fsDoc = await fsRes.json();
             const fields = fsDoc.fields || {};
             const ciphertext = fields.encryptedData?.stringValue || fields.encrypted_links?.stringValue;
             
             if (ciphertext) {
                const dec = safeDecrypt(ciphertext, secret);
                if (dec) {
                  const parsed = JSON.parse(dec);
                  let foundRaw = '';
                  if (Array.isArray(parsed)) {
                     const item = parsed.find(i => {
                        const iId = (i.id || '').toString().toLowerCase().trim();
                        const iSlug = (i.slug || '').toString().toLowerCase().trim();
                        return iId === cleanInput || iSlug === cleanInput || iId.replace(/[-_ ]/g, '') === cleanInputNoSep;
                     });
                     foundRaw = item?.more_information_url || item?.encrypted_link || item?.download_url || item?.url || '';
                  } else {
                     const val = parsed[appId] || parsed[cleanInput] || parsed[cleanInputNoSep];
                     foundRaw = typeof val === 'string' ? val : (val?.more_information_url || val?.encrypted_link || val?.download_url || val?.url || '');
                  }
                  
                  const url = extractAndDecryptUrl(foundRaw);
                  if (url) return respondWithUrl(url);
               }
             }
          }
        }
      } catch (restErr) {}
    }

    // 4. ELEGANT RECOVERY: Redirect to app details page instead of 404
    return fallbackToAppPage(cleanInput);

  } catch (e) {
    console.error("[Resolution] Error:", e);
    return fallbackToAppPage(appId);
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
    const pathsToTry = [
      path.join(__dirname, 'staticData.json'),
      path.join(process.cwd(), 'public-api/staticData.json'),
      path.join(process.cwd(), 'src/lib/staticData.json'),
      path.join(process.cwd(), 'src/lib/public_backup.json'),
      path.join(process.cwd(), 'public_backup.json')
    ];
    for (const p of pathsToTry) {
      if (fs.existsSync(p)) {
        const raw = fs.readFileSync(p, 'utf8');
        const parsed = JSON.parse(raw);
        if (parsed && (parsed.mockApps || parsed.apps)) {
          return {
            mockApps: parsed.mockApps || parsed.apps || [],
            mockSettings: parsed.mockSettings || parsed.settings || {},
            mockNews: parsed.mockNews || parsed.news || [],
            mockBlogs: parsed.mockBlogs || parsed.blogs || [],
            mockVideos: parsed.mockVideos || parsed.videos || []
          };
        }
      }
    }
  } catch (e) {
    console.error("Failed to load static JSON:", e);
  }
  return { mockApps: [], mockSettings: {}, mockNews: [], mockBlogs: [], mockVideos: [] };
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
