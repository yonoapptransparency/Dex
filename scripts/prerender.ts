// prerender.ts
process.env.NODE_ENV = 'production';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { injectSeoTags, fetchStoreData, cleanRootContainer } from '../src/seoHelper';
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
    let originalTemplate = cleanRootContainer(fs.readFileSync(indexHtmlPath, 'utf-8'));

    // Inline compiled Vite CSS directly into <head> to eliminate render-blocking CSS network round-trips and prevent FOUC (A1, A2, A10)
    originalTemplate = originalTemplate.replace(
      /<link\s+rel=["']stylesheet["'][^>]*href=["']\/?assets\/([^"']+\.css)["'][^>]*\/?>/gi,
      (fullMatch, cssFileName) => {
        try {
          const cssFilePath = path.join(distPath, 'assets', cssFileName);
          if (fs.existsSync(cssFilePath)) {
            const cssContent = fs.readFileSync(cssFilePath, 'utf-8');
            return `<style id="vite-inline-css">${cssContent}</style>`;
          }
        } catch (_) {}
        return fullMatch;
      }
    );

    // Persist pristine clean SPA template files with empty <div id="root"></div>
    fs.writeFileSync(path.join(distPath, 'template.html'), originalTemplate, 'utf-8');
    fs.writeFileSync(path.join(distPath, 'index.spa.html'), originalTemplate, 'utf-8');

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
    
    // Helper to generate both directory index.html and direct .html file for any route
    const generateRoute = async (routePath: string) => {
      console.log(`Prerendering route: ${routePath}`);
      // Prerender static HTML with clean #root for instantaneous React mount and rich noscript semantic crawler fallback
      const seoRes = await injectSeoTags(originalTemplate, routePath, HOST, '');
      const template = typeof seoRes === 'string' ? seoRes : seoRes.html;
      
      const cleanRoute = (routePath.startsWith('/') ? routePath.substring(1) : routePath).trim().replace(/\/+$/, '');
      const targetDir = path.join(distPath, cleanRoute);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      // 1. Directory index.html (for directory URLs & trailing slashes: /app/example/index.html)
      fs.writeFileSync(path.join(targetDir, 'index.html'), template, 'utf-8');

      // 2. Direct clean .html file (for clean URLs on Vercel Edge CDN: /app/example.html)
      const directHtmlPath = path.join(distPath, `${cleanRoute}.html`);
      const directHtmlDir = path.dirname(directHtmlPath);
      if (!fs.existsSync(directHtmlDir)) {
        fs.mkdirSync(directHtmlDir, { recursive: true });
      }
      fs.writeFileSync(directHtmlPath, template, 'utf-8');
    };

    // 1. Generate Home Route
    const homeRes = await injectSeoTags(originalTemplate, '/', HOST, '');
    let homeTemplate = typeof homeRes === 'string' ? homeRes : homeRes.html;
    fs.writeFileSync(indexHtmlPath, homeTemplate, 'utf-8');

    // 2. Generate Application Routes (Only for public synced apps)
    const appsToPrerender = (data.apps || []).filter((a: any) => a.slug && a.sync_to_public !== false);
    const BATCH_SIZE = 25;
    for (let i = 0; i < appsToPrerender.length; i += BATCH_SIZE) {
      const batch = appsToPrerender.slice(i, i + BATCH_SIZE);
      await Promise.all(batch.map((app: any) => generateRoute(`/app/${app.slug}`)));
    }



    // 3. Generate Category Routes & Catalogs
    await generateRoute('/categories');
    await generateRoute('/new-apps');

    const uniqueCategories = new Set<string>();
    (data.apps || []).forEach((app: any) => {
      const catField = app.category || app.category_name;
      if (typeof catField === 'string' && catField.trim()) {
        catField.split(',').forEach((c: string) => {
          const trimmed = c.trim();
          if (trimmed) uniqueCategories.add(trimmed);
        });
      }
    });

    for (const cat of uniqueCategories) {
      const catSlug = cat.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
      if (catSlug) {
        await generateRoute(`/category/${catSlug}`);
      }
    }

    // 4. Generate News Routes (Only for public synced news)
    for (const newsItem of data.news || []) {
      if (newsItem.slug && newsItem.sync_to_public !== false) {
        await generateRoute(`/news/${newsItem.slug}`);
      }
    }

    // 5. Generate Video Routes
    for (const videoItem of data.videos || []) {
      if (videoItem.slug) {
        await generateRoute(`/videos/${videoItem.slug}`);
      }
    }

    // 6. Generate Core Static Pages
    await generateRoute('/news');
    await generateRoute('/videos');
    await generateRoute('/about');
    await generateRoute('/developers');
    await generateRoute('/developer');
    await generateRoute('/contact');
    await generateRoute('/privacy');
    await generateRoute('/report-removal');
    await generateRoute('/terms');
    await generateRoute('/responsibility');
    await generateRoute('/notice');
    await generateRoute('/ethics');
    await generateRoute('/disclaimer');
    await generateRoute('/faq');
    await generateRoute('/faqs');
    await generateRoute('/safety');

    // 6. Generate Master Sitemap Index (sitemap.xml), Sub-Sitemaps, and GZip (.xml.gz) companions
    const host = 'https://www.rummydex.com';

    // Remove unwanted duplicate/legacy sitemap files if present in dist
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

    const publicPath = path.resolve(process.cwd(), 'public');
    const sitemaps = generateAllSitemaps(data, host);

    for (const [filename, xmlContent] of Object.entries(sitemaps)) {
      const xmlStr = xmlContent as string;
      const gzBuffer = zlib.gzipSync(Buffer.from(xmlStr, 'utf-8'), { level: 9 });

      fs.writeFileSync(path.join(distPath, filename), xmlStr, 'utf-8');
      fs.writeFileSync(path.join(distPath, `${filename}.gz`), gzBuffer);

      if (fs.existsSync(publicPath)) {
        try {
          fs.writeFileSync(path.join(publicPath, filename), xmlStr, 'utf-8');
          fs.writeFileSync(path.join(publicPath, `${filename}.gz`), gzBuffer);
        } catch (e) {}
      }
    }

    // 3. Clean Robots.txt with only one master sitemap entry
    let robots = `User-agent: *
Allow: /
Allow: /api/v1/public/
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

    // 4. Ensure Cloudflare Pages SPA redirects and headers exist in dist
    const redirectsSrc = path.join(publicPath, '_redirects');
    const headersSrc = path.join(publicPath, '_headers');
    if (fs.existsSync(redirectsSrc)) {
      fs.copyFileSync(redirectsSrc, path.join(distPath, '_redirects'));
    } else {
      fs.writeFileSync(path.join(distPath, '_redirects'), '/*    /index.html   200\n', 'utf-8');
    }
    if (fs.existsSync(headersSrc)) {
      fs.copyFileSync(headersSrc, path.join(distPath, '_headers'));
    }

    console.log('Successfully injected static HTML, metadata, and Cloudflare routing into dist.');
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
