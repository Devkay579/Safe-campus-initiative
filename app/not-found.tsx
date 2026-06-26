import Link from 'next/link';
import { AlertTriangle, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-light px-4">
      <div className="text-center">
        <AlertTriangle className="w-20 h-20 text-emergency-red mx-auto mb-6" />
        <h1 className="text-6xl font-heading font-extrabold text-surface-dark mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-emergency-red text-white font-semibold rounded-2xl hover:bg-emergency-darkred transition-all"
        >
          <Home className="w-5 h-5" />
          Return to Safety Hub
        </Link>
      </div>
    </div>
  );
}