import Link from 'next/link';
import SolutionHero from '@/components/SolutionHero';
import SolutionFeatures from '@/components/SolutionFeatures';
import SolutionBenefits from '@/components/SolutionBenefits';
import { Phone, Video, MessageSquare, Users, Calendar, FileText } from 'lucide-react';

export default function UnifiedCommunicationsPage() {
  const stats = [
    { value: 'UCaaS', label: 'Blueprints' },
    { value: 'Workflow', label: 'Integration' },
    { value: 'Security', label: 'Controls' },
    { value: 'Adoption', label: 'Playbooks' },
  ];

  const features = [
    {
      title: 'Enterprise Voice & UCaaS',
      description: 'Vendor-neutral evaluation of UCaaS platforms, PSTN strategies, numbering, and compliance considerations.',
      icon: <Phone className="w-8 h-8" />,
    },
    {
      title: 'Video & Collaboration',
      description: 'Experience design, governance, and workflow integration across meetings, rooms, and shared spaces.',
      icon: <Video className="w-8 h-8" />,
    },
    {
      title: 'Messaging & Workflow Automation',
      description: 'Secure messaging and automation patterns that tie collaboration into business applications.',
      icon: <MessageSquare className="w-8 h-8" />,
    },
    {
      title: 'Presence Management',
      description: 'See real-time availability status across your organization to connect with the right people instantly.',
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: 'Meeting Scheduling',
      description: 'Intelligent calendar integration and meeting room management for effortless coordination.',
      icon: <Calendar className="w-8 h-8" />,
    },
    {
      title: 'File Sharing',
      description: 'Secure document collaboration with version control and enterprise-grade encryption.',
      icon: <FileText className="w-8 h-8" />,
    },
  ];

  const benefits = [
    'Strategic blueprint that balances user experience, compliance, and cost.',
    'Curated provider mix for UCaaS, CPaaS, meeting, and workflow platforms via the TSD ecosystem.',
    'Integration and automation guidance so collaboration lives inside the tools teams already use.',
    'Security, governance, and lifecycle planning embedded into every decision.',
    'Adoption playbooks, training, and KPI dashboards that connect collaboration to productivity outcomes.',
    'Knetix stays vendor-neutral, ensuring every platform choice serves the business first.',
  ];

  return (
    <main className="pt-20">
      <SolutionHero
        title="Unified Communications"
        subtitle="Collaboration Platform"
        description="Reinvent workforce collaboration through vendor-agnostic UCaaS, video, messaging, and workflow strategies engineered by Technology Advisors—not infrastructure owners."
        stats={stats}
      />

      <SolutionFeatures features={features} />

      <SolutionBenefits benefits={benefits} />

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-r from-[#0A2E50] to-[#00C4B4] text-white">
        <div className="container-clean text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Transform Team Collaboration
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-light">
            Schedule a demo to see how unified communications can revolutionize your workplace.
          </p>
          <Link href="/contact">
            <button className="px-12 py-5 rounded-xl bg-white text-[#0A2E50] font-bold text-lg hover:bg-white/90 hover:shadow-2xl transition-all">
              Schedule Demo
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
