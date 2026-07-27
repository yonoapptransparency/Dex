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

export const mockApps: AppConfig[] = [
  {
    "is_new": false,
    "release_notes": "",
    "serial_number": 2,
    "seo_keywords": "casual game hub, arcade collection, virtual coin games, offline mini-games, spin crush app",
    "link_configured": true,
    "screenshots": [],
    "faqs": [
      {
        "question": "Question: What is Spin Crush?",
        "answer": "Answer: Spin Crush is an all-in-one casual arcade hub that brings together a wide collection of thematic mini-games—including Baking Master, Thor God of Lightning, and Wild Bandito—into a single, easy-to-use application."
      },
      {
        "question": "Question: Can I play games in Spin Crush offline?",
        "answer": "Answer: Yes, Spin Crush supports offline play for many of its casual mini-games, allowing you to enjoy smooth arcade mechanics and level progression anytime without requiring an active internet connection."
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
    "custom_admin_box_html": "<div style=\"border: 1px solid #e8eaed; border-radius: 8px; padding: 20px 24px; margin-top: 30px; background: #f8f9fa;\">\n  <h2 style=\"font-size: 18px; font-weight: 600; margin-bottom: 10px; color: #202124;\">EXTRACT DISCRIPTION</h2>\n  <p style=\"font-size: 15px; color: #3c4043; margin: 0;\">\n    Spin Crush eliminates the need to download dozens of separate games. By operating as a central arcade hub, it grants you instant access to a massive, rotating library of thematic adventures. Enjoy optimized, battery-friendly gameplay all within a single, secure application.\n  </p>\n</div>",
    "yellow_box_msg": "The app currently showing a heat issue in Android lower version",
    "is_top_chart": true,
    "seo_title": "Spin Crush - Casual Arcade Hub & Virtual Mini-Games",
    "is_featured": false,
    "description_html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Spin Crush</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-top: 30px;\n  margin-bottom: 8px;\n}\np {\n  font-size: 15px;\n  color: #3c4043;\n}\n</style>\n</head>\n<body>\n\n<h2>A New Standard for Casual Arcade Gaming</h2>\n<p><strong>Spin Crush</strong> redefines mobile entertainment by bringing an entire universe of casual mini-games into one accessible platform. Instead of offering a single repetitive loop, this app houses a vast collection of highly detailed thematic games. Whether you are looking for relaxing puzzle mechanics or fast-paced arcade action, this digital playground offers something for every type of player.</p>\n\n<h2>Explore a Diverse Universe of Mini-Games</h2>\n<p>The true strength of <strong>Spin Crush</strong> lies in its incredible variety. You can step into a virtual kitchen and match culinary ingredients in <strong>\"Baking Master,\"</strong> or explore vibrant cultural themes in <strong>\"Wild Bandito\"</strong> and <strong>\"Pinata Frenzy.\"</strong> For fans of mythology and history, <strong>\"Thor God of Lightning\"</strong> and <strong>\"Xerxes\"</strong> offer epic visual animations and dynamic virtual coin collection. Action enthusiasts can dive into the tactical environment of <strong>\"Royale Battleground\"</strong> or step into the ring with <strong>\"Boxing King.\"</strong> Nature and fantasy lovers are also covered with the prehistoric adventures of <strong>\"Jurassic Kingdom,\"</strong> the fiery visual combos of <strong>\"Coin Volcano,\"</strong> and the mystical journey of <strong>\"Wukong.\"</strong></p>\n\n<h2>Smooth Performance & Immersive Gameplay</h2>\n<p>Built with top-tier optimization, the app delivers a highly responsive user experience. The intuitive central lobby allows players to effortlessly navigate through different game categories without experiencing heavy loading screens. Every mini-game features sharp 3D graphics, bright colors, and satisfying sound effects that make virtual progression and matching mechanics incredibly engaging.</p>\n\n<h2>Safe, Virtual Entertainment</h2>\n<p>Designed as a purely casual simulation, <strong>Spin Crush</strong> focuses entirely on risk-free fun. Players can dive into thrilling arcade features like the <strong>\"Fortune Wheel,\"</strong> <strong>\"Crazy 777,\"</strong> or <strong>\"Gemstones Gold\"</strong> utilizing strictly virtual points. It is the perfect daily companion for users seeking a polished gaming experience where the focus is on beating high scores, unlocking new visual levels, and enjoying pure digital entertainment.</p>\n\n</body>\n</html>",
    "version": "2.0.6",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877361/.trashed-1787468954-download_12_j8vn7j_wge7co.webp",
    "custom_admin_box_heading": "PLATFORM HIGHLIGHT: THE ALL-IN-ONE CASUAL GAMING HUB",
    "is_coming_soon": false,
    "idea_box_msg": "",
    "slug": "spin-crush",
    "category": "Yono, All app",
    "rating": 3.9,
    "red_box_msg": "",
    "target_region": "",
    "name": "SPIN CRUSH ",
    "features_html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>About Mini Games Hub</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh1 {\n  font-size: 28px;\n  font-weight: 500;\n  margin-bottom: 20px;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-top: 30px;\n  margin-bottom: 8px;\n}\np {\n  font-size: 15px;\n  color: #3c4043;\n}\n</style>\n</head>\n<body>\n\n<h1>About Mini Games Hub</h1>\n\n<p>Mini Games Hub is a single app that brings together a massive collection of thematic mini-games, letting people enjoy many different play styles without switching apps.</p>\n\n<h2>Instant Play</h2>\n<p>Games load instantly, with seamless switching between diverse game modes.</p>\n\n<h2>Stunning HD Graphics</h2>\n<p>Each game is designed with detailed visuals, spanning themes from culinary kitchens to ancient mythology.</p>\n\n<h2>Offline Gameplay</h2>\n<p>Games can be played offline, supporting uninterrupted casual entertainment.</p>\n\n<h2>Virtual Rewards</h2>\n<p>All progression and rewards are 100% virtual, offering a safe and risk-free arcade experience.</p>\n\n</body>\n</html>",
    "created_at": "2026-05-19T12:43:59.040Z",
    "safety_status": "Verified",
    "id": "q82dbbwh4",
    "seo_description": "Download Spin Crush, the ultimate casual gaming hub. Explore diverse offline mini-games, collect virtual coins, and enjoy safe arcade entertainment on RummyDex.",
    "video_url": "",
    "is_hot": false,
    "file_size": "56",
    "canonical_url": "https://www.rummydex.com/app/spin-crush",
    "og_image_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877361/.trashed-1787468954-download_12_j8vn7j_wge7co.webp",
    "developer": "PixelCraft Interactive"
  },
  {
    "canonical_url": "https://www.rummydex.com/app/yono-arcade",
    "file_size": "56",
    "developer": "NovaByte Studios",
    "og_image_url": "",
    "id": "31og4l26i",
    "seo_description": "Step into Yono Arcade, an action-packed mobile gaming gallery featuring Sugar Rush 1000, Super Ace Deluxe, and Fortune Gems 500 in one app.",
    "is_hot": false,
    "video_url": "",
    "slug": "yono-arcade",
    "category": "Yono, All app",
    "is_coming_soon": false,
    "idea_box_msg": "",
    "created_at": "2026-05-19T19:04:26.373Z",
    "safety_status": "Verified",
    "red_box_msg": "",
    "rating": 3.8,
    "features_html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Key Features</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 12px;\n}\nul {\n  padding-left: 20px;\n}\nli {\n  font-size: 15px;\n  color: #3c4043;\n  margin-bottom: 10px;\n}\n</style>\n</head>\n<body>\n\n<h2>Key Features</h2>\n<ul>\n  <li><strong>All-in-one arcade gallery</strong> hosting a massive variety of colorful mini-games.</li>\n  <li><strong>Instant-play lobby</strong> allowing quick switching between different game themes.</li>\n  <li><strong>Rich HD artwork</strong> ranging from sweet candy land puzzles to ancient temples.</li>\n  <li><strong>Fully optimized for offline play</strong> so you can enjoy games without internet data.</li>\n  <li><strong>100% virtual achievement system</strong> built for casual high-score progression.</li>\n</ul>\n\n</body>\n</html>",
    "target_region": "",
    "name": "YONO ARCADE",
    "is_featured": false,
    "yellow_box_msg": "",
    "seo_title": "Yono Arcade - Update of 2026 & Mini-Game Collection",
    "custom_admin_box_heading": "HANDS-ON REVIEW & PERFORMANCE VERDICT",
    "version": "4.7.0",
    "description_html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Yono Arcade</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-top: 30px;\n  margin-bottom: 8px;\n}\np {\n  font-size: 15px;\n  color: #3c4043;\n}\nul {\n  padding-left: 20px;\n}\nli {\n  font-size: 15px;\n  color: #3c4043;\n  margin-bottom: 12px;\n}\n</style>\n</head>\n<body>\n\n<h2>Welcome to the Ultimate Digital Arcade</h2>\n<p><strong>Yono Arcade</strong> is an all-in-one amusement gallery built specifically for casual mobile players. Packed with vibrant visual worlds and dynamic gameplay styles, this app transforms your device into a complete arcade lounge. Instead of clogging your phone storage with dozens of separate apps, <strong>Yono Arcade</strong> brings your favorite visual matching, puzzle, and action mechanics under one polished roof.</p>\n\n<h2>Explore Featured Mini-Games Inside Yono Arcade:</h2>\n<ul>\n  <li><strong>Sugar Rush 1000:</strong> A sweet visual puzzle universe where cascading gumball machines and pastel candy grids drop satisfying chain reactions as you match treats.</li>\n  <li><strong>12 Burning Baseballs:</strong> A high-octane sports-themed arcade game loaded with fiery animations, stadium sound effects, and rapid symbol alignment.</li>\n  <li><strong>Super Ace Deluxe:</strong> An energetic card-style matching game featuring golden wild cards, dramatic multiplier boosts, and fast-paced board clears.</li>\n  <li><strong>Fortune Gems 500:</strong> An ancient jungle temple quest where glowing artifacts and gold jewel combinations create a visually stunning experience on screen.</li>\n</ul>\n\n<h2>Designed for Endless Casual Fun</h2>\n<p>Whether you have two minutes to spare or want a relaxing hour of gaming, <strong>Yono Arcade</strong> delivers endless variety. You can jump from candy puzzles to sports action in seconds. Everything is built around collecting virtual rewards, unlocking level achievements, and beating your personal best scores in a safe, family-friendly environment.</p>\n\n</body>\n</html>",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877459/download_14_krbwrv.webp",
    "serial_number": 3,
    "seo_keywords": "",
    "is_new": false,
    "release_notes": "",
    "screenshots": [],
    "faqs": [
      {
        "question": "Question: What games can I find inside Yono Arcade?",
        "answer": "Answer: Yono Arcade features a diverse collection of casual titles, including popular puzzle and matching games like Sugar Rush 1000, Super Ace Deluxe, 12 Burning Baseballs, and Fortune Gems 500."
      },
      {
        "question": "Question: Does Yono Arcade work without Wi-Fi or mobile data?",
        "answer": "Answer: Yes, the mini-games inside Yono Arcade are designed to support offline play, allowing you to enjoy your favorite arcade titles anywhere."
      },
      {
        "question": "Question: How do I unlock new features in the app?",
        "answer": "Answer: Progression is tied to your virtual high scores and achievements earned while playing the different mini-games inside the app."
      }
    ],
    "custom_admin_box_html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Performance Review — Yono Arcade</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\np {\n  font-size: 15px;\n  color: #3c4043;\n}\n</style>\n</head>\n<body>\n\n<h2>Performance & Testing Notes</h2>\n<p>During our hands-on evaluation of <strong>Yono Arcade</strong>, the app delivered a smooth, high-frame-rate performance. The central lobby launches in under two seconds, mini-games load without secondary download delays, and battery consumption remains extremely low. Touch controls feel instant and crisp across every mini-game tested.</p>\n\n</body>\n</html>",
    "link_configured": true
  },
  {
    "canonical_url": "https://www.rummydex.com/app/jaiho-91",
    "file_size": "52",
    "developer": "Vanguard Play Studios",
    "og_image_url": "",
    "seo_description": "Explore Jaiho 91, a feature-rich mobile arcade portal. Play Fortune Lakshmi, Jungle Delight, Boxing King, and Dragon Hatch II with live online ranking tables.",
    "id": "s5u553ymi",
    "is_hot": false,
    "video_url": "",
    "created_at": "2026-05-19T19:23:07.133Z",
    "safety_status": "Verified",
    "rating": 4.2,
    "red_box_msg": "",
    "features_html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Key Features</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 12px;\n}\nul {\n  padding-left: 20px;\n}\nli {\n  font-size: 15px;\n  color: #3c4043;\n  margin-bottom: 10px;\n}\n</style>\n</head>\n<body>\n\n<h2>Key Features</h2>\n<ul>\n  <li><strong>Centralized Online Portal:</strong> Connect to global servers to participate in live seasonal event boards and community high-score challenges.</li>\n  <li><strong>Dynamic Level-Up System:</strong> Gain experience points (XP) with every played session to unlock advanced stage modifiers and visual titles.</li>\n  <li><strong>Multi-Genre Catalog:</strong> Enjoy a broad mixture of sports action, mythological puzzles, and fantasy level-progression modes in one place.</li>\n  <li><strong>Seamless Cloud Saving:</strong> Keep your virtual achievements, level milestones, and unlocked avatars safely synchronized across your devices.</li>\n  <li><strong>Virtual Point Economy:</strong> 100% risk-free progression structure built purely around skill-based milestones and level achievements.</li>\n</ul>\n\n</body>\n</html>",
    "target_region": "",
    "name": "JAIHO 91",
    "slug": "jaiho-91",
    "category": "Yono, All app",
    "is_coming_soon": false,
    "idea_box_msg": "",
    "custom_admin_box_heading": "",
    "version": "1.20.1",
    "description_html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Jaiho 91</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-top: 30px;\n  margin-bottom: 8px;\n}\np {\n  font-size: 15px;\n  color: #3c4043;\n}\nul {\n  padding-left: 20px;\n}\nli {\n  font-size: 15px;\n  color: #3c4043;\n  margin-bottom: 12px;\n}\n</style>\n</head>\n<body>\n\n<h2>The Next Generation of Casual Arcade Gaming</h2>\n<p><strong>Jaiho 91</strong> is a comprehensive digital entertainment portal crafted for players who enjoy variety, high-production visual design, and real-time community interaction. Built on a modern online multiplayer framework, <strong>Jaiho 91</strong> allows you to transition smoothly between distinct game worlds while earning account-wide experience points. As you complete daily objectives, your profile levels up, granting access to exclusive visual themes, avatar frames, and global leaderboard rankings.</p>\n\n<h2>In-Depth Breakdown of Featured Mini-Games:</h2>\n<ul>\n  <li><strong>Fortune Lakshmi:</strong> A visually stunning puzzle-matching title centered around ancient temple aesthetics and golden lotus motifs. Players solve grid challenges by aligning matching sacred relics to trigger screen-clearing combos. The game features an online tier system where completing higher difficulty tiers unlocks unique visual multipliers and decorative background themes.</li>\n  <li><strong>Jungle Delight:</strong> An adventurous rainforest arcade title featuring an animated lemur guide. This mode revolves around cascading fruit grids and tropical symbol alignment. As you clear stages, you fill a \"Jungle Meter\" that levels up your current session, unleashing special wildcard animations and high-yield virtual coin bursts.</li>\n  <li><strong>Boxing King:</strong> A fast-paced sports arcade simulation that puts you inside an illuminated combat ring. Instead of standard puzzle grids, players timing-tap to land punch combinations and fill a knockout energy gauge. It includes a competitive online leaderboard where you can compare your highest combo streaks against other players worldwide.</li>\n  <li><strong>Dragon Hatch II:</strong> A dark-fantasy level-progression game where players assist in hatching mythical elemental dragons. By aligning matching dragon eggs and fire gems, you accumulate heat energy to level up the central dragon nest. Reaching higher dragon levels unlocks spectacular fire animations and massive virtual score bonuses.</li>\n</ul>\n\n<h2>Online Connectivity & Comprehensive Progression</h2>\n<p>What sets <strong>Jaiho 91</strong> apart is its account synchronization. Whether playing online to climb live weekly score charts or enjoying casual offline sessions on the go, your account profile continuously accumulates XP. Reaching higher profile levels unlocks new difficulty tiers across all mini-games, making every session feel productive and rewarding.</p>\n\n</body>\n</html>",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877512/download_16_fznggx.webp",
    "is_featured": false,
    "yellow_box_msg": "",
    "seo_title": "Jaiho 91 App - Multi-Game Online Arcade & Puzzle Hub",
    "screenshots": [],
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
        "question": "Question: Is Bingo 101 playable when offline?",
        "answer": "Answer: Yes, while an active connection is required to submit high scores to global leaderboards, the core mini-games can be played offline for uninterrupted personal entertainment."
      }
    ],
    "custom_admin_box_html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Performance Verdict — Jaiho 91</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\np {\n  font-size: 15px;\n  color: #3c4043;\n}\n</style>\n</head>\n<body>\n\n<h2>Our Hands-On Testing & Performance Verdict</h2>\n<p>During our hands-on testing of <strong>Jaiho 91</strong> across both Wi-Fi and 4G networks, the app demonstrated exceptional stability. Online leaderboard synchronization takes less than a second, and switching between heavy 3D titles like <strong>Boxing King</strong> and <strong>Dragon Hatch II</strong> occurred without frame drops. Touch responsiveness in fast-paced modes felt precise, and account leveling progress updated accurately in real time.</p>\n\n</body>\n</html>",
    "link_configured": true,
    "serial_number": 3,
    "seo_keywords": "",
    "is_new": true,
    "release_notes": ""
  },
  {
    "description_html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Bingo 101</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-top: 30px;\n  margin-bottom: 8px;\n}\np {\n  font-size: 15px;\n  color: #3c4043;\n}\nul {\n  padding-left: 20px;\n}\nli {\n  font-size: 15px;\n  color: #3c4043;\n  margin-bottom: 12px;\n}\n</style>\n</head>\n<body>\n\n<h2>A Dynamic Center for Casual Mobile Arcade Entertainment</h2>\n<p><strong>Bingo 101</strong> is an expansive digital arcade lounge engineered for players who demand high visual quality, deep progression systems, and live online connectivity. Functioning as a centralized multi-game ecosystem, <strong>Bingo 101</strong> lets users transition instantly between wildly different visual worlds while building a unified player profile. Every challenge completed awards account experience points (XP), raising your player level and opening up advanced stage modifiers and exclusive visual rewards.</p>\n\n<h2>In-Depth Breakdown of Featured Mini-Games:</h2>\n<ul>\n  <li><strong>Gemstones Gold:</strong> A deep-shaft mining puzzle adventure where players control a veteran miner digging for rare subterranean jewels. Aligning matching crystals and golden nuggets fills a central \"Excavation Gauge,\" leveling up your current mining shaft. Higher shaft levels unlock pickaxe multipliers, glowing cave visual effects, and massive virtual gem bonuses that feed directly into your global profile score.</li>\n  <li><strong>Poseidon II:</strong> An epic oceanic mythological title set in the depths of Atlantis. Players interact with aquatic symbols, trident relics, and sea-monster icons. The game features an online challenge mode where clearing consecutive wave patterns charges Poseidon's Trident. Reaching full charge triggers screen-shaking tidal animation sequences and unlocks bonus rounds with live online ranking updates.</li>\n  <li><strong>Jurassic Kingdom:</strong> A prehistoric puzzle simulation where players navigate a world populated by towering dinosaurs. Matching fossilized amber and dinosaur egg symbols drives the \"Incubation Meter.\" When the meter reaches 100%, players level up to hatch rare prehistoric species, unlocking dynamic 3D animations and boosting your seasonal online achievement standing.</li>\n  <li><strong>Crazy Hunter:</strong> A fast-paced, target-aiming action arcade game featuring a skull-helmeted artillery character. Instead of matching symbol tiles, players timing-tap to launch cannon fire at moving obstacles on screen. Accumulating target strikes levels up your weaponry in real time, granting rapid-fire modes, higher virtual point yields, and top placement on the global daily destruction chart.</li>\n</ul>\n\n<h2>Connected Online Architecture & Level Progression</h2>\n<p>The standout element of <strong>Bingo 101</strong> is its integrated online environment. Whether you log in over Wi-Fi or mobile networks, your account constantly syncs with cloud servers. Reaching profile level thresholds unlocks higher difficulty tiers within each individual mini-game, providing a long-term sense of mastery and reward for casual gamers.</p>\n\n</body>\n</html>",
    "version": "2.5V",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877567/download_18_lljdaa.webp",
    "custom_admin_box_heading": "OUR HANDS-ON TESTING & PERFORMANCE VERDICT",
    "yellow_box_msg": "",
    "seo_title": "Bingo 101  - Online Arcade Hub & Casual Puzzle Games",
    "is_featured": false,
    "link_configured": false,
    "screenshots": [],
    "faqs": [
      {
        "question": "Question: What online features does Bingo 101 offer?",
        "answer": "Answer: Bingo 101 includes live global leaderboard tracking, account cloud-saving, real-time profile XP synchronization, and competitive seasonal high-score events across all mini-games."
      },
      {
        "answer": "Answer: As you complete stages and trigger visual combos in games like Gemstones Gold or Crazy Hunter, you earn profile experience points (XP). Accumulating XP increases your master player level, unlocking higher game difficulty tiers and unique profile badges.",
        "question": "Question: How does account leveling work in Bingo 101?"
      },
      {
        "question": "Question: Is Bingo 101 playable when offline?",
        "answer": "Answer: Yes, while an active connection is required to submit high scores to global leaderboards, the core mini-games can be played offline for uninterrupted personal entertainment."
      }
    ],
    "custom_admin_box_html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Performance Verdict — Bingo 101</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\np {\n  font-size: 15px;\n  color: #3c4043;\n}\n</style>\n</head>\n<body>\n\n<h2>Our Hands-On Testing & Performance Verdict</h2>\n<p>During our hands-on testing of <strong>Bingo 101</strong> on both 4G and Wi-Fi networks, the app delivered rock-solid stability and fast server ping times. Online leaderboard entries updated in under a second, and transitioning from action-heavy titles like <strong>Crazy Hunter</strong> to puzzle modes like <strong>Gemstones Gold</strong> caused zero app lag. Touch-input latency remained crisp, and profile level-up notifications triggered seamlessly in real time.</p>\n\n</body>\n</html>",
    "is_new": false,
    "release_notes": "",
    "serial_number": 5,
    "seo_keywords": "",
    "id": "awus3qajs",
    "seo_description": "Download Bingo 101, a feature-packed casual gaming hub. Play Gemstones Gold, Poseidon II, Jurassic Kingdom, and Crazy Hunter with online scoreboards.",
    "video_url": "",
    "is_hot": false,
    "file_size": "71",
    "canonical_url": "https://www.rummydex.com/app/bingo-101",
    "og_image_url": "",
    "developer": "Prism Byte Interactive",
    "red_box_msg": "",
    "rating": 3.6,
    "target_region": "",
    "name": "BINGO 101",
    "features_html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Key Features</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 12px;\n}\nul {\n  padding-left: 20px;\n}\nli {\n  font-size: 15px;\n  color: #3c4043;\n  margin-bottom: 10px;\n}\n</style>\n</head>\n<body>\n\n<h2>Key Features</h2>\n<ul>\n  <li><strong>Interactive Online Hub:</strong> Synchronize your progress to global servers and compete on real-time community scoreboards.</li>\n  <li><strong>Tiered Profile Leveling:</strong> Earn master experience points across all modes to unlock high-tier stages, cosmetic borders, and profile badges.</li>\n  <li><strong>Diverse Gameplay Variety:</strong> Seamlessly jump between mining adventures, underwater mythology, prehistoric survival, and action-shooting arcade modes.</li>\n  <li><strong>Cross-Device Cloud Sync:</strong> Save your virtual achievements, level progression, and account stats safely online.</li>\n  <li><strong>Safe Virtual Economy:</strong> Built strictly around skill-based milestone tracking, virtual score meters, and risk-free level progression.</li>\n</ul>\n\n</body>\n</html>",
    "safety_status": "Verified",
    "created_at": "2026-05-20T03:09:33.880Z",
    "idea_box_msg": "",
    "is_coming_soon": false,
    "slug": "bingo-101",
    "category": "Yono, All app"
  },
  {
    "rating": 3,
    "red_box_msg": "",
    "features_html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Key Features</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 12px;\n}\nul {\n  padding-left: 20px;\n}\nli {\n  font-size: 15px;\n  color: #3c4043;\n  margin-bottom: 10px;\n}\n</style>\n</head>\n<body>\n\n<h2>Key Features</h2>\n<ul>\n  <li><strong>120Hz Ultra-Fluid Visual Engine:</strong> Rendered at high frame rates for butter-smooth animations and zero touch delay on modern AMOLED screens.</li>\n  <li><strong>Customizable Main Dashboard:</strong> Pin, organize, and drag your most-played mini-games to the top of your lobby for instant access.</li>\n  <li><strong>3D Interactive Trophy Vault:</strong> Collect rare digital badges, visual medals, and milestone banners as you master each mini-game.</li>\n  <li><strong>Instant Background Caching:</strong> Sub-games pre-load in the background so you can switch between titles without seeing loading bars.</li>\n  <li><strong>100% Skill & Reflex Progression:</strong> Completely risk-free entertainment focused on personal high scores, achievement trophies, and virtual point milestones.</li>\n</ul>\n\n</body>\n</html>",
    "target_region": "",
    "name": "OK RUMMY",
    "created_at": "2026-05-20T03:50:33.674Z",
    "safety_status": "Verified",
    "idea_box_msg": "> 🟢 **PRO TIP:** Select the server closest to your location during initial startup to achieve up to 40% lower latency and faster mini-game load times.\n",
    "is_coming_soon": false,
    "slug": "ok-rummy",
    "category": "Yono, All app",
    "id": "0uiuuhdrj",
    "seo_description": "Explore OK Rummy on RummyDex. Enjoy 120Hz display optimization, custom app pinning, 3D collectible trophies, and top casual titles like Fortune Tiger and King of Olympus.",
    "is_hot": false,
    "video_url": "",
    "canonical_url": "https://www.rummydex.com/app/ok-rummy",
    "file_size": "67",
    "developer": "Kinetic Pulse",
    "og_image_url": "",
    "link_configured": false,
    "faqs": [
      {
        "answer": "Answer: OK Rummy features a high-performance 120Hz display engine, a fully customizable main dashboard where you can pin favorite games, and an interactive 3D Trophy Vault to showcase your achievements",
        "question": "Question: What makes OK Rummy different from other multi-game apps?"
      },
      {
        "question": "Question: How does the Custom Dashboard Pinning feature work?",
        "answer": "Answer: You can simply press and hold any mini-game tile inside the lobby to drag and pin it to the top of your main screen, giving you instant access to your preferred games every time you launch the app."
      },
      {
        "answer": "Answer: Trophies and profile badges are earned naturally by reaching specific score milestones, clearing stage tiers, and building combo streaks inside games like Fortune Tiger and Bison Moon.",
        "question": "Question: How do I unlock items in the Trophy Vault?"
      }
    ],
    "screenshots": [],
    "custom_admin_box_html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Performance Verdict — OK Rummy</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\np {\n  font-size: 15px;\n  color: #3c4043;\n}\n</style>\n</head>\n<body>\n\n<h2>Our Hands-On Testing & Performance Verdict</h2>\n<p>During our hands-on technical analysis of <strong>OK Rummy</strong> across high-refresh-rate devices, the app consistently hit a solid 120 FPS without thermal throttling or frame drops. Menu customization was seamless, switching between heavy 3D titles like <strong>King of Olympus</strong> and fast puzzle modes like <strong>Fortune Tiger</strong> happened instantly, and touch latency measured virtually zero.</p>\n\n</body>\n</html>",
    "is_new": false,
    "release_notes": "",
    "serial_number": 6,
    "seo_keywords": "ok rummy app, ok rummy download, fortune tiger arcade, king of olympus game, custom arcade portal, 120hz casual mobile games",
    "version": "8.3.06.",
    "description_html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>OK Rummy</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-top: 30px;\n  margin-bottom: 8px;\n}\np {\n  font-size: 15px;\n  color: #3c4043;\n}\nul {\n  padding-left: 20px;\n}\nli {\n  font-size: 15px;\n  color: #3c4043;\n  margin-bottom: 12px;\n}\n</style>\n</head>\n<body>\n\n<h2>A Next-Generation Standard for Mobile Arcade Lounges</h2>\n<p><strong>OK Rummy</strong> breaks away from traditional multi-game apps by introducing a modern, high-performance interface built specifically for power users. Engineered on a high-frame-rate rendering engine, <strong>OK Rummy</strong> offers a silky-smooth digital playground where every tap, swipe, and visual effect responds instantly. Rather than forcing you through fixed menus, the app empowers you to customize your own home layout, pinning your favorite games right where you want them.</p>\n\n<h2>Detailed Spotlight on Featured Mini-Game Worlds:</h2>\n<ul>\n  <li><strong>Fortune Tiger:</strong> A vibrant, high-tempo feline arcade adventure. Players interact with a lively tiger mascot while aligning golden coins, lucky scrolls, and paw symbols. As you build match streaks, the app triggers rapid combo loops and fills a \"Ferocity Gauge\" that unlocks glowing golden screen transformations and high-yield virtual coin bursts.</li>\n  <li><strong>King of Olympus:</strong> A dramatic mythological theme set against the stormy skies of ancient Greece. Powered by real-time particle effects and booming audio, players charge Zeus's electric meter by aligning divine relics. Reaching full charge triggers screen-shaking lightning sequences and unlocks high-multiplier bonus board states.</li>\n  <li><strong>Bison Moon:</strong> An atmospheric wilderness puzzle set across a dark, starry prairie landscape. This mode utilizes dynamic visual shifts—as you clear glowing full-moon symbols, the environment transitions into a night-vision mode, revealing hidden bonus tiles and boosting your seasonal trophy score.</li>\n  <li><strong>Wild Bandito:</strong> A colorful, rhythm-infused fiesta arcade game featuring animated sugar skulls and acoustic guitar soundscapes. Players clear cascading symbol grids with fast-paced tap sequences, building musical momentum to unlock festive visual fireworks and rare profile badges.</li>\n</ul>\n\n<h2>The Interactive Trophy Vault & Custom Personalization</h2>\n<p>Beyond individual games, <strong>OK Rummy</strong> rewards your time with an integrated Trophy Vault. As you reach high scores across different titles, you unlock 3D collectible artifacts—such as the <strong>Golden Tiger Medallion</strong> or <strong>Zeus's Thunderbolt</strong>—which display proudly on your public profile. Combined with personalized theme pinning and instant game-switching, <strong>OK Rummy</strong> delivers a tailored casual gaming environment.</p>\n\n</body>\n</html>",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877617/download_19_w2sxhp.webp",
    "custom_admin_box_heading": "HANDS-ON TESTING & TECHNICAL PERFORMANCE VERDICT",
    "yellow_box_msg": "> ⚠️ **WARNING:** This app currently shows higher battery overhead on Android 14 during extended play sessions. Ensure background optimization is enabled in device settings.\n",
    "seo_title": "OK Rummy - Next-Gen Arcade Portal & Custom Dashboard",
    "is_featured": false
  },
  {
    "seo_title": "JAIHO SLOTS || latest 2026 v|| 120Hz 3D Virtual Reel Simulator",
    "yellow_box_msg": "> ⚠️ **NOTICE:** The *Ember Forge* room utilizes intensive volumetric fog and particle lighting. If you are playing in a dark room, we highly recommend lowering your device's screen brightness, as the flash from a winning alignment is incredibly bright and may cause eye strain.\n",
    "is_featured": false,
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877660/download_20_x106v3.webp",
    "version": "4.3",
    "description_html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Jaiho Slots</title>\n\n<style>\nbody{\n    margin:0;\n    padding:32px 20px;\n    max-width:760px;\n    margin:auto;\n    font-family:Arial,Helvetica,sans-serif;\n    color:#202124;\n    background:#fff;\n    line-height:1.75;\n    font-size:17px;\n}\n\nh1{\n    font-size:32px;\n    font-weight:500;\n    margin:0 0 28px;\n}\n\nh2{\n    font-size:24px;\n    font-weight:500;\n    margin:42px 0 16px;\n}\n\nh3{\n    font-size:19px;\n    font-weight:600;\n    margin:30px 0 10px;\n}\n\np{\n    margin:0 0 18px;\n}\n\nstrong{\n    font-weight:600;\n}\n</style>\n</head>\n\n<body>\n\n<h1>A Masterclass in Tactile Simulation</h1>\n\n<p>\nThe moment you launch <strong>Jaiho Slots</strong>, you are welcomed by a clean,\nminimal interface instead of a crowded dashboard. Every element has been\ndesigned to feel calm, responsive and easy to use. The application recreates\nthe classic virtual arcade experience with a strong emphasis on realistic\nmotion, visual polish and satisfying interaction.\n</p>\n\n<p>\nEvery action—from selecting your virtual points to starting a spin—responds\nwith smooth animations and carefully tuned feedback that gives each interaction\na sense of depth and weight. The result is a polished, risk-free entertainment\nexperience created for players who simply want to relax and enjoy high-quality\nsoftware craftsmanship.\n</p>\n\n<h2>Arcade Environments</h2>\n\n<h3>Ember Forge</h3>\n\n<p>\nStep into a glowing blacksmith's workshop where the reels are represented by\nlarge iron gears. Each spin builds visible momentum before gradually slowing\nunder realistic simulated friction. Winning combinations lock the gears into\nplace with dramatic visual effects, accompanied by bursts of steam and glowing\nmolten particles that bring the forge to life.\n</p>\n\n<h3>Orbit Zero</h3>\n\n<p>\nOrbit Zero transforms the traditional spinning mechanic into a zero-gravity\nexperience. Floating magnetic spheres move freely through space before\nstabilising into position. Successful combinations trigger a beautiful magnetic\npulse that ripples through the environment, briefly distorting the surrounding\nstars for a futuristic visual effect.\n</p>\n\n<h3>Emerald Canopy</h3>\n\n<p>\nDesigned for a calm and relaxing atmosphere, Emerald Canopy places players high\nabove the rainforest floor. Wooden symbols suspended from vines gently sway\nwith simulated wind as each spin takes place. Winning moments are highlighted\nby falling leaves, soft environmental animation and peaceful rainforest\nambience, creating a comfortable experience ideal for unwinding.\n</p>\n\n</body>\n</html>",
    "custom_admin_box_heading": "",
    "release_notes": "",
    "is_new": false,
    "seo_keywords": "jaiho slots download, 3D reel simulator, offline casual slots, rummydex arcade, high frame rate slots, battery safe games",
    "serial_number": 7,
    "link_configured": false,
    "custom_admin_box_html": "",
    "screenshots": [],
    "faqs": [
      {
        "question": "Question: Are there any performance drops when transitioning between the different 3D rooms?",
        "answer": "Answer: Zero. Jaiho Slots utilizes background asset streaming. When you are playing in one room, the engine quietly loads the textures for the next room into your device's RAM cache. When you switch modes, the transition is instantaneous and completely seamless."
      },
      {
        "answer": "Answer: Incredibly accurate. The developers utilized a rigid-body physics framework to calculate the rotational mass of the iron gears. The speed at which the reels stop is directly tied to the simulated weight of the 3D models, providing an unmatched sense of digital realism.",
        "question": "Question: How accurate is the physics simulation in the Ember Forge mode?"
      },
      {
        "answer": "Answer: The application is built with a binaural audio engine. If you play through standard phone speakers, you get a flattened, optimized stereo mix. However, the moment you connect headphones, the engine unlocks full 360-degree spatial audio, allowing you to hear environmental details like wind or mechanical shifting directly behind or beside you.",
        "question": "Question: Why does the audio sound different when I wear headphones?"
      }
    ],
    "is_hot": false,
    "video_url": "",
    "id": "4yt0f4yd0",
    "seo_description": "Download Jaiho Slots for a premium 3D arcade experience. Enjoy lag-free 120Hz animations, spatial acoustics, and safe, offline casual gameplay.",
    "developer": "Horizon Play Studios",
    "og_image_url": "",
    "canonical_url": "",
    "file_size": "70",
    "is_coming_soon": false,
    "idea_box_msg": "PRO TIP: Dive into the \"Accessibility\" menu to fine-tune the haptic feedback. You can increase the vibration intensity for the heavy Ember Forge mode while turning it down for the relaxing Emerald Canopy mode, creating a customized tactile experience.",
    "category": "All app, Yono",
    "slug": "jaiho-slots",
    "features_html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Core Architecture & Feature Deep-Dive</title>\n<style>\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    font-family: Roboto, Arial, sans-serif;\n    color: #202124;\n    background: #ffffff;\n    max-width: 740px;\n    margin: 0 auto;\n    padding: 48px 24px 96px;\n    line-height: 1.7;\n    font-size: 17px;\n  }\n\n  h1 {\n    font-size: 28px;\n    font-weight: 400;\n    margin: 0 0 8px;\n  }\n\n  .updated {\n    color: #5f6368;\n    font-size: 15px;\n    margin-bottom: 32px;\n  }\n\n  h2 {\n    font-size: 20px;\n    font-weight: 500;\n    margin: 36px 0 12px;\n  }\n\n  p {\n    margin: 0 0 16px;\n  }\n\n  ul {\n    margin: 0 0 16px;\n    padding-left: 22px;\n  }\n\n  li {\n    margin-bottom: 8px;\n  }\n\n  strong {\n    font-weight: 500;\n  }\n\n  hr {\n    border: none;\n    border-top: 1px solid #dadce0;\n    margin: 40px 0;\n  }\n\n  .section-label {\n    color: #5f6368;\n  }\n</style>\n</head>\n<body>\n\n  <h1>Core Architecture &amp; Feature Deep-Dive</h1>\n  <div class=\"updated\">Last updated: July 26, 2026</div>\n\n  <p>This page describes the underlying systems that power the application's spin experience, thermal management, and audio behavior.</p>\n\n  <hr>\n\n  <h2>1. Procedural Animation Framework</h2>\n  <p>Instead of using pre-rendered video files, the app generates every spin in real time. This ensures that no two reel stops look exactly the same, providing a deeply organic and unpredictable visual flow.</p>\n\n  <h2>2. Thermal-Capped Processing Engine</h2>\n  <p>The application actively monitors your device's internal temperature. If it detects thermal buildup, it seamlessly reduces background anti-aliasing without dropping the core 60FPS/120FPS framerate, ensuring your phone stays cool during long sessions.</p>\n\n  <h2>3. Dynamic Audio Mixing</h2>\n  <p>The app utilizes a multi-layered audio engine. Background ambient tracks dynamically lower their volume the moment the reels begin spinning, bringing the sharp, mechanical sound of the tumblers directly to the forefront of your speakers.</p>\n\n</body>\n</html>\n",
    "name": "JAIHO SLOTS",
    "target_region": "",
    "red_box_msg": "",
    "rating": 4.2,
    "safety_status": "Verified",
    "created_at": "2026-05-20T03:53:24.482Z"
  },
  {
    "og_image_url": "",
    "developer": "Apex Digital Labs",
    "file_size": "54",
    "canonical_url": "",
    "video_url": "",
    "is_hot": false,
    "seo_description": "Download Boss Rummy for a premium, 120Hz digital tabletop experience. Featuring hyper-realistic material physics, dynamic environmental rendering, and offline logic modes.",
    "id": "9r044fyi0",
    "category": "All app, Yono",
    "slug": "boss-rummy",
    "is_coming_soon": false,
    "idea_box_msg": "🟢 PRO TIP: If you are using a modern flagship smartphone, dive into the graphics settings and enable \"Material High-Fidelity.\" This unlocks ultra-resolution textures for the playing cards, allowing you to actually see the microscopic paper grain and foil reflections when you tilt your device.",
    "safety_status": "Verified",
    "created_at": "2026-05-20T03:56:42.075Z",
    "target_region": "",
    "name": "BOSS RUMMY",
    "features_html": "<h2>Core Architecture &amp; Features</h2>\n\n<h3>Thermodynamic UI Engine</h3>\n\n<p>\nBoss Rummy is built on an intelligent rendering system designed to deliver a\nsmooth and responsive experience across a wide range of devices. Visual effects\nsuch as ambient shadows and background animations are adjusted automatically to\nmaintain consistent performance while helping to minimise unnecessary hardware\nload.\n</p>\n\n<h3>Hyper-Realistic Material Physics</h3>\n\n<p>\nEvery card, chip and token is presented using detailed three-dimensional\ngraphics rather than simple flat artwork. Carefully tuned lighting, reflections\nand material effects create realistic surfaces, giving every virtual object a\nsolid, premium appearance throughout the experience.\n</p>\n\n<h3>Adaptive Offline Experience</h3>\n\n<p>\nBoss Rummy includes an offline mode that allows users to continue enjoying the\napplication without an internet connection. Intelligent game logic adjusts to\ndifferent play styles over time, helping provide a varied and engaging\nexperience whenever you play.\n</p>",
    "rating": 4.1,
    "red_box_msg": "",
    "is_featured": false,
    "seo_title": "Boss Rummy - Executive 3D Tabletop & Strategy Simulator",
    "yellow_box_msg": "",
    "custom_admin_box_heading": "Test ",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877706/download_6_mj83ms.webp",
    "description_html": "<h2>The Executive Digital Lounge</h2>\n\n<p>\nBoss Rummy offers a clean, modern interface designed to keep the focus on\nstrategy and ease of use. Every screen is carefully organised to provide a\ncomfortable, distraction-free experience with smooth navigation and clear\nvisual presentation.\n</p>\n\n<p>\nFrom dealing a hand to arranging your cards, every interaction is enhanced with\nfluid animations and responsive visual feedback. Subtle transitions and refined\nmotion create a natural experience while maintaining excellent performance\nacross supported devices.\n</p>\n\n<p>\nBuilt with reliability, accessibility and thoughtful design in mind, Boss\nRummy provides a polished, risk-free digital environment where visual quality\nand responsive interaction work together to create an enjoyable playing\nexperience.\n</p>\n\n<h2>Tabletop Environments</h2>\n\n<h3>The Obsidian Boardroom</h3>\n\n<p>\nExperience a sophisticated tabletop inspired by polished volcanic stone.\nCarefully balanced lighting, refined reflections and soft shadows give every\ncard and game element a premium appearance while maintaining excellent visual\nclarity throughout each session.\n</p>\n\n<h3>The Alpine Conservatory</h3>\n\n<p>\nPlay within a peaceful glass conservatory surrounded by a scenic mountain\nlandscape. Gentle weather effects, subtle environmental animation and calming\nambient sounds create a relaxing atmosphere that complements every game without\ndistracting from the gameplay.\n</p>\n\n<h3>The Quantum Grid</h3>\n\n<p>\nDesigned for speed and simplicity, Quantum Grid features a clean, high-contrast\ninterface with minimal visual effects. Its streamlined presentation helps\nplayers focus on quick decisions while delivering a smooth, efficient and\nresponsive experience.\n</p>",
    "version": "2.5V",
    "seo_keywords": "",
    "serial_number": 8,
    "release_notes": "",
    "is_new": false,
    "custom_admin_box_html": "<h2>The Executive Digital Lounge</h2>\n\n<p>\nBoss Rummy presents a clean, distraction-free interface designed for players\nwho appreciate clarity and thoughtful design. Every screen is carefully\narranged to create a calm, focused environment where navigation feels simple,\ncomfortable and intuitive.\n</p>\n\n<p>\nFrom dealing a hand to organising your cards, every interaction is supported by\nsmooth animations and responsive visual feedback. The interface is designed to\nfeel natural and consistent, helping players stay focused on the experience\nwithout unnecessary visual clutter.\n</p>\n\n<p>\nBuilt with performance, accessibility and modern design principles in mind,\nBoss Rummy provides a polished, risk-free digital environment that combines\nrefined aesthetics with a responsive and enjoyable user experience.\n</p>",
    "faqs": [
      {
        "question": "Question: Can I fully customize the visual materials of the tabletop?",
        "answer": "Answer: Yes. Boss Rummy features a comprehensive \"Material Vault.\" As you progress through the offline logic puzzles, you unlock new 3D textures for your environment, allowing you to swap between polished mahogany, brushed aluminum, and matte carbon fiber surfaces."
      },
      {
        "question": "Question: How does the algorithmic opponent work when I am offline?",
        "answer": "Answer: Instead of using fixed, predictable scripts, the offline AI analyzes your discard patterns and sorting speed. If you play aggressively, the AI adjusts its logic to play defensively, ensuring that the puzzle remains engaging and strictly skill-based without needing to connect to an external server"
      },
      {
        "question": "Question: Is the framerate locked, or can it adapt to my display?",
        "answer": "Answer: The app features an unlocked variable refresh rate (VRR). If your device supports it, the engine will dynamically scale up to 120Hz while you are actively touching and moving pieces for maximum smoothness, and drop to 10Hz when you are simply looking at the screen, massively saving your battery life."
      }
    ],
    "screenshots": [],
    "link_configured": false
  },
  {
    "seo_description": "",
    "id": "5b7fj0cq7",
    "is_hot": false,
    "video_url": "",
    "canonical_url": "",
    "file_size": "79",
    "developer": "Addi",
    "og_image_url": "",
    "idea_box_msg": "",
    "is_coming_soon": true,
    "slug": "rummy-91",
    "category": "Yono, All app",
    "red_box_msg": "",
    "rating": 4.9,
    "features_html": "",
    "name": "RUMMY 91",
    "target_region": "",
    "created_at": "2026-05-20T04:01:04.611Z",
    "safety_status": "Verified",
    "yellow_box_msg": "",
    "seo_title": "",
    "is_featured": false,
    "version": "2.0.6",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877812/download_22_vgi4h1.webp",
    "custom_admin_box_heading": "",
    "is_new": false,
    "release_notes": "",
    "serial_number": 9,
    "seo_keywords": "",
    "link_configured": false,
    "screenshots": [],
    "faqs": [],
    "custom_admin_box_html": ""
  },
  {
    "red_box_msg": "",
    "rating": 3.9,
    "features_html": "",
    "name": "GOGO RUMMY ",
    "target_region": "",
    "safety_status": "Verified",
    "created_at": "2026-05-20T06:58:27.643Z",
    "idea_box_msg": "",
    "is_coming_soon": true,
    "slug": "gogo-rummy",
    "category": "Yono, All app",
    "id": "ieam3hkbq",
    "seo_description": "",
    "is_hot": false,
    "video_url": "",
    "canonical_url": "",
    "file_size": "65",
    "developer": "Sk varba",
    "og_image_url": "",
    "link_configured": false,
    "screenshots": [],
    "faqs": [],
    "custom_admin_box_html": "",
    "is_new": false,
    "release_notes": "",
    "serial_number": 10,
    "seo_keywords": "",
    "version": "5.0",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877895/download_23_xv95ei.webp",
    "custom_admin_box_heading": "",
    "yellow_box_msg": "",
    "seo_title": "",
    "is_featured": false
  },
  {
    "link_configured": false,
    "screenshots": [],
    "faqs": [],
    "custom_admin_box_html": "",
    "is_new": false,
    "release_notes": "",
    "serial_number": 11,
    "seo_keywords": "",
    "version": "1.8",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877977/download_25_tdxkii.webp",
    "custom_admin_box_heading": "",
    "yellow_box_msg": "",
    "seo_title": "",
    "is_featured": false,
    "red_box_msg": "",
    "rating": 4.6,
    "features_html": "",
    "name": "CLUB INR",
    "target_region": "",
    "safety_status": "Verified",
    "created_at": "2026-05-20T08:02:40.971Z",
    "idea_box_msg": "",
    "is_coming_soon": true,
    "slug": "club-inr",
    "category": "Yono, All app",
    "id": "5j5b7qbrw",
    "seo_description": "",
    "is_hot": false,
    "video_url": "",
    "canonical_url": "",
    "file_size": "75",
    "developer": "S.A vejay",
    "og_image_url": ""
  },
  {
    "link_configured": false,
    "custom_admin_box_html": "",
    "faqs": [],
    "screenshots": [],
    "release_notes": "",
    "is_new": false,
    "seo_keywords": "",
    "serial_number": 12,
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784878050/download_26_awtrna.webp",
    "version": "1.8",
    "description_html": "<p>A new application.</p>",
    "custom_admin_box_heading": "",
    "seo_title": "",
    "yellow_box_msg": "",
    "is_featured": false,
    "features_html": "",
    "name": "ABC Rummy ",
    "target_region": "",
    "red_box_msg": "",
    "rating": 3.9,
    "created_at": "2026-05-26T07:04:36.330Z",
    "safety_status": "Verified",
    "idea_box_msg": "",
    "is_coming_soon": true,
    "category": "Yono, All app",
    "slug": "abc-rummy",
    "is_hot": false,
    "video_url": "",
    "seo_description": "",
    "id": "f4ktp4dfi",
    "developer": "Addi",
    "og_image_url": "",
    "canonical_url": "",
    "file_size": "61"
  },
  {
    "developer": "AB Arora",
    "og_image_url": "",
    "canonical_url": "",
    "file_size": "54",
    "is_hot": false,
    "video_url": "",
    "seo_description": "",
    "id": "4w1yxs6mm",
    "created_at": "2026-05-26T07:09:01.068Z",
    "safety_status": "Verified",
    "features_html": "",
    "name": "777.Rummy",
    "target_region": "",
    "rating": 5,
    "red_box_msg": "",
    "category": "Yono, All app",
    "slug": "777-rummy",
    "idea_box_msg": "",
    "is_coming_soon": true,
    "custom_admin_box_heading": "",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784878294/download_27_ex1vzp.webp",
    "version": "1.6",
    "description_html": "<p>A new application.</p>",
    "is_featured": false,
    "seo_title": "",
    "yellow_box_msg": "",
    "custom_admin_box_html": "",
    "screenshots": [],
    "faqs": [],
    "link_configured": false,
    "seo_keywords": "",
    "serial_number": 13,
    "release_notes": "",
    "is_new": false
  },
  {
    "is_hot": false,
    "video_url": "",
    "seo_description": "",
    "id": "w1sttlwv7",
    "developer": "AZ ever",
    "og_image_url": "",
    "canonical_url": "",
    "file_size": "59",
    "features_html": "",
    "name": "EVER 777",
    "target_region": "",
    "rating": 4,
    "red_box_msg": "",
    "created_at": "2026-05-26T07:12:55.821Z",
    "safety_status": "Verified",
    "is_coming_soon": true,
    "idea_box_msg": "",
    "category": "Yono",
    "slug": "ever-777",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784878592/download_28_mhxps5.webp",
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
    "serial_number": 14
  },
  {
    "safety_status": "Verified",
    "created_at": "2026-05-26T07:16:08.600Z",
    "rating": 4,
    "red_box_msg": "",
    "name": "Game Rummy",
    "target_region": "",
    "features_html": "",
    "slug": "game-rummy",
    "category": "Yono",
    "idea_box_msg": "",
    "is_coming_soon": true,
    "file_size": "75",
    "canonical_url": "",
    "og_image_url": "",
    "developer": "Raj dav",
    "seo_description": "",
    "id": "dp2lcn2ae",
    "video_url": "",
    "is_hot": false,
    "faqs": [],
    "screenshots": [],
    "custom_admin_box_html": "",
    "link_configured": false,
    "serial_number": 15,
    "seo_keywords": "",
    "is_new": false,
    "release_notes": "",
    "custom_admin_box_heading": "",
    "description_html": "<p>A new application.</p>",
    "version": "2.0",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784878692/download_29_j7jlxk.webp",
    "is_featured": false,
    "yellow_box_msg": "",
    "seo_title": ""
  },
  {
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784878734/download_30_oz8znk.webp",
    "version": "1.9",
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
    "serial_number": 16,
    "is_hot": false,
    "video_url": "",
    "id": "4lgypb90h",
    "seo_description": "",
    "developer": "Addi",
    "og_image_url": "",
    "canonical_url": "",
    "file_size": "54",
    "features_html": "",
    "target_region": "",
    "name": "Hi Rummy ",
    "rating": 4.1,
    "red_box_msg": "",
    "created_at": "2026-05-26T07:18:29.456Z",
    "safety_status": "Verified",
    "idea_box_msg": "",
    "is_coming_soon": true,
    "category": "Yono",
    "slug": "hi-rummy"
  },
  {
    "screenshots": [],
    "faqs": [
      {
        "answer": "Answer: We conduct a Variable Generation Audit to monitor how efficiently the localized application calculates its randomized data arrays. By evaluating asynchronous matrix permutation, we establish a technical baseline for how smoothly the engine computes unpredictable logic sequences off the main thread without causing the visual interface to stutter.",
        "question": "How does the registry evaluate Asynchronous Matrix Permutation in 567 Slots?"
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
    "custom_admin_box_html": "<!-- SAFE RUMMYAPP ONLINE \"ADVANCED TECHNICAL DIAGNOSTIC\" MODULE -->\n<!-- Bright Futuristic Modern Edition -->\n\n<section class=\"rs-tech-wrapper\">\n\n    <!-- TOP SYSTEM NOTIFICATION -->\n    <div class=\"rs-tech-alert-top\">\n        <span class=\"rs-tech-pulse\"></span> ✦ ADVANCED DIAGNOSTICS // ENGINE & LOGIC TEARDOWN\n    </div>\n\n    <!-- MAIN DEEP-DIVE INTRO CARD -->\n    <div class=\"rs-tech-glass-card rs-tech-hero\">\n        <div class=\"rs-tech-header\">\n            <h2>Technical Architecture Review</h2>\n            <span class=\"rs-tech-badge\">System Teardown</span>\n        </div>\n        \n        <p class=\"rs-tech-lead-text\">\n            Evaluating a virtual application requires probing beneath its graphical shell. In this advanced diagnostic, we bypass the marketing aesthetics to analyze the application's core rendering engine, memory allocation, and backend logic systems. By measuring frame stability, cryptographic randomization, and input latency, we provide a mathematically sound breakdown of how this application truly performs under heavy operational stress. \n        </p>\n    </div>\n\n    <!-- TECHNICAL DATA GRID -->\n    <div class=\"rs-tech-section-title\">Core Engine Metrics</div>\n    \n    <div class=\"rs-tech-grid\">\n        \n        <!-- Metric 1: RNG Logic -->\n        <div class=\"rs-tech-glass-box tech-border-slate\">\n            <div class=\"rs-tech-icon tech-glow-slate\">⚙️</div>\n            <h3>Cryptographic RNG Protocols</h3>\n            <p>True tactical simulations rely on pristine randomization. We analyze the application's Random Number Generator (RNG) logic for cryptographic seeding and sequence entropy. A robust, server-side RNG architecture ensures that card drops, virtual shuffles, and arcade mechanics are entirely immune to pattern manipulation, providing a mathematically fair environment for all practice rounds.</p>\n        </div>\n\n        <!-- Metric 2: Input Latency -->\n        <div class=\"rs-tech-glass-box tech-border-cyan\">\n            <div class=\"rs-tech-icon tech-glow-cyan\">⚡</div>\n            <h3>Input Latency & Event Listeners</h3>\n            <p>A seamless interface is dictated by response time. We measure the application's touch-start and touch-end event listeners to ensure input latency remains strictly under the 45-millisecond threshold. By minimizing payload packet delays between the client UI and the simulation server, the application translates physical screen taps into instantaneous digital reactions.</p>\n        </div>\n\n        <!-- Metric 3: Rendering Pipeline -->\n        <div class=\"rs-tech-glass-box tech-border-emerald\">\n            <div class=\"rs-tech-icon tech-glow-emerald\">🎥</div>\n            <h3>WebGL & Frame Rendering</h3>\n            <p>High-fidelity 3D environments must not compromise frame rates. We evaluate the application's draw call batching and texture compression within its WebGL/Canvas rendering pipeline. Proper optimization prevents Z-fighting and ensures a stable 60 FPS (Frames Per Second) output, preventing micro-stutters during intense, high-speed layout animations.</p>\n        </div>\n\n        <!-- Metric 4: Heap Memory -->\n        <div class=\"rs-tech-glass-box tech-border-indigo\">\n            <div class=\"rs-tech-icon tech-glow-indigo\">💾</div>\n            <h3>Heap Memory & CPU Overhead</h3>\n            <p>Bloated code leads to severe device throttling. We track the application's background memory footprint and garbage collection efficiency. A well-architected app flushes unused cache data effectively, ensuring that extended gameplay sessions do not result in CPU overheating, battery hemorrhaging, or forced application crashes on mid-tier hardware.</p>\n        </div>\n\n    </div>\n\n    <!-- TECHNICAL SUMMARY FOOTER -->\n    <div class=\"rs-tech-footer-card\">\n        <div class=\"rs-tech-flex-row\">\n            <div class=\"rs-tech-text-block\">\n                <h4>Data Verification Clause</h4>\n                <p>The diagnostic data presented in this technical review is based on isolated benchmarking. Application developers routinely deploy over-the-air (OTA) patches that may optimize or alter these engine parameters. We recommend running regular updates via authorized digital storefronts to maintain optimal software stability.</p>\n            </div>\n            \n            <div class=\"rs-tech-divider-vertical\"></div>\n\n            <div class=\"rs-tech-text-block\">\n                <h4>SEO & Search Visibility Note</h4>\n                <p>RummyApp Online actively structures our technical teardowns to provide the most transparent, data-driven insights available on the web. By focusing strictly on code architecture, UI mechanics, and tactical execution, we ensure our registry remains the definitive index for digital performance analysis.</p>\n            </div>\n        </div>\n    </div>\n\n</section>\n\n<style>\n@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@400;500;600&display=swap');\n\n:root {\n    --primary: #0057FF;\n    --accent: #00C2FF;\n    --accent2: #7B2FFF;\n    --emerald: #00C98A;\n    --amber: #FF6B2B;\n    --text-main: #0A0F2C;\n    --text-muted: #4A5580;\n    --surface: #FFFFFF;\n    --surface-alt: #F0F5FF;\n    --border: #D6E0FF;\n    --glow-blue: rgba(0, 87, 255, 0.12);\n    --glow-cyan: rgba(0, 194, 255, 0.15);\n    --glow-purple: rgba(123, 47, 255, 0.12);\n    --glow-green: rgba(0, 201, 138, 0.12);\n}\n\n.rs-tech-wrapper {\n    width: 100%;\n    margin: 40px 0;\n    font-family: 'DM Sans', sans-serif;\n    background: linear-gradient(145deg, #EEF3FF 0%, #F7F0FF 40%, #E8F8FF 100%);\n    padding: 40px;\n    border-radius: 24px;\n    box-sizing: border-box;\n    color: var(--text-main);\n    position: relative;\n    overflow: hidden;\n    box-shadow: 0 20px 60px rgba(0, 87, 255, 0.1), 0 4px 16px rgba(0,0,0,0.06);\n    border: 1px solid var(--border);\n}\n\n.rs-tech-wrapper::before {\n    content: '';\n    position: absolute;\n    top: 0; left: 0; right: 0; bottom: 0;\n    background-image: radial-gradient(circle, rgba(0, 87, 255, 0.08) 1px, transparent 1px);\n    background-size: 28px 28px;\n    pointer-events: none;\n    z-index: 0;\n}\n\n.rs-tech-wrapper::after {\n    content: '';\n    position: absolute;\n    top: -80px;\n    right: -80px;\n    width: 320px;\n    height: 320px;\n    background: radial-gradient(circle, rgba(123, 47, 255, 0.12) 0%, transparent 70%);\n    border-radius: 50%;\n    pointer-events: none;\n    z-index: 0;\n}\n\n.rs-tech-wrapper * {\n    box-sizing: border-box;\n    position: relative;\n    z-index: 1;\n}\n\n.rs-tech-alert-top {\n    display: inline-flex;\n    align-items: center;\n    gap: 12px;\n    background: linear-gradient(90deg, rgba(0,87,255,0.08), rgba(0,194,255,0.08));\n    color: var(--primary);\n    padding: 10px 22px;\n    border-radius: 100px;\n    margin-bottom: 32px;\n    font-size: 11px;\n    font-weight: 800;\n    font-family: 'Syne', sans-serif;\n    letter-spacing: 2px;\n    text-transform: uppercase;\n    border: 1px solid rgba(0, 87, 255, 0.25);\n    box-shadow: 0 4px 16px rgba(0, 87, 255, 0.1);\n}\n\n.rs-tech-pulse {\n    width: 8px; height: 8px;\n    background: linear-gradient(135deg, var(--primary), var(--accent));\n    border-radius: 50%;\n    animation: tech-pulse 2s infinite;\n    flex-shrink: 0;\n}\n\n@keyframes tech-pulse {\n    0% { box-shadow: 0 0 0 0 rgba(0, 87, 255, 0.6); }\n    70% { box-shadow: 0 0 0 10px rgba(0, 87, 255, 0); }\n    100% { box-shadow: 0 0 0 0 rgba(0, 87, 255, 0); }\n}\n\n.rs-tech-glass-card {\n    background: rgba(255, 255, 255, 0.85);\n    backdrop-filter: blur(20px);\n    -webkit-backdrop-filter: blur(20px);\n    border-radius: 20px;\n    padding: 40px;\n    border: 1px solid rgba(0, 87, 255, 0.12);\n    margin-bottom: 40px;\n    box-shadow: 0 8px 32px rgba(0, 87, 255, 0.07), 0 1px 4px rgba(0,0,0,0.04);\n}\n\n.rs-tech-hero {\n    border-top: 3px solid transparent;\n    background-clip: padding-box;\n    position: relative;\n}\n\n.rs-tech-hero::before {\n    content: '';\n    position: absolute;\n    top: 0; left: 0; right: 0;\n    height: 3px;\n    background: linear-gradient(90deg, var(--primary), var(--accent), var(--accent2));\n    border-radius: 20px 20px 0 0;\n    z-index: 2;\n}\n\n.rs-tech-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 15px;\n    flex-wrap: wrap;\n    margin-bottom: 25px;\n    padding-bottom: 25px;\n    border-bottom: 1px solid var(--border);\n}\n\n.rs-tech-header h2 {\n    font-size: 32px;\n    font-weight: 800;\n    margin: 0;\n    font-family: 'Syne', sans-serif;\n    background: linear-gradient(135deg, var(--text-main) 0%, var(--primary) 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    letter-spacing: -0.5px;\n}\n\n.rs-tech-badge {\n    padding: 8px 20px;\n    border-radius: 100px;\n    background: linear-gradient(135deg, var(--primary), var(--accent2));\n    color: #fff;\n    font-size: 12px;\n    font-weight: 700;\n    font-family: 'Syne', sans-serif;\n    text-transform: uppercase;\n    letter-spacing: 1.5px;\n    box-shadow: 0 4px 16px rgba(0, 87, 255, 0.3);\n}\n\n.rs-tech-lead-text {\n    font-size: 16px;\n    line-height: 1.9;\n    color: var(--text-muted);\n    margin: 0;\n}\n\n.rs-tech-section-title {\n    font-size: 22px;\n    font-weight: 800;\n    font-family: 'Syne', sans-serif;\n    color: var(--text-main);\n    margin: 50px 0 25px 0;\n    position: relative;\n    padding-left: 18px;\n}\n\n.rs-tech-section-title::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 2px;\n    bottom: 2px;\n    width: 4px;\n    background: linear-gradient(180deg, var(--primary), var(--accent));\n    border-radius: 4px;\n}\n\n.rs-tech-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n    gap: 20px;\n    margin-bottom: 40px;\n}\n\n.rs-tech-glass-box {\n    background: rgba(255, 255, 255, 0.9);\n    border: 1px solid var(--border);\n    border-radius: 16px;\n    padding: 30px 25px;\n    text-align: left;\n    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n    box-shadow: 0 4px 16px rgba(0, 87, 255, 0.05);\n}\n\n.rs-tech-glass-box:hover {\n    transform: translateY(-6px);\n    box-shadow: 0 16px 40px rgba(0, 87, 255, 0.12);\n}\n\n.tech-border-slate:hover { border-color: #94a3b8; box-shadow: 0 16px 40px rgba(100,116,139,0.15); }\n.tech-border-cyan:hover { border-color: var(--accent); box-shadow: 0 16px 40px var(--glow-cyan); }\n.tech-border-emerald:hover { border-color: var(--emerald); box-shadow: 0 16px 40px var(--glow-green); }\n.tech-border-indigo:hover { border-color: var(--accent2); box-shadow: 0 16px 40px var(--glow-purple); }\n\n.rs-tech-icon {\n    font-size: 24px;\n    margin-bottom: 20px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 60px;\n    height: 60px;\n    border-radius: 14px;\n    border: 1px solid var(--border);\n}\n\n.tech-glow-slate { background: linear-gradient(135deg, #f1f5f9, #e2e8f0); }\n.tech-glow-cyan  { background: linear-gradient(135deg, #e0f9ff, #b8f0ff); }\n.tech-glow-emerald { background: linear-gradient(135deg, #d4f9ed, #a7f3d0); }\n.tech-glow-indigo { background: linear-gradient(135deg, #ede9fe, #ddd6fe); }\n\n.rs-tech-glass-box h3 {\n    margin: 0 0 12px 0;\n    font-size: 17px;\n    font-family: 'Syne', sans-serif;\n    color: var(--text-main);\n    font-weight: 700;\n}\n\n.rs-tech-glass-box p {\n    margin: 0;\n    font-size: 14.5px;\n    line-height: 1.75;\n    color: var(--text-muted);\n}\n\n.rs-tech-footer-card {\n    background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(240,245,255,0.95));\n    border: 1px solid var(--border);\n    border-radius: 16px;\n    padding: 35px;\n    box-shadow: 0 4px 20px rgba(0, 87, 255, 0.06);\n    position: relative;\n    overflow: hidden;\n}\n\n.rs-tech-footer-card::before {\n    content: '';\n    position: absolute;\n    bottom: 0; left: 0; right: 0;\n    height: 3px;\n    background: linear-gradient(90deg, var(--accent2), var(--primary), var(--accent));\n    border-radius: 0 0 16px 16px;\n}\n\n.rs-tech-flex-row {\n    display: flex;\n    gap: 35px;\n    align-items: stretch;\n}\n\n.rs-tech-text-block { flex: 1; }\n\n.rs-tech-divider-vertical {\n    width: 1px;\n    background: linear-gradient(180deg, transparent, var(--border), transparent);\n}\n\n.rs-tech-text-block h4 {\n    margin: 0 0 10px 0;\n    font-size: 16px;\n    font-weight: 700;\n    font-family: 'Syne', sans-serif;\n    color: var(--text-main);\n}\n\n.rs-tech-text-block p {\n    margin: 0;\n    font-size: 14px;\n    line-height: 1.8;\n    color: var(--text-muted);\n}\n\n@media(max-width: 900px) {\n    .rs-tech-flex-row { flex-direction: column; gap: 25px; }\n    .rs-tech-divider-vertical { display: none; }\n    .rs-tech-text-block { border-bottom: 1px solid var(--border); padding-bottom: 20px; }\n    .rs-tech-text-block:last-child { border-bottom: none; padding-bottom: 0; }\n}\n\n@media(max-width: 768px) {\n    .rs-tech-wrapper { padding: 20px; }\n    .rs-tech-glass-card { padding: 25px; }\n    .rs-tech-header h2 { font-size: 24px; }\n    .rs-tech-grid { grid-template-columns: 1fr; }\n    .rs-tech-glass-box, .rs-tech-footer-card { padding: 22px; }\n}\n</style>",
    "link_configured": true,
    "serial_number": 17,
    "seo_keywords": "INR Rummy render-thread isolation, input-polling frequency, frame-buffer pacing audit, INR Rummy system diagnostic",
    "is_new": false,
    "release_notes": "Addressed localized desynchronization within the visual pacing engine. The client-side architecture now effectively utilizes render-thread isolation, ensuring that background cryptographic handshakes no longer induce micro-stutters during rapid drag-and-drop tactical inputs.",
    "custom_admin_box_heading": "[ ✦ RENDER-THREAD ISOLATION // FRAME-BUFFER AUDIT ]",
    "description_html": "<!-- SAFE INR RUMMY GLASSMORPHISM LISTING -->\n<!-- Fully scoped, uniquely written, safe for your website UI, E-Sports Compliant -->\n\n<section class=\"rs-inrr-wrapper\">\n\n    <div class=\"rs-inrr-glass-card\">\n\n        <!-- HEADER -->\n        <div class=\"rs-inrr-header\">\n            <h2>INR Rummy Interface</h2>\n            <span class=\"rs-inrr-badge\">National Strategy Arena</span>\n        </div>\n\n        <!-- GLASSY VIRTUAL BONUS SYSTEM -->\n        <div class=\"rs-inrr-bonus-container\">\n            <div class=\"rs-inrr-glass-box highlight-box\">\n                <span class=\"rs-inrr-bonus-title\">Virtual Welcome</span>\n                <span class=\"rs-inrr-bonus-amount\">91K</span>\n                <span class=\"rs-inrr-bonus-sub\">Practice Chips</span>\n            </div>\n            <div class=\"rs-inrr-glass-box\">\n                <span class=\"rs-inrr-bonus-title\">Daily Milestone</span>\n                <span class=\"rs-inrr-bonus-amount\">20K</span>\n                <span class=\"rs-inrr-bonus-sub\">Steady Login Reward</span>\n            </div>\n            <div class=\"rs-inrr-glass-box\">\n                <span class=\"rs-inrr-bonus-title\">Guest Access</span>\n                <span class=\"rs-inrr-bonus-amount\">Instant</span>\n                <span class=\"rs-inrr-bonus-sub\">No Login Needed</span>\n            </div>\n        </div>\n\n        <p class=\"rs-inrr-description\">\n            INR Rummy provides a premium, highly streamlined card platform designed for strategic enthusiasts. Built with a focus on tactical precision and seamless board aesthetics, this digital hub allows you to master classic card formats cleanly. Whether you are practicing layout sorting or refining valid sequences, INR Rummy offers a risk-free, competitive arena to play instantly.\n        </p>\n\n        <!-- SEO ENHANCEMENT: APP DETAILS TABLE -->\n        <div class=\"rs-inrr-section-title\">Platform Specifications</div>\n        <div class=\"rs-inrr-table-wrapper\">\n            <table class=\"rs-inrr-table\">\n                <tbody>\n                    <tr>\n                        <td><strong>Application Name</strong></td>\n                        <td>INR Rummy (Review)</td>\n                        <td><strong>Gaming Category</strong></td>\n                        <td>Card / Strategy Game</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Welcome Reward</strong></td>\n                        <td>91,000 (Virtual Only)</td>\n                        <td><strong>Ongoing Rewards</strong></td>\n                        <td>Tasks & Progression</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Network Play</strong></td>\n                        <td>Guest Multiplayer</td>\n                        <td><strong>Game Lobbies</strong></td>\n                        <td>Casual Practice Tables</td>\n                    </tr>\n                    <tr>\n                        <td><strong>Privacy</strong></td>\n                        <td>No Personal Info Required</td>\n                        <td><strong>Customer Help</strong></td>\n                        <td>24/7 In-App Guide</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n\n        <!-- SEO ENHANCEMENT: FEATURES GRID -->\n        <div class=\"rs-inrr-section-title\">Professional Gaming Features</div>\n        <div class=\"rs-inrr-grid\">\n            <div class=\"rs-inrr-glass-box rounded-style\">\n                <div class=\"rs-inrr-icon\">♦️</div>\n                <h3>Standard Lobbies</h3>\n                <p>Join clear, intuitive virtual rooms where enthusiasts match skills on dedicated practice tables to hone their execution timings.</p>\n            </div>\n            <div class=\"rs-inrr-glass-box rounded-style\">\n                <div class=\"rs-inrr-icon\">🔒</div>\n                <h3>100% Anonymous</h3>\n                <p>Enjoy the card action immediately as a guest player without sharing phone numbers, filling configurations, or utilizing OTP systems.</p>\n            </div>\n            <div class=\"rs-inrr-glass-box rounded-style\">\n                <div class=\"rs-inrr-icon\">🛡️</div>\n                <h3>Standard RNG</h3>\n                <p>Fairness remains fundamental. The card distribution relies on a verified Random Number Generator algorithm to keep dealing purely mathematical.</p>\n            </div>\n            <div class=\"rs-inrr-glass-box rounded-style\">\n                <div class=\"rs-inrr-icon\">📱</div>\n                <h3>Modern Interface</h3>\n                <p>Experience zero visual clutter. Ad-free layouts with crisp responsive sorting features ensure your card melding remains entirely uninterrupted.</p>\n            </div>\n        </div>\n\n        <!-- SEO ENHANCEMENT: HOW TO PLAY -->\n        <div class=\"rs-inrr-section-title\">Steps to Start Your Virtual Practice</div>\n        <div class=\"rs-inrr-glass-box rs-inrr-list-box\">\n            <ol>\n                <li><strong>Launch the App:</strong> Open the official application natively on your smart device.</li>\n                <li><strong>Play Instantly:</strong> Enter the dashboard right away via guest mode without any registration paths.</li>\n                <li><strong>Collect Rewards:</strong> Check your localized points wallet to find your 91K welcome balance ready.</li>\n                <li><strong>Join the Table:</strong> Select your preferred variation tier and test your strategic card arrangements.</li>\n                <li><strong>Track Milestones:</strong> Record your logical victories and evaluate strategy progression on local leaderboards.</li>\n            </ol>\n        </div>\n\n        <!-- SEO ENHANCEMENT: FAQ ACCORDION -->\n        <div class=\"rs-inrr-section-title\">Frequently Asked Questions (FAQs)</div>\n        <div class=\"rs-inrr-faq-container\">\n            <details class=\"rs-inrr-faq\">\n                <summary>Is INR Rummy stable for continuous practice?</summary>\n                <p>Yes. The build is fully optimized to provide lag-free sorting transitions, keeping your training runs steady across basic mobile networks.</p>\n            </details>\n            <details class=\"rs-inrr-faq\">\n                <summary>What makes a Pure Sequence?</summary>\n                <p>A pure sequence consists of three or more consecutive cards belonging to the same identical suit, organized strictly without using a Joker.</p>\n            </details>\n            <details class=\"rs-inrr-faq\">\n                <summary>Do I need to provide my phone number?</summary>\n                <p>No, registration is completely optional. You can experience every practice variant in full guest mode without completing any OTP check.</p>\n            </details>\n        </div>\n\n        <!-- SAFE SEO KEYWORD CLOUD -->\n        <div class=\"rs-inrr-section-title\">Related Search Tags</div>\n        <div class=\"rs-inrr-keywords\">\n            <span>inr rummy</span> <span>inr rummy app</span> <span>inr rummy game</span> <span>inr rummy online</span> <span>inr rummy play</span> <span>inr rummy review</span> <span>inr rummy features</span> <span>inr rummy casual</span> <span>inr rummy interface</span> <span>inr rummy practice</span> <span>inr rummy guest mode</span> <span>inr rummy bonuses</span> <span>inr rummy rewards</span> <span>inr rummy daily check-in</span> <span>inr rummy virtual chips</span> <span>inr rummy welcome bonus</span> <span>inr rummy card game</span> <span>inr rummy strategy</span> <span>inr rummy UI</span> <span>inr rummy leaderboard</span> <span>inr rummy support</span> <span>inr rummy offline</span> <span>inr rummy local play</span> <span>inr rummy mechanics</span> <span>inr rummy gameplay</span> <span>inr rummy variants</span> <span>inr rummy points</span> <span>inr rummy deals</span> <span>inr rummy pool</span> <span>inr rummy RNG</span> <span>inr rummy updates</span> <span>inr rummy latest version</span> <span>inr rummy guide</span> <span>inr rummy tips</span> <span>inr rummy tricks</span> <span>how to play inr rummy</span> <span>win in inr rummy</span> <span>inr rummy safe</span> <span>inr rummy anonymous</span> <span>inr rummy no login</span> <span>inr rummy graphics</span> <span>inr rummy animation</span> <span>inr rummy mobile app</span> <span>inr rummy android</span> <span>inr rummy virtual portal</span> <span>inr rummy skill game</span>\n        </div>\n\n    </div>\n</section>\n\n<style>\n/* SAFE SCOPED CSS - INR RUMMY THEME (DEEP JADE/EMERALD GLASS) */\n\n.rs-inrr-wrapper {\n    width: 100%;\n    margin: 40px 0;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif;\n    background: linear-gradient(145deg, #0a2f1d 0%, #114227 100%);\n    padding: 25px;\n    border-radius: 30px;\n    box-sizing: border-box;\n}\n\n.rs-inrr-wrapper * {\n    box-sizing: border-box;\n}\n\n/* THE GLASS CARD */\n.rs-inrr-glass-card {\n    background: rgba(255, 255, 255, 0.04);\n    backdrop-filter: blur(22px);\n    -webkit-backdrop-filter: blur(22px);\n    border-radius: 24px;\n    padding: 40px;\n    border: 1px solid rgba(46, 204, 113, 0.2);\n    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.6);\n}\n\n.rs-inrr-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 15px;\n    flex-wrap: wrap;\n    margin-bottom: 30px;\n    padding-bottom: 20px;\n    border-bottom: 1px solid rgba(46, 204, 113, 0.3);\n}\n\n.rs-inrr-header h2 {\n    font-size: 38px;\n    font-weight: 900;\n    margin: 0;\n    background: linear-gradient(135deg, #2ecc71, #a3e635);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    letter-spacing: -1px;\n}\n\n.rs-inrr-badge {\n    padding: 8px 22px;\n    border-radius: 4px;\n    background: linear-gradient(135deg, rgba(46, 204, 113, 0.15), rgba(163, 230, 53, 0.05));\n    color: #2ecc71;\n    font-size: 13px;\n    font-weight: 800;\n    border: 1px solid rgba(46, 204, 113, 0.4);\n    text-transform: uppercase;\n    letter-spacing: 1px;\n}\n\n/* GLASSY BOXES */\n.rs-inrr-bonus-container, .rs-inrr-grid {\n    display: grid;\n    gap: 20px;\n    margin-bottom: 35px;\n}\n\n.rs-inrr-bonus-container {\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n}\n\n.rs-inrr-grid {\n    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n}\n\n.rs-inrr-glass-box {\n    background: rgba(255, 255, 255, 0.02);\n    border: 1px solid rgba(46, 204, 113, 0.15);\n    border-radius: 16px; \n    padding: 25px;\n    text-align: left;\n    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);\n    transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;\n}\n\n.rs-inrr-glass-box:hover {\n    transform: translateY(-5px);\n    box-shadow: 0 12px 30px rgba(46, 204, 113, 0.2);\n    border-color: rgba(46, 204, 113, 0.6);\n    background: rgba(255, 255, 255, 0.05);\n}\n\n.rs-inrr-bonus-container .rs-inrr-glass-box {\n    text-align: center;\n}\n\n.highlight-box {\n    background: linear-gradient(135deg, rgba(46, 204, 113, 0.1), rgba(0, 0, 0, 0));\n    border: 1px solid rgba(46, 204, 113, 0.5);\n}\n\n.rs-inrr-bonus-title {\n    display: block;\n    font-size: 13px;\n    font-weight: 800;\n    color: #e0e0e0;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    letter-spacing: 1.5px;\n}\n\n.rs-inrr-bonus-amount {\n    display: block;\n    font-size: 44px;\n    font-weight: 900;\n    background: linear-gradient(135deg, #2ecc71, #ccff33);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    margin-bottom: 8px;\n    line-height: 1;\n}\n\n.rs-inrr-bonus-sub {\n    display: block;\n    font-size: 13px;\n    color: #a0a0a0;\n    font-weight: 500;\n}\n\n.rs-inrr-section-title {\n    font-size: 24px;\n    font-weight: 800;\n    color: #ffffff;\n    margin: 45px 0 25px 0;\n    position: relative;\n    padding-left: 18px;\n}\n\n.rs-inrr-section-title::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    height: 80%;\n    width: 4px;\n    background: linear-gradient(to bottom, #2ecc71, #114227);\n    border-radius: 10px;\n}\n\n.rs-inrr-description {\n    line-height: 1.9;\n    font-size: 16px;\n    color: #e0e0e0;\n    margin-bottom: 30px;\n    padding: 25px;\n    background: rgba(0, 0, 0, 0.35);\n    border-radius: 16px;\n    border-left: 4px solid #2ecc71;\n    box-shadow: inset 0 0 20px rgba(0,0,0,0.5);\n}\n\n/* APP SPECS TABLE */\n.rs-inrr-table-wrapper {\n    overflow-x: auto;\n    margin-bottom: 30px;\n    border-radius: 16px;\n    border: 1px solid rgba(46, 204, 113, 0.2);\n    background: rgba(0, 0, 0, 0.4);\n}\n\n.rs-inrr-table {\n    width: 100%;\n    border-collapse: collapse;\n    font-size: 15px;\n}\n\n.rs-inrr-table td {\n    padding: 18px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n    color: #c0c0c0;\n}\n\n.rs-inrr-table tr:last-child td {\n    border-bottom: none;\n}\n\n.rs-inrr-table td strong {\n    color: #2ecc71;\n}\n\n/* FEATURES GRID ICONS */\n.rs-inrr-icon {\n    font-size: 28px;\n    margin-bottom: 18px;\n    background: linear-gradient(135deg, #1f1f1f, #000000);\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 55px;\n    height: 55px;\n    border-radius: 12px; \n    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);\n    border: 1px solid rgba(46, 204, 113, 0.3);\n}\n\n.rs-inrr-glass-box h3 {\n    margin: 0 0 12px 0;\n    font-size: 19px;\n    color: #ccff33;\n    font-weight: 800;\n}\n\n.rs-inrr-glass-box p {\n    margin: 0;\n    font-size: 15px;\n    line-height: 1.7;\n    color: #b0b0b0;\n}\n\n/* HOW TO LIST */\n.rs-inrr-list-box ol {\n    margin: 0;\n    padding-left: 20px;\n    color: #e0e0e0;\n}\n\n.rs-inrr-list-box li {\n    margin-bottom: 15px;\n    line-height: 1.7;\n    font-size: 15px;\n}\n\n.rs-inrr-list-box li:last-child {\n    margin-bottom: 0;\n}\n\n.rs-inrr-list-box strong {\n    color: #2ecc71;\n}\n\n/* FAQ ACCORDION */\n.rs-inrr-faq-container {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    margin-bottom: 30px;\n}\n\n.rs-inrr-faq {\n    background: rgba(0, 0, 0, 0.4);\n    border: 1px solid rgba(46, 204, 113, 0.2);\n    border-radius: 16px;\n    padding: 18px 22px;\n    transition: all 0.3s ease;\n}\n\n.rs-inrr-faq[open] {\n    background: rgba(46, 204, 113, 0.05);\n    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);\n    border-color: rgba(46, 204, 113, 0.6);\n}\n\n.rs-inrr-faq summary {\n    font-weight: 800;\n    font-size: 16px;\n    color: #2ecc71;\n    cursor: pointer;\n    list-style: none;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.rs-inrr-faq summary::-webkit-details-marker {\n    display: none;\n}\n\n.rs-inrr-faq summary::after {\n    content: '+';\n    font-size: 22px;\n    color: #ffffff;\n    transition: transform 0.3s;\n}\n\n.rs-inrr-faq[open] summary::after {\n    content: '−';\n    transform: rotate(180deg);\n}\n\n.rs-inrr-faq p {\n    margin: 15px 0 0 0;\n    color: #b0b0b0;\n    line-height: 1.7;\n    font-size: 15px;\n    border-top: 1px solid rgba(255, 255, 255, 0.1);\n    padding-top: 15px;\n}\n\n/* KEYWORD FRAMES WITH CUSTOM SCROLLBAR */\n.rs-inrr-keywords {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 12px;\n    max-height: 320px;\n    overflow-y: auto;\n    padding-right: 15px;\n}\n\n.rs-inrr-keywords::-webkit-scrollbar {\n    width: 6px;\n}\n.rs-inrr-keywords::-webkit-scrollbar-track {\n    background: rgba(255, 255, 255, 0.05);\n    border-radius: 10px;\n}\n.rs-inrr-keywords::-webkit-scrollbar-thumb {\n    background: rgba(46, 204, 113, 0.3);\n    border-radius: 10px;\n}\n\n.rs-inrr-keywords span {\n    padding: 9px 18px;\n    border-radius: 8px; \n    background: rgba(0, 0, 0, 0.5); \n    border: 1px solid rgba(46, 204, 113, 0.3); \n    color: #e0e0e0; \n    font-size: 13px;\n    font-weight: 600;\n    transition: all 0.2s ease;\n    cursor: default;\n    box-shadow: 0 2px 5px rgba(0,0,0,0.01);\n}\n\n.rs-inrr-keywords span:hover {\n    background: linear-gradient(135deg, #2ecc71, #a3e635);\n    color: #000000;\n    border-color: #ccff33;\n    transform: translateY(-2px);\n    box-shadow: 0 5px 12px rgba(46, 204, 113, 0.3);\n}\n\n/* MOBILE RESPONSIVENESS */\n@media(max-width: 768px) {\n    .rs-inrr-wrapper {\n        padding: 15px;\n    }\n    .rs-inrr-glass-card {\n        padding: 25px;\n    }\n    .rs-inrr-header h2 {\n        font-size: 30px;\n    }\n    .rs-inrr-table td {\n        display: block;\n        width: 100%;\n        text-align: left;\n        padding: 12px 18px;\n    }\n    .rs-inrr-table td:nth-child(odd) {\n        background: rgba(255, 255, 255, 0.02);\n        border-bottom: none;\n    }\n}\n</style>\n",
    "version": "3.0",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784878806/images_5_kfd5rb.jpg",
    "is_featured": false,
    "yellow_box_msg": "To achieve the seamless input-polling frequencies detailed in this diagnostic, ensure your device's digitizer and active RAM are not bottlenecked by background applications. Render-thread isolation requires sustained, unfragmented memory allocation to dynamically update UI states without dropping touch registrations.",
    "seo_title": "INR Rummy System Architecture: Render-Thread Isolation (2026)",
    "created_at": "2026-05-26T07:21:55.085Z",
    "safety_status": "Verified",
    "rating": 5,
    "red_box_msg": "The render-thread metrics and input-polling speeds analyzed in this audit assume a verified, unmodified software build. Sideloaded APKs inherently corrupt the native isolation logic, resulting in severe frame-dropping and localized execution crashes. Always secure your application binaries exclusively through official developer nodes.",
    "name": "INR Rummy",
    "target_region": "India (Tier 1 & Tier 2 Search Optimization)",
    "features_html": "",
    "slug": "inr-rummy",
    "category": "Yono",
    "idea_box_msg": "Do not force tactical inputs faster than the localized software can poll your hardware. Observe the frame-buffer response time of the interface. Aligning your physical interactions precisely with the engine's internal input-polling rhythm guarantees optimal tactile accuracy and reduces localized input rejection.",
    "is_coming_soon": true,
    "file_size": "79",
    "canonical_url": "https://www.rummydex.com/inr-rummy",
    "og_image_url": "https://13eehe59cj.ucarecd.net/2a718650-0602-495f-9ca4-b13c86e58c02/-/preview/190x190/",
    "developer": "Arcade ",
    "id": "2f90a87hv",
    "seo_description": "Explore the INR Rummy system architecture. RummyApp Online provides an independent audit of render-thread isolation, input-polling, and frame-buffer pacing.",
    "video_url": "",
    "is_hot": false
  },
  {
    "custom_admin_box_html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Performance Verdict — Jaiho Rummy</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\np {\n  font-size: 15px;\n  color: #3c4043;\n}\n</style>\n</head>\n<body>\n\n<h2>Our Hands-On Testing & Performance Verdict</h2>\n<p>During rigorous hardware testing, <strong>Jaiho Rummy</strong> demonstrated superior resource management. The application's \"Eco-Mode\" toggle caps the frame rate at 30 FPS and disables secondary bloom lighting, allowing the app to run continuously for over 6 hours on a standard 4000mAh battery without triggering system heat warnings. Touch-input latency is measured at a maximum of 12 milliseconds, ensuring pixel-perfect accuracy in reflex-heavy modes like <strong>Neon Racer</strong>.</p>\n\n</body>\n</html>",
    "screenshots": [],
    "faqs": [
      {
        "answer": "Answer: The app utilizes a sub-second local logging system that auto-saves your exact board coordinates, score multipliers, and active game timers every 0.5 seconds. If your device battery dies or the application is closed unexpectedly, reopening JAIHO Rummy will restore your session to the exact frame where you left off without any data loss.",
        "question": "Question: How does the State-Preservation Engine handle abrupt closes or battery shutdowns during a puzzle?"
      },
      {
        "question": "Question: Can I adjust the graphics settings to run smoother on entry-level smartphones?",
        "answer": "Answer: Yes. JAIHO Rummy includes a dedicated Hardware Optimization menu where you can toggle particle density, disable screen-space bloom, and cap the frame rate at 30 FPS or 60 FPS to ensure lag-free performance across both budget and flagship devices."
      },
      {
        "question": "Question: How do the acoustic soundscapes and adaptive dashboard enhance the casual experience?",
        "answer": "Answer: The app features custom spatial audio engineered with soft-clipping audio technology to prevent speaker distortion, while the main dashboard dynamically shifts its ambient background hue based on your local time of day to reduce eye fatigue during late-night gaming sessions."
      }
    ],
    "link_configured": false,
    "seo_keywords": "jaiho rummy app, casual logic puzzles, mystic aviator physics, crystal guardian strategy, background optimized arcade, premium mobile lounge",
    "serial_number": 18,
    "release_notes": "",
    "is_new": false,
    "custom_admin_box_heading": "TECHNICAL PERFORMANCE & HARDWARE EFFICIENCY",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784878878/images_6_p5wj8d.jpg",
    "description_html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Jaiho Rummy</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-top: 30px;\n  margin-bottom: 8px;\n}\nh3 {\n  font-size: 16px;\n  font-weight: 600;\n  margin-top: 20px;\n  margin-bottom: 6px;\n}\np {\n  font-size: 15px;\n  color: #3c4043;\n}\n</style>\n</head>\n<body>\n\n<h2>A Precision-Engineered Casual Digital Environment</h2>\n<p><strong>Jaiho Rummy</strong> is constructed to deliver a highly polished, uninterrupted entertainment experience. Moving beyond standard arcade hubs, this application is built on a custom lightweight rendering engine that prioritizes fluid 60-FPS animations and rapid touch-response times. The ecosystem is designed purely for leisure, focusing on deeply satisfying gameplay loops, spatial reasoning, and visual reward systems rather than chaotic menus.</p>\n\n<h2>Elaborated Breakdown of Core Mini-Games</h2>\n\n<h3>Mystic Aviator (Physics & Reflex Mechanics)</h3>\n<p>This is a gravity-based flight simulator set in a stylized, low-poly sky environment. Players control a minimalist glider by applying touch-pressure to adjust pitch and altitude. The core mechanic revolves around reading environmental visual cues—such as swirling wind particles—to catch updrafts and maintain momentum. As players progress through shifting weather biomes, they must precisely thread the glider through narrow geometric gates to build multiplier chains. The background dynamically transitions from dawn to dusk, accompanied by a reactive wind-tunnel audio engine that intensifies based on flight speed.</p>\n\n<h3>Aqua Merge 2048 (Spatial Logic & Grid Strategy)</h3>\n<p>Set within a multi-layered parallax underwater environment, this game requires players to swipe across a 5x5 grid to merge buoyant numerical bubbles. Unlike standard sliding puzzles, merged bubbles simulate fluid dynamics, morphing together with a satisfying droplet animation and a crisp acoustic \"pop.\" Clearing high-value numerical thresholds physically alters the background environment, unlocking vibrant coral reefs, ambient schools of fish, and deep-sea bioluminescence that reacts to the player's touch inputs.</p>\n\n<h3>Crystal Guardian (Optical Routing & Geometry)</h3>\n<p>A complex light-bending strategy puzzle. Players are presented with a hexagonal grid where a central energy core emits a continuous beam of colored light. The objective is to strategically place elemental prisms and mirrors on the board to refract, split, and guide the beam into corresponding crystalline receptacles. Advanced stages introduce color-mixing mechanics (e.g., merging red and blue beams to unlock purple nodes) and rotating blockers. Completing a circuit triggers a localized particle explosion, illuminating the entire board in high-definition bloom lighting.</p>\n\n<h3>Neon Racer (Procedural Generation & Tempo)</h3>\n<p>A fast-paced, top-down evasion challenge built on a procedurally generated infinite track. Players pilot a neon hovercraft through a digital grid, using micro-swipes to weave between shifting geometric barricades. The game is tied directly to its synth-wave soundtrack; track obstacles pulse, shift, and spawn in perfect synchronization with the bass drops. Maintaining a high speed without grazing walls charges a \"Slipstream Gauge,\" which, when activated, alters the camera FOV and leaves a prolonged light-trail behind the player.</p>\n\n</body>\n</html>",
    "version": "2.1",
    "is_featured": false,
    "seo_title": "Jaiho Rummy App - Premium Casual Puzzles & Arcade Physics Games",
    "yellow_box_msg": "",
    "safety_status": "Verified",
    "created_at": "2026-05-26T07:26:42.606Z",
    "name": "JAIHO RUMMY ",
    "target_region": "",
    "features_html": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Core Architecture & Feature Deep-Dive</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 12px;\n}\nul {\n  padding-left: 20px;\n}\nli {\n  font-size: 15px;\n  color: #3c4043;\n  margin-bottom: 10px;\n}\n</style>\n</head>\n<body>\n\n<h2>Core Architecture & Feature Deep-Dive</h2>\n<ul>\n  <li><strong>Adaptive Ambient Interface:</strong> The main dashboard utilizes a dynamic color-shifting background that adapts to the time of day, reducing eye strain and eliminating aggressive pop-up menus.</li>\n  <li><strong>Background Threading Optimization:</strong> Engineered to utilize secondary CPU cores, ensuring the app draws less than 150MB of RAM, preventing device thermal throttling during long sessions.</li>\n  <li><strong>State-Preservation Engine:</strong> A localized auto-save protocol records exact grid coordinates and score multipliers every 0.5 seconds, allowing users to hard-close the app and resume the exact frame of their puzzle instantly.</li>\n  <li><strong>Acoustic Soundscapes:</strong> Every mini-game features a custom-engineered spatial audio track, utilizing soft-clipping techniques to deliver crisp, ASMR-style feedback without overwhelming the device's speakers.</li>\n</ul>\n\n</body>\n</html>",
    "rating": 3.9,
    "red_box_msg": "",
    "category": "Yono, All app",
    "slug": "jaiho-rummy",
    "is_coming_soon": false,
    "idea_box_msg": "🟢 PRO TIP: Enable Eco-Mode in the settings menu during long travel sessions. This caps visual rendering at 30 FPS and reduces GPU lighting overhead, extending continuous battery life by up to 40% while preserving your exact gameplay state.",
    "og_image_url": "",
    "developer": "Horizon Play Studios",
    "file_size": "58",
    "canonical_url": "https://www.rummydex.com/app/jaiho-rummy",
    "video_url": "",
    "is_hot": false,
    "id": "9a05609sb",
    "seo_description": "Download Jaiho Rummy to experience highly detailed casual gaming. Master physics-based flight in Mystic Aviator and spatial logic in Crystal Guardian."
  },
  {
    "idea_box_msg": "",
    "is_coming_soon": true,
    "slug": "love-rummy",
    "category": "Yono",
    "red_box_msg": "",
    "rating": 4.2,
    "name": "Love Rummy",
    "target_region": "",
    "features_html": "",
    "safety_status": "Verified",
    "created_at": "2026-05-26T07:31:59.173Z",
    "id": "l7a60keix",
    "seo_description": "",
    "video_url": "",
    "is_hot": false,
    "file_size": "68",
    "canonical_url": "",
    "og_image_url": "",
    "developer": "Mak job",
    "is_new": false,
    "release_notes": "",
    "serial_number": 19,
    "seo_keywords": "",
    "link_configured": false,
    "screenshots": [],
    "faqs": [],
    "custom_admin_box_html": "",
    "yellow_box_msg": "",
    "seo_title": "",
    "is_featured": false,
    "description_html": "<p>A new application.</p>",
    "version": "1.6",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784878950/download_31_s7fonv.webp",
    "custom_admin_box_heading": ""
  },
  {
    "custom_admin_box_html": "",
    "faqs": [],
    "screenshots": [],
    "link_configured": false,
    "seo_keywords": "",
    "serial_number": 20,
    "release_notes": "",
    "is_new": false,
    "custom_admin_box_heading": "",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784879087/download_32_cyvkev.webp",
    "version": "1.8",
    "description_html": "<p>A new application.</p>",
    "is_featured": false,
    "seo_title": "",
    "yellow_box_msg": "",
    "safety_status": "Verified",
    "created_at": "2026-05-26T07:34:35.782Z",
    "features_html": "",
    "name": "JOY RUMMY",
    "target_region": "",
    "rating": 5,
    "red_box_msg": "",
    "category": "Yono",
    "slug": "joy-rummy",
    "idea_box_msg": "",
    "is_coming_soon": true,
    "developer": "AB Arora",
    "og_image_url": "",
    "canonical_url": "",
    "file_size": "50",
    "is_hot": false,
    "video_url": "",
    "id": "4paka7kie",
    "seo_description": ""
  },
  {
    "faqs": [],
    "screenshots": [],
    "custom_admin_box_html": "",
    "link_configured": false,
    "serial_number": 21,
    "seo_keywords": "",
    "is_new": false,
    "release_notes": "",
    "custom_admin_box_heading": "",
    "description_html": "<p>A new application.</p>",
    "version": "1.0",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784879172/download_33_d1pgy0.webp",
    "is_featured": false,
    "yellow_box_msg": "",
    "seo_title": "",
    "created_at": "2026-05-26T07:37:07.122Z",
    "safety_status": "Verified",
    "red_box_msg": "",
    "rating": 4,
    "target_region": "",
    "name": "MAHA GAMES",
    "features_html": "",
    "slug": "maha-games",
    "category": "Yono",
    "is_coming_soon": true,
    "idea_box_msg": "",
    "file_size": "70",
    "canonical_url": "",
    "og_image_url": "",
    "developer": "AZ ever",
    "seo_description": "",
    "id": "2768ohu2a",
    "video_url": "",
    "is_hot": false
  },
  {
    "yellow_box_msg": "",
    "seo_title": "",
    "is_featured": false,
    "description_html": "<p>A new application.</p>",
    "version": "5.8",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784879252/download_34_wrdzdw.webp",
    "custom_admin_box_heading": "",
    "is_new": false,
    "release_notes": "",
    "serial_number": 22,
    "seo_keywords": "",
    "link_configured": false,
    "screenshots": [],
    "faqs": [],
    "custom_admin_box_html": "",
    "id": "us5xuk5bm",
    "seo_description": "",
    "video_url": "",
    "is_hot": false,
    "file_size": "58",
    "canonical_url": "",
    "og_image_url": "",
    "developer": "AZ ever",
    "idea_box_msg": "",
    "is_coming_soon": true,
    "slug": "rummy-ludo",
    "category": "Yono",
    "red_box_msg": "",
    "rating": 3.9,
    "target_region": "",
    "name": "Rummy Ludo",
    "features_html": "",
    "safety_status": "Verified",
    "created_at": "2026-05-26T07:39:44.282Z"
  },
  {
    "is_coming_soon": true,
    "idea_box_msg": "",
    "slug": "rummy-77",
    "category": "Yono",
    "red_box_msg": "",
    "rating": 3.9,
    "name": "Rummy 77",
    "target_region": "",
    "features_html": "",
    "created_at": "2026-05-26T07:42:24.615Z",
    "safety_status": "Verified",
    "seo_description": "",
    "id": "69x1lstq7",
    "video_url": "",
    "is_hot": false,
    "file_size": "45",
    "canonical_url": "",
    "og_image_url": "",
    "developer": "Arcade ",
    "is_new": false,
    "release_notes": "",
    "serial_number": 23,
    "seo_keywords": "",
    "link_configured": false,
    "faqs": [],
    "screenshots": [],
    "custom_admin_box_html": "",
    "yellow_box_msg": "",
    "seo_title": "",
    "is_featured": false,
    "description_html": "<p>A new application.</p>",
    "version": "2.0.6",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784879414/download_35_frpjjp.webp",
    "custom_admin_box_heading": ""
  },
  {
    "video_url": "",
    "is_hot": false,
    "id": "j79n2g3l9",
    "seo_description": "",
    "og_image_url": "",
    "developer": "AB Arora",
    "file_size": "58",
    "canonical_url": "",
    "idea_box_msg": "",
    "is_coming_soon": true,
    "category": "Yono",
    "slug": "share-slots",
    "name": "Share Slots",
    "target_region": "",
    "features_html": "",
    "red_box_msg": "",
    "rating": 4,
    "created_at": "2026-05-26T07:44:32.442Z",
    "safety_status": "Verified",
    "seo_title": "",
    "yellow_box_msg": "",
    "is_featured": false,
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784879544/download_36_zeiyxs.webp",
    "description_html": "<p>A new application.</p>",
    "version": "1.8",
    "custom_admin_box_heading": "",
    "release_notes": "",
    "is_new": false,
    "seo_keywords": "",
    "serial_number": 24,
    "link_configured": true,
    "custom_admin_box_html": "",
    "faqs": [],
    "screenshots": []
  },
  {
    "custom_admin_box_heading": "",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784879622/download_37_fzgtxc.webp",
    "description_html": "<p>A new application.</p>",
    "version": "1.6",
    "is_featured": false,
    "seo_title": "",
    "yellow_box_msg": "",
    "custom_admin_box_html": "",
    "faqs": [],
    "screenshots": [],
    "link_configured": false,
    "seo_keywords": "",
    "serial_number": 26,
    "release_notes": "",
    "is_new": false,
    "og_image_url": "",
    "developer": "Tania JK ",
    "file_size": "65",
    "canonical_url": "",
    "video_url": "",
    "is_hot": false,
    "id": "n3w2vjk0b",
    "seo_description": "",
    "safety_status": "Verified",
    "created_at": "2026-05-26T07:51:47.637Z",
    "name": "567 SLOTS",
    "target_region": "",
    "features_html": "",
    "red_box_msg": "",
    "rating": 3.5,
    "category": "Yono",
    "slug": "567-slots",
    "idea_box_msg": "",
    "is_coming_soon": true
  },
  {
    "link_configured": false,
    "custom_admin_box_html": "",
    "faqs": [],
    "screenshots": [],
    "release_notes": "",
    "is_new": false,
    "seo_keywords": "",
    "serial_number": 27,
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784879711/download_38_pmpbnu.webp",
    "description_html": "<p>A new application.</p>",
    "version": "1.9",
    "custom_admin_box_heading": "",
    "seo_title": "",
    "yellow_box_msg": "",
    "is_featured": false,
    "target_region": "",
    "name": "789Jackpots",
    "features_html": "",
    "rating": 2.9,
    "red_box_msg": "",
    "created_at": "2026-05-26T07:56:30.478Z",
    "safety_status": "Verified",
    "is_coming_soon": true,
    "idea_box_msg": "",
    "category": "Yono",
    "slug": "789jackpots",
    "video_url": "",
    "is_hot": false,
    "id": "owxg4aekg",
    "seo_description": "",
    "og_image_url": "",
    "developer": "Admin",
    "file_size": "Tanu WD",
    "canonical_url": ""
  },
  {
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784879809/download_39_znq2ql.webp",
    "description_html": "<p>A new application.</p>",
    "version": "1.8",
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
    "serial_number": 28,
    "video_url": "",
    "is_hot": false,
    "seo_description": "",
    "id": "fw5wsziec",
    "og_image_url": "",
    "developer": "Rahul HL",
    "file_size": "78",
    "canonical_url": "",
    "name": "Yono Vip",
    "target_region": "",
    "features_html": "",
    "rating": 4,
    "red_box_msg": "",
    "safety_status": "Verified",
    "created_at": "2026-05-26T08:00:01.636Z",
    "idea_box_msg": "",
    "is_coming_soon": true,
    "category": "Yono",
    "slug": "yono-vip"
  },
  {
    "screenshots": [],
    "faqs": [],
    "custom_admin_box_html": "",
    "link_configured": false,
    "serial_number": 34,
    "seo_keywords": "",
    "is_new": false,
    "release_notes": "",
    "custom_admin_box_heading": "",
    "description_html": "<p>A new application.</p>",
    "version": "3",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784879881/download_40_v9bper.webp",
    "is_featured": false,
    "yellow_box_msg": "",
    "seo_title": "",
    "created_at": "2026-06-03T10:17:01.058Z",
    "safety_status": "Verified",
    "publish_date": "2026-06-10T12:00:00.000Z",
    "rating": 4.2,
    "red_box_msg": "",
    "target_region": "",
    "name": "Teen Patti Octro",
    "features_html": "",
    "slug": "teen-patti-octro",
    "category": "Card",
    "idea_box_msg": "",
    "is_coming_soon": true,
    "file_size": "90",
    "canonical_url": "",
    "og_image_url": "",
    "developer": "Unknown ",
    "seo_description": "",
    "id": "t1ocq5iar",
    "video_url": "",
    "is_hot": false
  },
  {
    "seo_description": "",
    "id": "rrmv44n9n",
    "is_hot": false,
    "video_url": "",
    "canonical_url": "",
    "file_size": "Unknown",
    "developer": "Admin",
    "og_image_url": "",
    "red_box_msg": "",
    "rating": 5,
    "features_html": "",
    "target_region": "",
    "name": "Zynga Poker- Texas Holdem Game",
    "created_at": "2026-06-03T10:30:01.393Z",
    "safety_status": "Verified",
    "is_coming_soon": true,
    "idea_box_msg": "",
    "slug": "zynga-poker-texas-holdem-game",
    "category": "Card",
    "version": "1.0",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784879955/download_41_r3xnll.webp",
    "custom_admin_box_heading": "",
    "yellow_box_msg": "",
    "seo_title": "",
    "is_featured": false,
    "link_configured": false,
    "faqs": [],
    "screenshots": [],
    "custom_admin_box_html": "",
    "is_new": false,
    "release_notes": "",
    "serial_number": 29,
    "seo_keywords": ""
  },
  {
    "yellow_box_msg": "",
    "seo_title": "",
    "is_featured": false,
    "version": "1.0",
    "description_html": "<p>A new application.</p>",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784880053/download_42_u7vlpq.webp",
    "custom_admin_box_heading": "",
    "is_new": false,
    "release_notes": "",
    "serial_number": 30,
    "seo_keywords": "",
    "link_configured": true,
    "screenshots": [],
    "faqs": [],
    "custom_admin_box_html": "",
    "id": "wf59smk6l",
    "seo_description": "",
    "is_hot": false,
    "video_url": "",
    "canonical_url": "",
    "file_size": "Unknown",
    "developer": "Admin",
    "og_image_url": "",
    "idea_box_msg": "",
    "is_coming_soon": true,
    "slug": "uno",
    "category": "Card",
    "rating": 5,
    "red_box_msg": "",
    "features_html": "",
    "target_region": "",
    "name": "UNO! ",
    "safety_status": "Verified",
    "created_at": "2026-06-07T10:14:11.138Z"
  },
  {
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784880233/download_43_fgshj3.webp",
    "version": "1.0",
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
    "serial_number": 31,
    "is_hot": false,
    "video_url": "",
    "id": "8epj9jjpu",
    "seo_description": "",
    "developer": "Admin",
    "og_image_url": "",
    "canonical_url": "",
    "file_size": "Unknown",
    "features_html": "",
    "target_region": "",
    "name": "Rummy GOLD - With Fast Rummy",
    "rating": 5,
    "red_box_msg": "",
    "safety_status": "Verified",
    "created_at": "2026-06-07T10:16:45.949Z",
    "idea_box_msg": "",
    "is_coming_soon": true,
    "category": "Card",
    "slug": "rummy-gold-with-fast-rummy"
  },
  {
    "red_box_msg": "",
    "rating": 5,
    "target_region": "",
    "name": "Indian Rummy 3 Patti Card Game",
    "features_html": "",
    "safety_status": "Verified",
    "created_at": "2026-06-07T10:19:11.616Z",
    "is_coming_soon": true,
    "idea_box_msg": "",
    "slug": "indian-rummy-3-patti-card-game",
    "category": "Card",
    "id": "8jt0hokyo",
    "seo_description": "",
    "video_url": "",
    "is_hot": false,
    "file_size": "Unknown",
    "canonical_url": "",
    "og_image_url": "",
    "developer": "Admin",
    "link_configured": true,
    "screenshots": [],
    "faqs": [],
    "custom_admin_box_html": "",
    "is_new": false,
    "release_notes": "",
    "serial_number": 32,
    "seo_keywords": "",
    "description_html": "<p>A new application.</p>",
    "version": "1.0",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784880331/download_44_i8vc4z.webp",
    "custom_admin_box_heading": "",
    "yellow_box_msg": "",
    "seo_title": "",
    "is_featured": false
  },
  {
    "is_featured": false,
    "seo_title": "",
    "yellow_box_msg": "",
    "custom_admin_box_heading": "",
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784880502/download_45_rvzhvj.webp",
    "version": "1.0",
    "description_html": "<p>A new application.</p>",
    "seo_keywords": "",
    "serial_number": 33,
    "release_notes": "",
    "is_new": false,
    "custom_admin_box_html": "",
    "screenshots": [],
    "faqs": [],
    "link_configured": true,
    "developer": "Admin",
    "og_image_url": "https://1ewg1yyass.ucarecd.net/0f918f11-b247-4b5a-9d26-d510dddffbfe/-/preview/447x447/",
    "canonical_url": "",
    "file_size": "Unknown",
    "is_hot": false,
    "video_url": "",
    "seo_description": "",
    "id": "01x9h7nfb",
    "category": "Slots",
    "slug": "lucky-spin-slots",
    "is_coming_soon": true,
    "idea_box_msg": "",
    "created_at": "2026-06-07T13:13:11.211Z",
    "publish_date": "2026-07-08T13:08:00.000Z",
    "safety_status": "Verified",
    "features_html": "",
    "target_region": "",
    "name": "Lucky Spin Slots",
    "red_box_msg": "",
    "rating": 5
  },
  {
    "icon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784880566/download_46_rsjwao.webp",
    "version": "1.0",
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
    "serial_number": 28,
    "is_hot": false,
    "video_url": "",
    "seo_description": "",
    "id": "3cflt97b5",
    "developer": "AB Arora",
    "og_image_url": "",
    "canonical_url": "",
    "file_size": "76",
    "features_html": "",
    "target_region": "",
    "name": "IND Club",
    "red_box_msg": "",
    "rating": 4.5,
    "publish_date": "2026-06-12T15:30:00.000Z",
    "created_at": "2026-06-12T12:39:30.407Z",
    "safety_status": "Verified",
    "is_coming_soon": true,
    "idea_box_msg": "",
    "category": "Yono, All app",
    "slug": "ind-club"
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
  "site_title": "RummyDex ",
  "meta_description": "Discover RummyDex, a trusted directory for safe offline and online games. Read hands-on reviews, share your journey, and get the best app experience",
  "logo_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784896838/ezgif-64180dd8ca74703b_rpungk.webp",
  "favicon_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784896838/ezgif-64180dd8ca74703b_rpungk.webp",
  "helpline_whatsapp": "",
  "helpline_telegram": "",
  "support_email": "rummydex1@gmail.com",
  "disclaimer_text": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Website Disclaimer — RummyDex</title>\n<style>\nbody{max-width:680px;margin:0 auto;padding:30px 20px 70px;font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:#202124;line-height:1.6;font-size:1.15rem;}\nh1{font-size:2.3rem;}\n.notice{color:#5f6368;font-size:1rem;background:#f1f3f4;padding:16px 18px;border-radius:8px;}\nh2{font-size:1.5rem;margin-top:42px;}\nsvg{display:block;margin:26px auto;width:150px;height:auto;}\n.updated{color:#5f6368;font-size:0.95rem;margin-top:40px;}\n</style>\n</head>\n<body>\n\n<h1>Website Disclaimer</h1>\n<p class=\"notice\">Please read this Disclaimer carefully before using RummyDex. By accessing or using our website, you agree to the terms outlined below regarding informational content, third-party links, and limitation of liability.</p>\n\n<h2>1. Informational purposes only</h2>\n<p>All content, reviews, technical assessments, hardware performance notes, and application descriptions provided on RummyDex are published in <b>good faith for general informational, educational, and discovery purposes only</b>.</p>\n<p>While we conduct hands-on testing to evaluate app stability and resource usage, RummyDex makes no warranties about the completeness, reliability, or absolute accuracy of this information. <b>Any action you take based upon the information found on this website is strictly at your own risk.</b></p>\n\n<!-- an info mark, representing content given for informational purposes only -->\n<svg viewBox=\"0 0 160 160\" fill=\"none\">\n<circle cx=\"80\" cy=\"80\" r=\"60\" fill=\"#e8f0fe\"/>\n<circle cx=\"80\" cy=\"56\" r=\"7\" fill=\"#1a73e8\"/>\n<path d=\"M80 76v40\" stroke=\"#1a73e8\" stroke-width=\"8\" stroke-linecap=\"round\"/>\n</svg>\n\n<h2>2. Third-party links &amp; software bridge</h2>\n<p>RummyDex operates as an independent software directory and informational index. We do not host, store, or modify third-party application files (APKs or software packages) on our primary servers. Our directory provides outgoing links to official developer platforms, third-party hosting portals, or public app stores.</p>\n<p>Please be aware that:</p>\n<ul>\n<li>We have <b>no control</b> over the content, security, availability, or policies of external third-party websites.</li>\n<li>Including a link to an external app or portal does not imply an <b>endorsement or full guarantee</b> of the third-party service.</li>\n<li>When you click an external link, you <b>leave RummyDex</b> and become subject to the terms and privacy policies of that specific external site.</li>\n</ul>\n\n<!-- an arrow leaving our site's boundary toward an external, unmonitored destination -->\n<svg viewBox=\"0 0 160 160\" fill=\"none\">\n<rect x=\"30\" y=\"30\" width=\"55\" height=\"55\" rx=\"10\" fill=\"#e6f4ea\" stroke=\"#188038\" stroke-width=\"3\"/>\n<path d=\"M75 40l55 55M130 95V60M130 95H95\" stroke=\"#c9a34e\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n\n<h2>3. Limitation of liability</h2>\n<p>Under no circumstances shall RummyDex, its operators, or its team members be held liable for any loss, damage, device malfunction, data loss, or inconvenience resulting from:</p>\n<ul>\n<li>The use of, or inability to use, our platform or indexed external links.</li>\n<li>Decisions or actions taken based on our informational reviews and technical guides.</li>\n<li>Changes made by third-party developers to their software after our testing took place.</li>\n</ul>\n\n<!-- a shield with a limit line through it, representing capped liability -->\n<svg viewBox=\"0 0 160 160\" fill=\"none\">\n<path d=\"M80 25l45 18v25c0 30-19 50-45 58-26-8-45-28-45-58V43l45-18z\" fill=\"#f1f3f4\" stroke=\"#5f6368\" stroke-width=\"3\"/>\n<path d=\"M55 82h50\" stroke=\"#d93025\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n</svg>\n\n<h2>4. Copyright &amp; brand ownership</h2>\n<p>All product names, logos, registered trademarks, and brand names mentioned on RummyDex <b>belong to their respective copyright holders and original developers</b>. Their appearance on this platform is solely for reference, identification, and informational indexing purposes.</p>\n\n<!-- a copyright mark, representing brand and trademark ownership by original developers -->\n<svg viewBox=\"0 0 160 160\" fill=\"none\">\n<circle cx=\"80\" cy=\"80\" r=\"60\" fill=\"#e6f4ea\"/>\n<circle cx=\"80\" cy=\"80\" r=\"34\" stroke=\"#188038\" stroke-width=\"4\" fill=\"none\"/>\n<path d=\"M92 68a16 16 0 1 0 0 24\" stroke=\"#188038\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/>\n</svg>\n\n<h2>5. Updates to this disclaimer</h2>\n<p>We reserve the right to <b>modify, amend, or update</b> this Disclaimer at any time without prior notice. Any changes will be posted directly on this page with an updated revision date.</p>\n<p class=\"updated\">Last updated: July 2026</p>\n\n</body>\n</html>\n",
  "ethics_discrimination_text": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Editorial & Ethics Policy — RummyDex</title>\n<style>\nbody{max-width:680px;margin:0 auto;padding:30px 20px 70px;font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:#202124;line-height:1.6;font-size:1.15rem;}\nh1{font-size:2.3rem;}\n.notice{color:#5f6368;font-size:1rem;background:#f1f3f4;padding:16px 18px;border-radius:8px;}\nh2{font-size:1.5rem;margin-top:42px;}\nh3{font-size:1.1rem;margin:22px 0 6px;}\nsvg{display:block;margin:26px auto;width:150px;height:auto;}\n.updated{color:#5f6368;font-size:0.95rem;margin-top:40px;}\n</style>\n</head>\n<body>\n\n<h1>Editorial &amp; Ethics Policy</h1>\n<p class=\"notice\">RummyDex is built on integrity, transparency, and user safety. This page explains how we review apps, test them, and manage our directory.</p>\n\n<h2>1. Independent, unbiased reviews</h2>\n<p>Our first responsibility is to you, not to app developers. We stay <b>fully independent</b> from every publisher and platform we cover.</p>\n\n<h3>Unbiased assessments</h3>\n<p>Every review, performance check, and gameplay evaluation is done by our own team, objectively.</p>\n\n<h3>No pay-for-play</h3>\n<p>We <b>never accept money, gifts, or favors</b> in exchange for a good review or a higher rating. Any sponsored placement is always clearly labeled as such.</p>\n\n<!-- a review badge with a star and a strike-through dollar sign, meaning honest reviews, no paid ratings -->\n<svg viewBox=\"0 0 160 160\" fill=\"none\">\n<circle cx=\"80\" cy=\"80\" r=\"60\" fill=\"#fef7e0\"/>\n<path d=\"M80 45l10 21 23 3-17 16 4 23-20-11-20 11 4-23-17-16 23-3 10-21z\" fill=\"#c9a34e\"/>\n</svg>\n\n<h2>2. User safety &amp; device health</h2>\n<p>Your device's safety matters most. Every app we list has to meet a real standard.</p>\n\n<h3>Risk mitigation</h3>\n<p>We <b>refuse to list</b> apps that contain malware, hidden adware, deceptive tricks, or predatory monetization.</p>\n\n<h3>Honest performance</h3>\n<p>We test battery drain, memory use, and heat on real devices. If an app performs poorly, <b>we say so openly</b>.</p>\n\n<!-- a phone with a shield and checkmark, representing device safety -->\n<svg viewBox=\"0 0 160 160\" fill=\"none\">\n<rect x=\"55\" y=\"30\" width=\"50\" height=\"90\" rx=\"10\" fill=\"#f1f3f4\"/>\n<circle cx=\"80\" cy=\"80\" r=\"55\" fill=\"none\"/>\n<path d=\"M105 90l30 12v17c0 20-13 33-30 39-17-6-30-19-30-39V102l30-12z\" fill=\"#e6f4ea\" stroke=\"#188038\" stroke-width=\"3\"/>\n<path d=\"M97 130l7 7 14-14\" stroke=\"#188038\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n\n<h2>3. How we stay transparent</h2>\n<p>We're open about how our directory works and where our information comes from.</p>\n\n<h3>We're a bridge, not a host</h3>\n<p>RummyDex is an independent directory. We <b>don't host or alter software</b> — we only link safely to the real developer source.</p>\n\n<h3>Fast corrections</h3>\n<p>If we get something wrong — a spec, a description, a link — we <b>fix it quickly</b> once we know.</p>\n\n<!-- a checklist with a checkmark, representing transparent, corrected information -->\n<svg viewBox=\"0 0 160 160\" fill=\"none\">\n<rect x=\"40\" y=\"25\" width=\"80\" height=\"110\" rx=\"10\" fill=\"#f1f3f4\"/>\n<path d=\"M55 50h50M55 68h35\" stroke=\"#9aa0a6\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n<circle cx=\"80\" cy=\"100\" r=\"28\" fill=\"#e6f4ea\"/>\n<path d=\"M68 100l8 8 16-16\" stroke=\"#188038\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n\n<h2>4. Respecting other people's work</h2>\n<p>We take intellectual property seriously — for both indie developers and big studios.</p>\n\n<h3>Proper credit</h3>\n<p>Every logo, name, and asset we show is <b>credited to its real developer</b> or publisher.</p>\n\n<h3>Copyright requests</h3>\n<p>We follow standard copyright rules and offer a direct way for rights holders to request a <b>fast review or removal</b> of a link.</p>\n\n<!-- a copyright mark, representing IP ownership by original creators -->\n<svg viewBox=\"0 0 160 160\" fill=\"none\">\n<circle cx=\"80\" cy=\"80\" r=\"60\" fill=\"#e6f4ea\"/>\n<circle cx=\"80\" cy=\"80\" r=\"34\" stroke=\"#188038\" stroke-width=\"4\" fill=\"none\"/>\n<path d=\"M92 68a16 16 0 1 0 0 24\" stroke=\"#188038\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/>\n</svg>\n\n<h2>5. Privacy &amp; data standards</h2>\n<p>We respect your privacy, and we expect the same from every app we feature.</p>\n\n<h3>Checking app privacy</h3>\n<p>While testing, we look at what data an app asks for. Apps with <b>invasive or unnecessary data collection</b> won't be recommended or listed.</p>\n\n<h3>We collect the minimum</h3>\n<p>RummyDex only gathers the small amount of technical data needed to keep the directory <b>running smoothly and securely</b>.</p>\n\n<!-- a padlock, representing data privacy and minimal collection -->\n<svg viewBox=\"0 0 160 160\" fill=\"none\">\n<rect x=\"45\" y=\"75\" width=\"70\" height=\"55\" rx=\"8\" fill=\"#e6f4ea\" stroke=\"#188038\" stroke-width=\"3\"/>\n<path d=\"M58 75V58a22 22 0 0 1 44 0v17\" stroke=\"#188038\" stroke-width=\"4.5\" fill=\"none\"/>\n<circle cx=\"80\" cy=\"100\" r=\"6\" fill=\"#188038\"/>\n</svg>\n\n<p class=\"updated\">Last updated: July 2026</p>\n\n</body>\n</html>\n",
  "ticker_text": "Welcome to RummyDex! Explore our hand-tested app directory, watch the latest high-res video reviews, and catch up on breaking gaming news.",
  "animations_enabled": true,
  "categories": [
    "All app",
    "Yono",
    "Slots",
    "Card"
  ],
  "banners": [],
  "quick_links": [],
  "website_faqs": [],
  "developers": [
    {
      "twitter": "",
      "image_url": "https://res.cloudinary.com/diewalae4/image/upload/v1785064868/download_47_tltvqo.webp",
      "bio": "Jeet Roy is the driving force behind RummyDex, dedicated to building a secure, transparent, and engaging platform for casual gamers. His visionary leadership ensures that RummyDex remains a trusted and go-to destination for high-quality, hand-tested digital entertainment.",
      "name": "JEET ROY ",
      "role": "CEO ",
      "github": ""
    }
  ],
  "terms_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Terms & Conditions — RummyDex</title>\n<style>\nbody{max-width:680px;margin:0 auto;padding:30px 20px 70px;font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:#202124;line-height:1.6;font-size:1.15rem;}\nh1{font-size:2.3rem;margin-bottom:6px;}\n.date{color:#5f6368;font-size:0.95rem;margin-top:0;}\nh2{font-size:1.5rem;margin-top:42px;}\nsvg{display:block;margin:26px auto;width:240px;height:auto;}\n</style>\n</head>\n<body>\n\n<h1>Terms &amp; Conditions</h1>\n<p class=\"date\">Effective Date: July 21, 2026</p>\n\n<h2>1. Agreement to terms</h2>\n<p>By accessing or using RummyDex, you agree to be bound by these Terms &amp; Conditions. If you disagree with any part of these terms, <b>you are prohibited from using our website</b>. These terms apply to all visitors, users, and others who access our directory.</p>\n\n<h2>2. Intellectual property and copyright</h2>\n<p>The original content, layout, design, and structural organization of the RummyDex directory are the <b>exclusive property of RummyDex</b>. However, we do not claim ownership over the third-party applications listed on our site. All app names, logos, trademarks, and associated digital assets belong to their respective external developers and publishers.</p>\n\n<!-- our directory design/layout on one side (owned), a separate app icon with its own logo on the other (belongs to the developer) -->\n<svg viewBox=\"0 0 300 160\" fill=\"none\">\n<rect x=\"20\" y=\"25\" width=\"100\" height=\"110\" rx=\"10\" fill=\"#e6f4ea\"/>\n<rect x=\"35\" y=\"40\" width=\"70\" height=\"10\" rx=\"5\" fill=\"#188038\"/>\n<rect x=\"35\" y=\"60\" width=\"50\" height=\"8\" rx=\"4\" fill=\"#188038\"/>\n<rect x=\"35\" y=\"76\" width=\"60\" height=\"8\" rx=\"4\" fill=\"#188038\"/>\n<rect x=\"35\" y=\"92\" width=\"40\" height=\"8\" rx=\"4\" fill=\"#188038\"/>\n<path d=\"M130 80h40\" stroke=\"#9aa0a6\" stroke-width=\"2.5\" stroke-dasharray=\"1 6\" stroke-linecap=\"round\"/>\n<circle cx=\"225\" cy=\"80\" r=\"45\" fill=\"#f1f3f4\"/>\n<circle cx=\"225\" cy=\"80\" r=\"20\" fill=\"#fff\" stroke=\"#5f6368\" stroke-width=\"2.5\"/>\n<text x=\"225\" y=\"88\" font-size=\"20\" text-anchor=\"middle\" fill=\"#5f6368\" font-family=\"Arial\">™</text>\n</svg>\n\n<h2>3. Acceptable use of the directory</h2>\n<p>RummyDex is provided solely for your personal, non-commercial informational use. You agree not to:</p>\n<ul>\n<li>Use <b>automated scripts, bots, or web scrapers</b> to extract data, reviews, or links from our directory.</li>\n<li>Interfere with or disrupt the security, servers, or networks connected to our website.</li>\n<li>Submit <b>false, spam, or malicious reports</b> through our App Reporting system.</li>\n</ul>\n\n<!-- a bot/robot icon with a \"no entry\" slash over it, next to a shield protecting the server -->\n<svg viewBox=\"0 0 300 160\" fill=\"none\">\n<rect x=\"30\" y=\"35\" width=\"70\" height=\"70\" rx=\"12\" fill=\"#f1f3f4\"/>\n<circle cx=\"55\" cy=\"60\" r=\"6\" fill=\"#5f6368\"/>\n<circle cx=\"80\" cy=\"60\" r=\"6\" fill=\"#5f6368\"/>\n<rect x=\"50\" y=\"78\" width=\"35\" height=\"8\" rx=\"4\" fill=\"#5f6368\"/>\n<circle cx=\"65\" cy=\"70\" r=\"48\" fill=\"none\" stroke=\"#d93025\" stroke-width=\"4\"/>\n<path d=\"M30 35l70 70\" stroke=\"#d93025\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n<path d=\"M140 70h30\" stroke=\"#9aa0a6\" stroke-width=\"2.5\" stroke-dasharray=\"1 6\" stroke-linecap=\"round\"/>\n<path d=\"M225 30l32 13v18c0 22-14 36-32 42-18-6-32-20-32-42V43l32-13z\" fill=\"#e6f4ea\" stroke=\"#188038\" stroke-width=\"2.5\"/>\n<rect x=\"212\" y=\"65\" width=\"26\" height=\"18\" rx=\"3\" fill=\"#fff\" stroke=\"#188038\" stroke-width=\"2\"/>\n<path d=\"M217 65v-8a8 8 0 0 1 16 0v8\" stroke=\"#188038\" stroke-width=\"2.5\" fill=\"none\"/>\n</svg>\n\n<h2>4. Third-party links and software disclaimer</h2>\n<p>RummyDex functions as an <b>informational bridge</b>. While we utilize a secure, carefully verified process to provide correct links to external applications, we do not host any software or APK files on our own servers.</p>\n<ul>\n<li>You acknowledge that clicking an external link takes you to a <b>third-party destination that we do not control</b>.</li>\n<li>You agree that any downloading, installation, or use of third-party software is done <b>entirely at your own risk</b>.</li>\n<li>RummyDex is not responsible for any damage to your device, loss of data, or other issues resulting from the use of third-party applications discovered through our index.</li>\n</ul>\n\n<!-- a bridge connecting our site to an external destination marked with a caution triangle -->\n<svg viewBox=\"0 0 300 150\" fill=\"none\">\n<circle cx=\"55\" cy=\"90\" r=\"34\" fill=\"#e6f4ea\"/>\n<path d=\"M40 90h30M55 75v30\" stroke=\"#188038\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n<path d=\"M92 90c20-30 96-30 116 0\" stroke=\"#c9a34e\" stroke-width=\"3.5\" fill=\"none\" stroke-linecap=\"round\"/>\n<circle cx=\"245\" cy=\"90\" r=\"34\" fill=\"#fef7e0\"/>\n<path d=\"M245 72l20 34h-40l20-34z\" fill=\"none\" stroke=\"#c9a34e\" stroke-width=\"3.5\" stroke-linejoin=\"round\"/>\n<path d=\"M245 88v6\" stroke=\"#c9a34e\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n<circle cx=\"245\" cy=\"99\" r=\"1.6\" fill=\"#c9a34e\"/>\n</svg>\n\n<h2>5. App reporting &amp; removal guarantee</h2>\n<p>We maintain a <b>strict zero-tolerance policy</b> for apps that introduce unauthorized real-money gaming (RMG) mechanics. If a user reports an application for violating these standards, we will review the claim and enforce our <b>100% removal guarantee</b>. We reserve the right to remove, modify, or delist any application from our directory at our sole discretion, without prior notice to the app's developer.</p>\n\n<h2>6. Limitation of liability</h2>\n<p>To the maximum extent permitted by law, RummyDex and its team shall <b>not be liable</b> for any direct, indirect, incidental, special, or consequential damages resulting from your use of, or inability to use, our directory or the external applications linked within it. Our platform is provided on an <b>\"as is\" and \"as available\"</b> basis without any warranties of any kind.</p>\n\n<!-- a balanced scale representing liability limits -->\n<svg viewBox=\"0 0 300 150\" fill=\"none\">\n<path d=\"M150 25v95\" stroke=\"#5f6368\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n<path d=\"M85 45h130\" stroke=\"#5f6368\" stroke-width=\"3.5\" stroke-linecap=\"round\"/>\n<rect x=\"130\" y=\"118\" width=\"40\" height=\"10\" rx=\"4\" fill=\"#5f6368\"/>\n<path d=\"M85 45l-25 45h50L85 45z\" fill=\"none\" stroke=\"#c9a34e\" stroke-width=\"3\"/>\n<path d=\"M215 45l-25 45h50L215 45z\" fill=\"none\" stroke=\"#c9a34e\" stroke-width=\"3\"/>\n<circle cx=\"150\" cy=\"25\" r=\"6\" fill=\"#5f6368\"/>\n</svg>\n\n<h2>7. Modifications to terms</h2>\n<p>We reserve the right to <b>revise these Terms &amp; Conditions</b> at any time. By continuing to access or use RummyDex after those revisions become effective, you agree to be bound by the revised terms.</p>\n\n</body>\n</html>\n",
  "privacy_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Privacy Policy — RummyDex</title>\n<style>\nbody{max-width:680px;margin:0 auto;padding:30px 20px 70px;font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:#202124;line-height:1.6;font-size:1.15rem;}\nh1{font-size:2.3rem;margin-bottom:6px;}\n.date{color:#5f6368;font-size:0.95rem;margin-top:0;}\nh2{font-size:1.5rem;margin-top:42px;}\nsvg{display:block;margin:26px auto;width:180px;height:180px;}\n</style>\n</head>\n<body>\n\n<h1>Privacy Policy</h1>\n<p class=\"date\">Effective Date: July 21, 2026</p>\n\n<h2>1. Introduction</h2>\n<p>Welcome to RummyDex. This Privacy Policy governs the manner in which RummyDex collects, uses, maintains, and discloses information collected from users visiting our digital directory and software index. We are committed to <b>safeguarding your privacy</b> and ensuring transparency in how your data is handled while you navigate our platform.</p>\n\n<h2>2. Information collection</h2>\n<p>RummyDex operates strictly as an informational index. We do not require users to <b>create accounts, register, or provide sensitive personal identification information</b> to access our directory.</p>\n<p>We may collect non-personally identifiable information about users whenever they interact with our website. This data is collected automatically and may include the browser name, the type of computer or device, internet service providers, IP addresses, geographical region, and technical information regarding the user's means of connection to our site.</p>\n\n<!-- no account or ID needed: a person icon crossed out -->\n<svg viewBox=\"0 0 100 100\" fill=\"none\">\n<circle cx=\"50\" cy=\"50\" r=\"46\" fill=\"#f1f3f4\"/>\n<circle cx=\"50\" cy=\"40\" r=\"14\" fill=\"#9aa0a6\"/>\n<path d=\"M26 76c4-14 16-22 24-22s20 8 24 22\" stroke=\"#9aa0a6\" stroke-width=\"7\" stroke-linecap=\"round\" fill=\"none\"/>\n<path d=\"M28 28l44 44\" stroke=\"#d93025\" stroke-width=\"7\" stroke-linecap=\"round\"/>\n</svg>\n\n<h2>3. Web browser cookies</h2>\n<p>Our website uses <b>\"cookies\"</b> to enhance the user experience, analyze site traffic, and optimize our directory structure. A cookie is a small text file placed on a user's hard drive for record-keeping purposes and to track non-personal information. Users may choose to set their web browser to refuse cookies or to alert them when cookies are being sent. Please note that if cookies are disabled, <b>some parts of the site may not function properly</b>.</p>\n\n<!-- a cookie -->\n<svg viewBox=\"0 0 100 100\" fill=\"none\">\n<circle cx=\"50\" cy=\"50\" r=\"46\" fill=\"#f1f3f4\"/>\n<circle cx=\"50\" cy=\"50\" r=\"30\" fill=\"#e8b84f\"/>\n<circle cx=\"40\" cy=\"40\" r=\"4\" fill=\"#7a5a1e\"/>\n<circle cx=\"60\" cy=\"42\" r=\"4\" fill=\"#7a5a1e\"/>\n<circle cx=\"46\" cy=\"60\" r=\"4\" fill=\"#7a5a1e\"/>\n<circle cx=\"62\" cy=\"60\" r=\"3\" fill=\"#7a5a1e\"/>\n</svg>\n\n<h2>4. Third-party services</h2>\n<p>To maintain and support our directory, we may work with standard third-party services for analytics and content delivery. These partners may utilize cookies or similar technologies to provide relevant information and promotions based on your interactions with our site and other websites. You retain <b>full control over your cookie preferences</b> and can adjust, manage, or disable them at any time through your web browser settings or standard network opt-out pages.</p>\n\n<h2>5. Secure external links and third-party applications</h2>\n<p>RummyDex is an informational bridge. We do not host APKs or software files directly on our servers. Instead, we provide safe, correct links to external, third-party software developers through a secure, carefully verified process to ensure users are directed appropriately. When you click on a link and navigate to a third-party application, <b>you are leaving our jurisdiction</b>. We do not control the content, privacy practices, or data collection policies of these external destinations. Interaction with any other website or application is subject to that entity's own terms and policies.</p>\n\n<!-- an arrow leaving to an external site -->\n<svg viewBox=\"0 0 100 100\" fill=\"none\">\n<circle cx=\"50\" cy=\"50\" r=\"46\" fill=\"#f1f3f4\"/>\n<path d=\"M35 65L65 35M65 35H45M65 35V55\" stroke=\"#188038\" stroke-width=\"7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n\n<h2>6. Data security</h2>\n<p>We adopt appropriate data collection, storage, and processing practices, alongside strict security measures, to protect against unauthorized access, alteration, disclosure, or destruction of your non-personal information and data stored on our site. However, <b>no data transmission over the internet or wireless network can be guaranteed to be 100% secure</b>.</p>\n\n<!-- a padlock -->\n<svg viewBox=\"0 0 100 100\" fill=\"none\">\n<circle cx=\"50\" cy=\"50\" r=\"46\" fill=\"#f1f3f4\"/>\n<rect x=\"32\" y=\"48\" width=\"36\" height=\"28\" rx=\"5\" fill=\"#188038\"/>\n<path d=\"M38 48V38a12 12 0 0 1 24 0v10\" stroke=\"#188038\" stroke-width=\"6\" fill=\"none\"/>\n</svg>\n\n<h2>7. Acceptance of these terms</h2>\n<p>By using RummyDex, you signify your acceptance of this Privacy Policy. If you do not agree to this policy, please do not use our site. We reserve the right to <b>update or modify this Privacy Policy</b> at any time. Continued use of the site following the posting of changes to this policy will be deemed your acceptance of those changes.</p>\n\n</body>\n</html>\n",
  "hero_title_style": "modern",
  "hero_title_text": "Rummy Dex",
  "report_removal_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Report & Removal Policy — RummyDex</title>\n<style>\nbody{max-width:680px;margin:0 auto;padding:30px 20px 70px;font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:#202124;line-height:1.6;font-size:1.15rem;}\nh1{font-size:2.3rem;}\nh2{font-size:1.5rem;margin-top:42px;}\nsvg{display:block;margin:26px auto;width:260px;height:auto;}\n</style>\n</head>\n<body>\n\n<h1>Report &amp; Removal Policy</h1>\n\n<h2>Our commitment to a safe directory</h2>\n<p>RummyDex is built on the foundation of providing a clean, safe, and purely entertainment-focused digital index. Because third-party developers can update their applications dynamically after we list them, we rely on active community oversight to help us maintain the integrity of our platform.</p>\n<p>This policy outlines exactly what we do not allow and how we handle non-compliant applications.</p>\n\n<h2>What you should report</h2>\n<p>We ask our community to immediately report any application listed on our platform that exhibits any of the following violations:</p>\n<ul>\n<li><b>Real-Money Gaming (RMG):</b> the sudden introduction of real-money betting, gambling, or mandatory financial deposits to play.</li>\n<li><b>Deceptive updates:</b> an application that drastically changes its core gameplay from what was originally reviewed and listed (e.g., a casual offline puzzle game updating into a casino app).</li>\n<li><b>Broken or malicious links:</b> a resource link that no longer directs to the verified developer source, or redirects to an unsafe, unverified page.</li>\n<li><b>Excessive intrusive ads:</b> applications that have updated to include unskippable system-level ads or malware-like behavior that ruins the user experience.</li>\n</ul>\n\n<!-- app card with a betting/rupee icon crossed out, a broken-link icon, and an ad-block icon: represents the exact 3 things being reported -->\n<svg viewBox=\"0 0 300 170\" fill=\"none\">\n<rect x=\"20\" y=\"15\" width=\"90\" height=\"140\" rx=\"10\" fill=\"#f1f3f4\"/>\n<rect x=\"32\" y=\"30\" width=\"66\" height=\"66\" rx=\"8\" fill=\"#0f3d2e\"/>\n<path d=\"M55 63h20M65 53v20\" stroke=\"#e0b84f\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n<circle cx=\"65\" cy=\"63\" r=\"16\" stroke=\"#e0b84f\" stroke-width=\"2.5\"/>\n<path d=\"M40 110h50M40 122h35\" stroke=\"#9aa0a6\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n<circle cx=\"180\" cy=\"55\" r=\"42\" fill=\"#fce8e6\"/>\n<path d=\"M162 55h36M180 37v36\" stroke=\"#d93025\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n<circle cx=\"245\" cy=\"120\" r=\"38\" fill=\"#e8f0fe\"/>\n<path d=\"M228 120l12 12 22-22\" stroke=\"#1a73e8\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n\n<h2>How to submit a report</h2>\n<p>Reporting a violation is simple and direct. At the bottom of every individual app review page, you'll find a \"Report App\" button. Clicking this opens a quick form where you can select the reason for your report and provide a brief detail of your experience.</p>\n\n<h2>Our review process</h2>\n<p>Once a report is submitted, it goes directly to our moderation team. We do not use automated bots for this process; a real team member will manually re-test the application and verify the provided link to check for the reported violations.</p>\n\n<h2>The 100% permanent removal guarantee</h2>\n<p>We operate with a strict zero-tolerance policy for financial risk mechanisms and deceptive software. If our team verifies that an application has violated our safety guidelines or introduced real-money mechanics, we enforce a 100% immediate and permanent removal of that app from RummyDex.</p>\n<ul>\n<li>The application's dedicated page will be taken down.</li>\n<li>All outbound links to the software will be permanently severed.</li>\n<li>The developer will not be permitted to relist the application on our index.</li>\n</ul>\n\n<!-- an app tile with a trash/removal icon and a broken chain-link, representing the app being taken down and delisted -->\n<svg viewBox=\"0 0 300 170\" fill=\"none\">\n<rect x=\"30\" y=\"20\" width=\"100\" height=\"100\" rx=\"12\" fill=\"#f1f3f4\"/>\n<path d=\"M55 45h50M65 45v-8h30v8M62 55l4 55h38l4-55\" stroke=\"#5f6368\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<rect x=\"150\" y=\"55\" width=\"140\" height=\"8\" rx=\"4\" fill=\"#9aa0a6\"/>\n<circle cx=\"150\" cy=\"59\" r=\"22\" fill=\"#fce8e6\"/>\n<path d=\"M139 48l22 22M161 48l-22 22\" stroke=\"#d93025\" stroke-width=\"4.5\" stroke-linecap=\"round\"/>\n<circle cx=\"255\" cy=\"130\" r=\"30\" fill=\"#e6f4ea\"/>\n<path d=\"M243 130l9 9 17-17\" stroke=\"#188038\" stroke-width=\"4.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n\n<h2>False reporting</h2>\n<p>While we highly value community feedback, we ask that users only submit reports for genuine violations. Deliberately spamming the reporting system or submitting false claims to maliciously target specific games may result in a restriction of your ability to submit future reports or post reviews.</p>\n\n</body>\n</html>\n",
  "hero_title_subtitle": "Your independent directory for hand-tested games and pure digital entertainment.",
  "hero_title_animation": "fade-in",
  "ethics_heading": "Editorial & Ethics Policy",
  "social_links": {
    "linkedin": "",
    "youtube": "https://youtube.com/@rummydex?",
    "instagram": "https://www.instagram.com/rummydex?igsh=MTJjaGR3c3hmdjhnZA==",
    "facebook": "",
    "twitter": ""
  },
  "about_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>About Us — RummyDex</title>\n<style>\nbody{max-width:680px;margin:0 auto;padding:30px 20px 70px;font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:#202124;line-height:1.6;font-size:1.15rem;}\nh1{font-size:2.3rem;}\nh2{font-size:1.5rem;margin-top:42px;}\nsvg{display:block;margin:26px auto;width:180px;height:180px;}\n</style>\n</head>\n<body>\n\n<h1>About Us</h1>\n\n<h2>The meaning of \"Dex\" (who we are)</h2>\n<p>Welcome to RummyDex. The word <b>\"Dex\" stands for index or directory</b>, which perfectly describes our core identity. We are an independent digital library built to catalog, review, and provide structured, transparent information about casual games and digital applications. Our platform is designed to be a complete informational hub for entertainment enthusiasts.</p>\n\n<!-- an open book/index, representing the directory -->\n<svg viewBox=\"0 0 100 100\" fill=\"none\">\n<circle cx=\"50\" cy=\"50\" r=\"46\" fill=\"#f1f3f4\"/>\n<path d=\"M50 30c-6-5-16-6-22-4v40c6-2 16-1 22 4c6-5 16-6 22-4V26c-6-2-16-1-22 4z\" fill=\"#e6f4ea\" stroke=\"#188038\" stroke-width=\"4\" stroke-linejoin=\"round\"/>\n<path d=\"M50 30v40\" stroke=\"#188038\" stroke-width=\"4\"/>\n</svg>\n\n<h2>How we provide information &amp; links</h2>\n<p>We function strictly as an <b>informational bridge</b>. Instead of hosting direct software or APK files on our servers, we provide comprehensive technical breakdowns, clear guides, and safe, direct links to third-party developer sources. This ensures that our platform remains fast and secure, and that you always access applications straight from the source.</p>\n\n<!-- an arrow leaving to an external source -->\n<svg viewBox=\"0 0 100 100\" fill=\"none\">\n<circle cx=\"50\" cy=\"50\" r=\"46\" fill=\"#f1f3f4\"/>\n<path d=\"M35 65L65 35M65 35H45M65 35V55\" stroke=\"#188038\" stroke-width=\"7\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n\n<h2>Real hands-on testing &amp; experience</h2>\n<p>We do not just list apps blindly. Before any application is published on our platform, our team conducts a <b>real, hands-on test</b>. We personally experience the app's performance, mechanics, and user interface to ensure it meets our strict entertainment standards before it ever reaches our directory.</p>\n\n<!-- a hand tapping/testing a phone -->\n<svg viewBox=\"0 0 100 100\" fill=\"none\">\n<circle cx=\"50\" cy=\"50\" r=\"46\" fill=\"#f1f3f4\"/>\n<rect x=\"38\" y=\"24\" width=\"30\" height=\"46\" rx=\"6\" fill=\"#fff\" stroke=\"#c9a34e\" stroke-width=\"4\"/>\n<circle cx=\"53\" cy=\"63\" r=\"2.5\" fill=\"#c9a34e\"/>\n<path d=\"M64 46c6 2 10 7 10 12s-2 8-6 10\" stroke=\"#c9a34e\" stroke-width=\"4\" stroke-linecap=\"round\" fill=\"none\"/>\n</svg>\n\n<h2>Complete transparency &amp; neutrality</h2>\n<p>RummyDex operates with <b>100% complete transparency and zero developer bias</b>. We act entirely as an independent informational resource. Our goal is to provide honest, neutral, and clear breakdowns so that you can make fully informed choices about your offline and casual online entertainment.</p>\n\n<!-- a balanced scale, representing neutrality -->\n<svg viewBox=\"0 0 100 100\" fill=\"none\">\n<circle cx=\"50\" cy=\"50\" r=\"46\" fill=\"#f1f3f4\"/>\n<path d=\"M50 22v50\" stroke=\"#5f6368\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n<path d=\"M28 32h44\" stroke=\"#5f6368\" stroke-width=\"4\" stroke-linecap=\"round\"/>\n<path d=\"M28 32l-9 18h18l-9-18z\" fill=\"#188038\"/>\n<path d=\"M72 32l-9 18h18l-9-18z\" fill=\"#188038\"/>\n<rect x=\"38\" y=\"72\" width=\"24\" height=\"6\" rx=\"3\" fill=\"#5f6368\"/>\n</svg>\n\n</body>\n</html>\n",
  "hero_title_visible": true,
  "important_notice": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Important Notice & User Advisory — RummyDex</title>\n<style>\nbody{max-width:680px;margin:0 auto;padding:30px 20px 70px;font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:#202124;line-height:1.6;font-size:1.15rem;}\nh1{font-size:2.3rem;}\n.notice{color:#5f6368;font-size:1rem;background:#f1f3f4;padding:16px 18px;border-radius:8px;}\nh2{font-size:1.5rem;margin-top:42px;}\nh3{font-size:1.1rem;margin:22px 0 6px;}\nsvg{display:block;margin:26px auto;width:150px;height:auto;}\n.updated{color:#5f6368;font-size:0.95rem;margin-top:40px;}\n</style>\n</head>\n<body>\n\n<h1>Important Notice &amp; User Advisory</h1>\n<p class=\"notice\">Please read this before browsing or downloading anything from RummyDex. By using our directory, you agree to the points below.</p>\n\n<h2>1. We don't operate or host any apps</h2>\n<p>RummyDex is a directory and review site — <b>not a game operator or host</b>. We don't build or run any of the apps listed here. We just help you discover them. Any sign-up or gameplay happens on the third-party app itself, <b>completely outside our control</b>.</p>\n\n<!-- a phone linking out to an external app, representing that gameplay happens off-site -->\n<svg viewBox=\"0 0 160 160\" fill=\"none\">\n<rect x=\"30\" y=\"30\" width=\"55\" height=\"55\" rx=\"10\" fill=\"#e6f4ea\" stroke=\"#188038\" stroke-width=\"3\"/>\n<path d=\"M75 40l55 55M130 95V60M130 95H95\" stroke=\"#c9a34e\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n\n<h2>2. Age &amp; local laws</h2>\n<h3>18+ audience</h3>\n<p>RummyDex is meant for <b>adults, 18 years or older</b>.</p>\n<h3>Know your local rules</h3>\n<p>Laws about online card games and arcade apps differ by country and region. It's <b>your responsibility</b> to check that using these apps is legal where you live.</p>\n\n<!-- an 18+ badge -->\n<svg viewBox=\"0 0 160 160\" fill=\"none\">\n<circle cx=\"80\" cy=\"80\" r=\"60\" fill=\"#fef7e0\"/>\n<text x=\"80\" y=\"95\" font-size=\"42\" font-weight=\"700\" text-anchor=\"middle\" fill=\"#c9a34e\" font-family=\"Arial, sans-serif\">18+</text>\n</svg>\n\n<h2>3. Money &amp; responsible play</h2>\n<p>RummyDex mainly covers casual, points-based games. Some outside apps may involve real money.</p>\n<h3>We never touch your money</h3>\n<p>We <b>don't process payments</b> and will <b>never ask for your card or bank details</b>.</p>\n<h3>Play at your own pace</h3>\n<p>If an outside app involves real money, that's <b>entirely at your own risk</b>. We're not responsible for losses, bans, or payment issues on other platforms. Set limits and play responsibly.</p>\n\n<!-- a rupee/money symbol with a slash, representing zero financial involvement from RummyDex -->\n<svg viewBox=\"0 0 160 160\" fill=\"none\">\n<circle cx=\"80\" cy=\"80\" r=\"60\" fill=\"#fce8e6\"/>\n<path d=\"M58 55h44M58 68h44M58 55c14 0 22 8 22 18s-8 18-22 18h-4l30 24\" stroke=\"#d93025\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n</svg>\n\n<h2>4. Stay safe when downloading</h2>\n<h3>Apps can change after we review them</h3>\n<p>Developers sometimes update their app or change how it makes money <b>after our review is published</b>.</p>\n<h3>Protect your device</h3>\n<p>Keep antivirus protection active, and always <b>check app permissions</b> before installing anything from a third-party link.</p>\n\n<!-- a phone with a shield, representing device protection -->\n<svg viewBox=\"0 0 160 160\" fill=\"none\">\n<rect x=\"55\" y=\"30\" width=\"50\" height=\"90\" rx=\"10\" fill=\"#f1f3f4\"/>\n<path d=\"M105 90l30 12v17c0 20-13 33-30 39-17-6-30-19-30-39V102l30-12z\" fill=\"#e6f4ea\" stroke=\"#188038\" stroke-width=\"3\"/>\n<path d=\"M97 130l7 7 14-14\" stroke=\"#188038\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n\n<h2>5. Spotted a problem?</h2>\n<p>If an app on RummyDex has changed, broken a safety rule, or seems risky, please <b>contact our support team</b> right away so we can look into it.</p>\n\n<p class=\"updated\">Last updated: July 2026</p>\n\n</body>\n</html>\n",
  "disclaimer_heading": "DISCLAIMER ",
  "hero_title_color": "classic-dark",
  "important_notice_heading": "Important Notice & User Advisory",
  "secure_index_title": "Secure Index",
  "trending_searches": [],
  "responsibility_content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Platform Responsibility Clause — RummyDex</title>\n<style>\nbody{max-width:680px;margin:0 auto;padding:30px 20px 70px;font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:#202124;line-height:1.6;font-size:1.15rem;}\nh1{font-size:2.3rem;}\nh2{font-size:1.5rem;margin-top:42px;}\nsvg{display:block;margin:26px auto;width:240px;height:auto;}\n</style>\n</head>\n<body>\n\n<h1>Platform Responsibility Clause</h1>\n\n<h2>Technical operations &amp; secure routing</h2>\n<p>Our operational responsibility is strictly limited to the maintenance of the RummyDex <b>directory infrastructure</b>. We ensure that our platform accurately catalogs offline and casual online applications, and that all outbound resource links are generated through a <b>secure, verified process</b>. We guarantee that the links provided on our site correctly route users to the intended, legitimate third-party developer sources at the time of publication.</p>\n\n<!-- a directory/list page linking out through a verified, secure connection to an external app source -->\n<svg viewBox=\"0 0 300 160\" fill=\"none\">\n<rect x=\"20\" y=\"20\" width=\"100\" height=\"120\" rx=\"10\" fill=\"#f1f3f4\"/>\n<circle cx=\"45\" cy=\"45\" r=\"5\" fill=\"#9aa0a6\"/>\n<rect x=\"58\" y=\"41\" width=\"50\" height=\"8\" rx=\"4\" fill=\"#9aa0a6\"/>\n<circle cx=\"45\" cy=\"70\" r=\"5\" fill=\"#9aa0a6\"/>\n<rect x=\"58\" y=\"66\" width=\"50\" height=\"8\" rx=\"4\" fill=\"#9aa0a6\"/>\n<circle cx=\"45\" cy=\"95\" r=\"5\" fill=\"#188038\"/>\n<rect x=\"58\" y=\"91\" width=\"50\" height=\"8\" rx=\"4\" fill=\"#188038\"/>\n<path d=\"M120 95h60\" stroke=\"#c9a34e\" stroke-width=\"3\" stroke-dasharray=\"2 7\" stroke-linecap=\"round\"/>\n<circle cx=\"220\" cy=\"95\" r=\"42\" fill=\"#e6f4ea\"/>\n<path d=\"M220 68l24 10v14c0 16-10 27-24 32-14-5-24-16-24-32V78l24-10z\" fill=\"#fff\" stroke=\"#188038\" stroke-width=\"2.5\"/>\n<path d=\"M209 96l8 8 16-16\" stroke=\"#188038\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n\n<h2>Limits of content &amp; software liability</h2>\n<p>RummyDex does not host software, APK files, or proprietary source code on our servers. Because our control is strictly limited to our own website interface, <b>we are not liable</b> for the performance, data practices, or digital security of the external third-party destinations. Any downloading or installation of software from external sources is conducted <b>solely at the user's discretion and risk</b>.</p>\n\n<!-- our server/website stays inside a boundary; the external app download sits outside it, disconnected -->\n<svg viewBox=\"0 0 300 160\" fill=\"none\">\n<rect x=\"15\" y=\"30\" width=\"120\" height=\"100\" rx=\"10\" stroke=\"#c9a34e\" stroke-width=\"2\" stroke-dasharray=\"5 6\" fill=\"none\"/>\n<rect x=\"35\" y=\"55\" width=\"80\" height=\"55\" rx=\"6\" fill=\"#f1f3f4\"/>\n<path d=\"M55 75h40M55 90h25\" stroke=\"#9aa0a6\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n<path d=\"M150 80h30\" stroke=\"#d93025\" stroke-width=\"2.5\" stroke-dasharray=\"1 6\" stroke-linecap=\"round\"/>\n<circle cx=\"225\" cy=\"80\" r=\"45\" fill=\"#fce8e6\"/>\n<path d=\"M205 100l40-40M205 60l40 40\" stroke=\"#d93025\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n<path d=\"M225 60v-14M225 100v14M205 80h-14M245 80h14\" stroke=\"#d93025\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n</svg>\n\n<h2>Post-listing developer modifications</h2>\n<p>While our team conducts hands-on evaluation prior to listing any offline or online application, we do not govern the external developers. We are <b>not responsible</b> for unannounced updates, post-launch mechanic alterations, or software modifications implemented by third parties after an app has been published on our site.</p>\n\n<!-- an app icon reviewed with a checkmark, then a clock/refresh showing it changing later, out of our hands -->\n<svg viewBox=\"0 0 300 160\" fill=\"none\">\n<rect x=\"20\" y=\"30\" width=\"90\" height=\"90\" rx=\"14\" fill=\"#e6f4ea\"/>\n<path d=\"M50 75l14 14 26-26\" stroke=\"#188038\" stroke-width=\"5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n<path d=\"M120 75h35\" stroke=\"#9aa0a6\" stroke-width=\"2.5\" stroke-dasharray=\"1 6\" stroke-linecap=\"round\"/>\n<rect x=\"170\" y=\"30\" width=\"90\" height=\"90\" rx=\"14\" fill=\"#fef7e0\"/>\n<circle cx=\"215\" cy=\"75\" r=\"26\" stroke=\"#c9a34e\" stroke-width=\"3.5\"/>\n<path d=\"M215 60v15l12 8\" stroke=\"#c9a34e\" stroke-width=\"3.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg>\n\n<h2>Policy enforcement &amp; user experiences</h2>\n<p>For information regarding how RummyDex handles non-compliant developer updates, community oversight, and user-submitted reviews, please refer to our dedicated <b>Report &amp; Removal Policy</b> and our <b>Terms &amp; Conditions</b>.</p>\n\n</body>\n</html>\n",
  "secure_index_subtitle": "Verified & Transparent App Marketplace",
  "last_updated": "2026-07-26T15:10:34.357Z"
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
    "related_app_id": "q82dbbwh4",
    "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>A New Era of Casual Gaming Has Arrived!</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh1 {\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-top: 30px;\n  margin-bottom: 8px;\n}\np {\n  font-size: 15px;\n  color: #3c4043;\n}\nul {\n  padding-left: 20px;\n}\nli {\n  font-size: 15px;\n  color: #3c4043;\n  margin-bottom: 10px;\n}\n</style>\n</head>\n<body>\n\n<h1>A New Era of Casual Gaming Has Arrived!</h1>\n<p>We are incredibly excited to announce that <strong>Spin Crush</strong> has officially been added to our catalog. If you are tired of cluttering your phone with dozens of separate game downloads, your ultimate solution is finally here.</p>\n<p><strong>Spin Crush</strong> is a comprehensive digital arcade hub that houses a massive, constantly rotating library of high-quality thematic mini-games in one single, optimized application.</p>\n\n<h2>What is Inside Spin Crush?</h2>\n<p>Instead of offering just one repetitive game loop, <strong>Spin Crush</strong> delivers a diverse digital playground. Here is a sneak peek at the adventures waiting for you inside the lobby:</p>\n<ul>\n  <li><strong>Baking Master:</strong> Step into a virtual kitchen and match culinary ingredients to trigger satisfying visual combos.</li>\n  <li><strong>Thor God of Lightning &amp; Xerxes:</strong> Dive into epic mythological worlds featuring stunning 3D animations and dynamic puzzle mechanics.</li>\n  <li><strong>Action &amp; Adventure:</strong> Test your reflexes in <em>Royale Battleground</em>, step into the ring with <em>Boxing King</em>, or survive the prehistoric world of <em>Jurassic Kingdom</em>.</li>\n</ul>\n\n<h2>Why You Will Love It</h2>\n<ul>\n  <li><strong>Optimized Storage &amp; Performance:</strong> Get instant access to dozens of games without heavy loading screens or draining your battery.</li>\n  <li><strong>Offline Gameplay Ready:</strong> No Wi-Fi? No problem! Enjoy uninterrupted casual entertainment wherever you go.</li>\n  <li><strong>Safe, Virtual Progression:</strong> Spin Crush focuses 100% on risk-free fun. Build your profile, collect virtual points, and beat your own high scores in a secure, family-friendly environment.</li>\n</ul>\n\n<h2>Ready to Play?</h2>\n<p>The wait is over. Head over to the official <strong>Spin Crush</strong> app page on our platform, hit download, and start exploring the ultimate casual gaming hub today!</p>\n\n</body>\n</html>",
    "ceo_description": "Platform Updates",
    "slug": "spin-crush-app-launch",
    "link": "https://www.rummydex.com/app/spin-crush",
    "category": "Yono",
    "ceo_name": "Admin Team",
    "seo_keywords": "spin crush news, new arcade app, spin crush launch, casual game hub, virtual coin games, offline mini-games",
    "target_region": "Global",
    "tags": [],
    "description": "We are thrilled to announce the launch of Spin Crush on our platform! Discover a massive collection of offline mini-games, dynamic 3D graphics, and virtual arcade challenges—all inside one lightweight application.",
    "title": "APP ALERT: Spin Crush is Now Live!",
    "seo_title": "Spin Crush Launched - All-In-One Casual Arcade Hub | News",
    "logo_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877361/.trashed-1787468954-download_12_j8vn7j_wge7co.webp",
    "description_html": "<p>News HTML...</p>",
    "author": "Admin",
    "seo_description": "Spin Crush is officially live! Read our latest announcement to see how this centralized app brings offline mini-games and virtual rewards straight to your device.",
    "id": "nt4at52f0",
    "canonical_url": "https://www.rummydex.com/news/spin-crush-app-launch",
    "read_time": "2 min",
    "og_image_url": "",
    "date": "2026-07-26T04:21:09.928Z"
  },
  {
    "target_region": "Global",
    "tags": [],
    "title": "NEW APP ALERT: Welcome to Yono Arcade!",
    "description": "Yono Arcade is officially live! Discover a curated multi-game portal featuring Sugar Rush 1000, 12 Burning Baseballs, Super Ace Deluxe, and Fortune Gems 500 in one high-performance dashboard.",
    "related_app_id": "31og4l26i",
    "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Welcome to Your New Favorite Digital Lounge: Yono Arcade!</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh1 {\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-top: 30px;\n  margin-bottom: 8px;\n}\np {\n  font-size: 15px;\n  color: #3c4043;\n}\nul {\n  padding-left: 20px;\n}\nli {\n  font-size: 15px;\n  color: #3c4043;\n  margin-bottom: 10px;\n}\n</style>\n</head>\n<body>\n\n<h1>Welcome to Your New Favorite Digital Lounge: Yono Arcade!</h1>\n<p>We are thrilled to announce that <strong>Yono Arcade</strong> has officially launched on our platform. Designed as a premium multi-game portal, this app brings a carefully curated selection of interactive mini-games straight to your screen.</p>\n<p>Forget about navigating bloated menus or installing separate packages. <strong>Yono Arcade</strong> features a streamlined, high-performance dashboard that lets you instantly switch between incredibly diverse visual themes and arcade challenges without any lag.</p>\n\n<h2>What is Featured in Yono Arcade?</h2>\n<p>Our latest addition is packed with engaging titles to suit every mood. Here is a look at the hand-picked adventures you can play right now:</p>\n<ul>\n  <li><strong>Sugar Rush 1000:</strong> Dive into a vibrant, candy-themed puzzle universe filled with cascading sweets and satisfying chain reactions.</li>\n  <li><strong>12 Burning Baseballs:</strong> Test your reflexes in this high-octane sports arcade mode, complete with fiery animations and fast-paced symbol alignment.</li>\n  <li><strong>Super Ace Deluxe &amp; Fortune Gems 500:</strong> Enjoy energetic card-matching mechanics and explore ancient jungle temples to uncover glowing visual combinations.</li>\n</ul>\n\n<h2>Why You Will Love This App</h2>\n<ul>\n  <li><strong>Instant Load Architecture:</strong> Tap any icon in the central lobby to jump straight into the action with zero secondary download delays.</li>\n  <li><strong>Offline Mode Ready:</strong> Enjoy full gameplay mechanics and high-score chasing even when you are disconnected from Wi-Fi or mobile data.</li>\n  <li><strong>Safe, Risk-Free Entertainment:</strong> Progress through levels and collect virtual achievements in a purely casual, family-friendly simulation environment.</li>\n</ul>\n\n<h2>Ready to Set a New High Score?</h2>\n<p>The ultimate digital amusement gallery is waiting for you. Head over to the official <strong>Yono Arcade</strong> page on our platform, download the app, and start your casual gaming journey today!</p>\n\n</body>\n</html>\n",
    "ceo_description": "Platform Updates",
    "link": "https://www.rummydex.com/app/yono-arcade",
    "slug": "yono-arcade-app-launch",
    "seo_keywords": "yono arcade news, yono arcade app launch, sugar rush 1000, super ace deluxe, casual arcade portal",
    "ceo_name": "Admin Team",
    "category": "Yono",
    "id": "wyxjm2cjb",
    "author": "Admin",
    "seo_description": "Yono Arcade has officially launched! Read our full update to explore offline mini-games, instant-load lobby, and safe virtual achievements.",
    "description_html": "<p>News HTML...</p>",
    "canonical_url": "https://www.rummydex.com/news/yono-arcade-app-launch",
    "date": "2026-07-26T04:48:49.404Z",
    "og_image_url": "",
    "read_time": "2 min",
    "seo_title": "Yono Arcade App Launched - Multi-Game Arcade Portal | News",
    "logo_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877459/download_14_krbwrv.webp"
  },
  {
    "seo_description": "Read our latest announcement about Jaiho 91! Join the ultimate online arcade hub to play Jungle Delight and Boxing King while tracking your virtual achievements.",
    "id": "dgx7mxlnd",
    "author": "Admin",
    "description_html": "<p>News HTML...</p>",
    "date": "2026-07-26T05:04:28.405Z",
    "og_image_url": "",
    "read_time": "2 min",
    "canonical_url": "https://www.rummydex.com/news/jaiho-91-arcade-launch",
    "seo_title": "Jaiho 91 Launched - Online Arcade Hub & Casual Portal | News",
    "logo_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877512/download_16_fznggx.webp",
    "tags": [],
    "target_region": "Global",
    "title": "NEW APP ALERT: Dive Into the World of Jaiho 91!",
    "description": "Jaiho 91 is now available on our platform! Experience a premium multi-game portal featuring global online leaderboards, dynamic profile leveling, and hit titles like Dragon Hatch II and Fortune Lakshmi.",
    "ceo_description": " Platform Updates",
    "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Discover Endless Entertainment with Jaiho 91!</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh1 {\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-top: 30px;\n  margin-bottom: 8px;\n}\np {\n  font-size: 15px;\n  color: #3c4043;\n}\nul {\n  padding-left: 20px;\n}\nli {\n  font-size: 15px;\n  color: #3c4043;\n  margin-bottom: 10px;\n}\n</style>\n</head>\n<body>\n\n<h1>Discover Endless Entertainment with Jaiho 91!</h1>\n<p>We are incredibly proud to announce the addition of <strong>Jaiho 91</strong> to our growing catalog of premium digital experiences. If you are searching for a highly interactive and visually spectacular gaming hub, this is exactly what you need.</p>\n<p><strong>Jaiho 91</strong> stands out as a state-of-the-art online arcade portal that seamlessly connects players to a wide variety of casual adventures. Instead of juggling multiple applications, you can dive straight into sports action, tropical puzzles, and mythological journeys all from a single dashboard.</p>\n\n<h2>What Awaits You Inside?</h2>\n<p>This application is packed with high-quality titles that cater to all types of casual players. Here are a few highlights from the impressive roster:</p>\n<ul>\n  <li><strong>Fortune Lakshmi &amp; Jungle Delight:</strong> Solve ancient temple puzzles or match tropical symbols alongside an animated lemur guide to trigger massive virtual score combos.</li>\n  <li><strong>Boxing King:</strong> Step into the ring in this fast-paced sports arcade mode, where timing your strikes perfectly fills your knockout gauge.</li>\n  <li><strong>Dragon Hatch II:</strong> Align mythical dragon eggs and fire gems to accumulate energy, leveling up your dragon nest for spectacular visual rewards.</li>\n</ul>\n\n<h2>Unmatched Platform Features</h2>\n<ul>\n  <li><strong>Dynamic Level-Up System:</strong> Every game you play earns you account-wide experience points (XP), unlocking higher difficulty tiers and exclusive profile themes.</li>\n  <li><strong>Online Leaderboards:</strong> Connect to global servers and compete in friendly community high-score challenges without ever risking real money.</li>\n  <li><strong>Seamless Cloud Saving:</strong> Rest easy knowing your hard-earned virtual achievements and avatar progression are safely synchronized across all your devices.</li>\n</ul>\n\n<h2>Join the Community Today!</h2>\n<p>The ultimate online multi-game ecosystem is officially live. Head over to the official <strong>Jaiho 91</strong> page on our platform, download the app, and start leveling up your profile today!</p>\n\n</body>\n</html>\n",
    "related_app_id": "s5u553ymi",
    "seo_keywords": "jaiho 91 news, jaiho 91 app launch, dragon hatch 2, boxing king arcade, online casual game portal",
    "ceo_name": "Admin Team",
    "category": "Yono",
    "link": "https://www.rummydex.com/app/jaiho-91",
    "slug": "jaiho-91-arcade-launch"
  },
  {
    "category": "Yono",
    "ceo_name": "Admin Team",
    "seo_keywords": "",
    "slug": "bingo-101-arcade-launch",
    "link": "https://www.rummydex.com/app/bingo-101",
    "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Step Into a World of Endless Arcade Fun with Bingo 101!</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh1 {\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-top: 30px;\n  margin-bottom: 8px;\n}\np {\n  font-size: 15px;\n  color: #3c4043;\n}\nul {\n  padding-left: 20px;\n}\nli {\n  font-size: 15px;\n  color: #3c4043;\n  margin-bottom: 10px;\n}\n</style>\n</head>\n<body>\n\n<h1>Step Into a World of Endless Arcade Fun with Bingo 101!</h1>\n<p>We are excited to share that <strong>Bingo 101</strong> is officially live in our digital catalog. Built for casual gaming enthusiasts who appreciate polished visual design and rewarding leveling mechanics, this app elevates mobile arcade play to a whole new level.</p>\n<p>Rather than managing a phone full of single-purpose applications, <strong>Bingo 101</strong> delivers a dynamic multi-game portal. Players can instantly jump between subterranean mining expeditions, underwater ocean quests, and high-speed target action directly from one intuitive central hub.</p>\n\n<h2>Featured Mini-Games Inside Bingo 101</h2>\n<p>The application launches with an impressive array of unique titles. Here is a look at the featured games waiting for you:</p>\n<ul>\n  <li><strong>Gemstones Gold:</strong> Dig deep into subterranean shafts, aligning rare crystals and gold nuggets to power up your mining tools and unlock massive visual score bonuses.</li>\n  <li><strong>Poseidon II:</strong> Journey into the underwater realm of Atlantis, charging Poseidon’s Trident through strategic symbol matching to unleash screen-shaking tidal animations.</li>\n  <li><strong>Jurassic Kingdom &amp; Crazy Hunter:</strong> Hatch prehistoric eggs in a dinosaur survival simulation or test your reflexes in a cannon-firing arcade shooter built for fast-paced target action.</li>\n</ul>\n\n<h2>Key Platform Highlights</h2>\n<ul>\n  <li><strong>Tiered Profile XP:</strong> Earn account experience with every play session, leveling up your profile to unlock higher stage difficulty tiers and exclusive visual badges.</li>\n  <li><strong>Online Scoreboards:</strong> Connect online to sync your high scores to global leaderboards and track your personal progress alongside other players.</li>\n  <li><strong>Pure Casual Experience:</strong> Enjoy stress-free, risk-free entertainment built 100% around virtual rewards and milestone achievements.</li>\n</ul>\n\n<h2>Start Your Next Adventure Today!</h2>\n<p>Ready to jump into the action? Head over to the official <strong>Bingo 101</strong> app page on our platform, download the application, and start climbing the leaderboards today!</p>\n\n</body>\n</html>\n",
    "ceo_description": "Platform Updates",
    "related_app_id": "awus3qajs",
    "description": "Bingo 101 is now officially live on our platform! Step into a next-generation casual arcade hub featuring Gemstones Gold, Poseidon II, Jurassic Kingdom, and Crazy Hunter with live online leaderboard tracking.",
    "title": "NEW APP ALERT: Step Into Bingo 101!",
    "tags": [],
    "target_region": "Global",
    "logo_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877567/download_18_lljdaa.webp",
    "seo_title": "Bingo 101 App Launched - Casual Arcade Hub & Online Games | News",
    "read_time": "2 min",
    "og_image_url": "",
    "date": "2026-07-26T05:07:13.873Z",
    "canonical_url": "https://www.rummydex.com/news/bingo-101-arcade-launch",
    "description_html": "<p>News HTML...</p>",
    "author": "Admin",
    "seo_description": "Bingo 101 has officially launched! Read our full update to explore subterranean mining puzzles, underwater myths, and online target-shooting arcade games.",
    "id": "e7vba3ez5"
  },
  {
    "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Redefining Mobile Leisure: Welcome to OK Rummy!</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh1 {\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-top: 30px;\n  margin-bottom: 8px;\n}\np {\n  font-size: 15px;\n  color: #3c4043;\n}\nul {\n  padding-left: 20px;\n}\nli {\n  font-size: 15px;\n  color: #3c4043;\n  margin-bottom: 10px;\n}\n</style>\n</head>\n<body>\n\n<h1>Redefining Mobile Leisure: Welcome to OK Rummy!</h1>\n<p>We are thrilled to reveal our latest platform arrival: <strong>OK Rummy</strong>! Engineered specifically for modern mobile hardware, this release introduces ultra-smooth performance, personalized interfaces, and visual polish to our casual arcade collection.</p>\n<p>Unlike standard multi-game applications, <strong>OK Rummy</strong> introduces a fully customizable home grid system. You can rearrange your dashboard, pin your favorite titles to the top, and experience blistering fast transition speeds powered by a new lightweight rendering engine.</p>\n\n<h2>Unique Features Inside OK Rummy</h2>\n<p>This release introduces several platform innovations designed to elevate your daily casual sessions:</p>\n<ul>\n  <li><strong>120Hz Display Engine:</strong> Optimized for modern AMOLED screens to deliver ultra-smooth visual effects and zero input delay during gameplay.</li>\n  <li><strong>Personalized Dashboard Pinning:</strong> Organize your lobby by dragging and pinning your most-played mini-games directly to the top of your screen for instant launch.</li>\n  <li><strong>3D Interactive Trophy Vault:</strong> Earn rare digital badges and milestone artifacts as you build high-score streaks across different titles.</li>\n  <li><strong>Instant Asset Caching:</strong> Sub-games pre-load in the background, eliminating loading screens when switching between game modes.</li>\n</ul>\n\n<h2>Featured Game World Highlights</h2>\n<p>Explore an eclectic roster of visually striking mini-games built for high-frame-rate performance:</p>\n<ul>\n  <li><strong>Fortune Tiger:</strong> A lively feline puzzle adventure featuring golden color palettes, swift touch controls, and rapid combo triggers.</li>\n  <li><strong>King of Olympus:</strong> A mythic realm powered by real-time particle lighting, electric audio effects, and cinematic thunderbolt sequences.</li>\n  <li><strong>Bison Moon &amp; Wild Bandito:</strong> Atmospheric night-sky puzzle challenges paired with high-energy fiesta rhythm mechanics.</li>\n</ul>\n\n<h2>Build Your Custom Lounge Today!</h2>\n<p>Upgrade your mobile gaming experience with our most customizable release yet. Head over to the official <strong>OK Rummy</strong> showcase page on our portal, download the application, and start building your personal trophy collection today!</p>\n\n</body>\n</html>\n",
    "ceo_description": "Platform Updates",
    "related_app_id": "0uiuuhdrj",
    "link": "https://www.rummydex.com/app/ok-rummy",
    "slug": "ok-rummy-platform-launch",
    "ceo_name": "Admin Team",
    "seo_keywords": "ok rummy news, ok rummy app launch, 120hz mobile arcade, fortune tiger, king of olympus, custom dashboard portal",
    "category": "Yono",
    "tags": [],
    "target_region": "Global",
    "title": "📢 NEW APP ALERT: Experience High-Performance Gaming with OK Rummy!",
    "description": "OK Rummy is officially live on our platform! Enjoy a high-performance arcade hub featuring 120Hz display optimization, customizable dashboard pinning, an interactive 3D Trophy Vault, and top titles like Fortune Tiger and King of Olympus.",
    "seo_title": "OK Rummy App 2026 - 120Hz Arcade Engine & Custom Dashboard | News",
    "logo_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784877617/download_19_w2sxhp.webp",
    "author": "Admin",
    "seo_description": "OK Rummy has officially launched! Read our full news update to explore custom lobby layout pinning, 3D collectible trophies, and ultra-fluid casual gameplay.",
    "id": "1t6avakci",
    "description_html": "<p>News HTML...</p>",
    "canonical_url": "https://www.rummydex.com/news/ok-rummy-platform-launch",
    "date": "2026-07-26T06:46:07.017Z",
    "read_time": "2 min",
    "og_image_url": ""
  },
  {
    "ceo_description": "Platform Updates",
    "content": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>Unwind and Play: Welcome to Jaiho Rummy!</title>\n<style>\nbody {\n  font-family: Arial, sans-serif;\n  color: #202124;\n  max-width: 700px;\n  margin: 40px auto;\n  padding: 0 20px;\n  line-height: 1.6;\n}\nh1 {\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\nh2 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-top: 30px;\n  margin-bottom: 8px;\n}\np {\n  font-size: 15px;\n  color: #3c4043;\n}\nul {\n  padding-left: 20px;\n}\nli {\n  font-size: 15px;\n  color: #3c4043;\n  margin-bottom: 10px;\n}\n</style>\n</head>\n<body>\n\n<h1>Unwind and Play: Welcome to Jaiho Rummy!</h1>\n<p>We are incredibly excited to introduce <strong>Jaiho Rummy</strong> to our digital catalog. Designed for players looking to escape the clutter of traditional multi-game apps, this release serves as a premium, relaxing digital retreat directly on your smartphone.</p>\n<p>Moving away from chaotic menus and heavy loading screens, <strong>Jaiho Rummy</strong> features an adaptive, minimalist dashboard. The application is built on a highly efficient background rendering engine, ensuring that your transition into casual puzzle-solving is incredibly smooth, responsive, and battery-friendly.</p>\n\n<h2>Engineered for Premium Leisure</h2>\n<p>This application introduces state-of-the-art features tailored for stress-free entertainment:</p>\n<ul>\n  <li><strong>Eco-Friendly Rendering:</strong> The app draws less than 150MB of RAM and includes a dedicated Eco-Mode, allowing you to play for hours without draining your battery or overheating your device.</li>\n  <li><strong>State-Preservation Engine:</strong> Need to pause suddenly? The app auto-saves your grid coordinates every 0.5 seconds. Reopen the app later and resume the exact frame of your puzzle without losing any progress.</li>\n  <li><strong>Acoustic Spatial Audio:</strong> Enjoy custom-engineered, soft-clipping audio tracks that provide satisfying, ASMR-style feedback without overwhelming your speakers.</li>\n</ul>\n\n<h2>Featured Puzzle & Arcade Experiences</h2>\n<p>Dive into our most deeply satisfying and visually polished game modes yet:</p>\n<ul>\n  <li><strong>Mystic Aviator:</strong> A gravity-based flight simulator where you read wind particles and catch updrafts to guide a minimalist glider through a beautiful low-poly sky kingdom.</li>\n  <li><strong>Aqua Merge 2048:</strong> Merge buoyant numerical bubbles in a dynamic underwater environment. Watch as your combinations unlock bioluminescent reefs and ambient aquatic flora.</li>\n  <li><strong>Crystal Guardian:</strong> Deflect and mix beams of colored light across a hexagonal grid using elemental prisms to unlock glowing, high-definition particle explosions.</li>\n</ul>\n\n<h2>Start Your Digital Retreat Today!</h2>\n<p>The ultimate relaxing arcade experience is waiting for you. Head over to the official <strong>Jaiho Rummy</strong> app page on our portal, download the application, and discover a smarter way to play today!</p>\n\n</body>\n</html>\n",
    "related_app_id": "9a05609sb",
    "category": "Yono",
    "ceo_name": "Admin Team",
    "seo_keywords": "jaiho rummy news, jaiho rummy app launch, casual logic puzzles, mystic aviator, aqua merge, battery optimized arcade",
    "slug": "jaiho-rummy-app-launch",
    "link": "https://www.rummydex.com/app/jaiho-rummy",
    "target_region": "Global",
    "tags": [],
    "description": "Jaiho Rummy is officially live! Step into a premium casual gaming lounge featuring acoustic soundscapes, relaxing logic puzzles like Aqua Merge, and an eco-friendly engine designed to save battery life.",
    "title": "📢 PLATFORM UPDATE: Discover Your Digital Retreat with Jaiho Rummy!",
    "seo_title": "Jaiho Rummy Launch - Premium Casual Arcade & Logic Puzzles | News",
    "logo_url": "https://res.cloudinary.com/diewalae4/image/upload/v1784878878/images_6_p5wj8d.jpg",
    "description_html": "<p>News HTML...</p>",
    "author": "Admin",
    "id": "l047gofso",
    "seo_description": "Jaiho Rummy is now available! Read our full update to learn about its battery-optimized rendering engine, relaxing acoustic soundscapes, and advanced casual logic puzzles.",
    "read_time": "2 min",
    "og_image_url": "",
    "date": "2026-07-26T07:44:00.257Z",
    "canonical_url": "https://www.rummydex.com/news/jaiho-rummy-app-launch"
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
