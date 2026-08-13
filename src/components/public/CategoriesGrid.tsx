import { ShieldCheck } from 'lucide-react';

interface CategoriesGridProps {
  categories: string[];
  setActiveTab: (tab: string) => void;
}

export default function CategoriesGrid({ categories, setActiveTab }: CategoriesGridProps) {
  const seen = new Set();
  const uniqueCats = categories.filter(c => {
    const l = c.toLowerCase();
    if (seen.has(l)) return false;
    seen.add(l);
    return l !== (categories[0]?.toLowerCase() || 'all apps') && l !== 'top charts' && l !== 'categories';
  });

  return (
    <div className="grid grid-cols-2 gap-4 animate-fade-in px-0">
      {uniqueCats.map((cat, idx) => (
        <button
          key={`cat-grid-${cat}-${idx}`}
          onClick={() => setActiveTab(cat)}
          className="flex items-center gap-4 p-5 glass-panel text-left active:scale-[0.98] transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-500 shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <span className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">{cat}</span>
        </button>
      ))}
    </div>
  );
}
