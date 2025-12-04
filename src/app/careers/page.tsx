import Link from 'next/link';

const principles = [
  {
    title: 'Stealth Mindset',
    content:
      'We operate quietly and deliberately. If you join us, you are comfortable doing high-impact work without public recognition.',
  },
  {
    title: 'Engineering Depth',
    content:
      'Cloud, security, network, data, AI, FinOps, CX—we look for senior technologists who can guide Fortune-grade programs end to end.',
  },
  {
    title: 'Client-First Neutrality',
    content:
      'No vendor quotas, no proprietary infrastructure. Every recommendation must serve the client, full stop.',
  },
];

export default function CareersPage() {
  return (
    <main className="pt-20">
      <section className="bg-gradient-to-br from-[#0A2E50] to-[#00C4B4] text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <p className="uppercase tracking-[0.3em] text-white/60 text-sm">Talent Inquiries</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Knetix is intentionally operating in stealth.</h1>
          <p className="text-xl text-white/80 leading-relaxed">
            We build elite Technology Advisor teams with decades of enterprise experience. Roles are highly selective, remain
            unlisted publicly, and are typically filled through direct referrals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#0A2E50] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Submit a Confidential Introduction
            </Link>
            <Link
              href="/about"
              className="inline-block border border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Learn About Knetix
            </Link>
          </div>
          <p className="text-base text-white/70">
            Tell us about your enterprise experience, areas of deep engineering expertise, and why advisory work excites you.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-10">
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-wide text-[#00C4B4] font-semibold">What We Look For</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2E50]">Technology Advisors with quiet confidence.</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our teams blend architecture mastery, financial savvy, program leadership, and the ability to earn trust at the
              executive table. If this sounds like you, reach out privately.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {principles.map((principle) => (
              <div key={principle.title} className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-6 space-y-3">
                <h3 className="text-xl font-semibold text-[#0A2E50]">{principle.title}</h3>
                <p className="text-gray-700 leading-relaxed text-sm">{principle.content}</p>
              </div>
            ))}
          </div>

          <div className="text-center text-gray-600 text-sm">
            We are not publishing job descriptions or headcounts. All opportunities are bespoke and confidential.
          </div>
        </div>
      </section>
    </main>
  );
}

