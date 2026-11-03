
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FileText 
} from 'lucide-react';
import { safeHtml } from '../../lib/safeHtmlPublic';
import { AppConfig } from '../../types';

interface AppAboutSectionProps {
  app: AppConfig;
  isFetching?: boolean;
}

export default function AppAboutSection({ app, isFetching }: AppAboutSectionProps) {
  const navigate = useNavigate();

  const handleHtmlClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = (e.target as HTMLElement).closest('a');
    if (!target) return;

    const href = target.getAttribute('href');
    if (!href) return;

    // Check if link is internal
    if (href.startsWith('/') && !href.startsWith('//')) {
      e.preventDefault();
      navigate(href);
    } else if (href.startsWith('https://www.rummydex.com') || href.startsWith('http://www.rummydex.com')) {
      try {
        const url = new URL(href);
        e.preventDefault();
        navigate(url.pathname + url.search + url.hash);
      } catch (err) {
        // Fallback to normal navigation
      }
    }
  };

  // Shared rich HTML typography class string for clean, professional rendering with bold blue highlights
  const richHtmlContentStyle = `
    rich-html-content w-full max-w-full overflow-x-hidden break-words text-xs xs:text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed
    [&_strong]:text-blue-600 dark:[&_strong]:text-blue-400 [&_strong]:font-semibold
    [&_b]:text-blue-600 dark:[&_b]:text-blue-400 [&_b]:font-semibold
    [&_p]:mb-3 [&_p]:leading-relaxed [&_p]:text-zinc-700 dark:[&_p]:text-zinc-300
    [&_a]:text-blue-600 dark:[&_a]:text-blue-400 [&_a]:font-semibold [&_a]:underline [&_a]:underline-offset-2 [&_a]:hover:text-blue-700 dark:[&_a]:hover:text-blue-300
    [&_h1]:text-base sm:[&_h1]:text-2xl [&_h1]:font-black [&_h1]:tracking-tight [&_h1]:text-zinc-900 dark:[&_h1]:text-zinc-100 [&_h1]:mt-4 [&_h1]:mb-2
    [&_h2]:text-sm sm:[&_h2]:text-xl [&_h2]:font-extrabold [&_h2]:tracking-tight [&_h2]:text-zinc-900 dark:[&_h2]:text-zinc-100 [&_h2]:mt-5 [&_h2]:mb-2.5 [&_h2]:pt-3 [&_h2]:border-t [&_h2]:border-zinc-200/80 dark:[&_h2]:border-zinc-800/80 [&_h2:first-child]:border-t-0 [&_h2:first-child]:pt-0 [&_h2:first-child]:mt-0
    [&_h3]:text-xs sm:[&_h3]:text-lg [&_h3]:font-bold [&_h3]:tracking-tight [&_h3]:text-zinc-900 dark:[&_h3]:text-zinc-100 [&_h3]:mt-3.5 [&_h3]:mb-1.5
    [&_h4]:text-[11px] sm:[&_h4]:text-base [&_h4]:font-semibold [&_h4]:tracking-tight [&_h4]:text-zinc-900 dark:[&_h4]:text-zinc-100 [&_h4]:mt-3 [&_h4]:mb-1
    [&_ul]:my-2.5 [&_ul]:space-y-1.5 [&_ul]:list-disc [&_ul]:pl-4 xs:[&_ul]:pl-5
    [&_ol]:my-2.5 [&_ol]:space-y-1.5 [&_ol]:list-decimal [&_ol]:pl-4 xs:[&_ol]:pl-5
    [&_li]:leading-relaxed [&_li]:pl-1 [&_li::marker]:text-blue-600 dark:[&_li::marker]:text-blue-400 [&_li::marker]:font-bold
    [&_blockquote]:border-l-4 [&_blockquote]:border-blue-500 [&_blockquote]:pl-3.5 [&_blockquote]:py-2 [&_blockquote]:my-3.5 [&_blockquote]:bg-blue-50/50 dark:[&_blockquote]:bg-blue-950/20 [&_blockquote]:rounded-r-xl [&_blockquote]:italic
    [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-xl [&_img]:my-3
    [&_svg]:max-w-full [&_svg]:h-auto
  `.trim().replace(/\s+/g, ' ');

  const defaultDescription = `<p>Comprehensive application profile and details for <strong>${app.name}</strong>.</p>`;

  return (
    <section aria-labelledby="app-overview-heading" className="w-full my-4 px-1 xs:px-2 sm:px-4 md:px-6 text-left">
      {/* Header Bar */}
      <div className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 mb-3 sm:mb-4 select-none">
        <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
          <FileText className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
        </div>
        <div>
          <h2 id="app-overview-heading" className="text-sm xs:text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
            About this app
          </h2>
          <p className="text-[10px] xs:text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400">
            Overview &amp; features
          </p>
        </div>
      </div>

      {/* Content Body - Clean, direct on page background, zero card box constraints */}
      <div onClick={handleHtmlClick} className="space-y-4 xs:space-y-5 sm:space-y-6">
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
        {isFetching && !app.description_html ? (
          <div className="space-y-3 py-2 animate-pulse" aria-busy="true">
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-5/6"></div>
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-full"></div>
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-4/6"></div>
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-3/4"></div>
          </div>
        ) : (
          <div>
            <div 
              className={richHtmlContentStyle}
              dangerouslySetInnerHTML={{ __html: safeHtml(app.description_html, defaultDescription) }}
            />
          </div>
        )}

        {/* Key Features */}
        {app.features_html &&
          app.features_html.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim().toLowerCase() !==
          (app.description_html || '').replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim().toLowerCase() && (
          <div className="pt-4 sm:pt-5 border-t border-zinc-200/80 dark:border-zinc-800/80">
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
          <div className="pt-4 sm:pt-5 border-t border-zinc-200/80 dark:border-zinc-800/80">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 sm:mb-3">
              What's New in Version {app.version || 'Latest'}
            </h3>
            <div className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-wrap">
              {app.release_notes}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

