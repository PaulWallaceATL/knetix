# Technical Implementation Guide

**Developer's Guide to Implementing Priority Enhancements**

---

## 1. CONTACT FORM BACKEND INTEGRATION

### Current Issue
Form submission only logs to console (`console.log('Form submitted:', formData)`)

### Solution A: Simple Email Integration (Recommended Start)

**Install Dependencies:**
```bash
npm install nodemailer
npm install @sendgrid/mail
# or
npm install resend
```

**Create API Route:** `src/app/api/contact/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, company, message } = body;

    // Validate input
    if (!firstName || !lastName || !email || !phone || !company || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send email to sales team
    const msg = {
      to: process.env.SALES_EMAIL!, // your sales email
      from: process.env.FROM_EMAIL!, // verified sender
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await sgMail.send(msg);

    // Send auto-responder to user
    const autoResponder = {
      to: email,
      from: process.env.FROM_EMAIL!,
      subject: 'Thank you for contacting Knetix',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${firstName},</p>
        <p>We've received your message and one of our team members will get back to you within 24 hours.</p>
        <p>In the meantime, feel free to explore our <a href="https://knetix.com/solutions">solutions</a> or check out our <a href="https://knetix.com/insights">latest insights</a>.</p>
        <p>Best regards,<br>The Knetix Team</p>
      `,
    };

    await sgMail.send(autoResponder);

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
```

**Update Environment Variables:** `.env.local`

```env
SENDGRID_API_KEY=your_sendgrid_api_key
SALES_EMAIL=sales@knetix.com
FROM_EMAIL=noreply@knetix.com
```

**Update Contact Form:** `src/app/contact/page.tsx`

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) {
    return;
  }

  setIsSubmitting(true);

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } else {
      const data = await response.json();
      setErrors({ submit: data.error || 'Failed to submit form' });
    }
  } catch (error) {
    setErrors({ submit: 'Network error. Please try again.' });
  } finally {
    setIsSubmitting(false);
  }
};
```

### Solution B: HubSpot Integration (Recommended for Growth)

**Install:**
```bash
npm install @hubspot/api-client
```

**API Route:** `src/app/api/contact/route.ts`

```typescript
import { Client } from '@hubspot/api-client';

const hubspotClient = new Client({ accessToken: process.env.HUBSPOT_ACCESS_TOKEN });

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, company, message } = body;

    // Create contact in HubSpot
    const contactObj = {
      properties: {
        email: email,
        firstname: firstName,
        lastname: lastName,
        phone: phone,
        company: company,
        message: message,
        hs_lead_status: 'NEW',
      },
    };

    const contact = await hubspotClient.crm.contacts.basicApi.create(contactObj);

    // Send notification email (same as Solution A)
    
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('HubSpot error:', error);
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 });
  }
}
```

---

## 2. ANALYTICS IMPLEMENTATION

### Google Analytics 4 Setup

**Install:**
```bash
npm install @next/third-parties
```

**Update Layout:** `src/app/layout.tsx`

```typescript
import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
      </body>
    </html>
  );
}
```

**Environment Variable:**
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Google Tag Manager (More Flexible)

**Update Layout:**
```typescript
import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
            `,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
```

### Custom Event Tracking

**Create Analytics Utility:** `src/lib/analytics.ts`

```typescript
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID!, {
      page_path: url,
    });
  }
};
```

**Track CTA Clicks:**
```typescript
import { trackEvent } from '@/lib/analytics';

<button
  onClick={() => {
    trackEvent('cta_click', {
      cta_location: 'hero',
      cta_text: 'Schedule Consultation',
    });
    // Navigate or open modal
  }}
>
  Schedule Consultation
</button>
```

---

## 3. LIVE CHAT INTEGRATION

### Option A: Tawk.to (Free)

**Add to Layout:**
```typescript
'use client';

import { useEffect } from 'react';

export function TawkToChat() {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);
  }, []);

  return null;
}
```

### Option B: Intercom

**Install:**
```bash
npm install react-use-intercom
```

**Setup:**
```typescript
import { IntercomProvider } from 'react-use-intercom';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <IntercomProvider appId={process.env.NEXT_PUBLIC_INTERCOM_APP_ID!}>
      {children}
    </IntercomProvider>
  );
}
```

**Use in Components:**
```typescript
'use client';

import { useIntercom } from 'react-use-intercom';

export function ContactButton() {
  const { show } = useIntercom();

  return (
    <button onClick={show}>
      Chat with Us
    </button>
  );
}
```

---

## 4. CALENDAR BOOKING INTEGRATION

### Calendly Embed

**Create Component:** `src/components/CalendlyEmbed.tsx`

```typescript
'use client';

import { useEffect } from 'react';

interface CalendlyEmbedProps {
  url: string;
  prefill?: {
    name?: string;
    email?: string;
    customAnswers?: Record<string, string>;
  };
}

export default function CalendlyEmbed({ url, prefill }: CalendlyEmbedProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget"
      data-url={url}
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
}
```

**Use in Pages:**
```typescript
import CalendlyEmbed from '@/components/CalendlyEmbed';

export default function ContactPage() {
  return (
    <div>
      <h1>Schedule a Consultation</h1>
      <CalendlyEmbed url="https://calendly.com/your-username/30min" />
    </div>
  );
}
```

**Popup Widget:**
```typescript
'use client';

import { useEffect } from 'react';

export function CalendlyButton() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <button
      onClick={() => {
        // @ts-ignore
        window.Calendly?.initPopupWidget({
          url: 'https://calendly.com/your-username/30min',
        });
      }}
      className="btn btn-primary"
    >
      Schedule a Call
    </button>
  );
}
```

---

## 5. BLOG/INSIGHTS IMPLEMENTATION

### Directory Structure

```
src/
  app/
    insights/
      page.tsx              # Blog listing page
      [slug]/
        page.tsx            # Individual blog post
  content/
    insights/
      post-1.mdx
      post-2.mdx
      ...
```

### Install Dependencies

```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react gray-matter
npm install rehype-highlight remark-gfm
```

### Create MDX Content

**File:** `src/content/insights/cybersecurity-best-practices.mdx`

```mdx
---
title: "10 Cybersecurity Best Practices for 2025"
description: "Essential security measures every enterprise should implement"
author: "Michael Torres"
date: "2025-10-15"
category: "Cybersecurity"
tags: ["security", "best practices", "compliance"]
image: "/images/insights/cybersecurity.jpg"
---

# 10 Cybersecurity Best Practices for 2025

In today's threat landscape, cybersecurity is more critical than ever...

## 1. Implement Zero Trust Architecture

Zero Trust means...

## 2. Enable Multi-Factor Authentication

MFA provides...

[Rest of content]
```

### Blog Listing Page

**File:** `src/app/insights/page.tsx`

```typescript
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

interface Post {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
}

async function getPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), 'src/content/insights');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const slug = filename.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug,
      ...(data as Omit<Post, 'slug'>),
    };
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export default async function InsightsPage() {
  const posts = await getPosts();

  return (
    <main className="pt-20">
      <section className="bg-gradient-to-br from-[#0A2E50] to-[#00C4B4] text-white py-24">
        <div className="container-clean text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Insights & Resources
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Expert perspectives, industry analysis, and actionable strategies
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-clean">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-2xl transition-all"
              >
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <div className="text-sm text-[#00C4B4] font-semibold mb-2">
                    {post.category}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00C4B4] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
```

### Individual Blog Post Page

**File:** `src/app/insights/[slug]/page.tsx`

```typescript
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

async function getPost(slug: string) {
  try {
    const fullPath = path.join(process.cwd(), 'src/content/insights', `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return { data, content };
  } catch {
    return null;
  }
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'src/content/insights');
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ''),
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="pt-20">
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-12">
          <div className="text-sm text-[#00C4B4] font-semibold mb-4">
            {post.data.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {post.data.title}
          </h1>
          <div className="flex items-center gap-6 text-gray-600">
            <span>{post.data.author}</span>
            <span>{new Date(post.data.date).toLocaleDateString()}</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </main>
  );
}
```

---

## 6. INDUSTRY VERTICAL PAGES

### Dynamic Industry Pages

**Create:** `src/app/industries/[vertical]/page.tsx`

```typescript
import { notFound } from 'next/navigation';

const industries = {
  healthcare: {
    title: 'Healthcare IT Solutions',
    hero: {
      subtitle: 'HIPAA-Compliant Technology',
      description: 'Secure, scalable IT solutions designed specifically for healthcare providers',
    },
    challenges: [
      {
        title: 'HIPAA Compliance',
        description: 'Navigate complex regulatory requirements',
      },
      {
        title: 'Data Security',
        description: 'Protect sensitive patient information',
      },
      {
        title: 'System Integration',
        description: 'Connect EHR, practice management, and other systems',
      },
    ],
    solutions: [
      {
        title: 'Secure Cloud Infrastructure',
        description: 'HIPAA-compliant cloud hosting and backup',
        features: ['Encrypted storage', 'Business Associate Agreement', 'Audit logging'],
      },
      {
        title: 'Healthcare-Specific Cybersecurity',
        description: 'Protect against healthcare-targeted threats',
        features: ['Ransomware protection', 'Access controls', 'Incident response'],
      },
    ],
    caseStudies: [
      {
        client: 'Regional Hospital Network',
        challenge: 'Legacy systems and compliance gaps',
        solution: 'Cloud migration and security enhancement',
        results: {
          metric1: '100% HIPAA Compliance',
          metric2: '$1.2M Cost Savings',
          metric3: '50% Faster System Access',
        },
      },
    ],
  },
  finance: {
    // Similar structure
  },
  retail: {
    // Similar structure
  },
};

export async function generateStaticParams() {
  return Object.keys(industries).map((vertical) => ({
    vertical,
  }));
}

export default function IndustryPage({ params }: { params: { vertical: string } }) {
  const industry = industries[params.vertical as keyof typeof industries];

  if (!industry) {
    notFound();
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A2E50] to-[#00C4B4] text-white py-24">
        <div className="container-clean text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {industry.title}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            {industry.hero.description}
          </p>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-clean">
          <h2 className="text-3xl font-bold text-center mb-12">
            Industry Challenges We Solve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industry.challenges.map((challenge, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">{challenge.title}</h3>
                <p className="text-gray-600">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-clean">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industry.solutions.map((solution, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg
                        className="w-5 h-5 text-[#00C4B4] mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {/* CTA */}
    </main>
  );
}
```

---

## 7. SEO ENHANCEMENTS

### Structured Data Component

**Create:** `src/components/StructuredData.tsx` (already exists, enhance it)

```typescript
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Knetix',
    url: 'https://knetix.com',
    logo: 'https://knetix.com/logo.png',
    description: 'Enterprise IT solutions and managed services',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2137 Chelsea Blvd. Unit C1',
      addressLocality: 'Allen',
      addressRegion: 'TX',
      postalCode: '75013',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'sales',
      email: 'info@knetix.com',
    },
    sameAs: [
      'https://www.linkedin.com/company/knetix',
      'https://twitter.com/knetix',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({ service }: { service: any }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    provider: {
      '@type': 'Organization',
      name: 'Knetix',
    },
    description: service.description,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

### Dynamic OG Images

**Create:** `src/app/api/og/route.tsx`

```typescript
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'Knetix';
  const subtitle = searchParams.get('subtitle') || 'Enterprise IT Solutions';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0A2E50 0%, #00C4B4 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <h1 style={{ fontSize: 72, fontWeight: 'bold', marginBottom: 20 }}>
          {title}
        </h1>
        <p style={{ fontSize: 32, opacity: 0.9 }}>{subtitle}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
```

**Use in Pages:**
```typescript
export const metadata = {
  title: 'Network Performance Solutions | Knetix',
  description: 'Optimize your network for peak performance',
  openGraph: {
    title: 'Network Performance Solutions',
    description: 'Optimize your network for peak performance',
    images: [
      {
        url: '/api/og?title=Network%20Performance&subtitle=Enterprise%20Solutions',
        width: 1200,
        height: 630,
      },
    ],
  },
};
```

---

## 8. PERFORMANCE OPTIMIZATION

### Image Optimization (Already Using next/image)

Ensure all images use Next.js Image component:

```typescript
import Image from 'next/image';

<Image
  src="/images/hero.jpg"
  alt="Description"
  width={1200}
  height={600}
  priority // For above-fold images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/..." // Optional
/>
```

### Font Optimization

Already using Google Fonts correctly in layout.tsx, ensure fonts are preloaded:

```typescript
import { Montserrat, Open_Sans } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  preload: true,
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
  preload: true,
});
```

### Lazy Loading for Components

```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('@/components/HeavyComponent'), {
  loading: () => <div>Loading...</div>,
  ssr: false, // Disable SSR if not needed
});
```

---

## 9. EXIT-INTENT POPUP

**Create:** `src/components/ExitIntentPopup.tsx`

```typescript
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Submit to newsletter API
    console.log('Subscribe:', email);
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-8 max-w-md w-full z-50 shadow-2xl"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Wait! Before You Go...
            </h2>
            <p className="text-gray-600 mb-6">
              Get our free guide: "10 Ways to Optimize Your IT Infrastructure" 
              plus exclusive insights delivered to your inbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00C4B4] focus:border-transparent outline-none"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#FF8C00] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e67e00] transition-colors"
              >
                Get My Free Guide
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-4 text-center">
              No spam. Unsubscribe anytime.
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
```

**Add to Layout:**
```typescript
import ExitIntentPopup from '@/components/ExitIntentPopup';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ExitIntentPopup />
      </body>
    </html>
  );
}
```

---

## 10. DEPLOYMENT CHECKLIST

### Environment Variables

Ensure all required environment variables are set:

```env
# Analytics
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_GTM_ID=

# Forms
SENDGRID_API_KEY=
SALES_EMAIL=
FROM_EMAIL=

# CRM
HUBSPOT_ACCESS_TOKEN=

# Chat
NEXT_PUBLIC_INTERCOM_APP_ID=

# Calendar
NEXT_PUBLIC_CALENDLY_USERNAME=

# General
NEXT_PUBLIC_SITE_URL=https://knetix.com
```

### Build & Deploy

```bash
# Test build locally
npm run build

# Run production build locally
npm start

# Deploy to Vercel
vercel --prod

# Or deploy to your hosting platform
```

### Post-Deployment

1. ✅ Test all forms (submit and check email/CRM)
2. ✅ Verify analytics tracking (check GA real-time)
3. ✅ Test live chat functionality
4. ✅ Verify calendar booking works
5. ✅ Check all internal links
6. ✅ Test on mobile devices
7. ✅ Run Lighthouse audit
8. ✅ Submit sitemap to Google Search Console
9. ✅ Set up uptime monitoring (e.g., UptimeRobot)

---

## HELPFUL COMMANDS

```bash
# Development
npm run dev

# Build
npm run build

# Start production server
npm start

# Lint
npm run lint

# Type check
npx tsc --noEmit

# Analyze bundle size
npm run build && npx @next/bundle-analyzer
```

---

## RESOURCES

- **Next.js Documentation:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **MDX:** https://mdxjs.com/
- **Framer Motion:** https://www.framer.com/motion/
- **SendGrid API:** https://docs.sendgrid.com/
- **HubSpot API:** https://developers.hubspot.com/
- **Google Analytics:** https://developers.google.com/analytics
- **Calendly API:** https://developer.calendly.com/

---

## TROUBLESHOOTING

### Forms Not Sending

1. Check API route is accessible: `curl https://yoursite.com/api/contact`
2. Verify environment variables are set
3. Check SendGrid/email service dashboard for errors
4. Look at server logs for errors

### Analytics Not Tracking

1. Verify GA ID is correct and starts with G-
2. Check browser console for errors
3. Use GA DebugView to see real-time events
4. Ensure ad blockers are disabled for testing

### Build Errors

1. Run `npm run build` locally first
2. Check TypeScript errors: `npx tsc --noEmit`
3. Verify all imports are correct
4. Clear `.next` folder and rebuild

---

**Next Steps:** Implement these enhancements incrementally, testing each one thoroughly before moving to the next.

