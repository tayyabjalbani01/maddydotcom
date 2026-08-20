'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles, Calendar, Mail, Building, MessageSquare } from 'lucide-react';

export const CollabForm: React.FC = () => {
  const [formData, setFormData] = useState({
    brandName: '',
    email: '',
    budget: '$5,000 - $10,000',
    campaignType: 'Sponsored Reel',
    targetDate: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const budgetOptions = [
    '$2,500 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+',
  ];

  const campaignTypes = [
    'Sponsored Reel / Shorts',
    'Dedicated YouTube Vlog',
    'Street Fashion / NYFW Event',
    'Full Multi-Platform Bundle',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.brandName || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 border-t border-slate-200 dark:border-purple-500/20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-400/30 text-pink-600 dark:text-pink-300 text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Brand Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Let&apos;s Create Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-sky-400 dark:from-pink-300 dark:via-purple-300 dark:to-sky-300">Iconic Together</span>
          </h2>
          <p className="text-slate-600 dark:text-neutral-300 text-sm sm:text-base max-w-xl mx-auto font-medium leading-relaxed">
            Ready to partner on a high-performing campaign? Fill out the brief below and Maddy’s team will respond within 24 hours.
          </p>
        </div>

        {submitted ? (
          <div className="p-10 rounded-3xl bg-white dark:bg-neutral-900 border border-emerald-500/40 text-center space-y-4 shadow-xl animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white">Campaign Brief Received!</h3>
            <p className="text-sm text-slate-600 dark:text-neutral-300 max-w-md mx-auto leading-relaxed font-medium">
              Thank you for reaching out, <span className="font-bold text-slate-900 dark:text-white">{formData.brandName}</span>. Maddy’s team will review your campaign details and respond to <span className="text-pink-600 dark:text-pink-300 font-bold">{formData.email}</span> shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 px-6 py-2.5 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-900 dark:text-neutral-200 text-xs font-bold transition border border-slate-200 dark:border-purple-300/20"
            >
              Submit Another Brief
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-neutral-900/90 border border-slate-200 dark:border-purple-300/30 shadow-xl space-y-8 backdrop-blur-md"
          >
            {/* Campaign Type Pills */}
            <div className="space-y-3">
              <label className="block text-xs font-black uppercase tracking-widest text-slate-800 dark:text-purple-200">
                1. Select Campaign Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {campaignTypes.map((type) => (
                  <button
                    type="button"
                    key={type}
                    onClick={() => setFormData({ ...formData, campaignType: type })}
                    className={`p-4 rounded-2xl text-xs font-bold text-left transition flex items-center justify-between border ${
                      formData.campaignType === type
                        ? 'bg-pink-500/15 border-pink-400 text-pink-600 dark:text-pink-300 shadow-sm'
                        : 'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-purple-300/20 text-slate-800 dark:text-neutral-300 hover:border-pink-400'
                    }`}
                  >
                    <span>{type}</span>
                    {formData.campaignType === type && <CheckCircle2 className="w-4 h-4 text-pink-500 dark:text-pink-300" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Estimated Budget Selector */}
            <div className="space-y-3">
              <label className="block text-xs font-black uppercase tracking-widest text-slate-800 dark:text-purple-200">
                2. Estimated Budget Range
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {budgetOptions.map((b) => (
                  <button
                    type="button"
                    key={b}
                    onClick={() => setFormData({ ...formData, budget: b })}
                    className={`p-3.5 rounded-2xl text-xs font-bold transition text-center border ${
                      formData.budget === b
                        ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400 text-slate-950 dark:text-white shadow-sm'
                        : 'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-purple-300/20 text-slate-800 dark:text-neutral-300 hover:border-pink-400'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-black uppercase tracking-widest text-slate-800 dark:text-purple-200">
                  Brand / Agency Name *
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-400 dark:text-purple-300/60 absolute left-4 top-4" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Glossier / Nike / Samsung"
                    value={formData.brandName}
                    onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-purple-300/20 rounded-2xl pl-11 pr-4 py-3.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:border-pink-500 transition font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-black uppercase tracking-widest text-slate-800 dark:text-purple-200">
                  Work Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 dark:text-purple-300/60 absolute left-4 top-4" />
                  <input
                    type="email"
                    required
                    placeholder="name@brand.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-purple-300/20 rounded-2xl pl-11 pr-4 py-3.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:border-pink-500 transition font-medium"
                  />
                </div>
              </div>
            </div>

            {/* Target Timeline */}
            <div className="space-y-2">
              <label className="block text-xs font-black uppercase tracking-widest text-slate-800 dark:text-purple-200">
                Target Launch Month / Campaign Date
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-slate-400 dark:text-purple-300/60 absolute left-4 top-4" />
                <input
                  type="text"
                  placeholder="e.g. Q4 Holiday Campaign / Black Friday"
                  value={formData.targetDate}
                  onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-purple-300/20 rounded-2xl pl-11 pr-4 py-3.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:border-pink-500 transition font-medium"
                />
              </div>
            </div>

            {/* Campaign Brief */}
            <div className="space-y-2">
              <label className="block text-xs font-black uppercase tracking-widest text-slate-800 dark:text-purple-200">
                Campaign Brief & Key Deliverables
              </label>
              <div className="relative">
                <MessageSquare className="w-4 h-4 text-slate-400 dark:text-purple-300/60 absolute left-4 top-4" />
                <textarea
                  rows={4}
                  placeholder="Tell us about your campaign vision, key deliverables, products to feature, and goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-50 dark:bg-white/5 border border-slate-300 dark:border-purple-300/20 rounded-2xl pl-11 pr-4 py-3.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-500 focus:outline-none focus:border-pink-500 transition font-medium"
                />
              </div>
            </div>

            {/* Submit CTA Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl bg-gradient-to-r from-pink-300 via-purple-300 to-sky-300 text-slate-950 font-black text-base shadow-md hover:opacity-95 transition transform hover:-translate-y-0.5"
            >
              <Send className="w-5 h-5 fill-slate-950" />
              <span>Send Campaign Brief</span>
            </button>
          </form>
        )}

      </div>
    </section>
  );
};
