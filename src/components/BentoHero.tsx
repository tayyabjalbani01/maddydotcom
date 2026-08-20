'use client';

import React from 'react';
import { CREATOR_DATA } from '@/data/creatorData';
import { Sparkles, MapPin, ArrowUpRight, Play, Eye, Music, Instagram, Youtube } from 'lucide-react';

interface BentoHeroProps {
  onOpenBioLinks: () => void;
}

export const BentoHero: React.FC<BentoHeroProps> = ({ onOpenBioLinks }) => {
  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-gradient-to-tr from-pink-300/15 via-purple-300/15 to-sky-300/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Floating Stickers Bar */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10">
          {CREATOR_DATA.stickers.map((sticker, idx) => (
            <span
              key={idx}
              className="px-4 py-2 rounded-full text-xs font-bold bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-purple-300/30 text-slate-800 dark:text-purple-200 shadow-sm hover:scale-105 transition duration-200 cursor-default flex items-center gap-1.5"
            >
              <span>{sticker}</span>
            </span>
          ))}
        </div>

        {/* Hero Content & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Headline & Bio (7 Columns) */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-purple-300/30 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pink-500"></span>
              </span>
              <span className="text-xs font-extrabold text-pink-600 dark:text-pink-300 uppercase tracking-widest">
                Tokyo & LA Lifestyle Creator
              </span>
              <span className="text-slate-400 dark:text-purple-300/40">•</span>
              <span className="text-xs font-bold text-slate-700 dark:text-neutral-300 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-pink-500 dark:text-pink-400" />
                {CREATOR_DATA.location}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-slate-900 dark:text-white">
                Cozy Internet &{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-sky-400 dark:from-pink-300 dark:via-purple-300 dark:to-sky-300">
                  Street Style Edits
                </span>
              </h1>
            </div>

            {/* Bio Description */}
            <p className="text-base sm:text-xl text-slate-700 dark:text-neutral-300 max-w-2xl leading-relaxed font-medium">
              {CREATOR_DATA.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#contact"
                className="flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-sky-300 text-slate-950 font-extrabold text-sm hover:shadow-lg hover:shadow-pink-400/25 transition-all transform hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4 fill-slate-950" />
                <span>Book Brand Campaign</span>
              </a>

              <a
                href="#bento"
                className="flex items-center gap-2.5 px-7 py-4 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-900 dark:text-neutral-200 border border-slate-200 dark:border-purple-300/30 font-bold text-sm transition-all"
              >
                <Play className="w-4 h-4 text-pink-500 dark:text-pink-300 fill-pink-500 dark:fill-pink-300" />
                <span>Explore Showcase</span>
              </a>

              <button
                onClick={onOpenBioLinks}
                className="flex items-center gap-2 px-6 py-4 rounded-full bg-pink-50 dark:bg-white/5 hover:bg-pink-100 dark:hover:bg-white/10 text-pink-600 dark:text-pink-300 border border-pink-200 dark:border-pink-400/40 font-bold text-sm transition-all"
              >
                <span>Link in Bio</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Social Pill Counters */}
            <div className="pt-6 flex items-center justify-center lg:justify-start gap-4 flex-wrap">
              <a
                href={CREATOR_DATA.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-purple-300/20 text-xs font-bold text-slate-800 dark:text-neutral-300 hover:border-pink-400 transition"
              >
                <Instagram className="w-4 h-4 text-pink-500 dark:text-pink-400" />
                <span>348K Followers</span>
              </a>
              <a
                href={CREATOR_DATA.socialLinks.tiktok}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-purple-300/20 text-xs font-bold text-slate-800 dark:text-neutral-300 hover:border-sky-400 transition"
              >
                <Music className="w-4 h-4 text-sky-500 dark:text-sky-400" />
                <span>520K TikTok</span>
              </a>
              <a
                href={CREATOR_DATA.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-purple-300/20 text-xs font-bold text-slate-800 dark:text-neutral-300 hover:border-red-400 transition"
              >
                <Youtube className="w-4 h-4 text-red-500 dark:text-red-400" />
                <span>125K YouTube</span>
              </a>
            </div>

          </div>

          {/* Right Hero Portrait Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative group">
              
              {/* Soft Gradient Aura */}
              <div className="absolute -inset-2 rounded-[2.8rem] bg-gradient-to-tr from-pink-400 via-purple-400 to-sky-300 opacity-60 blur-xl group-hover:opacity-80 transition duration-500"></div>

              {/* Main Image Container */}
              <div className="relative w-72 h-96 sm:w-84 sm:h-[440px] rounded-[2.5rem] overflow-hidden border-2 border-slate-200 dark:border-purple-300/30 bg-slate-100 dark:bg-neutral-900 shadow-2xl">
                <img
                  src={CREATOR_DATA.avatarUrl}
                  alt={CREATOR_DATA.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-90" />
                
                {/* Bottom Overlay Label */}
                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <h2 className="text-2xl font-black text-white">{CREATOR_DATA.name}</h2>
                  <p className="text-xs text-pink-300 font-bold mt-0.5">{CREATOR_DATA.tagline}</p>
                </div>
              </div>

              {/* Floating Metric Card 1 */}
              <div className="absolute -top-6 -left-6 bg-white/95 dark:bg-neutral-950/90 border border-slate-200 dark:border-purple-300/30 rounded-2xl p-4 shadow-xl backdrop-blur-xl flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 dark:bg-pink-400/20 border border-pink-400/30 flex items-center justify-center text-pink-500 dark:text-pink-300">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-slate-500 dark:text-neutral-400 uppercase font-black tracking-wider">Instagram</div>
                  <div className="text-lg font-black text-slate-950 dark:text-white">{CREATOR_DATA.metrics.instagramFollowers}</div>
                </div>
              </div>

              {/* Floating Metric Card 2 */}
              <div className="absolute bottom-10 -right-6 bg-white/95 dark:bg-neutral-950/90 border border-slate-200 dark:border-purple-300/30 rounded-2xl p-4 shadow-xl backdrop-blur-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 dark:bg-purple-400/20 border border-purple-400/30 flex items-center justify-center text-purple-600 dark:text-purple-300">
                  <Eye className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-slate-500 dark:text-neutral-400 uppercase font-black tracking-wider">Monthly Reach</div>
                  <div className="text-lg font-black text-slate-950 dark:text-white">{CREATOR_DATA.metrics.monthlyImpressions}</div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
