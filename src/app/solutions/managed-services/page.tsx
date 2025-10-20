import Link from 'next/link';
import SolutionHero from '@/components/SolutionHero';
import SolutionFeatures from '@/components/SolutionFeatures';
import SolutionBenefits from '@/components/SolutionBenefits';
import { Server, Clock, Shield, Wrench, BarChart, Users } from 'lucide-react';

export default function ManagedServicesPage() {
  const stats = [
    { value: '24/7', label: 'Support' },
    { value: '< 15min', label: 'Response Time' },
    { value: '99.9%', label: 'Uptime' },
    { value: '50+', label: 'Experts' },
  ];

  const features = [
    {
      title: '24/7 Monitoring',
      description: 'Round-the-clock infrastructure monitoring with proactive alerting and immediate issue resolution.',
      icon: <Clock className="w-8 h-8" />,
    },
    {
      title: 'Proactive Maintenance',
      description: 'Prevent issues before they occur with automated patching, updates, and system optimization.',
      icon: <Wrench className="w-8 h-8" />,
    },
    {
      title: 'Security Management',
      description: 'Comprehensive security services including threat monitoring, vulnerability scanning, and incident response.',
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: 'Infrastructure Management',
      description: 'Complete management of servers, storage, networking, and cloud resources by certified experts.',
      icon: <Server className="w-8 h-8" />,
    },
    {
      title: 'Performance Reporting',
      description: 'Detailed analytics and reporting on system health, performance trends, and capacity planning.',
      icon: <BarChart className="w-8 h-8" />,
    },
    {
      title: 'Dedicated Support Team',
      description: 'Access to experienced engineers who know your environment and act as an extension of your team.',
      icon: <Users className="w-8 h-8" />,
    },
  ];

  const benefits = [
    'Free up internal IT resources to focus on strategic initiatives',
    'Reduce IT costs by up to 40% with predictable monthly pricing',
    'Access enterprise-level expertise without full-time hiring',
    'Ensure 24/7 coverage without night shifts or on-call rotations',
    'Improve system reliability with proactive monitoring',
    'Stay compliant with industry regulations and best practices',
  ];

  return (
    <main className="pt-20">
      <SolutionHero
        title="Managed IT Services"
        subtitle="Managed Services"
        description="Gain comprehensive support, proactive monitoring, and expert guidance for optimal IT performance and reliability."
        stats={stats}
      />

      <SolutionFeatures features={features} />

      <SolutionBenefits benefits={benefits} />

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-r from-[#0A2E50] to-[#00C4B4] text-white">
        <div className="container-clean text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Focus on Your Business, Not IT
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-light">
            Let our experts handle your IT infrastructure while you drive business growth.
          </p>
          <Link href="/contact">
            <button className="px-12 py-5 rounded-xl bg-white text-[#0A2E50] font-bold text-lg hover:bg-white/90 hover:shadow-2xl transition-all">
              Get Started Today
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
