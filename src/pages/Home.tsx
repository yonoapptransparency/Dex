/**
 * Home landing page layout
 * Features the showcase carousel, real-time download tabs, and categorized app directories.
 */

import { useState, useEffect, useMemo, useDeferredValue, useRef, useCallback } from 'react';
import { safeHtml } from '../lib/safeHtmlPublic';
import { Link, useSearchParams, useLocation, useNavigate, useNavigationType, useParams } from 'react-router-dom';
import { useData } from '../contexts/DataContextPublic';
import { Search, BadgeCheck, ShieldAlert, ShieldCheck, Sparkles, ArrowRight, TrendingUp, Star, SlidersHorizontal, ChevronDown, ListFilter, Github, Twitter } from 'lucide-react';
import { cn } from '../lib/utilsPublic';
import Meta from '../components/Meta';
import { FeaturedBanner, PlayStoreTabs, TopChartItem, AppListItem } from '../components/PlayStoreUI';
import { WebsiteTitleHero } from '../components/WebsiteTitleHero';
import NewAdditions from '../components/public/NewAdditions';
import HomeFilterBar from '../components/public/HomeFilterBar';
import HomeFaqSection from '../components/public/HomeFaqSection';

const ITEMS_PER_PAGE = 10;
const STORAGE_KEY = 'home_feed_state';

export default function Home() {
  const { apps: mockApps, settings: mockSettings } = useData();
  const { category: categoryParam } = useParams<{ category?: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'All Apps');
  const [ratingFilter, setRatingFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('default');

  const navType = useNavigationType();

  // Pagination & Infinite Prefetch
  const pageFromUrl = parseInt(searchParams.get('page') || '1', 10) || 1;
  const [visibleCount, setVisibleCount] = useState<number>(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed.visibleCount === 'number' && parsed.visibleCount > 0) {
          return parsed.visibleCount;
        }
      }
    } catch (e) {
      // Fallback
    }
    return Math.max(ITEMS_PER_PAGE, pageFromUrl * ITEMS_PER_PAGE);
  });

  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const deferredSearchTerm = useDeferredValue(searchTerm);
  const deferredActiveTab = useDeferredValue(activeTab);
  const deferredRatingFilter = useDeferredValue(ratingFilter);
  const deferredSortBy = useDeferredValue(sortBy);

  // Handle scroll position on mount: restore ONLY on browser Back (POP navigation)
  useEffect(() => {
    if (navType === 'POP') {
      try {
        const saved = sessionStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed && typeof parsed.scrollY === 'number' && parsed.scrollY > 0) {
            requestAnimationFrame(() => {
              setTimeout(() => {
                window.scrollTo({ top: parsed.scrollY, behavior: 'instant' });
              }, 50);
            });
            return;
          }
        }
      } catch (e) {
        // Ignore
      }
    } else {
      // Direct load, link click, or fresh entry: clear stale scroll and lock to top
      try {
        sessionStorage.removeItem(STORAGE_KEY);
      } catch (e) {
        // Ignore
      }
      window.scrollTo(0, 0);
    }
  }, [navType]);

  const feedStateRef = useRef({ visibleCount, activeTab });
  useEffect(() => {
    feedStateRef.current = { visibleCount, activeTab };
    // Automatically save loaded count in session so going back or clicking apps retains loaded list
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({
        visibleCount,
        scrollY: window.scrollY,
        activeTab
      }));
    } catch (e) {
      // Ignore
    }
  }, [visibleCount, activeTab]);

  // Track scroll position before navigating away (throttled with rAF)
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          try {
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify({
              visibleCount: feedStateRef.current.visibleCount,
              scrollY: window.scrollY,
              activeTab: feedStateRef.current.activeTab
            }));
          } catch (e) {
            // Ignore storage errors
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleScroll);
    };
  }, []);

  useEffect(() => {
    const q = searchParams.get('q');
    if (q !== null && q !== searchTerm) {
      setSearchTerm(q);
    }
    const tab = searchParams.get('tab');
    if (tab) {
      setActiveTab(tab);
    } else if (categoryParam) {
      const rawCat = categoryParam.toLowerCase().replace(/[-_]+/g, ' ').trim();
      const allKnownCats = (mockSettings?.categories && mockSettings.categories.length > 0)
        ? mockSettings.categories
        : ['All Apps', 'Rummy Apps', 'Yono Apps', 'Teen Patti', 'Casino', 'Slot Games', 'Arcade', 'Board', 'Casual'];
      
      const matched = allKnownCats.find(c => 
        c.toLowerCase().trim() === rawCat || 
        c.toLowerCase().replace(/[-_\s]+/g, '') === rawCat.replace(/\s+/g, '') ||
        rawCat.includes(c.toLowerCase().trim())
      );

      if (matched) {
        setActiveTab(matched);
      } else {
        const capitalized = rawCat.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        setActiveTab(capitalized);
      }
    }
  }, [searchParams, categoryParam, location, mockSettings.categories]);

  // Reset pagination when filters or tab change
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [deferredSearchTerm, deferredActiveTab, deferredRatingFilter, deferredSortBy]);

  const filteredApps = useMemo(() => {
    const term = deferredSearchTerm.toLowerCase().trim();
    let baseApps = [...mockApps];

    // Filter by Rating
    if (deferredRatingFilter !== 'all') {
      const minRating = parseFloat(deferredRatingFilter);
      if (!isNaN(minRating)) {
        baseApps = baseApps.filter(app => {
          const r = typeof app.rating === 'number' ? app.rating : parseFloat(app.rating) || 0;
          return r >= minRating;
        });
      }
    }

    if (!term) {
      if (deferredSortBy === 'rating_desc') {
        baseApps.sort((a, b) => {
          const ra = typeof a.rating === 'number' ? a.rating : parseFloat(a.rating) || 0;
          const rb = typeof b.rating === 'number' ? b.rating : parseFloat(b.rating) || 0;
          return rb - ra;
        });
      } else if (deferredSortBy === 'rating_asc') {
        baseApps.sort((a, b) => {
          const ra = typeof a.rating === 'number' ? a.rating : parseFloat(a.rating) || 0;
          const rb = typeof b.rating === 'number' ? b.rating : parseFloat(b.rating) || 0;
          return ra - rb;
        });
      } else {
        baseApps.sort((a, b) => (a.serial_number || 0) - (b.serial_number || 0));
      }
      return baseApps;
    }

    const scored = baseApps
      .map(app => {
        let score = 0;
        const name = (app.name || "").toLowerCase();
        const cat = (app.category || "").toLowerCase();
        const keywords = app.seo_keywords?.toLowerCase() || "";

        // Exact matches
        if (name === term) score += 1000;

        // "Starts with" matches
        if (name.startsWith(term)) score += 500;

        // Word-level matches (e.g. "India" in "Best India Apps")
        const nameWords = name.split(/\s+/);
        if (nameWords.some(w => w === term)) score += 300;
        if (nameWords.some(w => w.startsWith(term))) score += 200;

        // SEO Keywords (highest value for non-name metadata)
        if (keywords.includes(term)) {
          const keywordList = keywords.split(/,\s*/);
          if (keywordList.some(k => k === term)) score += 250;
          else score += 100;
        }

        // Substring matches
        if (name.includes(term)) score += 50;
        if (cat.includes(term)) score += 30;

        return { app, score };
      })
      .filter(item => item.score > 0);

    const resultingApps = scored
      .sort((a, b) => {
        // Sort by score first (highest first)
        if (b.score !== a.score) return b.score - a.score;
        // Fallback to serial number for identical scores
        return (a.app.serial_number || 0) - (b.app.serial_number || 0);
      })
      .map(item => item.app);

    if (deferredSortBy === 'rating_desc') {
      resultingApps.sort((a, b) => {
        const ra = typeof a.rating === 'number' ? a.rating : parseFloat(a.rating) || 0;
        const rb = typeof b.rating === 'number' ? b.rating : parseFloat(b.rating) || 0;
        return rb - ra;
      });
    } else if (deferredSortBy === 'rating_asc') {
      resultingApps.sort((a, b) => {
        const ra = typeof a.rating === 'number' ? a.rating : parseFloat(a.rating) || 0;
        const rb = typeof b.rating === 'number' ? b.rating : parseFloat(b.rating) || 0;
        return ra - rb;
      });
    }

    return resultingApps;
  }, [mockApps, deferredSearchTerm, deferredRatingFilter, deferredSortBy]);

  const hasMore = visibleCount < filteredApps.length;
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Exact on-trigger Play Store loading mechanism:
  // When the bottom sentinel enters viewport, show the spinner and load the next batch
  useEffect(() => {
    if (!sentinelRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsLoadingMore(true);
          // Trigger the page load cleanly
          setVisibleCount((prev) => {
            const nextCount = prev + ITEMS_PER_PAGE;
            const nextPage = Math.ceil(nextCount / ITEMS_PER_PAGE);
            const url = new URL(window.location.href);
            url.searchParams.set('page', String(nextPage));
            window.history.replaceState(null, '', url.toString());
            return nextCount;
          });
          setIsLoadingMore(false);
        }
      },
      { rootMargin: '0px 0px 50px 0px', threshold: 0.1 }
    );

    observer.observe(sentinelRef.current);

    return () => {
      observer.disconnect();
    };
  }, [hasMore, filteredApps.length]);

  const bannerItems = mockSettings.banners || [];

  return (
    <div className="select-none min-h-screen">
      <Meta 
        title={categoryParam ? `${activeTab} - ${mockSettings.seo_title || mockSettings.site_title}` : (mockSettings.seo_title || mockSettings.site_title)}
        description={mockSettings.meta_description}
        keywords={mockSettings.seo_keywords}
        canonical={categoryParam ? `https://www.rummydex.com/category/${categoryParam}` : `https://www.rummydex.com`}
        faqSchema={mockSettings.website_faqs && mockSettings.website_faqs.length > 0 ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": mockSettings.website_faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": typeof faq.answer === 'string' ? faq.answer.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim() : faq.answer
            }
          }))
        } : undefined}
      />
      {!deferredSearchTerm && (
        <WebsiteTitleHero settings={mockSettings} />
      )}

      {!deferredSearchTerm && deferredActiveTab.toLowerCase() !== 'categories' && deferredActiveTab.toLowerCase() !== 'top charts' && (
        <FeaturedBanner items={bannerItems} />
      )}

      {/* Modular New Additions Component */}
      {!deferredSearchTerm && (deferredActiveTab.toLowerCase() === 'all apps' || deferredActiveTab.toLowerCase() === 'all' || deferredActiveTab.toLowerCase() === 'home' || deferredActiveTab.toLowerCase() === 'apps') && (
        <NewAdditions loading={false} apps={filteredApps} />
      )}

      <PlayStoreTabs activeTab={activeTab} onTabChange={setActiveTab} hideOnSearch={!!deferredSearchTerm} />

      {/* Modular Filter Bar */}
      <HomeFilterBar 
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
        searchTerm={deferredSearchTerm}
        activeTab={deferredActiveTab}
      />

      {deferredSearchTerm && (
        <div className="px-0 sm:px-1 mb-4">
          <div className="flex items-center justify-between bg-blue-50/60 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 rounded-xl px-3 py-2 text-xs font-medium text-blue-900 dark:text-blue-200 mb-3">
            <span className="flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5 text-blue-500" />
              <span>Showing results for <strong>"{deferredSearchTerm}"</strong> ({filteredApps.length} found)</span>
            </span>
            <button
              onClick={() => {
                setSearchTerm('');
                navigate('/', { replace: true });
              }}
              className="text-blue-600 dark:text-blue-400 hover:underline font-bold text-xs cursor-pointer ml-2"
            >
              Clear Search
            </button>
          </div>
          <div className="space-y-2">
            {filteredApps.length === 0 ? (
              <div className="py-12 text-center text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50">
                <Search className="w-10 h-10 text-zinc-300 dark:text-zinc-600 mx-auto mb-2" />
                <p className="text-base font-bold text-zinc-800 dark:text-zinc-200">No applications matched "{deferredSearchTerm}"</p>
                <p className="text-xs text-zinc-400 mt-1">Try checking for typos or searching a broader keyword</p>
              </div>
            ) : (
              filteredApps.slice(0, visibleCount).map((app, index) => (
                <AppListItem key={`${app.id}-${index}`} app={app} index={index + 1} />
              ))
            )}
          </div>
        </div>
      )}

      {deferredActiveTab.toLowerCase() === 'top charts' && !deferredSearchTerm && (
        <div className="space-y-1 px-0 sm:px-1">
          {filteredApps.slice(0, visibleCount).map((app, index) => (
            <TopChartItem key={`${app.id}-${index}`} rank={index + 1} app={app} />
          ))}
          {mockApps.length === 0 && (
            <div className="p-8 text-center bg-zinc-50 dark:bg-zinc-900 rounded-2xl mx-4 mt-8 border border-zinc-200 dark:border-zinc-800">
              <svg className="w-12 h-12 text-zinc-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">No apps available</h3>
              <p className="text-sm text-zinc-500">
                The database might be temporarily unavailable. Please check back later.
              </p>
            </div>
          )}
        </div>
      )}

      {(() => {
        if (deferredSearchTerm) return null;
        const activeTabLower = deferredActiveTab.toLowerCase();
        const isHomeTab = activeTabLower === 'all apps' || 
                          activeTabLower === 'all' || 
                          activeTabLower === 'home' || 
                          activeTabLower === 'apps';
        return isHomeTab && (
          <div className="px-0 sm:px-1">
            <div className="space-y-2">
              {filteredApps.slice(0, visibleCount).map((app, index) => (
                <AppListItem key={`${app.id}-${index}`} app={app} index={index + 1} />
              ))}
            </div>
          </div>
        );
      })()}

      {deferredActiveTab.toLowerCase() === 'categories' && (
        <div className="grid grid-cols-2 gap-4 animate-fade-in px-0">
           {(() => {
             const cats = mockSettings.categories || [];
             const seen = new Set();
             const uniqueCats = cats.filter(c => {
               const l = c.toLowerCase();
               if (seen.has(l)) return false;
               seen.add(l);
               return l !== (cats[0]?.toLowerCase() || 'all apps') && l !== 'top charts' && l !== 'categories';
             });
             return uniqueCats.map((cat, idx) => (
               <button key={`cat-grid-${cat}-${idx}`} onClick={() => setActiveTab(cat)} className="flex items-center gap-4 p-5 glass-panel text-left active:scale-[0.98] transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-500 shrink-0">
                     <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">{cat}</span>
               </button>
             ));
           })()}
        </div>
      )}

      {(() => {
        const activeTabLower = deferredActiveTab.toLowerCase();
        const isHomeTab = activeTabLower === 'all apps' || 
                          activeTabLower === 'all' || 
                          activeTabLower === 'home' || 
                          activeTabLower === 'apps';
        const isExcluded = isHomeTab || activeTabLower === 'top charts' || activeTabLower === 'categories';
        
        return !isExcluded && (
        <div className="animate-fade-in space-y-2 px-0 sm:px-1">
          {(() => {
            const currentTabLower = deferredActiveTab.toLowerCase().trim();
            const tabApps = filteredApps.filter(app => {
              if (deferredSearchTerm) return true;
              const appCategories = app.category ? app.category.toLowerCase().split(',').map(c => c.trim()) : [];
              return appCategories.some(cat => cat === currentTabLower || cat.includes(currentTabLower) || currentTabLower.includes(cat));
            });
            return tabApps.length > 0 ? (
              tabApps.slice(0, visibleCount).map((app, index) => <AppListItem key={`${app.id}-${index}`} app={app} index={index + 1} />)
            ) : (
              <div className="text-center py-20 text-slate-400">
                <p className="text-lg">No apps found in {deferredActiveTab}</p>
              </div>
            );
          })()}
        </div>
        );
      })()}

      {filteredApps.length === 0 && deferredSearchTerm && (
        <div className="text-center py-20 text-slate-400">
          <p className="text-lg">No results found for "{searchTerm}"</p>
        </div>
      )}

      {/* Play Store Exact On-Trigger Spinner & Sentinel */}
      {hasMore && (
        <div ref={sentinelRef} className="py-8 flex flex-col items-center justify-center min-h-[72px]">
          {isLoadingMore ? (
            <div className="flex items-center justify-center gap-3">
              <div className="w-8 h-8 rounded-full border-3 border-blue-500 border-t-transparent animate-spin" />
            </div>
          ) : (
            <div className="w-2 h-2 opacity-0" />
          )}
        </div>
      )}

      {/* End of Catalog Notice */}
      {!hasMore && filteredApps.length > 0 && !deferredSearchTerm && (
        <div className="pt-4 pb-2 flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-3 w-full max-w-xs justify-center mb-1">
            <div className="h-px flex-1 bg-slate-200 dark:bg-zinc-800" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
              You're all caught up
            </span>
            <div className="h-px flex-1 bg-slate-200 dark:bg-zinc-800" />
          </div>
          <p className="text-xs text-slate-400 dark:text-zinc-600">
            Showing all {filteredApps.length} verified applications
          </p>
        </div>
      )}

      {/* Modular Website FAQs Section */}
      <HomeFaqSection faqs={mockSettings.website_faqs} searchTerm={deferredSearchTerm} />

    </div>
  );
}
