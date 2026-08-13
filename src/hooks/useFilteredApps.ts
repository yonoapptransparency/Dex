import { useMemo } from 'react';
import { AppConfig } from '../typesPublic';

export function useFilteredApps(
  mockApps: AppConfig[],
  deferredSearchTerm: string,
  deferredRatingFilter: string,
  deferredSortBy: string
): AppConfig[] {
  return useMemo(() => {
    const term = deferredSearchTerm.toLowerCase().trim();
    let baseApps = [...mockApps];

    // Filter by Rating
    if (deferredRatingFilter !== 'all') {
      const minRating = parseFloat(deferredRatingFilter);
      if (!isNaN(minRating)) {
        baseApps = baseApps.filter(app => {
          const r = typeof app.rating === 'number' ? app.rating : parseFloat(app.rating as unknown as string) || 0;
          return r >= minRating;
        });
      }
    }

    if (!term) {
      if (deferredSortBy === 'rating_desc') {
        baseApps.sort((a, b) => {
          const ra = typeof a.rating === 'number' ? a.rating : parseFloat(a.rating as unknown as string) || 0;
          const rb = typeof b.rating === 'number' ? b.rating : parseFloat(b.rating as unknown as string) || 0;
          return rb - ra;
        });
      } else if (deferredSortBy === 'rating_asc') {
        baseApps.sort((a, b) => {
          const ra = typeof a.rating === 'number' ? a.rating : parseFloat(a.rating as unknown as string) || 0;
          const rb = typeof b.rating === 'number' ? b.rating : parseFloat(b.rating as unknown as string) || 0;
          return ra - rb;
        });
      } else {
        baseApps.sort((a, b) => (a.serial_number || 0) - (b.serial_number || 0));
      }
      return baseApps;
    }

    const scored = baseApps
      .map(app => {
        let score = 0;
        const name = (app.name || "").toLowerCase();
        const cat = (app.category || "").toLowerCase();
        const keywords = (app as any).seo_keywords?.toLowerCase() || "";

        // Exact matches
        if (name === term) score += 1000;

        // "Starts with" matches
        if (name.startsWith(term)) score += 500;

        // Word-level matches (e.g. "India" in "Best India Apps")
        const nameWords = name.split(/\s+/);
        if (nameWords.some(w => w === term)) score += 300;
        if (nameWords.some(w => w.startsWith(term))) score += 200;

        // SEO Keywords (highest value for non-name metadata)
        if (keywords.includes(term)) {
          const keywordList = keywords.split(/,\s*/);
          if (keywordList.some((k: string) => k === term)) score += 250;
          else score += 100;
        }

        // Substring matches
        if (name.includes(term)) score += 50;
        if (cat.includes(term)) score += 30;

        return { app, score };
      })
      .filter(item => item.score > 0);

    const resultingApps = scored
      .sort((a, b) => {
        // Sort by score first (highest first)
        if (b.score !== a.score) return b.score - a.score;
        // Fallback to serial number for identical scores
        return (a.app.serial_number || 0) - (b.app.serial_number || 0);
      })
      .map(item => item.app);

    if (deferredSortBy === 'rating_desc') {
      resultingApps.sort((a, b) => {
        const ra = typeof a.rating === 'number' ? a.rating : parseFloat(a.rating as unknown as string) || 0;
        const rb = typeof b.rating === 'number' ? b.rating : parseFloat(b.rating as unknown as string) || 0;
        return rb - ra;
      });
    } else if (deferredSortBy === 'rating_asc') {
      resultingApps.sort((a, b) => {
        const ra = typeof a.rating === 'number' ? a.rating : parseFloat(a.rating as unknown as string) || 0;
        const rb = typeof b.rating === 'number' ? b.rating : parseFloat(b.rating as unknown as string) || 0;
        return ra - rb;
      });
    }

    return resultingApps;
  }, [mockApps, deferredSearchTerm, deferredRatingFilter, deferredSortBy]);
}
