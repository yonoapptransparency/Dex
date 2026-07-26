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
    "faqs": [
      {
        "question": "Question: What is Spin Crush?",
        "answer": "Answer: Spin Crush is an all-in-one casual arcade hub that brings together a wide collection of thematic mini-games—including Baking Master, Thor God of Lightning, and Wild Bandito—into a single, easy-to-use application."
      },
      {
        "answer": "Answer: Yes, Spin Crush supports offline play for many of its casual mini-games, allowing you to enjoy smooth arcade mechanics and level progression anytime without requiring an active internet connection.",
        "question": "Question: Can I play games in Spin Crush offline?"
      },
      {
        "answer": "Answer: Spin Crush uses a unified virtual point and achievement system. As you complete levels and trigger visual combos in one mini-game, you accumulate in-game rewards that help you unlock new visual themes and challenge modes across the entire platform.",
        "question": "Question: How does progression work across different mini-games?"
      },
      {
        "answer": "Answer: Yes, the application is designed to be lightweight and battery-friendly, delivering fast load times and smooth 3D visual effects across a wide range of smartphones and tablets.",
        "question": "Question: Is Spin Crush optimized for all mobile devices?"
      }
    ],
    "custom_admin_box_heading": "PLATFORM HIGHLIGHT: THE ALL-IN-ONE CASUAL GAMING HUB",
    "is_coming_soon": false,
    "version": "2.0.6",
    "serial_number": 2,
    "features_html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>About Mini Games Hub</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh1 {\n  font-size: 28px;\n  font-weight: 500;\n  margin-bottom: 20px;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-top: 30px;\n  margin-bottom: 8px;\n}\np {\n  font-size: 15px;\n  color: #3c4043;\n}\n</style>\n</head>\n<body>\n\n<h1>About Mini Games Hub</h1>\n\n<p>Mini Games Hub is a single app that brings together a massive collection of thematic mini-games, letting people enjoy many different play styles without switching apps.</p>\n\n<h2>Instant Play</h2>\n<p>Games load instantly, with seamless switching between diverse game modes.</p>\n\n<h2>Stunning HD Graphics</h2>\n<p>Each game is designed with detailed visuals, spanning themes from culinary kitchens to ancient mythology.</p>\n\n<h2>Offline Gameplay</h2>\n<p>Games can be played offline, supporting uninterrupted casual entertainment.</p>\n\n<h2>Virtual Rewards</h2>\n<p>All progression and rewards are 100% virtual, offering a safe and risk-free arcade experience.</p>\n\n</body>\n</html>",
    "developer": "PixelCraft Interactive",
    "safety_status": "Verified",
    "description_html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Spin Crush</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-top: 30px;\n  margin-bottom: 8px;\n}\np {\n  font-size: 15px;\n  color: #3c4043;\n}\n</style>\n</head>\n<body>\n\n<h2>A New Standard for Casual Arcade Gaming</h2>\n<p><strong>Spin Crush</strong> redefines mobile entertainment by bringing an entire universe of casual mini-games into one accessible platform. Instead of offering a single repetitive loop, this app houses a vast collection of highly detailed thematic games. Whether you are looking for relaxing puzzle mechanics or fast-paced arcade action, this digital playground offers something for every type of player.</p>\n\n<h2>Explore a Diverse Universe of Mini-Games</h2>\n<p>The true strength of <strong>Spin Crush</strong> lies in its incredible variety. You can step into a virtual kitchen and match culinary ingredients in <strong>\"Baking Master,\"</strong> or explore vibrant cultural themes in <strong>\"Wild Bandito\"</strong> and <strong>\"Pinata Frenzy.\"</strong> For fans of mythology and history, <strong>\"Thor God of Lightning\"</strong> and <strong>\"Xerxes\"</strong> offer epic visual animations and dynamic virtual coin collection. Action enthusiasts can dive into the tactical environment of <strong>\"Royale Battleground\"</strong> or step into the ring with <strong>\"Boxing King.\"</strong> Nature and fantasy lovers are also covered with the prehistoric adventures of <strong>\"Jurassic Kingdom,\"</strong> the fiery visual combos of <strong>\"Coin Volcano,\"</strong> and the mystical journey of <strong>\"Wukong.\"</strong></p>\n\n<h2>Smooth Performance & Immersive Gameplay</h2>\n<p>Built with top-tier optimization, the app delivers a highly responsive user experience. The intuitive central lobby allows players to effortlessly navigate through different game categories without experiencing heavy loading screens. Every mini-game features sharp 3D graphics, bright colors, and satisfying sound effects that make virtual progression and matching mechanics incredibly engaging.</p>\n\n<h2>Safe, Virtual Entertainment</h2>\n<p>Designed as a purely casual simulation, <strong>Spin Crush</strong> focuses entirely on risk-free fun. Players can dive into thrilling arcade features like the <strong>\"Fortune Wheel,\"</strong> <strong>\"Crazy 777,\"</strong> or <strong>\"Gemstones Gold\"</strong> utilizing strictly virtual points. It is the perfect daily companion for users seeking a polished gaming experience where the focus is on beating high scores, unlocking new visual levels, and enjoying pure digital entertainment.</p>\n\n</body>\n</html>",
    "target_region": "",
    "is_new": false,
    "category": "Yono, All app",
    "seo_title": "Spin Crush - Casual Arcade Hub & Virtual Mini-Games",
    "screenshots": [],
    "idea_box_msg": "",
    "file_size": "56",
    "created_at": "2026-05-19T12:43:59.040Z",
    "is_top_chart": true,
    "is_hot": false,
    "release_notes": "",
    "seo_description": "Download Spin Crush, the ultimate casual gaming hub. Explore diverse offline mini-games, collect virtual coins, and enjoy safe arcade entertainment on RummyDex.",
    "yellow_box_msg": "The app currently showing a heat issue in Android lower version",
    "og_image_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877361/.trashed-1787468954-download_12_j8vn7j_wge7co.webp",
    "name": "SPIN CRUSH ",
    "is_featured": false,
    "id": "q82dbbwh4",
    "rating": 3.9,
    "slug": "spin-crush",
    "red_box_msg": "",
    "custom_admin_box_html": "<div style=\"border: 1px solid #e8eaed; border-radius: 8px; padding: 20px 24px; margin-top: 30px; background: #f8f9fa;\">\n  <h2 style=\"font-size: 18px; font-weight: 600; margin-bottom: 10px; color: #202124;\">EXTRACT DISCRIPTION</h2>\n  <p style=\"font-size: 15px; color: #3c4043; margin: 0;\">\n    Spin Crush eliminates the need to download dozens of separate games. By operating as a central arcade hub, it grants you instant access to a massive, rotating library of thematic adventures. Enjoy optimized, battery-friendly gameplay all within a single, secure application.\n  </p>\n</div>",
    "video_url": "",
    "canonical_url": "https://www.rummydex.com/app/spin-crush",
    "seo_keywords": "casual game hub, arcade collection, virtual coin games, offline mini-games, spin crush app",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877361/.trashed-1787468954-download_12_j8vn7j_wge7co.webp",
    "link_configured": true
  },
  {
    "red_box_msg": "",
    "slug": "yono-arcade",
    "canonical_url": "https://www.rummydex.com/app/yono-arcade",
    "seo_keywords": "",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877459/download_14_krbwrv.webp",
    "link_configured": true,
    "custom_admin_box_html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Performance Review — Yono Arcade</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\np {\n  font-size: 15px;\n  color: #3c4043;\n}\n</style>\n</head>\n<body>\n\n<h2>Performance & Testing Notes</h2>\n<p>During our hands-on evaluation of <strong>Yono Arcade</strong>, the app delivered a smooth, high-frame-rate performance. The central lobby launches in under two seconds, mini-games load without secondary download delays, and battery consumption remains extremely low. Touch controls feel instant and crisp across every mini-game tested.</p>\n\n</body>\n</html>",
    "video_url": "",
    "is_hot": false,
    "release_notes": "",
    "seo_description": "Step into Yono Arcade, an action-packed mobile gaming gallery featuring Sugar Rush 1000, Super Ace Deluxe, and Fortune Gems 500 in one app.",
    "created_at": "2026-05-19T19:04:26.373Z",
    "is_featured": false,
    "id": "31og4l26i",
    "rating": 3.8,
    "yellow_box_msg": "",
    "og_image_url": "",
    "name": "YONO ARCADE",
    "target_region": "",
    "is_new": false,
    "features_html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Key Features</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 12px;\n}\nul {\n  padding-left: 20px;\n}\nli {\n  font-size: 15px;\n  color: #3c4043;\n  margin-bottom: 10px;\n}\n</style>\n</head>\n<body>\n\n<h2>Key Features</h2>\n<ul>\n  <li><strong>All-in-one arcade gallery</strong> hosting a massive variety of colorful mini-games.</li>\n  <li><strong>Instant-play lobby</strong> allowing quick switching between different game themes.</li>\n  <li><strong>Rich HD artwork</strong> ranging from sweet candy land puzzles to ancient temples.</li>\n  <li><strong>Fully optimized for offline play</strong> so you can enjoy games without internet data.</li>\n  <li><strong>100% virtual achievement system</strong> built for casual high-score progression.</li>\n</ul>\n\n</body>\n</html>",
    "developer": "NovaByte Studios",
    "safety_status": "Verified",
    "description_html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Yono Arcade</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-top: 30px;\n  margin-bottom: 8px;\n}\np {\n  font-size: 15px;\n  color: #3c4043;\n}\nul {\n  padding-left: 20px;\n}\nli {\n  font-size: 15px;\n  color: #3c4043;\n  margin-bottom: 12px;\n}\n</style>\n</head>\n<body>\n\n<h2>Welcome to the Ultimate Digital Arcade</h2>\n<p><strong>Yono Arcade</strong> is an all-in-one amusement gallery built specifically for casual mobile players. Packed with vibrant visual worlds and dynamic gameplay styles, this app transforms your device into a complete arcade lounge. Instead of clogging your phone storage with dozens of separate apps, <strong>Yono Arcade</strong> brings your favorite visual matching, puzzle, and action mechanics under one polished roof.</p>\n\n<h2>Explore Featured Mini-Games Inside Yono Arcade:</h2>\n<ul>\n  <li><strong>Sugar Rush 1000:</strong> A sweet visual puzzle universe where cascading gumball machines and pastel candy grids drop satisfying chain reactions as you match treats.</li>\n  <li><strong>12 Burning Baseballs:</strong> A high-octane sports-themed arcade game loaded with fiery animations, stadium sound effects, and rapid symbol alignment.</li>\n  <li><strong>Super Ace Deluxe:</strong> An energetic card-style matching game featuring golden wild cards, dramatic multiplier boosts, and fast-paced board clears.</li>\n  <li><strong>Fortune Gems 500:</strong> An ancient jungle temple quest where glowing artifacts and gold jewel combinations create a visually stunning experience on screen.</li>\n</ul>\n\n<h2>Designed for Endless Casual Fun</h2>\n<p>Whether you have two minutes to spare or want a relaxing hour of gaming, <strong>Yono Arcade</strong> delivers endless variety. You can jump from candy puzzles to sports action in seconds. Everything is built around collecting virtual rewards, unlocking level achievements, and beating your personal best scores in a safe, family-friendly environment.</p>\n\n</body>\n</html>",
    "idea_box_msg": "",
    "screenshots": [],
    "file_size": "56",
    "category": "Yono, All app",
    "seo_title": "Yono Arcade - Update of 2026 & Mini-Game Collection",
    "faqs": [
      {
        "answer": "Answer: Yono Arcade features a diverse collection of casual titles, including popular puzzle and matching games like Sugar Rush 1000, Super Ace Deluxe, 12 Burning Baseballs, and Fortune Gems 500.",
        "question": "Question: What games can I find inside Yono Arcade?"
      },
      {
        "question": "Question: Does Yono Arcade work without Wi-Fi or mobile data?",
        "answer": "Answer: Yes, the mini-games inside Yono Arcade are designed to support offline play, allowing you to enjoy your favorite arcade titles anywhere."
      },
      {
        "answer": "Answer: Progression is tied to your virtual high scores and achievements earned while playing the different mini-games inside the app.",
        "question": "Question: How do I unlock new features in the app?"
      }
    ],
    "version": "4.7.0",
    "serial_number": 3,
    "custom_admin_box_heading": "HANDS-ON REVIEW & PERFORMANCE VERDICT",
    "is_coming_soon": false
  },
  {
    "target_region": "",
    "is_new": false,
    "features_html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Key Features</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 12px;\n}\nul {\n  padding-left: 20px;\n}\nli {\n  font-size: 15px;\n  color: #3c4043;\n  margin-bottom: 10px;\n}\n</style>\n</head>\n<body>\n\n<h2>Key Features</h2>\n<ul>\n  <li><strong>Centralized Online Portal:</strong> Connect to global servers to participate in live seasonal event boards and community high-score challenges.</li>\n  <li><strong>Dynamic Level-Up System:</strong> Gain experience points (XP) with every played session to unlock advanced stage modifiers and visual titles.</li>\n  <li><strong>Multi-Genre Catalog:</strong> Enjoy a broad mixture of sports action, mythological puzzles, and fantasy level-progression modes in one place.</li>\n  <li><strong>Seamless Cloud Saving:</strong> Keep your virtual achievements, level milestones, and unlocked avatars safely synchronized across your devices.</li>\n  <li><strong>Virtual Point Economy:</strong> 100% risk-free progression structure built purely around skill-based milestones and level achievements.</li>\n</ul>\n\n</body>\n</html>",
    "developer": "Vanguard Play Studios",
    "safety_status": "Verified",
    "description_html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Jaiho 91</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-top: 30px;\n  margin-bottom: 8px;\n}\np {\n  font-size: 15px;\n  color: #3c4043;\n}\nul {\n  padding-left: 20px;\n}\nli {\n  font-size: 15px;\n  color: #3c4043;\n  margin-bottom: 12px;\n}\n</style>\n</head>\n<body>\n\n<h2>The Next Generation of Casual Arcade Gaming</h2>\n<p><strong>Jaiho 91</strong> is a comprehensive digital entertainment portal crafted for players who enjoy variety, high-production visual design, and real-time community interaction. Built on a modern online multiplayer framework, <strong>Jaiho 91</strong> allows you to transition smoothly between distinct game worlds while earning account-wide experience points. As you complete daily objectives, your profile levels up, granting access to exclusive visual themes, avatar frames, and global leaderboard rankings.</p>\n\n<h2>In-Depth Breakdown of Featured Mini-Games:</h2>\n<ul>\n  <li><strong>Fortune Lakshmi:</strong> A visually stunning puzzle-matching title centered around ancient temple aesthetics and golden lotus motifs. Players solve grid challenges by aligning matching sacred relics to trigger screen-clearing combos. The game features an online tier system where completing higher difficulty tiers unlocks unique visual multipliers and decorative background themes.</li>\n  <li><strong>Jungle Delight:</strong> An adventurous rainforest arcade title featuring an animated lemur guide. This mode revolves around cascading fruit grids and tropical symbol alignment. As you clear stages, you fill a \"Jungle Meter\" that levels up your current session, unleashing special wildcard animations and high-yield virtual coin bursts.</li>\n  <li><strong>Boxing King:</strong> A fast-paced sports arcade simulation that puts you inside an illuminated combat ring. Instead of standard puzzle grids, players timing-tap to land punch combinations and fill a knockout energy gauge. It includes a competitive online leaderboard where you can compare your highest combo streaks against other players worldwide.</li>\n  <li><strong>Dragon Hatch II:</strong> A dark-fantasy level-progression game where players assist in hatching mythical elemental dragons. By aligning matching dragon eggs and fire gems, you accumulate heat energy to level up the central dragon nest. Reaching higher dragon levels unlocks spectacular fire animations and massive virtual score bonuses.</li>\n</ul>\n\n<h2>Online Connectivity & Comprehensive Progression</h2>\n<p>What sets <strong>Jaiho 91</strong> apart is its account synchronization. Whether playing online to climb live weekly score charts or enjoying casual offline sessions on the go, your account profile continuously accumulates XP. Reaching higher profile levels unlocks new difficulty tiers across all mini-games, making every session feel productive and rewarding.</p>\n\n</body>\n</html>",
    "idea_box_msg": "",
    "screenshots": [],
    "file_size": "52",
    "category": "Yono, All app",
    "seo_title": "Jaiho 91 App - Multi-Game Online Arcade & Puzzle Hub",
    "faqs": [
      {
        "answer": "Answer: Bingo 101 includes live global leaderboard tracking, account cloud-saving, real-time profile XP synchronization, and competitive seasonal high-score events across all mini-games.",
        "question": "Question: What online features does Bingo 101 offer?"
      },
      {
        "question": "Question: How does account leveling work in Bingo 101?",
        "answer": "Answer: As you complete stages and trigger visual combos in games like Gemstones Gold or Crazy Hunter, you earn profile experience points (XP). Accumulating XP increases your master player level, unlocking higher game difficulty tiers and unique profile badges."
      },
      {
        "answer": "Answer: Yes, while an active connection is required to submit high scores to global leaderboards, the core mini-games can be played offline for uninterrupted personal entertainment.",
        "question": "Question: Is Bingo 101 playable when offline?"
      }
    ],
    "version": "1.20.1",
    "serial_number": 3,
    "custom_admin_box_heading": "",
    "is_coming_soon": false,
    "red_box_msg": "",
    "slug": "jaiho-91",
    "canonical_url": "https://www.rummydex.com/app/jaiho-91",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877512/download_16_fznggx.webp",
    "seo_keywords": "",
    "link_configured": true,
    "custom_admin_box_html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Performance Verdict — Jaiho 91</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\np {\n  font-size: 15px;\n  color: #3c4043;\n}\n</style>\n</head>\n<body>\n\n<h2>Our Hands-On Testing & Performance Verdict</h2>\n<p>During our hands-on testing of <strong>Jaiho 91</strong> across both Wi-Fi and 4G networks, the app demonstrated exceptional stability. Online leaderboard synchronization takes less than a second, and switching between heavy 3D titles like <strong>Boxing King</strong> and <strong>Dragon Hatch II</strong> occurred without frame drops. Touch responsiveness in fast-paced modes felt precise, and account leveling progress updated accurately in real time.</p>\n\n</body>\n</html>",
    "video_url": "",
    "is_hot": false,
    "release_notes": "",
    "seo_description": "Explore Jaiho 91, a feature-rich mobile arcade portal. Play Fortune Lakshmi, Jungle Delight, Boxing King, and Dragon Hatch II with live online ranking tables.",
    "created_at": "2026-05-19T19:23:07.133Z",
    "is_featured": false,
    "id": "s5u553ymi",
    "rating": 4.2,
    "yellow_box_msg": "",
    "og_image_url": "",
    "name": "JAIHO 91"
  },
  {
    "created_at": "2026-05-20T03:09:33.880Z",
    "is_hot": false,
    "seo_description": "Download Bingo 101, a feature-packed casual gaming hub. Play Gemstones Gold, Poseidon II, Jurassic Kingdom, and Crazy Hunter with online scoreboards.",
    "release_notes": "",
    "name": "BINGO 101",
    "yellow_box_msg": "",
    "og_image_url": "",
    "id": "awus3qajs",
    "rating": 3.6,
    "is_featured": false,
    "slug": "bingo-101",
    "red_box_msg": "",
    "video_url": "",
    "custom_admin_box_html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Performance Verdict — Bingo 101</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\np {\n  font-size: 15px;\n  color: #3c4043;\n}\n</style>\n</head>\n<body>\n\n<h2>Our Hands-On Testing & Performance Verdict</h2>\n<p>During our hands-on testing of <strong>Bingo 101</strong> on both 4G and Wi-Fi networks, the app delivered rock-solid stability and fast server ping times. Online leaderboard entries updated in under a second, and transitioning from action-heavy titles like <strong>Crazy Hunter</strong> to puzzle modes like <strong>Gemstones Gold</strong> caused zero app lag. Touch-input latency remained crisp, and profile level-up notifications triggered seamlessly in real time.</p>\n\n</body>\n</html>",
    "seo_keywords": "",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877567/download_18_lljdaa.webp",
    "link_configured": false,
    "canonical_url": "https://www.rummydex.com/app/bingo-101",
    "faqs": [
      {
        "question": "Question: What online features does Bingo 101 offer?",
        "answer": "Answer: Bingo 101 includes live global leaderboard tracking, account cloud-saving, real-time profile XP synchronization, and competitive seasonal high-score events across all mini-games."
      },
      {
        "question": "Question: How does account leveling work in Bingo 101?",
        "answer": "Answer: As you complete stages and trigger visual combos in games like Gemstones Gold or Crazy Hunter, you earn profile experience points (XP). Accumulating XP increases your master player level, unlocking higher game difficulty tiers and unique profile badges."
      },
      {
        "answer": "Answer: Yes, while an active connection is required to submit high scores to global leaderboards, the core mini-games can be played offline for uninterrupted personal entertainment.",
        "question": "Question: Is Bingo 101 playable when offline?"
      }
    ],
    "is_coming_soon": false,
    "custom_admin_box_heading": "OUR HANDS-ON TESTING & PERFORMANCE VERDICT",
    "version": "2.5V",
    "serial_number": 5,
    "safety_status": "Verified",
    "description_html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Bingo 101</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-top: 30px;\n  margin-bottom: 8px;\n}\np {\n  font-size: 15px;\n  color: #3c4043;\n}\nul {\n  padding-left: 20px;\n}\nli {\n  font-size: 15px;\n  color: #3c4043;\n  margin-bottom: 12px;\n}\n</style>\n</head>\n<body>\n\n<h2>A Dynamic Center for Casual Mobile Arcade Entertainment</h2>\n<p><strong>Bingo 101</strong> is an expansive digital arcade lounge engineered for players who demand high visual quality, deep progression systems, and live online connectivity. Functioning as a centralized multi-game ecosystem, <strong>Bingo 101</strong> lets users transition instantly between wildly different visual worlds while building a unified player profile. Every challenge completed awards account experience points (XP), raising your player level and opening up advanced stage modifiers and exclusive visual rewards.</p>\n\n<h2>In-Depth Breakdown of Featured Mini-Games:</h2>\n<ul>\n  <li><strong>Gemstones Gold:</strong> A deep-shaft mining puzzle adventure where players control a veteran miner digging for rare subterranean jewels. Aligning matching crystals and golden nuggets fills a central \"Excavation Gauge,\" leveling up your current mining shaft. Higher shaft levels unlock pickaxe multipliers, glowing cave visual effects, and massive virtual gem bonuses that feed directly into your global profile score.</li>\n  <li><strong>Poseidon II:</strong> An epic oceanic mythological title set in the depths of Atlantis. Players interact with aquatic symbols, trident relics, and sea-monster icons. The game features an online challenge mode where clearing consecutive wave patterns charges Poseidon's Trident. Reaching full charge triggers screen-shaking tidal animation sequences and unlocks bonus rounds with live online ranking updates.</li>\n  <li><strong>Jurassic Kingdom:</strong> A prehistoric puzzle simulation where players navigate a world populated by towering dinosaurs. Matching fossilized amber and dinosaur egg symbols drives the \"Incubation Meter.\" When the meter reaches 100%, players level up to hatch rare prehistoric species, unlocking dynamic 3D animations and boosting your seasonal online achievement standing.</li>\n  <li><strong>Crazy Hunter:</strong> A fast-paced, target-aiming action arcade game featuring a skull-helmeted artillery character. Instead of matching symbol tiles, players timing-tap to launch cannon fire at moving obstacles on screen. Accumulating target strikes levels up your weaponry in real time, granting rapid-fire modes, higher virtual point yields, and top placement on the global daily destruction chart.</li>\n</ul>\n\n<h2>Connected Online Architecture & Level Progression</h2>\n<p>The standout element of <strong>Bingo 101</strong> is its integrated online environment. Whether you log in over Wi-Fi or mobile networks, your account constantly syncs with cloud servers. Reaching profile level thresholds unlocks higher difficulty tiers within each individual mini-game, providing a long-term sense of mastery and reward for casual gamers.</p>\n\n</body>\n</html>",
    "features_html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Key Features</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 12px;\n}\nul {\n  padding-left: 20px;\n}\nli {\n  font-size: 15px;\n  color: #3c4043;\n  margin-bottom: 10px;\n}\n</style>\n</head>\n<body>\n\n<h2>Key Features</h2>\n<ul>\n  <li><strong>Interactive Online Hub:</strong> Synchronize your progress to global servers and compete on real-time community scoreboards.</li>\n  <li><strong>Tiered Profile Leveling:</strong> Earn master experience points across all modes to unlock high-tier stages, cosmetic borders, and profile badges.</li>\n  <li><strong>Diverse Gameplay Variety:</strong> Seamlessly jump between mining adventures, underwater mythology, prehistoric survival, and action-shooting arcade modes.</li>\n  <li><strong>Cross-Device Cloud Sync:</strong> Save your virtual achievements, level progression, and account stats safely online.</li>\n  <li><strong>Safe Virtual Economy:</strong> Built strictly around skill-based milestone tracking, virtual score meters, and risk-free level progression.</li>\n</ul>\n\n</body>\n</html>",
    "developer": "Prism Byte Interactive",
    "is_new": false,
    "target_region": "",
    "seo_title": "Bingo 101  - Online Arcade Hub & Casual Puzzle Games",
    "category": "Yono, All app",
    "file_size": "71",
    "idea_box_msg": "",
    "screenshots": []
  },
  {
    "video_url": "",
    "custom_admin_box_html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Performance Verdict — OK Rummy</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\np {\n  font-size: 15px;\n  color: #3c4043;\n}\n</style>\n</head>\n<body>\n\n<h2>Our Hands-On Testing & Performance Verdict</h2>\n<p>During our hands-on technical analysis of <strong>OK Rummy</strong> across high-refresh-rate devices, the app consistently hit a solid 120 FPS without thermal throttling or frame drops. Menu customization was seamless, switching between heavy 3D titles like <strong>King of Olympus</strong> and fast puzzle modes like <strong>Fortune Tiger</strong> happened instantly, and touch latency measured virtually zero.</p>\n\n</body>\n</html>",
    "link_configured": false,
    "seo_keywords": "ok rummy app, ok rummy download, fortune tiger arcade, king of olympus game, custom arcade portal, 120hz casual mobile games",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877617/download_19_w2sxhp.webp",
    "canonical_url": "https://www.rummydex.com/app/ok-rummy",
    "slug": "ok-rummy",
    "red_box_msg": "",
    "name": "OK RUMMY",
    "og_image_url": "",
    "yellow_box_msg": "> ⚠️ **WARNING:** This app currently shows higher battery overhead on Android 14 during extended play sessions. Ensure background optimization is enabled in device settings.\n",
    "rating": 3,
    "id": "0uiuuhdrj",
    "is_featured": false,
    "created_at": "2026-05-20T03:50:33.674Z",
    "release_notes": "",
    "seo_description": "Explore OK Rummy on RummyDex. Enjoy 120Hz display optimization, custom app pinning, 3D collectible trophies, and top casual titles like Fortune Tiger and King of Olympus.",
    "is_hot": false,
    "seo_title": "OK Rummy - Next-Gen Arcade Portal & Custom Dashboard",
    "category": "Yono, All app",
    "file_size": "67",
    "screenshots": [],
    "idea_box_msg": "> 🟢 **PRO TIP:** Select the server closest to your location during initial startup to achieve up to 40% lower latency and faster mini-game load times.\n",
    "description_html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>OK Rummy</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-top: 30px;\n  margin-bottom: 8px;\n}\np {\n  font-size: 15px;\n  color: #3c4043;\n}\nul {\n  padding-left: 20px;\n}\nli {\n  font-size: 15px;\n  color: #3c4043;\n  margin-bottom: 12px;\n}\n</style>\n</head>\n<body>\n\n<h2>A Next-Generation Standard for Mobile Arcade Lounges</h2>\n<p><strong>OK Rummy</strong> breaks away from traditional multi-game apps by introducing a modern, high-performance interface built specifically for power users. Engineered on a high-frame-rate rendering engine, <strong>OK Rummy</strong> offers a silky-smooth digital playground where every tap, swipe, and visual effect responds instantly. Rather than forcing you through fixed menus, the app empowers you to customize your own home layout, pinning your favorite games right where you want them.</p>\n\n<h2>Detailed Spotlight on Featured Mini-Game Worlds:</h2>\n<ul>\n  <li><strong>Fortune Tiger:</strong> A vibrant, high-tempo feline arcade adventure. Players interact with a lively tiger mascot while aligning golden coins, lucky scrolls, and paw symbols. As you build match streaks, the app triggers rapid combo loops and fills a \"Ferocity Gauge\" that unlocks glowing golden screen transformations and high-yield virtual coin bursts.</li>\n  <li><strong>King of Olympus:</strong> A dramatic mythological theme set against the stormy skies of ancient Greece. Powered by real-time particle effects and booming audio, players charge Zeus's electric meter by aligning divine relics. Reaching full charge triggers screen-shaking lightning sequences and unlocks high-multiplier bonus board states.</li>\n  <li><strong>Bison Moon:</strong> An atmospheric wilderness puzzle set across a dark, starry prairie landscape. This mode utilizes dynamic visual shifts—as you clear glowing full-moon symbols, the environment transitions into a night-vision mode, revealing hidden bonus tiles and boosting your seasonal trophy score.</li>\n  <li><strong>Wild Bandito:</strong> A colorful, rhythm-infused fiesta arcade game featuring animated sugar skulls and acoustic guitar soundscapes. Players clear cascading symbol grids with fast-paced tap sequences, building musical momentum to unlock festive visual fireworks and rare profile badges.</li>\n</ul>\n\n<h2>The Interactive Trophy Vault & Custom Personalization</h2>\n<p>Beyond individual games, <strong>OK Rummy</strong> rewards your time with an integrated Trophy Vault. As you reach high scores across different titles, you unlock 3D collectible artifacts—such as the <strong>Golden Tiger Medallion</strong> or <strong>Zeus's Thunderbolt</strong>—which display proudly on your public profile. Combined with personalized theme pinning and instant game-switching, <strong>OK Rummy</strong> delivers a tailored casual gaming environment.</p>\n\n</body>\n</html>",
    "safety_status": "Verified",
    "features_html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Key Features</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 12px;\n}\nul {\n  padding-left: 20px;\n}\nli {\n  font-size: 15px;\n  color: #3c4043;\n  margin-bottom: 10px;\n}\n</style>\n</head>\n<body>\n\n<h2>Key Features</h2>\n<ul>\n  <li><strong>120Hz Ultra-Fluid Visual Engine:</strong> Rendered at high frame rates for butter-smooth animations and zero touch delay on modern AMOLED screens.</li>\n  <li><strong>Customizable Main Dashboard:</strong> Pin, organize, and drag your most-played mini-games to the top of your lobby for instant access.</li>\n  <li><strong>3D Interactive Trophy Vault:</strong> Collect rare digital badges, visual medals, and milestone banners as you master each mini-game.</li>\n  <li><strong>Instant Background Caching:</strong> Sub-games pre-load in the background so you can switch between titles without seeing loading bars.</li>\n  <li><strong>100% Skill & Reflex Progression:</strong> Completely risk-free entertainment focused on personal high scores, achievement trophies, and virtual point milestones.</li>\n</ul>\n\n</body>\n</html>",
    "developer": "Kinetic Pulse",
    "is_new": false,
    "target_region": "",
    "is_coming_soon": false,
    "custom_admin_box_heading": "HANDS-ON TESTING & TECHNICAL PERFORMANCE VERDICT",
    "serial_number": 6,
    "version": "8.3.06.",
    "faqs": [
      {
        "answer": "Answer: OK Rummy features a high-performance 120Hz display engine, a fully customizable main dashboard where you can pin favorite games, and an interactive 3D Trophy Vault to showcase your achievements",
        "question": "Question: What makes OK Rummy different from other multi-game apps?"
      },
      {
        "answer": "Answer: You can simply press and hold any mini-game tile inside the lobby to drag and pin it to the top of your main screen, giving you instant access to your preferred games every time you launch the app.",
        "question": "Question: How does the Custom Dashboard Pinning feature work?"
      },
      {
        "answer": "Answer: Trophies and profile badges are earned naturally by reaching specific score milestones, clearing stage tiers, and building combo streaks inside games like Fortune Tiger and Bison Moon.",
        "question": "Question: How do I unlock items in the Trophy Vault?"
      }
    ]
  },
  {
    "video_url": "",
    "custom_admin_box_html": "",
    "link_configured": false,
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877660/download_20_x106v3.webp",
    "seo_keywords": "",
    "canonical_url": "",
    "slug": "jaiho-slots",
    "red_box_msg": "",
    "name": "JAIHO SLOTS",
    "og_image_url": "",
    "yellow_box_msg": "",
    "rating": 4.9,
    "id": "4yt0f4yd0",
    "is_featured": false,
    "created_at": "2026-05-20T03:53:24.482Z",
    "seo_description": "",
    "release_notes": "",
    "is_hot": false,
    "seo_title": "",
    "category": "Yono, All app",
    "file_size": "70",
    "idea_box_msg": "",
    "screenshots": [],
    "description_html": "<p>A new application.</p>",
    "safety_status": "Verified",
    "developer": "Jaiho",
    "features_html": "",
    "is_new": false,
    "target_region": "",
    "is_coming_soon": true,
    "custom_admin_box_heading": "",
    "serial_number": 7,
    "version": "4.3",
    "faqs": []
  },
  {
    "is_new": false,
    "target_region": "",
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "features_html": "",
    "developer": "Arcade ",
    "file_size": "54",
    "screenshots": [],
    "idea_box_msg": "",
    "seo_title": "",
    "category": "Yono, All app",
    "faqs": [],
    "version": "2.5V",
    "serial_number": 8,
    "is_coming_soon": true,
    "custom_admin_box_heading": "",
    "red_box_msg": "",
    "slug": "boss-rummy",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877706/download_6_mj83ms.webp",
    "seo_keywords": "",
    "link_configured": false,
    "canonical_url": "",
    "video_url": "",
    "custom_admin_box_html": "",
    "is_hot": false,
    "release_notes": "",
    "seo_description": "",
    "created_at": "2026-05-20T03:56:42.075Z",
    "id": "9r044fyi0",
    "rating": 4.1,
    "is_featured": false,
    "name": "BOSS RUMMY",
    "yellow_box_msg": "",
    "og_image_url": ""
  },
  {
    "seo_title": "",
    "category": "Yono, All app",
    "file_size": "79",
    "screenshots": [],
    "idea_box_msg": "",
    "description_html": "<p>A new application.</p>",
    "safety_status": "Verified",
    "developer": "Addi",
    "features_html": "",
    "is_new": false,
    "target_region": "",
    "is_coming_soon": true,
    "custom_admin_box_heading": "",
    "serial_number": 9,
    "version": "2.0.6",
    "faqs": [],
    "video_url": "",
    "custom_admin_box_html": "",
    "link_configured": false,
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877812/download_22_vgi4h1.webp",
    "seo_keywords": "",
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
    "seo_description": "",
    "release_notes": "",
    "is_hot": false
  },
  {
    "red_box_msg": "",
    "slug": "gogo-rummy",
    "link_configured": false,
    "seo_keywords": "",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877895/download_23_xv95ei.webp",
    "canonical_url": "",
    "video_url": "",
    "custom_admin_box_html": "",
    "release_notes": "",
    "seo_description": "",
    "is_hot": false,
    "created_at": "2026-05-20T06:58:27.643Z",
    "rating": 3.9,
    "id": "ieam3hkbq",
    "is_featured": false,
    "name": "GOGO RUMMY ",
    "og_image_url": "",
    "yellow_box_msg": "",
    "is_new": false,
    "target_region": "",
    "description_html": "<p>A new application.</p>",
    "safety_status": "Verified",
    "features_html": "",
    "developer": "Sk varba",
    "file_size": "65",
    "screenshots": [],
    "idea_box_msg": "",
    "seo_title": "",
    "category": "Yono, All app",
    "faqs": [],
    "serial_number": 10,
    "version": "5.0",
    "is_coming_soon": true,
    "custom_admin_box_heading": ""
  },
  {
    "description_html": "<p>A new application.</p>",
    "safety_status": "Verified",
    "developer": "S.A vejay",
    "features_html": "",
    "is_new": false,
    "target_region": "",
    "seo_title": "",
    "category": "Yono, All app",
    "file_size": "75",
    "screenshots": [],
    "idea_box_msg": "",
    "faqs": [],
    "is_coming_soon": true,
    "custom_admin_box_heading": "",
    "serial_number": 11,
    "version": "1.8",
    "slug": "club-inr",
    "red_box_msg": "",
    "video_url": "",
    "custom_admin_box_html": "",
    "link_configured": false,
    "seo_keywords": "",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877977/download_25_tdxkii.webp",
    "canonical_url": "",
    "created_at": "2026-05-20T08:02:40.971Z",
    "release_notes": "",
    "seo_description": "",
    "is_hot": false,
    "name": "CLUB INR",
    "og_image_url": "",
    "yellow_box_msg": "",
    "rating": 4.6,
    "id": "5j5b7qbrw",
    "is_featured": false
  },
  {
    "faqs": [],
    "version": "1.8",
    "serial_number": 12,
    "custom_admin_box_heading": "",
    "is_coming_soon": true,
    "target_region": "",
    "is_new": false,
    "developer": "Addi",
    "features_html": "",
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "screenshots": [],
    "idea_box_msg": "",
    "file_size": "61",
    "category": "Yono, All app",
    "seo_title": "",
    "is_hot": false,
    "release_notes": "",
    "seo_description": "",
    "created_at": "2026-05-26T07:04:36.330Z",
    "is_featured": false,
    "id": "f4ktp4dfi",
    "rating": 3.9,
    "yellow_box_msg": "",
    "og_image_url": "",
    "name": "ABC Rummy ",
    "red_box_msg": "",
    "slug": "abc-rummy",
    "canonical_url": "",
    "seo_keywords": "",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784878050/download_26_awtrna.webp",
    "link_configured": false,
    "custom_admin_box_html": "",
    "video_url": ""
  },
  {
    "category": "Yono, All app",
    "seo_title": "",
    "idea_box_msg": "",
    "screenshots": [],
    "file_size": "54",
    "developer": "AB Arora",
    "features_html": "",
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "target_region": "",
    "is_new": false,
    "custom_admin_box_heading": "",
    "is_coming_soon": true,
    "version": "1.6",
    "serial_number": 13,
    "faqs": [],
    "custom_admin_box_html": "",
    "video_url": "",
    "canonical_url": "",
    "seo_keywords": "",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784878294/download_27_ex1vzp.webp",
    "link_configured": false,
    "slug": "777-rummy",
    "red_box_msg": "",
    "yellow_box_msg": "",
    "og_image_url": "",
    "name": "777.Rummy",
    "is_featured": false,
    "id": "4w1yxs6mm",
    "rating": 5,
    "created_at": "2026-05-26T07:09:01.068Z",
    "is_hot": false,
    "seo_description": "",
    "release_notes": ""
  },
  {
    "slug": "ever-777",
    "red_box_msg": "",
    "video_url": "",
    "custom_admin_box_html": "",
    "seo_keywords": "",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784878592/download_28_mhxps5.webp",
    "link_configured": false,
    "canonical_url": "",
    "created_at": "2026-05-26T07:12:55.821Z",
    "is_hot": false,
    "seo_description": "",
    "release_notes": "",
    "name": "EVER 777",
    "yellow_box_msg": "",
    "og_image_url": "",
    "id": "w1sttlwv7",
    "rating": 4,
    "is_featured": false,
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "developer": "AZ ever",
    "features_html": "",
    "is_new": false,
    "target_region": "",
    "seo_title": "",
    "category": "Yono",
    "file_size": "59",
    "screenshots": [],
    "idea_box_msg": "",
    "faqs": [],
    "is_coming_soon": true,
    "custom_admin_box_heading": "",
    "version": "1.8",
    "serial_number": 14
  },
  {
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "developer": "Raj dav",
    "features_html": "",
    "is_new": false,
    "target_region": "",
    "seo_title": "",
    "category": "Yono",
    "file_size": "75",
    "idea_box_msg": "",
    "screenshots": [],
    "faqs": [],
    "is_coming_soon": true,
    "custom_admin_box_heading": "",
    "version": "2.0",
    "serial_number": 15,
    "slug": "game-rummy",
    "red_box_msg": "",
    "video_url": "",
    "custom_admin_box_html": "",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784878692/download_29_j7jlxk.webp",
    "seo_keywords": "",
    "link_configured": false,
    "canonical_url": "",
    "created_at": "2026-05-26T07:16:08.600Z",
    "is_hot": false,
    "seo_description": "",
    "release_notes": "",
    "name": "Game Rummy",
    "yellow_box_msg": "",
    "og_image_url": "",
    "id": "dp2lcn2ae",
    "rating": 4,
    "is_featured": false
  },
  {
    "video_url": "",
    "custom_admin_box_html": "",
    "seo_keywords": "",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784878734/download_30_oz8znk.webp",
    "link_configured": false,
    "canonical_url": "",
    "slug": "hi-rummy",
    "red_box_msg": "",
    "name": "Hi Rummy ",
    "yellow_box_msg": "",
    "og_image_url": "",
    "id": "4lgypb90h",
    "rating": 4.1,
    "is_featured": false,
    "created_at": "2026-05-26T07:18:29.456Z",
    "is_hot": false,
    "release_notes": "",
    "seo_description": "",
    "seo_title": "",
    "category": "Yono",
    "file_size": "54",
    "idea_box_msg": "",
    "screenshots": [],
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "developer": "Addi",
    "features_html": "",
    "is_new": false,
    "target_region": "",
    "is_coming_soon": true,
    "custom_admin_box_heading": "",
    "version": "1.9",
    "serial_number": 16,
    "faqs": []
  },
  {
    "features_html": "",
    "developer": "Arcade ",
    "safety_status": "Verified",
    "description_html": "<!-- SAFE INR RUMMY GLASSMORPHISM LISTING -->\n<!-- Fully scoped, uniquely written, safe for your website UI, E-Sports Compliant -->\n\n<section class=\"rs-inrr-wrapper\">\n\n    <div class=\"rs-inrr-glass-card\">\n\n        <!-- HEADER -->\n        <div class=\"rs-inrr-header\">\n            <h2>INR Rummy Interface</h2>\n            <span class=\"rs-inrr-badge\">National Strategy Arena</span>\n        </div>\n\n        <!-- GLASSY VIRTUAL BONUS SYSTEM -->\n        <div class=\"rs-inrr-bonus-container\">\n            <div class=\"rs-inrr-glass-box highlight-box\">\n                <span class=\"rs-inrr-bonus-title\">Virtual Welcome</span>\n                <span class=\"rs-inrr-bonus-amount\">91K</span>\n                <span class=\"rs-inrr-bonus-sub\">Practice Chips</span>\n            </div>\n            <div class=\"rs-inrr-glass-box\">\n                <span class=\"rs-inrr-bonus-title\">Daily Milestone</span>\n                <span class=\"rs-inrr-bonus-amount\">20K</span>\n                <span class=\"rs-inrr-bonus-sub\">Steady Login Reward</span>\n            </div>\n            <div class=\"rs-inrr-glass-box\">\n                <span class=\"rs-inrr-bonus-title\">Guest Access</span>\n                <span class=\"rs-inrr-bonus-amount\">Instant</span>\n                <span class=\"rs-inrr-bonus-sub\">No Login Needed</span>\n            </div>\n        </div>\n\n        <p class=\"rs-inrr-description\">\n            INR Rummy provides a premium, highly streamlined card platform designed for strategic enthusiasts. Built with a focus on tactical precision and seamless board aesthetics, this digital hub allows you to master classic card formats cleanly. Whether you are practicing layout sorting or refining valid sequences, INR Rummy offers a risk-free, competitive arena to play instantly.\n        </p>\n\n        <!-- SEO ENHANCEMENT: APP DETAILS TABLE -->\n        <div class=\"rs-inrr-section-title\">Platform Specifications</div>\n        <div class=\"rs-inrr-table-wrapper\">\n            <table class=\"rs-inrr-table\">\n                <tbody>\n                    <tr>\n                        <td><strong>Application Name</strong></td>\n                        <td>INR Rummy (Review)</td>\n                        <td><strong>Gaming Category</strong></td>\n                        <td>Card / Strategy Game</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Welcome Reward</strong></td>\n                        <td>91,000 (Virtual Only)</td>\n                        <td><strong>Ongoing Rewards</strong></td>\n                        <td>Tasks & Progression</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Network Play</strong></td>\n                        <td>Guest Multiplayer</td>\n                        <td><strong>Game Lobbies</strong></td>\n                        <td>Casual Practice Tables</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Privacy</strong></td>\n                        <td>No Personal Info Required</td>\n                        <td><strong>Customer Help</strong></td>\n                        <td>24/7 In-App Guide</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n\n        <!-- SEO ENHANCEMENT: FEATURES GRID -->\n        <div class=\"rs-inrr-section-title\">Professional Gaming Features</div>\n        <div class=\"rs-inrr-grid\">\n            <div class=\"rs-inrr-glass-box rounded-style\">\n                <div class=\"rs-inrr-icon\">♦️</div>\n                <h3>Standard Lobbies</h3>\n                <p>Join clear, intuitive virtual rooms where enthusiasts match skills on dedicated practice tables to hone their execution timings.</p>\n            </div>\n            <div class=\"rs-inrr-glass-box rounded-style\">\n                <div class=\"rs-inrr-icon\">🔒</div>\n                <h3>100% Anonymous</h3>\n                <p>Enjoy the card action immediately as a guest player without sharing phone numbers, filling configurations, or utilizing OTP systems.</p>\n            </div>\n            <div class=\"rs-inrr-glass-box rounded-style\">\n                <div class=\"rs-inrr-icon\">🛡️</div>\n                <h3>Standard RNG</h3>\n                <p>Fairness remains fundamental. The card distribution relies on a verified Random Number Generator algorithm to keep dealing purely mathematical.</p>\n            </div>\n            <div class=\"rs-inrr-glass-box rounded-style\">\n                <div class=\"rs-inrr-icon\">📱</div>\n                <h3>Modern Interface</h3>\n                <p>Experience zero visual clutter. Ad-free layouts with crisp responsive sorting features ensure your card melding remains entirely uninterrupted.</p>\n            </div>\n        </div>\n\n        <!-- SEO ENHANCEMENT: HOW TO PLAY -->\n        <div class=\"rs-inrr-section-title\">Steps to Start Your Virtual Practice</div>\n        <div class=\"rs-inrr-glass-box rs-inrr-list-box\">\n            <ol>\n                <li><strong>Launch the App:</strong> Open the official application natively on your smart device.</li>\n                <li><strong>Play Instantly:</strong> Enter the dashboard right away via guest mode without any registration paths.</li>\n                <li><strong>Collect Rewards:</strong> Check your localized points wallet to find your 91K welcome balance ready.</li>\n                <li><strong>Join the Table:</strong> Select your preferred variation tier and test your strategic card arrangements.</li>\n                <li><strong>Track Milestones:</strong> Record your logical victories and evaluate strategy progression on local leaderboards.</li>\n            </ol>\n        </div>\n\n        <!-- SEO ENHANCEMENT: FAQ ACCORDION -->\n        <div class=\"rs-inrr-section-title\">Frequently Asked Questions (FAQs)</div>\n        <div class=\"rs-inrr-faq-container\">\n            <details class=\"rs-inrr-faq\">\n                <summary>Is INR Rummy stable for continuous practice?</summary>\n                <p>Yes. The build is fully optimized to provide lag-free sorting transitions, keeping your training runs steady across basic mobile networks.</p>\n            </details>\n            <details class=\"rs-inrr-faq\">\n                <summary>What makes a Pure Sequence?</summary>\n                <p>A pure sequence consists of three or more consecutive cards belonging to the same identical suit, organized strictly without using a Joker.</p>\n            </details>\n            <details class=\"rs-inrr-faq\">\n                <summary>Do I need to provide my phone number?</summary>\n                <p>No, registration is completely optional. You can experience every practice variant in full guest mode without completing any OTP check.</p>\n            </details>\n        </div>\n\n        <!-- SAFE SEO KEYWORD CLOUD -->\n        <div class=\"rs-inrr-section-title\">Related Search Tags</div>\n        <div class=\"rs-inrr-keywords\">\n            <span>inr rummy</span> <span>inr rummy app</span> <span>inr rummy game</span> <span>inr rummy online</span> <span>inr rummy play</span> <span>inr rummy review</span> <span>inr rummy features</span> <span>inr rummy casual</span> <span>inr rummy interface</span> <span>inr rummy practice</span> <span>inr rummy guest mode</span> <span>inr rummy bonuses</span> <span>inr rummy rewards</span> <span>inr rummy daily check-in</span> <span>inr rummy virtual chips</span> <span>inr rummy welcome bonus</span> <span>inr rummy card game</span> <span>inr rummy strategy</span> <span>inr rummy UI</span> <span>inr rummy leaderboard</span> <span>inr rummy support</span> <span>inr rummy offline</span> <span>inr rummy local play</span> <span>inr rummy mechanics</span> <span>inr rummy gameplay</span> <span>inr rummy variants</span> <span>inr rummy points</span> <span>inr rummy deals</span> <span>inr rummy pool</span> <span>inr rummy RNG</span> <span>inr rummy updates</span> <span>inr rummy latest version</span> <span>inr rummy guide</span> <span>inr rummy tips</span> <span>inr rummy tricks</span> <span>how to play inr rummy</span> <span>win in inr rummy</span> <span>inr rummy safe</span> <span>inr rummy anonymous</span> <span>inr rummy no login</span> <span>inr rummy graphics</span> <span>inr rummy animation</span> <span>inr rummy mobile app</span> <span>inr rummy android</span> <span>inr rummy virtual portal</span> <span>inr rummy skill game</span>\n        </div>\n\n    </div>\n</section>\n\n<style>\n/* SAFE SCOPED CSS - INR RUMMY THEME (DEEP JADE/EMERALD GLASS) */\n\n.rs-inrr-wrapper {\n    width: 100%;\n    margin: 40px 0;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif;\n    background: linear-gradient(145deg, #0a2f1d 0%, #114227 100%);\n    padding: 25px;\n    border-radius: 30px;\n    box-sizing: border-box;\n}\n\n.rs-inrr-wrapper * {\n    box-sizing: border-box;\n}\n\n/* THE GLASS CARD */\n.rs-inrr-glass-card {\n    background: rgba(255, 255, 255, 0.04);\n    backdrop-filter: blur(22px);\n    -webkit-backdrop-filter: blur(22px);\n    border-radius: 24px;\n    padding: 40px;\n    border: 1px solid rgba(46, 204, 113, 0.2);\n    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.6);\n}\n\n.rs-inrr-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 15px;\n    flex-wrap: wrap;\n    margin-bottom: 30px;\n    padding-bottom: 20px;\n    border-bottom: 1px solid rgba(46, 204, 113, 0.3);\n}\n\n.rs-inrr-header h2 {\n    font-size: 38px;\n    font-weight: 900;\n    margin: 0;\n    background: linear-gradient(135deg, #2ecc71, #a3e635);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    letter-spacing: -1px;\n}\n\n.rs-inrr-badge {\n    padding: 8px 22px;\n    border-radius: 4px;\n    background: linear-gradient(135deg, rgba(46, 204, 113, 0.15), rgba(163, 230, 53, 0.05));\n    color: #2ecc71;\n    font-size: 13px;\n    font-weight: 800;\n    border: 1px solid rgba(46, 204, 113, 0.4);\n    text-transform: uppercase;\n    letter-spacing: 1px;\n}\n\n/* GLASSY BOXES */\n.rs-inrr-bonus-container, .rs-inrr-grid {\n    display: grid;\n    gap: 20px;\n    margin-bottom: 35px;\n}\n\n.rs-inrr-bonus-container {\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n}\n\n.rs-inrr-grid {\n    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n}\n\n.rs-inrr-glass-box {\n    background: rgba(255, 255, 255, 0.02);\n    border: 1px solid rgba(46, 204, 113, 0.15);\n    border-radius: 16px; \n    padding: 25px;\n    text-align: left;\n    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);\n    transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;\n}\n\n.rs-inrr-glass-box:hover {\n    transform: translateY(-5px);\n    box-shadow: 0 12px 30px rgba(46, 204, 113, 0.2);\n    border-color: rgba(46, 204, 113, 0.6);\n    background: rgba(255, 255, 255, 0.05);\n}\n\n.rs-inrr-bonus-container .rs-inrr-glass-box {\n    text-align: center;\n}\n\n.highlight-box {\n    background: linear-gradient(135deg, rgba(46, 204, 113, 0.1), rgba(0, 0, 0, 0));\n    border: 1px solid rgba(46, 204, 113, 0.5);\n}\n\n.rs-inrr-bonus-title {\n    display: block;\n    font-size: 13px;\n    font-weight: 800;\n    color: #e0e0e0;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    letter-spacing: 1.5px;\n}\n\n.rs-inrr-bonus-amount {\n    display: block;\n    font-size: 44px;\n    font-weight: 900;\n    background: linear-gradient(135deg, #2ecc71, #ccff33);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    margin-bottom: 8px;\n    line-height: 1;\n}\n\n.rs-inrr-bonus-sub {\n    display: block;\n    font-size: 13px;\n    color: #a0a0a0;\n    font-weight: 500;\n}\n\n.rs-inrr-section-title {\n    font-size: 24px;\n    font-weight: 800;\n    color: #ffffff;\n    margin: 45px 0 25px 0;\n    position: relative;\n    padding-left: 18px;\n}\n\n.rs-inrr-section-title::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    height: 80%;\n    width: 4px;\n    background: linear-gradient(to bottom, #2ecc71, #114227);\n    border-radius: 10px;\n}\n\n.rs-inrr-description {\n    line-height: 1.9;\n    font-size: 16px;\n    color: #e0e0e0;\n    margin-bottom: 30px;\n    padding: 25px;\n    background: rgba(0, 0, 0, 0.35);\n    border-radius: 16px;\n    border-left: 4px solid #2ecc71;\n    box-shadow: inset 0 0 20px rgba(0,0,0,0.5);\n}\n\n/* APP SPECS TABLE */\n.rs-inrr-table-wrapper {\n    overflow-x: auto;\n    margin-bottom: 30px;\n    border-radius: 16px;\n    border: 1px solid rgba(46, 204, 113, 0.2);\n    background: rgba(0, 0, 0, 0.4);\n}\n\n.rs-inrr-table {\n    width: 100%;\n    border-collapse: collapse;\n    font-size: 15px;\n}\n\n.rs-inrr-table td {\n    padding: 18px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n    color: #c0c0c0;\n}\n\n.rs-inrr-table tr:last-child td {\n    border-bottom: none;\n}\n\n.rs-inrr-table td strong {\n    color: #2ecc71;\n}\n\n/* FEATURES GRID ICONS */\n.rs-inrr-icon {\n    font-size: 28px;\n    margin-bottom: 18px;\n    background: linear-gradient(135deg, #1f1f1f, #000000);\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 55px;\n    height: 55px;\n    border-radius: 12px; \n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);\n    border: 1px solid rgba(46, 204, 113, 0.3);\n}\n\n.rs-inrr-glass-box h3 {\n    margin: 0 0 12px 0;\n    font-size: 19px;\n    color: #ccff33;\n    font-weight: 800;\n}\n\n.rs-inrr-glass-box p {\n    margin: 0;\n    font-size: 15px;\n    line-height: 1.7;\n    color: #b0b0b0;\n}\n\n/* HOW TO LIST */\n.rs-inrr-list-box ol {\n    margin: 0;\n    padding-left: 20px;\n    color: #e0e0e0;\n}\n\n.rs-inrr-list-box li {\n    margin-bottom: 15px;\n    line-height: 1.7;\n    font-size: 15px;\n}\n\n.rs-inrr-list-box li:last-child {\n    margin-bottom: 0;\n}\n\n.rs-inrr-list-box strong {\n    color: #2ecc71;\n}\n\n/* FAQ ACCORDION */\n.rs-inrr-faq-container {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    margin-bottom: 30px;\n}\n\n.rs-inrr-faq {\n    background: rgba(0, 0, 0, 0.4);\n    border: 1px solid rgba(46, 204, 113, 0.2);\n    border-radius: 16px;\n    padding: 18px 22px;\n    transition: all 0.3s ease;\n}\n\n.rs-inrr-faq[open] {\n    background: rgba(46, 204, 113, 0.05);\n    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);\n    border-color: rgba(46, 204, 113, 0.6);\n}\n\n.rs-inrr-faq summary {\n    font-weight: 800;\n    font-size: 16px;\n    color: #2ecc71;\n    cursor: pointer;\n    list-style: none;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.rs-inrr-faq summary::-webkit-details-marker {\n    display: none;\n}\n\n.rs-inrr-faq summary::after {\n    content: '+';\n    font-size: 22px;\n    color: #ffffff;\n    transition: transform 0.3s;\n}\n\n.rs-inrr-faq[open] summary::after {\n    content: '−';\n    transform: rotate(180deg);\n}\n\n.rs-inrr-faq p {\n    margin: 15px 0 0 0;\n    color: #b0b0b0;\n    line-height: 1.7;\n    font-size: 15px;\n    border-top: 1px solid rgba(255, 255, 255, 0.1);\n    padding-top: 15px;\n}\n\n/* KEYWORD FRAMES WITH CUSTOM SCROLLBAR */\n.rs-inrr-keywords {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 12px;\n    max-height: 320px;\n    overflow-y: auto;\n    padding-right: 15px;\n}\n\n.rs-inrr-keywords::-webkit-scrollbar {\n    width: 6px;\n}\n.rs-inrr-keywords::-webkit-scrollbar-track {\n    background: rgba(255, 255, 255, 0.05);\n    border-radius: 10px;\n}\n.rs-inrr-keywords::-webkit-scrollbar-thumb {\n    background: rgba(46, 204, 113, 0.3);\n    border-radius: 10px;\n}\n\n.rs-inrr-keywords span {\n    padding: 9px 18px;\n    border-radius: 8px; \n    background: rgba(0, 0, 0, 0.5); \n    border: 1px solid rgba(46, 204, 113, 0.3); \n    color: #e0e0e0; \n    font-size: 13px;\n    font-weight: 600;\n    transition: all 0.2s ease;\n    cursor: default;\n    box-shadow: 0 2px 5px rgba(0,0,0,0.01);\n}\n\n.rs-inrr-keywords span:hover {\n    background: linear-gradient(135deg, #2ecc71, #a3e635);\n    color: #000000;\n    border-color: #ccff33;\n    transform: translateY(-2px);\n    box-shadow: 0 5px 12px rgba(46, 204, 113, 0.3);\n}\n\n/* MOBILE RESPONSIVENESS */\n@media(max-width: 768px) {\n    .rs-inrr-wrapper {\n        padding: 15px;\n    }\n    .rs-inrr-glass-card {\n        padding: 25px;\n    }\n    .rs-inrr-header h2 {\n        font-size: 30px;\n    }\n    .rs-inrr-table td {\n        display: block;\n        width: 100%;\n        text-align: left;\n        padding: 12px 18px;\n    }\n    .rs-inrr-table td:nth-child(odd) {\n        background: rgba(255, 255, 255, 0.02);\n        border-bottom: none;\n    }\n}\n</style>\n",
    "target_region": "India (Tier 1 & Tier 2 Search Optimization)",
    "is_new": false,
    "category": "Yono",
    "seo_title": "INR Rummy System Architecture: Render-Thread Isolation (2026)",
    "screenshots": [],
    "idea_box_msg": "Do not force tactical inputs faster than the localized software can poll your hardware. Observe the frame-buffer response time of the interface. Aligning your physical interactions precisely with the engine's internal input-polling rhythm guarantees optimal tactile accuracy and reduces localized input rejection.",
    "file_size": "79",
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
    "custom_admin_box_heading": "[ ✦ RENDER-THREAD ISOLATION // FRAME-BUFFER AUDIT ]",
    "is_coming_soon": true,
    "version": "3.0",
    "serial_number": 17,
    "slug": "inr-rummy",
    "red_box_msg": "The render-thread metrics and input-polling speeds analyzed in this audit assume a verified, unmodified software build. Sideloaded APKs inherently corrupt the native isolation logic, resulting in severe frame-dropping and localized execution crashes. Always secure your application binaries exclusively through official developer nodes.",
    "custom_admin_box_html": "<!-- SAFE RUMMYAPP ONLINE \"ADVANCED TECHNICAL DIAGNOSTIC\" MODULE -->\n<!-- Bright Futuristic Modern Edition -->\n\n<section class=\"rs-tech-wrapper\">\n\n    <!-- TOP SYSTEM NOTIFICATION -->\n    <div class=\"rs-tech-alert-top\">\n        <span class=\"rs-tech-pulse\"></span> ✦ ADVANCED DIAGNOSTICS // ENGINE & LOGIC TEARDOWN\n    </div>\n\n    <!-- MAIN DEEP-DIVE INTRO CARD -->\n    <div class=\"rs-tech-glass-card rs-tech-hero\">\n        <div class=\"rs-tech-header\">\n            <h2>Technical Architecture Review</h2>\n            <span class=\"rs-tech-badge\">System Teardown</span>\n        </div>\n        \n        <p class=\"rs-tech-lead-text\">\n            Evaluating a virtual application requires probing beneath its graphical shell. In this advanced diagnostic, we bypass the marketing aesthetics to analyze the application's core rendering engine, memory allocation, and backend logic systems. By measuring frame stability, cryptographic randomization, and input latency, we provide a mathematically sound breakdown of how this application truly performs under heavy operational stress. \n        </p>\n    </div>\n\n    <!-- TECHNICAL DATA GRID -->\n    <div class=\"rs-tech-section-title\">Core Engine Metrics</div>\n    \n    <div class=\"rs-tech-grid\">\n        \n        <!-- Metric 1: RNG Logic -->\n        <div class=\"rs-tech-glass-box tech-border-slate\">\n            <div class=\"rs-tech-icon tech-glow-slate\">⚙️</div>\n            <h3>Cryptographic RNG Protocols</h3>\n            <p>True tactical simulations rely on pristine randomization. We analyze the application's Random Number Generator (RNG) logic for cryptographic seeding and sequence entropy. A robust, server-side RNG architecture ensures that card drops, virtual shuffles, and arcade mechanics are entirely immune to pattern manipulation, providing a mathematically fair environment for all practice rounds.</p>\n        </div>\n\n        <!-- Metric 2: Input Latency -->\n        <div class=\"rs-tech-glass-box tech-border-cyan\">\n            <div class=\"rs-tech-icon tech-glow-cyan\">⚡</div>\n            <h3>Input Latency & Event Listeners</h3>\n            <p>A seamless interface is dictated by response time. We measure the application's touch-start and touch-end event listeners to ensure input latency remains strictly under the 45-millisecond threshold. By minimizing payload packet delays between the client UI and the simulation server, the application translates physical screen taps into instantaneous digital reactions.</p>\n        </div>\n\n        <!-- Metric 3: Rendering Pipeline -->\n        <div class=\"rs-tech-glass-box tech-border-emerald\">\n            <div class=\"rs-tech-icon tech-glow-emerald\">🎥</div>\n            <h3>WebGL & Frame Rendering</h3>\n            <p>High-fidelity 3D environments must not compromise frame rates. We evaluate the application's draw call batching and texture compression within its WebGL/Canvas rendering pipeline. Proper optimization prevents Z-fighting and ensures a stable 60 FPS (Frames Per Second) output, preventing micro-stutters during intense, high-speed layout animations.</p>\n        </div>\n\n        <!-- Metric 4: Heap Memory -->\n        <div class=\"rs-tech-glass-box tech-border-indigo\">\n            <div class=\"rs-tech-icon tech-glow-indigo\">💾</div>\n            <h3>Heap Memory & CPU Overhead</h3>\n            <p>Bloated code leads to severe device throttling. We track the application's background memory footprint and garbage collection efficiency. A well-architected app flushes unused cache data effectively, ensuring that extended gameplay sessions do not result in CPU overheating, battery hemorrhaging, or forced application crashes on mid-tier hardware.</p>\n        </div>\n\n    </div>\n\n    <!-- TECHNICAL SUMMARY FOOTER -->\n    <div class=\"rs-tech-footer-card\">\n        <div class=\"rs-tech-flex-row\">\n            <div class=\"rs-tech-text-block\">\n                <h4>Data Verification Clause</h4>\n                <p>The diagnostic data presented in this technical review is based on isolated benchmarking. Application developers routinely deploy over-the-air (OTA) patches that may optimize or alter these engine parameters. We recommend running regular updates via authorized digital storefronts to maintain optimal software stability.</p>\n            </div>\n            \n            <div class=\"rs-tech-divider-vertical\"></div>\n\n            <div class=\"rs-tech-text-block\">\n                <h4>SEO & Search Visibility Note</h4>\n                <p>RummyApp Online actively structures our technical teardowns to provide the most transparent, data-driven insights available on the web. By focusing strictly on code architecture, UI mechanics, and tactical execution, we ensure our registry remains the definitive index for digital performance analysis.</p>\n            </div>\n        </div>\n    </div>\n\n</section>\n\n<style>\n@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@400;500;600&display=swap');\n\n:root {\n    --primary: #0057FF;\n    --accent: #00C2FF;\n    --accent2: #7B2FFF;\n    --emerald: #00C98A;\n    --amber: #FF6B2B;\n    --text-main: #0A0F2C;\n    --text-muted: #4A5580;\n    --surface: #FFFFFF;\n    --surface-alt: #F0F5FF;\n    --border: #D6E0FF;\n    --glow-blue: rgba(0, 87, 255, 0.12);\n    --glow-cyan: rgba(0, 194, 255, 0.15);\n    --glow-purple: rgba(123, 47, 255, 0.12);\n    --glow-green: rgba(0, 201, 138, 0.12);\n}\n\n.rs-tech-wrapper {\n    width: 100%;\n    margin: 40px 0;\n    font-family: 'DM Sans', sans-serif;\n    background: linear-gradient(145deg, #EEF3FF 0%, #F7F0FF 40%, #E8F8FF 100%);\n    padding: 40px;\n    border-radius: 24px;\n    box-sizing: border-box;\n    color: var(--text-main);\n    position: relative;\n    overflow: hidden;\n    box-shadow: 0 20px 60px rgba(0, 87, 255, 0.1), 0 4px 16px rgba(0,0,0,0.06);\n    border: 1px solid var(--border);\n}\n\n.rs-tech-wrapper::before {\n    content: '';\n    position: absolute;\n    top: 0; left: 0; right: 0; bottom: 0;\n    background-image: radial-gradient(circle, rgba(0, 87, 255, 0.08) 1px, transparent 1px);\n    background-size: 28px 28px;\n    pointer-events: none;\n    z-index: 0;\n}\n\n.rs-tech-wrapper::after {\n    content: '';\n    position: absolute;\n    top: -80px;\n    right: -80px;\n    width: 320px;\n    height: 320px;\n    background: radial-gradient(circle, rgba(123, 47, 255, 0.12) 0%, transparent 70%);\n    border-radius: 50%;\n    pointer-events: none;\n    z-index: 0;\n}\n\n.rs-tech-wrapper * {\n    box-sizing: border-box;\n    position: relative;\n    z-index: 1;\n}\n\n.rs-tech-alert-top {\n    display: inline-flex;\n    align-items: center;\n    gap: 12px;\n    background: linear-gradient(90deg, rgba(0,87,255,0.08), rgba(0,194,255,0.08));\n    color: var(--primary);\n    padding: 10px 22px;\n    border-radius: 100px;\n    margin-bottom: 32px;\n    font-size: 11px;\n    font-weight: 800;\n    font-family: 'Syne', sans-serif;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n    border: 1px solid rgba(0, 87, 255, 0.25);\n    box-shadow: 0 4px 16px rgba(0, 87, 255, 0.1);\n}\n\n.rs-tech-pulse {\n    width: 8px; height: 8px;\n    background: linear-gradient(135deg, var(--primary), var(--accent));\n    border-radius: 50%;\n    animation: tech-pulse 2s infinite;\n    flex-shrink: 0;\n}\n\n@keyframes tech-pulse {\n    0% { box-shadow: 0 0 0 0 rgba(0, 87, 255, 0.6); }\n    70% { box-shadow: 0 0 0 10px rgba(0, 87, 255, 0); }\n    100% { box-shadow: 0 0 0 0 rgba(0, 87, 255, 0); }\n}\n\n.rs-tech-glass-card {\n    background: rgba(255, 255, 255, 0.85);\n    backdrop-filter: blur(20px);\n    -webkit-backdrop-filter: blur(20px);\n    border-radius: 20px;\n    padding: 40px;\n    border: 1px solid rgba(0, 87, 255, 0.12);\n    margin-bottom: 40px;\n    box-shadow: 0 8px 32px rgba(0, 87, 255, 0.07), 0 1px 4px rgba(0,0,0,0.04);\n}\n\n.rs-tech-hero {\n    border-top: 3px solid transparent;\n    background-clip: padding-box;\n    position: relative;\n}\n\n.rs-tech-hero::before {\n    content: '';\n    position: absolute;\n    top: 0; left: 0; right: 0;\n    height: 3px;\n    background: linear-gradient(90deg, var(--primary), var(--accent), var(--accent2));\n    border-radius: 20px 20px 0 0;\n    z-index: 2;\n}\n\n.rs-tech-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 15px;\n    flex-wrap: wrap;\n    margin-bottom: 25px;\n    padding-bottom: 25px;\n    border-bottom: 1px solid var(--border);\n}\n\n.rs-tech-header h2 {\n    font-size: 32px;\n    font-weight: 800;\n    margin: 0;\n    font-family: 'Syne', sans-serif;\n    background: linear-gradient(135deg, var(--text-main) 0%, var(--primary) 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    letter-spacing: -0.5px;\n}\n\n.rs-tech-badge {\n    padding: 8px 20px;\n    border-radius: 100px;\n    background: linear-gradient(135deg, var(--primary), var(--accent2));\n    color: #fff;\n    font-size: 12px;\n    font-weight: 700;\n    font-family: 'Syne', sans-serif;\n    text-transform: uppercase;\n    letter-spacing: 1.5px;\n    box-shadow: 0 4px 16px rgba(0, 87, 255, 0.3);\n}\n\n.rs-tech-lead-text {\n    font-size: 16px;\n    line-height: 1.9;\n    color: var(--text-muted);\n    margin: 0;\n}\n\n.rs-tech-section-title {\n    font-size: 22px;\n    font-weight: 800;\n    font-family: 'Syne', sans-serif;\n    color: var(--text-main);\n    margin: 50px 0 25px 0;\n    position: relative;\n    padding-left: 18px;\n}\n\n.rs-tech-section-title::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 2px;\n    bottom: 2px;\n    width: 4px;\n    background: linear-gradient(180deg, var(--primary), var(--accent));\n    border-radius: 4px;\n}\n\n.rs-tech-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n    gap: 20px;\n    margin-bottom: 40px;\n}\n\n.rs-tech-glass-box {\n    background: rgba(255, 255, 255, 0.9);\n    border: 1px solid var(--border);\n    border-radius: 16px;\n    padding: 30px 25px;\n    text-align: left;\n    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n    box-shadow: 0 4px 16px rgba(0, 87, 255, 0.05);\n}\n\n.rs-tech-glass-box:hover {\n    transform: translateY(-6px);\n    box-shadow: 0 16px 40px rgba(0, 87, 255, 0.12);\n}\n\n.tech-border-slate:hover { border-color: #94a3b8; box-shadow: 0 16px 40px rgba(100,116,139,0.15); }\n.tech-border-cyan:hover { border-color: var(--accent); box-shadow: 0 16px 40px var(--glow-cyan); }\n.tech-border-emerald:hover { border-color: var(--emerald); box-shadow: 0 16px 40px var(--glow-green); }\n.tech-border-indigo:hover { border-color: var(--accent2); box-shadow: 0 16px 40px var(--glow-purple); }\n\n.rs-tech-icon {\n    font-size: 24px;\n    margin-bottom: 20px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 60px;\n    height: 60px;\n    border-radius: 14px;\n    border: 1px solid var(--border);\n}\n\n.tech-glow-slate { background: linear-gradient(135deg, #f1f5f9, #e2e8f0); }\n.tech-glow-cyan  { background: linear-gradient(135deg, #e0f9ff, #b8f0ff); }\n.tech-glow-emerald { background: linear-gradient(135deg, #d4f9ed, #a7f3d0); }\n.tech-glow-indigo { background: linear-gradient(135deg, #ede9fe, #ddd6fe); }\n\n.rs-tech-glass-box h3 {\n    margin: 0 0 12px 0;\n    font-size: 17px;\n    font-family: 'Syne', sans-serif;\n    color: var(--text-main);\n    font-weight: 700;\n}\n\n.rs-tech-glass-box p {\n    margin: 0;\n    font-size: 14.5px;\n    line-height: 1.75;\n    color: var(--text-muted);\n}\n\n.rs-tech-footer-card {\n    background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(240,245,255,0.95));\n    border: 1px solid var(--border);\n    border-radius: 16px;\n    padding: 35px;\n    box-shadow: 0 4px 20px rgba(0, 87, 255, 0.06);\n    position: relative;\n    overflow: hidden;\n}\n\n.rs-tech-footer-card::before {\n    content: '';\n    position: absolute;\n    bottom: 0; left: 0; right: 0;\n    height: 3px;\n    background: linear-gradient(90deg, var(--accent2), var(--primary), var(--accent));\n    border-radius: 0 0 16px 16px;\n}\n\n.rs-tech-flex-row {\n    display: flex;\n    gap: 35px;\n    align-items: stretch;\n}\n\n.rs-tech-text-block { flex: 1; }\n\n.rs-tech-divider-vertical {\n    width: 1px;\n    background: linear-gradient(180deg, transparent, var(--border), transparent);\n}\n\n.rs-tech-text-block h4 {\n    margin: 0 0 10px 0;\n    font-size: 16px;\n    font-weight: 700;\n    font-family: 'Syne', sans-serif;\n    color: var(--text-main);\n}\n\n.rs-tech-text-block p {\n    margin: 0;\n    font-size: 14px;\n    line-height: 1.8;\n    color: var(--text-muted);\n}\n\n@media(max-width: 900px) {\n    .rs-tech-flex-row { flex-direction: column; gap: 25px; }\n    .rs-tech-divider-vertical { display: none; }\n    .rs-tech-text-block { border-bottom: 1px solid var(--border); padding-bottom: 20px; }\n    .rs-tech-text-block:last-child { border-bottom: none; padding-bottom: 0; }\n}\n\n@media(max-width: 768px) {\n    .rs-tech-wrapper { padding: 20px; }\n    .rs-tech-glass-card { padding: 25px; }\n    .rs-tech-header h2 { font-size: 24px; }\n    .rs-tech-grid { grid-template-columns: 1fr; }\n    .rs-tech-glass-box, .rs-tech-footer-card { padding: 22px; }\n}\n</style>",
    "video_url": "",
    "canonical_url": "https://www.rummydex.com/inr-rummy",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784878806/images_5_kfd5rb.jpg",
    "seo_keywords": "INR Rummy render-thread isolation, input-polling frequency, frame-buffer pacing audit, INR Rummy system diagnostic",
    "link_configured": true,
    "created_at": "2026-05-26T07:21:55.085Z",
    "is_hot": false,
    "seo_description": "Explore the INR Rummy system architecture. RummyApp Online provides an independent audit of render-thread isolation, input-polling, and frame-buffer pacing.",
    "release_notes": "Addressed localized desynchronization within the visual pacing engine. The client-side architecture now effectively utilizes render-thread isolation, ensuring that background cryptographic handshakes no longer induce micro-stutters during rapid drag-and-drop tactical inputs.",
    "yellow_box_msg": "To achieve the seamless input-polling frequencies detailed in this diagnostic, ensure your device's digitizer and active RAM are not bottlenecked by background applications. Render-thread isolation requires sustained, unfragmented memory allocation to dynamically update UI states without dropping touch registrations.",
    "og_image_url": "https://13eehe59cj.ucarecd.net/2a718650-0602-495f-9ca4-b13c86e58c02/-/preview/190x190/",
    "name": "INR Rummy",
    "is_featured": false,
    "id": "2f90a87hv",
    "rating": 5
  },
  {
    "target_region": "",
    "is_new": false,
    "developer": "Horizon Play Studios",
    "features_html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Core Architecture & Feature Deep-Dive</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 12px;\n}\nul {\n  padding-left: 20px;\n}\nli {\n  font-size: 15px;\n  color: #3c4043;\n  margin-bottom: 10px;\n}\n</style>\n</head>\n<body>\n\n<h2>Core Architecture & Feature Deep-Dive</h2>\n<ul>\n  <li><strong>Adaptive Ambient Interface:</strong> The main dashboard utilizes a dynamic color-shifting background that adapts to the time of day, reducing eye strain and eliminating aggressive pop-up menus.</li>\n  <li><strong>Background Threading Optimization:</strong> Engineered to utilize secondary CPU cores, ensuring the app draws less than 150MB of RAM, preventing device thermal throttling during long sessions.</li>\n  <li><strong>State-Preservation Engine:</strong> A localized auto-save protocol records exact grid coordinates and score multipliers every 0.5 seconds, allowing users to hard-close the app and resume the exact frame of their puzzle instantly.</li>\n  <li><strong>Acoustic Soundscapes:</strong> Every mini-game features a custom-engineered spatial audio track, utilizing soft-clipping techniques to deliver crisp, ASMR-style feedback without overwhelming the device's speakers.</li>\n</ul>\n\n</body>\n</html>",
    "safety_status": "Verified",
    "description_html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Jaiho Rummy</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-top: 30px;\n  margin-bottom: 8px;\n}\nh3 {\n  font-size: 16px;\n  font-weight: 600;\n  margin-top: 20px;\n  margin-bottom: 6px;\n}\np {\n  font-size: 15px;\n  color: #3c4043;\n}\n</style>\n</head>\n<body>\n\n<h2>A Precision-Engineered Casual Digital Environment</h2>\n<p><strong>Jaiho Rummy</strong> is constructed to deliver a highly polished, uninterrupted entertainment experience. Moving beyond standard arcade hubs, this application is built on a custom lightweight rendering engine that prioritizes fluid 60-FPS animations and rapid touch-response times. The ecosystem is designed purely for leisure, focusing on deeply satisfying gameplay loops, spatial reasoning, and visual reward systems rather than chaotic menus.</p>\n\n<h2>Elaborated Breakdown of Core Mini-Games</h2>\n\n<h3>Mystic Aviator (Physics & Reflex Mechanics)</h3>\n<p>This is a gravity-based flight simulator set in a stylized, low-poly sky environment. Players control a minimalist glider by applying touch-pressure to adjust pitch and altitude. The core mechanic revolves around reading environmental visual cues—such as swirling wind particles—to catch updrafts and maintain momentum. As players progress through shifting weather biomes, they must precisely thread the glider through narrow geometric gates to build multiplier chains. The background dynamically transitions from dawn to dusk, accompanied by a reactive wind-tunnel audio engine that intensifies based on flight speed.</p>\n\n<h3>Aqua Merge 2048 (Spatial Logic & Grid Strategy)</h3>\n<p>Set within a multi-layered parallax underwater environment, this game requires players to swipe across a 5x5 grid to merge buoyant numerical bubbles. Unlike standard sliding puzzles, merged bubbles simulate fluid dynamics, morphing together with a satisfying droplet animation and a crisp acoustic \"pop.\" Clearing high-value numerical thresholds physically alters the background environment, unlocking vibrant coral reefs, ambient schools of fish, and deep-sea bioluminescence that reacts to the player's touch inputs.</p>\n\n<h3>Crystal Guardian (Optical Routing & Geometry)</h3>\n<p>A complex light-bending strategy puzzle. Players are presented with a hexagonal grid where a central energy core emits a continuous beam of colored light. The objective is to strategically place elemental prisms and mirrors on the board to refract, split, and guide the beam into corresponding crystalline receptacles. Advanced stages introduce color-mixing mechanics (e.g., merging red and blue beams to unlock purple nodes) and rotating blockers. Completing a circuit triggers a localized particle explosion, illuminating the entire board in high-definition bloom lighting.</p>\n\n<h3>Neon Racer (Procedural Generation & Tempo)</h3>\n<p>A fast-paced, top-down evasion challenge built on a procedurally generated infinite track. Players pilot a neon hovercraft through a digital grid, using micro-swipes to weave between shifting geometric barricades. The game is tied directly to its synth-wave soundtrack; track obstacles pulse, shift, and spawn in perfect synchronization with the bass drops. Maintaining a high speed without grazing walls charges a \"Slipstream Gauge,\" which, when activated, alters the camera FOV and leaves a prolonged light-trail behind the player.</p>\n\n</body>\n</html>",
    "idea_box_msg": "🟢 PRO TIP: Enable Eco-Mode in the settings menu during long travel sessions. This caps visual rendering at 30 FPS and reduces GPU lighting overhead, extending continuous battery life by up to 40% while preserving your exact gameplay state.",
    "screenshots": [],
    "file_size": "58",
    "category": "Yono, All app",
    "seo_title": "Jaiho Rummy App - Premium Casual Puzzles & Arcade Physics Games",
    "faqs": [
      {
        "question": "Question: How does the State-Preservation Engine handle abrupt closes or battery shutdowns during a puzzle?",
        "answer": "Answer: The app utilizes a sub-second local logging system that auto-saves your exact board coordinates, score multipliers, and active game timers every 0.5 seconds. If your device battery dies or the application is closed unexpectedly, reopening JAIHO Rummy will restore your session to the exact frame where you left off without any data loss."
      },
      {
        "question": "Question: Can I adjust the graphics settings to run smoother on entry-level smartphones?",
        "answer": "Answer: Yes. JAIHO Rummy includes a dedicated Hardware Optimization menu where you can toggle particle density, disable screen-space bloom, and cap the frame rate at 30 FPS or 60 FPS to ensure lag-free performance across both budget and flagship devices."
      },
      {
        "answer": "Answer: The app features custom spatial audio engineered with soft-clipping audio technology to prevent speaker distortion, while the main dashboard dynamically shifts its ambient background hue based on your local time of day to reduce eye fatigue during late-night gaming sessions.",
        "question": "Question: How do the acoustic soundscapes and adaptive dashboard enhance the casual experience?"
      }
    ],
    "version": "2.1",
    "serial_number": 18,
    "custom_admin_box_heading": "TECHNICAL PERFORMANCE & HARDWARE EFFICIENCY",
    "is_coming_soon": false,
    "red_box_msg": "",
    "slug": "jaiho-rummy",
    "canonical_url": "https://www.rummydex.com/app/jaiho-rummy",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784878878/images_6_p5wj8d.jpg",
    "seo_keywords": "jaiho rummy app, casual logic puzzles, mystic aviator physics, crystal guardian strategy, background optimized arcade, premium mobile lounge",
    "link_configured": false,
    "custom_admin_box_html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Performance Verdict — Jaiho Rummy</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\np {\n  font-size: 15px;\n  color: #3c4043;\n}\n</style>\n</head>\n<body>\n\n<h2>Our Hands-On Testing & Performance Verdict</h2>\n<p>During rigorous hardware testing, <strong>Jaiho Rummy</strong> demonstrated superior resource management. The application's \"Eco-Mode\" toggle caps the frame rate at 30 FPS and disables secondary bloom lighting, allowing the app to run continuously for over 6 hours on a standard 4000mAh battery without triggering system heat warnings. Touch-input latency is measured at a maximum of 12 milliseconds, ensuring pixel-perfect accuracy in reflex-heavy modes like <strong>Neon Racer</strong>.</p>\n\n</body>\n</html>",
    "video_url": "",
    "is_hot": false,
    "seo_description": "Download Jaiho Rummy to experience highly detailed casual gaming. Master physics-based flight in Mystic Aviator and spatial logic in Crystal Guardian.",
    "release_notes": "",
    "created_at": "2026-05-26T07:26:42.606Z",
    "is_featured": false,
    "id": "9a05609sb",
    "rating": 3.9,
    "yellow_box_msg": "",
    "og_image_url": "",
    "name": "JAIHO RUMMY "
  },
  {
    "slug": "love-rummy",
    "red_box_msg": "",
    "video_url": "",
    "custom_admin_box_html": "",
    "link_configured": false,
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784878950/download_31_s7fonv.webp",
    "seo_keywords": "",
    "canonical_url": "",
    "created_at": "2026-05-26T07:31:59.173Z",
    "seo_description": "",
    "release_notes": "",
    "is_hot": false,
    "name": "Love Rummy",
    "og_image_url": "",
    "yellow_box_msg": "",
    "rating": 4.2,
    "id": "l7a60keix",
    "is_featured": false,
    "description_html": "<p>A new application.</p>",
    "safety_status": "Verified",
    "developer": "Mak job",
    "features_html": "",
    "is_new": false,
    "target_region": "",
    "seo_title": "",
    "category": "Yono",
    "file_size": "68",
    "screenshots": [],
    "idea_box_msg": "",
    "faqs": [],
    "is_coming_soon": true,
    "custom_admin_box_heading": "",
    "serial_number": 19,
    "version": "1.6"
  },
  {
    "custom_admin_box_html": "",
    "video_url": "",
    "canonical_url": "",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784879087/download_32_cyvkev.webp",
    "seo_keywords": "",
    "link_configured": false,
    "slug": "joy-rummy",
    "red_box_msg": "",
    "yellow_box_msg": "",
    "og_image_url": "",
    "name": "JOY RUMMY",
    "is_featured": false,
    "id": "4paka7kie",
    "rating": 5,
    "created_at": "2026-05-26T07:34:35.782Z",
    "is_hot": false,
    "seo_description": "",
    "release_notes": "",
    "category": "Yono",
    "seo_title": "",
    "idea_box_msg": "",
    "screenshots": [],
    "file_size": "50",
    "features_html": "",
    "developer": "AB Arora",
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "target_region": "",
    "is_new": false,
    "custom_admin_box_heading": "",
    "is_coming_soon": true,
    "version": "1.8",
    "serial_number": 20,
    "faqs": []
  },
  {
    "name": "MAHA GAMES",
    "yellow_box_msg": "",
    "og_image_url": "",
    "id": "2768ohu2a",
    "rating": 4,
    "is_featured": false,
    "created_at": "2026-05-26T07:37:07.122Z",
    "is_hot": false,
    "release_notes": "",
    "seo_description": "",
    "video_url": "",
    "custom_admin_box_html": "",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784879172/download_33_d1pgy0.webp",
    "seo_keywords": "",
    "link_configured": false,
    "canonical_url": "",
    "slug": "maha-games",
    "red_box_msg": "",
    "is_coming_soon": true,
    "custom_admin_box_heading": "",
    "version": "1.0",
    "serial_number": 21,
    "faqs": [],
    "seo_title": "",
    "category": "Yono",
    "file_size": "70",
    "idea_box_msg": "",
    "screenshots": [],
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "features_html": "",
    "developer": "AZ ever",
    "is_new": false,
    "target_region": ""
  },
  {
    "is_new": false,
    "target_region": "",
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "features_html": "",
    "developer": "AZ ever",
    "file_size": "58",
    "screenshots": [],
    "idea_box_msg": "",
    "seo_title": "",
    "category": "Yono",
    "faqs": [],
    "version": "5.8",
    "serial_number": 22,
    "is_coming_soon": true,
    "custom_admin_box_heading": "",
    "red_box_msg": "",
    "slug": "rummy-ludo",
    "seo_keywords": "",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784879252/download_34_wrdzdw.webp",
    "link_configured": false,
    "canonical_url": "",
    "video_url": "",
    "custom_admin_box_html": "",
    "is_hot": false,
    "seo_description": "",
    "release_notes": "",
    "created_at": "2026-05-26T07:39:44.282Z",
    "id": "us5xuk5bm",
    "rating": 3.9,
    "is_featured": false,
    "name": "Rummy Ludo",
    "yellow_box_msg": "",
    "og_image_url": ""
  },
  {
    "idea_box_msg": "",
    "screenshots": [],
    "file_size": "45",
    "category": "Yono",
    "seo_title": "",
    "target_region": "",
    "is_new": false,
    "developer": "Arcade ",
    "features_html": "",
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "version": "2.0.6",
    "serial_number": 23,
    "custom_admin_box_heading": "",
    "is_coming_soon": true,
    "faqs": [],
    "canonical_url": "",
    "seo_keywords": "",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784879414/download_35_frpjjp.webp",
    "link_configured": false,
    "custom_admin_box_html": "",
    "video_url": "",
    "red_box_msg": "",
    "slug": "rummy-77",
    "is_featured": false,
    "id": "69x1lstq7",
    "rating": 3.9,
    "yellow_box_msg": "",
    "og_image_url": "",
    "name": "Rummy 77",
    "is_hot": false,
    "seo_description": "",
    "release_notes": "",
    "created_at": "2026-05-26T07:42:24.615Z"
  },
  {
    "target_region": "",
    "is_new": false,
    "features_html": "",
    "developer": "AB Arora",
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "idea_box_msg": "",
    "screenshots": [],
    "file_size": "58",
    "category": "Yono",
    "seo_title": "",
    "faqs": [],
    "version": "1.8",
    "serial_number": 24,
    "custom_admin_box_heading": "",
    "is_coming_soon": true,
    "red_box_msg": "",
    "slug": "share-slots",
    "canonical_url": "",
    "seo_keywords": "",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784879544/download_36_zeiyxs.webp",
    "link_configured": true,
    "custom_admin_box_html": "",
    "video_url": "",
    "is_hot": false,
    "release_notes": "",
    "seo_description": "",
    "created_at": "2026-05-26T07:44:32.442Z",
    "is_featured": false,
    "id": "j79n2g3l9",
    "rating": 4,
    "yellow_box_msg": "",
    "og_image_url": "",
    "name": "Share Slots"
  },
  {
    "id": "n3w2vjk0b",
    "rating": 3.5,
    "is_featured": false,
    "name": "567 SLOTS",
    "yellow_box_msg": "",
    "og_image_url": "",
    "is_hot": false,
    "release_notes": "",
    "seo_description": "",
    "created_at": "2026-05-26T07:51:47.637Z",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784879622/download_37_fzgtxc.webp",
    "seo_keywords": "",
    "link_configured": false,
    "canonical_url": "",
    "video_url": "",
    "custom_admin_box_html": "",
    "red_box_msg": "",
    "slug": "567-slots",
    "version": "1.6",
    "serial_number": 26,
    "is_coming_soon": true,
    "custom_admin_box_heading": "",
    "faqs": [],
    "file_size": "65",
    "idea_box_msg": "",
    "screenshots": [],
    "seo_title": "",
    "category": "Yono",
    "is_new": false,
    "target_region": "",
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "features_html": "",
    "developer": "Tania JK "
  },
  {
    "custom_admin_box_html": "",
    "video_url": "",
    "canonical_url": "",
    "seo_keywords": "",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784879711/download_38_pmpbnu.webp",
    "link_configured": false,
    "slug": "789jackpots",
    "red_box_msg": "",
    "yellow_box_msg": "",
    "og_image_url": "",
    "name": "789Jackpots",
    "is_featured": false,
    "id": "owxg4aekg",
    "rating": 2.9,
    "created_at": "2026-05-26T07:56:30.478Z",
    "is_hot": false,
    "seo_description": "",
    "release_notes": "",
    "category": "Yono",
    "seo_title": "",
    "idea_box_msg": "",
    "screenshots": [],
    "file_size": "Tanu WD",
    "developer": "Admin",
    "features_html": "",
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "target_region": "",
    "is_new": false,
    "custom_admin_box_heading": "",
    "is_coming_soon": true,
    "version": "1.9",
    "serial_number": 27,
    "faqs": []
  },
  {
    "category": "Yono",
    "seo_title": "",
    "screenshots": [],
    "idea_box_msg": "",
    "file_size": "78",
    "developer": "Rahul HL",
    "features_html": "",
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "target_region": "",
    "is_new": false,
    "custom_admin_box_heading": "",
    "is_coming_soon": true,
    "version": "1.8",
    "serial_number": 28,
    "faqs": [],
    "custom_admin_box_html": "",
    "video_url": "",
    "canonical_url": "",
    "seo_keywords": "",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784879809/download_39_znq2ql.webp",
    "link_configured": false,
    "slug": "yono-vip",
    "red_box_msg": "",
    "yellow_box_msg": "",
    "og_image_url": "",
    "name": "Yono Vip",
    "is_featured": false,
    "id": "fw5wsziec",
    "rating": 4,
    "created_at": "2026-05-26T08:00:01.636Z",
    "is_hot": false,
    "seo_description": "",
    "release_notes": ""
  },
  {
    "slug": "teen-patti-octro",
    "red_box_msg": "",
    "video_url": "",
    "publish_date": "2026-06-10T12:00:00.000Z",
    "custom_admin_box_html": "",
    "seo_keywords": "",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784879881/download_40_v9bper.webp",
    "link_configured": false,
    "canonical_url": "",
    "created_at": "2026-06-03T10:17:01.058Z",
    "is_hot": false,
    "seo_description": "",
    "release_notes": "",
    "name": "Teen Patti Octro",
    "yellow_box_msg": "",
    "og_image_url": "",
    "id": "t1ocq5iar",
    "rating": 4.2,
    "is_featured": false,
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "developer": "Unknown ",
    "features_html": "",
    "is_new": true,
    "target_region": "",
    "seo_title": "",
    "category": "Card",
    "file_size": "90",
    "idea_box_msg": "",
    "screenshots": [],
    "faqs": [],
    "is_coming_soon": true,
    "custom_admin_box_heading": "",
    "version": "3",
    "serial_number": 34
  },
  {
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "features_html": "",
    "developer": "Admin",
    "is_new": false,
    "target_region": "",
    "seo_title": "",
    "category": "Card",
    "file_size": "Unknown",
    "idea_box_msg": "",
    "screenshots": [],
    "faqs": [],
    "is_coming_soon": true,
    "custom_admin_box_heading": "",
    "version": "1.0",
    "serial_number": 29,
    "slug": "zynga-poker-texas-holdem-game",
    "red_box_msg": "",
    "video_url": "",
    "custom_admin_box_html": "",
    "seo_keywords": "",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784879955/download_41_r3xnll.webp",
    "link_configured": false,
    "canonical_url": "",
    "created_at": "2026-06-03T10:30:01.393Z",
    "is_hot": false,
    "release_notes": "",
    "seo_description": "",
    "name": "Zynga Poker- Texas Holdem Game",
    "yellow_box_msg": "",
    "og_image_url": "",
    "id": "rrmv44n9n",
    "rating": 5,
    "is_featured": false
  },
  {
    "faqs": [],
    "version": "1.0",
    "serial_number": 30,
    "custom_admin_box_heading": "",
    "is_coming_soon": true,
    "target_region": "",
    "is_new": true,
    "developer": "Admin",
    "features_html": "",
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "screenshots": [],
    "idea_box_msg": "",
    "file_size": "Unknown",
    "category": "Card",
    "seo_title": "",
    "is_hot": false,
    "seo_description": "",
    "release_notes": "",
    "created_at": "2026-06-07T10:14:11.138Z",
    "is_featured": false,
    "id": "wf59smk6l",
    "rating": 5,
    "yellow_box_msg": "",
    "og_image_url": "",
    "name": "UNO! ",
    "red_box_msg": "",
    "slug": "uno",
    "canonical_url": "",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784880053/download_42_u7vlpq.webp",
    "seo_keywords": "",
    "link_configured": true,
    "custom_admin_box_html": "",
    "video_url": ""
  },
  {
    "description_html": "<p>A new application.</p>",
    "safety_status": "Verified",
    "developer": "Admin",
    "features_html": "",
    "is_new": false,
    "target_region": "",
    "seo_title": "",
    "category": "Card",
    "file_size": "Unknown",
    "idea_box_msg": "",
    "screenshots": [],
    "faqs": [],
    "is_coming_soon": true,
    "custom_admin_box_heading": "",
    "serial_number": 31,
    "version": "1.0",
    "slug": "rummy-gold-with-fast-rummy",
    "red_box_msg": "",
    "video_url": "",
    "custom_admin_box_html": "",
    "link_configured": true,
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784880233/download_43_fgshj3.webp",
    "seo_keywords": "",
    "canonical_url": "",
    "created_at": "2026-06-07T10:16:45.949Z",
    "seo_description": "",
    "release_notes": "",
    "is_hot": false,
    "name": "Rummy GOLD - With Fast Rummy",
    "og_image_url": "",
    "yellow_box_msg": "",
    "rating": 5,
    "id": "8epj9jjpu",
    "is_featured": false
  },
  {
    "red_box_msg": "",
    "slug": "indian-rummy-3-patti-card-game",
    "link_configured": true,
    "seo_keywords": "",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784880331/download_44_i8vc4z.webp",
    "canonical_url": "",
    "video_url": "",
    "custom_admin_box_html": "",
    "release_notes": "",
    "seo_description": "",
    "is_hot": false,
    "created_at": "2026-06-07T10:19:11.616Z",
    "rating": 5,
    "id": "8jt0hokyo",
    "is_featured": false,
    "name": "Indian Rummy 3 Patti Card Game",
    "og_image_url": "",
    "yellow_box_msg": "",
    "is_new": true,
    "target_region": "",
    "description_html": "<p>A new application.</p>",
    "safety_status": "Verified",
    "features_html": "",
    "developer": "Admin",
    "file_size": "Unknown",
    "idea_box_msg": "",
    "screenshots": [],
    "seo_title": "",
    "category": "Card",
    "faqs": [],
    "serial_number": 32,
    "version": "1.0",
    "is_coming_soon": true,
    "custom_admin_box_heading": ""
  },
  {
    "seo_title": "",
    "category": "Slots",
    "file_size": "Unknown",
    "idea_box_msg": "",
    "screenshots": [],
    "description_html": "<p>A new application.</p>",
    "safety_status": "Verified",
    "developer": "Admin",
    "features_html": "",
    "is_new": false,
    "target_region": "",
    "is_coming_soon": true,
    "custom_admin_box_heading": "",
    "serial_number": 33,
    "version": "1.0",
    "faqs": [],
    "video_url": "",
    "custom_admin_box_html": "",
    "publish_date": "2026-07-08T13:08:00.000Z",
    "link_configured": true,
    "seo_keywords": "",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784880502/download_45_rvzhvj.webp",
    "canonical_url": "",
    "slug": "lucky-spin-slots",
    "red_box_msg": "",
    "name": "Lucky Spin Slots",
    "og_image_url": "https://1ewg1yyass.ucarecd.net/0f918f11-b247-4b5a-9d26-d510dddffbfe/-/preview/447x447/",
    "yellow_box_msg": "",
    "rating": 5,
    "id": "01x9h7nfb",
    "is_featured": false,
    "created_at": "2026-06-07T13:13:11.211Z",
    "seo_description": "",
    "release_notes": "",
    "is_hot": false
  },
  {
    "is_new": false,
    "target_region": "",
    "safety_status": "Verified",
    "description_html": "<p>A new application.</p>",
    "features_html": "",
    "developer": "AB Arora",
    "file_size": "76",
    "idea_box_msg": "",
    "screenshots": [],
    "seo_title": "",
    "category": "Yono, All app",
    "faqs": [],
    "version": "1.0",
    "serial_number": 28,
    "is_coming_soon": true,
    "custom_admin_box_heading": "",
    "red_box_msg": "",
    "slug": "ind-club",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784880566/download_46_rsjwao.webp",
    "seo_keywords": "",
    "link_configured": false,
    "canonical_url": "",
    "video_url": "",
    "publish_date": "2026-06-12T15:30:00.000Z",
    "custom_admin_box_html": "",
    "is_hot": false,
    "seo_description": "",
    "release_notes": "",
    "created_at": "2026-06-12T12:39:30.407Z",
    "id": "3cflt97b5",
    "rating": 4.5,
    "is_featured": false,
    "name": "IND Club",
    "yellow_box_msg": "",
    "og_image_url": ""
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
  "site_title": "Yono Store",
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
  "categories": [],
  "banners": [],
  "quick_links": [],
  "website_faqs": [],
  "developers": [
    {
      "bio": "Jeet Roy is the driving force behind RummyDex, dedicated to building a secure, transparent, and engaging platform for casual gamers. His visionary leadership ensures that RummyDex remains a trusted and go-to destination for high-quality, hand-tested digital entertainment.",
      "role": "CEO ",
      "twitter": "",
      "name": "JEET ROY ",
      "image_url": "data:image/webp;base64,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",
      "github": ""
    }
  ],
  "last_updated": "2026-07-26T08:23:00.945Z"
};

export const saveMockSettings = (settings: GlobalSettings) => {
  try {
    localStorage.setItem('rummystore_settings', JSON.stringify(settings));
  } catch (e) {
    console.warn('saveMockSettings storage failed:', e);
  }
  Object.assign(mockSettings, settings);
};

export const mockNews: NewsItem[] = [
  {
    "read_time": "2 min",
    "seo_keywords": "spin crush news, new arcade app, spin crush launch, casual game hub, virtual coin games, offline mini-games",
    "canonical_url": "https://www.rummydex.com/news/spin-crush-app-launch",
    "author": "Admin",
    "seo_title": "Spin Crush Launched - All-In-One Casual Arcade Hub | News",
    "ceo_description": "Platform Updates",
    "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>A New Era of Casual Gaming Has Arrived!</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh1 {\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-top: 30px;\n  margin-bottom: 8px;\n}\np {\n  font-size: 15px;\n  color: #3c4043;\n}\nul {\n  padding-left: 20px;\n}\nli {\n  font-size: 15px;\n  color: #3c4043;\n  margin-bottom: 10px;\n}\n</style>\n</head>\n<body>\n\n<h1>A New Era of Casual Gaming Has Arrived!</h1>\n<p>We are incredibly excited to announce that <strong>Spin Crush</strong> has officially been added to our catalog. If you are tired of cluttering your phone with dozens of separate game downloads, your ultimate solution is finally here.</p>\n<p><strong>Spin Crush</strong> is a comprehensive digital arcade hub that houses a massive, constantly rotating library of high-quality thematic mini-games in one single, optimized application.</p>\n\n<h2>What is Inside Spin Crush?</h2>\n<p>Instead of offering just one repetitive game loop, <strong>Spin Crush</strong> delivers a diverse digital playground. Here is a sneak peek at the adventures waiting for you inside the lobby:</p>\n<ul>\n  <li><strong>Baking Master:</strong> Step into a virtual kitchen and match culinary ingredients to trigger satisfying visual combos.</li>\n  <li><strong>Thor God of Lightning &amp; Xerxes:</strong> Dive into epic mythological worlds featuring stunning 3D animations and dynamic puzzle mechanics.</li>\n  <li><strong>Action &amp; Adventure:</strong> Test your reflexes in <em>Royale Battleground</em>, step into the ring with <em>Boxing King</em>, or survive the prehistoric world of <em>Jurassic Kingdom</em>.</li>\n</ul>\n\n<h2>Why You Will Love It</h2>\n<ul>\n  <li><strong>Optimized Storage &amp; Performance:</strong> Get instant access to dozens of games without heavy loading screens or draining your battery.</li>\n  <li><strong>Offline Gameplay Ready:</strong> No Wi-Fi? No problem! Enjoy uninterrupted casual entertainment wherever you go.</li>\n  <li><strong>Safe, Virtual Progression:</strong> Spin Crush focuses 100% on risk-free fun. Build your profile, collect virtual points, and beat your own high scores in a secure, family-friendly environment.</li>\n</ul>\n\n<h2>Ready to Play?</h2>\n<p>The wait is over. Head over to the official <strong>Spin Crush</strong> app page on our platform, hit download, and start exploring the ultimate casual gaming hub today!</p>\n\n</body>\n</html>",
    "tags": [],
    "category": "Yono",
    "description": "We are thrilled to announce the launch of Spin Crush on our platform! Discover a massive collection of offline mini-games, dynamic 3D graphics, and virtual arcade challenges—all inside one lightweight application.",
    "target_region": "Global",
    "ceo_name": "Admin Team",
    "slug": "spin-crush-app-launch",
    "description_html": "<p>News HTML...</p>",
    "id": "nt4at52f0",
    "logo_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877361/.trashed-1787468954-download_12_j8vn7j_wge7co.webp",
    "related_app_id": "q82dbbwh4",
    "og_image_url": "",
    "title": "APP ALERT: Spin Crush is Now Live!",
    "seo_description": "Spin Crush is officially live! Read our latest announcement to see how this centralized app brings offline mini-games and virtual rewards straight to your device.",
    "link": "https://www.rummydex.com/app/spin-crush",
    "date": "2026-07-26T04:21:09.928Z"
  },
  {
    "seo_keywords": "yono arcade news, yono arcade app launch, sugar rush 1000, super ace deluxe, casual arcade portal",
    "read_time": "2 min",
    "canonical_url": "https://www.rummydex.com/news/yono-arcade-app-launch",
    "author": "Admin",
    "seo_title": "Yono Arcade App Launched - Multi-Game Arcade Portal | News",
    "tags": [],
    "category": "Yono",
    "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Welcome to Your New Favorite Digital Lounge: Yono Arcade!</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh1 {\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-top: 30px;\n  margin-bottom: 8px;\n}\np {\n  font-size: 15px;\n  color: #3c4043;\n}\nul {\n  padding-left: 20px;\n}\nli {\n  font-size: 15px;\n  color: #3c4043;\n  margin-bottom: 10px;\n}\n</style>\n</head>\n<body>\n\n<h1>Welcome to Your New Favorite Digital Lounge: Yono Arcade!</h1>\n<p>We are thrilled to announce that <strong>Yono Arcade</strong> has officially launched on our platform. Designed as a premium multi-game portal, this app brings a carefully curated selection of interactive mini-games straight to your screen.</p>\n<p>Forget about navigating bloated menus or installing separate packages. <strong>Yono Arcade</strong> features a streamlined, high-performance dashboard that lets you instantly switch between incredibly diverse visual themes and arcade challenges without any lag.</p>\n\n<h2>What is Featured in Yono Arcade?</h2>\n<p>Our latest addition is packed with engaging titles to suit every mood. Here is a look at the hand-picked adventures you can play right now:</p>\n<ul>\n  <li><strong>Sugar Rush 1000:</strong> Dive into a vibrant, candy-themed puzzle universe filled with cascading sweets and satisfying chain reactions.</li>\n  <li><strong>12 Burning Baseballs:</strong> Test your reflexes in this high-octane sports arcade mode, complete with fiery animations and fast-paced symbol alignment.</li>\n  <li><strong>Super Ace Deluxe &amp; Fortune Gems 500:</strong> Enjoy energetic card-matching mechanics and explore ancient jungle temples to uncover glowing visual combinations.</li>\n</ul>\n\n<h2>Why You Will Love This App</h2>\n<ul>\n  <li><strong>Instant Load Architecture:</strong> Tap any icon in the central lobby to jump straight into the action with zero secondary download delays.</li>\n  <li><strong>Offline Mode Ready:</strong> Enjoy full gameplay mechanics and high-score chasing even when you are disconnected from Wi-Fi or mobile data.</li>\n  <li><strong>Safe, Risk-Free Entertainment:</strong> Progress through levels and collect virtual achievements in a purely casual, family-friendly simulation environment.</li>\n</ul>\n\n<h2>Ready to Set a New High Score?</h2>\n<p>The ultimate digital amusement gallery is waiting for you. Head over to the official <strong>Yono Arcade</strong> page on our platform, download the app, and start your casual gaming journey today!</p>\n\n</body>\n</html>\n",
    "ceo_description": "Platform Updates",
    "target_region": "Global",
    "description": "Yono Arcade is officially live! Discover a curated multi-game portal featuring Sugar Rush 1000, 12 Burning Baseballs, Super Ace Deluxe, and Fortune Gems 500 in one high-performance dashboard.",
    "ceo_name": "Admin Team",
    "description_html": "<p>News HTML...</p>",
    "slug": "yono-arcade-app-launch",
    "id": "wyxjm2cjb",
    "related_app_id": "31og4l26i",
    "logo_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877459/download_14_krbwrv.webp",
    "og_image_url": "",
    "seo_description": "Yono Arcade has officially launched! Read our full update to explore offline mini-games, instant-load lobby, and safe virtual achievements.",
    "title": "NEW APP ALERT: Welcome to Yono Arcade!",
    "link": "https://www.rummydex.com/app/yono-arcade",
    "date": "2026-07-26T04:48:49.404Z"
  },
  {
    "og_image_url": "",
    "logo_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877512/download_16_fznggx.webp",
    "related_app_id": "s5u553ymi",
    "id": "dgx7mxlnd",
    "date": "2026-07-26T05:04:28.405Z",
    "link": "https://www.rummydex.com/app/jaiho-91",
    "seo_description": "Read our latest announcement about Jaiho 91! Join the ultimate online arcade hub to play Jungle Delight and Boxing King while tracking your virtual achievements.",
    "title": "NEW APP ALERT: Dive Into the World of Jaiho 91!",
    "category": "Yono",
    "tags": [],
    "ceo_description": " Platform Updates",
    "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Discover Endless Entertainment with Jaiho 91!</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh1 {\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-top: 30px;\n  margin-bottom: 8px;\n}\np {\n  font-size: 15px;\n  color: #3c4043;\n}\nul {\n  padding-left: 20px;\n}\nli {\n  font-size: 15px;\n  color: #3c4043;\n  margin-bottom: 10px;\n}\n</style>\n</head>\n<body>\n\n<h1>Discover Endless Entertainment with Jaiho 91!</h1>\n<p>We are incredibly proud to announce the addition of <strong>Jaiho 91</strong> to our growing catalog of premium digital experiences. If you are searching for a highly interactive and visually spectacular gaming hub, this is exactly what you need.</p>\n<p><strong>Jaiho 91</strong> stands out as a state-of-the-art online arcade portal that seamlessly connects players to a wide variety of casual adventures. Instead of juggling multiple applications, you can dive straight into sports action, tropical puzzles, and mythological journeys all from a single dashboard.</p>\n\n<h2>What Awaits You Inside?</h2>\n<p>This application is packed with high-quality titles that cater to all types of casual players. Here are a few highlights from the impressive roster:</p>\n<ul>\n  <li><strong>Fortune Lakshmi &amp; Jungle Delight:</strong> Solve ancient temple puzzles or match tropical symbols alongside an animated lemur guide to trigger massive virtual score combos.</li>\n  <li><strong>Boxing King:</strong> Step into the ring in this fast-paced sports arcade mode, where timing your strikes perfectly fills your knockout gauge.</li>\n  <li><strong>Dragon Hatch II:</strong> Align mythical dragon eggs and fire gems to accumulate energy, leveling up your dragon nest for spectacular visual rewards.</li>\n</ul>\n\n<h2>Unmatched Platform Features</h2>\n<ul>\n  <li><strong>Dynamic Level-Up System:</strong> Every game you play earns you account-wide experience points (XP), unlocking higher difficulty tiers and exclusive profile themes.</li>\n  <li><strong>Online Leaderboards:</strong> Connect to global servers and compete in friendly community high-score challenges without ever risking real money.</li>\n  <li><strong>Seamless Cloud Saving:</strong> Rest easy knowing your hard-earned virtual achievements and avatar progression are safely synchronized across all your devices.</li>\n</ul>\n\n<h2>Join the Community Today!</h2>\n<p>The ultimate online multi-game ecosystem is officially live. Head over to the official <strong>Jaiho 91</strong> page on our platform, download the app, and start leveling up your profile today!</p>\n\n</body>\n</html>\n",
    "seo_title": "Jaiho 91 Launched - Online Arcade Hub & Casual Portal | News",
    "author": "Admin",
    "canonical_url": "https://www.rummydex.com/news/jaiho-91-arcade-launch",
    "read_time": "2 min",
    "seo_keywords": "jaiho 91 news, jaiho 91 app launch, dragon hatch 2, boxing king arcade, online casual game portal",
    "description_html": "<p>News HTML...</p>",
    "slug": "jaiho-91-arcade-launch",
    "description": "Jaiho 91 is now available on our platform! Experience a premium multi-game portal featuring global online leaderboards, dynamic profile leveling, and hit titles like Dragon Hatch II and Fortune Lakshmi.",
    "target_region": "Global",
    "ceo_name": "Admin Team"
  },
  {
    "tags": [],
    "category": "Yono",
    "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Step Into a World of Endless Arcade Fun with Bingo 101!</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh1 {\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-top: 30px;\n  margin-bottom: 8px;\n}\np {\n  font-size: 15px;\n  color: #3c4043;\n}\nul {\n  padding-left: 20px;\n}\nli {\n  font-size: 15px;\n  color: #3c4043;\n  margin-bottom: 10px;\n}\n</style>\n</head>\n<body>\n\n<h1>Step Into a World of Endless Arcade Fun with Bingo 101!</h1>\n<p>We are excited to share that <strong>Bingo 101</strong> is officially live in our digital catalog. Built for casual gaming enthusiasts who appreciate polished visual design and rewarding leveling mechanics, this app elevates mobile arcade play to a whole new level.</p>\n<p>Rather than managing a phone full of single-purpose applications, <strong>Bingo 101</strong> delivers a dynamic multi-game portal. Players can instantly jump between subterranean mining expeditions, underwater ocean quests, and high-speed target action directly from one intuitive central hub.</p>\n\n<h2>Featured Mini-Games Inside Bingo 101</h2>\n<p>The application launches with an impressive array of unique titles. Here is a look at the featured games waiting for you:</p>\n<ul>\n  <li><strong>Gemstones Gold:</strong> Dig deep into subterranean shafts, aligning rare crystals and gold nuggets to power up your mining tools and unlock massive visual score bonuses.</li>\n  <li><strong>Poseidon II:</strong> Journey into the underwater realm of Atlantis, charging Poseidon’s Trident through strategic symbol matching to unleash screen-shaking tidal animations.</li>\n  <li><strong>Jurassic Kingdom &amp; Crazy Hunter:</strong> Hatch prehistoric eggs in a dinosaur survival simulation or test your reflexes in a cannon-firing arcade shooter built for fast-paced target action.</li>\n</ul>\n\n<h2>Key Platform Highlights</h2>\n<ul>\n  <li><strong>Tiered Profile XP:</strong> Earn account experience with every play session, leveling up your profile to unlock higher stage difficulty tiers and exclusive visual badges.</li>\n  <li><strong>Online Scoreboards:</strong> Connect online to sync your high scores to global leaderboards and track your personal progress alongside other players.</li>\n  <li><strong>Pure Casual Experience:</strong> Enjoy stress-free, risk-free entertainment built 100% around virtual rewards and milestone achievements.</li>\n</ul>\n\n<h2>Start Your Next Adventure Today!</h2>\n<p>Ready to jump into the action? Head over to the official <strong>Bingo 101</strong> app page on our platform, download the application, and start climbing the leaderboards today!</p>\n\n</body>\n</html>\n",
    "ceo_description": "Platform Updates",
    "seo_title": "Bingo 101 App Launched - Casual Arcade Hub & Online Games | News",
    "author": "Admin",
    "canonical_url": "https://www.rummydex.com/news/bingo-101-arcade-launch",
    "seo_keywords": "",
    "read_time": "2 min",
    "description_html": "<p>News HTML...</p>",
    "slug": "bingo-101-arcade-launch",
    "ceo_name": "Admin Team",
    "description": "Bingo 101 is now officially live on our platform! Step into a next-generation casual arcade hub featuring Gemstones Gold, Poseidon II, Jurassic Kingdom, and Crazy Hunter with live online leaderboard tracking.",
    "target_region": "Global",
    "og_image_url": "",
    "related_app_id": "awus3qajs",
    "logo_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877567/download_18_lljdaa.webp",
    "id": "e7vba3ez5",
    "date": "2026-07-26T05:07:13.873Z",
    "link": "https://www.rummydex.com/app/bingo-101",
    "seo_description": "Bingo 101 has officially launched! Read our full update to explore subterranean mining puzzles, underwater myths, and online target-shooting arcade games.",
    "title": "NEW APP ALERT: Step Into Bingo 101!"
  },
  {
    "og_image_url": "",
    "logo_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877617/download_19_w2sxhp.webp",
    "related_app_id": "0uiuuhdrj",
    "id": "1t6avakci",
    "date": "2026-07-26T06:46:07.017Z",
    "link": "https://www.rummydex.com/app/ok-rummy",
    "title": "📢 NEW APP ALERT: Experience High-Performance Gaming with OK Rummy!",
    "seo_description": "OK Rummy has officially launched! Read our full news update to explore custom lobby layout pinning, 3D collectible trophies, and ultra-fluid casual gameplay.",
    "ceo_description": "Platform Updates",
    "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Redefining Mobile Leisure: Welcome to OK Rummy!</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh1 {\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-top: 30px;\n  margin-bottom: 8px;\n}\np {\n  font-size: 15px;\n  color: #3c4043;\n}\nul {\n  padding-left: 20px;\n}\nli {\n  font-size: 15px;\n  color: #3c4043;\n  margin-bottom: 10px;\n}\n</style>\n</head>\n<body>\n\n<h1>Redefining Mobile Leisure: Welcome to OK Rummy!</h1>\n<p>We are thrilled to reveal our latest platform arrival: <strong>OK Rummy</strong>! Engineered specifically for modern mobile hardware, this release introduces ultra-smooth performance, personalized interfaces, and visual polish to our casual arcade collection.</p>\n<p>Unlike standard multi-game applications, <strong>OK Rummy</strong> introduces a fully customizable home grid system. You can rearrange your dashboard, pin your favorite titles to the top, and experience blistering fast transition speeds powered by a new lightweight rendering engine.</p>\n\n<h2>Unique Features Inside OK Rummy</h2>\n<p>This release introduces several platform innovations designed to elevate your daily casual sessions:</p>\n<ul>\n  <li><strong>120Hz Display Engine:</strong> Optimized for modern AMOLED screens to deliver ultra-smooth visual effects and zero input delay during gameplay.</li>\n  <li><strong>Personalized Dashboard Pinning:</strong> Organize your lobby by dragging and pinning your most-played mini-games directly to the top of your screen for instant launch.</li>\n  <li><strong>3D Interactive Trophy Vault:</strong> Earn rare digital badges and milestone artifacts as you build high-score streaks across different titles.</li>\n  <li><strong>Instant Asset Caching:</strong> Sub-games pre-load in the background, eliminating loading screens when switching between game modes.</li>\n</ul>\n\n<h2>Featured Game World Highlights</h2>\n<p>Explore an eclectic roster of visually striking mini-games built for high-frame-rate performance:</p>\n<ul>\n  <li><strong>Fortune Tiger:</strong> A lively feline puzzle adventure featuring golden color palettes, swift touch controls, and rapid combo triggers.</li>\n  <li><strong>King of Olympus:</strong> A mythic realm powered by real-time particle lighting, electric audio effects, and cinematic thunderbolt sequences.</li>\n  <li><strong>Bison Moon &amp; Wild Bandito:</strong> Atmospheric night-sky puzzle challenges paired with high-energy fiesta rhythm mechanics.</li>\n</ul>\n\n<h2>Build Your Custom Lounge Today!</h2>\n<p>Upgrade your mobile gaming experience with our most customizable release yet. Head over to the official <strong>OK Rummy</strong> showcase page on our portal, download the application, and start building your personal trophy collection today!</p>\n\n</body>\n</html>\n",
    "category": "Yono",
    "tags": [],
    "seo_title": "OK Rummy App 2026 - 120Hz Arcade Engine & Custom Dashboard | News",
    "author": "Admin",
    "canonical_url": "https://www.rummydex.com/news/ok-rummy-platform-launch",
    "seo_keywords": "ok rummy news, ok rummy app launch, 120hz mobile arcade, fortune tiger, king of olympus, custom dashboard portal",
    "read_time": "2 min",
    "slug": "ok-rummy-platform-launch",
    "description_html": "<p>News HTML...</p>",
    "description": "OK Rummy is officially live on our platform! Enjoy a high-performance arcade hub featuring 120Hz display optimization, customizable dashboard pinning, an interactive 3D Trophy Vault, and top titles like Fortune Tiger and King of Olympus.",
    "ceo_name": "Admin Team",
    "target_region": "Global"
  },
  {
    "description": "Jaiho Rummy is officially live! Step into a premium casual gaming lounge featuring acoustic soundscapes, relaxing logic puzzles like Aqua Merge, and an eco-friendly engine designed to save battery life.",
    "ceo_name": "Admin Team",
    "target_region": "Global",
    "description_html": "<p>News HTML...</p>",
    "slug": "jaiho-rummy-app-launch",
    "canonical_url": "https://www.rummydex.com/news/jaiho-rummy-app-launch",
    "author": "Admin",
    "seo_keywords": "jaiho rummy news, jaiho rummy app launch, casual logic puzzles, mystic aviator, aqua merge, battery optimized arcade",
    "read_time": "2 min",
    "category": "Yono",
    "tags": [],
    "ceo_description": "Platform Updates",
    "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Unwind and Play: Welcome to Jaiho Rummy!</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh1 {\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-top: 30px;\n  margin-bottom: 8px;\n}\np {\n  font-size: 15px;\n  color: #3c4043;\n}\nul {\n  padding-left: 20px;\n}\nli {\n  font-size: 15px;\n  color: #3c4043;\n  margin-bottom: 10px;\n}\n</style>\n</head>\n<body>\n\n<h1>Unwind and Play: Welcome to Jaiho Rummy!</h1>\n<p>We are incredibly excited to introduce <strong>Jaiho Rummy</strong> to our digital catalog. Designed for players looking to escape the clutter of traditional multi-game apps, this release serves as a premium, relaxing digital retreat directly on your smartphone.</p>\n<p>Moving away from chaotic menus and heavy loading screens, <strong>Jaiho Rummy</strong> features an adaptive, minimalist dashboard. The application is built on a highly efficient background rendering engine, ensuring that your transition into casual puzzle-solving is incredibly smooth, responsive, and battery-friendly.</p>\n\n<h2>Engineered for Premium Leisure</h2>\n<p>This application introduces state-of-the-art features tailored for stress-free entertainment:</p>\n<ul>\n  <li><strong>Eco-Friendly Rendering:</strong> The app draws less than 150MB of RAM and includes a dedicated Eco-Mode, allowing you to play for hours without draining your battery or overheating your device.</li>\n  <li><strong>State-Preservation Engine:</strong> Need to pause suddenly? The app auto-saves your grid coordinates every 0.5 seconds. Reopen the app later and resume the exact frame of your puzzle without losing any progress.</li>\n  <li><strong>Acoustic Spatial Audio:</strong> Enjoy custom-engineered, soft-clipping audio tracks that provide satisfying, ASMR-style feedback without overwhelming your speakers.</li>\n</ul>\n\n<h2>Featured Puzzle & Arcade Experiences</h2>\n<p>Dive into our most deeply satisfying and visually polished game modes yet:</p>\n<ul>\n  <li><strong>Mystic Aviator:</strong> A gravity-based flight simulator where you read wind particles and catch updrafts to guide a minimalist glider through a beautiful low-poly sky kingdom.</li>\n  <li><strong>Aqua Merge 2048:</strong> Merge buoyant numerical bubbles in a dynamic underwater environment. Watch as your combinations unlock bioluminescent reefs and ambient aquatic flora.</li>\n  <li><strong>Crystal Guardian:</strong> Deflect and mix beams of colored light across a hexagonal grid using elemental prisms to unlock glowing, high-definition particle explosions.</li>\n</ul>\n\n<h2>Start Your Digital Retreat Today!</h2>\n<p>The ultimate relaxing arcade experience is waiting for you. Head over to the official <strong>Jaiho Rummy</strong> app page on our portal, download the application, and discover a smarter way to play today!</p>\n\n</body>\n</html>\n",
    "seo_title": "Jaiho Rummy Launch - Premium Casual Arcade & Logic Puzzles | News",
    "seo_description": "Jaiho Rummy is now available! Read our full update to learn about its battery-optimized rendering engine, relaxing acoustic soundscapes, and advanced casual logic puzzles.",
    "title": "📢 PLATFORM UPDATE: Discover Your Digital Retreat with Jaiho Rummy!",
    "date": "2026-07-26T07:44:00.257Z",
    "link": "https://www.rummydex.com/app/jaiho-rummy",
    "id": "l047gofso",
    "og_image_url": "",
    "logo_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784878878/images_6_p5wj8d.jpg",
    "related_app_id": "9a05609sb"
  }
];

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
