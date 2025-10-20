import Link from 'next/link';

export default function CareersPage() {
  return (
    <main className="pt-20">
      <section className="bg-gradient-to-br from-[#0A2E50] to-[#00C4B4] text-white py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Build Your Career at Knetix
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
            Join a team of innovative technology professionals shaping the future of enterprise IT. 
            We&apos;re always seeking talented individuals who are passionate about technology and client success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="inline-block bg-[#FF8C00] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#e67e00] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Express Interest
            </Link>
            <Link
              href="/about"
              className="inline-block bg-white text-[#0A2E50] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Learn About Our Culture
            </Link>
          </div>
          <p className="text-base text-white/70">
            Career opportunities coming soon. Contact us to learn about future openings.
          </p>
        </div>
      </section>

      {/* Why Work at Knetix */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2E50] mb-4">
              Why Work With Us
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              We offer more than just a job—we provide a place where talented professionals 
              can grow, innovate, and make a real impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-gradient-to-br from-[#00C4B4] to-[#0A2E50] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0A2E50] mb-3">Innovation First</h3>
              <p className="text-gray-700 leading-relaxed">
                Work with cutting-edge technologies and contribute to enterprise solutions 
                that make a difference.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-gradient-to-br from-[#00C4B4] to-[#0A2E50] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0A2E50] mb-3">Growth & Development</h3>
              <p className="text-gray-700 leading-relaxed">
                Continuous learning opportunities, certifications, and career advancement 
                in a supportive environment.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-gradient-to-br from-[#00C4B4] to-[#0A2E50] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0A2E50] mb-3">Work-Life Balance</h3>
              <p className="text-gray-700 leading-relaxed">
                Flexible work arrangements, competitive benefits, and a culture that 
                values your well-being.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

