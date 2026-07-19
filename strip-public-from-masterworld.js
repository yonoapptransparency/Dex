const fs = require('fs');
const path = require('path');

function stripPublic() {
  const appTsxPath = 'src/App.tsx';
  if (!fs.existsSync(appTsxPath)) return;
  
  let content = fs.readFileSync(appTsxPath, 'utf8');
  
  // 1. Force IS_ADMIN_BUILD to be true
  content = content.replace(/const IS_ADMIN_BUILD = [^;]*;/g, 'const IS_ADMIN_BUILD = true;');
  
  // 2. Remove the Public Content return block (everything after __ADMIN_BLOCK_END__)
  // We keep the first return block (the admin one) and remove the rest.
  const adminBlockEndTag = '// __ADMIN_BLOCK_END__';
  const adminBlockEndIndex = content.indexOf(adminBlockEndTag);
  
  if (adminBlockEndIndex !== -1) {
    const headerPart = content.substring(0, adminBlockEndIndex + adminBlockEndTag.length);
    // Find the closing brace of the AppContent function
    // For simplicity, we just keep the admin block and then append a closing brace for the function
    const newContent = headerPart + '\n    return null;\n  }\n\n  return null;\n}\n';
    
    // We also need to keep the helper functions at the bottom (Footer, SyncStatus, etc.)
    // But actually, for masterworld, we can just keep the whole file but hard-redirect the main return.
    
    // Let's do a more surgical replacement: replace the public return block with just null
    content = content.replace(/\/\/ __ADMIN_BLOCK_END__[\s\S]*?return \(\s*<div className="flex flex-col min-h-screen">[\s\S]*?<\/footer>\s*\);\s*\}/g, adminBlockEndTag + '\n\n  return null;\n}');
  }
  
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

  // 4. Delete public-only pages to save space and ensure they aren't "attracted"
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
    'src/pages/Privacy.tsx'
  ];

  publicPages.forEach(file => {
    if (fs.existsSync(file)) {
      // Instead of deleting, replace with a dummy to avoid build errors if imported
      fs.writeFileSync(file, 'import React from "react"; export default function Dummy() { return null; }', 'utf8');
    }
  });

  console.log("Stripped public content and pages from Masterworld (Admin)");
}

stripPublic();
