/**
 * Intelligent Route Preloader & Instant Navigation Engine
 * Warms lazy-loaded secondary page chunks and incomplete link images strictly on user interaction
 * (touchstart / pointerover / focusin) with zero idle background bandwidth waste.
 */

const preloadedChunks = new Set<string>();

const SECONDARY_ROUTE_LOADERS: Array<[RegExp, () => Promise<any>]> = [
  [/^\/videos\/.+/, () => import('../pages/VideoDetailPage')],
  [/^\/videos\/?$/, () => import('../pages/VideosPage')],
  [/^\/developers(?:\/|$)/, () => import('../pages/Developers')],
  [/^\/about\/?$/, () => import('../pages/About')],
  [/^\/contact\/?$/, () => import('../pages/Contact')],
  [/^\/privacy\/?$/, () => import('../pages/Privacy')],
  [/^\/terms\/?$/, () => import('../pages/Terms')],
  [/^\/responsibility\/?$/, () => import('../pages/Responsibility')],
  [/^\/notice\/?$/, () => import('../pages/Notice')],
  [/^\/ethics\/?$/, () => import('../pages/Ethics')],
  [/^\/disclaimer\/?$/, () => import('../pages/Disclaimer')],
  [/^\/report-removal\/?$/, () => import('../pages/ReportRemoval')],
  [/^\/safety(?:-status)?\/?$/, () => import('../pages/SafetyStatus')],
  [/^\/faqs?\/?$/, () => import('../pages/FaqPage')],
];

export function preloadRoute(rawPath: string): Promise<any> {
  if (!rawPath) return Promise.resolve();
  let pathname = rawPath;
  try {
    if (rawPath.startsWith('http://') || rawPath.startsWith('https://')) {
      pathname = new URL(rawPath).pathname;
    }
  } catch {
    return Promise.resolve();
  }
  const cleanPath = (pathname.split('?')[0].split('#')[0] || '/').toLowerCase();

  for (let i = 0; i < SECONDARY_ROUTE_LOADERS.length; i++) {
    const [pattern, loader] = SECONDARY_ROUTE_LOADERS[i];
    if (pattern.test(cleanPath)) {
      const key = pattern.source;
      if (preloadedChunks.has(key)) return Promise.resolve();
      preloadedChunks.add(key);
      return loader().catch(() => {
        preloadedChunks.delete(key);
      });
    }
  }
  return Promise.resolve();
}

/**
 * Intentionally a zero-cost no-op: core routes (Home, AppDetails, News) are eager,
 * and secondary routes warm on demand via touchstart/pointerover/focusin (0ms idle bandwidth waste).
 */
export function startIdleRoutePreloader(): void {
  // No idle prefetching to protect mobile data budgets and synthetic audit cleanliness.
}

const preloadedSet = new Set<string>();
const MAX_PRELOADED_IMAGES = 120;

/**
 * Listens for touchstart, pointerover, or focus on anchor links to warm secondary route chunks and incomplete images.
 */
export function setupInteractionPreloader(): () => void {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return () => {};
  }

  const handleInteraction = (e: Event) => {
    const target = (e.target as HTMLElement)?.closest('a');
    if (!target) return;

    const href = target.getAttribute('href');
    if (href && (href.startsWith('/') || href.startsWith(window.location.origin))) {
      // 1. Warm lazy secondary route chunk ~150-300ms before click completes
      preloadRoute(href);

      // 2. Warm images that haven't finished loading yet (skip already-loaded visible DOM images)
      try {
        const img = target.querySelector('img');
        if (img && img.src && !img.complete && !preloadedSet.has(img.src)) {
          if (preloadedSet.size >= MAX_PRELOADED_IMAGES) {
            preloadedSet.clear();
          }
          preloadedSet.add(img.src);
          const warmImg = new Image();
          warmImg.src = img.src;
        }
      } catch (_) {}
    }
  };

  // Passive touchstart triggers ~150ms-300ms before click on mobile!
  document.addEventListener('touchstart', handleInteraction, { passive: true });
  document.addEventListener('pointerover', handleInteraction, { passive: true });
  document.addEventListener('focusin', handleInteraction, { passive: true });

  return () => {
    document.removeEventListener('touchstart', handleInteraction);
    document.removeEventListener('pointerover', handleInteraction);
    document.removeEventListener('focusin', handleInteraction);
  };
}
