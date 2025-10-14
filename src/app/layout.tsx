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
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon.svg", sizes: "any", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.svg",
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
        url: "https://knetix.vercel.app/og-image.jpg",
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
    images: ["https://knetix.vercel.app/og-image.jpg"],
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
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
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
