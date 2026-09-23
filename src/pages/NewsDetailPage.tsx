/**
 * NewsDetailPage overview view
 * Shows layout announcements, system patches logs, and live interactive user commentaries.
 * Lightweight, lightning-fast architecture with minimal top spacing, full-freedom edge-to-edge imagery,
 * and a simple, clean "Download & Info" button directly below the image (without heavy metadata/logos).
 */

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import Meta from '../components/Meta';
import { useData } from '../contexts/DataContextPublic';
import { mockNews as staticMockNews } from '../lib/staticData';
import { ArrowLeft, MessageSquare, Send, ShieldAlert, Clock, Calendar, Share2, Check, Download } from 'lucide-react';
import { safeHtml } from '../lib/safeHtmlPublic';
import { getOptimizedImageUrl } from '../seo/utils';

interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
}

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

export default function NewsDetailPage() {
  const { news: mockNews = [], apps = [], settings: mockSettings, loading, newsSyncedWithServer, serverNewsFetched, refreshAll } = useData();
  const { slug } = useParams();
  const newsItem = mockNews.find(n => n.slug?.toLowerCase() === slug?.toLowerCase()) ||
                   staticMockNews.find(n => n.slug?.toLowerCase() === slug?.toLowerCase());
  const [commentText, setCommentText] = useState('');
  const [copied, setCopied] = useState(false);
  
  const [triedRefresh, setTriedRefresh] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const syncAttemptedRef = useRef<Record<string, boolean>>({});

  useEffect(() => {
    window.scrollTo(0, 0);
    setTriedRefresh(false);
    setIsRefreshing(false);
    setCopied(false);
  }, [slug]);

  // Automatically trigger a silent cloud sync if the requested item is not found in local cache
  useEffect(() => {
    const slugKey = slug?.toLowerCase() || '';
    if (!slugKey) return;

    const found = mockNews.some(n => n.slug?.toLowerCase() === slugKey);
    if (!found && !syncAttemptedRef.current[slugKey] && !triedRefresh && !isRefreshing) {
      syncAttemptedRef.current[slugKey] = true;
      setIsRefreshing(true);
      refreshAll?.(true)
        .catch((e: any) => {
          console.warn("Deep Link News Auto-Sync failed:", e.message || e);
        })
        .finally(() => {
          setTriedRefresh(true);
          setIsRefreshing(false);
        });
    }
  }, [slug, mockNews, triedRefresh, isRefreshing, refreshAll]);

  // Match corresponding app from catalog to enable seamless 1-click Download redirection
  const relatedApp = useMemo(() => {
    if (!newsItem) return null;
    // 1. Explicit related_app_id
    if (newsItem.related_app_id) {
      const found = apps.find(a => a.id === newsItem.related_app_id || a.slug === newsItem.related_app_id);
      if (found) return found;
    }
    // 2. Link containing app slug or id
    if (newsItem.link) {
      const cleanLink = newsItem.link.trim();
      const appSlugFromLink = cleanLink.replace(/^.*\/app\//, '').replace(/\/$/, '').split(/[?#]/)[0];
      if (appSlugFromLink) {
        const found = apps.find(a => a.slug?.toLowerCase() === appSlugFromLink.toLowerCase() || a.id === appSlugFromLink);
        if (found) return found;
      }
    }
    // 3. Match app by name keyword in news title or news slug
    const titleLower = (newsItem.title || '').toLowerCase();
    const slugLower = (newsItem.slug || '').toLowerCase();
    for (const app of apps) {
      if (app.name && app.name.trim().length >= 3) {
        const appNameLower = app.name.trim().toLowerCase();
        if (titleLower.includes(appNameLower) || slugLower.includes(app.slug?.toLowerCase() || '')) {
          return app;
        }
      }
    }
    return null;
  }, [newsItem, apps]);

  // Determine the primary Download target URL (Redirects to app detail page or direct link)
  const downloadTarget = useMemo(() => {
    if (relatedApp) {
      return {
        url: `/app/${relatedApp.slug || relatedApp.id}`,
        isInternal: true
      };
    }
    if (newsItem?.link) {
      const isInternal = newsItem.link.startsWith('/') || newsItem.link.includes('/app/');
      let cleanUrl = newsItem.link;
      if (isInternal && newsItem.link.includes('/app/')) {
        cleanUrl = '/app/' + newsItem.link.replace(/^.*\/app\//, '');
      }
      return {
        url: cleanUrl,
        isInternal: isInternal
      };
    }
    return null;
  }, [relatedApp, newsItem]);

  const handleShare = () => {
    const url = newsItem?.canonical_url || window.location.href;
    const shareTitle = newsItem?.seo_title || newsItem?.title || 'News Article';
    const shareText = newsItem?.seo_description || newsItem?.description || '';
    if (navigator.share) {
      navigator.share({
        title: shareTitle,
        text: shareText,
        url: url
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }).catch(() => {});
    }
  };

  const getInitialComments = (): Comment[] => {
    const saved = localStorage.getItem(`comments_${slug}`);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return [
      {
        id: '1',
        author: 'Community Member',
        content: 'Thanks for publishing this report. Very clear and informative!',
        date: new Date(Date.now() - 86400000).toLocaleDateString()
      }
    ];
  };

  const [comments, setComments] = useState<Comment[]>(getInitialComments);

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment: Comment = {
      id: Math.random().toString(36).substr(2, 9),
      author: 'Verified Reader',
      content: commentText.trim(),
      date: new Date().toLocaleDateString()
    };

    const newCommentsList = [newComment, ...comments];
    setComments(newCommentsList);
    localStorage.setItem(`comments_${slug}`, JSON.stringify(newCommentsList));
    setCommentText('');
  };

  if (loading && !newsItem) {
    return (
      <div className="flex flex-col items-center justify-center py-20 min-h-[40vh]">
        <div className="w-8 h-8 border-[3px] border-black/10 dark:border-white/10 border-t-blue-500 rounded-full animate-spin mb-4"></div>
        <p className="text-sm font-medium tracking-wide text-zinc-500 animate-pulse">Loading...</p>
      </div>
    );
  }

  // Graceful interstitial for slow database cold-starts or deep links on first visit
  if (!newsItem && (!serverNewsFetched || !newsSyncedWithServer || isRefreshing || !triedRefresh)) {
    return (
      <div className="flex flex-col items-center justify-center py-20 min-h-[40vh] text-center px-4 max-w-sm mx-auto">
        <div className="w-8 h-8 border-[3px] border-black/10 dark:border-white/10 border-t-blue-500 rounded-full animate-spin mb-4"></div>
        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mt-2">Syncing</h3>
        <p className="text-sm text-zinc-500 mt-2 leading-relaxed">
          Retrieving live updates from our network.
        </p>
      </div>
    );
  }

  if (!newsItem) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center px-4 max-w-md mx-auto">
        <Meta 
          title="404 - News Not Found | RummyDex" 
          description="The requested news article could not be located on RummyDex." 
          noindex={true} 
        />
        <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 rounded-2xl flex items-center justify-center mb-6">
          <ShieldAlert className="w-8 h-8" />
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">News Not Found</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-3 leading-relaxed mb-8">
          The requested article "<span className="font-mono font-medium text-zinc-800 dark:text-zinc-200">{slug}</span>" could not be located.
        </p>
        <Link 
          to="/news" 
          className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-[16px] font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md"
        >
          <ArrowLeft className="w-4 h-4" /> View other news
        </Link>
      </div>
    );
  }

  const readTime = newsItem.read_time || calculateReadingTime((newsItem.description || '') + ' ' + (newsItem.content || newsItem.description_html || ''));
  const formattedDate = formatNewsDate(newsItem.date, newsItem.published_at);
  const rawImage = newsItem.logo_url || newsItem.image_url || 'https://images.unsplash.com/photo-1542751371-adc38448a05e';
  const articleImage = getOptimizedImageUrl(rawImage, 1200);

  return (
    <div className="animate-fade-in max-w-4xl mx-auto px-4 sm:px-6 md:px-8 plain-content mb-16 pt-0.5 sm:pt-1">
      <Meta 
        title={newsItem.seo_title || `${newsItem.title} | ${mockSettings?.site_title || 'RummyDex'}`}
        description={newsItem.seo_description || newsItem.description}
        keywords={newsItem.seo_keywords}
        image={newsItem.og_image_url || newsItem.logo_url || newsItem.image_url}
        url={newsItem.canonical_url || window.location.origin + "/news/" + newsItem.slug}
        type="article"
        publishedTime={newsItem.published_at || newsItem.date}
        author={newsItem.author || mockSettings?.site_title || 'RummyDex'}
        canonical={newsItem.canonical_url || window.location.origin + "/news/" + newsItem.slug}
      />
      
      {/* 1. Tight Top Nav Bar (Breadcrumb + Share) with minimal upside spacing */}
      <div className="mb-2.5 pt-0 flex items-center justify-between">
        <Link 
          to="/news" 
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
        >
          <div className="p-1 rounded-full bg-blue-50 dark:bg-blue-950/50 group-hover:-translate-x-0.5 transition-transform">
            <ArrowLeft className="w-3.5 h-3.5" />
          </div>
          <span>All News &amp; Updates</span>
        </Link>

        <button
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-black/5 dark:border-white/10 bg-zinc-100 dark:bg-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
          aria-label="Share this article"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </>
          )}
        </button>
      </div>

      {newsItem.sync_to_public === false && (
        <div className="mb-4 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 font-medium">
            <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span>
            Draft Preview: Admin Only
          </div>
          <Link to="/admin?tab=news" className="font-bold underline hover:no-underline">
            Manage
          </Link>
        </div>
      )}

      <article className="animate-fade-in">
        <header className="mb-3">
          {/* Metadata Row: Category, Date, Read Time - Clean and compact */}
          <div className="flex flex-wrap items-center gap-2 mb-2 text-xs">
            <span className="bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider text-[11px]">
              {newsItem.category || 'Official Report'}
            </span>
            <span className="flex items-center gap-1 font-medium text-zinc-500 dark:text-zinc-400">
              <Calendar className="w-3 h-3" /> {formattedDate}
            </span>
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <span className="flex items-center gap-1 font-medium text-zinc-500 dark:text-zinc-400">
              <Clock className="w-3 h-3" /> {readTime}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-tight">
            {newsItem.title}
          </h1>
        </header>

        {/* 2. Full-Freedom Image (No side borders on mobile, zero top/bottom cutoffs, natural full height) */}
        {(newsItem.logo_url || newsItem.image_url) && (
          <div className="-mx-4 sm:mx-0 w-[calc(100%+2rem)] sm:w-full overflow-hidden mb-3.5 sm:rounded-2xl border-0 sm:border sm:border-black/5 dark:sm:border-white/10 bg-zinc-100 dark:bg-zinc-900/50 relative">
            <img 
              src={articleImage} 
              alt={newsItem.title} 
              loading="eager" 
              fetchPriority="high" 
              decoding="async" 
              className="w-full h-auto block" 
            />
          </div>
        )}

        {/* 3. ONLY The Download Button Directly Below Image - Simple, clean, ultra lightweight */}
        {downloadTarget && (
          <div className="mb-6 flex justify-start">
            {downloadTarget.isInternal ? (
              <Link
                to={downloadTarget.url}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm shadow-md shadow-blue-600/20 active:scale-[0.98] transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download &amp; Info</span>
              </Link>
            ) : (
              <a
                href={downloadTarget.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm shadow-md shadow-blue-600/20 active:scale-[0.98] transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download &amp; Info</span>
              </a>
            )}
          </div>
        )}
        
        {/* Article Body Content */}
        <div className="prose prose-zinc dark:prose-invert max-w-none mb-10">
          {newsItem.description && (
            <p className="text-base sm:text-lg font-medium mb-6 text-zinc-800 dark:text-zinc-200 leading-relaxed">
              {newsItem.description}
            </p>
          )}
          <div 
            className="font-normal text-base text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-none prose prose-zinc dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: safeHtml(newsItem.content || newsItem.description_html) }} 
          />
        </div>

        {/* Simple Download Button at the end of article */}
        {downloadTarget && (
          <div className="mb-12 flex justify-start">
            {downloadTarget.isInternal ? (
              <Link 
                to={downloadTarget.url} 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl active:scale-[0.98] shadow-md transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download &amp; Info</span>
              </Link>
            ) : (
              <a 
                href={downloadTarget.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl active:scale-[0.98] shadow-md transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download &amp; Info</span>
              </a>
            )}
          </div>
        )}

        {/* Discussion Section */}
        <footer className="border-t border-black/5 dark:border-white/5 pt-8">
          <div className="flex items-center gap-2.5 mb-5">
            <MessageSquare className="w-4 h-4 text-zinc-400" />
            <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">Discussion ({comments.length})</h2>
          </div>
          
          <form onSubmit={handleAddComment} className="mb-8">
            <div className="relative">
              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Share your perspective or ask a question..."
                className="w-full bg-zinc-50 dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-xl p-3.5 pr-14 transition-all min-h-[90px] resize-y focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/30 font-normal text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 text-sm"
              />
              <button
                type="submit"
                disabled={!commentText.trim()}
                className="absolute bottom-3.5 right-3.5 w-9 h-9 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-all disabled:opacity-50 active:scale-[0.95] cursor-pointer"
                aria-label="Post comment"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>

          <div className="space-y-3">
            {comments.map((comment) => (
              <div key={comment.id} className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-black/5 dark:border-white/5">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-xs text-zinc-900 dark:text-zinc-100">{comment.author}</span>
                  <span className="text-[11px] text-zinc-400">{comment.date}</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">{comment.content}</p>
              </div>
            ))}
          </div>
        </footer>
      </article>
    </div>
  );
}
