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
    "canonical_url": "",
    "is_new": false,
    "created_at": "2026-05-19T12:43:59.040Z",
    "slug": "spin-crush-",
    "og_image_url": "",
    "version": "2.0.6",
    "screenshots": [],
    "rating": 5,
    "faqs": [],
    "developer": "Bingo ",
    "video_url": "",
    "serial_number": 2,
    "safety_status": "Verified",
    "yellow_box_msg": "",
    "seo_title": "",
    "id": "q82dbbwh4",
    "file_size": "45",
    "red_box_msg": "",
    "description_html": "<p>A new application.</p>",
    "custom_admin_box_heading": "",
    "name": "SPIN CRUSH ",
    "is_featured": false,
    "is_top_chart": true,
    "link_configured": true,
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877361/.trashed-1787468954-download_12_j8vn7j_wge7co.webp",
    "release_notes": "Version 2.0.6 // System Update Log\nInterface Optimization: Refined the visual rendering pipeline for smoother navigation across mobile screen-time sessions.\nAlgorithmic Adjustments: Optimized data-parsing logic for faster loading of strategy modules and performance teardowns.\nStability Patch: Resolved minor UI caching discrepancies to ensure a seamless \"lag-free\" browsing experience.\nFeature Expansion: Integrated a new \"Performance Metric Dashboard\" for detailed game-logic breakdowns.",
    "features_html": "",
    "is_hot": false,
    "idea_box_msg": "",
    "target_region": "",
    "seo_keywords": "",
    "is_coming_soon": true,
    "category": "Yono, All app",
    "custom_admin_box_html": "",
    "seo_description": ""
  },
  {
    "is_featured": false,
    "name": "YONO ARCADE",
    "link_configured": true,
    "release_notes": "",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877459/download_14_krbwrv.webp",
    "features_html": "",
    "custom_admin_box_html": "",
    "category": "Yono, All app",
    "is_coming_soon": true,
    "seo_keywords": "",
    "target_region": "",
    "idea_box_msg": "",
    "is_hot": false,
    "seo_description": "",
    "is_new": false,
    "canonical_url": "",
    "screenshots": [],
    "version": "1.20.1",
    "og_image_url": "",
    "slug": "yono-arcade",
    "created_at": "2026-05-19T19:04:26.373Z",
    "developer": "Arcade ",
    "rating": 3.4,
    "faqs": [],
    "safety_status": "Verified",
    "serial_number": 3,
    "video_url": "",
    "seo_title": "",
    "yellow_box_msg": "",
    "file_size": "56",
    "id": "31og4l26i",
    "description_html": "<p>A new application.</p>",
    "custom_admin_box_heading": "",
    "red_box_msg": ""
  },
  {
    "version": "1.20.1",
    "screenshots": [],
    "created_at": "2026-05-19T19:23:07.133Z",
    "slug": "jaiho-91",
    "og_image_url": "",
    "is_new": false,
    "canonical_url": "",
    "video_url": "",
    "serial_number": 3,
    "safety_status": "Verified",
    "developer": "Jaiho",
    "rating": 4.8,
    "faqs": [],
    "seo_title": "",
    "yellow_box_msg": "",
    "red_box_msg": "",
    "custom_admin_box_heading": "",
    "description_html": "<p>A new application.</p>",
    "file_size": "56",
    "id": "s5u553ymi",
    "link_configured": true,
    "name": "JAIHO 91",
    "is_featured": false,
    "features_html": "",
    "release_notes": "",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877512/download_16_fznggx.webp",
    "seo_description": "",
    "is_coming_soon": true,
    "custom_admin_box_html": "",
    "category": "Yono, All app",
    "idea_box_msg": "",
    "is_hot": false,
    "target_region": "",
    "seo_keywords": ""
  },
  {
    "seo_description": "",
    "seo_keywords": "",
    "is_hot": false,
    "idea_box_msg": "",
    "target_region": "",
    "custom_admin_box_html": "",
    "is_coming_soon": true,
    "category": "Yono, All app",
    "link_configured": false,
    "is_featured": false,
    "name": "BINGO 101",
    "features_html": "",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877567/download_18_lljdaa.webp",
    "release_notes": "",
    "yellow_box_msg": "",
    "seo_title": "",
    "description_html": "<p>A new application.</p>",
    "custom_admin_box_heading": "",
    "red_box_msg": "",
    "id": "awus3qajs",
    "file_size": "71",
    "slug": "bingo-101",
    "og_image_url": "",
    "created_at": "2026-05-20T03:09:33.880Z",
    "screenshots": [],
    "version": "2.5V",
    "canonical_url": "",
    "is_new": false,
    "safety_status": "Verified",
    "serial_number": 5,
    "video_url": "",
    "faqs": [],
    "rating": 3.6,
    "developer": "Bingo"
  },
  {
    "custom_admin_box_html": "",
    "category": "Yono, All app",
    "is_coming_soon": true,
    "seo_keywords": "",
    "is_hot": false,
    "idea_box_msg": "",
    "target_region": "",
    "seo_description": "",
    "release_notes": "",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877617/download_19_w2sxhp.webp",
    "features_html": "",
    "is_featured": false,
    "name": "OK RUMMY",
    "link_configured": false,
    "file_size": "67",
    "id": "0uiuuhdrj",
    "custom_admin_box_heading": "",
    "description_html": "<p>A new application.</p>",
    "red_box_msg": "",
    "seo_title": "",
    "yellow_box_msg": "",
    "developer": "Bingo ",
    "rating": 3,
    "faqs": [],
    "safety_status": "Verified",
    "serial_number": 6,
    "video_url": "",
    "is_new": false,
    "canonical_url": "",
    "screenshots": [],
    "version": "8.3.06.",
    "og_image_url": "",
    "slug": "ok-rummy",
    "created_at": "2026-05-20T03:50:33.674Z"
  },
  {
    "target_region": "",
    "idea_box_msg": "",
    "is_hot": false,
    "seo_keywords": "",
    "is_coming_soon": true,
    "custom_admin_box_html": "",
    "category": "Yono, All app",
    "seo_description": "",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877660/download_20_x106v3.webp",
    "release_notes": "",
    "features_html": "",
    "name": "JAIHO SLOTS",
    "is_featured": false,
    "link_configured": false,
    "id": "4yt0f4yd0",
    "file_size": "70",
    "red_box_msg": "",
    "custom_admin_box_heading": "",
    "description_html": "<p>A new application.</p>",
    "yellow_box_msg": "",
    "seo_title": "",
    "rating": 4.9,
    "faqs": [],
    "developer": "Jaiho",
    "video_url": "",
    "serial_number": 7,
    "safety_status": "Verified",
    "canonical_url": "",
    "is_new": false,
    "created_at": "2026-05-20T03:53:24.482Z",
    "og_image_url": "",
    "slug": "jaiho-slots",
    "version": "4.3",
    "screenshots": []
  },
  {
    "is_coming_soon": true,
    "category": "Yono, All app",
    "custom_admin_box_html": "",
    "seo_keywords": "",
    "is_hot": false,
    "idea_box_msg": "",
    "target_region": "",
    "seo_description": "",
    "release_notes": "",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877706/download_6_mj83ms.webp",
    "features_html": "",
    "is_featured": false,
    "name": "BOSS RUMMY",
    "link_configured": false,
    "file_size": "54",
    "id": "9r044fyi0",
    "description_html": "<p>A new application.</p>",
    "custom_admin_box_heading": "",
    "red_box_msg": "",
    "seo_title": "",
    "yellow_box_msg": "",
    "developer": "Arcade ",
    "faqs": [],
    "rating": 4.1,
    "serial_number": 8,
    "safety_status": "Verified",
    "video_url": "",
    "is_new": false,
    "canonical_url": "",
    "screenshots": [],
    "version": "2.5V",
    "og_image_url": "",
    "slug": "boss-rummy",
    "created_at": "2026-05-20T03:56:42.075Z"
  },
  {
    "canonical_url": "",
    "is_new": false,
    "created_at": "2026-05-20T04:01:04.611Z",
    "slug": "rummy-91",
    "og_image_url": "",
    "version": "2.0.6",
    "screenshots": [],
    "rating": 4.9,
    "faqs": [],
    "developer": "Addi",
    "video_url": "",
    "safety_status": "Verified",
    "serial_number": 9,
    "yellow_box_msg": "",
    "seo_title": "",
    "id": "5b7fj0cq7",
    "file_size": "79",
    "red_box_msg": "",
    "custom_admin_box_heading": "",
    "description_html": "<p>A new application.</p>",
    "name": "RUMMY 91",
    "is_featured": false,
    "link_configured": false,
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877812/download_22_vgi4h1.webp",
    "release_notes": "",
    "features_html": "",
    "idea_box_msg": "",
    "target_region": "",
    "is_hot": false,
    "seo_keywords": "",
    "category": "Yono, All app",
    "is_coming_soon": true,
    "custom_admin_box_html": "",
    "seo_description": ""
  },
  {
    "is_new": false,
    "canonical_url": "",
    "version": "5.0",
    "screenshots": [],
    "created_at": "2026-05-20T06:58:27.643Z",
    "og_image_url": "",
    "slug": "gogo-rummy-",
    "developer": "Sk varba",
    "rating": 3.9,
    "faqs": [],
    "video_url": "",
    "safety_status": "Verified",
    "serial_number": 10,
    "seo_title": "",
    "yellow_box_msg": "",
    "file_size": "65",
    "id": "ieam3hkbq",
    "red_box_msg": "",
    "custom_admin_box_heading": "",
    "description_html": "<p>A new application.</p>",
    "name": "GOGO RUMMY ",
    "is_featured": false,
    "link_configured": false,
    "release_notes": "",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877895/download_23_xv95ei.webp",
    "features_html": "",
    "custom_admin_box_html": "",
    "is_coming_soon": true,
    "category": "Yono, All app",
    "target_region": "",
    "idea_box_msg": "",
    "is_hot": false,
    "seo_keywords": "",
    "seo_description": ""
  },
  {
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877977/download_25_tdxkii.webp",
    "release_notes": "",
    "features_html": "",
    "name": "CLUB INR",
    "is_featured": false,
    "link_configured": false,
    "target_region": "",
    "is_hot": false,
    "idea_box_msg": "",
    "seo_keywords": "",
    "category": "Yono, All app",
    "is_coming_soon": true,
    "custom_admin_box_html": "",
    "seo_description": "",
    "faqs": [],
    "rating": 4.6,
    "developer": "S.A vejay",
    "video_url": "",
    "serial_number": 11,
    "safety_status": "Verified",
    "canonical_url": "",
    "is_new": false,
    "created_at": "2026-05-20T08:02:40.971Z",
    "og_image_url": "",
    "slug": "club-inr",
    "version": "1.8",
    "screenshots": [],
    "id": "5j5b7qbrw",
    "file_size": "75",
    "red_box_msg": "",
    "custom_admin_box_heading": "",
    "description_html": "<p>A new application.</p>",
    "yellow_box_msg": "",
    "seo_title": ""
  },
  {
    "seo_title": "",
    "yellow_box_msg": "",
    "file_size": "61",
    "id": "f4ktp4dfi",
    "description_html": "<p>A new application.</p>",
    "custom_admin_box_heading": "",
    "red_box_msg": "",
    "is_new": false,
    "canonical_url": "",
    "screenshots": [],
    "version": "1.8",
    "og_image_url": "",
    "slug": "abc-rummy-",
    "created_at": "2026-05-26T07:04:36.330Z",
    "developer": "Addi",
    "rating": 3.9,
    "faqs": [],
    "safety_status": "Verified",
    "serial_number": 12,
    "video_url": "",
    "is_coming_soon": true,
    "category": "Yono, All app",
    "custom_admin_box_html": "",
    "seo_keywords": "",
    "target_region": "",
    "is_hot": false,
    "idea_box_msg": "",
    "seo_description": "",
    "is_featured": false,
    "name": "ABC Rummy ",
    "link_configured": false,
    "release_notes": "",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784878050/download_26_awtrna.webp",
    "features_html": ""
  },
  {
    "seo_description": "",
    "is_coming_soon": true,
    "category": "Yono, All app",
    "custom_admin_box_html": "",
    "seo_keywords": "",
    "is_hot": false,
    "idea_box_msg": "",
    "target_region": "",
    "link_configured": false,
    "is_featured": false,
    "name": "777.Rummy",
    "features_html": "",
    "release_notes": "",
    "icon_url": "data:image/webp;base64,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",
    "seo_title": "",
    "yellow_box_msg": "",
    "custom_admin_box_heading": "",
    "description_html": "<p>A new application.</p>",
    "red_box_msg": "",
    "file_size": "54",
    "id": "4w1yxs6mm",
    "screenshots": [],
    "version": "1.6",
    "og_image_url": "",
    "slug": "777-rummy",
    "created_at": "2026-05-26T07:09:01.068Z",
    "is_new": false,
    "canonical_url": "",
    "serial_number": 13,
    "safety_status": "Verified",
    "video_url": "",
    "developer": "AB Arora",
    "faqs": [],
    "rating": 5
  },
  {
    "id": "w1sttlwv7",
    "file_size": "59",
    "description_html": "<p>A new application.</p>",
    "custom_admin_box_heading": "",
    "red_box_msg": "",
    "yellow_box_msg": "",
    "seo_title": "",
    "rating": 4,
    "faqs": [],
    "developer": "AZ ever",
    "safety_status": "Verified",
    "serial_number": 14,
    "video_url": "",
    "canonical_url": "",
    "is_new": false,
    "slug": "ever-777",
    "og_image_url": "",
    "created_at": "2026-05-26T07:12:55.821Z",
    "screenshots": [],
    "version": "1.8",
    "seo_keywords": "",
    "idea_box_msg": "",
    "target_region": "",
    "is_hot": false,
    "is_coming_soon": true,
    "category": "Yono",
    "custom_admin_box_html": "",
    "seo_description": "",
    "icon_url": "data:image/webp;base64,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",
    "release_notes": "",
    "features_html": "",
    "is_featured": false,
    "name": "EVER 777",
    "link_configured": false
  },
  {
    "canonical_url": "",
    "is_new": false,
    "slug": "game-rummy",
    "og_image_url": "",
    "created_at": "2026-05-26T07:16:08.600Z",
    "screenshots": [],
    "version": "2.0",
    "faqs": [],
    "rating": 4,
    "developer": "Raj dav",
    "safety_status": "Verified",
    "serial_number": 15,
    "video_url": "",
    "yellow_box_msg": "",
    "seo_title": "",
    "id": "dp2lcn2ae",
    "file_size": "75",
    "description_html": "<p>A new application.</p>",
    "custom_admin_box_heading": "",
    "red_box_msg": "",
    "is_featured": false,
    "name": "Game Rummy",
    "link_configured": false,
    "icon_url": "data:image/webp;base64,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",
    "release_notes": "",
    "features_html": "",
    "seo_keywords": "",
    "target_region": "",
    "idea_box_msg": "",
    "is_hot": false,
    "is_coming_soon": true,
    "category": "Yono",
    "custom_admin_box_html": "",
    "seo_description": ""
  },
  {
    "link_configured": false,
    "is_featured": false,
    "name": "Hi Rummy ",
    "features_html": "",
    "icon_url": "data:image/webp;base64,UklGRrISAABXRUJQVlA4WAoAAAAgAAAAvQAAvQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggxBAAABBKAJ0BKr4AvgA+tVChS6cktSopMs0yoBaJYgb45QeAJqYxR6hBKjp5b8To8WD72zmp2aPSDuFvNZ5bWpp+kBKuXob2QvcD5FcMfzHW1/f+wntDmAw5WUAtZfdvQt/yPrM/8Xmx/bv96ZlrNQXSlM3A3c6cSdMbPD2KQDmRgM41UcFvdtJTDtuNCCPz9rUiU8b/yqaCHNw5BDz9eCfitIIi8tjVeV1fhI50MYbfABfW8DhgZ0PWoeUjOZfzYaZPXmuXkpWr3fG1wc+CtWGbcmu066nX/jYH0xiEB7vkZOOo+Go6Eguek42aBA+NuUHZG1nY2kpcVqpZoEarqk9FzMnORExXLe0HVIlVf6BlD+nfhN0M/154h3dui2l8hz13jVIVT89gfqQtSt6oDfwIpRmNd0wRKsOoOnPizRuI0Yyjsq7OVNOFFNxmnVpaTPktd6yhuL9ETydcQUhGR/9B0t34hdV34WgNO56hlBi67yNO11x1kD5aRGjEDdTuOAIjk4y63/v6kEH7sWqlpwNrRdvQMw9yZrHrUjmtC2j9oyI4q5BLNfHXuZFpJWG0prMqunjJ42qY2ZJhSLKpWaG7AzuwLCeBjaBVkD6FamgeJymHg1Aq/mKqLGimYrvcURCk/qaxXH6EC6KORgoU37bV35fVYZTXmV5sJKz1p5a0sUuvl2wGT9wikjjYJN79tKFxKPAGxbRvnySwjOknIJGhVvFX8680CWLRwy7ym+wNajfGSxTrIGy64scgs5sbFrVBYTJiKET7I7ObQFXq9kJISavbpqlXOXxMuAAA/vx3QkvhfUN1cZOtMFQMHsTYNZD0CzZBwiwL/84IxBrwurRFxkRXb2asoSmEpx9AJJ0a+pAw1CBXm+9WmmPzGztWUdwK8vcIKRXx7sAju48h4VHg9Y7/WZ0WN55qJ+HUE0exR1KEF+AXrJl9luwwBAmlkkgb+eEM+TAzjihi40xc3A2Jw6bSpeRoUqOLNLX0h/R6Bqv3mgqLJ7CaGTS3Olb4+PMC3F5gcm2O9pc2fBIlEzcjVk8e/ROMnd96mFD1tP8J4/83krL1s5Rumh4mxQl9naLYqRgcrJCRK+5zLg0abczZOGoXYySAnvgOrBa+EiRrGrHznBoYlHq5fImTJ7uHZx/wRqnMvpYSUvULewIPejN6rg4Bp02nhEmdm+H1/EqYJ6Qmm9utFe10vvBCpjXaDhYjc+dvdEaWm+k7tYWDe/Zi2A3GfW+mAcSis68CsetZCBTHnUlzboWIoGJKuV4m6XDy05Ts9mPhS6kfFoZyKwU5VxZUS52+4vC7h5RJclw+7Nodzn/YRuqmhqFxv2A+XvL5kgKl436kgxg60w83vuf7ACppWqMIc7wJ66E9baXcePCYWqMWkaOa2wBsmN2ewRcpWMLrxv6AY6qFa2JKHfKeSKFhw7Sa1B81ZU1SUXVaIHrj79qSVROBcfhqe/CLa4/HadqVpKExdfeGlgeRXDrWmUzXwCm8VKfAGY0snqyuZynDJZVkyZEKhRcd2cFzyP985u60ifmLv1DVfUlOODNG4CvQtTxFznQehLfcNW1Nvty9YqRhsL3+4D+98QLEAWMOn6h/4fPUbkbDEv27oSoXajXAJo1HcrxEeYQfwFmcAhgS1sZK++vIE4XVgoLJJubclm4mT2Neve70ms+xeZb1ml5fY6ZyjkM4lWnOilQoya4teF8Qc3O4Wz7mWW3nzaP1CQGum4XJmPmoGRhigKaJjybsfNx6tPt5JewjEUDpVj6GnFx759Ckn81jCJrLpKvH8FmomESJFqNjtIGSPM8d8yOA9C/KHHm/Sgi26blPWidXJMn7juZXia319xWcch0ggTF5UpwFGkgN9iDR+/6XNhYoQZ1W2eFyf9aaLb0ltfTXQ5a0YZNb79z0SIF2oD7PpaqN3NM9SnS5YBRNLU65YaGp/R5G4BBN2sv+cOUmNHbk/cCg7j2qrCKHisS0cdvKEoyOWk3fOV0FiU0iTy8upo7ggvf/MxQUKJbNNxYm6fnee3ZQ7Fz2Lh7ZpSDz6Gil5Lym9rghFOpkQEdtmSEERehbzZOAjvyAD0i6G2SBSj1fAeqpgXkx4PViuKfQiEPrhCJRfRnghCOje3H2WGI01mSei/p520AreKLB6hG43CTnbbsbN9YYr2356sq0+2HiSL+5iQiCdSec5cB2bFfj0FSIGhmjRamWZ8zNEXGaJkTNZmJcP9pOPbzCVnf3snvveS3NMO8XXAhIWwhmxq2Qgur/4zNh0ic+8nmIW4ludKci0DpvXdqaQb5p+B1/0AegutulQTCNxqYoCel+XfvyqDpeuNU6XsSPPk0nMZ5jnbuqAMWfNSu+/GmlMxEt/XkhKlds7nNDwUR0RgC7Mi+XM5hUCjYyls8qeikvLjqdZi2fImZclqUhjhXIJmnEiHktv0aC3AzeJgp2cyZ+/ajKUKC0J90RuJlG895iwfWFzJeT3cu76JxCjPBywhmeGR1Rrd51y4tBCIPiQZNanEewO3zxuR5bMf1wxPVUQ4oEgejG2/jrvjA5A89q+4IyLBh6V6lvGb2rgLPthaQRHbddlkN2rjJQ/hlJfN0KqkbPnaecmyZOS3EMvfpHTZ90bE1hKbGCEan2tLZB/slo7yj5pJ6OSN4AgYKU/pFAv/xWj/gkRyVg7B/eoD1YONWOKFZMIs5z5dsjkKHcwGphnbelfjdcI0XidD+rI6zx7YdLYWiaUaDRzkKfbXlML9PvEZRV1F04isB6DNJh9jai5w2jSCKUKcXbyzm+oH3kqzgo7caGrE+u8SYFwtG9oyCnU7dm3plIrsHhQWFWBSilyGl5Mc/BVUeUYV6X81JLGx6HeFak3Fr+ls4P7rWh0mIxKhA3wr5363qZLgNlIUyIvYq+L37Go2Ufef3aq61J8Vl4Jmi2eR4/5pNqYnV+7D3uOlfl+ho3MTx8fletnm8NKqSE33TkgX4cahj9ekBS3znAycJEEVlbd3O+O6cyTNIlYD8RgKk49zTLRgVtSS9tAqEHl2wvwEXfiJh6/kLJIdvpYySW9aO3kMJxzpZuB30VgTqugnsgZ66fPabVA3UruAaow5UDjkqGWEXXl9yPZjwsfbKEEu01rWDQBSM+lMP/bTsUFn2K7yJjbbTukLcYdUkn3a3oWOyCrWSkZW05RRdPkFoHgb7R8W5JA4c3RTbcQWu3EgFQiDlYS7br0g6QB7VulewX471Fj+etH7UGmojwg2XzRjbZ0CtqrFxyBxjG3uM0kvxEFmnAm2WG6e80P7CnRlyrgz7pwIR/Ley2+WGdq0xdKi9RpCZpwv4kP/2Nb5QzrShHSP5rX8Ur912IstmTG1J/tASF+dWDR6D5yneP4eN3MqRrbr8d47WukTNPjrgEH9NzAJYjjDvCZKeg+AxS8/3m1FAnbzPPjrtoVsvztRZ6FGkNrbMyAYKvCeM9wSqWdbI5S5OeJ/ZT27+pOfTo2HBSQ8R6P2/zkQPey58sun6wHZPeSOj7aBBiaX82/GtjLiKHeRC7RL8rC4jfBNHf0ImS7RoBgdzIKpsQw05ukMmu4CLMKYPhK/Zz2lNmAOAkTfOc1fl2QE0nUfgVArw5QvSAZOD5MCl4g4eZArdrJX/pUzdUMEI7arrbK2+ABPeHKHLFzSAD/ki5eZC+jDSLuVt9ut1gR2YpViU3vkcJ91HccDUynjoUcuJE+QbEaGeovSW4bwmwvtWNBV//vrgVN1vCJuCtfbAEWGUrBcdZqdsmsabxodKOCQNNnaRBQIQTZ7h67FTA/+MMs6MYX6KSachhM/KJHQdNFfve4QBdPWtyGJ2i7HtpK+RxZb+8SELgbJ+S3ECtrkJ0ClRuk2FnQ7EtEnoWZCRVmE5tHkiOLKtN93Fid4iEWYaTI7LwryMH5M/oIp0ZRdq+55oD3KCkPFp1x8GCvd1enogXbE9oov0x4PAiZ5zkH5FmRFYgcHXkgV6gsoF7k8HHsf1r5kfvv7jHEzjFxmIoD7MHzdro5VBptCK+1zdpN7d9g3v1JUw5Lvd/eGEOm9uGXYJdzOTzYCiwAPmA/2iV4VDES8giwbXrn+g+CklaZpR4X81Nwh0+j0+OQLVdP4kQlQcx6FMc2aKNuerhqj47cAY2r1Gqi0GzH8vip8YCvWSmdT2BsO7NMHSzSVEEQcbEFaP6DLT74T8fDgRbQeH1CrPJA7CGWmFIe7aOeoceOlMH8wLi4Hz0lqB7j+0qRrTo012ybDVzGkOt65FiVywIzAwQRyKlpcZmbBuI3QXBWu2iC1CRRPZBjpIsTNaJDXCj/wid+8UScwNmehnJuUC/cm4PPS4CXWoywyShJy3wfOTigFyDIbehubkEQifWaYygvoBOQYMR7QgnRleGjmDM/pO0slB1fqTgicm1o3oAmYq2rae3WBekvFfKFSWlqW0jPwpKj9dzhF2hKCgAsxHCoXdeXf5WfhKxtPu+X2O/4GhR7ZTKvagCUC2SLQKXKJfUKF11YicYNbG4ONeIAuL1H107uTbccbBLYZ2dUlyAcIokiPAwNwXaE0suTKKOvCj2KXZMl1lCHugA8yjYei1pUg8Hnr4ElIdix+xnZE4f/otVB1/hTSWKdkYyvP+PH7m6xjAk9lZlavbGfMicakBoR1Om2aEmpn/xEjYJDr7lc2ThWjp/S5CNco66rIv3QI7VVSL7mSPlG40HGjY18dqBNOdnyfWJt7b5MSbXOSSHhp2289yu66EG9o5Yx8MWtxAJwErjTABecEDuRMJ5aroIB+Z2Y/q2yQkcR35gSNMkvFgs/eP59p6I7PThCVY1ItUwE3cnQlF8ngrISzP48eyVt6XnF0/86540vyK2P6/UkIrXeOTbjXp8cZEgCXGxHXK+IvJd/o1a5pJFFmpjkjQcTy4S2wp4TkgW9dgRdGXfAR5H+60u4P61XwQ6bXemT3MSaFis/wlxSch6Gg7vM/AD48fOZlvY7TIPlAzQQftxcezGK6WSKJ7N7c/Iim+rMrokE95NYv2kmj7rL8cyqhgH2LWDU+CmkrPKzGS4Hj4c42cdzFuqtj8DYUju1/3g7P2wNHLgbMlOzg+iiReemeGVvCpQUwis4fW+ftHtbDx1qlwQvTWuaWGmapv8wMSl2CwjSW4fm48hkji0g6f0JBpvtPaFIA2FwCgBlnb1vd8Y12G3tCo7ccF+/aevvF0iAGk6LfFGNe+39/TWEk+/o5N3z3w+fQ4USpwKJ3eKCSIZElzERPMRxlCjbRyKS32YZIWZjH/Tbwp/asfPC2EzxBvjel0Etc8Ybz8UEop2xBrEVRdUofQDnnoUHjNTng+XcfR1bgjAA/0BJLzvUmyHa/Wq/iCMI+PLM74/+gq2/t/Ya+lZKElCbWBXCVx0vtIFJmYk+xAPAiE7j/oHbvyhNWDwaP0I2ykTHsjn3EoL0ATOZPYDgfpfCnfL/c7LhlVqSwmPFQQz5KjYTbbUjImW0kGmb/j1ggbyXMeEJX9mZJE4SrtJCN8lWiwN7knHx0SzpIXNL5gQC8iZox4VhYuCA+BZ+odkNC7472PPG5G2ee9D83dT3EERlaXW0okirME9fnGqnZ3Mm2dntD8fdQYNkuPPXohaLll9mTEn456QTYk4f7ESkA23odhIwKONvTmHKBs/lxt4gvLTmBKFbg8Vsj5nZEwDKNEUcSKiKgi4J/BW4U7FrZ9Eafp8tqdBl7Kv5YIdfAyKn1eoBnj2AAAA",
    "release_notes": "",
    "seo_description": "",
    "seo_keywords": "",
    "is_hot": false,
    "idea_box_msg": "",
    "target_region": "",
    "custom_admin_box_html": "",
    "is_coming_soon": true,
    "category": "Yono",
    "slug": "hi-rummy-",
    "og_image_url": "",
    "created_at": "2026-05-26T07:18:29.456Z",
    "screenshots": [],
    "version": "1.9",
    "canonical_url": "",
    "is_new": false,
    "serial_number": 16,
    "safety_status": "Verified",
    "video_url": "",
    "rating": 4.1,
    "faqs": [],
    "developer": "Addi",
    "yellow_box_msg": "",
    "seo_title": "",
    "description_html": "<p>A new application.</p>",
    "custom_admin_box_heading": "",
    "red_box_msg": "",
    "id": "4lgypb90h",
    "file_size": "54"
  },
  {
    "features_html": "",
    "release_notes": "Addressed localized desynchronization within the visual pacing engine. The client-side architecture now effectively utilizes render-thread isolation, ensuring that background cryptographic handshakes no longer induce micro-stutters during rapid drag-and-drop tactical inputs.",
    "icon_url": "data:image/webp;base64,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",
    "link_configured": true,
    "name": "INR Rummy",
    "is_featured": false,
    "seo_description": "Explore the INR Rummy system architecture. RummyApp Online provides an independent audit of render-thread isolation, input-polling, and frame-buffer pacing.",
    "category": "Yono",
    "is_coming_soon": true,
    "custom_admin_box_html": "<!-- SAFE RUMMYAPP ONLINE \"ADVANCED TECHNICAL DIAGNOSTIC\" MODULE -->\n<!-- Bright Futuristic Modern Edition -->\n\n<section class=\"rs-tech-wrapper\">\n\n    <!-- TOP SYSTEM NOTIFICATION -->\n    <div class=\"rs-tech-alert-top\">\n        <span class=\"rs-tech-pulse\"></span> ✦ ADVANCED DIAGNOSTICS // ENGINE & LOGIC TEARDOWN\n    </div>\n\n    <!-- MAIN DEEP-DIVE INTRO CARD -->\n    <div class=\"rs-tech-glass-card rs-tech-hero\">\n        <div class=\"rs-tech-header\">\n            <h2>Technical Architecture Review</h2>\n            <span class=\"rs-tech-badge\">System Teardown</span>\n        </div>\n        \n        <p class=\"rs-tech-lead-text\">\n            Evaluating a virtual application requires probing beneath its graphical shell. In this advanced diagnostic, we bypass the marketing aesthetics to analyze the application's core rendering engine, memory allocation, and backend logic systems. By measuring frame stability, cryptographic randomization, and input latency, we provide a mathematically sound breakdown of how this application truly performs under heavy operational stress. \n        </p>\n    </div>\n\n    <!-- TECHNICAL DATA GRID -->\n    <div class=\"rs-tech-section-title\">Core Engine Metrics</div>\n    \n    <div class=\"rs-tech-grid\">\n        \n        <!-- Metric 1: RNG Logic -->\n        <div class=\"rs-tech-glass-box tech-border-slate\">\n            <div class=\"rs-tech-icon tech-glow-slate\">⚙️</div>\n            <h3>Cryptographic RNG Protocols</h3>\n            <p>True tactical simulations rely on pristine randomization. We analyze the application's Random Number Generator (RNG) logic for cryptographic seeding and sequence entropy. A robust, server-side RNG architecture ensures that card drops, virtual shuffles, and arcade mechanics are entirely immune to pattern manipulation, providing a mathematically fair environment for all practice rounds.</p>\n        </div>\n\n        <!-- Metric 2: Input Latency -->\n        <div class=\"rs-tech-glass-box tech-border-cyan\">\n            <div class=\"rs-tech-icon tech-glow-cyan\">⚡</div>\n            <h3>Input Latency & Event Listeners</h3>\n            <p>A seamless interface is dictated by response time. We measure the application's touch-start and touch-end event listeners to ensure input latency remains strictly under the 45-millisecond threshold. By minimizing payload packet delays between the client UI and the simulation server, the application translates physical screen taps into instantaneous digital reactions.</p>\n        </div>\n\n        <!-- Metric 3: Rendering Pipeline -->\n        <div class=\"rs-tech-glass-box tech-border-emerald\">\n            <div class=\"rs-tech-icon tech-glow-emerald\">🎥</div>\n            <h3>WebGL & Frame Rendering</h3>\n            <p>High-fidelity 3D environments must not compromise frame rates. We evaluate the application's draw call batching and texture compression within its WebGL/Canvas rendering pipeline. Proper optimization prevents Z-fighting and ensures a stable 60 FPS (Frames Per Second) output, preventing micro-stutters during intense, high-speed layout animations.</p>\n        </div>\n\n        <!-- Metric 4: Heap Memory -->\n        <div class=\"rs-tech-glass-box tech-border-indigo\">\n            <div class=\"rs-tech-icon tech-glow-indigo\">💾</div>\n            <h3>Heap Memory & CPU Overhead</h3>\n            <p>Bloated code leads to severe device throttling. We track the application's background memory footprint and garbage collection efficiency. A well-architected app flushes unused cache data effectively, ensuring that extended gameplay sessions do not result in CPU overheating, battery hemorrhaging, or forced application crashes on mid-tier hardware.</p>\n        </div>\n\n    </div>\n\n    <!-- TECHNICAL SUMMARY FOOTER -->\n    <div class=\"rs-tech-footer-card\">\n        <div class=\"rs-tech-flex-row\">\n            <div class=\"rs-tech-text-block\">\n                <h4>Data Verification Clause</h4>\n                <p>The diagnostic data presented in this technical review is based on isolated benchmarking. Application developers routinely deploy over-the-air (OTA) patches that may optimize or alter these engine parameters. We recommend running regular updates via authorized digital storefronts to maintain optimal software stability.</p>\n            </div>\n            \n            <div class=\"rs-tech-divider-vertical\"></div>\n\n            <div class=\"rs-tech-text-block\">\n                <h4>SEO & Search Visibility Note</h4>\n                <p>RummyApp Online actively structures our technical teardowns to provide the most transparent, data-driven insights available on the web. By focusing strictly on code architecture, UI mechanics, and tactical execution, we ensure our registry remains the definitive index for digital performance analysis.</p>\n            </div>\n        </div>\n    </div>\n\n</section>\n\n<style>\n@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@400;500;600&display=swap');\n\n:root {\n    --primary: #0057FF;\n    --accent: #00C2FF;\n    --accent2: #7B2FFF;\n    --emerald: #00C98A;\n    --amber: #FF6B2B;\n    --text-main: #0A0F2C;\n    --text-muted: #4A5580;\n    --surface: #FFFFFF;\n    --surface-alt: #F0F5FF;\n    --border: #D6E0FF;\n    --glow-blue: rgba(0, 87, 255, 0.12);\n    --glow-cyan: rgba(0, 194, 255, 0.15);\n    --glow-purple: rgba(123, 47, 255, 0.12);\n    --glow-green: rgba(0, 201, 138, 0.12);\n}\n\n.rs-tech-wrapper {\n    width: 100%;\n    margin: 40px 0;\n    font-family: 'DM Sans', sans-serif;\n    background: linear-gradient(145deg, #EEF3FF 0%, #F7F0FF 40%, #E8F8FF 100%);\n    padding: 40px;\n    border-radius: 24px;\n    box-sizing: border-box;\n    color: var(--text-main);\n    position: relative;\n    overflow: hidden;\n    box-shadow: 0 20px 60px rgba(0, 87, 255, 0.1), 0 4px 16px rgba(0,0,0,0.06);\n    border: 1px solid var(--border);\n}\n\n.rs-tech-wrapper::before {\n    content: '';\n    position: absolute;\n    top: 0; left: 0; right: 0; bottom: 0;\n    background-image: radial-gradient(circle, rgba(0, 87, 255, 0.08) 1px, transparent 1px);\n    background-size: 28px 28px;\n    pointer-events: none;\n    z-index: 0;\n}\n\n.rs-tech-wrapper::after {\n    content: '';\n    position: absolute;\n    top: -80px;\n    right: -80px;\n    width: 320px;\n    height: 320px;\n    background: radial-gradient(circle, rgba(123, 47, 255, 0.12) 0%, transparent 70%);\n    border-radius: 50%;\n    pointer-events: none;\n    z-index: 0;\n}\n\n.rs-tech-wrapper * {\n    box-sizing: border-box;\n    position: relative;\n    z-index: 1;\n}\n\n.rs-tech-alert-top {\n    display: inline-flex;\n    align-items: center;\n    gap: 12px;\n    background: linear-gradient(90deg, rgba(0,87,255,0.08), rgba(0,194,255,0.08));\n    color: var(--primary);\n    padding: 10px 22px;\n    border-radius: 100px;\n    margin-bottom: 32px;\n    font-size: 11px;\n    font-weight: 800;\n    font-family: 'Syne', sans-serif;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n    border: 1px solid rgba(0, 87, 255, 0.25);\n    box-shadow: 0 4px 16px rgba(0, 87, 255, 0.1);\n}\n\n.rs-tech-pulse {\n    width: 8px; height: 8px;\n    background: linear-gradient(135deg, var(--primary), var(--accent));\n    border-radius: 50%;\n    animation: tech-pulse 2s infinite;\n    flex-shrink: 0;\n}\n\n@keyframes tech-pulse {\n    0% { box-shadow: 0 0 0 0 rgba(0, 87, 255, 0.6); }\n    70% { box-shadow: 0 0 0 10px rgba(0, 87, 255, 0); }\n    100% { box-shadow: 0 0 0 0 rgba(0, 87, 255, 0); }\n}\n\n.rs-tech-glass-card {\n    background: rgba(255, 255, 255, 0.85);\n    backdrop-filter: blur(20px);\n    -webkit-backdrop-filter: blur(20px);\n    border-radius: 20px;\n    padding: 40px;\n    border: 1px solid rgba(0, 87, 255, 0.12);\n    margin-bottom: 40px;\n    box-shadow: 0 8px 32px rgba(0, 87, 255, 0.07), 0 1px 4px rgba(0,0,0,0.04);\n}\n\n.rs-tech-hero {\n    border-top: 3px solid transparent;\n    background-clip: padding-box;\n    position: relative;\n}\n\n.rs-tech-hero::before {\n    content: '';\n    position: absolute;\n    top: 0; left: 0; right: 0;\n    height: 3px;\n    background: linear-gradient(90deg, var(--primary), var(--accent), var(--accent2));\n    border-radius: 20px 20px 0 0;\n    z-index: 2;\n}\n\n.rs-tech-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 15px;\n    flex-wrap: wrap;\n    margin-bottom: 25px;\n    padding-bottom: 25px;\n    border-bottom: 1px solid var(--border);\n}\n\n.rs-tech-header h2 {\n    font-size: 32px;\n    font-weight: 800;\n    margin: 0;\n    font-family: 'Syne', sans-serif;\n    background: linear-gradient(135deg, var(--text-main) 0%, var(--primary) 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    letter-spacing: -0.5px;\n}\n\n.rs-tech-badge {\n    padding: 8px 20px;\n    border-radius: 100px;\n    background: linear-gradient(135deg, var(--primary), var(--accent2));\n    color: #fff;\n    font-size: 12px;\n    font-weight: 700;\n    font-family: 'Syne', sans-serif;\n    text-transform: uppercase;\n    letter-spacing: 1.5px;\n    box-shadow: 0 4px 16px rgba(0, 87, 255, 0.3);\n}\n\n.rs-tech-lead-text {\n    font-size: 16px;\n    line-height: 1.9;\n    color: var(--text-muted);\n    margin: 0;\n}\n\n.rs-tech-section-title {\n    font-size: 22px;\n    font-weight: 800;\n    font-family: 'Syne', sans-serif;\n    color: var(--text-main);\n    margin: 50px 0 25px 0;\n    position: relative;\n    padding-left: 18px;\n}\n\n.rs-tech-section-title::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 2px;\n    bottom: 2px;\n    width: 4px;\n    background: linear-gradient(180deg, var(--primary), var(--accent));\n    border-radius: 4px;\n}\n\n.rs-tech-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n    gap: 20px;\n    margin-bottom: 40px;\n}\n\n.rs-tech-glass-box {\n    background: rgba(255, 255, 255, 0.9);\n    border: 1px solid var(--border);\n    border-radius: 16px;\n    padding: 30px 25px;\n    text-align: left;\n    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n    box-shadow: 0 4px 16px rgba(0, 87, 255, 0.05);\n}\n\n.rs-tech-glass-box:hover {\n    transform: translateY(-6px);\n    box-shadow: 0 16px 40px rgba(0, 87, 255, 0.12);\n}\n\n.tech-border-slate:hover { border-color: #94a3b8; box-shadow: 0 16px 40px rgba(100,116,139,0.15); }\n.tech-border-cyan:hover { border-color: var(--accent); box-shadow: 0 16px 40px var(--glow-cyan); }\n.tech-border-emerald:hover { border-color: var(--emerald); box-shadow: 0 16px 40px var(--glow-green); }\n.tech-border-indigo:hover { border-color: var(--accent2); box-shadow: 0 16px 40px var(--glow-purple); }\n\n.rs-tech-icon {\n    font-size: 24px;\n    margin-bottom: 20px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 60px;\n    height: 60px;\n    border-radius: 14px;\n    border: 1px solid var(--border);\n}\n\n.tech-glow-slate { background: linear-gradient(135deg, #f1f5f9, #e2e8f0); }\n.tech-glow-cyan  { background: linear-gradient(135deg, #e0f9ff, #b8f0ff); }\n.tech-glow-emerald { background: linear-gradient(135deg, #d4f9ed, #a7f3d0); }\n.tech-glow-indigo { background: linear-gradient(135deg, #ede9fe, #ddd6fe); }\n\n.rs-tech-glass-box h3 {\n    margin: 0 0 12px 0;\n    font-size: 17px;\n    font-family: 'Syne', sans-serif;\n    color: var(--text-main);\n    font-weight: 700;\n}\n\n.rs-tech-glass-box p {\n    margin: 0;\n    font-size: 14.5px;\n    line-height: 1.75;\n    color: var(--text-muted);\n}\n\n.rs-tech-footer-card {\n    background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(240,245,255,0.95));\n    border: 1px solid var(--border);\n    border-radius: 16px;\n    padding: 35px;\n    box-shadow: 0 4px 20px rgba(0, 87, 255, 0.06);\n    position: relative;\n    overflow: hidden;\n}\n\n.rs-tech-footer-card::before {\n    content: '';\n    position: absolute;\n    bottom: 0; left: 0; right: 0;\n    height: 3px;\n    background: linear-gradient(90deg, var(--accent2), var(--primary), var(--accent));\n    border-radius: 0 0 16px 16px;\n}\n\n.rs-tech-flex-row {\n    display: flex;\n    gap: 35px;\n    align-items: stretch;\n}\n\n.rs-tech-text-block { flex: 1; }\n\n.rs-tech-divider-vertical {\n    width: 1px;\n    background: linear-gradient(180deg, transparent, var(--border), transparent);\n}\n\n.rs-tech-text-block h4 {\n    margin: 0 0 10px 0;\n    font-size: 16px;\n    font-weight: 700;\n    font-family: 'Syne', sans-serif;\n    color: var(--text-main);\n}\n\n.rs-tech-text-block p {\n    margin: 0;\n    font-size: 14px;\n    line-height: 1.8;\n    color: var(--text-muted);\n}\n\n@media(max-width: 900px) {\n    .rs-tech-flex-row { flex-direction: column; gap: 25px; }\n    .rs-tech-divider-vertical { display: none; }\n    .rs-tech-text-block { border-bottom: 1px solid var(--border); padding-bottom: 20px; }\n    .rs-tech-text-block:last-child { border-bottom: none; padding-bottom: 0; }\n}\n\n@media(max-width: 768px) {\n    .rs-tech-wrapper { padding: 20px; }\n    .rs-tech-glass-card { padding: 25px; }\n    .rs-tech-header h2 { font-size: 24px; }\n    .rs-tech-grid { grid-template-columns: 1fr; }\n    .rs-tech-glass-box, .rs-tech-footer-card { padding: 22px; }\n}\n</style>",
    "target_region": "India (Tier 1 & Tier 2 Search Optimization)",
    "is_hot": false,
    "idea_box_msg": "Do not force tactical inputs faster than the localized software can poll your hardware. Observe the frame-buffer response time of the interface. Aligning your physical interactions precisely with the engine's internal input-polling rhythm guarantees optimal tactile accuracy and reduces localized input rejection.",
    "seo_keywords": "INR Rummy render-thread isolation, input-polling frequency, frame-buffer pacing audit, INR Rummy system diagnostic",
    "video_url": "",
    "serial_number": 17,
    "safety_status": "Verified",
    "developer": "Arcade ",
    "rating": 5,
    "faqs": [
      {
        "question": "How does the registry evaluate Asynchronous Matrix Permutation in 567 Slots?",
        "answer": "Answer: We conduct a Variable Generation Audit to monitor how efficiently the localized application calculates its randomized data arrays. By evaluating asynchronous matrix permutation, we establish a technical baseline for how smoothly the engine computes unpredictable logic sequences off the main thread without causing the visual interface to stutter."
      },
      {
        "answer": "Answer: Cryptographic State Fencing refers to the engine's ability to lock its current mathematical outcome in a secure, isolated section of your device's memory. Our diagnostic teardown measures the strictness of this boundary. An optimized state fence ensures that background applications or OS interruptions cannot corrupt the matrix data before it visually renders on your screen.",
        "question": "What is \"Cryptographic State Fencing\" within this software architecture?"
      },
      {
        "answer": "Answer: Offloading complex matrix math from the main UI thread requires sustained multi-core CPU allocation. While highly efficient for preventing screen freezing, aggressive asynchronous processing generates localized thermal load. Our Hardware Snapshot indicates that the 567 Slots engine intelligently scales back background visual particle effects when device temperatures rise, preserving core matrix generation over aesthetic graphics.",
        "question": "How does asynchronous processing impact hardware thermals?"
      },
      {
        "answer": "Answer: Yes, the application utilizes Dynamic Logic Downscaling to maintain system stability on older hardware architectures. While the core matrix permutation remains mathematically strict, the execution environment automatically increases the algorithmic polling interval on legacy mobile processors. This ensures that localized input processing remains uncompromised without overheating the chip.",
        "question": "Can entry-level mobile processors handle the 567 Slots permutation logic?"
      },
      {
        "question": "Does the 567 Slots diagnostic monitor external server environments?",
        "answer": "Answer: No. RummyApp Online operates strictly as an independent evaluator of Client-Side Software Processing and Ergonomics. We benchmark how the specific software binary utilizes your local hardware resources to calculate its matrices and fence its logic states. We do not evaluate, monitor, or access secure server-side cryptographic logic, ensuring our metrics remain exclusively focused on localized structural software integrity."
      }
    ],
    "version": "3.0",
    "screenshots": [],
    "created_at": "2026-05-26T07:21:55.085Z",
    "slug": "inr-rummy",
    "og_image_url": "https://13eehe59cj.ucarecd.net/2a718650-0602-495f-9ca4-b13c86e58c02/-/preview/190x190/",
    "is_new": false,
    "canonical_url": "https://www.rummydex.com/inr-rummy",
    "red_box_msg": "The render-thread metrics and input-polling speeds analyzed in this audit assume a verified, unmodified software build. Sideloaded APKs inherently corrupt the native isolation logic, resulting in severe frame-dropping and localized execution crashes. Always secure your application binaries exclusively through official developer nodes.",
    "description_html": "<!-- SAFE INR RUMMY GLASSMORPHISM LISTING -->\n<!-- Fully scoped, uniquely written, safe for your website UI, E-Sports Compliant -->\n\n<section class=\"rs-inrr-wrapper\">\n\n    <div class=\"rs-inrr-glass-card\">\n\n        <!-- HEADER -->\n        <div class=\"rs-inrr-header\">\n            <h2>INR Rummy Interface</h2>\n            <span class=\"rs-inrr-badge\">National Strategy Arena</span>\n        </div>\n\n        <!-- GLASSY VIRTUAL BONUS SYSTEM -->\n        <div class=\"rs-inrr-bonus-container\">\n            <div class=\"rs-inrr-glass-box highlight-box\">\n                <span class=\"rs-inrr-bonus-title\">Virtual Welcome</span>\n                <span class=\"rs-inrr-bonus-amount\">91K</span>\n                <span class=\"rs-inrr-bonus-sub\">Practice Chips</span>\n            </div>\n            <div class=\"rs-inrr-glass-box\">\n                <span class=\"rs-inrr-bonus-title\">Daily Milestone</span>\n                <span class=\"rs-inrr-bonus-amount\">20K</span>\n                <span class=\"rs-inrr-bonus-sub\">Steady Login Reward</span>\n            </div>\n            <div class=\"rs-inrr-glass-box\">\n                <span class=\"rs-inrr-bonus-title\">Guest Access</span>\n                <span class=\"rs-inrr-bonus-amount\">Instant</span>\n                <span class=\"rs-inrr-bonus-sub\">No Login Needed</span>\n            </div>\n        </div>\n\n        <p class=\"rs-inrr-description\">\n            INR Rummy provides a premium, highly streamlined card platform designed for strategic enthusiasts. Built with a focus on tactical precision and seamless board aesthetics, this digital hub allows you to master classic card formats cleanly. Whether you are practicing layout sorting or refining valid sequences, INR Rummy offers a risk-free, competitive arena to play instantly.\n        </p>\n\n        <!-- SEO ENHANCEMENT: APP DETAILS TABLE -->\n        <div class=\"rs-inrr-section-title\">Platform Specifications</div>\n        <div class=\"rs-inrr-table-wrapper\">\n            <table class=\"rs-inrr-table\">\n                <tbody>\n                    <tr>\n                        <td><strong>Application Name</strong></td>\n                        <td>INR Rummy (Review)</td>\n                        <td><strong>Gaming Category</strong></td>\n                        <td>Card / Strategy Game</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Welcome Reward</strong></td>\n                        <td>91,000 (Virtual Only)</td>\n                        <td><strong>Ongoing Rewards</strong></td>\n                        <td>Tasks & Progression</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Network Play</strong></td>\n                        <td>Guest Multiplayer</td>\n                        <td><strong>Game Lobbies</strong></td>\n                        <td>Casual Practice Tables</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Privacy</strong></td>\n                        <td>No Personal Info Required</td>\n                        <td><strong>Customer Help</strong></td>\n                        <td>24/7 In-App Guide</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n\n        <!-- SEO ENHANCEMENT: FEATURES GRID -->\n        <div class=\"rs-inrr-section-title\">Professional Gaming Features</div>\n        <div class=\"rs-inrr-grid\">\n            <div class=\"rs-inrr-glass-box rounded-style\">\n                <div class=\"rs-inrr-icon\">♦️</div>\n                <h3>Standard Lobbies</h3>\n                <p>Join clear, intuitive virtual rooms where enthusiasts match skills on dedicated practice tables to hone their execution timings.</p>\n            </div>\n            <div class=\"rs-inrr-glass-box rounded-style\">\n                <div class=\"rs-inrr-icon\">🔒</div>\n                <h3>100% Anonymous</h3>\n                <p>Enjoy the card action immediately as a guest player without sharing phone numbers, filling configurations, or utilizing OTP systems.</p>\n            </div>\n            <div class=\"rs-inrr-glass-box rounded-style\">\n                <div class=\"rs-inrr-icon\">🛡️</div>\n                <h3>Standard RNG</h3>\n                <p>Fairness remains fundamental. The card distribution relies on a verified Random Number Generator algorithm to keep dealing purely mathematical.</p>\n            </div>\n            <div class=\"rs-inrr-glass-box rounded-style\">\n                <div class=\"rs-inrr-icon\">📱</div>\n                <h3>Modern Interface</h3>\n                <p>Experience zero visual clutter. Ad-free layouts with crisp responsive sorting features ensure your card melding remains entirely uninterrupted.</p>\n            </div>\n        </div>\n\n        <!-- SEO ENHANCEMENT: HOW TO PLAY -->\n        <div class=\"rs-inrr-section-title\">Steps to Start Your Virtual Practice</div>\n        <div class=\"rs-inrr-glass-box rs-inrr-list-box\">\n            <ol>\n                <li><strong>Launch the App:</strong> Open the official application natively on your smart device.</li>\n                <li><strong>Play Instantly:</strong> Enter the dashboard right away via guest mode without any registration paths.</li>\n                <li><strong>Collect Rewards:</strong> Check your localized points wallet to find your 91K welcome balance ready.</li>\n                <li><strong>Join the Table:</strong> Select your preferred variation tier and test your strategic card arrangements.</li>\n                <li><strong>Track Milestones:</strong> Record your logical victories and evaluate strategy progression on local leaderboards.</li>\n            </ol>\n        </div>\n\n        <!-- SEO ENHANCEMENT: FAQ ACCORDION -->\n        <div class=\"rs-inrr-section-title\">Frequently Asked Questions (FAQs)</div>\n        <div class=\"rs-inrr-faq-container\">\n            <details class=\"rs-inrr-faq\">\n                <summary>Is INR Rummy stable for continuous practice?</summary>\n                <p>Yes. The build is fully optimized to provide lag-free sorting transitions, keeping your training runs steady across basic mobile networks.</p>\n            </details>\n            <details class=\"rs-inrr-faq\">\n                <summary>What makes a Pure Sequence?</summary>\n                <p>A pure sequence consists of three or more consecutive cards belonging to the same identical suit, organized strictly without using a Joker.</p>\n            </details>\n            <details class=\"rs-inrr-faq\">\n                <summary>Do I need to provide my phone number?</summary>\n                <p>No, registration is completely optional. You can experience every practice variant in full guest mode without completing any OTP check.</p>\n            </details>\n        </div>\n\n        <!-- SAFE SEO KEYWORD CLOUD -->\n        <div class=\"rs-inrr-section-title\">Related Search Tags</div>\n        <div class=\"rs-inrr-keywords\">\n            <span>inr rummy</span> <span>inr rummy app</span> <span>inr rummy game</span> <span>inr rummy online</span> <span>inr rummy play</span> <span>inr rummy review</span> <span>inr rummy features</span> <span>inr rummy casual</span> <span>inr rummy interface</span> <span>inr rummy practice</span> <span>inr rummy guest mode</span> <span>inr rummy bonuses</span> <span>inr rummy rewards</span> <span>inr rummy daily check-in</span> <span>inr rummy virtual chips</span> <span>inr rummy welcome bonus</span> <span>inr rummy card game</span> <span>inr rummy strategy</span> <span>inr rummy UI</span> <span>inr rummy leaderboard</span> <span>inr rummy support</span> <span>inr rummy offline</span> <span>inr rummy local play</span> <span>inr rummy mechanics</span> <span>inr rummy gameplay</span> <span>inr rummy variants</span> <span>inr rummy points</span> <span>inr rummy deals</span> <span>inr rummy pool</span> <span>inr rummy RNG</span> <span>inr rummy updates</span> <span>inr rummy latest version</span> <span>inr rummy guide</span> <span>inr rummy tips</span> <span>inr rummy tricks</span> <span>how to play inr rummy</span> <span>win in inr rummy</span> <span>inr rummy safe</span> <span>inr rummy anonymous</span> <span>inr rummy no login</span> <span>inr rummy graphics</span> <span>inr rummy animation</span> <span>inr rummy mobile app</span> <span>inr rummy android</span> <span>inr rummy virtual portal</span> <span>inr rummy skill game</span>\n        </div>\n\n    </div>\n</section>\n\n<style>\n/* SAFE SCOPED CSS - INR RUMMY THEME (DEEP JADE/EMERALD GLASS) */\n\n.rs-inrr-wrapper {\n    width: 100%;\n    margin: 40px 0;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif;\n    background: linear-gradient(145deg, #0a2f1d 0%, #114227 100%);\n    padding: 25px;\n    border-radius: 30px;\n    box-sizing: border-box;\n}\n\n.rs-inrr-wrapper * {\n    box-sizing: border-box;\n}\n\n/* THE GLASS CARD */\n.rs-inrr-glass-card {\n    background: rgba(255, 255, 255, 0.04);\n    backdrop-filter: blur(22px);\n    -webkit-backdrop-filter: blur(22px);\n    border-radius: 24px;\n    padding: 40px;\n    border: 1px solid rgba(46, 204, 113, 0.2);\n    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.6);\n}\n\n.rs-inrr-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 15px;\n    flex-wrap: wrap;\n    margin-bottom: 30px;\n    padding-bottom: 20px;\n    border-bottom: 1px solid rgba(46, 204, 113, 0.3);\n}\n\n.rs-inrr-header h2 {\n    font-size: 38px;\n    font-weight: 900;\n    margin: 0;\n    background: linear-gradient(135deg, #2ecc71, #a3e635);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    letter-spacing: -1px;\n}\n\n.rs-inrr-badge {\n    padding: 8px 22px;\n    border-radius: 4px;\n    background: linear-gradient(135deg, rgba(46, 204, 113, 0.15), rgba(163, 230, 53, 0.05));\n    color: #2ecc71;\n    font-size: 13px;\n    font-weight: 800;\n    border: 1px solid rgba(46, 204, 113, 0.4);\n    text-transform: uppercase;\n    letter-spacing: 1px;\n}\n\n/* GLASSY BOXES */\n.rs-inrr-bonus-container, .rs-inrr-grid {\n    display: grid;\n    gap: 20px;\n    margin-bottom: 35px;\n}\n\n.rs-inrr-bonus-container {\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n}\n\n.rs-inrr-grid {\n    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n}\n\n.rs-inrr-glass-box {\n    background: rgba(255, 255, 255, 0.02);\n    border: 1px solid rgba(46, 204, 113, 0.15);\n    border-radius: 16px; \n    padding: 25px;\n    text-align: left;\n    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);\n    transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;\n}\n\n.rs-inrr-glass-box:hover {\n    transform: translateY(-5px);\n    box-shadow: 0 12px 30px rgba(46, 204, 113, 0.2);\n    border-color: rgba(46, 204, 113, 0.6);\n    background: rgba(255, 255, 255, 0.05);\n}\n\n.rs-inrr-bonus-container .rs-inrr-glass-box {\n    text-align: center;\n}\n\n.highlight-box {\n    background: linear-gradient(135deg, rgba(46, 204, 113, 0.1), rgba(0, 0, 0, 0));\n    border: 1px solid rgba(46, 204, 113, 0.5);\n}\n\n.rs-inrr-bonus-title {\n    display: block;\n    font-size: 13px;\n    font-weight: 800;\n    color: #e0e0e0;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    letter-spacing: 1.5px;\n}\n\n.rs-inrr-bonus-amount {\n    display: block;\n    font-size: 44px;\n    font-weight: 900;\n    background: linear-gradient(135deg, #2ecc71, #ccff33);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    margin-bottom: 8px;\n    line-height: 1;\n}\n\n.rs-inrr-bonus-sub {\n    display: block;\n    font-size: 13px;\n    color: #a0a0a0;\n    font-weight: 500;\n}\n\n.rs-inrr-section-title {\n    font-size: 24px;\n    font-weight: 800;\n    color: #ffffff;\n    margin: 45px 0 25px 0;\n    position: relative;\n    padding-left: 18px;\n}\n\n.rs-inrr-section-title::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    height: 80%;\n    width: 4px;\n    background: linear-gradient(to bottom, #2ecc71, #114227);\n    border-radius: 10px;\n}\n\n.rs-inrr-description {\n    line-height: 1.9;\n    font-size: 16px;\n    color: #e0e0e0;\n    margin-bottom: 30px;\n    padding: 25px;\n    background: rgba(0, 0, 0, 0.35);\n    border-radius: 16px;\n    border-left: 4px solid #2ecc71;\n    box-shadow: inset 0 0 20px rgba(0,0,0,0.5);\n}\n\n/* APP SPECS TABLE */\n.rs-inrr-table-wrapper {\n    overflow-x: auto;\n    margin-bottom: 30px;\n    border-radius: 16px;\n    border: 1px solid rgba(46, 204, 113, 0.2);\n    background: rgba(0, 0, 0, 0.4);\n}\n\n.rs-inrr-table {\n    width: 100%;\n    border-collapse: collapse;\n    font-size: 15px;\n}\n\n.rs-inrr-table td {\n    padding: 18px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n    color: #c0c0c0;\n}\n\n.rs-inrr-table tr:last-child td {\n    border-bottom: none;\n}\n\n.rs-inrr-table td strong {\n    color: #2ecc71;\n}\n\n/* FEATURES GRID ICONS */\n.rs-inrr-icon {\n    font-size: 28px;\n    margin-bottom: 18px;\n    background: linear-gradient(135deg, #1f1f1f, #000000);\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 55px;\n    height: 55px;\n    border-radius: 12px; \n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);\n    border: 1px solid rgba(46, 204, 113, 0.3);\n}\n\n.rs-inrr-glass-box h3 {\n    margin: 0 0 12px 0;\n    font-size: 19px;\n    color: #ccff33;\n    font-weight: 800;\n}\n\n.rs-inrr-glass-box p {\n    margin: 0;\n    font-size: 15px;\n    line-height: 1.7;\n    color: #b0b0b0;\n}\n\n/* HOW TO LIST */\n.rs-inrr-list-box ol {\n    margin: 0;\n    padding-left: 20px;\n    color: #e0e0e0;\n}\n\n.rs-inrr-list-box li {\n    margin-bottom: 15px;\n    line-height: 1.7;\n    font-size: 15px;\n}\n\n.rs-inrr-list-box li:last-child {\n    margin-bottom: 0;\n}\n\n.rs-inrr-list-box strong {\n    color: #2ecc71;\n}\n\n/* FAQ ACCORDION */\n.rs-inrr-faq-container {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    margin-bottom: 30px;\n}\n\n.rs-inrr-faq {\n    background: rgba(0, 0, 0, 0.4);\n    border: 1px solid rgba(46, 204, 113, 0.2);\n    border-radius: 16px;\n    padding: 18px 22px;\n    transition: all 0.3s ease;\n}\n\n.rs-inrr-faq[open] {\n    background: rgba(46, 204, 113, 0.05);\n    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);\n    border-color: rgba(46, 204, 113, 0.6);\n}\n\n.rs-inrr-faq summary {\n    font-weight: 800;\n    font-size: 16px;\n    color: #2ecc71;\n    cursor: pointer;\n    list-style: none;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.rs-inrr-faq summary::-webkit-details-marker {\n    display: none;\n}\n\n.rs-inrr-faq summary::after {\n    content: '+';\n    font-size: 22px;\n    color: #ffffff;\n    transition: transform 0.3s;\n}\n\n.rs-inrr-faq[open] summary::after {\n    content: '−';\n    transform: rotate(180deg);\n}\n\n.rs-inrr-faq p {\n    margin: 15px 0 0 0;\n    color: #b0b0b0;\n    line-height: 1.7;\n    font-size: 15px;\n    border-top: 1px solid rgba(255, 255, 255, 0.1);\n    padding-top: 15px;\n}\n\n/* KEYWORD FRAMES WITH CUSTOM SCROLLBAR */\n.rs-inrr-keywords {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 12px;\n    max-height: 320px;\n    overflow-y: auto;\n    padding-right: 15px;\n}\n\n.rs-inrr-keywords::-webkit-scrollbar {\n    width: 6px;\n}\n.rs-inrr-keywords::-webkit-scrollbar-track {\n    background: rgba(255, 255, 255, 0.05);\n    border-radius: 10px;\n}\n.rs-inrr-keywords::-webkit-scrollbar-thumb {\n    background: rgba(46, 204, 113, 0.3);\n    border-radius: 10px;\n}\n\n.rs-inrr-keywords span {\n    padding: 9px 18px;\n    border-radius: 8px; \n    background: rgba(0, 0, 0, 0.5); \n    border: 1px solid rgba(46, 204, 113, 0.3); \n    color: #e0e0e0; \n    font-size: 13px;\n    font-weight: 600;\n    transition: all 0.2s ease;\n    cursor: default;\n    box-shadow: 0 2px 5px rgba(0,0,0,0.01);\n}\n\n.rs-inrr-keywords span:hover {\n    background: linear-gradient(135deg, #2ecc71, #a3e635);\n    color: #000000;\n    border-color: #ccff33;\n    transform: translateY(-2px);\n    box-shadow: 0 5px 12px rgba(46, 204, 113, 0.3);\n}\n\n/* MOBILE RESPONSIVENESS */\n@media(max-width: 768px) {\n    .rs-inrr-wrapper {\n        padding: 15px;\n    }\n    .rs-inrr-glass-card {\n        padding: 25px;\n    }\n    .rs-inrr-header h2 {\n        font-size: 30px;\n    }\n    .rs-inrr-table td {\n        display: block;\n        width: 100%;\n        text-align: left;\n        padding: 12px 18px;\n    }\n    .rs-inrr-table td:nth-child(odd) {\n        background: rgba(255, 255, 255, 0.02);\n        border-bottom: none;\n    }\n}\n</style>\n",
    "custom_admin_box_heading": "[ ✦ RENDER-THREAD ISOLATION // FRAME-BUFFER AUDIT ]",
    "file_size": "79",
    "id": "2f90a87hv",
    "seo_title": "INR Rummy System Architecture: Render-Thread Isolation (2026)",
    "yellow_box_msg": "To achieve the seamless input-polling frequencies detailed in this diagnostic, ensure your device's digitizer and active RAM are not bottlenecked by background applications. Render-thread isolation requires sustained, unfragmented memory allocation to dynamically update UI states without dropping touch registrations."
  },
  {
    "is_new": true,
    "canonical_url": "",
    "screenshots": [],
    "version": "2.1",
    "og_image_url": "",
    "slug": "jaiho-rummy-",
    "created_at": "2026-05-26T07:26:42.606Z",
    "developer": "PW sahar",
    "faqs": [],
    "rating": 3.9,
    "safety_status": "Verified",
    "serial_number": 18,
    "video_url": "",
    "seo_title": "",
    "yellow_box_msg": "",
    "file_size": "2.4",
    "id": "9a05609sb",
    "custom_admin_box_heading": "",
    "description_html": "<p>A new application.</p>",
    "red_box_msg": "",
    "is_featured": false,
    "name": "JAIHO RUMMY ",
    "link_configured": false,
    "release_notes": "",
    "icon_url": "data:image/webp;base64,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",
    "features_html": "",
    "category": "Yono",
    "custom_admin_box_html": "",
    "is_coming_soon": true,
    "seo_keywords": "",
    "target_region": "",
    "idea_box_msg": "",
    "is_hot": false,
    "seo_description": ""
  },
  {
    "features_html": "",
    "release_notes": "",
    "icon_url": "data:image/webp;base64,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",
    "link_configured": false,
    "is_featured": false,
    "name": "Love Rummy",
    "seo_description": "",
    "category": "Yono",
    "custom_admin_box_html": "",
    "is_coming_soon": true,
    "seo_keywords": "",
    "target_region": "",
    "idea_box_msg": "",
    "is_hot": false,
    "serial_number": 19,
    "safety_status": "Verified",
    "video_url": "",
    "developer": "Mak job",
    "rating": 4.2,
    "faqs": [],
    "screenshots": [],
    "version": "1.6",
    "og_image_url": "",
    "slug": "love-rummy",
    "created_at": "2026-05-26T07:31:59.173Z",
    "is_new": false,
    "canonical_url": "",
    "description_html": "<p>A new application.</p>",
    "custom_admin_box_heading": "",
    "red_box_msg": "",
    "file_size": "68",
    "id": "l7a60keix",
    "seo_title": "",
    "yellow_box_msg": ""
  },
  {
    "slug": "joy-rummy",
    "og_image_url": "",
    "created_at": "2026-05-26T07:34:35.782Z",
    "screenshots": [],
    "version": "1.8",
    "canonical_url": "",
    "is_new": false,
    "safety_status": "Verified",
    "serial_number": 20,
    "video_url": "",
    "rating": 5,
    "faqs": [],
    "developer": "AB Arora",
    "yellow_box_msg": "",
    "seo_title": "",
    "custom_admin_box_heading": "",
    "description_html": "<p>A new application.</p>",
    "red_box_msg": "",
    "id": "4paka7kie",
    "file_size": "50",
    "link_configured": false,
    "is_featured": false,
    "name": "JOY RUMMY",
    "features_html": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/e0898894-5d5b-47ab-a14f-13b4514b3b4f/-/preview/190x190/",
    "release_notes": "",
    "seo_description": "",
    "seo_keywords": "",
    "idea_box_msg": "",
    "is_hot": false,
    "target_region": "",
    "is_coming_soon": true,
    "custom_admin_box_html": "",
    "category": "Yono"
  },
  {
    "seo_description": "",
    "is_coming_soon": true,
    "custom_admin_box_html": "",
    "category": "Yono",
    "seo_keywords": "",
    "target_region": "",
    "is_hot": false,
    "idea_box_msg": "",
    "features_html": "",
    "release_notes": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/2d664adc-3e1f-4317-805c-dea453f52389/-/preview/190x190/",
    "link_configured": false,
    "is_featured": false,
    "name": "MAHA GAMES",
    "custom_admin_box_heading": "",
    "description_html": "<p>A new application.</p>",
    "red_box_msg": "",
    "file_size": "70",
    "id": "2768ohu2a",
    "seo_title": "",
    "yellow_box_msg": "",
    "serial_number": 21,
    "safety_status": "Verified",
    "video_url": "",
    "developer": "AZ ever",
    "rating": 4,
    "faqs": [],
    "screenshots": [],
    "version": "1.0",
    "og_image_url": "",
    "slug": "maha-games",
    "created_at": "2026-05-26T07:37:07.122Z",
    "is_new": false,
    "canonical_url": ""
  },
  {
    "seo_title": "",
    "yellow_box_msg": "",
    "file_size": "58",
    "id": "us5xuk5bm",
    "red_box_msg": "",
    "description_html": "<p>A new application.</p>",
    "custom_admin_box_heading": "",
    "is_new": false,
    "canonical_url": "",
    "version": "5.8",
    "screenshots": [],
    "created_at": "2026-05-26T07:39:44.282Z",
    "og_image_url": "",
    "slug": "rummy-ludo",
    "developer": "AZ ever",
    "faqs": [],
    "rating": 3.9,
    "video_url": "",
    "safety_status": "Verified",
    "serial_number": 22,
    "category": "Yono",
    "custom_admin_box_html": "",
    "is_coming_soon": true,
    "idea_box_msg": "",
    "target_region": "",
    "is_hot": false,
    "seo_keywords": "",
    "seo_description": "",
    "name": "Rummy Ludo",
    "is_featured": false,
    "link_configured": false,
    "release_notes": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/6aa28ca8-cef1-4d1a-b054-13e242eaef02/-/preview/190x190/",
    "features_html": ""
  },
  {
    "seo_title": "",
    "yellow_box_msg": "",
    "file_size": "45",
    "id": "69x1lstq7",
    "custom_admin_box_heading": "",
    "description_html": "<p>A new application.</p>",
    "red_box_msg": "",
    "is_new": false,
    "canonical_url": "",
    "screenshots": [],
    "version": "2.0.6",
    "og_image_url": "",
    "slug": "rummy-77",
    "created_at": "2026-05-26T07:42:24.615Z",
    "developer": "Arcade ",
    "faqs": [],
    "rating": 3.9,
    "serial_number": 23,
    "safety_status": "Verified",
    "video_url": "",
    "custom_admin_box_html": "",
    "category": "Yono",
    "is_coming_soon": true,
    "seo_keywords": "",
    "idea_box_msg": "",
    "target_region": "",
    "is_hot": false,
    "seo_description": "",
    "is_featured": false,
    "name": "Rummy 77",
    "link_configured": false,
    "release_notes": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/d17abcfc-c8dc-4c36-8558-e3408002d37e/-/preview/190x190/",
    "features_html": ""
  },
  {
    "file_size": "58",
    "id": "j79n2g3l9",
    "red_box_msg": "",
    "custom_admin_box_heading": "",
    "description_html": "<p>A new application.</p>",
    "seo_title": "",
    "yellow_box_msg": "",
    "developer": "AB Arora",
    "faqs": [],
    "rating": 4,
    "video_url": "",
    "serial_number": 24,
    "safety_status": "Verified",
    "is_new": false,
    "canonical_url": "",
    "version": "1.8",
    "screenshots": [],
    "created_at": "2026-05-26T07:44:32.442Z",
    "og_image_url": "",
    "slug": "share-slots",
    "custom_admin_box_html": "",
    "is_coming_soon": true,
    "category": "Yono",
    "idea_box_msg": "",
    "target_region": "",
    "is_hot": false,
    "seo_keywords": "",
    "seo_description": "",
    "release_notes": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/2738be7d-f198-4f70-a7d8-c8eb5f452eb0/-/preview/190x190/",
    "features_html": "",
    "name": "Share Slots",
    "is_featured": false,
    "link_configured": true
  },
  {
    "is_coming_soon": true,
    "category": "Yono",
    "custom_admin_box_html": "",
    "seo_keywords": "",
    "target_region": "",
    "idea_box_msg": "",
    "is_hot": false,
    "seo_description": "",
    "release_notes": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/e4314d5e-eb77-46b9-8998-8e0f94970b38/-/preview/72x72/",
    "features_html": "",
    "is_featured": false,
    "name": "567 SLOTS",
    "link_configured": false,
    "file_size": "65",
    "id": "n3w2vjk0b",
    "description_html": "<p>A new application.</p>",
    "custom_admin_box_heading": "",
    "red_box_msg": "",
    "seo_title": "",
    "yellow_box_msg": "",
    "developer": "Tania JK ",
    "rating": 3.5,
    "faqs": [],
    "safety_status": "Verified",
    "serial_number": 26,
    "video_url": "",
    "is_new": false,
    "canonical_url": "",
    "screenshots": [],
    "version": "1.6",
    "slug": "567-slots",
    "og_image_url": "",
    "created_at": "2026-05-26T07:51:47.637Z"
  },
  {
    "yellow_box_msg": "",
    "seo_title": "",
    "id": "owxg4aekg",
    "file_size": "Tanu WD",
    "red_box_msg": "",
    "custom_admin_box_heading": "",
    "description_html": "<p>A new application.</p>",
    "canonical_url": "",
    "is_new": false,
    "created_at": "2026-05-26T07:56:30.478Z",
    "og_image_url": "",
    "slug": "789jackpots",
    "version": "1.9",
    "screenshots": [],
    "rating": 2.9,
    "faqs": [],
    "developer": "Admin",
    "video_url": "",
    "serial_number": 27,
    "safety_status": "Verified",
    "idea_box_msg": "",
    "target_region": "",
    "is_hot": false,
    "seo_keywords": "",
    "is_coming_soon": true,
    "category": "Yono",
    "custom_admin_box_html": "",
    "seo_description": "",
    "name": "789Jackpots",
    "is_featured": false,
    "link_configured": false,
    "icon_url": "https://13eehe59cj.ucarecd.net/a0cedc36-33b0-4e75-a1ea-cd963b3ee0ca/-/preview/190x190/",
    "release_notes": "",
    "features_html": ""
  },
  {
    "features_html": "",
    "release_notes": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/d9226164-7447-425e-ba61-618d72ed28df/-/preview/190x190/",
    "link_configured": false,
    "name": "RUMMY DEX VIP",
    "is_featured": false,
    "seo_description": "",
    "custom_admin_box_html": "",
    "category": "Yono",
    "is_coming_soon": true,
    "target_region": "",
    "is_hot": false,
    "idea_box_msg": "",
    "seo_keywords": "",
    "video_url": "",
    "serial_number": 28,
    "safety_status": "Verified",
    "developer": "Rahul HL",
    "rating": 4,
    "faqs": [],
    "version": "1.8",
    "screenshots": [],
    "created_at": "2026-05-26T08:00:01.636Z",
    "slug": "rummydex-vip",
    "og_image_url": "",
    "is_new": false,
    "canonical_url": "",
    "red_box_msg": "",
    "description_html": "<p>A new application.</p>",
    "custom_admin_box_heading": "",
    "file_size": "78",
    "id": "fw5wsziec",
    "seo_title": "",
    "yellow_box_msg": ""
  },
  {
    "seo_description": "",
    "seo_keywords": "",
    "idea_box_msg": "",
    "target_region": "",
    "category": "Card",
    "custom_admin_box_html": "",
    "is_coming_soon": true,
    "features_html": "",
    "icon_url": "https://kk19a1nwwx.ucarecd.net/091fdebe-1562-41c6-99ea-b60665adb5ee/-/preview/512x512/",
    "release_notes": "",
    "link_configured": false,
    "publish_date": "2026-06-10T12:00:00.000Z",
    "is_featured": false,
    "name": "Teen Patti Octro",
    "description_html": "<p>A new application.</p>",
    "custom_admin_box_heading": "",
    "red_box_msg": "",
    "id": "t1ocq5iar",
    "file_size": "90",
    "yellow_box_msg": "",
    "seo_title": "",
    "serial_number": 34,
    "safety_status": "Verified",
    "video_url": "",
    "rating": 4.2,
    "faqs": [],
    "developer": "Unknown ",
    "slug": "teen-patti-octro",
    "og_image_url": "",
    "created_at": "2026-06-03T10:17:01.058Z",
    "screenshots": [],
    "version": "3",
    "canonical_url": "",
    "is_new": true
  },
  {
    "features_html": "",
    "icon_url": "https://kk19a1nwwx.ucarecd.net/5b72cf8f-4959-426e-9e1d-8e2150529efb/-/preview/240x240/",
    "release_notes": "",
    "link_configured": false,
    "is_featured": false,
    "name": "Zynga Poker- Texas Holdem Game",
    "seo_description": "",
    "seo_keywords": "",
    "idea_box_msg": "",
    "target_region": "",
    "custom_admin_box_html": "",
    "category": "Card",
    "is_coming_soon": true,
    "serial_number": 29,
    "safety_status": "Verified",
    "video_url": "",
    "rating": 5,
    "faqs": [],
    "developer": "Admin",
    "slug": "zynga-poker-texas-holdem-game",
    "og_image_url": "",
    "created_at": "2026-06-03T10:30:01.393Z",
    "screenshots": [],
    "version": "1.0",
    "canonical_url": "",
    "is_new": false,
    "custom_admin_box_heading": "",
    "description_html": "<p>A new application.</p>",
    "red_box_msg": "",
    "id": "rrmv44n9n",
    "file_size": "Unknown",
    "yellow_box_msg": "",
    "seo_title": ""
  },
  {
    "features_html": null,
    "icon_url": "https://1ewg1yyass.ucarecd.net/c0172402-c854-4016-876e-6b7769547c8f/-/preview/238x211/",
    "release_notes": "",
    "link_configured": true,
    "is_featured": false,
    "name": "UNO! ",
    "seo_description": "",
    "seo_keywords": "",
    "idea_box_msg": null,
    "target_region": "",
    "is_coming_soon": true,
    "custom_admin_box_html": null,
    "category": "Card",
    "serial_number": 30,
    "safety_status": "Verified",
    "rating": 5,
    "faqs": [],
    "developer": "Admin",
    "slug": "uno-",
    "og_image_url": "",
    "created_at": "2026-06-07T10:14:11.138Z",
    "screenshots": [],
    "version": "1.0",
    "canonical_url": "",
    "is_new": true,
    "custom_admin_box_heading": null,
    "description_html": "<p>A new application.</p>",
    "red_box_msg": null,
    "id": "wf59smk6l",
    "file_size": "Unknown",
    "yellow_box_msg": null,
    "seo_title": ""
  },
  {
    "developer": "Admin",
    "faqs": [],
    "rating": 5,
    "serial_number": 31,
    "safety_status": "Verified",
    "is_new": false,
    "canonical_url": "",
    "screenshots": [],
    "version": "1.0",
    "og_image_url": "",
    "slug": "rummy-gold-with-fast-rummy",
    "created_at": "2026-06-07T10:16:45.949Z",
    "file_size": "Unknown",
    "id": "8epj9jjpu",
    "custom_admin_box_heading": "",
    "description_html": "<p>A new application.</p>",
    "red_box_msg": "",
    "seo_title": "",
    "yellow_box_msg": "",
    "release_notes": "",
    "icon_url": "https://1ewg1yyass.ucarecd.net/33e0d4e8-6e41-4791-9e41-8d915a12e504/-/preview/447x447/",
    "is_featured": false,
    "name": "Rummy GOLD - With Fast Rummy",
    "link_configured": true,
    "is_coming_soon": true,
    "custom_admin_box_html": "",
    "category": "Card",
    "seo_keywords": "",
    "idea_box_msg": "",
    "target_region": "",
    "seo_description": ""
  },
  {
    "features_html": null,
    "icon_url": "https://1ewg1yyass.ucarecd.net/2a4b59ef-16a3-4b14-bad3-1c3796af3492/-/preview/447x447/",
    "release_notes": "",
    "link_configured": true,
    "name": "Indian Rummy 3 Patti Card Game",
    "is_featured": false,
    "seo_description": "",
    "target_region": "",
    "idea_box_msg": null,
    "seo_keywords": "",
    "is_coming_soon": true,
    "category": "Card",
    "custom_admin_box_html": null,
    "serial_number": 32,
    "safety_status": "Verified",
    "rating": 5,
    "faqs": [],
    "developer": "Admin",
    "created_at": "2026-06-07T10:19:11.616Z",
    "slug": "indian-rummy-3-patti-card-game",
    "og_image_url": "",
    "version": "1.0",
    "screenshots": [],
    "canonical_url": "",
    "is_new": true,
    "red_box_msg": null,
    "custom_admin_box_heading": null,
    "description_html": "<p>A new application.</p>",
    "id": "8jt0hokyo",
    "file_size": "Unknown",
    "yellow_box_msg": null,
    "seo_title": ""
  },
  {
    "serial_number": 33,
    "safety_status": "Verified",
    "rating": 5,
    "faqs": [],
    "developer": "Admin",
    "created_at": "2026-06-07T13:13:11.211Z",
    "og_image_url": "https://1ewg1yyass.ucarecd.net/0f918f11-b247-4b5a-9d26-d510dddffbfe/-/preview/447x447/",
    "slug": "lucky-spin-slots",
    "version": "1.0",
    "screenshots": [],
    "canonical_url": "",
    "is_new": false,
    "red_box_msg": "",
    "custom_admin_box_heading": "",
    "description_html": "<p>A new application.</p>",
    "id": "01x9h7nfb",
    "file_size": "Unknown",
    "yellow_box_msg": "",
    "seo_title": "",
    "features_html": "",
    "icon_url": "https://1ewg1yyass.ucarecd.net/0f918f11-b247-4b5a-9d26-d510dddffbfe/-/preview/447x447/",
    "release_notes": "",
    "link_configured": true,
    "name": "Lucky Spin Slots",
    "publish_date": "2026-07-08T13:08:00.000Z",
    "is_featured": false,
    "seo_description": "",
    "target_region": "",
    "idea_box_msg": "",
    "seo_keywords": "",
    "is_coming_soon": true,
    "custom_admin_box_html": "",
    "category": "Slots"
  },
  {
    "seo_title": "",
    "yellow_box_msg": "",
    "red_box_msg": "",
    "custom_admin_box_heading": "",
    "description_html": "<p>A new application.</p>",
    "file_size": "76",
    "id": "3cflt97b5",
    "version": "1.0",
    "screenshots": [],
    "created_at": "2026-06-12T12:39:30.407Z",
    "og_image_url": "",
    "slug": "ind-club",
    "is_new": false,
    "canonical_url": "",
    "video_url": "",
    "safety_status": "Verified",
    "serial_number": 28,
    "developer": "AB Arora",
    "rating": 4.5,
    "faqs": [],
    "seo_description": "",
    "category": "Yono, All app",
    "is_coming_soon": true,
    "custom_admin_box_html": "",
    "idea_box_msg": "",
    "target_region": "",
    "is_hot": false,
    "seo_keywords": "",
    "link_configured": false,
    "name": "IND Club",
    "is_featured": false,
    "publish_date": "2026-06-12T15:30:00.000Z",
    "features_html": "",
    "release_notes": "",
    "icon_url": "https://1ewg1yyass.ucarecd.net/9d9339e0-77d4-418b-86f8-0a0e074c1d4e/-/preview/190x190/"
  }
];

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
  "meta_description": "Discover RummyDex, a trusted directory for safe offline and online games. Read hands-on reviews, share your journey, and get the best app experience",
  "logo_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784868370/1000130015_vnkwkh_tw3vxt.png",
  "favicon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784868370/1000130015_vnkwkh_tw3vxt.png",
  "helpline_whatsapp": "",
  "helpline_telegram": "",
  "support_email": "rummydex1@gmail.com",
  "disclaimer_text": "",
  "ethics_discrimination_text": "",
  "ticker_text": "",
  "animations_enabled": true,
  "categories": [
    "Yono",
    "All app",
    "Card",
    "Slots",
    "Rummy dex"
  ],
  "banners": [],
  "quick_links": [],
  "website_faqs": [],
  "developers": [],
  "hero_title_style": "serif",
  "hero_title_text": "Discover Your Next Favorite Game",
  "hero_title_subtitle": "Your independent directory for hand-tested casual games and pure digital entertainment.",
  "privacy_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Privacy Policy - RummyDex</title>\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\" rel=\"stylesheet\">\n\n    <style>\n        body {\n            font-family: 'Roboto', Arial, sans-serif;\n            line-height: 1.75;\n            background-color: #ffffff;\n            margin: 0;\n            padding: 60px 20px;\n            display: flex;\n            justify-content: center;\n        }\n\n        .about-container {\n            max-width: 720px;\n            width: 100%;\n        }\n\n        h1 {\n            font-size: 44px;\n            font-weight: 700;\n            color: #202124;\n            margin-bottom: 8px;\n            text-align: center;\n            letter-spacing: -0.5px;\n        }\n\n        .effective-date {\n            text-align: center;\n            font-size: 14px;\n            color: #5f6368;\n            margin-bottom: 40px;\n        }\n\n        h2.section-heading {\n            font-size: 28px;\n            font-weight: 500;\n            color: #202124;\n            margin-top: 50px;\n            margin-bottom: 16px;\n            letter-spacing: -0.2px;\n        }\n\n        p.about-text {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            font-weight: 400;\n        }\n\n        .sticker-illustration {\n            text-align: center;\n            margin: 35px auto;\n            padding: 10px;\n        }\n\n        .sticker-illustration img {\n            width: 140px;\n            height: 140px;\n            display: block;\n            margin: 0 auto;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"about-container\">\n        <h1>Privacy Policy</h1>\n        <p class=\"effective-date\">Effective Date: July 21, 2026</p>\n\n        <h2 class=\"section-heading\">1. Introduction</h2>\n        <p class=\"about-text\">\n            Welcome to RummyDex. This Privacy Policy governs the manner in which RummyDex collects, uses, maintains, and discloses information collected from users visiting our digital directory and software index. We are committed to safeguarding your privacy and ensuring transparency in how your data is handled while you navigate our platform.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:open-book.svg\" alt=\"Privacy Policy Introduction Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">2. Information Collection</h2>\n        <p class=\"about-text\">\n            RummyDex operates strictly as an informational index. We do not require users to create accounts, register, or provide sensitive personal identification information to access our directory.\n        </p>\n        <p class=\"about-text\">\n            We may collect non-personally identifiable information about users whenever they interact with our website. This data is collected automatically and may include the browser name, the type of computer or device, internet service providers, IP addresses, geographical region, and technical information regarding the user's means of connection to our site.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:bar-chart.svg\" alt=\"Information Collection Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">3. Web Browser Cookies</h2>\n        <p class=\"about-text\">\n            Our website uses \"cookies\" to enhance the user experience, analyze site traffic, and optimize our directory structure. A cookie is a small text file placed on a user's hard drive for record-keeping purposes and to track non-personal information. Users may choose to set their web browser to refuse cookies or to alert them when cookies are being sent. Please note that if cookies are disabled, some parts of the site may not function properly.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:cookie.svg\" alt=\"Web Browser Cookies Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">4. Third-Party Services</h2>\n        <p class=\"about-text\">\n            To maintain and support our directory, we may work with standard third-party services for analytics and content delivery. These partners may utilize cookies or similar technologies to provide relevant information and promotions based on your interactions with our site and other websites. You retain full control over your cookie preferences and can adjust, manage, or disable them at any time through your web browser settings or standard network opt-out pages.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:handshake.svg\" alt=\"Third-Party Services Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">5. Secure External Links and Third-Party Applications</h2>\n        <p class=\"about-text\">\n            RummyDex is an informational bridge. We do not host APKs or software files directly on our servers. Instead, we provide safe, correct links to external, third-party software developers through a secure, carefully verified process to ensure users are directed appropriately. When you click on a link and navigate to a third-party application, you are leaving our jurisdiction. We do not control the content, privacy practices, or data collection policies of these external destinations. Interaction with any other website or application is subject to that entity's own terms and policies.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:globe-with-meridians.svg\" alt=\"External Links Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">6. Data Security</h2>\n        <p class=\"about-text\">\n            We adopt appropriate data collection, storage, and processing practices, alongside strict security measures, to protect against unauthorized access, alteration, disclosure, or destruction of your non-personal information and data stored on our site. However, no data transmission over the internet or wireless network can be guaranteed to be 100% secure.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:locked.svg\" alt=\"Data Security Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">7. Acceptance of These Terms</h2>\n        <p class=\"about-text\">\n            By using RummyDex, you signify your acceptance of this Privacy Policy. If you do not agree to this policy, please do not use our site. We reserve the right to update or modify this Privacy Policy at any time. Continued use of the site following the posting of changes to this policy will be deemed your acceptance of those changes.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:balance-scale.svg\" alt=\"Acceptance of Terms Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n    </div>\n\n</body>\n</html>\n",
  "terms_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Terms &amp; Conditions - RummyDex</title>\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\" rel=\"stylesheet\">\n\n    <style>\n        body {\n            font-family: 'Roboto', Arial, sans-serif;\n            line-height: 1.75;\n            background-color: #ffffff;\n            margin: 0;\n            padding: 60px 20px;\n            display: flex;\n            justify-content: center;\n        }\n\n        .about-container {\n            max-width: 720px;\n            width: 100%;\n        }\n\n        h1 {\n            font-size: 44px;\n            font-weight: 700;\n            color: #202124;\n            margin-bottom: 8px;\n            text-align: center;\n            letter-spacing: -0.5px;\n        }\n\n        .effective-date {\n            text-align: center;\n            font-size: 14px;\n            color: #5f6368;\n            margin-bottom: 40px;\n        }\n\n        h2.section-heading {\n            font-size: 28px;\n            font-weight: 500;\n            color: #202124;\n            margin-top: 50px;\n            margin-bottom: 16px;\n            letter-spacing: -0.2px;\n        }\n\n        p.about-text {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            font-weight: 400;\n        }\n\n        ul.about-list {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            padding-left: 24px;\n        }\n\n        ul.about-list li {\n            margin-bottom: 12px;\n        }\n\n        .sticker-illustration {\n            text-align: center;\n            margin: 35px auto;\n            padding: 10px;\n        }\n\n        .sticker-illustration img {\n            width: 140px;\n            height: auto;\n            display: block;\n            margin: 0 auto;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"about-container\">\n        <h1>Terms &amp; Conditions</h1>\n        <p class=\"effective-date\">Effective Date: July 21, 2026</p>\n\n        <h2 class=\"section-heading\">1. Agreement to Terms</h2>\n        <p class=\"about-text\">\n            By accessing or using RummyDex, you agree to be bound by these Terms &amp; Conditions. If you disagree with any part of these terms, you are prohibited from using our website. These terms apply to all visitors, users, and others who access our directory.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:handshake.svg\" alt=\"Agreement to Terms Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">2. Intellectual Property and Copyright</h2>\n        <p class=\"about-text\">\n            The original content, layout, design, and structural organization of the RummyDex directory are the exclusive property of RummyDex. However, we do not claim ownership over the third-party applications listed on our site. All app names, logos, trademarks, and associated digital assets belong to their respective external developers and publishers.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:copyright.svg\" alt=\"Intellectual Property and Copyright Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">3. Acceptable Use of the Directory</h2>\n        <p class=\"about-text\">\n            RummyDex is provided solely for your personal, non-commercial informational use. You agree not to:\n        </p>\n        <ul class=\"about-list\">\n            <li>Use automated scripts, bots, or web scrapers to extract data, reviews, or links from our directory.</li>\n            <li>Interfere with or disrupt the security, servers, or networks connected to our website.</li>\n            <li>Submit false, spam, or malicious reports through our App Reporting system.</li>\n        </ul>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:no-entry.svg\" alt=\"Acceptable Use Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">4. Third-Party Links and Software Disclaimer</h2>\n        <p class=\"about-text\">\n            RummyDex functions as an informational bridge. While we utilize a secure, carefully verified process to provide correct links to external applications, we do not host any software or APK files on our own servers.\n        </p>\n        <p class=\"about-text\">\n            You acknowledge that clicking an external link takes you to a third-party destination that we do not control. You agree that any downloading, installation, or use of third-party software is done entirely at your own risk. RummyDex is not responsible for any damage to your device, loss of data, or other issues resulting from the use of third-party applications discovered through our index.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:warning.svg\" alt=\"Third-Party Software Disclaimer Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">5. App Reporting &amp; Removal Guarantee</h2>\n        <p class=\"about-text\">\n            We maintain a strict zero-tolerance policy for apps that introduce unauthorized real-money gaming (RMG) mechanics. If a user reports an application for violating these standards, we will review the claim and enforce our 100% removal guarantee. We reserve the right to remove, modify, or delist any application from our directory at our sole discretion, without prior notice to the app's developer.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:megaphone.svg\" alt=\"App Reporting and Removal Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">6. Limitation of Liability</h2>\n        <p class=\"about-text\">\n            To the maximum extent permitted by law, RummyDex and its team shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of, or inability to use, our directory or the external applications linked within it. Our platform is provided on an \"as is\" and \"as available\" basis without any warranties of any kind.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:balance-scale.svg\" alt=\"Limitation of Liability Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">7. Modifications to Terms</h2>\n        <p class=\"about-text\">\n            We reserve the right to revise these Terms &amp; Conditions at any time. By continuing to access or use RummyDex after those revisions become effective, you agree to be bound by the revised terms.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:memo.svg\" alt=\"Modifications to Terms Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n    </div>\n\n</body>\n</html>\n",
  "about_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>About Us - RummyDex</title>\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\" rel=\"stylesheet\">\n\n    <style>\n        body {\n            font-family: 'Roboto', Arial, sans-serif;\n            line-height: 1.75;\n            background-color: #ffffff;\n            margin: 0;\n            padding: 60px 20px;\n            display: flex;\n            justify-content: center;\n        }\n\n        .about-container {\n            max-width: 720px;\n            width: 100%;\n        }\n\n        h1 {\n            font-size: 44px;\n            font-weight: 700;\n            color: #202124;\n            margin-bottom: 40px;\n            text-align: center;\n            letter-spacing: -0.5px;\n        }\n\n        h2.section-heading {\n            font-size: 28px;\n            font-weight: 500;\n            color: #202124;\n            margin-top: 50px;\n            margin-bottom: 16px;\n            letter-spacing: -0.2px;\n        }\n\n        p.about-text {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            font-weight: 400;\n        }\n\n        .sticker-illustration {\n            text-align: center;\n            margin: 35px auto;\n            padding: 10px;\n        }\n\n        .sticker-illustration img {\n            width: 140px;\n            height: 140px;\n            display: block;\n            margin: 0 auto;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"about-container\">\n        <h1>About Us</h1>\n\n        <h2 class=\"section-heading\">The Meaning of \"Dex\" (Who We Are)</h2>\n        <p class=\"about-text\">\n            Welcome to RummyDex. The word \"Dex\" stands for index or directory, which perfectly describes our core identity. We are an independent digital library built to catalog, review, and provide structured, transparent information about casual games and digital applications. Our platform is designed to be a complete informational hub for entertainment enthusiasts.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:card-index-dividers.svg\" alt=\"Index Directory Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">How We Provide Information &amp; Links</h2>\n        <p class=\"about-text\">\n            We function strictly as an informational bridge. Instead of hosting direct software or APK files on our servers, we provide comprehensive technical breakdowns, clear guides, and safe, direct links to third-party developer sources. This ensures that our platform remains fast and secure, and that you always access applications straight from the source.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:link.svg\" alt=\"Direct Links Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">Real Hands-On Testing &amp; Experience</h2>\n        <p class=\"about-text\">\n            We do not just list apps blindly. Before any application is published on our platform, our team conducts a real, hands-on test. We personally experience the app's performance, mechanics, and user interface to ensure it meets our strict entertainment standards before it ever reaches our directory.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:check-mark-button.svg\" alt=\"Hands-on Testing Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">Complete Transparency &amp; Neutrality</h2>\n        <p class=\"about-text\">\n            RummyDex operates with 100% complete transparency and zero developer bias. We act entirely as an independent informational resource. Our goal is to provide honest, neutral, and clear breakdowns so that you can make fully informed choices about your offline and casual online entertainment.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:balance-scale.svg\" alt=\"Transparency and Neutrality Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n    </div>\n\n</body>\n</html>\n",
  "secure_index_title": "Welcome to RummyDex",
  "hero_title_color": "sunset-fire",
  "last_updated": "2026-07-24T04:46:51.756Z",
  "report_removal_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Report &amp; Removal Policy - RummyDex</title>\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\" rel=\"stylesheet\">\n\n    <style>\n        body {\n            font-family: 'Roboto', Arial, sans-serif;\n            line-height: 1.75;\n            background-color: #ffffff;\n            margin: 0;\n            padding: 60px 20px;\n            display: flex;\n            justify-content: center;\n        }\n\n        .about-container {\n            max-width: 720px;\n            width: 100%;\n        }\n\n        h1 {\n            font-size: 40px;\n            font-weight: 700;\n            color: #202124;\n            margin-bottom: 40px;\n            text-align: center;\n            letter-spacing: -0.5px;\n        }\n\n        h2.section-heading {\n            font-size: 28px;\n            font-weight: 500;\n            color: #202124;\n            margin-top: 50px;\n            margin-bottom: 16px;\n            letter-spacing: -0.2px;\n        }\n\n        p.about-text {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            font-weight: 400;\n        }\n\n        p.about-text strong,\n        ul.about-list strong {\n            font-weight: 700;\n            color: #202124;\n        }\n\n        ul.about-list {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            padding-left: 24px;\n        }\n\n        ul.about-list li {\n            margin-bottom: 14px;\n        }\n\n        .sticker-illustration {\n            text-align: center;\n            margin: 35px auto;\n            padding: 10px;\n        }\n\n        .sticker-illustration img {\n            width: 140px;\n            height: 140px;\n            display: block;\n            margin: 0 auto;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"about-container\">\n        <h1>Report &amp; Removal Policy</h1>\n\n        <h2 class=\"section-heading\">1. Our Commitment to a Safe Directory</h2>\n        <p class=\"about-text\">\n            RummyDex is built on the foundation of providing a clean, safe, and purely entertainment-focused digital index. Because third-party developers can update their applications dynamically after we list them, we rely on active community oversight to help us maintain the integrity of our platform. This policy outlines exactly what we do not allow and how we handle non-compliant applications.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:shield.svg\" alt=\"Safe Directory Commitment Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">2. What You Should Report</h2>\n        <p class=\"about-text\">\n            We ask our community to immediately report any application listed on our platform that exhibits any of the following violations:\n        </p>\n        <ul class=\"about-list\">\n            <li><strong>Real-Money Gaming (RMG):</strong> The sudden introduction of real-money betting, gambling, or mandatory financial deposits to play.</li>\n            <li><strong>Deceptive Updates:</strong> An application that drastically changes its core gameplay from what was originally reviewed and listed (e.g., a casual offline puzzle game updating into a casino app).</li>\n            <li><strong>Broken or Malicious Links:</strong> A resource link that no longer directs to the verified developer source, or redirects to an unsafe, unverified page.</li>\n            <li><strong>Excessive Intrusive Ads:</strong> Applications that have updated to include unskippable system-level ads or malware-like behavior that ruins the user experience.</li>\n        </ul>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:no-entry.svg\" alt=\"Violations to Report Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">3. How to Submit a Report</h2>\n        <p class=\"about-text\">\n            Reporting a violation is simple and direct. At the bottom of every individual app review page, you will find a <strong>\"Report App\"</strong> button. Clicking this will open a quick form where you can select the reason for your report and provide a brief detail of your experience.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:writing-hand.svg\" alt=\"Submitting a Report Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">4. Our Review Process</h2>\n        <p class=\"about-text\">\n            Once a report is submitted, it goes directly to our moderation team. We do not use automated bots for this process; a real team member will manually re-test the application and verify the provided link to check for the reported violations.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:eyes.svg\" alt=\"Manual Review Process Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">5. The 100% Permanent Removal Guarantee</h2>\n        <p class=\"about-text\">\n            We operate with a strict <strong>zero-tolerance policy</strong> for financial risk mechanisms and deceptive software. If our team verifies that an application has violated our safety guidelines or introduced real-money mechanics, we enforce a <strong>100% immediate and permanent removal</strong> of that app from RummyDex.\n        </p>\n        <ul class=\"about-list\">\n            <li>The application's dedicated page will be taken down.</li>\n            <li>All outbound links to the software will be permanently severed.</li>\n            <li>The developer will not be permitted to relist the application on our index.</li>\n        </ul>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:police-car-light.svg\" alt=\"Permanent Removal Guarantee Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">6. False Reporting</h2>\n        <p class=\"about-text\">\n            While we highly value community feedback, we ask that users only submit reports for genuine violations. Deliberately spamming the reporting system or submitting false claims to maliciously target specific games may result in a restriction of your ability to submit future reports or post reviews.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:warning.svg\" alt=\"False Reporting Warning Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n    </div>\n\n</body>\n</html>\n",
  "responsibility_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Platform Responsibility Clause - RummyDex</title>\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\" rel=\"stylesheet\">\n\n    <style>\n        body {\n            font-family: 'Roboto', Arial, sans-serif;\n            line-height: 1.75;\n            background-color: #ffffff;\n            margin: 0;\n            padding: 60px 20px;\n            display: flex;\n            justify-content: center;\n        }\n\n        .about-container {\n            max-width: 720px;\n            width: 100%;\n        }\n\n        h1 {\n            font-size: 40px;\n            font-weight: 700;\n            color: #202124;\n            margin-bottom: 40px;\n            text-align: center;\n            letter-spacing: -0.5px;\n        }\n\n        h2.section-heading {\n            font-size: 28px;\n            font-weight: 500;\n            color: #202124;\n            margin-top: 50px;\n            margin-bottom: 16px;\n            letter-spacing: -0.2px;\n        }\n\n        p.about-text {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            font-weight: 400;\n        }\n\n        .sticker-illustration {\n            text-align: center;\n            margin: 35px auto;\n            padding: 10px;\n        }\n\n        .sticker-illustration img {\n            width: 140px;\n            height: 140px;\n            display: block;\n            margin: 0 auto;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"about-container\">\n        <h1>Platform Responsibility Clause</h1>\n\n        <h2 class=\"section-heading\">1. Technical Operations &amp; Secure Routing</h2>\n        <p class=\"about-text\">\n            Our operational responsibility is strictly limited to the maintenance of the RummyDex directory infrastructure. We ensure that our platform accurately catalogs offline and casual online applications, and that all outbound resource links are generated through a secure, verified process. We guarantee that the links provided on our site correctly route users to the intended, legitimate third-party developer sources at the time of publication.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:gear.svg\" alt=\"Technical Operations Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">2. Limits of Content &amp; Software Liability</h2>\n        <p class=\"about-text\">\n            RummyDex does not host software, APK files, or proprietary source code on our servers. Because our control is strictly limited to our own website interface, we are not liable for the performance, data practices, or digital security of the external third-party destinations. Any downloading or installation of software from external sources is conducted solely at the user's discretion and risk.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:warning.svg\" alt=\"Software Liability Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">3. Post-Listing Developer Modifications</h2>\n        <p class=\"about-text\">\n            While our team conducts hands-on evaluation prior to listing any offline or online application, we do not govern the external developers. We are not responsible for unannounced updates, post-launch mechanic alterations, or software modifications implemented by third parties after an app has been published on our site.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:construction.svg\" alt=\"Post-Listing Modifications Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">4. Policy Enforcement &amp; User Experiences</h2>\n        <p class=\"about-text\">\n            For information regarding how RummyDex handles non-compliant developer updates, community oversight, and user-submitted reviews, please refer to our dedicated Report &amp; Removal Policy and our Terms &amp; Conditions.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:memo.svg\" alt=\"Policy Enforcement Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n    </div>\n\n</body>\n</html>\n",
  "seo_keywords": ".",
  "trending_searches": [
    "Yono rummy",
    "Yono Arcade",
    "Bingo 101",
    "Spin crush",
    "UNO!"
  ],
  "hero_title_visible": true,
  "social_links": {
    "linkedin": "",
    "twitter": "",
    "facebook": "",
    "instagram": "https://www.instagram.com/rummydex?igsh=MTJjaGR3c3hmdjhnZA==",
    "youtube": "https://www.youtube.com/@rummydex"
  },
  "secure_index_subtitle": "Your independent directory for hand-tested casual games and pure digital entertainment",
  "hero_title_animation": "slide-up"
};

export const saveMockSettings = (settings: GlobalSettings) => {
  try {
    localStorage.setItem('rummystore_settings', JSON.stringify(settings));
  } catch (e) {
    console.warn('saveMockSettings storage failed:', e);
  }
  Object.assign(mockSettings, settings);
};

export const mockNews: NewsItem[] = [];

export const saveMockNews = (newsList: NewsItem[]) => {
  try {
    localStorage.setItem('rummystore_news', JSON.stringify(newsList));
  } catch (e) {
    console.warn('saveMockNews storage failed:', e);
  }
  mockNews.splice(0, mockNews.length, ...newsList);
};

export const mockBlogs: BlogPost[] = [];

export const saveMockBlogs = (blogs: BlogPost[]) => {
  try {
    localStorage.setItem('rummystore_blogs', JSON.stringify(blogs));
  } catch (e) {
    console.warn('saveMockBlogs storage failed:', e);
  }
  mockBlogs.splice(0, mockBlogs.length, ...blogs);
};

export const mockVideos: VideoItem[] = [];

export const saveMockVideos = (videos: VideoItem[]) => {
  try {
    localStorage.setItem('rummystore_videos', JSON.stringify(videos));
  } catch (e) {
    console.warn('saveMockVideos storage failed:', e);
  }
  mockVideos.splice(0, mockVideos.length, ...videos);
};
