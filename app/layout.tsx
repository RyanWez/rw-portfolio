import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  // Base URL for metadata
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ryanwez.vercel.app'),

  // Basic SEO - Optimized for "Ryan Wez" and "RyanWez" searches
  title: {
    default: "Ryan Wez (RyanWez) | AI Product Architect & Full Stack Developer",
    template: "%s | Ryan Wez Portfolio",
  },
  description: "Ryan Wez (RyanWez) - AI Product Architect building intelligent software solutions. Specializing in Next.js, Flutter, enterprise systems, and AI-driven automation. Available for freelance projects in Myanmar and worldwide.",
  keywords: [
    // Primary name variations (most important for search)
    "Ryan Wez",
    "RyanWez",
    "Ryan Wez Portfolio",
    "RyanWez Portfolio",
    "Ryan Wez Developer",
    "RyanWez Developer",
    // Professional titles
    "AI Product Architect",
    "Full Stack Developer",
    "Software Developer",
    "Software Engineer",
    // Technologies
    "Next.js Developer",
    "Flutter Developer",
    "React Developer",
    "TypeScript Developer",
    // Specializations
    "Enterprise Systems",
    "AI Automation",
    "Web Development",
    // Location
    "Myanmar Developer",
    "Myanmar Software Engineer",
    "Freelance Developer Myanmar",
  ],
  authors: [{ name: "Ryan Wez", url: "https://github.com/RyanWez" }],
  creator: "Ryan Wez",
  publisher: "Ryan Wez",

  // Favicon & Icons
  icons: {
    icon: "/images/rw.png",
    shortcut: "/images/rw.png",
    apple: "/images/rw.png",
  },

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Ryan Wez (RyanWez) | AI Product Architect & Developer",
    description: "Ryan Wez - AI Product Architect building intelligent software solutions using AI-driven workflows. Enterprise systems, automation tools, and intelligent applications.",
    type: "website",
    locale: "en_US",
    siteName: "Ryan Wez Portfolio",
    images: [
      {
        url: "/images/rw.png",
        width: 512,
        height: 512,
        alt: "Ryan Wez (RyanWez) - AI Product Architect",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Ryan Wez (RyanWez) | AI Product Architect",
    description: "Ryan Wez - AI Product Architect building intelligent software solutions. Next.js, Flutter, AI Automation.",
    images: ["/images/rw.png"],
    creator: "@RyanWez",
  },

  // Robots & Crawling
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Additional SEO
  alternates: {
    canonical: "https://ryanwez.vercel.app",
  },
  verification: {
    google: "google5d8046a72cb4af9d",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data for SEO - Enhanced for "Ryan Wez" recognition
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ryan Wez",
    alternateName: ["RyanWez", "Ryan Wez Developer"],
    givenName: "Ryan",
    familyName: "Wez",
    jobTitle: "AI Product Architect",
    description: "Ryan Wez (RyanWez) - AI Product Architect building intelligent software solutions using AI-driven workflows. Specializing in Next.js, Flutter, and enterprise systems.",
    url: "https://ryanwez.vercel.app",
    image: "https://ryanwez.vercel.app/images/rw.png",
    sameAs: [
      "https://github.com/RyanWez",
      "https://t.me/RyanWez",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Software Architecture",
      "Next.js",
      "React",
      "Flutter",
      "TypeScript",
      "Enterprise Systems",
      "AI Automation",
      "Full Stack Development",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    nationality: {
      "@type": "Country",
      name: "Myanmar",
    },
  };

  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-white`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
