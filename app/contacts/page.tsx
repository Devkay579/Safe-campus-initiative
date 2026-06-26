import { Metadata } from 'next';
import { emergencyContacts, contactsByCategory } from '@/data/contacts';
import ContactCard from '@/components/ContactCard';

export const metadata: Metadata = {
  title: 'Emergency Contacts',
  description: 'Quick access to all emergency contact numbers for FUOYE and Ekiti State.',
};

export default function ContactsPage() {
  return (
    <div className="pt-20 pb-16 min-h-screen bg-surface-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <span className="inline-block px-4 py-1.5 bg-red-50 text-emergency-red text-sm font-semibold rounded-full mb-4">
            📞 Emergency Contact Center
          </span>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-surface-dark mb-4">
            Emergency Contact Directory
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            One-click dialing for all emergency services. Save these numbers — they could save a life.
          </p>
        </div>

        {/* National Emergency Banner */}
        <div className="bg-emergency-red rounded-2xl p-6 mb-8 text-white text-center">
          <p className="text-lg font-heading font-bold mb-1">🚨 National Emergency Toll-Free Line</p>
          <a href="tel:112" className="text-4xl md:text-5xl font-heading font-extrabold hover:underline">
            112
          </a>
          <p className="text-sm text-red-100 mt-1">Police • Fire • Medical Dispatch — All Networks</p>
        </div>

        {/* FRSC Banner */}
        <div className="bg-medical-blue rounded-2xl p-6 mb-8 text-white text-center">
          <p className="text-lg font-heading font-bold mb-1">🚗 Federal Road Safety Corps (FRSC)</p>
          <a href="tel:122" className="text-4xl md:text-5xl font-heading font-extrabold hover:underline">
            122
          </a>
          <p className="text-sm text-blue-100 mt-1">For road accidents and highway emergencies</p>
        </div>

        {/* Other Contacts */}
        <div className="grid md:grid-cols-2 gap-5">
          {emergencyContacts
            .filter((c) => c.displayNumber !== '112' && c.displayNumber !== '122')
            .map((contact, index) => (
              <ContactCard key={contact.id} contact={contact} index={index} />
            ))}
        </div>

        {/* Campus Health Center */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <span className="text-4xl">🏥</span>
            <div>
              <h3 className="font-heading font-bold text-xl text-green-800 mb-2">
                FUOYE University Health Center
              </h3>
              <p className="text-green-700">
                Located at <strong>Phase 2</strong>, directly opposite the FUOYE Printing Press.
              </p>
              <p className="text-green-600 text-sm mt-2">
                Proceed there or transport the victim immediately after providing initial first aid.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}