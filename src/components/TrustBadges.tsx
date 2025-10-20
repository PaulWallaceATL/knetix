import { Shield, Award, Clock, Users } from 'lucide-react';

const badges = [
  {
    icon: Shield,
    title: 'ISO 27001 Certified',
    description: 'Information Security Management',
  },
  {
    icon: Award,
    title: 'Industry Awards',
    description: 'Recognized Excellence 2024',
  },
  {
    icon: Clock,
    title: '99.9% Uptime',
    description: 'Guaranteed SLA',
  },
  {
    icon: Users,
    title: '24/7 Support',
    description: 'Expert Team Available',
  },
];

export default function TrustBadges() {
  return (
    <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-gradient-to-br from-[#00C4B4] to-[#0A2E50] text-white p-4 rounded-full mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-[#0A2E50] mb-1">{badge.title}</h4>
                <p className="text-sm text-gray-600">{badge.description}</p>
              </div>
            );
          })}
        </div>
    </div>
  );
}

