import Link from 'next/link';

export default function InsightsPage() {
  return (
    <main className="pt-20">
      <section className="bg-gradient-to-br from-[#0A2E50] to-[#00C4B4] text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <p className="uppercase tracking-[0.3em] text-white/60 text-sm">Knetix Briefings</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Intelligence for Technology Advisors, CIOs, CISOs, CDOs, and COOs
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Cloud economics, zero-trust security, AI readiness, CX modernization, resiliency, and FinOps—decoded by
            engineering-first advisors who operate inside the national TSD ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#0A2E50] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Request a Private Briefing
            </Link>
            <Link
              href="/solutions"
              className="inline-block border border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Advisory Plays
            </Link>
          </div>
          <p className="text-base text-white/70">
            Articles, frameworks, and playbooks are being released incrementally. Subscribe to get early access.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-10">
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-wide text-[#00C4B4] font-semibold">What&apos;s Coming</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2E50]">Briefings, frameworks, and signal reports.</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Designed for executives who need vendor-neutral clarity on multi-cloud, security, data, AI, CX, resiliency, and
              cost optimization mandates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Cloud & FinOps Signals',
                copy:
                  'Benchmark data, funding strategies, and modernization guardrails straight from enterprise programs.',
              },
              {
                title: 'Security, AI & Resiliency Playbooks',
                copy:
                  'Zero-trust patterns, AI governance, and continuity frameworks that pass board scrutiny without hyperbole.',
              },
              {
                title: 'CX, UC & Data Modernization',
                copy:
                  'Blueprints for CCaaS, UCaaS, analytics, and automation initiatives that span multiple providers and business units.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-6 text-left space-y-3 hover:border-[#00C4B4] transition-all"
              >
                <h3 className="text-xl font-semibold text-[#0A2E50]">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

