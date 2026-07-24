import express from 'express';
import compression from 'compression';
import crypto from 'crypto';
import CryptoJS from 'crypto-js';

const app = express();
app.use(compression({
  level: 6,
  threshold: 256,
  filter: (req, res) => {
    if (req.headers['x-no-compression']) return false;
    return compression.filter(req, res);
  }
}));
app.use(express.json());

const AES_SECRET = process.env.AES_SECRET || '';

const safeDecrypt = (ciphertext: string, secret: string) => {
  if (!ciphertext) return '';
  try {
    const bytes = CryptoJS.AES.decrypt(ciphertext, secret);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (e) {
    return '';
  }
};

app.get(["/api/v1/public/backup-data", "/api/v1/backup-data", "/api/public/backup-data", "/public/backup-data"], async (req, res) => {
  try {
    const fs = require('fs');
    const path = require('path');
    const publicBackupPath = path.join(process.cwd(), 'src/lib/public_backup.json');
    if (fs.existsSync(publicBackupPath)) {
      try {
        const backup = JSON.parse(fs.readFileSync(publicBackupPath, 'utf8'));
        return res.json({
          apps: backup.apps || [],
          settings: backup.settings || {},
          news: backup.news || [],
          blogs: backup.blogs || [],
          videos: backup.videos || []
        });
      } catch (e) {}
    }
    const staticData = require('../src/lib/staticData');
    return res.json({
      apps: staticData.mockApps || [],
      settings: staticData.mockSettings || {},
      news: staticData.mockNews || [],
      blogs: staticData.mockBlogs || [],
      videos: staticData.mockVideos || []
    });
  } catch (err) {
    return res.status(200).json({ apps: [], settings: {}, news: [], blogs: [], videos: [] });
  }
});

app.get("/api/v1/moreinfo-resolve", async (req, res) => {
  try {
    const token = (req.query.token || req.query.t) as string;
    const appId = req.query.id as string;
    
    if (!token || !appId) {
      if (req.query.json === 'true') return res.status(400).json({ error: "Verification transmission tokens or App ID were omitted." });
      return res.status(400).send("<h1>400 Bad Request</h1><p>Verification transmission tokens or App ID were omitted.</p>");
    }

    let targetUrl = '';
    
    try {
      let matchEncrypted = "";
      const vaultPath = require('path').join(process.cwd(), 'src/lib/secureVault.ts');
      if (require('fs').existsSync(vaultPath)) {
        const vaultContent = require('fs').readFileSync(vaultPath, 'utf8');
        const match = vaultContent.match(/export const ENCRYPTED_LINKS = "([^"]+)";/);
        if (match && match[1]) matchEncrypted = match[1];
      }

      if (matchEncrypted) {
          let dec = safeDecrypt(matchEncrypted, AES_SECRET);
          if (dec) {
             const parsed = JSON.parse(dec);
             let encryptedUrl = '';
             if (parsed && Array.isArray(parsed)) {
                const matchItem = parsed.find((item: any) => item && item.id === appId);
                if (matchItem) {
                   encryptedUrl = typeof matchItem.url === 'string' ? matchItem.url : (typeof matchItem.more_information_url === 'string' ? matchItem.more_information_url : '');
                }
             } else if (parsed && typeof parsed === 'object') {
                const val = parsed[appId];
                if (typeof val === 'string') {
                  encryptedUrl = val;
                } else if (val && typeof val === 'object') {
                  encryptedUrl = typeof val.url === 'string' ? val.url : (typeof val.more_information_url === 'string' ? val.more_information_url : '');
                }
             }
             
             if (encryptedUrl && typeof encryptedUrl === 'string') {
                if (encryptedUrl.startsWith('U2FsdGVkX1')) {
                   targetUrl = safeDecrypt(encryptedUrl, AES_SECRET);
                } else {
                   targetUrl = encryptedUrl;
                }
             }
          }
      }
    } catch (e) {
      console.warn("Vault decryption failed", e);
    }
    
    if (!targetUrl || !targetUrl.startsWith('http')) {
      if (req.query.json === 'true') return res.status(404).json({ error: "App ID not found or target URL not available." });
      return res.status(404).send("<h1>404 Not Found</h1><p>Target application details not found.</p>");
    }

    res.redirect(302, targetUrl);

  } catch (error) {
    if (req.query.json === 'true') return res.status(500).json({ error: "Internal Server Error" });
    return res.status(500).send("<h1>500 Internal Server Error</h1><p>Failed to resolve destination.</p>");
  }
});

app.get("/api/v1/link-check", async (req, res) => {
  const appId = req.query.id as string;
  if (!appId) return res.json({ configured: false });
  try {
      let matchEncrypted = "";
      const vaultPath = require('path').join(process.cwd(), 'src/lib/secureVault.ts');
      if (require('fs').existsSync(vaultPath)) {
        const vaultContent = require('fs').readFileSync(vaultPath, 'utf8');
        const match = vaultContent.match(/export const ENCRYPTED_LINKS = "([^"]+)";/);
        if (match && match[1]) matchEncrypted = match[1];
      }

      if (matchEncrypted) {
          let dec = safeDecrypt(matchEncrypted, AES_SECRET);
          if (dec) {
             const parsed = JSON.parse(dec);
             let encryptedUrl = '';
             if (parsed && Array.isArray(parsed)) {
                const matchItem = parsed.find((item: any) => item && item.id === appId);
                if (matchItem) {
                   encryptedUrl = typeof matchItem.url === 'string' ? matchItem.url : (typeof matchItem.more_information_url === 'string' ? matchItem.more_information_url : '');
                }
             } else if (parsed && typeof parsed === 'object') {
                const val = parsed[appId];
                if (typeof val === 'string') {
                  encryptedUrl = val;
                } else if (val && typeof val === 'object') {
                  encryptedUrl = typeof val.url === 'string' ? val.url : (typeof val.more_information_url === 'string' ? val.more_information_url : '');
                }
             }
             if (encryptedUrl) {
                return res.json({ configured: true });
             }
          }
      }
  } catch(e){}
  return res.json({ configured: false });
});

export default app;
