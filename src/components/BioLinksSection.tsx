'use client';

import React, { useState } from 'react';
import { CREATOR_DATA } from '@/data/creatorData';
import { Briefcase, Youtube, ShoppingBag, Mic, Camera, ExternalLink, Check, Copy, Sparkles, X } from 'lucide-react';

interface BioLinksSectionProps {
  isModal?: boolean;
  onClose?: () => void;
}

export const BioLinksSection: React.FC<BioLinksSectionProps> = ({ isModal, onClose }) => {
  const [copied, setCopied] = useState(false);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-pink-500 dark:text-pink-300" />;
      case 'Youtube': return <Youtube className="w-5 h-5 text-red-500 dark:text-red-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-purple-600 dark:text-purple-300" />;
      case 'Mic': return <Mic className="w-5 h-5 text-amber-500 dark:text-amber-300" />;
      case 'Camera': return <Camera className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />;
      default: return <Sparkles className="w-5 h-5 text-pink-500 dark:text-pink-300" />;
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const content = (
    <div className="max-w-md mx-auto w-full space-y-6 text-center">
      
      {/* Profile Header */}
      <div className="relative inline-block">
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-pink-400 via-purple-400 to-sky-300 p-[3px] shadow-xl mx-auto">
          <img
            src={CREATOR_DATA.avatarUrl}
            alt={CREATOR_DATA.name}
            className="w-full h-full object-cover rounded-[13px] border-2 border-white dark:border-neutral-950"
          />
        </div>
        <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-pink-400 text-xs shadow-md">
          🌸
        </span>
      </div>

      <div>
        <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center justify-center gap-2">
          <span>{CREATOR_DATA.name}</span>
        </h2>
        <p className="text-xs font-bold text-pink-600 dark:text-purple-300 uppercase tracking-widest mt-1">
          {CREATOR_DATA.handle}
        </p>
        <p className="text-xs text-slate-600 dark:text-neutral-300 mt-2 px-4 font-medium leading-relaxed">
          {CREATOR_DATA.tagline}
        </p>
      </div>

      {/* Bio Links Stack */}
      <div className="space-y-4 pt-2">
        {CREATOR_DATA.bioLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            onClick={isModal ? onClose : undefined}
            className={`group relative flex items-center justify-between p-4.5 rounded-2xl border transition-all duration-300 transform hover:-translate-y-0.5 ${
              link.highlight
                ? 'bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-sky-500/10 border-pink-400 shadow-md hover:border-pink-500'
                : 'bg-white dark:bg-white/5 border-slate-200 dark:border-purple-300/20 hover:border-pink-400 dark:hover:border-purple-400/40 shadow-sm'
            }`}
          >
            <div className="flex items-center gap-3.5 text-left">
              <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-neutral-950 border border-slate-200 dark:border-purple-300/20 group-hover:scale-110 transition">
                {getIcon(link.iconName)}
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-300 transition">
                  {link.title}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {link.badge && (
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-pink-400 text-slate-950 shadow-sm">
                  {link.badge}
                </span>
              )}
              <ExternalLink className="w-4 h-4 text-slate-400 dark:text-neutral-400 group-hover:text-slate-900 dark:group-hover:text-white transition" />
            </div>
          </a>
        ))}
      </div>

      {/* Copy Page Link Action */}
      <div className="pt-4">
        <button
          onClick={handleCopyLink}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-purple-300/20 text-xs font-bold text-slate-800 dark:text-neutral-200 transition"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span className="text-emerald-500 font-bold">Bio Link Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-400 dark:text-neutral-400" />
              <span>Share Maddy&apos;s Bio Link</span>
            </>
          )}
        </button>
      </div>

    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-200">
        <div className="relative w-full max-w-lg bg-white dark:bg-neutral-950 border border-slate-200 dark:border-purple-300/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-neutral-300 hover:text-slate-950 dark:hover:text-white transition border border-slate-200 dark:border-purple-300/20"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          {content}
        </div>
      </div>
    );
  }

  return (
    <section id="biolinks" className="py-28 border-t border-slate-200 dark:border-purple-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-md mx-auto mb-12">
          <span className="text-xs font-extrabold text-pink-600 dark:text-pink-300 uppercase tracking-widest bg-pink-500/10 px-4 py-1.5 rounded-full border border-pink-400/30">
            Instagram Link In Bio Hub
          </span>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mt-4">Link In Bio</h2>
        </div>
        {content}
      </div>
    </section>
  );
};
