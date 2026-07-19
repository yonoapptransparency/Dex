const fs = require('fs');
const path = require('path');

function stripPublic() {
  const appTsxPath = 'src/App.tsx';
  if (!fs.existsSync(appTsxPath)) return;
  
  let content = fs.readFileSync(appTsxPath, 'utf8');
  
  // 1. Force IS_ADMIN_BUILD to be true
  content = content.replace(/const IS_ADMIN_BUILD = [^;]*;/g, 'const IS_ADMIN_BUILD = true;');
  
  // 2. Remove the Public Content return block
  content = content.replace(/\/\/ __PUBLIC_BLOCK_START__[\s\S]*?\/\/ __PUBLIC_BLOCK_END__/g, '// Public block removed for Admin build\n  return null;');
  
  fs.writeFileSync(appTsxPath, content, 'utf8');
  
  // 3. Wipe static data to ensure no accidental public content leakage
  const staticDataPath = 'src/lib/staticData.ts';
  if (fs.existsSync(staticDataPath)) {
    fs.writeFileSync(staticDataPath, `
export const mockApps = [];
export const mockSettings = {};
export const mockNews = [];
export const mockBlogs = [];
export const mockVideos = [];
`, 'utf8');
  }

  // 4. Delete public-only pages and components
  const publicPages = [
    'src/pages/Home.tsx',
    'src/pages/NewApps.tsx',
    'src/pages/NewsPage.tsx',
    'src/pages/VideosPage.tsx',
    'src/pages/Blogs.tsx',
    'src/pages/About.tsx',
    'src/pages/Contact.tsx',
    'src/pages/Developers.tsx',
    'src/pages/Ethics.tsx',
    'src/pages/Disclaimer.tsx',
    'src/pages/Notice.tsx',
    'src/pages/Responsibility.tsx',
    'src/pages/Terms.tsx',
    'src/pages/Privacy.tsx',
    'src/pages/AppDetails.tsx',
    'src/pages/NewsDetailPage.tsx',
    'src/pages/VideoDetailPage.tsx',
    'src/pages/BlogDetailPage.tsx',
    'src/pages/GatewayPage.tsx'
  ];

  const publicComponents = [
    'src/components/PlayStoreRatingSection.tsx',
    'src/components/PlayStoreUI.tsx',
    'src/components/PublicChatbot.tsx',
    'src/components/StarRatingFeedback.tsx',
    'src/components/UserReviews.tsx',
    'src/components/WebsiteTitleHero.tsx',
    'src/components/Ticker.tsx',
    'src/components/LanguageSelector.tsx',
    'src/components/GlobalSearch.tsx',
    'src/components/SupportWidget.tsx'
  ];

  [...publicPages, ...publicComponents].forEach(file => {
    if (fs.existsSync(file)) {
      fs.writeFileSync(file, 'import React from "react"; export default function Dummy() { return null; }', 'utf8');
    }
  });

  // 5. Delete the public folder - Admin doesn't need website banners
  const publicDir = 'public';
  if (fs.existsSync(publicDir)) {
    const deleteFolderRecursive = (path) => {
      if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach((file) => {
          const curPath = `${path}/${file}`;
          if (fs.lstatSync(curPath).isDirectory()) {
            deleteFolderRecursive(curPath);
          } else {
            fs.unlinkSync(curPath);
          }
        });
        fs.rmdirSync(path);
      }
    };
    deleteFolderRecursive(publicDir);
    fs.mkdirSync(publicDir);
    fs.writeFileSync(path.join(publicDir, 'robots.txt'), 'User-agent: *\nDisallow: /', 'utf8');
  }

  // 6. Delete other non-essential folders
  ['scripts', 'app'].forEach(dir => {
    if (fs.existsSync(dir)) {
      const deleteFolderRecursive = (p) => {
        if (fs.existsSync(p)) {
          fs.readdirSync(p).forEach((file) => {
            const curPath = `${p}/${file}`;
            if (fs.lstatSync(curPath).isDirectory()) {
              deleteFolderRecursive(curPath);
            } else {
              fs.unlinkSync(curPath);
            }
          });
          fs.rmdirSync(p);
        }
      };
      deleteFolderRecursive(dir);
    }
  });

  // 7. Ensure vercel.json is optimized for Admin (API + Dashboard)
  const vercelPath = 'vercel.json';
  if (fs.existsSync(vercelPath)) {
    const vercelConfig = {
      "version": 2,
      "outputDirectory": "dist",
      "buildCommand": "npm run build",
      "cleanUrls": true,
      "functions": {
        "api/**/*.js": {
          "includeFiles": "{src/**,firebase-applet-config.json,dist/**}"
        }
      },
      "rewrites": [
        { "source": "/api/(.*)", "destination": "/api/index" },
        { "source": "/(.*)", "destination": "/index.html" }
      ]
    };
    fs.writeFileSync(vercelPath, JSON.stringify(vercelConfig, null, 2), 'utf8');
  }

  console.log("Stripped public content, assets, and pages from Masterworld (Admin)");
}

stripPublic();
