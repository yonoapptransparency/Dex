import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { AppConfig, GlobalSettings, NewsItem, VideoItem } from '../typesPublic';
import { mockApps, mockSettings, mockNews, mockVideos } from '../lib/staticData';

interface DataContextType {
  apps: AppConfig[];
  settings: GlobalSettings;
  news: NewsItem[];
  videos: VideoItem[];
  loading: boolean;
  loadedFromServer: boolean;
  appsSyncedWithServer: boolean;
  settingsSyncedWithServer: boolean;
  newsSyncedWithServer: boolean;
  videosSyncedWithServer?: boolean;
  serverAppsFetched?: boolean;
  serverNewsFetched?: boolean;
  serverVideosFetched?: boolean;
  isConnected?: boolean;
  isLive?: boolean;
  quotaExceeded?: boolean;
  lastSyncTime?: string;
  refreshAll?: (silent?: boolean) => Promise<void>;
  testCloudConnection?: () => Promise<boolean>;

  saveSettings: (s: GlobalSettings) => Promise<void>;
  saveApp: (a: AppConfig, n?: boolean) => Promise<void>;
  deleteApp: (id: string) => Promise<void>;
  saveNews: (n: NewsItem) => Promise<void>;
  deleteNews: (id: string) => Promise<void>;
  saveVideo: (v: VideoItem) => Promise<void>;
  deleteVideo: (id: string) => Promise<void>;
  syncDataToGithub: () => Promise<{ success: boolean; log: string }>;
  fetchApps: () => void;
  fetchSettings: () => void;
  fetchNews: () => void;
  fetchVideos: () => void;
  updateAppDetail?: (app: AppConfig) => void;
}

const DataContext = createContext<DataContextType | null>(null);

const DATA_CACHE_KEY = 'yd_public_data_cache';
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour TTL

const getInitialCache = () => {
  try {
    if (typeof window !== 'undefined' && (window as any).__INITIAL_DATA__) return (window as any).__INITIAL_DATA__;
    if (typeof window !== 'undefined' && window.localStorage) {
      const cached = localStorage.getItem(DATA_CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (parsed && parsed._timestamp && (Date.now() - parsed._timestamp < CACHE_TTL_MS)) {
          return parsed.data || parsed;
        }
      }
    }
  } catch (e) {}
  return null;
};

// Helper to merge lists by ID and Slug so dynamic updates replace static items cleanly with zero duplicates
function mergeLists<T extends { id?: string; slug?: string }>(staticList: T[], dynamicList?: T[]): T[] {
  if (!Array.isArray(dynamicList) || dynamicList.length === 0) return staticList;
  
  const result: T[] = [];
  const handledKeys = new Set<string>();

  // 1. Process dynamic items first (authoritative live updates)
  dynamicList.forEach(dynamicItem => {
    if (!dynamicItem) return;
    const dynamicId = dynamicItem.id ? String(dynamicItem.id).trim() : '';
    const dynamicSlug = dynamicItem.slug ? String(dynamicItem.slug).toLowerCase().trim() : '';

    // Find any matching static item to preserve fields if needed
    const matchingStatic = staticList.find(s => 
      (dynamicId && s.id && String(s.id).trim() === dynamicId) ||
      (dynamicSlug && s.slug && String(s.slug).toLowerCase().trim() === dynamicSlug)
    );

    const merged = matchingStatic ? { ...matchingStatic, ...dynamicItem } : dynamicItem;
    result.push(merged);

    if (dynamicId) handledKeys.add(`id:${dynamicId}`);
    if (dynamicSlug) handledKeys.add(`slug:${dynamicSlug}`);
    if (matchingStatic) {
      if (matchingStatic.id) handledKeys.add(`id:${String(matchingStatic.id).trim()}`);
      if (matchingStatic.slug) handledKeys.add(`slug:${String(matchingStatic.slug).toLowerCase().trim()}`);
    }
  });

  // 2. Append non-replaced static items
  staticList.forEach(staticItem => {
    if (!staticItem) return;
    const staticId = staticItem.id ? String(staticItem.id).trim() : '';
    const staticSlug = staticItem.slug ? String(staticItem.slug).toLowerCase().trim() : '';

    const isHandled = 
      (staticId && handledKeys.has(`id:${staticId}`)) || 
      (staticSlug && handledKeys.has(`slug:${staticSlug}`));

    if (!isHandled) {
      result.push(staticItem);
      if (staticId) handledKeys.add(`id:${staticId}`);
      if (staticSlug) handledKeys.add(`slug:${staticSlug}`);
    }
  });

  return result;
}

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const initialCache = React.useMemo(() => getInitialCache(), []);

  const [apps, setApps] = useState<AppConfig[]>(() => {
    if (initialCache?.apps && Array.isArray(initialCache.apps) && initialCache.apps.length > 0) {
      return mergeLists(mockApps, initialCache.apps);
    }
    return mockApps;
  });
  
  const [settings, setSettings] = useState<GlobalSettings>(() => {
    if (initialCache?.settings?.site_title) return { ...mockSettings, ...initialCache.settings };
    return mockSettings;
  });
  
  const [news, setNews] = useState<NewsItem[]>(() => {
    if (initialCache?.news && Array.isArray(initialCache.news) && initialCache.news.length > 0) {
      return mergeLists(mockNews, initialCache.news);
    }
    return mockNews;
  });
  
  const [videos, setVideos] = useState<VideoItem[]>(() => {
    if (initialCache?.videos && Array.isArray(initialCache.videos) && initialCache.videos.length > 0) {
      return mergeLists(mockVideos, initialCache.videos);
    }
    return mockVideos;
  });

  const [loading, setLoading] = useState(false);
  const [loadedFromServer, setLoadedFromServer] = useState(false);
  const [isLive, setIsLive] = useState(false);

  // Fetch from server backup endpoint which is backed by live Firestore sync
  const fetchBackupData = useCallback(async () => {
    try {
      const res = await fetch('/api/v1/public/backup-data');
      if (res.ok) {
        const backup = await res.json();
        if (backup) {
          try {
            localStorage.setItem(DATA_CACHE_KEY, JSON.stringify({
              data: backup,
              _timestamp: Date.now()
            }));
          } catch (e) {}

          if (backup.apps && Array.isArray(backup.apps)) {
            setApps(mergeLists(mockApps, backup.apps));
          }
          if (backup.settings) {
            setSettings(prev => ({ ...prev, ...backup.settings }));
          }
          if (backup.news && Array.isArray(backup.news)) {
            setNews(mergeLists(mockNews, backup.news));
          }
          if (backup.videos && Array.isArray(backup.videos)) {
            setVideos(mergeLists(mockVideos, backup.videos));
          }
          setLoadedFromServer(true);
        }
      }
    } catch (e) {
      console.warn("Public backup data fetch failed:", e);
    }
  }, []);

  useEffect(() => {
    const hasInitialData = typeof window !== 'undefined' && !!(window as any).__INITIAL_DATA__;
    const isCrawler = typeof navigator !== 'undefined' && /googlebot|google-inspectiontool|bingbot|slurp|duckduckbot|baiduspider|yandexbot|crawler|spider/i.test(navigator.userAgent || '');

    if (hasInitialData) {
      setLoadedFromServer(true);
    }

    // Do NOT fire background XHR for search engine crawlers
    if (isCrawler) {
      return;
    }

    let timerId: any;
    let idleId: any;

    // Fetch fresh data in the background to ensure new apps and updates appear seamlessly
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      idleId = (window as any).requestIdleCallback(() => {
        fetchBackupData();
      }, { timeout: 3000 });
    } else {
      timerId = setTimeout(() => {
        fetchBackupData();
      }, 1500);
    }

    return () => {
      if (idleId && typeof window !== 'undefined' && 'cancelIdleCallback' in window) {
        (window as any).cancelIdleCallback(idleId);
      }
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [fetchBackupData]);

  const resolvedSettings = React.useMemo(() => {
    const defaultLogo = "https://res.cloudinary.com/diewalae4/image/upload/v1786624142/1000134293_sbicyb.png";
    const fav = settings?.favicon_url;
    const logo = settings?.logo_url;
    return {
      ...settings,
      favicon_url: (!fav || fav.includes('1000132678_1_ro1ftj') || fav.includes('ezgif') || fav.includes('1000134161_11zon_fgqzz6')) ? defaultLogo : fav,
      logo_url: (!logo || logo.includes('1000132678_1_ro1ftj') || logo.includes('ezgif') || logo.includes('1000134161_11zon_fgqzz6')) ? defaultLogo : logo
    };
  }, [settings]);

  const updateAppDetail = useCallback((updatedApp: AppConfig) => {
    if (!updatedApp || (!updatedApp.slug && !updatedApp.id)) return;
    const updateId = updatedApp.id ? String(updatedApp.id).trim() : '';
    const updateSlug = updatedApp.slug ? String(updatedApp.slug).toLowerCase().trim() : '';

    setApps(prevApps => {
      const index = prevApps.findIndex(a => 
        (updateId && a.id && String(a.id).trim() === updateId) ||
        (updateSlug && a.slug && String(a.slug).toLowerCase().trim() === updateSlug)
      );
      if (index >= 0) {
        const next = [...prevApps];
        next[index] = { ...next[index], ...updatedApp };
        return next;
      }
      return [...prevApps, updatedApp];
    });
  }, []);

  const value = React.useMemo<DataContextType>(() => ({
    apps,
    settings: resolvedSettings,
    news,
    videos,
    loading,
    loadedFromServer,
    serverAppsFetched: true,
    serverNewsFetched: true,
    serverVideosFetched: true,
    appsSyncedWithServer: true,
    settingsSyncedWithServer: true,
    newsSyncedWithServer: true,
    isLive,
    refreshAll: fetchBackupData,
    updateAppDetail,

    // Dummy admin handlers for public view interface compliance
    saveSettings: async () => {},
    saveApp: async () => {},
    deleteApp: async () => {},
    saveNews: async () => {},
    deleteNews: async () => {},
    saveVideo: async () => {},
    deleteVideo: async () => {},
    syncDataToGithub: async () => ({ success: false, log: 'Not available in public repo' }),
    fetchApps: fetchBackupData,
    fetchSettings: fetchBackupData,
    fetchNews: fetchBackupData,
    fetchVideos: fetchBackupData,
  }), [apps, resolvedSettings, news, videos, loading, loadedFromServer, isLive, fetchBackupData, updateAppDetail]);

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    return {
      apps: mockApps,
      settings: mockSettings,
      news: mockNews,
      videos: mockVideos,
      loading: false,
      loadedFromServer: true,
      appsSyncedWithServer: true,
      settingsSyncedWithServer: true,
      newsSyncedWithServer: true,
      videosSyncedWithServer: true,
      serverAppsFetched: true,
      serverNewsFetched: true,
      serverVideosFetched: true,
      isConnected: true,
      isLive: true,
      quotaExceeded: false,
      lastSyncTime: '',
      testCloudConnection: async () => true,
      refreshAll: async () => {},
      saveSettings: async () => {},
      saveApp: async () => {},
      deleteApp: async () => {},
      saveNews: async () => {},
      deleteNews: async () => {},
      saveVideo: async () => {},
      deleteVideo: async () => {},
      syncDataToGithub: async () => ({ success: false, log: '' }),
      fetchApps: () => {},
      fetchSettings: () => {},
      fetchNews: () => {},
      fetchVideos: () => {},
      updateAppDetail: () => {},
    };
  }
  return context;
};

