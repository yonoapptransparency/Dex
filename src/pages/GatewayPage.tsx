import { useParams } from 'react-router-dom';
import Meta from '../components/Meta';
import { useData } from '../contexts/DataContextPublic';
import { ShieldAlert, ShieldCheck, ArrowLeft, Shield } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ClearanceButton from '../components/ClearanceButton';
import { mockApps as staticMockApps } from '../lib/staticData';

export default function GatewayPage() {
  const { apps: mockApps, settings: mockSettings, loading, serverAppsFetched, refreshAll } = useData();
  const { slug } = useParams();
  const allApps = mockApps.length > 0 ? mockApps : staticMockApps;
  const app = allApps.find(a => a.slug?.toLowerCase() === slug?.toLowerCase() || a.id?.toLowerCase() === slug?.toLowerCase()) || staticMockApps.find(a => a.slug?.toLowerCase() === slug?.toLowerCase() || a.id?.toLowerCase() === slug?.toLowerCase());
  
  const [triedRefresh, setTriedRefresh] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const syncAttemptedRef = useRef<Record<string, boolean>>({});

  const isActuallyComingSoon = app?.is_coming_soon;

  useEffect(() => {
    window.scrollTo(0, 0);
    setTriedRefresh(false);
    setIsRefreshing(false);
  }, [slug]);

  // Automatically trigger a silent cloud sync if the requested app is not found in local cache
  useEffect(() => {
    const slugKey = slug?.toLowerCase() || '';
    if (!slugKey) return;

    const found = mockApps.some(a => a.slug?.toLowerCase() === slugKey || a.id?.toLowerCase() === slugKey);
    if (!found && !syncAttemptedRef.current[slugKey] && !triedRefresh && !isRefreshing) {
      syncAttemptedRef.current[slugKey] = true;
      setIsRefreshing(true);
      refreshAll(true)
        .catch((e: any) => {
          console.warn("Deep Link Auto-Sync failed (quota or net):", e.message || e);
        })
        .finally(() => {
          setTriedRefresh(true);
          setIsRefreshing(false);
        });
    }
  }, [slug, mockApps, triedRefresh, isRefreshing, refreshAll]);

  if (loading && !app) {
    return (
      <div className="flex flex-col items-center justify-center py-20 min-h-[40vh]">
        <div className="w-8 h-8 border-[3px] border-black/10 dark:border-white/10 border-t-blue-500 rounded-full animate-spin mb-4"></div>
        <p className="text-sm font-medium tracking-wide text-zinc-500 animate-pulse">Loading information...</p>
      </div>
    );
  }

  // Graceful interstitial for slow database cold-starts or deep links on first visit
  if (!app && (!serverAppsFetched || isRefreshing || !triedRefresh)) {
    return (
      <div className="flex flex-col items-center justify-center py-20 min-h-[40vh] text-center px-4 max-w-sm mx-auto">
        <div className="w-8 h-8 border-[3px] border-black/10 dark:border-white/10 border-t-blue-500 rounded-full animate-spin mb-4"></div>
        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mt-2">Retrieving App Specifications</h3>
        <p className="text-sm text-zinc-500 mt-2 leading-relaxed">
          Loading app details from the server...
        </p>
      </div>
    );
  }

  if (!app) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center px-4 max-w-md mx-auto">
        <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 rounded-2xl flex items-center justify-center mb-6">
          <ShieldAlert className="w-8 h-8" />
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Details Pending</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-3 leading-relaxed mb-8">
          The requested page for "<span className="font-mono font-medium text-zinc-800 dark:text-zinc-200">{slug}</span>" could not be located. It may have been relocated or removed.
        </p>
        <Link 
          to="/" 
          className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-[16px] font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md"
        >
          <ArrowLeft className="w-4 h-4" /> Go back to homepage
        </Link>
      </div>
    );
  }

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

  const cleanedAppDesc = cleanSeoDescription(app.seo_description) || (app.description_html ? stripHtml(app.description_html).substring(0, 160) : `${app.name} technical specs.`);

  const realRatingVal = parseFloat(String(app.rating));
  const realReviewCount = parseInt(String((app as any)?.review_count || ''), 10);
  const ratingVal = (!isNaN(realRatingVal) && realRatingVal > 0) ? realRatingVal : 4.5;
  const reviewCountVal = (!isNaN(realReviewCount) && realReviewCount > 0) ? realReviewCount : 120;

  const softwareSchema: any = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": app.name,
    "description": cleanedAppDesc,
    "applicationCategory": app.category || 'GameApplication',
    "operatingSystem": "Android",
    "softwareVersion": app.version || '1.0.0',
    "image": app.og_image_url || app.icon_url,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    }
  };

  if (reviewCountVal > 0 && ratingVal > 0) {
    softwareSchema.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": String(ratingVal),
      "ratingCount": String(reviewCountVal),
      "bestRating": "5",
      "worstRating": "1"
    };
  }

  return (
    <div className="animate-fade-in select-none pb-40 w-full bg-zinc-50/30 dark:bg-zinc-950/20 min-h-screen">
      {/* Sleek Premium Back Button */}
      <div className="max-w-4xl mx-auto mb-8 pt-8 px-4 sm:px-6">
        <Link 
          to={`/app/${app.slug}`} 
          className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-zinc-500 hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors bg-white dark:bg-zinc-900 px-4 py-2.5 rounded-full border border-black/[0.05] dark:border-white/[0.05] shadow-sm hover:shadow-md transition-all group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to details
        </Link>
      </div>

      <Meta 
        title={`${app.name} - Gateway`}
        description={`Technical details and mirror gateway for ${app.name}.`}
        image={app.og_image_url || app.icon_url}
        canonical={`https://www.rummydex.com/app/${app.slug}`}
        schema={softwareSchema}
        noindex={true}
      />
      
      {/* Main App Presentation & Action */}
      <div className="max-w-4xl mx-auto w-full mb-12 px-4 sm:px-6">
        <div className="flex flex-col items-center gap-8">
          {/* App Logo & Details */}
          <div className="flex flex-col items-center text-center gap-4 w-full">
            <div className="relative group shrink-0 premium-logo-container">
              {/* Dynamic premium glowing aura background */}
              <div className="premium-logo-aura"></div>
              
              <motion.div 
                className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-[2rem] bg-white dark:bg-zinc-800 p-1 shadow-2xl overflow-hidden premium-logo-slow-vibrate"
                whileHover={{ scale: 1.05 }}
              >
                {app.icon_url ? (
                  <img 
                    src={app.icon_url} 
                    alt={app.name} 
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover rounded-[1.8rem]"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-zinc-200 dark:bg-zinc-700 animate-pulse" />
                )}
              </motion.div>
            </div>

            <div className="flex flex-col items-center">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-2 text-zinc-800 dark:text-zinc-100">{app.name}</h2>
              <div className="flex flex-wrap justify-center items-center gap-1.5">
                <span className="inline-flex items-center px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-black/[0.04] shadow-sm">
                  ID: {app.serial_number || app.id}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-black/[0.04] shadow-sm">
                  Ver: {app.version}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shadow-sm">
                  <Shield className="w-3 h-3 mr-1 inline" />
                  Mirror
                </span>
              </div>
            </div>
          </div>

          {/* Dynamic Verified Action Button */}
          <div className="flex flex-col items-center gap-4 w-full">
            {isActuallyComingSoon ? (
              <div className="w-full sm:w-72 flex flex-col items-center">
                <button disabled className="w-full py-4 px-10 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-sm text-sm font-bold shrink-0 cursor-not-allowed bg-amber-500/10 text-amber-500 border border-amber-500/20">
                  Coming Soon
                </button>
              </div>
            ) : (
               <div className="w-full sm:w-72">
                 <ClearanceButton appId={app.slug || app.id} status={app.safety_status as 'Verified' | 'Caution' | 'Unsafe'} />
               </div>
            )}
          </div>
        </div>
      </div>

      {/* Helpline Block */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-4xl mx-auto w-full mt-12 mb-20 px-4 sm:px-6">
        {mockSettings.helpline_whatsapp && (
          <a href={`https://wa.me/${mockSettings.helpline_whatsapp.replace('+','')}`} target="_blank" rel="noopener noreferrer dofollow" className="flex items-center justify-center gap-2 text-zinc-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-bold text-xs uppercase tracking-wider bg-white dark:bg-zinc-900 px-6 py-3.5 rounded-full border border-black/[0.05] dark:border-white/[0.05] shadow-sm hover:shadow">
            WhatsApp Support
          </a>
        )}
        {mockSettings.helpline_telegram && (
          <a href={`https://t.me/${mockSettings.helpline_telegram.replace('@','')}`} target="_blank" rel="noopener noreferrer dofollow" className="flex items-center justify-center gap-2 text-zinc-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-bold text-xs uppercase tracking-wider bg-white dark:bg-zinc-900 px-6 py-3.5 rounded-full border border-black/[0.05] dark:border-white/[0.05] shadow-sm hover:shadow">
            Telegram Support
          </a>
        )}
      </div>
    </div>
  );
}
