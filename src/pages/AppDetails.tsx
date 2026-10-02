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

import { mockApps as staticMockApps } from '../lib/staticData';
import { resolveAppSlug } from '../lib/slugResolver';
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
    
    let dynamicApp = fetchedApp;
    if (!dynamicApp && Array.isArray(mockApps)) {
      dynamicApp = resolveAppSlug(slug, mockApps);
    }
    const staticApp = Array.isArray(staticMockApps) ? resolveAppSlug(slug, staticMockApps) : null;

    if (!dynamicApp && !staticApp) return null;

    const merged = { ...(staticApp || {}), ...(dynamicApp || {}) };

    if (!merged.description_html && staticApp?.description_html) merged.description_html = staticApp.description_html;
    if (!merged.features_html && staticApp?.features_html) merged.features_html = staticApp.features_html;
    if ((!merged.screenshots || merged.screenshots.length === 0) && staticApp?.screenshots && staticApp.screenshots.length > 0) {
      merged.screenshots = staticApp.screenshots;
    }
    if ((!merged.faqs || merged.faqs.length === 0) && staticApp?.faqs && staticApp.faqs.length > 0) merged.faqs = staticApp.faqs;
    if (!merged.custom_admin_box_html && staticApp?.custom_admin_box_html) merged.custom_admin_box_html = staticApp.custom_admin_box_html;
    if (!merged.release_notes && staticApp?.release_notes) merged.release_notes = staticApp.release_notes;

    return {
      ...merged,
      description_html: merged.description_html || '',
      features_html: merged.features_html || '',
      screenshots: Array.isArray(merged.screenshots) ? merged.screenshots : [],
      faqs: Array.isArray(merged.faqs) ? merged.faqs : [],
      custom_admin_box_html: merged.custom_admin_box_html || '',
      custom_admin_box_heading: merged.custom_admin_box_heading || '',
      release_notes: merged.release_notes || '',
      yellow_box_msg: merged.yellow_box_msg || '',
      red_box_msg: merged.red_box_msg || '',
      idea_box_msg: merged.idea_box_msg || '',
      file_size: merged.file_size || '45 MB',
      version: merged.version || '1.0.0',
      developer: merged.developer || 'Developer',
      safety_status: merged.safety_status || 'Verified',
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
    const parts = app.category.split(',').map((c: string) => c.trim()).filter(Boolean);
    const nonGeneric = parts.filter((c: string) => {
      const lower = c.toLowerCase();
      return lower !== 'all apps' && lower !== 'all' && lower !== 'apps' && lower !== 'general';
    });
    return nonGeneric.length > 0 ? nonGeneric[0] : (parts[0] || 'All Apps');
  }, [app?.category]);

  const relatedApps = useMemo(() => {
    if (!app || !Array.isArray(mockApps) || mockApps.length === 0) return [];
    const sourceApps = mockApps;
    const currentCats = (app.category || '').toLowerCase().split(',').map((c: string) => c.trim()).filter(Boolean);
    const specificCats = currentCats.filter((c: string) => c !== 'all apps' && c !== 'all' && c !== 'apps' && c !== 'general');
    
    const exactMatches: typeof sourceApps = [];
    const tokenMatches: typeof sourceApps = [];
    const fallbackApps: typeof sourceApps = [];

    const appId = String(app.id || '');
    const appSlug = String(app.slug || '').toLowerCase();

    for (let i = 0; i < sourceApps.length; i++) {
      const a = sourceApps[i];
      if (String(a.id) === appId || (a.slug && a.slug.toLowerCase() === appSlug)) continue;
      
      const appCats = (a.category || '').toLowerCase().split(',').map((c: string) => c.trim()).filter(Boolean);
      const appSpecificCats = appCats.filter((c: string) => c !== 'all apps' && c !== 'all' && c !== 'apps' && c !== 'general');

      if (specificCats.some((sc: string) => appSpecificCats.includes(sc))) {
        exactMatches.push(a);
        if (exactMatches.length >= 12) break;
        continue;
      }

      if (tokenMatches.length < 8) {
        const hasTokenMatch = specificCats.some((sc: string) => {
          const tokens = sc.split(/\s+/);
          return appSpecificCats.some((asc: string) => tokens.some((t: string) => t.length > 2 && asc.includes(t)));
        });
        if (hasTokenMatch) {
          tokenMatches.push(a);
          continue;
        }
      }

      if (fallbackApps.length < 8) {
        fallbackApps.push(a);
      }
    }

    const combined = [...exactMatches, ...tokenMatches];
    const finalApps = combined.length < 6 ? [...combined, ...fallbackApps].slice(0, 10) : combined.slice(0, 12);
    return finalApps.map(a => ({
      id: a.id,
      name: a.name,
      slug: a.slug,
      icon_url: a.icon_url
    }));
  }, [mockApps, app?.category, app?.id, app?.slug]);

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
    setFetchedApp(null);
  }, [slug]);

  useEffect(() => {
    const slugKey = slug?.toLowerCase() || '';
    if (!slugKey) return;

    const resolved = fetchedApp || (app && app.description_html ? app : null) || resolveAppSlug(slugKey, staticMockApps) || resolveAppSlug(slugKey, mockApps);
    const isMissingDetails = !resolved || !resolved.description_html;

    if (isMissingDetails && !syncAttemptedRef.current[slugKey] && !triedRefresh) {
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
          } else if (refreshAll) {
            return refreshAll(true);
          }
        })
        .catch(() => {
          if (!triedRefresh && refreshAll) {
            setTriedRefresh(true);
            refreshAll(true);
          }
        })
        .finally(() => {
          setIsFetchingDetails(false);
          setTriedRefresh(true);
        });
    } else if (resolved && updateAppDetail && !mockApps.some(a => a.id === resolved.id || a.slug?.toLowerCase() === resolved.slug?.toLowerCase())) {
      updateAppDetail(resolved);
    }
  }, [slug, mockApps, fetchedApp, triedRefresh, refreshAll, updateAppDetail]);

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
    : (app.review_count || app.reviews ? parseInt(String(app.review_count || app.reviews), 10) : 0);

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
    <div className="animate-fade-in w-full">
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
          hasReviews={realReviewCount > 0}
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

        <AppSimilarCarousel relatedApps={relatedApps} specificCategory={specificCategory} />

        <AppScreenshots app={app} />

        <AppAboutSection app={app} isFetching={isFetchingDetails && !app.description_html} />
      </div>

      <AppSafetyBoxes app={app} />

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
      
      <AppFaqSection faqs={app.faqs} />
    </div>
  );
}
