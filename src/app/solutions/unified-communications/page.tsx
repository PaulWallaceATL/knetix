import Link from 'next/link';

export default function UnifiedCommunicationsPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[#0A2E50] to-[#00C4B4] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Unified Communications</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Foster effortless collaboration and effective communication across all channels, empowering your workforce to connect from anywhere.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#0A2E50] mb-6">Overview</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Transform how your teams collaborate with our unified communications solutions. 
                We integrate voice, video, messaging, and collaboration tools into a seamless 
                platform that works across devices and locations.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Enable your workforce to communicate and collaborate effectively, whether they&apos;re 
                in the office, at home, or on the go.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0A2E50] mb-6">Key Features</h3>
              <ul className="space-y-4">
                {['Video Conferencing', 'Team Collaboration Tools', 'Voice Solutions', 'Mobile Integration', 'Instant Messaging', 'File Sharing & Co-authoring'].map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg className="w-6 h-6 text-[#00C4B4] mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-[#0A2E50] mb-6">Enhance your team collaboration</h3>
            <Link
              href="/contact"
              className="inline-block bg-[#FF8C00] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#e67e00] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

