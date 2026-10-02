import { ShieldCheck } from 'lucide-react';

interface HomeCategoryGridProps {
  categories: string[];
  setActiveTab: (tab: string) => void;
}

export default function HomeCategoryGrid({ categories, setActiveTab }: HomeCategoryGridProps) {
  const seen = new Set<string>();
  const uniqueCats = categories.filter(c => {
    const l = c.toLowerCase();
    if (seen.has(l)) return false;
    seen.add(l);
    return l !== (categories[0]?.toLowerCase() || 'all apps') && l !== 'top charts' && l !== 'categories';
  });

  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 gap-2.5 xs:gap-4 animate-fade-in px-0">
      {uniqueCats.map((cat, idx) => (
        <button
          key={`cat-grid-${cat}-${idx}`}
          onClick={() => setActiveTab(cat)}
          className="flex items-center gap-3 xs:gap-4 p-3.5 xs:p-5 glass-panel text-left active:scale-[0.98] transition-all duration-300 cursor-pointer"
        >
          <div className="w-10 h-10 xs:w-12 xs:h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-500 shrink-0">
            <ShieldCheck className="w-5 h-5 xs:w-6 xs:h-6" />
          </div>
          <span className="font-semibold text-sm xs:text-lg text-zinc-900 dark:text-zinc-100">{cat}</span>
        </button>
      ))}
    </div>
  );
}
