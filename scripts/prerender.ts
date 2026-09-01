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

    // 2. Generate Application Routes
    const appsToPrerender = (data.apps || []).filter((a: any) => a.slug);
    const BATCH_SIZE = 25;
    for (let i = 0; i < appsToPrerender.length; i += BATCH_SIZE) {
      const batch = appsToPrerender.slice(i, i + BATCH_SIZE);
      await Promise.all(batch.map((app: any) => generateRoute(`/app/${app.slug}`)));
    }

    // 3. Generate News Routes
    for (const newsItem of data.news || []) {
      if (newsItem.slug) {
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

    // 2. Apps Sub-Sitemap: sitemap-apps.xml
    let appsXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    const sortedApps = [...(data.apps || [])].sort((a: any, b: any) => {
      const ta = new Date(getFormattedDate(a)).getTime();
      const tb = new Date(getFormattedDate(b)).getTime();
      return tb - ta;
    });

    const seenAppUrls = new Set<string>();
    for (const app of sortedApps) {
      const slug = getField(app, 'slug');
      if (slug) {
        const cSlug = cleanSlug(slug);
        const appLoc = `${host}/app/${cSlug}`;
        if (!seenAppUrls.has(appLoc)) {
          seenAppUrls.add(appLoc);
          const appDate = getFormattedDate(app);
          appsXml += `  <url>\n    <loc>${appLoc}</loc>\n    <lastmod>${appDate}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
        }
      }
    }
    appsXml += `</urlset>\n`;
    fs.writeFileSync(path.join(distPath, 'sitemap-apps.xml'), appsXml, 'utf-8');

    // 3. Static & Footer Sub-Sitemap: sitemap-static.xml
    let staticXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    const staticPages = [
      { path: '/', priority: '1.0', changefreq: 'daily' },
      { path: '/news', priority: '0.8', changefreq: 'daily' },
      { path: '/developers', priority: '0.7', changefreq: 'weekly' },
      { path: '/videos', priority: '0.7', changefreq: 'weekly' },
      { path: '/about', priority: '0.5', changefreq: 'monthly' },
      { path: '/contact', priority: '0.5', changefreq: 'monthly' },
      { path: '/privacy', priority: '0.3', changefreq: 'monthly' },
      { path: '/terms', priority: '0.3', changefreq: 'monthly' },
      { path: '/disclaimer', priority: '0.3', changefreq: 'monthly' },
      { path: '/notice', priority: '0.3', changefreq: 'monthly' },
      { path: '/ethics', priority: '0.3', changefreq: 'monthly' },
      { path: '/responsibility', priority: '0.3', changefreq: 'monthly' },
      { path: '/report-removal', priority: '0.3', changefreq: 'monthly' }
    ];
    for (const page of staticPages) {
      staticXml += `  <url>\n    <loc>${host}${page.path === '/' ? '/' : page.path}</loc>\n    <lastmod>${latestAppDate}</lastmod>\n    <changefreq>${page.changefreq}</changefreq>\n    <priority>${page.priority}</priority>\n  </url>\n`;
    }
    staticXml += `</urlset>\n`;
    fs.writeFileSync(path.join(distPath, 'sitemap-static.xml'), staticXml, 'utf-8');

    // 5. News Sub-Sitemap: sitemap-news.xml
    let newsXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    for (const item of data.news || []) {
      const slug = getField(item, 'slug');
      if (slug) {
        const cSlug = cleanSlug(slug);
        const itemDate = getFormattedDate(item);
        newsXml += `  <url>\n    <loc>${host}/news/${cSlug}</loc>\n    <lastmod>${itemDate}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
      }
    }
    newsXml += `</urlset>\n`;
    fs.writeFileSync(path.join(distPath, 'sitemap-news.xml'), newsXml, 'utf-8');

    // 6. Videos Sub-Sitemap: sitemap-videos.xml
    let videosXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    for (const item of data.videos || []) {
      const slug = getField(item, 'slug') || getField(item, 'id');
      if (slug) {
        const cSlug = cleanSlug(slug);
        const itemDate = getFormattedDate(item);
        videosXml += `  <url>\n    <loc>${host}/videos/${cSlug}</loc>\n    <lastmod>${itemDate}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
      }
    }
    videosXml += `</urlset>\n`;
    fs.writeFileSync(path.join(distPath, 'sitemap-videos.xml'), videosXml, 'utf-8');

    // 7. Developers Sub-Sitemap: sitemap-developers.xml
    let developersXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    developersXml += `  <url>\n    <loc>${host}/developers</loc>\n    <lastmod>${latestAppDate}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
    developersXml += `</urlset>\n`;
    fs.writeFileSync(path.join(distPath, 'sitemap-developers.xml'), developersXml, 'utf-8');

    // 8. Clean Robots.txt with only one master sitemap entry
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
    console.log('Generated robots.txt and lightweight sitemaps');

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
