import { HelpCircle } from 'lucide-react';
import { safeHtml } from '../../lib/safeHtmlPublic';

interface WebsiteFaq {
  question: string;
  answer: any;
}

interface HomeFaqSectionProps {
  faqs?: WebsiteFaq[];
  searchTerm: string;
}

export default function HomeFaqSection({ faqs, searchTerm }: HomeFaqSectionProps) {
  if (searchTerm || !faqs || faqs.length === 0) return null;

  // Generate Google FAQPage structured data (JSON-LD) for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.replace(/<[^>]+>/g, '') // strip HTML for safe schema text
      }
    }))
  };

  return (
    <section aria-labelledby="home-faq-heading" className="mt-8 mb-6 px-2 max-w-5xl mx-auto w-full">
      {/* Inject JSON-LD Schema directly into the DOM */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="bg-slate-50/80 dark:bg-zinc-900/60 border border-black/5 dark:border-white/5 rounded-2xl p-5 sm:p-8 shadow-xs">
        <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 border-b border-black/5 dark:border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h2 id="home-faq-heading" className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <span className="hidden sm:inline-flex text-xs font-semibold text-slate-500 dark:text-zinc-400 bg-black/5 dark:bg-white/5 px-3 py-1 rounded-full">
            {faqs.length} Questions
          </span>
        </div>
        
        {/* Full Open List for Maximum SEO & Web Crawler Visibility */}
        <div className="space-y-6 sm:space-y-8">
          {faqs.map((faq, index) => (
            <article key={`faq-home-${index}`} className="flex flex-col items-start">
              <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2 flex items-start gap-2.5">
                <span className="text-blue-600 dark:text-blue-400 shrink-0 select-none">Q.</span>
                <span>{faq.question}</span>
              </h3>
              <div className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed pl-6 sm:pl-7 w-full">
                <div 
                  className="prose prose-zinc dark:prose-invert prose-sm sm:prose-base max-w-none w-full break-words overflow-wrap-anywhere whitespace-normal"
                  dangerouslySetInnerHTML={{ __html: safeHtml(faq.answer) }}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

