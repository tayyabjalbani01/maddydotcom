'use client';

import React from 'react';
import { CREATOR_DATA } from '@/data/creatorData';
import { Moon, Mail, ArrowRight, Calendar, Bookmark } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="about" className="pt-36 pb-20 md:pt-44 md:pb-28 border-b border-slate-200 dark:border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Welcome Message & Bio */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Welcome to Maddy’s World!
              </h1>
              
              <div className="flex items-center gap-2 text-lg sm:text-xl text-purple-600 dark:text-pink-300 font-serif italic">
                <Moon className="w-5 h-5 text-purple-500 fill-purple-500/20" />
                <span>Ruled by the moon</span>
              </div>
            </div>

            {/* Bio Paragraphs from Maddy's website */}
            <div className="space-y-4 text-base sm:text-lg text-slate-700 dark:text-neutral-300 font-medium leading-relaxed pt-2">
              <p>
                {CREATOR_DATA.bio[0]}
              </p>
              <p>
                {CREATOR_DATA.bio[1]}
              </p>
              <p>
                {CREATOR_DATA.bio[2]}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#newsletter"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                <span>Subscribe to Electronic Mail</span>
              </a>

              <a
                href="#blog"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-900 dark:text-white font-bold text-sm border border-slate-200 dark:border-white/20 transition"
              >
                <span>Read Blog Posts</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Featured Post Card */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="flex items-center justify-between">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Bookmark className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                <span>Featured Post</span>
              </h2>
              <span className="text-xs font-bold uppercase tracking-wider bg-cyan-100 dark:bg-cyan-950/60 text-cyan-800 dark:text-cyan-300 px-3 py-1 rounded-full border border-cyan-300 dark:border-cyan-800">
                Latest Article
              </span>
            </div>

            {/* Featured Post Card */}
            <a
              href="#blog"
              className="group relative block rounded-3xl overflow-hidden bg-slate-900 border-2 border-slate-200 dark:border-white/20 shadow-2xl transform hover:-translate-y-1 transition duration-300"
            >
              <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
                <img
                  src={CREATOR_DATA.featuredPost.imageUrl}
                  alt={CREATOR_DATA.featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Dark Gradient Overlay for Crisp Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

                {/* Card Info Overlay (Matching exact screenshot layout) */}
                <div className="absolute bottom-0 left-0 right-0 p-8 space-y-2 text-white">
                  <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight text-white group-hover:text-cyan-300 transition">
                    {CREATOR_DATA.featuredPost.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-300 pt-1">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {CREATOR_DATA.featuredPost.date}
                    </span>
                    <span>•</span>
                    <span>{CREATOR_DATA.featuredPost.readTime}</span>
                  </div>
                </div>
              </div>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
