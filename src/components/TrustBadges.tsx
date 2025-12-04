import { Shield, Award, Compass, Globe } from 'lucide-react';

const badges = [
  {
    icon: Shield,
    title: 'Security & Resiliency',
    description: 'Zero-trust, governance, and continuity programs without owning infrastructure',
  },
  {
    icon: Award,
    title: 'Engineering-First Advisory',
    description: 'Deep technical bench with decades of enterprise IT and TSD expertise',
  },
  {
    icon: Compass,
    title: 'Vendor-Agnostic Guidance',
    description: 'Strategy, architecture, sourcing, and oversight across 300+ ecosystem partners',
  },
  {
    icon: Globe,
    title: 'National TSD Partnerships',
    description: 'Embedded within top Technology Services Distributors for unparalleled reach',
  },
];

export default function TrustBadges() {
  return (
    <div>
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-[#0A2E50] mb-2">
            Trusted by Enterprises Worldwide
          </h3>
          <p className="text-gray-600">
            Certified, awarded, and committed to excellence
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 md:p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300"
              >
                <div className="bg-gradient-to-br from-[#00C4B4] to-[#0A2E50] text-white p-4 rounded-full mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-[#0A2E50] mb-2 text-base">{badge.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{badge.description}</p>
              </div>
            );
          })}
        </div>
    </div>
  );
}

