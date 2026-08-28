import React, { useState, useRef, useEffect } from 'react';
import { Loader2, AlertCircle, CheckCircle, ExternalLink, ArrowRight } from 'lucide-react';
import { Turnstile } from '@marsidev/react-turnstile';
import CryptoJS from 'crypto-js';

interface ClearanceButtonProps {
  appId: string;
  status?: 'Verified' | 'Caution' | 'Unsafe';
  variant?: 'default' | 'compact';
}


const isValidSiteKey = (key: string | undefined): boolean => {
  if (!key) return false;
  const clean = key.trim();
  if (clean === '' || clean.includes('PLACEHOLDER') || clean.includes('YOUR_API_KEY')) return false;
  // Turnstile keys don't have special characters like ! @ # $ % ^ & *
  if (/[#!@$%^&*()+=\[\]{};':"\\|,<>/?]/.test(clean)) return false;
  return true;
};

export default function ClearanceButton({ appId }: ClearanceButtonProps) {
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [statusText, setStatusText] = useState<string>('Connecting...');
  const [resolvedUrl, setResolvedUrl] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const rawSiteKey = import.meta.env.VITE_CF_TURNSTILE_SITE_KEY;
  const siteKey = isValidSiteKey(rawSiteKey) ? rawSiteKey : null;
  const clickedRef = useRef<boolean>(false);

  // Compute PoW in background
  const computePoW = async (nonce: string, difficulty: string): Promise<string> => {
    let solution = 0;
    while (true) {
      const input = nonce + solution;
      const hashHex = CryptoJS.SHA256(input).toString(CryptoJS.enc.Hex);
      if (hashHex.startsWith(difficulty)) {
        return solution.toString();
      }
      solution++;
      if (solution % 500 === 0) {
        await new Promise(resolve => setTimeout(resolve, 0));
      }
    }
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (clickedRef.current || isProcessing) return;
    
    clickedRef.current = true;
    setIsProcessing(true);
    setErrorMessage(null);
    
    try {
      setStatusText('Connecting...');
      
      // 1. Get Challenge
      const chalRes = await fetch(`/api/v1/_chal?appId=${encodeURIComponent(appId)}`);
      if (!chalRes.ok) throw new Error('Connection failed');
      const chalData = await chalRes.json();
      
      // 2. Solve PoW
      setStatusText('Fetching Data...');
      const solution = await computePoW(chalData.nonce, chalData.difficulty);
      
      // 3. Complete Challenge
      const procRes = await fetch('/api/v1/_proc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nonce: chalData.nonce,
          solution,
          appId
        })
      });
      if (!procRes.ok) throw new Error('Connection failed');
      const procData = await procRes.json();
      const clearanceToken = procData.token;
      
      setStatusText('Loading...');
      
      // 4. Fetch the real URL
      const res = await fetch('/api/v1/get-link', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ appId, turnstileToken, token: clearanceToken }),
        cache: 'no-store'
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error('Connection failed. Please retry.');
      }

      const result = await res.json();
      if (!result || !result.success || !result.url) {
        throw new Error('Data is temporarily unavailable.');
      }

      const targetUrl = result.url;
      setResolvedUrl(targetUrl);
      setStatusText('Success');
      setIsProcessing(false);

      // Automated Trigger
      try {
        const link = document.createElement('a');
        link.href = targetUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer dofollow';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (e) {
        console.warn('Auto-redirect blocked by browser pop-up blocker');
      }

    } catch (err: any) {
      console.warn('[GATEWAY] Connection error:', err?.message || err);
      setErrorMessage(err?.message || 'Initialization could not be completed.');
      setIsProcessing(false);
      clickedRef.current = false;
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto flex flex-col items-center gap-3">
      {resolvedUrl ? (
        <a
          href={resolvedUrl}
          target="_blank"
          rel="noopener noreferrer dofollow"
          id={`direct-proceed-btn-${appId}`}
          className="group relative flex items-center justify-center gap-2.5 w-full py-4 px-6 text-white rounded-2xl transition-all font-bold shadow-lg uppercase tracking-wider text-sm text-center select-none bg-blue-600 hover:bg-blue-500 active:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] animate-pulse"
        >
          <CheckCircle className="w-5 h-5 text-white shrink-0" />
          <span>Click Here to Proceed</span>
          <ExternalLink className="w-4 h-4 text-blue-100 shrink-0 ml-1" />
        </a>
      ) : (
        <button
          type="button"
          id={`clearance-btn-${appId}`}
          onClick={handleClick}
          disabled={isProcessing || (!!siteKey && turnstileToken === null)}
          className={`group relative flex items-center justify-center gap-2.5 w-full py-4 px-6 text-white rounded-2xl transition-all font-bold shadow-md uppercase tracking-wider text-sm text-center select-none cursor-pointer ${
            isProcessing
              ? 'bg-blue-700 cursor-wait scale-[0.99]'
              : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 hover:scale-[1.01] active:scale-[0.99]'
          }`}
        >
          {isProcessing ? (
            <>
              <Loader2 className="w-5 h-5 text-blue-100 animate-spin shrink-0" />
              <span>{statusText}</span>
            </>
          ) : (
            <>
              <span>Proceed</span>
              <ArrowRight className="w-4 h-4 text-blue-100 shrink-0 ml-1 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      )}

      {siteKey && !resolvedUrl && (
        <div className="w-full flex justify-center mb-2 opacity-50 hover:opacity-100 transition-opacity">
          <Turnstile 
            siteKey={siteKey} 
            onSuccess={(token) => setTurnstileToken(token)} 
            options={{ action: 'init', theme: 'auto' }}
          />
        </div>
      )}

      {errorMessage && !isProcessing && (
        <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-600 dark:text-rose-400 transition-all text-center">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{errorMessage} (Tap to retry)</span>
        </div>
      )}
    </div>
  );
}
