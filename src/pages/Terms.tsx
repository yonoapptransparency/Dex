import React, { useEffect } from 'react';
import { safeHtml } from '../lib/safeHtmlPublic';
import { useData } from '../contexts/DataContextPublic';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Meta from '../components/Meta';
import { DEFAULT_TERMS_HTML } from '../lib/defaultLegalContent';

export default function Terms() {
  const { settings: mockSettings, fetchSettings } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    if (!mockSettings?.terms_content && fetchSettings) {
      fetchSettings();
    }
  }, [mockSettings?.terms_content, fetchSettings]);

  const handleHtmlClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = (e.target as HTMLElement).closest('a');
    if (!target) return;
    const href = target.getAttribute('href');
    if (!href) return;
    if (href.startsWith('/') && !href.startsWith('//')) {
      e.preventDefault();
      navigate(href);
    } else if (href.startsWith('https://www.rummydex.com') || href.startsWith('http://www.rummydex.com')) {
      try {
        const url = new URL(href);
        e.preventDefault();
        navigate(url.pathname + url.search + url.hash);
      } catch (_) {}
    }
  };

  const termsContent = mockSettings?.terms_content?.trim() || DEFAULT_TERMS_HTML;
  const hasHtml = /<[a-z][\s\S]*>/i.test(termsContent);
  
  return (
    <div className="max-w-[1000px] mx-auto px-3.5 sm:px-6 py-3 sm:py-6 animate-fade-in pb-14 min-h-[70vh] text-left">
      <div className="mb-3 sm:mb-4">
        <Link 
          to="/" 
          className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Home
        </Link>
      </div>
      <Meta 
        title={mockSettings?.terms_meta_title || "Terms of Service"}
        description={mockSettings?.terms_meta_description || `Review the Terms of Service and usage guidelines for ${mockSettings?.site_title || 'RummyDex'}.`}
        canonical={window.location.origin + "/terms"}
      />

      <div className="animate-fade-in">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2.5 pb-2.5 border-b border-zinc-200/80 dark:border-zinc-800/80">
          Terms & Conditions
        </h1>

        <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mb-4 sm:mb-5">
          <div><span className="font-semibold">Agreement Status:</span> Active & Binding</div>
          {mockSettings?.support_email && (
            <div><span className="font-semibold">Support Contact:</span> {mockSettings.support_email}</div>
          )}
        </div>
        
        <div onClick={handleHtmlClick} className="rich-html-content prose prose-zinc dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300 text-xs xs:text-sm sm:text-base font-normal leading-relaxed">
          {hasHtml ? (
            <div dangerouslySetInnerHTML={{ __html: safeHtml(termsContent) }} />
          ) : (
            <div dangerouslySetInnerHTML={{ __html: safeHtml(termsContent.replace(/\n/g, '<br/>')) }} />
          )}
        </div>
      </div>
    </div>
  );
}

