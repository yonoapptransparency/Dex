import React, { useState, useEffect } from 'react';
import { Loader2, ArrowRight, AlertCircle } from 'lucide-react';
import { useTurnstileVerification } from '../hooks/useTurnstileVerification';
import { useClearanceDispatch } from '../hooks/useClearanceDispatch';

export interface ClearanceButtonProps {
  appId: string;
  appSlug?: string;
  status?: string;
  variant?: 'default' | 'compact';
  onSuccess?: () => void;
  onError?: () => void;
}

const LOADING_STEPS = [
  'PROCESSING...',
  'VERIFYING...',
  'CONNECTING...',
  'ALMOST READY...',
  'ALMOST DONE...',
  'FINALIZING...'
];

export default function ClearanceButton({ 
  appId, 
  appSlug, 
  onSuccess, 
  onError 
}: ClearanceButtonProps) {
  // Step 1: Initialize Turnstile Verification Hook
  const {
    widgetRef,
    widgetIdRef,
    cfToken,
    cfTokenRef,
    isReady,
    errorMessage,
    setErrorMessage,
    resetTurnstile,
    executeTurnstile
  } = useTurnstileVerification({ onError });

  // Step 2: Initialize Clearance Dispatch & Bot Protection Hook
  const {
    isLoading,
    destinationUrl,
    isUnavailable,
    setIsUnavailable,
    handleProceed,
    trackPointer,
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

  // Dynamic lightweight stage progression during verification
  const [loadingStepIndex, setLoadingStepIndex] = useState<number>(0);

  useEffect(() => {
    if (!isLoading) {
      setLoadingStepIndex(0);
      return;
    }

    const interval = setInterval(() => {
      setLoadingStepIndex((prev) => (prev + 1 < LOADING_STEPS.length ? prev + 1 : prev));
    }, 900);

    return () => clearInterval(interval);
  }, [isLoading]);

  // ─── UNAVAILABLE NOTICE ───
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
      
      {/* ─── CASE A: SINGLE-USE LINK READY (POPUP BLOCKER FALLBACK) ─── */}
      {destinationUrl ? (
        <div className="w-full flex flex-col items-center gap-2 animate-fade-in">
          <a
            href={destinationUrl}
            target="_blank"
            rel="noreferrer noopener"
            referrerPolicy="no-referrer"
            onClick={() => {
              // The moment user clicks, the link is IMMEDIATELY closed and wiped
              setTimeout(() => {
                closeAndWipeLink();
              }, 300);
            }}
            className="flex items-center justify-center gap-2 w-full py-4 px-6 text-white bg-[#1a68ff] hover:bg-blue-600 active:bg-blue-700 rounded-2xl transition-all font-black shadow-lg shadow-blue-500/25 uppercase tracking-wider text-sm text-center select-none cursor-pointer"
          >
            <span>PROCEED</span>
            <ArrowRight className="w-4 h-4 text-white shrink-0 ml-0.5" />
          </a>
          <p className="text-[11px] text-zinc-400 dark:text-zinc-500 text-center">
            Tap above to proceed. Link expires immediately after use.
          </p>
        </div>
      ) : (
        /* ─── CASE B: STANDARD CLEAN NEUTRAL VERIFICATION INTERFACE ─── */
        <div className="w-full flex flex-col items-center gap-3">
          
          {/* Cloudflare Turnstile Challenge Container */}
          <div className="w-full flex justify-center items-center py-1 min-h-[68px]">
            <div 
              ref={widgetRef} 
              id={`clearance-turnstile-${appId}`} 
              className="flex items-center justify-center overflow-hidden rounded-lg min-w-[300px] min-h-[65px]"
            />
          </div>

          {/* Primary Neutral Proceed Button with Lightweight Dynamic Progression */}
          <button
            type="button"
            id={`gateway-cta-${appId}`}
            onClick={handleProceed}
            onPointerDown={trackPointer}
            onTouchStart={trackPointer}
            disabled={isLoading}
            className={`group flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl transition-all font-black uppercase tracking-wider text-sm text-center select-none shadow-lg shadow-blue-500/25 ${
              isLoading
                ? 'bg-[#1557d6] text-white cursor-wait opacity-90'
                : 'bg-[#1a68ff] hover:bg-blue-600 active:bg-blue-700 text-white cursor-pointer shadow-blue-500/30'
            }`}
            aria-label="Proceed"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin shrink-0 text-white" />
                <span className="animate-fade-in tracking-wider">
                  {LOADING_STEPS[loadingStepIndex] || 'CONNECTING...'}
                </span>
              </>
            ) : (
              <>
                <span>PROCEED</span>
                <ArrowRight className="w-4 h-4 text-white shrink-0 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
              </>
            )}
          </button>

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
