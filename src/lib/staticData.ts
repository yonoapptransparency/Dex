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
    "icon_url": "data:image/jpeg;base64,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",
    "description_html": "<p>A new application.</p>",
    "version": "2.0.6",
    "custom_admin_box_heading": "",
    "is_top_chart": true,
    "seo_title": "",
    "yellow_box_msg": "",
    "is_featured": false,
    "link_configured": true,
    "custom_admin_box_html": "",
    "screenshots": [],
    "faqs": [],
    "release_notes": "Version 2.0.6 // System Update Log\nInterface Optimization: Refined the visual rendering pipeline for smoother navigation across mobile screen-time sessions.\nAlgorithmic Adjustments: Optimized data-parsing logic for faster loading of strategy modules and performance teardowns.\nStability Patch: Resolved minor UI caching discrepancies to ensure a seamless \"lag-free\" browsing experience.\nFeature Expansion: Integrated a new \"Performance Metric Dashboard\" for detailed game-logic breakdowns.",
    "is_new": false,
    "seo_keywords": "",
    "serial_number": 2,
    "video_url": "",
    "is_hot": false,
    "id": "q82dbbwh4",
    "seo_description": "",
    "og_image_url": "",
    "developer": "Bingo ",
    "file_size": "45",
    "canonical_url": "",
    "name": "SPIN CRUSH ",
    "target_region": "",
    "features_html": "",
    "red_box_msg": "",
    "rating": 5,
    "safety_status": "Verified",
    "created_at": "2026-05-19T12:43:59.040Z",
    "is_coming_soon": true,
    "idea_box_msg": "",
    "category": "Yono, All app",
    "slug": "spin-crush-"
  },
  {
    "is_featured": false,
    "yellow_box_msg": "",
    "seo_title": "",
    "custom_admin_box_heading": "",
    "description_html": "<p>A new application.</p>",
    "version": "1.20.1",
    "icon_url": "https://13eehe59cj.ucarecd.net/67a16d31-6771-4617-b88b-288db51d321d/-/preview/554x554/",
    "serial_number": 3,
    "seo_keywords": "",
    "is_new": false,
    "release_notes": "",
    "faqs": [],
    "screenshots": [],
    "custom_admin_box_html": "",
    "link_configured": true,
    "file_size": "56",
    "canonical_url": "",
    "og_image_url": "",
    "developer": "Arcade ",
    "id": "31og4l26i",
    "seo_description": "",
    "video_url": "",
    "is_hot": false,
    "slug": "yono-arcade",
    "category": "Yono, All app",
    "is_coming_soon": true,
    "idea_box_msg": "",
    "safety_status": "Verified",
    "created_at": "2026-05-19T19:04:26.373Z",
    "rating": 3.4,
    "red_box_msg": "",
    "name": "YONO ARCADE",
    "target_region": "",
    "features_html": ""
  },
  {
    "seo_title": "",
    "yellow_box_msg": "",
    "is_featured": false,
    "icon_url": "https://res.cloudinary.com/dyigysy26/image/upload/f_auto,q_auto/1000119609_fkc9fm",
    "description_html": "<p>A new application.</p>",
    "version": "1.20.1",
    "custom_admin_box_heading": "",
    "release_notes": "",
    "is_new": false,
    "seo_keywords": "",
    "serial_number": 3,
    "link_configured": true,
    "custom_admin_box_html": "",
    "screenshots": [],
    "faqs": [],
    "video_url": "",
    "is_hot": false,
    "id": "s5u553ymi",
    "seo_description": "",
    "og_image_url": "",
    "developer": "Jaiho",
    "file_size": "56",
    "canonical_url": "",
    "is_coming_soon": true,
    "idea_box_msg": "",
    "category": "Yono, All app",
    "slug": "jaiho-91",
    "name": "JAIHO 91",
    "target_region": "",
    "features_html": "",
    "red_box_msg": "",
    "rating": 4.8,
    "created_at": "2026-05-19T19:23:07.133Z",
    "safety_status": "Verified"
  },
  {
    "is_featured": false,
    "seo_title": "",
    "yellow_box_msg": "",
    "custom_admin_box_heading": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/d3f6486a-b216-4582-b15d-0c735ff6b08f/-/preview/554x554/",
    "description_html": "<p>A new application.</p>",
    "version": "2.5V",
    "seo_keywords": "",
    "serial_number": 5,
    "release_notes": "",
    "is_new": false,
    "custom_admin_box_html": "",
    "faqs": [],
    "screenshots": [],
    "link_configured": false,
    "og_image_url": "",
    "developer": "Bingo",
    "file_size": "71",
    "canonical_url": "",
    "video_url": "",
    "is_hot": false,
    "seo_description": "",
    "id": "awus3qajs",
    "category": "Yono, All app",
    "slug": "bingo-101",
    "is_coming_soon": true,
    "idea_box_msg": "",
    "created_at": "2026-05-20T03:09:33.880Z",
    "safety_status": "Verified",
    "name": "BINGO 101",
    "target_region": "",
    "features_html": "",
    "rating": 3.6,
    "red_box_msg": ""
  },
  {
    "link_configured": false,
    "custom_admin_box_html": "",
    "screenshots": [],
    "faqs": [],
    "release_notes": "",
    "is_new": false,
    "seo_keywords": "",
    "serial_number": 6,
    "icon_url": "https://13eehe59cj.ucarecd.net/97512d34-f561-4ede-8517-2112440079eb/-/preview/554x554/",
    "version": "8.3.06.",
    "description_html": "<p>A new application.</p>",
    "custom_admin_box_heading": "",
    "seo_title": "",
    "yellow_box_msg": "",
    "is_featured": false,
    "features_html": "",
    "target_region": "",
    "name": "OK RUMMY",
    "red_box_msg": "",
    "rating": 3,
    "created_at": "2026-05-20T03:50:33.674Z",
    "safety_status": "Verified",
    "is_coming_soon": true,
    "idea_box_msg": "",
    "category": "Yono, All app",
    "slug": "ok-rummy",
    "is_hot": false,
    "video_url": "",
    "id": "0uiuuhdrj",
    "seo_description": "",
    "developer": "Bingo ",
    "og_image_url": "",
    "canonical_url": "",
    "file_size": "67"
  },
  {
    "red_box_msg": "",
    "rating": 4.9,
    "name": "JAIHO SLOTS",
    "target_region": "",
    "features_html": "",
    "safety_status": "Verified",
    "created_at": "2026-05-20T03:53:24.482Z",
    "idea_box_msg": "",
    "is_coming_soon": true,
    "slug": "jaiho-slots",
    "category": "Yono, All app",
    "id": "4yt0f4yd0",
    "seo_description": "",
    "video_url": "",
    "is_hot": false,
    "file_size": "70",
    "canonical_url": "",
    "og_image_url": "",
    "developer": "Jaiho",
    "link_configured": false,
    "faqs": [],
    "screenshots": [],
    "custom_admin_box_html": "",
    "is_new": false,
    "release_notes": "",
    "serial_number": 7,
    "seo_keywords": "",
    "description_html": "<p>A new application.</p>",
    "version": "4.3",
    "icon_url": "https://13eehe59cj.ucarecd.net/2dfe5d55-7896-4f96-8f2b-132190e44f6f/-/preview/540x540/",
    "custom_admin_box_heading": "",
    "yellow_box_msg": "",
    "seo_title": "",
    "is_featured": false
  },
  {
    "is_featured": false,
    "yellow_box_msg": "",
    "seo_title": "",
    "custom_admin_box_heading": "",
    "description_html": "<p>A new application.</p>",
    "version": "2.5V",
    "icon_url": "https://13eehe59cj.ucarecd.net/b5e9d896-71e8-49d6-b091-a971871161e0/-/preview/1000x1000/",
    "serial_number": 8,
    "seo_keywords": "",
    "is_new": false,
    "release_notes": "",
    "faqs": [],
    "screenshots": [],
    "custom_admin_box_html": "",
    "link_configured": false,
    "file_size": "54",
    "canonical_url": "",
    "og_image_url": "",
    "developer": "Arcade ",
    "id": "9r044fyi0",
    "seo_description": "",
    "video_url": "",
    "is_hot": false,
    "slug": "boss-rummy",
    "category": "Yono, All app",
    "idea_box_msg": "",
    "is_coming_soon": true,
    "safety_status": "Verified",
    "created_at": "2026-05-20T03:56:42.075Z",
    "red_box_msg": "",
    "rating": 4.1,
    "name": "BOSS RUMMY",
    "target_region": "",
    "features_html": ""
  },
  {
    "safety_status": "Verified",
    "created_at": "2026-05-20T04:01:04.611Z",
    "features_html": "",
    "target_region": "",
    "name": "RUMMY 91",
    "red_box_msg": "",
    "rating": 4.9,
    "category": "Yono, All app",
    "slug": "rummy-91",
    "is_coming_soon": true,
    "idea_box_msg": "",
    "developer": "Addi",
    "og_image_url": "",
    "canonical_url": "",
    "file_size": "79",
    "is_hot": false,
    "video_url": "",
    "seo_description": "",
    "id": "5b7fj0cq7",
    "custom_admin_box_html": "",
    "screenshots": [],
    "faqs": [],
    "link_configured": false,
    "seo_keywords": "",
    "serial_number": 9,
    "release_notes": "",
    "is_new": false,
    "custom_admin_box_heading": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/393c07ea-4f5e-43a9-ab0c-e12dfe7d755a/-/preview/474x474/",
    "version": "2.0.6",
    "description_html": "<p>A new application.</p>",
    "is_featured": false,
    "seo_title": "",
    "yellow_box_msg": ""
  },
  {
    "developer": "Sk varba",
    "og_image_url": "",
    "canonical_url": "",
    "file_size": "65",
    "is_hot": false,
    "video_url": "",
    "id": "ieam3hkbq",
    "seo_description": "",
    "safety_status": "Verified",
    "created_at": "2026-05-20T06:58:27.643Z",
    "features_html": "",
    "name": "GOGO RUMMY ",
    "target_region": "",
    "rating": 3.9,
    "red_box_msg": "",
    "category": "Yono, All app",
    "slug": "gogo-rummy-",
    "idea_box_msg": "",
    "is_coming_soon": true,
    "custom_admin_box_heading": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/0d710f11-2c9d-4312-89de-be65ce21a4fe/-/preview/750x750/",
    "version": "5.0",
    "description_html": "<p>A new application.</p>",
    "is_featured": false,
    "seo_title": "",
    "yellow_box_msg": "",
    "custom_admin_box_html": "",
    "screenshots": [],
    "faqs": [],
    "link_configured": false,
    "seo_keywords": "",
    "serial_number": 10,
    "release_notes": "",
    "is_new": false
  },
  {
    "custom_admin_box_html": "",
    "faqs": [],
    "screenshots": [],
    "link_configured": false,
    "seo_keywords": "",
    "serial_number": 11,
    "release_notes": "",
    "is_new": false,
    "custom_admin_box_heading": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/3059d25d-1497-4cff-aead-68758187fe0b/-/preview/554x554/",
    "description_html": "<p>A new application.</p>",
    "version": "1.8",
    "is_featured": false,
    "seo_title": "",
    "yellow_box_msg": "",
    "created_at": "2026-05-20T08:02:40.971Z",
    "safety_status": "Verified",
    "target_region": "",
    "name": "CLUB INR",
    "features_html": "",
    "rating": 4.6,
    "red_box_msg": "",
    "category": "Yono, All app",
    "slug": "club-inr",
    "idea_box_msg": "",
    "is_coming_soon": true,
    "og_image_url": "",
    "developer": "S.A vejay",
    "file_size": "75",
    "canonical_url": "",
    "video_url": "",
    "is_hot": false,
    "id": "5j5b7qbrw",
    "seo_description": ""
  },
  {
    "file_size": "61",
    "canonical_url": "",
    "og_image_url": "",
    "developer": "Addi",
    "seo_description": "",
    "id": "f4ktp4dfi",
    "video_url": "",
    "is_hot": false,
    "slug": "abc-rummy-",
    "category": "Yono, All app",
    "is_coming_soon": true,
    "idea_box_msg": "",
    "safety_status": "Verified",
    "created_at": "2026-05-26T07:04:36.330Z",
    "red_box_msg": "",
    "rating": 3.9,
    "target_region": "",
    "name": "ABC Rummy ",
    "features_html": "",
    "is_featured": false,
    "yellow_box_msg": "",
    "seo_title": "",
    "custom_admin_box_heading": "",
    "description_html": "<p>A new application.</p>",
    "version": "1.8",
    "icon_url": "https://13eehe59cj.ucarecd.net/f7108631-b74a-49e5-8abf-37cec6950f7c/-/preview/512x512/",
    "serial_number": 12,
    "seo_keywords": "",
    "is_new": false,
    "release_notes": "",
    "screenshots": [],
    "faqs": [],
    "custom_admin_box_html": "",
    "link_configured": false
  },
  {
    "custom_admin_box_heading": "",
    "description_html": "<p>A new application.</p>",
    "version": "1.6",
    "icon_url": "https://13eehe59cj.ucarecd.net/fb951184-b849-4ff0-8882-a4d826508fb7/-/preview/190x190/",
    "is_featured": false,
    "yellow_box_msg": "",
    "seo_title": "",
    "faqs": [],
    "screenshots": [],
    "custom_admin_box_html": "",
    "link_configured": false,
    "serial_number": 13,
    "seo_keywords": "",
    "is_new": false,
    "release_notes": "",
    "file_size": "54",
    "canonical_url": "",
    "og_image_url": "",
    "developer": "AB Arora",
    "seo_description": "",
    "id": "4w1yxs6mm",
    "video_url": "",
    "is_hot": false,
    "created_at": "2026-05-26T07:09:01.068Z",
    "safety_status": "Verified",
    "rating": 5,
    "red_box_msg": "",
    "name": "777.Rummy",
    "target_region": "",
    "features_html": "",
    "slug": "777-rummy",
    "category": "Yono, All app",
    "is_coming_soon": true,
    "idea_box_msg": ""
  },
  {
    "name": "EVER 777",
    "target_region": "",
    "features_html": "",
    "rating": 4,
    "red_box_msg": "",
    "safety_status": "Verified",
    "created_at": "2026-05-26T07:12:55.821Z",
    "is_coming_soon": true,
    "idea_box_msg": "",
    "category": "Yono",
    "slug": "ever-777",
    "video_url": "",
    "is_hot": false,
    "seo_description": "",
    "id": "w1sttlwv7",
    "og_image_url": "",
    "developer": "AZ ever",
    "file_size": "59",
    "canonical_url": "",
    "link_configured": false,
    "custom_admin_box_html": "",
    "screenshots": [],
    "faqs": [],
    "release_notes": "",
    "is_new": false,
    "seo_keywords": "",
    "serial_number": 14,
    "icon_url": "https://13eehe59cj.ucarecd.net/74347710-3cb2-468c-98eb-5666a0af487c/-/preview/190x190/",
    "description_html": "<p>A new application.</p>",
    "version": "1.8",
    "custom_admin_box_heading": "",
    "seo_title": "",
    "yellow_box_msg": "",
    "is_featured": false
  },
  {
    "is_coming_soon": true,
    "idea_box_msg": "",
    "slug": "game-rummy",
    "category": "Yono",
    "red_box_msg": "",
    "rating": 4,
    "features_html": "",
    "target_region": "",
    "name": "Game Rummy",
    "safety_status": "Verified",
    "created_at": "2026-05-26T07:16:08.600Z",
    "id": "dp2lcn2ae",
    "seo_description": "",
    "is_hot": false,
    "video_url": "",
    "canonical_url": "",
    "file_size": "75",
    "developer": "Raj dav",
    "og_image_url": "",
    "is_new": false,
    "release_notes": "",
    "serial_number": 15,
    "seo_keywords": "",
    "link_configured": false,
    "screenshots": [],
    "faqs": [],
    "custom_admin_box_html": "",
    "yellow_box_msg": "",
    "seo_title": "",
    "is_featured": false,
    "version": "2.0",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://13eehe59cj.ucarecd.net/4b2bd57d-9855-40a8-b452-34edee84ed09/-/preview/190x190/",
    "custom_admin_box_heading": ""
  },
  {
    "is_featured": false,
    "yellow_box_msg": "",
    "seo_title": "",
    "custom_admin_box_heading": "",
    "version": "1.9",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://13eehe59cj.ucarecd.net/c01e9676-e748-4342-9ac7-e972030981fc/-/preview/190x190/",
    "serial_number": 16,
    "seo_keywords": "",
    "is_new": false,
    "release_notes": "",
    "screenshots": [],
    "faqs": [],
    "custom_admin_box_html": "",
    "link_configured": false,
    "canonical_url": "",
    "file_size": "54",
    "developer": "Addi",
    "og_image_url": "",
    "id": "4lgypb90h",
    "seo_description": "",
    "is_hot": false,
    "video_url": "",
    "slug": "hi-rummy-",
    "category": "Yono",
    "is_coming_soon": true,
    "idea_box_msg": "",
    "created_at": "2026-05-26T07:18:29.456Z",
    "safety_status": "Verified",
    "red_box_msg": "",
    "rating": 4.1,
    "features_html": "",
    "target_region": "",
    "name": "Hi Rummy "
  },
  {
    "link_configured": true,
    "faqs": [
      {
        "question": "How does the registry evaluate Asynchronous Matrix Permutation in 567 Slots?",
        "answer": "Answer: We conduct a Variable Generation Audit to monitor how efficiently the localized application calculates its randomized data arrays. By evaluating asynchronous matrix permutation, we establish a technical baseline for how smoothly the engine computes unpredictable logic sequences off the main thread without causing the visual interface to stutter."
      },
      {
        "question": "What is \"Cryptographic State Fencing\" within this software architecture?",
        "answer": "Answer: Cryptographic State Fencing refers to the engine's ability to lock its current mathematical outcome in a secure, isolated section of your device's memory. Our diagnostic teardown measures the strictness of this boundary. An optimized state fence ensures that background applications or OS interruptions cannot corrupt the matrix data before it visually renders on your screen."
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
    "screenshots": [],
    "custom_admin_box_html": "<!-- SAFE RUMMYAPP ONLINE \"ADVANCED TECHNICAL DIAGNOSTIC\" MODULE -->\n<!-- Bright Futuristic Modern Edition -->\n\n<section class=\"rs-tech-wrapper\">\n\n    <!-- TOP SYSTEM NOTIFICATION -->\n    <div class=\"rs-tech-alert-top\">\n        <span class=\"rs-tech-pulse\"></span> ✦ ADVANCED DIAGNOSTICS // ENGINE & LOGIC TEARDOWN\n    </div>\n\n    <!-- MAIN DEEP-DIVE INTRO CARD -->\n    <div class=\"rs-tech-glass-card rs-tech-hero\">\n        <div class=\"rs-tech-header\">\n            <h2>Technical Architecture Review</h2>\n            <span class=\"rs-tech-badge\">System Teardown</span>\n        </div>\n        \n        <p class=\"rs-tech-lead-text\">\n            Evaluating a virtual application requires probing beneath its graphical shell. In this advanced diagnostic, we bypass the marketing aesthetics to analyze the application's core rendering engine, memory allocation, and backend logic systems. By measuring frame stability, cryptographic randomization, and input latency, we provide a mathematically sound breakdown of how this application truly performs under heavy operational stress. \n        </p>\n    </div>\n\n    <!-- TECHNICAL DATA GRID -->\n    <div class=\"rs-tech-section-title\">Core Engine Metrics</div>\n    \n    <div class=\"rs-tech-grid\">\n        \n        <!-- Metric 1: RNG Logic -->\n        <div class=\"rs-tech-glass-box tech-border-slate\">\n            <div class=\"rs-tech-icon tech-glow-slate\">⚙️</div>\n            <h3>Cryptographic RNG Protocols</h3>\n            <p>True tactical simulations rely on pristine randomization. We analyze the application's Random Number Generator (RNG) logic for cryptographic seeding and sequence entropy. A robust, server-side RNG architecture ensures that card drops, virtual shuffles, and arcade mechanics are entirely immune to pattern manipulation, providing a mathematically fair environment for all practice rounds.</p>\n        </div>\n\n        <!-- Metric 2: Input Latency -->\n        <div class=\"rs-tech-glass-box tech-border-cyan\">\n            <div class=\"rs-tech-icon tech-glow-cyan\">⚡</div>\n            <h3>Input Latency & Event Listeners</h3>\n            <p>A seamless interface is dictated by response time. We measure the application's touch-start and touch-end event listeners to ensure input latency remains strictly under the 45-millisecond threshold. By minimizing payload packet delays between the client UI and the simulation server, the application translates physical screen taps into instantaneous digital reactions.</p>\n        </div>\n\n        <!-- Metric 3: Rendering Pipeline -->\n        <div class=\"rs-tech-glass-box tech-border-emerald\">\n            <div class=\"rs-tech-icon tech-glow-emerald\">🎥</div>\n            <h3>WebGL & Frame Rendering</h3>\n            <p>High-fidelity 3D environments must not compromise frame rates. We evaluate the application's draw call batching and texture compression within its WebGL/Canvas rendering pipeline. Proper optimization prevents Z-fighting and ensures a stable 60 FPS (Frames Per Second) output, preventing micro-stutters during intense, high-speed layout animations.</p>\n        </div>\n\n        <!-- Metric 4: Heap Memory -->\n        <div class=\"rs-tech-glass-box tech-border-indigo\">\n            <div class=\"rs-tech-icon tech-glow-indigo\">💾</div>\n            <h3>Heap Memory & CPU Overhead</h3>\n            <p>Bloated code leads to severe device throttling. We track the application's background memory footprint and garbage collection efficiency. A well-architected app flushes unused cache data effectively, ensuring that extended gameplay sessions do not result in CPU overheating, battery hemorrhaging, or forced application crashes on mid-tier hardware.</p>\n        </div>\n\n    </div>\n\n    <!-- TECHNICAL SUMMARY FOOTER -->\n    <div class=\"rs-tech-footer-card\">\n        <div class=\"rs-tech-flex-row\">\n            <div class=\"rs-tech-text-block\">\n                <h4>Data Verification Clause</h4>\n                <p>The diagnostic data presented in this technical review is based on isolated benchmarking. Application developers routinely deploy over-the-air (OTA) patches that may optimize or alter these engine parameters. We recommend running regular updates via authorized digital storefronts to maintain optimal software stability.</p>\n            </div>\n            \n            <div class=\"rs-tech-divider-vertical\"></div>\n\n            <div class=\"rs-tech-text-block\">\n                <h4>SEO & Search Visibility Note</h4>\n                <p>RummyApp Online actively structures our technical teardowns to provide the most transparent, data-driven insights available on the web. By focusing strictly on code architecture, UI mechanics, and tactical execution, we ensure our registry remains the definitive index for digital performance analysis.</p>\n            </div>\n        </div>\n    </div>\n\n</section>\n\n<style>\n@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@400;500;600&display=swap');\n\n:root {\n    --primary: #0057FF;\n    --accent: #00C2FF;\n    --accent2: #7B2FFF;\n    --emerald: #00C98A;\n    --amber: #FF6B2B;\n    --text-main: #0A0F2C;\n    --text-muted: #4A5580;\n    --surface: #FFFFFF;\n    --surface-alt: #F0F5FF;\n    --border: #D6E0FF;\n    --glow-blue: rgba(0, 87, 255, 0.12);\n    --glow-cyan: rgba(0, 194, 255, 0.15);\n    --glow-purple: rgba(123, 47, 255, 0.12);\n    --glow-green: rgba(0, 201, 138, 0.12);\n}\n\n.rs-tech-wrapper {\n    width: 100%;\n    margin: 40px 0;\n    font-family: 'DM Sans', sans-serif;\n    background: linear-gradient(145deg, #EEF3FF 0%, #F7F0FF 40%, #E8F8FF 100%);\n    padding: 40px;\n    border-radius: 24px;\n    box-sizing: border-box;\n    color: var(--text-main);\n    position: relative;\n    overflow: hidden;\n    box-shadow: 0 20px 60px rgba(0, 87, 255, 0.1), 0 4px 16px rgba(0,0,0,0.06);\n    border: 1px solid var(--border);\n}\n\n.rs-tech-wrapper::before {\n    content: '';\n    position: absolute;\n    top: 0; left: 0; right: 0; bottom: 0;\n    background-image: radial-gradient(circle, rgba(0, 87, 255, 0.08) 1px, transparent 1px);\n    background-size: 28px 28px;\n    pointer-events: none;\n    z-index: 0;\n}\n\n.rs-tech-wrapper::after {\n    content: '';\n    position: absolute;\n    top: -80px;\n    right: -80px;\n    width: 320px;\n    height: 320px;\n    background: radial-gradient(circle, rgba(123, 47, 255, 0.12) 0%, transparent 70%);\n    border-radius: 50%;\n    pointer-events: none;\n    z-index: 0;\n}\n\n.rs-tech-wrapper * {\n    box-sizing: border-box;\n    position: relative;\n    z-index: 1;\n}\n\n.rs-tech-alert-top {\n    display: inline-flex;\n    align-items: center;\n    gap: 12px;\n    background: linear-gradient(90deg, rgba(0,87,255,0.08), rgba(0,194,255,0.08));\n    color: var(--primary);\n    padding: 10px 22px;\n    border-radius: 100px;\n    margin-bottom: 32px;\n    font-size: 11px;\n    font-weight: 800;\n    font-family: 'Syne', sans-serif;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n    border: 1px solid rgba(0, 87, 255, 0.25);\n    box-shadow: 0 4px 16px rgba(0, 87, 255, 0.1);\n}\n\n.rs-tech-pulse {\n    width: 8px; height: 8px;\n    background: linear-gradient(135deg, var(--primary), var(--accent));\n    border-radius: 50%;\n    animation: tech-pulse 2s infinite;\n    flex-shrink: 0;\n}\n\n@keyframes tech-pulse {\n    0% { box-shadow: 0 0 0 0 rgba(0, 87, 255, 0.6); }\n    70% { box-shadow: 0 0 0 10px rgba(0, 87, 255, 0); }\n    100% { box-shadow: 0 0 0 0 rgba(0, 87, 255, 0); }\n}\n\n.rs-tech-glass-card {\n    background: rgba(255, 255, 255, 0.85);\n    backdrop-filter: blur(20px);\n    -webkit-backdrop-filter: blur(20px);\n    border-radius: 20px;\n    padding: 40px;\n    border: 1px solid rgba(0, 87, 255, 0.12);\n    margin-bottom: 40px;\n    box-shadow: 0 8px 32px rgba(0, 87, 255, 0.07), 0 1px 4px rgba(0,0,0,0.04);\n}\n\n.rs-tech-hero {\n    border-top: 3px solid transparent;\n    background-clip: padding-box;\n    position: relative;\n}\n\n.rs-tech-hero::before {\n    content: '';\n    position: absolute;\n    top: 0; left: 0; right: 0;\n    height: 3px;\n    background: linear-gradient(90deg, var(--primary), var(--accent), var(--accent2));\n    border-radius: 20px 20px 0 0;\n    z-index: 2;\n}\n\n.rs-tech-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 15px;\n    flex-wrap: wrap;\n    margin-bottom: 25px;\n    padding-bottom: 25px;\n    border-bottom: 1px solid var(--border);\n}\n\n.rs-tech-header h2 {\n    font-size: 32px;\n    font-weight: 800;\n    margin: 0;\n    font-family: 'Syne', sans-serif;\n    background: linear-gradient(135deg, var(--text-main) 0%, var(--primary) 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    letter-spacing: -0.5px;\n}\n\n.rs-tech-badge {\n    padding: 8px 20px;\n    border-radius: 100px;\n    background: linear-gradient(135deg, var(--primary), var(--accent2));\n    color: #fff;\n    font-size: 12px;\n    font-weight: 700;\n    font-family: 'Syne', sans-serif;\n    text-transform: uppercase;\n    letter-spacing: 1.5px;\n    box-shadow: 0 4px 16px rgba(0, 87, 255, 0.3);\n}\n\n.rs-tech-lead-text {\n    font-size: 16px;\n    line-height: 1.9;\n    color: var(--text-muted);\n    margin: 0;\n}\n\n.rs-tech-section-title {\n    font-size: 22px;\n    font-weight: 800;\n    font-family: 'Syne', sans-serif;\n    color: var(--text-main);\n    margin: 50px 0 25px 0;\n    position: relative;\n    padding-left: 18px;\n}\n\n.rs-tech-section-title::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 2px;\n    bottom: 2px;\n    width: 4px;\n    background: linear-gradient(180deg, var(--primary), var(--accent));\n    border-radius: 4px;\n}\n\n.rs-tech-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n    gap: 20px;\n    margin-bottom: 40px;\n}\n\n.rs-tech-glass-box {\n    background: rgba(255, 255, 255, 0.9);\n    border: 1px solid var(--border);\n    border-radius: 16px;\n    padding: 30px 25px;\n    text-align: left;\n    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n    box-shadow: 0 4px 16px rgba(0, 87, 255, 0.05);\n}\n\n.rs-tech-glass-box:hover {\n    transform: translateY(-6px);\n    box-shadow: 0 16px 40px rgba(0, 87, 255, 0.12);\n}\n\n.tech-border-slate:hover { border-color: #94a3b8; box-shadow: 0 16px 40px rgba(100,116,139,0.15); }\n.tech-border-cyan:hover { border-color: var(--accent); box-shadow: 0 16px 40px var(--glow-cyan); }\n.tech-border-emerald:hover { border-color: var(--emerald); box-shadow: 0 16px 40px var(--glow-green); }\n.tech-border-indigo:hover { border-color: var(--accent2); box-shadow: 0 16px 40px var(--glow-purple); }\n\n.rs-tech-icon {\n    font-size: 24px;\n    margin-bottom: 20px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 60px;\n    height: 60px;\n    border-radius: 14px;\n    border: 1px solid var(--border);\n}\n\n.tech-glow-slate { background: linear-gradient(135deg, #f1f5f9, #e2e8f0); }\n.tech-glow-cyan  { background: linear-gradient(135deg, #e0f9ff, #b8f0ff); }\n.tech-glow-emerald { background: linear-gradient(135deg, #d4f9ed, #a7f3d0); }\n.tech-glow-indigo { background: linear-gradient(135deg, #ede9fe, #ddd6fe); }\n\n.rs-tech-glass-box h3 {\n    margin: 0 0 12px 0;\n    font-size: 17px;\n    font-family: 'Syne', sans-serif;\n    color: var(--text-main);\n    font-weight: 700;\n}\n\n.rs-tech-glass-box p {\n    margin: 0;\n    font-size: 14.5px;\n    line-height: 1.75;\n    color: var(--text-muted);\n}\n\n.rs-tech-footer-card {\n    background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(240,245,255,0.95));\n    border: 1px solid var(--border);\n    border-radius: 16px;\n    padding: 35px;\n    box-shadow: 0 4px 20px rgba(0, 87, 255, 0.06);\n    position: relative;\n    overflow: hidden;\n}\n\n.rs-tech-footer-card::before {\n    content: '';\n    position: absolute;\n    bottom: 0; left: 0; right: 0;\n    height: 3px;\n    background: linear-gradient(90deg, var(--accent2), var(--primary), var(--accent));\n    border-radius: 0 0 16px 16px;\n}\n\n.rs-tech-flex-row {\n    display: flex;\n    gap: 35px;\n    align-items: stretch;\n}\n\n.rs-tech-text-block { flex: 1; }\n\n.rs-tech-divider-vertical {\n    width: 1px;\n    background: linear-gradient(180deg, transparent, var(--border), transparent);\n}\n\n.rs-tech-text-block h4 {\n    margin: 0 0 10px 0;\n    font-size: 16px;\n    font-weight: 700;\n    font-family: 'Syne', sans-serif;\n    color: var(--text-main);\n}\n\n.rs-tech-text-block p {\n    margin: 0;\n    font-size: 14px;\n    line-height: 1.8;\n    color: var(--text-muted);\n}\n\n@media(max-width: 900px) {\n    .rs-tech-flex-row { flex-direction: column; gap: 25px; }\n    .rs-tech-divider-vertical { display: none; }\n    .rs-tech-text-block { border-bottom: 1px solid var(--border); padding-bottom: 20px; }\n    .rs-tech-text-block:last-child { border-bottom: none; padding-bottom: 0; }\n}\n\n@media(max-width: 768px) {\n    .rs-tech-wrapper { padding: 20px; }\n    .rs-tech-glass-card { padding: 25px; }\n    .rs-tech-header h2 { font-size: 24px; }\n    .rs-tech-grid { grid-template-columns: 1fr; }\n    .rs-tech-glass-box, .rs-tech-footer-card { padding: 22px; }\n}\n</style>",
    "is_new": false,
    "release_notes": "Addressed localized desynchronization within the visual pacing engine. The client-side architecture now effectively utilizes render-thread isolation, ensuring that background cryptographic handshakes no longer induce micro-stutters during rapid drag-and-drop tactical inputs.",
    "serial_number": 17,
    "seo_keywords": "INR Rummy render-thread isolation, input-polling frequency, frame-buffer pacing audit, INR Rummy system diagnostic",
    "description_html": "<!-- SAFE INR RUMMY GLASSMORPHISM LISTING -->\n<!-- Fully scoped, uniquely written, safe for your website UI, E-Sports Compliant -->\n\n<section class=\"rs-inrr-wrapper\">\n\n    <div class=\"rs-inrr-glass-card\">\n\n        <!-- HEADER -->\n        <div class=\"rs-inrr-header\">\n            <h2>INR Rummy Interface</h2>\n            <span class=\"rs-inrr-badge\">National Strategy Arena</span>\n        </div>\n\n        <!-- GLASSY VIRTUAL BONUS SYSTEM -->\n        <div class=\"rs-inrr-bonus-container\">\n            <div class=\"rs-inrr-glass-box highlight-box\">\n                <span class=\"rs-inrr-bonus-title\">Virtual Welcome</span>\n                <span class=\"rs-inrr-bonus-amount\">91K</span>\n                <span class=\"rs-inrr-bonus-sub\">Practice Chips</span>\n            </div>\n            <div class=\"rs-inrr-glass-box\">\n                <span class=\"rs-inrr-bonus-title\">Daily Milestone</span>\n                <span class=\"rs-inrr-bonus-amount\">20K</span>\n                <span class=\"rs-inrr-bonus-sub\">Steady Login Reward</span>\n            </div>\n            <div class=\"rs-inrr-glass-box\">\n                <span class=\"rs-inrr-bonus-title\">Guest Access</span>\n                <span class=\"rs-inrr-bonus-amount\">Instant</span>\n                <span class=\"rs-inrr-bonus-sub\">No Login Needed</span>\n            </div>\n        </div>\n\n        <p class=\"rs-inrr-description\">\n            INR Rummy provides a premium, highly streamlined card platform designed for strategic enthusiasts. Built with a focus on tactical precision and seamless board aesthetics, this digital hub allows you to master classic card formats cleanly. Whether you are practicing layout sorting or refining valid sequences, INR Rummy offers a risk-free, competitive arena to play instantly.\n        </p>\n\n        <!-- SEO ENHANCEMENT: APP DETAILS TABLE -->\n        <div class=\"rs-inrr-section-title\">Platform Specifications</div>\n        <div class=\"rs-inrr-table-wrapper\">\n            <table class=\"rs-inrr-table\">\n                <tbody>\n                    <tr>\n                        <td><strong>Application Name</strong></td>\n                        <td>INR Rummy (Review)</td>\n                        <td><strong>Gaming Category</strong></td>\n                        <td>Card / Strategy Game</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Welcome Reward</strong></td>\n                        <td>91,000 (Virtual Only)</td>\n                        <td><strong>Ongoing Rewards</strong></td>\n                        <td>Tasks & Progression</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Network Play</strong></td>\n                        <td>Guest Multiplayer</td>\n                        <td><strong>Game Lobbies</strong></td>\n                        <td>Casual Practice Tables</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Privacy</strong></td>\n                        <td>No Personal Info Required</td>\n                        <td><strong>Customer Help</strong></td>\n                        <td>24/7 In-App Guide</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n\n        <!-- SEO ENHANCEMENT: FEATURES GRID -->\n        <div class=\"rs-inrr-section-title\">Professional Gaming Features</div>\n        <div class=\"rs-inrr-grid\">\n            <div class=\"rs-inrr-glass-box rounded-style\">\n                <div class=\"rs-inrr-icon\">♦️</div>\n                <h3>Standard Lobbies</h3>\n                <p>Join clear, intuitive virtual rooms where enthusiasts match skills on dedicated practice tables to hone their execution timings.</p>\n            </div>\n            <div class=\"rs-inrr-glass-box rounded-style\">\n                <div class=\"rs-inrr-icon\">🔒</div>\n                <h3>100% Anonymous</h3>\n                <p>Enjoy the card action immediately as a guest player without sharing phone numbers, filling configurations, or utilizing OTP systems.</p>\n            </div>\n            <div class=\"rs-inrr-glass-box rounded-style\">\n                <div class=\"rs-inrr-icon\">🛡️</div>\n                <h3>Standard RNG</h3>\n                <p>Fairness remains fundamental. The card distribution relies on a verified Random Number Generator algorithm to keep dealing purely mathematical.</p>\n            </div>\n            <div class=\"rs-inrr-glass-box rounded-style\">\n                <div class=\"rs-inrr-icon\">📱</div>\n                <h3>Modern Interface</h3>\n                <p>Experience zero visual clutter. Ad-free layouts with crisp responsive sorting features ensure your card melding remains entirely uninterrupted.</p>\n            </div>\n        </div>\n\n        <!-- SEO ENHANCEMENT: HOW TO PLAY -->\n        <div class=\"rs-inrr-section-title\">Steps to Start Your Virtual Practice</div>\n        <div class=\"rs-inrr-glass-box rs-inrr-list-box\">\n            <ol>\n                <li><strong>Launch the App:</strong> Open the official application natively on your smart device.</li>\n                <li><strong>Play Instantly:</strong> Enter the dashboard right away via guest mode without any registration paths.</li>\n                <li><strong>Collect Rewards:</strong> Check your localized points wallet to find your 91K welcome balance ready.</li>\n                <li><strong>Join the Table:</strong> Select your preferred variation tier and test your strategic card arrangements.</li>\n                <li><strong>Track Milestones:</strong> Record your logical victories and evaluate strategy progression on local leaderboards.</li>\n            </ol>\n        </div>\n\n        <!-- SEO ENHANCEMENT: FAQ ACCORDION -->\n        <div class=\"rs-inrr-section-title\">Frequently Asked Questions (FAQs)</div>\n        <div class=\"rs-inrr-faq-container\">\n            <details class=\"rs-inrr-faq\">\n                <summary>Is INR Rummy stable for continuous practice?</summary>\n                <p>Yes. The build is fully optimized to provide lag-free sorting transitions, keeping your training runs steady across basic mobile networks.</p>\n            </details>\n            <details class=\"rs-inrr-faq\">\n                <summary>What makes a Pure Sequence?</summary>\n                <p>A pure sequence consists of three or more consecutive cards belonging to the same identical suit, organized strictly without using a Joker.</p>\n            </details>\n            <details class=\"rs-inrr-faq\">\n                <summary>Do I need to provide my phone number?</summary>\n                <p>No, registration is completely optional. You can experience every practice variant in full guest mode without completing any OTP check.</p>\n            </details>\n        </div>\n\n        <!-- SAFE SEO KEYWORD CLOUD -->\n        <div class=\"rs-inrr-section-title\">Related Search Tags</div>\n        <div class=\"rs-inrr-keywords\">\n            <span>inr rummy</span> <span>inr rummy app</span> <span>inr rummy game</span> <span>inr rummy online</span> <span>inr rummy play</span> <span>inr rummy review</span> <span>inr rummy features</span> <span>inr rummy casual</span> <span>inr rummy interface</span> <span>inr rummy practice</span> <span>inr rummy guest mode</span> <span>inr rummy bonuses</span> <span>inr rummy rewards</span> <span>inr rummy daily check-in</span> <span>inr rummy virtual chips</span> <span>inr rummy welcome bonus</span> <span>inr rummy card game</span> <span>inr rummy strategy</span> <span>inr rummy UI</span> <span>inr rummy leaderboard</span> <span>inr rummy support</span> <span>inr rummy offline</span> <span>inr rummy local play</span> <span>inr rummy mechanics</span> <span>inr rummy gameplay</span> <span>inr rummy variants</span> <span>inr rummy points</span> <span>inr rummy deals</span> <span>inr rummy pool</span> <span>inr rummy RNG</span> <span>inr rummy updates</span> <span>inr rummy latest version</span> <span>inr rummy guide</span> <span>inr rummy tips</span> <span>inr rummy tricks</span> <span>how to play inr rummy</span> <span>win in inr rummy</span> <span>inr rummy safe</span> <span>inr rummy anonymous</span> <span>inr rummy no login</span> <span>inr rummy graphics</span> <span>inr rummy animation</span> <span>inr rummy mobile app</span> <span>inr rummy android</span> <span>inr rummy virtual portal</span> <span>inr rummy skill game</span>\n        </div>\n\n    </div>\n</section>\n\n<style>\n/* SAFE SCOPED CSS - INR RUMMY THEME (DEEP JADE/EMERALD GLASS) */\n\n.rs-inrr-wrapper {\n    width: 100%;\n    margin: 40px 0;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif;\n    background: linear-gradient(145deg, #0a2f1d 0%, #114227 100%);\n    padding: 25px;\n    border-radius: 30px;\n    box-sizing: border-box;\n}\n\n.rs-inrr-wrapper * {\n    box-sizing: border-box;\n}\n\n/* THE GLASS CARD */\n.rs-inrr-glass-card {\n    background: rgba(255, 255, 255, 0.04);\n    backdrop-filter: blur(22px);\n    -webkit-backdrop-filter: blur(22px);\n    border-radius: 24px;\n    padding: 40px;\n    border: 1px solid rgba(46, 204, 113, 0.2);\n    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.6);\n}\n\n.rs-inrr-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 15px;\n    flex-wrap: wrap;\n    margin-bottom: 30px;\n    padding-bottom: 20px;\n    border-bottom: 1px solid rgba(46, 204, 113, 0.3);\n}\n\n.rs-inrr-header h2 {\n    font-size: 38px;\n    font-weight: 900;\n    margin: 0;\n    background: linear-gradient(135deg, #2ecc71, #a3e635);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    letter-spacing: -1px;\n}\n\n.rs-inrr-badge {\n    padding: 8px 22px;\n    border-radius: 4px;\n    background: linear-gradient(135deg, rgba(46, 204, 113, 0.15), rgba(163, 230, 53, 0.05));\n    color: #2ecc71;\n    font-size: 13px;\n    font-weight: 800;\n    border: 1px solid rgba(46, 204, 113, 0.4);\n    text-transform: uppercase;\n    letter-spacing: 1px;\n}\n\n/* GLASSY BOXES */\n.rs-inrr-bonus-container, .rs-inrr-grid {\n    display: grid;\n    gap: 20px;\n    margin-bottom: 35px;\n}\n\n.rs-inrr-bonus-container {\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n}\n\n.rs-inrr-grid {\n    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n}\n\n.rs-inrr-glass-box {\n    background: rgba(255, 255, 255, 0.02);\n    border: 1px solid rgba(46, 204, 113, 0.15);\n    border-radius: 16px; \n    padding: 25px;\n    text-align: left;\n    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);\n    transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;\n}\n\n.rs-inrr-glass-box:hover {\n    transform: translateY(-5px);\n    box-shadow: 0 12px 30px rgba(46, 204, 113, 0.2);\n    border-color: rgba(46, 204, 113, 0.6);\n    background: rgba(255, 255, 255, 0.05);\n}\n\n.rs-inrr-bonus-container .rs-inrr-glass-box {\n    text-align: center;\n}\n\n.highlight-box {\n    background: linear-gradient(135deg, rgba(46, 204, 113, 0.1), rgba(0, 0, 0, 0));\n    border: 1px solid rgba(46, 204, 113, 0.5);\n}\n\n.rs-inrr-bonus-title {\n    display: block;\n    font-size: 13px;\n    font-weight: 800;\n    color: #e0e0e0;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    letter-spacing: 1.5px;\n}\n\n.rs-inrr-bonus-amount {\n    display: block;\n    font-size: 44px;\n    font-weight: 900;\n    background: linear-gradient(135deg, #2ecc71, #ccff33);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    margin-bottom: 8px;\n    line-height: 1;\n}\n\n.rs-inrr-bonus-sub {\n    display: block;\n    font-size: 13px;\n    color: #a0a0a0;\n    font-weight: 500;\n}\n\n.rs-inrr-section-title {\n    font-size: 24px;\n    font-weight: 800;\n    color: #ffffff;\n    margin: 45px 0 25px 0;\n    position: relative;\n    padding-left: 18px;\n}\n\n.rs-inrr-section-title::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    height: 80%;\n    width: 4px;\n    background: linear-gradient(to bottom, #2ecc71, #114227);\n    border-radius: 10px;\n}\n\n.rs-inrr-description {\n    line-height: 1.9;\n    font-size: 16px;\n    color: #e0e0e0;\n    margin-bottom: 30px;\n    padding: 25px;\n    background: rgba(0, 0, 0, 0.35);\n    border-radius: 16px;\n    border-left: 4px solid #2ecc71;\n    box-shadow: inset 0 0 20px rgba(0,0,0,0.5);\n}\n\n/* APP SPECS TABLE */\n.rs-inrr-table-wrapper {\n    overflow-x: auto;\n    margin-bottom: 30px;\n    border-radius: 16px;\n    border: 1px solid rgba(46, 204, 113, 0.2);\n    background: rgba(0, 0, 0, 0.4);\n}\n\n.rs-inrr-table {\n    width: 100%;\n    border-collapse: collapse;\n    font-size: 15px;\n}\n\n.rs-inrr-table td {\n    padding: 18px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n    color: #c0c0c0;\n}\n\n.rs-inrr-table tr:last-child td {\n    border-bottom: none;\n}\n\n.rs-inrr-table td strong {\n    color: #2ecc71;\n}\n\n/* FEATURES GRID ICONS */\n.rs-inrr-icon {\n    font-size: 28px;\n    margin-bottom: 18px;\n    background: linear-gradient(135deg, #1f1f1f, #000000);\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 55px;\n    height: 55px;\n    border-radius: 12px; \n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);\n    border: 1px solid rgba(46, 204, 113, 0.3);\n}\n\n.rs-inrr-glass-box h3 {\n    margin: 0 0 12px 0;\n    font-size: 19px;\n    color: #ccff33;\n    font-weight: 800;\n}\n\n.rs-inrr-glass-box p {\n    margin: 0;\n    font-size: 15px;\n    line-height: 1.7;\n    color: #b0b0b0;\n}\n\n/* HOW TO LIST */\n.rs-inrr-list-box ol {\n    margin: 0;\n    padding-left: 20px;\n    color: #e0e0e0;\n}\n\n.rs-inrr-list-box li {\n    margin-bottom: 15px;\n    line-height: 1.7;\n    font-size: 15px;\n}\n\n.rs-inrr-list-box li:last-child {\n    margin-bottom: 0;\n}\n\n.rs-inrr-list-box strong {\n    color: #2ecc71;\n}\n\n/* FAQ ACCORDION */\n.rs-inrr-faq-container {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    margin-bottom: 30px;\n}\n\n.rs-inrr-faq {\n    background: rgba(0, 0, 0, 0.4);\n    border: 1px solid rgba(46, 204, 113, 0.2);\n    border-radius: 16px;\n    padding: 18px 22px;\n    transition: all 0.3s ease;\n}\n\n.rs-inrr-faq[open] {\n    background: rgba(46, 204, 113, 0.05);\n    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);\n    border-color: rgba(46, 204, 113, 0.6);\n}\n\n.rs-inrr-faq summary {\n    font-weight: 800;\n    font-size: 16px;\n    color: #2ecc71;\n    cursor: pointer;\n    list-style: none;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.rs-inrr-faq summary::-webkit-details-marker {\n    display: none;\n}\n\n.rs-inrr-faq summary::after {\n    content: '+';\n    font-size: 22px;\n    color: #ffffff;\n    transition: transform 0.3s;\n}\n\n.rs-inrr-faq[open] summary::after {\n    content: '−';\n    transform: rotate(180deg);\n}\n\n.rs-inrr-faq p {\n    margin: 15px 0 0 0;\n    color: #b0b0b0;\n    line-height: 1.7;\n    font-size: 15px;\n    border-top: 1px solid rgba(255, 255, 255, 0.1);\n    padding-top: 15px;\n}\n\n/* KEYWORD FRAMES WITH CUSTOM SCROLLBAR */\n.rs-inrr-keywords {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 12px;\n    max-height: 320px;\n    overflow-y: auto;\n    padding-right: 15px;\n}\n\n.rs-inrr-keywords::-webkit-scrollbar {\n    width: 6px;\n}\n.rs-inrr-keywords::-webkit-scrollbar-track {\n    background: rgba(255, 255, 255, 0.05);\n    border-radius: 10px;\n}\n.rs-inrr-keywords::-webkit-scrollbar-thumb {\n    background: rgba(46, 204, 113, 0.3);\n    border-radius: 10px;\n}\n\n.rs-inrr-keywords span {\n    padding: 9px 18px;\n    border-radius: 8px; \n    background: rgba(0, 0, 0, 0.5); \n    border: 1px solid rgba(46, 204, 113, 0.3); \n    color: #e0e0e0; \n    font-size: 13px;\n    font-weight: 600;\n    transition: all 0.2s ease;\n    cursor: default;\n    box-shadow: 0 2px 5px rgba(0,0,0,0.01);\n}\n\n.rs-inrr-keywords span:hover {\n    background: linear-gradient(135deg, #2ecc71, #a3e635);\n    color: #000000;\n    border-color: #ccff33;\n    transform: translateY(-2px);\n    box-shadow: 0 5px 12px rgba(46, 204, 113, 0.3);\n}\n\n/* MOBILE RESPONSIVENESS */\n@media(max-width: 768px) {\n    .rs-inrr-wrapper {\n        padding: 15px;\n    }\n    .rs-inrr-glass-card {\n        padding: 25px;\n    }\n    .rs-inrr-header h2 {\n        font-size: 30px;\n    }\n    .rs-inrr-table td {\n        display: block;\n        width: 100%;\n        text-align: left;\n        padding: 12px 18px;\n    }\n    .rs-inrr-table td:nth-child(odd) {\n        background: rgba(255, 255, 255, 0.02);\n        border-bottom: none;\n    }\n}\n</style>\n",
    "version": "3.0",
    "icon_url": "https://13eehe59cj.ucarecd.net/2a718650-0602-495f-9ca4-b13c86e58c02/-/preview/190x190/",
    "custom_admin_box_heading": "[ ✦ RENDER-THREAD ISOLATION // FRAME-BUFFER AUDIT ]",
    "yellow_box_msg": "To achieve the seamless input-polling frequencies detailed in this diagnostic, ensure your device's digitizer and active RAM are not bottlenecked by background applications. Render-thread isolation requires sustained, unfragmented memory allocation to dynamically update UI states without dropping touch registrations.",
    "seo_title": "INR Rummy System Architecture: Render-Thread Isolation (2026)",
    "is_featured": false,
    "rating": 5,
    "red_box_msg": "The render-thread metrics and input-polling speeds analyzed in this audit assume a verified, unmodified software build. Sideloaded APKs inherently corrupt the native isolation logic, resulting in severe frame-dropping and localized execution crashes. Always secure your application binaries exclusively through official developer nodes.",
    "name": "INR Rummy",
    "target_region": "India (Tier 1 & Tier 2 Search Optimization)",
    "features_html": "",
    "created_at": "2026-05-26T07:21:55.085Z",
    "safety_status": "Verified",
    "idea_box_msg": "Do not force tactical inputs faster than the localized software can poll your hardware. Observe the frame-buffer response time of the interface. Aligning your physical interactions precisely with the engine's internal input-polling rhythm guarantees optimal tactile accuracy and reduces localized input rejection.",
    "is_coming_soon": true,
    "slug": "inr-rummy",
    "category": "Yono",
    "seo_description": "Explore the INR Rummy system architecture. RummyApp Online provides an independent audit of render-thread isolation, input-polling, and frame-buffer pacing.",
    "id": "2f90a87hv",
    "video_url": "",
    "is_hot": false,
    "file_size": "79",
    "canonical_url": "https://www.rummydex.com/inr-rummy",
    "og_image_url": "https://13eehe59cj.ucarecd.net/2a718650-0602-495f-9ca4-b13c86e58c02/-/preview/190x190/",
    "developer": "Arcade "
  },
  {
    "og_image_url": "",
    "developer": "PW sahar",
    "file_size": "2.4",
    "canonical_url": "",
    "video_url": "",
    "is_hot": false,
    "id": "9a05609sb",
    "seo_description": "",
    "safety_status": "Verified",
    "created_at": "2026-05-26T07:26:42.606Z",
    "target_region": "",
    "name": "JAIHO RUMMY ",
    "features_html": "",
    "red_box_msg": "",
    "rating": 3.9,
    "category": "Yono",
    "slug": "jaiho-rummy-",
    "is_coming_soon": true,
    "idea_box_msg": "",
    "custom_admin_box_heading": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/c693366d-d543-4d76-84ba-3963a3f3c792/-/preview/190x190/",
    "description_html": "<p>A new application.</p>",
    "version": "2.1",
    "is_featured": false,
    "seo_title": "",
    "yellow_box_msg": "",
    "custom_admin_box_html": "",
    "faqs": [],
    "screenshots": [],
    "link_configured": false,
    "seo_keywords": "",
    "serial_number": 18,
    "release_notes": "",
    "is_new": true
  },
  {
    "name": "Love Rummy",
    "target_region": "",
    "features_html": "",
    "red_box_msg": "",
    "rating": 4.2,
    "safety_status": "Verified",
    "created_at": "2026-05-26T07:31:59.173Z",
    "idea_box_msg": "",
    "is_coming_soon": true,
    "category": "Yono",
    "slug": "love-rummy",
    "video_url": "",
    "is_hot": false,
    "id": "l7a60keix",
    "seo_description": "",
    "og_image_url": "",
    "developer": "Mak job",
    "file_size": "68",
    "canonical_url": "",
    "link_configured": false,
    "custom_admin_box_html": "",
    "screenshots": [],
    "faqs": [],
    "release_notes": "",
    "is_new": false,
    "seo_keywords": "",
    "serial_number": 19,
    "icon_url": "https://13eehe59cj.ucarecd.net/cf0b4466-3d5b-4eb5-bc88-afc9a8213ac4/-/preview/190x190/",
    "description_html": "<p>A new application.</p>",
    "version": "1.6",
    "custom_admin_box_heading": "",
    "seo_title": "",
    "yellow_box_msg": "",
    "is_featured": false
  },
  {
    "created_at": "2026-05-26T07:34:35.782Z",
    "safety_status": "Verified",
    "target_region": "",
    "name": "JOY RUMMY",
    "features_html": "",
    "rating": 5,
    "red_box_msg": "",
    "category": "Yono",
    "slug": "joy-rummy",
    "idea_box_msg": "",
    "is_coming_soon": true,
    "og_image_url": "",
    "developer": "AB Arora",
    "file_size": "50",
    "canonical_url": "",
    "video_url": "",
    "is_hot": false,
    "id": "4paka7kie",
    "seo_description": "",
    "custom_admin_box_html": "",
    "faqs": [],
    "screenshots": [],
    "link_configured": false,
    "seo_keywords": "",
    "serial_number": 20,
    "release_notes": "",
    "is_new": false,
    "custom_admin_box_heading": "",
    "icon_url": "https://13eehe59cj.ucarecd.net/e0898894-5d5b-47ab-a14f-13b4514b3b4f/-/preview/190x190/",
    "description_html": "<p>A new application.</p>",
    "version": "1.8",
    "is_featured": false,
    "seo_title": "",
    "yellow_box_msg": ""
  },
  {
    "seo_description": "",
    "id": "2768ohu2a",
    "video_url": "",
    "is_hot": false,
    "file_size": "70",
    "canonical_url": "",
    "og_image_url": "",
    "developer": "AZ ever",
    "idea_box_msg": "",
    "is_coming_soon": true,
    "slug": "maha-games",
    "category": "Yono",
    "red_box_msg": "",
    "rating": 4,
    "target_region": "",
    "name": "MAHA GAMES",
    "features_html": "",
    "created_at": "2026-05-26T07:37:07.122Z",
    "safety_status": "Verified",
    "yellow_box_msg": "",
    "seo_title": "",
    "is_featured": false,
    "description_html": "<p>A new application.</p>",
    "version": "1.0",
    "icon_url": "https://13eehe59cj.ucarecd.net/2d664adc-3e1f-4317-805c-dea453f52389/-/preview/190x190/",
    "custom_admin_box_heading": "",
    "is_new": false,
    "release_notes": "",
    "serial_number": 21,
    "seo_keywords": "",
    "link_configured": false,
    "screenshots": [],
    "faqs": [],
    "custom_admin_box_html": ""
  },
  {
    "release_notes": "",
    "is_new": false,
    "seo_keywords": "",
    "serial_number": 22,
    "link_configured": false,
    "custom_admin_box_html": "",
    "screenshots": [],
    "faqs": [],
    "seo_title": "",
    "yellow_box_msg": "",
    "is_featured": false,
    "icon_url": "https://13eehe59cj.ucarecd.net/6aa28ca8-cef1-4d1a-b054-13e242eaef02/-/preview/190x190/",
    "version": "5.8",
    "description_html": "<p>A new application.</p>",
    "custom_admin_box_heading": "",
    "is_coming_soon": true,
    "idea_box_msg": "",
    "category": "Yono",
    "slug": "rummy-ludo",
    "features_html": "",
    "name": "Rummy Ludo",
    "target_region": "",
    "red_box_msg": "",
    "rating": 3.9,
    "safety_status": "Verified",
    "created_at": "2026-05-26T07:39:44.282Z",
    "is_hot": false,
    "video_url": "",
    "seo_description": "",
    "id": "us5xuk5bm",
    "developer": "AZ ever",
    "og_image_url": "",
    "canonical_url": "",
    "file_size": "58"
  },
  {
    "file_size": "45",
    "canonical_url": "",
    "og_image_url": "",
    "developer": "Arcade ",
    "seo_description": "",
    "id": "69x1lstq7",
    "video_url": "",
    "is_hot": false,
    "slug": "rummy-77",
    "category": "Yono",
    "idea_box_msg": "",
    "is_coming_soon": true,
    "safety_status": "Verified",
    "created_at": "2026-05-26T07:42:24.615Z",
    "rating": 3.9,
    "red_box_msg": "",
    "name": "Rummy 77",
    "target_region": "",
    "features_html": "",
    "is_featured": false,
    "yellow_box_msg": "",
    "seo_title": "",
    "custom_admin_box_heading": "",
    "description_html": "<p>A new application.</p>",
    "version": "2.0.6",
    "icon_url": "https://13eehe59cj.ucarecd.net/d17abcfc-c8dc-4c36-8558-e3408002d37e/-/preview/190x190/",
    "serial_number": 23,
    "seo_keywords": "",
    "is_new": false,
    "release_notes": "",
    "faqs": [],
    "screenshots": [],
    "custom_admin_box_html": "",
    "link_configured": false
  },
  {
    "idea_box_msg": "",
    "is_coming_soon": true,
    "category": "Yono",
    "slug": "share-slots",
    "name": "Share Slots",
    "target_region": "",
    "features_html": "",
    "red_box_msg": "",
    "rating": 4,
    "safety_status": "Verified",
    "created_at": "2026-05-26T07:44:32.442Z",
    "video_url": "",
    "is_hot": false,
    "id": "j79n2g3l9",
    "seo_description": "",
    "og_image_url": "",
    "developer": "AB Arora",
    "file_size": "58",
    "canonical_url": "",
    "release_notes": "",
    "is_new": false,
    "seo_keywords": "",
    "serial_number": 24,
    "link_configured": true,
    "custom_admin_box_html": "",
    "screenshots": [],
    "faqs": [],
    "seo_title": "",
    "yellow_box_msg": "",
    "is_featured": false,
    "icon_url": "https://13eehe59cj.ucarecd.net/2738be7d-f198-4f70-a7d8-c8eb5f452eb0/-/preview/190x190/",
    "description_html": "<p>A new application.</p>",
    "version": "1.8",
    "custom_admin_box_heading": ""
  },
  {
    "icon_url": "https://13eehe59cj.ucarecd.net/e4314d5e-eb77-46b9-8998-8e0f94970b38/-/preview/72x72/",
    "version": "1.6",
    "description_html": "<p>A new application.</p>",
    "custom_admin_box_heading": "",
    "seo_title": "",
    "yellow_box_msg": "",
    "is_featured": false,
    "link_configured": false,
    "custom_admin_box_html": "",
    "faqs": [],
    "screenshots": [],
    "release_notes": "",
    "is_new": false,
    "seo_keywords": "",
    "serial_number": 26,
    "is_hot": false,
    "video_url": "",
    "seo_description": "",
    "id": "n3w2vjk0b",
    "developer": "Tania JK ",
    "og_image_url": "",
    "canonical_url": "",
    "file_size": "65",
    "features_html": "",
    "name": "567 SLOTS",
    "target_region": "",
    "red_box_msg": "",
    "rating": 3.5,
    "safety_status": "Verified",
    "created_at": "2026-05-26T07:51:47.637Z",
    "idea_box_msg": "",
    "is_coming_soon": true,
    "category": "Yono",
    "slug": "567-slots"
  },
  {
    "icon_url": "https://13eehe59cj.ucarecd.net/a0cedc36-33b0-4e75-a1ea-cd963b3ee0ca/-/preview/190x190/",
    "description_html": "<p>A new application.</p>",
    "version": "1.9",
    "custom_admin_box_heading": "",
    "seo_title": "",
    "yellow_box_msg": "",
    "is_featured": false,
    "link_configured": false,
    "custom_admin_box_html": "",
    "faqs": [],
    "screenshots": [],
    "release_notes": "",
    "is_new": false,
    "seo_keywords": "",
    "serial_number": 27,
    "video_url": "",
    "is_hot": false,
    "id": "owxg4aekg",
    "seo_description": "",
    "og_image_url": "",
    "developer": "Admin",
    "file_size": "Tanu WD",
    "canonical_url": "",
    "name": "789Jackpots",
    "target_region": "",
    "features_html": "",
    "rating": 2.9,
    "red_box_msg": "",
    "created_at": "2026-05-26T07:56:30.478Z",
    "safety_status": "Verified",
    "is_coming_soon": true,
    "idea_box_msg": "",
    "category": "Yono",
    "slug": "789jackpots"
  },
  {
    "slug": "rummydex-vip",
    "category": "Yono",
    "idea_box_msg": "",
    "is_coming_soon": true,
    "created_at": "2026-05-26T08:00:01.636Z",
    "safety_status": "Verified",
    "rating": 4,
    "red_box_msg": "",
    "name": "RUMMY DEX VIP",
    "target_region": "",
    "features_html": "",
    "file_size": "78",
    "canonical_url": "",
    "og_image_url": "",
    "developer": "Rahul HL",
    "seo_description": "",
    "id": "fw5wsziec",
    "video_url": "",
    "is_hot": false,
    "serial_number": 28,
    "seo_keywords": "",
    "is_new": false,
    "release_notes": "",
    "screenshots": [],
    "faqs": [],
    "custom_admin_box_html": "",
    "link_configured": false,
    "is_featured": false,
    "yellow_box_msg": "",
    "seo_title": "",
    "custom_admin_box_heading": "",
    "description_html": "<p>A new application.</p>",
    "version": "1.8",
    "icon_url": "https://13eehe59cj.ucarecd.net/d9226164-7447-425e-ba61-618d72ed28df/-/preview/190x190/"
  },
  {
    "idea_box_msg": "",
    "is_coming_soon": true,
    "slug": "teen-patti-octro",
    "category": "Card",
    "rating": 4.2,
    "red_box_msg": "",
    "features_html": "",
    "target_region": "",
    "name": "Teen Patti Octro",
    "safety_status": "Verified",
    "publish_date": "2026-06-10T12:00:00.000Z",
    "created_at": "2026-06-03T10:17:01.058Z",
    "seo_description": "",
    "id": "t1ocq5iar",
    "video_url": "",
    "canonical_url": "",
    "file_size": "90",
    "developer": "Unknown ",
    "og_image_url": "",
    "is_new": true,
    "release_notes": "",
    "serial_number": 34,
    "seo_keywords": "",
    "link_configured": false,
    "faqs": [],
    "screenshots": [],
    "custom_admin_box_html": "",
    "yellow_box_msg": "",
    "seo_title": "",
    "is_featured": false,
    "version": "3",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://kk19a1nwwx.ucarecd.net/091fdebe-1562-41c6-99ea-b60665adb5ee/-/preview/512x512/",
    "custom_admin_box_heading": ""
  },
  {
    "is_coming_soon": true,
    "idea_box_msg": "",
    "category": "Card",
    "slug": "zynga-poker-texas-holdem-game",
    "name": "Zynga Poker- Texas Holdem Game",
    "target_region": "",
    "features_html": "",
    "red_box_msg": "",
    "rating": 5,
    "created_at": "2026-06-03T10:30:01.393Z",
    "safety_status": "Verified",
    "video_url": "",
    "seo_description": "",
    "id": "rrmv44n9n",
    "og_image_url": "",
    "developer": "Admin",
    "file_size": "Unknown",
    "canonical_url": "",
    "release_notes": "",
    "is_new": false,
    "seo_keywords": "",
    "serial_number": 29,
    "link_configured": false,
    "custom_admin_box_html": "",
    "faqs": [],
    "screenshots": [],
    "seo_title": "",
    "yellow_box_msg": "",
    "is_featured": false,
    "icon_url": "https://kk19a1nwwx.ucarecd.net/5b72cf8f-4959-426e-9e1d-8e2150529efb/-/preview/240x240/",
    "description_html": "<p>A new application.</p>",
    "version": "1.0",
    "custom_admin_box_heading": ""
  },
  {
    "slug": "uno-",
    "category": "Card",
    "is_coming_soon": true,
    "idea_box_msg": null,
    "safety_status": "Verified",
    "created_at": "2026-06-07T10:14:11.138Z",
    "red_box_msg": null,
    "rating": 5,
    "features_html": null,
    "name": "UNO! ",
    "target_region": "",
    "canonical_url": "",
    "file_size": "Unknown",
    "developer": "Admin",
    "og_image_url": "",
    "id": "wf59smk6l",
    "seo_description": "",
    "serial_number": 30,
    "seo_keywords": "",
    "is_new": true,
    "release_notes": "",
    "screenshots": [],
    "faqs": [],
    "custom_admin_box_html": null,
    "link_configured": true,
    "is_featured": false,
    "yellow_box_msg": null,
    "seo_title": "",
    "custom_admin_box_heading": null,
    "version": "1.0",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://1ewg1yyass.ucarecd.net/c0172402-c854-4016-876e-6b7769547c8f/-/preview/238x211/"
  },
  {
    "seo_description": "",
    "id": "8epj9jjpu",
    "canonical_url": "",
    "file_size": "Unknown",
    "developer": "Admin",
    "og_image_url": "",
    "is_coming_soon": true,
    "idea_box_msg": "",
    "slug": "rummy-gold-with-fast-rummy",
    "category": "Card",
    "rating": 5,
    "red_box_msg": "",
    "name": "Rummy GOLD - With Fast Rummy",
    "target_region": "",
    "safety_status": "Verified",
    "created_at": "2026-06-07T10:16:45.949Z",
    "yellow_box_msg": "",
    "seo_title": "",
    "is_featured": false,
    "version": "1.0",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://1ewg1yyass.ucarecd.net/33e0d4e8-6e41-4791-9e41-8d915a12e504/-/preview/447x447/",
    "custom_admin_box_heading": "",
    "is_new": false,
    "release_notes": "",
    "serial_number": 31,
    "seo_keywords": "",
    "link_configured": true,
    "screenshots": [],
    "faqs": [],
    "custom_admin_box_html": ""
  },
  {
    "is_new": true,
    "release_notes": "",
    "serial_number": 32,
    "seo_keywords": "",
    "link_configured": true,
    "faqs": [],
    "screenshots": [],
    "custom_admin_box_html": null,
    "yellow_box_msg": null,
    "seo_title": "",
    "is_featured": false,
    "description_html": "<p>A new application.</p>",
    "version": "1.0",
    "icon_url": "https://1ewg1yyass.ucarecd.net/2a4b59ef-16a3-4b14-bad3-1c3796af3492/-/preview/447x447/",
    "custom_admin_box_heading": null,
    "idea_box_msg": null,
    "is_coming_soon": true,
    "slug": "indian-rummy-3-patti-card-game",
    "category": "Card",
    "rating": 5,
    "red_box_msg": null,
    "name": "Indian Rummy 3 Patti Card Game",
    "target_region": "",
    "features_html": null,
    "created_at": "2026-06-07T10:19:11.616Z",
    "safety_status": "Verified",
    "id": "8jt0hokyo",
    "seo_description": "",
    "file_size": "Unknown",
    "canonical_url": "",
    "og_image_url": "",
    "developer": "Admin"
  },
  {
    "seo_keywords": "",
    "serial_number": 33,
    "release_notes": "",
    "is_new": false,
    "custom_admin_box_html": "",
    "faqs": [],
    "screenshots": [],
    "link_configured": true,
    "is_featured": false,
    "seo_title": "",
    "yellow_box_msg": "",
    "custom_admin_box_heading": "",
    "icon_url": "https://1ewg1yyass.ucarecd.net/0f918f11-b247-4b5a-9d26-d510dddffbfe/-/preview/447x447/",
    "description_html": "<p>A new application.</p>",
    "version": "1.0",
    "category": "Slots",
    "slug": "lucky-spin-slots",
    "is_coming_soon": true,
    "idea_box_msg": "",
    "safety_status": "Verified",
    "created_at": "2026-06-07T13:13:11.211Z",
    "publish_date": "2026-07-08T13:08:00.000Z",
    "target_region": "",
    "name": "Lucky Spin Slots",
    "features_html": "",
    "rating": 5,
    "red_box_msg": "",
    "og_image_url": "https://1ewg1yyass.ucarecd.net/0f918f11-b247-4b5a-9d26-d510dddffbfe/-/preview/447x447/",
    "developer": "Admin",
    "file_size": "Unknown",
    "canonical_url": "",
    "seo_description": "",
    "id": "01x9h7nfb"
  },
  {
    "description_html": "<p>A new application.</p>",
    "version": "1.0",
    "icon_url": "https://1ewg1yyass.ucarecd.net/9d9339e0-77d4-418b-86f8-0a0e074c1d4e/-/preview/190x190/",
    "custom_admin_box_heading": "",
    "yellow_box_msg": "",
    "seo_title": "",
    "is_featured": false,
    "link_configured": false,
    "screenshots": [],
    "faqs": [],
    "custom_admin_box_html": "",
    "is_new": false,
    "release_notes": "",
    "serial_number": 28,
    "seo_keywords": "",
    "id": "3cflt97b5",
    "seo_description": "",
    "video_url": "",
    "is_hot": false,
    "file_size": "76",
    "canonical_url": "",
    "og_image_url": "",
    "developer": "AB Arora",
    "red_box_msg": "",
    "rating": 4.5,
    "name": "IND Club",
    "target_region": "",
    "features_html": "",
    "publish_date": "2026-06-12T15:30:00.000Z",
    "safety_status": "Verified",
    "created_at": "2026-06-12T12:39:30.407Z",
    "is_coming_soon": true,
    "idea_box_msg": "",
    "slug": "ind-club",
    "category": "Yono, All app"
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
  "logo_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784868178/Make_this_into_a_perfect_circle_format_keeping_the_RUMMY_DEX_text_and_red__20260721_125826_0000_qbszpu.png",
  "favicon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784868178/Make_this_into_a_perfect_circle_format_keeping_the_RUMMY_DEX_text_and_red__20260721_125826_0000_qbszpu.png",
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
  "secure_index_subtitle": "Your independent directory for hand-tested casual games and pure digital entertainment",
  "last_updated": "2026-07-24T04:43:41.521Z",
  "hero_title_color": "sunset-fire",
  "secure_index_title": "Welcome to RummyDex",
  "responsibility_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Platform Responsibility Clause - RummyDex</title>\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\" rel=\"stylesheet\">\n\n    <style>\n        body {\n            font-family: 'Roboto', Arial, sans-serif;\n            line-height: 1.75;\n            background-color: #ffffff;\n            margin: 0;\n            padding: 60px 20px;\n            display: flex;\n            justify-content: center;\n        }\n\n        .about-container {\n            max-width: 720px;\n            width: 100%;\n        }\n\n        h1 {\n            font-size: 40px;\n            font-weight: 700;\n            color: #202124;\n            margin-bottom: 40px;\n            text-align: center;\n            letter-spacing: -0.5px;\n        }\n\n        h2.section-heading {\n            font-size: 28px;\n            font-weight: 500;\n            color: #202124;\n            margin-top: 50px;\n            margin-bottom: 16px;\n            letter-spacing: -0.2px;\n        }\n\n        p.about-text {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            font-weight: 400;\n        }\n\n        .sticker-illustration {\n            text-align: center;\n            margin: 35px auto;\n            padding: 10px;\n        }\n\n        .sticker-illustration img {\n            width: 140px;\n            height: 140px;\n            display: block;\n            margin: 0 auto;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"about-container\">\n        <h1>Platform Responsibility Clause</h1>\n\n        <h2 class=\"section-heading\">1. Technical Operations &amp; Secure Routing</h2>\n        <p class=\"about-text\">\n            Our operational responsibility is strictly limited to the maintenance of the RummyDex directory infrastructure. We ensure that our platform accurately catalogs offline and casual online applications, and that all outbound resource links are generated through a secure, verified process. We guarantee that the links provided on our site correctly route users to the intended, legitimate third-party developer sources at the time of publication.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:gear.svg\" alt=\"Technical Operations Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">2. Limits of Content &amp; Software Liability</h2>\n        <p class=\"about-text\">\n            RummyDex does not host software, APK files, or proprietary source code on our servers. Because our control is strictly limited to our own website interface, we are not liable for the performance, data practices, or digital security of the external third-party destinations. Any downloading or installation of software from external sources is conducted solely at the user's discretion and risk.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:warning.svg\" alt=\"Software Liability Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">3. Post-Listing Developer Modifications</h2>\n        <p class=\"about-text\">\n            While our team conducts hands-on evaluation prior to listing any offline or online application, we do not govern the external developers. We are not responsible for unannounced updates, post-launch mechanic alterations, or software modifications implemented by third parties after an app has been published on our site.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:construction.svg\" alt=\"Post-Listing Modifications Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">4. Policy Enforcement &amp; User Experiences</h2>\n        <p class=\"about-text\">\n            For information regarding how RummyDex handles non-compliant developer updates, community oversight, and user-submitted reviews, please refer to our dedicated Report &amp; Removal Policy and our Terms &amp; Conditions.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:memo.svg\" alt=\"Policy Enforcement Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n    </div>\n\n</body>\n</html>\n",
  "trending_searches": [
    "Yono rummy",
    "Yono Arcade",
    "Bingo 101",
    "Spin crush",
    "UNO!"
  ],
  "social_links": {
    "youtube": "https://www.youtube.com/@rummydex",
    "instagram": "https://www.instagram.com/rummydex?igsh=MTJjaGR3c3hmdjhnZA==",
    "linkedin": "",
    "twitter": "",
    "facebook": ""
  },
  "hero_title_animation": "slide-up",
  "hero_title_subtitle": "Your independent directory for hand-tested casual games and pure digital entertainment.",
  "about_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>About Us - RummyDex</title>\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\" rel=\"stylesheet\">\n\n    <style>\n        body {\n            font-family: 'Roboto', Arial, sans-serif;\n            line-height: 1.75;\n            background-color: #ffffff;\n            margin: 0;\n            padding: 60px 20px;\n            display: flex;\n            justify-content: center;\n        }\n\n        .about-container {\n            max-width: 720px;\n            width: 100%;\n        }\n\n        h1 {\n            font-size: 44px;\n            font-weight: 700;\n            color: #202124;\n            margin-bottom: 40px;\n            text-align: center;\n            letter-spacing: -0.5px;\n        }\n\n        h2.section-heading {\n            font-size: 28px;\n            font-weight: 500;\n            color: #202124;\n            margin-top: 50px;\n            margin-bottom: 16px;\n            letter-spacing: -0.2px;\n        }\n\n        p.about-text {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            font-weight: 400;\n        }\n\n        .sticker-illustration {\n            text-align: center;\n            margin: 35px auto;\n            padding: 10px;\n        }\n\n        .sticker-illustration img {\n            width: 140px;\n            height: 140px;\n            display: block;\n            margin: 0 auto;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"about-container\">\n        <h1>About Us</h1>\n\n        <h2 class=\"section-heading\">The Meaning of \"Dex\" (Who We Are)</h2>\n        <p class=\"about-text\">\n            Welcome to RummyDex. The word \"Dex\" stands for index or directory, which perfectly describes our core identity. We are an independent digital library built to catalog, review, and provide structured, transparent information about casual games and digital applications. Our platform is designed to be a complete informational hub for entertainment enthusiasts.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:card-index-dividers.svg\" alt=\"Index Directory Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">How We Provide Information &amp; Links</h2>\n        <p class=\"about-text\">\n            We function strictly as an informational bridge. Instead of hosting direct software or APK files on our servers, we provide comprehensive technical breakdowns, clear guides, and safe, direct links to third-party developer sources. This ensures that our platform remains fast and secure, and that you always access applications straight from the source.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:link.svg\" alt=\"Direct Links Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">Real Hands-On Testing &amp; Experience</h2>\n        <p class=\"about-text\">\n            We do not just list apps blindly. Before any application is published on our platform, our team conducts a real, hands-on test. We personally experience the app's performance, mechanics, and user interface to ensure it meets our strict entertainment standards before it ever reaches our directory.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:check-mark-button.svg\" alt=\"Hands-on Testing Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">Complete Transparency &amp; Neutrality</h2>\n        <p class=\"about-text\">\n            RummyDex operates with 100% complete transparency and zero developer bias. We act entirely as an independent informational resource. Our goal is to provide honest, neutral, and clear breakdowns so that you can make fully informed choices about your offline and casual online entertainment.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:balance-scale.svg\" alt=\"Transparency and Neutrality Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n    </div>\n\n</body>\n</html>\n",
  "hero_title_visible": true,
  "privacy_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Privacy Policy - RummyDex</title>\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\" rel=\"stylesheet\">\n\n    <style>\n        body {\n            font-family: 'Roboto', Arial, sans-serif;\n            line-height: 1.75;\n            background-color: #ffffff;\n            margin: 0;\n            padding: 60px 20px;\n            display: flex;\n            justify-content: center;\n        }\n\n        .about-container {\n            max-width: 720px;\n            width: 100%;\n        }\n\n        h1 {\n            font-size: 44px;\n            font-weight: 700;\n            color: #202124;\n            margin-bottom: 8px;\n            text-align: center;\n            letter-spacing: -0.5px;\n        }\n\n        .effective-date {\n            text-align: center;\n            font-size: 14px;\n            color: #5f6368;\n            margin-bottom: 40px;\n        }\n\n        h2.section-heading {\n            font-size: 28px;\n            font-weight: 500;\n            color: #202124;\n            margin-top: 50px;\n            margin-bottom: 16px;\n            letter-spacing: -0.2px;\n        }\n\n        p.about-text {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            font-weight: 400;\n        }\n\n        .sticker-illustration {\n            text-align: center;\n            margin: 35px auto;\n            padding: 10px;\n        }\n\n        .sticker-illustration img {\n            width: 140px;\n            height: 140px;\n            display: block;\n            margin: 0 auto;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"about-container\">\n        <h1>Privacy Policy</h1>\n        <p class=\"effective-date\">Effective Date: July 21, 2026</p>\n\n        <h2 class=\"section-heading\">1. Introduction</h2>\n        <p class=\"about-text\">\n            Welcome to RummyDex. This Privacy Policy governs the manner in which RummyDex collects, uses, maintains, and discloses information collected from users visiting our digital directory and software index. We are committed to safeguarding your privacy and ensuring transparency in how your data is handled while you navigate our platform.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:open-book.svg\" alt=\"Privacy Policy Introduction Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">2. Information Collection</h2>\n        <p class=\"about-text\">\n            RummyDex operates strictly as an informational index. We do not require users to create accounts, register, or provide sensitive personal identification information to access our directory.\n        </p>\n        <p class=\"about-text\">\n            We may collect non-personally identifiable information about users whenever they interact with our website. This data is collected automatically and may include the browser name, the type of computer or device, internet service providers, IP addresses, geographical region, and technical information regarding the user's means of connection to our site.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:bar-chart.svg\" alt=\"Information Collection Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">3. Web Browser Cookies</h2>\n        <p class=\"about-text\">\n            Our website uses \"cookies\" to enhance the user experience, analyze site traffic, and optimize our directory structure. A cookie is a small text file placed on a user's hard drive for record-keeping purposes and to track non-personal information. Users may choose to set their web browser to refuse cookies or to alert them when cookies are being sent. Please note that if cookies are disabled, some parts of the site may not function properly.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:cookie.svg\" alt=\"Web Browser Cookies Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">4. Third-Party Services</h2>\n        <p class=\"about-text\">\n            To maintain and support our directory, we may work with standard third-party services for analytics and content delivery. These partners may utilize cookies or similar technologies to provide relevant information and promotions based on your interactions with our site and other websites. You retain full control over your cookie preferences and can adjust, manage, or disable them at any time through your web browser settings or standard network opt-out pages.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:handshake.svg\" alt=\"Third-Party Services Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">5. Secure External Links and Third-Party Applications</h2>\n        <p class=\"about-text\">\n            RummyDex is an informational bridge. We do not host APKs or software files directly on our servers. Instead, we provide safe, correct links to external, third-party software developers through a secure, carefully verified process to ensure users are directed appropriately. When you click on a link and navigate to a third-party application, you are leaving our jurisdiction. We do not control the content, privacy practices, or data collection policies of these external destinations. Interaction with any other website or application is subject to that entity's own terms and policies.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:globe-with-meridians.svg\" alt=\"External Links Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">6. Data Security</h2>\n        <p class=\"about-text\">\n            We adopt appropriate data collection, storage, and processing practices, alongside strict security measures, to protect against unauthorized access, alteration, disclosure, or destruction of your non-personal information and data stored on our site. However, no data transmission over the internet or wireless network can be guaranteed to be 100% secure.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:locked.svg\" alt=\"Data Security Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">7. Acceptance of These Terms</h2>\n        <p class=\"about-text\">\n            By using RummyDex, you signify your acceptance of this Privacy Policy. If you do not agree to this policy, please do not use our site. We reserve the right to update or modify this Privacy Policy at any time. Continued use of the site following the posting of changes to this policy will be deemed your acceptance of those changes.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:balance-scale.svg\" alt=\"Acceptance of Terms Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n    </div>\n\n</body>\n</html>\n",
  "terms_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Terms &amp; Conditions - RummyDex</title>\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\" rel=\"stylesheet\">\n\n    <style>\n        body {\n            font-family: 'Roboto', Arial, sans-serif;\n            line-height: 1.75;\n            background-color: #ffffff;\n            margin: 0;\n            padding: 60px 20px;\n            display: flex;\n            justify-content: center;\n        }\n\n        .about-container {\n            max-width: 720px;\n            width: 100%;\n        }\n\n        h1 {\n            font-size: 44px;\n            font-weight: 700;\n            color: #202124;\n            margin-bottom: 8px;\n            text-align: center;\n            letter-spacing: -0.5px;\n        }\n\n        .effective-date {\n            text-align: center;\n            font-size: 14px;\n            color: #5f6368;\n            margin-bottom: 40px;\n        }\n\n        h2.section-heading {\n            font-size: 28px;\n            font-weight: 500;\n            color: #202124;\n            margin-top: 50px;\n            margin-bottom: 16px;\n            letter-spacing: -0.2px;\n        }\n\n        p.about-text {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            font-weight: 400;\n        }\n\n        ul.about-list {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            padding-left: 24px;\n        }\n\n        ul.about-list li {\n            margin-bottom: 12px;\n        }\n\n        .sticker-illustration {\n            text-align: center;\n            margin: 35px auto;\n            padding: 10px;\n        }\n\n        .sticker-illustration img {\n            width: 140px;\n            height: auto;\n            display: block;\n            margin: 0 auto;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"about-container\">\n        <h1>Terms &amp; Conditions</h1>\n        <p class=\"effective-date\">Effective Date: July 21, 2026</p>\n\n        <h2 class=\"section-heading\">1. Agreement to Terms</h2>\n        <p class=\"about-text\">\n            By accessing or using RummyDex, you agree to be bound by these Terms &amp; Conditions. If you disagree with any part of these terms, you are prohibited from using our website. These terms apply to all visitors, users, and others who access our directory.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:handshake.svg\" alt=\"Agreement to Terms Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">2. Intellectual Property and Copyright</h2>\n        <p class=\"about-text\">\n            The original content, layout, design, and structural organization of the RummyDex directory are the exclusive property of RummyDex. However, we do not claim ownership over the third-party applications listed on our site. All app names, logos, trademarks, and associated digital assets belong to their respective external developers and publishers.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:copyright.svg\" alt=\"Intellectual Property and Copyright Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">3. Acceptable Use of the Directory</h2>\n        <p class=\"about-text\">\n            RummyDex is provided solely for your personal, non-commercial informational use. You agree not to:\n        </p>\n        <ul class=\"about-list\">\n            <li>Use automated scripts, bots, or web scrapers to extract data, reviews, or links from our directory.</li>\n            <li>Interfere with or disrupt the security, servers, or networks connected to our website.</li>\n            <li>Submit false, spam, or malicious reports through our App Reporting system.</li>\n        </ul>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:no-entry.svg\" alt=\"Acceptable Use Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">4. Third-Party Links and Software Disclaimer</h2>\n        <p class=\"about-text\">\n            RummyDex functions as an informational bridge. While we utilize a secure, carefully verified process to provide correct links to external applications, we do not host any software or APK files on our own servers.\n        </p>\n        <p class=\"about-text\">\n            You acknowledge that clicking an external link takes you to a third-party destination that we do not control. You agree that any downloading, installation, or use of third-party software is done entirely at your own risk. RummyDex is not responsible for any damage to your device, loss of data, or other issues resulting from the use of third-party applications discovered through our index.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:warning.svg\" alt=\"Third-Party Software Disclaimer Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">5. App Reporting &amp; Removal Guarantee</h2>\n        <p class=\"about-text\">\n            We maintain a strict zero-tolerance policy for apps that introduce unauthorized real-money gaming (RMG) mechanics. If a user reports an application for violating these standards, we will review the claim and enforce our 100% removal guarantee. We reserve the right to remove, modify, or delist any application from our directory at our sole discretion, without prior notice to the app's developer.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:megaphone.svg\" alt=\"App Reporting and Removal Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">6. Limitation of Liability</h2>\n        <p class=\"about-text\">\n            To the maximum extent permitted by law, RummyDex and its team shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of, or inability to use, our directory or the external applications linked within it. Our platform is provided on an \"as is\" and \"as available\" basis without any warranties of any kind.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:balance-scale.svg\" alt=\"Limitation of Liability Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">7. Modifications to Terms</h2>\n        <p class=\"about-text\">\n            We reserve the right to revise these Terms &amp; Conditions at any time. By continuing to access or use RummyDex after those revisions become effective, you agree to be bound by the revised terms.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:memo.svg\" alt=\"Modifications to Terms Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n    </div>\n\n</body>\n</html>\n",
  "hero_title_style": "serif",
  "seo_keywords": ".",
  "report_removal_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Report &amp; Removal Policy - RummyDex</title>\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\" rel=\"stylesheet\">\n\n    <style>\n        body {\n            font-family: 'Roboto', Arial, sans-serif;\n            line-height: 1.75;\n            background-color: #ffffff;\n            margin: 0;\n            padding: 60px 20px;\n            display: flex;\n            justify-content: center;\n        }\n\n        .about-container {\n            max-width: 720px;\n            width: 100%;\n        }\n\n        h1 {\n            font-size: 40px;\n            font-weight: 700;\n            color: #202124;\n            margin-bottom: 40px;\n            text-align: center;\n            letter-spacing: -0.5px;\n        }\n\n        h2.section-heading {\n            font-size: 28px;\n            font-weight: 500;\n            color: #202124;\n            margin-top: 50px;\n            margin-bottom: 16px;\n            letter-spacing: -0.2px;\n        }\n\n        p.about-text {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            font-weight: 400;\n        }\n\n        p.about-text strong,\n        ul.about-list strong {\n            font-weight: 700;\n            color: #202124;\n        }\n\n        ul.about-list {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            padding-left: 24px;\n        }\n\n        ul.about-list li {\n            margin-bottom: 14px;\n        }\n\n        .sticker-illustration {\n            text-align: center;\n            margin: 35px auto;\n            padding: 10px;\n        }\n\n        .sticker-illustration img {\n            width: 140px;\n            height: 140px;\n            display: block;\n            margin: 0 auto;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"about-container\">\n        <h1>Report &amp; Removal Policy</h1>\n\n        <h2 class=\"section-heading\">1. Our Commitment to a Safe Directory</h2>\n        <p class=\"about-text\">\n            RummyDex is built on the foundation of providing a clean, safe, and purely entertainment-focused digital index. Because third-party developers can update their applications dynamically after we list them, we rely on active community oversight to help us maintain the integrity of our platform. This policy outlines exactly what we do not allow and how we handle non-compliant applications.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:shield.svg\" alt=\"Safe Directory Commitment Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">2. What You Should Report</h2>\n        <p class=\"about-text\">\n            We ask our community to immediately report any application listed on our platform that exhibits any of the following violations:\n        </p>\n        <ul class=\"about-list\">\n            <li><strong>Real-Money Gaming (RMG):</strong> The sudden introduction of real-money betting, gambling, or mandatory financial deposits to play.</li>\n            <li><strong>Deceptive Updates:</strong> An application that drastically changes its core gameplay from what was originally reviewed and listed (e.g., a casual offline puzzle game updating into a casino app).</li>\n            <li><strong>Broken or Malicious Links:</strong> A resource link that no longer directs to the verified developer source, or redirects to an unsafe, unverified page.</li>\n            <li><strong>Excessive Intrusive Ads:</strong> Applications that have updated to include unskippable system-level ads or malware-like behavior that ruins the user experience.</li>\n        </ul>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:no-entry.svg\" alt=\"Violations to Report Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">3. How to Submit a Report</h2>\n        <p class=\"about-text\">\n            Reporting a violation is simple and direct. At the bottom of every individual app review page, you will find a <strong>\"Report App\"</strong> button. Clicking this will open a quick form where you can select the reason for your report and provide a brief detail of your experience.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:writing-hand.svg\" alt=\"Submitting a Report Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">4. Our Review Process</h2>\n        <p class=\"about-text\">\n            Once a report is submitted, it goes directly to our moderation team. We do not use automated bots for this process; a real team member will manually re-test the application and verify the provided link to check for the reported violations.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:eyes.svg\" alt=\"Manual Review Process Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">5. The 100% Permanent Removal Guarantee</h2>\n        <p class=\"about-text\">\n            We operate with a strict <strong>zero-tolerance policy</strong> for financial risk mechanisms and deceptive software. If our team verifies that an application has violated our safety guidelines or introduced real-money mechanics, we enforce a <strong>100% immediate and permanent removal</strong> of that app from RummyDex.\n        </p>\n        <ul class=\"about-list\">\n            <li>The application's dedicated page will be taken down.</li>\n            <li>All outbound links to the software will be permanently severed.</li>\n            <li>The developer will not be permitted to relist the application on our index.</li>\n        </ul>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:police-car-light.svg\" alt=\"Permanent Removal Guarantee Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">6. False Reporting</h2>\n        <p class=\"about-text\">\n            While we highly value community feedback, we ask that users only submit reports for genuine violations. Deliberately spamming the reporting system or submitting false claims to maliciously target specific games may result in a restriction of your ability to submit future reports or post reviews.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:warning.svg\" alt=\"False Reporting Warning Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n    </div>\n\n</body>\n</html>\n",
  "hero_title_text": "Discover Your Next Favorite Game"
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
