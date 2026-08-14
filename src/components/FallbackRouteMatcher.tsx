/**
 * FallbackRouteMatcher wildcard resolver
 * Directs dynamic routes to target dynamic content without hardcoded router tables.
 */

import { useState, useEffect, useRef, Suspense } from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { useData } from '../contexts/DataContextPublic';
import { Helmet } from 'react-helmet-async';
import { lazyWithRetry } from '../lib/lazyWithRetry';
import { resolveAppSlug } from '../seoHelper';
import { mockApps as staticMockApps, mockNews as staticMockNews, mockBlogs as staticMockBlogs, mockVideos as staticMockVideos } from '../lib/staticData';
import Meta from './Meta';
import AppDetailsSkeleton from './public/AppDetailsSkeleton';

const AppDetails = lazyWithRetry(() => import('../pages/AppDetails'));
const NewsDetailPage = lazyWithRetry(() => import('../pages/NewsDetailPage'));
const BlogDetailPage = lazyWithRetry(() => import('../pages/BlogDetailPage'));
const VideoDetailPage = lazyWithRetry(() => import('../pages/VideoDetailPage'));

function InlineLoading() {
  return (
    <div className="flex flex-col items-center justify-center py-20 min-h-[40vh]">
      <div className="w-8 h-8 border-[3px] border-black/10 dark:border-white/10 border-t-blue-500 rounded-full animate-spin mb-4"></div>
      <p className="text-sm font-medium tracking-wide text-zinc-500">Loading Content...</p>
    </div>
  );
}

export default function FallbackRouteMatcher() {
  const location = useLocation();
  const { apps, news, blogs, videos, loading, refreshAll } = useData();
  
  // Clean pathname into a lowercase slug
  const rawPath = decodeURIComponent(location.pathname);
  const slug = rawPath.replace(/^\/(app|download|moreinfo)\//i, '/').replace(/^\/|\/$/g, '').toLowerCase().trim();
  
  const [resolvedType, setResolvedType] = useState<'app' | 'news' | 'blog' | 'video' | 'loading' | 'not_found'>('loading');
  const [triedRefresh, setTriedRefresh] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const syncAttemptedRef = useRef<Record<string, boolean>>({});

  useEffect(() => {
    setTriedRefresh(false);
    setIsRefreshing(false);
  }, [slug]);

  useEffect(() => {
    if (!slug) {
      setResolvedType('not_found');
      return;
    }

    const matchedApp = resolveAppSlug(slug, apps) || resolveAppSlug(slug, staticMockApps);
    if (matchedApp) {
      setResolvedType('app');
      return;
    }

    const newsExists = news.some(n => n.slug?.toLowerCase() === slug) || staticMockNews.some(n => n.slug?.toLowerCase() === slug);
    if (newsExists) {
      setResolvedType('news');
      return;
    }

    const blogExists = blogs.some(b => b.slug?.toLowerCase() === slug) || staticMockBlogs.some(b => b.slug?.toLowerCase() === slug);
    if (blogExists) {
      setResolvedType('blog');
      return;
    }

    const videoExists = videos.some(v => v.slug?.toLowerCase() === slug) || staticMockVideos.some(v => v.slug?.toLowerCase() === slug);
    if (videoExists) {
      setResolvedType('video');
      return;
    }

    if (loading) {
      setResolvedType('loading');
      return;
    }

    // Trigger on-demand sync from servers if we haven't found a match yet in local cache
    if (!syncAttemptedRef.current[slug] && !triedRefresh && !isRefreshing) {
      syncAttemptedRef.current[slug] = true;
      setIsRefreshing(true);
      console.log(`Fallback Match: Slug "${slug}" not found in cache. Triggering full sync...`);
      refreshAll(true)
        .catch(err => console.warn("Fallback route match auto-sync failed:", err.message || err))
        .finally(() => {
          setTriedRefresh(true);
          setIsRefreshing(false);
        });
      setResolvedType('loading');
      return;
    }

    if (isRefreshing || !triedRefresh) {
      setResolvedType('loading');
      return;
    }

    setResolvedType('not_found');
  }, [slug, apps, news, blogs, videos, loading, triedRefresh, isRefreshing, refreshAll]);

  if (resolvedType === 'loading') {
    return (
      <div className="flex flex-col items-center justify-center py-20 min-h-[40vh] text-center px-4 max-w-sm mx-auto">
        <div className="w-8 h-8 border-[3px] border-black/10 dark:border-white/10 border-t-blue-500 rounded-full animate-spin mb-4"></div>
        <p className="text-sm font-medium tracking-wide text-zinc-500 animate-pulse">Resolving URL...</p>
      </div>
    );
  }

  if (resolvedType === 'app') {
    const matchedApp = resolveAppSlug(slug, apps) || resolveAppSlug(slug, staticMockApps);
    const targetSlug = matchedApp?.slug || slug;
    return <Navigate to={`/app/${targetSlug}`} replace />;
  }

  if (resolvedType === 'news') {
    return <NewsDetailPage />;
  }

  if (resolvedType === 'blog') {
    return <BlogDetailPage />;
  }

  if (resolvedType === 'video') {
    return <VideoDetailPage />;
  }


  return (
    <div className="text-center py-20 px-4 min-h-[40vh] flex flex-col justify-center items-center">
      <Meta 
        title="404 - Page Not Found | RummyDex" 
        description="We could not resolve this link to any application listing, news bulletin, or blog post." 
        noindex={true} 
      />
      <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 rounded-2xl flex items-center justify-center mb-6">

        <span className="text-2xl font-bold">404</span>
      </div>
      <h1 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Page Not Found</h1>
      <p className="max-w-md mx-auto text-sm text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed font-medium">
        We could not resolve this link to any application listing, news bulletin, or blog post.
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
