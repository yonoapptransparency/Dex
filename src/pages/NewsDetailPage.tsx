import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Meta from '../components/Meta';
import { useData } from '../contexts/DataContextPublic';
import { mockNews as staticMockNews } from '../lib/staticData';
import { ArrowLeft, ShieldAlert } from 'lucide-react';
import { safeHtml } from '../lib/safeHtmlPublic';
import { NewsArticleHeader } from '../components/public/newsDetails/NewsArticleHeader';
import { NewsRelatedAppBox } from '../components/public/newsDetails/NewsRelatedAppBox';
import { formatNewsDate, calculateReadingTime } from '../components/public/news/newsUtils';

export default function NewsDetailPage() {
  const { news: mockNews = [], apps = [], settings: mockSettings, loading, refreshAll, updateNewsDetail } = useData();
  const { slug } = useParams();
  
  const cleanSlug = useMemo(() => {
    if (!slug) return '';
    try {
      return decodeURIComponent(slug).toLowerCase().trim().replace(/\/+$/, '');
    } catch (_) {
      return slug.toLowerCase().trim().replace(/\/+$/, '');
    }
  }, [slug]);

  const matchedApp = useMemo(() => {
    if (!cleanSlug) return null;
    return apps.find(a => (a.slug || '').toLowerCase().trim() === cleanSlug || (a.id || '').toLowerCase().trim() === cleanSlug);
  }, [cleanSlug, apps]);

  const [fetchedNewsItem, setFetchedNewsItem] = useState<any | null>(null);

  const contextNewsItem = useMemo(() => {
    if (!cleanSlug) return null;
    return mockNews.find(n => (n.slug || '').toLowerCase().trim() === cleanSlug || (n.id || '').toLowerCase().trim() === cleanSlug) ||
           staticMockNews.find(n => (n.slug || '').toLowerCase().trim() === cleanSlug || (n.id || '').toLowerCase().trim() === cleanSlug);
  }, [cleanSlug, mockNews]);

  const newsItem = fetchedNewsItem || contextNewsItem;

  const [copied, setCopied] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const syncAttemptedRef = useRef<Record<string, boolean>>({});

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsRefreshing(false);
    setCopied(false);
    setFetchedNewsItem(null);
  }, [slug]);

  const hasFullBody = useMemo(() => {
    if (!newsItem) return false;
    const c = newsItem.content?.trim() || '';
    const d = newsItem.description_html?.trim() || '';
    return c.length >= 20 || d.length >= 20;
  }, [newsItem]);

  useEffect(() => {
    const slugKey = cleanSlug || '';
    if (!slugKey || matchedApp || hasFullBody) return;

    if (!syncAttemptedRef.current[slugKey] && !isRefreshing) {
      syncAttemptedRef.current[slugKey] = true;
      setIsRefreshing(true);

      let isMounted = true;
      fetch(`/api/v1/public/news/${encodeURIComponent(slugKey)}`, {
        headers: { 'Accept': 'application/json' }
      })
        .then(res => res.json())
        .then(data => {
          if (!isMounted) return;
          if (data.status === 'OK' && data.news) {
            setFetchedNewsItem(data.news);
            updateNewsDetail?.(data.news);
          } else if (!newsItem && refreshAll) {
            refreshAll(true);
          }
        })
        .catch(err => {
          console.warn("Fast news body fetch warning:", err);
          if (!newsItem && refreshAll) refreshAll(true);
        })
        .finally(() => {
          if (isMounted) setIsRefreshing(false);
        });

      return () => { isMounted = false; };
    }
  }, [cleanSlug, matchedApp, hasFullBody, newsItem, isRefreshing, updateNewsDetail, refreshAll]);

  if (matchedApp && !newsItem) {
    return <Navigate to={`/app/${matchedApp.slug || matchedApp.id}`} replace />;
  }

  const relatedApp = useMemo(() => {
    if (!newsItem) return null;
    if (newsItem.related_app_id) {
      const found = apps.find(a => a.id === newsItem.related_app_id || a.slug === newsItem.related_app_id);
      if (found) return found;
    }
    if (newsItem.link) {
      const cleanLink = newsItem.link.trim();
      const appSlugFromLink = cleanLink.replace(/^.*\/app\//, '').replace(/\/$/, '').split(/[?#]/)[0];
      if (appSlugFromLink) {
        const found = apps.find(a => a.slug?.toLowerCase() === appSlugFromLink.toLowerCase() || a.id === appSlugFromLink);
        if (found) return found;
      }
    }
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

  const downloadTarget = useMemo(() => {
    if (relatedApp) {
      return { url: `/app/${relatedApp.slug || relatedApp.id}`, isInternal: true };
    }
    if (newsItem?.link) {
      const isInternal = newsItem.link.startsWith('/') || newsItem.link.includes('/app/');
      let cleanUrl = newsItem.link;
      if (isInternal && newsItem.link.includes('/app/')) {
        cleanUrl = '/app/' + newsItem.link.replace(/^.*\/app\//, '');
      }
      return { url: cleanUrl, isInternal };
    }
    return null;
  }, [relatedApp, newsItem]);

  const handleShare = () => {
    const url = newsItem?.canonical_url || window.location.href;
    const shareTitle = newsItem?.seo_title || newsItem?.title || 'News Article';
    const shareText = newsItem?.seo_description || newsItem?.description || '';
    if (navigator.share) {
      navigator.share({ title: shareTitle, text: shareText, url }).catch(() => {});
    } else {
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }).catch(() => {});
    }
  };

  if (loading && !newsItem && mockNews.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 min-h-[40vh]">
        <div className="w-8 h-8 border-[3px] border-black/10 dark:border-white/10 border-t-blue-500 rounded-full animate-spin mb-4"></div>
        <p className="text-sm font-medium tracking-wide text-zinc-500 animate-pulse">Loading...</p>
      </div>
    );
  }

  if (!newsItem && isRefreshing) {
    return (
      <div className="flex flex-col items-center justify-center py-20 min-h-[40vh] text-center px-4 max-w-sm mx-auto">
        <div className="w-8 h-8 border-[3px] border-black/10 dark:border-white/10 border-t-blue-500 rounded-full animate-spin mb-4"></div>
        <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mt-2">Checking Updates</h3>
        <p className="text-sm text-zinc-500 mt-2 leading-relaxed">
          Verifying article status from the network...
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
          <ArrowLeft className="w-4 h-4" /> Return to News Hub
        </Link>
      </div>
    );
  }

  const articleTitle = newsItem.seo_title || newsItem.title || 'News Article';
  const articleDesc = newsItem.seo_description || newsItem.description || '';
  const articleImage = newsItem.og_image_url || newsItem.image_url || newsItem.logo_url || newsItem.image || '';
  const canonicalUrl = newsItem.canonical_url || `https://www.rummydex.com/news/${newsItem.slug || newsItem.id}`;

  const newsArticleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": newsItem.title,
    "description": articleDesc,
    "image": articleImage ? [articleImage] : [],
    "datePublished": newsItem.date || newsItem.published_at || newsItem.created_at,
    "dateModified": newsItem.updated_at || newsItem.date || newsItem.published_at,
    "author": {
      "@type": "Person",
      "name": newsItem.ceo_name || "RummyDex Editorial Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "RummyDex",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.rummydex.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    }
  };

  const bodyContent = newsItem.content || newsItem.description_html || newsItem.description || '';

  return (
    <article className="max-w-3xl mx-auto px-3 sm:px-0 pb-20">
      <Meta 
        title={articleTitle}
        description={articleDesc}
        image={articleImage}
        canonical={canonicalUrl}
        schema={newsArticleSchema}
      />

      <NewsArticleHeader 
        title={newsItem.title || 'News Article'}
        category={newsItem.category || 'General'}
        formattedDate={formatNewsDate(newsItem.date, newsItem.published_at)}
        author={newsItem.ceo_name || 'RummyDex Editorial Team'}
        readingTime={calculateReadingTime(newsItem.content || newsItem.description)}
        logoUrl={articleImage}
        copied={copied}
        onShare={handleShare}
      />

      {/* 1. App View/Download Action Box (Directly below banner image) */}
      <NewsRelatedAppBox 
        downloadTarget={downloadTarget}
        relatedApp={relatedApp}
        newsItem={newsItem}
        className="my-5 sm:my-6"
      />

      <div 
        className="prose dark:prose-invert max-w-none text-zinc-800 dark:text-zinc-200 leading-relaxed text-sm sm:text-base space-y-4 font-normal mt-6"
        dangerouslySetInnerHTML={{ __html: safeHtml(bodyContent) }}
      />

      {/* 2. App View/Download Action Box (Directly after the full HTML body) */}
      <NewsRelatedAppBox 
        downloadTarget={downloadTarget}
        relatedApp={relatedApp}
        newsItem={newsItem}
        className="my-8"
      />
    </article>
  );
}
