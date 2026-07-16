import { NextRequest, NextResponse } from 'next/server';
import { trackVisitor } from '@/lib/visitorTracking';
import { normalizeIp } from '@/lib/visitorUtils';

const RATE_LIMIT = 10;
const WINDOW_MS = 60_000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const timestamps = hits.get(ip) ?? [];
  const recent = timestamps.filter((ts) => now - ts < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT;
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({} as Record<string, unknown>));
  const forwarded = request.headers.get('x-forwarded-for') ?? '';
  const ip = normalizeIp((body.ip as string | undefined) ?? forwarded.split(',')[0] ?? request.headers.get('x-real-ip') ?? request.headers.get('cf-connecting-ip'));
  if (isRateLimited(ip ?? 'unknown')) {
    return NextResponse.json({ ok: false, error: 'rate limited' }, { status: 429 });
  }

  const result = await trackVisitor({
    headers: request.headers,
    ip: ip ?? undefined,
    userAgent: (body.userAgent as string | undefined) ?? null,
    referer: (body.referer as string | undefined) ?? null,
    page: (body.page as string | undefined) ?? null,
  });
  return NextResponse.json(result, { status: result.ok ? 200 : 500 });
}
