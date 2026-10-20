/**
 * Main Application Core
 * Coordinates global routes, SEO head tag helpers, persistent layouts, and custom dynamic components.
 */

import { DataProvider, useData } from './contexts/DataContextPublic';
import { useLocation, useParams, BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigationType } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Menu, Shield, ShieldCheck, Info, ArrowRight, X, LayoutGrid, Newspaper, Sparkles, Send, MoreHorizontal, Search, Video, Star, Facebook, Instagram, Twitter, Linkedin, Youtube, Users, Trash2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import React, { useState, useEffect, useLayoutEffect, useMemo, Suspense, ComponentType, LazyExoticComponent } from 'react';
import { lazyWithRetry } from './lib/lazyWithRetry';

// Error Boundary component for robust UI
interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode | ((reset: () => void) => React.ReactNode);
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

function PublicRouteErrorFallback({ error, onReset }: { error?: Error; onReset?: () => void }) {
  const isChunkError = error && (
    error.name === 'ChunkLoadError' ||
    /Failed to fetch dynamically imported module/i.test(error.message || '') ||
    /Loading chunk/i.test(error.message || '') ||
    /Importing a module script failed/i.test(error.message || '')
  );

  const handleRefresh = () => {
    if (onReset) onReset();
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center py-20 min-h-[40vh] text-center px-4 max-w-md mx-auto">
      <div className="w-14 h-14 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center mb-5 border border-red-500/20 shadow-sm">
        <Shield className="w-7 h-7" />
      </div>
      <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
        {isChunkError ? 'New App Version Available' : 'Unable to Load Section'}
      </h2>
      <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mb-6 leading-relaxed">
        {isChunkError
          ? 'A newer version of the website has just been deployed. Please reload to view the latest updates.'
          : 'An unexpected error occurred while displaying this page. You can refresh or return to the directory.'}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={handleRefresh}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-xs transition-all shadow-sm active:scale-95"
        >
          {isChunkError ? 'Reload Latest Version' : 'Refresh Page'}
        </button>
        <Link
          to="/"
          onClick={() => { if (onReset) onReset(); }}
          className="px-5 py-2.5 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 rounded-xl font-semibold text-xs transition-all"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error): ErrorBoundaryState { 
    return { hasError: true, error }; 
  }
  componentDidCatch(error: any, errorInfo: any) { 
    console.error("UI Render Error caught by boundary:", error, errorInfo); 
  }
  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    if (this.state.hasError && this.props.children !== prevProps.children) {
      this.setState({ hasError: false, error: undefined });
    }
  }
  reset = () => {
    this.setState({ hasError: false, error: undefined });
  };
  render() {
    if (this.state.hasError) {
      if (typeof this.props.fallback === 'function') {
        return this.props.fallback(this.reset);
      }
      return this.props.fallback || <PublicRouteErrorFallback error={this.state.error} onReset={this.reset} />;
    }
    return this.props.children;
  }
}

// Non-empty fallback shell that prevents blank white page flash during secondary route loading
function RouteLoadingFallback() {
  return (
    <div className="w-full min-h-[40vh] flex items-center justify-center p-8">
      <div className="w-8 h-8 rounded-full border-2 border-blue-600/20 border-t-blue-600 animate-spin" />
    </div>
  );
}

// Redirect helper for legacy or uncanonical routes directly to canonical /app/:slug
function LegacyRedirect() {
  const { slug } = useParams<{ slug: string }>();
  return <Navigate to={`/app/${slug || ''}`} replace />;
}

import Home from './pages/Home';
import AppDetails from './pages/AppDetails';
import GatewayPage from './pages/GatewayPage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import { preloadAppDetails } from './lib/preloadHelper';
export { AppDetails, preloadAppDetails };
const VideosPage = lazyWithRetry(() => import('./pages/VideosPage'));
const About = lazyWithRetry(() => import('./pages/About'));
const Contact = lazyWithRetry(() => import('./pages/Contact'));
const Privacy = lazyWithRetry(() => import('./pages/Privacy'));
const ReportRemoval = lazyWithRetry(() => import('./pages/ReportRemoval'));
const Terms = lazyWithRetry(() => import('./pages/Terms'));
const Responsibility = lazyWithRetry(() => import('./pages/Responsibility'));
const Notice = lazyWithRetry(() => import('./pages/Notice'));
const Ethics = lazyWithRetry(() => import('./pages/Ethics'));
const Disclaimer = lazyWithRetry(() => import('./pages/Disclaimer'));
const Developers = lazyWithRetry(() => import('./pages/Developers'));
const FaqPage = lazyWithRetry(() => import('./pages/FaqPage'));
const VideoDetailPage = lazyWithRetry(() => import('./pages/VideoDetailPage'));
const SafetyStatus = lazyWithRetry(() => import('./pages/SafetyStatus'));

const FallbackRouteMatcher = lazyWithRetry(() => import('./components/FallbackRouteMatcher'));

import { getAdminPath } from './lib/utils';
import Ticker from './components/Ticker';
import LanguageSelector from './components/LanguageSelector';
const ReportAppModal = lazyWithRetry(() => import('./components/ReportAppModal').then(m => ({ default: m.ReportAppModal })));

import PublicHeader from './components/public/PublicHeader';
import PublicFooter from './components/public/PublicFooter';
import PublicBackToTop from './components/public/PublicBackToTop';
import TopProgressBar from './components/public/TopProgressBar';
import { setupInteractionPreloader, startIdleRoutePreloader } from './lib/routePreloader';

import { useSEO } from './hooks/useSEO';
import { useFavicon } from './hooks/useFavicon';

function ScrollToTop() {
  const { pathname } = useLocation();
  const action = useNavigationType();

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

function NavigateWithSlug({ prefix }: { prefix: string }) {
  const { slug } = useParams();
  return <Navigate to={`${prefix}${slug}`} replace />;
}

function AppContent() {
  const { settings, apps = [], news = [], videos = [], quotaExceeded } = useData();
  const [reportApp, setReportApp] = useState<any>(null);
  const location = useLocation();
  const isAdminPath = false;

  // Use the extracted hooks
  useSEO(settings, apps, news, videos, isAdminPath);
  useFavicon(settings, apps);

  // Initialize fast user-interaction route preloading (prefetches only on touchstart/pointerover, 0ms idle bandwidth waste)
  useEffect(() => {
    const cleanup = setupInteractionPreloader();
    startIdleRoutePreloader();
    return () => {
      cleanup();
    };
  }, []);

  useEffect(() => {
    const handleOpenReport = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail && detail.app) {
        setReportApp(detail.app);
      }
    };
    window.addEventListener('open-report-modal', handleOpenReport);
    return () => {
      window.removeEventListener('open-report-modal', handleOpenReport);
    };
  }, []);

  const triggerHaptic = () => {
    if (window.navigator && window.navigator.vibrate) {
      setTimeout(() => {
        try {
          window.navigator.vibrate(10);
        } catch (e) {}
      }, 0);
    }
  };

  // Memoize static layout parts to prevent redundant re-renders
  const memoizedHeader = useMemo(() => <PublicHeader />, [location.pathname, settings]);
  const memoizedFooter = useMemo(() => <PublicFooter />, [settings]);

  useEffect(() => {
    document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [location.pathname, isAdminPath]);

  // __PUBLIC_BLOCK_START__
  return (
    <div className="flex flex-col min-h-screen" suppressHydrationWarning={true}>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:font-semibold focus:rounded-lg focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>
      <TopProgressBar />
      <ScrollToTop />
      {memoizedHeader}

      <main id="main-content" tabIndex={-1} suppressHydrationWarning={true} className="flex-1 w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-0 sm:py-3 pb-16 sm:pb-24 overflow-x-hidden relative focus:outline-none">
        <div className="w-full h-full" suppressHydrationWarning={true}>
          <ErrorBoundary>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/new-apps" element={<Home />} />
              <Route path="/category/:category" element={<Home />} />
              <Route path="/category/:category/*" element={<Home />} />
              <Route path="/categories" element={<Home />} />
              <Route path="/categories/:category" element={<Home />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/blogs" element={<Navigate to="/" replace />} />
              <Route path="/videos" element={<Suspense fallback={<RouteLoadingFallback />}><VideosPage /></Suspense>} />
              <Route path="/about" element={<Suspense fallback={<RouteLoadingFallback />}><About /></Suspense>} />
              <Route path="/developers" element={<Suspense fallback={<RouteLoadingFallback />}><Developers /></Suspense>} />
              <Route path="/contact" element={<Suspense fallback={<RouteLoadingFallback />}><Contact /></Suspense>} />
              <Route path="/privacy" element={<Suspense fallback={<RouteLoadingFallback />}><Privacy /></Suspense>} />
              <Route path="/report-removal" element={<Suspense fallback={<RouteLoadingFallback />}><ReportRemoval /></Suspense>} />
              <Route path="/terms" element={<Suspense fallback={<RouteLoadingFallback />}><Terms /></Suspense>} />
              <Route path="/responsibility" element={<Suspense fallback={<RouteLoadingFallback />}><Responsibility /></Suspense>} />
              <Route path="/notice" element={<Suspense fallback={<RouteLoadingFallback />}><Notice /></Suspense>} />
              <Route path="/ethics" element={<Suspense fallback={<RouteLoadingFallback />}><Ethics /></Suspense>} />
              <Route path="/disclaimer" element={<Suspense fallback={<RouteLoadingFallback />}><Disclaimer /></Suspense>} />
              <Route path="/faq" element={<Suspense fallback={<RouteLoadingFallback />}><FaqPage /></Suspense>} />
              <Route path="/faqs" element={<Suspense fallback={<RouteLoadingFallback />}><FaqPage /></Suspense>} />
              <Route path="/safety" element={<Suspense fallback={<RouteLoadingFallback />}><SafetyStatus /></Suspense>} />
              <Route path="/safety-status" element={<Suspense fallback={<RouteLoadingFallback />}><SafetyStatus /></Suspense>} />

              {/* Direct dynamic routes for better SEO and speed */}
              <Route path="/app/:slug" element={<AppDetails />} />
              <Route path="/app/:slug/*" element={<AppDetails />} />
              <Route path="/moreinfo/:slug" element={<GatewayPage />} />
              <Route path="/moreinfo/:slug/*" element={<GatewayPage />} />
              <Route path="/news/:slug" element={<NewsDetailPage />} />
              <Route path="/blogs/:slug" element={<Navigate to="/" replace />} />
              <Route path="/blog/:slug" element={<Navigate to="/" replace />} />
              <Route path="/videos/:slug" element={<Suspense fallback={<RouteLoadingFallback />}><VideoDetailPage /></Suspense>} />
              <Route path="/video/:slug" element={<Suspense fallback={<RouteLoadingFallback />}><VideoDetailPage /></Suspense>} />
              
              <Route path="/login" element={<Navigate to="/admin/login" replace />} />
              <Route path="/wp-admin" element={<Navigate to="/" replace />} />
              <Route path="/dashboard" element={<Navigate to="/" replace />} />
              <Route path="/panel" element={<Navigate to="/" replace />} />

              {/* THE MOST IMPORTANT ROUTE FOR GOOGLE INDEXING: ROOT SLUG MAPPING */}
              <Route path="/:slug" element={<Suspense fallback={<RouteLoadingFallback />}><FallbackRouteMatcher /></Suspense>} />
              
              <Route path="*" element={<Suspense fallback={<RouteLoadingFallback />}><FallbackRouteMatcher /></Suspense>} />
            </Routes>
          </ErrorBoundary>
        </div>
      </main>
      

      
      <Ticker />
      {memoizedFooter}
      <PublicBackToTop />

      {reportApp && (
        <Suspense fallback={null}>
          <ReportAppModal app={reportApp} onClose={() => setReportApp(null)} />
        </Suspense>
      )}
    </div>
  );
  // __PUBLIC_BLOCK_END__
}

function App() {
  return (
    <HelmetProvider>
      <DataProvider>
        <Router>
          <AppContent />
        </Router>
      </DataProvider>
    </HelmetProvider>
  );
}

export default App;
