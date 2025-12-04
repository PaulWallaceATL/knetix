import { TrendingUp, Shield, Cloud, Users } from 'lucide-react';
import Link from 'next/link';

const caseStudies = [
  {
    icon: TrendingUp,
    title: 'Financial Services Transformation',
    company: 'Global Finance Solutions',
    challenge: 'Legacy systems hindering growth and compliance',
    solution: 'Cloud migration with enhanced security',
    results: [
      'Multi-cloud architecture unified and governed',
      'FinOps guardrails established across business units',
      'Regulatory compliance roadmap executed with partners',
    ],
    industry: 'Financial Services',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Shield,
    title: 'Healthcare Security Overhaul',
    company: 'Healthcare Innovations Inc.',
    challenge: 'Meeting HIPAA requirements and protecting patient data',
    solution: 'Comprehensive cybersecurity implementation',
    results: [
      'Zero critical findings across security audits',
      'HIPAA compliance maintained',
      'Coordinated MDR/SOC program with trusted partners',
    ],
    industry: 'Healthcare',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Cloud,
    title: 'Manufacturing Cloud Excellence',
    company: 'Manufacturing Excellence Corp',
    challenge: 'Scaling operations across multiple facilities',
    solution: 'Hybrid cloud infrastructure with unified communications',
    results: [
      '200% improvement in operational efficiency',
      'Real-time collaboration across 12 facilities',
      '40% reduction in IT costs',
    ],
    industry: 'Manufacturing',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Users,
    title: 'Enterprise Contact Center Excellence',
    company: 'TechCorp Industries',
    challenge: 'Poor customer satisfaction and high operational costs',
    solution: 'CCaaS platform with AI-powered routing',
    results: [
      '45% increase in customer satisfaction',
      '30% reduction in average handle time',
      '$2M annual cost savings',
    ],
    industry: 'Technology',
    gradient: 'from-purple-500 to-pink-500',
  },
];

export default function CaseStudies() {
  return (
    <section className="py-20 bg-[#F0F2F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-[#00C4B4] uppercase tracking-wide mb-2">
            Success Stories
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2E50] mb-4">
            Transforming Businesses Across Industries
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            See how we&apos;ve helped companies like yours achieve remarkable results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className={`bg-gradient-to-r ${study.gradient} p-6`}>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-white">
                      <div className="text-sm font-semibold opacity-90">{study.industry}</div>
                      <h3 className="text-xl font-bold">{study.title}</h3>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-[#00C4B4] mb-1">CLIENT</div>
                    <div className="font-bold text-[#0A2E50]">{study.company}</div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-semibold text-[#00C4B4] mb-1">CHALLENGE</div>
                    <p className="text-gray-700">{study.challenge}</p>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm font-semibold text-[#00C4B4] mb-1">SOLUTION</div>
                    <p className="text-gray-700">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm font-semibold text-[#00C4B4] mb-3">KEY RESULTS</div>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center text-[#FF8C00] font-semibold hover:translate-x-2 transition-transform"
                  >
                    Learn How We Can Help You
                    <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-[#FF8C00] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#e67e00] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Become Our Next Success Story
          </Link>
        </div>
      </div>
    </section>
  );
}

