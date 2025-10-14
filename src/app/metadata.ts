import { Metadata } from 'next';

export const siteMetadata = {
  title: 'Knetix - Powering Your Digital Evolution',
  description: 'Accelerate growth, streamline operations, and secure your future with intelligent technology solutions tailored for tomorrow\'s challenges. Enterprise IT solutions, cybersecurity, cloud infrastructure, and managed services.',
  keywords: [
    'IT Solutions',
    'Enterprise Technology',
    'Cybersecurity',
    'Cloud Infrastructure',
    'Managed Services',
    'Digital Transformation',
    'Network Performance',
    'Unified Communications',
    'Contact Center Solutions',
    'CCaaS',
    'IT Consulting',
    'Technology Partners',
  ],
  siteUrl: 'https://knetix.com',
  companyName: 'Knetix',
  address: {
    street: '2137 Chelsea Blvd. Unit C1',
    city: 'Allen',
    state: 'TX',
    zip: '75013',
    country: 'United States',
  },
  contact: {
    email: 'info@knetix.com',
    phone: '(555) 123-4567',
  },
  social: {
    linkedin: 'https://linkedin.com/company/knetix',
    twitter: 'https://twitter.com/knetix',
    facebook: 'https://facebook.com/knetix',
  },
};

export function generatePageMetadata(page: {
  title?: string;
  description?: string;
  keywords?: string[];
  path?: string;
}): Metadata {
  const title = page.title 
    ? `${page.title} | ${siteMetadata.companyName}` 
    : siteMetadata.title;
  
  const description = page.description || siteMetadata.description;
  const keywords = [...siteMetadata.keywords, ...(page.keywords || [])];
  const url = page.path 
    ? `${siteMetadata.siteUrl}${page.path}` 
    : siteMetadata.siteUrl;

  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: siteMetadata.companyName }],
    creator: siteMetadata.companyName,
    publisher: siteMetadata.companyName,
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
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      title,
      description,
      siteName: siteMetadata.companyName,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@knetix',
    },
    alternates: {
      canonical: url,
    },
  };
}

