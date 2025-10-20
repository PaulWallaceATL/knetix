import Link from 'next/link';

export default function InsightsPage() {
  return (
    <main className="pt-20">
      <section className="bg-gradient-to-br from-[#0A2E50] to-[#00C4B4] text-white py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Technology Insights & Industry Expertise
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
            Explore enterprise technology trends, best practices, and case studies from our team of 
            IT experts. Learn how leading organizations are transforming their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="inline-block bg-[#FF8C00] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#e67e00] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Request a Consultation
            </Link>
            <Link
              href="/solutions"
              className="inline-block bg-white text-[#0A2E50] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Solutions
            </Link>
          </div>
          <p className="text-base text-white/70">
            In-depth articles and resources coming soon. Subscribe to stay updated.
          </p>
        </div>
      </section>

      {/* Teaser Content */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2E50] mb-4">
              What to Expect
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Our insights library will feature expert guidance on enterprise technology 
              challenges and opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-[#0A2E50] mb-3">Industry Trends</h3>
              <p className="text-gray-700 leading-relaxed">
                Stay ahead with analysis of emerging technologies, market shifts, and 
                digital transformation strategies.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-[#0A2E50] mb-3">Case Studies</h3>
              <p className="text-gray-700 leading-relaxed">
                Real-world success stories showing how enterprises achieved measurable 
                results with Knetix solutions.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-[#0A2E50] mb-3">Best Practices</h3>
              <p className="text-gray-700 leading-relaxed">
                Actionable guidance from our experts on security, cloud migration, 
                infrastructure optimization, and more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

