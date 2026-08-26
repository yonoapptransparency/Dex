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

  return (
    <section aria-labelledby="faq-heading" className="mb-20 px-1 sm:px-4 md:px-6">
      <div className="py-8 border-t border-black/5 dark:border-white/5">
        <h2 id="faq-heading" className="text-xl sm:text-2xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, idx) => (
            <article key={`faq-app-${idx}`} className="bg-slate-50/90 dark:bg-zinc-900/80 p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-black/5 dark:border-white/5 shadow-xs">
              <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-3 flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 shrink-0 select-none">Q.</span>
                <span>{faq.question}</span>
              </h3>
              <div className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed pl-7 sm:pl-8">
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
