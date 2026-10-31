/**
 * VideoDetailPage deep guides layout
 * Features a 0-KB initial Lite YouTube Click-to-Play Facade for instant mobile LCP,
 * 1:1 SSR hydration parity, Related Application deep linking, and structured VideoObject schema.
 */

import { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import Meta from '../components/Meta';
import { useData } from '../contexts/DataContextPublic';
import { mockVideos as staticMockVideos } from '../lib/lightFallback';
import { ArrowLeft, ShieldAlert } from 'lucide-react';
import { getOptimizedImageUrl } from '../seo/utils';
import {
  extractYoutubeId,
  formatNewsDate,
  resolveCanonicalNewsDate,
  resolveVideoRelatedApp
} from '../lib/newsUtils';

export default function VideoDetailPage() {
  const {
    videos: mockVideos = [],
    apps = [],
    loading,
    videosSyncedWithServer,
    serverVideosFetched,
    refreshAll
  } = useData();
  const { slug } = useParams();
  const cleanSlug = decodeURIComponent(slug || '')
    .toLowerCase()
    .trim()
    .replace(/\/+$/, '')
    .split(/[?#]/)[0];

  const videoItem = useMemo(() => {
    const fromContext = (Array.isArray(mockVideos) ? mockVideos : []).find(
      (v) =>
        (v?.slug || '').toLowerCase().trim() === cleanSlug ||
        (v?.id || '').toLowerCase().trim() === cleanSlug
    );
    if (fromContext) return fromContext;
    return (Array.isArray(staticMockVideos) ? staticMockVideos : []).find(
      (v) =>
        (v?.slug || '').toLowerCase().trim() === cleanSlug ||
        (v?.id || '').toLowerCase().trim() === cleanSlug
    );
  }, [mockVideos, cleanSlug]);

  const [isPlaying, setIsPlaying] = useState(false);
  const [triedRefresh, setTriedRefresh] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const syncAttemptedRef = useRef<Record<string, boolean>>({});

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsPlaying(false);
    setTriedRefresh(false);
    setIsRefreshing(false);
  }, [cleanSlug]);

  useEffect(() => {
    if (!cleanSlug || videoItem) return;

    if (!syncAttemptedRef.current[cleanSlug] && !triedRefresh && !isRefreshing) {
      syncAttemptedRef.current[cleanSlug] = true;
      setIsRefreshing(true);
      refreshAll(true)
        .catch(() => {})
        .finally(() => {
          setTriedRefresh(true);
          setIsRefreshing(false);
        });
    }
  }, [cleanSlug, videoItem, triedRefresh, isRefreshing, refreshAll]);

  const relatedApp = useMemo(() => {
    return resolveVideoRelatedApp(videoItem, apps);
  }, [videoItem, apps]);

  const otherVideos = useMemo(() => {
    return (Array.isArray(mockVideos) ? mockVideos : [])
      .filter((item) => {
        if (!item) return false;
        const s = String(item.slug || item.id || '')
          .toLowerCase()
          .trim();
        return s && s !== cleanSlug;
      })
      .slice(0, 3);
  }, [mockVideos, cleanSlug]);

  if (loading && !videoItem) {
    return (
      <div className="flex flex-col items-center justify-center py-20 min-h-[40vh]">
        <div className="w-8 h-8 border-[3px] border-black/10 dark:border-white/10 border-t-blue-500 rounded-full animate-spin mb-4"></div>
        <p className="text-sm font-medium tracking-wide text-zinc-500 animate-pulse">Loading video...</p>
      </div>
    );
  }

  if (!videoItem && (!serverVideosFetched || !videosSyncedWithServer || isRefreshing || !triedRefresh)) {
    return (
      <div className="flex flex-col items-center justify-center py-20 min-h-[40vh] text-center px-4 max-w-sm mx-auto">
        <div className="w-8 h-8 border-[3px] border-black/10 dark:border-white/10 border-t-blue-500 rounded-full animate-spin mb-4"></div>
        <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mt-2">Loading Video Guide</h2>
        <p className="text-xs sm:text-sm text-zinc-500 mt-1.5 leading-relaxed">
          Fetching the latest video details...
        </p>
      </div>
    );
  }

  if (!videoItem) {
    return (
      <div className="py-20 text-center max-w-md mx-auto min-h-[60vh] px-4">
        <Meta
          title="404 - Video Not Found"
          description="The requested video walkthrough could not be located."
          noindex={true}
        />
        <div className="w-14 h-14 bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 rounded-2xl flex items-center justify-center mx-auto mb-5">
          <ShieldAlert className="w-7 h-7" />
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Video Not Found</h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
          The requested video walkthrough could not be found.
        </p>
        <Link
          to="/videos"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm transition-all"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Videos
        </Link>
      </div>
    );
  }

  const rawVideoUrl =
    videoItem.youtube_url || (videoItem as any).video_url || (videoItem as any).url || '';
  const videoId = extractYoutubeId(rawVideoUrl);
  const vSlug = videoItem.slug || videoItem.id;
  const canonicalVideoUrl =
    videoItem.canonical_url || `https://www.rummydex.com/videos/${vSlug}`;
  const thumbUrl = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : '/logo.png';
  const category = (videoItem as any).category || 'Video Guide';
  const rawDate = resolveCanonicalNewsDate(
    videoItem,
    (videoItem as any).published_at,
    videoItem.created_at
  );
  const dateLabel = formatNewsDate(rawDate, (videoItem as any).published_at, videoItem.created_at);
  const watchUrl = videoId
    ? `https://www.youtube.com/watch?v=${encodeURIComponent(videoId)}`
    : rawVideoUrl;

  const rawUploadDate =
    (videoItem as any).updated_at ||
    videoItem.created_at ||
    (videoItem as any).published_at ||
    (videoItem as any).date ||
    '2026-09-01T00:00:00.000Z';
  const parsedUploadDate = Date.parse(String(rawUploadDate));
  const uploadDateIso =
    !isNaN(parsedUploadDate) && parsedUploadDate > 0
      ? new Date(parsedUploadDate).toISOString()
      : '2026-09-01T00:00:00.000Z';

  const vTitle = videoItem.title || 'Video Guide';
  const seoTitle = videoItem.seo_title || vTitle;
  const vDesc = videoItem.seo_description || videoItem.description || vTitle;

  const videoSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      '@id': `${canonicalVideoUrl}#video`,
      name: vTitle,
      description: vDesc,
      thumbnailUrl: [videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : 'https://www.rummydex.com/logo.png'],
      uploadDate: uploadDateIso,
      ...(rawVideoUrl ? { contentUrl: rawVideoUrl } : {}),
      ...(videoId ? { embedUrl: `https://www.youtube.com/embed/${videoId}` } : {}),
      publisher: {
        '@type': 'Organization',
        '@id': 'https://www.rummydex.com/#organization',
        name: 'RummyDex',
        url: 'https://www.rummydex.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.rummydex.com/logo.png'
        }
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${canonicalVideoUrl}#webpage`,
      url: canonicalVideoUrl,
      name: seoTitle,
      headline: vTitle,
      description: vDesc,
      inLanguage: 'en',
      mainEntity: {
        '@id': `${canonicalVideoUrl}#video`
      }
    }
  ];

  const videoBreadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.rummydex.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Videos',
        item: 'https://www.rummydex.com/videos'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: vTitle,
        item: canonicalVideoUrl
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto px-3 sm:px-6 pb-14 text-left">
      <Meta
        title={seoTitle}
        description={vDesc}
        keywords={videoItem.seo_keywords}
        image={videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : 'https://www.rummydex.com/logo.png'}
        url={canonicalVideoUrl}
        type="website"
        canonical={canonicalVideoUrl}
        schema={videoSchemas}
        breadcrumbSchema={videoBreadcrumbSchema}
      />

      <nav
        aria-label="Breadcrumb"
        className="mb-4 sm:mb-6 pt-2 sm:pt-4 flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400 overflow-x-auto whitespace-nowrap no-scrollbar"
      >
        <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          Home
        </Link>
        <span aria-hidden="true">/</span>
        <Link to="/videos" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          Videos
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-zinc-800 dark:text-zinc-200 font-semibold truncate max-w-[220px] sm:max-w-md">
          {vTitle}
        </span>
      </nav>

      <article className="bg-white dark:bg-zinc-900 rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm">
        <div className="relative w-full bg-zinc-950 aspect-video overflow-hidden">
          {videoId ? (
            isPlaying ? (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title={vTitle}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setIsPlaying(true)}
                aria-label={`Play video: ${vTitle}`}
                className="group relative w-full h-full block text-left cursor-pointer focus:outline-none"
              >
                <img
                  src={thumbUrl}
                  alt={vTitle}
                  width={1280}
                  height={720}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 p-4 text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-600/95 group-hover:bg-blue-500 text-white flex items-center justify-center shadow-2xl border-2 border-white/30 transition-transform duration-300 group-hover:scale-105">
                    <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" viewBox="0 0 24 24" aria-hidden="true">
                      <polygon points="6 3 20 12 6 21 6 3" />
                    </svg>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-black/70 text-white text-xs font-semibold tracking-wide border border-white/15">
                    Tap to Play Video
                  </span>
                </div>
              </button>
            )
          ) : (
            <div className="flex items-center justify-center h-full text-zinc-400 font-medium text-sm">
              Video stream unavailable
            </div>
          )}
        </div>

        <div className="p-4 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
            <div className="flex items-center gap-1.5">
              <span className="text-blue-600 dark:text-blue-400 uppercase tracking-wider">{category}</span>
              <span aria-hidden="true">·</span>
              <time>{dateLabel}</time>
            </div>
            {watchUrl ? (
              <a
                href={watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
              >
                Watch on YouTube ↗
              </a>
            ) : null}
          </div>

          <h1 className="text-xl sm:text-3xl font-extrabold leading-snug mb-4 tracking-tight text-zinc-900 dark:text-zinc-100">
            {vTitle}
          </h1>

          <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base whitespace-pre-line">
            <p>{videoItem.description}</p>
          </div>

          {relatedApp ? (
            <section
              aria-label="Featured Application"
              className="mt-6 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80"
            >
              <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3">
                Featured Application in This Guide
              </p>
              <Link
                to={`/app/${relatedApp.slug || relatedApp.id}`}
                className="flex items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/60 hover:border-blue-500/40 transition-colors group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={getOptimizedImageUrl(relatedApp.icon_url || '/logo.png', 120)}
                    alt={relatedApp.name}
                    width={48}
                    height={48}
                    loading="lazy"
                    decoding="async"
                    className="w-12 h-12 rounded-xl object-cover shrink-0 border border-black/5 dark:border-white/10"
                  />
                  <div className="min-w-0">
                    <h2 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {relatedApp.name}
                    </h2>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                      {relatedApp.category || 'Application'} · ★ {Number(relatedApp.rating || 4.5).toFixed(1)}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 px-3.5 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold group-hover:bg-blue-700 transition-colors">
                  View App
                </span>
              </Link>
            </section>
          ) : null}

          {otherVideos.length > 0 ? (
            <section
              aria-label="More Videos"
              className="mt-8 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  More Videos &amp; Guides
                </h2>
                <Link to="/videos" className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                  View All →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {otherVideos.map((ov: any) => {
                  const ovTitle = ov.title || 'Video Guide';
                  const ovSlug = ov.slug || ov.id;
                  const ovUrl = ov.youtube_url || ov.video_url || ov.url || '';
                  const ovId = extractYoutubeId(ovUrl);
                  const ovThumb = ovId ? `https://img.youtube.com/vi/${ovId}/mqdefault.jpg` : '/logo.png';
                  return (
                    <Link
                      key={ov.id || ovSlug}
                      to={`/videos/${ovSlug}`}
                      className="group flex sm:flex-col gap-3 p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/70 dark:border-zinc-800 hover:border-blue-500/40 transition-colors"
                    >
                      <div className="relative w-28 sm:w-full aspect-video rounded-lg overflow-hidden bg-zinc-900 shrink-0">
                        <img
                          src={ovThumb}
                          alt={ovTitle}
                          width={320}
                          height={180}
                          loading="lazy"
                          decoding="async"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {ovTitle}
                        </h3>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          ) : null}

          <nav
            aria-label="Related Directory Links"
            className="mt-8 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-zinc-600 dark:text-zinc-400"
          >
            <Link to="/videos" className="text-blue-600 dark:text-blue-400 hover:underline">
              ← All Videos &amp; Guides
            </Link>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                App Directory
              </Link>
              <Link to="/news" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Latest News
              </Link>
              <Link to="/new-apps" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                New Apps
              </Link>
              <Link to="/categories" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Categories
              </Link>
            </div>
          </nav>
        </div>
      </article>
    </div>
  );
}
