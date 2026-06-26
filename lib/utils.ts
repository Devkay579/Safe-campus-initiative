export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function getSeverityColor(severity: 'Low' | 'Moderate' | 'High' | 'Critical'): string {
  const colors = {
    Low: 'bg-green-100 text-green-800 border-green-300',
    Moderate: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    High: 'bg-orange-100 text-orange-800 border-orange-300',
    Critical: 'bg-red-100 text-red-800 border-red-300',
  };
  return colors[severity];
}

export function getSeverityIcon(severity: 'Low' | 'Moderate' | 'High' | 'Critical'): string {
  const icons = {
    Low: '🟢',
    Moderate: '🟡',
    High: '🟠',
    Critical: '🔴',
  };
  return icons[severity];
}