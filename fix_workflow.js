const fs = require('fs');
const workflowPath = '.github/workflows/split-sync.yml';
let content = fs.readFileSync(workflowPath, 'utf8');

const targetStr = `            if [ "$IS_PUBLIC" = "true" ]; then
              echo "Cleaning admin files from $REPO_NAME..."
              for file in "\${ADMIN_ONLY_FILES[@]}"; do
                rm -rf "$file"
              done
              # Strip Admin source code completely
              if [ -f "strip-admin-from-dex.js" ]; then
                node strip-admin-from-dex.js
                rm -f strip-admin-from-dex.js
              fi
              # Bulletproof safety net: strip any residual maintenance, test, or config files from root of Dex
              if [ -f "scripts/strip-admin-from-dex.js" ]; then
                node scripts/strip-admin-from-dex.js
              fi
              # Strip Admin source code completely
              if [ -f "strip-admin-from-dex.js" ]; then
                node strip-admin-from-dex.js
                rm -f strip-admin-from-dex.js
              fi
              # Bulletproof safety net: strip any residual maintenance, test, or config files from root of Dex
              find . -maxdepth 1 -name "*.js" ! -name "eslint.config.mjs" ! -name "eslint.config.cjs" ! -name "postcss.config.js" ! -name "tailwind.config.js" -exec rm -f {} +
              find . -maxdepth 1 -name "*.ts" ! -name "vite.config.ts" -exec rm -f {} +
              find . -maxdepth 1 -name "*.sh" -exec rm -f {} +
              find . -maxdepth 1 -name "*.patch" -exec rm -f {} +
              find . -maxdepth 1 -name "*.html" ! -name "index.html" -exec rm -f {} +
            fi`;

const newBlock = `            if [ "$IS_PUBLIC" = "true" ]; then
              echo "Stripping Admin source code from Dex (App.tsx & vite.config.ts)..."
              node -e "
const fs = require('fs');
const appTsx = 'src/App.tsx';
if (fs.existsSync(appTsx)) {
  let content = fs.readFileSync(appTsx, 'utf8');
  content = content.replace(/.*__ADMIN_ENABLED__.*\\n/g, '');
  content = content.replace(/<Route path=\\{?\`\\/\\$\\{adminPath\\}\`\\}[^>]*\\/>/g, '');
  content = content.replace(/<Route path=\\{?\`\\/\\$\\{adminPath\\}\\/login\`\\}[\\s\\S]*?<\\/ErrorBoundary>\\s*\\}\\s*\\/>/g, '');
  content = content.replace(/<Route path=\\{?\`\\/\\$\\{adminPath\\}\\/\\*\`\\}[\\s\\S]*?<\\/ErrorBoundary>\\s*\\}\\s*\\/>/g, '');
  content = content.replace(/const AdminLoginPageLazy = lazyWithRetry[^\\n]*\\n/g, '');
  content = content.replace(/const AdminDashboard = lazyWithRetry[^\\n]*\\n/g, '');
  content = content.replace(/const adminPath = getAdminPath\\(\\);\\n/g, '');
  content = content.replace(/const isAdminPath = location\\.pathname\\.startsWith\\(\`\\/\\$\\{adminPath\\}\`\\);\\n/g, 'const isAdminPath = false;\\n');
  content = content.replace(/&& !isAdminPath/g, '');
  fs.writeFileSync(appTsx, content, 'utf8');
}
const viteConfig = 'vite.config.ts';
if (fs.existsSync(viteConfig)) {
  let vContent = fs.readFileSync(viteConfig, 'utf8');
  vContent = vContent.replace(/__ADMIN_ENABLED__:.*\\n/g, '');
  vContent = vContent.replace(/\\{\\s*find: \\/.*\\/pages\\/AdminDashboard\\$[\\s\\S]*?dummyAdmin\\.ts'\\)\\s*\\},\\s*/g, '');
  vContent = vContent.replace(/\\{\\s*find: \\/.*\\/pages\\/AdminLogin\\$[\\s\\S]*?dummyAdmin\\.ts'\\)\\s*\\},\\s*/g, '');
  vContent = vContent.replace(/\\{\\s*find: \\/.*\\/components\\/AdminLogin\\$[\\s\\S]*?dummyAdmin\\.ts'\\)\\s*\\},\\s*/g, '');
  vContent = vContent.replace(/\\{\\s*find: \\/.*\\/components\\/ClearanceButton\\$[\\s\\S]*?dummyComponent\\.tsx'\\)\\s*\\},\\s*/g, '');
  vContent = vContent.replace(/\\{\\s*find: \\/.*\\/components\\/NewsTab\\$[\\s\\S]*?dummyAdmin\\.ts'\\)\\s*\\},\\s*/g, '');
  vContent = vContent.replace(/\\{\\s*find: \\/.*\\/components\\/AppsTab\\$[\\s\\S]*?dummyAdmin\\.ts'\\)\\s*\\},\\s*/g, '');
  vContent = vContent.replace(/\\{\\s*find: \\/.*\\/components\\/BlogsTab\\$[\\s\\S]*?dummyAdmin\\.ts'\\)\\s*\\},\\s*/g, '');
  vContent = vContent.replace(/\\{\\s*find: \\/.*\\/components\\/SecurityTab\\$[\\s\\S]*?dummyAdmin\\.ts'\\)\\s*\\},\\s*/g, '');
  vContent = vContent.replace(/\\{\\s*find: \\/.*\\/services\\/adminAuthService\\$[\\s\\S]*?dummyAdmin\\.ts'\\)\\s*\\},\\s*/g, '');
  vContent = vContent.replace(/\\{\\s*find: \\/.*\\/lib\\/secureStorage\\$[\\s\\S]*?dummyAdmin\\.ts'\\)\\s*\\},\\s*/g, '');
  fs.writeFileSync(viteConfig, vContent, 'utf8');
}
              "
              
              echo "Cleaning admin files from $REPO_NAME..."
              for file in "\${ADMIN_ONLY_FILES[@]}"; do
                rm -rf "$file"
              done

              # Bulletproof safety net: strip any residual maintenance, test, or config files from root of Dex
              find . -maxdepth 1 -name "*.js" ! -name "eslint.config.mjs" ! -name "eslint.config.cjs" ! -name "postcss.config.js" ! -name "tailwind.config.js" -exec rm -f {} +
              find . -maxdepth 1 -name "*.ts" ! -name "vite.config.ts" -exec rm -f {} +
              find . -maxdepth 1 -name "*.sh" -exec rm -f {} +
              find . -maxdepth 1 -name "*.patch" -exec rm -f {} +
              find . -maxdepth 1 -name "*.html" ! -name "index.html" -exec rm -f {} +
            fi`;

content = content.replace(targetStr, newBlock);
fs.writeFileSync(workflowPath, content, 'utf8');
