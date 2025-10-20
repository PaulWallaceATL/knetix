import Link from 'next/link';
import SolutionHero from '@/components/SolutionHero';
import SolutionFeatures from '@/components/SolutionFeatures';
import SolutionBenefits from '@/components/SolutionBenefits';
import { Cloud, Server, Database, Lock, Gauge, GitBranch } from 'lucide-react';

export default function CloudInfrastructurePage() {
  const stats = [
    { value: '70%', label: 'Cost Savings' },
    { value: '10x', label: 'Faster Deployment' },
    { value: '99.99%', label: 'Availability' },
    { value: 'Global', label: 'Scale' },
  ];

  const features = [
    {
      title: 'Cloud Migration',
      description: 'Seamlessly transition your applications and data to the cloud with zero downtime and minimal risk.',
      icon: <Cloud className="w-8 h-8" />,
    },
    {
      title: 'Infrastructure as Code',
      description: 'Automate provisioning and management with declarative infrastructure templates and version control.',
      icon: <Server className="w-8 h-8" />,
    },
    {
      title: 'Database Management',
      description: 'Optimize database performance with managed services, automated backups, and disaster recovery.',
      icon: <Database className="w-8 h-8" />,
    },
    {
      title: 'Cloud Security',
      description: 'Protect cloud assets with identity management, encryption, and continuous security monitoring.',
      icon: <Lock className="w-8 h-8" />,
    },
    {
      title: 'Performance Optimization',
      description: 'Maximize application speed and efficiency with auto-scaling, load balancing, and CDN integration.',
      icon: <Gauge className="w-8 h-8" />,
    },
    {
      title: 'Hybrid Cloud',
      description: 'Bridge on-premises and cloud environments for flexibility, compliance, and optimal performance.',
      icon: <GitBranch className="w-8 h-8" />,
    },
  ];

  const benefits = [
    'Reduce infrastructure costs by up to 70% with optimized cloud resources',
    'Deploy new services 10x faster with automated infrastructure',
    'Scale instantly to handle traffic spikes and business growth',
    'Ensure 99.99% availability with multi-region redundancy',
    'Simplify management with centralized cloud control',
    'Maintain compliance with industry regulations and standards',
  ];

  return (
    <main className="pt-20">
      <SolutionHero
        title="Cloud Infrastructure"
        subtitle="Cloud Solutions"
        description="Modernize your operations with secure, flexible, and scalable cloud solutions that drive innovation and business agility."
        stats={stats}
      />

      <SolutionFeatures features={features} />

      <SolutionBenefits benefits={benefits} />

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-r from-[#0A2E50] to-[#00C4B4] text-white">
        <div className="container-clean text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Migrate to the Cloud?
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Get a complimentary cloud readiness assessment and detailed migration roadmap from our 
            certified cloud architects. We&apos;ll analyze your infrastructure and recommend the optimal path forward.
          </p>
          <Link href="/contact">
            <button className="px-12 py-5 rounded-xl bg-white text-[#0A2E50] font-bold text-lg hover:bg-white/90 hover:shadow-2xl transition-all">
              Request Free Assessment
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
