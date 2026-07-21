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
    "is_coming_soon": false,
    "id": "q82dbbwh4",
    "description_html": "<p>A new application.</p>",
    "is_hot": false,
    "is_new": true,
    "yellow_box_msg": "",
    "release_notes": "",
    "rating": 5,
    "target_region": "",
    "screenshots": [],
    "created_at": "2026-05-19T12:43:59.040Z",
    "slug": "spin-crush-",
    "idea_box_msg": "",
    "faqs": [],
    "is_featured": false,
    "is_top_chart": true,
    "version": "2.0.6",
    "red_box_msg": "",
    "custom_admin_box_html": "",
    "name": "SPIN CRUSH ",
    "seo_keywords": "",
    "serial_number": 2,
    "icon_url": "https://res.cloudinary.com/dq34n0ncz/image/upload/f_auto,q_auto/1000119573_wzwse4",
    "og_image_url": "",
    "custom_admin_box_heading": "",
    "seo_description": "",
    "link_configured": true,
    "category": "Yono, All App",
    "canonical_url": "",
    "developer": "Bingo ",
    "features_html": "",
    "seo_title": "",
    "file_size": "45",
    "video_url": "",
    "safety_status": "Verified"
  },
  {
    "features_html": "",
    "developer": "Arcade ",
    "category": "Yono, All App",
    "canonical_url": "",
    "seo_title": "",
    "file_size": "56",
    "video_url": "",
    "safety_status": "Verified",
    "version": "1.20.1",
    "is_featured": false,
    "seo_keywords": "",
    "name": "YONO ARCADE",
    "red_box_msg": "",
    "custom_admin_box_html": "",
    "seo_description": "",
    "link_configured": false,
    "custom_admin_box_heading": "",
    "og_image_url": "",
    "serial_number": 3,
    "icon_url": "https://13eehe59cj.ucarecd.net/67a16d31-6771-4617-b88b-288db51d321d/-/preview/554x554/",
    "rating": 3.4,
    "screenshots": [],
    "target_region": "",
    "created_at": "2026-05-19T19:04:26.373Z",
    "idea_box_msg": "",
    "faqs": [],
    "slug": "yono-arcade",
    "id": "31og4l26i",
    "description_html": "<p>A new application.</p>",
    "is_coming_soon": false,
    "is_new": false,
    "is_hot": false,
    "yellow_box_msg": "",
    "release_notes": ""
  },
  {
    "video_url": "",
    "file_size": "56",
    "safety_status": "Verified",
    "canonical_url": "",
    "category": "Yono, All App",
    "developer": "Jaiho",
    "features_html": "",
    "seo_title": "",
    "icon_url": "https://res.cloudinary.com/dyigysy26/image/upload/f_auto,q_auto/1000119609_fkc9fm",
    "serial_number": 3,
    "og_image_url": "",
    "seo_description": "",
    "custom_admin_box_heading": "",
    "link_configured": true,
    "is_featured": false,
    "version": "1.20.1",
    "red_box_msg": "",
    "custom_admin_box_html": "",
    "name": "JAIHO 91",
    "seo_keywords": "",
    "created_at": "2026-05-19T19:23:07.133Z",
    "slug": "jaiho-91",
    "idea_box_msg": "",
    "faqs": [],
    "rating": 4.8,
    "target_region": "",
    "screenshots": [],
    "yellow_box_msg": "",
    "release_notes": "",
    "is_coming_soon": false,
    "description_html": "<p>A new application.</p>",
    "id": "s5u553ymi",
    "is_new": true
  },
  {
    "release_notes": "",
    "yellow_box_msg": "",
    "is_new": false,
    "is_coming_soon": false,
    "id": "awus3qajs",
    "description_html": "<p>A new application.</p>",
    "faqs": [],
    "slug": "bingo-101",
    "idea_box_msg": "",
    "created_at": "2026-05-20T03:09:33.880Z",
    "target_region": "",
    "screenshots": [],
    "rating": 3.6,
    "serial_number": 5,
    "icon_url": "https://13eehe59cj.ucarecd.net/d3f6486a-b216-4582-b15d-0c735ff6b08f/-/preview/554x554/",
    "custom_admin_box_heading": "",
    "seo_description": "",
    "link_configured": true,
    "og_image_url": "",
    "red_box_msg": "",
    "custom_admin_box_html": "",
    "seo_keywords": "",
    "name": "BINGO 101",
    "is_featured": false,
    "version": "2.5V",
    "safety_status": "Verified",
    "video_url": "",
    "file_size": "71",
    "seo_title": "",
    "canonical_url": "",
    "category": "Yono, All App",
    "features_html": "",
    "developer": "Bingo"
  },
  {
    "yellow_box_msg": "",
    "release_notes": "",
    "id": "0uiuuhdrj",
    "description_html": "<p>A new application.</p>",
    "is_coming_soon": false,
    "is_new": false,
    "created_at": "2026-05-20T03:50:33.674Z",
    "faqs": [],
    "slug": "ok-rummy",
    "idea_box_msg": "",
    "rating": 3,
    "screenshots": [],
    "target_region": "",
    "og_image_url": "",
    "custom_admin_box_heading": "",
    "link_configured": true,
    "seo_description": "",
    "serial_number": 6,
    "icon_url": "https://13eehe59cj.ucarecd.net/97512d34-f561-4ede-8517-2112440079eb/-/preview/554x554/",
    "version": "8.3.06.",
    "is_featured": false,
    "name": "OK RUMMY",
    "seo_keywords": "",
    "custom_admin_box_html": "",
    "red_box_msg": "",
    "video_url": "",
    "file_size": "67",
    "safety_status": "Verified",
    "developer": "Bingo ",
    "features_html": "",
    "category": "Yono, All App",
    "canonical_url": "",
    "seo_title": ""
  },
  {
    "version": "4.3",
    "is_featured": false,
    "name": "JAIHO SLOTS",
    "seo_keywords": "",
    "custom_admin_box_html": "",
    "red_box_msg": "",
    "og_image_url": "",
    "custom_admin_box_heading": "",
    "link_configured": true,
    "seo_description": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/2dfe5d55-7896-4f96-8f2b-132190e44f6f/-/preview/540x540/",
    "serial_number": 7,
    "developer": "Jaiho",
    "features_html": "",
    "canonical_url": "",
    "category": "Yono, All App",
    "seo_title": "",
    "video_url": "",
    "file_size": "70",
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "id": "4yt0f4yd0",
    "is_coming_soon": false,
    "is_new": false,
    "yellow_box_msg": "",
    "release_notes": "",
    "rating": 4.9,
    "screenshots": [],
    "target_region": "",
    "created_at": "2026-05-20T03:53:24.482Z",
    "faqs": [],
    "idea_box_msg": "",
    "slug": "jaiho-slots"
  },
  {
    "idea_box_msg": "",
    "slug": "boss-rummy",
    "faqs": [],
    "created_at": "2026-05-20T03:56:42.075Z",
    "screenshots": [],
    "target_region": "",
    "rating": 4.1,
    "release_notes": "",
    "yellow_box_msg": "",
    "is_new": false,
    "id": "9r044fyi0",
    "description_html": "<p>A new application.</p>",
    "is_coming_soon": false,
    "safety_status": "Verified",
    "file_size": "54",
    "video_url": "",
    "seo_title": "",
    "features_html": "",
    "developer": "Arcade ",
    "canonical_url": "",
    "category": "Yono, All App",
    "custom_admin_box_heading": "",
    "link_configured": true,
    "seo_description": "",
    "og_image_url": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/b5e9d896-71e8-49d6-b091-a971871161e0/-/preview/1000x1000/",
    "serial_number": 8,
    "seo_keywords": "",
    "name": "BOSS RUMMY",
    "custom_admin_box_html": "",
    "red_box_msg": "",
    "version": "2.5V",
    "is_featured": false
  },
  {
    "id": "5b7fj0cq7",
    "description_html": "<p>A new application.</p>",
    "is_coming_soon": false,
    "is_new": false,
    "yellow_box_msg": "",
    "release_notes": "",
    "rating": 4.9,
    "screenshots": [],
    "target_region": "",
    "created_at": "2026-05-20T04:01:04.611Z",
    "slug": "rummy-91",
    "faqs": [],
    "idea_box_msg": "",
    "version": "2.0.6",
    "is_featured": false,
    "seo_keywords": "",
    "name": "RUMMY 91",
    "custom_admin_box_html": "",
    "red_box_msg": "",
    "link_configured": true,
    "seo_description": "",
    "custom_admin_box_heading": "",
    "og_image_url": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/393c07ea-4f5e-43a9-ab0c-e12dfe7d755a/-/preview/474x474/",
    "serial_number": 9,
    "features_html": "",
    "developer": "Addi",
    "canonical_url": "",
    "category": "All App",
    "seo_title": "",
    "file_size": "79",
    "video_url": "",
    "safety_status": "Verified"
  },
  {
    "release_notes": "",
    "yellow_box_msg": "",
    "is_new": false,
    "description_html": "<p>A new application.</p>",
    "id": "ieam3hkbq",
    "is_coming_soon": false,
    "slug": "gogo-rummy-",
    "idea_box_msg": "",
    "faqs": [],
    "created_at": "2026-05-20T06:58:27.643Z",
    "screenshots": [],
    "target_region": "",
    "rating": 3.9,
    "og_image_url": "",
    "custom_admin_box_heading": "",
    "seo_description": "",
    "link_configured": true,
    "icon_url": "https://13eehe59cj.ucarecd.net/0d710f11-2c9d-4312-89de-be65ce21a4fe/-/preview/750x750/",
    "serial_number": 10,
    "name": "GOGO RUMMY ",
    "seo_keywords": "",
    "custom_admin_box_html": "",
    "red_box_msg": "",
    "version": "5.0",
    "is_featured": false,
    "safety_status": "Verified",
    "file_size": "65",
    "video_url": "",
    "seo_title": "",
    "developer": "Sk varba",
    "features_html": "",
    "category": "Yono, All App",
    "canonical_url": ""
  },
  {
    "is_new": false,
    "is_coming_soon": false,
    "description_html": "<p>A new application.</p>",
    "id": "5j5b7qbrw",
    "release_notes": "",
    "yellow_box_msg": "",
    "target_region": "",
    "screenshots": [],
    "rating": 4.6,
    "idea_box_msg": "",
    "faqs": [],
    "slug": "club-inr",
    "created_at": "2026-05-20T08:02:40.971Z",
    "custom_admin_box_html": "",
    "red_box_msg": "",
    "name": "CLUB INR",
    "seo_keywords": "",
    "is_featured": false,
    "version": "1.8",
    "serial_number": 11,
    "icon_url": "https://13eehe59cj.ucarecd.net/3059d25d-1497-4cff-aead-68758187fe0b/-/preview/554x554/",
    "og_image_url": "",
    "custom_admin_box_heading": "",
    "link_configured": true,
    "seo_description": "",
    "seo_title": "",
    "category": "Yono, All App",
    "canonical_url": "",
    "developer": "S.A vejay",
    "features_html": "",
    "safety_status": "Verified",
    "file_size": "75",
    "video_url": ""
  },
  {
    "target_region": "",
    "screenshots": [],
    "rating": 3.9,
    "idea_box_msg": "",
    "faqs": [],
    "slug": "abc-rummy-",
    "created_at": "2026-05-26T07:04:36.330Z",
    "is_new": false,
    "is_coming_soon": false,
    "id": "f4ktp4dfi",
    "description_html": "<p>A new application.</p>",
    "release_notes": "",
    "yellow_box_msg": "",
    "seo_title": "",
    "category": "Yono, All App",
    "canonical_url": "",
    "features_html": "",
    "developer": "Addi",
    "safety_status": "Verified",
    "file_size": "61",
    "video_url": "",
    "custom_admin_box_html": "",
    "red_box_msg": "",
    "seo_keywords": "",
    "name": "ABC Rummy ",
    "is_featured": false,
    "version": "1.8",
    "serial_number": 12,
    "icon_url": "https://13eehe59cj.ucarecd.net/f7108631-b74a-49e5-8abf-37cec6950f7c/-/preview/512x512/",
    "link_configured": true,
    "seo_description": "",
    "custom_admin_box_heading": "",
    "og_image_url": ""
  },
  {
    "seo_keywords": "",
    "name": "777.Rummy",
    "red_box_msg": "",
    "custom_admin_box_html": "",
    "version": "1.6",
    "is_featured": false,
    "seo_description": "",
    "link_configured": true,
    "custom_admin_box_heading": "",
    "og_image_url": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/fb951184-b849-4ff0-8882-a4d826508fb7/-/preview/190x190/",
    "serial_number": 13,
    "seo_title": "",
    "features_html": "",
    "developer": "AB Arora",
    "category": "Yono, All App",
    "canonical_url": "",
    "safety_status": "Verified",
    "video_url": "",
    "file_size": "54",
    "is_new": false,
    "id": "4w1yxs6mm",
    "description_html": "<p>A new application.</p>",
    "is_coming_soon": false,
    "release_notes": "",
    "yellow_box_msg": "",
    "screenshots": [],
    "target_region": "",
    "rating": 5,
    "idea_box_msg": "",
    "faqs": [],
    "slug": "777-rummy",
    "created_at": "2026-05-26T07:09:01.068Z"
  },
  {
    "is_featured": false,
    "version": "1.8",
    "red_box_msg": "",
    "custom_admin_box_html": "",
    "seo_keywords": "",
    "name": "EVER 777",
    "icon_url": "https://13eehe59cj.ucarecd.net/74347710-3cb2-468c-98eb-5666a0af487c/-/preview/190x190/",
    "serial_number": 14,
    "link_configured": true,
    "custom_admin_box_heading": "",
    "seo_description": "",
    "og_image_url": "",
    "category": "Yono, All App",
    "canonical_url": "",
    "features_html": "",
    "developer": "AZ ever",
    "seo_title": "",
    "video_url": "",
    "file_size": "59",
    "safety_status": "Verified",
    "is_coming_soon": false,
    "id": "w1sttlwv7",
    "description_html": "<p>A new application.</p>",
    "is_new": false,
    "yellow_box_msg": "",
    "release_notes": "",
    "rating": 4,
    "target_region": "",
    "screenshots": [],
    "created_at": "2026-05-26T07:12:55.821Z",
    "faqs": [],
    "slug": "ever-777",
    "idea_box_msg": ""
  },
  {
    "slug": "game-rummy",
    "idea_box_msg": "",
    "faqs": [],
    "created_at": "2026-05-26T07:16:08.600Z",
    "target_region": "",
    "screenshots": [],
    "rating": 4,
    "release_notes": "",
    "yellow_box_msg": "",
    "is_new": false,
    "is_coming_soon": false,
    "id": "dp2lcn2ae",
    "description_html": "<p>A new application.</p>",
    "safety_status": "Verified",
    "file_size": "75",
    "video_url": "",
    "seo_title": "",
    "canonical_url": "",
    "category": "Yono, All App",
    "developer": "Raj dav",
    "features_html": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/4b2bd57d-9855-40a8-b452-34edee84ed09/-/preview/190x190/",
    "serial_number": 15,
    "og_image_url": "",
    "custom_admin_box_heading": "",
    "seo_description": "",
    "link_configured": true,
    "custom_admin_box_html": "",
    "red_box_msg": "",
    "name": "Game Rummy",
    "seo_keywords": "",
    "is_featured": false,
    "version": "2.0"
  },
  {
    "faqs": [],
    "idea_box_msg": "",
    "slug": "hi-rummy-",
    "created_at": "2026-05-26T07:18:29.456Z",
    "target_region": "",
    "screenshots": [],
    "rating": 4.1,
    "release_notes": "",
    "yellow_box_msg": "",
    "is_new": false,
    "is_coming_soon": false,
    "id": "4lgypb90h",
    "description_html": "<p>A new application.</p>",
    "safety_status": "Verified",
    "file_size": "54",
    "video_url": "",
    "seo_title": "",
    "canonical_url": "",
    "category": "Yono, All App",
    "features_html": "",
    "developer": "Addi",
    "icon_url": "https://13eehe59cj.ucarecd.net/c01e9676-e748-4342-9ac7-e972030981fc/-/preview/190x190/",
    "serial_number": 16,
    "custom_admin_box_heading": "",
    "link_configured": true,
    "seo_description": "",
    "og_image_url": "",
    "custom_admin_box_html": "",
    "red_box_msg": "",
    "seo_keywords": "",
    "name": "Hi Rummy ",
    "is_featured": false,
    "version": "1.9"
  },
  {
    "target_region": "",
    "screenshots": [],
    "rating": 5,
    "slug": "inr-rummy",
    "faqs": [],
    "idea_box_msg": "",
    "created_at": "2026-05-26T07:21:55.085Z",
    "is_new": false,
    "is_hot": false,
    "is_coming_soon": false,
    "description_html": "<p>A new application.</p>",
    "id": "2f90a87hv",
    "release_notes": "",
    "yellow_box_msg": "",
    "seo_title": "",
    "canonical_url": "",
    "category": "Yono, All App",
    "features_html": "",
    "developer": "Arcade ",
    "safety_status": "Verified",
    "video_url": "",
    "file_size": "79",
    "red_box_msg": "",
    "custom_admin_box_html": "",
    "seo_keywords": "",
    "name": "INR Rummy",
    "is_featured": false,
    "version": "3.0",
    "serial_number": 17,
    "icon_url": "https://13eehe59cj.ucarecd.net/2a718650-0602-495f-9ca4-b13c86e58c02/-/preview/190x190/",
    "seo_description": "",
    "link_configured": true,
    "custom_admin_box_heading": "",
    "og_image_url": ""
  },
  {
    "target_region": "",
    "screenshots": [],
    "rating": 3.9,
    "idea_box_msg": "",
    "faqs": [],
    "slug": "jaiho-rummy-",
    "created_at": "2026-05-26T07:26:42.606Z",
    "is_new": false,
    "is_coming_soon": false,
    "description_html": "<p>A new application.</p>",
    "id": "9a05609sb",
    "release_notes": "",
    "yellow_box_msg": "",
    "seo_title": "",
    "category": "Yono, All App",
    "canonical_url": "",
    "features_html": "",
    "developer": "PW sahar",
    "safety_status": "Verified",
    "video_url": "",
    "file_size": "2.4",
    "custom_admin_box_html": "",
    "red_box_msg": "",
    "seo_keywords": "",
    "name": "JAIHO RUMMY ",
    "is_featured": false,
    "version": "2.1",
    "icon_url": "https://13eehe59cj.ucarecd.net/c693366d-d543-4d76-84ba-3963a3f3c792/-/preview/190x190/",
    "serial_number": 18,
    "seo_description": "",
    "link_configured": true,
    "custom_admin_box_heading": "",
    "og_image_url": ""
  },
  {
    "icon_url": "https://13eehe59cj.ucarecd.net/cf0b4466-3d5b-4eb5-bc88-afc9a8213ac4/-/preview/190x190/",
    "serial_number": 19,
    "seo_description": "",
    "custom_admin_box_heading": "",
    "link_configured": true,
    "og_image_url": "",
    "is_featured": false,
    "version": "1.6",
    "red_box_msg": "",
    "custom_admin_box_html": "",
    "seo_keywords": "",
    "name": "Love Rummy",
    "file_size": "68",
    "video_url": "",
    "safety_status": "Verified",
    "canonical_url": "",
    "category": "Yono, All App",
    "features_html": "",
    "developer": "Mak job",
    "seo_title": "",
    "yellow_box_msg": "",
    "release_notes": "",
    "is_coming_soon": false,
    "id": "l7a60keix",
    "description_html": "<p>A new application.</p>",
    "is_new": false,
    "created_at": "2026-05-26T07:31:59.173Z",
    "faqs": [],
    "idea_box_msg": "",
    "slug": "love-rummy",
    "rating": 4.2,
    "target_region": "",
    "screenshots": []
  },
  {
    "is_coming_soon": false,
    "description_html": "<p>A new application.</p>",
    "id": "4paka7kie",
    "is_new": false,
    "yellow_box_msg": "",
    "release_notes": "",
    "rating": 5,
    "target_region": "",
    "screenshots": [],
    "created_at": "2026-05-26T07:34:35.782Z",
    "idea_box_msg": "",
    "faqs": [],
    "slug": "joy-rummy",
    "is_featured": false,
    "version": "1.8",
    "custom_admin_box_html": "",
    "red_box_msg": "",
    "seo_keywords": "",
    "name": "JOY RUMMY",
    "serial_number": 20,
    "icon_url": "https://13eehe59cj.ucarecd.net/e0898894-5d5b-47ab-a14f-13b4514b3b4f/-/preview/190x190/",
    "link_configured": false,
    "custom_admin_box_heading": "",
    "seo_description": "",
    "og_image_url": "",
    "canonical_url": "",
    "category": "Yono, All App",
    "features_html": "",
    "developer": "AB Arora",
    "seo_title": "",
    "video_url": "",
    "file_size": "50",
    "safety_status": "Verified"
  },
  {
    "is_featured": false,
    "version": "1.0",
    "red_box_msg": "",
    "custom_admin_box_html": "",
    "seo_keywords": "",
    "name": "MAHA GAMES",
    "icon_url": "https://13eehe59cj.ucarecd.net/2d664adc-3e1f-4317-805c-dea453f52389/-/preview/190x190/",
    "serial_number": 21,
    "seo_description": "",
    "custom_admin_box_heading": "",
    "link_configured": true,
    "og_image_url": "",
    "category": "Yono, All App",
    "canonical_url": "",
    "features_html": "",
    "developer": "AZ ever",
    "seo_title": "",
    "video_url": "",
    "file_size": "70",
    "safety_status": "Verified",
    "is_coming_soon": false,
    "id": "2768ohu2a",
    "description_html": "<p>A new application.</p>",
    "is_new": false,
    "yellow_box_msg": "",
    "release_notes": "",
    "rating": 4,
    "target_region": "",
    "screenshots": [],
    "created_at": "2026-05-26T07:37:07.122Z",
    "slug": "maha-games",
    "idea_box_msg": "",
    "faqs": []
  },
  {
    "safety_status": "Verified",
    "file_size": "58",
    "video_url": "",
    "seo_title": "",
    "category": "Yono, All App",
    "canonical_url": "",
    "developer": "AZ ever",
    "features_html": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/6aa28ca8-cef1-4d1a-b054-13e242eaef02/-/preview/190x190/",
    "serial_number": 22,
    "og_image_url": "",
    "seo_description": "",
    "link_configured": true,
    "custom_admin_box_heading": "",
    "custom_admin_box_html": "",
    "red_box_msg": "",
    "name": "Rummy Ludo",
    "seo_keywords": "",
    "is_featured": false,
    "version": "5.8",
    "idea_box_msg": "",
    "slug": "rummy-ludo",
    "faqs": [],
    "created_at": "2026-05-26T07:39:44.282Z",
    "target_region": "",
    "screenshots": [],
    "rating": 3.9,
    "release_notes": "",
    "yellow_box_msg": "",
    "is_new": false,
    "is_coming_soon": false,
    "description_html": "<p>A new application.</p>",
    "id": "us5xuk5bm"
  },
  {
    "description_html": "<p>A new application.</p>",
    "id": "69x1lstq7",
    "is_coming_soon": false,
    "is_new": false,
    "yellow_box_msg": "",
    "release_notes": "",
    "rating": 3.9,
    "screenshots": [],
    "target_region": "",
    "created_at": "2026-05-26T07:42:24.615Z",
    "slug": "rummy-77",
    "faqs": [],
    "idea_box_msg": "",
    "version": "2.0.6",
    "is_featured": false,
    "seo_keywords": "",
    "name": "Rummy 77",
    "red_box_msg": "",
    "custom_admin_box_html": "",
    "custom_admin_box_heading": "",
    "link_configured": true,
    "seo_description": "",
    "og_image_url": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/d17abcfc-c8dc-4c36-8558-e3408002d37e/-/preview/190x190/",
    "serial_number": 23,
    "features_html": "",
    "developer": "Arcade ",
    "canonical_url": "",
    "category": "Yono, All App",
    "seo_title": "",
    "file_size": "45",
    "video_url": "",
    "safety_status": "Verified"
  },
  {
    "file_size": "58",
    "video_url": "",
    "safety_status": "Verified",
    "developer": "AB Arora",
    "features_html": "",
    "category": "Yono, All App",
    "canonical_url": "",
    "seo_title": "",
    "og_image_url": "",
    "custom_admin_box_heading": "",
    "link_configured": false,
    "seo_description": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/2738be7d-f198-4f70-a7d8-c8eb5f452eb0/-/preview/190x190/",
    "serial_number": 24,
    "version": "1.8",
    "is_featured": false,
    "name": "Share Slots",
    "seo_keywords": "",
    "custom_admin_box_html": "",
    "red_box_msg": "",
    "created_at": "2026-05-26T07:44:32.442Z",
    "slug": "share-slots",
    "idea_box_msg": "",
    "faqs": [],
    "rating": 4,
    "screenshots": [],
    "target_region": "",
    "yellow_box_msg": "",
    "release_notes": "",
    "description_html": "<p>A new application.</p>",
    "id": "j79n2g3l9",
    "is_coming_soon": false,
    "is_new": false
  },
  {
    "canonical_url": "",
    "category": "Yono, All App",
    "developer": "Tania JK ",
    "features_html": "",
    "seo_title": "",
    "video_url": "",
    "file_size": "65",
    "safety_status": "Verified",
    "is_featured": false,
    "version": "1.6",
    "red_box_msg": "",
    "custom_admin_box_html": "",
    "name": "567 SLOTS",
    "seo_keywords": "",
    "serial_number": 26,
    "icon_url": "https://13eehe59cj.ucarecd.net/e4314d5e-eb77-46b9-8998-8e0f94970b38/-/preview/72x72/",
    "og_image_url": "",
    "custom_admin_box_heading": "",
    "seo_description": "",
    "link_configured": true,
    "rating": 3.5,
    "target_region": "",
    "screenshots": [],
    "created_at": "2026-05-26T07:51:47.637Z",
    "idea_box_msg": "",
    "slug": "567-slots",
    "faqs": [],
    "is_coming_soon": false,
    "description_html": "<p>A new application.</p>",
    "id": "n3w2vjk0b",
    "is_new": false,
    "yellow_box_msg": "",
    "release_notes": ""
  },
  {
    "is_coming_soon": false,
    "description_html": "<p>A new application.</p>",
    "id": "owxg4aekg",
    "is_new": false,
    "yellow_box_msg": "",
    "release_notes": "",
    "rating": 2.9,
    "target_region": "",
    "screenshots": [],
    "created_at": "2026-05-26T07:56:30.478Z",
    "idea_box_msg": "",
    "slug": "789jackpots",
    "faqs": [],
    "is_featured": false,
    "version": "1.9",
    "red_box_msg": "",
    "custom_admin_box_html": "",
    "seo_keywords": "",
    "name": "789Jackpots",
    "icon_url": "https://13eehe59cj.ucarecd.net/a0cedc36-33b0-4e75-a1ea-cd963b3ee0ca/-/preview/190x190/",
    "serial_number": 27,
    "link_configured": true,
    "custom_admin_box_heading": "",
    "seo_description": "",
    "og_image_url": "",
    "canonical_url": "",
    "category": "Yono, All App",
    "features_html": "",
    "developer": "Admin",
    "seo_title": "",
    "video_url": "",
    "file_size": "Tanu WD",
    "safety_status": "Verified"
  },
  {
    "screenshots": [],
    "target_region": "",
    "rating": 4,
    "idea_box_msg": "",
    "faqs": [],
    "slug": "yono-vip",
    "created_at": "2026-05-26T08:00:01.636Z",
    "is_new": false,
    "description_html": "<p>A new application.</p>",
    "id": "fw5wsziec",
    "is_coming_soon": false,
    "release_notes": "",
    "yellow_box_msg": "",
    "seo_title": "",
    "developer": "Rahul HL",
    "features_html": "",
    "canonical_url": "",
    "category": "Yono, All App",
    "safety_status": "Verified",
    "video_url": "",
    "file_size": "78",
    "name": "YONO VIP",
    "seo_keywords": "",
    "red_box_msg": "",
    "custom_admin_box_html": "",
    "version": "1.8",
    "is_featured": false,
    "og_image_url": "",
    "seo_description": "",
    "link_configured": true,
    "custom_admin_box_heading": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/d9226164-7447-425e-ba61-618d72ed28df/-/preview/190x190/",
    "serial_number": 28
  },
  {
    "og_image_url": "",
    "custom_admin_box_heading": "",
    "seo_description": "",
    "link_configured": true,
    "serial_number": 34,
    "icon_url": "https://kk19a1nwwx.ucarecd.net/091fdebe-1562-41c6-99ea-b60665adb5ee/-/preview/512x512/",
    "version": "3",
    "is_featured": false,
    "name": "Teen Patti Octro",
    "seo_keywords": "",
    "red_box_msg": "",
    "custom_admin_box_html": "",
    "file_size": "90",
    "video_url": "",
    "safety_status": "Verified",
    "developer": "Unknown ",
    "features_html": "",
    "publish_date": "2026-06-10T12:00:00.000Z",
    "canonical_url": "",
    "category": "Card",
    "seo_title": "",
    "yellow_box_msg": "",
    "release_notes": "",
    "description_html": "<p>A new application.</p>",
    "id": "t1ocq5iar",
    "is_coming_soon": true,
    "is_new": true,
    "created_at": "2026-06-03T10:17:01.058Z",
    "slug": "teen-patti-octro",
    "idea_box_msg": "",
    "faqs": [],
    "rating": 4.2,
    "screenshots": [],
    "target_region": ""
  },
  {
    "id": "rrmv44n9n",
    "description_html": "<p>A new application.</p>",
    "is_coming_soon": true,
    "is_new": false,
    "yellow_box_msg": "",
    "release_notes": "",
    "rating": 5,
    "screenshots": [],
    "target_region": "",
    "created_at": "2026-06-03T10:30:01.393Z",
    "slug": "zynga-poker-texas-holdem-game",
    "idea_box_msg": "",
    "faqs": [],
    "version": "1.0",
    "is_featured": false,
    "name": "Zynga Poker- Texas Holdem Game",
    "seo_keywords": "",
    "custom_admin_box_html": "",
    "red_box_msg": "",
    "og_image_url": "",
    "link_configured": true,
    "seo_description": "",
    "custom_admin_box_heading": "",
    "icon_url": "https://kk19a1nwwx.ucarecd.net/5b72cf8f-4959-426e-9e1d-8e2150529efb/-/preview/240x240/",
    "serial_number": 29,
    "developer": "Admin",
    "features_html": "",
    "category": "Card",
    "canonical_url": "",
    "seo_title": "",
    "file_size": "Unknown",
    "video_url": "",
    "safety_status": "Verified"
  },
  {
    "og_image_url": "",
    "link_configured": true,
    "seo_description": "",
    "custom_admin_box_heading": null,
    "icon_url": "https://1ewg1yyass.ucarecd.net/c0172402-c854-4016-876e-6b7769547c8f/-/preview/238x211/",
    "serial_number": 30,
    "version": "1.0",
    "is_featured": false,
    "name": "UNO! ",
    "seo_keywords": "",
    "red_box_msg": null,
    "custom_admin_box_html": null,
    "file_size": "Unknown",
    "safety_status": "Verified",
    "developer": "Admin",
    "features_html": null,
    "category": "Card",
    "canonical_url": "",
    "seo_title": "",
    "yellow_box_msg": null,
    "release_notes": "",
    "id": "wf59smk6l",
    "description_html": "<p>A new application.</p>",
    "is_coming_soon": true,
    "is_new": true,
    "created_at": "2026-06-07T10:14:11.138Z",
    "faqs": [],
    "idea_box_msg": null,
    "slug": "uno-",
    "rating": 5,
    "screenshots": [],
    "target_region": ""
  },
  {
    "version": "1.0",
    "is_featured": false,
    "name": "Rummy GOLD - With Fast Rummy",
    "seo_keywords": "",
    "red_box_msg": "",
    "custom_admin_box_html": "",
    "og_image_url": "",
    "seo_description": "",
    "link_configured": true,
    "custom_admin_box_heading": "",
    "serial_number": 31,
    "icon_url": "https://1ewg1yyass.ucarecd.net/33e0d4e8-6e41-4791-9e41-8d915a12e504/-/preview/447x447/",
    "developer": "Admin",
    "category": "Card",
    "canonical_url": "",
    "seo_title": "",
    "file_size": "Unknown",
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "id": "8epj9jjpu",
    "is_coming_soon": true,
    "is_new": false,
    "yellow_box_msg": "",
    "release_notes": "",
    "rating": 5,
    "screenshots": [],
    "target_region": "",
    "created_at": "2026-06-07T10:16:45.949Z",
    "slug": "rummy-gold-with-fast-rummy",
    "idea_box_msg": "",
    "faqs": []
  },
  {
    "screenshots": [],
    "target_region": "",
    "rating": 5,
    "faqs": [],
    "idea_box_msg": null,
    "slug": "indian-rummy-3-patti-card-game",
    "created_at": "2026-06-07T10:19:11.616Z",
    "is_new": true,
    "description_html": "<p>A new application.</p>",
    "id": "8jt0hokyo",
    "is_coming_soon": true,
    "release_notes": "",
    "yellow_box_msg": null,
    "seo_title": "",
    "developer": "Admin",
    "features_html": null,
    "canonical_url": "",
    "category": "Card",
    "safety_status": "Verified",
    "file_size": "Unknown",
    "name": "Indian Rummy 3 Patti Card Game",
    "seo_keywords": "",
    "custom_admin_box_html": null,
    "red_box_msg": null,
    "version": "1.0",
    "is_featured": false,
    "og_image_url": "",
    "custom_admin_box_heading": null,
    "link_configured": true,
    "seo_description": "",
    "serial_number": 32,
    "icon_url": "https://1ewg1yyass.ucarecd.net/2a4b59ef-16a3-4b14-bad3-1c3796af3492/-/preview/447x447/"
  },
  {
    "custom_admin_box_html": "",
    "red_box_msg": "",
    "seo_keywords": "",
    "name": "Lucky Spin Slots",
    "is_featured": false,
    "version": "1.0",
    "serial_number": 33,
    "icon_url": "https://1ewg1yyass.ucarecd.net/0f918f11-b247-4b5a-9d26-d510dddffbfe/-/preview/447x447/",
    "link_configured": true,
    "seo_description": "",
    "custom_admin_box_heading": "",
    "og_image_url": "https://1ewg1yyass.ucarecd.net/0f918f11-b247-4b5a-9d26-d510dddffbfe/-/preview/447x447/",
    "seo_title": "",
    "category": "Slots",
    "canonical_url": "",
    "features_html": "",
    "publish_date": "2026-07-08T13:08:00.000Z",
    "developer": "Admin",
    "safety_status": "Verified",
    "file_size": "Unknown",
    "is_new": false,
    "is_coming_soon": true,
    "description_html": "<p>A new application.</p>",
    "id": "01x9h7nfb",
    "release_notes": "",
    "yellow_box_msg": "",
    "target_region": "",
    "screenshots": [],
    "rating": 5,
    "slug": "lucky-spin-slots",
    "idea_box_msg": "",
    "faqs": [],
    "created_at": "2026-06-07T13:13:11.211Z"
  },
  {
    "is_featured": false,
    "version": "1.0",
    "custom_admin_box_html": "",
    "red_box_msg": "",
    "seo_keywords": "",
    "name": "IND Club",
    "icon_url": "https://1ewg1yyass.ucarecd.net/9d9339e0-77d4-418b-86f8-0a0e074c1d4e/-/preview/190x190/",
    "serial_number": 28,
    "seo_description": "",
    "custom_admin_box_heading": "",
    "link_configured": true,
    "og_image_url": "",
    "category": "Yono",
    "canonical_url": "",
    "features_html": "",
    "publish_date": "2026-06-12T15:30:00.000Z",
    "developer": "AB Arora",
    "seo_title": "",
    "file_size": "76",
    "video_url": "",
    "safety_status": "Verified",
    "is_coming_soon": true,
    "description_html": "<p>A new application.</p>",
    "id": "3cflt97b5",
    "is_new": false,
    "yellow_box_msg": "",
    "release_notes": "",
    "rating": 4.5,
    "target_region": "",
    "screenshots": [],
    "created_at": "2026-06-12T12:39:30.407Z",
    "faqs": [],
    "slug": "ind-club",
    "idea_box_msg": ""
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
  "terms_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Terms & Conditions - RummyDex</title>\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\" rel=\"stylesheet\">\n\n    <style>\n        body {\n            font-family: 'Roboto', Arial, sans-serif;\n            line-height: 1.75;\n            background-color: #ffffff;\n            margin: 0;\n            padding: 60px 20px;\n            display: flex;\n            justify-content: center;\n        }\n\n        .about-container {\n            max-width: 720px;\n            width: 100%;\n        }\n\n        h1 {\n            font-size: 44px;\n            font-weight: 700;\n            color: #202124;\n            margin-bottom: 8px;\n            text-align: center;\n            letter-spacing: -0.5px;\n        }\n\n        .effective-date {\n            text-align: center;\n            font-size: 14px;\n            color: #5f6368;\n            margin-bottom: 40px;\n        }\n\n        h2.section-heading {\n            font-size: 28px;\n            font-weight: 500;\n            color: #202124;\n            margin-top: 50px;\n            margin-bottom: 16px;\n            letter-spacing: -0.2px;\n        }\n\n        p.about-text {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            font-weight: 400;\n        }\n\n        ul.about-list {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            padding-left: 24px;\n        }\n\n        ul.about-list li {\n            margin-bottom: 12px;\n        }\n\n        .sticker-illustration {\n            text-align: center;\n            margin: 35px auto;\n            padding: 10px;\n        }\n\n        .sticker-illustration img {\n            width: 140px;\n            height: auto;\n            display: block;\n            margin: 0 auto;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"about-container\">\n        <h1>Terms &amp; Conditions</h1>\n        <p class=\"effective-date\">Effective Date: July 21, 2026</p>\n\n        <h2 class=\"section-heading\">1. Agreement to Terms</h2>\n        <p class=\"about-text\">\n            By accessing or using RummyDex, you agree to be bound by these Terms &amp; Conditions. If you disagree with any part of these terms, you are prohibited from using our website. These terms apply to all visitors, users, and others who access our directory.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:handshake.svg\" alt=\"Agreement to Terms Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">2. Intellectual Property and Copyright</h2>\n        <p class=\"about-text\">\n            The original content, layout, design, and structural organization of the RummyDex directory are the exclusive property of RummyDex. However, we do not claim ownership over the third-party applications listed on our site. All app names, logos, trademarks, and associated digital assets belong to their respective external developers and publishers.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:copyright.svg\" alt=\"Intellectual Property and Copyright Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">3. Acceptable Use of the Directory</h2>\n        <p class=\"about-text\">\n            RummyDex is provided solely for your personal, non-commercial informational use. You agree not to:\n        </p>\n        <ul class=\"about-list\">\n            <li>Use automated scripts, bots, or web scrapers to extract data, reviews, or links from our directory.</li>\n            <li>Interfere with or disrupt the security, servers, or networks connected to our website.</li>\n            <li>Submit false, spam, or malicious reports through our App Reporting system.</li>\n        </ul>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:no-entry.svg\" alt=\"Acceptable Use Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">4. Third-Party Links and Software Disclaimer</h2>\n        <p class=\"about-text\">\n            RummyDex functions as an informational bridge. While we utilize a secure, carefully verified process to provide correct links to external applications, we do not host any software or APK files on our own servers.\n        </p>\n        <p class=\"about-text\">\n            You acknowledge that clicking an external link takes you to a third-party destination that we do not control. You agree that any downloading, installation, or use of third-party software is done entirely at your own risk. RummyDex is not responsible for any damage to your device, loss of data, or other issues resulting from the use of third-party applications discovered through our index.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:warning.svg\" alt=\"Third-Party Software Disclaimer Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">5. App Reporting &amp; Removal Guarantee</h2>\n        <p class=\"about-text\">\n            We maintain a strict zero-tolerance policy for apps that introduce unauthorized real-money gaming (RMG) mechanics. If a user reports an application for violating these standards, we will review the claim and enforce our 100% removal guarantee. We reserve the right to remove, modify, or delist any application from our directory at our sole discretion, without prior notice to the app's developer.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:megaphone.svg\" alt=\"App Reporting and Removal Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">6. Limitation of Liability</h2>\n        <p class=\"about-text\">\n            To the maximum extent permitted by law, RummyDex and its team shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of, or inability to use, our directory or the external applications linked within it. Our platform is provided on an \"as is\" and \"as available\" basis without any warranties of any kind.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:balance-scale.svg\" alt=\"Limitation of Liability Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">7. Modifications to Terms</h2>\n        <p class=\"about-text\">\n            We reserve the right to revise these Terms &amp; Conditions at any time. By continuing to access or use RummyDex after those revisions become effective, you agree to be bound by the revised terms.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:memo.svg\" alt=\"Modifications to Terms Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n    </div>\n\n</body>\n</html>",
  "hero_title_animation": "slide-up",
  "banners": [],
  "ticker_text": "L",
  "hero_title_visible": true,
  "trending_searches": [],
  "favicon_url": "https://y4q7avawns.ucarecd.net/b391a2fa-42f7-4b3a-a0d5-605cb22aead4/-/preview/1000x1000/",
  "animations_enabled": true,
  "social_links": {
    "facebook": "",
    "instagram": "",
    "twitter": "",
    "linkedin": "",
    "youtube": ""
  },
  "website_faqs": [],
  "secure_index_title": "RummyDex ",
  "categories": [
    "Yono",
    "Card",
    "Slots"
  ],
  "hero_title_subtitle": "C",
  "hero_title_style": "mono",
  "disclaimer_text": "<div ",
  "seo_keywords": "RummyDex ",
  "hero_title_color": "neon-sky",
  "helpline_telegram": "https://t.me",
  "ethics_heading": "ETHNICS",
  "privacy_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Privacy Policy - RummyDex</title>\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\" rel=\"stylesheet\">\n\n    <style>\n        body {\n            font-family: 'Roboto', Arial, sans-serif;\n            line-height: 1.75;\n            background-color: #ffffff;\n            margin: 0;\n            padding: 60px 20px;\n            display: flex;\n            justify-content: center;\n        }\n\n        .about-container {\n            max-width: 720px;\n            width: 100%;\n        }\n\n        h1 {\n            font-size: 44px;\n            font-weight: 700;\n            color: #202124;\n            margin-bottom: 8px;\n            text-align: center;\n            letter-spacing: -0.5px;\n        }\n\n        .effective-date {\n            text-align: center;\n            font-size: 14px;\n            color: #5f6368;\n            margin-bottom: 40px;\n        }\n\n        h2.section-heading {\n            font-size: 28px;\n            font-weight: 500;\n            color: #202124;\n            margin-top: 50px;\n            margin-bottom: 16px;\n            letter-spacing: -0.2px;\n        }\n\n        p.about-text {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            font-weight: 400;\n        }\n\n        .sticker-illustration {\n            text-align: center;\n            margin: 35px auto;\n            padding: 10px;\n        }\n\n        .sticker-illustration img {\n            width: 140px;\n            height: 140px;\n            display: block;\n            margin: 0 auto;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"about-container\">\n        <h1>Privacy Policy</h1>\n        <p class=\"effective-date\">Effective Date: July 21, 2026</p>\n\n        <h2 class=\"section-heading\">1. Introduction</h2>\n        <p class=\"about-text\">\n            Welcome to RummyDex. This Privacy Policy governs the manner in which RummyDex collects, uses, maintains, and discloses information collected from users visiting our digital directory and software index. We are committed to safeguarding your privacy and ensuring transparency in how your data is handled while you navigate our platform.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:open-book.svg\" alt=\"Privacy Policy Introduction Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">2. Information Collection</h2>\n        <p class=\"about-text\">\n            RummyDex operates strictly as an informational index. We do not require users to create accounts, register, or provide sensitive personal identification information to access our directory.\n        </p>\n        <p class=\"about-text\">\n            We may collect non-personally identifiable information about users whenever they interact with our website. This data is collected automatically and may include the browser name, the type of computer or device, internet service providers, IP addresses, geographical region, and technical information regarding the user's means of connection to our site.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:bar-chart.svg\" alt=\"Information Collection Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">3. Web Browser Cookies</h2>\n        <p class=\"about-text\">\n            Our website uses \"cookies\" to enhance the user experience, analyze site traffic, and optimize our directory structure. A cookie is a small text file placed on a user's hard drive for record-keeping purposes and to track non-personal information. Users may choose to set their web browser to refuse cookies or to alert them when cookies are being sent. Please note that if cookies are disabled, some parts of the site may not function properly.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:cookie.svg\" alt=\"Web Browser Cookies Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">4. Third-Party Services</h2>\n        <p class=\"about-text\">\n            To maintain and support our directory, we may work with standard third-party services for analytics and content delivery. These partners may utilize cookies or similar technologies to provide relevant information and promotions based on your interactions with our site and other websites. You retain full control over your cookie preferences and can adjust, manage, or disable them at any time through your web browser settings or standard network opt-out pages.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:handshake.svg\" alt=\"Third-Party Services Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">5. Secure External Links and Third-Party Applications</h2>\n        <p class=\"about-text\">\n            RummyDex is an informational bridge. We do not host APKs or software files directly on our servers. Instead, we provide safe, correct links to external, third-party software developers through a secure, carefully verified process to ensure users are directed appropriately. When you click on a link and navigate to a third-party application, you are leaving our jurisdiction. We do not control the content, privacy practices, or data collection policies of these external destinations. Interaction with any other website or application is subject to that entity's own terms and policies.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:globe-with-meridians.svg\" alt=\"External Links Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">6. Data Security</h2>\n        <p class=\"about-text\">\n            We adopt appropriate data collection, storage, and processing practices, alongside strict security measures, to protect against unauthorized access, alteration, disclosure, or destruction of your non-personal information and data stored on our site. However, no data transmission over the internet or wireless network can be guaranteed to be 100% secure.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:locked.svg\" alt=\"Data Security Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">7. Acceptance of These Terms</h2>\n        <p class=\"about-text\">\n            By using RummyDex, you signify your acceptance of this Privacy Policy. If you do not agree to this policy, please do not use our site. We reserve the right to update or modify this Privacy Policy at any time. Continued use of the site following the posting of changes to this policy will be deemed your acceptance of those changes.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:balance-scale.svg\" alt=\"Acceptance of Terms Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n    </div>\n\n</body>\n</html>",
  "helpline_whatsapp": "+918653034735",
  "responsibility_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Platform Responsibility Clause - RummyDex</title>\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\" rel=\"stylesheet\">\n\n    <style>\n        body {\n            font-family: 'Roboto', Arial, sans-serif;\n            line-height: 1.75;\n            background-color: #ffffff;\n            margin: 0;\n            padding: 60px 20px;\n            display: flex;\n            justify-content: center;\n        }\n\n        .about-container {\n            max-width: 720px;\n            width: 100%;\n        }\n\n        h1 {\n            font-size: 40px;\n            font-weight: 700;\n            color: #202124;\n            margin-bottom: 40px;\n            text-align: center;\n            letter-spacing: -0.5px;\n        }\n\n        h2.section-heading {\n            font-size: 28px;\n            font-weight: 500;\n            color: #202124;\n            margin-top: 50px;\n            margin-bottom: 16px;\n            letter-spacing: -0.2px;\n        }\n\n        p.about-text {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            font-weight: 400;\n        }\n\n        .sticker-illustration {\n            text-align: center;\n            margin: 35px auto;\n            padding: 10px;\n        }\n\n        .sticker-illustration img {\n            width: 140px;\n            height: 140px;\n            display: block;\n            margin: 0 auto;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"about-container\">\n        <h1>Platform Responsibility Clause</h1>\n\n        <h2 class=\"section-heading\">1. Technical Operations & Secure Routing</h2>\n        <p class=\"about-text\">\n            Our operational responsibility is strictly limited to the maintenance of the RummyDex directory infrastructure. We ensure that our platform accurately catalogs offline and casual online applications, and that all outbound resource links are generated through a secure, verified process. We guarantee that the links provided on our site correctly route users to the intended, legitimate third-party developer sources at the time of publication.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:gear.svg\" alt=\"Technical Operations Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">2. Limits of Content & Software Liability</h2>\n        <p class=\"about-text\">\n            RummyDex does not host software, APK files, or proprietary source code on our servers. Because our control is strictly limited to our own website interface, we are not liable for the performance, data practices, or digital security of the external third-party destinations. Any downloading or installation of software from external sources is conducted solely at the user's discretion and risk.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:warning.svg\" alt=\"Software Liability Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">3. Post-Listing Developer Modifications</h2>\n        <p class=\"about-text\">\n            While our team conducts hands-on evaluation prior to listing any offline or online application, we do not govern the external developers. We are not responsible for unannounced updates, post-launch mechanic alterations, or software modifications implemented by third parties after an app has been published on our site.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:construction.svg\" alt=\"Post-Listing Modifications Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">4. Policy Enforcement & User Experiences</h2>\n        <p class=\"about-text\">\n            For information regarding how RummyDex handles non-compliant developer updates, community oversight, and user-submitted reviews, please refer to our dedicated Report & Removal Policy and our Terms & Conditions.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:memo.svg\" alt=\"Policy Enforcement Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n    </div>\n\n</body>\n</html>",
  "disclaimer_heading": "DISCLAIMER ",
  "logo_url": "https://y4q7avaws.ucarecd.net/b391a2fa-42f7-4b3a-a0d5-605cb22aead4/-/preview/1000x1000/",
  "quick_links": [],
  "contact_content": "<p>Have questions or feedback? We'd love to hear from you. Our team typically responds within 24-48 hours.</p>",
  "support_email": "support@rummydex.com",
  "secure_index_subtitle": "The Ultimate Registry for Strategic Card Simulation, Arcade Logic, and Premium Virtual Gameplay Guides",
  "meta_description": "Step into the world of Rummy - compete, challenge friends, and rise to the top on RummyApp Online!",
  "last_updated": "2026-07-21T06:44:10.078Z",
  "ethics_discrimination_text": "<div ",
  "important_notice": "<div ",
  "about_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>About Us - RummyDex</title>\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\" rel=\"stylesheet\">\n\n    <style>\n        body {\n            font-family: 'Roboto', Arial, sans-serif;\n            line-height: 1.75;\n            background-color: #ffffff;\n            margin: 0;\n            padding: 60px 20px;\n            display: flex;\n            justify-content: center;\n        }\n\n        .about-container {\n            max-width: 720px;\n            width: 100%;\n        }\n\n        h1 {\n            font-size: 44px;\n            font-weight: 700;\n            color: #202124;\n            margin-bottom: 40px;\n            text-align: center;\n            letter-spacing: -0.5px;\n        }\n\n        h2.section-heading {\n            font-size: 28px;\n            font-weight: 500;\n            color: #202124;\n            margin-top: 50px;\n            margin-bottom: 16px;\n            letter-spacing: -0.2px;\n        }\n\n        p.about-text {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            font-weight: 400;\n        }\n\n        .sticker-illustration {\n            text-align: center;\n            margin: 35px auto;\n            padding: 10px;\n        }\n\n        .sticker-illustration img {\n            width: 140px;\n            height: 140px;\n            display: block;\n            margin: 0 auto;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"about-container\">\n        <h1>About Us</h1>\n\n        <h2 class=\"section-heading\">The Meaning of \"Dex\" (Who We Are)</h2>\n        <p class=\"about-text\">\n            Welcome to RummyDex. The word \"Dex\" stands for index or directory, which perfectly describes our core identity. We are an independent digital library built to catalog, review, and provide structured, transparent information about casual games and digital applications. Our platform is designed to be a complete informational hub for entertainment enthusiasts.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:card-index-dividers.svg\" alt=\"Index Directory Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">How We Provide Information & Links</h2>\n        <p class=\"about-text\">\n            We function strictly as an informational bridge. Instead of hosting direct software or APK files on our servers, we provide comprehensive technical breakdowns, clear guides, and safe, direct links to third-party developer sources. This ensures that our platform remains fast and secure, and that you always access applications straight from the source.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:link.svg\" alt=\"Direct Links Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">Real Hands-On Testing & Experience</h2>\n        <p class=\"about-text\">\n            We do not just list apps blindly. Before any application is published on our platform, our team conducts a real, hands-on test. We personally experience the app's performance, mechanics, and user interface to ensure it meets our strict entertainment standards before it ever reaches our directory.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:check-mark-button.svg\" alt=\"Hands-on Testing Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">Complete Transparency & Neutrality</h2>\n        <p class=\"about-text\">\n            RummyDex operates with 100% complete transparency and zero developer bias. We act entirely as an independent informational resource. Our goal is to provide honest, neutral, and clear breakdowns so that you can make fully informed choices about your offline and casual online entertainment.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:balance-scale.svg\" alt=\"Transparency and Neutrality Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n    </div>\n\n</body>\n</html>",
  "portal_heading": "IMPORTANT NOTICE ",
  "important_notice_heading": "VERY IMPORTANT NOTICE ",
  "site_title": "RummyDex ",
  "hero_title_text": "R",
  "report_removal_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Report & Removal Policy - RummyDex</title>\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\" rel=\"stylesheet\">\n\n    <style>\n        body {\n            font-family: 'Roboto', Arial, sans-serif;\n            line-height: 1.75;\n            background-color: #ffffff;\n            margin: 0;\n            padding: 60px 20px;\n            display: flex;\n            justify-content: center;\n        }\n\n        .about-container {\n            max-width: 720px;\n            width: 100%;\n        }\n\n        h1 {\n            font-size: 40px;\n            font-weight: 700;\n            color: #202124;\n            margin-bottom: 40px;\n            text-align: center;\n            letter-spacing: -0.5px;\n        }\n\n        h2.section-heading {\n            font-size: 28px;\n            font-weight: 500;\n            color: #202124;\n            margin-top: 50px;\n            margin-bottom: 16px;\n            letter-spacing: -0.2px;\n        }\n\n        p.about-text {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            font-weight: 400;\n        }\n\n        p.about-text strong,\n        ul.about-list strong {\n            font-weight: 700;\n            color: #202124;\n        }\n\n        ul.about-list {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            padding-left: 24px;\n        }\n\n        ul.about-list li {\n            margin-bottom: 14px;\n        }\n\n        .sticker-illustration {\n            text-align: center;\n            margin: 35px auto;\n            padding: 10px;\n        }\n\n        .sticker-illustration img {\n            width: 140px;\n            height: 140px;\n            display: block;\n            margin: 0 auto;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"about-container\">\n        <h1>Report &amp; Removal Policy</h1>\n\n        <h2 class=\"section-heading\">1. Our Commitment to a Safe Directory</h2>\n        <p class=\"about-text\">\n            RummyDex is built on the foundation of providing a clean, safe, and purely entertainment-focused digital index. Because third-party developers can update their applications dynamically after we list them, we rely on active community oversight to help us maintain the integrity of our platform. This policy outlines exactly what we do not allow and how we handle non-compliant applications.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:shield.svg\" alt=\"Safe Directory Commitment Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">2. What You Should Report</h2>\n        <p class=\"about-text\">\n            We ask our community to immediately report any application listed on our platform that exhibits any of the following violations:\n        </p>\n        <ul class=\"about-list\">\n            <li><strong>Real-Money Gaming (RMG):</strong> The sudden introduction of real-money betting, gambling, or mandatory financial deposits to play.</li>\n            <li><strong>Deceptive Updates:</strong> An application that drastically changes its core gameplay from what was originally reviewed and listed (e.g., a casual offline puzzle game updating into a casino app).</li>\n            <li><strong>Broken or Malicious Links:</strong> A resource link that no longer directs to the verified developer source, or redirects to an unsafe, unverified page.</li>\n            <li><strong>Excessive Intrusive Ads:</strong> Applications that have updated to include unskippable system-level ads or malware-like behavior that ruins the user experience.</li>\n        </ul>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:no-entry.svg\" alt=\"Violations to Report Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">3. How to Submit a Report</h2>\n        <p class=\"about-text\">\n            Reporting a violation is simple and direct. At the bottom of every individual app review page, you will find a <strong>\"Report App\"</strong> button. Clicking this will open a quick form where you can select the reason for your report and provide a brief detail of your experience.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:writing-hand.svg\" alt=\"Submitting a Report Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">4. Our Review Process</h2>\n        <p class=\"about-text\">\n            Once a report is submitted, it goes directly to our moderation team. We do not use automated bots for this process; a real team member will manually re-test the application and verify the provided link to check for the reported violations.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:eyes.svg\" alt=\"Manual Review Process Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">5. The 100% Permanent Removal Guarantee</h2>\n        <p class=\"about-text\">\n            We operate with a strict <strong>zero-tolerance policy</strong> for financial risk mechanisms and deceptive software. If our team verifies that an application has violated our safety guidelines or introduced real-money mechanics, we enforce a <strong>100% immediate and permanent removal</strong> of that app from RummyDex.\n        </p>\n        <ul class=\"about-list\">\n            <li>The application's dedicated page will be taken down.</li>\n            <li>All outbound links to the software will be permanently severed.</li>\n            <li>The developer will not be permitted to relist the application on our index.</li>\n        </ul>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:police-car-light.svg\" alt=\"Permanent Removal Guarantee Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">6. False Reporting</h2>\n        <p class=\"about-text\">\n            While we highly value community feedback, we ask that users only submit reports for genuine violations. Deliberately spamming the reporting system or submitting false claims to maliciously target specific games may result in a restriction of your ability to submit future reports or post reviews.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:warning.svg\" alt=\"False Reporting Warning Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n    </div>\n\n</body>\n</html>"
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
