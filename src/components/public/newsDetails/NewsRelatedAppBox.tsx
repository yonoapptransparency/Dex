import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';
import { getOptimizedImageUrl } from '../../../seo/utils';

interface NewsRelatedAppBoxProps {
  downloadTarget: { url: string; isInternal: boolean } | null;
  relatedApp: any;
  newsItem: any;
}

export function NewsRelatedAppBox({ downloadTarget, relatedApp, newsItem }: NewsRelatedAppBoxProps) {
  if (!downloadTarget) return null;

  return (
    <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-100 dark:border-blue-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3.5 w-full sm:w-auto">
        {relatedApp?.icon_url ? (
          <img
            src={getOptimizedImageUrl(relatedApp.icon_url, 120)}
            alt={relatedApp.name}
            className="w-12 h-12 rounded-xl object-cover shadow-sm shrink-0"
          />
        ) : (
          <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shrink-0">
            {relatedApp?.name?.[0] || newsItem?.title?.[0] || 'R'}
          </div>
        )}
        <div>
          <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
            {relatedApp?.name || 'Related Application'}
          </h4>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
            Verified download available on RummyDex
          </p>
        </div>
      </div>

      {downloadTarget.isInternal ? (
        <Link
          to={downloadTarget.url}
          className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-500/20 shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>View Application</span>
        </Link>
      ) : (
        <a
          href={downloadTarget.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-500/20 shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>Get Application</span>
        </a>
      )}
    </div>
  );
}
