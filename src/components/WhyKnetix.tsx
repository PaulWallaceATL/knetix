import AnimatedCounter from './AnimatedCounter';

const benefits = [
  {
    title: 'Strategic Growth & Scalability',
    description: 'Unlock unparalleled agility, enabling your business to adapt and expand effortlessly in dynamic markets. Knetix empowers you to seize every growth opportunity.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Unrivaled Competitive Edge',
    description: 'Outshine the competition with our deep expertise in technology-driven strategies. We leverage the latest advancements to ensure your business stands out and dominates your industry.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Optimized Operational Efficiency',
    description: 'Experience seamless, faster, and more effective business operations. Our innovative solutions eliminate bottlenecks and streamline workflows for peak productivity.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Future-Proof Foundation',
    description: 'Build an adaptable framework that evolves with your business, navigating industry disruptions and technological shifts with ease. Knetix prepares you to thrive in an ever-changing digital world.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
];

export default function WhyKnetix() {
  return (
    <div>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2E50] mb-6">
            Why Partner with <span className="text-[#00C4B4]">Knetix</span>?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover the transformative benefits that set Knetix apart as your trusted technology partner.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex gap-6 bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-[#00C4B4]"
            >
              <div className="flex-shrink-0">
                <div className="bg-gradient-to-br from-[#00C4B4] to-[#0A2E50] text-white p-4 rounded-lg">
                  {benefit.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0A2E50] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats with Animated Counters */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-[#00C4B4] mb-2">
              <AnimatedCounter end={99.9} decimals={1} suffix="%" />
            </div>
            <div className="text-gray-700 font-semibold">Uptime Guarantee</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#00C4B4] mb-2">24/7</div>
            <div className="text-gray-700 font-semibold">Expert Support</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#00C4B4] mb-2">
              <AnimatedCounter end={500} suffix="+" />
            </div>
            <div className="text-gray-700 font-semibold">Clients Served</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#00C4B4] mb-2">
              <AnimatedCounter end={15} suffix="+" />
            </div>
            <div className="text-gray-700 font-semibold">Years Experience</div>
          </div>
        </div>
    </div>
  );
}

