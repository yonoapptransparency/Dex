import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getOptimizedImageUrl, getCategoryRouteHref, buildSimilarCategoryPills } from '../../../seo/utils';
import { preloadAppDetails } from '../../../lib/preloadHelper';

export interface RelatedAppItem {
  id: string | number;
  name: string;
  slug: string;
  icon_url: string;
  is_new?: boolean;
  is_hot?: boolean;
  serial_number?: number;
}

interface AppSimilarCarouselProps {
  relatedApps: RelatedAppItem[];
  specificCategory: string;
  adminCategories?: string[];
  totalCategoryCount?: number;
  isLoading?: boolean;
}

export const SIMILAR_APP_SVG_PLACEHOLDER = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 86 86'%3E%3Crect width='86' height='86' rx='20' fill='%23e4e4e7'/%3E%3C/svg%3E";

export const AppSimilarCarousel: React.FC<AppSimilarCarouselProps> = ({ 
  relatedApps, 
  specificCategory,
  adminCategories,
  isLoading = false
}) => {
  // Defer secondary carousel icons until after the primary app logo paints, and never expose 16 neighbor app icons to search crawlers
  const [showDeferredIcons, setShowDeferredIcons] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const ua = typeof navigator !== 'undefined' ? (navigator.userAgent || '') : '';
    const isSearchCrawler = /googlebot|google-inspectiontool|adsbot-google|apis-google|mediapartners-google|bingbot|slurp|duckduckbot|baiduspider|yandexbot|crawler|spider|headless/i.test(ua);
    if (isSearchCrawler) return;

    const rafId = window.requestAnimationFrame(() => {
      setShowDeferredIcons(true);
    });
    return () => window.cancelAnimationFrame(rafId);
  }, []);

  if ((!relatedApps || relatedApps.length === 0) && !isLoading) return null;

  if ((!relatedApps || relatedApps.length === 0) && isLoading) {
    return (
      <aside data-nosnippet aria-labelledby="related-apps-heading" className="my-5 xs:my-6 px-0 min-h-[224px] xs:min-h-[244px] sm:min-h-[264px]">
        <div className="flex items-center gap-2 sm:gap-3 mb-2.5 px-1 xs:px-2 sm:px-4 md:px-6 min-w-0">
          <h2 id="related-apps-heading" className="text-base xs:text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 shrink-0 whitespace-nowrap">
            Similar Applications
          </h2>
          <div className="flex-1 min-w-0 flex items-center gap-1.5 overflow-hidden py-0.5">
            <div className="h-6 w-20 rounded-full bg-zinc-200/70 dark:bg-zinc-800/70 animate-pulse shrink-0" />
            <div className="h-6 w-20 rounded-full bg-zinc-200/70 dark:bg-zinc-800/70 animate-pulse shrink-0" />
            <div className="h-6 w-24 rounded-full bg-zinc-200/70 dark:bg-zinc-800/70 animate-pulse shrink-0" />
          </div>
        </div>
        <div className="grid grid-rows-2 grid-flow-col gap-x-3 xxs:gap-x-4 xs:gap-x-5 gap-y-3 xxs:gap-y-3.5 xs:gap-y-4 overflow-hidden pt-2.5 pb-2 px-2 xs:px-4 sm:px-0">
          {Array.from({ length: 12 }).map((_, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1.5 w-[68px] xxs:w-[76px] xs:w-[86px] sm:w-[98px] shrink-0">
              <div className="w-[58px] h-[58px] xxs:w-[66px] xxs:h-[66px] xs:w-[76px] xs:h-[76px] sm:w-[86px] sm:h-[86px] rounded-[24%] bg-zinc-200/70 dark:bg-zinc-800/70 animate-pulse" />
              <div className="h-3 w-14 rounded bg-zinc-200/70 dark:bg-zinc-800/70 animate-pulse" />
            </div>
          ))}
        </div>
      </aside>
    );
  }

  const categoryHref = getCategoryRouteHref(specificCategory);
  const categoryPills = buildSimilarCategoryPills(specificCategory, adminCategories);

  return (
    <aside data-nosnippet aria-labelledby="related-apps-heading" className="my-5 xs:my-6 px-0">
      <div className="flex items-center gap-2 sm:gap-3 mb-2.5 px-1 xs:px-2 sm:px-4 md:px-6 min-w-0">
        <h2 id="related-apps-heading" className="text-base xs:text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 shrink-0 whitespace-nowrap">
          <span>Similar Applications</span>
        </h2>
        {categoryPills.length > 0 && (
          <nav
            aria-label="Browse categories"
            className="flex-1 min-w-0 flex items-center gap-1.5 overflow-x-auto no-scrollbar [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-proximity touch-auto overscroll-x-contain py-0.5 pr-2"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {categoryPills.map((cat) => (
              <Link
                key={cat.slug}
                to={cat.href}
                className={
                  cat.isActive
                    ? 'whitespace-nowrap shrink-0 snap-start inline-flex items-center px-2.5 xs:px-3 py-1 rounded-full text-[11px] xs:text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 border border-blue-200/70 dark:border-blue-800/60 no-underline active:scale-95 transition-all'
                    : 'whitespace-nowrap shrink-0 snap-start inline-flex items-center px-2.5 xs:px-3 py-1 rounded-full text-[11px] xs:text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 hover:bg-zinc-200/80 dark:bg-zinc-800/80 dark:hover:bg-zinc-700/80 border border-black/5 dark:border-white/10 no-underline active:scale-95 transition-all'
                }
                title={`Explore ${cat.name} apps`}
              >
                {cat.name}
              </Link>
            ))}
          </nav>
        )}
      </div>

      <div 
        className="grid grid-rows-2 grid-flow-col gap-x-3 xxs:gap-x-4 xs:gap-x-5 gap-y-3 xxs:gap-y-3.5 xs:gap-y-4 overflow-x-auto pt-2.5 pb-2 snap-x snap-proximity touch-pan-y overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-2 xs:-mx-4 px-2 xs:px-4 sm:mx-0 sm:px-0"
        style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-y pan-x', overscrollBehaviorX: 'contain' }}
      >
        {relatedApps.map((relatedApp, index) => {
          const iconSrc = getOptimizedImageUrl(relatedApp.icon_url, 96) || SIMILAR_APP_SVG_PLACEHOLDER;
          const activeSrc = showDeferredIcons ? iconSrc : SIMILAR_APP_SVG_PLACEHOLDER;

          return (
            <Link
              key={`${relatedApp.id}-${index}`}
              to={`/app/${relatedApp.slug}`}
              onMouseEnter={() => preloadAppDetails(relatedApp.slug)}
              onFocus={() => preloadAppDetails(relatedApp.slug)}
              onTouchStart={() => preloadAppDetails(relatedApp.slug)}
              className="flex flex-col items-center justify-start gap-1 xxs:gap-1.5 xs:gap-2 w-[68px] xxs:w-[76px] xs:w-[86px] sm:w-[98px] snap-start group shrink-0 active:scale-95 transition-transform duration-150 ease-out"
            >
              <div className="relative inline-block shrink-0">
                <img
                  src={activeSrc}
                  data-src={iconSrc}
                  alt=""
                  aria-hidden="true"
                  role="presentation"
                  width={86}
                  height={86}
                  decoding="async"
                  fetchPriority="low"
                  className="w-[58px] h-[58px] xxs:w-[66px] xxs:h-[66px] xs:w-[76px] xs:h-[76px] sm:w-[86px] sm:h-[86px] rounded-[24%] shadow-[0_2px_8px_rgba(0,0,0,0.08)] object-cover group-hover:scale-105 transition-transform duration-200 block pointer-events-none select-none"
                  loading="lazy"
                />
                {relatedApp.is_hot && relatedApp.is_new ? (
                  <span className="absolute -top-1.5 -right-1.5 z-20 inline-flex items-center rounded-full overflow-hidden shadow-[0_2px_6px_rgba(0,0,0,0.25)] border border-white dark:border-zinc-900 font-black text-[7.5px] xxs:text-[8px] xs:text-[9px] uppercase tracking-wider leading-none select-none pointer-events-none">
                    <span className="bg-[#d32f2f] text-white px-1 xs:px-1.5 py-0.5">HOT</span>
                    <span className="bg-[#008738] text-white px-1 xs:px-1.5 py-0.5">NEW</span>
                  </span>
                ) : relatedApp.is_hot ? (
                  <span className="absolute -top-1.5 -right-1.5 z-20 bg-[#d32f2f] text-white font-black text-[7.5px] xxs:text-[8px] xs:text-[9px] px-1.5 py-0.5 rounded-full shadow-[0_2px_6px_rgba(0,0,0,0.25)] border border-white dark:border-zinc-900 uppercase tracking-wider leading-none select-none pointer-events-none flex items-center justify-center">
                    HOT
                  </span>
                ) : relatedApp.is_new ? (
                  <span className="absolute -top-1.5 -right-1.5 z-20 bg-[#008738] text-white font-black text-[7.5px] xxs:text-[8px] xs:text-[9px] px-1.5 py-0.5 rounded-full shadow-[0_2px_6px_rgba(0,0,0,0.25)] border border-white dark:border-zinc-900 uppercase tracking-wider leading-none select-none pointer-events-none flex items-center justify-center">
                    NEW
                  </span>
                ) : null}
              </div>
              <span className="text-[9.5px] xxs:text-[10.5px] xs:text-[11.5px] sm:text-[12px] font-semibold text-center text-zinc-800 dark:text-zinc-200 line-clamp-2 w-full px-0.5 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors pointer-events-none select-none">
                {relatedApp.name}
              </span>
            </Link>
          );
        })}
        <Link
          to={categoryHref}
          className="row-span-2 flex flex-col items-center justify-center gap-2 w-[74px] xxs:w-[82px] xs:w-[92px] sm:w-[104px] h-full min-h-[140px] rounded-2xl bg-blue-50/80 hover:bg-blue-100/90 dark:bg-blue-950/30 dark:hover:bg-blue-900/50 border border-blue-200/70 dark:border-blue-800/60 text-blue-600 dark:text-blue-400 snap-start group shrink-0 active:scale-95 transition-all duration-150 ease-out no-underline px-1.5"
          title={specificCategory && specificCategory !== 'All Apps' ? `View all ${specificCategory} apps` : 'View all applications'}
          aria-label={specificCategory && specificCategory !== 'All Apps' ? `View all ${specificCategory} apps` : 'View all applications'}
        >
          <span className="w-10 h-10 xs:w-11 xs:h-11 rounded-full bg-white dark:bg-zinc-900 border border-blue-200/80 dark:border-blue-800/70 shadow-2xs flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
            <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5" />
          </span>
          <span className="text-[11px] xs:text-xs font-bold text-center leading-tight whitespace-nowrap">
            View all
          </span>
        </Link>
      </div>
    </aside>
  );
};
