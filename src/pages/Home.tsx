/**
 * Home landing page layout
 * Features the showcase carousel, real-time download tabs, and categorized app directories.
 */

import { useState, useEffect, useMemo, useDeferredValue, useRef } from 'react';
import { useSearchParams, useLocation, useNavigate, useNavigationType, useParams } from 'react-router-dom';
import { useData } from '../contexts/DataContextPublic';
import Meta from '../components/Meta';
import { FeaturedBanner, PlayStoreTabs, TopChartItem, AppListItem } from '../components/PlayStoreUI';
import { WebsiteTitleHero } from '../components/WebsiteTitleHero';
import NewAdditions from '../components/public/NewAdditions';
import HomeFilterBar from '../components/public/HomeFilterBar';
import HomeFaqSection from '../components/public/HomeFaqSection';
import HomeCategoryGrid from '../components/public/home/HomeCategoryGrid';
import HomeSearchResults from '../components/public/home/HomeSearchResults';

const ITEMS_PER_PAGE = 24;
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

  useEffect(() => {
    if (navType === 'POP') {
      try {
        const saved = sessionStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed && typeof parsed.scrollY === 'number' && parsed.scrollY > 0) {
            window.scrollTo({ top: parsed.scrollY, behavior: 'instant' });
            return;
          }
        }
      } catch (e) {
        // Ignore
      }
    } else {
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

  useEffect(() => {
    let scrollDebounceTimer: any = null;

    const saveFeedState = () => {
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify({
          visibleCount: feedStateRef.current.visibleCount,
          scrollY: window.scrollY,
          activeTab: feedStateRef.current.activeTab
        }));
      } catch (e) {
        // Ignore
      }
    };

    const handleScroll = () => {
      if (scrollDebounceTimer) clearTimeout(scrollDebounceTimer);
      scrollDebounceTimer = setTimeout(saveFeedState, 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', saveFeedState);
    return () => {
      if (scrollDebounceTimer) clearTimeout(scrollDebounceTimer);
      saveFeedState();
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', saveFeedState);
    };
  }, []);

  useEffect(() => {
    const q = searchParams.get('q');
    if (q !== null && q !== searchTerm) {
      setSearchTerm(q);
    }
    const tab = searchParams.get('tab');
    const pathLower = location.pathname.toLowerCase().replace(/\/+$/, '') || '/';
    if (tab) {
      setActiveTab(tab);
    } else if (pathLower === '/categories') {
      setActiveTab('Categories');
    } else if (pathLower === '/new-apps') {
      setActiveTab('All Apps');
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

  const isInitialFilterMount = useRef(true);
  useEffect(() => {
    if (isInitialFilterMount.current) {
      isInitialFilterMount.current = false;
      return;
    }
    setVisibleCount(ITEMS_PER_PAGE);
  }, [deferredSearchTerm, deferredActiveTab, deferredRatingFilter, deferredSortBy]);

  const filteredApps = useMemo(() => {
    const term = deferredSearchTerm.toLowerCase().trim();
    let baseApps = [...mockApps];

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
      if (deferredSortBy === 'newest') {
        baseApps.sort((a, b) => {
          const na = a.is_new ? 1 : 0;
          const nb = b.is_new ? 1 : 0;
          if (nb !== na) return nb - na;
          const da = a.updated_at || a.created_at ? new Date(a.updated_at || a.created_at).getTime() : 0;
          const db = b.updated_at || b.created_at ? new Date(b.updated_at || b.created_at).getTime() : 0;
          if (db !== da) return db - da;
          const sa = typeof a.serial_number === 'number' && a.serial_number > 0 ? a.serial_number : 999999;
          const sb = typeof b.serial_number === 'number' && b.serial_number > 0 ? b.serial_number : 999999;
          return sa - sb;
        });
      } else if (deferredSortBy === 'rating_desc') {
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
        baseApps.sort((a, b) => {
          const sa = typeof a.serial_number === 'number' && a.serial_number > 0 ? a.serial_number : 999999;
          const sb = typeof b.serial_number === 'number' && b.serial_number > 0 ? b.serial_number : 999999;
          return sa - sb;
        });
      }
      return baseApps;
    }

    const scored = baseApps
      .map(app => {
        let score = 0;
        const name = (app.name || "").toLowerCase();
        const cat = (app.category || "").toLowerCase();
        const keywords = app.seo_keywords?.toLowerCase() || "";

        if (name === term) score += 1000;
        if (name.startsWith(term)) score += 500;

        const nameWords = name.split(/\s+/);
        if (nameWords.some(w => w === term)) score += 300;
        if (nameWords.some(w => w.startsWith(term))) score += 200;

        if (keywords.includes(term)) {
          const keywordList = keywords.split(/,\s*/);
          if (keywordList.some(k => k === term)) score += 250;
          else score += 100;
        }

        if (name.includes(term)) score += 50;
        if (cat.includes(term)) score += 30;

        return { app, score };
      })
      .filter(item => item.score > 0);

    const resultingApps = scored
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        const sa = typeof a.app.serial_number === 'number' && a.app.serial_number > 0 ? a.app.serial_number : 999999;
        const sb = typeof b.app.serial_number === 'number' && b.app.serial_number > 0 ? b.app.serial_number : 999999;
        return sa - sb;
      })
      .map(item => item.app);

    if (deferredSortBy === 'newest') {
      resultingApps.sort((a, b) => {
        const na = a.is_new ? 1 : 0;
        const nb = b.is_new ? 1 : 0;
        if (nb !== na) return nb - na;
        const da = a.updated_at || a.created_at ? new Date(a.updated_at || a.created_at).getTime() : 0;
        const db = b.updated_at || b.created_at ? new Date(b.updated_at || b.created_at).getTime() : 0;
        return db - da;
      });
    } else if (deferredSortBy === 'rating_desc') {
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

  const cleanPathLower = location.pathname.toLowerCase().replace(/\/+$/, '') || '/';
  const isNewAppsRoute = cleanPathLower === '/new-apps';
  const isCategoriesIndexRoute = cleanPathLower === '/categories';
  const isPureHomeRoute = cleanPathLower === '/';

  const activeTabLower = deferredActiveTab.toLowerCase().trim();
  const isHomeTab = !isNewAppsRoute && !isCategoriesIndexRoute && !categoryParam && (
    activeTabLower === 'all apps' || 
    activeTabLower === 'all' || 
    activeTabLower === 'home' || 
    activeTabLower === 'apps'
  );

  const tabFilteredApps = useMemo(() => {
    if (deferredSearchTerm) return filteredApps;
    if (isNewAppsRoute) {
      const newOnly = filteredApps.filter(app => Boolean(app.is_new || app.is_hot));
      return newOnly.length > 0 ? newOnly : filteredApps.slice(0, 24);
    }
    if (isHomeTab) return filteredApps;
    if (activeTabLower === 'top charts' || activeTabLower === 'categories' || isCategoriesIndexRoute) return filteredApps;
    return filteredApps.filter(app => {
      const appCategories = app.category ? app.category.toLowerCase().split(',').map(c => c.trim()) : [];
      return appCategories.some(cat => cat === activeTabLower || cat.includes(activeTabLower) || activeTabLower.includes(cat));
    });
  }, [filteredApps, deferredSearchTerm, isNewAppsRoute, isHomeTab, activeTabLower, isCategoriesIndexRoute]);

  const hasMore = visibleCount < tabFilteredApps.length;

  useEffect(() => {
    if (!sentinelRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => {
            const nextCount = Math.min(prev + ITEMS_PER_PAGE, tabFilteredApps.length);
            const nextPage = Math.ceil(nextCount / ITEMS_PER_PAGE);
            try {
              if (typeof window !== 'undefined' && window.scrollY > 50) {
                const url = new URL(window.location.href);
                url.searchParams.set('page', String(nextPage));
                window.history.replaceState(null, '', url.toString());
              }
            } catch (_) {}
            return nextCount;
          });
        }
      },
      { rootMargin: '0px 0px 300px 0px', threshold: 0 }
    );

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [hasMore, tabFilteredApps.length]);

  const bannerItems = mockSettings.banners || [];
  const siteTitleLabel = mockSettings.site_title || 'RummyDex';

  const resolvedTitle = isNewAppsRoute
    ? ((mockSettings as any).new_apps_meta_title || 'New Apps & Latest Releases')
    : isCategoriesIndexRoute
    ? ((mockSettings as any).categories_meta_title || 'App Categories & Genres')
    : categoryParam
    ? `${activeTab} - Download & Reviews`
    : (mockSettings.seo_title || mockSettings.site_title);

  const resolvedDescription = isNewAppsRoute
    ? ((mockSettings as any).new_apps_meta_description || `Explore the newest released Rummy, Teen Patti, and card game apps with verified ratings.`)
    : isCategoriesIndexRoute
    ? ((mockSettings as any).categories_meta_description || `Browse all gaming and entertainment application categories.`)
    : categoryParam
    ? `Explore top ${activeTab}, verified reviews, download ratings, and bonus updates.`
    : (mockSettings.seo_description || mockSettings.meta_description);

  const resolvedCanonical = isNewAppsRoute
    ? 'https://www.rummydex.com/new-apps'
    : isCategoriesIndexRoute
    ? 'https://www.rummydex.com/categories'
    : categoryParam
    ? `https://www.rummydex.com/category/${categoryParam}`
    : 'https://www.rummydex.com';

  const collectionSchema = useMemo(() => {
    if (isPureHomeRoute) return undefined;
    return {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${resolvedCanonical}#collection`,
      "url": resolvedCanonical,
      "name": resolvedTitle,
      "headline": resolvedTitle,
      "description": resolvedDescription,
      "inLanguage": "en",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.rummydex.com/#website",
        "name": siteTitleLabel,
        "url": "https://www.rummydex.com"
      }
    };
  }, [isPureHomeRoute, resolvedCanonical, resolvedTitle, resolvedDescription, siteTitleLabel]);

  const collectionBreadcrumbSchema = useMemo(() => {
    if (isPureHomeRoute) return undefined;
    const items: any[] = [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.rummydex.com" }
    ];
    if (isNewAppsRoute) {
      items.push({ "@type": "ListItem", "position": 2, "name": "New Apps", "item": resolvedCanonical });
    } else if (isCategoriesIndexRoute) {
      items.push({ "@type": "ListItem", "position": 2, "name": "Categories", "item": resolvedCanonical });
    } else if (categoryParam) {
      items.push({ "@type": "ListItem", "position": 2, "name": "Categories", "item": "https://www.rummydex.com/categories" });
      items.push({ "@type": "ListItem", "position": 3, "name": activeTab, "item": resolvedCanonical });
    }
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items
    };
  }, [isPureHomeRoute, isNewAppsRoute, isCategoriesIndexRoute, categoryParam, activeTab, resolvedCanonical]);

  return (
    <div className="select-none min-h-screen">
      <Meta 
        title={resolvedTitle}
        description={resolvedDescription}
        keywords={mockSettings.seo_keywords}
        canonical={resolvedCanonical}
        schema={collectionSchema}
        breadcrumbSchema={collectionBreadcrumbSchema}
      />
      {isPureHomeRoute && !deferredSearchTerm && (
        <WebsiteTitleHero settings={mockSettings} />
      )}

      {!isPureHomeRoute && !deferredSearchTerm && (
        <div className="pt-2 pb-3 px-1">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mb-2">
            <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} className="hover:text-blue-600 transition-colors">Home</a>
            <span>/</span>
            {categoryParam ? (
              <>
                <a href="/categories" onClick={(e) => { e.preventDefault(); navigate('/categories'); }} className="hover:text-blue-600 transition-colors">Categories</a>
                <span>/</span>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">{activeTab}</span>
              </>
            ) : (
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                {isNewAppsRoute ? 'New Apps' : 'Categories'}
              </span>
            )}
          </nav>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            {isNewAppsRoute
              ? 'Newly Added & Updated Applications'
              : isCategoriesIndexRoute
              ? 'Application Categories'
              : `${activeTab} Apps & Reviews`}
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            {isNewAppsRoute
              ? `Discover the latest verified card, arcade, and gaming applications added to ${siteTitleLabel}.`
              : isCategoriesIndexRoute
              ? `Browse apps by game genre and category on ${siteTitleLabel}.`
              : `Explore all ${tabFilteredApps.length} verified ${activeTab} applications, ratings, download specifications, and reviews on ${siteTitleLabel}.`}
          </p>
        </div>
      )}

      {isPureHomeRoute && !deferredSearchTerm && deferredActiveTab.toLowerCase() !== 'categories' && deferredActiveTab.toLowerCase() !== 'top charts' && (
        <FeaturedBanner items={bannerItems} />
      )}

      {isPureHomeRoute && !deferredSearchTerm && isHomeTab && (
        <NewAdditions loading={false} apps={filteredApps} />
      )}

      <PlayStoreTabs activeTab={activeTab} onTabChange={setActiveTab} hideOnSearch={!!deferredSearchTerm} />

      <HomeFilterBar 
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
        searchTerm={deferredSearchTerm}
        activeTab={isNewAppsRoute ? 'New Apps' : deferredActiveTab}
        totalCount={deferredSearchTerm ? filteredApps.length : tabFilteredApps.length}
      />

      <HomeSearchResults 
        searchTerm={deferredSearchTerm} 
        filteredApps={filteredApps} 
        visibleCount={visibleCount} 
        onClearSearch={() => {
          setSearchTerm('');
          navigate('/', { replace: true });
        }} 
      />

      {deferredActiveTab.toLowerCase() === 'top charts' && !deferredSearchTerm && (
        <div className="space-y-1 px-0 sm:px-1">
          {filteredApps.slice(0, visibleCount).map((app, index) => (
            <TopChartItem key={`${app.id}-${index}`} rank={index + 1} app={app} />
          ))}
          {mockApps.length === 0 && (
            <div className="p-8 text-center bg-zinc-50 dark:bg-zinc-900 rounded-2xl mx-4 mt-8 border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">No apps available</h3>
              <p className="text-sm text-zinc-500">
                The database might be temporarily unavailable. Please check back later.
              </p>
            </div>
          )}
        </div>
      )}

      {!deferredSearchTerm && isHomeTab && (
        <div className="px-0 sm:px-1">
          <div className="space-y-2">
            {filteredApps.slice(0, visibleCount).map((app, index) => (
              <AppListItem key={`${app.id}-${index}`} app={app} index={index + 1} />
            ))}
          </div>
        </div>
      )}

      {(deferredActiveTab.toLowerCase() === 'categories' || isCategoriesIndexRoute) && !deferredSearchTerm && (
        <HomeCategoryGrid categories={mockSettings.categories || []} apps={mockApps} setActiveTab={setActiveTab} />
      )}

      {(() => {
        const isExcluded = isHomeTab || activeTabLower === 'top charts' || activeTabLower === 'categories' || isCategoriesIndexRoute;
        
        return !isExcluded && !deferredSearchTerm && (
          <div className="animate-fade-in space-y-2 px-0 sm:px-1">
            {tabFilteredApps.length > 0 ? (
              tabFilteredApps.slice(0, visibleCount).map((app, index) => <AppListItem key={`${app.id}-${index}`} app={app} index={index + 1} />)
            ) : (
              <div className="text-center py-20 text-slate-400">
                <p className="text-lg">No apps found in {isNewAppsRoute ? 'New Apps' : deferredActiveTab}</p>
              </div>
            )}
          </div>
        );
      })()}

      {hasMore && (
        <div ref={sentinelRef} className="py-8 flex flex-col items-center justify-center min-h-[72px]">
          <div className="w-2 h-2 opacity-0" />
        </div>
      )}

      {!hasMore && tabFilteredApps.length > 0 && !deferredSearchTerm && activeTabLower !== 'categories' && !isCategoriesIndexRoute && (
        <div className="pt-4 pb-2 flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-3 w-full max-w-xs justify-center mb-1">
            <div className="h-px flex-1 bg-slate-200 dark:bg-zinc-800" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
              You're all caught up
            </span>
            <div className="h-px flex-1 bg-slate-200 dark:bg-zinc-800" />
          </div>
          <p className="text-xs text-slate-400 dark:text-zinc-600">
            Showing all {tabFilteredApps.length} verified applications
          </p>
        </div>
      )}

      {isPureHomeRoute && (
        <HomeFaqSection faqs={mockSettings.website_faqs} searchTerm={deferredSearchTerm} />
      )}
    </div>
  );
}
