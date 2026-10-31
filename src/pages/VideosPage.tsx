/**
 * VideosPage interactive walkthrough directory
 * Lightweight, mobile-first video catalog with 1:1 SSR parity, URL-synced pagination, and instant search filtering.
 */

import React, { useState, useMemo, useEffect } from 'react';
import Meta from '../components/Meta';
import { useData } from '../contexts/DataContextPublic';
import { Video, Search, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { extractYoutubeId, formatNewsDate, resolveCanonicalNewsDate } from '../lib/newsUtils';

const ITEMS_PER_PAGE = 6;

export default function VideosPage() {
  const { videos: mockVideos = [], settings: mockSettings, loading, fetchVideos } = useData();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if ((!mockVideos || mockVideos.length === 0) && fetchVideos) {
      fetchVideos();
    }
  }, [mockVideos.length, fetchVideos]);

  const urlPage = parseInt(searchParams.get('page') || '1', 10);
  const currentPage = isNaN(urlPage) || urlPage < 1 ? 1 : urlPage;
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');

  useEffect(() => {
    const currentQ = searchParams.get('q') || '';
    if (searchTerm.trim() === currentQ) return;
    const params = new URLSearchParams(searchParams);
    if (searchTerm.trim()) {
      params.set('q', searchTerm.trim());
    } else {
      params.delete('q');
    }
    setSearchParams(params, { replace: true });
  }, [searchTerm]);

  const validVideos = useMemo(() => {
    return (Array.isArray(mockVideos) ? mockVideos : []).filter(Boolean);
  }, [mockVideos]);

  const filteredVideos = useMemo(() => {
    return validVideos.filter(video => {
      if (!searchTerm.trim()) return true;
      const term = searchTerm.toLowerCase().trim();
      return (
        video.title?.toLowerCase().includes(term) ||
        video.description?.toLowerCase().includes(term) ||
        (video as any).category?.toLowerCase().includes(term)
      );
    });
  }, [validVideos, searchTerm]);

  const totalPages = Math.max(1, Math.ceil(filteredVideos.length / ITEMS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIdx = (safeCurrentPage - 1) * ITEMS_PER_PAGE;

  const paginatedVideos = useMemo(() => {
    return filteredVideos.slice(startIdx, startIdx + ITEMS_PER_PAGE);
  }, [filteredVideos, startIdx]);

  const remainingVideos = useMemo(() => {
    if (searchTerm.trim()) return [];
    return validVideos.filter((_, idx) => idx < startIdx || idx >= startIdx + ITEMS_PER_PAGE);
  }, [validVideos, startIdx, searchTerm]);

  const setPage = (pageNumber: number) => {
    const nextP = Math.max(1, Math.min(pageNumber, totalPages));
    const params = new URLSearchParams(searchParams);
    if (nextP > 1) {
      params.set('page', nextP.toString());
    } else {
      params.delete('page');
    }
    setSearchParams(params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pageTitle = mockSettings?.videos_meta_title || 'Video Reviews';
  const pageDesc = mockSettings?.videos_meta_description || 'Watch deep-dive reviews and gameplay analysis.';
  const canonicalUrl = 'https://www.rummydex.com/videos';

  const collectionSchema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: pageTitle,
    description: pageDesc,
    url: canonicalUrl,
    ...(validVideos.length > 0
      ? {
          mainEntity: {
            '@type': 'ItemList',
            '@id': `${canonicalUrl}#itemlist`,
            name: pageTitle,
            itemListElement: validVideos.slice(0, 30).map((v: any, idx: number) => {
              const vSlug = v.slug || v.id;
              const ytId = extractYoutubeId(v.youtube_url || v.video_url || v.url);
              return {
                '@type': 'ListItem',
                position: idx + 1,
                name: v.title || 'Video Guide',
                url: `https://www.rummydex.com/videos/${vSlug}`,
                ...(ytId ? { image: `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` } : {}),
                ...(v.seo_description || v.description
                  ? { description: String(v.seo_description || v.description).slice(0, 140) }
                  : {})
              };
            })
          }
        }
      : {})
  }), [pageTitle, pageDesc, validVideos]);

  const breadcrumbSchema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.rummydex.com' },
      { '@type': 'ListItem', position: 2, name: 'Videos', item: canonicalUrl }
    ]
  }), []);

  return (
    <div className="min-h-screen max-w-6xl mx-auto plain-content px-3 sm:px-6 pb-16 text-left">
      <Meta
        title={pageTitle}
        description={pageDesc}
        url={canonicalUrl}
        canonical={canonicalUrl}
        schema={collectionSchema}
        breadcrumbSchema={breadcrumbSchema}
      />

      <nav
        aria-label="Breadcrumb"
        className="mb-4 sm:mb-6 pt-2 sm:pt-4 flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400"
      >
        <Link to="/" className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:underline">
          <span>← Home</span>
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-zinc-700 dark:text-zinc-300 font-semibold">Videos</span>
      </nav>

      <header className="mb-6 sm:mb-8 pb-5 border-b border-zinc-200/80 dark:border-zinc-800/80 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-1">
            Visual Walkthroughs
          </p>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white m-0">
            Videos &amp; Guides
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
            Verified gameplay walkthroughs, feature reviews, and platform guides.
          </p>
        </div>

        <div className="relative w-full sm:w-72">
          <input
            type="text"
            aria-label="Search videos"
            className="block w-full py-2.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all text-sm rounded-xl px-3.5 pr-9 text-zinc-900 dark:text-zinc-100"
            placeholder="Search videos..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setPage(1);
            }}
          />
          {searchTerm ? (
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                setPage(1);
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 pointer-events-none" />
          )}
        </div>
      </header>

      {loading && filteredVideos.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 min-h-[40vh]">
          <div className="w-8 h-8 border-[3px] border-black/10 dark:border-white/10 border-t-blue-500 rounded-full animate-spin mb-4"></div>
          <p className="text-sm font-medium tracking-wide text-zinc-500 animate-pulse">Loading videos...</p>
        </div>
      ) : paginatedVideos.length === 0 ? (
        <div className="text-center py-20 max-w-md mx-auto">
          <div className="w-14 h-14 bg-zinc-100 dark:bg-zinc-800 rounded-2xl flex items-center justify-center mx-auto mb-4 text-zinc-400">
            <Video className="w-7 h-7" />
          </div>
          <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">No videos found</h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
            {searchTerm ? 'No videos matched your search filter.' : 'No videos have been published yet.'}
          </p>
          {searchTerm && (
            <button
              type="button"
              onClick={() => {
                setSearchTerm('');
                setPage(1);
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-xl text-xs font-semibold hover:bg-blue-700 transition-all"
            >
              Clear filter
            </button>
          )}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {paginatedVideos.map((video, index) => {
              const videoSlug = video.slug || video.id;
              const rawUrl = video.youtube_url || (video as any).video_url || (video as any).url || '';
              const ytId = extractYoutubeId(rawUrl);
              const thumbUrl = ytId ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : '/logo.png';
              const category = (video as any).category || 'Video Guide';
              const duration = (video as any).duration || '';
              const rawDate = resolveCanonicalNewsDate(video, (video as any).published_at, video.created_at);
              const dateLabel = formatNewsDate(rawDate, (video as any).published_at, video.created_at);
              const isHero = index === 0;

              return (
                <article
                  key={video.id || video.slug || `vid-${index}`}
                  className="group flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-colors text-left"
                >
                  <Link
                    to={`/videos/${videoSlug}`}
                    className="relative aspect-video w-full overflow-hidden bg-zinc-900 block"
                  >
                    <img
                      src={thumbUrl}
                      alt={video.title || 'Video Guide'}
                      referrerPolicy="no-referrer"
                      decoding="async"
                      loading={isHero ? 'eager' : 'lazy'}
                      fetchPriority={isHero ? 'high' : 'auto'}
                      width={480}
                      height={270}
                      className={`w-full h-full ${
                        ytId ? 'object-cover' : 'object-contain p-8'
                      } transition-transform duration-300 group-hover:scale-[1.03]`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-black/65 text-white border border-white/25 flex items-center justify-center shadow-lg group-hover:bg-blue-600 group-hover:scale-105 transition-all">
                        <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24" aria-hidden="true">
                          <polygon points="6 3 20 12 6 21 6 3" />
                        </svg>
                      </div>
                    </div>

                    {duration ? (
                      <span className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/80 text-white text-[11px] font-mono font-semibold">
                        {duration}
                      </span>
                    ) : null}
                  </Link>

                  <div className="p-4 sm:p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-1.5 mb-2 text-[11px] font-semibold text-zinc-500 dark:text-zinc-400">
                      <span className="text-blue-600 dark:text-blue-400 uppercase tracking-wider">{category}</span>
                      <span aria-hidden="true">·</span>
                      <time>{dateLabel}</time>
                    </div>

                    <h2 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 leading-snug line-clamp-2 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      <Link to={`/videos/${videoSlug}`}>{video.title}</Link>
                    </h2>

                    {video.description ? (
                      <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                        {video.description}
                      </p>
                    ) : null}

                    <div className="mt-auto pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between">
                      <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
                        Verified Walkthrough
                      </span>
                      <Link
                        to={`/videos/${videoSlug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 transition-transform"
                      >
                        <span>Watch Video</span>
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {totalPages > 1 && (
            <div className="mt-10 pt-6 border-t border-zinc-200/70 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                Showing <span className="text-zinc-900 dark:text-zinc-100">{startIdx + 1}</span>–
                <span className="text-zinc-900 dark:text-zinc-100">
                  {Math.min(safeCurrentPage * ITEMS_PER_PAGE, filteredVideos.length)}
                </span>{' '}
                of <span className="text-zinc-900 dark:text-zinc-100">{filteredVideos.length}</span> guides
              </p>

              <div className="flex items-center gap-1.5 flex-wrap justify-center">
                <button
                  type="button"
                  onClick={() => setPage(safeCurrentPage - 1)}
                  disabled={safeCurrentPage === 1}
                  className="flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 disabled:opacity-40 disabled:pointer-events-none transition-all"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Prev</span>
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
                  const isCurrent = p === safeCurrentPage;
                  if (p === 1 || p === totalPages || (p >= safeCurrentPage - 1 && p <= safeCurrentPage + 1)) {
                    return (
                      <button
                        type="button"
                        key={p}
                        onClick={() => setPage(p)}
                        className={`w-9 h-9 rounded-xl text-xs font-bold transition-all ${
                          isCurrent
                            ? 'bg-blue-600 text-white shadow-sm'
                            : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                        }`}
                        aria-label={`Go to page ${p}`}
                        aria-current={isCurrent ? 'page' : undefined}
                      >
                        {p}
                      </button>
                    );
                  } else if (
                    (p === safeCurrentPage - 2 && safeCurrentPage > 3) ||
                    (p === safeCurrentPage + 2 && safeCurrentPage < totalPages - 2)
                  ) {
                    return (
                      <span key={p} className="px-1 text-xs text-zinc-400 select-none">
                        ...
                      </span>
                    );
                  }
                  return null;
                })}

                <button
                  type="button"
                  onClick={() => setPage(safeCurrentPage + 1)}
                  disabled={safeCurrentPage === totalPages}
                  className="flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 disabled:opacity-40 disabled:pointer-events-none transition-all"
                  aria-label="Next page"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {remainingVideos.length > 0 && (
        <nav
          aria-label="Complete Video Archive"
          data-nosnippet
          className="mt-10 pt-6 border-t border-zinc-200/70 dark:border-zinc-800/80"
        >
          <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3">
            Complete Video Directory
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-xs">
            {remainingVideos.map((v: any) => {
              const vSlug = v.slug || v.id;
              return (
                <li key={v.id || vSlug} className="truncate">
                  <Link
                    to={`/videos/${vSlug}`}
                    className="text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {v.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}

      <nav
        aria-label="Explore Directory"
        className="mt-10 pt-6 border-t border-zinc-200/70 dark:border-zinc-800/80"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-zinc-600 dark:text-zinc-400">
          <span className="text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Explore RummyDex:</span>
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              App Directory
            </Link>
            <Link to="/news" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              News &amp; Updates
            </Link>
            <Link to="/new-apps" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              New Releases
            </Link>
            <Link to="/categories" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Categories
            </Link>
            <Link to="/faq" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              FAQs
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
