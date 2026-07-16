import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

type ExportVisitor = {
  id: number;
  ip: string;
  country: string | null;
  countryCode: string | null;
  region: string | null;
  city: string | null;
  latitude: number | null;
  longitude: number | null;
  timezone: string | null;
  isp: string | null;
  asn: string | null;
  postalCode: string | null;
  browser: string | null;
  deviceType: string | null;
  operatingSystem: string | null;
  referer: string | null;
  visitedPage: string | null;
  createdAt: Date;
};

export async function GET() {
  const visitors = (await prisma.visitorLog.findMany({
    orderBy: { createdAt: 'desc' },
    take: 500,
    select: {
      id: true,
      ip: true,
      country: true,
      countryCode: true,
      region: true,
      city: true,
      latitude: true,
      longitude: true,
      timezone: true,
      isp: true,
      asn: true,
      postalCode: true,
      browser: true,
      deviceType: true,
      operatingSystem: true,
      referer: true,
      visitedPage: true,
      createdAt: true,
    },
  })) as ExportVisitor[];

  const csv = [
    ['id', 'ip', 'country', 'countryCode', 'region', 'city', 'latitude', 'longitude', 'timezone', 'isp', 'asn', 'postalCode', 'browser', 'deviceType', 'operatingSystem', 'referer', 'visitedPage', 'createdAt'].join(','),
    ...visitors.map((visitor) => [
      visitor.id,
      visitor.ip,
      visitor.country ?? '',
      visitor.countryCode ?? '',
      visitor.region ?? '',
      visitor.city ?? '',
      visitor.latitude ?? '',
      visitor.longitude ?? '',
      visitor.timezone ?? '',
      visitor.isp ?? '',
      visitor.asn ?? '',
      visitor.postalCode ?? '',
      visitor.browser ?? '',
      visitor.deviceType ?? '',
      visitor.operatingSystem ?? '',
      visitor.referer ?? '',
      visitor.visitedPage ?? '',
      visitor.createdAt.toISOString(),
    ].join(',')),
  ].join('\n');

  return new NextResponse(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': 'attachment; filename="visitors.csv"',
    },
  });
}
