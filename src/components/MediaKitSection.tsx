'use client';

import React, { useState } from 'react';
import { CREATOR_DATA } from '@/data/creatorData';
import { Award, Users, Globe, Download, CheckCircle2, PieChart, Building2 } from 'lucide-react';

export const MediaKitSection: React.FC = () => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <section id="mediakit" className="py-28 border-t border-slate-200 dark:border-purple-500/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/30 text-purple-600 dark:text-purple-300 text-xs font-extrabold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Official Media Kit 2026</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Audience Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-sky-400 dark:from-pink-300 dark:via-purple-300 dark:to-sky-300">Brand Partners</span>
          </h2>
          <p className="text-slate-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed font-medium">
            Partnering with global beauty, streetwear, & consumer tech brands for high-converting visual storytelling campaigns.
          </p>
        </div>

        {/* Demographics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: Core Age Bracket */}
          <div className="p-7 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-purple-300/20 backdrop-blur-md flex flex-col justify-between hover:border-pink-400 transition shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-pink-500/10 text-pink-600 dark:text-pink-300 border border-pink-400/30 flex items-center justify-center mb-5">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white mb-1">Primary Age Group</h3>
              <p className="text-xs text-slate-500 dark:text-neutral-400 font-medium">High purchasing power young adults</p>
              <div className="text-3xl font-black text-slate-900 dark:text-white mt-4">{CREATOR_DATA.demographics.topAgeRange}</div>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-purple-500/20 text-xs text-slate-500 dark:text-neutral-400 font-medium">
              Ideal audience for lifestyle, beauty, tech, & fashion.
            </div>
          </div>

          {/* Card 2: Gender Split */}
          <div className="p-7 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-purple-300/20 backdrop-blur-md flex flex-col justify-between hover:border-purple-400 transition shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-400/30 flex items-center justify-center mb-5">
                <PieChart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white mb-1">Audience Gender Split</h3>
              <p className="text-xs text-slate-500 dark:text-neutral-400 font-medium">Highly engaged community</p>
              <div className="text-xl font-black text-slate-900 dark:text-white mt-4">{CREATOR_DATA.demographics.genderSplit}</div>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-purple-500/20 text-xs text-slate-500 dark:text-neutral-400 font-medium">
              Strong female & non-binary fashion & aesthetic affinity.
            </div>
          </div>

          {/* Card 3: Top Geographic Reach */}
          <div className="p-7 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-purple-300/20 backdrop-blur-md flex flex-col justify-between hover:border-sky-400 transition shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 text-sky-600 dark:text-sky-300 border border-sky-400/30 flex items-center justify-center mb-5">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900 dark:text-white mb-1">Top Geo Regions</h3>
              <p className="text-xs text-slate-500 dark:text-neutral-400 font-medium">Global tier-1 market reach</p>
              
              <ul className="mt-4 space-y-2 text-xs text-slate-700 dark:text-neutral-300 font-bold">
                {CREATOR_DATA.demographics.topCountries.map((c, i) => (
                  <li key={i} className="flex items-center justify-between">
                    <span>{c.split(' (')[0]}</span>
                    <span className="font-extrabold text-pink-600 dark:text-pink-300">({c.split(' (')[1]}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-purple-500/20 text-xs text-slate-500 dark:text-neutral-400 font-medium">
              52% US & 26% Japan/UK concentration.
            </div>
          </div>

        </div>

        {/* Featured Brand Collaborations */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-neutral-900/90 border border-slate-200 dark:border-purple-300/30 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-black text-pink-600 dark:text-pink-300 uppercase tracking-widest mb-1">
                <Building2 className="w-4 h-4" />
                <span>Featured Brand Partners</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">Select Past Campaigns</h3>
            </div>

            {/* Download Rate Card CTA */}
            <button
              onClick={handleDownload}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-pink-300 via-purple-300 to-sky-300 text-slate-950 font-extrabold text-xs hover:opacity-95 transition shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>{downloadSuccess ? 'Rate Card PDF Downloaded!' : 'Download Complete Rate Card'}</span>
            </button>
          </div>

          {/* Brand Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {CREATOR_DATA.featuredBrands.map((brand) => (
              <div
                key={brand.name}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-purple-300/20 hover:border-pink-400 transition group flex flex-col items-center justify-center text-center space-y-2"
              >
                <span className="text-xl mb-1">{brand.iconTag}</span>
                <span className="text-sm font-black tracking-wider text-slate-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-300 transition">
                  {brand.logoText}
                </span>
                <span className="text-[10px] text-slate-500 dark:text-neutral-400 font-bold">{brand.category}</span>
              </div>
            ))}
          </div>

          {/* Guarantees */}
          <div className="mt-10 pt-6 border-t border-slate-200 dark:border-purple-500/20 flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-slate-600 dark:text-neutral-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Full Usage Rights & Spark Ads Whitelisting Available</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Dedicated Analytics Report Post-Campaign</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Fast 48-Hour Content Turnaround Option</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
