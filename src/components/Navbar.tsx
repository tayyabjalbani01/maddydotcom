'use client';

import React, { useState } from 'react';
import { CREATOR_DATA } from '@/data/creatorData';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Menu, X, Instagram, Youtube } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Blog', href: '#blog' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Ocean Banner Background Header Container */}
      <div className="relative overflow-hidden bg-gradient-to-r from-teal-800 via-emerald-700 to-cyan-900 dark:from-slate-950 dark:via-neutral-900 dark:to-slate-950 py-4 shadow-lg border-b border-white/10">
        
        {/* Subtle Shimmer Ocean Wave Overlay Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.2),transparent_70%)] pointer-events-none animate-pulse" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center justify-between">
          
          {/* Left Pill Logo: "Maddy Dot Com" */}
          <a
            href="#"
            className="flex items-center justify-center px-6 py-2 rounded-full bg-white/95 dark:bg-neutral-900/90 text-slate-900 dark:text-white border-2 border-slate-900 dark:border-white/30 font-bold text-base tracking-tight shadow-md hover:scale-105 transition duration-200"
          >
            <span>{CREATOR_DATA.siteTitle}</span>
          </a>

          {/* Center Nav Capsule: Home | Blog | About | Contact */}
          <nav className="hidden md:flex items-center gap-6 bg-white/95 dark:bg-neutral-900/90 px-8 py-2.5 rounded-full border border-slate-200 dark:border-white/20 shadow-md backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Social Icons & Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={CREATOR_DATA.socialLinks.tiktok}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-slate-950 text-white flex items-center justify-center hover:bg-cyan-600 transition shadow-sm font-black text-xs font-mono"
              aria-label="TikTok"
              title="TikTok"
            >
              TT
            </a>
            <a
              href={CREATOR_DATA.socialLinks.youtube}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-slate-950 text-white flex items-center justify-center hover:bg-red-600 transition shadow-sm"
              aria-label="YouTube"
              title="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
            <a
              href={CREATOR_DATA.socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-slate-950 text-white flex items-center justify-center hover:bg-pink-600 transition shadow-sm"
              aria-label="Instagram"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* Light / Dark Mode Toggle */}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-white/95 dark:bg-neutral-900 text-slate-900 dark:text-white border border-slate-900 dark:border-white/20 shadow-md focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-neutral-950/95 border-b border-slate-200 dark:border-white/10 backdrop-blur-2xl px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-bold text-slate-900 dark:text-neutral-100 hover:bg-slate-100 dark:hover:bg-white/10 rounded-xl transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-around">
            <a
              href={CREATOR_DATA.socialLinks.tiktok}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-slate-950 text-white flex items-center justify-center text-xs font-bold font-mono"
            >
              TT
            </a>
            <a
              href={CREATOR_DATA.socialLinks.youtube}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-slate-950 text-white flex items-center justify-center"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a
              href={CREATOR_DATA.socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-slate-950 text-white flex items-center justify-center"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
