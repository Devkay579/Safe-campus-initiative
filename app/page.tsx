import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import EmergencyCards from '@/components/EmergencyCards';
import QRSection from '@/components/QRSection';
import DrugSafetyPreview from '@/components/DrugSafetyPreview';
import CTASection from '@/components/CTASection';
import Disclaimer from '@/components/Disclaimer';

export default function HomePage() {
  return (
    <>
      <div className="pt-20">
        <Disclaimer />
      </div>
      <Hero />
      <Stats />
      <EmergencyCards />
      <QRSection />
      <DrugSafetyPreview />
      <CTASection />
    </>
  );
}