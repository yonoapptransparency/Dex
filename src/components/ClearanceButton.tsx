import React, { useState } from 'react';
import { Loader2, ArrowRight, ExternalLink } from 'lucide-react';

interface ClearanceButtonProps {
  appId: string;
  status?: string;
  variant?: 'default' | 'compact';
}

export default function ClearanceButton({ appId }: ClearanceButtonProps) {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [resolvedUrl, setResolvedUrl] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleProceed = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // 1. Native human click verification (rejects automated bot scripts & simulated clicks)
    if (!e.isTrusted) return;
    if (typeof window !== 'undefined' && (window.navigator as any).webdriver) return;
    if (isProcessing) return;

    setIsProcessing(true);
    setErrorMessage(null);

    // 2. Generate dynamic human interaction nonce
    const clearanceToken = btoa(JSON.stringify({
      t: Date.now(),
      x: Math.round(e.clientX || 0),
      y: Math.round(e.clientY || 0)
    }));

    try {
      const res = await fetch('/api/v1/app/resolve-link', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'x-clearance-token': clearanceToken
        },
        body: JSON.stringify({ id: appId, token: clearanceToken }),
        cache: 'no-store'
      });

      if (!res.ok) {
        throw new Error('Connection failed. Please retry.');
      }

      const data = await res.json();
      if (!data || !data.success || !data.url) {
        throw new Error('Information temporarily unavailable.');
      }

      const targetUrl = data.url;

      // 1. Execute Zero-Referrer Airgap Dispatch
      try {
        const link = document.createElement('a');
        link.href = targetUrl;
        link.target = '_blank';
        link.rel = 'noreferrer noopener';
        link.referrerPolicy = 'no-referrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (_) {
        // If mobile browser blocks automated popup, provide manual direct tap
        setResolvedUrl(targetUrl);
      }
    } catch (err: any) {
      setErrorMessage(err?.message || 'Connection failed.');
    } finally {
      // Instant Reset: No timers, state is cleanly reset
      setIsProcessing(false);
    }
  };

  const handleManualFallbackClick = () => {
    // Instantly wipe URL from memory once clicked
    setTimeout(() => {
      setResolvedUrl(null);
    }, 100);
  };

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-3">
      {resolvedUrl ? (
        <a
          href={resolvedUrl}
          target="_blank"
          rel="noreferrer noopener"
          referrerPolicy="no-referrer"
          id={`direct-proceed-btn-${appId}`}
          onClick={handleManualFallbackClick}
          className="group relative flex items-center justify-center gap-2.5 w-full py-4 px-6 text-white rounded-2xl transition-all font-bold shadow-lg uppercase tracking-wider text-sm text-center select-none bg-blue-600 hover:bg-blue-500 active:bg-blue-700 hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>Click Here to Proceed</span>
          <ExternalLink className="w-4 h-4 text-blue-100 shrink-0 ml-1" />
        </a>
      ) : (
        <button
          type="button"
          id={`clearance-btn-${appId}`}
          onClick={handleProceed}
          disabled={isProcessing}
          className={`group relative flex items-center justify-center gap-2.5 w-full py-4 px-6 text-white rounded-2xl transition-all font-bold shadow-md uppercase tracking-wider text-sm text-center select-none cursor-pointer ${
            isProcessing
              ? 'bg-blue-700 cursor-wait scale-[0.99]'
              : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 hover:scale-[1.01] active:scale-[0.99]'
          }`}
        >
          {isProcessing ? (
            <>
              <Loader2 className="w-5 h-5 text-blue-100 animate-spin shrink-0" />
              <span>Connecting...</span>
            </>
          ) : (
            <>
              <span>Proceed</span>
              <ArrowRight className="w-4 h-4 text-blue-100 shrink-0 ml-1 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      )}

      {errorMessage && !isProcessing && (
        <p className="text-xs font-semibold text-rose-600 dark:text-rose-400 text-center">
          {errorMessage} (Tap to retry)
        </p>
      )}
    </div>
  );
}
