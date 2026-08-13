const express = require('express');
const request = require('supertest');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

// Mocking required logic for the route
const crypto = require('crypto');
function generateToken(ip, sid, fp, appId) {
  const payload = `${ip}|${sid}|${fp}|${appId}|${Math.floor(Date.now() / 1000) + 300}`;
  const sig = crypto.createHmac("sha256", "test_secret").update(payload).digest("hex");
  return Buffer.from(`${payload}::${sig}`).toString("base64url");
}

function verifyToken(token, ip, sessionId, fingerprint, appId) {
  return true; // Simplified for test
}

function getAesSecret() {
    return 'test_aes_secret';
}

function safeDecrypt(ciphertext, secret) {
    return ciphertext.replace('U2FsdGVkX1_', ''); // Simple mock
}


app.get("/api/v1/moreinfo-resolve", async (req, res) => {
    const token = (req.query.token || req.query.t);
    const appId = (req.query.id || req.query.appId || '').toString().trim();
    const ip = req.ip;
    const sid = req.cookies?.["__Host-sid"];
    const fingerprint = req.query.fp;

    if (!appId) {
      return res.status(400).send("<h1>400 Bad Request</h1>");
    }

    if (!token || !fingerprint || !verifyToken(token, ip, sid || "", fingerprint, appId)) {
        return res.status(403).send("<h1>403 Forbidden</h1>");
    }

    const ALLOWED_DOMAINS = [
      'play.google.com',
      'res.cloudinary.com',
      'tools.pingdom.com',
      'www.example.com',
      'www.facebook.com',
      'www.instagram.com',
      'www.rummydex.com',
      'rummydex.com',
      'www.youtube.com'
    ];

    function respondWithUrl(targetUrl) {
      const cleanUrl = targetUrl.trim();
      try {
        const urlObj = new URL(cleanUrl);
        const hostname = urlObj.hostname;

        const isAllowed = ALLOWED_DOMAINS.includes(hostname) || hostname.endsWith('.rummydex.com');

        if (isAllowed) {
          return res.redirect(302, cleanUrl);
        } else {
          return fallbackToAppPage(appId);
        }
      } catch (e) {
        return fallbackToAppPage(appId);
      }
    }

    function fallbackToAppPage(slugOrId) {
      const target = (slugOrId || appId).toString().trim();
      const appPath = `/app/${encodeURIComponent(target)}`;
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

        // Mock app catalogue
        const mockApps = [
            {
                id: 'legit-app',
                url: 'https://play.google.com/store/apps/details?id=com.legit.app'
            },
            {
                id: 'malicious-app',
                url: 'https://evil-phishing.com/steal-creds'
            },
            {
                id: 'malformed-app',
                url: 'javascript:alert(1)'
            }
        ];

        const matchedApp = mockApps.find(a => a.id === cleanInput);

        if (matchedApp) {
            const url = extractUrlFromApp(matchedApp);
            if (url) return respondWithUrl(url);
            return fallbackToAppPage(matchedApp.slug || matchedApp.id || appId);
        }

        return fallbackToAppPage(cleanInput);

    } catch (e) {
        return fallbackToAppPage(appId);
    }
});


describe('GET /api/v1/moreinfo-resolve', () => {
    it('should allow redirect to a trusted domain (e.g. play.google.com)', async () => {
        const res = await request(app).get('/api/v1/moreinfo-resolve?appId=legit-app&token=mock&fp=mock');
        expect(res.status).toBe(302);
        expect(res.header.location).toBe('https://play.google.com/store/apps/details?id=com.legit.app');
    });

    it('should fallback to app page for untrusted domain (e.g. evil-phishing.com)', async () => {
        const res = await request(app).get('/api/v1/moreinfo-resolve?appId=malicious-app&token=mock&fp=mock');
        expect(res.status).toBe(302);
        expect(res.header.location).toBe('/app/malicious-app'); // Fallback location
    });

    it('should fallback to app page for malformed URL / XSS attempts', async () => {
        const res = await request(app).get('/api/v1/moreinfo-resolve?appId=malformed-app&token=mock&fp=mock');
        expect(res.status).toBe(302);
        expect(res.header.location).toBe('/app/malformed-app');
    });
});
