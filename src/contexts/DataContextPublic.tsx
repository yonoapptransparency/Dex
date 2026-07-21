import React, { createContext, useContext, useState, useEffect } from 'react';
import { AppConfig, GlobalSettings, NewsItem, BlogPost, VideoItem } from '../types';
import { mockApps, mockSettings, mockNews, mockBlogs, mockVideos } from '../lib/staticData';
// Optional: import dynamic initial data from window if available
// const initialData = (typeof window !== 'undefined' && (window as any).__INITIAL_DATA__) || null;

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
  const [apps] = useState<AppConfig[]>(() => {
    try {
      if (typeof window !== 'undefined' && (window as any).__INITIAL_DATA__?.apps) return (window as any).__INITIAL_DATA__.apps;
    } catch (e) {}
    return mockApps;
  });
  
  const [settings] = useState<GlobalSettings>(() => {
    try {
      if (typeof window !== 'undefined' && (window as any).__INITIAL_DATA__?.settings) return (window as any).__INITIAL_DATA__.settings;
    } catch (e) {}
    return mockSettings;
  });
  
  const [news] = useState<NewsItem[]>(() => {
    try {
      if (typeof window !== 'undefined' && (window as any).__INITIAL_DATA__?.news) return (window as any).__INITIAL_DATA__.news;
    } catch (e) {}
    return mockNews;
  });
  
  const [blogs] = useState<BlogPost[]>(() => {
    try {
      if (typeof window !== 'undefined' && (window as any).__INITIAL_DATA__?.blogs) return (window as any).__INITIAL_DATA__.blogs;
    } catch (e) {}
    return mockBlogs;
  });
  
  const [videos] = useState<VideoItem[]>(() => {
    try {
      if (typeof window !== 'undefined' && (window as any).__INITIAL_DATA__?.videos) return (window as any).__INITIAL_DATA__.videos;
    } catch (e) {}
    return mockVideos;
  });

  const value: DataContextType = {
    apps,
    settings,
    news,
    blogs,
    videos,
    loading: false,
    loadedFromServer: true,
    appsSyncedWithServer: true,
    settingsSyncedWithServer: true,
    newsSyncedWithServer: true,

    // Mock implementations since admin functions don't exist here
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
    fetchApps: () => {},
    fetchSettings: () => {},
    fetchNews: () => {},
    fetchBlogs: () => {},
    fetchVideos: () => {},
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
