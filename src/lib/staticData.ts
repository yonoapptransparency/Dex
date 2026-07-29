// No secureStorage import to avoid Vercel build errors when secureStorage is stripped

export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

export interface GlobalSettings {
  site_title: string;
  meta_description: string;
  logo_url: string;
  favicon_url: string;
  helpline_whatsapp: string;
  helpline_telegram: string;
  support_email: string;
  disclaimer_text: string;
  disclaimer_heading?: string;
  ethics_discrimination_text: string;
  ethics_heading?: string;
  portal_heading?: string;
  important_notice_heading?: string;
  ticker_text: string;
  animations_enabled: boolean;
  seo_keywords?: string;
  about_content?: string;
  contact_content?: string;
  privacy_content?: string;
  terms_content?: string;
  responsibility_content?: string;
  report_removal_content?: string;
  important_notice?: string;
  categories: string[];
  banners: Banner[];
  last_updated?: string;
  secure_index_title?: string;
  secure_index_subtitle?: string;
  trending_searches?: string[];
  hero_title_text?: string;
  hero_title_color?: string;
  hero_title_style?: string;
  hero_title_animation?: string;
  hero_title_subtitle?: string;
  hero_title_visible?: boolean;
  ga_tracking_id?: string;
  quick_links?: Array<{ title: string; subtitle?: string; icon?: string; color?: string; url: string }>;
  social_links?: { facebook?: string; instagram?: string; twitter?: string; linkedin?: string; youtube?: string; };
  website_faqs?: Array<{ question: string; answer: string }>;
  developers?: Array<{ name: string; role: string; bio?: string; image_url?: string; github?: string; twitter?: string; avatar_url?: string; social?: any }>;
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  logo_url: string;
  description: string;
  ceo_name: string;
  ceo_description: string;
  seo_title: string;
  seo_description: string;
  seo_keywords?: string;
  category?: string;
  og_image_url?: string;
  canonical_url?: string;
  target_region?: string;
  content: string;
  published_at?: string;
  link: string;
  read_time?: string;
  author?: string;
  description_html?: string;
  date?: string;
  tags?: string[];
  related_app_id?: string;
}

export interface AppConfig {
  id: string;
  name: string;
  slug: string;
  seo_title?: string;
  seo_description?: string;
  seo_keywords?: string;
  og_image_url?: string;
  canonical_url?: string;
  target_region?: string;
  category: string;
  is_coming_soon?: boolean;
  publish_date?: string;
  version: string;
  file_size: string;
  developer: string;
  icon_url: string;
  screenshots: string[];
  description_html: string;
  red_box_msg: string;
  yellow_box_msg: string;
  idea_box_msg: string;
  safety_status: 'Verified' | 'Caution' | 'Unsafe';
  serial_number: number;
  is_featured: boolean;
  is_new: boolean;
  is_hot?: boolean;
  release_notes: string;
  rating: number;
  created_at: string;
  custom_admin_box_html?: string;
  custom_admin_box_heading?: string;
  features_html?: string;
  faqs?: {question: string; answer: string}[];
  link_configured?: boolean;
  
  video_url?: string;
  is_top_chart?: boolean;
  top_chart_category?: string;
  more_information_url?: string;
}

export interface Review {
  id: string;
  app_id: string;
  username: string;
  rating: number;
  comment: string;
  is_approved: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  content: string;
  author: string;
  cover_url: string;
  published_at: string;
  related_app_slug?: string;
  related_app_name?: string;
  seo_title?: string;
  seo_description?: string;
  seo_keywords?: string;
  canonical_url?: string;
  target_region?: string;
  description?: string;
  description_html?: string;
  date?: string;
  thumbnail_url?: string;
  publish_date?: string;
  read_time?: string;
  tags?: string[];
  created_at?: string;
}

export interface NewsUpdate {
  id: string;
  title: string;
  content_html: string;
  category: string;
  published_at: string;
}

export interface VideoItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  youtube_url: string;
  seo_title: string;
  seo_description: string;
  seo_keywords?: string;
  created_at: string;
}

export const mockApps: AppConfig[] = [
  {
    "og_image_url": "",
    "red_box_msg": "",
    "rating": 5,
    "developer": "Admin",
    "custom_admin_box_html": "",
    "is_coming_soon": false,
    "description_html": "<p>A new application.</p>",
    "yellow_box_msg": "",
    "seo_keywords": "",
    "seo_title": "Spin crush get today",
    "is_new": false,
    "idea_box_msg": "",
    "canonical_url": "",
    "custom_admin_box_heading": "",
    "target_region": "",
    "serial_number": 1,
    "category": "All Apps, Yono",
    "file_size": "Unknown",
    "seo_description": "",
    "faqs": [],
    "video_url": "",
    "slug": "spin-crush-",
    "name": "Spin crush ",
    "is_hot": false,
    "screenshots": [],
    "icon_url": "data:image/webp;base64,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",
    "features_html": "",
    "release_notes": "",
    "is_featured": false,
    "created_at": "2026-07-29T04:35:04.545Z",
    "safety_status": "Verified",
    "id": "ta1jtomt5",
    "version": "1.0"
  }
] as any[];

export const saveMockApps = (apps: AppConfig[]) => {
  try {
    localStorage.setItem('rummystore_apps', JSON.stringify(apps));
  } catch (e) {
    console.warn('saveMockApps storage failed:', e);
  }
  mockApps.splice(0, mockApps.length, ...apps);
};

export const mockSettings: GlobalSettings = {
  "site_title": "RummyDex",
  "meta_description": "",
  "logo_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784896838/ezgif-64180dd8ca74703b_rpungk.webp",
  "favicon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784896838/ezgif-64180dd8ca74703b_rpungk.webp",
  "helpline_whatsapp": "",
  "helpline_telegram": "",
  "support_email": "",
  "disclaimer_text": "",
  "ethics_discrimination_text": "",
  "ticker_text": "",
  "animations_enabled": true,
  "categories": [
    "All Apps",
    "Yono",
    "Card"
  ],
  "banners": [],
  "quick_links": [],
  "website_faqs": [],
  "developers": [],
  "social_links": {
    "twitter": "",
    "facebook": "",
    "linkedin": "",
    "youtube": "",
    "instagram": ""
  },
  "hero_title_subtitle": "COMPREHENSIVE SOCIAL CASUAL E-SPORTS METRICS & UNBIASED INTEGRITY REVIEWS",
  "hero_title_visible": false,
  "secure_index_subtitle": "Verified & Transparent App Marketplace",
  "last_updated": "2026-07-29T05:21:47.504Z",
  "hero_title_animation": "fade-in",
  "hero_title_color": "classic-dark",
  "trending_searches": [],
  "hero_title_style": "modern",
  "hero_title_text": "",
  "secure_index_title": "Secure Index"
} as any;

export const saveMockSettings = (settings: GlobalSettings) => {
  try {
    localStorage.setItem('rummystore_settings', JSON.stringify(settings));
  } catch (e) {
    console.warn('saveMockSettings storage failed:', e);
  }
  Object.assign(mockSettings, settings);
};

export const mockNews: NewsItem[] = [] as any[];

export const saveMockNews = (newsList: NewsItem[]) => {
  try {
    localStorage.setItem('rummystore_news', JSON.stringify(newsList));
  } catch (e) {
    console.warn('saveMockNews storage failed:', e);
  }
  mockNews.splice(0, mockNews.length, ...newsList);
};

export const mockBlogs: BlogPost[] = [] as any[];

export const saveMockBlogs = (blogs: BlogPost[]) => {
  try {
    localStorage.setItem('rummystore_blogs', JSON.stringify(blogs));
  } catch (e) {
    console.warn('saveMockBlogs storage failed:', e);
  }
  mockBlogs.splice(0, mockBlogs.length, ...blogs);
};

export const mockVideos: VideoItem[] = [] as any[];

export const saveMockVideos = (videos: VideoItem[]) => {
  try {
    localStorage.setItem('rummystore_videos', JSON.stringify(videos));
  } catch (e) {
    console.warn('saveMockVideos storage failed:', e);
  }
  mockVideos.splice(0, mockVideos.length, ...videos);
};
