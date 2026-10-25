import { normalizeSchemaCategory, getOptimizedImageUrl } from '../../../seo/utils';

export function buildSoftwareSchema(app: any, desc: string, hasLiveReviews: boolean, realRatingVal: number, realReviewCount: number) {
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
    "fileSize": app.file_size || '45 MB',
    "image": optimizedImg,
    "author": {
      "@type": "Organization",
      "name": app.developer || app.name || 'Official'
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    }
  };

  if (validCount > 0) {
    schema["aggregateRating"] = {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "ratingCount": validCount,
      "bestRating": 5,
      "worstRating": 1
    };
  }

  if (Array.isArray(app.screenshots) && app.screenshots.length > 0) {
    schema["screenshot"] = app.screenshots.map((s: string) => getOptimizedImageUrl(s, 1024) || s);
  }

  return schema;
}

export function buildWebPageSchema(app: any, title: string, desc: string) {
  const appUrl = `https://www.rummydex.com/app/${app.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${appUrl}#webpage`,
    "url": appUrl,
    "name": title,
    "headline": title,
    "description": desc,
    "inLanguage": "en",
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

