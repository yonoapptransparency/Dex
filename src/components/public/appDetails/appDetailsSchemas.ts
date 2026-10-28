import { normalizeSchemaCategory, getOptimizedImageUrl, stripHtml, cleanFaqQuestion, normalizeFileSize } from '../../../seo/utils';

export function buildSoftwareSchema(app: any, desc: string, hasLiveReviews: boolean, realRatingVal: number, realReviewCount: number, initialReviews: any[] = []) {
  const appUrl = `https://www.rummydex.com/app/${app.slug}`;
  const configuredCount = parseInt(String(app.review_count || app.reviews || '').replace(/[^0-9]/g, ''), 10) || 0;
  const validCount = Math.round(hasLiveReviews && realReviewCount > 0 ? realReviewCount : (realReviewCount > 0 ? realReviewCount : configuredCount));
  const ratingValue = parseFloat(realRatingVal.toFixed(1));
  const rawImg = app.icon_url || app.og_image_url || '';
  const optimizedImg = getOptimizedImageUrl(rawImg, 512) || rawImg;

  const schema: any = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${appUrl}#software`,
    "name": app.name,
    "url": appUrl,
    "description": desc,
    "applicationCategory": normalizeSchemaCategory(app.category),
    "operatingSystem": "Android",
    "softwareVersion": app.version || '1.0',
    "fileSize": normalizeFileSize(app.file_size, '45 MB'),
    "image": optimizedImg,
    "author": {
      "@type": "Organization",
      "name": app.developer || app.name || 'Official'
    },
    "publisher": {
      "@type": "Organization",
      "name": app.developer || app.name || 'Official'
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    }
  };

  const validAppKeys = new Set<string>(
    [String(app.id || "").toLowerCase().trim(), String(app.slug || "").toLowerCase().trim()].filter(Boolean)
  );
  const validReviews = Array.isArray(initialReviews)
    ? initialReviews
        .filter((rev: any) => {
          if (!rev || stripHtml(rev.reviewText || rev.comment || "").trim().length < 3) return false;
          const rId = String(rev.appId || rev.app_id || "").toLowerCase().trim();
          const rSlug = String(rev.appSlug || "").toLowerCase().trim();
          if (validAppKeys.size > 0 && (rId || rSlug)) {
            if (rId && !validAppKeys.has(rId)) return false;
            if (rSlug && !validAppKeys.has(rSlug)) return false;
          }
          return true;
        })
        .slice(0, 10)
        .map((rev: any) => ({
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": (rev.userName || rev.username) ? String(rev.userName || rev.username).trim() : "Verified Player"
          },
          "datePublished": ((rev.timestamp || rev.created_at) ? new Date(rev.timestamp || rev.created_at).toISOString().split("T")[0] : new Date().toISOString().split("T")[0]),
          "reviewBody": stripHtml(rev.reviewText || rev.comment || "").trim(),
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": Math.max(1, Math.min(5, Number(rev.rating) || 5)),
            "bestRating": 5,
            "worstRating": 1
          }
        }))
    : [];

  const finalValidCount = Math.round(Math.max(validCount, validReviews.length));
  if (finalValidCount > 0) {
    schema["aggregateRating"] = {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "ratingCount": finalValidCount,
      "bestRating": 5,
      "worstRating": 1
    };
  }

  if (validReviews.length > 0) {
    schema["review"] = validReviews;
  }

  if (Array.isArray(app.screenshots) && app.screenshots.length > 0) {
    schema["screenshot"] = app.screenshots.map((s: string) => getOptimizedImageUrl(s, 1024) || s);
  }

  return schema;
}

export function buildWebPageSchema(app: any, title: string, desc: string) {
  const appUrl = `https://www.rummydex.com/app/${app.slug}`;
  const rawImg = app.icon_url || app.og_image_url || "";
  const optimizedImg = getOptimizedImageUrl(rawImg, 512) || rawImg;
  const developer = app.developer || app.name || 'Official';
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${appUrl}#webpage`,
    "url": appUrl,
    "name": title,
    "headline": title,
    "description": desc,
    "inLanguage": "en",
    "author": {
      "@type": "Organization",
      "name": developer
    },
    "publisher": {
      "@type": "Organization",
      "name": developer
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "@id": `${appUrl}#primaryimage`,
      "url": optimizedImg,
      "contentUrl": optimizedImg,
      "width": 512,
      "height": 512,
      "caption": `${app.name} app icon`
    },
    "image": {
      "@id": `${appUrl}#primaryimage`
    },
    "thumbnailUrl": optimizedImg,
    "about": {
      "@id": `${appUrl}#software`
    },
    "mainEntity": {
      "@id": `${appUrl}#software`
    }
  };
}

export function buildBreadcrumbSchema(app: any, specificCategory: string) {
  const breadcrumbElements: any[] = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.rummydex.com"
    }
  ];

  if (specificCategory && specificCategory.toLowerCase() !== 'all apps' && specificCategory.toLowerCase() !== 'all') {
    breadcrumbElements.push({
      "@type": "ListItem",
      "position": 2,
      "name": specificCategory,
      "item": `https://www.rummydex.com/category/${encodeURIComponent(specificCategory.toLowerCase().replace(/\s+/g, '-'))}`
    });
    breadcrumbElements.push({
      "@type": "ListItem",
      "position": 3,
      "name": app.name,
      "item": `https://www.rummydex.com/app/${app.slug}`
    });
  } else {
    breadcrumbElements.push({
      "@type": "ListItem",
      "position": 2,
      "name": app.name,
      "item": `https://www.rummydex.com/app/${app.slug}`
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbElements
  };
}

export function buildFaqSchema(app: any) {
  const rawFaqs = Array.isArray(app?.faqs) ? app.faqs : [];
  const validFaqs = rawFaqs.filter((f: any) => f && f.question && f.answer && stripHtml(f.question).length > 0 && stripHtml(f.answer).length > 0);
  if (validFaqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": validFaqs.map((faq: any) => ({
      "@type": "Question",
      "name": cleanFaqQuestion(stripHtml(faq.question)) || stripHtml(faq.question),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": stripHtml(faq.answer)
      }
    }))
  };
}

