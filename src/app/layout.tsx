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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://knetix.com",
    title: "Knetix - Powering Your Digital Evolution",
    description: "Enterprise IT solutions for forward-thinking businesses",
    siteName: "Knetix",
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
