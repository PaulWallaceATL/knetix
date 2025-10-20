import Link from 'next/link';
import SolutionHero from '@/components/SolutionHero';
import SolutionFeatures from '@/components/SolutionFeatures';
import SolutionBenefits from '@/components/SolutionBenefits';
import { Phone, Video, MessageSquare, Users, Calendar, FileText } from 'lucide-react';

export default function UnifiedCommunicationsPage() {
  const stats = [
    { value: '40%', label: 'Productivity Gain' },
    { value: '60%', label: 'Cost Savings' },
    { value: '99.9%', label: 'Call Quality' },
    { value: 'Global', label: 'Coverage' },
  ];

  const features = [
    {
      title: 'Enterprise VoIP',
      description: 'Crystal-clear voice communications with advanced call routing, auto-attendant, and call analytics.',
      icon: <Phone className="w-8 h-8" />,
    },
    {
      title: 'Video Conferencing',
      description: 'HD video meetings with screen sharing, recording, and seamless integration with your workflow tools.',
      icon: <Video className="w-8 h-8" />,
    },
    {
      title: 'Team Messaging',
      description: 'Secure instant messaging and collaboration spaces for teams, projects, and departments.',
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
    'Increase team productivity by 40% with seamless collaboration tools',
    'Reduce communication costs by up to 60% compared to traditional systems',
    'Enable remote work with enterprise-grade reliability',
    'Integrate with existing business applications (CRM, ERP, etc.)',
    'Scale effortlessly as your organization grows',
    'Maintain business continuity with 99.9% uptime SLA',
  ];

  return (
    <main className="pt-20">
      <SolutionHero
        title="Unified Communications"
        subtitle="Collaboration Platform"
        description="Foster effortless collaboration and effective communication across all channels, empowering your workforce to connect from anywhere."
        stats={stats}
      />

      <SolutionFeatures features={features} />

      <SolutionBenefits benefits={benefits} />

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-r from-[#0A2E50] to-[#00C4B4] text-white">
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
