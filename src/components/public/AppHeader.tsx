import { ShieldCheck, ShieldAlert } from 'lucide-react';
import { AppConfig } from '../../types';
import { getOptimizedImageUrl } from '../../seo/utils';

interface AppHeaderProps {
  app: AppConfig;
}

export default function AppHeader({ app }: AppHeaderProps) {
  return (
    <div className="flex w-full items-center gap-2.5 xs:gap-3.5 sm:gap-6 mb-4 sm:mb-5 px-1 xs:px-2 sm:px-4 md:px-6 mt-1 sm:mt-2">
      <div className="relative w-[58px] h-[58px] xs:w-[72px] xs:h-[72px] sm:w-[96px] sm:h-[96px] shrink-0 premium-logo-container">
        {/* Dynamic glowing colorful aura background */}
        <div className="premium-logo-aura"></div>
        
        <div className="w-full h-full rounded-[14px] xs:rounded-[18px] sm:rounded-[20px] overflow-hidden shadow-sm bg-white border border-black/5 dark:border-white/10 premium-logo-image-frame">
          {/* Dynamic glossy sweep light overlay */}
          <div className="premium-logo-shine-overlay"></div>
          
          {app.icon_url ? (
            <img 
              src={getOptimizedImageUrl(app.icon_url, 128)} 
              alt={`${app.name} app icon`} 
              loading="eager" 
              fetchPriority="high" 
              decoding="async"
              width={96} 
              height={96} 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-2xl sm:text-3xl font-bold bg-zinc-800 text-zinc-500">
              {(app.name || 'A').substring(0, 1)}
            </div>
          )}
        </div>
      </div>
      
      <div className="flex flex-col justify-center flex-1 min-w-0">
        <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-black sm:font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 leading-snug sm:leading-tight mb-0.5 xs:mb-1 break-words">
          {app.name}
        </h1>
        <div className="text-xs xs:text-sm font-medium text-blue-600 dark:text-blue-400 mb-0.5 xs:mb-1 truncate">
          {app.developer || "Developer"}
        </div>
        <div className="text-[9px] xs:text-[10px] sm:text-[11px] text-zinc-500 dark:text-zinc-400 flex flex-wrap items-center gap-x-1.5 xs:gap-x-2 gap-y-1 mt-0.5 xs:mt-1">
          {app.is_new && <span className="bg-blue-500/10 text-blue-600 dark:text-blue-400 px-1.5 py-0.5 rounded-sm uppercase font-bold tracking-wider text-[9px] xs:text-[10px]">New</span>}
          {app.safety_status === 'Verified' ? (
            <span className="flex items-center text-green-600 gap-0.5 font-medium"><ShieldCheck className="w-3 h-3 xs:w-3.5 xs:h-3.5" /> Verified</span>
          ) : (
            <span className="flex items-center text-orange-500 gap-0.5 font-medium"><ShieldAlert className="w-3 h-3 xs:w-3.5 xs:h-3.5" /> {app.safety_status}</span>
          )}
        </div>
      </div>
    </div>
  );
}
