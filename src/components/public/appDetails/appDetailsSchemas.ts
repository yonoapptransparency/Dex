import { cleanFaqQuestion } from '../../../lib/seoUtils';
import { normalizeSchemaCategory, getOptimizedImageUrl } from '../../../seo/utils';

export function buildFaqSchema(app: any) {
  if (!app.faqs || !Array.isArray(app.faqs) || app.faqs.length === 0) return null;
  const seen = new Set<string>();
  const validFaqs = app.faqs
    .filter(faq => {
      const q = cleanFaqQuestion(String(faq.question || '').replace(/<[^>]*>?/gm, ' ').trim());
      const a = String(faq.answer || '').replace(/<[^>]*>?/gm, ' ').trim();
      if (!q || !a || q.length < 5 || seen.has(q.toLowerCase())) return false;
      seen.add(q.toLowerCase());
      return true;
    })
    .map(faq => ({
      "@type": "Question",
      "name": cleanFaqQuestion(String(faq.question || '').replace(/<[^>]*>?/gm, ' ').trim()),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": String(faq.answer || '').replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim()
      }
    }));

  if (validFaqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `https://www.rummydex.com/app/${app.slug}#faq`,
    "url": `https://www.rummydex.com/app/${app.slug}`,
    "mainEntity": validFaqs
  };
}

export function buildProductSchema(app: any, desc: string, hasLiveReviews: boolean, realRatingVal: number, realReviewCount: number) {
  const appUrl = `https://www.rummydex.com/app/${app.slug}`;
  const devName = app.developer || app.name || 'Verified Developer';
  const configuredCount = parseInt(String(app.review_count || app.reviews || '').replace(/[^0-9]/g, ''), 10) || 0;
  const validCount = Math.round(hasLiveReviews && realReviewCount > 0 ? realReviewCount : (realReviewCount > 0 ? realReviewCount : configuredCount));
  const ratingValue = parseFloat(realRatingVal.toFixed(1));
  const rawImg = app.icon_url || app.og_image_url || '';
  const optimizedImg = getOptimizedImageUrl(rawImg, 512) || rawImg;

  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${appUrl}#product`,
    "name": app.name,
    "url": appUrl,
    "image": [optimizedImg],
    "description": desc,
    "category": normalizeSchemaCategory(app.category),
    "sku": String(app.slug || app.id),
    "brand": {
      "@type": "Brand",
      "name": devName
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "priceValidUntil": "2030-12-31",
      "availability": "https://schema.org/InStock",
      "url": appUrl
    }
  };

  if (validCount > 0) {
    schema["aggregateRating"] = {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "ratingCount": validCount,
      "reviewCount": validCount,
      "bestRating": 5,
      "worstRating": 1
    };
  }

  return schema;
}

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
    "softwareVersion": app.version || '1.0.0',
    "fileSize": app.file_size || '45 MB',
    "image": optimizedImg,
    "author": {
      "@type": "Organization",
      "name": app.developer || app.name || 'Verified Developer'
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "priceValidUntil": "2030-12-31",
      "availability": "https://schema.org/InStock",
      "url": appUrl
    },
    "isVariantOf": {
      "@id": `${appUrl}#product`
    }
  };

  if (validCount > 0) {
    schema["aggregateRating"] = {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "ratingCount": validCount,
      "reviewCount": validCount,
      "bestRating": 5,
      "worstRating": 1
    };
  }

  return schema;
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
