import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { AppConfig, GlobalSettings, NewsItem, BlogPost, VideoItem } from '../typesPublic';
import { mockApps, mockSettings, mockNews, mockBlogs, mockVideos } from '../lib/staticData';
import { db, isFirebaseReal } from '../lib/firebase';
import { doc, onSnapshot, getDoc } from 'firebase/firestore';

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

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [apps, setApps] = useState<AppConfig[]>(() => {
    try {
      if (typeof window !== 'undefined' && (window as any).__INITIAL_DATA__?.apps?.length > 0) return (window as any).__INITIAL_DATA__.apps;
    } catch (e) {}
    return mockApps;
  });
  
  const [settings, setSettings] = useState<GlobalSettings>(() => {
    try {
      if (typeof window !== 'undefined' && (window as any).__INITIAL_DATA__?.settings?.site_title) return (window as any).__INITIAL_DATA__.settings;
    } catch (e) {}
    return mockSettings;
  });
  
  const [news, setNews] = useState<NewsItem[]>(() => {
    try {
      if (typeof window !== 'undefined' && (window as any).__INITIAL_DATA__?.news) return (window as any).__INITIAL_DATA__.news;
    } catch (e) {}
    return mockNews;
  });
  
  const [blogs, setBlogs] = useState<BlogPost[]>(() => {
    try {
      if (typeof window !== 'undefined' && (window as any).__INITIAL_DATA__?.blogs) return (window as any).__INITIAL_DATA__.blogs;
    } catch (e) {}
    return mockBlogs;
  });
  
  const [videos, setVideos] = useState<VideoItem[]>(() => {
    try {
      if (typeof window !== 'undefined' && (window as any).__INITIAL_DATA__?.videos) return (window as any).__INITIAL_DATA__.videos;
    } catch (e) {}
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
          if (backup.apps && Array.isArray(backup.apps) && backup.apps.length > 0) setApps(backup.apps);
          if (backup.settings && backup.settings.site_title) setSettings(backup.settings);
          if (backup.news && Array.isArray(backup.news)) setNews(backup.news);
          if (backup.blogs && Array.isArray(backup.blogs)) setBlogs(backup.blogs);
          if (backup.videos && Array.isArray(backup.videos)) setVideos(backup.videos);
          setLoadedFromServer(true);
        }
      }
    } catch (e) {
      console.warn("Public backup data fetch failed:", e);
    }
  }, []);

  useEffect(() => {
    fetchBackupData();
  }, [fetchBackupData]);

  // Live Firestore subscriptions if client SDK is initialized
  useEffect(() => {
    if (!isFirebaseReal || !db) return;

    const unsubs = [
      onSnapshot(doc(db, 'store_data', 'apps_meta'), async (snap) => {
        if (!snap.exists()) return;
        try {
          const numChunks = snap.data().numChunks || 1;
          const chunkPromises = [];
          for (let i = 0; i < numChunks; i++) {
            chunkPromises.push(
              getDoc(doc(db, 'store_data', `apps_chunk_${i}`))
                .then(cSnap => cSnap.exists() && cSnap.data().items ? cSnap.data().items : [])
                .catch(() => [])
            );
          }
          const chunkResults = await Promise.all(chunkPromises);
          const loadedApps: any[] = [];
          chunkResults.forEach(items => loadedApps.push(...items));
          if (loadedApps.length > 0) {
            setApps(loadedApps);
            setIsLive(true);
          }
        } catch (err) {
          console.warn("Public apps snapshot error:", err);
        }
      }),
      onSnapshot(doc(db, 'store_data', 'public_settings'), (snap) => {
        if (snap.exists()) {
          setSettings(snap.data() as GlobalSettings);
        }
      }),
      onSnapshot(doc(db, 'store_data', 'news'), (snap) => {
        if (snap.exists() && snap.data().items) {
          setNews(snap.data().items);
        }
      }),
      onSnapshot(doc(db, 'store_data', 'blogs'), (snap) => {
        if (snap.exists() && snap.data().items) {
          setBlogs(snap.data().items);
        }
      }),
      onSnapshot(doc(db, 'store_data', 'videos'), (snap) => {
        if (snap.exists() && snap.data().items) {
          setVideos(snap.data().items);
        }
      })
    ];

    return () => unsubs.forEach(u => u());
  }, []);

  const value: DataContextType = {
    apps,
    settings,
    news,
    blogs,
    videos,
    loading,
    loadedFromServer,
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
  };

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

