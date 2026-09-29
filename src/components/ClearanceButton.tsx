import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Loader2, ArrowRight, AlertCircle, ShieldCheck } from 'lucide-react';
import { useTurnstileVerification } from '../hooks/useTurnstileVerification';
import { useClearanceDispatch } from '../hooks/useClearanceDispatch';
import { useData } from '../contexts/DataContextPublic';

export interface ClearanceButtonProps {
  appId: string;
  appSlug?: string;
  status?: string;
  variant?: 'default' | 'compact';
  onSuccess?: () => void;
  onError?: () => void;
}

const LOADING_STEPS = [
  'VERIFYING SECURITY...',
  'CONNECTING TO SERVER...',
  'RESOLVING LINK...'
];

export default function ClearanceButton({ 
  appId, 
  appSlug, 
  onSuccess, 
  onError 
}: ClearanceButtonProps) {
  const { settings } = useData();

  // Step 1: Initialize Visible Cloudflare Turnstile Verification Hook
  const {
    widgetRef,
    widgetIdRef,
    cfToken,
    cfTokenRef,
    isReady,
    isRendered,
    errorMessage,
    setErrorMessage,
    resetTurnstile,
    executeTurnstile
  } = useTurnstileVerification({ onError, siteKey: settings?.turnstile_site_key });

  // Step 2: Initialize Clearance Dispatch & Bot Protection Hook
  const {
    isLoading,
    destinationUrl,
    isUnavailable,
    setIsUnavailable,
    handleKineticProceed,
    trackPointerMotion,
    closeAndWipeLink
  } = useClearanceDispatch({
    appId,
    appSlug,
    cfToken,
    cfTokenRef,
    widgetIdRef,
    isReady,
    resetTurnstile,
    executeTurnstile,
    onSuccess,
    onError,
    setErrorMessage
  });

  // Dynamic progression steps during verification
  const [loadingStepIndex, setLoadingStepIndex] = useState<number>(0);

  useEffect(() => {
    if (!isLoading) {
      setLoadingStepIndex(0);
      return;
    }

    const interval = setInterval(() => {
      setLoadingStepIndex((prev) => (prev + 1 < LOADING_STEPS.length ? prev + 1 : prev));
    }, 350);

    return () => clearInterval(interval);
  }, [isLoading]);

  // Safe Haptic feedback (supported in Android Chrome and modern mobile browsers)
  const triggerHaptic = useCallback((pattern: number | number[] = 40) => {
    try {
      if (typeof window !== 'undefined' && 'navigator' in window && typeof navigator.vibrate === 'function') {
        navigator.vibrate(pattern);
      }
    } catch (_) {}
  }, []);

  // When Cloudflare verification succeeds, fire subtle haptic feedback
  useEffect(() => {
    if (isReady && cfToken) {
      triggerHaptic([30, 40]);
    }
  }, [isReady, cfToken, triggerHaptic]);

  // ─── CASE A: UNAVAILABLE NOTICE ───
  if (isUnavailable) {
    return (
      <div className="w-full bg-zinc-100 dark:bg-zinc-800/60 border border-black/5 dark:border-white/5 rounded-2xl p-5 text-center flex flex-col items-center gap-3 animate-fade-in select-none">
        <p className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">
          The requested package link is currently unavailable.
        </p>
        <button
          type="button"
          onClick={() => {
            setIsUnavailable(false);
            closeAndWipeLink();
          }}
          className="py-2.5 px-5 text-xs font-bold rounded-xl bg-zinc-800 hover:bg-zinc-900 text-white dark:bg-zinc-200 dark:hover:bg-white dark:text-zinc-900 transition-colors cursor-pointer"
        >
          Check Again
        </button>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center gap-4 select-none">
      
      {/* ─── CASE B: SINGLE-USE LINK READY (POPUP-BLOCKER FALLBACK) ─── */}
      {destinationUrl ? (
        <div className="w-full flex flex-col items-center gap-2 animate-fade-in">
          <a
            href={destinationUrl}
            target="_blank"
            rel="noreferrer noopener"
            referrerPolicy="no-referrer"
            onClick={() => {
              // Once clicked, immediately close and wipe from memory
              setTimeout(() => {
                closeAndWipeLink();
              }, 300);
            }}
            className="flex items-center justify-center gap-2 w-full py-4 px-6 text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-2xl transition-all font-black shadow-lg shadow-emerald-500/25 uppercase tracking-wider text-sm text-center select-none cursor-pointer"
          >
            <span>PROCEED</span>
            <ArrowRight className="w-4 h-4 text-white shrink-0 ml-0.5" />
          </a>
          <p className="text-[11px] text-zinc-400 dark:text-zinc-500 text-center">
            Tap above to proceed. Link expires immediately after use.
          </p>
        </div>
      ) : (
        /* ─── CASE C: TWO-STAGE SECURITY PIPELINE ─── */
        <div className="w-full flex flex-col items-center gap-3.5">
          
          {/* STEP 1: DIRECT CLOUDFLARE TURNSTILE (CLEAN & NATIVE, NO ARTIFICIAL BOX) */}
          <div className="w-full flex flex-col items-center justify-center min-h-[65px] transition-all">
            <div 
              ref={widgetRef} 
              id={`clearance-turnstile-${appId}`} 
              className="flex items-center justify-center min-w-[300px] min-h-[65px]"
            />
          </div>

          {/* STEP 2: PROCEED BUTTON (CLEAN & NEUTRAL: VERIFYING... -> PROCEED) */}
          <div className="relative w-full">
            <button
              type="button"
              id={`gateway-cta-${appId}`}
              onClick={(e) => {
                if (!isReady || isLoading) return;
                trackPointerMotion(e);
                triggerHaptic(35);
                handleKineticProceed();
              }}
              onPointerDown={trackPointerMotion}
              onPointerMove={trackPointerMotion}
              onTouchStart={trackPointerMotion}
              onTouchMove={trackPointerMotion}
              disabled={!isReady || isLoading}
              className={`relative overflow-hidden group flex items-center justify-center gap-2.5 w-full py-4 px-6 rounded-2xl transition-all font-black uppercase tracking-wider text-sm text-center select-none shadow-lg ${
                isLoading
                  ? 'bg-[#1557d6] text-white cursor-wait opacity-95 shadow-blue-500/20'
                  : isReady
                  ? 'bg-[#1a68ff] hover:bg-blue-600 active:bg-blue-700 text-white cursor-pointer shadow-blue-500/30 active:scale-[0.98]'
                  : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-500 dark:text-zinc-400 cursor-not-allowed shadow-none border border-black/5 dark:border-white/5'
              }`}
              aria-label={isReady ? 'Proceed' : 'Verifying clearance'}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin shrink-0 text-white" />
                  <span className="animate-fade-in tracking-wider">
                    {LOADING_STEPS[loadingStepIndex] || 'CONNECTING...'}
                  </span>
                </>
              ) : isReady ? (
                <>
                  <ShieldCheck className="w-4 h-4 text-white/90 shrink-0" />
                  <span>PROCEED</span>
                  <ArrowRight className="w-4 h-4 text-white/80 shrink-0 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
                </>
              ) : (
                <>
                  <Loader2 className="w-4 h-4 animate-spin shrink-0 text-zinc-400 dark:text-zinc-500" />
                  <span className="tracking-wider">VERIFYING...</span>
                </>
              )}
            </button>
          </div>

          {/* Error Notice */}
          {errorMessage && (
            <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-500 text-center animate-fade-in mt-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

        </div>
      )}

    </div>
  );
}
