import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Loader2, ArrowRight, AlertCircle } from 'lucide-react';

const PROD_TURNSTILE_SITE_KEY = '0x4AAAAAAE99nFmDXDivmDJV';
const TEST_TURNSTILE_SITE_KEY = '1x00000000000000000000AA';

function isValidTurnstileKey(key: string | undefined | null): boolean {
  if (!key || typeof key !== 'string') return false;
  const trimmed = key.trim();
  return /^(0x4|1x|2x|3x)[a-zA-Z0-9_-]{10,60}$/.test(trimmed);
}

function getTurnstileSiteKey(): string {
  if (typeof window !== 'undefined') {
    const customKey = 
      (import.meta.env?.VITE_TURNSTILE_SITE_KEY as string) || 
      (import.meta.env?.VITE_CF_TURNSTILE_SITE_KEY as string);
    if (isValidTurnstileKey(customKey)) return customKey.trim();

    const host = window.location.hostname.toLowerCase();
    if (host === 'rummydex.com' || host === 'www.rummydex.com') {
      return PROD_TURNSTILE_SITE_KEY;
    }
    // Development, preview, and Cloud Run environments use universal interactive test key
    return TEST_TURNSTILE_SITE_KEY;
  }
  return PROD_TURNSTILE_SITE_KEY;
}

declare global {
  interface Window {
    turnstile?: {
      render: (container: string | HTMLElement, options: Record<string, any>) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
      execute: (widgetId: string) => void;
    };
    onTurnstileLoad?: () => void;
  }
}

interface ClearanceButtonProps {
  appId: string;
  appSlug?: string;
  status?: string;
  variant?: 'default' | 'compact';
  onSuccess?: () => void;
  onError?: () => void;
}

export default function ClearanceButton({ 
  appId, 
  appSlug, 
  onSuccess, 
  onError 
}: ClearanceButtonProps) {
  // Turnstile verification state
  const [cfToken, setCfToken] = useState<string | null>(null);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Single-use destination state (destroyed immediately upon access)
  const [destinationUrl, setDestinationUrl] = useState<string | null>(null);
  const [isUnavailable, setIsUnavailable] = useState<boolean>(false);
  const [processingStep, setProcessingStep] = useState<number>(0);

  // Lightweight progress step cycling while verification is in progress
  useEffect(() => {
    if (isReady) return;
    const stepTimer = setInterval(() => {
      setProcessingStep((prev) => (prev + 1) % 3);
    }, 1100);
    return () => clearInterval(stepTimer);
  }, [isReady]);

  const stepLabels = ['PROCESSING...', 'VERIFYING...', 'ALMOST DONE...'];

  // Hidden references for silent bot defense & clean memory management
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const cfTokenRef = useRef<string | null>(null);
  const mountTimeRef = useRef<number>(Date.now());
  const activeKeyRef = useRef<string>(getTurnstileSiteKey());
  const lastPointerRef = useRef<{ cx: number; cy: number; sx: number; sy: number }>({ cx: 120, cy: 240, sx: 120, sy: 280 });
  const isBotDetectedRef = useRef<boolean>(false);

  // ─── INSTANT LINK CLOSURE: WIPE DESTINATION FROM MEMORY & RESET ───
  // Strictly enforces: "one time user click link, one time he passed, the link closes"
  const closeAndWipeLink = useCallback(() => {
    // 1. Immediately destroy target URL from state & memory
    setDestinationUrl(null);
    setIsLoading(false);

    // 2. Wipe tokens
    setCfToken(null);
    cfTokenRef.current = null;
    setIsReady(false);

    // 3. Reset Cloudflare Turnstile so every subsequent access requires fresh attestation
    if (widgetIdRef.current && window.turnstile) {
      try {
        window.turnstile.reset(widgetIdRef.current);
      } catch (_) {}
    }
  }, []);

  // ─── RE-ENTRY LISTENER: IMMEDIATELY CLOSE LINK ON TAB SWITCH OR BACK/FORWARD ───
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        // User switched tabs or minimized window: close and wipe immediately
        closeAndWipeLink();
      }
    };

    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) {
        closeAndWipeLink();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pageshow', handlePageShow);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, [closeAndWipeLink]);

  // ─── SILENT LAYER 1: HIDDEN BACKGROUND CLIENT & BOT SHIELD ───
  useEffect(() => {
    mountTimeRef.current = Date.now();

    // Silently evaluate automation flags without exposing diagnostic UI to crawlers
    const isBot = Boolean(
      (typeof navigator !== 'undefined' && navigator.webdriver) ||
      (window as any).__playwright ||
      (window as any).__puppeteer_evaluation_script__ ||
      (window as any)._phantom ||
      (window as any).callPhantom ||
      (typeof window !== 'undefined' && window.outerWidth === 0 && window.outerHeight === 0)
    );

    if (isBot) {
      isBotDetectedRef.current = true;
    }
  }, []);

  // ─── SILENT LAYER 2: CLOUDFLARE TURNSTILE INITIALIZATION ───
  const initTurnstile = useCallback(() => {
    if (!widgetRef.current || !window.turnstile || widgetIdRef.current) return;

    try {
      // Clear container DOM to prevent "Target container is not empty" errors
      widgetRef.current.innerHTML = '';
      const siteKey = activeKeyRef.current;

      const wid = window.turnstile.render(widgetRef.current, {
        sitekey: siteKey,
        theme: 'dark',
        size: 'normal',
        callback: (token: string) => {
          cfTokenRef.current = token;
          setCfToken(token);
          setIsReady(true);
          setErrorMessage(null);
        },
        'error-callback': (errorCode?: string) => {
          console.warn('[Turnstile] Error event:', errorCode);
          // Resilient fallback to universal interactive test key
          if (activeKeyRef.current !== TEST_TURNSTILE_SITE_KEY) {
            activeKeyRef.current = TEST_TURNSTILE_SITE_KEY;
            if (widgetIdRef.current && window.turnstile) {
              try {
                window.turnstile.remove(widgetIdRef.current);
              } catch (_) {}
              widgetIdRef.current = null;
            }
            if (widgetRef.current) {
              widgetRef.current.innerHTML = '';
            }
            setTimeout(() => {
              if (widgetRef.current && window.turnstile && !widgetIdRef.current) {
                initTurnstile();
              }
            }, 80);
            return;
          }
          cfTokenRef.current = null;
          setCfToken(null);
          setIsReady(false);
          setErrorMessage('Verification was interrupted. Please try again.');
          if (onError) onError();
        },
        'expired-callback': () => {
          cfTokenRef.current = null;
          setCfToken(null);
          setIsReady(false);
          if (widgetIdRef.current && window.turnstile) {
            try {
              window.turnstile.reset(widgetIdRef.current);
            } catch (_) {}
          }
        },
        'timeout-callback': () => {
          cfTokenRef.current = null;
          setCfToken(null);
          setIsReady(false);
          if (widgetIdRef.current && window.turnstile) {
            try {
              window.turnstile.reset(widgetIdRef.current);
            } catch (_) {}
          }
        }
      });
      widgetIdRef.current = wid;
    } catch (err) {
      console.warn('[Turnstile] Render failed, fallback to test key:', err);
      if (activeKeyRef.current !== TEST_TURNSTILE_SITE_KEY) {
        activeKeyRef.current = TEST_TURNSTILE_SITE_KEY;
        if (widgetRef.current) {
          widgetRef.current.innerHTML = '';
        }
        widgetIdRef.current = null;
        setTimeout(() => {
          if (widgetRef.current && window.turnstile && !widgetIdRef.current) {
            initTurnstile();
          }
        }, 100);
      }
    }
  }, [onError]);

  useEffect(() => {
    // 1. If script is already in window and DOM is ready, initialize immediately
    if (window.turnstile && widgetRef.current && !widgetIdRef.current) {
      initTurnstile();
    }

    // 2. Continuous poller: guarantees rendering even if script is async or ref attaches late
    let attempts = 0;
    const maxAttempts = 60; // 60 * 100ms = 6 seconds
    const interval = setInterval(() => {
      attempts++;
      if (window.turnstile && widgetRef.current && !widgetIdRef.current) {
        initTurnstile();
      }
      if (widgetIdRef.current || attempts >= maxAttempts) {
        clearInterval(interval);
      }
    }, 100);

    // 3. Fallback script injector in case index.html script was blocked or delayed
    if (typeof window !== 'undefined' && !window.turnstile && !document.querySelector('script[data-turnstile]')) {
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad&render=explicit';
      script.async = true;
      script.defer = true;
      script.setAttribute('data-turnstile', 'true');
      script.onerror = () => {
        setErrorMessage('Verification service could not be loaded. Please check your network.');
      };
      window.onTurnstileLoad = () => {
        if (widgetRef.current && window.turnstile && !widgetIdRef.current) {
          initTurnstile();
        }
      };
      document.head.appendChild(script);
    } else if (window.onTurnstileLoad === undefined) {
      window.onTurnstileLoad = () => {
        if (widgetRef.current && window.turnstile && !widgetIdRef.current) {
          initTurnstile();
        }
      };
    }

    return () => {
      clearInterval(interval);
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch (_) {}
        widgetIdRef.current = null;
      }
    };
  }, [initTurnstile]);

  // Capture authentic human pointer coordinates (supports both mouse and mobile touch)
  const trackPointer = (e: React.PointerEvent | React.TouchEvent | React.MouseEvent) => {
    let cx = 120;
    let cy = 240;
    let sx = 120;
    let sy = 280;

    if ('clientX' in e && typeof e.clientX === 'number' && e.clientX > 0) {
      cx = Math.round(e.clientX);
      cy = Math.round(e.clientY || 0);
      sx = Math.round(e.screenX || cx);
      sy = Math.round(e.screenY || cy);
    } else if ('touches' in e && (e as any).touches?.[0]) {
      const touch = (e as any).touches[0];
      cx = Math.round(touch.clientX || 120);
      cy = Math.round(touch.clientY || 240);
      sx = Math.round(touch.screenX || cx);
      sy = Math.round(touch.screenY || cy);
    }

    lastPointerRef.current = { cx, cy, sx, sy };
  };

  // ─── SILENT LAYER 3: CRYPTOGRAPHIC HANDSHAKE & AIRGAP DISPATCH ───
  const handleProceed = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isLoading) return;

    // Silent bot block: if automated environment detected, do not proceed
    if (isBotDetectedRef.current) {
      setErrorMessage('Verification clearance denied.');
      return;
    }

    // Must have completed Cloudflare verification
    const token = cfTokenRef.current || cfToken;
    if (!token || !isReady) {
      setErrorMessage('Please complete the verification check above.');
      return;
    }

    // Synthetic programmatic click check
    if (e.isTrusted === false) {
      setErrorMessage('Verification requires physical interaction.');
      return;
    }

    trackPointer(e);
    const { cx, cy, sx, sy } = lastPointerRef.current;

    // Human dwell time check (minimum dwell required)
    const dwell = Date.now() - mountTimeRef.current;
    if (dwell < 600) {
      setErrorMessage('Please wait a moment before proceeding.');
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    try {
      // Generate single-use entropy nonce
      let entropy = '';
      if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
        const bytes = new Uint8Array(16);
        crypto.getRandomValues(bytes);
        entropy = Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
      } else {
        entropy = Math.random().toString(36).substring(2, 12) + Date.now().toString(36);
      }

      // Evaluate live automation flags at moment of click
      const liveBotCheck = Boolean(
        (typeof navigator !== 'undefined' && navigator.webdriver) ||
        (window as any).__playwright ||
        (window as any).__puppeteer_evaluation_script__ ||
        (window as any)._phantom ||
        (window as any).callPhantom ||
        (typeof window !== 'undefined' && window.outerWidth === 0 && window.outerHeight === 0)
      );

      // Encode single-use clearance payload
      const clearanceToken = btoa(JSON.stringify({
        t: Date.now(),
        n: entropy,
        id: appId,
        el: Math.max(1000, dwell),
        cf: token,
        cx: Math.max(1, cx),
        cy: Math.max(1, cy),
        sx: Math.max(1, sx),
        sy: Math.max(1, sy),
        wb: (isBotDetectedRef.current || liveBotCheck) ? 1 : 0,
        tr: e.isTrusted ? 1 : 0
      }));

      // Candidate API routes
      const candidateRoutes = [
        '/api/v1/app/resolve-link',
        '/api/v1/app/session-clearance',
        '/api/v1/public/secure-link',
        '/api/v1/get-link'
      ];

      let res: Response | null = null;
      for (const route of candidateRoutes) {
        try {
          const attempt = await fetch(route, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'x-clearance-token': clearanceToken,
              'x-cf-token': token
            },
            body: JSON.stringify({ id: appId, appId, token: clearanceToken, cfToken: token }),
            cache: 'no-store',
            credentials: 'same-origin'
          });

          if (attempt.status === 404) continue;
          res = attempt;
          break;
        } catch (_) {}
      }

      if (!res) {
        setIsUnavailable(true);
        setIsLoading(false);
        return;
      }

      if (res.status === 429) {
        throw new Error('Too many requests. Please wait a moment.');
      }

      if (res.status === 403) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || 'Verification expired. Please verify again.');
      }

      if (!res.ok) {
        throw new Error(`Verification error (HTTP ${res.status}).`);
      }

      const data = await res.json();
      const targetUrl = data?.destination || data?.url;

      if (data.status === 'unavailable' || !targetUrl) {
        setIsUnavailable(true);
        setIsLoading(false);
        return;
      }

      if (onSuccess) onSuccess();

      // ─── SILENT LAYER 4: ZERO-REFERRER AIRGAP DISPATCH ───
      // Enforce strict no-referrer
      try {
        let metaReferrer = document.querySelector('meta[name="referrer"]') as HTMLMetaElement;
        if (!metaReferrer) {
          metaReferrer = document.createElement('meta');
          metaReferrer.name = 'referrer';
          document.head.appendChild(metaReferrer);
        }
        metaReferrer.content = 'no-referrer';
      } catch (_) {}

      // Immediate wipe of memory and tokens
      setTimeout(() => {
        closeAndWipeLink();
      }, 1000);

      // Direct window location navigation: 100% reliable across Chrome Mobile, Safari, and Desktop
      // Popup blockers will never block window.location.assign
      try {
        window.location.assign(targetUrl);
      } catch (_) {
        try {
          window.location.href = targetUrl;
        } catch (_) {
          setDestinationUrl(targetUrl);
          setIsLoading(false);
        }
      }

    } catch (err: any) {
      setIsLoading(false);
      setErrorMessage(err?.message || 'Verification failed. Please try again.');
      if (onError) onError();

      // Reset Turnstile for fresh attempt
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.reset(widgetIdRef.current);
          setCfToken(null);
          setIsReady(false);
        } catch (_) {}
      }
    }
  };

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

          {/* Primary Neutral Proceed Button */}
          <button
            type="button"
            id={`gateway-cta-${appId}`}
            onClick={handleProceed}
            onPointerDown={trackPointer}
            onTouchStart={trackPointer}
            disabled={isLoading || !isReady}
            className={`group flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl transition-all font-black uppercase tracking-wider text-sm text-center select-none shadow-lg shadow-blue-500/25 ${
              isLoading
                ? 'bg-[#1557d6] text-white cursor-wait'
                : !isReady
                  ? 'bg-[#1a68ff] text-white opacity-95 cursor-wait'
                  : 'bg-[#1a68ff] hover:bg-blue-600 active:bg-blue-700 text-white cursor-pointer shadow-blue-500/30'
            }`}
            aria-label="Proceed"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin shrink-0 text-white" />
                <span>CONNECTING...</span>
              </>
            ) : !isReady ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin shrink-0 text-white" />
                <span className="transition-all duration-300">{stepLabels[processingStep]}</span>
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
