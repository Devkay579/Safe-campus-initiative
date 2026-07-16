import { prisma } from '@/lib/prisma';
import { headers } from 'next/headers';
import { isValidIp, normalizeIp, parseUserAgent } from '@/lib/visitorUtils';

const GEO_API_URL = 'https://ipapi.co';
const CACHE_TTL_MS = 1000 * 60 * 60 * 24;
const requestCache = new Map<string, { expiresAt: number; data: any }>();
const geoApiKey = process.env.GEOLOCATION_API_KEY;

function getClientInfo(reqHeaders: Headers, extra: { ip?: string | null; userAgent?: string | null; referer?: string | null; visitedPage?: string | null }) {
  const ip = normalizeIp(extra.ip ?? reqHeaders.get('x-forwarded-for') ?? reqHeaders.get('x-real-ip') ?? reqHeaders.get('cf-connecting-ip'));
  const userAgent = extra.userAgent ?? reqHeaders.get('user-agent');
  const referer = extra.referer ?? reqHeaders.get('referer');
  const visitedPage = extra.visitedPage ?? reqHeaders.get('x-invoke-path') ?? null;
  const { browser, operatingSystem, deviceType } = parseUserAgent(userAgent);

  return {
    ip,
    userAgent,
    referer,
    visitedPage,
    deviceType,
    browser,
    operatingSystem,
  };
}

async function fetchGeolocation(ip: string) {
  const cached = requestCache.get(ip);
  if (cached && cached.expiresAt > Date.now()) {
    return cached.data;
  }

  const endpoint = geoApiKey
    ? `${GEO_API_URL}/${ip}/json/?key=${geoApiKey}`
    : `${GEO_API_URL}/${ip}/json/`;

  const response = await fetch(endpoint, {
    headers: { Accept: 'application/json' },
    next: { revalidate: 60 * 60 * 24 },
  });

  if (!response.ok) {
    throw new Error('Geolocation lookup failed');
  }

  const data = await response.json();
  requestCache.set(ip, { expiresAt: Date.now() + CACHE_TTL_MS, data });
  return data;
}

export async function trackVisitor(input?: { headers?: Headers; ip?: string | null; userAgent?: string | null; referer?: string | null; page?: string | null }) {
  try {
    const requestHeaders = input?.headers ?? (await headers());
    const { ip, userAgent, referer, visitedPage, deviceType, browser, operatingSystem } = getClientInfo(requestHeaders, {
      ip: input?.ip ?? null,
      userAgent: input?.userAgent ?? null,
      referer: input?.referer ?? null,
      visitedPage: input?.page ?? null,
    });

    if (!ip || !isValidIp(ip) || (process.env.NODE_ENV === 'development' && ip === '127.0.0.1')) {
      return { ok: true, skipped: true };
    }

    const existing = await prisma.visitorLog.findFirst({
      where: { ip },
      orderBy: { createdAt: 'desc' },
    });

    if (existing) {
      const duplicateWindow = Date.now() - new Date(existing.createdAt).getTime();
      if (duplicateWindow < 1000 * 60 * 5) {
        return { ok: true, skipped: true, reason: 'duplicate' };
      }
    }

    const geo = await fetchGeolocation(ip);

    await prisma.visitorLog.create({
      data: {
        ip,
        country: geo.country_name ?? null,
        countryCode: geo.country_code ?? null,
        region: geo.region ?? null,
        city: geo.city ?? null,
        latitude: typeof geo.latitude === 'number' ? geo.latitude : null,
        longitude: typeof geo.longitude === 'number' ? geo.longitude : null,
        timezone: geo.timezone ?? null,
        isp: geo.org ?? null,
        asn: geo.asn ?? null,
        postalCode: geo.postal ?? null,
        userAgent: userAgent ?? null,
        referer: referer ?? null,
        visitedPage: visitedPage ?? null,
        deviceType,
        browser,
        operatingSystem,
      },
    });

    return { ok: true, stored: true };
  } catch (error) {
    console.error('Visitor tracking failed', error);
    return { ok: false, error: 'tracking failed' };
  }
}
