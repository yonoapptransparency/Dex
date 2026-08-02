import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Video, Sparkles, LayoutGrid, Newspaper, Info } from 'lucide-react';
import { useScrollDirection } from '../../hooks/useScrollDirection';

export function PublicBottomNav() {
  const { pathname } = useLocation();
  const { scrollDirection } = useScrollDirection();

  const isBottomNavHidden = scrollDirection === 'up';

  const triggerHaptic = () => {
    if (window.navigator && window.navigator.vibrate) {
      setTimeout(() => {
        try {
          window.navigator.vibrate(15);
        } catch (e) {}
      }, 0);
    }
  };

  const isActive = (path: string) => pathname === path;

  return (
    <div className={`fixed bottom-4 left-0 right-0 z-50 flex justify-center pointer-events-none md:hidden pb-safe px-4 transition-all duration-300 ease-in-out transform-gpu will-change-transform ${
      isBottomNavHidden ? 'translate-y-[200%] opacity-0' : 'translate-y-0 opacity-100'
    }`}>
      <div className="flex items-center gap-1.5 p-1.5 pointer-events-auto bg-white/90 dark:bg-zinc-900/95 backdrop-blur-xl border border-slate-200/80 dark:border-zinc-800 shadow-xl shadow-slate-900/10 dark:shadow-black/50 rounded-full w-auto max-w-full overflow-x-auto no-scrollbar scroll-smooth">
        {[
          { icon: Video, label: 'Videos', path: '/videos' },
          { icon: Sparkles, label: 'New', path: '/new-apps' },
          { icon: LayoutGrid, label: 'Home', path: '/' },
          { icon: Newspaper, label: 'News', path: '/news' },
          { icon: Info, label: 'Help', path: '/contact' }
        ].map((item) => {
          const active = isActive(item.path);
          return (
            <Link 
              key={item.path}
              to={item.path} 
              onClick={triggerHaptic} 
              className={`flex items-center gap-2 px-3.5 py-2 rounded-full transition-all duration-200 active:scale-[0.88] ${
                active 
                  ? 'bg-blue-600 text-white font-extrabold shadow-md shadow-blue-600/30' 
                  : 'text-slate-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-white'
              }`}
            >
              <item.icon className={`w-[18px] h-[18px] ${active ? 'text-white' : 'text-slate-600 dark:text-zinc-400'}`} />
              <span className={`text-[11px] font-bold tracking-tight transition-all duration-300 ${active ? 'max-w-[50px] opacity-100' : 'max-w-0 opacity-0 overflow-hidden'}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default PublicBottomNav;
