import { AppListItemSkeleton, AppListItem } from '../PlayStoreUI';
import { AppConfig } from '../../typesPublic';

interface HomeTabListProps {
  loading: boolean;
  apps: AppConfig[];
  visibleCount: number;
}

export default function HomeTabList({ loading, apps, visibleCount }: HomeTabListProps) {
  return (
    <div className="px-0 sm:px-1">
      <div className="space-y-2">
        {loading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <AppListItemSkeleton key={`skeleton-cat-${i}`} />
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
