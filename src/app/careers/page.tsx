import Link from 'next/link';

export default function CareersPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[#0A2E50] to-[#00C4B4] text-white py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            We&apos;re always looking for talented individuals to join our innovative team. Check back soon for career opportunities.
          </p>
          <Link
            href="/about"
            className="inline-block bg-[#FF8C00] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#e67e00] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Learn About Us
          </Link>
        </div>
      </section>
    </main>
  );
}

