export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Knetix',
    description: 'Technology advisory and solutions agency specializing in enterprise cloud, security, data, AI, and CX strategy through a vendor-agnostic ecosystem.',
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
      email: 'info@knetix.io',
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
        name: 'Cloud & Architecture Advisory',
        description: 'Multi-cloud strategy, FinOps, and modernization roadmaps delivered through trusted providers.',
      },
      {
        '@type': 'Service',
        name: 'Cybersecurity & Governance Consulting',
        description: 'Zero-trust, compliance, resiliency, and security program leadership without owning infrastructure.',
      },
      {
        '@type': 'Service',
        name: 'Data, AI & Automation Strategy',
        description: 'Responsible AI readiness, data modernization, and analytics operating models.',
      },
      {
        '@type': 'Service',
        name: 'Customer & Workforce Experience Advisory',
        description: 'CX, CCaaS, and UC strategy, provider selection, and implementation oversight.',
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

