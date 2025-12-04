import Link from 'next/link';

const serviceTracks = [
  {
    title: 'Strategy & Architecture',
    description:
      'Board-level roadmaps that align cloud, security, data, AI, CX, and resiliency mandates to measurable business outcomes with enterprise architecture rigor.',
  },
  {
    title: 'Vendor Landscape & Sourcing',
    description:
      'Neutral comparison of the strongest providers in the TSD ecosystem, commercial alignment, and deal execution—without Knetix owning any infrastructure.',
  },
  {
    title: 'Implementation Governance',
    description:
      'Program management, architecture assurance, security/compliance checkpoints, and KPI dashboards that keep every delivery partner accountable.',
  },
  {
    title: 'Adoption & Runway Acceleration',
    description:
      'Change management, enablement, and operating-model design so modern platforms (cloud, CX, AI, automation) achieve sustained value.',
  },
  {
    title: 'Resiliency & Security Oversight',
    description:
      'Zero-trust policies, continuity playbooks, and regulatory alignment integrated into each engagement while providers execute operations.',
  },
  {
    title: 'FinOps & Investment Control',
    description:
      'Funding capture, cloud economics, benchmarking, and optimization loops that protect budgets and keep innovation disciplined.',
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <section className="bg-gradient-to-br from-[#0A2E50] to-[#00C4B4] text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <p className="uppercase tracking-[0.3em] text-white/60 text-sm">Technology Advisory & Solutions</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            A Services Model Purpose-Built for Complex Enterprise Transformations
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Knetix orchestrates strategy, architecture, vendor selection, and implementation oversight across multi-cloud,
            cybersecurity, data, AI, CX, and resiliency programs. We stay vendor-neutral, asset-light, and embedded inside the
            national Technology Services Distributor ecosystem to deliver the right partners and outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#0A2E50] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Speak with a Technology Advisor
            </Link>
            <Link
              href="/solutions"
              className="inline-block border border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Advisory Plays
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <p className="text-sm uppercase tracking-wide text-[#00C4B4] font-semibold">Services Framework</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2E50]">
              Strategy → Architecture → Provider Selection → Governance → Continuous Optimization
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Everything we do is engineered to keep business outcomes, resiliency, security, and cost leverage tightly tied to
              the technology roadmap.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {serviceTracks.map((track) => (
              <div
                key={track.title}
                className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-6 hover:border-[#00C4B4] hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-semibold text-[#0A2E50] mb-3">{track.title}</h3>
                <p className="text-gray-700 leading-relaxed">{track.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-[#F3F5F9]">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <p className="text-sm uppercase tracking-wide text-[#00C4B4] font-semibold">Engagement Types</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2E50]">
            Transformation Roadmaps • Architecture Reviews • Sourcing Programs • PMO/Governance • AI & Data Readiness • CX &
            UC Modernization • FinOps Acceleration
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you need a rapid assessment or a multi-year co-pilot, we embed alongside your executives, IT, and finance
            teams to deliver clarity, control, and velocity.
          </p>
        </div>
      </section>
    </main>
  );
}

