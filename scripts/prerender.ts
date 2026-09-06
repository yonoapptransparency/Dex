// prerender.ts
import fs from 'fs';
import path from 'path';
import { injectSeoTags } from '../src/seoHelper';
import { fetchStoreData } from '../src/seoHelper';
import { generateAllSitemaps } from '../src/lib/sitemapGenerator';

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

    let data = await fetchStoreData() || { apps: [], news: [], blogs: [], videos: [], settings: {} };
    if (!data.apps || data.apps.length === 0) {
      try {
        const staticJsonPath = path.join(process.cwd(), 'src/lib/staticData.json');
        if (fs.existsSync(staticJsonPath)) {
          const rawStatic = JSON.parse(fs.readFileSync(staticJsonPath, 'utf8'));
          data = {
            apps: rawStatic.apps || rawStatic.mockApps || [],
            news: rawStatic.news || rawStatic.mockNews || [],
            videos: rawStatic.videos || rawStatic.mockVideos || [],
            settings: rawStatic.settings || rawStatic.mockSettings || {}
          };
        }
      } catch (e) {
        console.warn('Fallback staticData load error:', e);
      }
    }
    if (!data.apps) {
      data.apps = [];
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

    // 2. Generate Application Routes (Only for public synced apps)
    const appsToPrerender = (data.apps || []).filter((a: any) => a.slug && a.sync_to_public !== false);
    const BATCH_SIZE = 25;
    for (let i = 0; i < appsToPrerender.length; i += BATCH_SIZE) {
      const batch = appsToPrerender.slice(i, i + BATCH_SIZE);
      await Promise.all(batch.map((app: any) => generateRoute(`/app/${app.slug}`)));
    }

    // 3. Generate News Routes (Only for public synced news)
    for (const newsItem of data.news || []) {
      if (newsItem.slug && newsItem.sync_to_public !== false) {
        await generateRoute(`/news/${newsItem.slug}`);
      }
    }

    // 4. Generate Video Routes
    for (const videoItem of data.videos || []) {
      if (videoItem.slug) {
        await generateRoute(`/videos/${videoItem.slug}`);
      }
    }

    // 5. Generate Other Static Routes
    await generateRoute('/news');
    await generateRoute('/videos');
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

    // 6. Generate Master Sitemap Index (sitemap.xml) and Sub-Sitemaps
    let rawDomain = 'https://www.rummydex.com';
    const host = rawDomain.replace(/\/$/, '');
    const today = new Date().toISOString();

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
            return new Date((dateStr as any).seconds * 1000).toISOString();
          }
          if (typeof dateStr === 'object' && dateStr !== null && (dateStr as any)._seconds) {
            return new Date((dateStr as any)._seconds * 1000).toISOString();
          }
          const date = new Date(dateStr);
          if (!isNaN(date.getTime())) {
            return date.toISOString();
          }
        } catch(e) {}
      }
      return today;
    };

    // Calculate latest dates
    let latestAppDate = today;
    if (data.apps && data.apps.length > 0) {
      let maxTs = 0;
      for (const a of data.apps) {
        const d = new Date(getFormattedDate(a)).getTime();
        if (d > maxTs) maxTs = d;
      }
      if (maxTs > 0) latestAppDate = new Date(maxTs).toISOString();
    }

    let latestNewsDate = today;
    if (data.news && data.news.length > 0) {
      let maxTs = 0;
      for (const n of data.news) {
        const d = new Date(getFormattedDate(n)).getTime();
        if (d > maxTs) maxTs = d;
      }
      if (maxTs > 0) latestNewsDate = new Date(maxTs).toISOString();
    }

    let latestVideoDate = today;
    if (data.videos && data.videos.length > 0) {
      let maxTs = 0;
      for (const v of data.videos) {
        const d = new Date(getFormattedDate(v)).getTime();
        if (d > maxTs) maxTs = d;
      }
      if (maxTs > 0) latestVideoDate = new Date(maxTs).toISOString();
    }

    // 1. One Main Master Sitemap Index: sitemap.xml
    const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${host}/sitemap-apps.xml</loc><lastmod>${latestAppDate}</lastmod></sitemap>
  <sitemap><loc>${host}/sitemap-static.xml</loc><lastmod>${latestAppDate}</lastmod></sitemap>
  <sitemap><loc>${host}/sitemap-news.xml</loc><lastmod>${latestNewsDate}</lastmod></sitemap>
  <sitemap><loc>${host}/sitemap-videos.xml</loc><lastmod>${latestVideoDate}</lastmod></sitemap>
  <sitemap><loc>${host}/sitemap-developers.xml</loc><lastmod>${latestAppDate}</lastmod></sitemap>
</sitemapindex>`;
    fs.writeFileSync(path.join(distPath, 'sitemap.xml'), sitemapIndexXml, 'utf-8');

    // Remove unwanted duplicate/unwanted sitemap files if present in dist
    const unwantedFiles = [
      'sitemap_index.xml', 'sitemap-index.xml', 'sitemapindex.xml',
      'sitemap_apps.xml', 'sitemap-app.xml', 'sitemap_app.xml',
      'sitemap-categories.xml', 'sitemap_categories.xml', 'sitemap-category.xml', 'sitemap_category.xml',
      'sitemap_static.xml', 'sitemap-pages.xml', 'sitemap_pages.xml',
      'sitemap_news.xml', 'sitemap-posts.xml', 'sitemap_posts.xml',
      'sitemap_videos.xml', 'sitemap-video.xml', 'sitemap_video.xml',
      'sitemap_developers.xml', 'sitemap-blogs.xml', 'sitemap_blogs.xml'
    ];
    for (const u of unwantedFiles) {
      const uPath = path.join(distPath, u);
      if (fs.existsSync(uPath)) {
        try { fs.unlinkSync(uPath); } catch (e) {}
      }
      const gzPath = path.join(distPath, `${u}.gz`);
      if (fs.existsSync(gzPath)) {
        try { fs.unlinkSync(gzPath); } catch (e) {}
      }
      const brPath = path.join(distPath, `${u}.br`);
      if (fs.existsSync(brPath)) {
        try { fs.unlinkSync(brPath); } catch (e) {}
      }
    }

    // 2. Generate and write all sub-sitemaps
    const sitemaps = generateAllSitemaps(data, host);
    const publicPath = path.resolve(process.cwd(), 'public');

    for (const [filename, xmlContent] of Object.entries(sitemaps)) {
      fs.writeFileSync(path.join(distPath, filename), xmlContent, 'utf-8');
      if (fs.existsSync(publicPath)) {
        try {
          fs.writeFileSync(path.join(publicPath, filename), xmlContent, 'utf-8');
        } catch (e) {}
      }
    }

    // 3. Clean Robots.txt with only one master sitemap entry
    let robots = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /login/
Disallow: /masterworld/
Disallow: /s/
Disallow: /s/*
Disallow: /dl/
Disallow: /dl/*
Disallow: /out/
Disallow: /out/*
Disallow: /download/
Disallow: /download/*
Disallow: /gateway/
Disallow: /gateway/*
Disallow: /info/
Disallow: /info/*
Disallow: /moreinfo/
Disallow: /moreinfo/*
Disallow: /moredetail/
Disallow: /moredetail/*

Sitemap: ${host}/sitemap.xml
`;
    fs.writeFileSync(path.join(distPath, 'robots.txt'), robots, 'utf-8');
    if (fs.existsSync(publicPath)) {
      try {
        fs.writeFileSync(path.join(publicPath, 'robots.txt'), robots, 'utf-8');
      } catch (e) {}
    }
    console.log('Generated robots.txt and standardized sitemaps in dist and public');

    console.log('Successfully injected static HTML and metadata into dist routes for Firebase Hosting.');
  } catch (err) {
    console.error('Error during prerender:', err);
  }
}

prerender().then(() => {
  process.exit(0);
}).catch((err) => {
  console.error('Prerender error:', err);
  process.exit(0);
});
