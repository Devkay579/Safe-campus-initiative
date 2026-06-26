import { Metadata } from 'next';
import { AlertTriangle, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Report a Situation',
  description: 'Submit emergency reports, welfare complaints, or safety concerns confidentially.',
};

const GOOGLE_FORM_URL = 'https://forms.google.com/your-form-link-here';

export default function ReportPage() {
  return (
    <div className="pt-20 pb-16 min-h-screen bg-surface-light">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 pt-8">
          <span className="inline-block px-4 py-1.5 bg-red-50 text-emergency-red text-sm font-semibold rounded-full mb-4">
            📋 Student Support
          </span>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-surface-dark mb-4">
            Report a Situation
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Use this form to report emergencies, welfare complaints, safety concerns, harassment, or any situation requiring attention. All submissions are confidential.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mb-8">
          <div className="text-center">
            <AlertTriangle className="w-16 h-16 text-emergency-red mx-auto mb-4" />
            <h2 className="text-xl font-heading font-bold text-surface-dark mb-3">
              Confidential Reporting Form
            </h2>
            <p className="text-gray-600 mb-6">
              Click the button below to open the secure Google Form. You can report:
            </p>
            <ul className="text-left max-w-xs mx-auto space-y-2 mb-8 text-gray-700">
              {[
                '🚨 Emergency situations',
                '⚠️ Safety concerns',
                '🛡️ Harassment reports',
                '💬 Welfare complaints',
                '🏥 Health-related issues',
                '📝 General feedback',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf8EllLSVMu9jsqmA34hlFwDSWBCJ_6lOu4bDmf53sDeY9QUA/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 bg-emergency-red text-white font-bold rounded-2xl hover:bg-emergency-darkred transition-all shadow-lg shadow-red-200"
            >
              Open Report Form
              <ExternalLink className="w-5 h-5" />
            </a>
            <p className="text-xs text-gray-400 mt-4">
              Opens in a new tab • All submissions are confidential
            </p>
          </div>
        </div>

        {/* Alternative Contacts */}
        <div className="bg-amber-50 rounded-3xl p-6 border border-amber-200 text-center">
          <p className="text-amber-800 font-semibold mb-2">
            🛡️ Need to speak to someone directly?
          </p>
          <p className="text-amber-700 text-sm mb-3">
            Contact the Moremi Clinic (Sexual Assault Referral Centre) for confidential support:
          </p>
          <a
            href="tel:07050752287"
            className="text-lg font-bold text-emergency-red hover:underline"
          >
            07050752287
          </a>
          <span className="text-amber-600 mx-2">or</span>
          <a
            href="tel:07039786904"
            className="text-lg font-bold text-emergency-red hover:underline"
          >
            07039786904
          </a>
        </div>
      </div>
    </div>
  );
}