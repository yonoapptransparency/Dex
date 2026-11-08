import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import YouTubePlayer from './YouTubePlayer';
import { AppConfig } from '../../types';
import { getOptimizedImageUrl } from '../../seo/utils';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface AppScreenshotsProps {
  app: AppConfig;
}

export default function AppScreenshots({ app }: AppScreenshotsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const totalShots = app.screenshots?.length || 0;

  const scrollToIndex = useCallback(
    (targetIdx: number, smooth: boolean = true) => {
      if (!totalShots) return;
      const clamped = Math.max(0, Math.min(totalShots - 1, targetIdx));
      setCurrentIndex(clamped);
      const container = scrollRef.current;
      if (container && container.children[clamped]) {
        const child = container.children[clamped] as HTMLElement;
        container.scrollTo({
          left: child.offsetLeft,
          behavior: smooth ? 'smooth' : 'auto',
        });
      }
    },
    [totalShots]
  );

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeLightbox = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!isModalOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    // Jump to selected image when modal opens
    const timer = setTimeout(() => {
      if (scrollRef.current && scrollRef.current.children[currentIndex]) {
        const child = scrollRef.current.children[currentIndex] as HTMLElement;
        scrollRef.current.scrollLeft = child.offsetLeft;
      }
    }, 10);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [isModalOpen]); // Only run initial scroll on modal open

  useEffect(() => {
    if (!isModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        scrollToIndex(currentIndex - 1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        scrollToIndex(currentIndex + 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, currentIndex, scrollToIndex]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (!isModalOpen) return;
    const container = e.currentTarget;
    const width = container.clientWidth;
    if (width === 0) return;

    const newIndex = Math.round(container.scrollLeft / width);
    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < totalShots) {
      setCurrentIndex(newIndex);
    }
  };

  if (!app.screenshots?.length && !app.video_url) return null;

  return (
    <div className="w-full mb-6">
      {/* Inline Gallery */}
      <div className="flex overflow-x-auto hide-scrollbar no-scrollbar [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden gap-3 px-4 sm:px-0 pb-3 snap-x items-center -mx-4 sm:-mx-0">
        {app.video_url && <YouTubePlayer videoUrl={app.video_url} />}
        {app.screenshots &&
          app.screenshots.map((imgUrl, i) => (
            <button
              type="button"
              key={`screenshot-${i}`}
              onClick={() => openLightbox(i)}
              className="flex-none w-[150px] sm:w-[220px] aspect-[9/16] rounded-xl overflow-hidden snap-center bg-zinc-100 dark:bg-zinc-800 shadow-sm border border-black/5 dark:border-white/10 active:scale-95 transition-transform cursor-pointer"
              aria-label={`View screenshot ${i + 1} fullscreen`}
            >
              <img
                src={getOptimizedImageUrl(imgUrl, 400)}
                alt={`${app.name} screenshot ${i + 1} - gameplay preview`}
                width={150}
                height={267}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover select-none pointer-events-none"
              />
            </button>
          ))}
      </div>

      {/* Fullscreen Swipeable Lightbox Modal */}
      {isModalOpen &&
        app.screenshots &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Screenshot preview gallery"
            className="fixed inset-0 z-[99999] bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md animate-in fade-in duration-200 overflow-hidden overscroll-none w-screen h-[100dvh] select-none"
          >
            {/* Top Bar */}
            <div className="absolute top-0 inset-x-0 flex justify-between items-center p-4 text-zinc-900 dark:text-zinc-100 z-20 pointer-events-none">
              <span className="font-bold text-xs sm:text-sm px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 backdrop-blur-xs tabular-nums">
                {currentIndex + 1} / {app.screenshots.length}
              </span>
              <button
                type="button"
                onClick={closeLightbox}
                className="p-2.5 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-colors pointer-events-auto cursor-pointer active:scale-95"
                aria-label="Close gallery"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Prev / Next Navigation Buttons */}
            {app.screenshots.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToIndex(currentIndex - 1);
                  }}
                  disabled={currentIndex === 0}
                  aria-label="Previous screenshot"
                  className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full items-center justify-center bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 text-zinc-900 dark:text-zinc-100 disabled:opacity-25 disabled:pointer-events-none transition-all cursor-pointer active:scale-95"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToIndex(currentIndex + 1);
                  }}
                  disabled={currentIndex === app.screenshots.length - 1}
                  aria-label="Next screenshot"
                  className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full items-center justify-center bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 text-zinc-900 dark:text-zinc-100 disabled:opacity-25 disabled:pointer-events-none transition-all cursor-pointer active:scale-95"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Full Screen Scrollable Gallery (Tap backdrop to close) */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="absolute inset-0 w-screen h-[100dvh] flex flex-row overflow-x-auto overflow-y-hidden snap-x snap-mandatory hide-scrollbar touch-pan-x"
            >
              {app.screenshots.map((imgUrl, i) => (
                <div
                  key={`full-screenshot-${i}`}
                  onClick={closeLightbox}
                  className="flex-none w-screen h-[100dvh] snap-center flex items-center justify-center p-3 sm:p-10"
                >
                  <img
                    src={getOptimizedImageUrl(imgUrl, 1200)}
                    alt={`${app.name} screenshot ${i + 1} - gameplay preview`}
                    onClick={(e) => e.stopPropagation()}
                    className="max-w-full max-h-[84dvh] object-contain rounded-xl shadow-lg border border-black/5 dark:border-white/10"
                    loading={i === currentIndex ? 'eager' : 'lazy'}
                    draggable={false}
                  />
                </div>
              ))}
            </div>

            {/* Bottom Pagination Dots */}
            {app.screenshots.length > 1 && (
              <div className="absolute bottom-4 inset-x-0 flex items-center justify-center gap-1.5 z-20 pointer-events-none">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/10 dark:bg-white/10 backdrop-blur-xs pointer-events-auto">
                  {app.screenshots.map((_, i) => (
                    <button
                      key={`dot-${i}`}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        scrollToIndex(i);
                      }}
                      aria-label={`Go to screenshot ${i + 1}`}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        i === currentIndex
                          ? 'w-5 bg-blue-600 dark:bg-blue-400'
                          : 'w-2 bg-zinc-400/60 dark:bg-zinc-500/60 hover:bg-zinc-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>,
          document.body
        )}
    </div>
  );
}

