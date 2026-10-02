import { Link } from 'react-router-dom';
import { Clock, Calendar, Pin, Share2 } from 'lucide-react';
import { getOptimizedImageUrl } from '../../../seo/utils';
import { calculateReadingTime, formatNewsDate, getPlainTextSnippet } from './newsUtils';
import { safeHtml } from '../../../lib/safeHtmlPublic';

interface NewsCardProps {
  item: any;
  onShare: (item: any) => void;
}

export default function NewsCard({ item, onShare }: NewsCardProps) {
  const coverImage = item.image || item.image_url;
  const readingTime = calculateReadingTime(item.content || item.description);
  const formattedDate = formatNewsDate(item.date, item.published_at);
  const snippet = getPlainTextSnippet(item.description);

  return (
    <article className="glass-panel overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 group rounded-2xl border border-zinc-200/80 dark:border-zinc-800">
      {coverImage ? (
        <div className="relative w-full aspect-[16/9] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          <img 
            src={getOptimizedImageUrl(coverImage, 600)} 
            alt={item.title || 'News article'} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {item.is_pinned && (
            <div className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
              <Pin className="w-3 h-3 fill-white" />
              <span>Pinned</span>
            </div>
          )}
          {item.category && (
            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full border border-white/20">
              {item.category}
            </div>
          )}
        </div>
      ) : (
        <div className="relative w-full h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
      )}

      <div className="p-4 sm:p-5 flex-1 flex flex-col">
        <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400 mb-2">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {formattedDate}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {readingTime}
          </span>
        </div>

        <Link to={`/news/${item.slug || item.id}`} className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          <h2 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white line-clamp-2 leading-snug mb-2">
            {item.title}
          </h2>
        </Link>

        {snippet && (
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed mb-4 flex-1" dangerouslySetInnerHTML={{ __html: safeHtml(snippet) }}>
          </p>
        )}

        <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs font-semibold">
          <Link 
            to={`/news/${item.slug || item.id}`}
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            Read Article →
          </Link>

          <button
            onClick={() => onShare(item)}
            className="p-1.5 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors cursor-pointer"
            title="Share article"
          >
            <Share2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
}
