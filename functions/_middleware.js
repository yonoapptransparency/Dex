/**
 * Cloudflare Pages Edge Middleware (Public Dex Deployment Only)
 *
 * Responsibilities:
 * 1. Canonical host consolidation (rummydex.com -> https://www.rummydex.com) and trailing-slash normalization
 * 2. Edge crawler/bot 403 shield on sensitive gateway routes (/moreinfo/*, /gateway/*, /download/*, /info/*, /moredetail/*, /s/*, /dl/*, /out/*)
 * 3. Lightweight SPA delivery (/index.spa.html, ~231KB vs 456KB homepage SSR) with strict no-store, noindex, no-referrer headers for real users on /moreinfo/* and /safety*
 * 4. Genuine HTTP 404 Not Found (with X-Robots-Tag: noindex) for non-existent URLs — eliminating Soft-404 SEO poisoning
 * 5. Canonical 301 resolution on 404 misses for fuzzy app aliases (/app/:alias) and root-level slugs (/:slug) via the compact ~8KB edgeRouteManifest.json
 */

import { resolveAppSlug } from '../src/lib/slugResolver';
import edgeRouteManifest from '../src/lib/edgeRouteManifest.json';

const CANONICAL_ORIGIN = 'https://www.rummydex.com';

const BASE_SECURITY_HEADERS = {
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
  'Content-Security-Policy':
    "default-src 'self'; script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob: https://res.cloudinary.com https://i.ytimg.com https://img.youtube.com https://*.googleusercontent.com https://images.unsplash.com https://challenges.cloudflare.com; media-src 'self' blob: https://res.cloudinary.com; frame-src 'self' https://challenges.cloudflare.com https://www.youtube-nocookie.com https://www.youtube.com; connect-src 'self' https://challenges.cloudflare.com https://res.cloudinary.com https://firestore.googleapis.com https://*.firebaseio.com https://identitytoolkit.googleapis.com https://securetoken.googleapis.com https://cloudflareinsights.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'; upgrade-insecure-requests"
};

// Identical crawler signature as server.ts (word-bounded \bbot\b ensures CUBOT mobile devices are never blocked)
const BOT_CRAWLER_RE =
  /googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot|sogou|exabot|facebot|facebookexternalhit|ia_archiver|semrushbot|ahrefsbot|mj12bot|dotbot|bytespider|applebot|gptbot|chatgpt-user|claudebot|perplexitybot|ccbot|petalbot|criteobot|\bbot\b|crawler|spider|scraper|headlesschrome/i;

const PROBE_PATH_RE =
  /\.(php|env|yml|yaml|ini|conf|log|sql|tar|zip|bak|git|rsa)$/i;

const STATIC_ASSET_EXT_RE =
  /\.(js|mjs|css|json|png|jpg|jpeg|gif|svg|ico|webp|woff|woff2|ttf|eot|map|webmanifest|txt|xml|gz|br)$/i;

const GATEWAY_PREFIXES = [
  '/moreinfo',
  '/gateway',
  '/download',
  '/info',
  '/moredetail',
  '/s',
  '/dl',
  '/out'
];

const SPA_GATEWAY_PREFIXES = [
  '/moreinfo',
  '/gateway',
  '/download',
  '/info',
  '/moredetail'
];

const SPA_SAFETY_PATHS = new Set(['/safety', '/safety-status']);

const RESERVED_ROOT_SEGMENTS = new Set([
  '',
  'new-apps',
  'news',
  'videos',
  'video',
  'developers',
  'developer',
  'about',
  'contact',
  'privacy',
  'terms',
  'disclaimer',
  'notice',
  'ethics',
  'responsibility',
  'report-removal',
  'faq',
  'faqs',
  'safety',
  'safety-status',
  'moreinfo',
  'info',
  'gateway',
  'download',
  'moredetail',
  's',
  'dl',
  'out',
  'category',
  'categories',
  'app',
  'apps',
  'game',
  'apk',
  'blog',
  'blogs',
  'admin',
  'login',
  'masterworld',
  'wp-admin',
  'dashboard',
  'panel',
  '404',
  '404.html',
  'index.html',
  'index.spa.html',
  'template.html'
]);

const MANIFEST_APPS = Array.isArray(edgeRouteManifest?.apps) ? edgeRouteManifest.apps : [];
const MANIFEST_NEWS_SET = new Set(Array.isArray(edgeRouteManifest?.news) ? edgeRouteManifest.news : []);
const MANIFEST_VIDEO_SET = new Set(Array.isArray(edgeRouteManifest?.videos) ? edgeRouteManifest.videos : []);
const MANIFEST_CATEGORY_SET = new Set(Array.isArray(edgeRouteManifest?.categories) ? edgeRouteManifest.categories : []);

const FALLBACK_404_HTML = `<!doctype html>
<html lang="en-IN">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>404 - Page Not Found</title>
    <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
    <meta name="description" content="The requested page could not be found." />
    <style>
      body{margin:0;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#090d16;color:#f8fafc;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:24px;box-sizing:border-box}
      .card{max-width:480px;width:100%;text-align:center;padding:40px 24px;border-radius:24px;background:#111726;border:1px solid rgba(255,255,255,0.08);box-shadow:0 20px 40px rgba(0,0,0,0.4)}
      h1{margin:0 0 12px;font-size:3.5rem;font-weight:900;background:linear-gradient(135deg,#38bdf8,#818cf8);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
      p{margin:0 0 24px;color:#94a3b8;font-size:1rem;line-height:1.6}
      a{display:inline-block;padding:12px 24px;background:#2563eb;color:#fff;border-radius:12px;text-decoration:none;font-weight:700;font-size:0.95rem;transition:background 0.2s}
      a:hover{background:#1d4ed8}
    </style>
  </head>
  <body>
    <div class="card">
      <h1>404</h1>
      <p>The application or article you requested does not exist or may have been moved.</p>
      <a href="/">Return to Home</a>
    </div>
  </body>
</html>`;

function matchesPrefix(pathLower, prefixes) {
  for (let i = 0; i < prefixes.length; i++) {
    const p = prefixes[i];
    if (pathLower === p || pathLower.startsWith(p + '/')) {
      return true;
    }
  }
  return false;
}

/**
 * Normalizes a pathname so it always begins with a single '/' and never allows '//evil.com' open redirects.
 */
function safeSingleSlashPath(rawPath) {
  const cleaned = String(rawPath || '/').replace(/[\r\n\\]/g, '').replace(/^\/+/, '/');
  return cleaned.startsWith('/') ? cleaned : '/' + cleaned;
}

function buildSecurityHeaders(extra = {}, isNoReferrer = false) {
  return new Headers({
    ...BASE_SECURITY_HEADERS,
    'Referrer-Policy': isNoReferrer ? 'no-referrer' : 'strict-origin-when-cross-origin',
    ...extra
  });
}

function permanentRedirect(targetUrl) {
  const headers = buildSecurityHeaders({
    Location: targetUrl,
    'Cache-Control': 'public, max-age=3600'
  });
  return new Response(null, { status: 301, headers });
}

function plainTextResponse(status, body, extraHeaders = {}, isNoReferrer = false, isHead = false) {
  const headers = buildSecurityHeaders(
    {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
      'X-Robots-Tag': 'noindex, nofollow, noarchive, nosnippet',
      ...extraHeaders
    },
    isNoReferrer
  );
  return new Response(isHead ? null : body, { status, headers });
}

function resolveCanonicalMissRedirect(rawPath, pathLower, search) {
  // 1. Fuzzy or alias /app/:alias -> canonical /app/:canonicalSlug
  if (pathLower.startsWith('/app/')) {
    const requestedSlug = rawPath.slice('/app/'.length).replace(/^\/+|\/+$/g, '');
    if (requestedSlug && !requestedSlug.includes('/')) {
      const resolvedApp = resolveAppSlug(requestedSlug, MANIFEST_APPS);
      const canonicalSlug = resolvedApp
        ? String(resolvedApp.slug || resolvedApp.id || '').trim().replace(/^\/+|\/+$/g, '')
        : '';
      if (canonicalSlug && canonicalSlug.toLowerCase() !== requestedSlug.toLowerCase()) {
        return `/app/${canonicalSlug}${search}`;
      }
    }
    return null;
  }

  // 2. Single-segment root slug (e.g. /yono-rummy -> /app/yono-rummy, /rummy -> /category/rummy)
  const cleanSegment = rawPath.replace(/^\/+|\/+$/g, '').toLowerCase();
  if (
    !cleanSegment ||
    cleanSegment.includes('/') ||
    RESERVED_ROOT_SEGMENTS.has(cleanSegment) ||
    STATIC_ASSET_EXT_RE.test(cleanSegment)
  ) {
    return null;
  }

  const resolvedApp = resolveAppSlug(cleanSegment, MANIFEST_APPS);
  if (resolvedApp && (resolvedApp.slug || resolvedApp.id)) {
    const canonicalSlug = String(resolvedApp.slug || resolvedApp.id).trim().replace(/^\/+|\/+$/g, '');
    if (canonicalSlug) return `/app/${canonicalSlug}${search}`;
  }

  if (MANIFEST_NEWS_SET.has(cleanSegment)) {
    return `/news/${cleanSegment}${search}`;
  }

  if (MANIFEST_VIDEO_SET.has(cleanSegment)) {
    return `/videos/${cleanSegment}${search}`;
  }

  if (MANIFEST_CATEGORY_SET.has(cleanSegment)) {
    return `/category/${cleanSegment}${search}`;
  }

  return null;
}

export async function onRequest(context) {
  const { request, env, next } = context;
  const url = new URL(request.url);
  const rawPathname = url.pathname || '/';
  const pathLower = rawPathname.toLowerCase();
  const method = (request.method || 'GET').toUpperCase();
  const isHead = method === 'HEAD';

  // 0. Zero-latency pass-through for API Functions and Admin deployments
  if (pathLower === '/api' || pathLower.startsWith('/api/')) {
    return next();
  }
  const hostnameLower = url.hostname.toLowerCase();
  if (hostnameLower === 'admin.rummydex.com' || hostnameLower.includes('masterworld')) {
    return next();
  }

  // Only inspect GET/HEAD navigation/asset requests; pass other methods cleanly to next()
  if (method !== 'GET' && method !== 'HEAD') {
    return next();
  }

  // 1. Canonical apex -> www 301 redirect (open-redirect hardened)
  if (hostnameLower === 'rummydex.com') {
    const safePath = safeSingleSlashPath(rawPathname);
    return permanentRedirect(`${CANONICAL_ORIGIN}${safePath}${url.search}`);
  }

  // 2. Validate percent-encoding safely and block common exploit/traversal probes immediately
  let decodedPath = rawPathname;
  try {
    decodedPath = decodeURIComponent(rawPathname);
  } catch {
    return plainTextResponse(400, 'Bad Request', {}, false, isHead);
  }

  const decodedLower = decodedPath.toLowerCase();
  if (
    PROBE_PATH_RE.test(pathLower) ||
    PROBE_PATH_RE.test(decodedLower) ||
    pathLower.includes('/etc/') ||
    decodedLower.includes('/etc/') ||
    pathLower.includes('/proc/') ||
    decodedLower.includes('/proc/') ||
    pathLower.includes('/.aws/') ||
    decodedLower.includes('/.aws/') ||
    rawPathname.includes('..') ||
    decodedPath.includes('..')
  ) {
    return plainTextResponse(404, 'Not found', {}, false, isHead);
  }

  // 3. Gateway Bot & Crawler Shield (403 Forbidden before any redirect or asset lookup)
  const isGatewayRoute = matchesPrefix(pathLower, GATEWAY_PREFIXES);
  const userAgent = request.headers.get('user-agent') || '';
  if (isGatewayRoute && BOT_CRAWLER_RE.test(userAgent)) {
    return plainTextResponse(
      403,
      'Access Forbidden for automated crawlers.',
      {
        'X-Robots-Tag': 'noindex, nofollow, noarchive, nosnippet, noimageindex, notranslate',
        Pragma: 'no-cache',
        Expires: '0'
      },
      true,
      isHead
    );
  }

  // 4. Canonical edge redirects
  if (pathLower === '/cdn-cgi/l/email-protection' || pathLower.startsWith('/cdn-cgi/l/email-protection/')) {
    return permanentRedirect(new URL('/contact', url.origin).toString());
  }

  // Strip trailing slashes (except root '/') with open-redirect protection
  if (rawPathname.length > 1 && rawPathname.endsWith('/')) {
    const stripped = safeSingleSlashPath(rawPathname.replace(/\/+$/, ''));
    if (stripped !== rawPathname) {
      return permanentRedirect(new URL(`${stripped}${url.search}`, url.origin).toString());
    }
  }

  if (pathLower.startsWith('/categories/') && rawPathname.length > '/categories/'.length) {
    const rest = safeSingleSlashPath('/category/' + rawPathname.slice('/categories/'.length).replace(/^\/+/, ''));
    return permanentRedirect(new URL(`${rest}${url.search}`, url.origin).toString());
  }

  if (pathLower.startsWith('/video/') && rawPathname.length > '/video/'.length) {
    const rest = safeSingleSlashPath('/videos/' + rawPathname.slice('/video/'.length).replace(/^\/+/, ''));
    return permanentRedirect(new URL(`${rest}${url.search}`, url.origin).toString());
  }

  // 5. Dynamic non-prerendered SPA routes for real users (/moreinfo/*, /gateway/*, /download/*, /info/*, /moredetail/*, /safety, /safety-status)
  const isSpaGateway = matchesPrefix(pathLower, SPA_GATEWAY_PREFIXES);
  const isSafetyRoute = SPA_SAFETY_PATHS.has(pathLower);
  if (isSpaGateway || isSafetyRoute) {
    let spaAssetRes = null;
    if (env && env.ASSETS && typeof env.ASSETS.fetch === 'function') {
      spaAssetRes = await env.ASSETS.fetch(new URL('/index.spa.html', url.origin));
      if (!spaAssetRes || !spaAssetRes.ok) {
        spaAssetRes = await env.ASSETS.fetch(new URL('/index.html', url.origin));
      }
    }
    if (spaAssetRes && spaAssetRes.ok) {
      const headers = buildSecurityHeaders(
        {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'no-store, no-cache, must-revalidate, private, max-age=0',
          'CDN-Cache-Control': 'no-store, private',
          'Cloudflare-CDN-Cache-Control': 'no-store, private',
          Pragma: 'no-cache',
          Expires: '0',
          'X-Robots-Tag': 'noindex, nofollow, noarchive, nosnippet'
        },
        isSpaGateway
      );
      return new Response(isHead ? null : spaAssetRes.body, {
        status: 200,
        headers
      });
    }
  }

  // 6. Fast path: delegate to Cloudflare Pages static assets & _redirects
  const response = await next();
  if (response.status !== 404) {
    return response;
  }

  // 7. 404 Miss Path: attempt canonical 301 resolution before serving genuine HTTP 404
  const canonicalTarget = resolveCanonicalMissRedirect(rawPathname, pathLower, url.search);
  if (canonicalTarget) {
    return permanentRedirect(new URL(safeSingleSlashPath(canonicalTarget), url.origin).toString());
  }

  // Missing static file/asset -> lightweight plain-text 404 (never bloat with HTML)
  if (pathLower.startsWith('/assets/') || STATIC_ASSET_EXT_RE.test(pathLower)) {
    return plainTextResponse(404, 'File not found', {}, isGatewayRoute, isHead);
  }

  // Genuine HTTP 404 HTML response with strict noindex + no-store + security headers
  const notFoundHeaders = buildSecurityHeaders(
    {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
      Pragma: 'no-cache',
      Expires: '0',
      'X-Robots-Tag': 'noindex, nofollow, noarchive, nosnippet'
    },
    isGatewayRoute
  );

  const htmlBody = response.body && (response.headers.get('content-type') || '').includes('text/html')
    ? response.body
    : FALLBACK_404_HTML;

  return new Response(isHead ? null : htmlBody, {
    status: 404,
    headers: notFoundHeaders
  });
}
