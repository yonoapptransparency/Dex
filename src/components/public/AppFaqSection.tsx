import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { safeHtml } from '../../lib/safeHtmlPublic';

interface Faq {
  question: string;
  answer: any;
}

interface AppFaqSectionProps {
  faqs?: Faq[];
}

export default function AppFaqSection({ faqs }: AppFaqSectionProps) {
  if (!faqs || faqs.length === 0) return null;

  const INITIAL_VISIBLE_COUNT = 3;
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  // Default: first FAQ is open, all others collapsed so user can trigger them
  const [openIndices, setOpenIndices] = useState<Set<number>>(() => new Set([0]));

  const toggleFaq = (idx: number) => {
    setOpenIndices(prev => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };

  const visibleFaqs = faqs.slice(0, visibleCount);
  const hasMoreFaqs = visibleCount < faqs.length;
  const canShowLess = visibleCount > INITIAL_VISIBLE_COUNT && visibleCount >= faqs.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, faqs.length));
  };

  const handleShowLess = () => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  };

  return (
    <section aria-labelledby="faq-heading" className="mb-20 px-1 sm:px-4 md:px-6">
      <div className="py-8 border-t border-black/5 dark:border-white/5">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h2 id="faq-heading" className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 bg-black/5 dark:bg-white/5 px-2.5 py-1 rounded-full">
            {faqs.length} FAQs
          </span>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {visibleFaqs.map((faq, idx) => {
            const isOpen = openIndices.has(idx);
            return (
              <article
                key={`faq-app-${idx}`}
                className={`rounded-xl sm:rounded-2xl border transition-colors duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-50 dark:bg-zinc-900/90 border-blue-200 dark:border-blue-900/40 shadow-xs'
                    : 'bg-slate-50/70 dark:bg-zinc-900/60 border-black/5 dark:border-white/5 hover:bg-slate-100/80 dark:hover:bg-zinc-900/80'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-question-${idx}`}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-start gap-3">
                    <span className="text-blue-600 dark:text-blue-400 font-extrabold shrink-0 select-none">Q.</span>
                    <span className="leading-snug">{faq.question}</span>
                  </h3>
                  <div className={`p-1 rounded-lg transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' : 'text-zinc-400 dark:text-zinc-500'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-question-${idx}`}
                    className="px-4 sm:px-5 pb-5 pt-1 border-t border-black/5 dark:border-white/5 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed"
                  >
                    <div className="pl-6 sm:pl-7 pt-2">
                      <div
                        className="prose prose-zinc dark:prose-invert prose-sm sm:prose-base max-w-none w-full break-words overflow-wrap-anywhere whitespace-normal"
                        dangerouslySetInnerHTML={{ __html: safeHtml(faq.answer) }}
                      />
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Load More FAQs trigger button */}
        {hasMoreFaqs && (
          <div className="pt-6 flex justify-center">
            <button
              type="button"
              onClick={handleLoadMore}
              className="px-6 py-2.5 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-[0.98]"
            >
              <span>Load More FAQs ({faqs.length - visibleCount} more)</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Show Less FAQs button when all are expanded */}
        {canShowLess && (
          <div className="pt-6 flex justify-center">
            <button
              type="button"
              onClick={handleShowLess}
              className="px-5 py-2 text-xs font-semibold text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Show Less FAQs</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
