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
    const originalTemplate = fs.readFileSync(indexHtmlPath, 'utf-8');
    const data = await fetchStoreData() || { apps: [], news: [], blogs: [], videos: [], settings: {} };
    if (!data.apps) {
      data.apps = [];
    }
    if (data.apps.length === 0) {
      console.warn("No apps found in store data. Prerendering static pages...");
    }
    
    // Helper to generate a file for a specific path
    const generateRoute = async (routePath: string) => {
      console.log(`Prerendering route: ${routePath}`);
      // Don't remove og:url for specific routes since we want the exact share URL
      const seoRes = await injectSeoTags(originalTemplate, routePath, 'https://rummydex.com');
      const template = typeof seoRes === 'string' ? seoRes : seoRes.html;
      
      const targetDir = path.join(distPath, routePath.startsWith('/') ? routePath.substring(1) : routePath);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      fs.writeFileSync(path.join(targetDir, 'index.html'), template, 'utf-8');
    };

    // 1. Generate Home Route
    const homeRes = await injectSeoTags(originalTemplate, '/', 'https://rummydex.com');
    let homeTemplate = typeof homeRes === 'string' ? homeRes : homeRes.html;
    homeTemplate = homeTemplate.replace(/<meta property=["']og:url["'] [^>]*\/>/gi, '');
    fs.writeFileSync(indexHtmlPath, homeTemplate, 'utf-8');

    // 2. Generate Application Routes
    const appRoutePromises = [];
    for (const app of data.apps || []) {
      if (app.slug) {
        appRoutePromises.push(
          generateRoute(`/app/${app.slug}`),
          generateRoute(`/info/${app.slug}`),
          generateRoute(`/moreinfo/${app.slug}`),
          generateRoute(`/moredetail/${app.slug}`)
        );
      }
    }
    await Promise.all(appRoutePromises);

    // 3. Generate News Routes
    const newsRoutePromises = [];
    for (const newsItem of data.news || []) {
      if (newsItem.slug) {
        newsRoutePromises.push(generateRoute(`/news/${newsItem.slug}`));
      }
    }
    await Promise.all(newsRoutePromises);

    // 5. Generate Other Static Routes
    const staticRoutePromises = [
      generateRoute('/new-apps'),
      generateRoute('/news'),
      generateRoute('/videos'),
      generateRoute('/about'),
      generateRoute('/developers'),
      generateRoute('/contact'),
      generateRoute('/privacy'),
      generateRoute('/report-removal'),
      generateRoute('/terms'),
      generateRoute('/responsibility'),
      generateRoute('/notice'),
      generateRoute('/ethics'),
      generateRoute('/disclaimer'),
      generateRoute('/submit-app')
    ];
    await Promise.all(staticRoutePromises);

    
    // 6. Generate Sitemap and Robots.txt
    const baseUrlFallback = process.env.PUBLIC_DOMAIN || 'https://www.rummydex.com';
    const host = baseUrlFallback;

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // Static routes
    const today = new Date().toISOString().split('T')[0]; // Dynamic today instead of fixed date
    const staticRoutes = [
      { path: '/', priority: '1.0', changefreq: 'daily' },
      { path: '/new-apps', priority: '0.8', changefreq: 'daily' },
      { path: '/news', priority: '0.8', changefreq: 'daily' },
      { path: '/videos', priority: '0.8', changefreq: 'daily' },
      { path: '/about', priority: '0.5', changefreq: 'weekly' },
      { path: '/developers', priority: '0.5', changefreq: 'weekly' },
      { path: '/contact', priority: '0.5', changefreq: 'weekly' },
      { path: '/privacy', priority: '0.3', changefreq: 'weekly' },
      { path: '/report-removal', priority: '0.3', changefreq: 'weekly' },
      { path: '/terms', priority: '0.3', changefreq: 'weekly' },
      { path: '/responsibility', priority: '0.3', changefreq: 'weekly' },
      { path: '/notice', priority: '0.3', changefreq: 'weekly' },
      { path: '/ethics', priority: '0.3', changefreq: 'weekly' },
      { path: '/disclaimer', priority: '0.3', changefreq: 'weekly' }
    ];

    for (const route of staticRoutes) {
      xml += `  <url>\n    <loc>${host}${route.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${route.changefreq}</changefreq>\n    <priority>${route.priority}</priority>\n  </url>\n`;
    }

    const getFormattedDate = (obj: any) => {
      const dateStr = getField(obj, 'updated_at') || getField(obj, 'created_at');
      if (dateStr) {
        try {
          // Check if it's a Firestore Timestamp-like object
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

    const escapeHtmlForSitemap = (unsafe) => {
      if (!unsafe) return '';
      return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
    };

    const getField = (obj, field) => obj && obj[field];

    const isExternalCanonical = (url?: string) => {
      if (!url || typeof url !== 'string') return false;
      const trimmed = url.trim().toLowerCase();
      if (!trimmed) return false;
      if (trimmed.startsWith('/') || trimmed.includes('rummydex.com')) return false;
      if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) return true;
      return false;
    };

    for (const app of data.apps || []) {
      const slug = getField(app, 'slug');
      if (slug) {
        xml += `  <url>\n    <loc>${host}/app/${escapeHtmlForSitemap(slug)}</loc>\n    <lastmod>${getFormattedDate(app)}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
      }
    }

    for (const newsItem of data.news || []) {
      const slug = getField(newsItem, 'slug');
      if (slug) {
        xml += `  <url>\n    <loc>${host}/news/${escapeHtmlForSitemap(slug)}</loc>\n    <lastmod>${getFormattedDate(newsItem)}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
      }
    }

    for (const video of data.videos || []) {
      const slug = getField(video, 'slug');
      if (slug) {
        xml += `  <url>\n    <loc>${host}/videos/${escapeHtmlForSitemap(slug)}</loc>\n    <lastmod>${getFormattedDate(video)}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.6</priority>\n  </url>\n`;
      }
    }

    xml += `</urlset>\n`;
    fs.writeFileSync(path.join(distPath, 'sitemap.xml'), xml, 'utf-8');
    console.log('Generated sitemap.xml');

    let robots = `User-agent: *\nAllow: /\n\nSitemap: ${host}/sitemap.xml\n`;
    if (data.settings && data.settings.robots_txt) {
      robots = data.settings.robots_txt;
      if (!robots.includes('Sitemap:')) {
        robots += `\nSitemap: ${host}/sitemap.xml\n`;
      }
    }
    fs.writeFileSync(path.join(distPath, 'robots.txt'), robots, 'utf-8');
    console.log('Generated robots.txt');

    console.log('Successfully injected static HTML and metadata into dist routes for Firebase Hosting.');
  } catch (err) {
    console.error('Error during prerender:', err);
  }
}

prerender();
