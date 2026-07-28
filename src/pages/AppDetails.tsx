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

import AppDetailsSkeleton from '../components/public/AppDetailsSkeleton';
import YouTubePlayer from '../components/public/YouTubePlayer';
import AppSafetyBoxes from '../components/public/AppSafetyBoxes';
import AppSpecsBar from '../components/public/AppSpecsBar';

export { AppDetailsSkeleton };

export default function AppDetails() {
  const { apps: mockApps, settings: mockSettings, blogs: mockBlogs, loading, appsSyncedWithServer, serverAppsFetched, refreshAll } = useData();
  const { slug: routeSlug, "*": splat } = useParams();
  const decodedSplat = splat ? decodeURIComponent(splat) : '';
  const splatStripped = decodedSplat.replace(/^\/app\//, '/').replace(/^\/|\/$/g, '');
  const slug = routeSlug || splatStripped;
  const app = mockApps.find(a => a.slug?.toLowerCase() === slug?.toLowerCase());
  
  const navigate = useNavigate();
  const [triedRefresh, setTriedRefresh] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const syncAttemptedRef = useRef<Record<string, boolean>>({});
  const [reviewsRefreshKey, setReviewsRefreshKey] = useState(0);

  const [selectedScreenshotIndex, setSelectedScreenshotIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Lock background scrolling when modal is open
  useEffect(() => {
    if (selectedScreenshotIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedScreenshotIndex]);

  useEffect(() => {
    if (selectedScreenshotIndex === null || !app?.screenshots) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setSelectedScreenshotIndex(prev => (prev! + 1) % app.screenshots.length);
      } else if (e.key === 'ArrowLeft') {
        setSelectedScreenshotIndex(prev => (prev! - 1 + app.screenshots.length) % app.screenshots.length);
      } else if (e.key === 'Escape') {
        setSelectedScreenshotIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedScreenshotIndex, app?.screenshots]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || !app?.screenshots) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setSelectedScreenshotIndex(prev => (prev! + 1) % app.screenshots.length);
    } else if (isRightSwipe) {
      setSelectedScreenshotIndex(prev => (prev! - 1 + app.screenshots.length) % app.screenshots.length);
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);

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

  // Automatically trigger a silent cloud sync if the requested app is not found in local cache
  useEffect(() => {
    const slugKey = slug?.toLowerCase() || '';
    if (!slugKey) return;

    const found = mockApps.some(a => a.slug?.toLowerCase() === slugKey);
    if (!found && !syncAttemptedRef.current[slugKey] && !triedRefresh && !isRefreshing) {
      syncAttemptedRef.current[slugKey] = true;
      setIsRefreshing(true);
      console.log(`Deep Link Sync: App "${slug}" not found in local cache. Syncing latest indices...`);
      refreshAll(true)
        .catch((e: any) => {
          console.warn("Deep Link Auto-Sync failed:", e.message || e);
        })
        .finally(() => {
          setTriedRefresh(true);
          setIsRefreshing(false);
        });
    }
  }, [slug, mockApps, triedRefresh, isRefreshing, refreshAll]);

  // Initial loading phase or DB syncing phase: show complete visual structure skeleton
  if ((loading && !app) || (!app && (!serverAppsFetched || !appsSyncedWithServer || isRefreshing || !triedRefresh))) {
    return <AppDetailsSkeleton />;
  }

  if (!app) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center px-4 max-w-md mx-auto">
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

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": app.name,
    "description": desc,
    "applicationCategory": app.category,
    "operatingSystem": "Android, iOS, Windows",
    "softwareVersion": app.version,
    "fileSize": app.file_size,
    "image": app.og_image_url || app.icon_url,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": app.rating || "5.0",
      "ratingCount": app.serial_number ? parseInt(String(app.serial_number).replace(/\D/g,'')) % 1000 + 100 : "150"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

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

  const relatedApps = useMemo(() => {
    const currentCats = app.category ? app.category.toLowerCase().split(',').map(c => c.trim()) : [];
    return mockApps
      .filter(a => {
        if (a.id === app.id) return false;
        const appCats = a.category ? a.category.toLowerCase().split(',').map(c => c.trim()) : [];
        return appCats.some(cat => currentCats.includes(cat));
      });
  }, [mockApps, app.category, app.id]);

  const relatedUpdates = useMemo(() => {
    return mockBlogs?.filter(b => b.related_app_slug?.toLowerCase() === slug?.toLowerCase()) || [];
  }, [mockBlogs, slug]);

  const [shareToast, setShareToast] = useState(false);

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
      <div className="px-3 sm:px-6 mb-4">
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
        
        <div className="flex w-full items-center gap-4 sm:gap-6 mb-6 px-3 sm:px-6 mt-2">
          <div className="relative w-[72px] h-[72px] sm:w-[96px] sm:h-[96px] shrink-0 premium-logo-container">
            {/* Dynamic glowing colorful aura background */}
            <div className="premium-logo-aura"></div>
            
            <div className="w-full h-full rounded-[20px] overflow-hidden shadow-sm bg-white border border-black/5 dark:border-white/10 premium-logo-image-frame">
              {/* Dynamic glossy sweep light overlay */}
              <div className="premium-logo-shine-overlay"></div>
              
              {app.icon_url ? (
                <img src={app.icon_url || undefined} alt={app.name} loading="eager" fetchPriority="high" width={128} height={128} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-3xl font-bold bg-zinc-800 text-zinc-500">
                  {(app.name || 'A').substring(0, 1)}
                </div>
              )}
            </div>
          </div>
          
          <div className="flex flex-col justify-center flex-1">
            <h1 className="text-xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 leading-tight mb-0.5 break-words">
              {app.name}
            </h1>
            <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
              {app.developer || "Developer"}
            </div>
            <div className="text-[10px] sm:text-[11px] text-zinc-500 dark:text-zinc-400 flex flex-wrap items-center gap-x-2 gap-y-1 mt-1">
              {app.is_new && <span className="bg-blue-500/10 text-blue-600 dark:text-blue-400 px-1.5 py-0.5 rounded-sm uppercase font-bold tracking-wider">New</span>}
              {app.safety_status === 'Verified' ? (
                <span className="flex items-center text-green-600 gap-0.5 font-medium"><ShieldCheck className="w-3.5 h-3.5" /> Verified</span>
              ) : (
                <span className="flex items-center text-orange-500 gap-0.5 font-medium"><ShieldAlert className="w-3.5 h-3.5" /> {app.safety_status}</span>
              )}
            </div>
          </div>
        </div>

        <AppSpecsBar 
          rating={app.rating} 
          file_size={app.file_size} 
          category={app.category} 
          version={app.version} 
        />

        <div className="flex flex-col sm:flex-row w-full justify-center items-center gap-3 select-none mb-6 px-3 sm:px-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:flex-1"
          >
            {isActuallyComingSoon ? (
                  <div className="flex flex-col items-center">
                    <button 
                      disabled
                      className="w-full bg-amber-500/10 text-amber-600 dark:text-amber-500 border border-amber-500/20 font-bold py-2.5 px-5 rounded-xl flex items-center justify-center gap-1.5 cursor-not-allowed text-sm shadow-sm"
                    >
                      Coming Soon
                    </button>
                    {timeRemaining !== null && timeRemaining > 0 && (
                      <div className="mt-2 flex gap-1 justify-center">
                        {(() => {
                          const s = Math.floor(timeRemaining / 1000);
                          const d = Math.floor(s / 86400);
                          const h = Math.floor((s % 86400) / 3600);
                          const m = Math.floor((s % 3600) / 60);
                          const sec = s % 60;
                          return [
                            { label: 'D', value: d.toString().padStart(2, '0') },
                            { label: 'H', value: h.toString().padStart(2, '0') },
                            { label: 'M', value: m.toString().padStart(2, '0') },
                            { label: 'S', value: sec.toString().padStart(2, '0') }
                          ].map((unit, i) => (
                            <div key={i} className="flex flex-col items-center bg-zinc-100 dark:bg-zinc-800 rounded px-1.5 py-1 border border-black/5 dark:border-white/5">
                              <span className="text-xs font-mono font-bold text-zinc-800 dark:text-zinc-200">{unit.value}</span>
                              <span className="text-[8px] uppercase tracking-widest text-zinc-500">{unit.label}</span>
                            </div>
                          ));
                        })()}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    to={`/moredetail/${app.slug}`}
                    className="w-full premium-action-btn premium-action-btn-blowing text-white !text-white font-bold py-2.5 px-5 rounded-xl flex flex-col items-center justify-center gap-0.5 transition-all text-sm shadow-md h-[44px]"
                  >
                    <span className="flex items-center gap-1.5 font-bold text-white !text-white">More Details <ArrowRight className="w-4 h-4 arrow-icon arrow-icon-loop text-white !text-white" /></span>
                  </Link>
                )}
              </motion.div>
 
              <div className="flex w-full gap-3 sm:w-auto shrink-0">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 sm:w-auto sm:min-w-[130px] sm:max-w-[150px]"
                >
                  <button 
                    onClick={handleShare}
                    className="w-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 font-semibold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all text-sm border border-black/5 dark:border-white/5 shadow-sm h-[44px] truncate"
                  >
                    <Share2 className="w-4 h-4 text-blue-500 shrink-0" /> <span className="truncate">Share app</span>
                  </button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 sm:w-auto sm:min-w-[130px] sm:max-w-[150px]"
                >
                  <button 
                    onClick={() => {
                      window.dispatchEvent(new CustomEvent('open-report-modal', { detail: { app } }));
                    }}
                    className="w-full bg-rose-50 hover:bg-rose-100/80 dark:bg-rose-950/20 dark:hover:bg-rose-950/40 text-rose-600 dark:text-rose-400 font-semibold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all text-sm border border-rose-200/40 dark:border-rose-900/40 shadow-xs h-[44px] truncate"
                  >
                    <Flag className="w-4 h-4 text-rose-500 shrink-0" /> <span className="truncate">Flag app</span>
                  </button>
                </motion.div>
              </div>
            </div>

            

            {((app.screenshots && app.screenshots.length > 0) || app.video_url) && (
              <div className="w-full mb-6">
                <div className="flex overflow-x-auto hide-scrollbar gap-2.5 px-4 sm:px-0 pb-2 snap-x items-center -mx-4 sm:-mx-0">
                  {app.video_url && (
                    <YouTubePlayer videoUrl={app.video_url} />
                  )}
                  {app.screenshots && app.screenshots.map((imgUrl, i) => (
                    <div 
                      key={i} 
                      className="flex-none w-[90px] sm:w-[125px] aspect-[9/16] rounded-xl overflow-hidden snap-center bg-zinc-100 dark:bg-zinc-800 shadow-sm border border-black/5 dark:border-white/10 select-none"
                    >
                      <img src={imgUrl} alt={`Screenshot ${i + 1}`} loading="lazy" width={125} height={222} className="w-full h-full object-cover select-none pointer-events-none" />
                    </div>
                  ))}
                </div>
              </div>
            )}

        {relatedApps.length > 0 && (
          <div className="mb-6 px-0">
            <div className="flex items-center justify-between mb-4 px-3 sm:px-6">
              <h2 className="text-xl font-bold flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
                You might also like
              </h2>
            </div>
            <div className="space-y-2">
              {relatedApps.map((relatedApp) => (
                <AppListItem key={relatedApp.id} app={relatedApp} index={relatedApp.serial_number} />
              ))}
            </div>
          </div>
        )}
      </div>

      <AppSafetyBoxes app={app} />

      <div className="w-full mb-8 space-y-12">
        {app.custom_admin_box_html && (
           <div className="py-8 border-b border-black/5 dark:border-white/5 relative overflow-hidden w-full px-4 sm:px-6 md:px-10 transition-all duration-300">
             {app.custom_admin_box_heading && (
               <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100 px-1 sm:px-0">
                  {app.custom_admin_box_heading}
               </h2>
             )}
             <div 
               className="w-full text-zinc-800 dark:text-zinc-200"
               dangerouslySetInnerHTML={{ __html: safeHtml(app.custom_admin_box_html) }}
             />
           </div>
        )}

        <div className="py-8 w-full px-4 sm:px-6 md:px-10">
           <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100 px-1 sm:px-0">
             About this app
           </h2>
          <div 
             className="w-full text-base text-zinc-700 dark:text-zinc-300 [&_strong]:font-semibold [&_p]:mb-4 [&_p]:leading-relaxed [&_a]:text-blue-500 [&_a]:hover:underline [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:mt-6 [&_h1]:mb-4 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-5 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5"
            dangerouslySetInnerHTML={{ __html: safeHtml(app.description_html, '<p>No details available.</p>') }}
          />

          {app.features_html && (
            <div className="mt-8 pt-8 border-t border-black/5 dark:border-white/5">
               <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100 px-1 sm:px-0">
                 App Features
               </h2>
               <div 
                 className="w-full text-base text-zinc-700 dark:text-zinc-300 [&_strong]:font-semibold [&_p]:mb-4 [&_p]:leading-relaxed [&_a]:text-blue-500 [&_a]:hover:underline [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:mt-6 [&_h1]:mb-4 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-5 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:mb-2"
                 dangerouslySetInnerHTML={{ __html: safeHtml(app.features_html) }}
               />
            </div>
          )}
          
          {app.release_notes && (
             <div className="mt-8 pt-8 border-t border-black/5 dark:border-white/5">
               <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-4">What's New</h3>
               <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 text-sm text-zinc-600 dark:text-zinc-400 whitespace-pre-wrap border border-black/5 dark:border-white/5 line-clamp-4 hover:line-clamp-none transition-all">
                {app.release_notes}
              </div>
            </div>
          )}
          
          {relatedUpdates && relatedUpdates.length > 0 && (
            <div className="mt-8 pt-8 border-t border-black/5 dark:border-white/5">
               <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100 px-1 sm:px-0">
                 Latest App Updates
               </h2>
               <div className="space-y-4">
                 {relatedUpdates.map((update, idx) => (
                   <Link key={idx} to={`/blog/${update.slug || update.id}`} className="block p-4 sm:p-6 bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-500/10 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all group">
                     <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
                       <span>Update</span>
                       <span className="text-zinc-300">•</span>
                       <span className="text-zinc-500 dark:text-zinc-400">{new Date(update.published_at).toLocaleDateString()}</span>
                     </div>
                     <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-blue-600 transition-colors">
                       {update.title}
                     </h3>
                     <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                       {update.content.replace(/<[^>]+>/g, '').substring(0, 150)}...
                     </p>
                   </Link>
                 ))}
               </div>
            </div>
          )}
        </div>
      </div>

      <div className="px-3 sm:px-6 mb-8">
        <UserReviews key={reviewsRefreshKey} appId={app.id} appTitle={app.name} overallRating={app.rating} />
      </div>
      
      {app.faqs && app.faqs.length > 0 && (
         <div className="mb-20 px-3 sm:px-6">
           <div className="py-8 border-t border-black/5 dark:border-white/5">
            <h2 className="text-xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {app.faqs.map((faq, idx) => (
                 <AccordionItem key={idx} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
