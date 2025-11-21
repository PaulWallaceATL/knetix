import EnterpriseHero from '@/components/EnterpriseHero';
import KeyOfferings from '@/components/KeyOfferings';
import WhyKnetix from '@/components/WhyKnetix';
import ClientLogos from '@/components/ClientLogos';
import TrustBuilders from '@/components/TrustBuilders';
import InteractiveDashboard from '@/components/InteractiveDashboard';
import FAQ from '@/components/FAQ';
import BottomCTA from '@/components/BottomCTA';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero Section - Full viewport with parallax */}
      <EnterpriseHero />
      
      {/* Core Offerings */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container-clean">
          <KeyOfferings />
        </div>
      </section>
      
      {/* Value Proposition */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container-clean">
          <WhyKnetix />
        </div>
      </section>
      
      {/* Client Logos */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container-clean">
          <ClientLogos />
        </div>
      </section>
      
      {/* Interactive Performance Dashboard */}
      <InteractiveDashboard />
      
      {/* Trust & Credibility */}
      <TrustBuilders />
      
      {/* FAQ */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container-clean">
          <FAQ />
        </div>
      </section>
      
      {/* Final CTA */}
      <BottomCTA />
    </main>
  );
}
