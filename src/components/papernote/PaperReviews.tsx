'use client';

import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { motion } from 'framer-motion';

const springSnappy = { type: 'spring' as const, stiffness: 650, damping: 24, mass: 0.5 };

interface ReviewItem {
  id: string;
  rating: number;
  quote: string;
  author: string;
}

export const PaperReviews: React.FC = () => {
  const reviews: ReviewItem[] = [
    {
      id: 'r1',
      rating: 5,
      quote: 'Maddy Dot Com changed my life.',
      author: 'Janie Doe',
    },
    {
      id: 'r2',
      rating: 1,
      quote: 'My family was not happy with how sexy I became after reading this blog.',
      author: 'My Neighbor Jimmy',
    },
    {
      id: 'r3',
      rating: 5,
      quote: 'I pity those who have not yet explored Maddy’s World, for it truly transcends earthly limitations. This blog should be in the Bible.',
      author: 'God',
    },
    {
      id: 'r4',
      rating: 5,
      quote: 'I’m never reading another blog ever again. I’m a Maddy fan for life now.',
      author: 'Winnie The Pooh',
    },
  ];

  return (
    <section id="reviews" className="py-20 lg:py-24 border-t-2 border-slate-950 dark:border-slate-700 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Eyebrow + Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ type: 'spring', stiffness: 450, damping: 20 }}
          className="text-center space-y-4 mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-neutral-900 border-2 border-slate-950 dark:border-slate-300 text-slate-950 dark:text-white text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
            <MessageSquareQuote className="w-4 h-4 text-pink-500" />
            <span>Testimonials & Praise</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 dark:text-white tracking-tight font-heading leading-tight">
            Reader{' '}
            <motion.mark
              whileHover={{ scale: 1.05, rotate: 1.5 }}
              transition={springSnappy}
              className="bg-amber-300 text-slate-950 border-2 border-slate-950 px-3.5 py-0.5 rounded-2xl shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] inline-block"
            >
              Reviews & Raves
            </motion.mark>
          </h2>
        </motion.div>

        {/* 4 Clean, Simple Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ type: 'spring', stiffness: 450, damping: 20, delay: idx * 0.08 }}
              whileHover={{ y: -8, rotate: idx % 2 === 0 ? 1 : -1 }}
              whileTap={{ scale: 0.98 }}
              className="paper-card p-6 sm:p-8 rounded-3xl space-y-5 bg-white dark:bg-neutral-900 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-4">
                {/* 5-Star Row + Rating Text */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < rev.rating
                            ? 'fill-amber-400 text-amber-500'
                            : 'fill-slate-200 text-slate-300 dark:fill-neutral-800 dark:text-neutral-700'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-extrabold text-slate-600 dark:text-slate-400">
                    Rating: {rev.rating} out of 5
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="text-lg sm:text-xl font-extrabold text-slate-950 dark:text-white leading-relaxed italic">
                  &ldquo;{rev.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author */}
              <div className="pt-4 border-t-2 border-slate-950/10 dark:border-white/10">
                <span className="text-sm font-black text-slate-950 dark:text-slate-200">
                  — <span className="bg-pink-200 dark:bg-pink-300 text-slate-950 border border-slate-950 px-2.5 py-0.5 rounded-lg inline-block">{rev.author}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};




