import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#000D33] via-[#0A2E50] to-[#000D33] text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <p className="uppercase tracking-[0.3em] text-white/60 text-sm">Leadership & Expertise</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Built on Amazon-Scale Rigor
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Knetix is led by top Amazon CX Sales Executives with deep expertise in enterprise technology transformations. Our approach combines Amazon&apos;s operational excellence with decades of enterprise IT experience.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#00C4B4] mb-2">Executive Leadership</p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A2E50] mb-4">
                  Top Amazon CX Sales Executives
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Our leadership team brings exceptional credentials from Amazon, where they served as top Customer Experience (CX) Sales Executives. Their deep understanding of Amazon Connect, AWS architecture, and enterprise-scale customer experience solutions forms the foundation of Knetix.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  At Amazon, our team was instrumental in helping Fortune 500 companies transform their customer experience operations using Amazon Connect and the broader AWS ecosystem. This hands-on experience with Amazon&apos;s rigorous operational standards and customer-centric approach directly informs our methodology.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Today, we channel this Amazon-scale rigor into Knetix&apos;s broader technology advisory practice, ensuring that every engagement—whether focused on CX, cloud infrastructure, security, or AI—meets the highest standards of engineering excellence and business outcomes.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#0A2E50] to-[#00C4B4] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Amazon Pedigree</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Top Amazon CX Sales Executives with proven track records</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Deep expertise in Amazon Connect and AWS Well-Architected frameworks</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Fortune 500 enterprise transformation experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Vendor-agnostic approach with Amazon-scale operational rigor</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Two Brands, One Vision */}
      <section className="py-16 md:py-20 lg:py-24 bg-[#F3F5F9]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#00C4B4]">Our Approach</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2E50]">
              One Vision, Complete Capability
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Knetix solves complex enterprise challenges through a unified approach that brings together Customer Experience, Amazon Connect, and comprehensive technology advisory.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#00C4B4] hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-[#0A2E50] mb-4">Customer Experience & Amazon Connect</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Focus:</strong> CX and Amazon Connect
              </p>
              <p className="text-gray-700 leading-relaxed">
                Knetix specializes in building high-availability enterprise contact centers with Amazon Connect. This is the core &quot;hook&quot; based on our team&apos;s Amazon background, delivering production-ready environments built for maximum scale.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#00C4B4] hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-[#0A2E50] mb-4">Technology Advisory</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Focus:</strong> Comprehensive Technology Advisory
              </p>
              <p className="text-gray-700 leading-relaxed">
                Knetix provides broader advisory services covering cloud infrastructure, cybersecurity, data modernization, AI/ML readiness, unified communications, and enterprise automation—everything outside the Amazon Connect ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Principles */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#00C4B4]">Our Methodology</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2E50]">
              Engineering-Led, Outcome-Focused
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Every program is led by senior architects with decades of enterprise IT experience. We operate as Technology Advisors embedded in the national TSD ecosystem—vendor-agnostic, asset-light, and accountable only to client outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Vendor-Agnostic Architecture',
                description: 'We sit on the client side of the table, evaluating the strongest options until the right blend of capability, economics, and risk tolerance is proven.',
              },
              {
                title: 'Deep Engineering Bench',
                description: 'Senior architects with decades of enterprise IT, security, data, and AI experience guiding every decision.',
              },
              {
                title: 'Outcome & FinOps Discipline',
                description: 'We design financial guardrails, adoption metrics, and governance cadences that keep innovation accountable.',
              },
              {
                title: 'Amazon-Scale Rigor',
                description: "Leveraging Amazon's operational excellence and AWS Well-Architected frameworks to ensure enterprise-grade outcomes.",
              },
            ].map((principle, index) => (
              <div
                key={index}
                className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-6 hover:border-[#00C4B4] hover:shadow-xl transition-all"
              >
                <h3 className="text-lg font-semibold text-[#0A2E50] mb-3">{principle.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#0A2E50] to-[#00C4B4] text-white py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Engage a Technology Advisor?</h2>
          <p className="text-lg text-white/80 leading-relaxed">
            Whether you need Amazon Connect expertise or comprehensive technology advisory, Knetix brings Amazon-scale rigor to every engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#0A2E50] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Speak with a Technology Advisor
            </Link>
            <Link
              href="/services"
              className="inline-block border border-white/60 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
