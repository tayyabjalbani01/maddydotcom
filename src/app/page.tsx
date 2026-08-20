'use client';

import React from 'react';
import { PaperHeader } from '@/components/papernote/PaperHeader';
import { PaperHero } from '@/components/papernote/PaperHero';
import { PaperBlogGrid } from '@/components/papernote/PaperBlogGrid';
import { PaperNewsletter } from '@/components/papernote/PaperNewsletter';
import { PaperReviews } from '@/components/papernote/PaperReviews';
import { PaperFooter } from '@/components/papernote/PaperFooter';

export default function Home() {
  return (
    <div className="min-h-screen font-sans selection:bg-amber-200 selection:text-slate-950">
      {/* Ocean Water Header Navigation */}
      <PaperHeader />

      <main>
        {/* Section 1: Hero Section */}
        <PaperHero />

        {/* Section 2: Recent Posts */}
        <PaperBlogGrid />

        {/* Section 3: Subscribe to keep up with all things Maddy ♡ */}
        <PaperNewsletter />

        {/* Section 4: Reviews */}
        <PaperReviews />
      </main>

      {/* Footer */}
      <PaperFooter />
    </div>
  );
}
