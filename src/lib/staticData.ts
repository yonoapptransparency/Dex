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
    "created_at": "2026-05-19T12:43:59.040Z",
    "serial_number": 2,
    "is_featured": false,
    "custom_admin_box_heading": "",
    "seo_description": "",
    "developer": "Bingo ",
    "is_top_chart": true,
    "faqs": [],
    "custom_admin_box_html": "",
    "slug": "spin-crush-",
    "seo_keywords": "",
    "version": "2.0.6",
    "category": "Yono, All App",
    "is_new": true,
    "yellow_box_msg": "",
    "canonical_url": "",
    "seo_title": "",
    "screenshots": [],
    "safety_status": "Verified",
    "rating": 5,
    "features_html": "",
    "link_configured": true,
    "file_size": "45",
    "id": "q82dbbwh4",
    "target_region": "",
    "is_hot": false,
    "video_url": "",
    "description_html": "<p>A new application.</p>",
    "is_coming_soon": false,
    "release_notes": "",
    "red_box_msg": "",
    "icon_url": "https://res.cloudinary.com/dq34n0ncz/image/upload/f_auto,q_auto/1000119573_wzwse4",
    "idea_box_msg": "",
    "og_image_url": "",
    "name": "SPIN CRUSH "
  },
  {
    "safety_status": "Verified",
    "features_html": "",
    "rating": 3.4,
    "id": "31og4l26i",
    "file_size": "56",
    "link_configured": false,
    "video_url": "",
    "target_region": "",
    "is_hot": false,
    "idea_box_msg": "",
    "red_box_msg": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/67a16d31-6771-4617-b88b-288db51d321d/-/preview/554x554/",
    "release_notes": "",
    "description_html": "<p>A new application.</p>",
    "is_coming_soon": false,
    "og_image_url": "",
    "name": "YONO ARCADE",
    "created_at": "2026-05-19T19:04:26.373Z",
    "is_featured": false,
    "serial_number": 3,
    "developer": "Arcade ",
    "seo_description": "",
    "custom_admin_box_heading": "",
    "custom_admin_box_html": "",
    "faqs": [],
    "seo_keywords": "",
    "slug": "yono-arcade",
    "category": "Yono, All App",
    "version": "1.20.1",
    "is_new": false,
    "screenshots": [],
    "canonical_url": "",
    "seo_title": "",
    "yellow_box_msg": ""
  },
  {
    "slug": "jaiho-91",
    "seo_keywords": "",
    "version": "1.20.1",
    "category": "Yono, All App",
    "is_new": true,
    "yellow_box_msg": "",
    "screenshots": [],
    "canonical_url": "",
    "seo_title": "",
    "created_at": "2026-05-19T19:23:07.133Z",
    "serial_number": 3,
    "is_featured": false,
    "custom_admin_box_heading": "",
    "developer": "Jaiho",
    "seo_description": "",
    "faqs": [],
    "custom_admin_box_html": "",
    "icon_url": "https://res.cloudinary.com/dyigysy26/image/upload/f_auto,q_auto/1000119609_fkc9fm",
    "red_box_msg": "",
    "release_notes": "",
    "is_coming_soon": false,
    "description_html": "<p>A new application.</p>",
    "idea_box_msg": "",
    "og_image_url": "",
    "name": "JAIHO 91",
    "safety_status": "Verified",
    "rating": 4.8,
    "features_html": "",
    "file_size": "56",
    "link_configured": true,
    "id": "s5u553ymi",
    "target_region": "",
    "video_url": ""
  },
  {
    "og_image_url": "",
    "release_notes": "",
    "red_box_msg": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/d3f6486a-b216-4582-b15d-0c735ff6b08f/-/preview/554x554/",
    "is_coming_soon": false,
    "description_html": "<p>A new application.</p>",
    "idea_box_msg": "",
    "name": "BINGO 101",
    "rating": 3.6,
    "features_html": "",
    "safety_status": "Verified",
    "target_region": "",
    "video_url": "",
    "file_size": "71",
    "link_configured": true,
    "id": "awus3qajs",
    "version": "2.5V",
    "category": "Yono, All App",
    "slug": "bingo-101",
    "seo_keywords": "",
    "yellow_box_msg": "",
    "screenshots": [],
    "canonical_url": "",
    "seo_title": "",
    "is_new": false,
    "serial_number": 5,
    "is_featured": false,
    "created_at": "2026-05-20T03:09:33.880Z",
    "custom_admin_box_html": "",
    "faqs": [],
    "custom_admin_box_heading": "",
    "developer": "Bingo",
    "seo_description": ""
  },
  {
    "is_new": false,
    "yellow_box_msg": "",
    "screenshots": [],
    "seo_title": "",
    "canonical_url": "",
    "slug": "ok-rummy",
    "seo_keywords": "",
    "version": "8.3.06.",
    "category": "Yono, All App",
    "custom_admin_box_heading": "",
    "developer": "Bingo ",
    "seo_description": "",
    "faqs": [],
    "custom_admin_box_html": "",
    "created_at": "2026-05-20T03:50:33.674Z",
    "serial_number": 6,
    "is_featured": false,
    "name": "OK RUMMY",
    "release_notes": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/97512d34-f561-4ede-8517-2112440079eb/-/preview/554x554/",
    "red_box_msg": "",
    "is_coming_soon": false,
    "description_html": "<p>A new application.</p>",
    "idea_box_msg": "",
    "og_image_url": "",
    "link_configured": true,
    "file_size": "67",
    "id": "0uiuuhdrj",
    "target_region": "",
    "video_url": "",
    "safety_status": "Verified",
    "rating": 3,
    "features_html": ""
  },
  {
    "serial_number": 7,
    "is_featured": false,
    "created_at": "2026-05-20T03:53:24.482Z",
    "custom_admin_box_html": "",
    "faqs": [],
    "custom_admin_box_heading": "",
    "developer": "Jaiho",
    "seo_description": "",
    "version": "4.3",
    "category": "Yono, All App",
    "slug": "jaiho-slots",
    "seo_keywords": "",
    "yellow_box_msg": "",
    "screenshots": [],
    "seo_title": "",
    "canonical_url": "",
    "is_new": false,
    "rating": 4.9,
    "features_html": "",
    "safety_status": "Verified",
    "target_region": "",
    "video_url": "",
    "file_size": "70",
    "link_configured": true,
    "id": "4yt0f4yd0",
    "og_image_url": "",
    "release_notes": "",
    "red_box_msg": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/2dfe5d55-7896-4f96-8f2b-132190e44f6f/-/preview/540x540/",
    "is_coming_soon": false,
    "description_html": "<p>A new application.</p>",
    "idea_box_msg": "",
    "name": "JAIHO SLOTS"
  },
  {
    "is_new": false,
    "seo_title": "",
    "canonical_url": "",
    "screenshots": [],
    "yellow_box_msg": "",
    "seo_keywords": "",
    "slug": "boss-rummy",
    "category": "Yono, All App",
    "version": "2.5V",
    "seo_description": "",
    "developer": "Arcade ",
    "custom_admin_box_heading": "",
    "faqs": [],
    "custom_admin_box_html": "",
    "created_at": "2026-05-20T03:56:42.075Z",
    "is_featured": false,
    "serial_number": 8,
    "name": "BOSS RUMMY",
    "idea_box_msg": "",
    "description_html": "<p>A new application.</p>",
    "is_coming_soon": false,
    "icon_url": "https://13eehe59cj.ucarecd.net/b5e9d896-71e8-49d6-b091-a971871161e0/-/preview/1000x1000/",
    "red_box_msg": "",
    "release_notes": "",
    "og_image_url": "",
    "id": "9r044fyi0",
    "file_size": "54",
    "link_configured": true,
    "video_url": "",
    "target_region": "",
    "safety_status": "Verified",
    "features_html": "",
    "rating": 4.1
  },
  {
    "is_new": false,
    "seo_title": "",
    "canonical_url": "",
    "screenshots": [],
    "yellow_box_msg": "",
    "seo_keywords": "",
    "slug": "rummy-91",
    "category": "All App",
    "version": "2.0.6",
    "seo_description": "",
    "developer": "Addi",
    "custom_admin_box_heading": "",
    "custom_admin_box_html": "",
    "faqs": [],
    "created_at": "2026-05-20T04:01:04.611Z",
    "is_featured": false,
    "serial_number": 9,
    "name": "RUMMY 91",
    "idea_box_msg": "",
    "is_coming_soon": false,
    "description_html": "<p>A new application.</p>",
    "red_box_msg": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/393c07ea-4f5e-43a9-ab0c-e12dfe7d755a/-/preview/474x474/",
    "release_notes": "",
    "og_image_url": "",
    "id": "5b7fj0cq7",
    "link_configured": true,
    "file_size": "79",
    "video_url": "",
    "target_region": "",
    "safety_status": "Verified",
    "features_html": "",
    "rating": 4.9
  },
  {
    "link_configured": true,
    "file_size": "65",
    "id": "ieam3hkbq",
    "target_region": "",
    "video_url": "",
    "safety_status": "Verified",
    "rating": 3.9,
    "features_html": "",
    "name": "GOGO RUMMY ",
    "icon_url": "https://13eehe59cj.ucarecd.net/0d710f11-2c9d-4312-89de-be65ce21a4fe/-/preview/750x750/",
    "release_notes": "",
    "red_box_msg": "",
    "is_coming_soon": false,
    "description_html": "<p>A new application.</p>",
    "idea_box_msg": "",
    "og_image_url": "",
    "custom_admin_box_heading": "",
    "developer": "Sk varba",
    "seo_description": "",
    "custom_admin_box_html": "",
    "faqs": [],
    "created_at": "2026-05-20T06:58:27.643Z",
    "serial_number": 10,
    "is_featured": false,
    "is_new": false,
    "yellow_box_msg": "",
    "screenshots": [],
    "canonical_url": "",
    "seo_title": "",
    "slug": "gogo-rummy-",
    "seo_keywords": "",
    "version": "5.0",
    "category": "Yono, All App"
  },
  {
    "video_url": "",
    "target_region": "",
    "id": "5j5b7qbrw",
    "link_configured": true,
    "file_size": "75",
    "features_html": "",
    "rating": 4.6,
    "safety_status": "Verified",
    "name": "CLUB INR",
    "og_image_url": "",
    "idea_box_msg": "",
    "is_coming_soon": false,
    "description_html": "<p>A new application.</p>",
    "release_notes": "",
    "red_box_msg": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/3059d25d-1497-4cff-aead-68758187fe0b/-/preview/554x554/",
    "custom_admin_box_html": "",
    "faqs": [],
    "seo_description": "",
    "developer": "S.A vejay",
    "custom_admin_box_heading": "",
    "is_featured": false,
    "serial_number": 11,
    "created_at": "2026-05-20T08:02:40.971Z",
    "seo_title": "",
    "canonical_url": "",
    "screenshots": [],
    "yellow_box_msg": "",
    "is_new": false,
    "category": "Yono, All App",
    "version": "1.8",
    "seo_keywords": "",
    "slug": "club-inr"
  },
  {
    "is_featured": false,
    "serial_number": 12,
    "created_at": "2026-05-26T07:04:36.330Z",
    "custom_admin_box_html": "",
    "faqs": [],
    "developer": "Addi",
    "seo_description": "",
    "custom_admin_box_heading": "",
    "category": "Yono, All App",
    "version": "1.8",
    "seo_keywords": "",
    "slug": "abc-rummy-",
    "screenshots": [],
    "canonical_url": "",
    "seo_title": "",
    "yellow_box_msg": "",
    "is_new": false,
    "features_html": "",
    "rating": 3.9,
    "safety_status": "Verified",
    "video_url": "",
    "target_region": "",
    "id": "f4ktp4dfi",
    "link_configured": true,
    "file_size": "61",
    "og_image_url": "",
    "idea_box_msg": "",
    "red_box_msg": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/f7108631-b74a-49e5-8abf-37cec6950f7c/-/preview/512x512/",
    "release_notes": "",
    "description_html": "<p>A new application.</p>",
    "is_coming_soon": false,
    "name": "ABC Rummy "
  },
  {
    "seo_keywords": "",
    "slug": "777-rummy",
    "category": "Yono, All App",
    "version": "1.6",
    "is_new": false,
    "screenshots": [],
    "seo_title": "",
    "canonical_url": "",
    "yellow_box_msg": "",
    "created_at": "2026-05-26T07:09:01.068Z",
    "is_featured": false,
    "serial_number": 13,
    "developer": "AB Arora",
    "seo_description": "",
    "custom_admin_box_heading": "",
    "faqs": [],
    "custom_admin_box_html": "",
    "idea_box_msg": "",
    "release_notes": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/fb951184-b849-4ff0-8882-a4d826508fb7/-/preview/190x190/",
    "red_box_msg": "",
    "is_coming_soon": false,
    "description_html": "<p>A new application.</p>",
    "og_image_url": "",
    "name": "777.Rummy",
    "safety_status": "Verified",
    "features_html": "",
    "rating": 5,
    "id": "4w1yxs6mm",
    "link_configured": true,
    "file_size": "54",
    "video_url": "",
    "target_region": ""
  },
  {
    "rating": 4,
    "features_html": "",
    "safety_status": "Verified",
    "target_region": "",
    "video_url": "",
    "file_size": "59",
    "link_configured": true,
    "id": "w1sttlwv7",
    "og_image_url": "",
    "release_notes": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/74347710-3cb2-468c-98eb-5666a0af487c/-/preview/190x190/",
    "red_box_msg": "",
    "is_coming_soon": false,
    "description_html": "<p>A new application.</p>",
    "idea_box_msg": "",
    "name": "EVER 777",
    "serial_number": 14,
    "is_featured": false,
    "created_at": "2026-05-26T07:12:55.821Z",
    "custom_admin_box_html": "",
    "faqs": [],
    "custom_admin_box_heading": "",
    "developer": "AZ ever",
    "seo_description": "",
    "version": "1.8",
    "category": "Yono, All App",
    "slug": "ever-777",
    "seo_keywords": "",
    "yellow_box_msg": "",
    "screenshots": [],
    "seo_title": "",
    "canonical_url": "",
    "is_new": false
  },
  {
    "rating": 4,
    "features_html": "",
    "safety_status": "Verified",
    "target_region": "",
    "video_url": "",
    "file_size": "75",
    "link_configured": true,
    "id": "dp2lcn2ae",
    "og_image_url": "",
    "description_html": "<p>A new application.</p>",
    "is_coming_soon": false,
    "release_notes": "",
    "red_box_msg": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/4b2bd57d-9855-40a8-b452-34edee84ed09/-/preview/190x190/",
    "idea_box_msg": "",
    "name": "Game Rummy",
    "serial_number": 15,
    "is_featured": false,
    "created_at": "2026-05-26T07:16:08.600Z",
    "faqs": [],
    "custom_admin_box_html": "",
    "custom_admin_box_heading": "",
    "seo_description": "",
    "developer": "Raj dav",
    "version": "2.0",
    "category": "Yono, All App",
    "slug": "game-rummy",
    "seo_keywords": "",
    "yellow_box_msg": "",
    "seo_title": "",
    "canonical_url": "",
    "screenshots": [],
    "is_new": false
  },
  {
    "id": "4lgypb90h",
    "link_configured": true,
    "file_size": "54",
    "video_url": "",
    "target_region": "",
    "safety_status": "Verified",
    "features_html": "",
    "rating": 4.1,
    "name": "Hi Rummy ",
    "idea_box_msg": "",
    "red_box_msg": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/c01e9676-e748-4342-9ac7-e972030981fc/-/preview/190x190/",
    "release_notes": "",
    "description_html": "<p>A new application.</p>",
    "is_coming_soon": false,
    "og_image_url": "",
    "developer": "Addi",
    "seo_description": "",
    "custom_admin_box_heading": "",
    "custom_admin_box_html": "",
    "faqs": [],
    "created_at": "2026-05-26T07:18:29.456Z",
    "is_featured": false,
    "serial_number": 16,
    "is_new": false,
    "screenshots": [],
    "canonical_url": "",
    "seo_title": "",
    "yellow_box_msg": "",
    "seo_keywords": "",
    "slug": "hi-rummy-",
    "category": "Yono, All App",
    "version": "1.9"
  },
  {
    "custom_admin_box_heading": "",
    "seo_description": "",
    "developer": "Arcade ",
    "faqs": [],
    "custom_admin_box_html": "",
    "created_at": "2026-05-26T07:21:55.085Z",
    "serial_number": 17,
    "is_featured": false,
    "is_new": false,
    "yellow_box_msg": "",
    "seo_title": "",
    "canonical_url": "",
    "screenshots": [],
    "slug": "inr-rummy",
    "seo_keywords": "",
    "version": "3.0",
    "category": "Yono, All App",
    "link_configured": true,
    "file_size": "79",
    "id": "2f90a87hv",
    "is_hot": false,
    "target_region": "",
    "video_url": "",
    "safety_status": "Verified",
    "rating": 5,
    "features_html": "",
    "name": "INR Rummy",
    "is_coming_soon": false,
    "description_html": "<p>A new application.</p>",
    "release_notes": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/2a718650-0602-495f-9ca4-b13c86e58c02/-/preview/190x190/",
    "red_box_msg": "",
    "idea_box_msg": "",
    "og_image_url": ""
  },
  {
    "features_html": "",
    "rating": 3.9,
    "safety_status": "Verified",
    "video_url": "",
    "target_region": "",
    "id": "9a05609sb",
    "file_size": "2.4",
    "link_configured": true,
    "og_image_url": "",
    "idea_box_msg": "",
    "release_notes": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/c693366d-d543-4d76-84ba-3963a3f3c792/-/preview/190x190/",
    "red_box_msg": "",
    "description_html": "<p>A new application.</p>",
    "is_coming_soon": false,
    "name": "JAIHO RUMMY ",
    "is_featured": false,
    "serial_number": 18,
    "created_at": "2026-05-26T07:26:42.606Z",
    "custom_admin_box_html": "",
    "faqs": [],
    "developer": "PW sahar",
    "seo_description": "",
    "custom_admin_box_heading": "",
    "category": "Yono, All App",
    "version": "2.1",
    "seo_keywords": "",
    "slug": "jaiho-rummy-",
    "screenshots": [],
    "canonical_url": "",
    "seo_title": "",
    "yellow_box_msg": "",
    "is_new": false
  },
  {
    "custom_admin_box_heading": "",
    "seo_description": "",
    "developer": "Mak job",
    "custom_admin_box_html": "",
    "faqs": [],
    "created_at": "2026-05-26T07:31:59.173Z",
    "serial_number": 19,
    "is_featured": false,
    "is_new": false,
    "yellow_box_msg": "",
    "seo_title": "",
    "canonical_url": "",
    "screenshots": [],
    "slug": "love-rummy",
    "seo_keywords": "",
    "version": "1.6",
    "category": "Yono, All App",
    "file_size": "68",
    "link_configured": true,
    "id": "l7a60keix",
    "target_region": "",
    "video_url": "",
    "safety_status": "Verified",
    "rating": 4.2,
    "features_html": "",
    "name": "Love Rummy",
    "description_html": "<p>A new application.</p>",
    "is_coming_soon": false,
    "red_box_msg": "",
    "release_notes": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/cf0b4466-3d5b-4eb5-bc88-afc9a8213ac4/-/preview/190x190/",
    "idea_box_msg": "",
    "og_image_url": ""
  },
  {
    "category": "Yono, All App",
    "version": "1.8",
    "seo_keywords": "",
    "slug": "joy-rummy",
    "seo_title": "",
    "canonical_url": "",
    "screenshots": [],
    "yellow_box_msg": "",
    "is_new": false,
    "is_featured": false,
    "serial_number": 20,
    "created_at": "2026-05-26T07:34:35.782Z",
    "custom_admin_box_html": "",
    "faqs": [],
    "seo_description": "",
    "developer": "AB Arora",
    "custom_admin_box_heading": "",
    "og_image_url": "",
    "idea_box_msg": "",
    "is_coming_soon": false,
    "description_html": "<p>A new application.</p>",
    "release_notes": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/e0898894-5d5b-47ab-a14f-13b4514b3b4f/-/preview/190x190/",
    "red_box_msg": "",
    "name": "JOY RUMMY",
    "features_html": "",
    "rating": 5,
    "safety_status": "Verified",
    "video_url": "",
    "target_region": "",
    "id": "4paka7kie",
    "file_size": "50",
    "link_configured": false
  },
  {
    "created_at": "2026-05-26T07:37:07.122Z",
    "serial_number": 21,
    "is_featured": false,
    "custom_admin_box_heading": "",
    "seo_description": "",
    "developer": "AZ ever",
    "custom_admin_box_html": "",
    "faqs": [],
    "slug": "maha-games",
    "seo_keywords": "",
    "version": "1.0",
    "category": "Yono, All App",
    "is_new": false,
    "yellow_box_msg": "",
    "canonical_url": "",
    "seo_title": "",
    "screenshots": [],
    "safety_status": "Verified",
    "rating": 4,
    "features_html": "",
    "file_size": "70",
    "link_configured": true,
    "id": "2768ohu2a",
    "target_region": "",
    "video_url": "",
    "is_coming_soon": false,
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://13eehe59cj.ucarecd.net/2d664adc-3e1f-4317-805c-dea453f52389/-/preview/190x190/",
    "release_notes": "",
    "red_box_msg": "",
    "idea_box_msg": "",
    "og_image_url": "",
    "name": "MAHA GAMES"
  },
  {
    "faqs": [],
    "custom_admin_box_html": "",
    "seo_description": "",
    "developer": "AZ ever",
    "custom_admin_box_heading": "",
    "is_featured": false,
    "serial_number": 22,
    "created_at": "2026-05-26T07:39:44.282Z",
    "seo_title": "",
    "canonical_url": "",
    "screenshots": [],
    "yellow_box_msg": "",
    "is_new": false,
    "category": "Yono, All App",
    "version": "5.8",
    "seo_keywords": "",
    "slug": "rummy-ludo",
    "video_url": "",
    "target_region": "",
    "id": "us5xuk5bm",
    "link_configured": true,
    "file_size": "58",
    "features_html": "",
    "rating": 3.9,
    "safety_status": "Verified",
    "name": "Rummy Ludo",
    "og_image_url": "",
    "idea_box_msg": "",
    "description_html": "<p>A new application.</p>",
    "is_coming_soon": false,
    "red_box_msg": "",
    "release_notes": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/6aa28ca8-cef1-4d1a-b054-13e242eaef02/-/preview/190x190/"
  },
  {
    "name": "Rummy 77",
    "is_coming_soon": false,
    "description_html": "<p>A new application.</p>",
    "release_notes": "",
    "red_box_msg": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/d17abcfc-c8dc-4c36-8558-e3408002d37e/-/preview/190x190/",
    "idea_box_msg": "",
    "og_image_url": "",
    "file_size": "45",
    "link_configured": true,
    "id": "69x1lstq7",
    "target_region": "",
    "video_url": "",
    "safety_status": "Verified",
    "rating": 3.9,
    "features_html": "",
    "is_new": false,
    "yellow_box_msg": "",
    "canonical_url": "",
    "seo_title": "",
    "screenshots": [],
    "slug": "rummy-77",
    "seo_keywords": "",
    "version": "2.0.6",
    "category": "Yono, All App",
    "custom_admin_box_heading": "",
    "seo_description": "",
    "developer": "Arcade ",
    "custom_admin_box_html": "",
    "faqs": [],
    "created_at": "2026-05-26T07:42:24.615Z",
    "serial_number": 23,
    "is_featured": false
  },
  {
    "category": "Yono, All App",
    "version": "1.8",
    "seo_keywords": "",
    "slug": "share-slots",
    "seo_title": "",
    "canonical_url": "",
    "screenshots": [],
    "yellow_box_msg": "",
    "is_new": false,
    "is_featured": false,
    "serial_number": 24,
    "created_at": "2026-05-26T07:44:32.442Z",
    "custom_admin_box_html": "",
    "faqs": [],
    "seo_description": "",
    "developer": "AB Arora",
    "custom_admin_box_heading": "",
    "og_image_url": "",
    "idea_box_msg": "",
    "is_coming_soon": false,
    "description_html": "<p>A new application.</p>",
    "red_box_msg": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/2738be7d-f198-4f70-a7d8-c8eb5f452eb0/-/preview/190x190/",
    "release_notes": "",
    "name": "Share Slots",
    "features_html": "",
    "rating": 4,
    "safety_status": "Verified",
    "video_url": "",
    "target_region": "",
    "id": "j79n2g3l9",
    "link_configured": false,
    "file_size": "58"
  },
  {
    "is_new": false,
    "screenshots": [],
    "canonical_url": "",
    "seo_title": "",
    "yellow_box_msg": "",
    "seo_keywords": "",
    "slug": "567-slots",
    "category": "Yono, All App",
    "version": "1.6",
    "developer": "Tania JK ",
    "seo_description": "",
    "custom_admin_box_heading": "",
    "custom_admin_box_html": "",
    "faqs": [],
    "created_at": "2026-05-26T07:51:47.637Z",
    "is_featured": false,
    "serial_number": 26,
    "name": "567 SLOTS",
    "idea_box_msg": "",
    "red_box_msg": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/e4314d5e-eb77-46b9-8998-8e0f94970b38/-/preview/72x72/",
    "release_notes": "",
    "description_html": "<p>A new application.</p>",
    "is_coming_soon": false,
    "og_image_url": "",
    "id": "n3w2vjk0b",
    "file_size": "65",
    "link_configured": true,
    "video_url": "",
    "target_region": "",
    "safety_status": "Verified",
    "features_html": "",
    "rating": 3.5
  },
  {
    "developer": "Admin",
    "seo_description": "",
    "custom_admin_box_heading": "",
    "faqs": [],
    "custom_admin_box_html": "",
    "created_at": "2026-05-26T07:56:30.478Z",
    "is_featured": false,
    "serial_number": 27,
    "is_new": false,
    "screenshots": [],
    "seo_title": "",
    "canonical_url": "",
    "yellow_box_msg": "",
    "seo_keywords": "",
    "slug": "789jackpots",
    "category": "Yono, All App",
    "version": "1.9",
    "id": "owxg4aekg",
    "link_configured": true,
    "file_size": "Tanu WD",
    "video_url": "",
    "target_region": "",
    "safety_status": "Verified",
    "features_html": "",
    "rating": 2.9,
    "name": "789Jackpots",
    "idea_box_msg": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/a0cedc36-33b0-4e75-a1ea-cd963b3ee0ca/-/preview/190x190/",
    "release_notes": "",
    "red_box_msg": "",
    "description_html": "<p>A new application.</p>",
    "is_coming_soon": false,
    "og_image_url": ""
  },
  {
    "category": "Yono, All App",
    "version": "1.8",
    "seo_keywords": "",
    "slug": "yono-vip",
    "canonical_url": "",
    "seo_title": "",
    "screenshots": [],
    "yellow_box_msg": "",
    "is_new": false,
    "is_featured": false,
    "serial_number": 28,
    "created_at": "2026-05-26T08:00:01.636Z",
    "custom_admin_box_html": "",
    "faqs": [],
    "seo_description": "",
    "developer": "Rahul HL",
    "custom_admin_box_heading": "",
    "og_image_url": "",
    "idea_box_msg": "",
    "description_html": "<p>A new application.</p>",
    "is_coming_soon": false,
    "icon_url": "https://13eehe59cj.ucarecd.net/d9226164-7447-425e-ba61-618d72ed28df/-/preview/190x190/",
    "release_notes": "",
    "red_box_msg": "",
    "name": "YONO VIP",
    "features_html": "",
    "rating": 4,
    "safety_status": "Verified",
    "video_url": "",
    "target_region": "",
    "id": "fw5wsziec",
    "link_configured": true,
    "file_size": "78"
  },
  {
    "screenshots": [],
    "seo_title": "",
    "canonical_url": "",
    "yellow_box_msg": "",
    "is_new": true,
    "category": "Card",
    "version": "3",
    "seo_keywords": "",
    "slug": "teen-patti-octro",
    "custom_admin_box_html": "",
    "faqs": [],
    "developer": "Unknown ",
    "seo_description": "",
    "custom_admin_box_heading": "",
    "is_featured": false,
    "serial_number": 34,
    "created_at": "2026-06-03T10:17:01.058Z",
    "publish_date": "2026-06-10T12:00:00.000Z",
    "name": "Teen Patti Octro",
    "og_image_url": "",
    "idea_box_msg": "",
    "release_notes": "",
    "icon_url": "https://kk19a1nwwx.ucarecd.net/091fdebe-1562-41c6-99ea-b60665adb5ee/-/preview/512x512/",
    "red_box_msg": "",
    "description_html": "<p>A new application.</p>",
    "is_coming_soon": true,
    "video_url": "",
    "target_region": "",
    "id": "t1ocq5iar",
    "file_size": "90",
    "link_configured": true,
    "features_html": "",
    "rating": 4.2,
    "safety_status": "Verified"
  },
  {
    "file_size": "Unknown",
    "link_configured": true,
    "id": "rrmv44n9n",
    "target_region": "",
    "video_url": "",
    "safety_status": "Verified",
    "rating": 5,
    "features_html": "",
    "name": "Zynga Poker- Texas Holdem Game",
    "description_html": "<p>A new application.</p>",
    "is_coming_soon": true,
    "release_notes": "",
    "red_box_msg": "",
    "icon_url": "https://kk19a1nwwx.ucarecd.net/5b72cf8f-4959-426e-9e1d-8e2150529efb/-/preview/240x240/",
    "idea_box_msg": "",
    "og_image_url": "",
    "custom_admin_box_heading": "",
    "seo_description": "",
    "developer": "Admin",
    "faqs": [],
    "custom_admin_box_html": "",
    "created_at": "2026-06-03T10:30:01.393Z",
    "serial_number": 29,
    "is_featured": false,
    "is_new": false,
    "yellow_box_msg": "",
    "seo_title": "",
    "canonical_url": "",
    "screenshots": [],
    "slug": "zynga-poker-texas-holdem-game",
    "seo_keywords": "",
    "version": "1.0",
    "category": "Card"
  },
  {
    "version": "1.0",
    "category": "Card",
    "slug": "uno-",
    "seo_keywords": "",
    "yellow_box_msg": null,
    "screenshots": [],
    "canonical_url": "",
    "seo_title": "",
    "is_new": true,
    "serial_number": 30,
    "is_featured": false,
    "created_at": "2026-06-07T10:14:11.138Z",
    "faqs": [],
    "custom_admin_box_html": null,
    "custom_admin_box_heading": null,
    "developer": "Admin",
    "seo_description": "",
    "og_image_url": "",
    "release_notes": "",
    "icon_url": "https://1ewg1yyass.ucarecd.net/c0172402-c854-4016-876e-6b7769547c8f/-/preview/238x211/",
    "red_box_msg": null,
    "description_html": "<p>A new application.</p>",
    "is_coming_soon": true,
    "idea_box_msg": null,
    "name": "UNO! ",
    "rating": 5,
    "features_html": null,
    "safety_status": "Verified",
    "target_region": "",
    "file_size": "Unknown",
    "link_configured": true,
    "id": "wf59smk6l"
  },
  {
    "rating": 5,
    "safety_status": "Verified",
    "target_region": "",
    "file_size": "Unknown",
    "link_configured": true,
    "id": "8epj9jjpu",
    "og_image_url": "",
    "red_box_msg": "",
    "release_notes": "",
    "icon_url": "https://1ewg1yyass.ucarecd.net/33e0d4e8-6e41-4791-9e41-8d915a12e504/-/preview/447x447/",
    "is_coming_soon": true,
    "description_html": "<p>A new application.</p>",
    "idea_box_msg": "",
    "name": "Rummy GOLD - With Fast Rummy",
    "serial_number": 31,
    "is_featured": false,
    "created_at": "2026-06-07T10:16:45.949Z",
    "faqs": [],
    "custom_admin_box_html": "",
    "custom_admin_box_heading": "",
    "developer": "Admin",
    "seo_description": "",
    "version": "1.0",
    "category": "Card",
    "slug": "rummy-gold-with-fast-rummy",
    "seo_keywords": "",
    "yellow_box_msg": "",
    "screenshots": [],
    "canonical_url": "",
    "seo_title": "",
    "is_new": false
  },
  {
    "custom_admin_box_heading": null,
    "seo_description": "",
    "developer": "Admin",
    "faqs": [],
    "custom_admin_box_html": null,
    "created_at": "2026-06-07T10:19:11.616Z",
    "serial_number": 32,
    "is_featured": false,
    "is_new": true,
    "yellow_box_msg": null,
    "canonical_url": "",
    "seo_title": "",
    "screenshots": [],
    "slug": "indian-rummy-3-patti-card-game",
    "seo_keywords": "",
    "version": "1.0",
    "category": "Card",
    "link_configured": true,
    "file_size": "Unknown",
    "id": "8jt0hokyo",
    "target_region": "",
    "safety_status": "Verified",
    "rating": 5,
    "features_html": null,
    "name": "Indian Rummy 3 Patti Card Game",
    "is_coming_soon": true,
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://1ewg1yyass.ucarecd.net/2a4b59ef-16a3-4b14-bad3-1c3796af3492/-/preview/447x447/",
    "red_box_msg": null,
    "release_notes": "",
    "idea_box_msg": null,
    "og_image_url": ""
  },
  {
    "safety_status": "Verified",
    "features_html": "",
    "rating": 5,
    "id": "01x9h7nfb",
    "link_configured": true,
    "file_size": "Unknown",
    "target_region": "",
    "idea_box_msg": "",
    "release_notes": "",
    "icon_url": "https://1ewg1yyass.ucarecd.net/0f918f11-b247-4b5a-9d26-d510dddffbfe/-/preview/447x447/",
    "red_box_msg": "",
    "is_coming_soon": true,
    "description_html": "<p>A new application.</p>",
    "og_image_url": "https://1ewg1yyass.ucarecd.net/0f918f11-b247-4b5a-9d26-d510dddffbfe/-/preview/447x447/",
    "name": "Lucky Spin Slots",
    "created_at": "2026-06-07T13:13:11.211Z",
    "publish_date": "2026-07-08T13:08:00.000Z",
    "is_featured": false,
    "serial_number": 33,
    "developer": "Admin",
    "seo_description": "",
    "custom_admin_box_heading": "",
    "custom_admin_box_html": "",
    "faqs": [],
    "seo_keywords": "",
    "slug": "lucky-spin-slots",
    "category": "Slots",
    "version": "1.0",
    "is_new": false,
    "screenshots": [],
    "canonical_url": "",
    "seo_title": "",
    "yellow_box_msg": ""
  },
  {
    "name": "IND Club",
    "idea_box_msg": "",
    "is_coming_soon": true,
    "description_html": "<p>A new application.</p>",
    "red_box_msg": "",
    "icon_url": "https://1ewg1yyass.ucarecd.net/9d9339e0-77d4-418b-86f8-0a0e074c1d4e/-/preview/190x190/",
    "release_notes": "",
    "og_image_url": "",
    "id": "3cflt97b5",
    "file_size": "76",
    "link_configured": true,
    "video_url": "",
    "target_region": "",
    "safety_status": "Verified",
    "features_html": "",
    "rating": 4.5,
    "is_new": false,
    "seo_title": "",
    "canonical_url": "",
    "screenshots": [],
    "yellow_box_msg": "",
    "seo_keywords": "",
    "slug": "ind-club",
    "category": "Yono",
    "version": "1.0",
    "seo_description": "",
    "developer": "AB Arora",
    "custom_admin_box_heading": "",
    "custom_admin_box_html": "",
    "faqs": [],
    "publish_date": "2026-06-12T15:30:00.000Z",
    "created_at": "2026-06-12T12:39:30.407Z",
    "is_featured": false,
    "serial_number": 28
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
  "favicon_url": "https://y4q7avawns.ucarecd.net/b391a2fa-42f7-4b3a-a0d5-605cb22aead4/-/preview/1000x1000/",
  "disclaimer_text": "<div ",
  "ticker_text": "L",
  "animations_enabled": true,
  "terms_content": "<!-- ",
  "hero_title_text": "R",
  "secure_index_title": "RummyApp Online ",
  "ethics_discrimination_text": "<div ",
  "trending_searches": [],
  "hero_title_style": "mono",
  "quick_links": [],
  "helpline_telegram": "https://t.me",
  "social_links": {
    "facebook": "",
    "instagram": "",
    "twitter": "",
    "linkedin": "",
    "youtube": ""
  },
  "hero_title_subtitle": "C",
  "helpline_whatsapp": "+918653034735",
  "portal_heading": "IMPORTANT NOTICE ",
  "ethics_heading": "ETHNICS",
  "secure_index_subtitle": "The Ultimate Registry for Strategic Card Simulation, Arcade Logic, and Premium Virtual Gameplay Guides",
  "meta_description": "Step into the world of Rummy - compete, challenge friends, and rise to the top on RummyApp Online!",
  "website_faqs": [],
  "last_updated": "2026-07-20T23:25:59.870Z",
  "seo_keywords": "RummyDex ",
  "hero_title_visible": true,
  "about_content": "<!-- ",
  "site_title": "RummyDex ",
  "hero_title_animation": "slide-up",
  "contact_content": "<p>Have questions or feedback? We'd love to hear from you. Our team typically responds within 24-48 hours.</p>",
  "support_email": "support@rummydex.com",
  "important_notice_heading": "VERY IMPORTANT NOTICE ",
  "privacy_content": "<!-- SAFE ",
  "banners": [],
  "hero_title_color": "neon-sky",
  "categories": [
    "Yono",
    "Card",
    "Slots"
  ],
  "disclaimer_heading": "DISCLAIMER ",
  "logo_url": "https://y4q7avaws.ucarecd.net/b391a2fa-42f7-4b3a-a0d5-605cb22aead4/-/preview/1000x1000/",
  "responsibility_content": "<!-- ",
  "important_notice": "<div "
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
