import React, { useMemo } from 'react';
import { Star, ShieldCheck, MessageSquare } from 'lucide-react';
import { useLiveAppStats } from '../../hooks/useReviews';

interface ReviewScoreSummaryProps {
  appId: string;
  appSlug?: string;
  overallRating?: number;
  totalReviewCount?: number | string;
}

export function ReviewScoreSummary({ appId, appSlug, overallRating = 4.8, totalReviewCount }: ReviewScoreSummaryProps) {
  const cleanId = String(appId || '').trim();
  const cleanSlug = String(appSlug || '').trim();

  // Unified single source of truth hook (shared with AppDetails & SEO schema)
  const stats = useLiveAppStats(cleanId, cleanSlug, overallRating, Number(totalReviewCount) || 0);

  const hasRealReviews = Boolean(stats && Number(stats.totalReviews) > 0);
  const ratingVal = hasRealReviews ? Number(stats.averageRating) : 0;
  const averageValue = hasRealReviews ? ratingVal.toFixed(1) : '--';
  const totalCount = hasRealReviews ? Number(stats.totalReviews) : 0;

  // Real star distribution from actual community reviews
  const starCounts: Record<string, number> = React.useMemo(() => {
    if (hasRealReviews && stats?.starCounts) {
      return stats.starCounts;
    }
    return { '5': 0, '4': 0, '3': 0, '2': 0, '1': 0 };
  }, [hasRealReviews, stats]);

  const getPercentage = (starNum: number) => {
    if (!hasRealReviews || totalCount <= 0) return '0%';
    const count = starCounts[String(starNum)] || 0;
    const pct = Math.min(100, Math.max(0, Math.round((count / totalCount) * 100)));
    return `${pct}%`;
  };

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
        <MessageSquare className="w-5 h-5 text-blue-500" />
        <span>Ratings and reviews</span>
      </h2>
      <div className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-black/5 dark:border-white/10">
        <div className="text-center shrink-0">
          <div className="text-5xl font-black text-zinc-900 dark:text-white tracking-tighter leading-none mb-1">
            {averageValue}
          </div>
          <div className="flex justify-center gap-0.5 mb-1 text-amber-500">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star 
                key={`score-star-${s}`} 
                className={`w-3.5 h-3.5 ${s <= Math.round(Number(ratingVal)) ? 'fill-amber-400 text-amber-400' : 'text-zinc-300 dark:text-zinc-700'}`} 
              />
            ))}
          </div>
          <div className="text-[10px] font-semibold text-zinc-400 dark:text-zinc-500">
            {typeof totalCount === 'number' ? totalCount.toLocaleString() : totalCount} ratings
          </div>
        </div>
        {/* Distribution bars */}
        <div className="flex-1 space-y-1.5 text-xs min-w-0">
          {[5, 4, 3, 2, 1].map((star, idx) => (
            <div key={`dist-bar-${star}-${idx}`} className="flex items-center gap-2">
              <span className="w-2.5 font-bold text-zinc-500 text-right">{star}</span>
              <div className="flex-1 h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500 rounded-full transition-all duration-500" 
                  style={{ width: getPercentage(star) }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Verification Guard info badge */}
      <div className="mt-4 p-3 bg-green-500/5 border border-green-500/10 rounded-xl flex items-start gap-2.5">
        <ShieldCheck className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
        <span className="text-[11px] font-semibold text-green-700 dark:text-green-400 leading-relaxed">
          Ratings and reviews are fully verified. All strategies and gameplay logs are processed by authorized community members only.
        </span>
      </div>
    </div>
  );
}

export default ReviewScoreSummary;
