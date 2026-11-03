import React, { useMemo } from 'react';
import { useData } from '../contexts/DataContextPublic';
import { Link } from 'react-router-dom';
import { ArrowLeft, HelpCircle, ChevronDown } from 'lucide-react';
import Meta from '../components/Meta';
import { safeHtml } from '../lib/safeHtmlPublic';

export default function FaqPage() {
  const { settings, fetchSettings } = useData();
  const siteTitle = settings?.site_title || 'RummyDex';

  React.useEffect(() => {
    if ((!settings?.website_faqs || settings.website_faqs.length === 0) && fetchSettings) {
      fetchSettings();
    }
  }, [settings?.website_faqs, fetchSettings]);

  const faqs = useMemo(() => {
    if (settings?.website_faqs && Array.isArray(settings.website_faqs) && settings.website_faqs.length > 0) {
      return settings.website_faqs.filter((f: any) => f && f.question && f.answer);
    }
    return [
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
  }, [settings?.website_faqs]);

  const pageTitle = settings?.faq_meta_title || "Frequently Asked Questions";
  const pageDesc = settings?.faq_meta_description || `Everything you need to know about ${siteTitle}, app verification, and downloads.`;
  const webPageSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.rummydex.com/faq#webpage",
    "url": "https://www.rummydex.com/faq",
    "name": pageTitle,
    "headline": pageTitle,
    "description": pageDesc,
    "inLanguage": "en"
  }), [pageTitle, pageDesc]);

  return (
    <div className="max-w-[1000px] mx-auto px-3.5 sm:px-6 py-3 sm:py-6 animate-fade-in pb-14 min-h-[70vh] text-left">
      <Meta 
        title={pageTitle}
        description={pageDesc}
        canonical="https://www.rummydex.com/faq"
        schema={webPageSchema}
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
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 mb-1.5">
          Frequently Asked Questions
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mb-4 pb-3 border-b border-zinc-200/80 dark:border-zinc-800/80">
          Everything you need to know about {siteTitle}, app downloads, verification, and safety.
        </p>

        <div className="divide-y divide-zinc-200/80 dark:divide-zinc-800/80">
          {faqs.map((faq: any, idx: number) => (
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
      </div>
    </div>
  );
}
