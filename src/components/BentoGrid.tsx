'use client';

import React, { useState } from 'react';
import { CREATOR_DATA, BlogPost } from '@/data/creatorData';
import { BookOpen, Calendar, Clock, ArrowUpRight } from 'lucide-react';

export const BentoGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Essays', 'Nostalgia', 'Chicago Life', 'Thoughts'];

  const filteredPosts = selectedCategory === 'All'
    ? CREATOR_DATA.blogPosts
    : CREATOR_DATA.blogPosts.filter((p: BlogPost) => p.category === selectedCategory);

  return (
    <section id="blog" className="py-24 border-b border-slate-200 dark:border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-300 dark:border-cyan-800 text-cyan-800 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Written Pieces & Essays</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Maddy’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 dark:from-purple-300 dark:via-pink-300 dark:to-cyan-300">Journal & Blog</span>
            </h2>
            <p className="text-slate-600 dark:text-neutral-300 mt-3 text-sm sm:text-base max-w-xl font-medium leading-relaxed">
              Opinionated essays, Windy City stories, nostalgia from high school newspaper days, and late night thoughts.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-100 dark:bg-white/5 p-2 rounded-2xl border border-slate-200 dark:border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-md'
                    : 'text-slate-700 dark:text-neutral-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredPosts.map((post: BlogPost) => (
            <article
              key={post.id}
              className="group relative rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 border border-slate-200 dark:border-white/10 hover:border-cyan-500 transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1 rounded-full bg-slate-950/80 border border-white/20 text-xs font-bold text-white backdrop-blur-md">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 dark:text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition">
                    {post.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-neutral-300 line-clamp-3 leading-relaxed font-medium">
                    {post.snippet}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-slate-100 dark:border-white/10">
                  <span className="text-xs font-extrabold text-cyan-600 dark:text-cyan-400 group-hover:translate-x-1 transition duration-200 flex items-center gap-1">
                    Read Full Essay <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
