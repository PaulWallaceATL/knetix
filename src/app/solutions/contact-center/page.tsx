import Link from 'next/link';
import SolutionHero from '@/components/SolutionHero';
import SolutionFeatures from '@/components/SolutionFeatures';
import SolutionBenefits from '@/components/SolutionBenefits';
import { Phone, MessageCircle, BarChart3, Brain, Globe, Headphones } from 'lucide-react';

export default function ContactCenterPage() {
  const stats = [
    { value: 'CX/EX', label: 'Blueprints' },
    { value: 'AI', label: 'Enablement' },
    { value: 'Data', label: 'Visibility' },
    { value: 'Governance', label: 'Cadence' },
  ];

  const features = [
    {
      title: 'Omnichannel Support',
      description: 'Unified customer experience across voice, email, chat, SMS, and social media on a single platform.',
      icon: <Phone className="w-8 h-8" />,
    },
    {
      title: 'AI-Powered Routing & Automation',
      description:
        'Use cases, provider comparisons, and oversight for AI routing, self-service, and workforce engagement.',
      icon: <Brain className="w-8 h-8" />,
    },
    {
      title: 'Experience Analytics',
      description: 'Journey analytics, data integration, and KPI frameworks aligning CX and business stakeholders.',
      icon: <BarChart3 className="w-8 h-8" />,
    },
    {
      title: 'Live Chat & Chatbots',
      description: 'Engage customers instantly with AI chatbots and seamless handoff to live agents when needed.',
      icon: <MessageCircle className="w-8 h-8" />,
    },
    {
      title: 'Global Deployment',
      description: 'Support customers worldwide with multi-language capabilities and regional compliance.',
      icon: <Globe className="w-8 h-8" />,
    },
    {
      title: 'Quality Management',
      description: 'Ensure service excellence with call recording, monitoring, and agent coaching tools.',
      icon: <Headphones className="w-8 h-8" />,
    },
  ];

  const benefits = [
    'Holistic CX strategy spanning CCaaS, UC, AI, analytics, and integration layers.',
    'Vendor-neutral evaluation and sourcing of CCaaS, WEM, analytics, and AI partners via the TSD ecosystem.',
    'Implementation governance that keeps providers on track while your teams focus on customer outcomes.',
    'Data, analytics, and KPI frameworks that connect experience investments to revenue, cost, and loyalty goals.',
    'Security, compliance, and resiliency guidance embedded from day one.',
    'No owned contact centers—just advisory leadership eliminating complexity.',
  ];

  return (
    <main className="pt-20">
      <SolutionHero
        title="Contact Center Solutions"
        subtitle="Customer Experience"
        description="Reimagine customer and employee experiences with vendor-agnostic CCaaS, AI, and analytics strategies governed by seasoned Technology Advisors."
        stats={stats}
      />

      <SolutionFeatures features={features} />

      <SolutionBenefits benefits={benefits} />

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-r from-[#0A2E50] to-[#00C4B4] text-white">
        <div className="container-clean text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Elevate Customer Experience
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-light">
            See how our contact center solution can transform your customer service operations.
          </p>
          <Link href="/contact">
            <button className="px-12 py-5 rounded-xl bg-white text-[#0A2E50] font-bold text-lg hover:bg-white/90 hover:shadow-2xl transition-all">
              Book a Demo
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
