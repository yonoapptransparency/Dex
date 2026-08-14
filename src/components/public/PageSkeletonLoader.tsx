import React from 'react';
import { useLocation } from 'react-router-dom';
import { AppDetailsSkeleton } from './AppDetailsSkeleton';
import { AppListItemSkeleton, TopChartItemSkeleton } from '../playstore/AppListItems';

export function HomeSkeleton() {
  return (
    <div className="w-full select-none animate-fade-in space-y-6">
      {/* Featured Banner Skeleton */}
      <div className="w-full aspect-[21/9] sm:aspect-[24/9] max-h-72 rounded-2xl sm:rounded-3xl bg-zinc-200 dark:bg-zinc-800 animate-pulse shadow-xs" />

      {/* Category Pills Row Skeleton */}
      <div className="flex gap-2 overflow-x-hidden py-1">
        <div className="h-9 w-24 rounded-full bg-zinc-200 dark:bg-zinc-800 animate-pulse shrink-0" />
        <div className="h-9 w-28 rounded-full bg-zinc-200 dark:bg-zinc-800 animate-pulse shrink-0" />
        <div className="h-9 w-20 rounded-full bg-zinc-200 dark:bg-zinc-800 animate-pulse shrink-0" />
        <div className="h-9 w-26 rounded-full bg-zinc-200 dark:bg-zinc-800 animate-pulse shrink-0" />
        <div className="h-9 w-24 rounded-full bg-zinc-200 dark:bg-zinc-800 animate-pulse shrink-0" />
      </div>

      {/* App List Skeletons */}
      <div className="space-y-2">
        <div className="h-5 w-36 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse mb-3" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <TopChartItemSkeleton key={`home-skel-${i}`} rank={i + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ArticleSkeleton() {
  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-3 select-none animate-fade-in space-y-6">
      {/* Title & Metadata */}
      <div className="space-y-3">
        <div className="h-8 sm:h-10 w-3/4 bg-zinc-200 dark:bg-zinc-800 rounded-xl animate-pulse" />
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
          <div className="h-4 w-32 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
        </div>
      </div>

      {/* Cover Image Skeleton */}
      <div className="w-full aspect-[16/9] max-h-96 rounded-2xl bg-zinc-200 dark:bg-zinc-800 animate-pulse shadow-sm" />

      {/* Body Text Lines */}
      <div className="space-y-3 pt-4">
        <div className="h-4 w-full bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
        <div className="h-4 w-[96%] bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
        <div className="h-4 w-[92%] bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
        <div className="h-4 w-[88%] bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
        <div className="h-4 w-[75%] bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse" />
      </div>
    </div>
  );
}

export default function PageSkeletonLoader() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  if (path.startsWith('/app/')) {
    return <AppDetailsSkeleton />;
  }

  if (path.startsWith('/news/') || path.startsWith('/blog/') || path.startsWith('/blogs/')) {
    return <ArticleSkeleton />;
  }

  return <HomeSkeleton />;
}
