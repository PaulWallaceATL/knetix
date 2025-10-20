import Link from 'next/link';
import SolutionHero from '@/components/SolutionHero';
import SolutionFeatures from '@/components/SolutionFeatures';
import SolutionBenefits from '@/components/SolutionBenefits';
import { Shield, Lock, Eye, AlertTriangle, FileCheck, Users } from 'lucide-react';

export default function CybersecurityPage() {
  const stats = [
    { value: 'Zero', label: 'Breaches' },
    { value: 'SOC 2', label: 'Certified' },
    { value: '24/7', label: 'Threat Monitoring' },
    { value: '100%', label: 'Compliance' },
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
      title: 'Incident Response',
      description: 'Rapid response and remediation with our 24/7 security operations center and expert incident handlers.',
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
    'Protect against evolving cyber threats with AI-powered detection',
    'Achieve compliance with industry regulations and standards',
    'Reduce security incidents by up to 90% with proactive monitoring',
    'Safeguard customer data and maintain trust',
    'Minimize downtime with rapid incident response',
    '24/7 security operations center monitoring',
  ];

  return (
    <main className="pt-20">
      <SolutionHero
        title="Enterprise Cybersecurity"
        subtitle="Security Solutions"
        description="Fortify your defenses with future-ready security solutions, safeguarding your valuable data and ensuring uninterrupted operations."
        stats={stats}
      />

      <SolutionFeatures features={features} />

      <SolutionBenefits benefits={benefits} />

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-r from-[#0A2E50] to-[#00C4B4] text-white">
        <div className="container-clean text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Secure Your Digital Assets
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-light">
            Get a complimentary security assessment and discover vulnerabilities before threats do.
          </p>
          <Link href="/contact">
            <button className="px-12 py-5 rounded-xl bg-white text-[#0A2E50] font-bold text-lg hover:bg-white/90 hover:shadow-2xl transition-all">
              Request Security Assessment
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

