import React from 'react';
import { useData } from '../../contexts/DataContextPublic';
import { cn } from '../../lib/utilsPublic';

interface TabProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  hideOnSearch?: boolean;
}

export const PlayStoreTabs = React.memo(({ activeTab, onTabChange, hideOnSearch }: TabProps) => {
  const { settings } = useData();

  const tabs = React.useMemo(() => {
    let list = settings?.categories && settings.categories.length > 0 
      ? settings.categories 
      : ["All Apps", "Games", "Apps", "Entertainment"];
      
    if (list.length > 0 && !list.some(c => c.toLowerCase() === 'all' || c.toLowerCase() === 'all apps' || c.toLowerCase() === 'home' || c.toLowerCase() === 'apps')) {
      list = ["All Apps", ...list];
    }
    return list;
  }, [settings?.categories]);
  
  const uniqueTabs = React.useMemo(() => {
    const seen = new Set<string>();
    return tabs.filter(tab => {
      const lower = tab.toLowerCase();
      if (seen.has(lower)) return false;
      seen.add(lower);
      return true;
    });
  }, [tabs]);

  if (hideOnSearch) return null;
  
  return (
    <div className="mb-2 sticky top-[42px] xxs:top-[46px] xs:top-[50px] sm:top-16 z-40 bg-[var(--bg-primary)] py-1 xxs:py-1.5 xs:py-2 px-0">
      <div className="flex overflow-x-auto no-scrollbar gap-1 xxs:gap-1.5 xs:gap-2">
        {uniqueTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={cn(
              "whitespace-nowrap px-2.5 xxs:px-3 xs:px-4 py-1 xxs:py-1.5 xs:py-2 text-[11px] xxs:text-xs xs:text-sm font-medium transition-all rounded-full border",
              activeTab === tab 
                ? "bg-blue-500 text-white border-blue-500 shadow-sm" 
                : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-black/5 dark:border-white/5 hover:bg-zinc-50 dark:hover:bg-zinc-800"
            )}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
});
