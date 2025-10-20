import Link from 'next/link';
import SolutionHero from '@/components/SolutionHero';
import SolutionFeatures from '@/components/SolutionFeatures';
import SolutionBenefits from '@/components/SolutionBenefits';
import { Network, Zap, Shield, TrendingUp, Server, Globe } from 'lucide-react';

export default function NetworkPerformancePage() {
  const stats = [
    { value: '50%', label: 'Faster Performance' },
    { value: '99.99%', label: 'Uptime SLA' },
    { value: '40%', label: 'Cost Reduction' },
    { value: '24/7', label: 'Monitoring' },
  ];

  const features = [
    {
      title: 'SD-WAN Solutions',
      description: 'Optimize your wide area network with intelligent routing and bandwidth management for superior application performance.',
      icon: <Network className="w-8 h-8" />,
    },
    {
      title: 'Application Acceleration',
      description: 'Deliver lightning-fast user experiences with advanced caching, compression, and protocol optimization.',
      icon: <Zap className="w-8 h-8" />,
    },
    {
      title: 'Network Security',
      description: 'Protect your network infrastructure with integrated security, DDoS protection, and threat intelligence.',
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: 'Performance Analytics',
      description: 'Gain real-time visibility into network performance with comprehensive monitoring and reporting tools.',
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      title: 'Load Balancing',
      description: 'Distribute traffic intelligently across resources to ensure optimal performance and eliminate bottlenecks.',
      icon: <Server className="w-8 h-8" />,
    },
    {
      title: 'Global CDN',
      description: 'Accelerate content delivery worldwide with our enterprise-grade content distribution network.',
      icon: <Globe className="w-8 h-8" />,
    },
  ];

  const benefits = [
    'Reduce latency and improve application response times by up to 50%',
    'Maximize network uptime with 99.99% SLA guarantee',
    'Lower WAN costs through intelligent bandwidth optimization',
    'Gain complete visibility with real-time network analytics',
    'Scale effortlessly to support business growth',
    'Enterprise-grade security integrated at every layer',
  ];

  return (
    <main className="pt-20">
      <SolutionHero
        title="Network Performance Optimization"
        subtitle="Infrastructure Solutions"
        description="Boost application delivery, maximize uptime, and optimize WAN costs for seamless connectivity and peak operational efficiency."
        stats={stats}
      />

      <SolutionFeatures features={features} />

      <SolutionBenefits benefits={benefits} />

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-r from-[#0A2E50] to-[#00C4B4] text-white">
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

