// prerender.ts
import fs from 'fs';
import path from 'path';
import { injectSeoTags } from '../src/seoHelper';
import { fetchStoreData } from '../src/seoHelper';

async function prerender() {
  console.log('Static Prerendering started...');
  const distPath = path.resolve(process.cwd(), 'dist');
  const indexHtmlPath = path.join(distPath, 'index.html');
  
  if (!fs.existsSync(indexHtmlPath)) {
    console.warn('dist/index.html not found, skipping prerender.');
    return;
  }
  
  try {
    const HOST = process.env.PUBLIC_DOMAIN || process.env.VITE_PUBLIC_DOMAIN || 'https://www.rummydex.com';
    let originalTemplate = fs.readFileSync(indexHtmlPath, 'utf-8');
    
    // Inline CSS to eliminate render-blocking stylesheet requests
    try {
      originalTemplate = originalTemplate.replace(
        /<link\s+rel="stylesheet"[^>]*href="\/assets\/([^"]+\.css)"[^>]*>/i,
        (match, cssFilename) => {
          const cssPath = path.join(distPath, 'assets', cssFilename);
          if (fs.existsSync(cssPath)) {
            const cssContent = fs.readFileSync(cssPath, 'utf-8');
            return `<style id="inlined-css">${cssContent}</style>`;
          }
          return match;
        }
      );
    } catch (e) {
      console.warn('Failed to inline CSS during prerender', e);
    }

    const data = await fetchStoreData() || { apps: [], news: [], blogs: [], videos: [], settings: {} };
    if (!data.apps) {
      data.apps = [];
    }
    if (data.apps.length === 0) {
      throw new Error("BUILD ERROR: Prerender failed because store data apps list is empty! Ensure FIREBASE_SERVICE_ACCOUNT or public_backup.json is present.");
    }
    
    // Helper to generate a file for a specific path
    const generateRoute = async (routePath: string) => {
      console.log(`Prerendering route: ${routePath}`);
      const seoRes = await injectSeoTags(originalTemplate, routePath, HOST);
      const template = typeof seoRes === 'string' ? seoRes : seoRes.html;
      
      const targetDir = path.join(distPath, routePath.startsWith('/') ? routePath.substring(1) : routePath);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      fs.writeFileSync(path.join(targetDir, 'index.html'), template, 'utf-8');
    };

    // 1. Generate Home Route
    const homeRes = await injectSeoTags(originalTemplate, '/', HOST);
    let homeTemplate = typeof homeRes === 'string' ? homeRes : homeRes.html;
    fs.writeFileSync(indexHtmlPath, homeTemplate, 'utf-8');

    // 2. Generate Application Routes
    for (const app of data.apps || []) {
      if (app.slug) {
        await generateRoute(`/${app.slug}`);
      }
    }

    // 3. Generate News Routes
    for (const newsItem of data.news || []) {
      if (newsItem.slug) {
        await generateRoute(`/news/${newsItem.slug}`);
      }
    }

    // 4. Generate Blog Routes
    for (const blogItem of data.blogs || []) {
      if (blogItem.slug) {
        await generateRoute(`/blogs/${blogItem.slug}`);
      }
    }

    // 5. Generate Other Static Routes
    await generateRoute('/news');
    if (data.blogs && data.blogs.length > 0) await generateRoute('/blogs');
    if (data.videos && data.videos.length > 0) await generateRoute('/videos');
    await generateRoute('/about');
    await generateRoute('/developers');
    await generateRoute('/contact');
    await generateRoute('/privacy');
    await generateRoute('/report-removal');
    await generateRoute('/terms');
    await generateRoute('/responsibility');
    await generateRoute('/notice');
    await generateRoute('/ethics');
    await generateRoute('/disclaimer');

    // 6. Generate Sitemap and Robots.txt
    let rawDomain = 'https://www.rummydex.com';
    const host = rawDomain.replace(/\/$/, '');

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    const today = new Date().toISOString().split('T')[0];

    const escapeXml = (unsafe: any) => {
      if (typeof unsafe !== 'string') unsafe = String(unsafe || '');
      return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    };

    const cleanSlug = (slug: string) => {
      if (!slug) return '';
      return escapeXml(encodeURI(slug.trim().replace(/^\/+|\/+$/g, '')));
    };

    const getField = (obj: any, field: string) => obj && obj[field];

    const getFormattedDate = (obj: any) => {
      const dateStr = getField(obj, 'updated_at') || getField(obj, 'created_at') || getField(obj, 'published_at') || getField(obj, 'date');
      if (dateStr) {
        try {
          if (typeof dateStr === 'object' && dateStr !== null && (dateStr as any).seconds) {
            return new Date((dateStr as any).seconds * 1000).toISOString().split('T')[0];
          }
          if (typeof dateStr === 'object' && dateStr !== null && (dateStr as any)._seconds) {
            return new Date((dateStr as any)._seconds * 1000).toISOString().split('T')[0];
          }
          const date = new Date(dateStr);
          if (!isNaN(date.getTime())) {
            return date.toISOString().split('T')[0];
          }
        } catch(e) {}
      }
      return today;
    };

    const seenUrls = new Set<string>();
    const addUrl = (loc: string, lastmod: string, changefreq: string, priority: string) => {
      if (!seenUrls.has(loc)) {
        seenUrls.add(loc);
        xml += `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`;
      }
    };

    // 1. Homepage ONLY
    addUrl(`${host}/`, today, 'daily', '1.0');

    // 2. Apps (canonical app detail URLs) ONLY
    for (const app of data.apps || []) {
      const slug = getField(app, 'slug');
      if (slug) {
        const cSlug = cleanSlug(slug);
        const appDate = getFormattedDate(app);

        addUrl(`${host}/app/${cSlug}`, appDate, 'daily', '0.9');
      }
    }

    xml += `</urlset>\n`;
    fs.writeFileSync(path.join(distPath, 'sitemap.xml'), xml, 'utf-8');
    console.log('Generated sitemap.xml');

    let robots = `User-agent: *
Allow: /$
Allow: /app/
Disallow: /api/
Disallow: /admin/
Disallow: /login/
Disallow: /masterworld/
Disallow: /s/
Disallow: /dl/
Disallow: /out/
Disallow: /download/
Disallow: /gateway/
Disallow: /info/
Disallow: /moreinfo/
Disallow: /moredetail/
Disallow: /news
Disallow: /blogs
Disallow: /blog/
Disallow: /videos
Disallow: /about
Disallow: /contact
Disallow: /developers
Disallow: /privacy
Disallow: /terms
Disallow: /report-removal
Disallow: /responsibility
Disallow: /notice
Disallow: /ethics
Disallow: /disclaimer

Sitemap: ${host}/sitemap.xml
`;
    fs.writeFileSync(path.join(distPath, 'robots.txt'), robots, 'utf-8');
    console.log('Generated robots.txt');

    console.log('Successfully injected static HTML and metadata into dist routes for Firebase Hosting.');
  } catch (err) {
    console.error('Error during prerender:', err);
  }
}

prerender();
