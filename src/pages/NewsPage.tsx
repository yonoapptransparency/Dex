import { safeHtml } from '../lib/safeHtmlPublic';
/**
 * NewsPage listings
 * Publishes announcements, system patches, safe apk mirrors status changes, and general portal logs.
 * Optimized with URL-synced numbered pagination, lazy loading, image resizing, and structured SEO.
 */

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Newspaper, Search, ArrowRight, ArrowLeft, ChevronLeft, ChevronRight, Clock, User, Calendar, Tag, Sparkles, X } from 'lucide-react';
import { useData } from '../contexts/DataContextPublic';
import { Link, useSearchParams } from 'react-router-dom';
import Meta from '../components/Meta';
import { motion, AnimatePresence } from 'framer-motion';
import { getOptimizedImageUrl } from '../seo/utils';

const ITEMS_PER_PAGE = 6;

// Helper: Calculate estimated reading time
function calculateReadingTime(text: string): string {
  if (!text) return '1 min read';
  const words = text.replace(/<[^>]*>?/gm, ' ').trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 180));
  return `${minutes} min read`;
}

// Helper: Format date safely
function formatNewsDate(dateStr?: string, publishedAt?: string): string {
  const d = dateStr || publishedAt;
  if (!d) return 'Recent';
  try {
    const parsed = new Date(d);
    if (!isNaN(parsed.getTime())) {
      return parsed.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }
  } catch (e) {}
  return 'Recent';
}

export default function NewsPage() {
  const { news: mockNews = [], settings: mockSettings } = useData();
  const [searchParams, setSearchParams] = useSearchParams();
  const contentTopRef = useRef<HTMLDivElement>(null);

  // URL state synchronization
  const rawPage = parseInt(searchParams.get('page') || '1', 10);
  const currentPage = isNaN(rawPage) || rawPage < 1 ? 1 : rawPage;
  const activeCategory = searchParams.get('category') || 'All';
  const searchTerm = searchParams.get('q') || '';

  // Extract all unique categories dynamically
  const categories = useMemo(() => {
    const set = new Set<string>();
    mockNews.forEach(item => {
      if (item.category && item.category.trim()) {
        set.add(item.category.trim());
      }
    });
    return ['All', ...Array.from(set)];
  }, [mockNews]);

  // Filtered news items
  const filteredNews = useMemo(() => {
    return mockNews.filter(item => {
      const matchesCategory = activeCategory === 'All' || 
        (item.category && item.category.toLowerCase() === activeCategory.toLowerCase());
      
      const query = searchTerm.toLowerCase().trim();
      const matchesSearch = !query || 
        item.title?.toLowerCase().includes(query) ||
        item.description?.toLowerCase().includes(query) ||
        item.ceo_name?.toLowerCase().includes(query) ||
        item.category?.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [mockNews, activeCategory, searchTerm]);

  // Pagination calculations
  const totalPages = Math.max(1, Math.ceil(filteredNews.length / ITEMS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);

  // Paginated slice
  const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
  const currentNewsSlice = useMemo(() => {
    return filteredNews.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredNews, startIndex]);

  // On page 1 without search/category filters, show the first item as a Hero Spotlight
  const isDefaultView = safeCurrentPage === 1 && activeCategory === 'All' && !searchTerm;
  const spotlightItem = isDefaultView && currentNewsSlice.length > 0 ? currentNewsSlice[0] : null;
  const gridItems = isDefaultView ? currentNewsSlice.slice(1) : currentNewsSlice;

  // Handle page change with smooth scroll
  const handlePageChange = (page: number) => {
    const nextParams = new URLSearchParams(searchParams);
    if (page <= 1) {
      nextParams.delete('page');
    } else {
      nextParams.set('page', String(page));
    }
    setSearchParams(nextParams, { replace: false });
    
    // Smooth scroll to top of news section
    if (contentTopRef.current) {
      const topOffset = contentTopRef.current.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: Math.max(0, topOffset), behavior: 'smooth' });
    }
  };

  // Handle category change
  const handleCategoryChange = (cat: string) => {
    const nextParams = new URLSearchParams(searchParams);
    if (cat === 'All') {
      nextParams.delete('category');
    } else {
      nextParams.set('category', cat);
    }
    nextParams.delete('page'); // Reset to page 1
    setSearchParams(nextParams);
  };

  // Handle search term change
  const handleSearchChange = (val: string) => {
    const nextParams = new URLSearchParams(searchParams);
    if (!val.trim()) {
      nextParams.delete('q');
    } else {
      nextParams.set('q', val);
    }
    nextParams.delete('page'); // Reset to page 1
    setSearchParams(nextParams);
  };

  const handleClearFilters = () => {
    setSearchParams(new URLSearchParams());
  };

  // Generate numbered pagination items with smart ellipsis
  const paginationRange = useMemo(() => {
    const delta = 1;
    const range: (number | string)[] = [];
    
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= safeCurrentPage - delta && i <= safeCurrentPage + delta)
      ) {
        range.push(i);
      } else if (range[range.length - 1] !== '...') {
        range.push('...');
      }
    }
    return range;
  }, [totalPages, safeCurrentPage]);

  // Dynamic SEO meta tags for paginated pages
  const baseTitle = mockSettings?.news_meta_title || "News & Updates";
  const seoTitle = safeCurrentPage > 1 ? `${baseTitle} - Page ${safeCurrentPage} | ${mockSettings?.site_title || 'RummyDex'}` : `${baseTitle} | ${mockSettings?.site_title || 'RummyDex'}`;
  const seoDescription = mockSettings?.news_meta_description || "Stay updated with the latest news, transmissions, security releases, and intelligence updates.";
  const canonicalUrl = `${window.location.origin}/news${safeCurrentPage > 1 ? `?page=${safeCurrentPage}` : ''}`;

  return (
    <main className="min-h-screen max-w-[1550px] mx-auto plain-content px-3 sm:px-6 md:px-10 text-zinc-900 dark:text-zinc-100 pb-20">
      <Meta 
        title={seoTitle}
        description={seoDescription}
        canonical={canonicalUrl}
      />

      {/* Top Breadcrumb */}
      <div className="mb-8 pt-4">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline transition-colors group"
        >
          <div className="p-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 group-hover:-translate-x-1 transition-transform">
            <ArrowLeft className="w-4 h-4" />
          </div>
          Home
        </Link>
      </div>

      {/* Header & Search Hero */}
      <div ref={contentTopRef} className="mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-black/5 dark:border-white/5">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Newspaper className="w-3.5 h-3.5" /> Official Intelligence Feed
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              News & Updates
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              Verified announcements, system patches, safety reports, and platform transparency updates.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              className="w-full py-3 pl-11 pr-10 text-sm text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 rounded-xl placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
              placeholder="Search news or topics..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              aria-label="Search news articles"
            />
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
            {searchTerm && (
              <button
                onClick={() => handleSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Chips & Counter */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-1 max-w-full">
            {categories.map((cat) => {
              const isActive = activeCategory.toLowerCase() === cat.toLowerCase();
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                      : 'bg-zinc-100 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400 shrink-0">
            {filteredNews.length > 0 ? (
              <span>
                Showing <strong className="text-zinc-800 dark:text-zinc-200">{startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, filteredNews.length)}</strong> of <strong className="text-zinc-800 dark:text-zinc-200">{filteredNews.length}</strong> articles
              </span>
            ) : null}
          </div>
        </div>
      </div>

      {/* Hero Spotlight Article (Page 1 only) */}
      {spotlightItem && (
        <article className="mb-14 p-4 sm:p-8 rounded-3xl bg-gradient-to-br from-zinc-50 to-zinc-100/60 dark:from-zinc-900/60 dark:to-zinc-900/20 border border-black/5 dark:border-white/10 shadow-sm transition-all hover:border-blue-500/20 group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <Link 
              to={`/news/${spotlightItem.slug}`}
              className="lg:col-span-7 block overflow-hidden rounded-2xl bg-zinc-200 dark:bg-zinc-800 aspect-[16/9] relative group/img"
              aria-label={`Read featured story: ${spotlightItem.title}`}
            >
              <img 
                src={getOptimizedImageUrl(spotlightItem.logo_url || 'https://images.unsplash.com/photo-1542751371-adc38448a05e', 800)} 
                alt={spotlightItem.title}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/90 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-sm shadow-md">
                <Sparkles className="w-3.5 h-3.5" /> Featured Spotlight
              </div>
            </Link>

            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-3 mb-4 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                <span className="px-2.5 py-1 rounded-md bg-blue-100/70 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 font-bold uppercase tracking-wider">
                  {spotlightItem.category || 'Official Report'}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {formatNewsDate(spotlightItem.date, spotlightItem.published_at)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {calculateReadingTime(spotlightItem.description || spotlightItem.content || '')}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 dark:text-white leading-tight mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                <Link to={`/news/${spotlightItem.slug}`}>
                  {spotlightItem.title}
                </Link>
              </h2>

              <div 
                className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base line-clamp-3 leading-relaxed mb-6"
                dangerouslySetInnerHTML={{ __html: safeHtml(spotlightItem.description || '') }}
              />

              <div className="flex items-center justify-between pt-4 border-t border-black/5 dark:border-white/5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold text-xs flex items-center justify-center">
                    {spotlightItem.ceo_name ? spotlightItem.ceo_name.charAt(0) : 'A'}
                  </div>
                  <div className="text-xs">
                    <p className="font-semibold text-zinc-900 dark:text-zinc-100">{spotlightItem.ceo_name || 'Admin Team'}</p>
                    <p className="text-zinc-500 dark:text-zinc-400">{spotlightItem.ceo_description || 'Transparency Analyst'}</p>
                  </div>
                </div>

                <Link
                  to={`/news/${spotlightItem.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm active:scale-95"
                  aria-label={`Read full story: ${spotlightItem.title}`}
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </article>
      )}

      {/* Main News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {gridItems.map((item, index) => {
          const isAboveFold = safeCurrentPage === 1 && index < 2;
          const readTime = calculateReadingTime(item.description || item.content || '');
          const formattedDate = formatNewsDate(item.date, item.published_at);
          const optimizedImage = getOptimizedImageUrl(item.logo_url || 'https://images.unsplash.com/photo-1542751371-adc38448a05e', 600);

          return (
            <motion.article 
              key={item.id || item.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: index * 0.04 }}
              className="flex flex-col bg-white dark:bg-zinc-900/60 rounded-2xl border border-black/5 dark:border-white/10 p-4 sm:p-5 shadow-sm hover:shadow-md hover:border-blue-500/30 transition-all group"
            >
              {/* Image Container with strict Aspect Ratio */}
              <Link 
                to={`/news/${item.slug}`} 
                aria-label={`Read full news article: ${item.title}`}
                className="block w-full aspect-[16/9] rounded-xl overflow-hidden mb-5 bg-zinc-100 dark:bg-zinc-800 relative group/img"
              >
                <img 
                  src={optimizedImage} 
                  alt={item.title} 
                  loading={isAboveFold ? "eager" : "lazy"}
                  decoding="async"
                  className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to elegant placeholder if broken
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                  {item.category || 'Report'}
                </div>
              </Link>

              {/* Meta information: Date & Reading Time */}
              <div className="flex items-center gap-3 text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-zinc-400" /> {formattedDate}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-zinc-400" /> {readTime}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white leading-snug mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                <Link to={`/news/${item.slug}`} aria-label={`Read news: ${item.title}`}>
                  {item.title}
                </Link>
              </h2>

              {/* Summary Description */}
              <div 
                className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 line-clamp-3 leading-relaxed" 
                dangerouslySetInnerHTML={{ __html: safeHtml(item.description || '') }} 
              />

              {/* Footer CTA */}
              <div className="mt-auto pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-bold text-[10px] flex items-center justify-center">
                    {item.ceo_name ? item.ceo_name.charAt(0) : 'A'}
                  </div>
                  <span className="text-xs font-medium text-zinc-600 dark:text-zinc-300 truncate max-w-[120px]">
                    {item.ceo_name || 'Admin'}
                  </span>
                </div>

                <Link 
                  to={`/news/${item.slug}`} 
                  aria-label={`Read full article: ${item.title}`}
                  className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-bold text-xs group-hover:gap-2 transition-all"
                >
                  <span>Read Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.article>
          );
        })}

        {/* Empty State */}
        {filteredNews.length === 0 && (
          <div className="col-span-full py-20 text-center px-4 max-w-md mx-auto">
            <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 text-zinc-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">No news found</h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-6">
              We couldn't find any articles matching "{searchTerm || activeCategory}". Try searching for another topic or resetting filters.
            </p>
            <button
              onClick={handleClearFilters}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Numbered Pagination UI (1 2 3 4 ... Next) */}
      {totalPages > 1 && (
        <nav 
          aria-label="News pagination" 
          className="mt-16 pt-8 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
            Page <span className="font-bold text-zinc-900 dark:text-zinc-100">{safeCurrentPage}</span> of <span className="font-bold text-zinc-900 dark:text-zinc-100">{totalPages}</span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Previous Page Button */}
            <button
              onClick={() => handlePageChange(safeCurrentPage - 1)}
              disabled={safeCurrentPage <= 1}
              className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border border-black/5 dark:border-white/10 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 disabled:opacity-40 disabled:pointer-events-none active:scale-95"
              aria-label="Go to previous page"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Previous</span>
            </button>

            {/* Direct Page Numbers */}
            {paginationRange.map((pageNumber, idx) => {
              if (pageNumber === '...') {
                return (
                  <span 
                    key={`ellipsis-${idx}`} 
                    className="px-2 py-2 text-zinc-400 text-xs font-semibold select-none"
                  >
                    ...
                  </span>
                );
              }

              const num = Number(pageNumber);
              const isActive = num === safeCurrentPage;

              return (
                <button
                  key={`page-${num}`}
                  onClick={() => handlePageChange(num)}
                  aria-current={isActive ? 'page' : undefined}
                  aria-label={`Page ${num}`}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-xs font-bold transition-all flex items-center justify-center ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                      : 'border border-black/5 dark:border-white/10 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
                >
                  {num}
                </button>
              );
            })}

            {/* Next Page Button */}
            <button
              onClick={() => handlePageChange(safeCurrentPage + 1)}
              disabled={safeCurrentPage >= totalPages}
              className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border border-black/5 dark:border-white/10 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 disabled:opacity-40 disabled:pointer-events-none active:scale-95"
              aria-label="Go to next page"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </nav>
      )}
    </main>
  );
}

