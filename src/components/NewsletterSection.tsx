'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle2, Send } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <section id="newsletter" className="py-20 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-neutral-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-300 dark:border-cyan-800 text-cyan-800 dark:text-cyan-300 text-xs font-bold uppercase tracking-wider">
          <Mail className="w-3.5 h-3.5" />
          <span>Electronic Mail Dispatch</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Subscribe For Electronic Mail!
        </h2>

        <p className="text-slate-600 dark:text-neutral-300 text-base max-w-xl mx-auto font-medium">
          Get an update directly in your inbox whenever Maddy posts a new essay, Windy City guide, or opinionated rant. So fun!
        </p>

        {subscribed ? (
          <div className="p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-emerald-500/40 max-w-md mx-auto shadow-lg space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">You&apos;re Subscribed!</h3>
            <p className="text-xs text-slate-600 dark:text-neutral-300 font-medium">
              We sent a welcome message to <span className="font-bold text-cyan-600 dark:text-cyan-400">{email}</span>. Keep an eye on your inbox!
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto pt-2"
          >
            <div className="relative w-full">
              <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-4" />
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white dark:bg-neutral-900 border border-slate-300 dark:border-white/20 rounded-full pl-11 pr-4 py-3.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition shadow-sm font-medium"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 font-bold text-sm shadow-md transition whitespace-nowrap"
            >
              <span>Subscribe</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}

      </div>
    </section>
  );
};
