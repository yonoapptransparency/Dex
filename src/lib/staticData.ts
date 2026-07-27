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
  related_app_id?: string;
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

export const mockApps: AppConfig[] = [];

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
  "meta_description": "Download All Yono Games, Rummy Apps & Teen Patti APKs",
  "logo_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784896838/ezgif-64180dd8ca74703b_rpungk.webp",
  "favicon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784896838/ezgif-64180dd8ca74703b_rpungk.webp",
  "helpline_whatsapp": "",
  "helpline_telegram": "",
  "support_email": "",
  "disclaimer_text": "",
  "ethics_discrimination_text": "",
  "ticker_text": "",
  "animations_enabled": true,
  "categories": [
    "All apps",
    "Yono"
  ],
  "banners": [],
  "quick_links": [],
  "website_faqs": [],
  "developers": [],
  "social_links": {
    "linkedin": "",
    "twitter": "",
    "youtube": "",
    "facebook": "",
    "instagram": ""
  },
  "secure_index_subtitle": "Verified & Transparent App Marketplace",
  "last_updated": "2026-07-27T15:13:26.950Z",
  "secure_index_title": "Secure Index",
  "hero_title_style": "modern",
  "hero_title_subtitle": "COMPREHENSIVE SOCIAL CASUAL E-SPORTS METRICS & UNBIASED INTEGRITY REVIEWS",
  "hero_title_text": "RUMMY STORE GAMING DIRECTORY",
  "report_removal_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Report & Removal Policy — RummyDex</title>\n<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n<style>\nbody{font-family:Arial,Helvetica,sans-serif;color:#3c4043;max-width:700px;margin:40px auto;padding:0 20px;line-height:1.7;font-size:15px;background:#fff}\nh1{font-size:26px;color:#202124;font-weight:400;margin-bottom:6px}\n.updated{color:#5f6368;font-size:13px;margin-bottom:28px}\nh2{font-size:19px;color:#202124;font-weight:500;margin-top:44px}\np{margin:10px 0}\nul{margin:10px 0;padding-left:22px}\nli{margin:8px 0}\n.art{display:block;margin:18px 0}\n.note{color:#5f6368;font-size:13px;margin-top:40px;border-top:1px solid #dadce0;padding-top:14px}\n</style>\n</head>\n<body>\n\n<h1>Report &amp; Removal Policy</h1>\n<p class=\"updated\">Last modified: July 27, 2026</p>\n\n<h2>1. Our Commitment to a Safe Directory</h2>\n<svg class=\"art\" width=\"180\" height=\"130\" viewBox=\"0 0 180 130\">\n<path d=\"M90 12 40 30v35c0 32 22 55 50 65 28-10 50-33 50-65V30z\" fill=\"none\" stroke=\"#3c4043\" stroke-width=\"2\"/>\n<path d=\"M74 78 86 90 112 58\" fill=\"none\" stroke=\"#1a73e8\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n<p>RummyDex is built on the foundation of providing a clean, safe, and purely entertainment-focused digital index. Because third-party developers can update their applications dynamically after we list them, we rely on active community oversight to help us maintain the integrity of our platform. This policy outlines exactly what we do not allow and how we handle non-compliant applications.</p>\n\n<h2>2. What You Should Report</h2>\n<svg class=\"art\" width=\"180\" height=\"130\" viewBox=\"0 0 180 130\">\n<circle cx=\"90\" cy=\"60\" r=\"42\" fill=\"none\" stroke=\"#3c4043\" stroke-width=\"2\"/>\n<path d=\"M90 40v26\" stroke=\"#ea4335\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n<circle cx=\"90\" cy=\"78\" r=\"3\" fill=\"#ea4335\"/>\n<path d=\"M40 105h100\" stroke=\"#3c4043\" stroke-width=\"2\"/>\n</svg>\n<p>We ask our community to immediately report any application listed on our platform that exhibits any of the following violations:</p>\n<ul>\n<li><strong>Real-Money Gaming (RMG):</strong> The sudden introduction of real-money betting, gambling, or mandatory financial deposits to play.</li>\n<li><strong>Deceptive Updates:</strong> An application that drastically changes its core gameplay from what was originally reviewed and listed (e.g., a casual offline puzzle game updating into a casino app).</li>\n<li><strong>Broken or Malicious Links:</strong> A resource link that no longer directs to the verified developer source, or redirects to an unsafe, unverified page.</li>\n<li><strong>Excessive Intrusive Ads:</strong> Applications that have updated to include unskippable system-level ads or malware-like behavior that ruins the user experience.</li>\n</ul>\n\n<h2>3. How to Submit a Report</h2>\n<svg class=\"art\" width=\"180\" height=\"130\" viewBox=\"0 0 180 130\">\n<rect x=\"45\" y=\"20\" width=\"90\" height=\"70\" rx=\"6\" fill=\"none\" stroke=\"#3c4043\" stroke-width=\"2\"/>\n<path d=\"M60 40h60M60 55h60M60 70h35\" stroke=\"#3c4043\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n<rect x=\"70\" y=\"95\" width=\"40\" height=\"18\" rx=\"4\" fill=\"#1a73e8\"/>\n</svg>\n<p>Reporting a violation is simple and direct. At the bottom of every individual app review page, you will find a \"Report App\" button. Clicking this will open a quick form where you can select the reason for your report and provide a brief detail of your experience.</p>\n\n<h2>4. Our Review Process</h2>\n<svg class=\"art\" width=\"180\" height=\"130\" viewBox=\"0 0 180 130\">\n<circle cx=\"75\" cy=\"45\" r=\"16\" fill=\"none\" stroke=\"#3c4043\" stroke-width=\"2\"/>\n<path d=\"M40 105c0-22 16-38 35-38s35 16 35 38\" fill=\"none\" stroke=\"#3c4043\" stroke-width=\"2\"/>\n<circle cx=\"122\" cy=\"82\" r=\"18\" fill=\"none\" stroke=\"#1a73e8\" stroke-width=\"3\"/>\n<path d=\"M135 95l14 14\" stroke=\"#1a73e8\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n</svg>\n<p>Once a report is submitted, it goes directly to our moderation team. We do not use automated bots for this process; a real team member will manually re-test the application and verify the provided link to check for the reported violations.</p>\n\n<h2>5. The 100% Permanent Removal Guarantee</h2>\n<svg class=\"art\" width=\"180\" height=\"130\" viewBox=\"0 0 180 130\">\n<path d=\"M60 40h60l-6 68H66z\" fill=\"none\" stroke=\"#3c4043\" stroke-width=\"2\"/>\n<path d=\"M72 30h36l4 10H68z\" fill=\"none\" stroke=\"#3c4043\" stroke-width=\"2\"/>\n<path d=\"M78 55v38M90 55v38M102 55v38\" stroke=\"#ea4335\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n</svg>\n<p>We operate with a strict zero-tolerance policy for financial risk mechanisms and deceptive software. If our team verifies that an application has violated our safety guidelines or introduced real-money mechanics, we enforce a 100% immediate and permanent removal of that app from RummyDex.</p>\n<ul>\n<li>The application's dedicated page will be taken down.</li>\n<li>All outbound links to the software will be permanently severed.</li>\n<li>The developer will not be permitted to relist the application on our index.</li>\n</ul>\n\n<h2>6. False Reporting</h2>\n<svg class=\"art\" width=\"180\" height=\"130\" viewBox=\"0 0 180 130\">\n<circle cx=\"90\" cy=\"60\" r=\"42\" fill=\"none\" stroke=\"#3c4043\" stroke-width=\"2\"/>\n<path d=\"M90 40v22\" stroke=\"#fbbc04\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n<path d=\"M90 62l14 8\" stroke=\"#fbbc04\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n</svg>\n<p>While we highly value community feedback, we ask that users only submit reports for genuine violations. Deliberately spamming the reporting system or submitting false claims to maliciously target specific games may result in a restriction of your ability to submit future reports or post reviews.</p>\n\n<p class=\"note\">RummyDex — keeping the directory safe, together.</p>\n\n</body>\n</html>\n",
  "hero_title_color": "classic-dark",
  "terms_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Terms & Conditions — RummyDex</title>\n<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n<style>\nbody{font-family:Arial,Helvetica,sans-serif;color:#3c4043;max-width:700px;margin:40px auto;padding:0 20px;line-height:1.7;font-size:15px;background:#fff}\nh1{font-size:26px;color:#202124;font-weight:400;margin-bottom:6px}\n.updated{color:#5f6368;font-size:13px;margin-bottom:28px}\nh2{font-size:19px;color:#202124;font-weight:500;margin-top:44px}\np{margin:10px 0}\nul{margin:10px 0;padding-left:22px}\nli{margin:8px 0}\n.art{display:block;margin:18px 0}\n.note{color:#5f6368;font-size:13px;margin-top:40px;border-top:1px solid #dadce0;padding-top:14px}\n</style>\n</head>\n<body>\n\n<h1>Terms &amp; Conditions</h1>\n<p class=\"updated\">Last modified: July 27, 2026</p>\n\n<h2>1. Agreement to Terms</h2>\n<svg class=\"art\" width=\"180\" height=\"130\" viewBox=\"0 0 180 130\">\n<rect x=\"55\" y=\"20\" width=\"70\" height=\"90\" rx=\"6\" fill=\"none\" stroke=\"#3c4043\" stroke-width=\"2\"/>\n<path d=\"M68 40h44M68 55h44M68 70h44\" stroke=\"#3c4043\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n<path d=\"M70 88l10 10 20-20\" fill=\"none\" stroke=\"#1a73e8\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n<p>By accessing or using RummyDex, you agree to be bound by these Terms &amp; Conditions. If you disagree with any part of these terms, you are prohibited from using our website. These terms apply to all visitors, users, and others who access our directory.</p>\n\n<h2>2. Intellectual Property and Copyright</h2>\n<svg class=\"art\" width=\"180\" height=\"130\" viewBox=\"0 0 180 130\">\n<circle cx=\"90\" cy=\"60\" r=\"42\" fill=\"none\" stroke=\"#3c4043\" stroke-width=\"2\"/>\n<path d=\"M90 40a20 20 0 100 40 20 20 0 100-40\" fill=\"none\" stroke=\"#1a73e8\" stroke-width=\"2\"/>\n<path d=\"M90 46v28M78 60h24\" stroke=\"#1a73e8\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n</svg>\n<p>The original content, layout, design, and structural organization of the RummyDex directory are the exclusive property of RummyDex. However, we do not claim ownership over the third-party applications listed on our site. All app names, logos, trademarks, and associated digital assets belong to their respective external developers and publishers.</p>\n\n<h2>3. Acceptable Use of the Directory</h2>\n<svg class=\"art\" width=\"180\" height=\"130\" viewBox=\"0 0 180 130\">\n<circle cx=\"90\" cy=\"55\" r=\"30\" fill=\"none\" stroke=\"#3c4043\" stroke-width=\"2\"/>\n<path d=\"M68 33l44 44\" stroke=\"#ea4335\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n<path d=\"M40 108h100\" stroke=\"#3c4043\" stroke-width=\"2\"/>\n</svg>\n<p>RummyDex is provided solely for your personal, non-commercial informational use. You agree not to:</p>\n<ul>\n<li>Use automated scripts, bots, or web scrapers to extract data, reviews, or links from our directory.</li>\n<li>Interfere with or disrupt the security, servers, or networks connected to our website.</li>\n<li>Submit false, spam, or malicious reports through our App Reporting system.</li>\n</ul>\n\n<h2>4. Third-Party Links and Software Disclaimer</h2>\n<svg class=\"art\" width=\"180\" height=\"130\" viewBox=\"0 0 180 130\">\n<rect x=\"30\" y=\"45\" width=\"45\" height=\"35\" rx=\"4\" fill=\"none\" stroke=\"#3c4043\" stroke-width=\"2\"/>\n<rect x=\"105\" y=\"45\" width=\"45\" height=\"35\" rx=\"4\" fill=\"none\" stroke=\"#3c4043\" stroke-width=\"2\"/>\n<path d=\"M75 62h30\" stroke=\"#fbbc04\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n<circle cx=\"128\" cy=\"62\" r=\"6\" fill=\"none\" stroke=\"#ea4335\" stroke-width=\"2\"/>\n<path d=\"M125 62h6M128 59v6\" stroke=\"#ea4335\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n</svg>\n<p>RummyDex functions as an informational bridge. While we utilize a secure, carefully verified process to provide correct links to external applications, we do not host any software or APK files on our own servers.</p>\n<ul>\n<li>You acknowledge that clicking an external link takes you to a third-party destination that we do not control.</li>\n<li>You agree that any downloading, installation, or use of third-party software is done entirely at your own risk.</li>\n<li>RummyDex is not responsible for any damage to your device, loss of data, or other issues resulting from the use of third-party applications discovered through our index.</li>\n</ul>\n\n<h2>5. App Reporting &amp; Removal Guarantee</h2>\n<svg class=\"art\" width=\"180\" height=\"130\" viewBox=\"0 0 180 130\">\n<path d=\"M60 40h60l-6 68H66z\" fill=\"none\" stroke=\"#3c4043\" stroke-width=\"2\"/>\n<path d=\"M72 30h36l4 10H68z\" fill=\"none\" stroke=\"#3c4043\" stroke-width=\"2\"/>\n<path d=\"M78 55v38M90 55v38M102 55v38\" stroke=\"#ea4335\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n</svg>\n<p>We maintain a strict zero-tolerance policy for apps that introduce unauthorized real-money gaming (RMG) mechanics. If a user reports an application for violating these standards, we will review the claim and enforce our 100% removal guarantee. We reserve the right to remove, modify, or delist any application from our directory at our sole discretion, without prior notice to the app's developer.</p>\n\n<h2>6. Limitation of Liability</h2>\n<svg class=\"art\" width=\"180\" height=\"130\" viewBox=\"0 0 180 130\">\n<circle cx=\"90\" cy=\"60\" r=\"42\" fill=\"none\" stroke=\"#3c4043\" stroke-width=\"2\"/>\n<path d=\"M90 40v26\" stroke=\"#fbbc04\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n<circle cx=\"90\" cy=\"78\" r=\"3\" fill=\"#fbbc04\"/>\n</svg>\n<p>To the maximum extent permitted by law, RummyDex and its team shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of, or inability to use, our directory or the external applications linked within it. Our platform is provided on an \"as is\" and \"as available\" basis without any warranties of any kind.</p>\n\n<h2>7. Modifications to Terms</h2>\n<svg class=\"art\" width=\"180\" height=\"130\" viewBox=\"0 0 180 130\">\n<path d=\"M65 45a30 30 0 1130 40\" fill=\"none\" stroke=\"#1a73e8\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n<path d=\"M60 38l5 12 12-4\" fill=\"none\" stroke=\"#1a73e8\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<rect x=\"55\" y=\"90\" width=\"70\" height=\"18\" rx=\"4\" fill=\"none\" stroke=\"#3c4043\" stroke-width=\"2\"/>\n</svg>\n<p>We reserve the right to revise these Terms &amp; Conditions at any time. By continuing to access or use RummyDex after those revisions become effective, you agree to be bound by the revised terms.</p>\n\n<p class=\"note\">RummyDex — keeping the directory safe, together.</p>\n\n</body>\n</html>\n",
  "hero_title_animation": "fade-in",
  "hero_title_visible": true,
  "trending_searches": [],
  "responsibility_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<title>Platform Responsibility Clause — RummyDex</title>\n<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n<style>\nbody{font-family:Arial,Helvetica,sans-serif;color:#3c4043;max-width:700px;margin:40px auto;padding:0 20px;line-height:1.7;font-size:15px;background:#fff}\nh1{font-size:26px;color:#202124;font-weight:400;margin-bottom:6px}\n.updated{color:#5f6368;font-size:13px;margin-bottom:28px}\nh2{font-size:19px;color:#202124;font-weight:500;margin-top:44px}\np{margin:10px 0}\n.art{display:block;margin:18px 0}\n.note{color:#5f6368;font-size:13px;margin-top:40px;border-top:1px solid #dadce0;padding-top:14px}\na{color:#1a73e8;text-decoration:none}\na:hover{text-decoration:underline}\n</style>\n</head>\n<body>\n\n<h1>Platform Responsibility Clause</h1>\n<p class=\"updated\">Last modified: July 27, 2026</p>\n\n<h2>1. Technical Operations &amp; Secure Routing</h2>\n<svg class=\"art\" width=\"180\" height=\"130\" viewBox=\"0 0 180 130\">\n<rect x=\"30\" y=\"45\" width=\"45\" height=\"35\" rx=\"4\" fill=\"none\" stroke=\"#3c4043\" stroke-width=\"2\"/>\n<rect x=\"105\" y=\"45\" width=\"45\" height=\"35\" rx=\"4\" fill=\"none\" stroke=\"#3c4043\" stroke-width=\"2\"/>\n<path d=\"M75 62h30\" stroke=\"#1a73e8\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n<path d=\"M96 54l9 8-9 8\" fill=\"none\" stroke=\"#1a73e8\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<circle cx=\"52\" cy=\"62\" r=\"4\" fill=\"#3c4043\"/>\n<circle cx=\"128\" cy=\"62\" r=\"4\" fill=\"#3c4043\"/>\n</svg>\n<p>Our operational responsibility is strictly limited to the maintenance of the RummyDex directory infrastructure. We ensure that our platform accurately catalogs offline and casual online applications, and that all outbound resource links are generated through a secure, verified process. We guarantee that the links provided on our site correctly route users to the intended, legitimate third-party developer sources at the time of publication.</p>\n\n<h2>2. Limits of Content &amp; Software Liability</h2>\n<svg class=\"art\" width=\"180\" height=\"130\" viewBox=\"0 0 180 130\">\n<rect x=\"55\" y=\"20\" width=\"70\" height=\"90\" rx=\"6\" fill=\"none\" stroke=\"#3c4043\" stroke-width=\"2\"/>\n<path d=\"M68 40h44M68 55h44M68 70h30\" stroke=\"#3c4043\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n<circle cx=\"90\" cy=\"93\" r=\"9\" fill=\"none\" stroke=\"#ea4335\" stroke-width=\"2\"/>\n<path d=\"M86 93h8M90 89v8\" stroke=\"#ea4335\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n</svg>\n<p>RummyDex does not host software, APK files, or proprietary source code on our servers. Because our control is strictly limited to our own website interface, we are not liable for the performance, data practices, or digital security of the external third-party destinations. Any downloading or installation of software from external sources is conducted solely at the user's discretion and risk.</p>\n\n<h2>3. Post-Listing Developer Modifications</h2>\n<svg class=\"art\" width=\"180\" height=\"130\" viewBox=\"0 0 180 130\">\n<rect x=\"40\" y=\"35\" width=\"55\" height=\"60\" rx=\"4\" fill=\"none\" stroke=\"#3c4043\" stroke-width=\"2\"/>\n<path d=\"M52 50h30M52 62h30M52 74h18\" stroke=\"#3c4043\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n<path d=\"M108 45l14 14-14 14\" fill=\"none\" stroke=\"#fbbc04\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<rect x=\"115\" y=\"70\" width=\"30\" height=\"30\" rx=\"4\" fill=\"none\" stroke=\"#3c4043\" stroke-width=\"2\"/>\n<path d=\"M122 85h16M122 92h10\" stroke=\"#3c4043\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n</svg>\n<p>While our team conducts hands-on evaluation prior to listing any offline or online application, we do not govern the external developers. We are not responsible for unannounced updates, post-launch mechanic alterations, or software modifications implemented by third parties after an app has been published on our site.</p>\n\n<h2>4. Policy Enforcement &amp; User Experiences</h2>\n<svg class=\"art\" width=\"180\" height=\"130\" viewBox=\"0 0 180 130\">\n<circle cx=\"65\" cy=\"55\" r=\"14\" fill=\"none\" stroke=\"#3c4043\" stroke-width=\"2\"/>\n<path d=\"M35 100c0-18 13-30 30-30s30 12 30 30\" fill=\"none\" stroke=\"#3c4043\" stroke-width=\"2\"/>\n<rect x=\"112\" y=\"35\" width=\"40\" height=\"52\" rx=\"4\" fill=\"none\" stroke=\"#1a73e8\" stroke-width=\"2\"/>\n<path d=\"M120 50h24M120 61h24M120 72h16\" stroke=\"#1a73e8\" stroke-width=\"2\" stroke-linecap=\"round\"/>\n</svg>\n<p>For information regarding how RummyDex handles non-compliant developer updates, community oversight, and user-submitted reviews, please refer to our dedicated Report &amp; Removal Policy and our Terms &amp; Conditions.</p>\n\n<p class=\"note\">RummyDex — keeping the directory safe, together.</p>\n\n</body>\n</html>\n"
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
