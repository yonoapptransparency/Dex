/**
 * Home landing page layout
 * Features the showcase carousel, real-time download tabs, and categorized app directories.
 */

import { useState, useEffect, useDeferredValue, useRef } from 'react';
import { useSearchParams, useLocation, useNavigate, useNavigationType } from 'react-router-dom';
import { useData } from '../contexts/DataContextPublic';
import Meta from '../components/Meta';
import { FeaturedBanner, PlayStoreTabs, AppListItemSkeleton } from '../components/PlayStoreUI';
import { WebsiteTitleHero } from '../components/WebsiteTitleHero';
import NewAdditions from '../components/public/NewAdditions';
import HomeFilterBar from '../components/public/HomeFilterBar';
import HomeFaqSection from '../components/public/HomeFaqSection';
import CategoriesGrid from '../components/public/CategoriesGrid';
import TopChartsList from '../components/public/TopChartsList';
import TabAppList from '../components/public/TabAppList';
import HomeTabList from '../components/public/HomeTabList';
import SearchResultsList from '../components/public/SearchResultsList';
import { useFilteredApps } from '../hooks/useFilteredApps';

const ITEMS_PER_PAGE = 15;
const STORAGE_KEY = 'home_feed_state';

export default function Home() {
  const { apps: mockApps, settings: mockSettings, loading } = useData();
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
  }, [visibleCount, activeTab]);

  // Save scroll position & visible count to sessionStorage only before unloading or navigating away
  useEffect(() => {
    const handleSaveState = () => {
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify({
          visibleCount: feedStateRef.current.visibleCount,
          scrollY: window.scrollY,
          activeTab: feedStateRef.current.activeTab
        }));
      } catch (e) {
        // Ignore storage errors
      }
    };

    window.addEventListener('beforeunload', handleSaveState);
    return () => {
      window.removeEventListener('beforeunload', handleSaveState);
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
    }
  }, [searchParams, location, mockSettings.categories]);

  // Reset pagination when filters or tab change
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [deferredSearchTerm, deferredActiveTab, deferredRatingFilter, deferredSortBy]);

  const filteredApps = useFilteredApps(
    mockApps,
    deferredSearchTerm,
    deferredRatingFilter,
    deferredSortBy
  );

  const hasMore = visibleCount < filteredApps.length;

  // Zero-lag IntersectionObserver prefetch trigger
  useEffect(() => {
    if (!sentinelRef.current || !hasMore || loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => {
            const nextCount = prev + ITEMS_PER_PAGE;
            const nextPage = Math.ceil(nextCount / ITEMS_PER_PAGE);
            const url = new URL(window.location.href);
            url.searchParams.set('page', String(nextPage));
            window.history.replaceState(null, '', url.toString());
            return nextCount;
          });
        }
      },
      { rootMargin: '400px 0px 400px 0px', threshold: 0.01 }
    );

    observer.observe(sentinelRef.current);

    return () => {
      observer.disconnect();
    };
  }, [hasMore, loading, filteredApps.length]);

  const bannerItems = mockSettings.banners || [];

  const activeTabLower = deferredActiveTab.toLowerCase();
  const isHomeTab = activeTabLower === 'all apps' ||
                    activeTabLower === 'all' ||
                    activeTabLower === 'home' ||
                    activeTabLower === 'apps';
  const isTopChartsTab = activeTabLower === 'top charts';
  const isCategoriesTab = activeTabLower === 'categories';
  const isExcludedTab = isHomeTab || isTopChartsTab || isCategoriesTab;

  return (
    <div className="select-none min-h-screen">
      <Meta 
        title={mockSettings.site_title}
        description={mockSettings.meta_description}
        keywords={mockSettings.seo_keywords}
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

      {!deferredSearchTerm && !isCategoriesTab && !isTopChartsTab && (
        <FeaturedBanner items={bannerItems} />
      )}

      {/* Modular New Additions Component */}
      {!deferredSearchTerm && isHomeTab && (
        <NewAdditions loading={loading} apps={filteredApps} />
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
        <SearchResultsList loading={loading} apps={filteredApps} visibleCount={visibleCount} />
      )}

      {isTopChartsTab && !deferredSearchTerm && (
        <TopChartsList loading={loading} apps={filteredApps} mockAppsLength={mockApps.length} visibleCount={visibleCount} />
      )}

      {!deferredSearchTerm && isHomeTab && (
        <HomeTabList loading={loading} apps={filteredApps} visibleCount={visibleCount} />
      )}

      {isCategoriesTab && (
        <CategoriesGrid categories={mockSettings.categories || []} setActiveTab={setActiveTab} />
      )}

      {!isExcludedTab && (
        <TabAppList
          loading={loading}
          apps={filteredApps}
          visibleCount={visibleCount}
          deferredActiveTab={deferredActiveTab}
          deferredSearchTerm={deferredSearchTerm}
        />
      )}

      {!loading && filteredApps.length === 0 && deferredSearchTerm && (
        <div className="text-center py-20 text-slate-400">
          <p className="text-lg">No results found for "{searchTerm}"</p>
        </div>
      )}

      {/* Infinite Scroll Prefetch Sentinel & Zero-CLS Skeletons */}
      {hasMore && !loading && (
        <div ref={sentinelRef} className="py-4 space-y-2 px-0 sm:px-1">
          <AppListItemSkeleton />
          <AppListItemSkeleton />
        </div>
      )}

      {/* Modular Website FAQs Section */}
      <HomeFaqSection faqs={mockSettings.website_faqs} searchTerm={deferredSearchTerm} />

    </div>
  );
}
