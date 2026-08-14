import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, X, LayoutGrid, Newspaper, Sparkles, Send, Video, Users, Trash2, ShieldCheck, Info } from 'lucide-react';
import LanguageSelector from '../LanguageSelector';

interface MobileMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  siteTitle: string;
  logoUrl?: string;
  triggerHaptic: () => void;
}

export function MobileMenuModal({
  isOpen,
  onClose,
  siteTitle,
  logoUrl,
  triggerHaptic
}: MobileMenuModalProps) {
  const { pathname } = useLocation();

  // Prevent background scrolling when mobile menu modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const menuLinks = [
    { to: '/', label: 'Home', icon: LayoutGrid },
    { to: '/news', label: 'News', icon: Newspaper },
    { to: '/videos', label: 'Videos', icon: Video },
    { to: '/responsibility', label: 'Safety', icon: ShieldCheck },
    { to: '/about', label: 'About Us', icon: Info },
    { to: '/developers', label: 'Our Team', icon: Users },
    { to: '/contact', label: 'Contact', icon: Send },
    { to: '/privacy', label: 'Privacy', icon: ShieldCheck },
    { to: '/report-removal', label: 'Report & Removal', icon: Trash2 },
    { to: '/terms', label: 'Terms', icon: ShieldCheck },
    { to: '/notice', label: 'Notice', icon: ShieldCheck },
    { to: '/ethics', label: 'Ethics', icon: ShieldCheck },
    { to: '/disclaimer', label: 'Disclaimer', icon: ShieldCheck },
  ];

  return (
    <div 
      className="fixed inset-0 z-[100] bg-white/98 dark:bg-slate-950/98 flex flex-col px-5 py-6 overflow-y-auto transition-all duration-200 animate-in fade-in slide-in-from-top-2"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
    >
      <div className="flex justify-between items-center mb-6 shrink-0">
        <span className="text-lg sm:text-xl font-bold flex items-center gap-2.5 tracking-tight text-zinc-900 dark:text-white">
          {logoUrl ? (
            <img 
              src={logoUrl} 
              loading="lazy" 
              decoding="async" 
              width={40} 
              height={40} 
              className="w-10 h-10 object-contain drop-shadow-sm" 
              alt={`${siteTitle || 'RummyDex'} Logo`} 
            />
          ) : (
            <Shield className="w-5 h-5 text-blue-500" />
          )} 
          {siteTitle}
        </span>
        <button 
          type="button"
          onClick={() => { triggerHaptic(); onClose(); }}
          className="flex items-center justify-center w-9 h-9 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-full active:scale-95 transition-transform"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <div className="mb-5 z-50 relative">
        <LanguageSelector />
      </div>

      <nav className="grid grid-cols-2 gap-2.5 mb-6 shrink-0 relative z-40">
        {menuLinks.map((item, idx) => {
          const active = item.to && pathname === item.to;
          return (
            <Link 
              key={`nav-link-${item.to}-${idx}`}
              onClick={() => { triggerHaptic(); onClose(); }} 
              to={item.to} 
              className={`flex items-center gap-2.5 p-3 rounded-xl transition-all ${
                active 
                  ? 'bg-blue-600 text-white shadow-sm font-semibold' 
                  : 'bg-black/5 dark:bg-white/10 text-zinc-800 dark:text-zinc-200 hover:bg-black/10 font-medium'
              }`}
            >
              <item.icon className={`w-4 h-4 shrink-0 ${active ? 'text-white' : 'text-zinc-500 dark:text-zinc-400'}`} />
              <span className="text-xs sm:text-[13px] truncate">{item.label}</span>
            </Link>
          );
        })}
      </nav>
      
      <div className="mt-auto pt-4 border-t border-black/5 dark:border-white/5 text-center shrink-0">
        <span className="text-[11px] text-zinc-400 font-medium">&copy; {new Date().getFullYear()} {siteTitle}. All rights reserved.</span>
      </div>
    </div>
  );
}

export default MobileMenuModal;
