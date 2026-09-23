import { safeHtml } from '../lib/safeHtmlPublic';
/**
 * NewsPage listings
 * Google Discover-inspired visual layout with edge-to-edge full-freedom imagery (natural aspect ratio, zero upper/down cut off, zero side borders on mobile),
 * snug top navigation with zero dead space above Back button, spacious search bar, and 1-tap direct article navigation.
 */

import React, { useState, useMemo, useRef } from 'react';
import { Search, ArrowLeft, ChevronLeft, ChevronRight, Clock, Calendar, Pin, X, Share2, Check } from 'lucide-react';
import { useData } from '../contexts/DataContextPublic';
import { Link, useSearchParams } from 'react-router-dom';
import Meta from '../components/Meta';
import { getOptimizedImageUrl } from '../seo/utils';

const ITEMS_PER_PAGE = 9;

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

// Helper: Clean plain text snippet
function getPlainTextSnippet(htmlOrText?: string): string {
  if (!htmlOrText) return '';
  return htmlOrText
    .replace(/<[^>]*>?/gm, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

export default function NewsPage() {
  const { news: mockNews = [], settings: mockSettings } = useData();
  const [searchParams, setSearchParams] = useSearchParams();
  const contentTopRef = useRef<HTMLDivElement>(null);
  const [copyToast, setCopyToast] = useState(false);

  // URL state synchronization
  const rawPage = parseInt(searchParams.get('page') || '1', 10);
  const currentPage = isNaN(rawPage) || rawPage < 1 ? 1 : rawPage;
  const activeCategory = searchParams.get('category') || 'All';
  const searchTerm = searchParams.get('q') || '';

  // Filter and sort public news items (pinned items first, then latest date first)
  const publicNewsList = useMemo(() => {
    return (mockNews || [])
      .filter(item => item && item.sync_to_public !== false)
      .sort((a, b) => {
        if (a.is_pinned && !b.is_pinned) return -1;
        if (!a.is_pinned && b.is_pinned) return 1;
        const dateA = new Date(a.date || a.published_at || a.created_at || 0).getTime();
        const dateB = new Date(b.date || b.published_at || b.created_at || 0).getTime();
        return dateB - dateA;
      });
  }, [mockNews]);

  // Extract all unique categories dynamically
  const categories = useMemo(() => {
    const set = new Set<string>();
    publicNewsList.forEach(item => {
      if (item.category && item.category.trim()) {
        set.add(item.category.trim());
      }
    });
    return ['All', ...Array.from(set)];
  }, [publicNewsList]);

  // Filtered news items
  const filteredNews = useMemo(() => {
    return publicNewsList.filter(item => {
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
  }, [publicNewsList, activeCategory, searchTerm]);

  // Pagination calculations
  const totalPages = Math.max(1, Math.ceil(filteredNews.length / ITEMS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);

  // Paginated slice
  const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
  const currentNewsSlice = useMemo(() => {
    return filteredNews.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredNews, startIndex]);

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

  const handleShare = (item: any) => {
    const url = `${window.location.origin}/news/${item.slug}`;
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: getPlainTextSnippet(item.description).slice(0, 100),
        url: url,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(url).then(() => {
        setCopyToast(true);
        setTimeout(() => setCopyToast(false), 2000);
      }).catch(() => {});
    }
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
    <div className="w-full text-zinc-900 dark:text-zinc-100 pb-20">
      <Meta 
        title={seoTitle}
        description={seoDescription}
        canonical={canonicalUrl}
      />

      {/* Toast Notification when link copied */}
      {copyToast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-4 py-2 rounded-full shadow-xl flex items-center gap-2 border border-white/10 dark:border-black/5 animate-fade-in text-xs font-semibold"
        >
          <Check className="w-3.5 h-3.5 text-green-500" />
          <span>Link copied to clipboard</span>
        </div>
      )}

      {/* 1. Snug Upside Home Button - Positioned immediately under header with zero dead space */}
      <div ref={contentTopRef} className="pt-0.5 pb-0.5 px-3 sm:px-0">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group shrink-0"
        >
          <div className="p-1.5 sm:p-2 rounded-full bg-blue-50 dark:bg-blue-900/30 group-hover:-translate-x-1 transition-transform shadow-xs">
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <span>Back to storefront</span>
        </Link>
      </div>

      {/* 2. Below Home: News & Updates Title + Bigger Search Box with proper spacing */}
      <div className="px-3 sm:px-0 mt-0.5 mb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
          News &amp; Updates
        </h1>

        {/* Bigger, comfortable search bar */}
        <div className="relative w-full sm:w-80 shrink-0">
          <input
            type="text"
            className="w-full py-2.5 pl-10 pr-9 text-sm text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700/80 rounded-xl placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
            placeholder="Search news or topics..."
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            aria-label="Search news articles"
          />
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
          {searchTerm && (
            <button
              onClick={() => handleSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* 3. Horizontal Scrolling Category Chips - Fast touch access */}
      <div className="px-3 sm:px-0 flex items-center gap-2 overflow-x-auto pb-2 mb-4 sm:mb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((cat) => {
          const isActive = activeCategory.toLowerCase() === cat.toLowerCase();
          return (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* 4. Google Discover Style News Feed: Complete Image Freedom (NO aspect ratio cutoffs, NO upper/down clipping, NO side borders on mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7 sm:gap-6 md:gap-8">
        {currentNewsSlice.map((item, index) => {
          const isAboveFold = safeCurrentPage === 1 && index < 2;
          const readTime = calculateReadingTime(item.description || item.content || '');
          const formattedDate = formatNewsDate(item.date, item.published_at);
          const optimizedImage = getOptimizedImageUrl(item.logo_url || 'https://images.unsplash.com/photo-1542751371-adc38448a05e', 900);
          const cleanSnippet = getPlainTextSnippet(item.description || item.content);

          return (
            <article 
              key={item.id || item.slug}
              className="flex flex-col group select-none animate-fade-in border-b border-zinc-100 dark:border-zinc-800/80 pb-6 sm:border-0 sm:pb-0"
            >
              {/* Full Image Freedom: Natural full-size display with ZERO crop/cut-off on top/bottom or sides */}
              <Link 
                to={`/news/${item.slug}`} 
                aria-label={`Read full news article: ${item.title}`}
                className="block relative w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800/80 rounded-none sm:rounded-2xl group/img"
              >
                <img 
                  src={optimizedImage} 
                  alt={item.title} 
                  loading={isAboveFold ? "eager" : "lazy"}
                  decoding="async"
                  className="w-full h-auto block group-hover/img:opacity-95 transition-opacity"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />

                {/* Subtle Overlaid Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5">
                  {item.is_breaking && (
                    <span className="px-2.5 py-1 rounded-full bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                      Breaking
                    </span>
                  )}
                  {item.is_pinned && !item.is_breaking && (
                    <span className="px-2.5 py-1 rounded-full bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-md flex items-center gap-1">
                      <Pin className="w-2.5 h-2.5" /> Pinned
                    </span>
                  )}
                  {item.is_new && !item.is_breaking && !item.is_pinned && (
                    <span className="px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                      New
                    </span>
                  )}
                </div>
              </Link>

              {/* Content Block: Clean padding for reading comfort, 1-click navigate */}
              <div className="px-3 sm:px-0 pt-3 pb-1 flex flex-col flex-1">
                {/* Headline: Full headline cleanly rendered, clicking opens article */}
                <h2 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white leading-snug line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  <Link to={`/news/${item.slug}`} aria-label={`Read news: ${item.title}`}>
                    {item.title}
                  </Link>
                </h2>

                {/* Snippet: 2-line clean overview */}
                {cleanSnippet && (
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1.5 line-clamp-2 leading-relaxed">
                    {cleanSnippet}
                  </p>
                )}

                {/* Metadata Row: Category, Date, Read Time + Quick Share */}
                <div className="mt-auto pt-3 flex items-center justify-between text-xs text-zinc-400 dark:text-zinc-500">
                  <div className="flex items-center gap-2 truncate mr-2">
                    {item.category && (
                      <span className="font-semibold text-zinc-700 dark:text-zinc-300 truncate">
                        {item.category}
                      </span>
                    )}
                    {item.category && <span>•</span>}
                    <span className="shrink-0">{formattedDate}</span>
                    <span>•</span>
                    <span className="shrink-0">{readTime}</span>
                  </div>

                  {/* Native Share button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleShare(item);
                    }}
                    className="p-1.5 rounded-full text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer shrink-0"
                    title="Share article"
                    aria-label="Share article"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          );
        })}

        {/* Empty State */}
        {filteredNews.length === 0 && (
          <div className="col-span-full py-16 text-center px-4 max-w-md mx-auto">
            <div className="w-14 h-14 bg-zinc-100 dark:bg-zinc-800 text-zinc-400 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-1.5">No news found</h3>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs mb-5">
              We couldn't find any articles matching "{searchTerm || activeCategory}".
            </p>
            <button
              onClick={handleClearFilters}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Numbered Pagination UI */}
      {totalPages > 1 && (
        <nav 
          aria-label="News pagination" 
          className="mt-12 pt-6 px-3 sm:px-0 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
            Page <span className="font-bold text-zinc-900 dark:text-zinc-100">{safeCurrentPage}</span> of <span className="font-bold text-zinc-900 dark:text-zinc-100">{totalPages}</span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Previous Page Button */}
            <button
              onClick={() => handlePageChange(safeCurrentPage - 1)}
              disabled={safeCurrentPage <= 1}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border border-black/5 dark:border-white/10 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 disabled:opacity-40 disabled:pointer-events-none active:scale-95 cursor-pointer"
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
                    className="px-2 py-1 text-zinc-400 text-xs font-semibold select-none"
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
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl text-xs font-bold transition-all flex items-center justify-center cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-xs'
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
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border border-black/5 dark:border-white/10 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 disabled:opacity-40 disabled:pointer-events-none active:scale-95 cursor-pointer"
              aria-label="Go to next page"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </nav>
      )}
    </div>
  );
}
