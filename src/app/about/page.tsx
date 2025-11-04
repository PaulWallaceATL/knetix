import Link from 'next/link';
import TeamGrid from '@/components/TeamGrid';
import AnimatedCounter from '@/components/AnimatedCounter';

const values = [
  {
    title: 'Innovation',
    description: 'Constantly exploring new frontiers to bring you the best.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Agility',
    description: 'Responding swiftly to your needs and market dynamics.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Partnership',
    description: 'Building lasting relationships based on trust and mutual growth.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Excellence',
    description: 'Committing to the highest standards in every solution we deliver.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Security',
    description: 'Prioritizing the integrity and safety of your digital assets.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A2E50] to-[#00C4B4] text-white py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Technology Partners You Can Trust
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            For over 15 years, we&apos;ve helped enterprises transform their operations with 
            intelligent, secure, and scalable technology solutions.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2E50] mb-6">
                Our Story
              </h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p className="text-lg">
                  Knetix was founded on a simple yet powerful principle: <strong>technology should accelerate growth, not create barriers</strong>.
                </p>
                <p>
                  With decades of collective experience in enterprise IT, our founders envisioned a new kind of 
                  technology partner—one that combines deep industry expertise with cutting-edge innovation and 
                  a genuine commitment to client success.
                </p>
                <p>
                  Today, we&apos;re proud to serve enterprises across healthcare, finance, manufacturing, and technology sectors. 
                  Our journey has been marked by an unwavering commitment to excellence, innovation, and delivering 
                  measurable business value.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#0A2E50] to-[#00C4B4] rounded-lg p-8 text-white">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-white text-[#00C4B4] p-3 rounded-lg">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">
                      <AnimatedCounter end={15} suffix="+" />
                    </div>
                    <div className="text-gray-200">Years of Excellence</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-white text-[#00C4B4] p-3 rounded-lg">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">
                      <AnimatedCounter end={100} suffix="%" />
                    </div>
                    <div className="text-gray-200">Client Satisfaction</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-white text-[#00C4B4] p-3 rounded-lg">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">
                      <AnimatedCounter end={1000} suffix="+" />
                    </div>
                    <div className="text-gray-200">Projects Delivered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-16 md:py-20 lg:py-24 bg-[#F0F2F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2E50] mb-6">
              Our Approach: Partnership Over Transactions
            </h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                We believe in empowering businesses through strategic technology partnerships, not just 
                one-time implementations.
              </p>
              <p>
                Our approach centers on three key principles:
              </p>
              <ul className="text-left max-w-2xl mx-auto space-y-3 mt-6">
                <li className="flex items-start gap-3">
                  <span className="text-[#00C4B4] font-bold text-xl">•</span>
                  <span><strong>Understand your ecosystem</strong> — We take time to learn your business, challenges, and goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00C4B4] font-bold text-xl">•</span>
                  <span><strong>Anticipate future needs</strong> — We design solutions that scale with your growth</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#00C4B4] font-bold text-xl">•</span>
                  <span><strong>Deliver measurable results</strong> — We focus on business outcomes, not just technology</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <TeamGrid />

      {/* Our Values */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-[#F0F2F5] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2E50] mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              These principles guide everything we do and drive us to deliver exceptional results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#00C4B4]"
              >
                <div className="text-[#00C4B4] mb-4">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#0A2E50] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#0A2E50] to-[#00C4B4] text-white py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            Let&apos;s discuss how Knetix can help you achieve your technology goals. 
            Schedule a free consultation with our enterprise solutions team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-[#FF8C00] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#e67e00] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/solutions"
              className="inline-block bg-white text-[#0A2E50] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Solutions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

