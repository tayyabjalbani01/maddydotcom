import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter, Lora } from 'next/font/google';
import './globals.css';
import { SmoothScroll } from '@/components/SmoothScroll';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Maddy Dot Com | A Very Cool Blog',
  description: 'Windy City essays, high school journalism nostalgia, opinionated articles, and electronic mail dispatch.',
  keywords: ['Maddy Dot Com', 'Maddy', 'Windy City', 'Chicago Blog', 'Essays', 'Newsletter'],
  openGraph: {
    title: 'Maddy Dot Com | Welcome to Maddy’s World',
    description: 'Quarter-century-old writer living in the Windy City. Ruled by the moon 🌙.',
    url: 'https://maddydotcom.com',
    siteName: 'Maddy Dot Com',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} ${lora.variable}`}
      data-theme="light"
    >
      <body className="font-sans antialiased selection:bg-amber-200 selection:text-slate-950">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

