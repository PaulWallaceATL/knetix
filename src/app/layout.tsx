import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import EnterpriseNavbar from "@/components/EnterpriseNavbar";
import EnterpriseFooter from "@/components/EnterpriseFooter";
import StructuredData from "@/components/StructuredData";
import LiveChatWidget from "@/components/LiveChatWidget";
import ScrollToTop from "@/components/ScrollToTop";
import CookieConsent from "@/components/CookieConsent";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Knetix - Transform Your Business With Enterprise Technology Solutions",
  description: "Partner with industry-leading experts to accelerate growth, optimize operations, and secure your digital future. Trusted by Fortune 500 companies worldwide. 99.99% uptime SLA, SOC 2 certified, 24/7 support.",
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
    canonical: "https://knetix.vercel.app",
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
    url: "https://knetix.vercel.app",
    title: "Knetix - Transform Your Business With Enterprise Technology Solutions",
    description: "Partner with industry-leading experts to accelerate growth and secure your digital future. Trusted by Fortune 500 companies. 99.99% uptime SLA.",
    siteName: "Knetix",
    images: [
      {
        url: "https://knetix.vercel.app/og-image.jpg?v=4",
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
    title: "Knetix - Transform Your Business With Enterprise Technology",
    description: "Industry-leading IT solutions trusted by Fortune 500 companies. 99.99% uptime, SOC 2 certified, 24/7 support.",
    images: ["https://knetix.vercel.app/og-image.jpg?v=4"],
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
        <meta property="og:title" content="Knetix - Transform Your Business With Enterprise Technology Solutions" />
        <meta property="og:description" content="Partner with industry-leading experts to accelerate growth and secure your digital future. Trusted by Fortune 500 companies." />
        <meta property="og:image" content="https://knetix.vercel.app/og-image.jpg?v=4" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://knetix.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Knetix" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@knetix" />
        <meta name="twitter:creator" content="@knetix" />
        <meta name="twitter:title" content="Knetix - Transform Your Business With Enterprise Technology" />
        <meta name="twitter:description" content="Industry-leading IT solutions trusted by Fortune 500 companies. 99.99% uptime, SOC 2 certified, 24/7 support." />
        <meta name="twitter:image" content="https://knetix.vercel.app/og-image.jpg?v=4" />
        
        {/* Additional SEO Tags */}
        <meta name="theme-color" content="#0A2E50" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        
        <StructuredData />
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased`}
      >
        <EnterpriseNavbar />
        {children}
        <EnterpriseFooter />
        <LiveChatWidget />
        <ScrollToTop />
        <CookieConsent />
      </body>
    </html>
  );
}
