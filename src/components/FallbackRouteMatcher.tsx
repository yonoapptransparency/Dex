/**
 * FallbackRouteMatcher wildcard resolver
 * Directs dynamic routes to canonical paths without allowing non-canonical root URLs to render.
 */

import { useState, useEffect, useRef } from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { useData } from '../contexts/DataContextPublic';
import { resolveAppSlug } from '../lib/slugResolver';
import Meta from './Meta';

const getInitialData = () => {
  if (typeof window !== 'undefined' && (window as any).__INITIAL_DATA__) {
    return (window as any).__INITIAL_DATA__;
  }
  return {};
};

export default function FallbackRouteMatcher() {
  const location = useLocation();
  const { apps, news, videos, loading, refreshAll } = useData();
  
  // Clean pathname into a lowercase slug safely (malformed percent-encoding must never crash React)
  let rawPath = location.pathname;
  try {
    rawPath = decodeURIComponent(location.pathname);
  } catch {
    rawPath = location.pathname;
  }
  const slug = rawPath.replace(/^\/(app|download|moreinfo|info|moredetail|gateway)\//i, '/').replace(/^\/|\/$/g, '').toLowerCase().trim();
  
  const [triedRefresh, setTriedRefresh] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const syncAttemptedRef = useRef<Record<string, boolean>>({});

  useEffect(() => {
    setTriedRefresh(false);
    setIsRefreshing(false);
  }, [slug]);

  const isStaticAssetOrEmpty = !slug || /\.(xml|json|txt|php|png|jpg|jpeg|gif|svg|ico|webp|js|css|map|webmanifest)$/i.test(slug);

  // 1. Check if slug matches an app -> Always Redirect to canonical /app/:slug
  const initData = getInitialData();
  const matchedApp = isStaticAssetOrEmpty ? null : (resolveAppSlug(slug, apps) || resolveAppSlug(slug, initData.apps || []));

  // 2. Check if slug matches news -> Redirect to /news/:slug
  const matchedNews = isStaticAssetOrEmpty
    ? null
    : (news.find(n => n.slug?.toLowerCase() === slug) || (initData.news || []).find((n: any) => n.slug?.toLowerCase() === slug));

  // 3. Check if slug matches video -> Redirect to /videos/:slug
  const matchedVideo = isStaticAssetOrEmpty
    ? null
    : (videos.find(v => v.slug?.toLowerCase() === slug) || (initData.videos || []).find((v: any) => v.slug?.toLowerCase() === slug));

  // 4. Check if slug matches a real canonical category from catalog apps (splits comma-separated categories, excludes generic catch-alls)
  const genericCategorySlugs = new Set(['all', 'all-apps', 'apps', 'general']);
  const matchedCategory = !isStaticAssetOrEmpty && !genericCategorySlugs.has(slug) && apps.some(a => {
    if (!a || (a as any).sync_to_public === false || !a.category) return false;
    return String(a.category)
      .split(',')
      .some(part => part.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') === slug);
  });

  const hasImmediateMatch = Boolean(matchedApp || matchedNews || matchedVideo || matchedCategory);

  // 6. Trigger background refresh strictly inside useEffect (never in render phase) with clean unmount cancellation
  useEffect(() => {
    if (isStaticAssetOrEmpty || hasImmediateMatch || loading || triedRefresh || syncAttemptedRef.current[slug]) {
      return;
    }

    syncAttemptedRef.current[slug] = true;
    let cancelled = false;
    setIsRefreshing(true);

    const timeout = setTimeout(() => {
      if (!cancelled) {
        setTriedRefresh(true);
        setIsRefreshing(false);
      }
    }, 1200);

    Promise.resolve(refreshAll(true))
      .catch(err => console.warn("Fallback route match auto-sync failed:", err?.message || err))
      .finally(() => {
        clearTimeout(timeout);
        if (!cancelled) {
          setTriedRefresh(true);
          setIsRefreshing(false);
        }
      });

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [slug, isStaticAssetOrEmpty, hasImmediateMatch, loading, triedRefresh, refreshAll]);

  if (isStaticAssetOrEmpty) {
    return (
      <div className="text-center py-20 px-4 min-h-[40vh] flex flex-col justify-center items-center">
        <Meta title="404 - Page Not Found" description="Page not found." noindex={true} />
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Page Not Found</h1>
        <Link to="/" className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-[16px] font-semibold text-sm">Return to Home</Link>
      </div>
    );
  }

  if (matchedApp && (matchedApp.slug || matchedApp.id)) {
    const targetSlug = matchedApp.slug || matchedApp.id;
    return <Navigate to={`/app/${targetSlug}`} replace />;
  }

  if (matchedNews && matchedNews.slug) {
    return <Navigate to={`/news/${matchedNews.slug}`} replace />;
  }

  if (matchedVideo && matchedVideo.slug) {
    return <Navigate to={`/videos/${matchedVideo.slug}`} replace />;
  }

  if (matchedCategory) {
    return <Navigate to={`/category/${slug}`} replace />;
  }

  // 5. If data is still loading or background refresh has not settled yet
  if (loading || isRefreshing || (!triedRefresh && !syncAttemptedRef.current[slug])) {
    return (
      <div className="flex flex-col items-center justify-center py-20 min-h-[40vh] text-center px-4 max-w-sm mx-auto">
        <div className="w-8 h-8 border-[3px] border-black/10 dark:border-white/10 border-t-blue-500 rounded-full animate-spin mb-4"></div>
        <p className="text-sm font-medium tracking-wide text-zinc-500 animate-pulse">Resolving URL...</p>
      </div>
    );
  }

  return (
    <div className="text-center py-20 px-4 min-h-[40vh] flex flex-col justify-center items-center">
      <Meta 
        title="404 - Page Not Found" 
        description="We could not resolve this link to any application listing or news bulletin." 
        noindex={true} 
      />
      <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 rounded-2xl flex items-center justify-center mb-6">
        <span className="text-2xl font-bold">404</span>
      </div>
      <h1 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Page Not Found</h1>
      <p className="max-w-md mx-auto text-sm text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed font-medium">
        We could not resolve this link to any application listing or news bulletin.
      </p>
      <Link 
        to="/" 
        className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-[16px] font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md"
      >
        Return to Home
      </Link>
    </div>
  );
}
