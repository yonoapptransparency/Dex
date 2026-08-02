import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { AppConfig, GlobalSettings, NewsItem, BlogPost, VideoItem } from '../typesPublic';
import { mockApps, mockSettings, mockNews, mockBlogs, mockVideos } from '../lib/staticData';

interface DataContextType {
  apps: AppConfig[];
  settings: GlobalSettings;
  news: NewsItem[];
  blogs: BlogPost[];
  videos: VideoItem[];
  loading: boolean;
  loadedFromServer: boolean;
  appsSyncedWithServer: boolean;
  settingsSyncedWithServer: boolean;
  newsSyncedWithServer: boolean;
  blogsSyncedWithServer?: boolean;
  videosSyncedWithServer?: boolean;
  serverAppsFetched?: boolean;
  serverNewsFetched?: boolean;
  serverBlogsFetched?: boolean;
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
  saveBlog: (b: BlogPost) => Promise<void>;
  deleteBlog: (id: string) => Promise<void>;
  saveVideo: (v: VideoItem) => Promise<void>;
  deleteVideo: (id: string) => Promise<void>;
  syncDataToGithub: () => Promise<{ success: boolean; log: string }>;
  fetchApps: () => void;
  fetchSettings: () => void;
  fetchNews: () => void;
  fetchBlogs: () => void;
  fetchVideos: () => void;
}

const DataContext = createContext<DataContextType | null>(null);

const getInitialCache = () => {
  try {
    if (typeof window !== 'undefined' && (window as any).__INITIAL_DATA__) return (window as any).__INITIAL_DATA__;
    if (typeof window !== 'undefined' && window.localStorage) {
      const cached = localStorage.getItem('yd_public_data_cache');
      if (cached) return JSON.parse(cached);
    }
  } catch (e) {}
  return null;
};

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const initialCache = React.useMemo(() => getInitialCache(), []);

  const [apps, setApps] = useState<AppConfig[]>(() => {
    if (initialCache?.apps && Array.isArray(initialCache.apps) && initialCache.apps.length > 0) return initialCache.apps;
    return mockApps;
  });
  
  const [settings, setSettings] = useState<GlobalSettings>(() => {
    if (initialCache?.settings?.site_title) return initialCache.settings;
    return mockSettings;
  });
  
  const [news, setNews] = useState<NewsItem[]>(() => {
    if (initialCache?.news && Array.isArray(initialCache.news) && initialCache.news.length > 0) return initialCache.news;
    return mockNews;
  });
  
  const [blogs, setBlogs] = useState<BlogPost[]>(() => {
    if (initialCache?.blogs && Array.isArray(initialCache.blogs) && initialCache.blogs.length > 0) return initialCache.blogs;
    return mockBlogs;
  });
  
  const [videos, setVideos] = useState<VideoItem[]>(() => {
    if (initialCache?.videos && Array.isArray(initialCache.videos) && initialCache.videos.length > 0) return initialCache.videos;
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
            localStorage.setItem('yd_public_data_cache', JSON.stringify(backup));
          } catch (e) {}

          if (backup.apps && Array.isArray(backup.apps)) {
            setApps(backup.apps);
          } else {
            setApps([]);
          }
          if (backup.settings) {
            setSettings(prev => ({ ...prev, ...backup.settings }));
          }
          if (backup.news && Array.isArray(backup.news)) {
            setNews(backup.news);
          } else {
            setNews([]);
          }
          if (backup.blogs && Array.isArray(backup.blogs)) {
            setBlogs(backup.blogs);
          } else {
            setBlogs([]);
          }
          if (backup.videos && Array.isArray(backup.videos)) {
            setVideos(backup.videos);
          } else {
            setVideos([]);
          }
          setLoadedFromServer(true);
        }
      }
    } catch (e) {
      console.warn("Public backup data fetch failed:", e);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).__INITIAL_DATA__) {
      setLoadedFromServer(true);
    }

    let timerId: any;
    let idleId: any;

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
    const defaultLogo = "https://res.cloudinary.com/diewalae4/image/upload/v1785648485/ezgif-88d07abd3ef5753f_yz8ytg.webp";
    const fav = settings?.favicon_url;
    const logo = settings?.logo_url;
    return {
      ...settings,
      favicon_url: (!fav || fav.includes("ezgif-64180dd8ca74703b")) ? defaultLogo : fav,
      logo_url: (!logo || logo.includes("ezgif-64180dd8ca74703b")) ? defaultLogo : logo
    };
  }, [settings]);

  const value = React.useMemo<DataContextType>(() => ({
    apps,
    settings: resolvedSettings,
    news,
    blogs,
    videos,
    loading,
    loadedFromServer,
    serverAppsFetched: true,
    serverNewsFetched: true,
    serverBlogsFetched: true,
    serverVideosFetched: true,
    appsSyncedWithServer: true,
    settingsSyncedWithServer: true,
    newsSyncedWithServer: true,
    isLive,
    refreshAll: fetchBackupData,

    // Dummy admin handlers for public view interface compliance
    saveSettings: async () => {},
    saveApp: async () => {},
    deleteApp: async () => {},
    saveNews: async () => {},
    deleteNews: async () => {},
    saveBlog: async () => {},
    deleteBlog: async () => {},
    saveVideo: async () => {},
    deleteVideo: async () => {},
    syncDataToGithub: async () => ({ success: false, log: 'Not available in public repo' }),
    fetchApps: fetchBackupData,
    fetchSettings: fetchBackupData,
    fetchNews: fetchBackupData,
    fetchBlogs: fetchBackupData,
    fetchVideos: fetchBackupData,
  }), [apps, settings, news, blogs, videos, loading, loadedFromServer, isLive, fetchBackupData]);

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

