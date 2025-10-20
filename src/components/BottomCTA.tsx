import Link from 'next/link';

export default function BottomCTA() {
  return (
    <section className="relative bg-gradient-to-r from-[#0A2E50] to-[#00C4B4] text-white py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          Partner with Knetix and unlock limitless possibilities for innovation and growth.
        </p>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="inline-block bg-[#FF8C00] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#e67e00] transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
        >
          Contact Us Today
        </Link>

        {/* Additional Info */}
        <p className="mt-8 text-sm text-gray-300">
          Schedule a free consultation and discover how we can drive your success.
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF8C00] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"></div>
    </section>
  );
}

