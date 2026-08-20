'use client';

import React from 'react';
import { CREATOR_DATA } from '@/data/creatorData';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const springSnappy = { type: 'spring' as const, stiffness: 650, damping: 24, mass: 0.5 };

export const PaperBlogGrid: React.FC = () => {
  // Take 3 top posts for the 3 colorful paper cards
  const posts = CREATOR_DATA.blogPosts.slice(0, 3);

  const cardStyles = [
    {
      bg: 'bg-[#bae6fd] dark:bg-sky-900/60', // Sky Blue
      rotation: '-rotate-2',
      shadow: 'shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]',
      badgeBg: 'bg-white text-slate-950',
    },
    {
      bg: 'bg-[#fef08a] dark:bg-amber-900/60', // Yellow
      rotation: 'rotate-1',
      shadow: 'shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]',
      badgeBg: 'bg-pink-300 text-slate-950',
    },
    {
      bg: 'bg-[#fbcfe8] dark:bg-pink-900/60', // Soft Pink
      rotation: '-rotate-1',
      shadow: 'shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]',
      badgeBg: 'bg-amber-300 text-slate-950',
    },
  ];

  return (
    <section id="recent-posts" className="py-24 border-t-2 border-slate-950 dark:border-slate-700 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header with Yellow Marker Highlight & Curved Arrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ type: 'spring', stiffness: 450, damping: 20 }}
          className="flex flex-col items-start space-y-3"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight font-heading">
            <motion.mark
              whileHover={{ scale: 1.05, rotate: 1.5 }}
              transition={springSnappy}
              className="bg-amber-300 text-slate-950 border-2 border-slate-950 px-4 py-1 rounded-xl inline-block shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]"
            >
              Recent Posts
            </motion.mark>
          </h2>

          {/* Curved Hand-Drawn SVG Arrow */}
          <div className="pl-8 pt-1 text-slate-950 dark:text-slate-200">
            <svg
              className="w-12 h-10 transform -rotate-12 stroke-current fill-none stroke-[2.5]"
              viewBox="0 0 50 40"
            >
              <path d="M 10 5 Q 35 15 25 35 M 18 28 L 25 35 L 32 28" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </motion.div>

        {/* 3 Playfully Tilted Colorful Paper Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
          {posts.map((post, idx) => {
            const style = cardStyles[idx % cardStyles.length];
            return (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ type: 'spring', stiffness: 450, damping: 20, delay: idx * 0.08 }}
                whileHover={{ y: -10, rotate: 0 }}
                whileTap={{ scale: 0.98 }}
                className={`relative rounded-3xl border-2 border-slate-950 dark:border-slate-300 p-5 ${style.bg} ${style.shadow} ${style.rotation} transition-all duration-300 transform flex flex-col justify-between group`}
              >
                <div className="space-y-4">
                  {/* Inner Image Frame with Category Badge Overlay */}
                  <div className="relative w-full aspect-[4/3] rounded-2xl border-2 border-slate-950 overflow-hidden bg-slate-950">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`${style.badgeBg} font-black text-xs px-3 py-1 border-2 border-slate-950 rounded-lg shadow-sm`}>
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Metadata Row: Date & Read Time */}
                  <div className="flex items-center justify-between text-xs font-extrabold text-slate-900 dark:text-slate-100 px-1 pt-1">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-950 dark:text-white" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-950 dark:text-white" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Post Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white leading-tight font-heading px-1">
                    {post.title}
                  </h3>

                  {/* Post Snippet / Excerpt */}
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 leading-relaxed px-1">
                    {post.snippet}
                  </p>
                </div>

                {/* White Pill Action Button */}
                <div className="pt-6 text-center">
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: -2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={springSnappy}
                    href="#recent-posts"
                    className="inline-flex items-center gap-1.5 bg-white text-slate-950 border-2 border-slate-950 px-6 py-2 rounded-full font-black text-sm shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]"
                  >
                    <span>Read Post</span>
                    <ArrowUpRight className="w-4 h-4 text-pink-600" />
                  </motion.a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 450, damping: 20 }}
          className="text-center pt-8"
        >
          <motion.a
            whileHover={{ scale: 1.08, rotate: -1, y: -2 }}
            whileTap={{ scale: 0.92 }}
            transition={springSnappy}
            href="#recent-posts"
            className="btn-pill-outline px-8 py-3.5 text-base font-black inline-flex items-center gap-2 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]"
          >
            <span>Read All Posts</span>
            <ArrowUpRight className="w-5 h-5 text-pink-600" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};
