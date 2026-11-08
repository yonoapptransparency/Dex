import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search, X, TrendingUp, ShieldCheck, ArrowUpRight, FolderOpen } from 'lucide-react';
import { useData } from '../contexts/DataContextPublic';
import { useNavigate } from 'react-router-dom';
import { getOptimizedImageUrl, normalizeFileSize } from '../seo/utils';
import { preloadAppDetails } from '../lib/preloadHelper';

interface LightSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

const FALLBACK_ICON = '/logo.png';

export default function LightSearch({ isOpen, onClose }: LightSearchProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [history, setHistory] = useState<string[]>([]);
  const { apps, settings, fetchApps } = useData();
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      if (apps.length < 25 && fetchApps) {
        fetchApps();
      }
      document.body.style.overflow = 'hidden';
      setSelectedIndex(-1);
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 40);
      try {
        const stored = localStorage.getItem('recent_searches');
        if (stored) {
          setHistory(JSON.parse(stored));
        }
      } catch (e) {
        // Ignore
      }
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setSelectedIndex(-1);
    }
  }, [isOpen, apps.length, fetchApps]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const saveToHistory = (searchTerm: string) => {
    const trimmed = searchTerm.trim();
    if (!trimmed) return;
    setHistory(prev => {
      const next = [trimmed, ...prev.filter(item => item.toLowerCase() !== trimmed.toLowerCase())].slice(0, 6);
      try {
        localStorage.setItem('recent_searches', JSON.stringify(next));
      } catch (e) {}
      return next;
    });
  };

  const removeFromHistory = (itemToRemove: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setHistory(prev => {
      const next = prev.filter(item => item !== itemToRemove);
      try {
        localStorage.setItem('recent_searches', JSON.stringify(next));
      } catch (e) {}
      return next;
    });
  };

  const clearHistory = () => {
    setHistory([]);
    try {
      localStorage.removeItem('recent_searches');
    } catch (e) {}
  };

  const trendingSearches = useMemo(() => {
    let trends: string[] = [];
    if (settings?.trending_searches && Array.isArray(settings.trending_searches) && settings.trending_searches.length > 0) {
      trends = settings.trending_searches.filter(Boolean);
    } else if (settings?.trending_searches && typeof settings.trending_searches === 'string') {
      trends = (settings.trending_searches as string).split(',').map(s => s.trim()).filter(Boolean);
    }

    if (trends.length === 0 && (apps || []).length > 0) {
      const allAppKeywords = new Set<string>();
      (apps || []).forEach(a => {
        if (a && a.seo_keywords) {
          a.seo_keywords.split(',').forEach(k => allAppKeywords.add(k.trim()));
        }
      });
      trends = Array.from(allAppKeywords).filter(Boolean);
    }

    return trends.slice(0, 8);
  }, [settings?.trending_searches, apps]);

  const matchingCategories = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return [];
    const rawCats = Array.isArray(settings?.categories) && settings.categories.length > 0
      ? settings.categories
      : ['Rummy Apps', 'Yono Apps', 'Teen Patti', 'Casino', 'Slot Games', 'Arcade'];
    return rawCats
      .filter(c => {
        const lower = c.toLowerCase().trim();
        return lower !== 'all apps' && lower !== 'all' && lower !== 'categories' && lower !== 'top charts' && lower.includes(q);
      })
      .slice(0, 3);
  }, [query, settings?.categories]);

  // Instant scored search (exact match > prefix match > word match > keyword/category match)
  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return [];
    return (apps || [])
      .map(app => {
        if (!app || !app.name) return { app, score: 0 };
        let score = 0;
        const name = app.name.toLowerCase();
        const cat = (app.category || '').toLowerCase();
        const kw = (app.seo_keywords || '').toLowerCase();
        const dev = (app.developer || (app as any).publisher_name || '').toLowerCase();

        if (name === q) score += 1000;
        else if (name.startsWith(q)) score += 600;
        else if (name.split(/\s+/).some((w: string) => w.startsWith(q))) score += 350;
        else if (name.includes(q)) score += 180;

        if (cat.includes(q)) score += 90;
        if (kw.includes(q)) score += 70;
        if (dev.includes(q)) score += 50;

        return { app, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        const sa = typeof a.app.serial_number === 'number' && a.app.serial_number > 0 ? a.app.serial_number : 999999;
        const sb = typeof b.app.serial_number === 'number' && b.app.serial_number > 0 ? b.app.serial_number : 999999;
        return sa - sb;
      })
      .slice(0, 8)
      .map(item => item.app);
  }, [query, apps]);

  useEffect(() => {
    setSelectedIndex(-1);
  }, [query]);

  const handleSelectTerm = (term: string) => {
    saveToHistory(term);
    document.body.style.overflow = '';
    navigate(`/?q=${encodeURIComponent(term)}`);
    onClose();
  };

  const handleSelectApp = (app: any) => {
    saveToHistory(app.name);
    document.body.style.overflow = '';
    navigate(`/app/${app.slug || app.id}`);
    onClose();
  };

  const handleSelectCategory = (cat: string) => {
    const slug = cat.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    document.body.style.overflow = '';
    navigate(slug ? `/category/${slug}` : '/categories');
    onClose();
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (results.length === 0) return;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : results.length - 1));
      } else if (e.key === 'Enter' && selectedIndex >= 0 && selectedIndex < results.length) {
        e.preventDefault();
        handleSelectApp(results[selectedIndex]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex flex-col items-center pt-2.5 sm:pt-12 px-2.5 sm:px-4 animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Search applications"
    >
      <div 
        className="w-full max-w-xl bg-white dark:bg-zinc-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-black/10 dark:border-white/10 overflow-hidden flex flex-col max-h-[86vh] animate-in zoom-in-98 slide-in-from-top-3 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Input Bar */}
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            if (selectedIndex >= 0 && selectedIndex < results.length) {
              handleSelectApp(results[selectedIndex]);
            } else if (query.trim()) {
              handleSelectTerm(query.trim());
            }
          }}
          className="flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-4 py-3 sm:py-3.5 border-b border-black/5 dark:border-white/5 shrink-0"
        >
          <Search className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 shrink-0" />
          <input
            ref={inputRef}
            type="search"
            enterKeyHint="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search apps, games, or categories..."
            className="flex-1 bg-transparent text-sm sm:text-base font-medium text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 outline-none border-none p-0 focus:ring-0"
          />
          {query.length > 0 && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                inputRef.current?.focus();
              }}
              className="p-1.5 rounded-full text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors cursor-pointer"
              aria-label="Clear search query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button 
            type="button"
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-semibold text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            aria-label="Close search"
          >
            Esc
          </button>
        </form>

        {/* Scrollable Result / Trends Area */}
        <div className="overflow-y-auto overscroll-contain p-2 sm:p-3 space-y-3">
          {query.trim().length > 0 ? (
            <>
              {matchingCategories.length > 0 && (
                <div className="px-2 pt-0.5">
                  <div className="text-[11px] font-semibold text-zinc-400 dark:text-zinc-500 mb-1.5 uppercase tracking-wider">
                    Categories
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {matchingCategories.map((cat) => (
                      <button
                        key={`cat-match-${cat}`}
                        type="button"
                        onClick={() => handleSelectCategory(cat)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/40 text-xs font-semibold hover:bg-blue-100/80 dark:hover:bg-blue-900/50 transition-colors cursor-pointer whitespace-nowrap"
                      >
                        <FolderOpen className="w-3.5 h-3.5 shrink-0" />
                        <span>{cat}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {results.length > 0 ? (
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-zinc-400 dark:text-zinc-500 px-3 pt-1 uppercase tracking-wider">
                    <span>Applications</span>
                    <span className="tabular-nums">{results.length} matched</span>
                  </div>
                  {results.map((app, idx) => {
                    const isSelected = idx === selectedIndex;
                    const ratingVal = typeof app.rating === 'number' ? app.rating : parseFloat(String(app.rating || '5.0'));
                    const ratingFormatted = !isNaN(ratingVal) && ratingVal > 0 ? ratingVal.toFixed(1) : '5.0';
                    const sizeFormatted = (app as any).size ? normalizeFileSize((app as any).size) : '';
                    const isVerified = (app.safety_status || 'Verified') === 'Verified';

                    return (
                      <div
                        key={app.id || app.slug}
                        onMouseEnter={() => {
                          setSelectedIndex(idx);
                          preloadAppDetails(app);
                        }}
                        onTouchStart={() => preloadAppDetails(app)}
                        onClick={() => handleSelectApp(app)}
                        className={`flex items-center justify-between gap-3 p-2 sm:p-2.5 rounded-xl transition-colors cursor-pointer group ${
                          isSelected
                            ? 'bg-blue-50/80 dark:bg-zinc-800'
                            : 'hover:bg-zinc-100/80 dark:hover:bg-zinc-800/70'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <img
                            src={getOptimizedImageUrl(app.icon_url, 96) || FALLBACK_ICON}
                            alt={app.name}
                            width={42}
                            height={42}
                            loading="lazy"
                            decoding="async"
                            referrerPolicy="no-referrer"
                            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl object-cover shrink-0 border border-black/5 dark:border-white/10 bg-zinc-100 dark:bg-zinc-800"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              if (app.icon_url && target.src !== app.icon_url) {
                                target.src = app.icon_url;
                              } else {
                                target.src = FALLBACK_ICON;
                              }
                            }}
                          />
                          <div className="min-w-0">
                            <div className="flex items-center gap-1">
                              <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {app.name}
                              </h4>
                              {isVerified && (
                                <ShieldCheck className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                              )}
                            </div>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate tabular-nums">
                              <span>{app.category?.split(',')[0] || 'Game'}</span>
                              <span className="mx-1.5">·</span>
                              <span>{ratingFormatted} ★</span>
                              {sizeFormatted && (
                                <>
                                  <span className="mx-1.5">·</span>
                                  <span>{sizeFormatted}</span>
                                </>
                              )}
                            </p>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 dark:text-blue-400 px-2.5 py-1 bg-blue-50 dark:bg-blue-950/40 rounded-lg shrink-0 whitespace-nowrap">
                          <span>Open</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </span>
                      </div>
                    );
                  })}

                  <button
                    type="button"
                    onClick={() => handleSelectTerm(query.trim())}
                    className="w-full mt-1.5 p-2.5 text-center text-xs font-semibold text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-xl transition-colors cursor-pointer"
                  >
                    View all catalog results for "{query.trim()}" →
                  </button>
                </div>
              ) : (
                <div className="py-8 text-center text-zinc-500 dark:text-zinc-400">
                  <Search className="w-8 h-8 text-zinc-300 dark:text-zinc-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">No applications matched "{query}"</p>
                  <p className="text-xs text-zinc-400 mt-0.5">Try searching with a broader keyword or category name</p>
                </div>
              )}
            </>
          ) : (
            <>
              {/* Recent Searches */}
              {history.length > 0 && (
                <div>
                  <div className="flex items-center justify-between px-3 py-1 text-[11px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                    <span>Recent Searches</span>
                    <button
                      type="button"
                      onClick={clearHistory}
                      className="text-red-500 hover:text-red-600 transition-colors font-semibold lowercase first-letter:uppercase cursor-pointer"
                    >
                      Clear
                    </button>
                  </div>
                  <div className="space-y-0.5 mt-1">
                    {history.map((term, idx) => (
                      <div
                        key={`hist-${idx}`}
                        onClick={() => handleSelectTerm(term)}
                        className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-zinc-100/80 dark:hover:bg-zinc-800/80 transition-colors cursor-pointer group"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <Search className="w-3.5 h-3.5 text-zinc-400 group-hover:text-blue-500 transition-colors shrink-0" />
                          <span className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300 truncate">
                            {term}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => removeFromHistory(term, e)}
                          aria-label={`Remove ${term}`}
                          className="p-1 text-zinc-400 hover:text-red-500 transition-colors rounded-md cursor-pointer"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Trending Searches */}
              {trendingSearches.length > 0 && (
                <div className="px-3 pt-2 pb-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-2">
                    <TrendingUp className="w-3.5 h-3.5 text-blue-500" />
                    <span>Popular & Trending</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {trendingSearches.map((tag, idx) => (
                      <button
                        key={`trend-${idx}`}
                        type="button"
                        onClick={() => handleSelectTerm(tag)}
                        className="px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800/70 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-all border border-black/5 dark:border-white/5 active:scale-95 cursor-pointer whitespace-nowrap"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
