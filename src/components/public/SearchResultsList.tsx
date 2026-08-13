import { AppListItemSkeleton, AppListItem } from '../PlayStoreUI';
import { AppConfig } from '../../typesPublic';

interface SearchResultsListProps {
  loading: boolean;
  apps: AppConfig[];
  visibleCount: number;
}

export default function SearchResultsList({ loading, apps, visibleCount }: SearchResultsListProps) {
  return (
    <div className="px-0 sm:px-1">
      <div className="space-y-2">
        {loading ? (
          Array.from({ length: 5 }).map((_, i) => (
            <AppListItemSkeleton key={`skeleton-home-${i}`} />
          ))
        ) : (
          apps.slice(0, visibleCount).map((app, index) => (
            <AppListItem key={`${app.id}-${index}`} app={app} index={index + 1} />
          ))
        )}
      </div>
    </div>
  );
}
