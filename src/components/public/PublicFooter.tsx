import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { useData } from '../../contexts/DataContextPublic';
import { PublicSyncStatus } from './PublicSyncStatus';

export function PublicFooter() {
  const { settings } = useData();
  const siteTitle = settings?.site_title || 'RummyDex';

  return (
    <footer className="w-full mt-6 sm:mt-10 bg-slate-900 dark:bg-zinc-950 text-slate-300 border-t border-black/10 dark:border-white/10 z-10 transition-colors">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
          
          {/* Brand Column (Pure Text - Ultra Lightweight & Zero Image Overhead) */}
          <div className="flex flex-col items-start max-w-sm">
            <Link 
              to="/" 
              className="text-lg xs:text-xl sm:text-2xl font-black tracking-tight text-white hover:text-blue-400 transition-colors inline-flex items-center gap-2 mb-2"
              aria-label={`${siteTitle} Homepage`}
            >
              <span>{siteTitle}</span>
              <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                Verified
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Independent digital directory, application benchmarking, and transparent reviews.
            </p>
          </div>

          {/* Links Grid - Crawlable & Semantic for Search Engines */}
          <div className="w-full lg:w-auto grid grid-cols-2 sm:grid-cols-3 gap-6 xs:gap-8 text-left text-xs xs:text-sm">
            
            {/* Column 1: Directory */}
            <div className="flex flex-col gap-2">
              <h3 className="text-white font-bold text-[11px] xs:text-xs uppercase tracking-wider mb-1 text-slate-100">
                Directory
              </h3>
              <Link to="/" className="text-slate-400 hover:text-blue-400 transition-colors py-0.5">All Apps</Link>
              <Link to="/new-apps" className="text-slate-400 hover:text-blue-400 transition-colors py-0.5">New Apps</Link>
              <Link to="/categories" className="text-slate-400 hover:text-blue-400 transition-colors py-0.5">Categories</Link>
              <Link to="/news" className="text-slate-400 hover:text-blue-400 transition-colors py-0.5">Industry News</Link>
              <Link to="/videos" className="text-slate-400 hover:text-blue-400 transition-colors py-0.5">Video Reviews</Link>
            </div>

            {/* Column 2: Platform Info */}
            <div className="flex flex-col gap-2">
              <h3 className="text-white font-bold text-[11px] xs:text-xs uppercase tracking-wider mb-1 text-slate-100">
                Company
              </h3>
              <Link to="/about" className="text-slate-400 hover:text-blue-400 transition-colors py-0.5">About Us</Link>
              <Link to="/developers" className="text-slate-400 hover:text-blue-400 transition-colors py-0.5">Developer Team</Link>
              <Link to="/contact" className="text-slate-400 hover:text-blue-400 transition-colors py-0.5">Contact Support</Link>
              <Link to="/responsibility" className="text-slate-400 hover:text-blue-400 transition-colors py-0.5">Responsible Gaming</Link>
              <Link to="/report-removal" className="text-slate-400 hover:text-blue-400 transition-colors py-0.5">Report / DMCA</Link>
            </div>

            {/* Column 3: Legal & Policy */}
            <div className="flex flex-col gap-2 col-span-2 sm:col-span-1">
              <h3 className="text-white font-bold text-[11px] xs:text-xs uppercase tracking-wider mb-1 text-slate-100">
                Compliance
              </h3>
              <Link to="/privacy" className="text-slate-400 hover:text-blue-400 transition-colors py-0.5">Privacy Policy</Link>
              <Link to="/terms" className="text-slate-400 hover:text-blue-400 transition-colors py-0.5">Terms of Service</Link>
              <Link to="/ethics" className="text-slate-400 hover:text-blue-400 transition-colors py-0.5">Ethics Policy</Link>
              <Link to="/notice" className="text-slate-400 hover:text-blue-400 transition-colors py-0.5">Legal Notice</Link>
              <Link to="/disclaimer" className="text-slate-400 hover:text-blue-400 transition-colors py-0.5">Disclaimer</Link>
            </div>

          </div>
        </div>

        {/* Bottom Bar: Copyright, Social Links & Sync Status */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] xs:text-xs text-slate-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} {siteTitle}. All rights reserved.
          </p>

          <div className="flex items-center gap-2 xs:gap-3 flex-wrap justify-center">
            {settings?.social_links?.facebook && (
              <a aria-label="Facebook" href={settings.social_links.facebook} target="_blank" rel="noopener noreferrer dofollow" className="w-7 h-7 xs:w-8 xs:h-8 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-150"><Facebook className="w-3.5 h-3.5" /></a>
            )}
            {settings?.social_links?.instagram && (
              <a aria-label="Instagram" href={settings.social_links.instagram} target="_blank" rel="noopener noreferrer dofollow" className="w-7 h-7 xs:w-8 xs:h-8 rounded-full bg-slate-800 hover:bg-pink-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-150"><Instagram className="w-3.5 h-3.5" /></a>
            )}
            {settings?.social_links?.twitter && (
              <a aria-label="Twitter" href={settings.social_links.twitter} target="_blank" rel="noopener noreferrer dofollow" className="w-7 h-7 xs:w-8 xs:h-8 rounded-full bg-slate-800 hover:bg-sky-500 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-150"><Twitter className="w-3.5 h-3.5" /></a>
            )}
            {settings?.social_links?.linkedin && (
              <a aria-label="LinkedIn" href={settings.social_links.linkedin} target="_blank" rel="noopener noreferrer dofollow" className="w-7 h-7 xs:w-8 xs:h-8 rounded-full bg-slate-800 hover:bg-blue-700 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-150"><Linkedin className="w-3.5 h-3.5" /></a>
            )}
            {settings?.social_links?.youtube && (
              <a aria-label="YouTube" href={settings.social_links.youtube} target="_blank" rel="noopener noreferrer dofollow" className="w-7 h-7 xs:w-8 xs:h-8 rounded-full bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-150"><Youtube className="w-3.5 h-3.5" /></a>
            )}
          </div>

          <div className="scale-90 opacity-60 hover:opacity-100 transition-opacity">
            <PublicSyncStatus />
          </div>
        </div>

      </div>
    </footer>
  );
}

export default PublicFooter;
