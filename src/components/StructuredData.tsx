export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Knetix',
    description: 'Enterprise technology solutions provider specializing in IT infrastructure, cybersecurity, cloud services, and digital transformation.',
    url: 'https://knetix.com',
    logo: 'https://knetix.com/logo.png',
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
      contactType: 'customer service',
      email: 'info@knetix.com',
      availableLanguage: 'English',
    },
    sameAs: [
      'https://www.linkedin.com/company/knetix',
      'https://twitter.com/knetix',
      'https://www.facebook.com/knetix',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    service: [
      {
        '@type': 'Service',
        name: 'Network Performance Solutions',
        description: 'Optimize application delivery and maximize uptime',
      },
      {
        '@type': 'Service',
        name: 'Cybersecurity Solutions',
        description: 'Future-ready security solutions for data protection',
      },
      {
        '@type': 'Service',
        name: 'Cloud Infrastructure',
        description: 'Scalable and secure cloud solutions',
      },
      {
        '@type': 'Service',
        name: 'Managed Services',
        description: '24/7 IT support and proactive monitoring',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}

