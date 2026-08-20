'use client';

import React from 'react';
import { Calendar, Clock, ArrowUpRight, Bookmark, ArrowRight } from 'lucide-react';
import { CREATOR_DATA } from '@/data/creatorData';
import { motion } from 'framer-motion';

const springSnappy = { type: 'spring' as const, stiffness: 650, damping: 24, mass: 0.5 };

export const PaperHero: React.FC = () => {
  const featured = CREATOR_DATA.featuredPost || {
    id: 'fp1',
    title: 'Maddy Dot Com 2: Electric Boogaloo',
    date: 'February 25, 2026',
    category: 'Featured Essay',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=1000',
    snippet: 'Reflections on turning 25 in the Windy City and writing opinionated articles again.',
    readTime: '4 min read',
  };

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 22 }}
            className="lg:col-span-7 xl:col-span-8 space-y-6 text-left"
          >
            
            {/* Headline with Yellow Marker Highlight */}
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 450, damping: 20, delay: 0.05 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-950 dark:text-white font-heading"
              >
                <motion.mark
                  whileHover={{ scale: 1.04, rotate: 1.5 }}
                  transition={springSnappy}
                  className="bg-amber-300 text-slate-950 border-2 border-slate-950 px-4 py-1 rounded-2xl inline-block shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]"
                >
                  Welcome to Maddy’s World!
                </motion.mark>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 450, damping: 20, delay: 0.1 }}
                className="text-2xl sm:text-3xl font-accent-serif italic text-slate-800 dark:text-purple-300 pt-1"
              >
                Ruled by the moon 🌙
              </motion.p>
            </div>

            {/* Clean Bio Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 450, damping: 20, delay: 0.15 }}
              className="space-y-4 text-base sm:text-lg text-slate-900 dark:text-slate-200 font-semibold leading-relaxed max-w-xl"
            >
              <p>
                Hi everyone! My name’s Maddy, and I’m a quarter-century-old woman living in the Windy City.
              </p>
              <p>
                I thought I’d start a blog because (1) I am very opinionated, and (2) sometimes I miss when I was in newspaper in high school. I don’t know.
              </p>
              <p>
                You can read some stuff I’ve written here! If you’d like, you can also subscribe below to get some electronic mail whenever I post. So fun!
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 450, damping: 20, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <motion.a
                whileHover={{ scale: 1.08, rotate: -2, y: -2 }}
                whileTap={{ scale: 0.92 }}
                transition={springSnappy}
                href="#newsletter"
                className="btn-pill-black px-7 py-3.5 text-sm sm:text-base font-black shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] inline-block"
              >
                Subscribe to Electronic Mail
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.08, rotate: 2, y: -2 }}
                whileTap={{ scale: 0.92 }}
                transition={springSnappy}
                href="#recent-posts"
                className="btn-pill-outline px-6 py-3.5 text-sm sm:text-base font-black flex items-center gap-2 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] inline-flex"
              >
                <span>Read Articles</span>
                <ArrowRight className="w-4 h-4 text-pink-600" />
              </motion.a>
            </motion.div>

          </motion.div>

          {/* Right Column: Featured Post Card (Narrow & Decreased Width) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 22, delay: 0.1 }}
            className="lg:col-span-5 xl:col-span-4 w-full max-w-[310px] sm:max-w-[340px] mx-auto lg:mx-0 relative pt-3"
          >
            {/* Floating Featured Post Paper Sticker Badge */}
            <div className="absolute top-0 left-4 sm:left-6 z-20">
              <motion.span
                whileHover={{ scale: 1.08, rotate: 2 }}
                transition={springSnappy}
                className="bg-pink-300 text-slate-950 font-black text-xs px-3.5 py-1 rounded-full border-2 border-slate-950 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] inline-flex items-center gap-1.5 transform -rotate-2"
              >
                <Bookmark className="w-3.5 h-3.5 fill-slate-950 stroke-slate-950" />
                <span>Featured Post</span>
              </motion.span>
            </div>

            {/* Featured Post Card */}
            <motion.article
              whileHover={{ y: -8, rotate: -0.5, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              transition={springSnappy}
              className="relative rounded-[28px] border-2 border-slate-950 dark:border-slate-300 p-4 sm:p-5 bg-[#bae6fd] dark:bg-sky-900/60 shadow-[7px_7px_0px_0px_rgba(15,23,42,1)] dark:shadow-[7px_7px_0px_0px_rgba(255,255,255,0.25)] transform -rotate-1.5 transition-all duration-300 flex flex-col justify-between group space-y-3.5 text-left"
            >
              {/* Image Frame with Category Badge Overlay (Matches Recent Posts 4:3 Aspect Ratio) */}
              <div className="relative w-full aspect-[4/3] rounded-2xl border-2 border-slate-950 overflow-hidden bg-slate-950">
                <img
                  src={featured.imageUrl}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white text-slate-950 font-black text-xs px-3 py-0.5 border-2 border-slate-950 rounded-lg shadow-sm">
                    {featured.category === 'Featured Essay' ? 'Essays' : featured.category}
                  </span>
                </div>
              </div>


              {/* Metadata Row: Date & Read Time */}
              <div className="flex items-center justify-between text-xs font-extrabold text-slate-900 dark:text-slate-100 px-0.5 pt-0.5">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-950 dark:text-white" />
                  {featured.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-950 dark:text-white" />
                  {featured.readTime}
                </span>
              </div>

              {/* Post Title */}
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white leading-snug font-heading px-0.5">
                {featured.title}
              </h3>

              {/* Post Snippet */}
              <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 leading-relaxed px-0.5">
                {featured.snippet}
              </p>

              {/* Centered White Pill Action Button */}
              <div className="pt-1.5 text-center">
                <motion.a
                  whileHover={{ scale: 1.08, rotate: -1.5 }}
                  whileTap={{ scale: 0.92 }}
                  transition={springSnappy}
                  href="#recent-posts"
                  className="inline-flex items-center gap-1.5 bg-white text-slate-950 border-2 border-slate-950 px-7 py-2 rounded-full font-black text-xs sm:text-sm shadow-[2.5px_2.5px_0px_0px_rgba(15,23,42,1)]"
                >
                  <span>Read Post</span>
                  <ArrowUpRight className="w-4 h-4 text-pink-600" />
                </motion.a>
              </div>
            </motion.article>

          </motion.div>



        </div>

      </div>
    </section>
  );
};




