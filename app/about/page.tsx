import { Metadata } from 'next';
import { Shield, Target, Heart, Users, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About the Initiative',
  description: 'Learn about the Safe Campus Initiative led by Favour Eniolaoluwa Afolabi.',
};

export default function AboutPage() {
  return (
    <div className="pt-20 pb-16 min-h-screen bg-surface-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <span className="inline-block px-4 py-1.5 bg-red-50 text-emergency-red text-sm font-semibold rounded-full mb-4">
            About
          </span>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-surface-dark mb-4">
            Safe Campus Initiative
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Strengthening Emergency Preparedness, First Aid, and Drug Safety Through Smart QR Infrastructure
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mb-6">
          <div className="flex items-center gap-4 mb-4">
            <Target className="w-8 h-8 text-emergency-red" />
            <h2 className="text-2xl font-heading font-bold text-surface-dark">Our Mission</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            To empower the FUOYE community with immediate access to life-saving emergency information, 
            first-aid protocols, and safety resources through innovative QR code infrastructure — ensuring 
            that critical help is always just a scan away.
          </p>
        </div>

        {/* Objectives */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mb-6">
          <div className="flex items-center gap-4 mb-6">
            <Award className="w-8 h-8 text-medical-blue" />
            <h2 className="text-2xl font-heading font-bold text-surface-dark">Project Objectives</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              'Improve emergency preparedness among students',
              'Increase awareness of basic first aid',
              'Reduce panic during emergencies',
              'Improve accessibility of emergency information',
              'Encourage safer campus environments',
              'Promote health education',
              'Support student welfare initiatives',
              'Facilitate quick access to health resources',
            ].map((objective, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                <Shield className="w-5 h-5 text-safety-teal flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{objective}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Project Lead */}
        <div className="bg-gradient-to-br from-emergency-red to-emergency-darkred rounded-3xl p-8 text-white text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-heading font-bold mb-2">Project Team Lead</h2>
          <p className="text-3xl font-heading font-bold mb-1">Favour Eniolaoluwa Afolabi</p>
          <p className="text-red-100 mb-4">500 Level Doctor of Pharmacy Student</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full">
            
            <span className="text-sm">Faculty of Pharmacy, FUOYE</span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center">
          <p className="text-amber-800 text-sm">
            ⚠️ The Safe Campus Initiative is an educational and emergency support platform. 
            It does not replace professional medical evaluation, diagnosis, or treatment. 
            Always seek professional medical care at the University Health Center.
          </p>
        </div>
      </div>
    </div>
  );
}