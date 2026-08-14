import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { useData } from '../../contexts/DataContextPublic';
import { getOptimizedImageUrl } from '../../seo/utils';
import { PublicSyncStatus } from './PublicSyncStatus';

export function PublicFooter() {
  const { settings } = useData();
  const siteTitle = settings?.site_title || 'RummyDex';
  const logoUrl = settings?.logo_url;
  const optimizedLogo = logoUrl ? getOptimizedImageUrl(logoUrl, 100) : '';

  const brandContent = (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-md">
      <Link to="/" className="flex items-center gap-3 mb-4 group" aria-label={`${siteTitle} Homepage`}>
        <div className="p-1.5 bg-white/10 rounded-2xl group-hover:bg-white/15 transition-colors">
          {optimizedLogo ? (
            <img 
              src={optimizedLogo} 
              loading="lazy" 
              decoding="async" 
              width={48} 
              height={48} 
              className="w-12 h-12 object-contain drop-shadow-sm" 
              alt={`${siteTitle} Footer Logo`} 
            />
          ) : (
            <Shield className="w-8 h-8 text-blue-400" />
          )}
        </div>
        <span className="text-2xl font-bold tracking-tight text-white">{siteTitle}</span>
      </Link>
      
      <p className="text-[14px] text-slate-300 leading-relaxed font-normal">
        {settings?.meta_description || 'Your trusted bridge to the best mobile card games. Explore RummyDex for hands-on reviews, real-time news, and complete app knowledge.'}
      </p>
    </div>
  );

  const footerLinks = (
    <div className="w-full max-w-[540px] grid grid-cols-2 sm:grid-cols-2 gap-x-8 gap-y-8 lg:text-right">
      <div className="flex flex-col gap-2.5 lg:items-end">
        <h3 className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider mb-1">Company Info</h3>
        <Link to="/" className="text-slate-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors text-sm">Home</Link>
        <Link to="/about" className="text-slate-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors text-sm">About Us</Link>
        <Link to="/developers" className="text-slate-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors text-sm">Our Team</Link>
        <Link to="/contact" className="text-slate-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors text-sm">Contact</Link>
      </div>
      
      <div className="flex flex-col gap-2.5 lg:items-end">
        <h3 className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider mb-1">Discover</h3>
        <Link to="/" className="text-slate-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors text-sm">Apps</Link>
        <Link to="/news" className="text-slate-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors text-sm">News</Link>
        <Link to="/videos" className="text-slate-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors text-sm">Videos</Link>
      </div>
      
      <div className="flex flex-col gap-2.5 lg:items-end col-span-2 border-t border-black/5 dark:border-white/10 pt-6">
        <h3 className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-wider mb-2">Legal Docs</h3>
        <div className="grid grid-cols-2 gap-2.5 lg:flex lg:flex-col lg:items-end w-full">
          <Link to="/privacy" className="text-slate-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors text-sm">Privacy</Link>
          <Link to="/report-removal" className="text-slate-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors text-sm">Report & Removal</Link>
          <Link to="/terms" className="text-slate-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors text-sm">Terms</Link>
          <Link to="/notice" className="text-slate-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors text-sm">Notice</Link>
          <Link to="/ethics" className="text-slate-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors text-sm">Ethics</Link>
          <Link to="/disclaimer" className="text-slate-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors text-sm">Disclaimer</Link>
        </div>
      </div>
    </div>
  );

  return (
    <footer className="w-full mt-4 bg-white dark:bg-zinc-950 flex flex-col z-10 border-t border-black/5 dark:border-white/10">
      {/* Desktop Curved Layout */}
      <div className="hidden lg:flex relative overflow-hidden w-full min-h-[460px]">
        <svg 
          className="absolute top-0 left-0 w-full h-full text-slate-900 dark:text-zinc-900 pointer-events-none z-0"
          preserveAspectRatio="none" 
          viewBox="0 0 100 100"
        >
          <path d="M 0,0 C 20,40 40,80 65,100 L 0,100 Z" fill="currentColor" />
        </svg>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-16 flex items-center justify-between">
           <div className="w-[45%] flex flex-col text-white pr-10 xl:pr-16">
              {brandContent}
           </div>
           
           <div className="w-[55%] flex justify-end items-center pl-12">
              {footerLinks}
           </div>
        </div>
      </div>

      {/* Mobile Curved Layout (Matching the user screenshot curve aesthetic) */}
      <div className="flex flex-col lg:hidden w-full">
        <div className="w-full bg-slate-900 dark:bg-zinc-900 text-white px-6 pt-14 pb-20 relative overflow-hidden">
             <svg 
               className="absolute -bottom-1 left-0 w-full h-12 sm:h-16 text-white dark:text-zinc-950 fill-current pointer-events-none" 
               preserveAspectRatio="none" 
               viewBox="0 0 100 20"
             >
               <path d="M 0,20 L 100,20 L 100,0 Q 50,30 0,0 Z" />
             </svg>
             <div className="relative z-10 flex flex-col items-center text-center">
               {brandContent}
             </div>
        </div>

        <div className="w-full bg-white dark:bg-zinc-950 px-6 pb-12 pt-6 flex justify-center text-left">
           {footerLinks}
        </div>
      </div>

      {/* Bottom Bar: Copyright and Social Icons */}
      <div className="w-full bg-slate-950 py-6 px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/5">
        <p className="text-xs text-slate-400 text-center sm:text-left">
          &copy; {new Date().getFullYear()} {siteTitle}. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {settings?.social_links?.facebook && (
            <a aria-label="Facebook" href={settings.social_links.facebook} target="_blank" rel="nofollow noopener noreferrer" className="w-9 h-9 rounded-full bg-white/15 hover:bg-blue-600 text-white border border-white/20 hover:border-blue-500 flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95"><Facebook className="w-4 h-4 text-white" /></a>
          )}
          {settings?.social_links?.instagram && (
            <a aria-label="Instagram" href={settings.social_links.instagram} target="_blank" rel="nofollow noopener noreferrer" className="w-9 h-9 rounded-full bg-white/15 hover:bg-pink-600 text-white border border-white/20 hover:border-pink-500 flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95"><Instagram className="w-4 h-4 text-white" /></a>
          )}
          {settings?.social_links?.twitter && (
            <a aria-label="Twitter" href={settings.social_links.twitter} target="_blank" rel="nofollow noopener noreferrer" className="w-9 h-9 rounded-full bg-white/15 hover:bg-sky-500 text-white border border-white/20 hover:border-sky-400 flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95"><Twitter className="w-4 h-4 text-white" /></a>
          )}
          {settings?.social_links?.linkedin && (
            <a aria-label="LinkedIn" href={settings.social_links.linkedin} target="_blank" rel="nofollow noopener noreferrer" className="w-9 h-9 rounded-full bg-white/15 hover:bg-blue-700 text-white border border-white/20 hover:border-blue-600 flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95"><Linkedin className="w-4 h-4 text-white" /></a>
          )}
          {settings?.social_links?.youtube && (
            <a aria-label="YouTube" href={settings.social_links.youtube} target="_blank" rel="nofollow noopener noreferrer" className="w-9 h-9 rounded-full bg-white/15 hover:bg-red-600 text-white border border-white/20 hover:border-red-500 flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95"><Youtube className="w-4 h-4 text-white" /></a>
          )}
        </div>

        <div className="scale-90 opacity-70 hover:opacity-100 transition-opacity">
          <PublicSyncStatus />
        </div>
      </div>
    </footer>
  );
}

export default PublicFooter;
