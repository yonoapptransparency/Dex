import React from 'react';
import { MessageSquare, Send } from 'lucide-react';

export interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
}

interface NewsCommentsSectionProps {
  comments: Comment[];
  commentText: string;
  onCommentTextChange: (text: string) => void;
  onAddComment: (e: React.FormEvent) => void;
}

export function NewsCommentsSection({
  comments,
  commentText,
  onCommentTextChange,
  onAddComment,
}: NewsCommentsSectionProps) {
  return (
    <div className="mt-10 pt-8 border-t border-zinc-200 dark:border-zinc-800">
      <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
        <MessageSquare className="w-5 h-5 text-blue-500" />
        Discussion &amp; Community Feedback ({comments.length})
      </h3>

      <form onSubmit={onAddComment} className="mb-8">
        <div className="flex flex-col gap-3">
          <textarea
            rows={3}
            value={commentText}
            onChange={(e) => onCommentTextChange(e.target.value)}
            placeholder="Share your thoughts or observations about this update..."
            className="w-full p-3.5 text-sm text-zinc-900 dark:text-white bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/80 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all placeholder-zinc-400"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={!commentText.trim()}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-xl text-xs font-semibold flex items-center gap-2 transition-all shadow-md shadow-blue-500/10 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Post Comment</span>
            </button>
          </div>
        </div>
      </form>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-zinc-900 dark:text-zinc-200">{comment.author}</span>
              <span className="text-[11px] text-zinc-400">{comment.date}</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {comment.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
