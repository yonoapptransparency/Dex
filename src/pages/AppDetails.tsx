/**
 * AppDetails deep overview
 * Renders technical and design features of individual applications with peer user reviews.
 */

import { useParams } from 'react-router-dom';
import { useData } from '../contexts/DataContextPublic';
import { Check } from 'lucide-react';
import { useEffect, useMemo, useState, useRef } from 'react';
import Meta from '../components/Meta';
import { useLiveAppStats } from '../hooks/useReviews';
import { getCachedLiveAppStats } from '../lib/communityFirebase';

import { mockApps as staticMockApps } from '../lib/lightFallback';
import { resolveAppSlug } from '../lib/slugResolver';
import { getPrefetchedApp } from '../lib/preloadHelper';
import AppDetailsSkeleton from '../components/public/AppDetailsSkeleton';
import AppHeader from '../components/public/AppHeader';
import AppActionButtons from '../components/public/AppActionButtons';
import AppScreenshots from '../components/public/AppScreenshots';
import AppAboutSection from '../components/public/AppAboutSection';
import AppFaqSection from '../components/public/AppFaqSection';
import AppSpecsBar from '../components/public/AppSpecsBar';
import AppSafetyBoxes from '../components/public/AppSafetyBoxes';
import UserReviews from '../components/UserReviews';
import { AppDetailsNavigation } from '../components/public/appDetails/AppDetailsNavigation';
import { AppSimilarCarousel } from '../components/public/appDetails/AppSimilarCarousel';
import AppNotFound from '../components/public/appDetails/AppNotFound';
import { buildFaqSchema, buildSoftwareSchema, buildBreadcrumbSchema } from '../components/public/appDetails/appDetailsSchemas';

export { AppDetailsSkeleton };

export default function AppDetails() {
  const { apps: mockApps, news: mockNews, settings: mockSettings, loading, refreshAll, updateAppDetail } = useData();
  const { slug: routeSlug, "*": splat } = useParams();
  const decodedSplat = splat ? decodeURIComponent(splat) : '';
  const splatStripped = decodedSplat.replace(/^\/app\//, '/').replace(/^\/|\/$/g, '');
  const slug = routeSlug || splatStripped;

  const [fetchedApp, setFetchedApp] = useState<any | null>(null);
  const [isFetchingDetails, setIsFetchingDetails] = useState(false);

  // Instant multi-tier app resolution: Prioritizes full specifications, descriptions, and metadata
  const app = useMemo(() => {
    if (!slug) return null;
    
    // 1. Resolve app from available sources (fetched, prefetched, client state, SSR initial data, and static catalogue)
    let resolvedApp = fetchedApp || getPrefetchedApp(slug);
    if (!resolvedApp && Array.isArray(mockApps)) {
      resolvedApp = resolveAppSlug(slug, mockApps);
    }
    if (!resolvedApp && typeof window !== 'undefined' && (window as any).__INITIAL_DATA__?.apps) {
      resolvedApp = resolveAppSlug(slug, (window as any).__INITIAL_DATA__.apps);
    }
    if (!resolvedApp && Array.isArray(staticMockApps)) {
      resolvedApp = resolveAppSlug(slug, staticMockApps);
    }

    if (!resolvedApp) return null;

    // 2. High-reliability fallback: If resolvedApp is missing rich content (description_html, features_html, etc.),
    // immediately recover them from staticMockApps or mockApps so the user and web crawlers see the full overview with 0ms delay.
    let descHtml = resolvedApp.description_html || '';
    let featHtml = resolvedApp.features_html || '';
    let screenShots = Array.isArray(resolvedApp.screenshots) && resolvedApp.screenshots.length > 0 ? resolvedApp.screenshots : [];
    let faqsList = Array.isArray(resolvedApp.faqs) && resolvedApp.faqs.length > 0 ? resolvedApp.faqs : [];
    let customBoxHtml = resolvedApp.custom_admin_box_html || '';
    let customBoxHeading = resolvedApp.custom_admin_box_heading || '';

    const fallbackApp = resolveAppSlug(slug, staticMockApps || []) || 
                        (typeof window !== 'undefined' && (window as any).__INITIAL_DATA__?.apps ? resolveAppSlug(slug, (window as any).__INITIAL_DATA__.apps) : null) ||
                        resolveAppSlug(slug, mockApps || []);

    if (fallbackApp) {
      if (!descHtml || descHtml.trim().length <= 10) {
        if (fallbackApp.description_html && fallbackApp.description_html.trim().length > 10) {
          descHtml = fallbackApp.description_html;
        }
      }
      if (!featHtml || featHtml.trim().length <= 5) {
        if (fallbackApp.features_html && fallbackApp.features_html.trim().length > 5) {
          featHtml = fallbackApp.features_html;
        }
      }
      if (screenShots.length === 0 && Array.isArray(fallbackApp.screenshots) && fallbackApp.screenshots.length > 0) {
        screenShots = fallbackApp.screenshots;
      }
      if (faqsList.length === 0 && Array.isArray(fallbackApp.faqs) && fallbackApp.faqs.length > 0) {
        faqsList = fallbackApp.faqs;
      }
      if (!customBoxHtml && fallbackApp.custom_admin_box_html) {
        customBoxHtml = fallbackApp.custom_admin_box_html;
      }
      if (!customBoxHeading && fallbackApp.custom_admin_box_heading) {
        customBoxHeading = fallbackApp.custom_admin_box_heading;
      }
    }

    return {
      ...resolvedApp,
      description_html: descHtml,
      features_html: featHtml,
      screenshots: screenShots,
      faqs: faqsList,
      custom_admin_box_html: customBoxHtml,
      custom_admin_box_heading: customBoxHeading,
      release_notes: resolvedApp.release_notes || '',
      yellow_box_msg: resolvedApp.yellow_box_msg || '',
      red_box_msg: resolvedApp.red_box_msg || '',
      idea_box_msg: resolvedApp.idea_box_msg || '',
      file_size: resolvedApp.file_size || '45 MB',
      version: resolvedApp.version || '1.0.0',
      developer: resolvedApp.developer || 'Developer',
      safety_status: resolvedApp.safety_status || 'Verified',
    };
  }, [slug, mockApps, fetchedApp]);
  
  const [triedRefresh, setTriedRefresh] = useState(false);
  const syncAttemptedRef = useRef<Record<string, boolean>>({});
  const [reviewsRefreshKey] = useState(0);
  const liveStats = useLiveAppStats(app?.id || '', app?.slug || '');

  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
  const [shareToast, setShareToast] = useState(false);

  const specificCategory = useMemo(() => {
    if (!app?.category) return 'All Apps';
    const first = app.category.split(',')[0]?.trim() || '';
    return (first && !['all apps', 'all', 'apps', 'general'].includes(first.toLowerCase())) ? first : 'All Apps';
  }, [app?.category]);

  // Single-pass high-performance category metrics and balanced circular internal linking
  const { relatedApps, totalCategoryAppsCount } = useMemo(() => {
    if (!app || !Array.isArray(mockApps) || mockApps.length === 0) {
      return { relatedApps: [], totalCategoryAppsCount: 0 };
    }

    const currentCatLower = specificCategory.toLowerCase();
    const isAll = currentCatLower === 'all apps';
    const appId = String(app.id || '');
    const appSlug = String(app.slug || '').toLowerCase();

    const newApps: any[] = [];
    const regularApps: any[] = [];
    let totalCatCount = 0;

    for (let i = 0; i < mockApps.length; i++) {
      const a = mockApps[i];
      if (!a) continue;

      const isCurrent = String(a.id) === appId || (a.slug && a.slug.toLowerCase() === appSlug);
      const aCat = (a.category || '').toLowerCase();
      const matchesCategory = isAll || aCat.includes(currentCatLower);

      if (matchesCategory) {
        totalCatCount++;
        if (!isCurrent) {
          const rawItem = a as any;
          const badgeStr = typeof rawItem.badge === 'string' ? rawItem.badge.trim().toUpperCase() : '';
          const tagsArr = Array.isArray(rawItem.tags) ? rawItem.tags : [];
          const isNew = Boolean(
            rawItem.is_new === true || rawItem.is_new === 'true' || rawItem.is_new === 1 ||
            rawItem.isNew === true || rawItem.isNew === 'true' || rawItem.isNew === 1 ||
            badgeStr === 'NEW' || badgeStr.includes('NEW') ||
            tagsArr.some((t: any) => String(t).toUpperCase().includes('NEW'))
          );
          if (isNew) {
            newApps.push(a);
          } else {
            regularApps.push(a);
          }
        }
      }
    }

    // 1. Sort new apps strictly by serial_number ascending
    newApps.sort((a, b) => (Number(a.serial_number) || 999999) - (Number(b.serial_number) || 999999));

    // 2. Sort regular apps strictly by serial_number ascending
    regularApps.sort((a, b) => (Number(a.serial_number) || 999999) - (Number(b.serial_number) || 999999));

    const maxCount = 16;
    const pinnedNew = newApps.slice(0, Math.min(newApps.length, maxCount));
    const remainingSlots = maxCount - pinnedNew.length;

    // Balanced Circular Internal Linking:
    // Stagger regular apps circularly starting right after current app's position
    const pickedRegular: any[] = [];
    if (remainingSlots > 0 && regularApps.length > 0) {
      let startIndex = 0;
      const currSerial = Number(app.serial_number);
      if (!isNaN(currSerial) && currSerial > 0) {
        const nextIdx = regularApps.findIndex(a => (Number(a.serial_number) || 0) > currSerial);
        startIndex = nextIdx !== -1 ? nextIdx : 0;
      } else {
        const str = String(app.slug || app.id || '');
        let hash = 0;
        for (let i = 0; i < str.length; i++) hash = ((hash << 5) - hash) + str.charCodeAt(i);
        startIndex = Math.abs(hash) % regularApps.length;
      }

      const countToPick = Math.min(remainingSlots, regularApps.length);
      for (let step = 0; step < countToPick; step++) {
        pickedRegular.push(regularApps[(startIndex + step) % regularApps.length]);
      }
    }

    const mapped = [...pinnedNew, ...pickedRegular].map((a: any) => ({
      id: a.id,
      name: a.name,
      slug: a.slug,
      icon_url: a.icon_url,
      is_new: Boolean(a.is_new === true || a.is_new === 'true' || a.isNew || a.badge?.toLowerCase() === 'new'),
      is_hot: Boolean(a.is_hot === true || a.is_hot === 'true' || a.isHot || a.badge?.toLowerCase() === 'hot'),
      serial_number: a.serial_number
    }));

    return { relatedApps: mapped, totalCategoryAppsCount: totalCatCount };
  }, [mockApps, app?.category, app?.id, app?.slug, app?.serial_number, specificCategory]);

  useEffect(() => {
    if (!app?.is_coming_soon || !app?.publish_date) {
      setTimeRemaining(null);
      return;
    }

    const calculateRemaining = () => {
      const remaining = new Date(app.publish_date!).getTime() - new Date().getTime();
      setTimeRemaining(remaining > 0 ? remaining : 0);
    };

    calculateRemaining();
    const interval = setInterval(calculateRemaining, 1000);
    return () => clearInterval(interval);
  }, [app?.is_coming_soon, app?.publish_date]);

  const isActuallyComingSoon = app?.is_coming_soon && (timeRemaining === null || timeRemaining > 0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTriedRefresh(false);
    if (fetchedApp && slug) {
      const curKey = slug.toLowerCase().trim();
      const fSlug = String(fetchedApp.slug || fetchedApp.id || '').toLowerCase().trim();
      if (fSlug !== curKey && !resolveAppSlug(curKey, [fetchedApp])) {
        setFetchedApp(null);
      }
    }
    setIsFetchingDetails(false);
  }, [slug]);

  useEffect(() => {
    const handlePrefetched = (evt: any) => {
      const prefetched = evt?.detail?.app;
      if (prefetched && slug) {
        const curKey = slug.toLowerCase();
        const pSlug = String(prefetched.slug || prefetched.id || '').toLowerCase();
        if (pSlug === curKey || resolveAppSlug(curKey, [prefetched])) {
          setFetchedApp(prefetched);
        }
      }
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('yd-app-details-prefetched', handlePrefetched);
      return () => window.removeEventListener('yd-app-details-prefetched', handlePrefetched);
    }
  }, [slug]);

  useEffect(() => {
    const slugKey = slug?.toLowerCase() || '';
    if (!slugKey) return;

    // 1. Never trigger background network XHR calls during crawler passes (Googlebot, Bingbot, Lighthouse)
    const isCrawler = typeof navigator !== 'undefined' && /googlebot|google-inspectiontool|bingbot|slurp|duckduckbot|baiduspider|yandexbot|crawler|spider|lighthouse|chrome-lighthouse|headless/i.test(navigator.userAgent || '');
    if (isCrawler) return;

    // 2. Check if app already has complete rich content (description & features) from pre-render or memory
    if (app && app.description_html && app.description_html.trim().length > 15) {
      return;
    }

    // 3. Check if fetchedApp is already loaded for this slug
    const fetchedSlug = fetchedApp ? String(fetchedApp.slug || fetchedApp.id || '').toLowerCase() : '';
    if (fetchedApp && (fetchedSlug === slugKey || resolveAppSlug(slugKey, [fetchedApp]))) {
      return;
    }

    const prefetched = getPrefetchedApp(slugKey);
    if (prefetched && prefetched.description_html && prefetched.description_html.trim().length > 10) {
      setFetchedApp(prefetched);
      if (updateAppDetail) updateAppDetail(prefetched);
      return;
    }

    if (!syncAttemptedRef.current[slugKey]) {
      syncAttemptedRef.current[slugKey] = true;
      setIsFetchingDetails(true);

      fetch(`/api/v1/public/app/${encodeURIComponent(slugKey)}`)
        .then(res => {
          if (res.ok) return res.json();
          throw new Error(`HTTP ${res.status}`);
        })
        .then(data => {
          if (data?.status === 'OK' && data?.app) {
            setFetchedApp(data.app);
            if (updateAppDetail) updateAppDetail(data.app);
          }
        })
        .catch(() => {
          // Graceful fallback to static local cache - never trigger recursive backup-data network storms
        })
        .finally(() => {
          setIsFetchingDetails(false);
        });
    }
  }, [slug, fetchedApp, app, updateAppDetail]);

  if (!app && loading) return <AppDetailsSkeleton />;
  if (!app) return <AppNotFound slug={slug || ''} />;

  const title = app.seo_title || app.meta_title || app.name;
  
  const stripHtml = (html: string) => {
    if (!html) return '';
    return html.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim();
  };

  const cleanSeoDescription = (rawDesc: string) => {
    if (!rawDesc) return '';
    const trimmed = rawDesc.trim();
    if (trimmed.startsWith('<') || trimmed.includes('<meta ')) {
      const metaMatch = trimmed.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
      if (metaMatch && metaMatch[1]) return metaMatch[1].trim();
      const ogMatch = trimmed.match(/<meta\s+property=["']og:description["']\s+content=["'](.*?)["']/i);
      if (ogMatch && ogMatch[1]) return ogMatch[1].trim();
      return stripHtml(trimmed);
    }
    return trimmed;
  };
  
  const desc = cleanSeoDescription(app.seo_description || app.meta_description) || (app.description_html ? stripHtml(app.description_html).substring(0, 160) : `${app.name} application specifications`);
  const ogImage = app.og_image_url || app.icon_url;

  const faqSchema = buildFaqSchema(app);
  
  const staticStats = getCachedLiveAppStats(app?.id, app?.slug) || getCachedLiveAppStats(slug, slug);
  const activeStats = (liveStats && Number(liveStats.totalReviews) > 0) ? liveStats : staticStats;
  const hasLiveReviews = Boolean(activeStats && Number(activeStats.totalReviews) > 0);
  const realRatingVal = hasLiveReviews
    ? Math.max(1.0, Math.min(5.0, parseFloat(String(activeStats.averageRating))))
    : (app.rating ? Math.max(1.0, Math.min(5.0, parseFloat(String(app.rating)))) : 4.5);
  const realReviewCount = hasLiveReviews 
    ? Number(activeStats.totalReviews) 
    : 0;

  const softwareSchema = buildSoftwareSchema(app, desc, hasLiveReviews, realRatingVal, realReviewCount);
  const breadcrumbSchema = buildBreadcrumbSchema(app, specificCategory);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        setShareToast(true);
        setTimeout(() => setShareToast(false), 2050);
      })
      .catch((err) => console.error('Failed to copy text: ', err));
  };

  const handleShare = async () => {
    const shareUrl = app.canonical_url || window.location.href;
    const shareTitle = title;
    const shareText = desc;
    if (navigator.share) {
      try {
        await navigator.share({ title: shareTitle, text: shareText, url: shareUrl });
      } catch (err) {
        if ((err as Error).name !== 'AbortError') copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const relatedNewsCount = useMemo(() => {
    if (!mockNews || !Array.isArray(mockNews)) return 0;
    const nameLower = (app?.name || '').toLowerCase().trim();
    const appId = app?.id;
    return mockNews.filter(n => {
      if (!n || n.sync_to_public === false) return false;
      if (appId && n.related_app_id === appId) return true;
      if (!nameLower) return false;
      return (
        n.title?.toLowerCase().includes(nameLower) ||
        n.description?.toLowerCase().includes(nameLower) ||
        (Array.isArray(n.tags) && n.tags.some((t: string) => t.toLowerCase() === nameLower))
      );
    }).length;
  }, [mockNews, app?.name, app?.id]);

  return (
    <div className="w-full">
      {shareToast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-5 py-3 rounded-full shadow-xl flex items-center gap-2 border border-white/10 dark:border-black/5 animate-fade-in transition-all"
        >
          <Check className="w-4 h-4 text-green-500 font-bold animate-bounce" />
          <span className="text-sm font-semibold tracking-wide">Link copied to clipboard!</span>
        </div>
      )}
      
      <AppDetailsNavigation appName={app.name} relatedNewsCount={relatedNewsCount} />

      <Meta 
        title={title}
        description={desc}
        keywords={app.seo_keywords}
        image={ogImage}
        canonical={app.canonical_url || `https://www.rummydex.com/app/${app.slug}`}
        schema={softwareSchema}
        faqSchema={faqSchema}
        breadcrumbSchema={breadcrumbSchema}
      />
      <div className="w-full">
        <AppHeader app={app} />

        <AppSpecsBar 
          rating={realRatingVal} 
          file_size={app.file_size} 
          category={app.category} 
          version={app.version} 
        />

        <AppActionButtons 
          app={app} 
          isActuallyComingSoon={isActuallyComingSoon} 
          timeRemaining={timeRemaining} 
          handleShare={handleShare} 
        />

        <AppSimilarCarousel 
          relatedApps={relatedApps} 
          specificCategory={specificCategory} 
          totalCategoryCount={totalCategoryAppsCount} 
        />

        <div>
          <AppScreenshots app={app} />
        </div>

        <div>
          <AppAboutSection app={app} isFetching={isFetchingDetails && !app.description_html} />
        </div>

        <div>
          <AppSafetyBoxes app={app} />
        </div>
      </div>

      <div className="px-1 xs:px-2 sm:px-4 md:px-6 mb-6 xs:mb-8">
        <UserReviews 
          key={`${app.id}_${app.slug || ''}_${reviewsRefreshKey}`} 
          appId={app.id} 
          appTitle={app.name} 
          appSlug={app.slug}
          category={app.category}
          overallRating={realRatingVal} 
          totalReviewCount={realReviewCount} 
        />
      </div>
      
      <div>
        <AppFaqSection faqs={app.faqs} />
      </div>
    </div>
  );
}
