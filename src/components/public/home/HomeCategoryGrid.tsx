import { ShieldCheck, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';

interface HomeCategoryGridProps {
  categories: string[];
  apps?: any[];
  setActiveTab: (tab: string) => void;
}

export default function HomeCategoryGrid({ categories, apps = [], setActiveTab }: HomeCategoryGridProps) {
  const navigate = useNavigate();

  const categoryItems = useMemo(() => {
    const seen = new Set<string>();
    const list: Array<{ name: string; slug: string; count: number }> = [];

    const addCat = (rawName: string) => {
      const trimmed = rawName.trim();
      const l = trimmed.toLowerCase();
      if (!trimmed || l === 'all apps' || l === 'all' || l === 'home' || l === 'apps' || l === 'top charts' || l === 'categories') {
        return;
      }
      const slug = l.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
      if (!slug || seen.has(slug)) return;
      seen.add(slug);

      const count = apps.filter(app => {
        if (!app?.category) return false;
        const appCats = String(app.category).toLowerCase().split(',').map(c => c.trim());
        return appCats.some(c => {
          const cSlug = c.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
          return c === l || cSlug === slug || c.includes(l) || l.includes(c);
        });
      }).length;

      list.push({ name: trimmed, slug, count });
    };

    categories.forEach(addCat);
    apps.forEach(a => {
      if (a?.category) {
        String(a.category).split(',').forEach(addCat);
      }
    });

    return list;
  }, [categories, apps]);

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2.5 xs:gap-3.5 animate-fade-in px-0">
      {categoryItems.map((cat, idx) => {
        const slug = cat.slug;
        const href = `/category/${slug}`;
        return (
          <a
            key={`cat-grid-${slug}-${idx}`}
            href={href}
            onClick={(e) => {
              if (!e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && e.button === 0) {
                e.preventDefault();
                setActiveTab(cat.name);
                navigate(href);
              }
            }}
            className="flex items-center justify-between gap-3 p-3.5 xs:p-4 bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 hover:border-blue-500/30 rounded-2xl text-left active:scale-[0.98] transition-all duration-200 cursor-pointer no-underline group shadow-xs"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 xs:w-11 xs:h-11 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-sm xs:text-base text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                  {cat.name}
                </div>
                {cat.count > 0 && (
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 tabular-nums mt-0.5">
                    {cat.count} Verified {cat.count === 1 ? 'App' : 'Apps'}
                  </div>
                )}
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all shrink-0" />
          </a>
        );
      })}
    </div>
  );
}
