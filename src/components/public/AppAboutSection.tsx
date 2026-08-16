import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, FileText, Sparkles } from 'lucide-react';
import { safeHtml } from '../../lib/safeHtmlPublic';
import { AppConfig, BlogPost } from '../../types';

interface AppAboutSectionProps {
  app: AppConfig;
  relatedUpdates: BlogPost[];
}

export default function AppAboutSection({ app, relatedUpdates }: AppAboutSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Shared rich HTML typography class string for clean, professional rendering with bold blue highlights
  const richHtmlContentStyle = `
    w-full text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed
    [&_strong]:text-blue-600 dark:[&_strong]:text-blue-400 [&_strong]:font-semibold
    [&_b]:text-blue-600 dark:[&_b]:text-blue-400 [&_b]:font-semibold
    [&_p]:mb-3.5 [&_p]:leading-relaxed [&_p]:text-zinc-700 dark:[&_p]:text-zinc-300
    [&_a]:text-blue-600 dark:[&_a]:text-blue-400 [&_a]:font-semibold [&_a]:underline [&_a]:hover:text-blue-700
    [&_h1]:text-lg sm:[&_h1]:text-2xl [&_h1]:font-black [&_h1]:tracking-tight [&_h1]:text-zinc-900 dark:[&_h1]:text-zinc-100 [&_h1]:mt-5 [&_h1]:mb-2.5
    [&_h2]:text-base sm:[&_h2]:text-xl [&_h2]:font-extrabold [&_h2]:tracking-tight [&_h2]:text-zinc-900 dark:[&_h2]:text-zinc-100 [&_h2]:mt-5 [&_h2]:mb-2.5 [&_h2]:pt-3 [&_h2]:border-t [&_h2]:border-zinc-200/80 dark:[&_h2]:border-zinc-800/80 [&_h2:first-child]:border-t-0 [&_h2:first-child]:pt-0 [&_h2:first-child]:mt-0
    [&_h3]:text-sm sm:[&_h3]:text-lg [&_h3]:font-bold [&_h3]:tracking-tight [&_h3]:text-zinc-900 dark:[&_h3]:text-zinc-100 [&_h3]:mt-4 [&_h3]:mb-2
    [&_h4]:text-xs sm:[&_h4]:text-base [&_h4]:font-semibold [&_h4]:tracking-tight [&_h4]:text-zinc-900 dark:[&_h4]:text-zinc-100 [&_h4]:mt-3.5 [&_h4]:mb-1.5
    [&_ul]:my-3 [&_ul]:space-y-1.5 [&_ul]:list-disc [&_ul]:pl-5
    [&_ol]:my-3 [&_ol]:space-y-1.5 [&_ol]:list-decimal [&_ol]:pl-5
    [&_li]:leading-relaxed [&_li]:pl-1 [&_li::marker]:text-blue-600 dark:[&_li::marker]:text-blue-400 [&_li::marker]:font-bold
    [&_blockquote]:border-l-4 [&_blockquote]:border-blue-500 [&_blockquote]:pl-4 [&_blockquote]:py-2 [&_blockquote]:my-3.5 [&_blockquote]:bg-blue-50/50 dark:[&_blockquote]:bg-blue-950/20 [&_blockquote]:rounded-r-xl [&_blockquote]:italic
    [&_.art]:hidden [&_svg.art]:hidden
  `.trim().replace(/\s+/g, ' ');

  return (
    <section aria-labelledby="app-overview-heading" className="w-full my-3 px-0 sm:px-2">
      <div className="bg-slate-50/90 dark:bg-zinc-900/80 border border-black/5 dark:border-white/5 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 shadow-xs">
        
        {/* Industrial Header & Trigger Bar */}
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-3.5 sm:p-5 flex items-center justify-between text-left hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors cursor-pointer select-none group"
          aria-expanded={isExpanded}
        >
          <div className="flex items-center gap-2.5 sm:gap-3 flex-1 pr-2 sm:pr-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <h2 id="app-overview-heading" className="text-xs sm:text-base font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                  Application Overview & Technical Specifications
                </h2>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/30">
                  <Sparkles className="w-2.5 h-2.5" /> Verified
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                {isExpanded ? 'Full architecture, features & security benchmarks' : 'Tap to expand full architecture, features & rules'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 hidden xs:inline">
              {isExpanded ? 'Collapse' : 'View Details'}
            </span>
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-zinc-200/60 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-300 group-hover:bg-blue-500 group-hover:text-white transition-colors">
              {isExpanded ? <ChevronUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            </div>
          </div>
        </button>

        {/* Expandable Content Body - Always in DOM for SEO, hidden via CSS */}
        <div className={`p-3.5 sm:p-6 border-t border-black/5 dark:border-white/5 space-y-6 sm:space-y-8 bg-white/50 dark:bg-zinc-950/40 transition-all duration-300 ${isExpanded ? 'block animate-in fade-in slide-in-from-top-2' : 'hidden'}`}>
            
            {app.custom_admin_box_html && (
              <div className="bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-800/40 rounded-xl p-3.5 sm:p-5 shadow-xs">
                {app.custom_admin_box_heading && (
                  <h3 className="text-sm sm:text-base font-bold mb-2 text-amber-900 dark:text-amber-200">
                    {app.custom_admin_box_heading}
                  </h3>
                )}
                <div 
                  className={richHtmlContentStyle}
                  dangerouslySetInnerHTML={{ __html: safeHtml(app.custom_admin_box_html) }}
                />
              </div>
            )}

            {/* Main Description */}
            <div>
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 sm:mb-3">
                About this Application
              </h3>
              <div 
                className={richHtmlContentStyle}
                dangerouslySetInnerHTML={{ __html: safeHtml(app.description_html, '<p>No details available.</p>') }}
              />
            </div>

            {/* Key Features */}
            {app.features_html && (
              <div className="pt-5 sm:pt-6 border-t border-black/5 dark:border-white/5">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 sm:mb-3">
                  Key App Features
                </h3>
                <div 
                  className={richHtmlContentStyle}
                  dangerouslySetInnerHTML={{ __html: safeHtml(app.features_html) }}
                />
              </div>
            )}
            
            {/* Release Notes */}
            {app.release_notes && (
              <div className="pt-5 sm:pt-6 border-t border-black/5 dark:border-white/5">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 sm:mb-3">
                  What's New in Version {app.version || 'Latest'}
                </h3>
                <div className="bg-slate-50 dark:bg-zinc-900 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-wrap border border-black/5 dark:border-white/5">
                  {app.release_notes}
                </div>
              </div>
            )}
            
            {/* Related Updates */}
            {relatedUpdates && relatedUpdates.length > 0 && (
              <div className="pt-5 sm:pt-6 border-t border-black/5 dark:border-white/5">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3 sm:mb-4">
                  Official Game News & Updates
                </h3>
                <div className="space-y-2.5 sm:space-y-3">
                  {relatedUpdates.map((update, idx) => (
                    <Link key={`update-${update.id || idx}`} to={`/blog/${update.slug || update.id}`} className="block p-3 sm:p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-xl border border-blue-100/80 dark:border-blue-500/10 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all group">
                      <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-blue-600 mb-1">
                        <span>Update</span>
                        <span className="text-zinc-300">•</span>
                        <span className="text-zinc-500 dark:text-zinc-400">{new Date(update.published_at!).toLocaleDateString()}</span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 transition-colors">
                        {update.title}
                      </h4>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 mt-1">
                        {update.content.replace(/<[^>]+>/g, '').substring(0, 140)}...
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>
      </div>
    </section>
  );
}

