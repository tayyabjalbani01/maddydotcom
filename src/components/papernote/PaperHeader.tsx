'use client';

import React, { useState } from 'react';
import { CREATOR_DATA } from '@/data/creatorData';
import { Menu, X, Instagram, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TikTokIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const springQuick = { type: 'spring' as const, stiffness: 650, damping: 24, mass: 0.5 };

export const PaperHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Blog', href: '#recent-posts' },
    { name: 'About', href: '#recent-posts' },
    { name: 'Contact', href: '#newsletter' },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 550, damping: 25, mass: 0.6 }}
      className="fixed top-6 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      
      {/* PaperNote Floating Single Pill Navigation Container */}
      <div className="w-full bg-white/95 dark:bg-neutral-900/95 border-2 border-slate-950 dark:border-slate-300 rounded-full px-6 sm:px-8 py-3 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] backdrop-blur-md flex items-center justify-between transition-all">
        
        {/* Left: Logo */}
        <a href="#" className="flex items-center gap-2 group shrink-0">
          <motion.span
            whileHover={{ scale: 1.08, rotate: -2 }}
            whileTap={{ scale: 0.92 }}
            transition={springQuick}
            className="bg-pink-200 dark:bg-pink-300 text-slate-950 font-black text-lg sm:text-xl px-3.5 py-0.5 rounded-lg border border-slate-950 shadow-sm inline-block"
          >
            {CREATOR_DATA.maddyContent.siteTitle}
          </motion.span>
        </a>

        {/* Center: Centered Page Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-8 flex-1 mx-6">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.94 }}
              transition={springQuick}
              className="text-sm font-extrabold text-slate-950 dark:text-white hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Right: Big Good-Looking Theme-Matching Social Icons with Distinct Colored Paper Backgrounds */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <motion.a
            whileHover={{ scale: 1.2, rotate: 8, y: -2 }}
            whileTap={{ scale: 0.88 }}
            transition={springQuick}
            href={CREATOR_DATA.socialLinks.tiktok}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-2xl bg-pink-300 dark:bg-pink-900/80 text-slate-950 dark:text-pink-100 border-2 border-slate-950 dark:border-slate-300 flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.3)] transition-all"
            aria-label="TikTok"
          >
            <TikTokIcon className="w-5 h-5" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2, rotate: -8, y: -2 }}
            whileTap={{ scale: 0.88 }}
            transition={springQuick}
            href={CREATOR_DATA.socialLinks.youtube}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-2xl bg-amber-300 dark:bg-amber-900/80 text-slate-950 dark:text-amber-100 border-2 border-slate-950 dark:border-slate-300 flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.3)] transition-all"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5 stroke-[2.2]" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2, rotate: 8, y: -2 }}
            whileTap={{ scale: 0.88 }}
            transition={springQuick}
            href={CREATOR_DATA.socialLinks.instagram}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-2xl bg-sky-300 dark:bg-sky-900/80 text-slate-950 dark:text-sky-100 border-2 border-slate-950 dark:border-slate-300 flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.3)] transition-all"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 stroke-[2.2]" />
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center">
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full text-slate-950 dark:text-white focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 600, damping: 26, mass: 0.5 }}
            className="md:hidden mt-3 bg-white dark:bg-neutral-900 border-2 border-slate-950 dark:border-white/20 rounded-3xl p-6 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] space-y-4"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-black text-slate-950 dark:text-white hover:text-pink-600 transition py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t-2 border-slate-950 dark:border-white/20 flex items-center justify-center gap-4">
              <a href={CREATOR_DATA.socialLinks.tiktok} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-pink-300 dark:bg-pink-900/80 text-slate-950 dark:text-pink-100 border-2 border-slate-950 dark:border-slate-300 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] flex items-center justify-center">
                <TikTokIcon className="w-5 h-5" />
              </a>
              <a href={CREATOR_DATA.socialLinks.youtube} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-amber-300 dark:bg-amber-900/80 text-slate-950 dark:text-amber-100 border-2 border-slate-950 dark:border-slate-300 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] flex items-center justify-center">
                <Youtube className="w-5 h-5" />
              </a>
              <a href={CREATOR_DATA.socialLinks.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-sky-300 dark:bg-sky-900/80 text-slate-950 dark:text-sky-100 border-2 border-slate-950 dark:border-slate-300 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] flex items-center justify-center">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
};






