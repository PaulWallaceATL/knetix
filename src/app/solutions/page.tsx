import Link from 'next/link';

const solutions = [
  {
    title: 'Network Performance',
    description: 'Boost application delivery, maximize uptime, and optimize WAN costs for seamless connectivity and peak operational efficiency. Our comprehensive network solutions ensure your business stays connected and performs at its best.',
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    href: '/solutions/network-performance',
    features: ['Application Delivery Optimization', 'WAN Cost Reduction', 'Uptime Maximization', 'Performance Monitoring'],
  },
  {
    title: 'Cybersecurity',
    description: 'Fortify your defenses with future-ready security solutions, safeguarding your valuable data and ensuring uninterrupted operations against evolving threats. Stay ahead of cyber risks with our advanced protection.',
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    href: '/solutions/cybersecurity',
    features: ['Threat Detection & Prevention', 'Data Protection', 'Compliance Management', 'Security Audits'],
  },
  {
    title: 'Unified Communications',
    description: 'Foster effortless collaboration and effective communication across all channels, empowering your workforce to connect from anywhere. Transform how your teams work together with modern communication tools.',
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    href: '/solutions/unified-communications',
    features: ['Video Conferencing', 'Team Collaboration', 'Voice Solutions', 'Mobile Integration'],
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Modernize your data and IT operations with secure, flexible, and scalable cloud solutions, streamlining application and service delivery. Build a robust foundation for digital transformation.',
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    href: '/solutions/cloud-infrastructure',
    features: ['Cloud Migration', 'Hybrid Cloud Solutions', 'Infrastructure as a Service', 'Cloud Security'],
  },
  {
    title: 'Contact Center (CCaaS)',
    description: 'Elevate customer engagement with personalized interactions, enhancing satisfaction, reducing churn, and optimizing IT costs through our Contact Center as a Service. Deliver exceptional customer experiences.',
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
    href: '/solutions/contact-center',
    features: ['Omnichannel Support', 'AI-Powered Routing', 'Real-time Analytics', 'Customer Journey Mapping'],
  },
  {
    title: 'Managed Services',
    description: 'Gain comprehensive support, proactive monitoring, and expert guidance for optimal IT performance and reliability with our end-to-end managed services. Focus on your business while we handle your IT.',
    icon: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    href: '/solutions/managed-services',
    features: ['24/7 Monitoring', 'Proactive Maintenance', 'Help Desk Support', 'IT Strategy Consulting'],
  },
];

export default function SolutionsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A2E50] to-[#00C4B4] text-white py-16 md:py-20 lg:py-24">
        <div className="container-clean text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Enterprise Solutions That Drive Results
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            From cloud infrastructure to cybersecurity, we deliver comprehensive technology solutions 
            that optimize performance, enhance security, and accelerate business growth.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container-clean">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {solutions.map((solution) => (
              <Link
                key={solution.title}
                href={solution.href}
                className="group bg-[#F0F2F5] rounded-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#00C4B4]"
              >
                <div className="text-[#00C4B4] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {solution.icon}
                </div>
                
                <h2 className="text-2xl font-bold text-[#0A2E50] mb-4 group-hover:text-[#00C4B4] transition-colors">
                  {solution.title}
                </h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <svg className="w-5 h-5 text-[#00C4B4] mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-[#FF8C00] font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center">
                  Learn More
                  <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F0F2F5] py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2E50] mb-6">
            Need Help Choosing the Right Solution?
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Our enterprise solutions team will assess your needs and recommend the optimal technology 
            stack for your business. Get a free consultation with no obligations.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#FF8C00] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#e67e00] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get a Free Assessment
          </Link>
        </div>
      </section>
    </main>
  );
}

