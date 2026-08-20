'use client';

import React from 'react';
import { CREATOR_DATA } from '@/data/creatorData';
import { ArrowUp, Instagram, Youtube, Heart } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { motion } from 'framer-motion';

const TikTokIcon = ({ className = "w-4.5 h-4.5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const springSnappy = { type: 'spring' as const, stiffness: 650, damping: 24, mass: 0.5 };

export const PaperFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-2 border-slate-950 dark:border-slate-700 bg-white dark:bg-neutral-950 py-10 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 400, damping: 22 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8"
      >
        
        {/* Main Clean Row: Logo/Copyright (Left) | Nav Links (Center) | Controls & Social (Right) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          
          {/* Left: Brand Logo & Copyright */}
          <div className="flex items-center gap-3 shrink-0">
            <motion.span
              whileHover={{ scale: 1.06, rotate: -1 }}
              transition={springSnappy}
              className="bg-pink-300 text-slate-950 font-black text-lg px-3.5 py-1 rounded-xl border-2 border-slate-950 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] inline-block"
            >
              {CREATOR_DATA.maddyContent.siteTitle}
            </motion.span>
            <span className="text-xs font-black text-slate-950 dark:text-slate-300">
              © {new Date().getFullYear()} Maddy
            </span>
          </div>

          {/* Center: Navigation Links */}
          <nav className="flex items-center justify-center gap-6 sm:gap-8 text-xs font-black text-slate-950 dark:text-white uppercase tracking-wider">
            <motion.a whileHover={{ y: -2 }} href="#recent-posts" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
              Blog
            </motion.a>
            <motion.a whileHover={{ y: -2 }} href="#newsletter" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
              Newsletter
            </motion.a>
            <motion.a whileHover={{ y: -2 }} href="#reviews" className="hover:text-pink-600 dark:hover:text-pink-400 transition-colors">
              Reviews
            </motion.a>
          </nav>

          {/* Right: Theme Toggle, Social Icons & Back to Top */}
          <div className="flex items-center gap-3 shrink-0">
            <ThemeToggle />

            <motion.a
              whileHover={{ scale: 1.15, rotate: 6, y: -2 }}
              whileTap={{ scale: 0.9 }}
              transition={springSnappy}
              href={CREATOR_DATA.socialLinks.tiktok}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-2xl bg-pink-300 dark:bg-pink-900/80 text-slate-950 dark:text-pink-100 border-2 border-slate-950 dark:border-slate-300 flex items-center justify-center shadow-[2.5px_2.5px_0px_0px_rgba(15,23,42,1)] dark:shadow-[2.5px_2.5px_0px_0px_rgba(255,255,255,0.3)] transition-all"
              aria-label="TikTok"
            >
              <TikTokIcon className="w-4.5 h-4.5" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.15, rotate: -6, y: -2 }}
              whileTap={{ scale: 0.9 }}
              transition={springSnappy}
              href={CREATOR_DATA.socialLinks.youtube}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-2xl bg-amber-300 dark:bg-amber-900/80 text-slate-950 dark:text-amber-100 border-2 border-slate-950 dark:border-slate-300 flex items-center justify-center shadow-[2.5px_2.5px_0px_0px_rgba(15,23,42,1)] dark:shadow-[2.5px_2.5px_0px_0px_rgba(255,255,255,0.3)] transition-all"
              aria-label="YouTube"
            >
              <Youtube className="w-4.5 h-4.5 stroke-[2.2]" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.15, rotate: 6, y: -2 }}
              whileTap={{ scale: 0.9 }}
              transition={springSnappy}
              href={CREATOR_DATA.socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-2xl bg-sky-300 dark:bg-sky-900/80 text-slate-950 dark:text-sky-100 border-2 border-slate-950 dark:border-slate-300 flex items-center justify-center shadow-[2.5px_2.5px_0px_0px_rgba(15,23,42,1)] dark:shadow-[2.5px_2.5px_0px_0px_rgba(255,255,255,0.3)] transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-4.5 h-4.5 stroke-[2.2]" />
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              transition={springSnappy}
              onClick={scrollToTop}
              className="w-10 h-10 rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950 border-2 border-slate-950 flex items-center justify-center shadow-[2.5px_2.5px_0px_0px_rgba(15,23,42,1)] dark:shadow-[2.5px_2.5px_0px_0px_rgba(255,255,255,0.3)] transition-all"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4.5 h-4.5" />
            </motion.button>
          </div>

        </div>

        {/* Subtle Bottom Credit Line */}
        <div className="pt-6 border-t border-slate-950/10 dark:border-white/10 flex items-center justify-center gap-1.5 text-xs font-extrabold text-slate-700 dark:text-slate-400">
          <span>Made with</span>
          <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500 inline" />
          <span>in Chicago</span>
        </div>

      </motion.div>
    </footer>
  );
};




