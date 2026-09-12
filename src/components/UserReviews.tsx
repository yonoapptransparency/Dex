/**
 * UserReviews detailed listing feed
 * Displays peer reviews, supports upvotes and helpful counters, and is fully synchronized with DB.
 */

import React, { useState, useEffect, useRef } from 'react';
import { Star, ThumbsUp, AlertCircle, Loader2 } from 'lucide-react';
import ReviewItem from './public/ReviewItem';
import { ReviewForm } from './public/ReviewForm';
import { useReviews } from '../hooks/useReviews';

import { ReviewScoreSummary } from './public/ReviewScoreSummary';

interface UserReviewsProps {
  appId: string;
  appTitle: string;
  appSlug?: string;
  category?: string;
  overallRating?: number;
  totalReviewCount?: number | string;
}

export default function UserReviews({ 
  appId, 
  appTitle, 
  appSlug,
  category,
  overallRating = 5.0, 
  totalReviewCount 
}: UserReviewsProps) {
  
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, { rootMargin: '700px' });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [appId, appSlug]);

  const {
    reviews,
    setReviews,
    loading,
    loadingMore,
    hasMore,
    loadMore,

    sortBy,
    setSortBy,
    activeFilter,
    setActiveFilter,
    votedReviews,
    reportedReviews,
    expandedReviews,
    toggleExpandReview,
    handleHelpfulVote,
    handleReportReview,
    filteredReviews,
    stats
  } = useReviews(appId, appTitle, appSlug, category, overallRating, inView);

  const displayedReviews = filteredReviews;
  const canLoadMore = hasMore;
  const handleLoadMore = () => {
    if (hasMore && !loadingMore) {
      loadMore();
    }
  };

  const countAll = stats?.totalReviews ?? reviews.length;
  const countPositive = stats?.starCounts 
    ? ((stats.starCounts[4] || 0) + (stats.starCounts[5] || 0)) 
    : reviews.filter(r => r.rating >= 4).length;
  const countCritical = stats?.starCounts 
    ? ((stats.starCounts[1] || 0) + (stats.starCounts[2] || 0) + (stats.starCounts[3] || 0)) 
    : reviews.filter(r => r.rating <= 3).length;

  return (
    <div id="ratings-and-reviews-section" ref={containerRef} className="py-8 border-t border-black/5 dark:border-white/5 select-none text-left">
      <div className="flex flex-col gap-5 sm:gap-8">
        
        <ReviewScoreSummary 
          key={`stats_${appId}_${appSlug || ''}`}
          appId={appId} 
          appSlug={appSlug} 
          overallRating={overallRating} 
          totalReviewCount={totalReviewCount} 
        />

        <div className="w-full flex flex-col gap-4 sm:gap-6">
          <ReviewForm 
            appId={appId} 
            appSlug={appSlug} 
            appName={appTitle}
            onSuccess={(newReview) => setReviews(prev => prev.some(r => r.id === newReview.id) ? prev : [newReview, ...prev])} 
          />

          <div className="space-y-4">
            {!loading && reviews.length > 0 && (
              <div className="flex flex-col gap-3 pb-3 border-b border-black/5 dark:border-white/5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                    <button
                      type="button"
                      onClick={() => setActiveFilter('all')}
                      className={`px-3 py-1.5 text-xs font-bold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                        activeFilter === 'all'
                          ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-sm'
                          : 'bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-750 text-zinc-500 dark:text-zinc-400'
                      }`}
                    >
                      All ({countAll})
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveFilter('positive')}
                      className={`px-3 py-1.5 text-xs font-bold rounded-xl whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                        activeFilter === 'positive'
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 dark:bg-emerald-500/10 hover:bg-emerald-500/10'
                      }`}
                    >
                      <Star className="w-3 h-3 fill-current" />
                      Positive ({countPositive})
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveFilter('critical')}
                      className={`px-3 py-1.5 text-xs font-bold rounded-xl whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                        activeFilter === 'critical'
                          ? 'bg-rose-600 text-white shadow-sm'
                          : 'bg-rose-500/5 text-rose-650 dark:text-rose-450 dark:bg-rose-500/10 hover:bg-rose-500/10'
                      }`}
                    >
                      <AlertCircle className="w-3 h-3" />
                      Critical ({countCritical})
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-650 dark:text-zinc-400 shrink-0 select-none">
                    <span>Sort:</span>
                    <div className="flex bg-zinc-100 dark:bg-zinc-800/80 rounded-lg p-0.5">
                      <button
                        type="button"
                        onClick={() => setSortBy('recent')}
                        className={`px-2.5 py-1 text-[11px] font-bold rounded-md transition-all cursor-pointer ${
                          sortBy === 'recent'
                            ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-sm'
                            : 'text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200'
                        }`}
                      >
                        Recent
                      </button>
                      <button
                        type="button"
                        onClick={() => setSortBy('helpful')}
                        className={`px-2.5 py-1 text-[11px] font-bold rounded-md transition-all cursor-pointer flex items-center gap-1 ${
                          sortBy === 'helpful'
                            ? 'bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white shadow-sm'
                            : 'text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200'
                        }`}
                      >
                        <ThumbsUp className="w-2.5 h-2.5" />
                        <span>Most Helpful</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {!inView && !loading && reviews.length === 0 ? (
              <div className="text-center py-8 border border-dashed border-black/5 dark:border-white/10 rounded-2xl flex flex-col items-center justify-center gap-3 bg-zinc-50/50 dark:bg-zinc-900/20">
                <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">Player feedback & ratings</p>
                <button
                  type="button"
                  onClick={() => setInView(true)}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer shadow-sm active:scale-95 flex items-center gap-2"
                >
                  <Star className="w-3.5 h-3.5 fill-current" />
                  Load Community Reviews
                </button>
              </div>
            ) : loading ? (
              <div className="space-y-3.5 animate-pulse">
                {Array.from({ length: 3 }).map((_, idx) => (
                  <div key={`review-skeleton-${idx}`} className="p-5 border rounded-2xl flex gap-4 bg-zinc-50/50 dark:bg-zinc-900/30 border-black/5 dark:border-white/10 text-left">
                    <div className="w-9 h-9 rounded-full bg-zinc-200 dark:bg-zinc-800 shrink-0" />
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between gap-4">
                        <div className="h-3 w-24 bg-zinc-200 dark:bg-zinc-800 rounded" />
                        <div className="h-2 w-16 bg-zinc-200 dark:bg-zinc-805 rounded" />
                      </div>
                      <div className="flex items-center gap-0.5 mt-0.5 select-none">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <div key={`star-skeleton-${idx}-${s}`} className="w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                        ))}
                      </div>
                      <div className="space-y-1.5 pt-1.5">
                        <div className="h-2.5 w-full bg-zinc-200 dark:bg-zinc-800 rounded" />
                        <div className="h-2.5 w-[92%] bg-zinc-200 dark:bg-zinc-800 rounded" />
                        <div className="h-2.5 w-[65%] bg-zinc-200 dark:bg-zinc-805 rounded" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : reviews.length === 0 ? (
              <div className="text-center py-10 border border-dashed border-black/5 dark:border-white/10 rounded-2xl">
                <span className="text-sm font-semibold text-zinc-400 dark:text-zinc-500">No community reviews yet. Be the first to share!</span>
              </div>
            ) : (
              
              <div className="space-y-3">
                {displayedReviews.map((rev) => (
                  <ReviewItem
                    key={rev.id}
                    rev={rev}
                    isReported={!!reportedReviews[rev.id]}
                    isExpanded={!!expandedReviews[rev.id]}
                    isVoted={!!votedReviews[rev.id]}
                    onToggleExpand={toggleExpandReview}
                    onHelpfulVote={handleHelpfulVote}
                    onReport={handleReportReview}
                  />
                ))}
                
                {canLoadMore && filteredReviews.length > 0 && (
                  <div className="pt-4 flex justify-center">
                    <button 
                      type="button"
                      onClick={handleLoadMore}
                      disabled={loadingMore}
                      className="px-6 py-2.5 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 font-bold text-xs uppercase tracking-widest rounded-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-[0.98]"
                    >
                      {loadingMore ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Loading...
                        </>
                      ) : (
                        'Load More Reviews'
                      )}
                    </button>
                  </div>
                )}
              </div>

            )}
          </div>
        </div>
      </div>
    </div>
  );
}

