import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import AccordionItem from '../AccordionItem';

interface WebsiteFaq {
  question: string;
  answer: any;
}

interface HomeFaqSectionProps {
  faqs?: WebsiteFaq[];
  searchTerm: string;
}

export default function HomeFaqSection({ faqs, searchTerm }: HomeFaqSectionProps) {
  const [showAll, setShowAll] = useState(false);

  if (searchTerm || !faqs || faqs.length === 0) return null;

  // Show only 1 FAQ initially to eliminate unwanted vertical space; expand for all
  const INITIAL_VISIBLE_COUNT = 1;
  const visibleFaqs = showAll ? faqs : faqs.slice(0, INITIAL_VISIBLE_COUNT);
  const hasMore = faqs.length > INITIAL_VISIBLE_COUNT;

  return (
    <section aria-labelledby="faq-heading" className="mt-4 mb-2 px-1 max-w-4xl mx-auto w-full">
      <div className="bg-slate-50/80 dark:bg-zinc-900/60 border border-black/5 dark:border-white/5 rounded-2xl p-3.5 sm:p-4">
        <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-black/5 dark:border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <HelpCircle className="w-3 h-3" />
            </div>
            <h2 id="faq-heading" className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <span className="text-[11px] font-semibold text-slate-400 dark:text-zinc-500">
            {faqs.length} FAQs
          </span>
        </div>
        
        {/* Compact Stack - Only 1 item visible by default */}
        <div className="space-y-1.5">
          {visibleFaqs.map((faq, index) => (
            <AccordionItem 
              key={`faq-home-${index}`} 
              question={faq.question} 
              answer={faq.answer} 
              isWebsiteFaq={true} 
            />
          ))}
        </div>

        {/* View More / Less compact trigger */}
        {hasMore && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full mt-2 py-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center justify-center gap-1 transition-colors cursor-pointer rounded-lg hover:bg-blue-50/50 dark:hover:bg-blue-900/20"
          >
            <span>{showAll ? 'Show less' : `View ${faqs.length - INITIAL_VISIBLE_COUNT} more FAQs`}</span>
            {showAll ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        )}
      </div>
    </section>
  );
}

