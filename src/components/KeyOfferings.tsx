import Link from 'next/link';

const offerings = [
  {
    title: 'Network Performance',
    description: 'Boost application delivery, maximize uptime, and optimize WAN costs for seamless connectivity and peak operational efficiency.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    href: '/solutions/network-performance',
  },
  {
    title: 'Cybersecurity',
    description: 'Fortify your defenses with future-ready security solutions, safeguarding your valuable data and ensuring uninterrupted operations against evolving threats.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    href: '/solutions/cybersecurity',
  },
  {
    title: 'Unified Communications',
    description: 'Foster effortless collaboration and effective communication across all channels, empowering your workforce to connect from anywhere.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    href: '/solutions/unified-communications',
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Modernize your data and IT operations with secure, flexible, and scalable cloud solutions, streamlining application and service delivery.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    href: '/solutions/cloud-infrastructure',
  },
  {
    title: 'Contact Center (CCaaS)',
    description: 'Elevate customer engagement with personalized interactions, enhancing satisfaction, reducing churn, and optimizing IT costs through our Contact Center as a Service.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
    href: '/solutions/contact-center',
  },
  {
    title: 'Managed Services',
    description: 'Gain comprehensive support, proactive monitoring, and expert guidance for optimal IT performance and reliability with our end-to-end managed services.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    href: '/solutions/managed-services',
  },
];

export default function KeyOfferings() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2E50] mb-6">
            Transform Your Business with Expert Solutions
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At Knetix, we don&apos;t just provide technology; we forge partnerships that transform 
            your business. Our expert team, deeply rooted in understanding your unique challenges, 
            crafts and implements secure, scalable IT solutions designed to propel you towards your 
            most ambitious goals. Experience the synergy of innovation and expertise.
          </p>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering) => (
            <Link
              key={offering.title}
              href={offering.href}
              className="group bg-[#F0F2F5] rounded-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-[#00C4B4]"
            >
              <div className="text-[#00C4B4] mb-4 group-hover:scale-110 transition-transform duration-300">
                {offering.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0A2E50] mb-3 group-hover:text-[#00C4B4] transition-colors">
                {offering.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {offering.description}
              </p>
              <div className="mt-4 text-[#FF8C00] font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center">
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
  );
}

