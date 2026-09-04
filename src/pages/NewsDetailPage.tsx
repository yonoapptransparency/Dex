/**
 * NewsDetailPage overview view
 * Shows layout announcements, system patches logs, and live interactive user commentaries.
 * Enhanced with optimized image loading, reading time, share tools, and related news.
 */

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import Meta from '../components/Meta';
import { useData } from '../contexts/DataContextPublic';
import { mockNews as staticMockNews } from '../lib/staticData';
import { ArrowLeft, ArrowRight, MessageSquare, Send, ShieldAlert, Clock, Calendar, Share2, Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
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
  const { news: mockNews = [], settings: mockSettings, loading, newsSyncedWithServer, serverNewsFetched, refreshAll } = useData();
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

  // Related / Latest other news stories
  const relatedNews = useMemo(() => {
    if (!newsItem) return [];
    return mockNews
      .filter(n => n.slug?.toLowerCase() !== newsItem.slug?.toLowerCase())
      .slice(0, 3);
  }, [mockNews, newsItem]);

  // Automatically trigger a silent cloud sync if the requested item is not found in local cache
  useEffect(() => {
    const slugKey = slug?.toLowerCase() || '';
    if (!slugKey) return;

    const found = mockNews.some(n => n.slug?.toLowerCase() === slugKey);
    if (!found && !syncAttemptedRef.current[slugKey] && !triedRefresh && !isRefreshing) {
      syncAttemptedRef.current[slugKey] = true;
      setIsRefreshing(true);
      refreshAll(true)
        .catch((e: any) => {
          console.warn("Deep Link News Auto-Sync failed:", e.message || e);
        })
        .finally(() => {
          setTriedRefresh(true);
          setIsRefreshing(false);
        });
    }
  }, [slug, mockNews, triedRefresh, isRefreshing, refreshAll]);

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

  const getInitialComments = () => {
    const saved = localStorage.getItem(`comments_${slug}`);
    if (saved) {
      return JSON.parse(saved);
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

  const readTime = calculateReadingTime((newsItem.description || '') + ' ' + (newsItem.content || ''));
  const formattedDate = formatNewsDate(newsItem.date, newsItem.published_at);
  const articleImage = getOptimizedImageUrl(newsItem.logo_url || 'https://images.unsplash.com/photo-1542751371-adc38448a05e', 1000);

  return (
    <div className="animate-fade-in max-w-[1550px] mx-auto px-3 sm:px-6 md:px-10 plain-content mb-20">
      <Meta 
        title={newsItem.seo_title || `${newsItem.title} | ${mockSettings?.site_title || 'RummyDex'}`}
        description={newsItem.seo_description || newsItem.description}
        keywords={newsItem.seo_keywords}
        image={newsItem.og_image_url || newsItem.logo_url}
        url={newsItem.canonical_url || window.location.origin + "/news/" + newsItem.slug}
        type="article"
        canonical={newsItem.canonical_url || window.location.origin + "/news/" + newsItem.slug}
      />
      
      {/* Top Nav Breadcrumbs & Share */}
      <div className="mb-10 pt-4 flex items-center justify-between">
        <Link 
          to="/news" 
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline transition-colors group"
        >
          <div className="p-1.5 rounded-full bg-blue-50 dark:bg-blue-950/50 group-hover:-translate-x-1 transition-transform">
            <ArrowLeft className="w-4 h-4" />
          </div>
          All News & Updates
        </Link>

        <button
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-black/5 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
          aria-label="Share this article"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-emerald-600 dark:text-emerald-400">Link Copied!</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </>
          )}
        </button>
      </div>

      <motion.article 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {newsItem.category || 'Official Report'}
            </span>
            <span className="flex items-center gap-1 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
              <Calendar className="w-3.5 h-3.5" /> {formattedDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
              <Clock className="w-3.5 h-3.5" /> {readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold mb-8 text-zinc-900 dark:text-white tracking-tight leading-[1.15]">
            {newsItem.title}
          </h1>
          
          <div className="flex items-center gap-4 pb-8 border-b border-black/5 dark:border-white/5">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 flex items-center justify-center font-bold text-xl m-0 shrink-0">
              {newsItem.ceo_name ? newsItem.ceo_name.charAt(0) : 'A'}
            </div>
            <div>
              <p className="font-bold text-base sm:text-lg text-zinc-900 dark:text-zinc-100 leading-tight">{newsItem.ceo_name || 'Admin Team'}</p>
              <p className="text-xs sm:text-sm font-medium text-zinc-500 mt-0.5">{newsItem.ceo_description || 'Transparency & Security Analyst'}</p>
            </div>
          </div>
        </header>

        {newsItem.logo_url && (
          <div className="w-full rounded-3xl overflow-hidden mb-12 shadow-sm border border-black/5 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900/50 aspect-[16/9] max-h-[550px] relative">
            <img 
              src={articleImage} 
              alt={newsItem.title} 
              loading="eager" 
              fetchPriority="high" 
              decoding="async" 
              className="w-full h-full object-cover" 
            />
          </div>
        )}
        
        <div className="prose prose-zinc dark:prose-invert max-w-none mb-16">
          {newsItem.description && (
            <p className="text-lg sm:text-2xl font-medium mb-10 text-zinc-800 dark:text-zinc-200 leading-relaxed">
              {newsItem.description}
            </p>
          )}
          <div 
            className="font-normal text-base sm:text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-none prose prose-zinc dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: safeHtml(newsItem.content || newsItem.description_html) }} 
          />
        </div>

        {(newsItem as any).link && (
          <div className="mb-16">
            <a 
              href={newsItem.link} 
              target="_blank" 
              rel="noopener noreferrer dofollow" 
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all active:scale-[0.98] shadow-md text-sm sm:text-base"
            >
              Get App Details & Downloads
            </a>
          </div>
        )}

        {/* Related Recent News Section */}
        {relatedNews.length > 0 && (
          <section className="border-t border-black/5 dark:border-white/5 pt-12 mb-16">
            <div className="flex items-center gap-2 mb-8">
              <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                More Intelligence & Updates
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedNews.map((item) => (
                <Link
                  key={item.id || item.slug}
                  to={`/news/${item.slug}`}
                  className="group flex flex-col p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-black/5 dark:border-white/10 hover:border-blue-500/30 transition-all shadow-sm"
                >
                  <div className="aspect-[16/9] rounded-xl overflow-hidden mb-4 bg-zinc-200 dark:bg-zinc-800 relative">
                    <img
                      src={getOptimizedImageUrl(item.logo_url || 'https://images.unsplash.com/photo-1542751371-adc38448a05e', 400)}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                    {item.category || 'Update'}
                  </span>
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 mb-3">
                    {item.title}
                  </h3>
                  <div className="mt-auto flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400">
                    <span>Read update</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Discussion Section */}
        <footer className="border-t border-black/5 dark:border-white/5 pt-12">
          <div className="flex items-center gap-3 mb-8">
            <MessageSquare className="w-5 h-5 text-zinc-400" />
            <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Discussion ({comments.length})</h2>
          </div>
          
          <form onSubmit={handleAddComment} className="mb-12">
            <div className="relative">
              <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Share your perspective or ask a question..."
                className="w-full bg-zinc-50 dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-2xl p-4 pr-16 transition-all min-h-[100px] resize-y focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/30 font-normal text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 text-sm"
              />
              <button
                type="submit"
                disabled={!commentText.trim()}
                className="absolute bottom-4 right-4 w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 transition-all disabled:opacity-50 active:scale-[0.95]"
                aria-label="Post comment"
              >
                <Send className="w-4 h-4 mr-0.5" />
              </button>
            </div>
          </form>

          <div className="space-y-4">
            {comments.map((comment) => (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={comment.id} 
                className="p-6 border border-black/5 dark:border-white/10 rounded-2xl bg-white dark:bg-zinc-900"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center font-bold text-sm text-zinc-600 dark:text-zinc-400 shrink-0">
                    {comment.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 leading-none mb-1">{comment.author}</p>
                    <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">{comment.date}</p>
                  </div>
                </div>
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-sm">{comment.content}</p>
              </motion.div>
            ))}
          </div>
        </footer>
      </motion.article>
    </div>
  );
}
