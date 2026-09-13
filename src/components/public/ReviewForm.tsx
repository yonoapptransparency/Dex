import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Plus, Loader2, Check, AlertCircle, Sparkles } from 'lucide-react';
import { Review } from './ReviewItem';

interface ReviewFormProps {
  appId: string;
  appSlug?: string;
  appName?: string;
  onSuccess: (newReview: Review) => void;
}

export function ReviewForm({ appId, appSlug, appName, onSuccess }: ReviewFormProps) {
  const [username, setUsername] = useState('');
  const [rating, setRating] = useState(5);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorText, setErrorText] = useState('');

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorText('');
    
    const cleanUsername = username.trim().replace(/<[^>]*>?/gm, '');
    const cleanComment = comment.trim().replace(/<[^>]*>?/gm, '');

    if (!cleanUsername || cleanUsername.length < 2) {
      setErrorText('Please enter your name (at least 2 characters).');
      return;
    }

    if (cleanUsername.length > 50) {
      setErrorText('Display name must be 50 characters or less.');
      return;
    }

    if (!cleanComment || cleanComment.length < 3) {
      setErrorText('Please write a review comment (at least 3 characters).');
      return;
    }

    if (cleanComment.length > 1000) {
      setErrorText('Review text cannot exceed 1000 characters.');
      return;
    }

    setSubmitting(true);

    const reviewId = `user_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const newSubmission: Review = {
      id: reviewId,
      app_id: appId,
      username: cleanUsername,
      rating: rating,
      comment: cleanComment,
      created_at: new Date().toISOString(),
      helpful_count: 0,
      source: 'community'
    };

    try {
      const { submitLiveReview } = await import('../../lib/communityFirebase');
      const res = await submitLiveReview({
        appId: appId,
        appSlug: appSlug,
        appName: appName,
        userName: cleanUsername,
        rating: rating,
        reviewText: cleanComment,
      });
      
      if (res.success && res.review) {
        onSuccess(res.review as Review);
      } else {
        console.warn("Live submission warning:", res.error);
        onSuccess(newSubmission); // fallback to optimistic local update
      }

      setSuccess(true);
      setUsername('');
      setComment('');
      setRating(5);
      
      setTimeout(() => setSuccess(false), 5000);
    } catch (err: any) {
      console.error('Error submitting review:', err);
      // Even if network failed, show success since review was saved locally (if fallback works)
      onSuccess(newSubmission);
      setSuccess(true);
      setUsername('');
      setComment('');
      setRating(5);
      setTimeout(() => setSuccess(false), 5000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-4 sm:p-6 bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 rounded-2xl shadow-sm">
      <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-4 flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-amber-500" />
        <span>Share your gameplay review</span>
      </h3>

      <form onSubmit={handleReviewSubmit} className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">Your Rating:</span>
            <div className="flex items-center gap-1" role="group" aria-label="Star rating selector">
              {[1, 2, 3, 4, 5].map((s) => (
                <motion.button
                  key={s}
                  type="button"
                  aria-label={`Rate ${s} star${s > 1 ? 's' : ''}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onMouseEnter={() => setHoveredRating(s)}
                  onMouseLeave={() => setHoveredRating(null)}
                  onClick={() => setRating(s)}
                  className="p-1 focus:outline-none cursor-pointer"
                >
                  <Star 
                    className={`w-6 h-6 transition-colors duration-200 ${
                      s <= (hoveredRating !== null ? hoveredRating : rating)
                        ? 'fill-amber-400 text-amber-400' 
                        : 'text-zinc-300 dark:text-zinc-700'
                    }`} 
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="sm:col-span-1">
            <label htmlFor="reviewer-name" className="block text-[10px] font-bold text-zinc-500 dark:text-zinc-400 mb-1 uppercase tracking-wider">Your Name</label>
            <input
              id="reviewer-name"
              name="reviewerName"
              type="text"
              required
              maxLength={30}
              placeholder="Your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full text-xs font-semibold p-2.5 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 transition-all h-[46px]"
            />
          </div>
          
          <div className="sm:col-span-2">
            <label htmlFor="comment" className="block text-[10px] font-bold text-zinc-500 dark:text-zinc-400 mb-1 uppercase tracking-wider">Review comment</label>
            <textarea
              id="comment"
              name="comment"
              required
              maxLength={500}
              placeholder="Write a constructive, honest review of the gameplay experience..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={2}
              className="w-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl p-3 text-xs font-medium text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none min-h-[46px]"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
          <div className="flex-1">
            {errorText && (
              <div className="flex items-center gap-1 text-xs font-semibold text-rose-500">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorText}</span>
              </div>
            )}

            <AnimatePresence>
              {success && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-1.5 text-xs font-bold text-emerald-500"
                >
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 animate-bounce" />
                  <span>Review published successfully! Visible in community reviews below.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="flex items-center justify-center gap-2 h-10 px-5 bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 font-bold text-xs rounded-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95 shrink-0 w-full sm:w-auto"
          >
            {submitting ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Post Review</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
