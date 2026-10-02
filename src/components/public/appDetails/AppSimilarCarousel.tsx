import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getOptimizedImageUrl } from '../../../seo/utils';

interface RelatedAppItem {
  id: string | number;
  name: string;
  slug: string;
  icon_url: string;
}

interface AppSimilarCarouselProps {
  relatedApps: RelatedAppItem[];
  specificCategory: string;
}

export const AppSimilarCarousel: React.FC<AppSimilarCarouselProps> = ({ relatedApps, specificCategory }) => {
  if (!relatedApps || relatedApps.length === 0) return null;

  return (
    <section aria-labelledby="related-apps-heading" className="my-5 xs:my-6 px-0">
      <div className="flex items-center justify-between mb-2.5 xs:mb-3 px-1 xs:px-2 sm:px-4 md:px-6">
        <h2 id="related-apps-heading" className="text-base xs:text-lg sm:text-xl font-bold flex items-center gap-1.5 xs:gap-2 text-zinc-900 dark:text-zinc-100">
          <span>Similar Applications</span>
          {specificCategory && specificCategory !== 'All Apps' && (
            <span className="text-[10px] xs:text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 xs:px-2.5 py-0.5 rounded-full border border-blue-200/50 dark:border-blue-800/50">
              {specificCategory}
            </span>
          )}
        </h2>
        <Link 
          to={`/?tab=${encodeURIComponent(specificCategory)}`}
          className="text-[11px] xs:text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 transition-colors group shrink-0"
          title={`Explore all ${specificCategory} apps`}
        >
          <span>View all ({relatedApps.length})</span>
          <ArrowRight className="w-3 h-3 xs:w-3.5 xs:h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
      <div className="grid grid-rows-2 grid-flow-col gap-x-3 xxs:gap-x-4 xs:gap-x-6 gap-y-3 xxs:gap-y-4 xs:gap-y-6 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-2 xs:-mx-4 px-2 xs:px-4 sm:mx-0 sm:px-0">
        {relatedApps.map((relatedApp, index) => (
          <Link
            key={`${relatedApp.id}-${index}`}
            to={`/app/${relatedApp.slug}`}
            className="flex flex-col items-center justify-start gap-1 xxs:gap-1.5 xs:gap-2 w-[64px] xxs:w-[74px] xs:w-[88px] sm:w-[110px] snap-start group"
          >
            <img
              src={getOptimizedImageUrl(relatedApp.icon_url, 200) || 'https://via.placeholder.com/200'}
              alt={relatedApp.name}
              width={100}
              height={100}
              decoding="async"
              className="w-[60px] h-[60px] xxs:w-[70px] xxs:h-[70px] xs:w-[84px] xs:h-[84px] sm:w-[100px] sm:h-[100px] rounded-[24%] shadow-[0_2px_8px_rgba(0,0,0,0.08)] object-cover"
              loading="lazy"
              fetchPriority="low"
              referrerPolicy="no-referrer"
            />
            <span className="text-[9px] xxs:text-[10px] xs:text-[11px] sm:text-[13px] font-semibold text-center text-zinc-800 dark:text-zinc-200 line-clamp-2 w-full px-0.5 leading-tight">
              {relatedApp.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};
