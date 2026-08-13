import { AppListItemSkeleton, AppListItem } from '../PlayStoreUI';
import { AppConfig } from '../../typesPublic';

interface TabAppListProps {
  loading: boolean;
  apps: AppConfig[];
  visibleCount: number;
  deferredActiveTab: string;
  deferredSearchTerm: string;
}

export default function TabAppList({ loading, apps, visibleCount, deferredActiveTab, deferredSearchTerm }: TabAppListProps) {
  return (
    <div className="animate-fade-in space-y-2 px-0 sm:px-1">
      {loading ? (
        Array.from({ length: 6 }).map((_, i) => (
          <AppListItemSkeleton key={`skeleton-tab-apps-${i}`} />
        ))
      ) : (
        (() => {
          const currentTabLower = deferredActiveTab.toLowerCase().trim();
          const tabApps = apps.filter(app => {
            if (deferredSearchTerm) return true;
            const appCategories = app.category ? app.category.toLowerCase().split(',').map(c => c.trim()) : [];
            return appCategories.some(cat => cat === currentTabLower || cat.includes(currentTabLower) || currentTabLower.includes(cat));
          });

          return tabApps.length > 0 ? (
            tabApps.slice(0, visibleCount).map((app, index) => (
              <AppListItem key={`${app.id}-${index}`} app={app} index={index + 1} />
            ))
          ) : (
            <div className="text-center py-20 text-slate-400">
              <p className="text-lg">No apps found in {deferredActiveTab}</p>
            </div>
          );
        })()
      )}
    </div>
  );
}
