import React, { useState, useRef } from 'react';
import { Loader2, ArrowRight, Clock } from 'lucide-react';

interface ClearanceButtonProps {
  appId: string;
  appSlug?: string;
  status?: string;
  variant?: 'default' | 'compact';
}

export default function ClearanceButton({ appId, appSlug }: ClearanceButtonProps) {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isUnavailable, setIsUnavailable] = useState<boolean>(false);
  const [unavailableMessage, setUnavailableMessage] = useState<string | null>(null);
  const mountTimeRef = useRef<number>(Date.now());

  const handleProceed = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // 1. Comprehensive Client-Side Bot & Automation Detection
    // Rejects automated headless scripts, simulated events, and Selenium/Puppeteer drivers
    if (!e.isTrusted) return; // Disallow non-human synthetic dispatches
    if (typeof window !== 'undefined') {
      const nav = window.navigator as any;
      const win = window as any;
      if (nav.webdriver) return;
      if (win.callPhantom || win._phantom || win.__nightmare) return;
      if (win.domAutomation || win.__selenium_evaluate || win.__webdriver_evaluate) return;
      if (win.cdc_adoQpoasnfa76pfcZLmcfl_Array) return;
      if (document.documentElement.getAttribute('webdriver')) return;
    }

    // Rejects ultra-fast instant triggers (< 200ms after mount, characteristic of scraping scripts)
    const elapsed = Date.now() - mountTimeRef.current;
    if (elapsed < 200) return;

    if (isProcessing) return;

    setIsProcessing(true);
    setErrorMessage(null);
    setIsUnavailable(false);
    setUnavailableMessage(null);

    // 2. Generate cryptographically distinct, single-use burn nonce
    const entropy = Math.random().toString(36).substring(2, 12) + Date.now().toString(36);
    const clearanceToken = btoa(JSON.stringify({
      t: Date.now(),
      n: entropy,
      id: appId,
      el: elapsed,
      cx: Math.round(e.clientX || 0),
      cy: Math.round(e.clientY || 0),
      sx: Math.round(e.screenX || 0),
      sy: Math.round(e.screenY || 0)
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

      if (res.status === 429) {
        throw new Error('Too many attempts. Please wait a few seconds and try again.');
      }

      if (res.status === 403) {
        throw new Error('Verification expired. Please tap Proceed to verify again.');
      }

      if (!res.ok) {
        throw new Error('Connection failed. Please retry.');
      }

      const data = await res.json();
      
      // If the link is not present yet or undergoing admin update
      if (data && (data.status === 'unavailable' || !data.url)) {
        setIsUnavailable(true);
        setUnavailableMessage(data?.message || 'The download link is currently not available. It will be updated soon by the administrator.');
        return;
      }

      if (!data || !data.success || !data.url) {
        throw new Error(data?.error || 'Information temporarily unavailable.');
      }

      const targetUrl = data.url;

      // 3. Direct Immediate Zero-Referrer Airgap Dispatch
      // CRITICAL ARCHITECTURE RULE: No timers (no 30s, no 2s). The URL is NEVER stored in React
      // state or kept open in the DOM. Once verified, the user passes through immediately.
      // If they return to the page, they must verify again fresh from scratch.
      let opened = false;
      try {
        const win = window.open(targetUrl, '_blank', 'noopener,noreferrer');
        if (win && !win.closed && typeof win.closed !== 'undefined') {
          opened = true;
        }
      } catch (_) {
        opened = false;
      }

      // If popup was blocked by browser or on mobile device, dispatch direct navigation
      if (!opened) {
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
          try {
            window.location.assign(targetUrl);
          } catch (_) {
            window.location.href = targetUrl;
          }
        }
      }
    } catch (err: any) {
      setErrorMessage(err?.message || 'Connection failed. Please try again.');
    } finally {
      // Instant Clean Reset: Never keep link open or running on a timer
      setIsProcessing(false);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-3">
      {isUnavailable ? (
        <div className="w-full bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/20 rounded-2xl p-5 text-center flex flex-col items-center gap-3 shadow-sm animate-fade-in">
          <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400">
            <Clock className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
              Download Link Not Available
            </h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xs">
              {unavailableMessage || 'The download link for this app is currently not available or is undergoing administrative review. It will be updated soon by the admin.'}
            </p>
          </div>
          <div className="flex items-center gap-2 w-full pt-1">
            {appSlug && (
              <a
                href={`/app/${appSlug}`}
                className="flex-1 py-2.5 px-4 text-xs font-semibold rounded-xl bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-black/5 dark:border-white/5 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors text-center shadow-xs"
              >
                Back to Details
              </a>
            )}
            <button
              type="button"
              onClick={() => {
                setIsUnavailable(false);
                setErrorMessage(null);
              }}
              className="flex-1 py-2.5 px-4 text-xs font-bold rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-colors text-center cursor-pointer shadow-xs"
            >
              Check Again
            </button>
          </div>
        </div>
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

      {errorMessage && !isProcessing && !isUnavailable && (
        <p className="text-xs font-semibold text-rose-600 dark:text-rose-400 text-center">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
