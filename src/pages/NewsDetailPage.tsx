import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Meta from '../components/Meta';
import { useData } from '../contexts/DataContextPublic';
import { mockNews as staticMockNews } from '../lib/lightFallback';
import { ArrowLeft, ShieldAlert } from 'lucide-react';
import { safeHtml } from '../lib/safeHtmlPublic';
import { NewsArticleHeader } from '../components/public/newsDetails/NewsArticleHeader';
import { NewsRelatedAppBox } from '../components/public/newsDetails/NewsRelatedAppBox';
import { AppSimilarCarousel } from '../components/public/appDetails/AppSimilarCarousel';
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

  const [fetchedNewsItem, setFetchedNewsItem] = useState<any | null>(null);

  const contextNewsItem = useMemo(() => {
    if (!cleanSlug) return null;
    let fromInit = null;
    if (typeof window !== 'undefined' && (window as any).__INITIAL_DATA__?.news) {
      fromInit = (window as any).__INITIAL_DATA__.news.find((n: any) => 
        (n.slug || '').toLowerCase().trim() === cleanSlug || (n.id || '').toLowerCase().trim() === cleanSlug
      );
    }

    const fromMock = mockNews.find(n => (n.slug || '').toLowerCase().trim() === cleanSlug || (n.id || '').toLowerCase().trim() === cleanSlug);
    const fromStatic = staticMockNews.find(n => (n.slug || '').toLowerCase().trim() === cleanSlug || (n.id || '').toLowerCase().trim() === cleanSlug);

    const candidates = [fromInit, fromMock, fromStatic].filter(Boolean);
    if (candidates.length === 0) return null;

    // Pick candidate with richest content
    candidates.sort((a, b) => {
      const aLen = Math.max((a.content || '').length, (a.description_html || '').length);
      const bLen = Math.max((b.content || '').length, (b.description_html || '').length);
      return bLen - aLen;
    });

    const best = candidates[0];
    return {
      ...best,
      content: best.content || best.description_html || best.description || '',
      description_html: best.description_html || best.content || best.description || ''
    };
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
    const c = (newsItem.content || '').trim();
    const d = (newsItem.description_html || '').trim();
    const desc = (newsItem.description || '').trim();

    const isChetFull = c.length > 250 && c !== desc;
    const isDetFull = d.length > 250 && d !== desc;
    return isChetFull || isDetFull;
  }, [newsItem]);

  useEffect(() => {
    const slugKey = cleanSlug || '';
    if (!slugKey) return;

    // 1. Never trigger background network XHR calls during crawler passes (Googlebot, Bingbot, Lighthouse)
    const isCrawler = typeof navigator !== 'undefined' && /googlebot|google-inspectiontool|bingbot|slurp|duckduckbot|baiduspider|yandexbot|crawler|spider|lighthouse|chrome-lighthouse|headless/i.test(navigator.userAgent || '');
    if (isCrawler) return;

    // 2. If news item already has complete rich content from SSR / initialData, bypass client fetch completely
    if (hasFullBody) return;

    // 3. Check if fetchedNewsItem is already loaded for this slug
    const fetchedSlug = fetchedNewsItem ? String(fetchedNewsItem.slug || fetchedNewsItem.id || '').toLowerCase() : '';
    if (fetchedNewsItem && (fetchedSlug === slugKey || fetchedSlug === cleanSlug)) {
      return;
    }

    if (!syncAttemptedRef.current[slugKey]) {
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
          console.warn("News body fetch fallback notice:", err);
          if (!newsItem && refreshAll) refreshAll(true);
        })
        .finally(() => {
          if (isMounted) setIsRefreshing(false);
        });

      return () => { isMounted = false; };
    }
  }, [cleanSlug, hasFullBody, fetchedNewsItem, newsItem, updateNewsDetail, refreshAll]);

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

  // 16 Category Similar Apps (single-pass, zero garbage allocations)
  const similarCategoryApps = useMemo(() => {
    if (!apps || apps.length === 0) return { list: [], category: '', totalCount: 0 };

    const targetCategory = (relatedApp?.category || newsItem?.category || 'Yono Apps').trim();
    const cleanTargetCat = targetCategory.toLowerCase();
    const isAll = cleanTargetCat === 'all' || cleanTargetCat === 'all apps';
    const relAppId = relatedApp ? String(relatedApp.id || '') : '';
    const relAppSlug = relatedApp ? String(relatedApp.slug || '').toLowerCase() : '';

    const newApps: any[] = [];
    const regularApps: any[] = [];
    let totalCatCount = 0;

    for (let i = 0; i < apps.length; i++) {
      const a = apps[i];
      if (!a) continue;

      const aId = String(a.id || '');
      const aSlug = String(a.slug || '').toLowerCase();
      const isBaseApp = Boolean(relatedApp && (aId === relAppId || aSlug === relAppSlug));

      const aCat = (a.category || '').toLowerCase();
      const matches = isAll || aCat.includes(cleanTargetCat) || cleanTargetCat.includes(aCat);

      if (matches) {
        totalCatCount++;
        if (!isBaseApp) {
          const rawItem = a as any;
          const isHot = Boolean(
            rawItem.is_hot === true || rawItem.is_hot === 'true' || rawItem.is_hot === 1 ||
            rawItem.isHot === true || rawItem.isHot === 'true' || rawItem.isHot === 1 ||
            (typeof rawItem.badge === 'string' && rawItem.badge.trim().toLowerCase() === 'hot')
          );
          const isNew = Boolean(
            rawItem.is_new === true || rawItem.is_new === 'true' || rawItem.is_new === 1 ||
            rawItem.isNew === true || rawItem.isNew === 'true' || rawItem.isNew === 1 ||
            (typeof rawItem.badge === 'string' && rawItem.badge.trim().toLowerCase() === 'new')
          );
          if (isHot || isNew) {
            newApps.push(a);
          } else {
            regularApps.push(a);
          }
        }
      }
    }

    // 1. Sort new apps strictly by serial_number ascending
    newApps.sort((a, b) => (Number(a.serial_number) || 999999) - (Number(b.serial_number) || 999999));

    // 2. Sort regular apps strictly by serial_number ascending
    regularApps.sort((a, b) => (Number(a.serial_number) || 999999) - (Number(b.serial_number) || 999999));

    const maxCount = 16;
    const pinnedNew = newApps.slice(0, Math.min(newApps.length, maxCount));
    const remainingSlots = maxCount - pinnedNew.length;

    // Balanced Circular Internal Linking:
    // Stagger regular apps circularly starting right after the base app's serial number
    const pickedRegular: any[] = [];
    if (remainingSlots > 0 && regularApps.length > 0) {
      let startIndex = 0;
      const baseSerial = Number(relatedApp?.serial_number);
      if (!isNaN(baseSerial) && baseSerial > 0) {
        const nextIdx = regularApps.findIndex(a => (Number(a.serial_number) || 0) > baseSerial);
        startIndex = nextIdx !== -1 ? nextIdx : 0;
      } else {
        const str = String(cleanSlug || newsItem?.slug || newsItem?.id || '');
        let hash = 0;
        for (let i = 0; i < str.length; i++) hash = ((hash << 5) - hash) + str.charCodeAt(i);
        startIndex = Math.abs(hash) % regularApps.length;
      }

      const countToPick = Math.min(remainingSlots, regularApps.length);
      for (let step = 0; step < countToPick; step++) {
        pickedRegular.push(regularApps[(startIndex + step) % regularApps.length]);
      }
    }

    const finalList = [...pinnedNew, ...pickedRegular].map((a: any) => ({
      id: a.id,
      name: a.name,
      slug: a.slug,
      icon_url: a.icon_url || a.logo_url,
      is_new: Boolean(a.is_new === true || a.is_new === 'true' || a.isNew || a.badge?.toLowerCase() === 'new'),
      is_hot: Boolean(a.is_hot === true || a.is_hot === 'true' || a.isHot || a.badge?.toLowerCase() === 'hot'),
      serial_number: a.serial_number
    }));

    return {
      list: finalList,
      category: targetCategory,
      totalCount: totalCatCount
    };
  }, [apps, relatedApp, newsItem, cleanSlug]);

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
          title="404 - News Not Found" 
          description="The requested news article could not be located." 
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
  const bodyContent = newsItem.content || newsItem.description_html || newsItem.description || '';
  const plainBody = bodyContent.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim();
  const articleDesc = newsItem.seo_description || newsItem.description || plainBody.substring(0, 160);
  const rawArticleImage = newsItem.og_image_url || newsItem.image_url || newsItem.logo_url || newsItem.image || '';
  const canonicalUrl = newsItem.canonical_url || `https://www.rummydex.com/news/${newsItem.slug || newsItem.id}`;
  const datePublished = newsItem.published_at || newsItem.created_at || newsItem.date || '';
  const dateModified = newsItem.updated_at || datePublished;
  const authorName = newsItem.ceo_name || newsItem.author || 'RummyDex Editorial Team';
  const articleCategory = newsItem.category || 'General';

  const newsArticleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "headline": newsItem.title,
    "description": articleDesc,
    "articleBody": plainBody || articleDesc,
    "image": rawArticleImage ? [rawArticleImage] : [],
    "datePublished": datePublished,
    "dateModified": dateModified,
    "articleSection": articleCategory,
    "inLanguage": "en",
    "isAccessibleForFree": true,
    "author": {
      "@type": "Person",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": mockSettings?.site_title || "RummyDex",
      "url": "https://www.rummydex.com",
      "logo": {
        "@type": "ImageObject",
        "url": mockSettings?.logo_url || "https://www.rummydex.com/logo.png"
      }
    }
  };

  const newsBreadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.rummydex.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "News",
        "item": "https://www.rummydex.com/news"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": newsItem.title,
        "item": canonicalUrl
      }
    ]
  };

  return (
    <article className="max-w-3xl mx-auto px-3 sm:px-0 pb-20 text-left">
      <Meta 
        title={articleTitle}
        description={articleDesc}
        keywords={newsItem.seo_keywords}
        image={rawArticleImage}
        type="article"
        publishedTime={datePublished}
        modifiedTime={dateModified}
        author={authorName}
        section={articleCategory}
        tags={Array.isArray(newsItem.tags) ? newsItem.tags : undefined}
        canonical={canonicalUrl}
        schema={newsArticleSchema}
        breadcrumbSchema={newsBreadcrumbSchema}
      />

      <NewsArticleHeader 
        title={newsItem.title || 'News Article'}
        category={articleCategory}
        formattedDate={formatNewsDate(newsItem.date, newsItem.published_at, newsItem.created_at)}
        author={authorName}
        readingTime={calculateReadingTime(bodyContent)}
        logoUrl={rawArticleImage}
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

      {/* Similar Applications in the same category (16 apps, 2 rows, smooth touch carousel) */}
      {similarCategoryApps.list.length > 0 && (
        <AppSimilarCarousel 
          relatedApps={similarCategoryApps.list}
          specificCategory={similarCategoryApps.category}
          totalCategoryCount={similarCategoryApps.totalCount}
        />
      )}

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
