import { cleanFaqQuestion } from '../../../lib/seoUtils';
import { normalizeSchemaCategory } from '../../../seo/utils';

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

export function buildSoftwareSchema(app: any, desc: string, hasLiveReviews: boolean, realRatingVal: number, realReviewCount: number) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": app.name,
    "url": `https://www.rummydex.com/app/${app.slug}`,
    "description": desc,
    "applicationCategory": normalizeSchemaCategory(app.category),
    "operatingSystem": "Android",
    "softwareVersion": app.version || '1.0.0',
    "fileSize": app.file_size || '45 MB',
    "image": app.icon_url || app.og_image_url,
    "author": {
      "@type": "Organization",
      "name": app.developer || 'RummyDex'
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    ...(hasLiveReviews && realReviewCount > 0 ? {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": parseFloat(realRatingVal.toFixed(1)),
        "ratingCount": Math.round(realReviewCount),
        "reviewCount": Math.round(realReviewCount),
        "bestRating": 5,
        "worstRating": 1
      }
    } : (app.rating && Number(app.rating) > 0 ? {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": parseFloat(Number(app.rating).toFixed(1)),
        "ratingCount": Math.max(1, Number(app.review_count || app.reviews) || 1),
        "reviewCount": Math.max(1, Number(app.review_count || app.reviews) || 1),
        "bestRating": 5,
        "worstRating": 1
      }
    } : {}))
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
