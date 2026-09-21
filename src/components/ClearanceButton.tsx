import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Loader2, ArrowRight, Clock, AlertCircle } from 'lucide-react';

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
  const [fallbackUrl, setFallbackUrl] = useState<string | null>(null);

  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const mountTimeRef = useRef<number>(Date.now());
  const tokenResolverRef = useRef<((token: string) => void) | null>(null);
  const activeKeyRef = useRef<string>(getTurnstileSiteKey());

  const initTurnstile = useCallback(() => {
    if (!widgetRef.current || !window.turnstile || widgetIdRef.current) return;

    try {
      const siteKey = activeKeyRef.current;
      widgetIdRef.current = window.turnstile.render(widgetRef.current, {
        sitekey: siteKey,
        theme: 'auto',
        size: 'invisible',
        callback: (token: string) => {
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
          setCfToken(null);
          setIsReady(false);
          setErrorMessage('Verification check interrupted. Please tap Proceed to retry.');
          if (onError) onError();
        },
        'expired-callback': () => {
          setCfToken(null);
          setIsReady(false);
          if (widgetIdRef.current && window.turnstile) {
            try {
              window.turnstile.reset(widgetIdRef.current);
            } catch (_) {}
          }
        },
        'timeout-callback': () => {
          setCfToken(null);
          setIsReady(false);
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
    if (cfToken) return cfToken;

    // Trigger explicit execute if widget is rendered
    if (window.turnstile && widgetIdRef.current) {
      try {
        window.turnstile.execute(widgetIdRef.current);
      } catch (_) {}
    }

    return new Promise((resolve) => {
      const timeout = setTimeout(() => {
        tokenResolverRef.current = null;
        resolve(null);
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

    // Reject immediate synthetic triggers (< 150ms after mount)
    const elapsed = Date.now() - mountTimeRef.current;
    if (elapsed < 150) return;

    setIsProcessing(true);
    setErrorMessage(null);
    setIsUnavailable(false);
    setUnavailableMessage(null);
    setFallbackUrl(null);

    try {
      // 1. Obtain cryptographic Turnstile token
      let token = cfToken;
      if (!token) {
        token = await getOrFetchToken();
      }

      if (!token) {
        if (window.turnstile && widgetIdRef.current) {
          try {
            window.turnstile.reset(widgetIdRef.current);
          } catch (_) {}
        }
        throw new Error('Human clearance verification initializing. Please tap Proceed.');
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
        el: elapsed,
        cf: token,
        cx: Math.round(e.clientX || 0),
        cy: Math.round(e.clientY || 0),
        sx: Math.round(e.screenX || 0),
        sy: Math.round(e.screenY || 0)
      }));

      // 4. Request link resolution from backend
      const res = await fetch('/api/v1/app/resolve-link', {
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

      if (res.status === 429) {
        throw new Error('Too many verification attempts. Please wait a moment and try again.');
      }

      if (res.status === 403) {
        throw new Error('Clearance verification expired or invalid. Please tap Proceed to verify again.');
      }

      if (res.status === 404) {
        throw new Error('Requested resource not found or verification denied.');
      }

      if (!res.ok) {
        throw new Error(`Connection interrupted (HTTP ${res.status}). Please retry.`);
      }

      const data = await res.json();
      
      // If the link is undergoing administrative review or is empty
      if (data && (data.status === 'unavailable' || !data.url)) {
        setIsUnavailable(true);
        setUnavailableMessage(data?.message || 'The package link is currently not available or is undergoing administrative review. It will be updated soon by the admin.');
        return;
      }

      if (!data || !data.success || !data.url) {
        throw new Error(data?.error || 'Information temporarily unavailable.');
      }

      const targetUrl = data.url;

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

      // If popup blocker intervened, dispatch anchor click
      if (!opened) {
        try {
          const link = document.createElement('a');
          link.href = targetUrl;
          link.target = '_blank';
          link.rel = 'noreferrer noopener';
          link.referrerPolicy = 'no-referrer';
          link.style.display = 'none';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          opened = true;
        } catch (_) {
          opened = false;
        }
      }

      // Fallback direct link UI in case of strict mobile popup blockers
      setFallbackUrl(targetUrl);

      if (onSuccess) onSuccess();
    } catch (err: any) {
      setErrorMessage(err?.message || 'Verification was interrupted. Please tap Proceed to try again.');
      if (onError) onError();
    } finally {
      setIsProcessing(false);
      // Reset Turnstile token so subsequent clicks trigger fresh verification
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.reset(widgetIdRef.current);
          setCfToken(null);
          setIsReady(false);
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

          {/* Direct link fallback if browser blocked automatic dispatch */}
          {fallbackUrl && (
            <a
              href={fallbackUrl}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => setFallbackUrl(null)}
              className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-medium text-center animate-fade-in"
            >
              Click Here to Proceed (Direct Link)
            </a>
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
