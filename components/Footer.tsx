import Link from 'next/link';
import { Shield, Heart, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emergency-red rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg">Safe Campus</h3>
                <p className="text-xs text-gray-400">FUOYE Initiative</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Strengthening Emergency Preparedness, First Aid, and Drug Safety Through Smart QR Infrastructure at Federal University Oye-Ekiti.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>Phase 2, FUOYE, Oye-Ekiti</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { href: '/emergency', label: 'Emergency Guides' },
                { href: '/contacts', label: 'Emergency Contacts' },
                { href: '/drug-safety', label: 'Drug Safety' },
                { href: '/health-center', label: 'Health Center' },
                { href: '/report', label: 'Report Situation' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency Contacts */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Emergency Contacts</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4 text-emergency-red" />
                <span className="text-sm">National Emergency: <strong className="text-white">112</strong></span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4 text-emergency-red" />
                <span className="text-sm">FRSC: <strong className="text-white">122</strong></span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4 text-emergency-red" />
                <span className="text-sm">Moremi Clinic: <strong className="text-white">07050752287</strong></span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Safe Campus Initiative. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Built by{' '}
            <span className="text-white font-medium">Favour Eniolaoluwa Afolabi</span>
          </p>
        </div>
      </div>
    </footer>
  );
}