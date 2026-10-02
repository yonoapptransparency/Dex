import { Link } from 'react-router-dom';
import { Download, FileText, ExternalLink } from 'lucide-react';
import { getOptimizedImageUrl } from '../../../seo/utils';

interface NewsRelatedAppBoxProps {
  downloadTarget: { url: string; isInternal: boolean } | null;
  relatedApp: any;
  newsItem: any;
  className?: string;
}

export function NewsRelatedAppBox({ downloadTarget, relatedApp, newsItem, className = '' }: NewsRelatedAppBoxProps) {
  if (!downloadTarget && !relatedApp) return null;

  const appSlug = relatedApp?.slug || relatedApp?.id || '';
  const appName = relatedApp?.name || newsItem?.title || 'Featured App';
  const appIcon = relatedApp?.icon_url || relatedApp?.logo_url;
  const isInternal = downloadTarget?.isInternal ?? Boolean(relatedApp);
  
  // App Details route
  const detailUrl = appSlug ? `/app/${appSlug}` : (downloadTarget?.url || '#');
  // Download gateway clearance route
  const gatewayUrl = appSlug ? `/moreinfo/${appSlug}` : (downloadTarget?.url || '#');

  return (
    <div className={`p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/80 via-indigo-50/60 to-blue-50/80 dark:from-blue-950/40 dark:via-indigo-950/30 dark:to-blue-950/40 border border-blue-100 dark:border-blue-900/50 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm ${className}`}>
      <div className="flex items-center gap-3.5 w-full sm:w-auto">
        {appIcon ? (
          <img
            src={getOptimizedImageUrl(appIcon, 128) || appIcon}
            alt={appName}
            className="w-13 h-13 rounded-2xl object-cover shadow-sm shrink-0 border border-black/5 dark:border-white/10"
            loading="lazy"
          />
        ) : (
          <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xl shrink-0 shadow-sm">
            {appName?.[0] || 'R'}
          </div>
        )}
        <div className="min-w-0">
          <h4 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white truncate">
            {appName}
          </h4>
        </div>
      </div>

      <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0">
        {isInternal ? (
          <>
            {appSlug && (
              <Link
                to={detailUrl}
                className="flex-1 sm:flex-none px-4 py-2.5 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-all"
                title="View App Details"
              >
                <FileText className="w-3.5 h-3.5 text-zinc-500" />
                <span>App Details</span>
              </Link>
            )}
            <Link
              to={gatewayUrl}
              className="flex-1 sm:flex-none px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-500/20 active:scale-95"
              title="Download via Secure Gateway"
            >
              <Download className="w-4 h-4" />
              <span>Download</span>
            </Link>
          </>
        ) : (
          <a
            href={downloadTarget?.url || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-500/20 active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Download</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
        )}
      </div>
    </div>
  );
}
