import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { emergencyProtocols } from '@/data/emergencies';
import EmergencyDetail from '@/components/EmergencyDetail';

interface Props {
  params: Promise<{ slug: string }>;   // ✅ params is a Promise in Next.js 15
}

export function generateStaticParams() {
  return emergencyProtocols.map((protocol) => ({
    slug: protocol.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;   // ✅ await
  const protocol = emergencyProtocols.find((p) => p.slug === slug);
  if (!protocol) return { title: 'Not Found' };
  return {
    title: `${protocol.title} - Emergency Protocol`,
    description: protocol.description,
  };
}

export default async function EmergencyProtocolPage({ params }: Props) {
  const { slug } = await params;   // ✅ await
  const protocol = emergencyProtocols.find((p) => p.slug === slug);

  if (!protocol) {
    notFound();
  }

  return <EmergencyDetail protocol={protocol} />;
}