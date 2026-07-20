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
    "og_image_url": "",
    "file_size": "45",
    "custom_admin_box_heading": "",
    "is_coming_soon": false,
    "serial_number": 2,
    "screenshots": [],
    "target_region": "",
    "is_new": true,
    "yellow_box_msg": "",
    "version": "2.0.6",
    "custom_admin_box_html": "",
    "canonical_url": "",
    "created_at": "2026-05-19T12:43:59.040Z",
    "safety_status": "Verified",
    "rating": 5,
    "id": "q82dbbwh4",
    "release_notes": "",
    "video_url": "",
    "idea_box_msg": "",
    "is_hot": false,
    "name": "SPIN CRUSH ",
    "seo_keywords": "",
    "developer": "Bingo ",
    "link_configured": true,
    "faqs": [],
    "description_html": "<p>A new application.</p>",
    "is_top_chart": true,
    "slug": "spin-crush-",
    "seo_title": "",
    "red_box_msg": "",
    "features_html": "",
    "category": "Yono, All App",
    "seo_description": "",
    "icon_url": "https://res.cloudinary.com/dq34n0ncz/image/upload/f_auto,q_auto/1000119573_wzwse4",
    "is_featured": false
  },
  {
    "rating": 3.4,
    "safety_status": "Verified",
    "video_url": "",
    "release_notes": "",
    "id": "31og4l26i",
    "target_region": "",
    "is_new": false,
    "screenshots": [],
    "serial_number": 3,
    "is_coming_soon": false,
    "custom_admin_box_heading": "",
    "file_size": "56",
    "og_image_url": "",
    "created_at": "2026-05-19T19:04:26.373Z",
    "canonical_url": "",
    "custom_admin_box_html": "",
    "version": "1.20.1",
    "yellow_box_msg": "",
    "seo_title": "",
    "slug": "yono-arcade",
    "is_featured": false,
    "icon_url": "https://13eehe59cj.ucarecd.net/67a16d31-6771-4617-b88b-288db51d321d/-/preview/554x554/",
    "seo_description": "",
    "category": "Yono, All App",
    "features_html": "",
    "red_box_msg": "",
    "link_configured": false,
    "seo_keywords": "",
    "developer": "Arcade ",
    "name": "YONO ARCADE",
    "is_hot": false,
    "idea_box_msg": "",
    "description_html": "<p>A new application.</p>",
    "faqs": []
  },
  {
    "safety_status": "Verified",
    "rating": 4.8,
    "id": "s5u553ymi",
    "video_url": "",
    "release_notes": "",
    "og_image_url": "",
    "file_size": "56",
    "serial_number": 3,
    "custom_admin_box_heading": "",
    "is_coming_soon": false,
    "target_region": "",
    "is_new": true,
    "screenshots": [],
    "yellow_box_msg": "",
    "custom_admin_box_html": "",
    "version": "1.20.1",
    "created_at": "2026-05-19T19:23:07.133Z",
    "canonical_url": "",
    "slug": "jaiho-91",
    "seo_title": "",
    "red_box_msg": "",
    "seo_description": "",
    "features_html": "",
    "category": "Yono, All App",
    "is_featured": false,
    "icon_url": "https://res.cloudinary.com/dyigysy26/image/upload/f_auto,q_auto/1000119609_fkc9fm",
    "idea_box_msg": "",
    "name": "JAIHO 91",
    "link_configured": true,
    "developer": "Jaiho",
    "seo_keywords": "",
    "faqs": [],
    "description_html": "<p>A new application.</p>"
  },
  {
    "is_featured": false,
    "icon_url": "https://13eehe59cj.ucarecd.net/d3f6486a-b216-4582-b15d-0c735ff6b08f/-/preview/554x554/",
    "seo_description": "",
    "features_html": "",
    "category": "Yono, All App",
    "red_box_msg": "",
    "seo_title": "",
    "slug": "bingo-101",
    "description_html": "<p>A new application.</p>",
    "faqs": [],
    "link_configured": true,
    "seo_keywords": "",
    "developer": "Bingo",
    "name": "BINGO 101",
    "idea_box_msg": "",
    "video_url": "",
    "release_notes": "",
    "id": "awus3qajs",
    "rating": 3.6,
    "safety_status": "Verified",
    "created_at": "2026-05-20T03:09:33.880Z",
    "canonical_url": "",
    "custom_admin_box_html": "",
    "version": "2.5V",
    "yellow_box_msg": "",
    "is_new": false,
    "target_region": "",
    "screenshots": [],
    "serial_number": 5,
    "custom_admin_box_heading": "",
    "is_coming_soon": false,
    "file_size": "71",
    "og_image_url": ""
  },
  {
    "faqs": [],
    "description_html": "<p>A new application.</p>",
    "name": "OK RUMMY",
    "idea_box_msg": "",
    "link_configured": true,
    "seo_keywords": "",
    "developer": "Bingo ",
    "seo_description": "",
    "features_html": "",
    "category": "Yono, All App",
    "red_box_msg": "",
    "is_featured": false,
    "icon_url": "https://13eehe59cj.ucarecd.net/97512d34-f561-4ede-8517-2112440079eb/-/preview/554x554/",
    "slug": "ok-rummy",
    "seo_title": "",
    "custom_admin_box_html": "",
    "version": "8.3.06.",
    "yellow_box_msg": "",
    "created_at": "2026-05-20T03:50:33.674Z",
    "canonical_url": "",
    "file_size": "67",
    "og_image_url": "",
    "target_region": "",
    "is_new": false,
    "screenshots": [],
    "serial_number": 6,
    "custom_admin_box_heading": "",
    "is_coming_soon": false,
    "id": "0uiuuhdrj",
    "video_url": "",
    "release_notes": "",
    "safety_status": "Verified",
    "rating": 3
  },
  {
    "seo_title": "",
    "slug": "jaiho-slots",
    "is_featured": false,
    "icon_url": "https://13eehe59cj.ucarecd.net/2dfe5d55-7896-4f96-8f2b-132190e44f6f/-/preview/540x540/",
    "seo_description": "",
    "category": "Yono, All App",
    "features_html": "",
    "red_box_msg": "",
    "link_configured": true,
    "seo_keywords": "",
    "developer": "Jaiho",
    "name": "JAIHO SLOTS",
    "idea_box_msg": "",
    "description_html": "<p>A new application.</p>",
    "faqs": [],
    "rating": 4.9,
    "safety_status": "Verified",
    "video_url": "",
    "release_notes": "",
    "id": "4yt0f4yd0",
    "target_region": "",
    "is_new": false,
    "screenshots": [],
    "serial_number": 7,
    "custom_admin_box_heading": "",
    "is_coming_soon": false,
    "file_size": "70",
    "og_image_url": "",
    "created_at": "2026-05-20T03:53:24.482Z",
    "canonical_url": "",
    "custom_admin_box_html": "",
    "version": "4.3",
    "yellow_box_msg": ""
  },
  {
    "idea_box_msg": "",
    "name": "BOSS RUMMY",
    "link_configured": true,
    "seo_keywords": "",
    "developer": "Arcade ",
    "faqs": [],
    "description_html": "<p>A new application.</p>",
    "slug": "boss-rummy",
    "seo_title": "",
    "red_box_msg": "",
    "seo_description": "",
    "features_html": "",
    "category": "Yono, All App",
    "is_featured": false,
    "icon_url": "https://13eehe59cj.ucarecd.net/b5e9d896-71e8-49d6-b091-a971871161e0/-/preview/1000x1000/",
    "og_image_url": "",
    "file_size": "54",
    "serial_number": 8,
    "custom_admin_box_heading": "",
    "is_coming_soon": false,
    "is_new": false,
    "target_region": "",
    "screenshots": [],
    "yellow_box_msg": "",
    "custom_admin_box_html": "",
    "version": "2.5V",
    "created_at": "2026-05-20T03:56:42.075Z",
    "canonical_url": "",
    "safety_status": "Verified",
    "rating": 4.1,
    "id": "9r044fyi0",
    "video_url": "",
    "release_notes": ""
  },
  {
    "yellow_box_msg": "",
    "custom_admin_box_html": "",
    "version": "2.0.6",
    "created_at": "2026-05-20T04:01:04.611Z",
    "canonical_url": "",
    "og_image_url": "",
    "file_size": "79",
    "serial_number": 9,
    "is_coming_soon": false,
    "custom_admin_box_heading": "",
    "target_region": "",
    "is_new": false,
    "screenshots": [],
    "id": "5b7fj0cq7",
    "video_url": "",
    "release_notes": "",
    "safety_status": "Verified",
    "rating": 4.9,
    "faqs": [],
    "description_html": "<p>A new application.</p>",
    "idea_box_msg": "",
    "name": "RUMMY 91",
    "link_configured": true,
    "developer": "Addi",
    "seo_keywords": "",
    "red_box_msg": "",
    "seo_description": "",
    "features_html": "",
    "category": "All App",
    "is_featured": false,
    "icon_url": "https://13eehe59cj.ucarecd.net/393c07ea-4f5e-43a9-ab0c-e12dfe7d755a/-/preview/474x474/",
    "slug": "rummy-91",
    "seo_title": ""
  },
  {
    "slug": "gogo-rummy-",
    "seo_title": "",
    "red_box_msg": "",
    "seo_description": "",
    "category": "Yono, All App",
    "features_html": "",
    "is_featured": false,
    "icon_url": "https://13eehe59cj.ucarecd.net/0d710f11-2c9d-4312-89de-be65ce21a4fe/-/preview/750x750/",
    "idea_box_msg": "",
    "name": "GOGO RUMMY ",
    "link_configured": true,
    "seo_keywords": "",
    "developer": "Sk varba",
    "faqs": [],
    "description_html": "<p>A new application.</p>",
    "safety_status": "Verified",
    "rating": 3.9,
    "id": "ieam3hkbq",
    "video_url": "",
    "release_notes": "",
    "og_image_url": "",
    "file_size": "65",
    "serial_number": 10,
    "is_coming_soon": false,
    "custom_admin_box_heading": "",
    "target_region": "",
    "is_new": false,
    "screenshots": [],
    "yellow_box_msg": "",
    "custom_admin_box_html": "",
    "version": "5.0",
    "created_at": "2026-05-20T06:58:27.643Z",
    "canonical_url": ""
  },
  {
    "safety_status": "Verified",
    "rating": 4.6,
    "id": "5j5b7qbrw",
    "video_url": "",
    "release_notes": "",
    "og_image_url": "",
    "file_size": "75",
    "serial_number": 11,
    "custom_admin_box_heading": "",
    "is_coming_soon": false,
    "target_region": "",
    "is_new": false,
    "screenshots": [],
    "yellow_box_msg": "",
    "custom_admin_box_html": "",
    "version": "1.8",
    "created_at": "2026-05-20T08:02:40.971Z",
    "canonical_url": "",
    "slug": "club-inr",
    "seo_title": "",
    "red_box_msg": "",
    "seo_description": "",
    "features_html": "",
    "category": "Yono, All App",
    "is_featured": false,
    "icon_url": "https://13eehe59cj.ucarecd.net/3059d25d-1497-4cff-aead-68758187fe0b/-/preview/554x554/",
    "idea_box_msg": "",
    "name": "CLUB INR",
    "link_configured": true,
    "developer": "S.A vejay",
    "seo_keywords": "",
    "faqs": [],
    "description_html": "<p>A new application.</p>"
  },
  {
    "safety_status": "Verified",
    "rating": 3.9,
    "id": "f4ktp4dfi",
    "release_notes": "",
    "video_url": "",
    "og_image_url": "",
    "file_size": "61",
    "is_coming_soon": false,
    "custom_admin_box_heading": "",
    "serial_number": 12,
    "screenshots": [],
    "target_region": "",
    "is_new": false,
    "yellow_box_msg": "",
    "version": "1.8",
    "custom_admin_box_html": "",
    "canonical_url": "",
    "created_at": "2026-05-26T07:04:36.330Z",
    "slug": "abc-rummy-",
    "seo_title": "",
    "red_box_msg": "",
    "features_html": "",
    "category": "Yono, All App",
    "seo_description": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/f7108631-b74a-49e5-8abf-37cec6950f7c/-/preview/512x512/",
    "is_featured": false,
    "idea_box_msg": "",
    "name": "ABC Rummy ",
    "seo_keywords": "",
    "developer": "Addi",
    "link_configured": true,
    "faqs": [],
    "description_html": "<p>A new application.</p>"
  },
  {
    "seo_title": "",
    "slug": "777-rummy",
    "is_featured": false,
    "icon_url": "https://13eehe59cj.ucarecd.net/fb951184-b849-4ff0-8882-a4d826508fb7/-/preview/190x190/",
    "seo_description": "",
    "category": "Yono, All App",
    "features_html": "",
    "red_box_msg": "",
    "link_configured": true,
    "developer": "AB Arora",
    "seo_keywords": "",
    "name": "777.Rummy",
    "idea_box_msg": "",
    "description_html": "<p>A new application.</p>",
    "faqs": [],
    "rating": 5,
    "safety_status": "Verified",
    "video_url": "",
    "release_notes": "",
    "id": "4w1yxs6mm",
    "is_new": false,
    "target_region": "",
    "screenshots": [],
    "serial_number": 13,
    "custom_admin_box_heading": "",
    "is_coming_soon": false,
    "file_size": "54",
    "og_image_url": "",
    "created_at": "2026-05-26T07:09:01.068Z",
    "canonical_url": "",
    "custom_admin_box_html": "",
    "version": "1.6",
    "yellow_box_msg": ""
  },
  {
    "release_notes": "",
    "video_url": "",
    "id": "w1sttlwv7",
    "rating": 4,
    "safety_status": "Verified",
    "canonical_url": "",
    "created_at": "2026-05-26T07:12:55.821Z",
    "version": "1.8",
    "custom_admin_box_html": "",
    "yellow_box_msg": "",
    "screenshots": [],
    "is_new": false,
    "target_region": "",
    "custom_admin_box_heading": "",
    "is_coming_soon": false,
    "serial_number": 14,
    "file_size": "59",
    "og_image_url": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/74347710-3cb2-468c-98eb-5666a0af487c/-/preview/190x190/",
    "is_featured": false,
    "features_html": "",
    "category": "Yono, All App",
    "seo_description": "",
    "red_box_msg": "",
    "seo_title": "",
    "slug": "ever-777",
    "description_html": "<p>A new application.</p>",
    "faqs": [],
    "seo_keywords": "",
    "developer": "AZ ever",
    "link_configured": true,
    "name": "EVER 777",
    "idea_box_msg": ""
  },
  {
    "icon_url": "https://13eehe59cj.ucarecd.net/4b2bd57d-9855-40a8-b452-34edee84ed09/-/preview/190x190/",
    "is_featured": false,
    "category": "Yono, All App",
    "features_html": "",
    "seo_description": "",
    "red_box_msg": "",
    "seo_title": "",
    "slug": "game-rummy",
    "description_html": "<p>A new application.</p>",
    "faqs": [],
    "seo_keywords": "",
    "developer": "Raj dav",
    "link_configured": true,
    "name": "Game Rummy",
    "idea_box_msg": "",
    "release_notes": "",
    "video_url": "",
    "id": "dp2lcn2ae",
    "rating": 4,
    "safety_status": "Verified",
    "canonical_url": "",
    "created_at": "2026-05-26T07:16:08.600Z",
    "version": "2.0",
    "custom_admin_box_html": "",
    "yellow_box_msg": "",
    "screenshots": [],
    "is_new": false,
    "target_region": "",
    "custom_admin_box_heading": "",
    "is_coming_soon": false,
    "serial_number": 15,
    "file_size": "75",
    "og_image_url": ""
  },
  {
    "created_at": "2026-05-26T07:18:29.456Z",
    "canonical_url": "",
    "yellow_box_msg": "",
    "custom_admin_box_html": "",
    "version": "1.9",
    "serial_number": 16,
    "custom_admin_box_heading": "",
    "is_coming_soon": false,
    "target_region": "",
    "is_new": false,
    "screenshots": [],
    "og_image_url": "",
    "file_size": "54",
    "video_url": "",
    "release_notes": "",
    "id": "4lgypb90h",
    "rating": 4.1,
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "faqs": [],
    "link_configured": true,
    "developer": "Addi",
    "seo_keywords": "",
    "idea_box_msg": "",
    "name": "Hi Rummy ",
    "is_featured": false,
    "icon_url": "https://13eehe59cj.ucarecd.net/c01e9676-e748-4342-9ac7-e972030981fc/-/preview/190x190/",
    "red_box_msg": "",
    "seo_description": "",
    "features_html": "",
    "category": "Yono, All App",
    "seo_title": "",
    "slug": "hi-rummy-"
  },
  {
    "slug": "inr-rummy",
    "seo_title": "",
    "seo_description": "",
    "category": "Yono, All App",
    "features_html": "",
    "red_box_msg": "",
    "is_featured": false,
    "icon_url": "https://13eehe59cj.ucarecd.net/2a718650-0602-495f-9ca4-b13c86e58c02/-/preview/190x190/",
    "name": "INR Rummy",
    "is_hot": false,
    "idea_box_msg": "",
    "link_configured": true,
    "developer": "Arcade ",
    "seo_keywords": "",
    "faqs": [],
    "description_html": "<p>A new application.</p>",
    "safety_status": "Verified",
    "rating": 5,
    "id": "2f90a87hv",
    "video_url": "",
    "release_notes": "",
    "file_size": "79",
    "og_image_url": "",
    "target_region": "",
    "is_new": false,
    "screenshots": [],
    "serial_number": 17,
    "custom_admin_box_heading": "",
    "is_coming_soon": false,
    "custom_admin_box_html": "",
    "version": "3.0",
    "yellow_box_msg": "",
    "created_at": "2026-05-26T07:21:55.085Z",
    "canonical_url": ""
  },
  {
    "safety_status": "Verified",
    "rating": 3.9,
    "id": "9a05609sb",
    "video_url": "",
    "release_notes": "",
    "file_size": "2.4",
    "og_image_url": "",
    "is_new": false,
    "target_region": "",
    "screenshots": [],
    "serial_number": 18,
    "custom_admin_box_heading": "",
    "is_coming_soon": false,
    "custom_admin_box_html": "",
    "version": "2.1",
    "yellow_box_msg": "",
    "created_at": "2026-05-26T07:26:42.606Z",
    "canonical_url": "",
    "slug": "jaiho-rummy-",
    "seo_title": "",
    "seo_description": "",
    "category": "Yono, All App",
    "features_html": "",
    "red_box_msg": "",
    "is_featured": false,
    "icon_url": "https://13eehe59cj.ucarecd.net/c693366d-d543-4d76-84ba-3963a3f3c792/-/preview/190x190/",
    "name": "JAIHO RUMMY ",
    "idea_box_msg": "",
    "link_configured": true,
    "seo_keywords": "",
    "developer": "PW sahar",
    "faqs": [],
    "description_html": "<p>A new application.</p>"
  },
  {
    "category": "Yono, All App",
    "features_html": "",
    "seo_description": "",
    "red_box_msg": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/cf0b4466-3d5b-4eb5-bc88-afc9a8213ac4/-/preview/190x190/",
    "is_featured": false,
    "slug": "love-rummy",
    "seo_title": "",
    "faqs": [],
    "description_html": "<p>A new application.</p>",
    "name": "Love Rummy",
    "idea_box_msg": "",
    "developer": "Mak job",
    "seo_keywords": "",
    "link_configured": true,
    "id": "l7a60keix",
    "release_notes": "",
    "video_url": "",
    "safety_status": "Verified",
    "rating": 4.2,
    "version": "1.6",
    "custom_admin_box_html": "",
    "yellow_box_msg": "",
    "canonical_url": "",
    "created_at": "2026-05-26T07:31:59.173Z",
    "file_size": "68",
    "og_image_url": "",
    "screenshots": [],
    "is_new": false,
    "target_region": "",
    "custom_admin_box_heading": "",
    "is_coming_soon": false,
    "serial_number": 19
  },
  {
    "yellow_box_msg": "",
    "version": "1.8",
    "custom_admin_box_html": "",
    "canonical_url": "",
    "created_at": "2026-05-26T07:34:35.782Z",
    "og_image_url": "",
    "file_size": "50",
    "is_coming_soon": false,
    "custom_admin_box_heading": "",
    "serial_number": 20,
    "screenshots": [],
    "is_new": false,
    "target_region": "",
    "id": "4paka7kie",
    "release_notes": "",
    "video_url": "",
    "safety_status": "Verified",
    "rating": 5,
    "faqs": [],
    "description_html": "<p>A new application.</p>",
    "idea_box_msg": "",
    "name": "JOY RUMMY",
    "seo_keywords": "",
    "developer": "AB Arora",
    "link_configured": false,
    "red_box_msg": "",
    "features_html": "",
    "category": "Yono, All App",
    "seo_description": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/e0898894-5d5b-47ab-a14f-13b4514b3b4f/-/preview/190x190/",
    "is_featured": false,
    "slug": "joy-rummy",
    "seo_title": ""
  },
  {
    "is_new": false,
    "target_region": "",
    "screenshots": [],
    "serial_number": 21,
    "is_coming_soon": false,
    "custom_admin_box_heading": "",
    "file_size": "70",
    "og_image_url": "",
    "created_at": "2026-05-26T07:37:07.122Z",
    "canonical_url": "",
    "custom_admin_box_html": "",
    "version": "1.0",
    "yellow_box_msg": "",
    "rating": 4,
    "safety_status": "Verified",
    "video_url": "",
    "release_notes": "",
    "id": "2768ohu2a",
    "link_configured": true,
    "seo_keywords": "",
    "developer": "AZ ever",
    "name": "MAHA GAMES",
    "idea_box_msg": "",
    "description_html": "<p>A new application.</p>",
    "faqs": [],
    "seo_title": "",
    "slug": "maha-games",
    "is_featured": false,
    "icon_url": "https://13eehe59cj.ucarecd.net/2d664adc-3e1f-4317-805c-dea453f52389/-/preview/190x190/",
    "seo_description": "",
    "category": "Yono, All App",
    "features_html": "",
    "red_box_msg": ""
  },
  {
    "seo_keywords": "",
    "developer": "AZ ever",
    "link_configured": true,
    "name": "Rummy Ludo",
    "idea_box_msg": "",
    "description_html": "<p>A new application.</p>",
    "faqs": [],
    "seo_title": "",
    "slug": "rummy-ludo",
    "icon_url": "https://13eehe59cj.ucarecd.net/6aa28ca8-cef1-4d1a-b054-13e242eaef02/-/preview/190x190/",
    "is_featured": false,
    "features_html": "",
    "category": "Yono, All App",
    "seo_description": "",
    "red_box_msg": "",
    "screenshots": [],
    "is_new": false,
    "target_region": "",
    "custom_admin_box_heading": "",
    "is_coming_soon": false,
    "serial_number": 22,
    "file_size": "58",
    "og_image_url": "",
    "canonical_url": "",
    "created_at": "2026-05-26T07:39:44.282Z",
    "version": "5.8",
    "custom_admin_box_html": "",
    "yellow_box_msg": "",
    "rating": 3.9,
    "safety_status": "Verified",
    "release_notes": "",
    "video_url": "",
    "id": "us5xuk5bm"
  },
  {
    "yellow_box_msg": "",
    "version": "2.0.6",
    "custom_admin_box_html": "",
    "canonical_url": "",
    "created_at": "2026-05-26T07:42:24.615Z",
    "og_image_url": "",
    "file_size": "45",
    "is_coming_soon": false,
    "custom_admin_box_heading": "",
    "serial_number": 23,
    "screenshots": [],
    "is_new": false,
    "target_region": "",
    "id": "69x1lstq7",
    "release_notes": "",
    "video_url": "",
    "safety_status": "Verified",
    "rating": 3.9,
    "faqs": [],
    "description_html": "<p>A new application.</p>",
    "idea_box_msg": "",
    "name": "Rummy 77",
    "developer": "Arcade ",
    "seo_keywords": "",
    "link_configured": true,
    "red_box_msg": "",
    "category": "Yono, All App",
    "features_html": "",
    "seo_description": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/d17abcfc-c8dc-4c36-8558-e3408002d37e/-/preview/190x190/",
    "is_featured": false,
    "slug": "rummy-77",
    "seo_title": ""
  },
  {
    "is_new": false,
    "target_region": "",
    "screenshots": [],
    "serial_number": 24,
    "custom_admin_box_heading": "",
    "is_coming_soon": false,
    "file_size": "58",
    "og_image_url": "",
    "created_at": "2026-05-26T07:44:32.442Z",
    "canonical_url": "",
    "custom_admin_box_html": "",
    "version": "1.8",
    "yellow_box_msg": "",
    "rating": 4,
    "safety_status": "Verified",
    "video_url": "",
    "release_notes": "",
    "id": "j79n2g3l9",
    "link_configured": false,
    "developer": "AB Arora",
    "seo_keywords": "",
    "name": "Share Slots",
    "idea_box_msg": "",
    "description_html": "<p>A new application.</p>",
    "faqs": [],
    "seo_title": "",
    "slug": "share-slots",
    "is_featured": false,
    "icon_url": "https://13eehe59cj.ucarecd.net/2738be7d-f198-4f70-a7d8-c8eb5f452eb0/-/preview/190x190/",
    "seo_description": "",
    "category": "Yono, All App",
    "features_html": "",
    "red_box_msg": ""
  },
  {
    "slug": "567-slots",
    "seo_title": "",
    "red_box_msg": "",
    "features_html": "",
    "category": "Yono, All App",
    "seo_description": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/e4314d5e-eb77-46b9-8998-8e0f94970b38/-/preview/72x72/",
    "is_featured": false,
    "idea_box_msg": "",
    "name": "567 SLOTS",
    "seo_keywords": "",
    "developer": "Tania JK ",
    "link_configured": true,
    "faqs": [],
    "description_html": "<p>A new application.</p>",
    "safety_status": "Verified",
    "rating": 3.5,
    "id": "n3w2vjk0b",
    "release_notes": "",
    "video_url": "",
    "og_image_url": "",
    "file_size": "65",
    "custom_admin_box_heading": "",
    "is_coming_soon": false,
    "serial_number": 26,
    "screenshots": [],
    "is_new": false,
    "target_region": "",
    "yellow_box_msg": "",
    "version": "1.6",
    "custom_admin_box_html": "",
    "canonical_url": "",
    "created_at": "2026-05-26T07:51:47.637Z"
  },
  {
    "custom_admin_box_html": "",
    "version": "1.9",
    "yellow_box_msg": "",
    "created_at": "2026-05-26T07:56:30.478Z",
    "canonical_url": "",
    "file_size": "Tanu WD",
    "og_image_url": "",
    "target_region": "",
    "is_new": false,
    "screenshots": [],
    "serial_number": 27,
    "custom_admin_box_heading": "",
    "is_coming_soon": false,
    "id": "owxg4aekg",
    "video_url": "",
    "release_notes": "",
    "safety_status": "Verified",
    "rating": 2.9,
    "faqs": [],
    "description_html": "<p>A new application.</p>",
    "name": "789Jackpots",
    "idea_box_msg": "",
    "link_configured": true,
    "seo_keywords": "",
    "developer": "Admin",
    "seo_description": "",
    "features_html": "",
    "category": "Yono, All App",
    "red_box_msg": "",
    "is_featured": false,
    "icon_url": "https://13eehe59cj.ucarecd.net/a0cedc36-33b0-4e75-a1ea-cd963b3ee0ca/-/preview/190x190/",
    "slug": "789jackpots",
    "seo_title": ""
  },
  {
    "faqs": [],
    "description_html": "<p>A new application.</p>",
    "name": "YONO VIP",
    "idea_box_msg": "",
    "link_configured": true,
    "seo_keywords": "",
    "developer": "Rahul HL",
    "seo_description": "",
    "category": "Yono, All App",
    "features_html": "",
    "red_box_msg": "",
    "is_featured": false,
    "icon_url": "https://13eehe59cj.ucarecd.net/d9226164-7447-425e-ba61-618d72ed28df/-/preview/190x190/",
    "slug": "yono-vip",
    "seo_title": "",
    "custom_admin_box_html": "",
    "version": "1.8",
    "yellow_box_msg": "",
    "created_at": "2026-05-26T08:00:01.636Z",
    "canonical_url": "",
    "file_size": "78",
    "og_image_url": "",
    "target_region": "",
    "is_new": false,
    "screenshots": [],
    "serial_number": 28,
    "is_coming_soon": false,
    "custom_admin_box_heading": "",
    "id": "fw5wsziec",
    "video_url": "",
    "release_notes": "",
    "safety_status": "Verified",
    "rating": 4
  },
  {
    "id": "t1ocq5iar",
    "release_notes": "",
    "video_url": "",
    "safety_status": "Verified",
    "rating": 4.2,
    "version": "3",
    "custom_admin_box_html": "",
    "yellow_box_msg": "",
    "canonical_url": "",
    "created_at": "2026-06-03T10:17:01.058Z",
    "publish_date": "2026-06-10T12:00:00.000Z",
    "file_size": "90",
    "og_image_url": "",
    "screenshots": [],
    "target_region": "",
    "is_new": true,
    "custom_admin_box_heading": "",
    "is_coming_soon": true,
    "serial_number": 34,
    "category": "Card",
    "features_html": "",
    "seo_description": "",
    "red_box_msg": "",
    "icon_url": "https://kk19a1nwwx.ucarecd.net/091fdebe-1562-41c6-99ea-b60665adb5ee/-/preview/512x512/",
    "is_featured": false,
    "slug": "teen-patti-octro",
    "seo_title": "",
    "faqs": [],
    "description_html": "<p>A new application.</p>",
    "name": "Teen Patti Octro",
    "idea_box_msg": "",
    "seo_keywords": "",
    "developer": "Unknown ",
    "link_configured": true
  },
  {
    "description_html": "<p>A new application.</p>",
    "faqs": [],
    "link_configured": true,
    "seo_keywords": "",
    "developer": "Admin",
    "idea_box_msg": "",
    "name": "Zynga Poker- Texas Holdem Game",
    "is_featured": false,
    "icon_url": "https://kk19a1nwwx.ucarecd.net/5b72cf8f-4959-426e-9e1d-8e2150529efb/-/preview/240x240/",
    "red_box_msg": "",
    "seo_description": "",
    "category": "Card",
    "features_html": "",
    "seo_title": "",
    "slug": "zynga-poker-texas-holdem-game",
    "created_at": "2026-06-03T10:30:01.393Z",
    "canonical_url": "",
    "yellow_box_msg": "",
    "custom_admin_box_html": "",
    "version": "1.0",
    "serial_number": 29,
    "is_coming_soon": true,
    "custom_admin_box_heading": "",
    "is_new": false,
    "target_region": "",
    "screenshots": [],
    "og_image_url": "",
    "file_size": "Unknown",
    "video_url": "",
    "release_notes": "",
    "id": "rrmv44n9n",
    "rating": 5,
    "safety_status": "Verified"
  },
  {
    "created_at": "2026-06-07T10:14:11.138Z",
    "canonical_url": "",
    "custom_admin_box_html": null,
    "version": "1.0",
    "yellow_box_msg": null,
    "target_region": "",
    "is_new": true,
    "screenshots": [],
    "serial_number": 30,
    "custom_admin_box_heading": null,
    "is_coming_soon": true,
    "file_size": "Unknown",
    "og_image_url": "",
    "release_notes": "",
    "id": "wf59smk6l",
    "rating": 5,
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "faqs": [],
    "link_configured": true,
    "developer": "Admin",
    "seo_keywords": "",
    "name": "UNO! ",
    "idea_box_msg": null,
    "is_featured": false,
    "icon_url": "https://1ewg1yyass.ucarecd.net/c0172402-c854-4016-876e-6b7769547c8f/-/preview/238x211/",
    "seo_description": "",
    "features_html": null,
    "category": "Card",
    "red_box_msg": null,
    "seo_title": "",
    "slug": "uno-"
  },
  {
    "release_notes": "",
    "id": "8epj9jjpu",
    "rating": 5,
    "safety_status": "Verified",
    "canonical_url": "",
    "created_at": "2026-06-07T10:16:45.949Z",
    "yellow_box_msg": "",
    "version": "1.0",
    "custom_admin_box_html": "",
    "custom_admin_box_heading": "",
    "is_coming_soon": true,
    "serial_number": 31,
    "screenshots": [],
    "target_region": "",
    "is_new": false,
    "og_image_url": "",
    "file_size": "Unknown",
    "icon_url": "https://1ewg1yyass.ucarecd.net/33e0d4e8-6e41-4791-9e41-8d915a12e504/-/preview/447x447/",
    "is_featured": false,
    "red_box_msg": "",
    "category": "Card",
    "seo_description": "",
    "seo_title": "",
    "slug": "rummy-gold-with-fast-rummy",
    "description_html": "<p>A new application.</p>",
    "faqs": [],
    "seo_keywords": "",
    "developer": "Admin",
    "link_configured": true,
    "idea_box_msg": "",
    "name": "Rummy GOLD - With Fast Rummy"
  },
  {
    "canonical_url": "",
    "created_at": "2026-06-07T10:19:11.616Z",
    "version": "1.0",
    "custom_admin_box_html": null,
    "yellow_box_msg": null,
    "screenshots": [],
    "target_region": "",
    "is_new": true,
    "custom_admin_box_heading": null,
    "is_coming_soon": true,
    "serial_number": 32,
    "file_size": "Unknown",
    "og_image_url": "",
    "release_notes": "",
    "id": "8jt0hokyo",
    "rating": 5,
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "faqs": [],
    "seo_keywords": "",
    "developer": "Admin",
    "link_configured": true,
    "name": "Indian Rummy 3 Patti Card Game",
    "idea_box_msg": null,
    "icon_url": "https://1ewg1yyass.ucarecd.net/2a4b59ef-16a3-4b14-bad3-1c3796af3492/-/preview/447x447/",
    "is_featured": false,
    "category": "Card",
    "features_html": null,
    "seo_description": "",
    "red_box_msg": null,
    "seo_title": "",
    "slug": "indian-rummy-3-patti-card-game"
  },
  {
    "seo_title": "",
    "slug": "lucky-spin-slots",
    "is_featured": false,
    "icon_url": "https://1ewg1yyass.ucarecd.net/0f918f11-b247-4b5a-9d26-d510dddffbfe/-/preview/447x447/",
    "seo_description": "",
    "features_html": "",
    "category": "Slots",
    "red_box_msg": "",
    "link_configured": true,
    "seo_keywords": "",
    "developer": "Admin",
    "name": "Lucky Spin Slots",
    "idea_box_msg": "",
    "description_html": "<p>A new application.</p>",
    "faqs": [],
    "rating": 5,
    "safety_status": "Verified",
    "release_notes": "",
    "id": "01x9h7nfb",
    "target_region": "",
    "is_new": false,
    "screenshots": [],
    "serial_number": 33,
    "custom_admin_box_heading": "",
    "is_coming_soon": true,
    "file_size": "Unknown",
    "og_image_url": "https://1ewg1yyass.ucarecd.net/0f918f11-b247-4b5a-9d26-d510dddffbfe/-/preview/447x447/",
    "created_at": "2026-06-07T13:13:11.211Z",
    "canonical_url": "",
    "publish_date": "2026-07-08T13:08:00.000Z",
    "custom_admin_box_html": "",
    "version": "1.0",
    "yellow_box_msg": ""
  },
  {
    "seo_title": "",
    "slug": "ind-club",
    "icon_url": "https://1ewg1yyass.ucarecd.net/9d9339e0-77d4-418b-86f8-0a0e074c1d4e/-/preview/190x190/",
    "is_featured": false,
    "features_html": "",
    "category": "Yono",
    "seo_description": "",
    "red_box_msg": "",
    "seo_keywords": "",
    "developer": "AB Arora",
    "link_configured": true,
    "name": "IND Club",
    "idea_box_msg": "",
    "description_html": "<p>A new application.</p>",
    "faqs": [],
    "rating": 4.5,
    "safety_status": "Verified",
    "release_notes": "",
    "video_url": "",
    "id": "3cflt97b5",
    "screenshots": [],
    "is_new": false,
    "target_region": "",
    "is_coming_soon": true,
    "custom_admin_box_heading": "",
    "serial_number": 28,
    "file_size": "76",
    "og_image_url": "",
    "canonical_url": "",
    "created_at": "2026-06-12T12:39:30.407Z",
    "publish_date": "2026-06-12T15:30:00.000Z",
    "version": "1.0",
    "custom_admin_box_html": "",
    "yellow_box_msg": ""
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
  "ticker_text": "LIVE: Unbiased words. Uncompromised truth. RummyApp Online  delivers pure transparency through independent reviews. ✒️",
  "support_email": "support@rummydex.com",
  "important_notice": "<div style=\"font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background: #ffffff; max-width: 100%; margin: 0 auto; padding: 24px 16px; color: #334155; line-height: 1.6; box-sizing: border-box; text-align: left;\">\n\n  <!-- Glowing Top Grid Tracker -->\n  <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 24px;\">\n    <span style=\"background: linear-gradient(135deg, #e0f2fe, #e0e7ff); color: #0284c7; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; padding: 6px 14px; border-radius: 20px; border: 1px solid #bae6fd; box-shadow: 0px 4px 15px rgba(14, 165, 233, 0.2);\">\n      ✦ ANALYTICAL GATEWAY // USER VERIFICATION\n    </span>\n    <div style=\"flex-grow: 1; height: 1px; background: linear-gradient(to right, #bae6fd, transparent);\"></div>\n  </div>\n\n  <!-- Intro Block with Subtle Radial Glow -->\n  <p style=\"font-size: 15.5px; line-height: 1.7; color: #334155; margin-bottom: 24px; background: linear-gradient(90deg, #f0f9ff 0%, #ffffff 100%); padding: 18px; border-left: 4px solid #0ea5e9; border-radius: 12px; box-shadow: 0 4px 20px rgba(14, 165, 233, 0.06);\">\n    You have entered the <strong style=\"background: linear-gradient(to right, #0ea5e9, #6366f1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: 800; text-shadow: 0 2px 8px rgba(14, 165, 233, 0.1);\">RummyApp Online</strong> analytical hub. To maintain a secure and engaging user ecosystem, our simulated application reviews undergo rigorous, independent auditing focused on graphical fidelity, AI responsiveness, and tactical user-interface mechanics.\n  </p>\n\n  <!-- Glowing Digital Alert Card (Full Mobile Size) -->\n  <div style=\"background: linear-gradient(135deg, #fffbeb 0%, #ffffff 100%); border: 1px solid #fde68a; border-left: 5px solid #d97706; padding: 18px; border-radius: 12px; margin: 24px 0; box-shadow: 0 4px 15px rgba(217, 119, 6, 0.05);\">\n    <div style=\"display: flex; align-items: center; gap: 8px; margin-bottom: 6px;\">\n      <span style=\"font-size: 14px;\">⚠️</span>\n      <strong style=\"color: #78350f; font-size: 15px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;\">Tactical Safety Advisory</strong>\n    </div>\n    <p style=\"margin: 0 0 12px 0; color: #92400e; font-size: 14px; line-height: 1.6;\">\n      We urge all visitors to conduct their own independent research regarding the simulated mechanics and publisher terms of any software evaluated here. While RummyApp Online supplies detailed layout analysis and logic guides, <span style=\"color: #b45309; font-weight: 600;\">monitoring your digital engagement habits and ensuring device security rests solely in your hands.</span>\n    </p>\n    <div style=\"background: #ffffff; padding: 10px 14px; border-radius: 8px; border: 1px dashed #f59e0b; font-size: 13px; color: #78350f; font-weight: 600;\">\n      ℹ️ Distribution Boundary: We operate exclusively as an educational wiki and interface guide. Our infrastructure does not host APK files or facilitate direct installation streams. We strongly advise users to source these simulated apps exclusively through officially authenticated platforms like the Google Play Store.\n    </div>\n  </div>\n\n  <!-- Technical Disclaimer Subtext -->\n  <div style=\"background: #ffffff; border: 1px solid #e2e8f0; padding: 16px; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.01); border-left: 4px solid #94a3b8; margin-bottom: 24px;\">\n    <p style=\"margin: 0; font-size: 13.5px; color: #475569; line-height: 1.6;\">\n      By engaging with our tactical assessments, you acknowledge that our domain is built purely for recreational study, confirm that you meet the age of majority (18+) required for simulated card environments, and agree to adhere strictly to your regional digital compliance statutes.\n    </p>\n  </div>\n\n  <!-- Premium Bottom Guard Text -->\n  <div style=\"border-top: 1px solid #f1f5f9; padding-top: 20px; margin-top: 24px; text-align: center;\">\n    <p style=\"margin: 0; font-size: 12px; background: linear-gradient(to right, #0284c7, #4f46e5); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: 800; letter-spacing: 1px;\">\n      ANALYTICAL GATEWAY SECURED // RUMMYAPP ONLINE ARCHIVE\n    </p>\n  </div>\n\n</div>\n",
  "banners": [],
  "site_title": "RummyDex ",
  "helpline_telegram": "https://t.me",
  "terms_content": "<!-- ",
  "animations_enabled": true,
  "favicon_url": "https://y4q7avawns.ucarecd.net/b391a2fa-42f7-4b3a-a0d5-605cb22aead4/-/preview/1000x1000/",
  "responsibility_content": "<!-- ",
  "social_links": {
    "youtube": "",
    "instagram": "",
    "linkedin": "",
    "facebook": "",
    "twitter": ""
  },
  "seo_keywords": "RummyApp Online, rummyapp.online, rummyapp, rummy app online review, official rummy app online, rummy store application reviews, online gaming facts 2026, gaming blogs india, safe platform gaming, top tier gaming experience, digital entertainment portal, guest play card games, anonymous gaming portal, no login card games, free practice gaming events, Rummy 91 review, Rummy 91 casual app, Rummy 91 game interface, Rummy 91 91k virtual bonus, play Rummy 91 online, Gogo Rummy app, Gogo Rummy game, Gogo Rummy online, Gogo Rummy review, Gogo Rummy features, Gogo Rummy interface, Gogo Rummy guest mode, Club INR app, Club INR game, Club INR online, Club INR play, Club INR review, Club INR features, Club INR guest mode, ABC Rummy app, ABC Rummy game, ABC Rummy online, ABC Rummy review, ABC Rummy features, ABC Rummy guest mode, 777 Rummy app, 777 Rummy online, 777 Rummy play, 777 Rummy review, 777 Rummy features, 777 Rummy guest mode, Ever 777 app, Ever 777 game, Ever 777 online, Ever 777 play, Ever 777 review, Ever 777 features, Game Rummy app, Game Rummy game, Game Rummy online, Game Rummy review, Game Rummy features, Hi Rummy app, Hi Rummy game, Hi Rummy online, Hi Rummy play, Hi Rummy review, Hi Rummy features, INR Rummy app, INR Rummy game, INR Rummy online, INR Rummy play, INR Rummy review, INR Rummy features, Jaiho Rummy app, Jaiho Rummy game, Jaiho Rummy online, Jaiho Rummy play, Jaiho Rummy review, Love Rummy app, Love Rummy game, Love Rummy online, Love Rummy play, Love Rummy review, Joy Rummy app, Joy Rummy game, Joy Rummy online, Joy Rummy play, Joy Rummy review, Maha Games app, Maha Games game, Maha Games online, Maha Games play, Maha Games review, Rummy Lodo app, Rummy Lodo game, Rummy Lodo online, Rummy Lodo play, Rummy Lodo review, Rummy 77 app, Rummy 77 game, Rummy 77 online, Rummy 77 play, Rummy 77 review, Share Slots app, Share Slots game, Share Slots online, Share Slots play, Share Slots review, 567 Slots app, 567 Slots game, 567 Slots online, 567 Slots play, 567 Slots review, 789 Jackpots app, 789 Jackpots game, 789 Jackpots online, 789 Jackpots play, 789 Jackpots review, Yono VIP app, Yono VIP game, Yono VIP online, Yono VIP play, Yono VIP review, yono games alternative, indian rummy variations, 13 card rummy strategy, pure sequence logic, pure sequence guide, joker card casual rules, points rummy logic rules, pool rummy strategy, deals rummy tips, drop point logic rules, advanced rummy tactics, beginner rummy tutorial, real skill rummy simulation, virtual skill rummy portal, smooth card sorting, lag free rummy gaming, digital rummy table, virtual gaming wallet, premium strategy rummy platform, drop rules in rummy, skill based gaming portal, lucky casual slot games, lucky casual spin games, virtual casino hub, video slots gaming, smooth reel animations, lag free slots, digital slot machine, virtual casino wallet, slot multipliers, scatter symbols slots, wild symbols gaming, daily spin reward app, progressive virtual jackpot, mega fortune wheel games, return to player percentage, high skill slot machines, high RTP slots, lucky 7 casino games, cascading reels simulation, expanding wilds interface",
  "contact_content": "<p>Have questions or feedback? We'd love to hear from you. Our team typically responds within 24-48 hours.</p>",
  "hero_title_color": "neon-sky",
  "portal_heading": "IMPORTANT NOTICE ",
  "logo_url": "https://y4q7avaws.ucarecd.net/b391a2fa-42f7-4b3a-a0d5-605cb22aead4/-/preview/1000x1000/",
  "privacy_content": "<!-- SAFE ",
  "disclaimer_text": "<div ",
  "meta_description": "Step into the world of Rummy - compete, challenge friends, and rise to the top on RummyApp Online!",
  "hero_title_subtitle": "COMPREHENSIVE SOCIAL CASUAL E-SPORTS METRICS & UNBIASED INTEGRITY REVIEWS",
  "disclaimer_heading": "DISCLAIMER ",
  "hero_title_style": "mono",
  "secure_index_title": "RummyApp Online ",
  "secure_index_subtitle": "The Ultimate Registry for Strategic Card Simulation, Arcade Logic, and Premium Virtual Gameplay Guides",
  "categories": [
    "Yono",
    "Card",
    "Slots"
  ],
  "ethics_discrimination_text": "<div ",
  "last_updated": "2026-07-18T12:16:42.370Z",
  "helpline_whatsapp": "+918653034735",
  "hero_title_visible": true,
  "hero_title_animation": "slide-up",
  "important_notice_heading": "VERY IMPORTANT NOTICE ",
  "ethics_heading": "ETHNICS",
  "quick_links": [],
  "trending_searches": [],
  "about_content": "<!-- ",
  "website_faqs": [],
  "hero_title_text": "RUMMY STORE GAMING DIRECTORY"
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

export const mockVideos: VideoItem[] = [
  {
    "seo_title": "Rummy ",
    "youtube_url": "https://youtu.be/0uPeAuXIRdQ?si=aP9WFCyYCHKW2z5F",
    "created_at": "2026-05-22T12:22:35.244Z",
    "title": "RummyApp Online ",
    "slug": "",
    "id": "1",
    "seo_description": "",
    "description": "Looking for the best UI SMOOTH experience rummy "
  },
  {
    "seo_description": "",
    "id": "73jeeqtsr",
    "created_at": "2026-05-29T14:26:28.226Z",
    "description": "",
    "slug": "",
    "title": "",
    "youtube_url": "",
    "seo_keywords": "",
    "seo_title": ""
  }
];

export const saveMockVideos = (videos: VideoItem[]) => {
  try {
    localStorage.setItem('rummystore_videos', JSON.stringify(videos));
  } catch (e) {
    console.warn('saveMockVideos storage failed:', e);
  }
  mockVideos.splice(0, mockVideos.length, ...videos);
};
