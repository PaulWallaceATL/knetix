import Link from 'next/link';

export default function NetworkPerformancePage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[#0A2E50] to-[#00C4B4] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Network Performance</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Boost application delivery, maximize uptime, and optimize WAN costs for seamless connectivity and peak operational efficiency.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#0A2E50] mb-6">Overview</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                In today&apos;s digital-first world, network performance is critical to business success. 
                Our comprehensive network solutions ensure your applications deliver optimal performance, 
                your infrastructure maintains maximum uptime, and your WAN costs are optimized.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We leverage cutting-edge technologies and industry best practices to design, implement, 
                and manage high-performance networks that scale with your business needs.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0A2E50] mb-6">Key Features</h3>
              <ul className="space-y-4">
                {['Application Delivery Optimization', 'WAN Cost Reduction', 'Uptime Maximization', 'Performance Monitoring', 'Load Balancing', 'Traffic Optimization'].map((feature) => (
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
            <h3 className="text-2xl font-bold text-[#0A2E50] mb-6">Ready to optimize your network?</h3>
            <Link
              href="/contact"
              className="inline-block bg-[#FF8C00] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#e67e00] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Our Experts
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

