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

  // Basic SEO
  title: {
    default: "RyanWez | AI Product Architect",
    template: "%s | RyanWez Portfolio",
  },
  description: "I architect intelligent software solutions using AI-driven workflows. Building enterprise systems, automation tools, and intelligent applications. Available for freelance projects.",
  keywords: [
    "AI Product Architect",
    "Software Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "Flutter Developer",
    "Enterprise Systems",
    "Automation",
    "Myanmar Developer",
    "RyanWez",
  ],
  authors: [{ name: "RyanWez", url: "https://github.com/RyanWez" }],
  creator: "RyanWez",
  publisher: "RyanWez",

  // Favicon & Icons
  icons: {
    icon: "/images/rw.png",
    shortcut: "/images/rw.png",
    apple: "/images/rw.png",
  },

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "RyanWez | AI Product Architect",
    description: "I architect intelligent software solutions using AI-driven workflows. Building enterprise systems, automation tools, and intelligent applications.",
    type: "website",
    locale: "en_US",
    siteName: "RyanWez Portfolio",
    images: [
      {
        url: "/images/rw.png",
        width: 512,
        height: 512,
        alt: "RyanWez - AI Product Architect",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "RyanWez | AI Product Architect",
    description: "I architect intelligent software solutions using AI-driven workflows.",
    images: ["/images/rw.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "RyanWez",
    jobTitle: "AI Product Architect",
    description: "I architect intelligent software solutions using AI-driven workflows.",
    url: "https://ryanwez.vercel.app",
    image: "/images/rw.png",
    sameAs: [
      "https://github.com/RyanWez",
      "https://t.me/RyanWez",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Software Architecture",
      "Next.js",
      "Flutter",
      "Enterprise Systems",
    ],
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
