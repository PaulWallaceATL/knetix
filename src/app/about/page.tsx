import Link from 'next/link';

const pillars = [
  {
    title: 'Stealth, Client-Side Advocacy',
    description:
      'We operate quietly behind the scenes as your Technology Advisors—no marketing splash, no leadership spotlights, just elite engineering judgment focused on your business outcomes.',
  },
  {
    title: 'Embedded in the TSD Ecosystem',
    description:
      'Our relationships with national Technology Services Distributors open access to hundreds of vetted providers across cloud, security, network, CX, and emerging tech.',
  },
  {
    title: 'Engineering-Led Methodology',
    description:
      'Every program is led by senior architects who have spent decades solving enterprise IT, security, data, and AI problems. Strategy, architecture, sourcing, and oversight stay in tight alignment.',
  },
  {
    title: 'Outcome & FinOps Discipline',
    description:
      'We design financial guardrails, adoption metrics, and governance cadences that keep innovation accountable—from multi-cloud programs to AI readiness and resiliency.',
  },
];

const operatingTenets = [
  {
    title: 'Vendor-Agnostic Architecture',
    content:
      'We sit on the client side of the table, evaluating the strongest options until the right blend of capability, economics, and risk tolerance is proven.',
  },
  {
    title: 'Cloud, Security, Data & AI',
    content:
      'Programs span hybrid and multi-cloud, zero-trust security, data modernization, AI/ML readiness, CX/UC transformation, and enterprise automation.',
  },
  {
    title: 'Implementation Oversight',
    content:
      'Providers operate the technology; we ensure architecture fidelity, program management rigor, and measurable outcome tracking.',
  },
  {
    title: 'Resiliency & Governance',
    content:
      'Continuity planning, policy, compliance, FinOps, and KPI frameworks are baked into every engagement so transformations stick.',
  },
];

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#000D33] via-[#0A2E50] to-[#000D33] text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <p className="uppercase tracking-[0.3em] text-white/60 text-sm">Operating in Stealth Mode</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Technology Advisors (TAs) for Cloud, Security, Data, AI, and CX Programs
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Knetix is a technology advisory and solutions agency embedded within the national Technology Services
            Distributor ecosystem. We do not own infrastructure—we design the strategy, architect the approach, curate the
            providers, and govern delivery so enterprises can move with confidence.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-10">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#00C4B4]">Who We Are</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2E50]">
              An engineering-first advisory collective trusted by Fortune and large commercial enterprises.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our principals have led multi-billion-dollar technology portfolios, zero-trust programs, global network
              transformations, CX modernizations, and large-scale data/AI initiatives. Today we channel that experience into
              an asset-light model—staying invisible, fiercely independent, and accountable only to client outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-gray-200 p-6 hover:border-[#00C4B4] hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-semibold text-[#0A2E50] mb-3">{pillar.title}</h3>
                <p className="text-gray-700 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 md:py-20 lg:py-24 bg-[#F3F5F9]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#00C4B4]">Operating Model</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2E50]">Strategy → Architecture → Providers → Results</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We translate board-level mandates into executable blueprints, orchestrate the ideal partner mix through TSD
              relationships, and remain on point for governance throughout the lifecycle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {operatingTenets.map((tenet) => (
              <div key={tenet.title} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 space-y-3">
                <h3 className="text-lg font-semibold text-[#0A2E50]">{tenet.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{tenet.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Plays */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#00C4B4]">Core Focus Areas</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2E50]">
            Multi-Cloud & FinOps • Cybersecurity & Zero Trust • Data & AI • CX & Unified Communications • Resiliency &
            Continuity
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Every engagement blends strategic advisory with deep engineering validation, ensuring that architecture,
            security, compliance, operational readiness, and financial performance stay synchronized.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#0A2E50] to-[#00C4B4] text-white py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to engage a Technology Advisor?</h2>
          <p className="text-lg text-white/80 leading-relaxed">
            Share your mandate—cloud rationalization, AI acceleration, security hardening, CX modernization, or a full
            resiliency program—and we will build the roadmap, curate the partners, and govern delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#0A2E50] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book a Strategy Session
            </Link>
            <Link
              href="/solutions"
              className="inline-block border border-white/60 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Advisory Plays
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

