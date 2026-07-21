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
    "canonical_url": "",
    "file_size": "45",
    "developer": "Bingo ",
    "og_image_url": "",
    "seo_description": "",
    "id": "q82dbbwh4",
    "is_hot": false,
    "video_url": "",
    "slug": "spin-crush-",
    "category": "Yono, All App",
    "idea_box_msg": "",
    "is_coming_soon": false,
    "safety_status": "Verified",
    "created_at": "2026-05-19T12:43:59.040Z",
    "red_box_msg": "",
    "rating": 5,
    "features_html": "",
    "name": "SPIN CRUSH ",
    "target_region": "",
    "is_featured": false,
    "yellow_box_msg": "",
    "seo_title": "",
    "is_top_chart": true,
    "custom_admin_box_heading": "",
    "version": "2.0.6",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://res.cloudinary.com/dq34n0ncz/image/upload/f_auto,q_auto/1000119573_wzwse4",
    "serial_number": 2,
    "seo_keywords": "",
    "is_new": true,
    "release_notes": "",
    "screenshots": [],
    "faqs": [],
    "custom_admin_box_html": "",
    "link_configured": true
  },
  {
    "custom_admin_box_heading": "",
    "version": "1.20.1",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://13eehe59cj.ucarecd.net/67a16d31-6771-4617-b88b-288db51d321d/-/preview/554x554/",
    "is_featured": false,
    "yellow_box_msg": "",
    "seo_title": "",
    "faqs": [],
    "screenshots": [],
    "custom_admin_box_html": "",
    "link_configured": false,
    "serial_number": 3,
    "seo_keywords": "",
    "is_new": false,
    "release_notes": "",
    "canonical_url": "",
    "file_size": "56",
    "developer": "Arcade ",
    "og_image_url": "",
    "seo_description": "",
    "id": "31og4l26i",
    "is_hot": false,
    "video_url": "",
    "created_at": "2026-05-19T19:04:26.373Z",
    "safety_status": "Verified",
    "rating": 3.4,
    "red_box_msg": "",
    "features_html": "",
    "target_region": "",
    "name": "YONO ARCADE",
    "slug": "yono-arcade",
    "category": "Yono, All App",
    "is_coming_soon": false,
    "idea_box_msg": ""
  },
  {
    "link_configured": true,
    "faqs": [],
    "screenshots": [],
    "custom_admin_box_html": "",
    "is_new": true,
    "release_notes": "",
    "serial_number": 3,
    "seo_keywords": "",
    "version": "1.20.1",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://res.cloudinary.com/dyigysy26/image/upload/f_auto,q_auto/1000119609_fkc9fm",
    "custom_admin_box_heading": "",
    "yellow_box_msg": "",
    "seo_title": "",
    "is_featured": false,
    "red_box_msg": "",
    "rating": 4.8,
    "features_html": "",
    "name": "JAIHO 91",
    "target_region": "",
    "safety_status": "Verified",
    "created_at": "2026-05-19T19:23:07.133Z",
    "idea_box_msg": "",
    "is_coming_soon": false,
    "slug": "jaiho-91",
    "category": "Yono, All App",
    "id": "s5u553ymi",
    "seo_description": "",
    "video_url": "",
    "canonical_url": "",
    "file_size": "56",
    "developer": "Jaiho",
    "og_image_url": ""
  },
  {
    "is_new": false,
    "release_notes": "",
    "serial_number": 5,
    "seo_keywords": "",
    "link_configured": true,
    "faqs": [],
    "screenshots": [],
    "custom_admin_box_html": "",
    "yellow_box_msg": "",
    "seo_title": "",
    "is_featured": false,
    "description_html": "<p>A new application.</p>",
    "version": "2.5V",
    "icon_url": "https://13eehe59cj.ucarecd.net/d3f6486a-b216-4582-b15d-0c735ff6b08f/-/preview/554x554/",
    "custom_admin_box_heading": "",
    "is_coming_soon": false,
    "idea_box_msg": "",
    "slug": "bingo-101",
    "category": "Yono, All App",
    "rating": 3.6,
    "red_box_msg": "",
    "target_region": "",
    "name": "BINGO 101",
    "features_html": "",
    "safety_status": "Verified",
    "created_at": "2026-05-20T03:09:33.880Z",
    "id": "awus3qajs",
    "seo_description": "",
    "video_url": "",
    "file_size": "71",
    "canonical_url": "",
    "og_image_url": "",
    "developer": "Bingo"
  },
  {
    "is_featured": false,
    "yellow_box_msg": "",
    "seo_title": "",
    "custom_admin_box_heading": "",
    "description_html": "<p>A new application.</p>",
    "version": "8.3.06.",
    "icon_url": "https://13eehe59cj.ucarecd.net/97512d34-f561-4ede-8517-2112440079eb/-/preview/554x554/",
    "serial_number": 6,
    "seo_keywords": "",
    "is_new": false,
    "release_notes": "",
    "faqs": [],
    "screenshots": [],
    "custom_admin_box_html": "",
    "link_configured": true,
    "file_size": "67",
    "canonical_url": "",
    "og_image_url": "",
    "developer": "Bingo ",
    "seo_description": "",
    "id": "0uiuuhdrj",
    "video_url": "",
    "slug": "ok-rummy",
    "category": "Yono, All App",
    "idea_box_msg": "",
    "is_coming_soon": false,
    "created_at": "2026-05-20T03:50:33.674Z",
    "safety_status": "Verified",
    "rating": 3,
    "red_box_msg": "",
    "name": "OK RUMMY",
    "target_region": "",
    "features_html": ""
  },
  {
    "is_featured": false,
    "yellow_box_msg": "",
    "seo_title": "",
    "custom_admin_box_heading": "",
    "version": "4.3",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://13eehe59cj.ucarecd.net/2dfe5d55-7896-4f96-8f2b-132190e44f6f/-/preview/540x540/",
    "serial_number": 7,
    "seo_keywords": "",
    "is_new": false,
    "release_notes": "",
    "faqs": [],
    "screenshots": [],
    "custom_admin_box_html": "",
    "link_configured": true,
    "canonical_url": "",
    "file_size": "70",
    "developer": "Jaiho",
    "og_image_url": "",
    "seo_description": "",
    "id": "4yt0f4yd0",
    "video_url": "",
    "slug": "jaiho-slots",
    "category": "Yono, All App",
    "idea_box_msg": "",
    "is_coming_soon": false,
    "created_at": "2026-05-20T03:53:24.482Z",
    "safety_status": "Verified",
    "red_box_msg": "",
    "rating": 4.9,
    "features_html": "",
    "name": "JAIHO SLOTS",
    "target_region": ""
  },
  {
    "seo_keywords": "",
    "serial_number": 8,
    "release_notes": "",
    "is_new": false,
    "custom_admin_box_html": "",
    "screenshots": [],
    "faqs": [],
    "link_configured": true,
    "is_featured": false,
    "seo_title": "",
    "yellow_box_msg": "",
    "custom_admin_box_heading": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/b5e9d896-71e8-49d6-b091-a971871161e0/-/preview/1000x1000/",
    "version": "2.5V",
    "description_html": "<p>A new application.</p>",
    "category": "Yono, All App",
    "slug": "boss-rummy",
    "is_coming_soon": false,
    "idea_box_msg": "",
    "created_at": "2026-05-20T03:56:42.075Z",
    "safety_status": "Verified",
    "features_html": "",
    "target_region": "",
    "name": "BOSS RUMMY",
    "rating": 4.1,
    "red_box_msg": "",
    "developer": "Arcade ",
    "og_image_url": "",
    "canonical_url": "",
    "file_size": "54",
    "video_url": "",
    "seo_description": "",
    "id": "9r044fyi0"
  },
  {
    "link_configured": true,
    "faqs": [],
    "screenshots": [],
    "custom_admin_box_html": "",
    "is_new": false,
    "release_notes": "",
    "serial_number": 9,
    "seo_keywords": "",
    "description_html": "<p>A new application.</p>",
    "version": "2.0.6",
    "icon_url": "https://13eehe59cj.ucarecd.net/393c07ea-4f5e-43a9-ab0c-e12dfe7d755a/-/preview/474x474/",
    "custom_admin_box_heading": "",
    "yellow_box_msg": "",
    "seo_title": "",
    "is_featured": false,
    "rating": 4.9,
    "red_box_msg": "",
    "target_region": "",
    "name": "RUMMY 91",
    "features_html": "",
    "created_at": "2026-05-20T04:01:04.611Z",
    "safety_status": "Verified",
    "idea_box_msg": "",
    "is_coming_soon": false,
    "slug": "rummy-91",
    "category": "All App",
    "id": "5b7fj0cq7",
    "seo_description": "",
    "video_url": "",
    "file_size": "79",
    "canonical_url": "",
    "og_image_url": "",
    "developer": "Addi"
  },
  {
    "link_configured": true,
    "custom_admin_box_html": "",
    "faqs": [],
    "screenshots": [],
    "release_notes": "",
    "is_new": false,
    "seo_keywords": "",
    "serial_number": 10,
    "icon_url": "https://13eehe59cj.ucarecd.net/0d710f11-2c9d-4312-89de-be65ce21a4fe/-/preview/750x750/",
    "version": "5.0",
    "description_html": "<p>A new application.</p>",
    "custom_admin_box_heading": "",
    "seo_title": "",
    "yellow_box_msg": "",
    "is_featured": false,
    "features_html": "",
    "name": "GOGO RUMMY ",
    "target_region": "",
    "rating": 3.9,
    "red_box_msg": "",
    "safety_status": "Verified",
    "created_at": "2026-05-20T06:58:27.643Z",
    "is_coming_soon": false,
    "idea_box_msg": "",
    "category": "Yono, All App",
    "slug": "gogo-rummy-",
    "video_url": "",
    "seo_description": "",
    "id": "ieam3hkbq",
    "developer": "Sk varba",
    "og_image_url": "",
    "canonical_url": "",
    "file_size": "65"
  },
  {
    "video_url": "",
    "seo_description": "",
    "id": "5j5b7qbrw",
    "og_image_url": "",
    "developer": "S.A vejay",
    "file_size": "75",
    "canonical_url": "",
    "name": "CLUB INR",
    "target_region": "",
    "features_html": "",
    "red_box_msg": "",
    "rating": 4.6,
    "created_at": "2026-05-20T08:02:40.971Z",
    "safety_status": "Verified",
    "idea_box_msg": "",
    "is_coming_soon": false,
    "category": "Yono, All App",
    "slug": "club-inr",
    "icon_url": "https://13eehe59cj.ucarecd.net/3059d25d-1497-4cff-aead-68758187fe0b/-/preview/554x554/",
    "description_html": "<p>A new application.</p>",
    "version": "1.8",
    "custom_admin_box_heading": "",
    "seo_title": "",
    "yellow_box_msg": "",
    "is_featured": false,
    "link_configured": true,
    "custom_admin_box_html": "",
    "faqs": [],
    "screenshots": [],
    "release_notes": "",
    "is_new": false,
    "seo_keywords": "",
    "serial_number": 11
  },
  {
    "idea_box_msg": "",
    "is_coming_soon": false,
    "slug": "abc-rummy-",
    "category": "Yono, All App",
    "rating": 3.9,
    "red_box_msg": "",
    "target_region": "",
    "name": "ABC Rummy ",
    "features_html": "",
    "created_at": "2026-05-26T07:04:36.330Z",
    "safety_status": "Verified",
    "id": "f4ktp4dfi",
    "seo_description": "",
    "video_url": "",
    "file_size": "61",
    "canonical_url": "",
    "og_image_url": "",
    "developer": "Addi",
    "is_new": false,
    "release_notes": "",
    "serial_number": 12,
    "seo_keywords": "",
    "link_configured": true,
    "faqs": [],
    "screenshots": [],
    "custom_admin_box_html": "",
    "yellow_box_msg": "",
    "seo_title": "",
    "is_featured": false,
    "description_html": "<p>A new application.</p>",
    "version": "1.8",
    "icon_url": "https://13eehe59cj.ucarecd.net/f7108631-b74a-49e5-8abf-37cec6950f7c/-/preview/512x512/",
    "custom_admin_box_heading": ""
  },
  {
    "icon_url": "https://13eehe59cj.ucarecd.net/fb951184-b849-4ff0-8882-a4d826508fb7/-/preview/190x190/",
    "description_html": "<p>A new application.</p>",
    "version": "1.6",
    "custom_admin_box_heading": "",
    "seo_title": "",
    "yellow_box_msg": "",
    "is_featured": false,
    "link_configured": true,
    "custom_admin_box_html": "",
    "screenshots": [],
    "faqs": [],
    "release_notes": "",
    "is_new": false,
    "seo_keywords": "",
    "serial_number": 13,
    "video_url": "",
    "id": "4w1yxs6mm",
    "seo_description": "",
    "og_image_url": "",
    "developer": "AB Arora",
    "file_size": "54",
    "canonical_url": "",
    "name": "777.Rummy",
    "target_region": "",
    "features_html": "",
    "rating": 5,
    "red_box_msg": "",
    "safety_status": "Verified",
    "created_at": "2026-05-26T07:09:01.068Z",
    "idea_box_msg": "",
    "is_coming_soon": false,
    "category": "Yono, All App",
    "slug": "777-rummy"
  },
  {
    "video_url": "",
    "id": "w1sttlwv7",
    "seo_description": "",
    "developer": "AZ ever",
    "og_image_url": "",
    "canonical_url": "",
    "file_size": "59",
    "features_html": "",
    "name": "EVER 777",
    "target_region": "",
    "red_box_msg": "",
    "rating": 4,
    "safety_status": "Verified",
    "created_at": "2026-05-26T07:12:55.821Z",
    "idea_box_msg": "",
    "is_coming_soon": false,
    "category": "Yono, All App",
    "slug": "ever-777",
    "icon_url": "https://13eehe59cj.ucarecd.net/74347710-3cb2-468c-98eb-5666a0af487c/-/preview/190x190/",
    "version": "1.8",
    "description_html": "<p>A new application.</p>",
    "custom_admin_box_heading": "",
    "seo_title": "",
    "yellow_box_msg": "",
    "is_featured": false,
    "link_configured": true,
    "custom_admin_box_html": "",
    "faqs": [],
    "screenshots": [],
    "release_notes": "",
    "is_new": false,
    "seo_keywords": "",
    "serial_number": 14
  },
  {
    "rating": 4,
    "red_box_msg": "",
    "features_html": "",
    "name": "Game Rummy",
    "target_region": "",
    "created_at": "2026-05-26T07:16:08.600Z",
    "safety_status": "Verified",
    "is_coming_soon": false,
    "idea_box_msg": "",
    "slug": "game-rummy",
    "category": "Yono, All App",
    "id": "dp2lcn2ae",
    "seo_description": "",
    "video_url": "",
    "canonical_url": "",
    "file_size": "75",
    "developer": "Raj dav",
    "og_image_url": "",
    "link_configured": true,
    "screenshots": [],
    "faqs": [],
    "custom_admin_box_html": "",
    "is_new": false,
    "release_notes": "",
    "serial_number": 15,
    "seo_keywords": "",
    "version": "2.0",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://13eehe59cj.ucarecd.net/4b2bd57d-9855-40a8-b452-34edee84ed09/-/preview/190x190/",
    "custom_admin_box_heading": "",
    "yellow_box_msg": "",
    "seo_title": "",
    "is_featured": false
  },
  {
    "video_url": "",
    "seo_description": "",
    "id": "4lgypb90h",
    "og_image_url": "",
    "developer": "Addi",
    "file_size": "54",
    "canonical_url": "",
    "name": "Hi Rummy ",
    "target_region": "",
    "features_html": "",
    "rating": 4.1,
    "red_box_msg": "",
    "safety_status": "Verified",
    "created_at": "2026-05-26T07:18:29.456Z",
    "idea_box_msg": "",
    "is_coming_soon": false,
    "category": "Yono, All App",
    "slug": "hi-rummy-",
    "icon_url": "https://13eehe59cj.ucarecd.net/c01e9676-e748-4342-9ac7-e972030981fc/-/preview/190x190/",
    "description_html": "<p>A new application.</p>",
    "version": "1.9",
    "custom_admin_box_heading": "",
    "seo_title": "",
    "yellow_box_msg": "",
    "is_featured": false,
    "link_configured": true,
    "custom_admin_box_html": "",
    "screenshots": [],
    "faqs": [],
    "release_notes": "",
    "is_new": false,
    "seo_keywords": "",
    "serial_number": 16
  },
  {
    "red_box_msg": "",
    "rating": 5,
    "target_region": "",
    "name": "INR Rummy",
    "features_html": "",
    "created_at": "2026-05-26T07:21:55.085Z",
    "safety_status": "Verified",
    "idea_box_msg": "",
    "is_coming_soon": false,
    "slug": "inr-rummy",
    "category": "Yono, All App",
    "seo_description": "",
    "id": "2f90a87hv",
    "video_url": "",
    "is_hot": false,
    "file_size": "79",
    "canonical_url": "",
    "og_image_url": "",
    "developer": "Arcade ",
    "link_configured": true,
    "screenshots": [],
    "faqs": [],
    "custom_admin_box_html": "",
    "is_new": false,
    "release_notes": "",
    "serial_number": 17,
    "seo_keywords": "",
    "description_html": "<p>A new application.</p>",
    "version": "3.0",
    "icon_url": "https://13eehe59cj.ucarecd.net/2a718650-0602-495f-9ca4-b13c86e58c02/-/preview/190x190/",
    "custom_admin_box_heading": "",
    "yellow_box_msg": "",
    "seo_title": "",
    "is_featured": false
  },
  {
    "custom_admin_box_html": "",
    "faqs": [],
    "screenshots": [],
    "link_configured": true,
    "seo_keywords": "",
    "serial_number": 18,
    "release_notes": "",
    "is_new": false,
    "custom_admin_box_heading": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/c693366d-d543-4d76-84ba-3963a3f3c792/-/preview/190x190/",
    "description_html": "<p>A new application.</p>",
    "version": "2.1",
    "is_featured": false,
    "seo_title": "",
    "yellow_box_msg": "",
    "safety_status": "Verified",
    "created_at": "2026-05-26T07:26:42.606Z",
    "name": "JAIHO RUMMY ",
    "target_region": "",
    "features_html": "",
    "red_box_msg": "",
    "rating": 3.9,
    "category": "Yono, All App",
    "slug": "jaiho-rummy-",
    "is_coming_soon": false,
    "idea_box_msg": "",
    "og_image_url": "",
    "developer": "PW sahar",
    "file_size": "2.4",
    "canonical_url": "",
    "video_url": "",
    "id": "9a05609sb",
    "seo_description": ""
  },
  {
    "features_html": "",
    "name": "Love Rummy",
    "target_region": "",
    "red_box_msg": "",
    "rating": 4.2,
    "safety_status": "Verified",
    "created_at": "2026-05-26T07:31:59.173Z",
    "is_coming_soon": false,
    "idea_box_msg": "",
    "category": "Yono, All App",
    "slug": "love-rummy",
    "video_url": "",
    "id": "l7a60keix",
    "seo_description": "",
    "developer": "Mak job",
    "og_image_url": "",
    "canonical_url": "",
    "file_size": "68",
    "link_configured": true,
    "custom_admin_box_html": "",
    "screenshots": [],
    "faqs": [],
    "release_notes": "",
    "is_new": false,
    "seo_keywords": "",
    "serial_number": 19,
    "icon_url": "https://13eehe59cj.ucarecd.net/cf0b4466-3d5b-4eb5-bc88-afc9a8213ac4/-/preview/190x190/",
    "version": "1.6",
    "description_html": "<p>A new application.</p>",
    "custom_admin_box_heading": "",
    "seo_title": "",
    "yellow_box_msg": "",
    "is_featured": false
  },
  {
    "is_coming_soon": false,
    "idea_box_msg": "",
    "category": "Yono, All App",
    "slug": "joy-rummy",
    "target_region": "",
    "name": "JOY RUMMY",
    "features_html": "",
    "rating": 5,
    "red_box_msg": "",
    "created_at": "2026-05-26T07:34:35.782Z",
    "safety_status": "Verified",
    "video_url": "",
    "seo_description": "",
    "id": "4paka7kie",
    "og_image_url": "",
    "developer": "AB Arora",
    "file_size": "50",
    "canonical_url": "",
    "release_notes": "",
    "is_new": false,
    "seo_keywords": "",
    "serial_number": 20,
    "link_configured": false,
    "custom_admin_box_html": "",
    "faqs": [],
    "screenshots": [],
    "seo_title": "",
    "yellow_box_msg": "",
    "is_featured": false,
    "icon_url": "https://13eehe59cj.ucarecd.net/e0898894-5d5b-47ab-a14f-13b4514b3b4f/-/preview/190x190/",
    "description_html": "<p>A new application.</p>",
    "version": "1.8",
    "custom_admin_box_heading": ""
  },
  {
    "custom_admin_box_heading": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/2d664adc-3e1f-4317-805c-dea453f52389/-/preview/190x190/",
    "description_html": "<p>A new application.</p>",
    "version": "1.0",
    "is_featured": false,
    "seo_title": "",
    "yellow_box_msg": "",
    "custom_admin_box_html": "",
    "faqs": [],
    "screenshots": [],
    "link_configured": true,
    "seo_keywords": "",
    "serial_number": 21,
    "release_notes": "",
    "is_new": false,
    "og_image_url": "",
    "developer": "AZ ever",
    "file_size": "70",
    "canonical_url": "",
    "video_url": "",
    "seo_description": "",
    "id": "2768ohu2a",
    "safety_status": "Verified",
    "created_at": "2026-05-26T07:37:07.122Z",
    "target_region": "",
    "name": "MAHA GAMES",
    "features_html": "",
    "red_box_msg": "",
    "rating": 4,
    "category": "Yono, All App",
    "slug": "maha-games",
    "idea_box_msg": "",
    "is_coming_soon": false
  },
  {
    "icon_url": "https://13eehe59cj.ucarecd.net/6aa28ca8-cef1-4d1a-b054-13e242eaef02/-/preview/190x190/",
    "version": "5.8",
    "description_html": "<p>A new application.</p>",
    "custom_admin_box_heading": "",
    "seo_title": "",
    "yellow_box_msg": "",
    "is_featured": false,
    "link_configured": true,
    "custom_admin_box_html": "",
    "screenshots": [],
    "faqs": [],
    "release_notes": "",
    "is_new": false,
    "seo_keywords": "",
    "serial_number": 22,
    "video_url": "",
    "seo_description": "",
    "id": "us5xuk5bm",
    "developer": "AZ ever",
    "og_image_url": "",
    "canonical_url": "",
    "file_size": "58",
    "features_html": "",
    "target_region": "",
    "name": "Rummy Ludo",
    "rating": 3.9,
    "red_box_msg": "",
    "created_at": "2026-05-26T07:39:44.282Z",
    "safety_status": "Verified",
    "idea_box_msg": "",
    "is_coming_soon": false,
    "category": "Yono, All App",
    "slug": "rummy-ludo"
  },
  {
    "is_featured": false,
    "seo_title": "",
    "yellow_box_msg": "",
    "custom_admin_box_heading": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/d17abcfc-c8dc-4c36-8558-e3408002d37e/-/preview/190x190/",
    "description_html": "<p>A new application.</p>",
    "version": "2.0.6",
    "seo_keywords": "",
    "serial_number": 23,
    "release_notes": "",
    "is_new": false,
    "custom_admin_box_html": "",
    "screenshots": [],
    "faqs": [],
    "link_configured": true,
    "og_image_url": "",
    "developer": "Arcade ",
    "file_size": "45",
    "canonical_url": "",
    "video_url": "",
    "seo_description": "",
    "id": "69x1lstq7",
    "category": "Yono, All App",
    "slug": "rummy-77",
    "is_coming_soon": false,
    "idea_box_msg": "",
    "safety_status": "Verified",
    "created_at": "2026-05-26T07:42:24.615Z",
    "name": "Rummy 77",
    "target_region": "",
    "features_html": "",
    "rating": 3.9,
    "red_box_msg": ""
  },
  {
    "icon_url": "https://13eehe59cj.ucarecd.net/2738be7d-f198-4f70-a7d8-c8eb5f452eb0/-/preview/190x190/",
    "version": "1.8",
    "description_html": "<p>A new application.</p>",
    "custom_admin_box_heading": "",
    "seo_title": "",
    "yellow_box_msg": "",
    "is_featured": false,
    "link_configured": false,
    "custom_admin_box_html": "",
    "screenshots": [],
    "faqs": [],
    "release_notes": "",
    "is_new": false,
    "seo_keywords": "",
    "serial_number": 24,
    "video_url": "",
    "id": "j79n2g3l9",
    "seo_description": "",
    "developer": "AB Arora",
    "og_image_url": "",
    "canonical_url": "",
    "file_size": "58",
    "features_html": "",
    "target_region": "",
    "name": "Share Slots",
    "rating": 4,
    "red_box_msg": "",
    "safety_status": "Verified",
    "created_at": "2026-05-26T07:44:32.442Z",
    "is_coming_soon": false,
    "idea_box_msg": "",
    "category": "Yono, All App",
    "slug": "share-slots"
  },
  {
    "og_image_url": "",
    "developer": "Tania JK ",
    "file_size": "65",
    "canonical_url": "",
    "video_url": "",
    "seo_description": "",
    "id": "n3w2vjk0b",
    "created_at": "2026-05-26T07:51:47.637Z",
    "safety_status": "Verified",
    "target_region": "",
    "name": "567 SLOTS",
    "features_html": "",
    "rating": 3.5,
    "red_box_msg": "",
    "category": "Yono, All App",
    "slug": "567-slots",
    "is_coming_soon": false,
    "idea_box_msg": "",
    "custom_admin_box_heading": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/e4314d5e-eb77-46b9-8998-8e0f94970b38/-/preview/72x72/",
    "description_html": "<p>A new application.</p>",
    "version": "1.6",
    "is_featured": false,
    "seo_title": "",
    "yellow_box_msg": "",
    "custom_admin_box_html": "",
    "screenshots": [],
    "faqs": [],
    "link_configured": true,
    "seo_keywords": "",
    "serial_number": 26,
    "release_notes": "",
    "is_new": false
  },
  {
    "slug": "789jackpots",
    "category": "Yono, All App",
    "idea_box_msg": "",
    "is_coming_soon": false,
    "created_at": "2026-05-26T07:56:30.478Z",
    "safety_status": "Verified",
    "red_box_msg": "",
    "rating": 2.9,
    "features_html": "",
    "target_region": "",
    "name": "789Jackpots",
    "canonical_url": "",
    "file_size": "Tanu WD",
    "developer": "Admin",
    "og_image_url": "",
    "seo_description": "",
    "id": "owxg4aekg",
    "video_url": "",
    "serial_number": 27,
    "seo_keywords": "",
    "is_new": false,
    "release_notes": "",
    "screenshots": [],
    "faqs": [],
    "custom_admin_box_html": "",
    "link_configured": true,
    "is_featured": false,
    "yellow_box_msg": "",
    "seo_title": "",
    "custom_admin_box_heading": "",
    "version": "1.9",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://13eehe59cj.ucarecd.net/a0cedc36-33b0-4e75-a1ea-cd963b3ee0ca/-/preview/190x190/"
  },
  {
    "og_image_url": "",
    "developer": "Rahul HL",
    "file_size": "78",
    "canonical_url": "",
    "video_url": "",
    "seo_description": "",
    "id": "fw5wsziec",
    "safety_status": "Verified",
    "created_at": "2026-05-26T08:00:01.636Z",
    "target_region": "",
    "name": "YONO VIP",
    "features_html": "",
    "red_box_msg": "",
    "rating": 4,
    "category": "Yono, All App",
    "slug": "yono-vip",
    "idea_box_msg": "",
    "is_coming_soon": false,
    "custom_admin_box_heading": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/d9226164-7447-425e-ba61-618d72ed28df/-/preview/190x190/",
    "description_html": "<p>A new application.</p>",
    "version": "1.8",
    "is_featured": false,
    "seo_title": "",
    "yellow_box_msg": "",
    "custom_admin_box_html": "",
    "screenshots": [],
    "faqs": [],
    "link_configured": true,
    "seo_keywords": "",
    "serial_number": 28,
    "release_notes": "",
    "is_new": false
  },
  {
    "slug": "teen-patti-octro",
    "category": "Card",
    "is_coming_soon": true,
    "idea_box_msg": "",
    "safety_status": "Verified",
    "created_at": "2026-06-03T10:17:01.058Z",
    "publish_date": "2026-06-10T12:00:00.000Z",
    "rating": 4.2,
    "red_box_msg": "",
    "features_html": "",
    "name": "Teen Patti Octro",
    "target_region": "",
    "canonical_url": "",
    "file_size": "90",
    "developer": "Unknown ",
    "og_image_url": "",
    "id": "t1ocq5iar",
    "seo_description": "",
    "video_url": "",
    "serial_number": 34,
    "seo_keywords": "",
    "is_new": true,
    "release_notes": "",
    "faqs": [],
    "screenshots": [],
    "custom_admin_box_html": "",
    "link_configured": true,
    "is_featured": false,
    "yellow_box_msg": "",
    "seo_title": "",
    "custom_admin_box_heading": "",
    "version": "3",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://kk19a1nwwx.ucarecd.net/091fdebe-1562-41c6-99ea-b60665adb5ee/-/preview/512x512/"
  },
  {
    "custom_admin_box_html": "",
    "screenshots": [],
    "faqs": [],
    "link_configured": true,
    "seo_keywords": "",
    "serial_number": 29,
    "release_notes": "",
    "is_new": false,
    "custom_admin_box_heading": "",
    "icon_url": "https://kk19a1nwwx.ucarecd.net/5b72cf8f-4959-426e-9e1d-8e2150529efb/-/preview/240x240/",
    "description_html": "<p>A new application.</p>",
    "version": "1.0",
    "is_featured": false,
    "seo_title": "",
    "yellow_box_msg": "",
    "safety_status": "Verified",
    "created_at": "2026-06-03T10:30:01.393Z",
    "name": "Zynga Poker- Texas Holdem Game",
    "target_region": "",
    "features_html": "",
    "rating": 5,
    "red_box_msg": "",
    "category": "Card",
    "slug": "zynga-poker-texas-holdem-game",
    "is_coming_soon": true,
    "idea_box_msg": "",
    "og_image_url": "",
    "developer": "Admin",
    "file_size": "Unknown",
    "canonical_url": "",
    "video_url": "",
    "id": "rrmv44n9n",
    "seo_description": ""
  },
  {
    "is_coming_soon": true,
    "idea_box_msg": null,
    "slug": "uno-",
    "category": "Card",
    "red_box_msg": null,
    "rating": 5,
    "features_html": null,
    "target_region": "",
    "name": "UNO! ",
    "created_at": "2026-06-07T10:14:11.138Z",
    "safety_status": "Verified",
    "seo_description": "",
    "id": "wf59smk6l",
    "canonical_url": "",
    "file_size": "Unknown",
    "developer": "Admin",
    "og_image_url": "",
    "is_new": true,
    "release_notes": "",
    "serial_number": 30,
    "seo_keywords": "",
    "link_configured": true,
    "faqs": [],
    "screenshots": [],
    "custom_admin_box_html": null,
    "yellow_box_msg": null,
    "seo_title": "",
    "is_featured": false,
    "version": "1.0",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://1ewg1yyass.ucarecd.net/c0172402-c854-4016-876e-6b7769547c8f/-/preview/238x211/",
    "custom_admin_box_heading": null
  },
  {
    "safety_status": "Verified",
    "created_at": "2026-06-07T10:16:45.949Z",
    "target_region": "",
    "name": "Rummy GOLD - With Fast Rummy",
    "rating": 5,
    "red_box_msg": "",
    "category": "Card",
    "slug": "rummy-gold-with-fast-rummy",
    "is_coming_soon": true,
    "idea_box_msg": "",
    "developer": "Admin",
    "og_image_url": "",
    "canonical_url": "",
    "file_size": "Unknown",
    "id": "8epj9jjpu",
    "seo_description": "",
    "custom_admin_box_html": "",
    "faqs": [],
    "screenshots": [],
    "link_configured": true,
    "seo_keywords": "",
    "serial_number": 31,
    "release_notes": "",
    "is_new": false,
    "custom_admin_box_heading": "",
    "icon_url": "https://1ewg1yyass.ucarecd.net/33e0d4e8-6e41-4791-9e41-8d915a12e504/-/preview/447x447/",
    "version": "1.0",
    "description_html": "<p>A new application.</p>",
    "is_featured": false,
    "seo_title": "",
    "yellow_box_msg": ""
  },
  {
    "id": "8jt0hokyo",
    "seo_description": "",
    "og_image_url": "",
    "developer": "Admin",
    "file_size": "Unknown",
    "canonical_url": "",
    "idea_box_msg": null,
    "is_coming_soon": true,
    "category": "Card",
    "slug": "indian-rummy-3-patti-card-game",
    "name": "Indian Rummy 3 Patti Card Game",
    "target_region": "",
    "features_html": null,
    "red_box_msg": null,
    "rating": 5,
    "created_at": "2026-06-07T10:19:11.616Z",
    "safety_status": "Verified",
    "seo_title": "",
    "yellow_box_msg": null,
    "is_featured": false,
    "icon_url": "https://1ewg1yyass.ucarecd.net/2a4b59ef-16a3-4b14-bad3-1c3796af3492/-/preview/447x447/",
    "description_html": "<p>A new application.</p>",
    "version": "1.0",
    "custom_admin_box_heading": null,
    "release_notes": "",
    "is_new": true,
    "seo_keywords": "",
    "serial_number": 32,
    "link_configured": true,
    "custom_admin_box_html": null,
    "screenshots": [],
    "faqs": []
  },
  {
    "custom_admin_box_html": "",
    "faqs": [],
    "screenshots": [],
    "link_configured": true,
    "seo_keywords": "",
    "serial_number": 33,
    "release_notes": "",
    "is_new": false,
    "custom_admin_box_heading": "",
    "icon_url": "https://1ewg1yyass.ucarecd.net/0f918f11-b247-4b5a-9d26-d510dddffbfe/-/preview/447x447/",
    "version": "1.0",
    "description_html": "<p>A new application.</p>",
    "is_featured": false,
    "seo_title": "",
    "yellow_box_msg": "",
    "created_at": "2026-06-07T13:13:11.211Z",
    "publish_date": "2026-07-08T13:08:00.000Z",
    "safety_status": "Verified",
    "features_html": "",
    "name": "Lucky Spin Slots",
    "target_region": "",
    "red_box_msg": "",
    "rating": 5,
    "category": "Slots",
    "slug": "lucky-spin-slots",
    "idea_box_msg": "",
    "is_coming_soon": true,
    "developer": "Admin",
    "og_image_url": "https://1ewg1yyass.ucarecd.net/0f918f11-b247-4b5a-9d26-d510dddffbfe/-/preview/447x447/",
    "canonical_url": "",
    "file_size": "Unknown",
    "id": "01x9h7nfb",
    "seo_description": ""
  },
  {
    "idea_box_msg": "",
    "is_coming_soon": true,
    "slug": "ind-club",
    "category": "Yono",
    "rating": 4.5,
    "red_box_msg": "",
    "features_html": "",
    "target_region": "",
    "name": "IND Club",
    "safety_status": "Verified",
    "created_at": "2026-06-12T12:39:30.407Z",
    "publish_date": "2026-06-12T15:30:00.000Z",
    "seo_description": "",
    "id": "3cflt97b5",
    "video_url": "",
    "canonical_url": "",
    "file_size": "76",
    "developer": "AB Arora",
    "og_image_url": "",
    "is_new": false,
    "release_notes": "",
    "serial_number": 28,
    "seo_keywords": "",
    "link_configured": true,
    "faqs": [],
    "screenshots": [],
    "custom_admin_box_html": "",
    "yellow_box_msg": "",
    "seo_title": "",
    "is_featured": false,
    "version": "1.0",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://1ewg1yyass.ucarecd.net/9d9339e0-77d4-418b-86f8-0a0e074c1d4e/-/preview/190x190/",
    "custom_admin_box_heading": ""
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
  "hero_title_animation": "slide-up",
  "hero_title_subtitle": "C",
  "quick_links": [],
  "ethics_heading": "ETHNICS",
  "social_links": {
    "facebook": "",
    "instagram": "",
    "twitter": "",
    "linkedin": "",
    "youtube": ""
  },
  "helpline_whatsapp": "+918653034735",
  "logo_url": "https://y4q7avaws.ucarecd.net/b391a2fa-42f7-4b3a-a0d5-605cb22aead4/-/preview/1000x1000/",
  "hero_title_visible": true,
  "about_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>About Us - RummyDex</title>\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\" rel=\"stylesheet\">\n\n    <style>\n        body {\n            font-family: 'Roboto', Arial, sans-serif;\n            line-height: 1.75;\n            background-color: #ffffff;\n            margin: 0;\n            padding: 60px 20px;\n            display: flex;\n            justify-content: center;\n        }\n\n        .about-container {\n            max-width: 720px;\n            width: 100%;\n        }\n\n        h1 {\n            font-size: 44px;\n            font-weight: 700;\n            color: #202124;\n            margin-bottom: 40px;\n            text-align: center;\n            letter-spacing: -0.5px;\n        }\n\n        h2.section-heading {\n            font-size: 28px;\n            font-weight: 500;\n            color: #202124;\n            margin-top: 50px;\n            margin-bottom: 16px;\n            letter-spacing: -0.2px;\n        }\n\n        p.about-text {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            font-weight: 400;\n        }\n\n        .sticker-illustration {\n            text-align: center;\n            margin: 35px auto;\n            padding: 10px;\n        }\n\n        .sticker-illustration img {\n            width: 140px;\n            height: auto;\n            display: block;\n            margin: 0 auto;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"about-container\">\n        <h1>About Us</h1>\n\n        <h2 class=\"section-heading\">The Meaning of \"Dex\" (Who We Are)</h2>\n        <p class=\"about-text\">\n            Welcome to RummyDex. The word \"Dex\" stands for index or directory, which perfectly describes our core identity. We are an independent digital library built to catalog, review, and provide structured, transparent information about casual games and digital applications. Our platform is designed to be a complete informational hub for entertainment enthusiasts.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:card-index-dividers.svg\" alt=\"Index Directory Sticker\">\n        </div>\n\n        <h2 class=\"section-heading\">How We Provide Information & Links</h2>\n        <p class=\"about-text\">\n            We function strictly as an informational bridge. Instead of hosting direct software or APK files on our servers, we provide comprehensive technical breakdowns, clear guides, and safe, direct links to third-party developer sources. This ensures that our platform remains fast and secure, and that you always access applications straight from the source.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:link.svg\" alt=\"Direct Links Sticker\">\n        </div>\n\n        <h2 class=\"section-heading\">Real Hands-On Testing & Experience</h2>\n        <p class=\"about-text\">\n            We do not just list apps blindly. Before any application is published on our platform, our team conducts a real, hands-on test. We personally experience the app's performance, mechanics, and user interface to ensure it meets our strict entertainment standards before it ever reaches our directory.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:magnifying-glass-tilted-right.svg\" alt=\"Hands-on Testing Sticker\">\n        </div>\n\n        <h2 class=\"section-heading\">Complete Transparency & Neutrality</h2>\n        <p class=\"about-text\">\n            RummyDex operates with 100% complete transparency and zero developer bias. We act entirely as an independent informational resource. Our goal is to provide honest, neutral, and clear breakdowns so that you can make fully informed choices about your offline and casual online entertainment.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:balance-scale.svg\" alt=\"Transparency and Neutrality Sticker\">\n        </div>\n    </div>\n\n</body>\n</html>",
  "ticker_text": "L",
  "important_notice": "<div ",
  "terms_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Terms & Conditions - RummyDex</title>\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\" rel=\"stylesheet\">\n\n    <style>\n        body {\n            font-family: 'Roboto', Arial, sans-serif;\n            line-height: 1.75;\n            background-color: #ffffff;\n            margin: 0;\n            padding: 60px 20px;\n            display: flex;\n            justify-content: center;\n        }\n\n        .about-container {\n            max-width: 720px;\n            width: 100%;\n        }\n\n        h1 {\n            font-size: 44px;\n            font-weight: 700;\n            color: #202124;\n            margin-bottom: 8px;\n            text-align: center;\n            letter-spacing: -0.5px;\n        }\n\n        .effective-date {\n            text-align: center;\n            font-size: 14px;\n            color: #5f6368;\n            margin-bottom: 40px;\n        }\n\n        h2.section-heading {\n            font-size: 28px;\n            font-weight: 500;\n            color: #202124;\n            margin-top: 50px;\n            margin-bottom: 16px;\n            letter-spacing: -0.2px;\n        }\n\n        p.about-text {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            font-weight: 400;\n        }\n\n        ul.about-list {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            padding-left: 24px;\n        }\n\n        ul.about-list li {\n            margin-bottom: 12px;\n        }\n\n        .sticker-illustration {\n            text-align: center;\n            margin: 35px auto;\n            padding: 10px;\n        }\n\n        .sticker-illustration img {\n            width: 140px;\n            height: auto;\n            display: block;\n            margin: 0 auto;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"about-container\">\n        <h1>Terms &amp; Conditions</h1>\n        <p class=\"effective-date\">Effective Date: July 21, 2026</p>\n\n        <h2 class=\"section-heading\">1. Agreement to Terms</h2>\n        <p class=\"about-text\">\n            By accessing or using RummyDex, you agree to be bound by these Terms &amp; Conditions. If you disagree with any part of these terms, you are prohibited from using our website. These terms apply to all visitors, users, and others who access our directory.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:handshake.svg\" alt=\"Agreement to Terms Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">2. Intellectual Property and Copyright</h2>\n        <p class=\"about-text\">\n            The original content, layout, design, and structural organization of the RummyDex directory are the exclusive property of RummyDex. However, we do not claim ownership over the third-party applications listed on our site. All app names, logos, trademarks, and associated digital assets belong to their respective external developers and publishers.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:copyright.svg\" alt=\"Intellectual Property and Copyright Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">3. Acceptable Use of the Directory</h2>\n        <p class=\"about-text\">\n            RummyDex is provided solely for your personal, non-commercial informational use. You agree not to:\n        </p>\n        <ul class=\"about-list\">\n            <li>Use automated scripts, bots, or web scrapers to extract data, reviews, or links from our directory.</li>\n            <li>Interfere with or disrupt the security, servers, or networks connected to our website.</li>\n            <li>Submit false, spam, or malicious reports through our App Reporting system.</li>\n        </ul>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:no-entry.svg\" alt=\"Acceptable Use Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">4. Third-Party Links and Software Disclaimer</h2>\n        <p class=\"about-text\">\n            RummyDex functions as an informational bridge. While we utilize a secure, carefully verified process to provide correct links to external applications, we do not host any software or APK files on our own servers.\n        </p>\n        <p class=\"about-text\">\n            You acknowledge that clicking an external link takes you to a third-party destination that we do not control. You agree that any downloading, installation, or use of third-party software is done entirely at your own risk. RummyDex is not responsible for any damage to your device, loss of data, or other issues resulting from the use of third-party applications discovered through our index.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:warning.svg\" alt=\"Third-Party Software Disclaimer Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">5. App Reporting &amp; Removal Guarantee</h2>\n        <p class=\"about-text\">\n            We maintain a strict zero-tolerance policy for apps that introduce unauthorized real-money gaming (RMG) mechanics. If a user reports an application for violating these standards, we will review the claim and enforce our 100% removal guarantee. We reserve the right to remove, modify, or delist any application from our directory at our sole discretion, without prior notice to the app's developer.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:megaphone.svg\" alt=\"App Reporting and Removal Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">6. Limitation of Liability</h2>\n        <p class=\"about-text\">\n            To the maximum extent permitted by law, RummyDex and its team shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of, or inability to use, our directory or the external applications linked within it. Our platform is provided on an \"as is\" and \"as available\" basis without any warranties of any kind.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:balance-scale.svg\" alt=\"Limitation of Liability Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">7. Modifications to Terms</h2>\n        <p class=\"about-text\">\n            We reserve the right to revise these Terms &amp; Conditions at any time. By continuing to access or use RummyDex after those revisions become effective, you agree to be bound by the revised terms.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:memo.svg\" alt=\"Modifications to Terms Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n    </div>\n\n</body>\n</html>",
  "meta_description": "Step into the world of Rummy - compete, challenge friends, and rise to the top on RummyApp Online!",
  "animations_enabled": true,
  "privacy_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Privacy Policy - RummyDex</title>\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\" rel=\"stylesheet\">\n\n    <style>\n        body {\n            font-family: 'Roboto', Arial, sans-serif;\n            line-height: 1.75;\n            background-color: #ffffff;\n            margin: 0;\n            padding: 60px 20px;\n            display: flex;\n            justify-content: center;\n        }\n\n        .about-container {\n            max-width: 720px;\n            width: 100%;\n        }\n\n        h1 {\n            font-size: 44px;\n            font-weight: 700;\n            color: #202124;\n            margin-bottom: 8px;\n            text-align: center;\n            letter-spacing: -0.5px;\n        }\n\n        .effective-date {\n            text-align: center;\n            font-size: 14px;\n            color: #5f6368;\n            margin-bottom: 40px;\n        }\n\n        h2.section-heading {\n            font-size: 28px;\n            font-weight: 500;\n            color: #202124;\n            margin-top: 50px;\n            margin-bottom: 16px;\n            letter-spacing: -0.2px;\n        }\n\n        p.about-text {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            font-weight: 400;\n        }\n\n        .sticker-illustration {\n            text-align: center;\n            margin: 35px auto;\n            padding: 10px;\n        }\n\n        .sticker-illustration img {\n            width: 140px;\n            height: auto;\n            display: block;\n            margin: 0 auto;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"about-container\">\n        <h1>Privacy Policy</h1>\n        <p class=\"effective-date\">Effective Date: July 21, 2026</p>\n\n        <h2 class=\"section-heading\">1. Introduction</h2>\n        <p class=\"about-text\">\n            Welcome to RummyDex. This Privacy Policy governs the manner in which RummyDex collects, uses, maintains, and discloses information collected from users visiting our digital directory and software index. We are committed to safeguarding your privacy and ensuring transparency in how your data is handled while you navigate our platform.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:open-book.svg\" alt=\"Privacy Policy Introduction Sticker\">\n        </div>\n\n        <h2 class=\"section-heading\">2. Information Collection</h2>\n        <p class=\"about-text\">\n            RummyDex operates strictly as an informational index. We do not require users to create accounts, register, or provide sensitive personal identification information to access our directory.\n        </p>\n        <p class=\"about-text\">\n            We may collect non-personally identifiable information about users whenever they interact with our website. This data is collected automatically and may include the browser name, the type of computer or device, internet service providers, IP addresses, geographical region, and technical information regarding the user's means of connection to our site.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:bar-chart.svg\" alt=\"Information Collection Sticker\">\n        </div>\n\n        <h2 class=\"section-heading\">3. Web Browser Cookies</h2>\n        <p class=\"about-text\">\n            Our website uses \"cookies\" to enhance the user experience, analyze site traffic, and optimize our directory structure. A cookie is a small text file placed on a user's hard drive for record-keeping purposes and to track non-personal information. Users may choose to set their web browser to refuse cookies or to alert them when cookies are being sent. Please note that if cookies are disabled, some parts of the site may not function properly.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:cookie.svg\" alt=\"Web Browser Cookies Sticker\">\n        </div>\n\n        <h2 class=\"section-heading\">4. Third-Party Services</h2>\n        <p class=\"about-text\">\n            To maintain and support our directory, we may work with standard third-party services for analytics and content delivery. These partners may utilize cookies or similar technologies to provide relevant information and promotions based on your interactions with our site and other websites. You retain full control over your cookie preferences and can adjust, manage, or disable them at any time through your web browser settings or standard network opt-out pages.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:handshake.svg\" alt=\"Third-Party Services Sticker\">\n        </div>\n\n        <h2 class=\"section-heading\">5. Secure External Links and Third-Party Applications</h2>\n        <p class=\"about-text\">\n            RummyDex is an informational bridge. We do not host APKs or software files directly on our servers. Instead, we provide safe, correct links to external, third-party software developers through a secure, carefully verified process to ensure users are directed appropriately. When you click on a link and navigate to a third-party application, you are leaving our jurisdiction. We do not control the content, privacy practices, or data collection policies of these external destinations. Interaction with any other website or application is subject to that entity's own terms and policies.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:globe-with-meridians.svg\" alt=\"External Links Sticker\">\n        </div>\n\n        <h2 class=\"section-heading\">6. Data Security</h2>\n        <p class=\"about-text\">\n            We adopt appropriate data collection, storage, and processing practices, alongside strict security measures, to protect against unauthorized access, alteration, disclosure, or destruction of your non-personal information and data stored on our site. However, no data transmission over the internet or wireless network can be guaranteed to be 100% secure.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:locked.svg\" alt=\"Data Security Sticker\">\n        </div>\n\n        <h2 class=\"section-heading\">7. Acceptance of These Terms</h2>\n        <p class=\"about-text\">\n            By using RummyDex, you signify your acceptance of this Privacy Policy. If you do not agree to this policy, please do not use our site. We reserve the right to update or modify this Privacy Policy at any time. Continued use of the site following the posting of changes to this policy will be deemed your acceptance of those changes.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:balance-scale.svg\" alt=\"Acceptance of Terms Sticker\">\n        </div>\n    </div>\n\n</body>\n</html>",
  "ethics_discrimination_text": "<div ",
  "banners": [],
  "hero_title_style": "mono",
  "seo_keywords": "RummyDex ",
  "hero_title_text": "R",
  "contact_content": "<p>Have questions or feedback? We'd love to hear from you. Our team typically responds within 24-48 hours.</p>",
  "categories": [
    "Yono",
    "Card",
    "Slots"
  ],
  "secure_index_subtitle": "The Ultimate Registry for Strategic Card Simulation, Arcade Logic, and Premium Virtual Gameplay Guides",
  "support_email": "support@rummydex.com",
  "portal_heading": "IMPORTANT NOTICE ",
  "favicon_url": "https://y4q7avawns.ucarecd.net/b391a2fa-42f7-4b3a-a0d5-605cb22aead4/-/preview/1000x1000/",
  "last_updated": "2026-07-21T06:06:57.084Z",
  "site_title": "RummyDex ",
  "disclaimer_heading": "DISCLAIMER ",
  "hero_title_color": "neon-sky",
  "important_notice_heading": "VERY IMPORTANT NOTICE ",
  "secure_index_title": "RummyApp Online ",
  "helpline_telegram": "https://t.me",
  "disclaimer_text": "<div ",
  "responsibility_content": "<!-- ",
  "trending_searches": [],
  "website_faqs": []
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
