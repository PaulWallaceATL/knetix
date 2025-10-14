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
    <main>
      <HeroSection />
      <TrustBadges />
      <KeyOfferings />
      <WhyKnetix />
      <ClientLogos />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <BottomCTA />
    </main>
  );
}
