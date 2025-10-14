import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import LiveChatWidget from "@/components/LiveChatWidget";
import ScrollToTop from "@/components/ScrollToTop";

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
  title: "Knetix - Powering Your Digital Evolution | Enterprise IT Solutions",
  description: "Accelerate growth, streamline operations, and secure your future with intelligent technology solutions tailored for tomorrow's challenges. Trusted by 500+ enterprises worldwide for cybersecurity, cloud infrastructure, and managed services.",
  keywords: "IT Solutions, Enterprise Technology, Cybersecurity, Cloud Infrastructure, Managed Services, Digital Transformation, Network Performance, Unified Communications",
  authors: [{ name: "Knetix" }],
  robots: {
    index: true,
    follow: true,
  },
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
    title: "Knetix - Powering Your Digital Evolution",
    description: "Enterprise IT solutions for forward-thinking businesses",
    siteName: "Knetix",
    images: [
      {
        url: "https://knetix.vercel.app/og-image.jpg?v=4",
        width: 1200,
        height: 630,
        alt: "Knetix - Enterprise IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Knetix - Powering Your Digital Evolution",
    description: "Enterprise IT solutions for forward-thinking businesses",
    images: ["https://knetix.vercel.app/og-image.jpg?v=3"],
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
        
        {/* Explicit Open Graph tags for iMessage */}
        <meta property="og:title" content="Knetix - Powering Your Digital Evolution" />
        <meta property="og:description" content="Enterprise IT solutions for forward-thinking businesses" />
        <meta property="og:image" content="https://knetix.vercel.app/og-image.jpg?v=4" />
        <meta property="og:url" content="https://knetix.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Knetix" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Knetix - Powering Your Digital Evolution" />
        <meta name="twitter:description" content="Enterprise IT solutions for forward-thinking businesses" />
        <meta name="twitter:image" content="https://knetix.vercel.app/og-image.jpg?v=4" />
        
        <StructuredData />
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <LiveChatWidget />
        <ScrollToTop />
      </body>
    </html>
  );
}
