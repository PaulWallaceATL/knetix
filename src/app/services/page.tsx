import Link from 'next/link';

export default function ServicesPage() {
  return (
    <main className="pt-20">
      <section className="bg-gradient-to-br from-[#0A2E50] to-[#00C4B4] text-white py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Comprehensive IT Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
            From strategy and consulting to implementation and ongoing support, 
            Knetix provides end-to-end technology services designed for enterprise success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/solutions"
              className="inline-block bg-[#FF8C00] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#e67e00] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Solutions
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#0A2E50] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Discuss Your Needs
            </Link>
          </div>
          <p className="text-base text-white/70">
            Detailed service catalog coming soon. Contact us to discuss your specific requirements.
          </p>
        </div>
      </section>

      {/* Service Categories Preview */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2E50] mb-4">
              Our Service Approach
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              We partner with you at every stage of your technology journey, from planning 
              through implementation and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-[#00C4B4] mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0A2E50] mb-3">Consulting & Strategy</h3>
              <p className="text-gray-700 leading-relaxed">
                Technology roadmaps, architecture design, and strategic planning aligned with 
                your business objectives.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-[#00C4B4] mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0A2E50] mb-3">Implementation</h3>
              <p className="text-gray-700 leading-relaxed">
                Expert deployment of enterprise solutions with minimal disruption and maximum 
                efficiency.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-[#00C4B4] mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0A2E50] mb-3">Ongoing Support</h3>
              <p className="text-gray-700 leading-relaxed">
                24/7 monitoring, proactive maintenance, and continuous optimization to keep 
                your systems running at peak performance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

