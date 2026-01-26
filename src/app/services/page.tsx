import Link from 'next/link';

const knnectServices = [
  {
    title: 'Amazon Connect Architecture',
    description: 'Production-ready Amazon Connect environments built for maximum scale, aligned with rigorous AWS Well-Architected frameworks to guarantee security, reliability, and performance.',
  },
  {
    title: 'High-Availability Contact Centers',
    description: 'Enterprise contact center solutions designed for multi-modal enterprises, ensuring seamless customer experiences across all channels.',
  },
  {
    title: 'CX Strategy & Implementation',
    description: 'End-to-end customer experience transformation leveraging Amazon Connect and AWS ecosystem to deliver measurable business outcomes.',
  },
];

const knetixServices = [
  {
    title: 'Multi-Cloud Networking & Resiliency',
    description: 'Engineer cloud, edge, and campus connectivity with vendor-agnostic designs, zero-trust guardrails, and TSD-sourced partners.',
  },
  {
    title: 'Cybersecurity & Governance',
    description: 'Bring security architecture, identity, and compliance programs under one roadmap backed by proven ecosystem providers.',
  },
  {
    title: 'Unified Collaboration',
    description: 'Reimagine workforce experiences across voice, video, messaging, and workflow platforms with measurable adoption plans.',
  },
  {
    title: 'Cloud & Edge Infrastructure',
    description: 'We engineer resilient, vendor-neutral infrastructure designed for enterprise scale and absolute data control.',
  },
  {
    title: 'Applied AI & Data Intelligence',
    description: 'We transform fragmented data into automated workflows and real-time intelligence for faster, better decision-making.',
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#000D33] via-[#0A2E50] to-[#000D33] text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <p className="uppercase tracking-[0.3em] text-white/60 text-sm">Two Brands, One Vision</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Technology Advisory Services
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Knetix and Knnect work together to solve complex enterprise challenges. Knnect specializes in Customer Experience and Amazon Connect, while Knetix provides comprehensive technology advisory across cloud, security, data, AI, and more.
          </p>
        </div>
      </section>

      {/* Knnect Section - CX & Amazon Connect */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <p className="text-sm uppercase tracking-wide text-[#00C4B4] font-semibold">Knnect</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2E50]">
              Customer Experience & Amazon Connect
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Knnect builds high-availability enterprise contact centers with Amazon Connect. We deliver production-ready environments built for maximum scale, aligned with AWS Well-Architected frameworks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {knnectServices.map((service, index) => (
              <div
                key={index}
                className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-6 hover:border-[#00C4B4] hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-semibold text-[#0A2E50] mb-3">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block bg-[#00C4B4] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#00b3a3] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact an AWS Connect Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="border-t border-gray-300"></div>
        </div>
      </section>

      {/* Knetix Section - General Advisory */}
      <section className="py-16 md:py-20 lg:py-24 bg-[#F3F5F9]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <p className="text-sm uppercase tracking-wide text-[#00C4B4] font-semibold">Knetix</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2E50]">
              Advisory Plays Built for Modern Enterprises
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We translate board-level mandates into pragmatic strategies for cloud, security, AI, data, and customer experience—aligning the right TSD partners, commercial constructs, and governance models to protect outcomes and optimize spend.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {knetixServices.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#00C4B4] hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-semibold text-[#0A2E50] mb-3">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block bg-[#0A2E50] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#0a3d6b] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Speak with a Technology Advisor
            </Link>
          </div>
        </div>
      </section>

      {/* Unified Value Proposition */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <p className="text-sm uppercase tracking-wide text-[#00C4B4] font-semibold">Unbiased Intelligence. Interoperable Design.</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2E50]">
            Architecting the Future of Cloud, Security, AI, and CX
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We engineer the strategy and architecture that drive complex enterprise change. We deliver unbiased, high-performance outcomes for the world&apos;s most demanding organizations—without owning data centers or pushing proprietary infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-[#0A2E50] to-[#00C4B4] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 shadow-lg"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="inline-block border-2 border-[#0A2E50] text-[#0A2E50] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#0A2E50] hover:text-white transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
