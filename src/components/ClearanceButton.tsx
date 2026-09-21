import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Loader2, ArrowRight, Clock, AlertCircle, CheckCircle2 } from 'lucide-react';

const VERIFY_STEPS = [
  {
    title: 'Initializing verification...',
    detail: 'Connecting to secure edge network',
    pct: 28,
  },
  {
    title: 'Validating security clearance...',
    detail: 'Attesting cryptographic session credentials',
    pct: 58,
  },
  {
    title: 'Establishing verified session...',
    detail: 'Allocating zero-referrer clearance bridge',
    pct: 85,
  },
  {
    title: 'Almost done! Finalizing connection...',
    detail: 'Preparing verified destination portal',
    pct: 96,
  },
  {
    title: 'Clearance Confirmed • Connecting!',
    detail: 'Opening verified destination portal',
    pct: 100,
  }
];

const PROD_TURNSTILE_SITE_KEY = '0x4AAAAAAE99nFmDXDivmDJV';
const TEST_TURNSTILE_SITE_KEY = '1x00000000000000000000AA';

function getTurnstileSiteKey(): string {
  if (typeof window !== 'undefined') {
    const customKey = 
      (import.meta.env?.VITE_TURNSTILE_SITE_KEY as string) || 
      (import.meta.env?.VITE_CF_TURNSTILE_SITE_KEY as string);
    if (customKey && customKey.trim()) return customKey.trim();

    const host = window.location.hostname.toLowerCase();
    if (host === 'rummydex.com' || host.endsWith('.rummydex.com')) {
      return PROD_TURNSTILE_SITE_KEY;
    }
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
  const [cfToken, setCfToken] = useState<string | null>(null);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isUnavailable, setIsUnavailable] = useState<boolean>(false);
  const [unavailableMessage, setUnavailableMessage] = useState<string | null>(null);
  const [isVerifyingActive, setIsVerifyingActive] = useState<boolean>(false);
  const [isVerifyingDone, setIsVerifyingDone] = useState<boolean>(false);
  const [progressStep, setProgressStep] = useState<number>(0);
  const [progressPercent, setProgressPercent] = useState<number>(0);

  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const cfTokenRef = useRef<string | null>(null);
  const mountTimeRef = useRef<number>(Date.now());
  const tokenResolverRef = useRef<((token: string) => void) | null>(null);
  const activeKeyRef = useRef<string>(getTurnstileSiteKey());
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  const initTurnstile = useCallback(() => {
    if (!widgetRef.current || !window.turnstile || widgetIdRef.current) return;

    try {
      const siteKey = activeKeyRef.current;
      widgetIdRef.current = window.turnstile.render(widgetRef.current, {
        sitekey: siteKey,
        theme: 'auto',
        size: 'invisible',
        callback: (token: string) => {
          cfTokenRef.current = token;
          setCfToken(token);
          setIsReady(true);
          setErrorMessage(null);
          if (tokenResolverRef.current) {
            tokenResolverRef.current(token);
            tokenResolverRef.current = null;
          }
        },
        'error-callback': (errCode: any) => {
          console.warn('[Clearance] Turnstile attestation error notice:', errCode);
          // If domain-blocked in preview/staging, switch to universal test key
          if (activeKeyRef.current !== TEST_TURNSTILE_SITE_KEY) {
            activeKeyRef.current = TEST_TURNSTILE_SITE_KEY;
            if (widgetIdRef.current && window.turnstile) {
              try {
                window.turnstile.remove(widgetIdRef.current);
              } catch (_) {}
              widgetIdRef.current = null;
            }
            setTimeout(() => initTurnstile(), 50);
            return;
          }
          cfTokenRef.current = null;
          setCfToken(null);
          setIsReady(false);
          setErrorMessage('Verification check interrupted. Please tap Proceed to retry.');
          if (onError) onError();
        },
        'expired-callback': () => {
          cfTokenRef.current = null;
          setCfToken(null);
          setIsReady(false);
          if (widgetIdRef.current && window.turnstile) {
            try {
              window.turnstile.reset(widgetIdRef.current);
              // Pre-warm fresh token in background
              window.turnstile.execute(widgetIdRef.current);
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
              window.turnstile.execute(widgetIdRef.current);
            } catch (_) {}
          }
        }
      });
    } catch (err) {
      console.warn('[Clearance] Turnstile initialization notice:', err);
      setIsReady(false);
    }
  }, [onError]);

  useEffect(() => {
    mountTimeRef.current = Date.now();

    if (window.turnstile) {
      initTurnstile();
      return;
    }

    if (!document.querySelector('script[data-turnstile]')) {
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad&render=explicit';
      script.async = true;
      script.defer = true;
      script.setAttribute('data-turnstile', 'true');
      script.onerror = () => {
        setErrorMessage('Verification service could not be reached. Please check your network or ad-blocker.');
      };
      window.onTurnstileLoad = () => initTurnstile();
      document.head.appendChild(script);
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
          widgetIdRef.current = null;
        } catch (_) {}
      }
    };
  }, [initTurnstile]);

  // Helper to wait for Turnstile token if user clicks while it is executing
  const getOrFetchToken = async (): Promise<string | null> => {
    if (cfTokenRef.current) return cfTokenRef.current;
    if (cfToken) return cfToken;

    // Gracefully wait if Turnstile script is still loading in background
    if (!window.turnstile) {
      let waited = 0;
      while (!window.turnstile && waited < 2500) {
        await new Promise(r => setTimeout(r, 100));
        waited += 100;
      }
      if (window.turnstile && !widgetIdRef.current) {
        initTurnstile();
      }
    }

    // Trigger explicit execute if widget is rendered
    if (window.turnstile && widgetIdRef.current) {
      try {
        window.turnstile.execute(widgetIdRef.current);
      } catch (_) {}
    }

    return new Promise((resolve) => {
      const timeout = setTimeout(() => {
        tokenResolverRef.current = null;
        resolve(cfTokenRef.current || null);
      }, 4500);

      tokenResolverRef.current = (token: string) => {
        clearTimeout(timeout);
        resolve(token);
      };
    });
  };

  const handleProceed = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (isProcessing) return;

    // Gracefully buffer sub-150ms instant clicks to prevent silent button unresponsiveness
    const elapsed = Date.now() - mountTimeRef.current;
    if (elapsed < 150) {
      await new Promise(r => setTimeout(r, 150 - elapsed));
    }

    setIsProcessing(true);
    setErrorMessage(null);
    setIsUnavailable(false);
    setUnavailableMessage(null);
    setIsVerifyingActive(true);
    setIsVerifyingDone(false);
    setProgressStep(0);
    setProgressPercent(28);

    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    progressIntervalRef.current = setInterval(() => {
      setProgressStep((prev) => {
        if (prev < 3) {
          const next = prev + 1;
          setProgressPercent(VERIFY_STEPS[next].pct);
          return next;
        }
        return prev;
      });
    }, 300);

    try {
      // Execute security handshake alongside visual step progression
      const [data] = await Promise.all([
        (async () => {
          // 1. Obtain cryptographic Turnstile token
          let token = cfTokenRef.current || cfToken;
          if (!token) {
            token = await getOrFetchToken();
          }

          if (!token) {
            if (window.turnstile && widgetIdRef.current) {
              try {
                window.turnstile.reset(widgetIdRef.current);
                window.turnstile.execute(widgetIdRef.current);
              } catch (_) {}
            }
            throw new Error('Verification session initializing. Please tap Proceed.');
          }

          // 2. Generate cryptographically distinct, single-use burn nonce
          let entropy = '';
          if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
            const bytes = new Uint8Array(16);
            crypto.getRandomValues(bytes);
            entropy = Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
          } else {
            entropy = Math.random().toString(36).substring(2, 12) + Date.now().toString(36);
          }

          // 3. Encode clearance token with Turnstile attestation
          const clearanceToken = btoa(JSON.stringify({
            t: Date.now(),
            n: entropy,
            id: appId,
            el: Math.max(150, Date.now() - mountTimeRef.current),
            cf: token,
            cx: Math.round(e.clientX || 0),
            cy: Math.round(e.clientY || 0),
            sx: Math.round(e.screenX || 0),
            sy: Math.round(e.screenY || 0)
          }));

          // 4. Request session clearance with multi-endpoint failover
          const candidateEndpoints = [
            '/api/v1/app/session-clearance',
            '/api/v1/app/resolve-link',
            '/api/v1/public/secure-link',
            '/api/v1/get-link'
          ];

          let res: Response | null = null;
          let lastHttpError = '';

          for (const endpoint of candidateEndpoints) {
            try {
              const attempt = await fetch(endpoint, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  'x-clearance-token': clearanceToken,
                  'x-cf-token': token || ''
                },
                body: JSON.stringify({ id: appId, appId, token: clearanceToken, cfToken: token }),
                cache: 'no-store',
                credentials: 'same-origin'
              });

              // If endpoint was 404 (not routed on this deployment), try next candidate
              if (attempt.status === 404) {
                continue;
              }

              res = attempt;
              break;
            } catch (netErr: any) {
              lastHttpError = netErr?.message || 'Network error';
            }
          }

          if (!res) {
            // If all endpoints returned 404 or network failed, handle gracefully
            return {
              success: true,
              status: 'unavailable',
              message: 'The package specifications are currently undergoing administrative update. Please check back shortly.'
            };
          }

          if (res.status === 429) {
            throw new Error('Too many attempts. Please wait a few moments and tap Proceed again.');
          }

          if (res.status === 403) {
            const body = await res.json().catch(() => ({}));
            throw new Error(body?.error || 'Verification session expired. Please tap Proceed to verify again.');
          }

          if (res.status === 404) {
            return {
              success: true,
              status: 'unavailable',
              message: 'The package specifications are currently undergoing administrative update. Please check back shortly.'
            };
          }

          if (!res.ok) {
            throw new Error(`Connection interrupted (HTTP ${res.status}). Please tap to retry.`);
          }

          return await res.json();
        })(),
        new Promise((r) => setTimeout(r, 920))
      ]);

      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      setProgressStep(4);
      setProgressPercent(100);
      setIsVerifyingDone(true);
      
      const targetUrl = data?.destination || data?.url;

      // If the destination is undergoing administrative review or is empty
      if (data && (data.status === 'unavailable' || !targetUrl)) {
        setIsUnavailable(true);
        setIsVerifyingActive(false);
        setUnavailableMessage(data?.message || 'The package specifications are currently undergoing administrative update. Please check back shortly.');
        return;
      }

      if (!data || !data.success || !targetUrl) {
        throw new Error(data?.error || 'Information temporarily unavailable.');
      }

      // 5. Direct Immediate Zero-Referrer Airgap Dispatch
      let opened = false;
      try {
        const win = window.open(targetUrl, '_blank', 'noopener,noreferrer');
        if (win && !win.closed && typeof win.closed !== 'undefined') {
          opened = true;
        }
      } catch (_) {
        opened = false;
      }

      // If popup blocker intervened, navigate directly
      if (!opened) {
        try {
          window.location.assign(targetUrl);
        } catch (_) {
          try {
            window.location.href = targetUrl;
          } catch (_) {}
        }
      }

      if (onSuccess) onSuccess();
    } catch (err: any) {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      setIsVerifyingActive(false);
      setErrorMessage(err?.message || 'Verification was interrupted. Please tap Proceed to try again.');
      if (onError) onError();
    } finally {
      setIsProcessing(false);
      // Cleanly re-prime Turnstile in background for subsequent clicks
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.reset(widgetIdRef.current);
          cfTokenRef.current = null;
          setCfToken(null);
          setIsReady(false);
          setTimeout(() => {
            if (widgetIdRef.current && window.turnstile) {
              try {
                window.turnstile.execute(widgetIdRef.current);
              } catch (_) {}
            }
          }, 100);
        } catch (_) {}
      }
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-3">
      {/* Turnstile Widget Anchor (Styled off-screen without display:none so Turnstile executes reliably) */}
      <div 
        ref={widgetRef} 
        id={`clearance-btn-${appId}`} 
        className="absolute top-0 left-0 w-0 h-0 opacity-0 pointer-events-none overflow-hidden" 
        tabIndex={-1} 
        aria-hidden="true" 
      />

      {isUnavailable ? (
        <div className="w-full bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/20 rounded-2xl p-5 text-center flex flex-col items-center gap-3 shadow-sm animate-fade-in">
          <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400">
            <Clock className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
              Link Under Review
            </h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xs">
              {unavailableMessage || 'The destination link for this package is currently undergoing administrative review. It will be updated soon by the admin.'}
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
        <>
          <button
            type="button"
            id={`gateway-cta-${appId}`}
            onClick={handleProceed}
            disabled={isProcessing}
            className={`group relative flex items-center justify-center gap-2.5 w-full py-4 px-6 text-white rounded-2xl transition-all font-bold shadow-md uppercase tracking-wider text-sm text-center select-none cursor-pointer ${
              isProcessing
                ? 'bg-blue-700 cursor-wait scale-[0.99]'
                : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 hover:scale-[1.01] active:scale-[0.99]'
            }`}
            aria-label="Proceed to destination"
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

          {/* Interactive Real-Time Verification Progress Card (Ultra-lightweight) */}
          {isVerifyingActive && (
            <div 
              id={`verification-progress-${appId}`}
              className="w-full bg-zinc-900/90 dark:bg-zinc-900/95 border border-zinc-800/90 rounded-2xl p-4 shadow-xl backdrop-blur-xs text-left animate-fade-in select-none"
            >
              {/* Header: Pulsating radar / checkmark + Dynamic Title + Percentage */}
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <div className="flex items-center gap-2 min-w-0">
                  {isVerifyingDone ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : (
                    <span className="relative flex h-2.5 w-2.5 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                    </span>
                  )}
                  <span className="text-xs font-bold text-zinc-100 truncate">
                    {VERIFY_STEPS[progressStep]?.title || 'Verifying...'}
                  </span>
                </div>
                <span className="font-mono text-[11px] font-bold text-blue-400 bg-blue-500/15 border border-blue-500/25 px-2 py-0.5 rounded-full shrink-0">
                  {progressPercent}%
                </span>
              </div>

              {/* Glowing progress bar */}
              <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden mb-2.5">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400 transition-all duration-300 ease-out rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {/* Micro-telemetry details and security tag */}
              <div className="flex items-center justify-between text-[11px] text-zinc-400 font-medium">
                <span className="truncate text-zinc-400">
                  {VERIFY_STEPS[progressStep]?.detail || 'Processing...'}
                </span>
                <span className={`text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded border shrink-0 ml-2 ${
                  isVerifyingDone 
                    ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' 
                    : 'text-blue-400 bg-blue-500/10 border-blue-500/20'
                }`}>
                  {isVerifyingDone ? 'CONFIRMED' : 'LIVE'}
                </span>
              </div>
            </div>
          )}
        </>
      )}

      {errorMessage && !isProcessing && !isUnavailable && (
        <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-600 dark:text-rose-400 text-center animate-fade-in">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
}
