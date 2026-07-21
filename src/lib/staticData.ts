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
    "developer": "Bingo ",
    "og_image_url": "",
    "canonical_url": "",
    "file_size": "45",
    "is_hot": false,
    "video_url": "",
    "seo_description": "",
    "id": "q82dbbwh4",
    "created_at": "2026-05-19T12:43:59.040Z",
    "safety_status": "Verified",
    "features_html": "",
    "name": "SPIN CRUSH ",
    "target_region": "",
    "red_box_msg": "",
    "rating": 5,
    "category": "Yono, All App",
    "slug": "spin-crush-",
    "is_coming_soon": false,
    "idea_box_msg": "",
    "custom_admin_box_heading": "",
    "icon_url": "https://res.cloudinary.com/dq34n0ncz/image/upload/f_auto,q_auto/1000119573_wzwse4",
    "version": "2.0.6",
    "description_html": "<p>A new application.</p>",
    "is_featured": false,
    "seo_title": "",
    "is_top_chart": true,
    "yellow_box_msg": "",
    "custom_admin_box_html": "",
    "screenshots": [],
    "faqs": [],
    "link_configured": true,
    "seo_keywords": "",
    "serial_number": 2,
    "release_notes": "",
    "is_new": true
  },
  {
    "developer": "Arcade ",
    "og_image_url": "",
    "canonical_url": "",
    "file_size": "56",
    "is_hot": false,
    "video_url": "",
    "id": "31og4l26i",
    "seo_description": "",
    "category": "Yono, All App",
    "slug": "yono-arcade",
    "idea_box_msg": "",
    "is_coming_soon": false,
    "created_at": "2026-05-19T19:04:26.373Z",
    "safety_status": "Verified",
    "features_html": "",
    "name": "YONO ARCADE",
    "target_region": "",
    "rating": 3.4,
    "red_box_msg": "",
    "is_featured": false,
    "seo_title": "",
    "yellow_box_msg": "",
    "custom_admin_box_heading": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/67a16d31-6771-4617-b88b-288db51d321d/-/preview/554x554/",
    "version": "1.20.1",
    "description_html": "<p>A new application.</p>",
    "seo_keywords": "",
    "serial_number": 3,
    "release_notes": "",
    "is_new": false,
    "custom_admin_box_html": "",
    "screenshots": [],
    "faqs": [],
    "link_configured": false
  },
  {
    "custom_admin_box_heading": "",
    "icon_url": "https://res.cloudinary.com/dyigysy26/image/upload/f_auto,q_auto/1000119609_fkc9fm",
    "version": "1.20.1",
    "description_html": "<p>A new application.</p>",
    "is_featured": false,
    "seo_title": "",
    "yellow_box_msg": "",
    "custom_admin_box_html": "",
    "faqs": [],
    "screenshots": [],
    "link_configured": true,
    "seo_keywords": "",
    "serial_number": 3,
    "release_notes": "",
    "is_new": true,
    "developer": "Jaiho",
    "og_image_url": "",
    "canonical_url": "",
    "file_size": "56",
    "video_url": "",
    "id": "s5u553ymi",
    "seo_description": "",
    "created_at": "2026-05-19T19:23:07.133Z",
    "safety_status": "Verified",
    "features_html": "",
    "target_region": "",
    "name": "JAIHO 91",
    "rating": 4.8,
    "red_box_msg": "",
    "category": "Yono, All App",
    "slug": "jaiho-91",
    "idea_box_msg": "",
    "is_coming_soon": false
  },
  {
    "icon_url": "https://13eehe59cj.ucarecd.net/d3f6486a-b216-4582-b15d-0c735ff6b08f/-/preview/554x554/",
    "description_html": "<p>A new application.</p>",
    "version": "2.5V",
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
    "serial_number": 5,
    "video_url": "",
    "seo_description": "",
    "id": "awus3qajs",
    "og_image_url": "",
    "developer": "Bingo",
    "file_size": "71",
    "canonical_url": "",
    "name": "BINGO 101",
    "target_region": "",
    "features_html": "",
    "red_box_msg": "",
    "rating": 3.6,
    "created_at": "2026-05-20T03:09:33.880Z",
    "safety_status": "Verified",
    "idea_box_msg": "",
    "is_coming_soon": false,
    "category": "Yono, All App",
    "slug": "bingo-101"
  },
  {
    "version": "8.3.06.",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://13eehe59cj.ucarecd.net/97512d34-f561-4ede-8517-2112440079eb/-/preview/554x554/",
    "custom_admin_box_heading": "",
    "yellow_box_msg": "",
    "seo_title": "",
    "is_featured": false,
    "link_configured": true,
    "screenshots": [],
    "faqs": [],
    "custom_admin_box_html": "",
    "is_new": false,
    "release_notes": "",
    "serial_number": 6,
    "seo_keywords": "",
    "seo_description": "",
    "id": "0uiuuhdrj",
    "video_url": "",
    "canonical_url": "",
    "file_size": "67",
    "developer": "Bingo ",
    "og_image_url": "",
    "rating": 3,
    "red_box_msg": "",
    "features_html": "",
    "target_region": "",
    "name": "OK RUMMY",
    "safety_status": "Verified",
    "created_at": "2026-05-20T03:50:33.674Z",
    "idea_box_msg": "",
    "is_coming_soon": false,
    "slug": "ok-rummy",
    "category": "Yono, All App"
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
    "screenshots": [],
    "faqs": [],
    "custom_admin_box_html": "",
    "link_configured": true,
    "canonical_url": "",
    "file_size": "70",
    "developer": "Jaiho",
    "og_image_url": "",
    "id": "4yt0f4yd0",
    "seo_description": "",
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
    "canonical_url": "",
    "file_size": "54",
    "developer": "Arcade ",
    "og_image_url": "",
    "id": "9r044fyi0",
    "seo_description": "",
    "video_url": "",
    "created_at": "2026-05-20T03:56:42.075Z",
    "safety_status": "Verified",
    "red_box_msg": "",
    "rating": 4.1,
    "features_html": "",
    "name": "BOSS RUMMY",
    "target_region": "",
    "slug": "boss-rummy",
    "category": "Yono, All App",
    "idea_box_msg": "",
    "is_coming_soon": false,
    "custom_admin_box_heading": "",
    "version": "2.5V",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://13eehe59cj.ucarecd.net/b5e9d896-71e8-49d6-b091-a971871161e0/-/preview/1000x1000/",
    "is_featured": false,
    "yellow_box_msg": "",
    "seo_title": "",
    "faqs": [],
    "screenshots": [],
    "custom_admin_box_html": "",
    "link_configured": true,
    "serial_number": 8,
    "seo_keywords": "",
    "is_new": false,
    "release_notes": ""
  },
  {
    "icon_url": "https://13eehe59cj.ucarecd.net/393c07ea-4f5e-43a9-ab0c-e12dfe7d755a/-/preview/474x474/",
    "version": "2.0.6",
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
    "serial_number": 9,
    "video_url": "",
    "seo_description": "",
    "id": "5b7fj0cq7",
    "developer": "Addi",
    "og_image_url": "",
    "canonical_url": "",
    "file_size": "79",
    "features_html": "",
    "name": "RUMMY 91",
    "target_region": "",
    "rating": 4.9,
    "red_box_msg": "",
    "safety_status": "Verified",
    "created_at": "2026-05-20T04:01:04.611Z",
    "idea_box_msg": "",
    "is_coming_soon": false,
    "category": "All App",
    "slug": "rummy-91"
  },
  {
    "is_featured": false,
    "yellow_box_msg": "",
    "seo_title": "",
    "custom_admin_box_heading": "",
    "description_html": "<p>A new application.</p>",
    "version": "5.0",
    "icon_url": "https://13eehe59cj.ucarecd.net/0d710f11-2c9d-4312-89de-be65ce21a4fe/-/preview/750x750/",
    "serial_number": 10,
    "seo_keywords": "",
    "is_new": false,
    "release_notes": "",
    "screenshots": [],
    "faqs": [],
    "custom_admin_box_html": "",
    "link_configured": true,
    "file_size": "65",
    "canonical_url": "",
    "og_image_url": "",
    "developer": "Sk varba",
    "seo_description": "",
    "id": "ieam3hkbq",
    "video_url": "",
    "slug": "gogo-rummy-",
    "category": "Yono, All App",
    "idea_box_msg": "",
    "is_coming_soon": false,
    "safety_status": "Verified",
    "created_at": "2026-05-20T06:58:27.643Z",
    "red_box_msg": "",
    "rating": 3.9,
    "target_region": "",
    "name": "GOGO RUMMY ",
    "features_html": ""
  },
  {
    "rating": 4.6,
    "red_box_msg": "",
    "target_region": "",
    "name": "CLUB INR",
    "features_html": "",
    "created_at": "2026-05-20T08:02:40.971Z",
    "safety_status": "Verified",
    "is_coming_soon": false,
    "idea_box_msg": "",
    "slug": "club-inr",
    "category": "Yono, All App",
    "seo_description": "",
    "id": "5j5b7qbrw",
    "video_url": "",
    "file_size": "75",
    "canonical_url": "",
    "og_image_url": "",
    "developer": "S.A vejay",
    "link_configured": true,
    "faqs": [],
    "screenshots": [],
    "custom_admin_box_html": "",
    "is_new": false,
    "release_notes": "",
    "serial_number": 11,
    "seo_keywords": "",
    "description_html": "<p>A new application.</p>",
    "version": "1.8",
    "icon_url": "https://13eehe59cj.ucarecd.net/3059d25d-1497-4cff-aead-68758187fe0b/-/preview/554x554/",
    "custom_admin_box_heading": "",
    "yellow_box_msg": "",
    "seo_title": "",
    "is_featured": false
  },
  {
    "yellow_box_msg": "",
    "seo_title": "",
    "is_featured": false,
    "version": "1.8",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://13eehe59cj.ucarecd.net/f7108631-b74a-49e5-8abf-37cec6950f7c/-/preview/512x512/",
    "custom_admin_box_heading": "",
    "is_new": false,
    "release_notes": "",
    "serial_number": 12,
    "seo_keywords": "",
    "link_configured": true,
    "screenshots": [],
    "faqs": [],
    "custom_admin_box_html": "",
    "id": "f4ktp4dfi",
    "seo_description": "",
    "video_url": "",
    "canonical_url": "",
    "file_size": "61",
    "developer": "Addi",
    "og_image_url": "",
    "idea_box_msg": "",
    "is_coming_soon": false,
    "slug": "abc-rummy-",
    "category": "Yono, All App",
    "rating": 3.9,
    "red_box_msg": "",
    "features_html": "",
    "target_region": "",
    "name": "ABC Rummy ",
    "safety_status": "Verified",
    "created_at": "2026-05-26T07:04:36.330Z"
  },
  {
    "seo_description": "",
    "id": "4w1yxs6mm",
    "video_url": "",
    "canonical_url": "",
    "file_size": "54",
    "developer": "AB Arora",
    "og_image_url": "",
    "red_box_msg": "",
    "rating": 5,
    "features_html": "",
    "target_region": "",
    "name": "777.Rummy",
    "safety_status": "Verified",
    "created_at": "2026-05-26T07:09:01.068Z",
    "is_coming_soon": false,
    "idea_box_msg": "",
    "slug": "777-rummy",
    "category": "Yono, All App",
    "version": "1.6",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://13eehe59cj.ucarecd.net/fb951184-b849-4ff0-8882-a4d826508fb7/-/preview/190x190/",
    "custom_admin_box_heading": "",
    "yellow_box_msg": "",
    "seo_title": "",
    "is_featured": false,
    "link_configured": true,
    "screenshots": [],
    "faqs": [],
    "custom_admin_box_html": "",
    "is_new": false,
    "release_notes": "",
    "serial_number": 13,
    "seo_keywords": ""
  },
  {
    "custom_admin_box_heading": "",
    "description_html": "<p>A new application.</p>",
    "version": "1.8",
    "icon_url": "https://13eehe59cj.ucarecd.net/74347710-3cb2-468c-98eb-5666a0af487c/-/preview/190x190/",
    "is_featured": false,
    "yellow_box_msg": "",
    "seo_title": "",
    "screenshots": [],
    "faqs": [],
    "custom_admin_box_html": "",
    "link_configured": true,
    "serial_number": 14,
    "seo_keywords": "",
    "is_new": false,
    "release_notes": "",
    "file_size": "59",
    "canonical_url": "",
    "og_image_url": "",
    "developer": "AZ ever",
    "id": "w1sttlwv7",
    "seo_description": "",
    "video_url": "",
    "created_at": "2026-05-26T07:12:55.821Z",
    "safety_status": "Verified",
    "rating": 4,
    "red_box_msg": "",
    "name": "EVER 777",
    "target_region": "",
    "features_html": "",
    "slug": "ever-777",
    "category": "Yono, All App",
    "idea_box_msg": "",
    "is_coming_soon": false
  },
  {
    "is_featured": false,
    "seo_title": "",
    "yellow_box_msg": "",
    "custom_admin_box_heading": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/4b2bd57d-9855-40a8-b452-34edee84ed09/-/preview/190x190/",
    "description_html": "<p>A new application.</p>",
    "version": "2.0",
    "seo_keywords": "",
    "serial_number": 15,
    "release_notes": "",
    "is_new": false,
    "custom_admin_box_html": "",
    "screenshots": [],
    "faqs": [],
    "link_configured": true,
    "og_image_url": "",
    "developer": "Raj dav",
    "file_size": "75",
    "canonical_url": "",
    "video_url": "",
    "id": "dp2lcn2ae",
    "seo_description": "",
    "category": "Yono, All App",
    "slug": "game-rummy",
    "is_coming_soon": false,
    "idea_box_msg": "",
    "created_at": "2026-05-26T07:16:08.600Z",
    "safety_status": "Verified",
    "target_region": "",
    "name": "Game Rummy",
    "features_html": "",
    "rating": 4,
    "red_box_msg": ""
  },
  {
    "link_configured": true,
    "faqs": [],
    "screenshots": [],
    "custom_admin_box_html": "",
    "is_new": false,
    "release_notes": "",
    "serial_number": 16,
    "seo_keywords": "",
    "version": "1.9",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://13eehe59cj.ucarecd.net/c01e9676-e748-4342-9ac7-e972030981fc/-/preview/190x190/",
    "custom_admin_box_heading": "",
    "yellow_box_msg": "",
    "seo_title": "",
    "is_featured": false,
    "rating": 4.1,
    "red_box_msg": "",
    "features_html": "",
    "name": "Hi Rummy ",
    "target_region": "",
    "safety_status": "Verified",
    "created_at": "2026-05-26T07:18:29.456Z",
    "idea_box_msg": "",
    "is_coming_soon": false,
    "slug": "hi-rummy-",
    "category": "Yono, All App",
    "id": "4lgypb90h",
    "seo_description": "",
    "video_url": "",
    "canonical_url": "",
    "file_size": "54",
    "developer": "Addi",
    "og_image_url": ""
  },
  {
    "release_notes": "",
    "is_new": false,
    "seo_keywords": "",
    "serial_number": 17,
    "link_configured": true,
    "custom_admin_box_html": "",
    "faqs": [],
    "screenshots": [],
    "seo_title": "",
    "yellow_box_msg": "",
    "is_featured": false,
    "icon_url": "https://13eehe59cj.ucarecd.net/2a718650-0602-495f-9ca4-b13c86e58c02/-/preview/190x190/",
    "version": "3.0",
    "description_html": "<p>A new application.</p>",
    "custom_admin_box_heading": "",
    "is_coming_soon": false,
    "idea_box_msg": "",
    "category": "Yono, All App",
    "slug": "inr-rummy",
    "features_html": "",
    "target_region": "",
    "name": "INR Rummy",
    "rating": 5,
    "red_box_msg": "",
    "safety_status": "Verified",
    "created_at": "2026-05-26T07:21:55.085Z",
    "is_hot": false,
    "video_url": "",
    "seo_description": "",
    "id": "2f90a87hv",
    "developer": "Arcade ",
    "og_image_url": "",
    "canonical_url": "",
    "file_size": "79"
  },
  {
    "link_configured": true,
    "faqs": [],
    "screenshots": [],
    "custom_admin_box_html": "",
    "is_new": false,
    "release_notes": "",
    "serial_number": 18,
    "seo_keywords": "",
    "description_html": "<p>A new application.</p>",
    "version": "2.1",
    "icon_url": "https://13eehe59cj.ucarecd.net/c693366d-d543-4d76-84ba-3963a3f3c792/-/preview/190x190/",
    "custom_admin_box_heading": "",
    "yellow_box_msg": "",
    "seo_title": "",
    "is_featured": false,
    "rating": 3.9,
    "red_box_msg": "",
    "name": "JAIHO RUMMY ",
    "target_region": "",
    "features_html": "",
    "created_at": "2026-05-26T07:26:42.606Z",
    "safety_status": "Verified",
    "is_coming_soon": false,
    "idea_box_msg": "",
    "slug": "jaiho-rummy-",
    "category": "Yono, All App",
    "id": "9a05609sb",
    "seo_description": "",
    "video_url": "",
    "file_size": "2.4",
    "canonical_url": "",
    "og_image_url": "",
    "developer": "PW sahar"
  },
  {
    "faqs": [],
    "screenshots": [],
    "custom_admin_box_html": "",
    "link_configured": true,
    "serial_number": 19,
    "seo_keywords": "",
    "is_new": false,
    "release_notes": "",
    "custom_admin_box_heading": "",
    "description_html": "<p>A new application.</p>",
    "version": "1.6",
    "icon_url": "https://13eehe59cj.ucarecd.net/cf0b4466-3d5b-4eb5-bc88-afc9a8213ac4/-/preview/190x190/",
    "is_featured": false,
    "yellow_box_msg": "",
    "seo_title": "",
    "safety_status": "Verified",
    "created_at": "2026-05-26T07:31:59.173Z",
    "rating": 4.2,
    "red_box_msg": "",
    "name": "Love Rummy",
    "target_region": "",
    "features_html": "",
    "slug": "love-rummy",
    "category": "Yono, All App",
    "idea_box_msg": "",
    "is_coming_soon": false,
    "file_size": "68",
    "canonical_url": "",
    "og_image_url": "",
    "developer": "Mak job",
    "seo_description": "",
    "id": "l7a60keix",
    "video_url": ""
  },
  {
    "seo_description": "",
    "id": "4paka7kie",
    "video_url": "",
    "canonical_url": "",
    "file_size": "50",
    "developer": "AB Arora",
    "og_image_url": "",
    "idea_box_msg": "",
    "is_coming_soon": false,
    "slug": "joy-rummy",
    "category": "Yono, All App",
    "red_box_msg": "",
    "rating": 5,
    "features_html": "",
    "target_region": "",
    "name": "JOY RUMMY",
    "created_at": "2026-05-26T07:34:35.782Z",
    "safety_status": "Verified",
    "yellow_box_msg": "",
    "seo_title": "",
    "is_featured": false,
    "version": "1.8",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://13eehe59cj.ucarecd.net/e0898894-5d5b-47ab-a14f-13b4514b3b4f/-/preview/190x190/",
    "custom_admin_box_heading": "",
    "is_new": false,
    "release_notes": "",
    "serial_number": 20,
    "seo_keywords": "",
    "link_configured": false,
    "faqs": [],
    "screenshots": [],
    "custom_admin_box_html": ""
  },
  {
    "video_url": "",
    "id": "2768ohu2a",
    "seo_description": "",
    "og_image_url": "",
    "developer": "AZ ever",
    "file_size": "70",
    "canonical_url": "",
    "is_coming_soon": false,
    "idea_box_msg": "",
    "category": "Yono, All App",
    "slug": "maha-games",
    "target_region": "",
    "name": "MAHA GAMES",
    "features_html": "",
    "rating": 4,
    "red_box_msg": "",
    "safety_status": "Verified",
    "created_at": "2026-05-26T07:37:07.122Z",
    "seo_title": "",
    "yellow_box_msg": "",
    "is_featured": false,
    "icon_url": "https://13eehe59cj.ucarecd.net/2d664adc-3e1f-4317-805c-dea453f52389/-/preview/190x190/",
    "description_html": "<p>A new application.</p>",
    "version": "1.0",
    "custom_admin_box_heading": "",
    "release_notes": "",
    "is_new": false,
    "seo_keywords": "",
    "serial_number": 21,
    "link_configured": true,
    "custom_admin_box_html": "",
    "screenshots": [],
    "faqs": []
  },
  {
    "video_url": "",
    "seo_description": "",
    "id": "us5xuk5bm",
    "og_image_url": "",
    "developer": "AZ ever",
    "file_size": "58",
    "canonical_url": "",
    "idea_box_msg": "",
    "is_coming_soon": false,
    "category": "Yono, All App",
    "slug": "rummy-ludo",
    "target_region": "",
    "name": "Rummy Ludo",
    "features_html": "",
    "red_box_msg": "",
    "rating": 3.9,
    "safety_status": "Verified",
    "created_at": "2026-05-26T07:39:44.282Z",
    "seo_title": "",
    "yellow_box_msg": "",
    "is_featured": false,
    "icon_url": "https://13eehe59cj.ucarecd.net/6aa28ca8-cef1-4d1a-b054-13e242eaef02/-/preview/190x190/",
    "description_html": "<p>A new application.</p>",
    "version": "5.8",
    "custom_admin_box_heading": "",
    "release_notes": "",
    "is_new": false,
    "seo_keywords": "",
    "serial_number": 22,
    "link_configured": true,
    "custom_admin_box_html": "",
    "screenshots": [],
    "faqs": []
  },
  {
    "created_at": "2026-05-26T07:42:24.615Z",
    "safety_status": "Verified",
    "features_html": "",
    "target_region": "",
    "name": "Rummy 77",
    "red_box_msg": "",
    "rating": 3.9,
    "category": "Yono, All App",
    "slug": "rummy-77",
    "is_coming_soon": false,
    "idea_box_msg": "",
    "developer": "Arcade ",
    "og_image_url": "",
    "canonical_url": "",
    "file_size": "45",
    "video_url": "",
    "seo_description": "",
    "id": "69x1lstq7",
    "custom_admin_box_html": "",
    "faqs": [],
    "screenshots": [],
    "link_configured": true,
    "seo_keywords": "",
    "serial_number": 23,
    "release_notes": "",
    "is_new": false,
    "custom_admin_box_heading": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/d17abcfc-c8dc-4c36-8558-e3408002d37e/-/preview/190x190/",
    "version": "2.0.6",
    "description_html": "<p>A new application.</p>",
    "is_featured": false,
    "seo_title": "",
    "yellow_box_msg": ""
  },
  {
    "yellow_box_msg": "",
    "seo_title": "",
    "is_featured": false,
    "version": "1.8",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://13eehe59cj.ucarecd.net/2738be7d-f198-4f70-a7d8-c8eb5f452eb0/-/preview/190x190/",
    "custom_admin_box_heading": "",
    "is_new": false,
    "release_notes": "",
    "serial_number": 24,
    "seo_keywords": "",
    "link_configured": false,
    "screenshots": [],
    "faqs": [],
    "custom_admin_box_html": "",
    "seo_description": "",
    "id": "j79n2g3l9",
    "video_url": "",
    "canonical_url": "",
    "file_size": "58",
    "developer": "AB Arora",
    "og_image_url": "",
    "idea_box_msg": "",
    "is_coming_soon": false,
    "slug": "share-slots",
    "category": "Yono, All App",
    "red_box_msg": "",
    "rating": 4,
    "features_html": "",
    "name": "Share Slots",
    "target_region": "",
    "safety_status": "Verified",
    "created_at": "2026-05-26T07:44:32.442Z"
  },
  {
    "link_configured": true,
    "faqs": [],
    "screenshots": [],
    "custom_admin_box_html": "",
    "is_new": false,
    "release_notes": "",
    "serial_number": 26,
    "seo_keywords": "",
    "version": "1.6",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://13eehe59cj.ucarecd.net/e4314d5e-eb77-46b9-8998-8e0f94970b38/-/preview/72x72/",
    "custom_admin_box_heading": "",
    "yellow_box_msg": "",
    "seo_title": "",
    "is_featured": false,
    "red_box_msg": "",
    "rating": 3.5,
    "features_html": "",
    "target_region": "",
    "name": "567 SLOTS",
    "created_at": "2026-05-26T07:51:47.637Z",
    "safety_status": "Verified",
    "is_coming_soon": false,
    "idea_box_msg": "",
    "slug": "567-slots",
    "category": "Yono, All App",
    "seo_description": "",
    "id": "n3w2vjk0b",
    "video_url": "",
    "canonical_url": "",
    "file_size": "65",
    "developer": "Tania JK ",
    "og_image_url": ""
  },
  {
    "og_image_url": "",
    "developer": "Admin",
    "file_size": "Tanu WD",
    "canonical_url": "",
    "video_url": "",
    "seo_description": "",
    "id": "owxg4aekg",
    "category": "Yono, All App",
    "slug": "789jackpots",
    "idea_box_msg": "",
    "is_coming_soon": false,
    "created_at": "2026-05-26T07:56:30.478Z",
    "safety_status": "Verified",
    "target_region": "",
    "name": "789Jackpots",
    "features_html": "",
    "red_box_msg": "",
    "rating": 2.9,
    "is_featured": false,
    "seo_title": "",
    "yellow_box_msg": "",
    "custom_admin_box_heading": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/a0cedc36-33b0-4e75-a1ea-cd963b3ee0ca/-/preview/190x190/",
    "description_html": "<p>A new application.</p>",
    "version": "1.9",
    "seo_keywords": "",
    "serial_number": 27,
    "release_notes": "",
    "is_new": false,
    "custom_admin_box_html": "",
    "screenshots": [],
    "faqs": [],
    "link_configured": true
  },
  {
    "yellow_box_msg": "",
    "seo_title": "",
    "is_featured": false,
    "description_html": "<p>A new application.</p>",
    "version": "1.8",
    "icon_url": "https://13eehe59cj.ucarecd.net/d9226164-7447-425e-ba61-618d72ed28df/-/preview/190x190/",
    "custom_admin_box_heading": "",
    "is_new": false,
    "release_notes": "",
    "serial_number": 28,
    "seo_keywords": "",
    "link_configured": true,
    "faqs": [],
    "screenshots": [],
    "custom_admin_box_html": "",
    "id": "fw5wsziec",
    "seo_description": "",
    "video_url": "",
    "file_size": "78",
    "canonical_url": "",
    "og_image_url": "",
    "developer": "Rahul HL",
    "idea_box_msg": "",
    "is_coming_soon": false,
    "slug": "yono-vip",
    "category": "Yono, All App",
    "red_box_msg": "",
    "rating": 4,
    "name": "YONO VIP",
    "target_region": "",
    "features_html": "",
    "safety_status": "Verified",
    "created_at": "2026-05-26T08:00:01.636Z"
  },
  {
    "safety_status": "Verified",
    "created_at": "2026-06-03T10:17:01.058Z",
    "publish_date": "2026-06-10T12:00:00.000Z",
    "rating": 4.2,
    "red_box_msg": "",
    "features_html": "",
    "name": "Teen Patti Octro",
    "target_region": "",
    "slug": "teen-patti-octro",
    "category": "Card",
    "idea_box_msg": "",
    "is_coming_soon": true,
    "canonical_url": "",
    "file_size": "90",
    "developer": "Unknown ",
    "og_image_url": "",
    "id": "t1ocq5iar",
    "seo_description": "",
    "video_url": "",
    "screenshots": [],
    "faqs": [],
    "custom_admin_box_html": "",
    "link_configured": true,
    "serial_number": 34,
    "seo_keywords": "",
    "is_new": true,
    "release_notes": "",
    "custom_admin_box_heading": "",
    "version": "3",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://kk19a1nwwx.ucarecd.net/091fdebe-1562-41c6-99ea-b60665adb5ee/-/preview/512x512/",
    "is_featured": false,
    "yellow_box_msg": "",
    "seo_title": ""
  },
  {
    "serial_number": 29,
    "seo_keywords": "",
    "is_new": false,
    "release_notes": "",
    "faqs": [],
    "screenshots": [],
    "custom_admin_box_html": "",
    "link_configured": true,
    "is_featured": false,
    "yellow_box_msg": "",
    "seo_title": "",
    "custom_admin_box_heading": "",
    "version": "1.0",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://kk19a1nwwx.ucarecd.net/5b72cf8f-4959-426e-9e1d-8e2150529efb/-/preview/240x240/",
    "slug": "zynga-poker-texas-holdem-game",
    "category": "Card",
    "idea_box_msg": "",
    "is_coming_soon": true,
    "created_at": "2026-06-03T10:30:01.393Z",
    "safety_status": "Verified",
    "rating": 5,
    "red_box_msg": "",
    "features_html": "",
    "name": "Zynga Poker- Texas Holdem Game",
    "target_region": "",
    "canonical_url": "",
    "file_size": "Unknown",
    "developer": "Admin",
    "og_image_url": "",
    "id": "rrmv44n9n",
    "seo_description": "",
    "video_url": ""
  },
  {
    "id": "wf59smk6l",
    "seo_description": "",
    "developer": "Admin",
    "og_image_url": "",
    "canonical_url": "",
    "file_size": "Unknown",
    "idea_box_msg": null,
    "is_coming_soon": true,
    "category": "Card",
    "slug": "uno-",
    "features_html": null,
    "name": "UNO! ",
    "target_region": "",
    "rating": 5,
    "red_box_msg": null,
    "safety_status": "Verified",
    "created_at": "2026-06-07T10:14:11.138Z",
    "seo_title": "",
    "yellow_box_msg": null,
    "is_featured": false,
    "icon_url": "https://1ewg1yyass.ucarecd.net/c0172402-c854-4016-876e-6b7769547c8f/-/preview/238x211/",
    "version": "1.0",
    "description_html": "<p>A new application.</p>",
    "custom_admin_box_heading": null,
    "release_notes": "",
    "is_new": true,
    "seo_keywords": "",
    "serial_number": 30,
    "link_configured": true,
    "custom_admin_box_html": null,
    "screenshots": [],
    "faqs": []
  },
  {
    "category": "Card",
    "slug": "rummy-gold-with-fast-rummy",
    "is_coming_soon": true,
    "idea_box_msg": "",
    "safety_status": "Verified",
    "created_at": "2026-06-07T10:16:45.949Z",
    "name": "Rummy GOLD - With Fast Rummy",
    "target_region": "",
    "red_box_msg": "",
    "rating": 5,
    "developer": "Admin",
    "og_image_url": "",
    "canonical_url": "",
    "file_size": "Unknown",
    "id": "8epj9jjpu",
    "seo_description": "",
    "seo_keywords": "",
    "serial_number": 31,
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
    "icon_url": "https://1ewg1yyass.ucarecd.net/33e0d4e8-6e41-4791-9e41-8d915a12e504/-/preview/447x447/",
    "version": "1.0",
    "description_html": "<p>A new application.</p>"
  },
  {
    "faqs": [],
    "screenshots": [],
    "custom_admin_box_html": null,
    "link_configured": true,
    "serial_number": 32,
    "seo_keywords": "",
    "is_new": true,
    "release_notes": "",
    "custom_admin_box_heading": null,
    "version": "1.0",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://1ewg1yyass.ucarecd.net/2a4b59ef-16a3-4b14-bad3-1c3796af3492/-/preview/447x447/",
    "is_featured": false,
    "yellow_box_msg": null,
    "seo_title": "",
    "created_at": "2026-06-07T10:19:11.616Z",
    "safety_status": "Verified",
    "rating": 5,
    "red_box_msg": null,
    "features_html": null,
    "target_region": "",
    "name": "Indian Rummy 3 Patti Card Game",
    "slug": "indian-rummy-3-patti-card-game",
    "category": "Card",
    "is_coming_soon": true,
    "idea_box_msg": null,
    "canonical_url": "",
    "file_size": "Unknown",
    "developer": "Admin",
    "og_image_url": "",
    "seo_description": "",
    "id": "8jt0hokyo"
  },
  {
    "seo_keywords": "",
    "serial_number": 33,
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
    "icon_url": "https://1ewg1yyass.ucarecd.net/0f918f11-b247-4b5a-9d26-d510dddffbfe/-/preview/447x447/",
    "version": "1.0",
    "description_html": "<p>A new application.</p>",
    "category": "Slots",
    "slug": "lucky-spin-slots",
    "idea_box_msg": "",
    "is_coming_soon": true,
    "publish_date": "2026-07-08T13:08:00.000Z",
    "created_at": "2026-06-07T13:13:11.211Z",
    "safety_status": "Verified",
    "features_html": "",
    "target_region": "",
    "name": "Lucky Spin Slots",
    "rating": 5,
    "red_box_msg": "",
    "developer": "Admin",
    "og_image_url": "https://1ewg1yyass.ucarecd.net/0f918f11-b247-4b5a-9d26-d510dddffbfe/-/preview/447x447/",
    "canonical_url": "",
    "file_size": "Unknown",
    "seo_description": "",
    "id": "01x9h7nfb"
  },
  {
    "is_featured": false,
    "seo_title": "",
    "yellow_box_msg": "",
    "custom_admin_box_heading": "",
    "icon_url": "https://1ewg1yyass.ucarecd.net/9d9339e0-77d4-418b-86f8-0a0e074c1d4e/-/preview/190x190/",
    "description_html": "<p>A new application.</p>",
    "version": "1.0",
    "seo_keywords": "",
    "serial_number": 28,
    "release_notes": "",
    "is_new": false,
    "custom_admin_box_html": "",
    "screenshots": [],
    "faqs": [],
    "link_configured": true,
    "og_image_url": "",
    "developer": "AB Arora",
    "file_size": "76",
    "canonical_url": "",
    "video_url": "",
    "id": "3cflt97b5",
    "seo_description": "",
    "category": "Yono",
    "slug": "ind-club",
    "idea_box_msg": "",
    "is_coming_soon": true,
    "publish_date": "2026-06-12T15:30:00.000Z",
    "created_at": "2026-06-12T12:39:30.407Z",
    "safety_status": "Verified",
    "target_region": "",
    "name": "IND Club",
    "features_html": "",
    "rating": 4.5,
    "red_box_msg": ""
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
  "last_updated": "2026-07-21T07:47:19.673Z",
  "site_title": "RummyDex ",
  "support_email": "support@rummydex.com",
  "portal_heading": "IMPORTANT NOTICE ",
  "favicon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784618987/Make_this_into_a_perfect_circle_format_keeping_the_RUMMY_DEX_text_and_red__20260721_125826_0000_zgdz8s.png",
  "secure_index_subtitle": "The Ultimate Registry for Strategic Card Simulation, Arcade Logic, and Premium Virtual Gameplay Guides",
  "responsibility_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Platform Responsibility Clause - RummyDex</title>\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\" rel=\"stylesheet\">\n\n    <style>\n        body {\n            font-family: 'Roboto', Arial, sans-serif;\n            line-height: 1.75;\n            background-color: #ffffff;\n            margin: 0;\n            padding: 60px 20px;\n            display: flex;\n            justify-content: center;\n        }\n\n        .about-container {\n            max-width: 720px;\n            width: 100%;\n        }\n\n        h1 {\n            font-size: 40px;\n            font-weight: 700;\n            color: #202124;\n            margin-bottom: 40px;\n            text-align: center;\n            letter-spacing: -0.5px;\n        }\n\n        h2.section-heading {\n            font-size: 28px;\n            font-weight: 500;\n            color: #202124;\n            margin-top: 50px;\n            margin-bottom: 16px;\n            letter-spacing: -0.2px;\n        }\n\n        p.about-text {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            font-weight: 400;\n        }\n\n        .sticker-illustration {\n            text-align: center;\n            margin: 35px auto;\n            padding: 10px;\n        }\n\n        .sticker-illustration img {\n            width: 140px;\n            height: 140px;\n            display: block;\n            margin: 0 auto;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"about-container\">\n        <h1>Platform Responsibility Clause</h1>\n\n        <h2 class=\"section-heading\">1. Technical Operations & Secure Routing</h2>\n        <p class=\"about-text\">\n            Our operational responsibility is strictly limited to the maintenance of the RummyDex directory infrastructure. We ensure that our platform accurately catalogs offline and casual online applications, and that all outbound resource links are generated through a secure, verified process. We guarantee that the links provided on our site correctly route users to the intended, legitimate third-party developer sources at the time of publication.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:gear.svg\" alt=\"Technical Operations Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">2. Limits of Content & Software Liability</h2>\n        <p class=\"about-text\">\n            RummyDex does not host software, APK files, or proprietary source code on our servers. Because our control is strictly limited to our own website interface, we are not liable for the performance, data practices, or digital security of the external third-party destinations. Any downloading or installation of software from external sources is conducted solely at the user's discretion and risk.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:warning.svg\" alt=\"Software Liability Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">3. Post-Listing Developer Modifications</h2>\n        <p class=\"about-text\">\n            While our team conducts hands-on evaluation prior to listing any offline or online application, we do not govern the external developers. We are not responsible for unannounced updates, post-launch mechanic alterations, or software modifications implemented by third parties after an app has been published on our site.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:construction.svg\" alt=\"Post-Listing Modifications Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">4. Policy Enforcement & User Experiences</h2>\n        <p class=\"about-text\">\n            For information regarding how RummyDex handles non-compliant developer updates, community oversight, and user-submitted reviews, please refer to our dedicated Report & Removal Policy and our Terms & Conditions.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:memo.svg\" alt=\"Policy Enforcement Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n    </div>\n\n</body>\n</html>",
  "trending_searches": [],
  "website_faqs": [],
  "disclaimer_text": "<div ",
  "secure_index_title": "RummyDex ",
  "helpline_telegram": "https://t.me",
  "disclaimer_heading": "DISCLAIMER ",
  "important_notice_heading": "VERY IMPORTANT NOTICE ",
  "hero_title_color": "neon-sky",
  "ticker_text": "L",
  "important_notice": "<div ",
  "helpline_whatsapp": "+918653034735",
  "logo_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784618987/Make_this_into_a_perfect_circle_format_keeping_the_RUMMY_DEX_text_and_red__20260721_125826_0000_zgdz8s.png",
  "about_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>About Us - RummyDex</title>\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\" rel=\"stylesheet\">\n\n    <style>\n        body {\n            font-family: 'Roboto', Arial, sans-serif;\n            line-height: 1.75;\n            background-color: #ffffff;\n            margin: 0;\n            padding: 60px 20px;\n            display: flex;\n            justify-content: center;\n        }\n\n        .about-container {\n            max-width: 720px;\n            width: 100%;\n        }\n\n        h1 {\n            font-size: 44px;\n            font-weight: 700;\n            color: #202124;\n            margin-bottom: 40px;\n            text-align: center;\n            letter-spacing: -0.5px;\n        }\n\n        h2.section-heading {\n            font-size: 28px;\n            font-weight: 500;\n            color: #202124;\n            margin-top: 50px;\n            margin-bottom: 16px;\n            letter-spacing: -0.2px;\n        }\n\n        p.about-text {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            font-weight: 400;\n        }\n\n        .sticker-illustration {\n            text-align: center;\n            margin: 35px auto;\n            padding: 10px;\n        }\n\n        .sticker-illustration img {\n            width: 140px;\n            height: 140px;\n            display: block;\n            margin: 0 auto;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"about-container\">\n        <h1>About Us</h1>\n\n        <h2 class=\"section-heading\">The Meaning of \"Dex\" (Who We Are)</h2>\n        <p class=\"about-text\">\n            Welcome to RummyDex. The word \"Dex\" stands for index or directory, which perfectly describes our core identity. We are an independent digital library built to catalog, review, and provide structured, transparent information about casual games and digital applications. Our platform is designed to be a complete informational hub for entertainment enthusiasts.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:card-index-dividers.svg\" alt=\"Index Directory Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">How We Provide Information & Links</h2>\n        <p class=\"about-text\">\n            We function strictly as an informational bridge. Instead of hosting direct software or APK files on our servers, we provide comprehensive technical breakdowns, clear guides, and safe, direct links to third-party developer sources. This ensures that our platform remains fast and secure, and that you always access applications straight from the source.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:link.svg\" alt=\"Direct Links Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">Real Hands-On Testing & Experience</h2>\n        <p class=\"about-text\">\n            We do not just list apps blindly. Before any application is published on our platform, our team conducts a real, hands-on test. We personally experience the app's performance, mechanics, and user interface to ensure it meets our strict entertainment standards before it ever reaches our directory.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:check-mark-button.svg\" alt=\"Hands-on Testing Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">Complete Transparency & Neutrality</h2>\n        <p class=\"about-text\">\n            RummyDex operates with 100% complete transparency and zero developer bias. We act entirely as an independent informational resource. Our goal is to provide honest, neutral, and clear breakdowns so that you can make fully informed choices about your offline and casual online entertainment.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:balance-scale.svg\" alt=\"Transparency and Neutrality Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n    </div>\n\n</body>\n</html>",
  "hero_title_visible": true,
  "hero_title_subtitle": "C",
  "hero_title_animation": "slide-up",
  "quick_links": [],
  "ethics_heading": "ETHNICS",
  "social_links": {
    "facebook": "",
    "instagram": "",
    "twitter": "",
    "linkedin": "",
    "youtube": ""
  },
  "contact_content": "<p>Have questions or feedback? We'd love to hear from you. Our team typically responds within 24-48 hours.</p>",
  "hero_title_text": "R",
  "categories": [
    "Yono",
    "Card",
    "Slots"
  ],
  "report_removal_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Report & Removal Policy - RummyDex</title>\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\" rel=\"stylesheet\">\n\n    <style>\n        body {\n            font-family: 'Roboto', Arial, sans-serif;\n            line-height: 1.75;\n            background-color: #ffffff;\n            margin: 0;\n            padding: 60px 20px;\n            display: flex;\n            justify-content: center;\n        }\n\n        .about-container {\n            max-width: 720px;\n            width: 100%;\n        }\n\n        h1 {\n            font-size: 40px;\n            font-weight: 700;\n            color: #202124;\n            margin-bottom: 40px;\n            text-align: center;\n            letter-spacing: -0.5px;\n        }\n\n        h2.section-heading {\n            font-size: 28px;\n            font-weight: 500;\n            color: #202124;\n            margin-top: 50px;\n            margin-bottom: 16px;\n            letter-spacing: -0.2px;\n        }\n\n        p.about-text {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            font-weight: 400;\n        }\n\n        p.about-text strong,\n        ul.about-list strong {\n            font-weight: 700;\n            color: #202124;\n        }\n\n        ul.about-list {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            padding-left: 24px;\n        }\n\n        ul.about-list li {\n            margin-bottom: 14px;\n        }\n\n        .sticker-illustration {\n            text-align: center;\n            margin: 35px auto;\n            padding: 10px;\n        }\n\n        .sticker-illustration img {\n            width: 140px;\n            height: 140px;\n            display: block;\n            margin: 0 auto;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"about-container\">\n        <h1>Report &amp; Removal Policy</h1>\n\n        <h2 class=\"section-heading\">1. Our Commitment to a Safe Directory</h2>\n        <p class=\"about-text\">\n            RummyDex is built on the foundation of providing a clean, safe, and purely entertainment-focused digital index. Because third-party developers can update their applications dynamically after we list them, we rely on active community oversight to help us maintain the integrity of our platform. This policy outlines exactly what we do not allow and how we handle non-compliant applications.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:shield.svg\" alt=\"Safe Directory Commitment Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">2. What You Should Report</h2>\n        <p class=\"about-text\">\n            We ask our community to immediately report any application listed on our platform that exhibits any of the following violations:\n        </p>\n        <ul class=\"about-list\">\n            <li><strong>Real-Money Gaming (RMG):</strong> The sudden introduction of real-money betting, gambling, or mandatory financial deposits to play.</li>\n            <li><strong>Deceptive Updates:</strong> An application that drastically changes its core gameplay from what was originally reviewed and listed (e.g., a casual offline puzzle game updating into a casino app).</li>\n            <li><strong>Broken or Malicious Links:</strong> A resource link that no longer directs to the verified developer source, or redirects to an unsafe, unverified page.</li>\n            <li><strong>Excessive Intrusive Ads:</strong> Applications that have updated to include unskippable system-level ads or malware-like behavior that ruins the user experience.</li>\n        </ul>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:no-entry.svg\" alt=\"Violations to Report Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">3. How to Submit a Report</h2>\n        <p class=\"about-text\">\n            Reporting a violation is simple and direct. At the bottom of every individual app review page, you will find a <strong>\"Report App\"</strong> button. Clicking this will open a quick form where you can select the reason for your report and provide a brief detail of your experience.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:writing-hand.svg\" alt=\"Submitting a Report Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">4. Our Review Process</h2>\n        <p class=\"about-text\">\n            Once a report is submitted, it goes directly to our moderation team. We do not use automated bots for this process; a real team member will manually re-test the application and verify the provided link to check for the reported violations.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:eyes.svg\" alt=\"Manual Review Process Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">5. The 100% Permanent Removal Guarantee</h2>\n        <p class=\"about-text\">\n            We operate with a strict <strong>zero-tolerance policy</strong> for financial risk mechanisms and deceptive software. If our team verifies that an application has violated our safety guidelines or introduced real-money mechanics, we enforce a <strong>100% immediate and permanent removal</strong> of that app from RummyDex.\n        </p>\n        <ul class=\"about-list\">\n            <li>The application's dedicated page will be taken down.</li>\n            <li>All outbound links to the software will be permanently severed.</li>\n            <li>The developer will not be permitted to relist the application on our index.</li>\n        </ul>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:police-car-light.svg\" alt=\"Permanent Removal Guarantee Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">6. False Reporting</h2>\n        <p class=\"about-text\">\n            While we highly value community feedback, we ask that users only submit reports for genuine violations. Deliberately spamming the reporting system or submitting false claims to maliciously target specific games may result in a restriction of your ability to submit future reports or post reviews.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:warning.svg\" alt=\"False Reporting Warning Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n    </div>\n\n</body>\n</html>",
  "hero_title_style": "mono",
  "seo_keywords": "RummyDex ",
  "banners": [],
  "terms_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Terms & Conditions - RummyDex</title>\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\" rel=\"stylesheet\">\n\n    <style>\n        body {\n            font-family: 'Roboto', Arial, sans-serif;\n            line-height: 1.75;\n            background-color: #ffffff;\n            margin: 0;\n            padding: 60px 20px;\n            display: flex;\n            justify-content: center;\n        }\n\n        .about-container {\n            max-width: 720px;\n            width: 100%;\n        }\n\n        h1 {\n            font-size: 44px;\n            font-weight: 700;\n            color: #202124;\n            margin-bottom: 8px;\n            text-align: center;\n            letter-spacing: -0.5px;\n        }\n\n        .effective-date {\n            text-align: center;\n            font-size: 14px;\n            color: #5f6368;\n            margin-bottom: 40px;\n        }\n\n        h2.section-heading {\n            font-size: 28px;\n            font-weight: 500;\n            color: #202124;\n            margin-top: 50px;\n            margin-bottom: 16px;\n            letter-spacing: -0.2px;\n        }\n\n        p.about-text {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            font-weight: 400;\n        }\n\n        ul.about-list {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            padding-left: 24px;\n        }\n\n        ul.about-list li {\n            margin-bottom: 12px;\n        }\n\n        .sticker-illustration {\n            text-align: center;\n            margin: 35px auto;\n            padding: 10px;\n        }\n\n        .sticker-illustration img {\n            width: 140px;\n            height: auto;\n            display: block;\n            margin: 0 auto;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"about-container\">\n        <h1>Terms &amp; Conditions</h1>\n        <p class=\"effective-date\">Effective Date: July 21, 2026</p>\n\n        <h2 class=\"section-heading\">1. Agreement to Terms</h2>\n        <p class=\"about-text\">\n            By accessing or using RummyDex, you agree to be bound by these Terms &amp; Conditions. If you disagree with any part of these terms, you are prohibited from using our website. These terms apply to all visitors, users, and others who access our directory.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:handshake.svg\" alt=\"Agreement to Terms Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">2. Intellectual Property and Copyright</h2>\n        <p class=\"about-text\">\n            The original content, layout, design, and structural organization of the RummyDex directory are the exclusive property of RummyDex. However, we do not claim ownership over the third-party applications listed on our site. All app names, logos, trademarks, and associated digital assets belong to their respective external developers and publishers.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:copyright.svg\" alt=\"Intellectual Property and Copyright Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">3. Acceptable Use of the Directory</h2>\n        <p class=\"about-text\">\n            RummyDex is provided solely for your personal, non-commercial informational use. You agree not to:\n        </p>\n        <ul class=\"about-list\">\n            <li>Use automated scripts, bots, or web scrapers to extract data, reviews, or links from our directory.</li>\n            <li>Interfere with or disrupt the security, servers, or networks connected to our website.</li>\n            <li>Submit false, spam, or malicious reports through our App Reporting system.</li>\n        </ul>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:no-entry.svg\" alt=\"Acceptable Use Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">4. Third-Party Links and Software Disclaimer</h2>\n        <p class=\"about-text\">\n            RummyDex functions as an informational bridge. While we utilize a secure, carefully verified process to provide correct links to external applications, we do not host any software or APK files on our own servers.\n        </p>\n        <p class=\"about-text\">\n            You acknowledge that clicking an external link takes you to a third-party destination that we do not control. You agree that any downloading, installation, or use of third-party software is done entirely at your own risk. RummyDex is not responsible for any damage to your device, loss of data, or other issues resulting from the use of third-party applications discovered through our index.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:warning.svg\" alt=\"Third-Party Software Disclaimer Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">5. App Reporting &amp; Removal Guarantee</h2>\n        <p class=\"about-text\">\n            We maintain a strict zero-tolerance policy for apps that introduce unauthorized real-money gaming (RMG) mechanics. If a user reports an application for violating these standards, we will review the claim and enforce our 100% removal guarantee. We reserve the right to remove, modify, or delist any application from our directory at our sole discretion, without prior notice to the app's developer.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:megaphone.svg\" alt=\"App Reporting and Removal Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">6. Limitation of Liability</h2>\n        <p class=\"about-text\">\n            To the maximum extent permitted by law, RummyDex and its team shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of, or inability to use, our directory or the external applications linked within it. Our platform is provided on an \"as is\" and \"as available\" basis without any warranties of any kind.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:balance-scale.svg\" alt=\"Limitation of Liability Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">7. Modifications to Terms</h2>\n        <p class=\"about-text\">\n            We reserve the right to revise these Terms &amp; Conditions at any time. By continuing to access or use RummyDex after those revisions become effective, you agree to be bound by the revised terms.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:memo.svg\" alt=\"Modifications to Terms Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n    </div>\n\n</body>\n</html>",
  "meta_description": "Step into the world of Rummy - compete, challenge friends, and rise to the top on RummyApp Online!",
  "privacy_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Privacy Policy - RummyDex</title>\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\" rel=\"stylesheet\">\n\n    <style>\n        body {\n            font-family: 'Roboto', Arial, sans-serif;\n            line-height: 1.75;\n            background-color: #ffffff;\n            margin: 0;\n            padding: 60px 20px;\n            display: flex;\n            justify-content: center;\n        }\n\n        .about-container {\n            max-width: 720px;\n            width: 100%;\n        }\n\n        h1 {\n            font-size: 44px;\n            font-weight: 700;\n            color: #202124;\n            margin-bottom: 8px;\n            text-align: center;\n            letter-spacing: -0.5px;\n        }\n\n        .effective-date {\n            text-align: center;\n            font-size: 14px;\n            color: #5f6368;\n            margin-bottom: 40px;\n        }\n\n        h2.section-heading {\n            font-size: 28px;\n            font-weight: 500;\n            color: #202124;\n            margin-top: 50px;\n            margin-bottom: 16px;\n            letter-spacing: -0.2px;\n        }\n\n        p.about-text {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            font-weight: 400;\n        }\n\n        .sticker-illustration {\n            text-align: center;\n            margin: 35px auto;\n            padding: 10px;\n        }\n\n        .sticker-illustration img {\n            width: 140px;\n            height: 140px;\n            display: block;\n            margin: 0 auto;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"about-container\">\n        <h1>Privacy Policy</h1>\n        <p class=\"effective-date\">Effective Date: July 21, 2026</p>\n\n        <h2 class=\"section-heading\">1. Introduction</h2>\n        <p class=\"about-text\">\n            Welcome to RummyDex. This Privacy Policy governs the manner in which RummyDex collects, uses, maintains, and discloses information collected from users visiting our digital directory and software index. We are committed to safeguarding your privacy and ensuring transparency in how your data is handled while you navigate our platform.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:open-book.svg\" alt=\"Privacy Policy Introduction Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">2. Information Collection</h2>\n        <p class=\"about-text\">\n            RummyDex operates strictly as an informational index. We do not require users to create accounts, register, or provide sensitive personal identification information to access our directory.\n        </p>\n        <p class=\"about-text\">\n            We may collect non-personally identifiable information about users whenever they interact with our website. This data is collected automatically and may include the browser name, the type of computer or device, internet service providers, IP addresses, geographical region, and technical information regarding the user's means of connection to our site.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:bar-chart.svg\" alt=\"Information Collection Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">3. Web Browser Cookies</h2>\n        <p class=\"about-text\">\n            Our website uses \"cookies\" to enhance the user experience, analyze site traffic, and optimize our directory structure. A cookie is a small text file placed on a user's hard drive for record-keeping purposes and to track non-personal information. Users may choose to set their web browser to refuse cookies or to alert them when cookies are being sent. Please note that if cookies are disabled, some parts of the site may not function properly.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:cookie.svg\" alt=\"Web Browser Cookies Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">4. Third-Party Services</h2>\n        <p class=\"about-text\">\n            To maintain and support our directory, we may work with standard third-party services for analytics and content delivery. These partners may utilize cookies or similar technologies to provide relevant information and promotions based on your interactions with our site and other websites. You retain full control over your cookie preferences and can adjust, manage, or disable them at any time through your web browser settings or standard network opt-out pages.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:handshake.svg\" alt=\"Third-Party Services Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">5. Secure External Links and Third-Party Applications</h2>\n        <p class=\"about-text\">\n            RummyDex is an informational bridge. We do not host APKs or software files directly on our servers. Instead, we provide safe, correct links to external, third-party software developers through a secure, carefully verified process to ensure users are directed appropriately. When you click on a link and navigate to a third-party application, you are leaving our jurisdiction. We do not control the content, privacy practices, or data collection policies of these external destinations. Interaction with any other website or application is subject to that entity's own terms and policies.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:globe-with-meridians.svg\" alt=\"External Links Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">6. Data Security</h2>\n        <p class=\"about-text\">\n            We adopt appropriate data collection, storage, and processing practices, alongside strict security measures, to protect against unauthorized access, alteration, disclosure, or destruction of your non-personal information and data stored on our site. However, no data transmission over the internet or wireless network can be guaranteed to be 100% secure.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:locked.svg\" alt=\"Data Security Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">7. Acceptance of These Terms</h2>\n        <p class=\"about-text\">\n            By using RummyDex, you signify your acceptance of this Privacy Policy. If you do not agree to this policy, please do not use our site. We reserve the right to update or modify this Privacy Policy at any time. Continued use of the site following the posting of changes to this policy will be deemed your acceptance of those changes.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:balance-scale.svg\" alt=\"Acceptance of Terms Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n    </div>\n\n</body>\n</html>",
  "ethics_discrimination_text": "<div ",
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
