import { Link } from 'react-router-dom';
import { safeHtml } from '../../lib/safeHtml';
import { AppConfig, BlogPost } from '../../types';

interface AppAboutSectionProps {
  app: AppConfig;
  relatedUpdates: BlogPost[];
}

export default function AppAboutSection({ app, relatedUpdates }: AppAboutSectionProps) {
  // Shared rich HTML typography class string for clean, professional rendering with bold blue highlights
  const richHtmlContentStyle = `
    w-full text-base text-zinc-700 dark:text-zinc-300 leading-relaxed
    [&_strong]:text-blue-600 dark:[&_strong]:text-blue-400 [&_strong]:font-semibold
    [&_b]:text-blue-600 dark:[&_b]:text-blue-400 [&_b]:font-semibold
    [&_p]:mb-5 [&_p]:leading-relaxed [&_p]:text-zinc-700 dark:[&_p]:text-zinc-300
    [&_a]:text-blue-600 dark:[&_a]:text-blue-400 [&_a]:font-semibold [&_a]:underline [&_a]:hover:text-blue-700
    [&_h1]:text-2xl sm:[&_h1]:text-3xl [&_h1]:font-black [&_h1]:tracking-tight [&_h1]:text-zinc-900 dark:[&_h1]:text-zinc-100 [&_h1]:mt-8 [&_h1]:mb-4
    [&_h2]:text-xl sm:[&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:tracking-tight [&_h2]:text-zinc-900 dark:[&_h2]:text-zinc-100 [&_h2]:mt-9 [&_h2]:mb-4 [&_h2]:pt-4 [&_h2]:border-t [&_h2]:border-zinc-200/80 dark:[&_h2]:border-zinc-800/80 [&_h2:first-child]:border-t-0 [&_h2:first-child]:pt-0 [&_h2:first-child]:mt-0
    [&_h3]:text-lg sm:[&_h3]:text-xl [&_h3]:font-bold [&_h3]:tracking-tight [&_h3]:text-zinc-900 dark:[&_h3]:text-zinc-100 [&_h3]:mt-6 [&_h3]:mb-3
    [&_h4]:text-base sm:[&_h4]:text-lg [&_h4]:font-semibold [&_h4]:tracking-tight [&_h4]:text-zinc-900 dark:[&_h4]:text-zinc-100 [&_h4]:mt-5 [&_h4]:mb-2
    [&_ul]:my-5 [&_ul]:space-y-3 [&_ul]:list-disc [&_ul]:pl-6
    [&_ol]:my-5 [&_ol]:space-y-3 [&_ol]:list-decimal [&_ol]:pl-6
    [&_li]:leading-relaxed [&_li]:pl-1 [&_li::marker]:text-blue-600 dark:[&_li::marker]:text-blue-400 [&_li::marker]:font-bold
    [&_blockquote]:border-l-4 [&_blockquote]:border-blue-500 [&_blockquote]:pl-4 [&_blockquote]:py-2 [&_blockquote]:my-5 [&_blockquote]:bg-blue-50/50 dark:[&_blockquote]:bg-blue-950/20 [&_blockquote]:rounded-r-xl [&_blockquote]:italic
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className="w-full mb-8 space-y-10">
      {app.custom_admin_box_html && (
        <div className="bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-800/40 rounded-2xl p-5 sm:p-6 shadow-xs relative overflow-hidden w-full transition-all duration-300">
          {app.custom_admin_box_heading && (
            <h2 className="text-lg sm:text-xl font-bold mb-3 text-amber-900 dark:text-amber-200 flex items-center gap-2">
              <span>{app.custom_admin_box_heading}</span>
            </h2>
          )}
          <div 
            className={richHtmlContentStyle}
            dangerouslySetInnerHTML={{ __html: safeHtml(app.custom_admin_box_html) }}
          />
        </div>
      )}

      <div className="py-4 w-full px-2 sm:px-4">
        <h2 className="text-2xl font-black tracking-tight mb-6 text-zinc-900 dark:text-zinc-100 border-b border-zinc-200/80 dark:border-zinc-800 pb-3">
          About this app
        </h2>
        <div 
          className={richHtmlContentStyle}
          dangerouslySetInnerHTML={{ __html: safeHtml(app.description_html, '<p>No details available.</p>') }}
        />

        {app.features_html && (
          <div className="mt-10 pt-8 border-t border-zinc-200/80 dark:border-zinc-800">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
              Key App Features
            </h2>
            <div 
              className={richHtmlContentStyle}
              dangerouslySetInnerHTML={{ __html: safeHtml(app.features_html) }}
            />
          </div>
        )}
        
        {app.release_notes && (
          <div className="mt-10 pt-8 border-t border-zinc-200/80 dark:border-zinc-800">
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-3">What's New</h3>
            <div className="bg-zinc-50 dark:bg-zinc-900/80 rounded-2xl p-5 sm:p-6 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-wrap border border-zinc-200/80 dark:border-zinc-800 line-clamp-6 hover:line-clamp-none transition-all shadow-xs">
              {app.release_notes}
            </div>
          </div>
        )}
        
        {relatedUpdates && relatedUpdates.length > 0 && (
          <div className="mt-10 pt-8 border-t border-zinc-200/80 dark:border-zinc-800">
            <h2 className="text-xl sm:text-2xl font-bold mb-5 text-zinc-900 dark:text-zinc-100">
              Latest App Updates
            </h2>
            <div className="space-y-4">
              {relatedUpdates.map((update, idx) => (
                <Link key={`update-${update.id || idx}`} to={`/blog/${update.slug || update.id}`} className="block p-4 sm:p-6 bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-500/10 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all group">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
                    <span>Update</span>
                    <span className="text-zinc-300">•</span>
                    <span className="text-zinc-500 dark:text-zinc-400">{new Date(update.published_at!).toLocaleDateString()}</span>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-blue-600 transition-colors">
                    {update.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                    {update.content.replace(/<[^>]+>/g, '').substring(0, 150)}...
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

