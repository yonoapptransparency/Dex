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
    "release_notes": "Version 2.0.6 // System Update Log\nInterface Optimization: Refined the visual rendering pipeline for smoother navigation across mobile screen-time sessions.\nAlgorithmic Adjustments: Optimized data-parsing logic for faster loading of strategy modules and performance teardowns.\nStability Patch: Resolved minor UI caching discrepancies to ensure a seamless \"lag-free\" browsing experience.\nFeature Expansion: Integrated a new \"Performance Metric Dashboard\" for detailed game-logic breakdowns.",
    "file_size": "45",
    "safety_status": "Verified",
    "developer": "Bingo ",
    "screenshots": [],
    "seo_keywords": "",
    "serial_number": 2,
    "og_image_url": "",
    "red_box_msg": "",
    "version": "2.0.6",
    "rating": 5,
    "is_coming_soon": true,
    "video_url": "",
    "category": "Yono, All app",
    "yellow_box_msg": "",
    "idea_box_msg": "",
    "is_top_chart": true,
    "seo_description": "",
    "target_region": "",
    "slug": "spin-crush-",
    "faqs": [],
    "seo_title": "",
    "is_hot": false,
    "id": "q82dbbwh4",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877361/.trashed-1787468954-download_12_j8vn7j_wge7co.webp",
    "created_at": "2026-05-19T12:43:59.040Z",
    "custom_admin_box_html": "",
    "name": "SPIN CRUSH ",
    "is_new": false,
    "features_html": "",
    "is_featured": false,
    "custom_admin_box_heading": "",
    "canonical_url": "",
    "description_html": "<p>A new application.</p>",
    "link_configured": true
  },
  {
    "idea_box_msg": "",
    "video_url": "",
    "category": "Yono, All app",
    "yellow_box_msg": "",
    "seo_title": "",
    "slug": "yono-arcade",
    "faqs": [],
    "target_region": "",
    "seo_description": "",
    "seo_keywords": "",
    "serial_number": 3,
    "safety_status": "Verified",
    "developer": "Arcade ",
    "screenshots": [],
    "release_notes": "",
    "file_size": "56",
    "is_coming_soon": true,
    "version": "1.20.1",
    "rating": 3.4,
    "og_image_url": "",
    "red_box_msg": "",
    "features_html": "",
    "description_html": "<p>A new application.</p>",
    "link_configured": true,
    "canonical_url": "",
    "is_featured": false,
    "custom_admin_box_heading": "",
    "created_at": "2026-05-19T19:04:26.373Z",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877459/download_14_krbwrv.webp",
    "is_hot": false,
    "id": "31og4l26i",
    "is_new": false,
    "custom_admin_box_html": "",
    "name": "YONO ARCADE"
  },
  {
    "file_size": "56",
    "release_notes": "",
    "screenshots": [],
    "developer": "Jaiho",
    "safety_status": "Verified",
    "serial_number": 3,
    "seo_keywords": "",
    "red_box_msg": "",
    "og_image_url": "",
    "rating": 4.8,
    "version": "1.20.1",
    "is_coming_soon": true,
    "yellow_box_msg": "",
    "category": "Yono, All app",
    "video_url": "",
    "idea_box_msg": "",
    "seo_description": "",
    "target_region": "",
    "faqs": [],
    "slug": "jaiho-91",
    "seo_title": "",
    "id": "s5u553ymi",
    "is_hot": false,
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877512/download_16_fznggx.webp",
    "created_at": "2026-05-19T19:23:07.133Z",
    "name": "JAIHO 91",
    "custom_admin_box_html": "",
    "is_new": false,
    "features_html": "",
    "is_featured": false,
    "custom_admin_box_heading": "",
    "canonical_url": "",
    "link_configured": true,
    "description_html": "<p>A new application.</p>"
  },
  {
    "link_configured": false,
    "description_html": "<p>A new application.</p>",
    "custom_admin_box_heading": "",
    "is_featured": false,
    "canonical_url": "",
    "features_html": "",
    "name": "BINGO 101",
    "custom_admin_box_html": "",
    "is_new": false,
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877567/download_18_lljdaa.webp",
    "created_at": "2026-05-20T03:09:33.880Z",
    "id": "awus3qajs",
    "is_hot": false,
    "seo_title": "",
    "seo_description": "",
    "target_region": "",
    "faqs": [],
    "slug": "bingo-101",
    "idea_box_msg": "",
    "yellow_box_msg": "",
    "category": "Yono, All app",
    "video_url": "",
    "is_coming_soon": true,
    "red_box_msg": "",
    "og_image_url": "",
    "rating": 3.6,
    "version": "2.5V",
    "screenshots": [],
    "developer": "Bingo",
    "safety_status": "Verified",
    "seo_keywords": "",
    "serial_number": 5,
    "file_size": "71",
    "release_notes": ""
  },
  {
    "seo_title": "",
    "seo_description": "",
    "target_region": "",
    "slug": "ok-rummy",
    "faqs": [],
    "idea_box_msg": "",
    "category": "Yono, All app",
    "video_url": "",
    "yellow_box_msg": "",
    "is_coming_soon": true,
    "og_image_url": "",
    "red_box_msg": "",
    "version": "8.3.06.",
    "rating": 3,
    "safety_status": "Verified",
    "screenshots": [],
    "developer": "Bingo ",
    "serial_number": 6,
    "seo_keywords": "",
    "release_notes": "",
    "file_size": "67",
    "description_html": "<p>A new application.</p>",
    "link_configured": false,
    "custom_admin_box_heading": "",
    "is_featured": false,
    "canonical_url": "",
    "features_html": "",
    "name": "OK RUMMY",
    "custom_admin_box_html": "",
    "is_new": false,
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877617/download_19_w2sxhp.webp",
    "created_at": "2026-05-20T03:50:33.674Z",
    "is_hot": false,
    "id": "0uiuuhdrj"
  },
  {
    "is_coming_soon": true,
    "og_image_url": "",
    "red_box_msg": "",
    "version": "4.3",
    "rating": 4.9,
    "safety_status": "Verified",
    "developer": "Jaiho",
    "screenshots": [],
    "seo_keywords": "",
    "serial_number": 7,
    "release_notes": "",
    "file_size": "70",
    "seo_title": "",
    "target_region": "",
    "seo_description": "",
    "slug": "jaiho-slots",
    "faqs": [],
    "idea_box_msg": "",
    "category": "Yono, All app",
    "video_url": "",
    "yellow_box_msg": "",
    "custom_admin_box_html": "",
    "name": "JAIHO SLOTS",
    "is_new": false,
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877660/download_20_x106v3.webp",
    "created_at": "2026-05-20T03:53:24.482Z",
    "is_hot": false,
    "id": "4yt0f4yd0",
    "description_html": "<p>A new application.</p>",
    "link_configured": false,
    "custom_admin_box_heading": "",
    "is_featured": false,
    "canonical_url": "",
    "features_html": ""
  },
  {
    "idea_box_msg": "",
    "video_url": "",
    "category": "Yono, All app",
    "yellow_box_msg": "",
    "seo_title": "",
    "slug": "boss-rummy",
    "faqs": [],
    "seo_description": "",
    "target_region": "",
    "seo_keywords": "",
    "serial_number": 8,
    "safety_status": "Verified",
    "screenshots": [],
    "developer": "Arcade ",
    "release_notes": "",
    "file_size": "54",
    "is_coming_soon": true,
    "version": "2.5V",
    "rating": 4.1,
    "og_image_url": "",
    "red_box_msg": "",
    "features_html": "",
    "description_html": "<p>A new application.</p>",
    "link_configured": false,
    "canonical_url": "",
    "custom_admin_box_heading": "",
    "is_featured": false,
    "created_at": "2026-05-20T03:56:42.075Z",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877706/download_6_mj83ms.webp",
    "is_hot": false,
    "id": "9r044fyi0",
    "is_new": false,
    "custom_admin_box_html": "",
    "name": "BOSS RUMMY"
  },
  {
    "file_size": "79",
    "release_notes": "",
    "developer": "Addi",
    "screenshots": [],
    "safety_status": "Verified",
    "serial_number": 9,
    "seo_keywords": "",
    "red_box_msg": "",
    "og_image_url": "",
    "rating": 4.9,
    "version": "2.0.6",
    "is_coming_soon": true,
    "yellow_box_msg": "",
    "category": "Yono, All app",
    "video_url": "",
    "idea_box_msg": "",
    "seo_description": "",
    "target_region": "",
    "faqs": [],
    "slug": "rummy-91",
    "seo_title": "",
    "id": "5b7fj0cq7",
    "is_hot": false,
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877812/download_22_vgi4h1.webp",
    "created_at": "2026-05-20T04:01:04.611Z",
    "custom_admin_box_html": "",
    "name": "RUMMY 91",
    "is_new": false,
    "features_html": "",
    "custom_admin_box_heading": "",
    "is_featured": false,
    "canonical_url": "",
    "link_configured": false,
    "description_html": "<p>A new application.</p>"
  },
  {
    "features_html": "",
    "link_configured": false,
    "description_html": "<p>A new application.</p>",
    "custom_admin_box_heading": "",
    "is_featured": false,
    "canonical_url": "",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877895/download_23_xv95ei.webp",
    "created_at": "2026-05-20T06:58:27.643Z",
    "id": "ieam3hkbq",
    "is_hot": false,
    "custom_admin_box_html": "",
    "name": "GOGO RUMMY ",
    "is_new": false,
    "idea_box_msg": "",
    "yellow_box_msg": "",
    "category": "Yono, All app",
    "video_url": "",
    "seo_title": "",
    "target_region": "",
    "seo_description": "",
    "faqs": [],
    "slug": "gogo-rummy-",
    "developer": "Sk varba",
    "screenshots": [],
    "safety_status": "Verified",
    "seo_keywords": "",
    "serial_number": 10,
    "file_size": "65",
    "release_notes": "",
    "is_coming_soon": true,
    "red_box_msg": "",
    "og_image_url": "",
    "rating": 3.9,
    "version": "5.0"
  },
  {
    "seo_keywords": "",
    "serial_number": 11,
    "safety_status": "Verified",
    "screenshots": [],
    "developer": "S.A vejay",
    "release_notes": "",
    "file_size": "75",
    "is_coming_soon": true,
    "version": "1.8",
    "rating": 4.6,
    "og_image_url": "",
    "red_box_msg": "",
    "idea_box_msg": "",
    "category": "Yono, All app",
    "video_url": "",
    "yellow_box_msg": "",
    "seo_title": "",
    "slug": "club-inr",
    "faqs": [],
    "seo_description": "",
    "target_region": "",
    "created_at": "2026-05-20T08:02:40.971Z",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877977/download_25_tdxkii.webp",
    "is_hot": false,
    "id": "5j5b7qbrw",
    "is_new": false,
    "custom_admin_box_html": "",
    "name": "CLUB INR",
    "features_html": "",
    "description_html": "<p>A new application.</p>",
    "link_configured": false,
    "canonical_url": "",
    "is_featured": false,
    "custom_admin_box_heading": ""
  },
  {
    "is_hot": false,
    "id": "f4ktp4dfi",
    "created_at": "2026-05-26T07:04:36.330Z",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784878050/download_26_awtrna.webp",
    "is_new": false,
    "custom_admin_box_html": "",
    "name": "ABC Rummy ",
    "features_html": "",
    "canonical_url": "",
    "custom_admin_box_heading": "",
    "is_featured": false,
    "description_html": "<p>A new application.</p>",
    "link_configured": false,
    "release_notes": "",
    "file_size": "61",
    "seo_keywords": "",
    "serial_number": 12,
    "safety_status": "Verified",
    "screenshots": [],
    "developer": "Addi",
    "version": "1.8",
    "rating": 3.9,
    "og_image_url": "",
    "red_box_msg": "",
    "is_coming_soon": true,
    "video_url": "",
    "category": "Yono, All app",
    "yellow_box_msg": "",
    "idea_box_msg": "",
    "slug": "abc-rummy-",
    "faqs": [],
    "target_region": "",
    "seo_description": "",
    "seo_title": ""
  },
  {
    "faqs": [],
    "slug": "777-rummy",
    "seo_description": "",
    "target_region": "",
    "seo_title": "",
    "yellow_box_msg": "",
    "category": "Yono, All app",
    "video_url": "",
    "idea_box_msg": "",
    "rating": 5,
    "version": "1.6",
    "red_box_msg": "",
    "og_image_url": "",
    "is_coming_soon": true,
    "file_size": "54",
    "release_notes": "",
    "serial_number": 13,
    "seo_keywords": "",
    "developer": "AB Arora",
    "screenshots": [],
    "safety_status": "Verified",
    "canonical_url": "",
    "is_featured": false,
    "custom_admin_box_heading": "",
    "link_configured": false,
    "description_html": "<p>A new application.</p>",
    "features_html": "",
    "is_new": false,
    "custom_admin_box_html": "",
    "name": "777.Rummy",
    "id": "4w1yxs6mm",
    "is_hot": false,
    "created_at": "2026-05-26T07:09:01.068Z",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784878294/download_27_ex1vzp.webp"
  },
  {
    "idea_box_msg": "",
    "yellow_box_msg": "",
    "video_url": "",
    "category": "Yono",
    "seo_title": "",
    "faqs": [],
    "slug": "ever-777",
    "seo_description": "",
    "target_region": "",
    "serial_number": 14,
    "seo_keywords": "",
    "developer": "AZ ever",
    "screenshots": [],
    "safety_status": "Verified",
    "file_size": "59",
    "release_notes": "",
    "is_coming_soon": true,
    "rating": 4,
    "version": "1.8",
    "red_box_msg": "",
    "og_image_url": "",
    "features_html": "",
    "link_configured": false,
    "description_html": "<p>A new application.</p>",
    "canonical_url": "",
    "custom_admin_box_heading": "",
    "is_featured": false,
    "created_at": "2026-05-26T07:12:55.821Z",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784878592/download_28_mhxps5.webp",
    "id": "w1sttlwv7",
    "is_hot": false,
    "is_new": false,
    "name": "EVER 777",
    "custom_admin_box_html": ""
  },
  {
    "idea_box_msg": "",
    "video_url": "",
    "category": "Yono",
    "yellow_box_msg": "",
    "seo_title": "",
    "target_region": "",
    "seo_description": "",
    "slug": "game-rummy",
    "faqs": [],
    "safety_status": "Verified",
    "developer": "Raj dav",
    "screenshots": [],
    "seo_keywords": "",
    "serial_number": 15,
    "release_notes": "",
    "file_size": "75",
    "is_coming_soon": true,
    "og_image_url": "",
    "red_box_msg": "",
    "version": "2.0",
    "rating": 4,
    "features_html": "",
    "description_html": "<p>A new application.</p>",
    "link_configured": false,
    "custom_admin_box_heading": "",
    "is_featured": false,
    "canonical_url": "",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784878692/download_29_j7jlxk.webp",
    "created_at": "2026-05-26T07:16:08.600Z",
    "is_hot": false,
    "id": "dp2lcn2ae",
    "name": "Game Rummy",
    "custom_admin_box_html": "",
    "is_new": false
  },
  {
    "release_notes": "",
    "file_size": "54",
    "seo_keywords": "",
    "serial_number": 16,
    "safety_status": "Verified",
    "developer": "Addi",
    "screenshots": [],
    "version": "1.9",
    "rating": 4.1,
    "og_image_url": "",
    "red_box_msg": "",
    "is_coming_soon": true,
    "video_url": "",
    "category": "Yono",
    "yellow_box_msg": "",
    "idea_box_msg": "",
    "slug": "hi-rummy-",
    "faqs": [],
    "seo_description": "",
    "target_region": "",
    "seo_title": "",
    "is_hot": false,
    "id": "4lgypb90h",
    "created_at": "2026-05-26T07:18:29.456Z",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784878734/download_30_oz8znk.webp",
    "is_new": false,
    "name": "Hi Rummy ",
    "custom_admin_box_html": "",
    "features_html": "",
    "canonical_url": "",
    "is_featured": false,
    "custom_admin_box_heading": "",
    "description_html": "<p>A new application.</p>",
    "link_configured": false
  },
  {
    "seo_description": "Explore the INR Rummy system architecture. RummyApp Online provides an independent audit of render-thread isolation, input-polling, and frame-buffer pacing.",
    "target_region": "India (Tier 1 & Tier 2 Search Optimization)",
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
        "question": "How does asynchronous processing impact hardware thermals?",
        "answer": "Answer: Offloading complex matrix math from the main UI thread requires sustained multi-core CPU allocation. While highly efficient for preventing screen freezing, aggressive asynchronous processing generates localized thermal load. Our Hardware Snapshot indicates that the 567 Slots engine intelligently scales back background visual particle effects when device temperatures rise, preserving core matrix generation over aesthetic graphics."
      },
      {
        "question": "Can entry-level mobile processors handle the 567 Slots permutation logic?",
        "answer": "Answer: Yes, the application utilizes Dynamic Logic Downscaling to maintain system stability on older hardware architectures. While the core matrix permutation remains mathematically strict, the execution environment automatically increases the algorithmic polling interval on legacy mobile processors. This ensures that localized input processing remains uncompromised without overheating the chip."
      },
      {
        "question": "Does the 567 Slots diagnostic monitor external server environments?",
        "answer": "Answer: No. RummyApp Online operates strictly as an independent evaluator of Client-Side Software Processing and Ergonomics. We benchmark how the specific software binary utilizes your local hardware resources to calculate its matrices and fence its logic states. We do not evaluate, monitor, or access secure server-side cryptographic logic, ensuring our metrics remain exclusively focused on localized structural software integrity."
      }
    ],
    "slug": "inr-rummy",
    "seo_title": "INR Rummy System Architecture: Render-Thread Isolation (2026)",
    "yellow_box_msg": "To achieve the seamless input-polling frequencies detailed in this diagnostic, ensure your device's digitizer and active RAM are not bottlenecked by background applications. Render-thread isolation requires sustained, unfragmented memory allocation to dynamically update UI states without dropping touch registrations.",
    "category": "Yono",
    "video_url": "",
    "idea_box_msg": "Do not force tactical inputs faster than the localized software can poll your hardware. Observe the frame-buffer response time of the interface. Aligning your physical interactions precisely with the engine's internal input-polling rhythm guarantees optimal tactile accuracy and reduces localized input rejection.",
    "red_box_msg": "The render-thread metrics and input-polling speeds analyzed in this audit assume a verified, unmodified software build. Sideloaded APKs inherently corrupt the native isolation logic, resulting in severe frame-dropping and localized execution crashes. Always secure your application binaries exclusively through official developer nodes.",
    "og_image_url": "https://13eehe59cj.ucarecd.net/2a718650-0602-495f-9ca4-b13c86e58c02/-/preview/190x190/",
    "rating": 5,
    "version": "3.0",
    "is_coming_soon": true,
    "file_size": "79",
    "release_notes": "Addressed localized desynchronization within the visual pacing engine. The client-side architecture now effectively utilizes render-thread isolation, ensuring that background cryptographic handshakes no longer induce micro-stutters during rapid drag-and-drop tactical inputs.",
    "screenshots": [],
    "developer": "Arcade ",
    "safety_status": "Verified",
    "seo_keywords": "INR Rummy render-thread isolation, input-polling frequency, frame-buffer pacing audit, INR Rummy system diagnostic",
    "serial_number": 17,
    "custom_admin_box_heading": "[ ✦ RENDER-THREAD ISOLATION // FRAME-BUFFER AUDIT ]",
    "is_featured": false,
    "canonical_url": "https://www.rummydex.com/inr-rummy",
    "link_configured": true,
    "description_html": "<!-- SAFE INR RUMMY GLASSMORPHISM LISTING -->\n<!-- Fully scoped, uniquely written, safe for your website UI, E-Sports Compliant -->\n\n<section class=\"rs-inrr-wrapper\">\n\n    <div class=\"rs-inrr-glass-card\">\n\n        <!-- HEADER -->\n        <div class=\"rs-inrr-header\">\n            <h2>INR Rummy Interface</h2>\n            <span class=\"rs-inrr-badge\">National Strategy Arena</span>\n        </div>\n\n        <!-- GLASSY VIRTUAL BONUS SYSTEM -->\n        <div class=\"rs-inrr-bonus-container\">\n            <div class=\"rs-inrr-glass-box highlight-box\">\n                <span class=\"rs-inrr-bonus-title\">Virtual Welcome</span>\n                <span class=\"rs-inrr-bonus-amount\">91K</span>\n                <span class=\"rs-inrr-bonus-sub\">Practice Chips</span>\n            </div>\n            <div class=\"rs-inrr-glass-box\">\n                <span class=\"rs-inrr-bonus-title\">Daily Milestone</span>\n                <span class=\"rs-inrr-bonus-amount\">20K</span>\n                <span class=\"rs-inrr-bonus-sub\">Steady Login Reward</span>\n            </div>\n            <div class=\"rs-inrr-glass-box\">\n                <span class=\"rs-inrr-bonus-title\">Guest Access</span>\n                <span class=\"rs-inrr-bonus-amount\">Instant</span>\n                <span class=\"rs-inrr-bonus-sub\">No Login Needed</span>\n            </div>\n        </div>\n\n        <p class=\"rs-inrr-description\">\n            INR Rummy provides a premium, highly streamlined card platform designed for strategic enthusiasts. Built with a focus on tactical precision and seamless board aesthetics, this digital hub allows you to master classic card formats cleanly. Whether you are practicing layout sorting or refining valid sequences, INR Rummy offers a risk-free, competitive arena to play instantly.\n        </p>\n\n        <!-- SEO ENHANCEMENT: APP DETAILS TABLE -->\n        <div class=\"rs-inrr-section-title\">Platform Specifications</div>\n        <div class=\"rs-inrr-table-wrapper\">\n            <table class=\"rs-inrr-table\">\n                <tbody>\n                    <tr>\n                        <td><strong>Application Name</strong></td>\n                        <td>INR Rummy (Review)</td>\n                        <td><strong>Gaming Category</strong></td>\n                        <td>Card / Strategy Game</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Welcome Reward</strong></td>\n                        <td>91,000 (Virtual Only)</td>\n                        <td><strong>Ongoing Rewards</strong></td>\n                        <td>Tasks & Progression</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Network Play</strong></td>\n                        <td>Guest Multiplayer</td>\n                        <td><strong>Game Lobbies</strong></td>\n                        <td>Casual Practice Tables</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Privacy</strong></td>\n                        <td>No Personal Info Required</td>\n                        <td><strong>Customer Help</strong></td>\n                        <td>24/7 In-App Guide</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n\n        <!-- SEO ENHANCEMENT: FEATURES GRID -->\n        <div class=\"rs-inrr-section-title\">Professional Gaming Features</div>\n        <div class=\"rs-inrr-grid\">\n            <div class=\"rs-inrr-glass-box rounded-style\">\n                <div class=\"rs-inrr-icon\">♦️</div>\n                <h3>Standard Lobbies</h3>\n                <p>Join clear, intuitive virtual rooms where enthusiasts match skills on dedicated practice tables to hone their execution timings.</p>\n            </div>\n            <div class=\"rs-inrr-glass-box rounded-style\">\n                <div class=\"rs-inrr-icon\">🔒</div>\n                <h3>100% Anonymous</h3>\n                <p>Enjoy the card action immediately as a guest player without sharing phone numbers, filling configurations, or utilizing OTP systems.</p>\n            </div>\n            <div class=\"rs-inrr-glass-box rounded-style\">\n                <div class=\"rs-inrr-icon\">🛡️</div>\n                <h3>Standard RNG</h3>\n                <p>Fairness remains fundamental. The card distribution relies on a verified Random Number Generator algorithm to keep dealing purely mathematical.</p>\n            </div>\n            <div class=\"rs-inrr-glass-box rounded-style\">\n                <div class=\"rs-inrr-icon\">📱</div>\n                <h3>Modern Interface</h3>\n                <p>Experience zero visual clutter. Ad-free layouts with crisp responsive sorting features ensure your card melding remains entirely uninterrupted.</p>\n            </div>\n        </div>\n\n        <!-- SEO ENHANCEMENT: HOW TO PLAY -->\n        <div class=\"rs-inrr-section-title\">Steps to Start Your Virtual Practice</div>\n        <div class=\"rs-inrr-glass-box rs-inrr-list-box\">\n            <ol>\n                <li><strong>Launch the App:</strong> Open the official application natively on your smart device.</li>\n                <li><strong>Play Instantly:</strong> Enter the dashboard right away via guest mode without any registration paths.</li>\n                <li><strong>Collect Rewards:</strong> Check your localized points wallet to find your 91K welcome balance ready.</li>\n                <li><strong>Join the Table:</strong> Select your preferred variation tier and test your strategic card arrangements.</li>\n                <li><strong>Track Milestones:</strong> Record your logical victories and evaluate strategy progression on local leaderboards.</li>\n            </ol>\n        </div>\n\n        <!-- SEO ENHANCEMENT: FAQ ACCORDION -->\n        <div class=\"rs-inrr-section-title\">Frequently Asked Questions (FAQs)</div>\n        <div class=\"rs-inrr-faq-container\">\n            <details class=\"rs-inrr-faq\">\n                <summary>Is INR Rummy stable for continuous practice?</summary>\n                <p>Yes. The build is fully optimized to provide lag-free sorting transitions, keeping your training runs steady across basic mobile networks.</p>\n            </details>\n            <details class=\"rs-inrr-faq\">\n                <summary>What makes a Pure Sequence?</summary>\n                <p>A pure sequence consists of three or more consecutive cards belonging to the same identical suit, organized strictly without using a Joker.</p>\n            </details>\n            <details class=\"rs-inrr-faq\">\n                <summary>Do I need to provide my phone number?</summary>\n                <p>No, registration is completely optional. You can experience every practice variant in full guest mode without completing any OTP check.</p>\n            </details>\n        </div>\n\n        <!-- SAFE SEO KEYWORD CLOUD -->\n        <div class=\"rs-inrr-section-title\">Related Search Tags</div>\n        <div class=\"rs-inrr-keywords\">\n            <span>inr rummy</span> <span>inr rummy app</span> <span>inr rummy game</span> <span>inr rummy online</span> <span>inr rummy play</span> <span>inr rummy review</span> <span>inr rummy features</span> <span>inr rummy casual</span> <span>inr rummy interface</span> <span>inr rummy practice</span> <span>inr rummy guest mode</span> <span>inr rummy bonuses</span> <span>inr rummy rewards</span> <span>inr rummy daily check-in</span> <span>inr rummy virtual chips</span> <span>inr rummy welcome bonus</span> <span>inr rummy card game</span> <span>inr rummy strategy</span> <span>inr rummy UI</span> <span>inr rummy leaderboard</span> <span>inr rummy support</span> <span>inr rummy offline</span> <span>inr rummy local play</span> <span>inr rummy mechanics</span> <span>inr rummy gameplay</span> <span>inr rummy variants</span> <span>inr rummy points</span> <span>inr rummy deals</span> <span>inr rummy pool</span> <span>inr rummy RNG</span> <span>inr rummy updates</span> <span>inr rummy latest version</span> <span>inr rummy guide</span> <span>inr rummy tips</span> <span>inr rummy tricks</span> <span>how to play inr rummy</span> <span>win in inr rummy</span> <span>inr rummy safe</span> <span>inr rummy anonymous</span> <span>inr rummy no login</span> <span>inr rummy graphics</span> <span>inr rummy animation</span> <span>inr rummy mobile app</span> <span>inr rummy android</span> <span>inr rummy virtual portal</span> <span>inr rummy skill game</span>\n        </div>\n\n    </div>\n</section>\n\n<style>\n/* SAFE SCOPED CSS - INR RUMMY THEME (DEEP JADE/EMERALD GLASS) */\n\n.rs-inrr-wrapper {\n    width: 100%;\n    margin: 40px 0;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif;\n    background: linear-gradient(145deg, #0a2f1d 0%, #114227 100%);\n    padding: 25px;\n    border-radius: 30px;\n    box-sizing: border-box;\n}\n\n.rs-inrr-wrapper * {\n    box-sizing: border-box;\n}\n\n/* THE GLASS CARD */\n.rs-inrr-glass-card {\n    background: rgba(255, 255, 255, 0.04);\n    backdrop-filter: blur(22px);\n    -webkit-backdrop-filter: blur(22px);\n    border-radius: 24px;\n    padding: 40px;\n    border: 1px solid rgba(46, 204, 113, 0.2);\n    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.6);\n}\n\n.rs-inrr-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 15px;\n    flex-wrap: wrap;\n    margin-bottom: 30px;\n    padding-bottom: 20px;\n    border-bottom: 1px solid rgba(46, 204, 113, 0.3);\n}\n\n.rs-inrr-header h2 {\n    font-size: 38px;\n    font-weight: 900;\n    margin: 0;\n    background: linear-gradient(135deg, #2ecc71, #a3e635);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    letter-spacing: -1px;\n}\n\n.rs-inrr-badge {\n    padding: 8px 22px;\n    border-radius: 4px;\n    background: linear-gradient(135deg, rgba(46, 204, 113, 0.15), rgba(163, 230, 53, 0.05));\n    color: #2ecc71;\n    font-size: 13px;\n    font-weight: 800;\n    border: 1px solid rgba(46, 204, 113, 0.4);\n    text-transform: uppercase;\n    letter-spacing: 1px;\n}\n\n/* GLASSY BOXES */\n.rs-inrr-bonus-container, .rs-inrr-grid {\n    display: grid;\n    gap: 20px;\n    margin-bottom: 35px;\n}\n\n.rs-inrr-bonus-container {\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n}\n\n.rs-inrr-grid {\n    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n}\n\n.rs-inrr-glass-box {\n    background: rgba(255, 255, 255, 0.02);\n    border: 1px solid rgba(46, 204, 113, 0.15);\n    border-radius: 16px; \n    padding: 25px;\n    text-align: left;\n    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);\n    transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;\n}\n\n.rs-inrr-glass-box:hover {\n    transform: translateY(-5px);\n    box-shadow: 0 12px 30px rgba(46, 204, 113, 0.2);\n    border-color: rgba(46, 204, 113, 0.6);\n    background: rgba(255, 255, 255, 0.05);\n}\n\n.rs-inrr-bonus-container .rs-inrr-glass-box {\n    text-align: center;\n}\n\n.highlight-box {\n    background: linear-gradient(135deg, rgba(46, 204, 113, 0.1), rgba(0, 0, 0, 0));\n    border: 1px solid rgba(46, 204, 113, 0.5);\n}\n\n.rs-inrr-bonus-title {\n    display: block;\n    font-size: 13px;\n    font-weight: 800;\n    color: #e0e0e0;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    letter-spacing: 1.5px;\n}\n\n.rs-inrr-bonus-amount {\n    display: block;\n    font-size: 44px;\n    font-weight: 900;\n    background: linear-gradient(135deg, #2ecc71, #ccff33);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    margin-bottom: 8px;\n    line-height: 1;\n}\n\n.rs-inrr-bonus-sub {\n    display: block;\n    font-size: 13px;\n    color: #a0a0a0;\n    font-weight: 500;\n}\n\n.rs-inrr-section-title {\n    font-size: 24px;\n    font-weight: 800;\n    color: #ffffff;\n    margin: 45px 0 25px 0;\n    position: relative;\n    padding-left: 18px;\n}\n\n.rs-inrr-section-title::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    height: 80%;\n    width: 4px;\n    background: linear-gradient(to bottom, #2ecc71, #114227);\n    border-radius: 10px;\n}\n\n.rs-inrr-description {\n    line-height: 1.9;\n    font-size: 16px;\n    color: #e0e0e0;\n    margin-bottom: 30px;\n    padding: 25px;\n    background: rgba(0, 0, 0, 0.35);\n    border-radius: 16px;\n    border-left: 4px solid #2ecc71;\n    box-shadow: inset 0 0 20px rgba(0,0,0,0.5);\n}\n\n/* APP SPECS TABLE */\n.rs-inrr-table-wrapper {\n    overflow-x: auto;\n    margin-bottom: 30px;\n    border-radius: 16px;\n    border: 1px solid rgba(46, 204, 113, 0.2);\n    background: rgba(0, 0, 0, 0.4);\n}\n\n.rs-inrr-table {\n    width: 100%;\n    border-collapse: collapse;\n    font-size: 15px;\n}\n\n.rs-inrr-table td {\n    padding: 18px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n    color: #c0c0c0;\n}\n\n.rs-inrr-table tr:last-child td {\n    border-bottom: none;\n}\n\n.rs-inrr-table td strong {\n    color: #2ecc71;\n}\n\n/* FEATURES GRID ICONS */\n.rs-inrr-icon {\n    font-size: 28px;\n    margin-bottom: 18px;\n    background: linear-gradient(135deg, #1f1f1f, #000000);\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 55px;\n    height: 55px;\n    border-radius: 12px; \n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);\n    border: 1px solid rgba(46, 204, 113, 0.3);\n}\n\n.rs-inrr-glass-box h3 {\n    margin: 0 0 12px 0;\n    font-size: 19px;\n    color: #ccff33;\n    font-weight: 800;\n}\n\n.rs-inrr-glass-box p {\n    margin: 0;\n    font-size: 15px;\n    line-height: 1.7;\n    color: #b0b0b0;\n}\n\n/* HOW TO LIST */\n.rs-inrr-list-box ol {\n    margin: 0;\n    padding-left: 20px;\n    color: #e0e0e0;\n}\n\n.rs-inrr-list-box li {\n    margin-bottom: 15px;\n    line-height: 1.7;\n    font-size: 15px;\n}\n\n.rs-inrr-list-box li:last-child {\n    margin-bottom: 0;\n}\n\n.rs-inrr-list-box strong {\n    color: #2ecc71;\n}\n\n/* FAQ ACCORDION */\n.rs-inrr-faq-container {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    margin-bottom: 30px;\n}\n\n.rs-inrr-faq {\n    background: rgba(0, 0, 0, 0.4);\n    border: 1px solid rgba(46, 204, 113, 0.2);\n    border-radius: 16px;\n    padding: 18px 22px;\n    transition: all 0.3s ease;\n}\n\n.rs-inrr-faq[open] {\n    background: rgba(46, 204, 113, 0.05);\n    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);\n    border-color: rgba(46, 204, 113, 0.6);\n}\n\n.rs-inrr-faq summary {\n    font-weight: 800;\n    font-size: 16px;\n    color: #2ecc71;\n    cursor: pointer;\n    list-style: none;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.rs-inrr-faq summary::-webkit-details-marker {\n    display: none;\n}\n\n.rs-inrr-faq summary::after {\n    content: '+';\n    font-size: 22px;\n    color: #ffffff;\n    transition: transform 0.3s;\n}\n\n.rs-inrr-faq[open] summary::after {\n    content: '−';\n    transform: rotate(180deg);\n}\n\n.rs-inrr-faq p {\n    margin: 15px 0 0 0;\n    color: #b0b0b0;\n    line-height: 1.7;\n    font-size: 15px;\n    border-top: 1px solid rgba(255, 255, 255, 0.1);\n    padding-top: 15px;\n}\n\n/* KEYWORD FRAMES WITH CUSTOM SCROLLBAR */\n.rs-inrr-keywords {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 12px;\n    max-height: 320px;\n    overflow-y: auto;\n    padding-right: 15px;\n}\n\n.rs-inrr-keywords::-webkit-scrollbar {\n    width: 6px;\n}\n.rs-inrr-keywords::-webkit-scrollbar-track {\n    background: rgba(255, 255, 255, 0.05);\n    border-radius: 10px;\n}\n.rs-inrr-keywords::-webkit-scrollbar-thumb {\n    background: rgba(46, 204, 113, 0.3);\n    border-radius: 10px;\n}\n\n.rs-inrr-keywords span {\n    padding: 9px 18px;\n    border-radius: 8px; \n    background: rgba(0, 0, 0, 0.5); \n    border: 1px solid rgba(46, 204, 113, 0.3); \n    color: #e0e0e0; \n    font-size: 13px;\n    font-weight: 600;\n    transition: all 0.2s ease;\n    cursor: default;\n    box-shadow: 0 2px 5px rgba(0,0,0,0.01);\n}\n\n.rs-inrr-keywords span:hover {\n    background: linear-gradient(135deg, #2ecc71, #a3e635);\n    color: #000000;\n    border-color: #ccff33;\n    transform: translateY(-2px);\n    box-shadow: 0 5px 12px rgba(46, 204, 113, 0.3);\n}\n\n/* MOBILE RESPONSIVENESS */\n@media(max-width: 768px) {\n    .rs-inrr-wrapper {\n        padding: 15px;\n    }\n    .rs-inrr-glass-card {\n        padding: 25px;\n    }\n    .rs-inrr-header h2 {\n        font-size: 30px;\n    }\n    .rs-inrr-table td {\n        display: block;\n        width: 100%;\n        text-align: left;\n        padding: 12px 18px;\n    }\n    .rs-inrr-table td:nth-child(odd) {\n        background: rgba(255, 255, 255, 0.02);\n        border-bottom: none;\n    }\n}\n</style>\n",
    "features_html": "",
    "name": "INR Rummy",
    "custom_admin_box_html": "<!-- SAFE RUMMYAPP ONLINE \"ADVANCED TECHNICAL DIAGNOSTIC\" MODULE -->\n<!-- Bright Futuristic Modern Edition -->\n\n<section class=\"rs-tech-wrapper\">\n\n    <!-- TOP SYSTEM NOTIFICATION -->\n    <div class=\"rs-tech-alert-top\">\n        <span class=\"rs-tech-pulse\"></span> ✦ ADVANCED DIAGNOSTICS // ENGINE & LOGIC TEARDOWN\n    </div>\n\n    <!-- MAIN DEEP-DIVE INTRO CARD -->\n    <div class=\"rs-tech-glass-card rs-tech-hero\">\n        <div class=\"rs-tech-header\">\n            <h2>Technical Architecture Review</h2>\n            <span class=\"rs-tech-badge\">System Teardown</span>\n        </div>\n        \n        <p class=\"rs-tech-lead-text\">\n            Evaluating a virtual application requires probing beneath its graphical shell. In this advanced diagnostic, we bypass the marketing aesthetics to analyze the application's core rendering engine, memory allocation, and backend logic systems. By measuring frame stability, cryptographic randomization, and input latency, we provide a mathematically sound breakdown of how this application truly performs under heavy operational stress. \n        </p>\n    </div>\n\n    <!-- TECHNICAL DATA GRID -->\n    <div class=\"rs-tech-section-title\">Core Engine Metrics</div>\n    \n    <div class=\"rs-tech-grid\">\n        \n        <!-- Metric 1: RNG Logic -->\n        <div class=\"rs-tech-glass-box tech-border-slate\">\n            <div class=\"rs-tech-icon tech-glow-slate\">⚙️</div>\n            <h3>Cryptographic RNG Protocols</h3>\n            <p>True tactical simulations rely on pristine randomization. We analyze the application's Random Number Generator (RNG) logic for cryptographic seeding and sequence entropy. A robust, server-side RNG architecture ensures that card drops, virtual shuffles, and arcade mechanics are entirely immune to pattern manipulation, providing a mathematically fair environment for all practice rounds.</p>\n        </div>\n\n        <!-- Metric 2: Input Latency -->\n        <div class=\"rs-tech-glass-box tech-border-cyan\">\n            <div class=\"rs-tech-icon tech-glow-cyan\">⚡</div>\n            <h3>Input Latency & Event Listeners</h3>\n            <p>A seamless interface is dictated by response time. We measure the application's touch-start and touch-end event listeners to ensure input latency remains strictly under the 45-millisecond threshold. By minimizing payload packet delays between the client UI and the simulation server, the application translates physical screen taps into instantaneous digital reactions.</p>\n        </div>\n\n        <!-- Metric 3: Rendering Pipeline -->\n        <div class=\"rs-tech-glass-box tech-border-emerald\">\n            <div class=\"rs-tech-icon tech-glow-emerald\">🎥</div>\n            <h3>WebGL & Frame Rendering</h3>\n            <p>High-fidelity 3D environments must not compromise frame rates. We evaluate the application's draw call batching and texture compression within its WebGL/Canvas rendering pipeline. Proper optimization prevents Z-fighting and ensures a stable 60 FPS (Frames Per Second) output, preventing micro-stutters during intense, high-speed layout animations.</p>\n        </div>\n\n        <!-- Metric 4: Heap Memory -->\n        <div class=\"rs-tech-glass-box tech-border-indigo\">\n            <div class=\"rs-tech-icon tech-glow-indigo\">💾</div>\n            <h3>Heap Memory & CPU Overhead</h3>\n            <p>Bloated code leads to severe device throttling. We track the application's background memory footprint and garbage collection efficiency. A well-architected app flushes unused cache data effectively, ensuring that extended gameplay sessions do not result in CPU overheating, battery hemorrhaging, or forced application crashes on mid-tier hardware.</p>\n        </div>\n\n    </div>\n\n    <!-- TECHNICAL SUMMARY FOOTER -->\n    <div class=\"rs-tech-footer-card\">\n        <div class=\"rs-tech-flex-row\">\n            <div class=\"rs-tech-text-block\">\n                <h4>Data Verification Clause</h4>\n                <p>The diagnostic data presented in this technical review is based on isolated benchmarking. Application developers routinely deploy over-the-air (OTA) patches that may optimize or alter these engine parameters. We recommend running regular updates via authorized digital storefronts to maintain optimal software stability.</p>\n            </div>\n            \n            <div class=\"rs-tech-divider-vertical\"></div>\n\n            <div class=\"rs-tech-text-block\">\n                <h4>SEO & Search Visibility Note</h4>\n                <p>RummyApp Online actively structures our technical teardowns to provide the most transparent, data-driven insights available on the web. By focusing strictly on code architecture, UI mechanics, and tactical execution, we ensure our registry remains the definitive index for digital performance analysis.</p>\n            </div>\n        </div>\n    </div>\n\n</section>\n\n<style>\n@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@400;500;600&display=swap');\n\n:root {\n    --primary: #0057FF;\n    --accent: #00C2FF;\n    --accent2: #7B2FFF;\n    --emerald: #00C98A;\n    --amber: #FF6B2B;\n    --text-main: #0A0F2C;\n    --text-muted: #4A5580;\n    --surface: #FFFFFF;\n    --surface-alt: #F0F5FF;\n    --border: #D6E0FF;\n    --glow-blue: rgba(0, 87, 255, 0.12);\n    --glow-cyan: rgba(0, 194, 255, 0.15);\n    --glow-purple: rgba(123, 47, 255, 0.12);\n    --glow-green: rgba(0, 201, 138, 0.12);\n}\n\n.rs-tech-wrapper {\n    width: 100%;\n    margin: 40px 0;\n    font-family: 'DM Sans', sans-serif;\n    background: linear-gradient(145deg, #EEF3FF 0%, #F7F0FF 40%, #E8F8FF 100%);\n    padding: 40px;\n    border-radius: 24px;\n    box-sizing: border-box;\n    color: var(--text-main);\n    position: relative;\n    overflow: hidden;\n    box-shadow: 0 20px 60px rgba(0, 87, 255, 0.1), 0 4px 16px rgba(0,0,0,0.06);\n    border: 1px solid var(--border);\n}\n\n.rs-tech-wrapper::before {\n    content: '';\n    position: absolute;\n    top: 0; left: 0; right: 0; bottom: 0;\n    background-image: radial-gradient(circle, rgba(0, 87, 255, 0.08) 1px, transparent 1px);\n    background-size: 28px 28px;\n    pointer-events: none;\n    z-index: 0;\n}\n\n.rs-tech-wrapper::after {\n    content: '';\n    position: absolute;\n    top: -80px;\n    right: -80px;\n    width: 320px;\n    height: 320px;\n    background: radial-gradient(circle, rgba(123, 47, 255, 0.12) 0%, transparent 70%);\n    border-radius: 50%;\n    pointer-events: none;\n    z-index: 0;\n}\n\n.rs-tech-wrapper * {\n    box-sizing: border-box;\n    position: relative;\n    z-index: 1;\n}\n\n.rs-tech-alert-top {\n    display: inline-flex;\n    align-items: center;\n    gap: 12px;\n    background: linear-gradient(90deg, rgba(0,87,255,0.08), rgba(0,194,255,0.08));\n    color: var(--primary);\n    padding: 10px 22px;\n    border-radius: 100px;\n    margin-bottom: 32px;\n    font-size: 11px;\n    font-weight: 800;\n    font-family: 'Syne', sans-serif;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n    border: 1px solid rgba(0, 87, 255, 0.25);\n    box-shadow: 0 4px 16px rgba(0, 87, 255, 0.1);\n}\n\n.rs-tech-pulse {\n    width: 8px; height: 8px;\n    background: linear-gradient(135deg, var(--primary), var(--accent));\n    border-radius: 50%;\n    animation: tech-pulse 2s infinite;\n    flex-shrink: 0;\n}\n\n@keyframes tech-pulse {\n    0% { box-shadow: 0 0 0 0 rgba(0, 87, 255, 0.6); }\n    70% { box-shadow: 0 0 0 10px rgba(0, 87, 255, 0); }\n    100% { box-shadow: 0 0 0 0 rgba(0, 87, 255, 0); }\n}\n\n.rs-tech-glass-card {\n    background: rgba(255, 255, 255, 0.85);\n    backdrop-filter: blur(20px);\n    -webkit-backdrop-filter: blur(20px);\n    border-radius: 20px;\n    padding: 40px;\n    border: 1px solid rgba(0, 87, 255, 0.12);\n    margin-bottom: 40px;\n    box-shadow: 0 8px 32px rgba(0, 87, 255, 0.07), 0 1px 4px rgba(0,0,0,0.04);\n}\n\n.rs-tech-hero {\n    border-top: 3px solid transparent;\n    background-clip: padding-box;\n    position: relative;\n}\n\n.rs-tech-hero::before {\n    content: '';\n    position: absolute;\n    top: 0; left: 0; right: 0;\n    height: 3px;\n    background: linear-gradient(90deg, var(--primary), var(--accent), var(--accent2));\n    border-radius: 20px 20px 0 0;\n    z-index: 2;\n}\n\n.rs-tech-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 15px;\n    flex-wrap: wrap;\n    margin-bottom: 25px;\n    padding-bottom: 25px;\n    border-bottom: 1px solid var(--border);\n}\n\n.rs-tech-header h2 {\n    font-size: 32px;\n    font-weight: 800;\n    margin: 0;\n    font-family: 'Syne', sans-serif;\n    background: linear-gradient(135deg, var(--text-main) 0%, var(--primary) 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    letter-spacing: -0.5px;\n}\n\n.rs-tech-badge {\n    padding: 8px 20px;\n    border-radius: 100px;\n    background: linear-gradient(135deg, var(--primary), var(--accent2));\n    color: #fff;\n    font-size: 12px;\n    font-weight: 700;\n    font-family: 'Syne', sans-serif;\n    text-transform: uppercase;\n    letter-spacing: 1.5px;\n    box-shadow: 0 4px 16px rgba(0, 87, 255, 0.3);\n}\n\n.rs-tech-lead-text {\n    font-size: 16px;\n    line-height: 1.9;\n    color: var(--text-muted);\n    margin: 0;\n}\n\n.rs-tech-section-title {\n    font-size: 22px;\n    font-weight: 800;\n    font-family: 'Syne', sans-serif;\n    color: var(--text-main);\n    margin: 50px 0 25px 0;\n    position: relative;\n    padding-left: 18px;\n}\n\n.rs-tech-section-title::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 2px;\n    bottom: 2px;\n    width: 4px;\n    background: linear-gradient(180deg, var(--primary), var(--accent));\n    border-radius: 4px;\n}\n\n.rs-tech-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n    gap: 20px;\n    margin-bottom: 40px;\n}\n\n.rs-tech-glass-box {\n    background: rgba(255, 255, 255, 0.9);\n    border: 1px solid var(--border);\n    border-radius: 16px;\n    padding: 30px 25px;\n    text-align: left;\n    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n    box-shadow: 0 4px 16px rgba(0, 87, 255, 0.05);\n}\n\n.rs-tech-glass-box:hover {\n    transform: translateY(-6px);\n    box-shadow: 0 16px 40px rgba(0, 87, 255, 0.12);\n}\n\n.tech-border-slate:hover { border-color: #94a3b8; box-shadow: 0 16px 40px rgba(100,116,139,0.15); }\n.tech-border-cyan:hover { border-color: var(--accent); box-shadow: 0 16px 40px var(--glow-cyan); }\n.tech-border-emerald:hover { border-color: var(--emerald); box-shadow: 0 16px 40px var(--glow-green); }\n.tech-border-indigo:hover { border-color: var(--accent2); box-shadow: 0 16px 40px var(--glow-purple); }\n\n.rs-tech-icon {\n    font-size: 24px;\n    margin-bottom: 20px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 60px;\n    height: 60px;\n    border-radius: 14px;\n    border: 1px solid var(--border);\n}\n\n.tech-glow-slate { background: linear-gradient(135deg, #f1f5f9, #e2e8f0); }\n.tech-glow-cyan  { background: linear-gradient(135deg, #e0f9ff, #b8f0ff); }\n.tech-glow-emerald { background: linear-gradient(135deg, #d4f9ed, #a7f3d0); }\n.tech-glow-indigo { background: linear-gradient(135deg, #ede9fe, #ddd6fe); }\n\n.rs-tech-glass-box h3 {\n    margin: 0 0 12px 0;\n    font-size: 17px;\n    font-family: 'Syne', sans-serif;\n    color: var(--text-main);\n    font-weight: 700;\n}\n\n.rs-tech-glass-box p {\n    margin: 0;\n    font-size: 14.5px;\n    line-height: 1.75;\n    color: var(--text-muted);\n}\n\n.rs-tech-footer-card {\n    background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(240,245,255,0.95));\n    border: 1px solid var(--border);\n    border-radius: 16px;\n    padding: 35px;\n    box-shadow: 0 4px 20px rgba(0, 87, 255, 0.06);\n    position: relative;\n    overflow: hidden;\n}\n\n.rs-tech-footer-card::before {\n    content: '';\n    position: absolute;\n    bottom: 0; left: 0; right: 0;\n    height: 3px;\n    background: linear-gradient(90deg, var(--accent2), var(--primary), var(--accent));\n    border-radius: 0 0 16px 16px;\n}\n\n.rs-tech-flex-row {\n    display: flex;\n    gap: 35px;\n    align-items: stretch;\n}\n\n.rs-tech-text-block { flex: 1; }\n\n.rs-tech-divider-vertical {\n    width: 1px;\n    background: linear-gradient(180deg, transparent, var(--border), transparent);\n}\n\n.rs-tech-text-block h4 {\n    margin: 0 0 10px 0;\n    font-size: 16px;\n    font-weight: 700;\n    font-family: 'Syne', sans-serif;\n    color: var(--text-main);\n}\n\n.rs-tech-text-block p {\n    margin: 0;\n    font-size: 14px;\n    line-height: 1.8;\n    color: var(--text-muted);\n}\n\n@media(max-width: 900px) {\n    .rs-tech-flex-row { flex-direction: column; gap: 25px; }\n    .rs-tech-divider-vertical { display: none; }\n    .rs-tech-text-block { border-bottom: 1px solid var(--border); padding-bottom: 20px; }\n    .rs-tech-text-block:last-child { border-bottom: none; padding-bottom: 0; }\n}\n\n@media(max-width: 768px) {\n    .rs-tech-wrapper { padding: 20px; }\n    .rs-tech-glass-card { padding: 25px; }\n    .rs-tech-header h2 { font-size: 24px; }\n    .rs-tech-grid { grid-template-columns: 1fr; }\n    .rs-tech-glass-box, .rs-tech-footer-card { padding: 22px; }\n}\n</style>",
    "is_new": false,
    "id": "2f90a87hv",
    "is_hot": false,
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784878806/images_5_kfd5rb.jpg",
    "created_at": "2026-05-26T07:21:55.085Z"
  },
  {
    "slug": "jaiho-rummy-",
    "faqs": [],
    "seo_description": "",
    "target_region": "",
    "seo_title": "",
    "video_url": "",
    "category": "Yono",
    "yellow_box_msg": "",
    "idea_box_msg": "",
    "version": "2.1",
    "rating": 3.9,
    "og_image_url": "",
    "red_box_msg": "",
    "is_coming_soon": true,
    "release_notes": "",
    "file_size": "2.4",
    "serial_number": 18,
    "seo_keywords": "",
    "safety_status": "Verified",
    "screenshots": [],
    "developer": "PW sahar",
    "canonical_url": "",
    "custom_admin_box_heading": "",
    "is_featured": false,
    "description_html": "<p>A new application.</p>",
    "link_configured": false,
    "features_html": "",
    "is_new": true,
    "name": "JAIHO RUMMY ",
    "custom_admin_box_html": "",
    "is_hot": false,
    "id": "9a05609sb",
    "created_at": "2026-05-26T07:26:42.606Z",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784878878/images_6_p5wj8d.jpg"
  },
  {
    "idea_box_msg": "",
    "yellow_box_msg": "",
    "video_url": "",
    "category": "Yono",
    "seo_title": "",
    "faqs": [],
    "slug": "love-rummy",
    "seo_description": "",
    "target_region": "",
    "serial_number": 19,
    "seo_keywords": "",
    "developer": "Mak job",
    "screenshots": [],
    "safety_status": "Verified",
    "file_size": "68",
    "release_notes": "",
    "is_coming_soon": true,
    "rating": 4.2,
    "version": "1.6",
    "red_box_msg": "",
    "og_image_url": "",
    "features_html": "",
    "link_configured": false,
    "description_html": "<p>A new application.</p>",
    "canonical_url": "",
    "custom_admin_box_heading": "",
    "is_featured": false,
    "created_at": "2026-05-26T07:31:59.173Z",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784878950/download_31_s7fonv.webp",
    "id": "l7a60keix",
    "is_hot": false,
    "is_new": false,
    "custom_admin_box_html": "",
    "name": "Love Rummy"
  },
  {
    "features_html": "",
    "description_html": "<p>A new application.</p>",
    "link_configured": false,
    "canonical_url": "",
    "custom_admin_box_heading": "",
    "is_featured": false,
    "created_at": "2026-05-26T07:34:35.782Z",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784879087/download_32_cyvkev.webp",
    "is_hot": false,
    "id": "4paka7kie",
    "is_new": false,
    "custom_admin_box_html": "",
    "name": "JOY RUMMY",
    "idea_box_msg": "",
    "video_url": "",
    "category": "Yono",
    "yellow_box_msg": "",
    "seo_title": "",
    "slug": "joy-rummy",
    "faqs": [],
    "seo_description": "",
    "target_region": "",
    "seo_keywords": "",
    "serial_number": 20,
    "safety_status": "Verified",
    "developer": "AB Arora",
    "screenshots": [],
    "release_notes": "",
    "file_size": "50",
    "is_coming_soon": true,
    "version": "1.8",
    "rating": 5,
    "og_image_url": "",
    "red_box_msg": ""
  },
  {
    "slug": "maha-games",
    "faqs": [],
    "seo_description": "",
    "target_region": "",
    "seo_title": "",
    "category": "Yono",
    "video_url": "",
    "yellow_box_msg": "",
    "idea_box_msg": "",
    "version": "1.0",
    "rating": 4,
    "og_image_url": "",
    "red_box_msg": "",
    "is_coming_soon": true,
    "release_notes": "",
    "file_size": "70",
    "seo_keywords": "",
    "serial_number": 21,
    "safety_status": "Verified",
    "screenshots": [],
    "developer": "AZ ever",
    "canonical_url": "",
    "custom_admin_box_heading": "",
    "is_featured": false,
    "description_html": "<p>A new application.</p>",
    "link_configured": false,
    "features_html": "",
    "is_new": false,
    "name": "MAHA GAMES",
    "custom_admin_box_html": "",
    "is_hot": false,
    "id": "2768ohu2a",
    "created_at": "2026-05-26T07:37:07.122Z",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784879172/download_33_d1pgy0.webp"
  },
  {
    "faqs": [],
    "slug": "rummy-ludo",
    "target_region": "",
    "seo_description": "",
    "seo_title": "",
    "yellow_box_msg": "",
    "category": "Yono",
    "video_url": "",
    "idea_box_msg": "",
    "rating": 3.9,
    "version": "5.8",
    "red_box_msg": "",
    "og_image_url": "",
    "is_coming_soon": true,
    "file_size": "58",
    "release_notes": "",
    "seo_keywords": "",
    "serial_number": 22,
    "developer": "AZ ever",
    "screenshots": [],
    "safety_status": "Verified",
    "canonical_url": "",
    "is_featured": false,
    "custom_admin_box_heading": "",
    "link_configured": false,
    "description_html": "<p>A new application.</p>",
    "features_html": "",
    "is_new": false,
    "name": "Rummy Ludo",
    "custom_admin_box_html": "",
    "id": "us5xuk5bm",
    "is_hot": false,
    "created_at": "2026-05-26T07:39:44.282Z",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784879252/download_34_wrdzdw.webp"
  },
  {
    "custom_admin_box_html": "",
    "name": "Rummy 77",
    "is_new": false,
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784879414/download_35_frpjjp.webp",
    "created_at": "2026-05-26T07:42:24.615Z",
    "id": "69x1lstq7",
    "is_hot": false,
    "link_configured": false,
    "description_html": "<p>A new application.</p>",
    "is_featured": false,
    "custom_admin_box_heading": "",
    "canonical_url": "",
    "features_html": "",
    "is_coming_soon": true,
    "red_box_msg": "",
    "og_image_url": "",
    "rating": 3.9,
    "version": "2.0.6",
    "screenshots": [],
    "developer": "Arcade ",
    "safety_status": "Verified",
    "seo_keywords": "",
    "serial_number": 23,
    "file_size": "45",
    "release_notes": "",
    "seo_title": "",
    "seo_description": "",
    "target_region": "",
    "faqs": [],
    "slug": "rummy-77",
    "idea_box_msg": "",
    "yellow_box_msg": "",
    "video_url": "",
    "category": "Yono"
  },
  {
    "custom_admin_box_heading": "",
    "is_featured": false,
    "canonical_url": "",
    "description_html": "<p>A new application.</p>",
    "link_configured": true,
    "features_html": "",
    "custom_admin_box_html": "",
    "name": "Share Slots",
    "is_new": false,
    "is_hot": false,
    "id": "j79n2g3l9",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784879544/download_36_zeiyxs.webp",
    "created_at": "2026-05-26T07:44:32.442Z",
    "target_region": "",
    "seo_description": "",
    "slug": "share-slots",
    "faqs": [],
    "seo_title": "",
    "category": "Yono",
    "video_url": "",
    "yellow_box_msg": "",
    "idea_box_msg": "",
    "og_image_url": "",
    "red_box_msg": "",
    "version": "1.8",
    "rating": 4,
    "is_coming_soon": true,
    "release_notes": "",
    "file_size": "58",
    "safety_status": "Verified",
    "developer": "AB Arora",
    "screenshots": [],
    "seo_keywords": "",
    "serial_number": 24
  },
  {
    "seo_title": "",
    "target_region": "",
    "seo_description": "",
    "slug": "567-slots",
    "faqs": [],
    "idea_box_msg": "",
    "category": "Yono",
    "video_url": "",
    "yellow_box_msg": "",
    "is_coming_soon": true,
    "og_image_url": "",
    "red_box_msg": "",
    "version": "1.6",
    "rating": 3.5,
    "safety_status": "Verified",
    "developer": "Tania JK ",
    "screenshots": [],
    "serial_number": 26,
    "seo_keywords": "",
    "release_notes": "",
    "file_size": "65",
    "description_html": "<p>A new application.</p>",
    "link_configured": false,
    "is_featured": false,
    "custom_admin_box_heading": "",
    "canonical_url": "",
    "features_html": "",
    "name": "567 SLOTS",
    "custom_admin_box_html": "",
    "is_new": false,
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784879622/download_37_fzgtxc.webp",
    "created_at": "2026-05-26T07:51:47.637Z",
    "is_hot": false,
    "id": "n3w2vjk0b"
  },
  {
    "safety_status": "Verified",
    "screenshots": [],
    "developer": "Admin",
    "serial_number": 27,
    "seo_keywords": "",
    "release_notes": "",
    "file_size": "Tanu WD",
    "is_coming_soon": true,
    "og_image_url": "",
    "red_box_msg": "",
    "version": "1.9",
    "rating": 2.9,
    "idea_box_msg": "",
    "video_url": "",
    "category": "Yono",
    "yellow_box_msg": "",
    "seo_title": "",
    "seo_description": "",
    "target_region": "",
    "slug": "789jackpots",
    "faqs": [],
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784879711/download_38_pmpbnu.webp",
    "created_at": "2026-05-26T07:56:30.478Z",
    "is_hot": false,
    "id": "owxg4aekg",
    "custom_admin_box_html": "",
    "name": "789Jackpots",
    "is_new": false,
    "features_html": "",
    "description_html": "<p>A new application.</p>",
    "link_configured": false,
    "custom_admin_box_heading": "",
    "is_featured": false,
    "canonical_url": ""
  },
  {
    "idea_box_msg": "",
    "yellow_box_msg": "",
    "category": "Yono",
    "video_url": "",
    "seo_title": "",
    "faqs": [],
    "slug": "yono-vip",
    "seo_description": "",
    "target_region": "",
    "seo_keywords": "",
    "serial_number": 28,
    "developer": "Rahul HL",
    "screenshots": [],
    "safety_status": "Verified",
    "file_size": "78",
    "release_notes": "",
    "is_coming_soon": true,
    "rating": 4,
    "version": "1.8",
    "red_box_msg": "",
    "og_image_url": "",
    "features_html": "",
    "link_configured": false,
    "description_html": "<p>A new application.</p>",
    "canonical_url": "",
    "custom_admin_box_heading": "",
    "is_featured": false,
    "created_at": "2026-05-26T08:00:01.636Z",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784879809/download_39_znq2ql.webp",
    "id": "fw5wsziec",
    "is_hot": false,
    "is_new": false,
    "custom_admin_box_html": "",
    "name": "Yono Vip"
  },
  {
    "is_coming_soon": true,
    "og_image_url": "",
    "red_box_msg": "",
    "version": "3",
    "rating": 4.2,
    "safety_status": "Verified",
    "screenshots": [],
    "developer": "Unknown ",
    "serial_number": 34,
    "seo_keywords": "",
    "publish_date": "2026-06-10T12:00:00.000Z",
    "release_notes": "",
    "file_size": "90",
    "seo_title": "",
    "seo_description": "",
    "target_region": "",
    "slug": "teen-patti-octro",
    "faqs": [],
    "idea_box_msg": "",
    "category": "Card",
    "video_url": "",
    "yellow_box_msg": "",
    "custom_admin_box_html": "",
    "name": "Teen Patti Octro",
    "is_new": true,
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784879881/download_40_v9bper.webp",
    "created_at": "2026-06-03T10:17:01.058Z",
    "is_hot": false,
    "id": "t1ocq5iar",
    "description_html": "<p>A new application.</p>",
    "link_configured": false,
    "custom_admin_box_heading": "",
    "is_featured": false,
    "canonical_url": "",
    "features_html": ""
  },
  {
    "description_html": "<p>A new application.</p>",
    "link_configured": false,
    "is_featured": false,
    "custom_admin_box_heading": "",
    "canonical_url": "",
    "features_html": "",
    "custom_admin_box_html": "",
    "name": "Zynga Poker- Texas Holdem Game",
    "is_new": false,
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784879955/download_41_r3xnll.webp",
    "created_at": "2026-06-03T10:30:01.393Z",
    "is_hot": false,
    "id": "rrmv44n9n",
    "seo_title": "",
    "target_region": "",
    "seo_description": "",
    "slug": "zynga-poker-texas-holdem-game",
    "faqs": [],
    "idea_box_msg": "",
    "video_url": "",
    "category": "Card",
    "yellow_box_msg": "",
    "is_coming_soon": true,
    "og_image_url": "",
    "red_box_msg": "",
    "version": "1.0",
    "rating": 5,
    "safety_status": "Verified",
    "screenshots": [],
    "developer": "Admin",
    "serial_number": 29,
    "seo_keywords": "",
    "release_notes": "",
    "file_size": "Unknown"
  },
  {
    "safety_status": "Verified",
    "screenshots": [],
    "developer": "Admin",
    "seo_keywords": "",
    "serial_number": 30,
    "release_notes": "",
    "file_size": "Unknown",
    "is_coming_soon": true,
    "og_image_url": "",
    "red_box_msg": "",
    "version": "1.0",
    "rating": 5,
    "idea_box_msg": "",
    "video_url": "",
    "category": "Card",
    "yellow_box_msg": "",
    "seo_title": "",
    "target_region": "",
    "seo_description": "",
    "slug": "uno-",
    "faqs": [],
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784880053/download_42_u7vlpq.webp",
    "created_at": "2026-06-07T10:14:11.138Z",
    "is_hot": false,
    "id": "wf59smk6l",
    "name": "UNO! ",
    "custom_admin_box_html": "",
    "is_new": true,
    "features_html": "",
    "description_html": "<p>A new application.</p>",
    "link_configured": true,
    "is_featured": false,
    "custom_admin_box_heading": "",
    "canonical_url": ""
  },
  {
    "features_html": "",
    "custom_admin_box_heading": "",
    "is_featured": false,
    "canonical_url": "",
    "description_html": "<p>A new application.</p>",
    "link_configured": true,
    "is_hot": false,
    "id": "8epj9jjpu",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784880233/download_43_fgshj3.webp",
    "created_at": "2026-06-07T10:16:45.949Z",
    "custom_admin_box_html": "",
    "name": "Rummy GOLD - With Fast Rummy",
    "is_new": false,
    "video_url": "",
    "category": "Card",
    "yellow_box_msg": "",
    "idea_box_msg": "",
    "target_region": "",
    "seo_description": "",
    "slug": "rummy-gold-with-fast-rummy",
    "faqs": [],
    "seo_title": "",
    "release_notes": "",
    "file_size": "Unknown",
    "safety_status": "Verified",
    "screenshots": [],
    "developer": "Admin",
    "serial_number": 31,
    "seo_keywords": "",
    "og_image_url": "",
    "red_box_msg": "",
    "version": "1.0",
    "rating": 5,
    "is_coming_soon": true
  },
  {
    "id": "8jt0hokyo",
    "is_hot": false,
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784880331/download_44_i8vc4z.webp",
    "created_at": "2026-06-07T10:19:11.616Z",
    "name": "Indian Rummy 3 Patti Card Game",
    "custom_admin_box_html": "",
    "is_new": true,
    "features_html": "",
    "is_featured": false,
    "custom_admin_box_heading": "",
    "canonical_url": "",
    "link_configured": true,
    "description_html": "<p>A new application.</p>",
    "file_size": "Unknown",
    "release_notes": "",
    "developer": "Admin",
    "screenshots": [],
    "safety_status": "Verified",
    "seo_keywords": "",
    "serial_number": 32,
    "red_box_msg": "",
    "og_image_url": "",
    "rating": 5,
    "version": "1.0",
    "is_coming_soon": true,
    "yellow_box_msg": "",
    "category": "Card",
    "video_url": "",
    "idea_box_msg": "",
    "seo_description": "",
    "target_region": "",
    "faqs": [],
    "slug": "indian-rummy-3-patti-card-game",
    "seo_title": ""
  },
  {
    "seo_title": "",
    "slug": "lucky-spin-slots",
    "faqs": [],
    "seo_description": "",
    "target_region": "",
    "idea_box_msg": "",
    "category": "Slots",
    "video_url": "",
    "yellow_box_msg": "",
    "is_coming_soon": true,
    "version": "1.0",
    "rating": 5,
    "og_image_url": "https://1ewg1yyass.ucarecd.net/0f918f11-b247-4b5a-9d26-d510dddffbfe/-/preview/447x447/",
    "red_box_msg": "",
    "publish_date": "2026-07-08T13:08:00.000Z",
    "serial_number": 33,
    "seo_keywords": "",
    "safety_status": "Verified",
    "screenshots": [],
    "developer": "Admin",
    "release_notes": "",
    "file_size": "Unknown",
    "description_html": "<p>A new application.</p>",
    "link_configured": true,
    "canonical_url": "",
    "custom_admin_box_heading": "",
    "is_featured": false,
    "features_html": "",
    "is_new": false,
    "name": "Lucky Spin Slots",
    "custom_admin_box_html": "",
    "created_at": "2026-06-07T13:13:11.211Z",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784880502/download_45_rvzhvj.webp",
    "is_hot": false,
    "id": "01x9h7nfb"
  },
  {
    "file_size": "76",
    "release_notes": "",
    "developer": "AB Arora",
    "screenshots": [],
    "safety_status": "Verified",
    "serial_number": 28,
    "publish_date": "2026-06-12T15:30:00.000Z",
    "seo_keywords": "",
    "red_box_msg": "",
    "og_image_url": "",
    "rating": 4.5,
    "version": "1.0",
    "is_coming_soon": true,
    "yellow_box_msg": "",
    "category": "Yono, All app",
    "video_url": "",
    "idea_box_msg": "",
    "target_region": "",
    "seo_description": "",
    "faqs": [],
    "slug": "ind-club",
    "seo_title": "",
    "id": "3cflt97b5",
    "is_hot": false,
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784880566/download_46_rsjwao.webp",
    "created_at": "2026-06-12T12:39:30.407Z",
    "custom_admin_box_html": "",
    "name": "IND Club",
    "is_new": false,
    "features_html": "",
    "is_featured": false,
    "custom_admin_box_heading": "",
    "canonical_url": "",
    "link_configured": false,
    "description_html": "<p>A new application.</p>"
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
  "logo_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784896838/ezgif-64180dd8ca74703b_rpungk.webp",
  "favicon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784896838/ezgif-64180dd8ca74703b_rpungk.webp",
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
  "last_updated": "2026-07-24T12:41:19.706Z",
  "hero_title_text": "Discover Your Next Favorite Game",
  "hero_title_visible": true,
  "privacy_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Privacy Policy - RummyDex</title>\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\" rel=\"stylesheet\">\n\n    <style>\n        body {\n            font-family: 'Roboto', Arial, sans-serif;\n            line-height: 1.75;\n            background-color: #ffffff;\n            margin: 0;\n            padding: 60px 20px;\n            display: flex;\n            justify-content: center;\n        }\n\n        .about-container {\n            max-width: 720px;\n            width: 100%;\n        }\n\n        h1 {\n            font-size: 44px;\n            font-weight: 700;\n            color: #202124;\n            margin-bottom: 8px;\n            text-align: center;\n            letter-spacing: -0.5px;\n        }\n\n        .effective-date {\n            text-align: center;\n            font-size: 14px;\n            color: #5f6368;\n            margin-bottom: 40px;\n        }\n\n        h2.section-heading {\n            font-size: 28px;\n            font-weight: 500;\n            color: #202124;\n            margin-top: 50px;\n            margin-bottom: 16px;\n            letter-spacing: -0.2px;\n        }\n\n        p.about-text {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            font-weight: 400;\n        }\n\n        .sticker-illustration {\n            text-align: center;\n            margin: 35px auto;\n            padding: 10px;\n        }\n\n        .sticker-illustration img {\n            width: 140px;\n            height: 140px;\n            display: block;\n            margin: 0 auto;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"about-container\">\n        <h1>Privacy Policy</h1>\n        <p class=\"effective-date\">Effective Date: July 21, 2026</p>\n\n        <h2 class=\"section-heading\">1. Introduction</h2>\n        <p class=\"about-text\">\n            Welcome to RummyDex. This Privacy Policy governs the manner in which RummyDex collects, uses, maintains, and discloses information collected from users visiting our digital directory and software index. We are committed to safeguarding your privacy and ensuring transparency in how your data is handled while you navigate our platform.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:open-book.svg\" alt=\"Privacy Policy Introduction Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">2. Information Collection</h2>\n        <p class=\"about-text\">\n            RummyDex operates strictly as an informational index. We do not require users to create accounts, register, or provide sensitive personal identification information to access our directory.\n        </p>\n        <p class=\"about-text\">\n            We may collect non-personally identifiable information about users whenever they interact with our website. This data is collected automatically and may include the browser name, the type of computer or device, internet service providers, IP addresses, geographical region, and technical information regarding the user's means of connection to our site.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:bar-chart.svg\" alt=\"Information Collection Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">3. Web Browser Cookies</h2>\n        <p class=\"about-text\">\n            Our website uses \"cookies\" to enhance the user experience, analyze site traffic, and optimize our directory structure. A cookie is a small text file placed on a user's hard drive for record-keeping purposes and to track non-personal information. Users may choose to set their web browser to refuse cookies or to alert them when cookies are being sent. Please note that if cookies are disabled, some parts of the site may not function properly.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:cookie.svg\" alt=\"Web Browser Cookies Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">4. Third-Party Services</h2>\n        <p class=\"about-text\">\n            To maintain and support our directory, we may work with standard third-party services for analytics and content delivery. These partners may utilize cookies or similar technologies to provide relevant information and promotions based on your interactions with our site and other websites. You retain full control over your cookie preferences and can adjust, manage, or disable them at any time through your web browser settings or standard network opt-out pages.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:handshake.svg\" alt=\"Third-Party Services Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">5. Secure External Links and Third-Party Applications</h2>\n        <p class=\"about-text\">\n            RummyDex is an informational bridge. We do not host APKs or software files directly on our servers. Instead, we provide safe, correct links to external, third-party software developers through a secure, carefully verified process to ensure users are directed appropriately. When you click on a link and navigate to a third-party application, you are leaving our jurisdiction. We do not control the content, privacy practices, or data collection policies of these external destinations. Interaction with any other website or application is subject to that entity's own terms and policies.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:globe-with-meridians.svg\" alt=\"External Links Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">6. Data Security</h2>\n        <p class=\"about-text\">\n            We adopt appropriate data collection, storage, and processing practices, alongside strict security measures, to protect against unauthorized access, alteration, disclosure, or destruction of your non-personal information and data stored on our site. However, no data transmission over the internet or wireless network can be guaranteed to be 100% secure.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:locked.svg\" alt=\"Data Security Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">7. Acceptance of These Terms</h2>\n        <p class=\"about-text\">\n            By using RummyDex, you signify your acceptance of this Privacy Policy. If you do not agree to this policy, please do not use our site. We reserve the right to update or modify this Privacy Policy at any time. Continued use of the site following the posting of changes to this policy will be deemed your acceptance of those changes.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:balance-scale.svg\" alt=\"Acceptance of Terms Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n    </div>\n\n</body>\n</html>\n",
  "secure_index_title": "Welcome to RummyDex",
  "hero_title_color": "sunset-fire",
  "social_links": {
    "instagram": "https://www.instagram.com/rummydex?igsh=MTJjaGR3c3hmdjhnZA==",
    "youtube": "https://www.youtube.com/@rummydex",
    "facebook": "",
    "linkedin": "",
    "twitter": ""
  },
  "seo_keywords": ".",
  "responsibility_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Platform Responsibility Clause - RummyDex</title>\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\" rel=\"stylesheet\">\n\n    <style>\n        body {\n            font-family: 'Roboto', Arial, sans-serif;\n            line-height: 1.75;\n            background-color: #ffffff;\n            margin: 0;\n            padding: 60px 20px;\n            display: flex;\n            justify-content: center;\n        }\n\n        .about-container {\n            max-width: 720px;\n            width: 100%;\n        }\n\n        h1 {\n            font-size: 40px;\n            font-weight: 700;\n            color: #202124;\n            margin-bottom: 40px;\n            text-align: center;\n            letter-spacing: -0.5px;\n        }\n\n        h2.section-heading {\n            font-size: 28px;\n            font-weight: 500;\n            color: #202124;\n            margin-top: 50px;\n            margin-bottom: 16px;\n            letter-spacing: -0.2px;\n        }\n\n        p.about-text {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            font-weight: 400;\n        }\n\n        .sticker-illustration {\n            text-align: center;\n            margin: 35px auto;\n            padding: 10px;\n        }\n\n        .sticker-illustration img {\n            width: 140px;\n            height: 140px;\n            display: block;\n            margin: 0 auto;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"about-container\">\n        <h1>Platform Responsibility Clause</h1>\n\n        <h2 class=\"section-heading\">1. Technical Operations &amp; Secure Routing</h2>\n        <p class=\"about-text\">\n            Our operational responsibility is strictly limited to the maintenance of the RummyDex directory infrastructure. We ensure that our platform accurately catalogs offline and casual online applications, and that all outbound resource links are generated through a secure, verified process. We guarantee that the links provided on our site correctly route users to the intended, legitimate third-party developer sources at the time of publication.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:gear.svg\" alt=\"Technical Operations Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">2. Limits of Content &amp; Software Liability</h2>\n        <p class=\"about-text\">\n            RummyDex does not host software, APK files, or proprietary source code on our servers. Because our control is strictly limited to our own website interface, we are not liable for the performance, data practices, or digital security of the external third-party destinations. Any downloading or installation of software from external sources is conducted solely at the user's discretion and risk.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:warning.svg\" alt=\"Software Liability Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">3. Post-Listing Developer Modifications</h2>\n        <p class=\"about-text\">\n            While our team conducts hands-on evaluation prior to listing any offline or online application, we do not govern the external developers. We are not responsible for unannounced updates, post-launch mechanic alterations, or software modifications implemented by third parties after an app has been published on our site.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:construction.svg\" alt=\"Post-Listing Modifications Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">4. Policy Enforcement &amp; User Experiences</h2>\n        <p class=\"about-text\">\n            For information regarding how RummyDex handles non-compliant developer updates, community oversight, and user-submitted reviews, please refer to our dedicated Report &amp; Removal Policy and our Terms &amp; Conditions.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:memo.svg\" alt=\"Policy Enforcement Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n    </div>\n\n</body>\n</html>\n",
  "report_removal_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Report &amp; Removal Policy - RummyDex</title>\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\" rel=\"stylesheet\">\n\n    <style>\n        body {\n            font-family: 'Roboto', Arial, sans-serif;\n            line-height: 1.75;\n            background-color: #ffffff;\n            margin: 0;\n            padding: 60px 20px;\n            display: flex;\n            justify-content: center;\n        }\n\n        .about-container {\n            max-width: 720px;\n            width: 100%;\n        }\n\n        h1 {\n            font-size: 40px;\n            font-weight: 700;\n            color: #202124;\n            margin-bottom: 40px;\n            text-align: center;\n            letter-spacing: -0.5px;\n        }\n\n        h2.section-heading {\n            font-size: 28px;\n            font-weight: 500;\n            color: #202124;\n            margin-top: 50px;\n            margin-bottom: 16px;\n            letter-spacing: -0.2px;\n        }\n\n        p.about-text {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            font-weight: 400;\n        }\n\n        p.about-text strong,\n        ul.about-list strong {\n            font-weight: 700;\n            color: #202124;\n        }\n\n        ul.about-list {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            padding-left: 24px;\n        }\n\n        ul.about-list li {\n            margin-bottom: 14px;\n        }\n\n        .sticker-illustration {\n            text-align: center;\n            margin: 35px auto;\n            padding: 10px;\n        }\n\n        .sticker-illustration img {\n            width: 140px;\n            height: 140px;\n            display: block;\n            margin: 0 auto;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"about-container\">\n        <h1>Report &amp; Removal Policy</h1>\n\n        <h2 class=\"section-heading\">1. Our Commitment to a Safe Directory</h2>\n        <p class=\"about-text\">\n            RummyDex is built on the foundation of providing a clean, safe, and purely entertainment-focused digital index. Because third-party developers can update their applications dynamically after we list them, we rely on active community oversight to help us maintain the integrity of our platform. This policy outlines exactly what we do not allow and how we handle non-compliant applications.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:shield.svg\" alt=\"Safe Directory Commitment Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">2. What You Should Report</h2>\n        <p class=\"about-text\">\n            We ask our community to immediately report any application listed on our platform that exhibits any of the following violations:\n        </p>\n        <ul class=\"about-list\">\n            <li><strong>Real-Money Gaming (RMG):</strong> The sudden introduction of real-money betting, gambling, or mandatory financial deposits to play.</li>\n            <li><strong>Deceptive Updates:</strong> An application that drastically changes its core gameplay from what was originally reviewed and listed (e.g., a casual offline puzzle game updating into a casino app).</li>\n            <li><strong>Broken or Malicious Links:</strong> A resource link that no longer directs to the verified developer source, or redirects to an unsafe, unverified page.</li>\n            <li><strong>Excessive Intrusive Ads:</strong> Applications that have updated to include unskippable system-level ads or malware-like behavior that ruins the user experience.</li>\n        </ul>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:no-entry.svg\" alt=\"Violations to Report Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">3. How to Submit a Report</h2>\n        <p class=\"about-text\">\n            Reporting a violation is simple and direct. At the bottom of every individual app review page, you will find a <strong>\"Report App\"</strong> button. Clicking this will open a quick form where you can select the reason for your report and provide a brief detail of your experience.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:writing-hand.svg\" alt=\"Submitting a Report Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">4. Our Review Process</h2>\n        <p class=\"about-text\">\n            Once a report is submitted, it goes directly to our moderation team. We do not use automated bots for this process; a real team member will manually re-test the application and verify the provided link to check for the reported violations.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:eyes.svg\" alt=\"Manual Review Process Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">5. The 100% Permanent Removal Guarantee</h2>\n        <p class=\"about-text\">\n            We operate with a strict <strong>zero-tolerance policy</strong> for financial risk mechanisms and deceptive software. If our team verifies that an application has violated our safety guidelines or introduced real-money mechanics, we enforce a <strong>100% immediate and permanent removal</strong> of that app from RummyDex.\n        </p>\n        <ul class=\"about-list\">\n            <li>The application's dedicated page will be taken down.</li>\n            <li>All outbound links to the software will be permanently severed.</li>\n            <li>The developer will not be permitted to relist the application on our index.</li>\n        </ul>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:police-car-light.svg\" alt=\"Permanent Removal Guarantee Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">6. False Reporting</h2>\n        <p class=\"about-text\">\n            While we highly value community feedback, we ask that users only submit reports for genuine violations. Deliberately spamming the reporting system or submitting false claims to maliciously target specific games may result in a restriction of your ability to submit future reports or post reviews.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:warning.svg\" alt=\"False Reporting Warning Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n    </div>\n\n</body>\n</html>\n",
  "terms_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Terms &amp; Conditions - RummyDex</title>\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\" rel=\"stylesheet\">\n\n    <style>\n        body {\n            font-family: 'Roboto', Arial, sans-serif;\n            line-height: 1.75;\n            background-color: #ffffff;\n            margin: 0;\n            padding: 60px 20px;\n            display: flex;\n            justify-content: center;\n        }\n\n        .about-container {\n            max-width: 720px;\n            width: 100%;\n        }\n\n        h1 {\n            font-size: 44px;\n            font-weight: 700;\n            color: #202124;\n            margin-bottom: 8px;\n            text-align: center;\n            letter-spacing: -0.5px;\n        }\n\n        .effective-date {\n            text-align: center;\n            font-size: 14px;\n            color: #5f6368;\n            margin-bottom: 40px;\n        }\n\n        h2.section-heading {\n            font-size: 28px;\n            font-weight: 500;\n            color: #202124;\n            margin-top: 50px;\n            margin-bottom: 16px;\n            letter-spacing: -0.2px;\n        }\n\n        p.about-text {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            font-weight: 400;\n        }\n\n        ul.about-list {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            padding-left: 24px;\n        }\n\n        ul.about-list li {\n            margin-bottom: 12px;\n        }\n\n        .sticker-illustration {\n            text-align: center;\n            margin: 35px auto;\n            padding: 10px;\n        }\n\n        .sticker-illustration img {\n            width: 140px;\n            height: auto;\n            display: block;\n            margin: 0 auto;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"about-container\">\n        <h1>Terms &amp; Conditions</h1>\n        <p class=\"effective-date\">Effective Date: July 21, 2026</p>\n\n        <h2 class=\"section-heading\">1. Agreement to Terms</h2>\n        <p class=\"about-text\">\n            By accessing or using RummyDex, you agree to be bound by these Terms &amp; Conditions. If you disagree with any part of these terms, you are prohibited from using our website. These terms apply to all visitors, users, and others who access our directory.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:handshake.svg\" alt=\"Agreement to Terms Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">2. Intellectual Property and Copyright</h2>\n        <p class=\"about-text\">\n            The original content, layout, design, and structural organization of the RummyDex directory are the exclusive property of RummyDex. However, we do not claim ownership over the third-party applications listed on our site. All app names, logos, trademarks, and associated digital assets belong to their respective external developers and publishers.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:copyright.svg\" alt=\"Intellectual Property and Copyright Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">3. Acceptable Use of the Directory</h2>\n        <p class=\"about-text\">\n            RummyDex is provided solely for your personal, non-commercial informational use. You agree not to:\n        </p>\n        <ul class=\"about-list\">\n            <li>Use automated scripts, bots, or web scrapers to extract data, reviews, or links from our directory.</li>\n            <li>Interfere with or disrupt the security, servers, or networks connected to our website.</li>\n            <li>Submit false, spam, or malicious reports through our App Reporting system.</li>\n        </ul>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:no-entry.svg\" alt=\"Acceptable Use Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">4. Third-Party Links and Software Disclaimer</h2>\n        <p class=\"about-text\">\n            RummyDex functions as an informational bridge. While we utilize a secure, carefully verified process to provide correct links to external applications, we do not host any software or APK files on our own servers.\n        </p>\n        <p class=\"about-text\">\n            You acknowledge that clicking an external link takes you to a third-party destination that we do not control. You agree that any downloading, installation, or use of third-party software is done entirely at your own risk. RummyDex is not responsible for any damage to your device, loss of data, or other issues resulting from the use of third-party applications discovered through our index.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:warning.svg\" alt=\"Third-Party Software Disclaimer Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">5. App Reporting &amp; Removal Guarantee</h2>\n        <p class=\"about-text\">\n            We maintain a strict zero-tolerance policy for apps that introduce unauthorized real-money gaming (RMG) mechanics. If a user reports an application for violating these standards, we will review the claim and enforce our 100% removal guarantee. We reserve the right to remove, modify, or delist any application from our directory at our sole discretion, without prior notice to the app's developer.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:megaphone.svg\" alt=\"App Reporting and Removal Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">6. Limitation of Liability</h2>\n        <p class=\"about-text\">\n            To the maximum extent permitted by law, RummyDex and its team shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of, or inability to use, our directory or the external applications linked within it. Our platform is provided on an \"as is\" and \"as available\" basis without any warranties of any kind.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:balance-scale.svg\" alt=\"Limitation of Liability Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">7. Modifications to Terms</h2>\n        <p class=\"about-text\">\n            We reserve the right to revise these Terms &amp; Conditions at any time. By continuing to access or use RummyDex after those revisions become effective, you agree to be bound by the revised terms.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:memo.svg\" alt=\"Modifications to Terms Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n    </div>\n\n</body>\n</html>\n",
  "hero_title_animation": "slide-up",
  "hero_title_subtitle": "Your independent directory for hand-tested casual games and pure digital entertainment.",
  "hero_title_style": "serif",
  "trending_searches": [
    "Yono rummy",
    "Yono Arcade",
    "Bingo 101",
    "Spin crush",
    "UNO!"
  ],
  "about_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>About Us - RummyDex</title>\n\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n    <link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap\" rel=\"stylesheet\">\n\n    <style>\n        body {\n            font-family: 'Roboto', Arial, sans-serif;\n            line-height: 1.75;\n            background-color: #ffffff;\n            margin: 0;\n            padding: 60px 20px;\n            display: flex;\n            justify-content: center;\n        }\n\n        .about-container {\n            max-width: 720px;\n            width: 100%;\n        }\n\n        h1 {\n            font-size: 44px;\n            font-weight: 700;\n            color: #202124;\n            margin-bottom: 40px;\n            text-align: center;\n            letter-spacing: -0.5px;\n        }\n\n        h2.section-heading {\n            font-size: 28px;\n            font-weight: 500;\n            color: #202124;\n            margin-top: 50px;\n            margin-bottom: 16px;\n            letter-spacing: -0.2px;\n        }\n\n        p.about-text {\n            font-size: 16px;\n            color: #3c4043;\n            margin-bottom: 24px;\n            font-weight: 400;\n        }\n\n        .sticker-illustration {\n            text-align: center;\n            margin: 35px auto;\n            padding: 10px;\n        }\n\n        .sticker-illustration img {\n            width: 140px;\n            height: 140px;\n            display: block;\n            margin: 0 auto;\n        }\n    </style>\n</head>\n<body>\n\n    <div class=\"about-container\">\n        <h1>About Us</h1>\n\n        <h2 class=\"section-heading\">The Meaning of \"Dex\" (Who We Are)</h2>\n        <p class=\"about-text\">\n            Welcome to RummyDex. The word \"Dex\" stands for index or directory, which perfectly describes our core identity. We are an independent digital library built to catalog, review, and provide structured, transparent information about casual games and digital applications. Our platform is designed to be a complete informational hub for entertainment enthusiasts.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:card-index-dividers.svg\" alt=\"Index Directory Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">How We Provide Information &amp; Links</h2>\n        <p class=\"about-text\">\n            We function strictly as an informational bridge. Instead of hosting direct software or APK files on our servers, we provide comprehensive technical breakdowns, clear guides, and safe, direct links to third-party developer sources. This ensures that our platform remains fast and secure, and that you always access applications straight from the source.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:link.svg\" alt=\"Direct Links Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">Real Hands-On Testing &amp; Experience</h2>\n        <p class=\"about-text\">\n            We do not just list apps blindly. Before any application is published on our platform, our team conducts a real, hands-on test. We personally experience the app's performance, mechanics, and user interface to ensure it meets our strict entertainment standards before it ever reaches our directory.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:check-mark-button.svg\" alt=\"Hands-on Testing Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n\n        <h2 class=\"section-heading\">Complete Transparency &amp; Neutrality</h2>\n        <p class=\"about-text\">\n            RummyDex operates with 100% complete transparency and zero developer bias. We act entirely as an independent informational resource. Our goal is to provide honest, neutral, and clear breakdowns so that you can make fully informed choices about your offline and casual online entertainment.\n        </p>\n\n        <div class=\"sticker-illustration\">\n            <img src=\"https://api.iconify.design/noto:balance-scale.svg\" alt=\"Transparency and Neutrality Sticker\" width=\"140\" height=\"140\" loading=\"lazy\">\n        </div>\n    </div>\n\n</body>\n</html>\n"
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
