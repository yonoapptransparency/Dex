import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Heart, ShieldCheck, Smile, SunMedium, Compass } from 'lucide-react';

interface AdminWelcomeBannerProps {
  sessionTimeLeft?: number;
  adminEmail?: string;
  onRefreshSession?: () => void;
}

const GREETINGS_LIST = [
  {
    prefix: "Welcome Boss",
    tagline: "Happy day for your work! ✨",
    detail: "All databases and security systems are synced & optimized for you. Wishing you a joyful, productive session!",
    accent: "from-blue-500 via-indigo-500 to-purple-500",
    badge: "Positive Vibe 🌟",
    icon: Sparkles
  },
  {
    prefix: "Welcome Back, Admin",
    tagline: "Boss, wishing you a super happy day! 💖",
    detail: "Your platform is running with 100% health and peak performance. Take a smile and let's achieve big things today!",
    accent: "from-emerald-500 via-teal-500 to-cyan-500",
    badge: "Happiness First 😊",
    icon: Smile
  },
  {
    prefix: "Welcome Boss",
    tagline: "Great energy & big wins ahead! 🚀",
    detail: "Everything is ready for your command. May your day be filled with ease, clarity, and awesome results!",
    accent: "from-amber-400 via-rose-500 to-indigo-500",
    badge: "Pure Inspiration ✨",
    icon: SunMedium
  },
  {
    prefix: "Welcome Admin",
    tagline: "Boss, happy day for your work & vision! 💎",
    detail: "Security tokens valid, cloud sync active, and ready for you. Let's make today extraordinary!",
    accent: "from-cyan-400 via-blue-500 to-violet-600",
    badge: "Admin Master 🏆",
    icon: Compass
  },
  {
    prefix: "Welcome Boss",
    tagline: "Smile and conquer the day! 🌈",
    detail: "You bring positive energy to this entire workspace. Keep shining and having a peaceful, successful time!",
    accent: "from-fuchsia-500 via-pink-500 to-rose-500",
    badge: "Make Me Happy 💖",
    icon: Heart
  }
];

const FIFTEEN_MINUTES_MS = 15 * 60 * 1000;
const STORAGE_KEY = 'rummydex_admin_welcome_last_shown';

export const AdminWelcomeBanner3D: React.FC<AdminWelcomeBannerProps> = ({
  sessionTimeLeft = 15 * 60,
  adminEmail
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeGreeting, setActiveGreeting] = useState(GREETINGS_LIST[0]);
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Trigger on mount or 15m intervals
  useEffect(() => {
    const checkShouldShow = () => {
      try {
        const lastShown = localStorage.getItem(STORAGE_KEY);
        const now = Date.now();

        if (!lastShown || now - parseInt(lastShown, 10) >= FIFTEEN_MINUTES_MS) {
          // Select a random fresh greeting each time
          const randomIndex = Math.floor(Math.random() * GREETINGS_LIST.length);
          const chosenGreeting = GREETINGS_LIST[randomIndex];
          setActiveGreeting(chosenGreeting);
          setDisplayedText('');
          setIsTypingComplete(false);
          setIsVisible(true);
          localStorage.setItem(STORAGE_KEY, now.toString());
        }
      } catch (e) {
        setIsVisible(true);
      }
    };

    checkShouldShow();
    const interval = setInterval(checkShouldShow, 30000);
    return () => clearInterval(interval);
  }, []);

  // Left-to-right smooth stylish assistant typewriter effect
  useEffect(() => {
    if (!isVisible) return;

    const fullString = `${activeGreeting.prefix} — ${activeGreeting.tagline}`;
    let currentIndex = 0;
    setDisplayedText('');
    setIsTypingComplete(false);

    const typingTimer = setInterval(() => {
      if (currentIndex <= fullString.length) {
        setDisplayedText(fullString.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingTimer);
      }
    }, 28); // Fast, stylish, smooth typing speed

    // Auto-dismiss after 9 seconds of peaceful reading
    const autoDismissTimer = setTimeout(() => {
      setIsVisible(false);
    }, 9500);

    return () => {
      clearInterval(typingTimer);
      clearTimeout(autoDismissTimer);
    };
  }, [isVisible, activeGreeting]);

  const IconComponent = activeGreeting.icon;

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center items-start px-4 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.92, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -25, scale: 0.95, filter: 'blur(6px)', transition: { duration: 0.3 } }}
            transition={{ type: 'spring', damping: 22, stiffness: 280 }}
            className="pointer-events-auto w-full max-w-xl overflow-hidden rounded-2xl sm:rounded-full bg-slate-900/90 text-white border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(59,130,246,0.25)] backdrop-blur-2xl px-4 py-3 sm:py-3.5 transition-all"
          >
            {/* Top glowing ambient gradient line */}
            <div className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${activeGreeting.accent} opacity-90`} />

            <div className="flex items-center justify-between gap-3 relative z-10">
              {/* Left animated AI assistant badge */}
              <div className="flex items-center gap-3 min-w-0">
                <div className={`relative shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-full bg-gradient-to-tr ${activeGreeting.accent} p-0.5 shadow-md flex items-center justify-center`}>
                  <div className="w-full h-full bg-slate-950/80 rounded-xl sm:rounded-full flex items-center justify-center">
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 animate-pulse" />
                  </div>
                  {/* Subtle live indicator */}
                  <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                </div>

                {/* Center text with left-to-right stylish writing effect */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs sm:text-sm font-black tracking-tight text-white flex items-center gap-1.5">
                      {displayedText}
                      {!isTypingComplete && (
                        <span className="inline-block w-1.5 h-3.5 bg-blue-400 animate-pulse align-middle ml-0.5" />
                      )}
                    </span>
                    <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 text-[10px] font-bold text-amber-300 border border-white/10">
                      {activeGreeting.badge}
                    </span>
                  </div>

                  <p className="text-[11px] sm:text-xs text-slate-300 font-medium truncate mt-0.5">
                    {activeGreeting.detail}
                  </p>
                </div>
              </div>

              {/* Right dismiss button */}
              <div className="flex items-center gap-1.5 shrink-0 pl-1">
                <button
                  type="button"
                  onClick={() => setIsVisible(false)}
                  className="p-1.5 rounded-full bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-all cursor-pointer border border-white/5"
                  title="Dismiss greeting"
                  aria-label="Dismiss greeting"
                >
                  <X size={14} />
                </button>
              </div>
            </div>

            {/* Bottom micro progress line indicating gentle auto-dismiss */}
            <motion.div
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{ duration: 9.5, ease: 'linear' }}
              className={`absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r ${activeGreeting.accent} opacity-60`}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
