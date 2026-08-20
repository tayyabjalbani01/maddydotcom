'use client';

import React from 'react';
import { InstagramPost } from '@/data/creatorData';
import { X, Heart, MessageCircle, Eye, Play, ExternalLink } from 'lucide-react';

interface ReelModalProps {
  post: InstagramPost | null;
  onClose: () => void;
}

export const ReelModal: React.FC<ReelModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-neutral-900 border border-slate-200 dark:border-purple-300/30 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white transition border border-white/20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media View */}
        <div className="md:col-span-7 relative bg-black flex items-center justify-center min-h-[300px] md:min-h-[500px]">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover max-h-[70vh]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          {post.isVideo && (
            <div className="absolute flex flex-col items-center gap-2 pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-pink-400 text-slate-950 flex items-center justify-center shadow-2xl">
                <Play className="w-7 h-7 fill-slate-950 translate-x-0.5" />
              </div>
              <span className="text-xs font-bold text-white uppercase tracking-widest bg-black/80 px-3 py-1 rounded-full border border-white/10">
                Instagram Reel Preview
              </span>
            </div>
          )}

          <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/80 border border-white/10 backdrop-blur-md">
            <span className="text-xs font-bold text-pink-300">{post.category}</span>
            <span className="text-neutral-500">•</span>
            <span className="text-xs font-medium text-neutral-300">{post.date}</span>
          </div>
        </div>

        {/* Details Sidebar */}
        <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-400 via-purple-400 to-sky-300 p-[2px]">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800"
                  alt="Maddy"
                  className="w-full h-full object-cover rounded-[14px]"
                />
              </div>
              <div>
                <h3 className="font-black text-slate-900 dark:text-white text-sm">@maddy.rivers</h3>
                <p className="text-xs text-slate-500 dark:text-neutral-400 font-medium">Tokyo Street & Cozy Creator</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-black text-slate-900 dark:text-white mb-2">{post.title}</h2>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-neutral-300 leading-relaxed font-medium">
                {post.caption}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-neutral-950 border border-slate-200 dark:border-purple-300/20">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-pink-500 dark:text-pink-400 text-xs font-bold mb-1">
                  <Heart className="w-3.5 h-3.5 fill-pink-400" />
                  <span>Likes</span>
                </div>
                <div className="text-base font-black text-slate-900 dark:text-white">{post.likes}</div>
              </div>
              <div className="text-center border-l border-slate-200 dark:border-purple-500/20">
                <div className="flex items-center justify-center gap-1 text-sky-500 dark:text-sky-400 text-xs font-bold mb-1">
                  <MessageCircle className="w-3.5 h-3.5 fill-sky-400" />
                  <span>Comments</span>
                </div>
                <div className="text-base font-black text-slate-900 dark:text-white">{post.comments}</div>
              </div>
              <div className="text-center border-l border-slate-200 dark:border-purple-500/20">
                <div className="flex items-center justify-center gap-1 text-emerald-500 dark:text-emerald-400 text-xs font-bold mb-1">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Views</span>
                </div>
                <div className="text-base font-black text-slate-900 dark:text-white">{post.views || '120K'}</div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 dark:border-purple-500/20 flex flex-col gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-pink-300 via-purple-300 to-sky-300 text-slate-950 font-black text-xs shadow-md hover:opacity-95 transition"
            >
              <span>View Original on Instagram</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-neutral-800 hover:bg-slate-200 dark:hover:bg-neutral-700 text-slate-800 dark:text-neutral-300 text-xs font-bold transition"
            >
              Back to Gallery
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
