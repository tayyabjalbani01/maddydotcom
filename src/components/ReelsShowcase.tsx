'use client';

import React, { useState } from 'react';
import { CREATOR_DATA, InstagramPost } from '@/data/creatorData';
import { ReelModal } from '@/components/ReelModal';
import { Heart, MessageCircle, Play, Sparkles } from 'lucide-react';

export const ReelsShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePost, setActivePost] = useState<InstagramPost | null>(null);

  const categories = ['All', 'Fashion', 'Lifestyle', 'Travel', 'Tech', 'Reels'];

  const filteredPosts = selectedCategory === 'All'
    ? CREATOR_DATA.bentoHighlights
    : CREATOR_DATA.bentoHighlights.filter((p: InstagramPost) => p.category === selectedCategory);

  return (
    <section id="showcase" className="py-24 border-t border-purple-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-400/30 text-pink-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ビジュアル・フィード • Curated Feed</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-sky-300">Reels & Edits</span>
            </h2>
            <p className="text-neutral-300 mt-2 text-sm sm:text-base max-w-xl">
              High-engagement content across editorial fashion, aesthetic vlog edits, and modern tech setup reviews.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-white/5 p-1.5 rounded-2xl border border-purple-300/20 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-pink-300 via-purple-300 to-sky-300 text-neutral-950 shadow-lg shadow-pink-400/20'
                    : 'text-neutral-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.map((post: InstagramPost) => (
            <div
              key={post.id}
              onClick={() => setActivePost(post)}
              className="group relative rounded-3xl overflow-hidden bg-neutral-900 border border-purple-300/20 hover:border-pink-400/50 transition-all duration-300 shadow-xl cursor-pointer transform hover:-translate-y-1"
            >
              {/* Post Image & Aspect Ratio Container */}
              <div className="relative aspect-[9/16] overflow-hidden bg-neutral-950">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Category & Video Badge Top Left */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-neutral-950/80 border border-purple-300/30 backdrop-blur-md text-[11px] font-bold text-pink-300">
                    {post.sticker || post.category}
                  </span>
                  {post.isVideo && (
                    <span className="p-1.5 rounded-full bg-pink-400 text-neutral-950 shadow-md font-bold">
                      <Play className="w-3 h-3 fill-neutral-950" />
                    </span>
                  )}
                </div>

                {/* Hover Play Circle Icon in Center */}
                {post.isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-pink-300 text-neutral-950 flex items-center justify-center shadow-2xl shadow-pink-400/50 backdrop-blur-md transform scale-90 group-hover:scale-100 transition-transform">
                      <Play className="w-6 h-6 fill-neutral-950 translate-x-0.5" />
                    </div>
                  </div>
                )}

                {/* Bottom Content Info inside Card */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-3">
                  <h3 className="text-lg font-bold text-white leading-snug group-hover:text-pink-300 transition">
                    {post.title}
                  </h3>

                  <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
                    {post.caption}
                  </p>

                  {/* Likes & Comments */}
                  <div className="pt-2 flex items-center justify-between text-xs text-neutral-400 border-t border-purple-500/20">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 font-semibold text-neutral-300">
                        <Heart className="w-3.5 h-3.5 text-pink-400 fill-pink-400" />
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-1 font-semibold text-neutral-300">
                        <MessageCircle className="w-3.5 h-3.5 text-sky-300" />
                        {post.comments}
                      </span>
                    </div>

                    {post.views && (
                      <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-400/20">
                        {post.views} views
                      </span>
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Reel Modal */}
      <ReelModal post={activePost} onClose={() => setActivePost(null)} />
    </section>
  );
};
