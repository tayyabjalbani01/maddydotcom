'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle2, Send, Heart, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const springSnappy = { type: 'spring' as const, stiffness: 650, damping: 24, mass: 0.5 };

export const PaperNewsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <section id="newsletter" className="py-20 lg:py-24 border-t-2 border-slate-950 dark:border-slate-700 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PaperNote Structured Feature Box with Motion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ type: 'spring', stiffness: 420, damping: 20 }}
          className="relative rounded-3xl border-2 border-slate-950 dark:border-slate-300 bg-[#fef08a] dark:bg-neutral-900 p-8 sm:p-12 lg:p-14 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)] text-center space-y-8"
        >
          
          {/* Header Zone: Eyebrow + Title */}
          <div className="space-y-4">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-slate-950 border-2 border-slate-950 text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
              <Heart className="w-4 h-4 text-pink-500 fill-pink-400" />
              <span>Electronic Mail Dispatch</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white tracking-tight font-heading leading-tight max-w-xl mx-auto">
              Subscribe to keep up with{' '}
              <motion.span
                whileHover={{ scale: 1.05, rotate: 1.5 }}
                transition={springSnappy}
                className="inline-block bg-pink-300 text-slate-950 border-2 border-slate-950 px-3.5 py-1 rounded-2xl shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] mt-1"
              >
                all things Maddy ♡
              </motion.span>
            </h2>
          </div>

          {/* Subscription Form */}
          {subscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={springSnappy}
              className="bg-white dark:bg-neutral-950 border-2 border-slate-950 rounded-2xl p-6 sm:p-8 max-w-md mx-auto space-y-3 shadow-[5px_5px_0px_0px_rgba(15,23,42,1)]"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-100 border-2 border-slate-950 text-emerald-700 flex items-center justify-center mx-auto shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-950 dark:text-white font-heading">You&apos;re Subscribed!</h3>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-relaxed">
                Confirmation sent to{' '}
                <span className="inline-block bg-amber-200 px-2 py-0.5 rounded-md border border-slate-950 text-slate-950 font-black">
                  {email}
                </span>.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row items-stretch justify-center gap-3 max-w-md mx-auto"
            >
              <div className="relative flex-1">
                <Mail className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 sm:h-14 bg-white dark:bg-neutral-950 border-2 border-slate-950 dark:border-white/40 rounded-2xl pl-12 pr-4 text-sm sm:text-base text-slate-950 dark:text-white placeholder:text-slate-400 font-extrabold focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-[3px_3px_0px_0px_rgba(15,23,42,1)]"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.08, rotate: -2, y: -2 }}
                whileTap={{ scale: 0.92 }}
                transition={springSnappy}
                type="submit"
                className="h-12 sm:h-14 btn-pill-black px-8 text-sm sm:text-base font-black shadow-[3px_3px_0px_0px_rgba(15,23,42,1)] flex items-center justify-center gap-2 whitespace-nowrap min-w-[130px]"
              >
                <span>Subscribe</span>
                <Send className="w-4 h-4 text-pink-300" />
              </motion.button>
            </form>
          )}

          {/* Privacy Guarantee Note */}
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-extrabold text-slate-900 dark:text-slate-300 pt-1">
            <ShieldCheck className="w-4 h-4 text-slate-950 dark:text-white shrink-0" />
            <span>No spam ever. Unsubscribe anytime with one click.</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
};




