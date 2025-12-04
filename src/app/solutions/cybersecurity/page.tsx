import Link from 'next/link';
import SolutionHero from '@/components/SolutionHero';
import SolutionFeatures from '@/components/SolutionFeatures';
import SolutionBenefits from '@/components/SolutionBenefits';
import { Shield, Lock, Eye, AlertTriangle, FileCheck, Users } from 'lucide-react';

export default function CybersecurityPage() {
  const stats = [
    { value: 'Zero Trust', label: 'Architectures' },
    { value: 'Identity', label: 'Modernization' },
    { value: 'Governance', label: 'Playbooks' },
    { value: 'Compliance', label: 'Alignment' },
  ];

  const features = [
    {
      title: 'Zero Trust Architecture',
      description: 'Implement comprehensive zero-trust security frameworks that verify every access request regardless of location.',
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: 'Advanced Threat Detection',
      description: 'Identify and neutralize threats in real-time with AI-powered security analytics and behavioral monitoring.',
      icon: <Eye className="w-8 h-8" />,
    },
    {
      title: 'Data Encryption',
      description: 'Protect sensitive data with military-grade encryption both at rest and in transit across all systems.',
      icon: <Lock className="w-8 h-8" />,
    },
    {
      title: 'Incident Response Readiness',
      description: 'Coordination of MSSP/MDR partners, tabletop exercises, and executive communications.',
      icon: <AlertTriangle className="w-8 h-8" />,
    },
    {
      title: 'Compliance Management',
      description: 'Meet regulatory requirements with automated compliance monitoring for GDPR, HIPAA, SOC 2, and more.',
      icon: <FileCheck className="w-8 h-8" />,
    },
    {
      title: 'Security Training',
      description: 'Empower your team with comprehensive security awareness training and phishing simulation programs.',
      icon: <Users className="w-8 h-8" />,
    },
  ];

  const benefits = [
    'Security strategy rooted in zero-trust principles, identity, data protection, and resiliency.',
    'Vendor-neutral evaluation of MSSPs, EDR/MDR, SOAR, and cloud-native security partners.',
    'Regulatory alignment (HIPAA, PCI, SOX, GDPR, FedRAMP) embedded into architectures and operating models.',
    'Implementation governance that keeps tooling, telemetry, and processes in sync without Knetix running a SOC.',
    'Cross-functional enablement linking security, infrastructure, product, and business stakeholders.',
    'Continuous measurement of risk reduction, event response readiness, and financial stewardship.',
  ];

  return (
    <main className="pt-20">
      <SolutionHero
        title="Enterprise Cybersecurity"
        subtitle="Security Solutions"
        description="Design zero-trust security programs, modernize identity, govern data, and oversee the MSSP/MDR ecosystem that operates on your behalf."
        stats={stats}
      />

      <SolutionFeatures features={features} />

      <SolutionBenefits benefits={benefits} />

      {/* CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-r from-[#0A2E50] to-[#00C4B4] text-white">
        <div className="container-clean text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Strengthen Your Security Posture
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Get a complimentary security assessment from our certified security experts. 
            We&apos;ll identify vulnerabilities, assess your risk profile, and provide actionable recommendations.
          </p>
          <Link href="/contact">
            <button className="px-12 py-5 rounded-xl bg-white text-[#0A2E50] font-bold text-lg hover:bg-white/90 hover:shadow-2xl transition-all">
              Schedule Security Assessment
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

