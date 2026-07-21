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
    "yellow_box_msg": "",
    "og_image_url": "",
    "name": "SPIN CRUSH ",
    "is_featured": false,
    "id": "q82dbbwh4",
    "rating": 5,
    "is_top_chart": true,
    "created_at": "2026-05-19T12:43:59.040Z",
    "is_hot": false,
    "release_notes": "",
    "seo_description": "",
    "custom_admin_box_html": "",
    "video_url": "",
    "canonical_url": "",
    "icon_url": "https://res.cloudinary.com/dq34n0ncz/image/upload/f_auto,q_auto/1000119573_wzwse4",
    "seo_keywords": "",
    "link_configured": true,
    "slug": "spin-crush-",
    "red_box_msg": "",
    "custom_admin_box_heading": "",
    "is_coming_soon": false,
    "version": "2.0.6",
    "serial_number": 2,
    "faqs": [],
    "category": "Yono, All App",
    "seo_title": "",
    "screenshots": [],
    "idea_box_msg": "",
    "file_size": "45",
    "developer": "Bingo ",
    "features_html": "",
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "target_region": "",
    "is_new": true
  },
  {
    "is_new": false,
    "target_region": "",
    "description_html": "<p>A new application.</p>",
    "safety_status": "Verified",
    "developer": "Arcade ",
    "features_html": "",
    "file_size": "56",
    "idea_box_msg": "",
    "screenshots": [],
    "seo_title": "",
    "category": "Yono, All App",
    "faqs": [],
    "serial_number": 3,
    "version": "1.20.1",
    "is_coming_soon": false,
    "custom_admin_box_heading": "",
    "red_box_msg": "",
    "slug": "yono-arcade",
    "link_configured": false,
    "icon_url": "https://13eehe59cj.ucarecd.net/67a16d31-6771-4617-b88b-288db51d321d/-/preview/554x554/",
    "seo_keywords": "",
    "canonical_url": "",
    "video_url": "",
    "custom_admin_box_html": "",
    "release_notes": "",
    "seo_description": "",
    "is_hot": false,
    "created_at": "2026-05-19T19:04:26.373Z",
    "rating": 3.4,
    "id": "31og4l26i",
    "is_featured": false,
    "name": "YONO ARCADE",
    "og_image_url": "",
    "yellow_box_msg": ""
  },
  {
    "video_url": "",
    "custom_admin_box_html": "",
    "link_configured": true,
    "seo_keywords": "",
    "icon_url": "https://res.cloudinary.com/dyigysy26/image/upload/f_auto,q_auto/1000119609_fkc9fm",
    "canonical_url": "",
    "slug": "jaiho-91",
    "red_box_msg": "",
    "name": "JAIHO 91",
    "og_image_url": "",
    "yellow_box_msg": "",
    "rating": 4.8,
    "id": "s5u553ymi",
    "is_featured": false,
    "created_at": "2026-05-19T19:23:07.133Z",
    "seo_description": "",
    "release_notes": "",
    "seo_title": "",
    "category": "Yono, All App",
    "file_size": "56",
    "screenshots": [],
    "idea_box_msg": "",
    "description_html": "<p>A new application.</p>",
    "safety_status": "Verified",
    "developer": "Jaiho",
    "features_html": "",
    "is_new": true,
    "target_region": "",
    "is_coming_soon": false,
    "custom_admin_box_heading": "",
    "serial_number": 3,
    "version": "1.20.1",
    "faqs": []
  },
  {
    "seo_title": "",
    "category": "Yono, All App",
    "file_size": "71",
    "screenshots": [],
    "idea_box_msg": "",
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "features_html": "",
    "developer": "Bingo",
    "is_new": false,
    "target_region": "",
    "is_coming_soon": false,
    "custom_admin_box_heading": "",
    "version": "2.5V",
    "serial_number": 5,
    "faqs": [],
    "video_url": "",
    "custom_admin_box_html": "",
    "seo_keywords": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/d3f6486a-b216-4582-b15d-0c735ff6b08f/-/preview/554x554/",
    "link_configured": true,
    "canonical_url": "",
    "slug": "bingo-101",
    "red_box_msg": "",
    "name": "BINGO 101",
    "yellow_box_msg": "",
    "og_image_url": "",
    "id": "awus3qajs",
    "rating": 3.6,
    "is_featured": false,
    "created_at": "2026-05-20T03:09:33.880Z",
    "release_notes": "",
    "seo_description": ""
  },
  {
    "red_box_msg": "",
    "slug": "ok-rummy",
    "icon_url": "https://13eehe59cj.ucarecd.net/97512d34-f561-4ede-8517-2112440079eb/-/preview/554x554/",
    "seo_keywords": "",
    "link_configured": true,
    "canonical_url": "",
    "video_url": "",
    "custom_admin_box_html": "",
    "release_notes": "",
    "seo_description": "",
    "created_at": "2026-05-20T03:50:33.674Z",
    "id": "0uiuuhdrj",
    "rating": 3,
    "is_featured": false,
    "name": "OK RUMMY",
    "yellow_box_msg": "",
    "og_image_url": "",
    "is_new": false,
    "target_region": "",
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "developer": "Bingo ",
    "features_html": "",
    "file_size": "67",
    "idea_box_msg": "",
    "screenshots": [],
    "seo_title": "",
    "category": "Yono, All App",
    "faqs": [],
    "version": "8.3.06.",
    "serial_number": 6,
    "is_coming_soon": false,
    "custom_admin_box_heading": ""
  },
  {
    "is_new": false,
    "target_region": "",
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "features_html": "",
    "developer": "Jaiho",
    "file_size": "70",
    "screenshots": [],
    "idea_box_msg": "",
    "seo_title": "",
    "category": "Yono, All App",
    "faqs": [],
    "version": "4.3",
    "serial_number": 7,
    "is_coming_soon": false,
    "custom_admin_box_heading": "",
    "red_box_msg": "",
    "slug": "jaiho-slots",
    "seo_keywords": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/2dfe5d55-7896-4f96-8f2b-132190e44f6f/-/preview/540x540/",
    "link_configured": true,
    "canonical_url": "",
    "video_url": "",
    "custom_admin_box_html": "",
    "release_notes": "",
    "seo_description": "",
    "created_at": "2026-05-20T03:53:24.482Z",
    "id": "4yt0f4yd0",
    "rating": 4.9,
    "is_featured": false,
    "name": "JAIHO SLOTS",
    "yellow_box_msg": "",
    "og_image_url": ""
  },
  {
    "og_image_url": "",
    "yellow_box_msg": "",
    "name": "BOSS RUMMY",
    "is_featured": false,
    "rating": 4.1,
    "id": "9r044fyi0",
    "created_at": "2026-05-20T03:56:42.075Z",
    "release_notes": "",
    "seo_description": "",
    "custom_admin_box_html": "",
    "video_url": "",
    "canonical_url": "",
    "link_configured": true,
    "seo_keywords": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/b5e9d896-71e8-49d6-b091-a971871161e0/-/preview/1000x1000/",
    "slug": "boss-rummy",
    "red_box_msg": "",
    "custom_admin_box_heading": "",
    "is_coming_soon": false,
    "serial_number": 8,
    "version": "2.5V",
    "faqs": [],
    "category": "Yono, All App",
    "seo_title": "",
    "screenshots": [],
    "idea_box_msg": "",
    "file_size": "54",
    "features_html": "",
    "developer": "Arcade ",
    "description_html": "<p>A new application.</p>",
    "safety_status": "Verified",
    "target_region": "",
    "is_new": false
  },
  {
    "video_url": "",
    "custom_admin_box_html": "",
    "link_configured": true,
    "seo_keywords": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/393c07ea-4f5e-43a9-ab0c-e12dfe7d755a/-/preview/474x474/",
    "canonical_url": "",
    "slug": "rummy-91",
    "red_box_msg": "",
    "name": "RUMMY 91",
    "og_image_url": "",
    "yellow_box_msg": "",
    "rating": 4.9,
    "id": "5b7fj0cq7",
    "is_featured": false,
    "created_at": "2026-05-20T04:01:04.611Z",
    "release_notes": "",
    "seo_description": "",
    "seo_title": "",
    "category": "All App",
    "file_size": "79",
    "idea_box_msg": "",
    "screenshots": [],
    "description_html": "<p>A new application.</p>",
    "safety_status": "Verified",
    "features_html": "",
    "developer": "Addi",
    "is_new": false,
    "target_region": "",
    "is_coming_soon": false,
    "custom_admin_box_heading": "",
    "serial_number": 9,
    "version": "2.0.6",
    "faqs": []
  },
  {
    "created_at": "2026-05-20T06:58:27.643Z",
    "seo_description": "",
    "release_notes": "",
    "name": "GOGO RUMMY ",
    "og_image_url": "",
    "yellow_box_msg": "",
    "rating": 3.9,
    "id": "ieam3hkbq",
    "is_featured": false,
    "slug": "gogo-rummy-",
    "red_box_msg": "",
    "video_url": "",
    "custom_admin_box_html": "",
    "link_configured": true,
    "icon_url": "https://13eehe59cj.ucarecd.net/0d710f11-2c9d-4312-89de-be65ce21a4fe/-/preview/750x750/",
    "seo_keywords": "",
    "canonical_url": "",
    "faqs": [],
    "is_coming_soon": false,
    "custom_admin_box_heading": "",
    "serial_number": 10,
    "version": "5.0",
    "description_html": "<p>A new application.</p>",
    "safety_status": "Verified",
    "features_html": "",
    "developer": "Sk varba",
    "is_new": false,
    "target_region": "",
    "seo_title": "",
    "category": "Yono, All App",
    "file_size": "65",
    "idea_box_msg": "",
    "screenshots": []
  },
  {
    "screenshots": [],
    "idea_box_msg": "",
    "file_size": "75",
    "category": "Yono, All App",
    "seo_title": "",
    "target_region": "",
    "is_new": false,
    "developer": "S.A vejay",
    "features_html": "",
    "description_html": "<p>A new application.</p>",
    "safety_status": "Verified",
    "serial_number": 11,
    "version": "1.8",
    "custom_admin_box_heading": "",
    "is_coming_soon": false,
    "faqs": [],
    "canonical_url": "",
    "link_configured": true,
    "seo_keywords": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/3059d25d-1497-4cff-aead-68758187fe0b/-/preview/554x554/",
    "custom_admin_box_html": "",
    "video_url": "",
    "red_box_msg": "",
    "slug": "club-inr",
    "is_featured": false,
    "rating": 4.6,
    "id": "5j5b7qbrw",
    "og_image_url": "",
    "yellow_box_msg": "",
    "name": "CLUB INR",
    "release_notes": "",
    "seo_description": "",
    "created_at": "2026-05-20T08:02:40.971Z"
  },
  {
    "created_at": "2026-05-26T07:04:36.330Z",
    "release_notes": "",
    "seo_description": "",
    "yellow_box_msg": "",
    "og_image_url": "",
    "name": "ABC Rummy ",
    "is_featured": false,
    "id": "f4ktp4dfi",
    "rating": 3.9,
    "slug": "abc-rummy-",
    "red_box_msg": "",
    "custom_admin_box_html": "",
    "video_url": "",
    "canonical_url": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/f7108631-b74a-49e5-8abf-37cec6950f7c/-/preview/512x512/",
    "seo_keywords": "",
    "link_configured": true,
    "faqs": [],
    "custom_admin_box_heading": "",
    "is_coming_soon": false,
    "version": "1.8",
    "serial_number": 12,
    "features_html": "",
    "developer": "Addi",
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "target_region": "",
    "is_new": false,
    "category": "Yono, All App",
    "seo_title": "",
    "idea_box_msg": "",
    "screenshots": [],
    "file_size": "61"
  },
  {
    "id": "4w1yxs6mm",
    "rating": 5,
    "is_featured": false,
    "name": "777.Rummy",
    "yellow_box_msg": "",
    "og_image_url": "",
    "seo_description": "",
    "release_notes": "",
    "created_at": "2026-05-26T07:09:01.068Z",
    "seo_keywords": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/fb951184-b849-4ff0-8882-a4d826508fb7/-/preview/190x190/",
    "link_configured": true,
    "canonical_url": "",
    "video_url": "",
    "custom_admin_box_html": "",
    "red_box_msg": "",
    "slug": "777-rummy",
    "version": "1.6",
    "serial_number": 13,
    "is_coming_soon": false,
    "custom_admin_box_heading": "",
    "faqs": [],
    "file_size": "54",
    "idea_box_msg": "",
    "screenshots": [],
    "seo_title": "",
    "category": "Yono, All App",
    "is_new": false,
    "target_region": "",
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "features_html": "",
    "developer": "AB Arora"
  },
  {
    "is_coming_soon": false,
    "custom_admin_box_heading": "",
    "version": "1.8",
    "serial_number": 14,
    "faqs": [],
    "seo_title": "",
    "category": "Yono, All App",
    "file_size": "59",
    "screenshots": [],
    "idea_box_msg": "",
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "developer": "AZ ever",
    "features_html": "",
    "is_new": false,
    "target_region": "",
    "name": "EVER 777",
    "yellow_box_msg": "",
    "og_image_url": "",
    "id": "w1sttlwv7",
    "rating": 4,
    "is_featured": false,
    "created_at": "2026-05-26T07:12:55.821Z",
    "seo_description": "",
    "release_notes": "",
    "video_url": "",
    "custom_admin_box_html": "",
    "seo_keywords": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/74347710-3cb2-468c-98eb-5666a0af487c/-/preview/190x190/",
    "link_configured": true,
    "canonical_url": "",
    "slug": "ever-777",
    "red_box_msg": ""
  },
  {
    "seo_description": "",
    "release_notes": "",
    "created_at": "2026-05-26T07:16:08.600Z",
    "is_featured": false,
    "id": "dp2lcn2ae",
    "rating": 4,
    "yellow_box_msg": "",
    "og_image_url": "",
    "name": "Game Rummy",
    "red_box_msg": "",
    "slug": "game-rummy",
    "canonical_url": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/4b2bd57d-9855-40a8-b452-34edee84ed09/-/preview/190x190/",
    "seo_keywords": "",
    "link_configured": true,
    "custom_admin_box_html": "",
    "video_url": "",
    "faqs": [],
    "version": "2.0",
    "serial_number": 15,
    "custom_admin_box_heading": "",
    "is_coming_soon": false,
    "target_region": "",
    "is_new": false,
    "features_html": "",
    "developer": "Raj dav",
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "screenshots": [],
    "idea_box_msg": "",
    "file_size": "75",
    "category": "Yono, All App",
    "seo_title": ""
  },
  {
    "is_coming_soon": false,
    "custom_admin_box_heading": "",
    "version": "1.9",
    "serial_number": 16,
    "faqs": [],
    "seo_title": "",
    "category": "Yono, All App",
    "file_size": "54",
    "screenshots": [],
    "idea_box_msg": "",
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "developer": "Addi",
    "features_html": "",
    "is_new": false,
    "target_region": "",
    "name": "Hi Rummy ",
    "yellow_box_msg": "",
    "og_image_url": "",
    "id": "4lgypb90h",
    "rating": 4.1,
    "is_featured": false,
    "created_at": "2026-05-26T07:18:29.456Z",
    "seo_description": "",
    "release_notes": "",
    "video_url": "",
    "custom_admin_box_html": "",
    "seo_keywords": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/c01e9676-e748-4342-9ac7-e972030981fc/-/preview/190x190/",
    "link_configured": true,
    "canonical_url": "",
    "slug": "hi-rummy-",
    "red_box_msg": ""
  },
  {
    "description_html": "<p>A new application.</p>",
    "safety_status": "Verified",
    "features_html": "",
    "developer": "Arcade ",
    "is_new": false,
    "target_region": "",
    "seo_title": "",
    "category": "Yono, All App",
    "file_size": "79",
    "screenshots": [],
    "idea_box_msg": "",
    "faqs": [],
    "is_coming_soon": false,
    "custom_admin_box_heading": "",
    "serial_number": 17,
    "version": "3.0",
    "slug": "inr-rummy",
    "red_box_msg": "",
    "video_url": "",
    "custom_admin_box_html": "",
    "link_configured": true,
    "icon_url": "https://13eehe59cj.ucarecd.net/2a718650-0602-495f-9ca4-b13c86e58c02/-/preview/190x190/",
    "seo_keywords": "",
    "canonical_url": "",
    "created_at": "2026-05-26T07:21:55.085Z",
    "seo_description": "",
    "release_notes": "",
    "is_hot": false,
    "name": "INR Rummy",
    "og_image_url": "",
    "yellow_box_msg": "",
    "rating": 5,
    "id": "2f90a87hv",
    "is_featured": false
  },
  {
    "faqs": [],
    "is_coming_soon": false,
    "custom_admin_box_heading": "",
    "version": "2.1",
    "serial_number": 18,
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "features_html": "",
    "developer": "PW sahar",
    "is_new": false,
    "target_region": "",
    "seo_title": "",
    "category": "Yono, All App",
    "file_size": "2.4",
    "idea_box_msg": "",
    "screenshots": [],
    "created_at": "2026-05-26T07:26:42.606Z",
    "seo_description": "",
    "release_notes": "",
    "name": "JAIHO RUMMY ",
    "yellow_box_msg": "",
    "og_image_url": "",
    "id": "9a05609sb",
    "rating": 3.9,
    "is_featured": false,
    "slug": "jaiho-rummy-",
    "red_box_msg": "",
    "video_url": "",
    "custom_admin_box_html": "",
    "seo_keywords": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/c693366d-d543-4d76-84ba-3963a3f3c792/-/preview/190x190/",
    "link_configured": true,
    "canonical_url": ""
  },
  {
    "faqs": [],
    "version": "1.6",
    "serial_number": 19,
    "is_coming_soon": false,
    "custom_admin_box_heading": "",
    "is_new": false,
    "target_region": "",
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "developer": "Mak job",
    "features_html": "",
    "file_size": "68",
    "screenshots": [],
    "idea_box_msg": "",
    "seo_title": "",
    "category": "Yono, All App",
    "release_notes": "",
    "seo_description": "",
    "created_at": "2026-05-26T07:31:59.173Z",
    "id": "l7a60keix",
    "rating": 4.2,
    "is_featured": false,
    "name": "Love Rummy",
    "yellow_box_msg": "",
    "og_image_url": "",
    "red_box_msg": "",
    "slug": "love-rummy",
    "seo_keywords": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/cf0b4466-3d5b-4eb5-bc88-afc9a8213ac4/-/preview/190x190/",
    "link_configured": true,
    "canonical_url": "",
    "video_url": "",
    "custom_admin_box_html": ""
  },
  {
    "serial_number": 20,
    "version": "1.8",
    "custom_admin_box_heading": "",
    "is_coming_soon": false,
    "faqs": [],
    "idea_box_msg": "",
    "screenshots": [],
    "file_size": "50",
    "category": "Yono, All App",
    "seo_title": "",
    "target_region": "",
    "is_new": false,
    "developer": "AB Arora",
    "features_html": "",
    "description_html": "<p>A new application.</p>",
    "safety_status": "Verified",
    "is_featured": false,
    "rating": 5,
    "id": "4paka7kie",
    "og_image_url": "",
    "yellow_box_msg": "",
    "name": "JOY RUMMY",
    "seo_description": "",
    "release_notes": "",
    "created_at": "2026-05-26T07:34:35.782Z",
    "canonical_url": "",
    "link_configured": false,
    "icon_url": "https://13eehe59cj.ucarecd.net/e0898894-5d5b-47ab-a14f-13b4514b3b4f/-/preview/190x190/",
    "seo_keywords": "",
    "custom_admin_box_html": "",
    "video_url": "",
    "red_box_msg": "",
    "slug": "joy-rummy"
  },
  {
    "faqs": [],
    "custom_admin_box_heading": "",
    "is_coming_soon": false,
    "version": "1.0",
    "serial_number": 21,
    "developer": "AZ ever",
    "features_html": "",
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "target_region": "",
    "is_new": false,
    "category": "Yono, All App",
    "seo_title": "",
    "screenshots": [],
    "idea_box_msg": "",
    "file_size": "70",
    "created_at": "2026-05-26T07:37:07.122Z",
    "release_notes": "",
    "seo_description": "",
    "yellow_box_msg": "",
    "og_image_url": "",
    "name": "MAHA GAMES",
    "is_featured": false,
    "id": "2768ohu2a",
    "rating": 4,
    "slug": "maha-games",
    "red_box_msg": "",
    "custom_admin_box_html": "",
    "video_url": "",
    "canonical_url": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/2d664adc-3e1f-4317-805c-dea453f52389/-/preview/190x190/",
    "seo_keywords": "",
    "link_configured": true
  },
  {
    "yellow_box_msg": "",
    "og_image_url": "",
    "name": "Rummy Ludo",
    "is_featured": false,
    "id": "us5xuk5bm",
    "rating": 3.9,
    "created_at": "2026-05-26T07:39:44.282Z",
    "seo_description": "",
    "release_notes": "",
    "custom_admin_box_html": "",
    "video_url": "",
    "canonical_url": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/6aa28ca8-cef1-4d1a-b054-13e242eaef02/-/preview/190x190/",
    "seo_keywords": "",
    "link_configured": true,
    "slug": "rummy-ludo",
    "red_box_msg": "",
    "custom_admin_box_heading": "",
    "is_coming_soon": false,
    "version": "5.8",
    "serial_number": 22,
    "faqs": [],
    "category": "Yono, All App",
    "seo_title": "",
    "idea_box_msg": "",
    "screenshots": [],
    "file_size": "58",
    "developer": "AZ ever",
    "features_html": "",
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "target_region": "",
    "is_new": false
  },
  {
    "features_html": "",
    "developer": "Arcade ",
    "description_html": "<p>A new application.</p>",
    "safety_status": "Verified",
    "target_region": "",
    "is_new": false,
    "category": "Yono, All App",
    "seo_title": "",
    "screenshots": [],
    "idea_box_msg": "",
    "file_size": "45",
    "faqs": [],
    "custom_admin_box_heading": "",
    "is_coming_soon": false,
    "serial_number": 23,
    "version": "2.0.6",
    "slug": "rummy-77",
    "red_box_msg": "",
    "custom_admin_box_html": "",
    "video_url": "",
    "canonical_url": "",
    "link_configured": true,
    "icon_url": "https://13eehe59cj.ucarecd.net/d17abcfc-c8dc-4c36-8558-e3408002d37e/-/preview/190x190/",
    "seo_keywords": "",
    "created_at": "2026-05-26T07:42:24.615Z",
    "release_notes": "",
    "seo_description": "",
    "og_image_url": "",
    "yellow_box_msg": "",
    "name": "Rummy 77",
    "is_featured": false,
    "rating": 3.9,
    "id": "69x1lstq7"
  },
  {
    "created_at": "2026-05-26T07:44:32.442Z",
    "seo_description": "",
    "release_notes": "",
    "og_image_url": "",
    "yellow_box_msg": "",
    "name": "Share Slots",
    "is_featured": false,
    "rating": 4,
    "id": "j79n2g3l9",
    "slug": "share-slots",
    "red_box_msg": "",
    "custom_admin_box_html": "",
    "video_url": "",
    "canonical_url": "",
    "link_configured": false,
    "seo_keywords": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/2738be7d-f198-4f70-a7d8-c8eb5f452eb0/-/preview/190x190/",
    "faqs": [],
    "custom_admin_box_heading": "",
    "is_coming_soon": false,
    "serial_number": 24,
    "version": "1.8",
    "features_html": "",
    "developer": "AB Arora",
    "description_html": "<p>A new application.</p>",
    "safety_status": "Verified",
    "target_region": "",
    "is_new": false,
    "category": "Yono, All App",
    "seo_title": "",
    "screenshots": [],
    "idea_box_msg": "",
    "file_size": "58"
  },
  {
    "red_box_msg": "",
    "slug": "567-slots",
    "canonical_url": "",
    "link_configured": true,
    "icon_url": "https://13eehe59cj.ucarecd.net/e4314d5e-eb77-46b9-8998-8e0f94970b38/-/preview/72x72/",
    "seo_keywords": "",
    "custom_admin_box_html": "",
    "video_url": "",
    "seo_description": "",
    "release_notes": "",
    "created_at": "2026-05-26T07:51:47.637Z",
    "is_featured": false,
    "rating": 3.5,
    "id": "n3w2vjk0b",
    "og_image_url": "",
    "yellow_box_msg": "",
    "name": "567 SLOTS",
    "target_region": "",
    "is_new": false,
    "features_html": "",
    "developer": "Tania JK ",
    "description_html": "<p>A new application.</p>",
    "safety_status": "Verified",
    "idea_box_msg": "",
    "screenshots": [],
    "file_size": "65",
    "category": "Yono, All App",
    "seo_title": "",
    "faqs": [],
    "serial_number": 26,
    "version": "1.6",
    "custom_admin_box_heading": "",
    "is_coming_soon": false
  },
  {
    "faqs": [],
    "is_coming_soon": false,
    "custom_admin_box_heading": "",
    "serial_number": 27,
    "version": "1.9",
    "description_html": "<p>A new application.</p>",
    "safety_status": "Verified",
    "features_html": "",
    "developer": "Admin",
    "is_new": false,
    "target_region": "",
    "seo_title": "",
    "category": "Yono, All App",
    "file_size": "Tanu WD",
    "screenshots": [],
    "idea_box_msg": "",
    "created_at": "2026-05-26T07:56:30.478Z",
    "seo_description": "",
    "release_notes": "",
    "name": "789Jackpots",
    "og_image_url": "",
    "yellow_box_msg": "",
    "rating": 2.9,
    "id": "owxg4aekg",
    "is_featured": false,
    "slug": "789jackpots",
    "red_box_msg": "",
    "video_url": "",
    "custom_admin_box_html": "",
    "link_configured": true,
    "icon_url": "https://13eehe59cj.ucarecd.net/a0cedc36-33b0-4e75-a1ea-cd963b3ee0ca/-/preview/190x190/",
    "seo_keywords": "",
    "canonical_url": ""
  },
  {
    "features_html": "",
    "developer": "Rahul HL",
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "target_region": "",
    "is_new": false,
    "category": "Yono, All App",
    "seo_title": "",
    "screenshots": [],
    "idea_box_msg": "",
    "file_size": "78",
    "faqs": [],
    "custom_admin_box_heading": "",
    "is_coming_soon": false,
    "version": "1.8",
    "serial_number": 28,
    "slug": "yono-vip",
    "red_box_msg": "",
    "custom_admin_box_html": "",
    "video_url": "",
    "canonical_url": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/d9226164-7447-425e-ba61-618d72ed28df/-/preview/190x190/",
    "seo_keywords": "",
    "link_configured": true,
    "created_at": "2026-05-26T08:00:01.636Z",
    "release_notes": "",
    "seo_description": "",
    "yellow_box_msg": "",
    "og_image_url": "",
    "name": "YONO VIP",
    "is_featured": false,
    "id": "fw5wsziec",
    "rating": 4
  },
  {
    "faqs": [],
    "is_coming_soon": true,
    "custom_admin_box_heading": "",
    "serial_number": 34,
    "version": "3",
    "description_html": "<p>A new application.</p>",
    "safety_status": "Verified",
    "developer": "Unknown ",
    "features_html": "",
    "is_new": true,
    "target_region": "",
    "seo_title": "",
    "category": "Card",
    "file_size": "90",
    "screenshots": [],
    "idea_box_msg": "",
    "created_at": "2026-06-03T10:17:01.058Z",
    "seo_description": "",
    "release_notes": "",
    "name": "Teen Patti Octro",
    "og_image_url": "",
    "yellow_box_msg": "",
    "rating": 4.2,
    "id": "t1ocq5iar",
    "is_featured": false,
    "slug": "teen-patti-octro",
    "red_box_msg": "",
    "video_url": "",
    "custom_admin_box_html": "",
    "publish_date": "2026-06-10T12:00:00.000Z",
    "link_configured": true,
    "seo_keywords": "",
    "icon_url": "https://kk19a1nwwx.ucarecd.net/091fdebe-1562-41c6-99ea-b60665adb5ee/-/preview/512x512/",
    "canonical_url": ""
  },
  {
    "faqs": [],
    "is_coming_soon": true,
    "custom_admin_box_heading": "",
    "serial_number": 29,
    "version": "1.0",
    "description_html": "<p>A new application.</p>",
    "safety_status": "Verified",
    "features_html": "",
    "developer": "Admin",
    "is_new": false,
    "target_region": "",
    "seo_title": "",
    "category": "Card",
    "file_size": "Unknown",
    "screenshots": [],
    "idea_box_msg": "",
    "created_at": "2026-06-03T10:30:01.393Z",
    "release_notes": "",
    "seo_description": "",
    "name": "Zynga Poker- Texas Holdem Game",
    "og_image_url": "",
    "yellow_box_msg": "",
    "rating": 5,
    "id": "rrmv44n9n",
    "is_featured": false,
    "slug": "zynga-poker-texas-holdem-game",
    "red_box_msg": "",
    "video_url": "",
    "custom_admin_box_html": "",
    "link_configured": true,
    "icon_url": "https://kk19a1nwwx.ucarecd.net/5b72cf8f-4959-426e-9e1d-8e2150529efb/-/preview/240x240/",
    "seo_keywords": "",
    "canonical_url": ""
  },
  {
    "seo_title": "",
    "category": "Card",
    "file_size": "Unknown",
    "idea_box_msg": null,
    "screenshots": [],
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "developer": "Admin",
    "features_html": null,
    "is_new": true,
    "target_region": "",
    "is_coming_soon": true,
    "custom_admin_box_heading": null,
    "version": "1.0",
    "serial_number": 30,
    "faqs": [],
    "custom_admin_box_html": null,
    "seo_keywords": "",
    "icon_url": "https://1ewg1yyass.ucarecd.net/c0172402-c854-4016-876e-6b7769547c8f/-/preview/238x211/",
    "link_configured": true,
    "canonical_url": "",
    "slug": "uno-",
    "red_box_msg": null,
    "name": "UNO! ",
    "yellow_box_msg": null,
    "og_image_url": "",
    "id": "wf59smk6l",
    "rating": 5,
    "is_featured": false,
    "created_at": "2026-06-07T10:14:11.138Z",
    "release_notes": "",
    "seo_description": ""
  },
  {
    "file_size": "Unknown",
    "screenshots": [],
    "idea_box_msg": "",
    "seo_title": "",
    "category": "Card",
    "is_new": false,
    "target_region": "",
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "developer": "Admin",
    "version": "1.0",
    "serial_number": 31,
    "is_coming_soon": true,
    "custom_admin_box_heading": "",
    "faqs": [],
    "icon_url": "https://1ewg1yyass.ucarecd.net/33e0d4e8-6e41-4791-9e41-8d915a12e504/-/preview/447x447/",
    "seo_keywords": "",
    "link_configured": true,
    "canonical_url": "",
    "custom_admin_box_html": "",
    "red_box_msg": "",
    "slug": "rummy-gold-with-fast-rummy",
    "id": "8epj9jjpu",
    "rating": 5,
    "is_featured": false,
    "name": "Rummy GOLD - With Fast Rummy",
    "yellow_box_msg": "",
    "og_image_url": "",
    "seo_description": "",
    "release_notes": "",
    "created_at": "2026-06-07T10:16:45.949Z"
  },
  {
    "version": "1.0",
    "serial_number": 32,
    "custom_admin_box_heading": null,
    "is_coming_soon": true,
    "faqs": [],
    "screenshots": [],
    "idea_box_msg": null,
    "file_size": "Unknown",
    "category": "Card",
    "seo_title": "",
    "target_region": "",
    "is_new": true,
    "developer": "Admin",
    "features_html": null,
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "is_featured": false,
    "id": "8jt0hokyo",
    "rating": 5,
    "yellow_box_msg": null,
    "og_image_url": "",
    "name": "Indian Rummy 3 Patti Card Game",
    "seo_description": "",
    "release_notes": "",
    "created_at": "2026-06-07T10:19:11.616Z",
    "canonical_url": "",
    "seo_keywords": "",
    "icon_url": "https://1ewg1yyass.ucarecd.net/2a4b59ef-16a3-4b14-bad3-1c3796af3492/-/preview/447x447/",
    "link_configured": true,
    "custom_admin_box_html": null,
    "red_box_msg": null,
    "slug": "indian-rummy-3-patti-card-game"
  },
  {
    "version": "1.0",
    "serial_number": 33,
    "is_coming_soon": true,
    "custom_admin_box_heading": "",
    "faqs": [],
    "file_size": "Unknown",
    "screenshots": [],
    "idea_box_msg": "",
    "seo_title": "",
    "category": "Slots",
    "is_new": false,
    "target_region": "",
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "features_html": "",
    "developer": "Admin",
    "id": "01x9h7nfb",
    "rating": 5,
    "is_featured": false,
    "name": "Lucky Spin Slots",
    "yellow_box_msg": "",
    "og_image_url": "https://1ewg1yyass.ucarecd.net/0f918f11-b247-4b5a-9d26-d510dddffbfe/-/preview/447x447/",
    "release_notes": "",
    "seo_description": "",
    "created_at": "2026-06-07T13:13:11.211Z",
    "icon_url": "https://1ewg1yyass.ucarecd.net/0f918f11-b247-4b5a-9d26-d510dddffbfe/-/preview/447x447/",
    "seo_keywords": "",
    "link_configured": true,
    "canonical_url": "",
    "publish_date": "2026-07-08T13:08:00.000Z",
    "custom_admin_box_html": "",
    "red_box_msg": "",
    "slug": "lucky-spin-slots"
  },
  {
    "slug": "ind-club",
    "red_box_msg": "",
    "video_url": "",
    "publish_date": "2026-06-12T15:30:00.000Z",
    "custom_admin_box_html": "",
    "link_configured": true,
    "icon_url": "https://1ewg1yyass.ucarecd.net/9d9339e0-77d4-418b-86f8-0a0e074c1d4e/-/preview/190x190/",
    "seo_keywords": "",
    "canonical_url": "",
    "created_at": "2026-06-12T12:39:30.407Z",
    "seo_description": "",
    "release_notes": "",
    "name": "IND Club",
    "og_image_url": "",
    "yellow_box_msg": "",
    "rating": 4.5,
    "id": "3cflt97b5",
    "is_featured": false,
    "description_html": "<p>A new application.</p>",
    "safety_status": "Verified",
    "developer": "AB Arora",
    "features_html": "",
    "is_new": false,
    "target_region": "",
    "seo_title": "",
    "category": "Yono",
    "file_size": "76",
    "screenshots": [],
    "idea_box_msg": "",
    "faqs": [],
    "is_coming_soon": true,
    "custom_admin_box_heading": "",
    "serial_number": 28,
    "version": "1.0"
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
  "secure_index_subtitle": "The Ultimate Registry for Strategic Card Simulation, Arcade Logic, and Premium Virtual Gameplay Guides",
  "helpline_telegram": "https://t.me",
  "ethics_discrimination_text": "<div ",
  "contact_content": "<p>Have questions or feedback? We'd love to hear from you. Our team typically responds within 24-48 hours.</p>",
  "logo_url": "https://y4q7avaws.ucarecd.net/b391a2fa-42f7-4b3a-a0d5-605cb22aead4/-/preview/1000x1000/",
  "hero_title_text": "R",
  "site_title": "RummyDex ",
  "banners": [],
  "important_notice": "<div ",
  "meta_description": "Step into the world of Rummy - compete, challenge friends, and rise to the top on RummyApp Online!",
  "seo_keywords": "RummyDex ",
  "social_links": {
    "linkedin": "",
    "youtube": "",
    "facebook": "",
    "instagram": "",
    "twitter": ""
  },
  "hero_title_subtitle": "C",
  "ticker_text": "L",
  "important_notice_heading": "VERY IMPORTANT NOTICE ",
  "hero_title_style": "mono",
  "about_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>About Us - RummyDex</title>\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\" rel=\"stylesheet\">\n\n    <style>\n        body {\n            font-family: 'Roboto', Arial, sans-serif;\n            line-height: 1.75;\n            background-color: #ffffff;\n            margin: 0;\n            padding: 60px 20px;\n            display: flex;\n            justify-content: center;\n        }\n\n        .about-container {\n            max-width: 720px;\n            width: 100%;\n        }\n\n        h1 {\n            font-size: 44px;\n            font-weight: 700;\n            color: #202124;\n            margin-bottom: 40px;\n            text-align: center;\n            letter-spacing: -0.5px;\n        }\n\n        h2.section-heading {\n            font-size: 28px;\n            font-weight: 500;\n            color: #202124;\n            margin-top: 50px;\n            margin-bottom: 16px;\n            letter-spacing: -0.2px;\n        }\n\n        p.about-text {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            font-weight: 400;\n        }\n\n        .sticker-illustration {\n            text-align: center;\n            margin: 35px auto;\n            padding: 10px;\n        }\n\n        .sticker-illustration img {\n            width: 140px;\n            height: auto;\n            display: block;\n            margin: 0 auto;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"about-container\">\n        <h1>About Us</h1>\n\n        <h2 class=\"section-heading\">The Meaning of \"Dex\" (Who We Are)</h2>\n        <p class=\"about-text\">\n            Welcome to RummyDex. The word \"Dex\" stands for index or directory, which perfectly describes our core identity. We are an independent digital library built to catalog, review, and provide structured, transparent information about casual games and digital applications. Our platform is designed to be a complete informational hub for entertainment enthusiasts.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:card-index-dividers.svg\" alt=\"Index Directory Sticker\">\n        </div>\n\n        <h2 class=\"section-heading\">How We Provide Information & Links</h2>\n        <p class=\"about-text\">\n            We function strictly as an informational bridge. Instead of hosting direct software or APK files on our servers, we provide comprehensive technical breakdowns, clear guides, and safe, direct links to third-party developer sources. This ensures that our platform remains fast and secure, and that you always access applications straight from the source.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:link.svg\" alt=\"Direct Links Sticker\">\n        </div>\n\n        <h2 class=\"section-heading\">Real Hands-On Testing & Experience</h2>\n        <p class=\"about-text\">\n            We do not just list apps blindly. Before any application is published on our platform, our team conducts a real, hands-on test. We personally experience the app's performance, mechanics, and user interface to ensure it meets our strict entertainment standards before it ever reaches our directory.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:magnifying-glass-tilted-right.svg\" alt=\"Hands-on Testing Sticker\">\n        </div>\n\n        <h2 class=\"section-heading\">Complete Transparency & Neutrality</h2>\n        <p class=\"about-text\">\n            RummyDex operates with 100% complete transparency and zero developer bias. We act entirely as an independent informational resource. Our goal is to provide honest, neutral, and clear breakdowns so that you can make fully informed choices about your offline and casual online entertainment.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:balance-scale.svg\" alt=\"Transparency and Neutrality Sticker\">\n        </div>\n    </div>\n\n</body>\n</html>",
  "favicon_url": "https://y4q7avawns.ucarecd.net/b391a2fa-42f7-4b3a-a0d5-605cb22aead4/-/preview/1000x1000/",
  "disclaimer_heading": "DISCLAIMER ",
  "privacy_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Privacy Policy - RummyDex</title>\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\" rel=\"stylesheet\">\n\n    <style>\n        body {\n            font-family: 'Roboto', Arial, sans-serif;\n            line-height: 1.75;\n            background-color: #ffffff;\n            margin: 0;\n            padding: 60px 20px;\n            display: flex;\n            justify-content: center;\n        }\n\n        .about-container {\n            max-width: 720px;\n            width: 100%;\n        }\n\n        h1 {\n            font-size: 44px;\n            font-weight: 700;\n            color: #202124;\n            margin-bottom: 8px;\n            text-align: center;\n            letter-spacing: -0.5px;\n        }\n\n        .effective-date {\n            text-align: center;\n            font-size: 14px;\n            color: #5f6368;\n            margin-bottom: 40px;\n        }\n\n        h2.section-heading {\n            font-size: 28px;\n            font-weight: 500;\n            color: #202124;\n            margin-top: 50px;\n            margin-bottom: 16px;\n            letter-spacing: -0.2px;\n        }\n\n        p.about-text {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            font-weight: 400;\n        }\n\n        .sticker-illustration {\n            text-align: center;\n            margin: 35px auto;\n            padding: 10px;\n        }\n\n        .sticker-illustration img {\n            width: 140px;\n            height: auto;\n            display: block;\n            margin: 0 auto;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"about-container\">\n        <h1>Privacy Policy</h1>\n        <p class=\"effective-date\">Effective Date: July 21, 2026</p>\n\n        <h2 class=\"section-heading\">1. Introduction</h2>\n        <p class=\"about-text\">\n            Welcome to RummyDex. This Privacy Policy governs the manner in which RummyDex collects, uses, maintains, and discloses information collected from users visiting our digital directory and software index. We are committed to safeguarding your privacy and ensuring transparency in how your data is handled while you navigate our platform.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:open-book.svg\" alt=\"Privacy Policy Introduction Sticker\">\n        </div>\n\n        <h2 class=\"section-heading\">2. Information Collection</h2>\n        <p class=\"about-text\">\n            RummyDex operates strictly as an informational index. We do not require users to create accounts, register, or provide sensitive personal identification information to access our directory.\n        </p>\n        <p class=\"about-text\">\n            We may collect non-personally identifiable information about users whenever they interact with our website. This data is collected automatically and may include the browser name, the type of computer or device, internet service providers, IP addresses, geographical region, and technical information regarding the user's means of connection to our site.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:bar-chart.svg\" alt=\"Information Collection Sticker\">\n        </div>\n\n        <h2 class=\"section-heading\">3. Web Browser Cookies</h2>\n        <p class=\"about-text\">\n            Our website uses \"cookies\" to enhance the user experience, analyze site traffic, and optimize our directory structure. A cookie is a small text file placed on a user's hard drive for record-keeping purposes and to track non-personal information. Users may choose to set their web browser to refuse cookies or to alert them when cookies are being sent. Please note that if cookies are disabled, some parts of the site may not function properly.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:cookie.svg\" alt=\"Web Browser Cookies Sticker\">\n        </div>\n\n        <h2 class=\"section-heading\">4. Third-Party Services</h2>\n        <p class=\"about-text\">\n            To maintain and support our directory, we may work with standard third-party services for analytics and content delivery. These partners may utilize cookies or similar technologies to provide relevant information and promotions based on your interactions with our site and other websites. You retain full control over your cookie preferences and can adjust, manage, or disable them at any time through your web browser settings or standard network opt-out pages.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:handshake.svg\" alt=\"Third-Party Services Sticker\">\n        </div>\n\n        <h2 class=\"section-heading\">5. Secure External Links and Third-Party Applications</h2>\n        <p class=\"about-text\">\n            RummyDex is an informational bridge. We do not host APKs or software files directly on our servers. Instead, we provide safe, correct links to external, third-party software developers through a secure, carefully verified process to ensure users are directed appropriately. When you click on a link and navigate to a third-party application, you are leaving our jurisdiction. We do not control the content, privacy practices, or data collection policies of these external destinations. Interaction with any other website or application is subject to that entity's own terms and policies.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:globe-with-meridians.svg\" alt=\"External Links Sticker\">\n        </div>\n\n        <h2 class=\"section-heading\">6. Data Security</h2>\n        <p class=\"about-text\">\n            We adopt appropriate data collection, storage, and processing practices, alongside strict security measures, to protect against unauthorized access, alteration, disclosure, or destruction of your non-personal information and data stored on our site. However, no data transmission over the internet or wireless network can be guaranteed to be 100% secure.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:locked.svg\" alt=\"Data Security Sticker\">\n        </div>\n\n        <h2 class=\"section-heading\">7. Acceptance of These Terms</h2>\n        <p class=\"about-text\">\n            By using RummyDex, you signify your acceptance of this Privacy Policy. If you do not agree to this policy, please do not use our site. We reserve the right to update or modify this Privacy Policy at any time. Continued use of the site following the posting of changes to this policy will be deemed your acceptance of those changes.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:balance-scale.svg\" alt=\"Acceptance of Terms Sticker\">\n        </div>\n    </div>\n\n</body>\n</html>",
  "hero_title_color": "neon-sky",
  "helpline_whatsapp": "+918653034735",
  "responsibility_content": "<!-- ",
  "secure_index_title": "RummyApp Online ",
  "quick_links": [],
  "portal_heading": "IMPORTANT NOTICE ",
  "categories": [
    "Yono",
    "Card",
    "Slots"
  ],
  "support_email": "support@rummydex.com",
  "terms_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Terms & Conditions - RummyDex</title>\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\" rel=\"stylesheet\">\n\n    <style>\n        body {\n            font-family: 'Roboto', Arial, sans-serif;\n            line-height: 1.75;\n            background-color: #ffffff;\n            margin: 0;\n            padding: 60px 20px;\n            display: flex;\n            justify-content: center;\n        }\n\n        .about-container {\n            max-width: 720px;\n            width: 100%;\n        }\n\n        h1 {\n            font-size: 44px;\n            font-weight: 700;\n            color: #202124;\n            margin-bottom: 8px;\n            text-align: center;\n            letter-spacing: -0.5px;\n        }\n\n        .effective-date {\n            text-align: center;\n            font-size: 14px;\n            color: #5f6368;\n            margin-bottom: 40px;\n        }\n\n        h2.section-heading {\n            font-size: 28px;\n            font-weight: 500;\n            color: #202124;\n            margin-top: 50px;\n            margin-bottom: 16px;\n            letter-spacing: -0.2px;\n        }\n\n        p.about-text {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            font-weight: 400;\n        }\n\n        ul.about-list {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            padding-left: 24px;\n        }\n\n        ul.about-list li {\n            margin-bottom: 12px;\n        }\n\n        .sticker-illustration {\n            text-align: center;\n            margin: 35px auto;\n            padding: 10px;\n        }\n\n        .sticker-illustration img {\n            width: 140px;\n            height: auto;\n            display: block;\n            margin: 0 auto;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"about-container\">\n        <h1>Terms &amp; Conditions</h1>\n        <p class=\"effective-date\">Effective Date: July 21, 2026</p>\n\n        <h2 class=\"section-heading\">1. Agreement to Terms</h2>\n        <p class=\"about-text\">\n            By accessing or using RummyDex, you agree to be bound by these Terms &amp; Conditions. If you disagree with any part of these terms, you are prohibited from using our website. These terms apply to all visitors, users, and others who access our directory.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:handshake.svg\" alt=\"Agreement to Terms Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">2. Intellectual Property and Copyright</h2>\n        <p class=\"about-text\">\n            The original content, layout, design, and structural organization of the RummyDex directory are the exclusive property of RummyDex. However, we do not claim ownership over the third-party applications listed on our site. All app names, logos, trademarks, and associated digital assets belong to their respective external developers and publishers.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:copyright.svg\" alt=\"Intellectual Property and Copyright Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">3. Acceptable Use of the Directory</h2>\n        <p class=\"about-text\">\n            RummyDex is provided solely for your personal, non-commercial informational use. You agree not to:\n        </p>\n        <ul class=\"about-list\">\n            <li>Use automated scripts, bots, or web scrapers to extract data, reviews, or links from our directory.</li>\n            <li>Interfere with or disrupt the security, servers, or networks connected to our website.</li>\n            <li>Submit false, spam, or malicious reports through our App Reporting system.</li>\n        </ul>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:no-entry.svg\" alt=\"Acceptable Use Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">4. Third-Party Links and Software Disclaimer</h2>\n        <p class=\"about-text\">\n            RummyDex functions as an informational bridge. While we utilize a secure, carefully verified process to provide correct links to external applications, we do not host any software or APK files on our own servers.\n        </p>\n        <p class=\"about-text\">\n            You acknowledge that clicking an external link takes you to a third-party destination that we do not control. You agree that any downloading, installation, or use of third-party software is done entirely at your own risk. RummyDex is not responsible for any damage to your device, loss of data, or other issues resulting from the use of third-party applications discovered through our index.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:warning.svg\" alt=\"Third-Party Software Disclaimer Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">5. App Reporting &amp; Removal Guarantee</h2>\n        <p class=\"about-text\">\n            We maintain a strict zero-tolerance policy for apps that introduce unauthorized real-money gaming (RMG) mechanics. If a user reports an application for violating these standards, we will review the claim and enforce our 100% removal guarantee. We reserve the right to remove, modify, or delist any application from our directory at our sole discretion, without prior notice to the app's developer.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:megaphone.svg\" alt=\"App Reporting and Removal Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">6. Limitation of Liability</h2>\n        <p class=\"about-text\">\n            To the maximum extent permitted by law, RummyDex and its team shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of, or inability to use, our directory or the external applications linked within it. Our platform is provided on an \"as is\" and \"as available\" basis without any warranties of any kind.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:balance-scale.svg\" alt=\"Limitation of Liability Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">7. Modifications to Terms</h2>\n        <p class=\"about-text\">\n            We reserve the right to revise these Terms &amp; Conditions at any time. By continuing to access or use RummyDex after those revisions become effective, you agree to be bound by the revised terms.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:memo.svg\" alt=\"Modifications to Terms Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n    </div>\n\n</body>\n</html>",
  "disclaimer_text": "<div ",
  "ethics_heading": "ETHNICS",
  "last_updated": "2026-07-21T06:06:57.084Z",
  "trending_searches": [],
  "website_faqs": [],
  "hero_title_animation": "slide-up",
  "hero_title_visible": true,
  "animations_enabled": true
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
