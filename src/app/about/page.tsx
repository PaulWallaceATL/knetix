import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#000D33] via-[#0A2E50] to-[#000D33] text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <p className="uppercase tracking-[0.3em] text-white/60 text-sm">Leadership & Expertise</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Technology Advisors for Complex Change
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Knetix is led by senior technology executives with deep expertise in enterprise technology transformations. Our approach combines operational excellence with decades of enterprise IT experience.
          </p>
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
                title: 'Enterprise-Scale Rigor',
                description: "Leveraging proven operational excellence and Well-Architected frameworks to ensure enterprise-grade outcomes.",
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
            Whether you need contact center expertise or comprehensive technology advisory, Knetix brings enterprise-scale rigor to every engagement.
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
