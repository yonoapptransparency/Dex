import { TopChartItemSkeleton, TopChartItem } from '../PlayStoreUI';
import { AppConfig } from '../../typesPublic';

interface TopChartsListProps {
  loading: boolean;
  apps: AppConfig[];
  mockAppsLength: number;
  visibleCount: number;
}

export default function TopChartsList({ loading, apps, mockAppsLength, visibleCount }: TopChartsListProps) {
  return (
    <div className="space-y-1 px-0 sm:px-1">
      {loading ? (
        Array.from({ length: 6 }).map((_, i) => (
          <TopChartItemSkeleton key={`skeleton-top-${i}`} rank={i + 1} />
        ))
      ) : (
        apps.slice(0, visibleCount).map((app, index) => (
          <TopChartItem key={`${app.id}-${index}`} rank={index + 1} app={app} />
        ))
      )}
      {!loading && mockAppsLength === 0 && (
        <div className="p-8 text-center bg-zinc-50 dark:bg-zinc-900 rounded-2xl mx-4 mt-8 border border-zinc-200 dark:border-zinc-800">
          <svg className="w-12 h-12 text-zinc-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">No apps available</h3>
          <p className="text-sm text-zinc-500">
            The database might be temporarily unavailable. Please check back later.
          </p>
        </div>
      )}
    </div>
  );
}
