'use client';

import React from 'react';
import { CREATOR_DATA } from '@/data/creatorData';
import { Instagram, Youtube, ArrowUp, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-purple-500/20 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-400 via-purple-400 to-sky-300 p-[2px]">
              <img
                src={CREATOR_DATA.avatarUrl}
                alt={CREATOR_DATA.name}
                className="w-full h-full object-cover rounded-[14px] border border-black/10"
              />
            </div>
            <div>
              <span className="font-black text-lg tracking-wider text-slate-900 dark:text-white">
                MADDY RIVERS
              </span>
              <p className="text-xs text-slate-500 dark:text-purple-300/80 font-medium">{CREATOR_DATA.handle} • Tokyo Street & Cozy Lifestyle</p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-xs font-bold text-slate-700 dark:text-neutral-300">
            <a href="#bento" className="hover:text-pink-500 dark:hover:text-pink-300 transition">Showcase</a>
            <a href="#mediakit" className="hover:text-pink-500 dark:hover:text-pink-300 transition">Media Kit</a>
            <a href="#biolinks" className="hover:text-pink-500 dark:hover:text-pink-300 transition">Bio Links</a>
            <a href="#contact" className="hover:text-pink-500 dark:hover:text-pink-300 transition">Collaborate</a>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={CREATOR_DATA.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-pink-400/20 hover:text-pink-500 border border-slate-200 dark:border-purple-300/20 text-slate-700 dark:text-neutral-300 transition"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CREATOR_DATA.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-red-400/20 hover:text-red-500 border border-slate-200 dark:border-purple-300/20 text-slate-700 dark:text-neutral-300 transition"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-800 dark:text-neutral-200 border border-slate-200 dark:border-purple-300/20 transition"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-10 pt-8 border-t border-slate-200 dark:border-purple-500/20 text-center text-xs text-slate-500 dark:text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-4 font-medium">
          <p>© {new Date().getFullYear()} Maddy Rivers. All rights reserved.</p>
          <p className="flex items-center gap-1 font-bold text-pink-600 dark:text-pink-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cozy Minimal x Tokyo Street Aesthetic</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
