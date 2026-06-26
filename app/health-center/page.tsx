import { Metadata } from 'next';
import { MapPin, Clock, Phone, Heart, Stethoscope, Ambulance } from 'lucide-react';

export const metadata: Metadata = {
  title: 'University Health Center',
  description: 'Information about the FUOYE University Health Center at Phase 2.',
};

export default function HealthCenterPage() {
  return (
    <div className="pt-20 pb-16 min-h-screen bg-surface-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <span className="inline-block px-4 py-1.5 bg-green-50 text-green-700 text-sm font-semibold rounded-full mb-4">
            🏥 Campus Health Services
          </span>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-surface-dark mb-4">
            University Health Center
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your primary healthcare facility on campus. Located at Phase 2 for all medical emergencies and health services.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mb-8">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Stethoscope className="w-8 h-8 text-green-700" />
            </div>
            <div>
              <h2 className="text-2xl font-heading font-bold text-surface-dark mb-3">
                FUOYE University Health Center
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="w-5 h-5 text-emergency-red flex-shrink-0" />
                  <span>
                    <strong>Location:</strong> Phase 2, directly opposite the FUOYE Printing Press
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Clock className="w-5 h-5 text-medical-blue flex-shrink-0" />
                  <span>
                    <strong>Hours:</strong> Open during university hours for consultations; emergency services available
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Heart className="w-5 h-5 text-emergency-red flex-shrink-0" />
                  <span>
                    <strong>Services:</strong> General medical consultations, first aid, emergency stabilization, 
                    health education, and referrals
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Directions */}
        <div className="bg-blue-50 rounded-3xl p-8 border border-blue-100 mb-8">
          <h3 className="text-xl font-heading font-bold text-medical-blue mb-4">
            🗺️ How to Get There
          </h3>
          <p className="text-gray-700 leading-relaxed">
            From any point on campus, head toward <strong>Phase 2</strong>. The Health Center is located directly 
            opposite the FUOYE Printing Press — a well-known landmark. In case of emergency, ask anyone for directions 
            to the &quot;Phase 2 Clinic&quot; or call the emergency numbers listed on our contacts page.
          </p>
        </div>

        {/* Emergency Note */}
        <div className="bg-emergency-red rounded-3xl p-8 text-white text-center">
          <Ambulance className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-heading font-bold mb-2">In Case of Emergency</h3>
          <p className="text-red-100 mb-4">
            After providing initial first aid, proceed to the Health Center immediately or call for emergency assistance.
          </p>
          <a
            href="tel:112"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-emergency-red font-bold rounded-xl hover:bg-red-50 transition-all"
          >
            <Phone className="w-5 h-5" />
            Call 112
          </a>
        </div>
      </div>
    </div>
  );
}