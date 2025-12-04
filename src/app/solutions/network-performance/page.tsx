import Link from 'next/link';
import SolutionHero from '@/components/SolutionHero';
import SolutionFeatures from '@/components/SolutionFeatures';
import SolutionBenefits from '@/components/SolutionBenefits';
import { Network, Zap, Shield, TrendingUp, Server, Globe } from 'lucide-react';

export default function NetworkPerformancePage() {
  const stats = [
    { value: 'Global', label: 'Carrier & Edge Reach' },
    { value: 'Zero Trust', label: 'Architectures' },
    { value: 'FinOps', label: 'Controls' },
    { value: 'Continuity', label: 'Playbooks' },
  ];

  const features = [
    {
      title: 'SD-WAN & SASE Strategy',
      description: 'Design future-state architectures, evaluate providers, and govern deployment without operating the networks ourselves.',
      icon: <Network className="w-8 h-8" />,
    },
    {
      title: 'Application & Edge Acceleration',
      description: 'Blueprints for CDN, application delivery, and edge services tailored to business-critical workloads.',
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: 'Integrated Security',
      description: 'Zero-trust and threat-informed controls woven directly into transport, identity, and segmentation plans.',
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: 'Observability & Analytics',
      description: 'Data models, KPI frameworks, and tooling recommendations that keep visibility front and center.',
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      title: 'Load Balancing & Traffic Engineering',
      description: 'Reference architectures and partner overlays for intelligent routing, balancing, and failure domains.',
      icon: <Server className="w-8 h-8" />,
    },
    {
      title: 'Carrier & Ecosystem Alignment',
      description: 'Sourcing strategy and governance spanning carriers, cloud interconnects, and specialized providers.',
      icon: <Globe className="w-8 h-8" />,
    },
  ];

  const benefits = [
    'Vendor-neutral architecture that harmonizes cloud, data center, branch, and edge requirements.',
    'Embedded security, compliance, and continuity playbooks that satisfy risk stakeholders.',
    'FinOps alignment to rationalize spend on transport, carrier services, and managed offers.',
    'Implementation governance ensuring carriers, OEMs, and MSPs deliver to design.',
    'Observability frameworks that surface KPIs your executives and operators actually use.',
    'No owned network assets—only advisory leadership focused on your outcomes.',
  ];

  return (
    <main className="pt-20">
      <SolutionHero
        title="Network Performance Optimization"
        subtitle="Infrastructure Solutions"
        description="Engineer zero-trust, software-defined, and resilient connectivity strategies across cloud, branch, and edge—then oversee the right ecosystem partners through delivery."
        stats={stats}
      />

      <SolutionFeatures features={features} />

      <SolutionBenefits benefits={benefits} />

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-r from-[#0A2E50] to-[#00C4B4] text-white">
        <div className="container-clean text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Optimize Your Network?
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-light">
            Let our experts design a network performance solution tailored to your business needs.
          </p>
          <Link href="/contact">
            <button className="px-12 py-5 rounded-xl bg-white text-[#0A2E50] font-bold text-lg hover:bg-white/90 hover:shadow-2xl transition-all">
              Schedule Consultation
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

