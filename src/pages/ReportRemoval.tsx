import React, { useEffect } from 'react';
import { safeHtml } from '../lib/safeHtmlPublic';
import { useData } from '../contexts/DataContextPublic';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Meta from '../components/Meta';
import { DEFAULT_REPORT_REMOVAL_HTML } from '../lib/defaultLegalContent';

export default function ReportRemoval() {
  const { settings: mockSettings, fetchSettings } = useData();
  const navigate = useNavigate();

  useEffect(() => {
    if (!mockSettings?.report_removal_content && fetchSettings) {
      fetchSettings();
    }
  }, [mockSettings?.report_removal_content, fetchSettings]);

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

  const reportRemovalContent = mockSettings?.report_removal_content?.trim() || DEFAULT_REPORT_REMOVAL_HTML;
  const hasHtml = /<[a-z][\s\S]*>/i.test(reportRemovalContent);

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
        title={mockSettings?.report_removal_meta_title || "Report & Removal"}
        description={mockSettings?.report_removal_meta_description || `Report content or request removal of specific applications on ${mockSettings?.site_title || 'RummyDex'}.`}
        canonical={window.location.origin + "/report-removal"}
      />

      <div className="animate-fade-in">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2.5 pb-2.5 border-b border-zinc-200/80 dark:border-zinc-800/80">
          Report & Removal Policy
        </h1>

        <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mb-4 sm:mb-5">
          <div><span className="font-semibold">DMCA & Takedowns:</span> Active 24/7</div>
          {mockSettings?.support_email && (
            <div><span className="font-semibold">Compliance Desk:</span> {mockSettings.support_email}</div>
          )}
        </div>
        
        <div onClick={handleHtmlClick} className="rich-html-content prose prose-zinc dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300 text-xs xs:text-sm sm:text-base font-normal leading-relaxed">
          {hasHtml ? (
            <div dangerouslySetInnerHTML={{ __html: safeHtml(reportRemovalContent) }} />
          ) : (
            <div dangerouslySetInnerHTML={{ __html: safeHtml(reportRemovalContent.replace(/\n/g, '<br/>')) }} />
          )}
        </div>
      </div>
    </div>
  );
}

