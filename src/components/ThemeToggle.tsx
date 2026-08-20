'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('maddy_theme') as 'dark' | 'light') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('maddy_theme', nextTheme);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      onClick={toggleTheme}
      className="relative flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-neutral-800 text-slate-950 dark:text-white border-2 border-slate-950 dark:border-slate-300 text-xs font-black transition-all shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.3)]"
      aria-label="Toggle Theme"
      title={`Switch to ${theme === 'light' ? 'Dark Twilight' : 'Light Paper'} Mode`}
    >
      <div className="relative w-4 h-4 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={theme}
            initial={{ y: -20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 90 }}
            transition={{ type: 'spring', stiffness: 700, damping: 25, mass: 0.5 }}
          >
            {theme === 'light' ? (
              <Sun className="w-4 h-4 text-amber-500 fill-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-purple-300 fill-purple-300/30" />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <span className="hidden sm:inline font-black text-[11px] tracking-wide text-slate-950 dark:text-white">
        {theme === 'light' ? 'Light' : 'Twilight'}
      </span>
      <Sparkles className="w-3 h-3 text-pink-500 dark:text-pink-300" />
    </motion.button>
  );
};

