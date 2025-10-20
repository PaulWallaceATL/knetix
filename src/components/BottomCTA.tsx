import Link from 'next/link';

export default function BottomCTA() {
  return (
    <section className="relative bg-gradient-to-r from-[#0A2E50] to-[#00C4B4] text-white py-24 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="relative max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          Ready to Transform Your Business?
        </h2>

        {/* Sub-headline */}
        <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Partner with Knetix and unlock limitless possibilities for innovation and growth.
        </p>

        {/* CTA Button */}
        <Link href="/contact">
          <button className="px-12 py-5 rounded-xl bg-white text-[#0A2E50] font-bold text-lg hover:bg-white/90 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:-translate-y-1">
            Contact Us Today
          </button>
        </Link>

        {/* Additional Info */}
        <p className="mt-10 text-base text-white/60">
          Schedule a free consultation and discover how we can drive your success.
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF8C00] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"></div>
    </section>
  );
}

