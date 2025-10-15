import HeroSection from '@/components/HeroSection';
import TrustBadges from '@/components/TrustBadges';
import KeyOfferings from '@/components/KeyOfferings';
import WhyKnetix from '@/components/WhyKnetix';
import ClientLogos from '@/components/ClientLogos';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';
import BottomCTA from '@/components/BottomCTA';

export default function Home() {
  return (
    <main className="space-y-0">
      <HeroSection />
      <div className="py-8">
        <TrustBadges />
      </div>
      <KeyOfferings />
      <div className="py-8">
        <WhyKnetix />
      </div>
      <div className="py-8">
        <ClientLogos />
      </div>
      <div className="py-8">
        <CaseStudies />
      </div>
      <Testimonials />
      <div className="py-8">
        <FAQ />
      </div>
      <div className="py-8">
        <Newsletter />
      </div>
      <BottomCTA />
    </main>
  );
}
