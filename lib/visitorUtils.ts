export function normalizeIp(value: string | null | undefined): string | null {
  if (!value) return null;
  const ip = value.split(',')[0]?.trim();
  if (!ip || ip === 'unknown' || ip === '::1' || ip === '127.0.0.1' || ip === 'localhost') {
    return null;
  }
  return ip;
}

export function isValidIp(ip: string | null | undefined) {
  if (!ip) return false;
  const ipv4 = /^(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;
  const ipv6 = /^(?:[0-9a-fA-F]{1,4}:){1,7}[0-9a-fA-F]{1,4}$/;
  return ipv4.test(ip) || ipv6.test(ip);
}
//export
export function parseUserAgent(userAgent: string | null | undefined) {
  const ua = userAgent ?? '';
  const browser = ua.includes('Firefox')
    ? 'Firefox'
    : ua.includes('Edg')
      ? 'Edge'
      : ua.includes('Chrome')
        ? 'Chrome'
        : ua.includes('Safari')
          ? 'Safari'
          : 'Unknown';

  const operatingSystem = ua.includes('Windows')
    ? 'Windows'
    : ua.includes('Mac')
      ? 'macOS'
      : ua.includes('Android')
        ? 'Android'
        : ua.includes('iPhone') || ua.includes('iPad')
          ? 'iOS'
          : ua.includes('Linux')
            ? 'Linux'
            : 'Unknown';

  const deviceType = /mobile|android|iphone/i.test(ua)
    ? 'Mobile'
    : /tablet|ipad/i.test(ua)
      ? 'Tablet'
      : 'Desktop';

  return { browser, operatingSystem, deviceType };
}
