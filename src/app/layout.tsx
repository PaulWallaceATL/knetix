import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import EnterpriseNavbar from "@/components/EnterpriseNavbar";
import EnterpriseFooter from "@/components/EnterpriseFooter";
import StructuredData from "@/components/StructuredData";
import ScrollToTop from "@/components/ScrollToTop";
import CookieConsent from "@/components/CookieConsent";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Knetix - Technology Advisors for Cloud, Security, Data & AI",
  description: "Knetix is a technology advisory and solutions agency specializing in complex enterprise cloud, security, data, AI, and CX programs. We operate inside the national TSD ecosystem—vendor-agnostic, engineering-led, and asset-light.",
  keywords: "Enterprise IT Solutions, Digital Transformation, Cloud Infrastructure, Cybersecurity Services, Managed IT Services, Network Performance Optimization, Unified Communications, Contact Center Solutions, IT Consulting, Technology Modernization, Cloud Migration, Zero Trust Security, Enterprise Software, Business Technology, IT Strategy",
  authors: [{ name: "Knetix" }],
  creator: "Knetix",
  publisher: "Knetix",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://knetix.io",
  },
  category: "Technology",
  icons: {
    icon: [
      { url: "/favicon.svg?v=3", sizes: "any", type: "image/svg+xml" },
      { url: "/logo-192.png", sizes: "192x192", type: "image/png" },
      { url: "/logo-512.png", sizes: "512x512", type: "image/png" }
    ],
    shortcut: "/favicon.svg?v=3",
    apple: "/favicon.svg?v=3",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://knetix.io",
    title: "Knetix - Technology Advisors for Cloud, Security, Data & AI",
    description: "Technology Advisors (TAs) embedded in the national TSD ecosystem guiding enterprises through multi-cloud, cybersecurity, AI/data modernization, and CX transformations.",
    siteName: "Knetix",
    images: [
      {
        url: "https://knetix.io/api/og",
        width: 1200,
        height: 630,
        alt: "Knetix - Enterprise Technology Solutions for Digital Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@knetix",
    creator: "@knetix",
    title: "Knetix - Technology Advisors for Cloud, Security, Data & AI",
    description: "Vendor-neutral Technology Advisors solving complex enterprise cloud, security, data, AI, and CX challenges through a world-class provider ecosystem.",
    images: ["https://knetix.io/api/og"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg?v=3" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg?v=3" />
        <link rel="shortcut icon" href="/favicon.svg?v=3" />
        
        {/* DNS Prefetch & Preconnect for Performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Explicit Open Graph tags */}
        <meta property="og:title" content="Knetix - Technology Advisors for Cloud, Security, Data & AI" />
        <meta property="og:description" content="Technology Advisors embedded in the national TSD ecosystem guiding cloud, security, data, AI, and CX transformations." />
        <meta property="og:image" content="https://knetix.io/api/og" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://knetix.io" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Knetix" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@knetix" />
        <meta name="twitter:creator" content="@knetix" />
        <meta name="twitter:title" content="Knetix - Technology Advisors for Cloud, Security, Data & AI" />
        <meta name="twitter:description" content="Vendor-agnostic Technology Advisors delivering strategy, architecture, provider selection, and oversight across cloud, security, data, AI, and CX." />
        <meta name="twitter:image" content="https://knetix.io/api/og" />
        
        {/* Additional SEO Tags */}
        <meta name="theme-color" content="#0A2E50" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        
        <StructuredData />
      </head>
      <body
        className={`${dmSans.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <EnterpriseNavbar />
        {children}
        <EnterpriseFooter />
        <ScrollToTop />
        <CookieConsent />
      </body>
    </html>
  );
}
