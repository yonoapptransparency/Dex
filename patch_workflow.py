import re

with open('.github/workflows/split-sync.yml', 'r') as f:
    content = f.read()

# Replace Dex block
dex_block = re.search(r'if \[ -f "strip-admin-from-dex\.js" \]; then.*?fi\n\s*rm -f strip-public-from-masterworld\.js', content, re.DOTALL)
if dex_block:
    new_dex = """cat << 'JS_EOF' > strip-admin.js
const fs = require('fs');
const appTsxPath = 'src/App.tsx';
if (fs.existsSync(appTsxPath)) {
  let content = fs.readFileSync(appTsxPath, 'utf8');
  content = content.replace(/.*__ADMIN_ENABLED__.*\\n/g, '');
  content = content.replace(/<Route path=\\{?`\\/\\$\\{adminPath\\}`\\}[^\\n]*\\n?/g, '');
  content = content.replace(/<Route path=\\{?`\\/\\$\\{adminPath\\}\\/login`\\}[\\s\\S]*?<\\/ErrorBoundary>\\s*\\}\\s*\\/>/g, '');
  content = content.replace(/<Route path=\\{?`\\/\\$\\{adminPath\\}\\/\\*`\\}[\\s\\S]*?<\\/ErrorBoundary>\\s*\\}\\s*\\/>/g, '');
  content = content.replace(/const AdminLoginPageLazy = lazyWithRetry[^\\n]*\\n/g, '');
  content = content.replace(/const AdminDashboard = lazyWithRetry[^\\n]*\\n/g, '');
  content = content.replace(/const adminPath = getAdminPath\\(\\);\\n/g, '');
  content = content.replace(/const isAdminPath = location\\.pathname\\.startsWith\\(`\\/\\$\\{adminPath\\}`\\);\\n/g, 'const isAdminPath = false;\\n');
  content = content.replace(/&& !isAdminPath/g, '');
  content = content.replace(/\\/\\/ __ADMIN_BLOCK_START__[\\s\\S]*?\\/\\/ __ADMIN_BLOCK_END__\\n?/g, '');
  fs.writeFileSync(appTsxPath, content, 'utf8');
}
const viteConfigPath = 'vite.config.ts';
if (fs.existsSync(viteConfigPath)) {
  let viteContent = fs.readFileSync(viteConfigPath, 'utf8');
  viteContent = viteContent.replace(/__ADMIN_ENABLED__:.*\\n/g, '');
  viteContent = viteContent.replace(/\\{\\s*find: \\/.*\\/pages\\/AdminDashboard\\$[\\s\\S]*?dummyAdmin\\.ts'\\)\\s*\\},\\s*/g, '');
  viteContent = viteContent.replace(/\\{\\s*find: \\/.*\\/pages\\/AdminLogin\\$[\\s\\S]*?dummyAdmin\\.ts'\\)\\s*\\},\\s*/g, '');
  viteContent = viteContent.replace(/\\{\\s*find: \\/.*\\/components\\/AdminLogin\\$[\\s\\S]*?dummyAdmin\\.ts'\\)\\s*\\},\\s*/g, '');
  viteContent = viteContent.replace(/\\{\\s*find: \\/.*\\/components\\/ClearanceButton\\$[\\s\\S]*?dummyAdmin\\.ts'\\)\\s*\\},\\s*/g, '');
  viteContent = viteContent.replace(/\\{\\s*find: \\/.*\\/components\\/NewsTab\\$[\\s\\S]*?dummyAdmin\\.ts'\\)\\s*\\},\\s*/g, '');
  viteContent = viteContent.replace(/\\{\\s*find: \\/.*\\/components\\/AppsTab\\$[\\s\\S]*?dummyAdmin\\.ts'\\)\\s*\\},\\s*/g, '');
  viteContent = viteContent.replace(/\\{\\s*find: \\/.*\\/components\\/BlogsTab\\$[\\s\\S]*?dummyAdmin\\.ts'\\)\\s*\\},\\s*/g, '');
  viteContent = viteContent.replace(/\\{\\s*find: \\/.*\\/components\\/SecurityTab\\$[\\s\\S]*?dummyAdmin\\.ts'\\)\\s*\\},\\s*/g, '');
  viteContent = viteContent.replace(/\\{\\s*find: \\/.*\\/services\\/adminAuthService\\$[\\s\\S]*?dummyAdmin\\.ts'\\)\\s*\\},\\s*/g, '');
  viteContent = viteContent.replace(/\\{\\s*find: \\/.*\\/lib\\/secureStorage\\$[\\s\\S]*?dummyAdmin\\.ts'\\)\\s*\\},\\s*/g, '');
  fs.writeFileSync(viteConfigPath, viteContent, 'utf8');
}
JS_EOF
              node strip-admin.js
              rm -f strip-admin.js"""
    content = content.replace(dex_block.group(0), new_dex)

# Replace Masterworld block
masterworld_block = re.search(r'if \[ -f "strip-public-from-masterworld\.js" \]; then.*?fi\n\s*rm -f strip-admin-from-dex\.js', content, re.DOTALL)
if masterworld_block:
    new_masterworld = """cat << 'JS_EOF' > strip-public.js
const fs = require('fs');
const appTsxPath = 'src/App.tsx';
if (fs.existsSync(appTsxPath)) {
  let content = fs.readFileSync(appTsxPath, 'utf8');
  content = content.replace(/\\/\\/ __PUBLIC_BLOCK_START__[\\s\\S]*?\\/\\/ __PUBLIC_BLOCK_END__\\n?/g, '');
  content = content.replace(/if \\(IS_ADMIN_BUILD \\|\\| isAdminPath\\) \\{/g, 'if (true) { // Forced Admin Mode for Masterworld');
  const publicPages = ['About', 'AppDetails', 'BlogDetailPage', 'Blogs', 'Contact', 'Developers', 'Disclaimer', 'Ethics', 'GatewayPage', 'Home', 'NewApps', 'NewsDetailPage', 'NewsPage', 'Notice', 'Privacy', 'Responsibility', 'Terms', 'VideoDetailPage', 'VideosPage'];
  publicPages.forEach(page => {
    content = content.replace(new RegExp(`${page}: \\(\\).+import\\('\\.\\/pages\\/${page}'\\),?\\n?`, 'g'), '');
    content = content.replace(new RegExp(`const ${page} = lazyWithRetry\\(pageFactories\\.${page}\\);\\n?`, 'g'), '');
    content = content.replace(new RegExp(`import ${page} from '\\.\\/pages\\/${page}';\\n?`, 'g'), '');
  });
  const publicComponents = ['Ticker', 'SupportWidget', 'GlobalSearch', 'StarRatingFeedback', 'LanguageSelector', 'PublicChatbot', 'WebsiteTitleHero', 'AppsTab', 'BlogsTab', 'UserReviews', 'PlayStoreUI', 'PlayStoreRatingSection', 'AccordionItem', 'FallbackRouteMatcher'];
  publicComponents.forEach(comp => {
    content = content.replace(new RegExp(`import ${comp} from '\\.\\/components\\/${comp}';\\n?`, 'g'), '');
  });
  content = content.replace(/function Header\\(\\)[\\s\\S]*?\\n\\}/g, 'function Header() { return null; }');
  content = content.replace(/function Footer\\(\\)[\\s\\S]*?\\n\\}/g, 'function Footer() { return null; }');
  content = content.replace(/function BottomNav\\(\\)[\\s\\S]*?\\n\\}/g, 'function BottomNav() { return null; }');
  content = content.replace(/function BackToTop\\(\\)[\\s\\S]*?\\n\\}/g, 'function BackToTop() { return null; }');
  content = content.replace(/\\/\\/ __PUBLIC_ROUTES_START__[\\s\\S]*?\\/\\/ __PUBLIC_ROUTES_END__\\n?/g, '');
  fs.writeFileSync(appTsxPath, content, 'utf8');
}
JS_EOF
              node strip-public.js
              rm -f strip-public.js"""
    content = content.replace(masterworld_block.group(0), new_masterworld)

with open('.github/workflows/split-sync.yml', 'w') as f:
    f.write(content)
print("Patched!")
