import { prisma } from '@/lib/prisma';

const PAGE_SIZE = 10;

type VisitorsQuery = {
  search?: string;
  country?: string;
  browser?: string;
  device?: string;
  page?: string;
};

type VisitorSummary = {
  country?: string | null;
  city?: string | null;
  isp?: string | null;
  browser?: string | null;
  deviceType?: string | null;
};

function startOfToday(): Date {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

function daysAgo(days: number): Date {
  const d = new Date();
  d.setDate(d.getDate() - days);
  d.setHours(0, 0, 0, 0);
  return d;
}

function aggregateBy<T extends VisitorSummary>(
  items: T[],
  keyFn: (item: T) => string | null | undefined,
): { value: string; count: number }[] {
  const map = new Map<string, number>();
  for (const item of items) {
    const raw = keyFn(item);
    const key = raw?.trim() || 'Unknown';
    map.set(key, (map.get(key) ?? 0) + 1);
  }
  return Array.from(map, ([value, count]) => ({ value, count }))
    .sort((a, b) => b.count - a.count);
}

async function getStats(query: VisitorsQuery) {
  const search = query.search?.trim();
  const country = query.country?.trim();
  const browser = query.browser?.trim();
  const device = query.device?.trim();
  const page = Math.max(1, Number(query.page ?? 1));
  const skip = (page - 1) * PAGE_SIZE;

  const where: Record<string, unknown> = {};

  if (search) {
    const searchFilter = { contains: search };
    where.OR = [
      { ip: searchFilter },
      { country: searchFilter },
      { city: searchFilter },
      { browser: searchFilter },
      { isp: searchFilter },
    ];
  }
  if (country) where.country = { equals: country };
  if (browser) where.browser = { equals: browser };
  if (device) where.deviceType = { equals: device };

  const today = startOfToday();
  const weekStart = daysAgo(7);
  const monthStart = daysAgo(30);

  const [
    totalVisitors,
    todayVisitors,
    weekVisitors,
    monthVisitors,
    recentVisitors,
    visitorsWithLocation,
    totalFilteredVisitors,
  ] = await Promise.all([
    prisma.visitorLog.count(),
    prisma.visitorLog.count({ where: { createdAt: { gte: today } } }),
    prisma.visitorLog.count({ where: { createdAt: { gte: weekStart } } }),
    prisma.visitorLog.count({ where: { createdAt: { gte: monthStart } } }),
    prisma.visitorLog.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip,
      take: PAGE_SIZE,
      select: {
        id: true,
        ip: true,
        country: true,
        city: true,
        browser: true,
        deviceType: true,
        createdAt: true,
      },
    }),
    prisma.visitorLog.findMany({
      where: {
        ...where,
        latitude: { not: null },
        longitude: { not: null },
      },
      select: {
        id: true,
        ip: true,
        country: true,
        city: true,
        latitude: true,
        longitude: true,
        createdAt: true,
      },
      take: 100,
    }),
    prisma.visitorLog.count({ where }),
  ]);

  const allVisitors = (await prisma.visitorLog.findMany({
    select: {
      country: true,
      city: true,
      isp: true,
      browser: true,
      deviceType: true,
    },
  })) as VisitorSummary[];

  const countries = aggregateBy(allVisitors, (v) => v.country);
  const cities = aggregateBy(allVisitors, (v) => v.city);
  const isps = aggregateBy(allVisitors, (v) => v.isp);
  const browsers = aggregateBy(allVisitors, (v) => v.browser);
  const devices = aggregateBy(allVisitors, (v) => v.deviceType);

  return {
    totalVisitors,
    todayVisitors,
    weekVisitors,
    monthVisitors,
    recentVisitors,
    countries,
    cities,
    isps,
    browsers,
    devices,
    visitorsWithLocation,
    totalFilteredVisitors,
    page,
    pageCount: Math.max(1, Math.ceil(totalFilteredVisitors / PAGE_SIZE)),
  };
}

export default async function VisitorsAdminPage({
  searchParams,
}: {
  searchParams?: Promise<VisitorsQuery>;
}) {
  const resolvedParams = await searchParams;
  let stats;
  try {
    stats = await getStats(resolvedParams ?? {});
  } catch (err) {
    console.error('VisitorsAdminPage error', err);
    return (
      <div className="mx-auto max-w-7xl px-6 py-24">
        <h1 className="text-2xl font-bold text-surface-dark">Visitor Analytics</h1>
        <p className="mt-4 text-red-600">
          An error occurred while loading analytics. Check server logs for details.
        </p>
      </div>
    );
  }

  const queryString = new URLSearchParams({
    ...(resolvedParams?.search ? { search: resolvedParams.search } : {}),
    ...(resolvedParams?.country ? { country: resolvedParams.country } : {}),
    ...(resolvedParams?.browser ? { browser: resolvedParams.browser } : {}),
    ...(resolvedParams?.device ? { device: resolvedParams.device } : {}),
  }).toString();

  return (
    <div className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-surface-dark">Visitor Analytics</h1>
          <p className="mt-2 text-slate-600">
            Overview of visitor activity, geography, and device patterns.
          </p>
        </div>
        <a
          href="/api/visitors/export"
          className="inline-flex rounded-full bg-emergency-red px-4 py-2 text-sm font-semibold text-white"
        >
          Export CSV
        </a>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {[
          { label: 'Total Visitors', value: stats.totalVisitors },
          { label: 'Today', value: stats.todayVisitors },
          { label: 'This Week', value: stats.weekVisitors },
          { label: 'This Month', value: stats.monthVisitors },
          { label: 'Countries', value: stats.countries.length },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <p className="text-sm text-slate-500">{item.label}</p>
            <p className="mt-2 text-2xl font-semibold">{item.value}</p>
          </div>
        ))}
      </div>

      <form
        className="mb-8 grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-4"
        method="get"
      >
        <input
          name="search"
          defaultValue={resolvedParams?.search ?? ''}
          placeholder="Search IP, country, city, browser"
          className="rounded-lg border border-slate-200 px-3 py-2"
        />
        <select
          name="country"
          defaultValue={resolvedParams?.country ?? ''}
          className="rounded-lg border border-slate-200 px-3 py-2"
        >
          <option value="">All countries</option>
          {stats.countries.map((item) => (
            <option key={item.value} value={item.value === 'Unknown' ? '' : item.value}>
              {item.value}
            </option>
          ))}
        </select>
        <select
          name="browser"
          defaultValue={resolvedParams?.browser ?? ''}
          className="rounded-lg border border-slate-200 px-3 py-2"
        >
          <option value="">All browsers</option>
          {stats.browsers.map((item) => (
            <option key={item.value} value={item.value === 'Unknown' ? '' : item.value}>
              {item.value}
            </option>
          ))}
        </select>
        <select
          name="device"
          defaultValue={resolvedParams?.device ?? ''}
          className="rounded-lg border border-slate-200 px-3 py-2"
        >
          <option value="">All devices</option>
          {stats.devices.map((item) => (
            <option key={item.value} value={item.value === 'Unknown' ? '' : item.value}>
              {item.value}
            </option>
          ))}
        </select>
        <div className="md:col-span-4 flex gap-3">
          <button
            type="submit"
            className="rounded-full bg-surface-dark px-4 py-2 text-sm font-semibold text-white"
          >
            Apply filters
          </button>
          <a
            href="/admin/visitors"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700"
          >
            Reset
          </a>
        </div>
      </form>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Visitor Map (disabled)</h2>
          <div className="flex h-[320px] w-full items-center justify-center rounded-2xl bg-slate-50 text-sm text-slate-500">
            Visitor map disabled for debugging.
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Countries</h2>
          <ul className="space-y-2">
            {stats.countries.map((item) => (
              <li key={item.value} className="flex items-center justify-between">
                <span>{item.value}</span>
                <span className="font-semibold">{item.count}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Browsers</h2>
          <ul className="space-y-2">
            {stats.browsers.map((item) => (
              <li key={item.value} className="flex items-center justify-between">
                <span>{item.value}</span>
                <span className="font-semibold">{item.count}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold">Devices</h2>
          <ul className="space-y-2">
            {stats.devices.map((item) => (
              <li key={item.value} className="flex items-center justify-between">
                <span>{item.value}</span>
                <span className="font-semibold">{item.count}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Recent Visitors</h2>
          <p className="text-sm text-slate-500">
            Page {stats.page} of {stats.pageCount}
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b text-left text-slate-600">
                <th className="px-2 py-3">IP</th>
                <th className="px-2 py-3">Country</th>
                <th className="px-2 py-3">City</th>
                <th className="px-2 py-3">Browser</th>
                <th className="px-2 py-3">Device</th>
                <th className="px-2 py-3">Time</th>
              </tr>
            </thead>
            <tbody>
              {stats.recentVisitors.map((visitor) => (
                <tr key={visitor.id} className="border-b">
                  <td className="px-2 py-3">{visitor.ip}</td>
                  <td className="px-2 py-3">{visitor.country ?? 'Unknown'}</td>
                  <td className="px-2 py-3">{visitor.city ?? 'Unknown'}</td>
                  <td className="px-2 py-3">{visitor.browser ?? 'Unknown'}</td>
                  <td className="px-2 py-3">{visitor.deviceType ?? 'Unknown'}</td>
                  <td className="px-2 py-3">
                    {new Date(visitor.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex justify-between">
          <a
            href={`/admin/visitors?${queryString}${queryString ? '&' : ''}page=${Math.max(1, stats.page - 1)}`}
            className={`rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold ${
              stats.page <= 1 ? 'pointer-events-none opacity-50' : ''
            }`}
          >
            Previous
          </a>
          <a
            href={`/admin/visitors?${queryString}${queryString ? '&' : ''}page=${Math.min(stats.pageCount, stats.page + 1)}`}
            className={`rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold ${
              stats.page >= stats.pageCount ? 'pointer-events-none opacity-50' : ''
            }`}
          >
            Next
          </a>
        </div>
      </div>
    </div>
  );
}