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
    "idea_box_msg": "",
    "yellow_box_msg": "",
    "serial_number": 2,
    "slug": "spin-crush-",
    "og_image_url": "",
    "release_notes": "",
    "link_configured": true,
    "safety_status": "Verified",
    "seo_keywords": "",
    "category": "Yono, All App",
    "file_size": "45",
    "rating": 5,
    "target_region": "",
    "video_url": "",
    "custom_admin_box_html": "",
    "developer": "Bingo ",
    "is_coming_soon": false,
    "id": "q82dbbwh4",
    "faqs": [],
    "is_featured": false,
    "red_box_msg": "",
    "is_hot": false,
    "created_at": "2026-05-19T12:43:59.040Z",
    "seo_title": "",
    "is_top_chart": true,
    "screenshots": [],
    "is_new": true,
    "name": "SPIN CRUSH ",
    "canonical_url": "",
    "icon_url": "https://res.cloudinary.com/dq34n0ncz/image/upload/f_auto,q_auto/1000119573_wzwse4",
    "description_html": "<p>A new application.</p>",
    "custom_admin_box_heading": "",
    "seo_description": "",
    "version": "2.0.6",
    "features_html": ""
  },
  {
    "name": "YONO ARCADE",
    "canonical_url": "",
    "is_new": false,
    "screenshots": [],
    "seo_title": "",
    "is_hot": false,
    "created_at": "2026-05-19T19:04:26.373Z",
    "red_box_msg": "",
    "features_html": "",
    "version": "1.20.1",
    "seo_description": "",
    "custom_admin_box_heading": "",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://13eehe59cj.ucarecd.net/67a16d31-6771-4617-b88b-288db51d321d/-/preview/554x554/",
    "seo_keywords": "",
    "safety_status": "Verified",
    "release_notes": "",
    "link_configured": false,
    "og_image_url": "",
    "serial_number": 3,
    "slug": "yono-arcade",
    "yellow_box_msg": "",
    "idea_box_msg": "",
    "is_featured": false,
    "faqs": [],
    "id": "31og4l26i",
    "developer": "Arcade ",
    "custom_admin_box_html": "",
    "is_coming_soon": false,
    "video_url": "",
    "target_region": "",
    "file_size": "56",
    "category": "Yono, All App",
    "rating": 3.4
  },
  {
    "is_new": true,
    "canonical_url": "",
    "name": "JAIHO 91",
    "seo_title": "",
    "screenshots": [],
    "red_box_msg": "",
    "created_at": "2026-05-19T19:23:07.133Z",
    "features_html": "",
    "custom_admin_box_heading": "",
    "seo_description": "",
    "version": "1.20.1",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://res.cloudinary.com/dyigysy26/image/upload/f_auto,q_auto/1000119609_fkc9fm",
    "safety_status": "Verified",
    "seo_keywords": "",
    "og_image_url": "",
    "link_configured": true,
    "release_notes": "",
    "yellow_box_msg": "",
    "serial_number": 3,
    "slug": "jaiho-91",
    "idea_box_msg": "",
    "is_featured": false,
    "faqs": [],
    "developer": "Jaiho",
    "custom_admin_box_html": "",
    "is_coming_soon": false,
    "id": "s5u553ymi",
    "rating": 4.8,
    "category": "Yono, All App",
    "file_size": "56",
    "target_region": "",
    "video_url": ""
  },
  {
    "icon_url": "https://13eehe59cj.ucarecd.net/d3f6486a-b216-4582-b15d-0c735ff6b08f/-/preview/554x554/",
    "description_html": "<p>A new application.</p>",
    "version": "2.5V",
    "seo_description": "",
    "custom_admin_box_heading": "",
    "features_html": "",
    "created_at": "2026-05-20T03:09:33.880Z",
    "red_box_msg": "",
    "screenshots": [],
    "seo_title": "",
    "name": "BINGO 101",
    "canonical_url": "",
    "is_new": false,
    "video_url": "",
    "target_region": "",
    "file_size": "71",
    "category": "Yono, All App",
    "rating": 3.6,
    "id": "awus3qajs",
    "custom_admin_box_html": "",
    "developer": "Bingo",
    "is_coming_soon": false,
    "faqs": [],
    "is_featured": false,
    "idea_box_msg": "",
    "slug": "bingo-101",
    "serial_number": 5,
    "yellow_box_msg": "",
    "link_configured": true,
    "release_notes": "",
    "og_image_url": "",
    "seo_keywords": "",
    "safety_status": "Verified"
  },
  {
    "link_configured": true,
    "release_notes": "",
    "og_image_url": "",
    "seo_keywords": "",
    "safety_status": "Verified",
    "idea_box_msg": "",
    "slug": "ok-rummy",
    "serial_number": 6,
    "yellow_box_msg": "",
    "faqs": [],
    "is_featured": false,
    "target_region": "",
    "video_url": "",
    "rating": 3,
    "file_size": "67",
    "category": "Yono, All App",
    "id": "0uiuuhdrj",
    "is_coming_soon": false,
    "custom_admin_box_html": "",
    "developer": "Bingo ",
    "canonical_url": "",
    "name": "OK RUMMY",
    "is_new": false,
    "created_at": "2026-05-20T03:50:33.674Z",
    "red_box_msg": "",
    "screenshots": [],
    "seo_title": "",
    "version": "8.3.06.",
    "seo_description": "",
    "custom_admin_box_heading": "",
    "features_html": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/97512d34-f561-4ede-8517-2112440079eb/-/preview/554x554/",
    "description_html": "<p>A new application.</p>"
  },
  {
    "is_new": false,
    "name": "JAIHO SLOTS",
    "canonical_url": "",
    "red_box_msg": "",
    "created_at": "2026-05-20T03:53:24.482Z",
    "seo_title": "",
    "screenshots": [],
    "custom_admin_box_heading": "",
    "seo_description": "",
    "version": "4.3",
    "features_html": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/2dfe5d55-7896-4f96-8f2b-132190e44f6f/-/preview/540x540/",
    "description_html": "<p>A new application.</p>",
    "og_image_url": "",
    "link_configured": true,
    "release_notes": "",
    "safety_status": "Verified",
    "seo_keywords": "",
    "idea_box_msg": "",
    "yellow_box_msg": "",
    "serial_number": 7,
    "slug": "jaiho-slots",
    "faqs": [],
    "is_featured": false,
    "category": "Yono, All App",
    "file_size": "70",
    "rating": 4.9,
    "target_region": "",
    "video_url": "",
    "custom_admin_box_html": "",
    "developer": "Jaiho",
    "is_coming_soon": false,
    "id": "4yt0f4yd0"
  },
  {
    "slug": "boss-rummy",
    "serial_number": 8,
    "yellow_box_msg": "",
    "idea_box_msg": "",
    "seo_keywords": "",
    "safety_status": "Verified",
    "link_configured": true,
    "release_notes": "",
    "og_image_url": "",
    "id": "9r044fyi0",
    "custom_admin_box_html": "",
    "is_coming_soon": false,
    "developer": "Arcade ",
    "target_region": "",
    "video_url": "",
    "category": "Yono, All App",
    "file_size": "54",
    "rating": 4.1,
    "is_featured": false,
    "faqs": [],
    "screenshots": [],
    "seo_title": "",
    "created_at": "2026-05-20T03:56:42.075Z",
    "red_box_msg": "",
    "name": "BOSS RUMMY",
    "canonical_url": "",
    "is_new": false,
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://13eehe59cj.ucarecd.net/b5e9d896-71e8-49d6-b091-a971871161e0/-/preview/1000x1000/",
    "features_html": "",
    "version": "2.5V",
    "seo_description": "",
    "custom_admin_box_heading": ""
  },
  {
    "created_at": "2026-05-20T04:01:04.611Z",
    "red_box_msg": "",
    "screenshots": [],
    "seo_title": "",
    "name": "RUMMY 91",
    "canonical_url": "",
    "is_new": false,
    "icon_url": "https://13eehe59cj.ucarecd.net/393c07ea-4f5e-43a9-ab0c-e12dfe7d755a/-/preview/474x474/",
    "description_html": "<p>A new application.</p>",
    "version": "2.0.6",
    "custom_admin_box_heading": "",
    "seo_description": "",
    "features_html": "",
    "idea_box_msg": "",
    "slug": "rummy-91",
    "serial_number": 9,
    "yellow_box_msg": "",
    "release_notes": "",
    "link_configured": true,
    "og_image_url": "",
    "seo_keywords": "",
    "safety_status": "Verified",
    "target_region": "",
    "video_url": "",
    "file_size": "79",
    "category": "All App",
    "rating": 4.9,
    "id": "5b7fj0cq7",
    "custom_admin_box_html": "",
    "is_coming_soon": false,
    "developer": "Addi",
    "faqs": [],
    "is_featured": false
  },
  {
    "link_configured": true,
    "release_notes": "",
    "og_image_url": "",
    "seo_keywords": "",
    "safety_status": "Verified",
    "idea_box_msg": "",
    "slug": "gogo-rummy-",
    "serial_number": 10,
    "yellow_box_msg": "",
    "faqs": [],
    "is_featured": false,
    "target_region": "",
    "video_url": "",
    "rating": 3.9,
    "category": "Yono, All App",
    "file_size": "65",
    "id": "ieam3hkbq",
    "custom_admin_box_html": "",
    "is_coming_soon": false,
    "developer": "Sk varba",
    "canonical_url": "",
    "name": "GOGO RUMMY ",
    "is_new": false,
    "created_at": "2026-05-20T06:58:27.643Z",
    "red_box_msg": "",
    "screenshots": [],
    "seo_title": "",
    "version": "5.0",
    "seo_description": "",
    "custom_admin_box_heading": "",
    "features_html": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/0d710f11-2c9d-4312-89de-be65ce21a4fe/-/preview/750x750/",
    "description_html": "<p>A new application.</p>"
  },
  {
    "is_featured": false,
    "faqs": [],
    "id": "5j5b7qbrw",
    "developer": "S.A vejay",
    "is_coming_soon": false,
    "custom_admin_box_html": "",
    "video_url": "",
    "target_region": "",
    "category": "Yono, All App",
    "file_size": "75",
    "rating": 4.6,
    "seo_keywords": "",
    "safety_status": "Verified",
    "release_notes": "",
    "link_configured": true,
    "og_image_url": "",
    "slug": "club-inr",
    "serial_number": 11,
    "yellow_box_msg": "",
    "idea_box_msg": "",
    "features_html": "",
    "version": "1.8",
    "custom_admin_box_heading": "",
    "seo_description": "",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://13eehe59cj.ucarecd.net/3059d25d-1497-4cff-aead-68758187fe0b/-/preview/554x554/",
    "name": "CLUB INR",
    "canonical_url": "",
    "is_new": false,
    "screenshots": [],
    "seo_title": "",
    "created_at": "2026-05-20T08:02:40.971Z",
    "red_box_msg": ""
  },
  {
    "red_box_msg": "",
    "created_at": "2026-05-26T07:04:36.330Z",
    "seo_title": "",
    "screenshots": [],
    "is_new": false,
    "canonical_url": "",
    "name": "ABC Rummy ",
    "icon_url": "https://13eehe59cj.ucarecd.net/f7108631-b74a-49e5-8abf-37cec6950f7c/-/preview/512x512/",
    "description_html": "<p>A new application.</p>",
    "custom_admin_box_heading": "",
    "seo_description": "",
    "version": "1.8",
    "features_html": "",
    "idea_box_msg": "",
    "yellow_box_msg": "",
    "slug": "abc-rummy-",
    "serial_number": 12,
    "og_image_url": "",
    "link_configured": true,
    "release_notes": "",
    "safety_status": "Verified",
    "seo_keywords": "",
    "rating": 3.9,
    "category": "Yono, All App",
    "file_size": "61",
    "target_region": "",
    "video_url": "",
    "developer": "Addi",
    "is_coming_soon": false,
    "custom_admin_box_html": "",
    "id": "f4ktp4dfi",
    "faqs": [],
    "is_featured": false
  },
  {
    "safety_status": "Verified",
    "seo_keywords": "",
    "og_image_url": "",
    "release_notes": "",
    "link_configured": true,
    "yellow_box_msg": "",
    "serial_number": 13,
    "slug": "777-rummy",
    "idea_box_msg": "",
    "is_featured": false,
    "faqs": [],
    "custom_admin_box_html": "",
    "developer": "AB Arora",
    "is_coming_soon": false,
    "id": "4w1yxs6mm",
    "rating": 5,
    "file_size": "54",
    "category": "Yono, All App",
    "video_url": "",
    "target_region": "",
    "is_new": false,
    "canonical_url": "",
    "name": "777.Rummy",
    "seo_title": "",
    "screenshots": [],
    "red_box_msg": "",
    "created_at": "2026-05-26T07:09:01.068Z",
    "features_html": "",
    "custom_admin_box_heading": "",
    "seo_description": "",
    "version": "1.6",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://13eehe59cj.ucarecd.net/fb951184-b849-4ff0-8882-a4d826508fb7/-/preview/190x190/"
  },
  {
    "name": "EVER 777",
    "canonical_url": "",
    "is_new": false,
    "screenshots": [],
    "seo_title": "",
    "created_at": "2026-05-26T07:12:55.821Z",
    "red_box_msg": "",
    "features_html": "",
    "version": "1.8",
    "seo_description": "",
    "custom_admin_box_heading": "",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://13eehe59cj.ucarecd.net/74347710-3cb2-468c-98eb-5666a0af487c/-/preview/190x190/",
    "seo_keywords": "",
    "safety_status": "Verified",
    "release_notes": "",
    "link_configured": true,
    "og_image_url": "",
    "slug": "ever-777",
    "serial_number": 14,
    "yellow_box_msg": "",
    "idea_box_msg": "",
    "is_featured": false,
    "faqs": [],
    "id": "w1sttlwv7",
    "custom_admin_box_html": "",
    "is_coming_soon": false,
    "developer": "AZ ever",
    "target_region": "",
    "video_url": "",
    "file_size": "59",
    "category": "Yono, All App",
    "rating": 4
  },
  {
    "created_at": "2026-05-26T07:16:08.600Z",
    "red_box_msg": "",
    "screenshots": [],
    "seo_title": "",
    "canonical_url": "",
    "name": "Game Rummy",
    "is_new": false,
    "icon_url": "https://13eehe59cj.ucarecd.net/4b2bd57d-9855-40a8-b452-34edee84ed09/-/preview/190x190/",
    "description_html": "<p>A new application.</p>",
    "version": "2.0",
    "custom_admin_box_heading": "",
    "seo_description": "",
    "features_html": "",
    "idea_box_msg": "",
    "slug": "game-rummy",
    "serial_number": 15,
    "yellow_box_msg": "",
    "release_notes": "",
    "link_configured": true,
    "og_image_url": "",
    "seo_keywords": "",
    "safety_status": "Verified",
    "target_region": "",
    "video_url": "",
    "rating": 4,
    "file_size": "75",
    "category": "Yono, All App",
    "id": "dp2lcn2ae",
    "developer": "Raj dav",
    "custom_admin_box_html": "",
    "is_coming_soon": false,
    "faqs": [],
    "is_featured": false
  },
  {
    "icon_url": "https://13eehe59cj.ucarecd.net/c01e9676-e748-4342-9ac7-e972030981fc/-/preview/190x190/",
    "description_html": "<p>A new application.</p>",
    "version": "1.9",
    "custom_admin_box_heading": "",
    "seo_description": "",
    "features_html": "",
    "created_at": "2026-05-26T07:18:29.456Z",
    "red_box_msg": "",
    "screenshots": [],
    "seo_title": "",
    "name": "Hi Rummy ",
    "canonical_url": "",
    "is_new": false,
    "video_url": "",
    "target_region": "",
    "file_size": "54",
    "category": "Yono, All App",
    "rating": 4.1,
    "id": "4lgypb90h",
    "developer": "Addi",
    "is_coming_soon": false,
    "custom_admin_box_html": "",
    "faqs": [],
    "is_featured": false,
    "idea_box_msg": "",
    "slug": "hi-rummy-",
    "serial_number": 16,
    "yellow_box_msg": "",
    "link_configured": true,
    "release_notes": "",
    "og_image_url": "",
    "seo_keywords": "",
    "safety_status": "Verified"
  },
  {
    "faqs": [],
    "is_featured": false,
    "video_url": "",
    "target_region": "",
    "rating": 5,
    "category": "Yono, All App",
    "file_size": "79",
    "id": "2f90a87hv",
    "is_coming_soon": false,
    "custom_admin_box_html": "",
    "developer": "Arcade ",
    "release_notes": "",
    "link_configured": true,
    "og_image_url": "",
    "seo_keywords": "",
    "safety_status": "Verified",
    "idea_box_msg": "",
    "slug": "inr-rummy",
    "serial_number": 17,
    "yellow_box_msg": "",
    "version": "3.0",
    "seo_description": "",
    "custom_admin_box_heading": "",
    "features_html": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/2a718650-0602-495f-9ca4-b13c86e58c02/-/preview/190x190/",
    "description_html": "<p>A new application.</p>",
    "canonical_url": "",
    "name": "INR Rummy",
    "is_new": false,
    "is_hot": false,
    "created_at": "2026-05-26T07:21:55.085Z",
    "red_box_msg": "",
    "screenshots": [],
    "seo_title": ""
  },
  {
    "faqs": [],
    "is_featured": false,
    "video_url": "",
    "target_region": "",
    "rating": 3.9,
    "file_size": "2.4",
    "category": "Yono, All App",
    "id": "9a05609sb",
    "developer": "PW sahar",
    "is_coming_soon": false,
    "custom_admin_box_html": "",
    "link_configured": true,
    "release_notes": "",
    "og_image_url": "",
    "seo_keywords": "",
    "safety_status": "Verified",
    "idea_box_msg": "",
    "slug": "jaiho-rummy-",
    "serial_number": 18,
    "yellow_box_msg": "",
    "version": "2.1",
    "custom_admin_box_heading": "",
    "seo_description": "",
    "features_html": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/c693366d-d543-4d76-84ba-3963a3f3c792/-/preview/190x190/",
    "description_html": "<p>A new application.</p>",
    "canonical_url": "",
    "name": "JAIHO RUMMY ",
    "is_new": false,
    "created_at": "2026-05-26T07:26:42.606Z",
    "red_box_msg": "",
    "screenshots": [],
    "seo_title": ""
  },
  {
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://13eehe59cj.ucarecd.net/cf0b4466-3d5b-4eb5-bc88-afc9a8213ac4/-/preview/190x190/",
    "features_html": "",
    "version": "1.6",
    "seo_description": "",
    "custom_admin_box_heading": "",
    "screenshots": [],
    "seo_title": "",
    "created_at": "2026-05-26T07:31:59.173Z",
    "red_box_msg": "",
    "name": "Love Rummy",
    "canonical_url": "",
    "is_new": false,
    "id": "l7a60keix",
    "is_coming_soon": false,
    "custom_admin_box_html": "",
    "developer": "Mak job",
    "video_url": "",
    "target_region": "",
    "category": "Yono, All App",
    "file_size": "68",
    "rating": 4.2,
    "is_featured": false,
    "faqs": [],
    "serial_number": 19,
    "slug": "love-rummy",
    "yellow_box_msg": "",
    "idea_box_msg": "",
    "seo_keywords": "",
    "safety_status": "Verified",
    "link_configured": true,
    "release_notes": "",
    "og_image_url": ""
  },
  {
    "seo_keywords": "",
    "safety_status": "Verified",
    "release_notes": "",
    "link_configured": false,
    "og_image_url": "",
    "serial_number": 20,
    "slug": "joy-rummy",
    "yellow_box_msg": "",
    "idea_box_msg": "",
    "is_featured": false,
    "faqs": [],
    "id": "4paka7kie",
    "custom_admin_box_html": "",
    "is_coming_soon": false,
    "developer": "AB Arora",
    "video_url": "",
    "target_region": "",
    "rating": 5,
    "file_size": "50",
    "category": "Yono, All App",
    "canonical_url": "",
    "name": "JOY RUMMY",
    "is_new": false,
    "screenshots": [],
    "seo_title": "",
    "created_at": "2026-05-26T07:34:35.782Z",
    "red_box_msg": "",
    "features_html": "",
    "version": "1.8",
    "custom_admin_box_heading": "",
    "seo_description": "",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://13eehe59cj.ucarecd.net/e0898894-5d5b-47ab-a14f-13b4514b3b4f/-/preview/190x190/"
  },
  {
    "video_url": "",
    "target_region": "",
    "rating": 4,
    "file_size": "70",
    "category": "Yono, All App",
    "id": "2768ohu2a",
    "is_coming_soon": false,
    "developer": "AZ ever",
    "custom_admin_box_html": "",
    "faqs": [],
    "is_featured": false,
    "idea_box_msg": "",
    "serial_number": 21,
    "slug": "maha-games",
    "yellow_box_msg": "",
    "release_notes": "",
    "link_configured": true,
    "og_image_url": "",
    "seo_keywords": "",
    "safety_status": "Verified",
    "icon_url": "https://13eehe59cj.ucarecd.net/2d664adc-3e1f-4317-805c-dea453f52389/-/preview/190x190/",
    "description_html": "<p>A new application.</p>",
    "version": "1.0",
    "custom_admin_box_heading": "",
    "seo_description": "",
    "features_html": "",
    "created_at": "2026-05-26T07:37:07.122Z",
    "red_box_msg": "",
    "screenshots": [],
    "seo_title": "",
    "canonical_url": "",
    "name": "MAHA GAMES",
    "is_new": false
  },
  {
    "name": "Rummy Ludo",
    "canonical_url": "",
    "is_new": false,
    "screenshots": [],
    "seo_title": "",
    "created_at": "2026-05-26T07:39:44.282Z",
    "red_box_msg": "",
    "features_html": "",
    "version": "5.8",
    "custom_admin_box_heading": "",
    "seo_description": "",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://13eehe59cj.ucarecd.net/6aa28ca8-cef1-4d1a-b054-13e242eaef02/-/preview/190x190/",
    "seo_keywords": "",
    "safety_status": "Verified",
    "release_notes": "",
    "link_configured": true,
    "og_image_url": "",
    "slug": "rummy-ludo",
    "serial_number": 22,
    "yellow_box_msg": "",
    "idea_box_msg": "",
    "is_featured": false,
    "faqs": [],
    "id": "us5xuk5bm",
    "developer": "AZ ever",
    "is_coming_soon": false,
    "custom_admin_box_html": "",
    "video_url": "",
    "target_region": "",
    "file_size": "58",
    "category": "Yono, All App",
    "rating": 3.9
  },
  {
    "rating": 3.9,
    "file_size": "45",
    "category": "Yono, All App",
    "video_url": "",
    "target_region": "",
    "developer": "Arcade ",
    "is_coming_soon": false,
    "custom_admin_box_html": "",
    "id": "69x1lstq7",
    "faqs": [],
    "is_featured": false,
    "idea_box_msg": "",
    "yellow_box_msg": "",
    "slug": "rummy-77",
    "serial_number": 23,
    "og_image_url": "",
    "release_notes": "",
    "link_configured": true,
    "safety_status": "Verified",
    "seo_keywords": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/d17abcfc-c8dc-4c36-8558-e3408002d37e/-/preview/190x190/",
    "description_html": "<p>A new application.</p>",
    "custom_admin_box_heading": "",
    "seo_description": "",
    "version": "2.0.6",
    "features_html": "",
    "red_box_msg": "",
    "created_at": "2026-05-26T07:42:24.615Z",
    "seo_title": "",
    "screenshots": [],
    "is_new": false,
    "canonical_url": "",
    "name": "Rummy 77"
  },
  {
    "is_new": false,
    "canonical_url": "",
    "name": "Share Slots",
    "seo_title": "",
    "screenshots": [],
    "red_box_msg": "",
    "created_at": "2026-05-26T07:44:32.442Z",
    "features_html": "",
    "custom_admin_box_heading": "",
    "seo_description": "",
    "version": "1.8",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://13eehe59cj.ucarecd.net/2738be7d-f198-4f70-a7d8-c8eb5f452eb0/-/preview/190x190/",
    "safety_status": "Verified",
    "seo_keywords": "",
    "og_image_url": "",
    "link_configured": false,
    "release_notes": "",
    "yellow_box_msg": "",
    "serial_number": 24,
    "slug": "share-slots",
    "idea_box_msg": "",
    "is_featured": false,
    "faqs": [],
    "is_coming_soon": false,
    "developer": "AB Arora",
    "custom_admin_box_html": "",
    "id": "j79n2g3l9",
    "rating": 4,
    "category": "Yono, All App",
    "file_size": "58",
    "target_region": "",
    "video_url": ""
  },
  {
    "features_html": "",
    "custom_admin_box_heading": "",
    "seo_description": "",
    "version": "1.6",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://13eehe59cj.ucarecd.net/e4314d5e-eb77-46b9-8998-8e0f94970b38/-/preview/72x72/",
    "is_new": false,
    "name": "567 SLOTS",
    "canonical_url": "",
    "seo_title": "",
    "screenshots": [],
    "red_box_msg": "",
    "created_at": "2026-05-26T07:51:47.637Z",
    "is_featured": false,
    "faqs": [],
    "developer": "Tania JK ",
    "is_coming_soon": false,
    "custom_admin_box_html": "",
    "id": "n3w2vjk0b",
    "file_size": "65",
    "category": "Yono, All App",
    "rating": 3.5,
    "video_url": "",
    "target_region": "",
    "safety_status": "Verified",
    "seo_keywords": "",
    "og_image_url": "",
    "link_configured": true,
    "release_notes": "",
    "yellow_box_msg": "",
    "serial_number": 26,
    "slug": "567-slots",
    "idea_box_msg": ""
  },
  {
    "custom_admin_box_html": "",
    "developer": "Admin",
    "is_coming_soon": false,
    "id": "owxg4aekg",
    "rating": 2.9,
    "category": "Yono, All App",
    "file_size": "Tanu WD",
    "video_url": "",
    "target_region": "",
    "is_featured": false,
    "faqs": [],
    "yellow_box_msg": "",
    "serial_number": 27,
    "slug": "789jackpots",
    "idea_box_msg": "",
    "safety_status": "Verified",
    "seo_keywords": "",
    "og_image_url": "",
    "link_configured": true,
    "release_notes": "",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://13eehe59cj.ucarecd.net/a0cedc36-33b0-4e75-a1ea-cd963b3ee0ca/-/preview/190x190/",
    "features_html": "",
    "seo_description": "",
    "custom_admin_box_heading": "",
    "version": "1.9",
    "seo_title": "",
    "screenshots": [],
    "red_box_msg": "",
    "created_at": "2026-05-26T07:56:30.478Z",
    "is_new": false,
    "canonical_url": "",
    "name": "789Jackpots"
  },
  {
    "faqs": [],
    "is_featured": false,
    "target_region": "",
    "video_url": "",
    "rating": 4,
    "category": "Yono, All App",
    "file_size": "78",
    "id": "fw5wsziec",
    "is_coming_soon": false,
    "custom_admin_box_html": "",
    "developer": "Rahul HL",
    "release_notes": "",
    "link_configured": true,
    "og_image_url": "",
    "seo_keywords": "",
    "safety_status": "Verified",
    "idea_box_msg": "",
    "slug": "yono-vip",
    "serial_number": 28,
    "yellow_box_msg": "",
    "version": "1.8",
    "seo_description": "",
    "custom_admin_box_heading": "",
    "features_html": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/d9226164-7447-425e-ba61-618d72ed28df/-/preview/190x190/",
    "description_html": "<p>A new application.</p>",
    "canonical_url": "",
    "name": "YONO VIP",
    "is_new": false,
    "created_at": "2026-05-26T08:00:01.636Z",
    "red_box_msg": "",
    "screenshots": [],
    "seo_title": ""
  },
  {
    "faqs": [],
    "is_featured": false,
    "video_url": "",
    "target_region": "",
    "rating": 4.2,
    "file_size": "90",
    "category": "Card",
    "id": "t1ocq5iar",
    "custom_admin_box_html": "",
    "developer": "Unknown ",
    "is_coming_soon": true,
    "link_configured": true,
    "release_notes": "",
    "og_image_url": "",
    "seo_keywords": "",
    "safety_status": "Verified",
    "idea_box_msg": "",
    "serial_number": 34,
    "slug": "teen-patti-octro",
    "yellow_box_msg": "",
    "version": "3",
    "seo_description": "",
    "custom_admin_box_heading": "",
    "features_html": "",
    "icon_url": "https://kk19a1nwwx.ucarecd.net/091fdebe-1562-41c6-99ea-b60665adb5ee/-/preview/512x512/",
    "publish_date": "2026-06-10T12:00:00.000Z",
    "description_html": "<p>A new application.</p>",
    "canonical_url": "",
    "name": "Teen Patti Octro",
    "is_new": true,
    "created_at": "2026-06-03T10:17:01.058Z",
    "red_box_msg": "",
    "screenshots": [],
    "seo_title": ""
  },
  {
    "icon_url": "https://kk19a1nwwx.ucarecd.net/5b72cf8f-4959-426e-9e1d-8e2150529efb/-/preview/240x240/",
    "description_html": "<p>A new application.</p>",
    "version": "1.0",
    "seo_description": "",
    "custom_admin_box_heading": "",
    "features_html": "",
    "created_at": "2026-06-03T10:30:01.393Z",
    "red_box_msg": "",
    "screenshots": [],
    "seo_title": "",
    "name": "Zynga Poker- Texas Holdem Game",
    "canonical_url": "",
    "is_new": false,
    "target_region": "",
    "video_url": "",
    "category": "Card",
    "file_size": "Unknown",
    "rating": 5,
    "id": "rrmv44n9n",
    "is_coming_soon": true,
    "developer": "Admin",
    "custom_admin_box_html": "",
    "faqs": [],
    "is_featured": false,
    "idea_box_msg": "",
    "slug": "zynga-poker-texas-holdem-game",
    "serial_number": 29,
    "yellow_box_msg": "",
    "release_notes": "",
    "link_configured": true,
    "og_image_url": "",
    "seo_keywords": "",
    "safety_status": "Verified"
  },
  {
    "created_at": "2026-06-07T10:14:11.138Z",
    "red_box_msg": null,
    "screenshots": [],
    "seo_title": "",
    "canonical_url": "",
    "name": "UNO! ",
    "is_new": true,
    "icon_url": "https://1ewg1yyass.ucarecd.net/c0172402-c854-4016-876e-6b7769547c8f/-/preview/238x211/",
    "description_html": "<p>A new application.</p>",
    "version": "1.0",
    "seo_description": "",
    "custom_admin_box_heading": null,
    "features_html": null,
    "idea_box_msg": null,
    "slug": "uno-",
    "serial_number": 30,
    "yellow_box_msg": null,
    "release_notes": "",
    "link_configured": true,
    "og_image_url": "",
    "seo_keywords": "",
    "safety_status": "Verified",
    "target_region": "",
    "rating": 5,
    "category": "Card",
    "file_size": "Unknown",
    "id": "wf59smk6l",
    "developer": "Admin",
    "is_coming_soon": true,
    "custom_admin_box_html": null,
    "faqs": [],
    "is_featured": false
  },
  {
    "name": "Rummy GOLD - With Fast Rummy",
    "canonical_url": "",
    "is_new": false,
    "screenshots": [],
    "seo_title": "",
    "created_at": "2026-06-07T10:16:45.949Z",
    "red_box_msg": "",
    "version": "1.0",
    "custom_admin_box_heading": "",
    "seo_description": "",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://1ewg1yyass.ucarecd.net/33e0d4e8-6e41-4791-9e41-8d915a12e504/-/preview/447x447/",
    "seo_keywords": "",
    "safety_status": "Verified",
    "release_notes": "",
    "link_configured": true,
    "og_image_url": "",
    "serial_number": 31,
    "slug": "rummy-gold-with-fast-rummy",
    "yellow_box_msg": "",
    "idea_box_msg": "",
    "is_featured": false,
    "faqs": [],
    "id": "8epj9jjpu",
    "developer": "Admin",
    "custom_admin_box_html": "",
    "is_coming_soon": true,
    "target_region": "",
    "category": "Card",
    "file_size": "Unknown",
    "rating": 5
  },
  {
    "safety_status": "Verified",
    "seo_keywords": "",
    "og_image_url": "",
    "release_notes": "",
    "link_configured": true,
    "yellow_box_msg": null,
    "slug": "indian-rummy-3-patti-card-game",
    "serial_number": 32,
    "idea_box_msg": null,
    "is_featured": false,
    "faqs": [],
    "is_coming_soon": true,
    "custom_admin_box_html": null,
    "developer": "Admin",
    "id": "8jt0hokyo",
    "rating": 5,
    "category": "Card",
    "file_size": "Unknown",
    "target_region": "",
    "is_new": true,
    "canonical_url": "",
    "name": "Indian Rummy 3 Patti Card Game",
    "seo_title": "",
    "screenshots": [],
    "red_box_msg": null,
    "created_at": "2026-06-07T10:19:11.616Z",
    "features_html": null,
    "seo_description": "",
    "custom_admin_box_heading": null,
    "version": "1.0",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://1ewg1yyass.ucarecd.net/2a4b59ef-16a3-4b14-bad3-1c3796af3492/-/preview/447x447/"
  },
  {
    "red_box_msg": "",
    "created_at": "2026-06-07T13:13:11.211Z",
    "seo_title": "",
    "screenshots": [],
    "is_new": false,
    "canonical_url": "",
    "name": "Lucky Spin Slots",
    "publish_date": "2026-07-08T13:08:00.000Z",
    "icon_url": "https://1ewg1yyass.ucarecd.net/0f918f11-b247-4b5a-9d26-d510dddffbfe/-/preview/447x447/",
    "description_html": "<p>A new application.</p>",
    "seo_description": "",
    "custom_admin_box_heading": "",
    "version": "1.0",
    "features_html": "",
    "idea_box_msg": "",
    "yellow_box_msg": "",
    "slug": "lucky-spin-slots",
    "serial_number": 33,
    "og_image_url": "https://1ewg1yyass.ucarecd.net/0f918f11-b247-4b5a-9d26-d510dddffbfe/-/preview/447x447/",
    "link_configured": true,
    "release_notes": "",
    "safety_status": "Verified",
    "seo_keywords": "",
    "rating": 5,
    "category": "Slots",
    "file_size": "Unknown",
    "target_region": "",
    "custom_admin_box_html": "",
    "is_coming_soon": true,
    "developer": "Admin",
    "id": "01x9h7nfb",
    "faqs": [],
    "is_featured": false
  },
  {
    "is_featured": false,
    "faqs": [],
    "id": "3cflt97b5",
    "developer": "AB Arora",
    "is_coming_soon": true,
    "custom_admin_box_html": "",
    "video_url": "",
    "target_region": "",
    "file_size": "76",
    "category": "Yono",
    "rating": 4.5,
    "seo_keywords": "",
    "safety_status": "Verified",
    "release_notes": "",
    "link_configured": true,
    "og_image_url": "",
    "slug": "ind-club",
    "serial_number": 28,
    "yellow_box_msg": "",
    "idea_box_msg": "",
    "features_html": "",
    "version": "1.0",
    "custom_admin_box_heading": "",
    "seo_description": "",
    "description_html": "<p>A new application.</p>",
    "publish_date": "2026-06-12T15:30:00.000Z",
    "icon_url": "https://1ewg1yyass.ucarecd.net/9d9339e0-77d4-418b-86f8-0a0e074c1d4e/-/preview/190x190/",
    "name": "IND Club",
    "canonical_url": "",
    "is_new": false,
    "screenshots": [],
    "seo_title": "",
    "created_at": "2026-06-12T12:39:30.407Z",
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
  "hero_title_color": "neon-sky",
  "seo_keywords": "RummyDex ",
  "disclaimer_heading": "DISCLAIMER ",
  "social_links": {
    "facebook": "",
    "instagram": "",
    "twitter": "",
    "linkedin": "",
    "youtube": ""
  },
  "hero_title_visible": true,
  "quick_links": [],
  "about_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>About Us - RummyDex</title>\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\" rel=\"stylesheet\">\n\n    <style>\n        body {\n            font-family: 'Roboto', Arial, sans-serif;\n            line-height: 1.75;\n            background-color: #ffffff;\n            margin: 0;\n            padding: 60px 20px;\n            display: flex;\n            justify-content: center;\n        }\n\n        .about-container {\n            max-width: 720px;\n            width: 100%;\n        }\n\n        h1 {\n            font-size: 44px;\n            font-weight: 700;\n            color: #202124;\n            margin-bottom: 40px;\n            text-align: center;\n            letter-spacing: -0.5px;\n        }\n\n        h2.section-heading {\n            font-size: 28px;\n            font-weight: 500;\n            color: #202124;\n            margin-top: 50px;\n            margin-bottom: 16px;\n            letter-spacing: -0.2px;\n        }\n\n        p.about-text {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            font-weight: 400;\n        }\n\n        .sticker-illustration {\n            text-align: center;\n            margin: 35px auto;\n            padding: 10px;\n        }\n\n        .sticker-illustration img {\n            width: 140px;\n            height: auto;\n            display: block;\n            margin: 0 auto;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"about-container\">\n        <h1>About Us</h1>\n\n        <h2 class=\"section-heading\">The Meaning of \"Dex\" (Who We Are)</h2>\n        <p class=\"about-text\">\n            Welcome to RummyDex. The word \"Dex\" stands for index or directory, which perfectly describes our core identity. We are an independent digital library built to catalog, review, and provide structured, transparent information about casual games and digital applications. Our platform is designed to be a complete informational hub for entertainment enthusiasts.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:card-index-dividers.svg\" alt=\"Index Directory Sticker\">\n        </div>\n\n        <h2 class=\"section-heading\">How We Provide Information & Links</h2>\n        <p class=\"about-text\">\n            We function strictly as an informational bridge. Instead of hosting direct software or APK files on our servers, we provide comprehensive technical breakdowns, clear guides, and safe, direct links to third-party developer sources. This ensures that our platform remains fast and secure, and that you always access applications straight from the source.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:link.svg\" alt=\"Direct Links Sticker\">\n        </div>\n\n        <h2 class=\"section-heading\">Real Hands-On Testing & Experience</h2>\n        <p class=\"about-text\">\n            We do not just list apps blindly. Before any application is published on our platform, our team conducts a real, hands-on test. We personally experience the app's performance, mechanics, and user interface to ensure it meets our strict entertainment standards before it ever reaches our directory.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:magnifying-glass-tilted-right.svg\" alt=\"Hands-on Testing Sticker\">\n        </div>\n\n        <h2 class=\"section-heading\">Complete Transparency & Neutrality</h2>\n        <p class=\"about-text\">\n            RummyDex operates with 100% complete transparency and zero developer bias. We act entirely as an independent informational resource. Our goal is to provide honest, neutral, and clear breakdowns so that you can make fully informed choices about your offline and casual online entertainment.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:balance-scale.svg\" alt=\"Transparency and Neutrality Sticker\">\n        </div>\n    </div>\n\n</body>\n</html>",
  "website_faqs": [],
  "last_updated": "2026-07-21T05:25:07.449Z",
  "helpline_whatsapp": "+918653034735",
  "important_notice": "<div ",
  "site_title": "RummyDex ",
  "disclaimer_text": "<div ",
  "contact_content": "<p>Have questions or feedback? We'd love to hear from you. Our team typically responds within 24-48 hours.</p>",
  "hero_title_style": "mono",
  "hero_title_animation": "slide-up",
  "terms_content": "<!-- ",
  "ticker_text": "L",
  "logo_url": "https://y4q7avaws.ucarecd.net/b391a2fa-42f7-4b3a-a0d5-605cb22aead4/-/preview/1000x1000/",
  "privacy_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Privacy Policy - RummyDex</title>\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\" rel=\"stylesheet\">\n\n    <style>\n        body {\n            font-family: 'Roboto', Arial, sans-serif;\n            line-height: 1.75;\n            background-color: #ffffff;\n            margin: 0;\n            padding: 60px 20px;\n            display: flex;\n            justify-content: center;\n        }\n\n        .about-container {\n            max-width: 720px;\n            width: 100%;\n        }\n\n        h1 {\n            font-size: 44px;\n            font-weight: 700;\n            color: #202124;\n            margin-bottom: 8px;\n            text-align: center;\n            letter-spacing: -0.5px;\n        }\n\n        .effective-date {\n            text-align: center;\n            font-size: 14px;\n            color: #5f6368;\n            margin-bottom: 40px;\n        }\n\n        h2.section-heading {\n            font-size: 28px;\n            font-weight: 500;\n            color: #202124;\n            margin-top: 50px;\n            margin-bottom: 16px;\n            letter-spacing: -0.2px;\n        }\n\n        p.about-text {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            font-weight: 400;\n        }\n\n        .sticker-illustration {\n            text-align: center;\n            margin: 35px auto;\n            padding: 10px;\n        }\n\n        .sticker-illustration img {\n            width: 140px;\n            height: auto;\n            display: block;\n            margin: 0 auto;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"about-container\">\n        <h1>Privacy Policy</h1>\n        <p class=\"effective-date\">Effective Date: July 21, 2026</p>\n\n        <h2 class=\"section-heading\">1. Introduction</h2>\n        <p class=\"about-text\">\n            Welcome to RummyDex. This Privacy Policy governs the manner in which RummyDex collects, uses, maintains, and discloses information collected from users visiting our digital directory and software index. We are committed to safeguarding your privacy and ensuring transparency in how your data is handled while you navigate our platform.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:open-book.svg\" alt=\"Privacy Policy Introduction Sticker\">\n        </div>\n\n        <h2 class=\"section-heading\">2. Information Collection</h2>\n        <p class=\"about-text\">\n            RummyDex operates strictly as an informational index. We do not require users to create accounts, register, or provide sensitive personal identification information to access our directory.\n        </p>\n        <p class=\"about-text\">\n            We may collect non-personally identifiable information about users whenever they interact with our website. This data is collected automatically and may include the browser name, the type of computer or device, internet service providers, IP addresses, geographical region, and technical information regarding the user's means of connection to our site.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:bar-chart.svg\" alt=\"Information Collection Sticker\">\n        </div>\n\n        <h2 class=\"section-heading\">3. Web Browser Cookies</h2>\n        <p class=\"about-text\">\n            Our website uses \"cookies\" to enhance the user experience, analyze site traffic, and optimize our directory structure. A cookie is a small text file placed on a user's hard drive for record-keeping purposes and to track non-personal information. Users may choose to set their web browser to refuse cookies or to alert them when cookies are being sent. Please note that if cookies are disabled, some parts of the site may not function properly.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:cookie.svg\" alt=\"Web Browser Cookies Sticker\">\n        </div>\n\n        <h2 class=\"section-heading\">4. Third-Party Services</h2>\n        <p class=\"about-text\">\n            To maintain and support our directory, we may work with standard third-party services for analytics and content delivery. These partners may utilize cookies or similar technologies to provide relevant information and promotions based on your interactions with our site and other websites. You retain full control over your cookie preferences and can adjust, manage, or disable them at any time through your web browser settings or standard network opt-out pages.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:handshake.svg\" alt=\"Third-Party Services Sticker\">\n        </div>\n\n        <h2 class=\"section-heading\">5. Secure External Links and Third-Party Applications</h2>\n        <p class=\"about-text\">\n            RummyDex is an informational bridge. We do not host APKs or software files directly on our servers. Instead, we provide safe, correct links to external, third-party software developers through a secure, carefully verified process to ensure users are directed appropriately. When you click on a link and navigate to a third-party application, you are leaving our jurisdiction. We do not control the content, privacy practices, or data collection policies of these external destinations. Interaction with any other website or application is subject to that entity's own terms and policies.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:globe-with-meridians.svg\" alt=\"External Links Sticker\">\n        </div>\n\n        <h2 class=\"section-heading\">6. Data Security</h2>\n        <p class=\"about-text\">\n            We adopt appropriate data collection, storage, and processing practices, alongside strict security measures, to protect against unauthorized access, alteration, disclosure, or destruction of your non-personal information and data stored on our site. However, no data transmission over the internet or wireless network can be guaranteed to be 100% secure.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:locked.svg\" alt=\"Data Security Sticker\">\n        </div>\n\n        <h2 class=\"section-heading\">7. Acceptance of These Terms</h2>\n        <p class=\"about-text\">\n            By using RummyDex, you signify your acceptance of this Privacy Policy. If you do not agree to this policy, please do not use our site. We reserve the right to update or modify this Privacy Policy at any time. Continued use of the site following the posting of changes to this policy will be deemed your acceptance of those changes.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:balance-scale.svg\" alt=\"Acceptance of Terms Sticker\">\n        </div>\n    </div>\n\n</body>\n</html>",
  "animations_enabled": true,
  "meta_description": "Step into the world of Rummy - compete, challenge friends, and rise to the top on RummyApp Online!",
  "support_email": "support@rummydex.com",
  "ethics_heading": "ETHNICS",
  "helpline_telegram": "https://t.me",
  "hero_title_subtitle": "C",
  "important_notice_heading": "VERY IMPORTANT NOTICE ",
  "categories": [
    "Yono",
    "Card",
    "Slots"
  ],
  "trending_searches": [],
  "banners": [],
  "secure_index_subtitle": "The Ultimate Registry for Strategic Card Simulation, Arcade Logic, and Premium Virtual Gameplay Guides",
  "responsibility_content": "<!-- ",
  "ethics_discrimination_text": "<div ",
  "portal_heading": "IMPORTANT NOTICE ",
  "hero_title_text": "R",
  "secure_index_title": "RummyApp Online ",
  "favicon_url": "https://y4q7avawns.ucarecd.net/b391a2fa-42f7-4b3a-a0d5-605cb22aead4/-/preview/1000x1000/"
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
