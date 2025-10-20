import { Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: 'Robert Mitchell',
    role: 'Chief Executive Officer',
    bio: '20+ years in enterprise technology leadership. Former CTO at Fortune 500 companies.',
    expertise: ['Strategic Planning', 'Digital Transformation', 'Executive Leadership'],
    initials: 'RM',
  },
  {
    name: 'Jennifer Park',
    role: 'Chief Technology Officer',
    bio: 'Pioneering cloud architecture and cybersecurity expert with multiple industry certifications.',
    expertise: ['Cloud Architecture', 'Cybersecurity', 'Infrastructure'],
    initials: 'JP',
  },
  {
    name: 'Marcus Williams',
    role: 'VP of Solutions Engineering',
    bio: 'Innovative problem-solver specializing in complex enterprise integrations and migrations.',
    expertise: ['System Integration', 'Enterprise Solutions', 'Technical Strategy'],
    initials: 'MW',
  },
  {
    name: 'Sarah Chen',
    role: 'Director of Client Success',
    bio: 'Passionate about building lasting client relationships and delivering exceptional service.',
    expertise: ['Client Relations', 'Service Excellence', 'Account Management'],
    initials: 'SC',
  },
  {
    name: 'David Rodriguez',
    role: 'Head of Cybersecurity',
    bio: 'Certified ethical hacker and security architect protecting organizations from evolving threats.',
    expertise: ['Security Architecture', 'Threat Intelligence', 'Compliance'],
    initials: 'DR',
  },
  {
    name: 'Emily Thompson',
    role: 'Cloud Solutions Architect',
    bio: 'Multi-cloud expert helping organizations optimize their cloud investments and strategies.',
    expertise: ['Cloud Migration', 'Cost Optimization', 'DevOps'],
    initials: 'ET',
  },
];

export default function TeamGrid() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2E50] mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Industry veterans dedicated to your success
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#F0F2F5] to-white rounded-xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#00C4B4] group"
            >
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#00C4B4] to-[#0A2E50] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                  {member.initials}
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#FF8C00] text-white text-xs px-3 py-1 rounded-full font-semibold">
                  Leadership
                </div>
              </div>

              {/* Info */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-[#0A2E50] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#00C4B4] font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>
              </div>

              {/* Expertise Tags */}
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {member.expertise.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-white border border-[#00C4B4] text-[#0A2E50] text-xs px-3 py-1 rounded-full font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="p-2 bg-white rounded-full hover:bg-[#00C4B4] text-[#0A2E50] hover:text-white transition-colors shadow-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white rounded-full hover:bg-[#00C4B4] text-[#0A2E50] hover:text-white transition-colors shadow-sm"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

