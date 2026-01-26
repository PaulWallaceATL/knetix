const benefits = [
  {
    title: 'Vendor-Agnostic Strategy',
    description: 'We eliminate vendor bias by sitting on your side of the table, vetting the global market to ensure your architecture meets boardroom requirements with precision.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Deep Engineering Judgment',
    description: 'We translate boardroom vision into high-performance reality. Our advisors bring decades of enterprise experience to engineer Cloud, Security, and AI architectures that actually work—built for precision, not just promise.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'FinOps & Outcome Assurance',
    description: 'We embed FinOps controls and investment guardrails into your architecture to protect ROI and ensure innovation remains fiscally disciplined.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Security, AI & Data Readiness',
    description: 'We orchestrate Zero Trust and AI governance programs to keep your enterprise compliant, resilient, and prepared for future disruption.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
];

const proofPoints = [
  {
    title: 'Proven Enterprise Programs',
    description: 'Trusted by Fortune and large commercial organizations to lead multi-year transformations.',
  },
  {
    title: 'Embedded in the TSD Ecosystem',
    description: 'Direct access to hundreds of cloud, security, data, CX, and connectivity providers through national distributors.',
  },
  {
    title: 'Stealth, Client-Side Advocacy',
    description: 'We stay invisible in the background while your brand leads—no headshots, no noise, just outcomes.',
  },
  {
    title: 'Modern Governance Playbooks',
    description: 'Security, FinOps, resiliency, and AI readiness frameworks tailored to your operating model.',
  },
];

export default function WhyKnetix() {
  return (
    <div>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2E50] mb-6">
            Why Leading Enterprises Choose <span className="text-[#00C4B4]">Knetix</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Experience the difference that true partnership makes. We deliver measurable results through 
            strategic technology solutions tailored to your unique business goals.
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

        {/* Proof Points */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {proofPoints.map((point, index) => (
            <div
              key={point.title}
              className="bg-[#0A2E50]/5 border border-[#0A2E50]/10 rounded-xl p-6"
            >
              <div className="text-sm font-semibold text-[#00C4B4] uppercase tracking-wide mb-2">
                {point.title}
              </div>
              <p className="text-gray-700 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
    </div>
  );
}

