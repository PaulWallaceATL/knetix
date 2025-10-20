import Link from 'next/link';
import SolutionHero from '@/components/SolutionHero';
import SolutionFeatures from '@/components/SolutionFeatures';
import SolutionBenefits from '@/components/SolutionBenefits';
import { Phone, MessageCircle, BarChart3, Brain, Globe, Headphones } from 'lucide-react';

export default function ContactCenterPage() {
  const stats = [
    { value: '35%', label: 'Higher CSAT' },
    { value: '50%', label: 'Faster Resolution' },
    { value: '24/7', label: 'Availability' },
    { value: 'Omni-', label: 'Channel' },
  ];

  const features = [
    {
      title: 'Omnichannel Support',
      description: 'Unified customer experience across voice, email, chat, SMS, and social media on a single platform.',
      icon: <Phone className="w-8 h-8" />,
    },
    {
      title: 'AI-Powered Routing',
      description: 'Intelligent call routing based on skills, availability, and customer history for optimal outcomes.',
      icon: <Brain className="w-8 h-8" />,
    },
    {
      title: 'Real-Time Analytics',
      description: 'Monitor performance metrics, agent productivity, and customer satisfaction in real-time dashboards.',
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
    'Increase customer satisfaction scores by 35% with personalized service',
    'Reduce average handle time by 50% with intelligent routing',
    'Lower operational costs with cloud-based infrastructure',
    'Scale agents up or down based on demand',
    'Gain actionable insights from customer interaction data',
    'Ensure 24/7 availability with enterprise-grade reliability',
  ];

  return (
    <main className="pt-20">
      <SolutionHero
        title="Contact Center Solutions"
        subtitle="Customer Experience"
        description="Elevate customer engagement with personalized interactions, enhance satisfaction, and optimize operations through our Contact Center as a Service."
        stats={stats}
      />

      <SolutionFeatures features={features} />

      <SolutionBenefits benefits={benefits} />

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-r from-[#0A2E50] to-[#00C4B4] text-white">
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
