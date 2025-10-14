import Link from 'next/link';

export default function InsightsPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[#0A2E50] to-[#00C4B4] text-white py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Insights & Resources
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            This page is coming soon. Stay tuned for industry insights, case studies, and technology trends.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#FF8C00] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#e67e00] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}

