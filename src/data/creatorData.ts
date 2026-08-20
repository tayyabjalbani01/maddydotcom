export interface InstagramPost {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  likes: string;
  comments: string;
  views?: string;
  date: string;
  caption: string;
  isVideo: boolean;
  bentoSpan?: string;
  sticker?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  date: string;
  snippet: string;
  readTime: string;
  highlightColor?: 'yellow' | 'pink' | 'sky';
}

export interface BrandPartner {
  name: string;
  logoText: string;
  category: string;
  campaignTitle: string;
  iconTag: string;
}

export interface BioLink {
  id: string;
  title: string;
  url: string;
  iconName: string;
  badge?: string;
  highlight?: boolean;
}

export const CREATOR_DATA = {
  name: "Monica",
  siteTitle: "Maddy Dot Com",
  handle: "@maddy.dot.com",
  tagline: "Ruled by the moon 🌙",
  availability: "Available for Q4 Brand Collaborations",
  location: "Windy City (Chicago, IL)",
  bioHeadline: "Hi, I'm Maddy!",
  bio: [
    "Hi everyone! My name's Maddy, and I'm a quarter-century-old woman living in the Windy City.",
    "I thought I'd start a blog because (1) I am very opinionated, and (2) sometimes I miss when I was in newspaper in high school. I don't know.",
    "You can read some stuff I've written here! If you'd like, you can also subscribe below to get some electronic mail whenever I post. So fun!"
  ],
  bioParagraphs: [
    "Hi everyone! My name's Maddy, and I'm a quarter-century-old woman living in the Windy City.",
    "I thought I'd start a blog because (1) I am very opinionated, and (2) sometimes I miss when I was in newspaper in high school. I don't know.",
    "You can read some stuff I've written here! If you'd like, you can also subscribe below to get some electronic mail whenever I post. So fun!"
  ],
  maddyContent: {
    name: "Maddy",
    siteTitle: "Maddy Dot Com",
    handle: "@maddy.dot.com",
    tagline: "Ruled by the moon 🌙",
    availability: "Available for Q4 Brand Collaborations",
    location: "Windy City (Chicago, IL)",
    bioHeadline: "Hi, I'm Maddy!",
    bioParagraphs: [
      "Hi everyone! My name's Maddy, and I'm a quarter-century-old woman living in the Windy City.",
      "I thought I'd start a blog because (1) I am very opinionated, and (2) sometimes I miss when I was in newspaper in high school. I don't know.",
      "You can read some stuff I've written here! If you'd like, you can also subscribe below to get some electronic mail whenever I post. So fun!"
    ],
  },
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
  heroPhotoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000",
  metrics: {
    instagramFollowers: "348K",
    monthlyImpressions: "6.8M",
    engagementRate: "8.4%",
    youtubeSubscribers: "125K",
    tiktokFollowers: "520K",
    spotifyListeners: "42K",
  },
  stickers: [
    "✨ Cozy Minimal",
    "🌸 Windy City Vlogs",
    "⚡ Opinionated Rants",
    "🌙 Ruled By The Moon",
    "✉️ E-Mail Newsletter",
  ],
  demographics: {
    topAgeRange: "18 - 34 (78%)",
    genderSplit: "64% Female / 32% Male / 4% Non-binary",
    topCountries: ["United States (52%)", "United Kingdom (18%)", "Canada (12%)", "Australia (8%)"],
  },
  socialLinks: {
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com",
    youtube: "https://youtube.com",
    dribbble: "https://dribbble.com",
    twitter: "https://twitter.com",
    email: "maddy@maddydotcom.com",
  },
  featuredBrands: [
    { name: "Glossier", logoText: "GLOSSIER", category: "Beauty & Skincare", campaignTitle: "Summer Dewy Glow Campaign", iconTag: "🌸" },
    { name: "Nike", logoText: "NIKE", category: "Athleisure", campaignTitle: "Air Max Pulse Spotlight", iconTag: "⚡" },
    { name: "Samsung", logoText: "SAMSUNG", category: "Consumer Tech", campaignTitle: "Galaxy Z Flip Nightography Vlog", iconTag: "🌙" },
    { name: "Revolve", logoText: "REVOLVE", category: "Fashion", campaignTitle: "Windy City Edits", iconTag: "✨" },
  ] as BrandPartner[],
  featuredPost: {
    id: "fp1",
    title: "Maddy Dot Com 2: Electric Boogaloo",
    date: "February 25, 2026",
    category: "Personal Essays",
    imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=1000",
    snippet: "The sequel nobody asked for but everybody needed. Reflections on turning a quarter-century in the Windy City and writing opinionated pieces again.",
    readTime: "4 min read"
  },
  bentoHighlights: [
    {
      id: "b1",
      title: "Maddy Dot Com 2: Electric Boogaloo 🌇",
      category: "Essays",
      imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800",
      likes: "42.8K",
      comments: "1,240",
      views: "210K",
      date: "February 25, 2026",
      caption: "Reflections on turning 25 in the Windy City and writing opinionated articles again.",
      isVideo: true,
      bentoSpan: "col-span-1 md:col-span-2 row-span-2",
      sticker: "🌸 Featured Essay"
    },
    {
      id: "b2",
      title: "High School Newspaper Days 📰",
      category: "Nostalgia",
      imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
      likes: "38.2K",
      comments: "890",
      views: "185K",
      date: "February 18, 2026",
      caption: "Missing tight deadlines, blue ink edits, and having strong opinions on deadline.",
      isVideo: false,
      bentoSpan: "col-span-1 row-span-1",
      sticker: "📰 Nostalgia"
    },
    {
      id: "b3",
      title: "Windy City Winter Guide 🏙️",
      category: "Chicago Life",
      imageUrl: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&q=80&w=800",
      likes: "56.4K",
      comments: "2,100",
      views: "340K",
      date: "February 10, 2026",
      caption: "Navigating Lake Michigan winds, coat layering, and finding cozy coffee nooks.",
      isVideo: true,
      bentoSpan: "col-span-1 row-span-1",
      sticker: "🏙️ Chicago"
    },
    {
      id: "b4",
      title: "Ruled By The Moon Journal 🌙",
      category: "Thoughts",
      imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=800",
      likes: "29.1K",
      comments: "640",
      views: "140K",
      date: "February 02, 2026",
      caption: "Late night reflections, lunar vibes, and why writing electronic mail is so fun.",
      isVideo: true,
      bentoSpan: "col-span-1 row-span-1",
      sticker: "🌙 Midnight Notes"
    }
  ] as InstagramPost[],
  blogPosts: [
    {
      id: "b1",
      title: "Maddy Dot Com 2: Electric Boogaloo",
      category: "Essays",
      imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800",
      date: "February 25, 2026",
      snippet: "Reflections on turning 25 in the Windy City and writing opinionated articles again.",
      readTime: "4 min read",
      highlightColor: "yellow"
    },
    {
      id: "b2",
      title: "Why High School Newspaper Taught Me Everything",
      category: "Nostalgia",
      imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
      date: "February 18, 2026",
      snippet: "Missing tight deadlines, blue ink edits, and having strong opinions on deadline.",
      readTime: "5 min read",
      highlightColor: "pink"
    },
    {
      id: "b3",
      title: "Windy City Survival Guide: Winter Edition",
      category: "Chicago Life",
      imageUrl: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&q=80&w=800",
      date: "February 10, 2026",
      snippet: "Navigating Lake Michigan winds, coat layering, and finding cozy coffee nooks.",
      readTime: "6 min read",
      highlightColor: "sky"
    },
    {
      id: "b4",
      title: "Ruled By The Moon: A Midnight Journal Entry",
      category: "Thoughts",
      imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=800",
      date: "February 02, 2026",
      snippet: "Late night reflections, lunar vibes, and why writing electronic mail is so fun.",
      readTime: "3 min read",
      highlightColor: "yellow"
    }
  ] as BlogPost[],
  bioLinks: [
    {
      id: "1",
      title: "📰 Read Latest Essay: Electric Boogaloo",
      url: "#portfolio",
      iconName: "BookOpen",
      badge: "NEW",
      highlight: true,
    },
    {
      id: "2",
      title: "✉️ Subscribe to Electronic Mail Newsletter",
      url: "#newsletter",
      iconName: "Mail",
      badge: "Free",
      highlight: false,
    },
    {
      id: "3",
      title: "🎵 Follow on TikTok",
      url: "https://tiktok.com",
      iconName: "Video",
      highlight: false,
    },
    {
      id: "4",
      title: "📸 Instagram Vlogs & Outfits",
      url: "https://instagram.com",
      iconName: "Instagram",
      highlight: false,
    },
    {
      id: "5",
      title: "🎬 YouTube Channel",
      url: "https://youtube.com",
      iconName: "Youtube",
      highlight: false,
    },
  ] as BioLink[]
};
