import Link from 'next/link';
import SolutionHero from '@/components/SolutionHero';
import SolutionFeatures from '@/components/SolutionFeatures';
import SolutionBenefits from '@/components/SolutionBenefits';
import { Server, Clock, Shield, Wrench, BarChart, Users } from 'lucide-react';

export default function ManagedServicesPage() {
  const stats = [
    { value: 'Advisory', label: 'Governance' },
    { value: 'PMO', label: 'Discipline' },
    { value: 'KPI', label: 'Visibility' },
    { value: 'TSD', label: 'Provider Network' },
  ];

  const features = [
    {
      title: 'Program Governance',
      description: 'Portfolio-level steering, architecture assurance, and executive cadence to keep initiatives on track.',
      icon: <Clock className="w-8 h-8" />,
    },
    {
      title: 'Provider Oversight',
      description: 'Scorecards, playbooks, and accountability models for MSPs, cloud partners, telcos, and integrators.',
      icon: <Wrench className="w-8 h-8" />,
    },
    {
      title: 'Security & Compliance Alignment',
      description: 'Ensure delivery partners uphold zero-trust, regulatory, and audit requirements without Knetix running operations.',
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: 'Architecture Management',
      description: 'Guardrails and design authorities that prevent scope creep and keep implementations true to blueprint.',
      icon: <Server className="w-8 h-8" />,
    },
    {
      title: 'Performance Reporting',
      description: 'Dashboards covering KPI health, adoption, spend, and risk for executives and line leaders.',
      icon: <BarChart className="w-8 h-8" />,
    },
    {
      title: 'Change & Enablement',
      description: 'Communication, training, and operating-model support that drive adoption and value realization.',
      icon: <Users className="w-8 h-8" />,
    },
  ];

  const benefits = [
    'Single point of accountability for multi-provider programs without adding internal headcount.',
    'Architecture, security, compliance, and FinOps guardrails maintained throughout execution.',
    'Real-time KPI dashboards connecting technology performance to business outcomes.',
    'Change management and enablement that accelerate adoption and ROI.',
    'Rapid escalation paths and remediation coordination across the TSD ecosystem.',
    'Knetix stays asset-light and independent, ensuring every decision serves the client.',
  ];

  return (
    <main className="pt-20">
      <SolutionHero
        title="Managed Transformation Oversight"
        subtitle="Advisory Governance"
        description="We don’t run data centers or NOCs—we govern the ecosystem partners you already trust so complex programs remain on time, on budget, and on strategy."
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
