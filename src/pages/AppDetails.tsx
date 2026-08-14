/**
 * AppDetails deep overview
 * Renders technical and design features of individual applications with peer user reviews.
 */

import { safeHtml } from '../lib/safeHtmlPublic';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { useData } from '../contexts/DataContextPublic';
import { ShieldCheck, ShieldAlert, ArrowRight, ArrowLeft, Star, FileText, Share2, Check, Lock, X, ChevronLeft, ChevronRight, MoreVertical, Flag } from 'lucide-react';
import { cn } from '../lib/utilsPublic';
import { useEffect, useMemo, useState, useRef } from 'react';
import Meta from '../components/Meta';
import { AppListItem } from '../components/PlayStoreUI';
import { motion, AnimatePresence } from 'framer-motion';
import UserReviews from '../components/UserReviews';
import PlayStoreRatingSection from '../components/PlayStoreRatingSection';
import AccordionItem from '../components/AccordionItem';

import { resolveAppSlug } from '../seoHelper';
import { mockApps as staticMockApps } from '../lib/staticData';
import AppDetailsSkeleton from '../components/public/AppDetailsSkeleton';
import AppHeader from '../components/public/AppHeader';
import AppActionButtons from '../components/public/AppActionButtons';
import AppScreenshots from '../components/public/AppScreenshots';
import AppAboutSection from '../components/public/AppAboutSection';
import AppFaqSection from '../components/public/AppFaqSection';
import AppSpecsBar from '../components/public/AppSpecsBar';
import AppSafetyBoxes from '../components/public/AppSafetyBoxes';

export { AppDetailsSkeleton };

export default function AppDetails() {
  const { apps: mockApps, settings: mockSettings, blogs: mockBlogs, loading, appsSyncedWithServer, serverAppsFetched, refreshAll, updateAppDetail } = useData();
  const { slug: routeSlug, "*": splat } = useParams();
  const decodedSplat = splat ? decodeURIComponent(splat) : '';
  const splatStripped = decodedSplat.replace(/^\/app\//, '/').replace(/^\/|\/$/g, '');
  const slug = routeSlug || splatStripped;
  const app = resolveAppSlug(slug, mockApps) || resolveAppSlug(slug, staticMockApps);
  
  const navigate = useNavigate();
  const [triedRefresh, setTriedRefresh] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const syncAttemptedRef = useRef<Record<string, boolean>>({});
  const [reviewsRefreshKey, setReviewsRefreshKey] = useState(0);

  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
  const [shareToast, setShareToast] = useState(false);

  const relatedApps = useMemo(() => {
    if (!app) return [];
    const currentCats = app.category ? app.category.toLowerCase().split(',').map(c => c.trim()) : [];
    const sourceApps = mockApps.length > 0 ? mockApps : staticMockApps;
    return sourceApps
      .filter(a => {
        if (a.id === app.id) return false;
        const appCats = a.category ? a.category.toLowerCase().split(',').map(c => c.trim()) : [];
        return appCats.some(cat => currentCats.includes(cat));
      })
      .slice(0, 10);
  }, [mockApps, app?.category, app?.id]);

  const relatedUpdates = useMemo(() => {
    if (!slug) return [];
    return mockBlogs?.filter(b => b.related_app_slug?.toLowerCase() === slug?.toLowerCase()) || [];
  }, [mockBlogs, slug]);

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
    setIsRefreshing(false);
  }, [slug]);

  // On-demand single-app fetch: Only loads the complete details for THIS specific app
  useEffect(() => {
    const slugKey = slug?.toLowerCase() || '';
    if (!slugKey) return;

    const resolved = resolveAppSlug(slugKey, mockApps) || resolveAppSlug(slugKey, staticMockApps);
    const isMissingDetails = !resolved || !resolved.description_html;

    if (isMissingDetails && !syncAttemptedRef.current[slugKey] && !triedRefresh && !isRefreshing) {
      syncAttemptedRef.current[slugKey] = true;
      setIsRefreshing(true);

      fetch(`/api/v1/public/app/${encodeURIComponent(slugKey)}`)
        .then(res => {
          if (res.ok) return res.json();
          throw new Error(`HTTP ${res.status}`);
        })
        .then(data => {
          if (data?.status === 'OK' && data?.app && updateAppDetail) {
            updateAppDetail(data.app);
          } else if (refreshAll) {
            return refreshAll(true);
          }
        })
        .catch((e: any) => {
          // Fallback to static data if on-demand fetch fails
          const fallbackApp = resolveAppSlug(slugKey, staticMockApps);
          if (fallbackApp && updateAppDetail) {
            updateAppDetail(fallbackApp);
          } else if (refreshAll) {
            return refreshAll(true);
          }
        })
        .finally(() => {
          setTriedRefresh(true);
          setIsRefreshing(false);
        });
    } else if (resolved && updateAppDetail && !mockApps.some(a => a.id === resolved.id || a.slug?.toLowerCase() === resolved.slug?.toLowerCase())) {
      updateAppDetail(resolved);
    }
  }, [slug, mockApps, triedRefresh, isRefreshing, refreshAll, updateAppDetail]);

  // If app is not yet available, show clean minimal loader rather than heavy skeleton flashing
  if (!app && isRefreshing) {
    return (
      <div className="flex flex-col items-center justify-center py-24 min-h-[40vh]">
        <div className="w-8 h-8 border-2 border-zinc-300 dark:border-zinc-700 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!app) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center px-4 max-w-md mx-auto">
        <Meta 
          title="404 - App Not Found | RummyDex" 
          description="The requested application could not be located on RummyDex." 
          noindex={true} 
        />
        <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 rounded-2xl flex items-center justify-center mb-6">
          <ShieldAlert className="w-8 h-8" />
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">App Not Found</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-3 leading-relaxed mb-6">
          The requested application "<span className="font-mono font-medium text-zinc-800 dark:text-zinc-200">{slug}</span>" could not be located.
          If you just created it, it might still be propagating. Try refreshing.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <button 
            onClick={() => window.location.reload()}
            className="flex items-center justify-center gap-2 px-6 py-2.5 bg-zinc-800 hover:bg-zinc-900 dark:bg-zinc-700 dark:hover:bg-zinc-600 text-white rounded-[16px] font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md"
          >
            Refresh Data
          </button>
          <Link 
            to="/" 
            className="flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-[16px] font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md"
          >
            <ArrowLeft className="w-4 h-4" /> Go to Store
          </Link>
        </div>
      </div>
    );
  }

  const title = app.seo_title || app.name;
  
  const stripHtml = (html: string) => {
    if (!html) return '';
    const stripped = html.replace(/<[^>]*>?/gm, ' ');
    return stripped.replace(/\s+/g, ' ').trim();
  };

  const cleanSeoDescription = (rawDesc: string) => {
    if (!rawDesc) return '';
    const trimmed = rawDesc.trim();
    if (trimmed.startsWith('<') || trimmed.includes('<meta ')) {
      const metaMatch = trimmed.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
      if (metaMatch && metaMatch[1]) {
        return metaMatch[1].trim();
      }
      const ogMatch = trimmed.match(/<meta\s+property=["']og:description["']\s+content=["'](.*?)["']/i);
      if (ogMatch && ogMatch[1]) {
        return ogMatch[1].trim();
      }
      return stripHtml(trimmed).substring(0, 160);
    }
    return trimmed;
  };
  
  const desc = cleanSeoDescription(app.seo_description) || (app.description_html ? stripHtml(app.description_html).substring(0, 160) : `${app.name} application specifications`);
  const ogImage = app.og_image_url || app.icon_url;

  const faqSchema = app.faqs && app.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": app.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": typeof faq.answer === 'string' ? faq.answer.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim() : faq.answer
      }
    }))
  } : null;

  const realRatingVal = parseFloat(String(app.rating));
  const realReviewCount = parseInt(String((app as any)?.review_count || ''), 10);
  const softwareSchema: any = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": app.name,
    "description": desc,
    "applicationCategory": app.category || 'GameApplication',
    "operatingSystem": "Android, iOS, Windows",
    "softwareVersion": app.version,
    "fileSize": app.file_size,
    "image": app.og_image_url || app.icon_url,
    "logo": app.og_image_url || app.icon_url,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    }
  };

  if (!isNaN(realRatingVal) && realRatingVal > 0 && !isNaN(realReviewCount) && realReviewCount > 0) {
    softwareSchema["aggregateRating"] = {
      "@type": "AggregateRating",
      "ratingValue": String(realRatingVal),
      "ratingCount": String(realReviewCount),
      "bestRating": "5",
      "worstRating": "1"
    };
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": window.location.origin
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": app.name,
        "item": window.location.href
      }
    ]
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        setShareToast(true);
        setTimeout(() => setShareToast(false), 2050);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title || app.name,
          text: desc || `Check out ${app.name} specification on our platform.`,
          url: window.location.href,
        });
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          console.error('Error sharing:', err);
          copyToClipboard();
        }
      }
    } else {
      copyToClipboard();
    }
  };

  return (
    <div className="animate-fade-in w-full select-none">
      <AnimatePresence>
        {shareToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-5 py-3 rounded-full shadow-xl flex items-center gap-2 border border-white/10 dark:border-black/5"
          >
            <Check className="w-4 h-4 text-green-500 font-bold animate-bounce" />
            <span className="text-sm font-semibold tracking-wide">Link copied to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="px-1 sm:px-4 md:px-6 mb-4">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors group"
        >
          <div className="p-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 group-hover:-translate-x-1 transition-transform">
            <ArrowLeft className="w-4 h-4" />
          </div>
          Back to storefront
        </Link>
      </div>
      <Meta 
        title={title}
        description={desc}
        keywords={app.seo_keywords}
        image={ogImage}
        canonical={app.canonical_url || `${window.location.origin}/app/${app.slug}`}
        schema={softwareSchema}
        faqSchema={faqSchema}
      />
      <div className="w-full">
        
        {/* Modular Header */}
        <AppHeader app={app} />

        <AppSpecsBar 
          rating={app.rating} 
          file_size={app.file_size} 
          category={app.category} 
          version={app.version} 
        />

        {/* Modular Action Buttons */}
        <AppActionButtons 
          app={app} 
          isActuallyComingSoon={isActuallyComingSoon} 
          timeRemaining={timeRemaining} 
          handleShare={handleShare} 
        />

        {/* Industrial Application Overview & Technical Specifications (Directly below action buttons) */}
        <AppAboutSection app={app} relatedUpdates={relatedUpdates} />

        {/* Similar & Related Apps Section (Placed right after Application Overview) */}
        {relatedApps.length > 0 && (
          <section aria-labelledby="related-apps-heading" className="my-6 px-0">
            <div className="flex items-center justify-between mb-3 px-1 sm:px-4 md:px-6">
              <h2 id="related-apps-heading" className="text-lg sm:text-xl font-bold flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
                Similar Applications
              </h2>
              <span className="text-xs text-zinc-400 font-medium">{relatedApps.length} apps</span>
            </div>
            <div className="space-y-2">
              {relatedApps.map((relatedApp, index) => (
                <AppListItem key={`${relatedApp.id}-${index}`} app={relatedApp} index={relatedApp.serial_number} />
              ))}
            </div>
          </section>
        )}

        {/* Modular Screenshots Gallery */}
        <AppScreenshots app={app} />
      </div>

      {/* App Safety & Security Highlight Notices */}
      <AppSafetyBoxes app={app} />

      {/* Verified Peer Ratings & Reviews Section */}
      <div className="px-1 sm:px-4 md:px-6 mb-8">
        <UserReviews key={reviewsRefreshKey} appId={app.id} appTitle={app.name} overallRating={app.rating} />
      </div>
      
      {/* Modular FAQ Section */}
      <AppFaqSection faqs={app.faqs} />

    </div>
  );
}
