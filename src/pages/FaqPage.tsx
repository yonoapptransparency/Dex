import React, { useMemo, useState } from 'react';
import { useData } from '../contexts/DataContextPublic';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, Search, X } from 'lucide-react';
import Meta from '../components/Meta';
import { safeHtml } from '../lib/safeHtmlPublic';
import { buildStaticWebPageSchemas } from '../lib/seoUtils';

export const DEFAULT_WEBSITE_FAQS = [
  {
    question: "What is RummyDex, and how does it help me find the best apps?",
    answer: "RummyDex is an all-in-one digital discovery portal and review directory. We provide curated listings, hands-on performance evaluations, APK verification, and community feedback so you can discover safe, verified mobile apps."
  },
  {
    question: "How does RummyDex ensure listed applications perform well on my device?",
    answer: "Every application featured on our platform undergoes evaluation for frame rate stability, thermal efficiency, battery consumption, and interface responsiveness."
  },
  {
    question: "Is downloading apps from RummyDex secure?",
    answer: "Yes. All download references link directly to verified original developer APK packages with multi-point hash checks to prevent modified or compromised builds."
  },
  {
    question: "How can I submit my own review or report a problem?",
    answer: "You can submit community reviews directly on any app details page or flag any concern through the report modal for prompt moderator inspection."
  }
];

export default function FaqPage() {
  const { settings, fetchSettings } = useData();
  const siteTitle = settings?.site_title || 'RummyDex';
  const [searchQuery, setSearchQuery] = useState('');

  React.useEffect(() => {
    if ((!settings?.website_faqs || settings.website_faqs.length === 0) && fetchSettings) {
      fetchSettings();
    }
  }, [settings?.website_faqs, fetchSettings]);

  const faqs = useMemo(() => {
    if (settings?.website_faqs && Array.isArray(settings.website_faqs) && settings.website_faqs.length > 0) {
      const valid = settings.website_faqs.filter((f: any) => f && f.question && f.answer);
      if (valid.length > 0) return valid;
    }
    return DEFAULT_WEBSITE_FAQS;
  }, [settings?.website_faqs]);

  const filteredFaqs = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return faqs;
    return faqs.filter(
      (f: any) =>
        String(f.question || '').toLowerCase().includes(q) ||
        String(f.answer || '').toLowerCase().includes(q)
    );
  }, [faqs, searchQuery]);

  const pageTitle = settings?.faq_meta_title || "Frequently Asked Questions";
  const pageDesc = settings?.faq_meta_description || `Everything you need to know about ${siteTitle}, app verification, and downloads.`;
  const { webPageSchema, breadcrumbSchema } = useMemo(
    () => buildStaticWebPageSchemas('/faq', pageTitle, pageDesc, 'FAQ'),
    [pageTitle, pageDesc]
  );

  return (
    <div className="max-w-[1000px] mx-auto px-3.5 sm:px-6 py-3 sm:py-6 animate-fade-in pb-14 min-h-[70vh] text-left">
      <Meta 
        title={pageTitle}
        description={pageDesc}
        canonical="https://www.rummydex.com/faq"
        schema={webPageSchema}
        breadcrumbSchema={breadcrumbSchema}
      />
      
      <div className="mb-3 sm:mb-4">
        <Link 
          to="/" 
          className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Home
        </Link>
      </div>

      <div className="animate-fade-in">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-4 pb-3 border-b border-zinc-200/80 dark:border-zinc-800/80">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 mb-1.5">
              Frequently Asked Questions
            </h1>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
              Everything you need to know about {siteTitle}, app downloads, verification, and safety.
            </p>
          </div>

          <div className="relative w-full sm:w-64 shrink-0">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter questions..."
              aria-label="Filter questions"
              className="w-full py-2 pl-9 pr-8 text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all"
            />
            <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 cursor-pointer"
                aria-label="Clear filter"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {filteredFaqs.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 mb-3">
              No questions matched "{searchQuery}".
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Show All Questions
            </button>
          </div>
        ) : (
          <div className="divide-y divide-zinc-200/80 dark:divide-zinc-800/80">
            {filteredFaqs.map((faq: any, idx: number) => (
              <details
                key={`faq-page-${idx}`}
                className="group py-3.5"
                open
              >
                <summary className="list-none [&::-webkit-details-marker]:hidden w-full text-left flex items-center justify-between gap-3 cursor-pointer focus:outline-hidden select-none">
                  <h2 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100 flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 font-extrabold shrink-0 select-none">Q.</span>
                    <span className="leading-snug">{faq.question}</span>
                  </h2>
                  <div className="p-1 rounded-lg transition-transform duration-200 shrink-0 text-zinc-400 dark:text-zinc-500 group-open:rotate-180 group-open:text-blue-600 group-open:dark:text-blue-400">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </summary>

                <div className="mt-2 pt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed pl-5 rich-html-content">
                  <div
                    className="prose prose-zinc dark:prose-invert prose-sm max-w-none w-full break-words whitespace-normal"
                    dangerouslySetInnerHTML={{ __html: safeHtml(faq.answer) }}
                  />
                </div>
              </details>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
