import { Metadata } from 'next';
import EmergencyCards from '@/components/EmergencyCards';
import Disclaimer from '@/components/Disclaimer';

export const metadata: Metadata = {
  title: 'Emergency Guides',
  description: 'Browse all emergency response protocols for the FUOYE community.',
};

export default function EmergencyPage() {
  return (
    <div className="pt-20">
      <Disclaimer />
      <EmergencyCards />
    </div>
  );
}