'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles, Mail, Building, MessageSquare } from 'lucide-react';

export const PaperContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 border-t-2 border-slate-950 dark:border-slate-700 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white dark:bg-neutral-900 border-2 border-slate-950 dark:border-slate-300 text-slate-950 dark:text-white text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]">
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            <span>Get in Touch</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 dark:text-white tracking-tight">
            Let&apos;s Build{' '}
            <mark className="bg-amber-300 text-slate-950 border-2 border-slate-950 px-3 py-0.5 rounded-xl shadow-sm">
              Awesome Things
            </mark>{' '}
            Together
          </h2>
          <p className="text-slate-900 dark:text-slate-200 text-sm sm:text-base max-w-xl mx-auto font-bold leading-relaxed">
            Have a project brief, brand collaboration, or essay request? Send a message and Maddy will get back to you soon.
          </p>
        </div>

        {submitted ? (
          <div className="paper-card p-10 rounded-3xl text-center space-y-4 bg-white dark:bg-neutral-900">
            <div className="w-14 h-14 rounded-full bg-emerald-100 border-2 border-slate-950 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-black text-slate-950 dark:text-white">Message Sent!</h3>
            <p className="text-sm text-slate-900 dark:text-slate-200 font-bold max-w-md mx-auto">
              Thank you, <span className="bg-pink-200 border border-slate-950 px-2 py-0.5 rounded">{formData.name}</span>. Your message has been sent. Maddy will reply to <span className="font-black text-slate-950 dark:text-white">{formData.email}</span> shortly!
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="btn-pill-outline px-6 py-2 text-xs font-black mt-2"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="paper-card p-8 sm:p-12 rounded-3xl space-y-6 bg-white dark:bg-neutral-900"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-black uppercase tracking-widest text-slate-950 dark:text-white">
                  Your Name *
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-400 absolute left-4 top-4" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-neutral-950 border-2 border-slate-950 dark:border-white/30 rounded-2xl pl-11 pr-4 py-3.5 text-sm text-slate-950 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-400 font-black"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-black uppercase tracking-widest text-slate-950 dark:text-white">
                  Your Email *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-4" />
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-neutral-950 border-2 border-slate-950 dark:border-white/30 rounded-2xl pl-11 pr-4 py-3.5 text-sm text-slate-950 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-400 font-black"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-black uppercase tracking-widest text-slate-950 dark:text-white">
                Message Details *
              </label>
              <div className="relative">
                <MessageSquare className="w-4 h-4 text-slate-400 absolute left-4 top-4" />
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your project or collaboration idea..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-neutral-950 border-2 border-slate-950 dark:border-white/30 rounded-2xl pl-11 pr-4 py-3.5 text-sm text-slate-950 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-400 font-black"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full btn-pill-black py-4 text-base font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        )}

      </div>
    </section>
  );
};
