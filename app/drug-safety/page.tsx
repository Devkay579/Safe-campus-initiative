import { Metadata } from 'next';
import { drugSafetyTopics } from '@/data/drugSafety';
import { Pill, AlertTriangle as AlertTriangleIcon, Ban, CheckCircle } from 'lucide-react';
import { AlertTriangle } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Pill,
  AlertTriangle: AlertTriangleIcon,
  Ban,
  CheckCircle,
};

export const metadata: Metadata = {
  title: 'Drug Safety Awareness',
  description: 'Learn about drug misuse, self-medication risks, and safe medication practices.',
};

export default function DrugSafetyPage() {
  return (
    <div className="pt-20 pb-16 min-h-screen bg-surface-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-medical-blue text-sm font-semibold rounded-full mb-4">
            💊 Drug Safety Awareness
          </span>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-surface-dark mb-4">
            Drug Safety & Medication Awareness
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Educational resources on drug misuse, abuse prevention, self-medication risks, and safe medication practices for the FUOYE community.
          </p>
        </div>

        {/* Topics */}
        <div className="space-y-8">
          {drugSafetyTopics.map((topic) => {
            const IconComponent = iconMap[topic.icon] || Pill;
            return (
              <div
                key={topic.id}
                className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <IconComponent className="w-12 h-12 text-medical-blue" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-heading font-bold text-surface-dark mb-2">
                      {topic.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">{topic.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Key Points */}
                  <div className="bg-blue-50 rounded-2xl p-5">
                    <h3 className="font-heading font-semibold text-medical-blue mb-3">
                      📌 Key Points
                    </h3>
                    <ul className="space-y-2">
                      {topic.keyPoints.map((point, i) => (
                        <li key={i} className="flex gap-2 text-sm text-gray-700">
                          <span className="text-medical-blue font-bold">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Risks */}
                  <div className="bg-red-50 rounded-2xl p-5">
                    <h3 className="font-heading font-semibold text-emergency-red mb-3">
                      ⚠️ Risks
                    </h3>
                    <ul className="space-y-2">
                      {topic.risks.map((risk, i) => (
                        <li key={i} className="flex gap-2 text-sm text-gray-700">
                          <span className="text-emergency-red font-bold">•</span>
                          {risk}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Safe Practices */}
                <div className="mt-6 bg-green-50 rounded-2xl p-5">
                  <h3 className="font-heading font-semibold text-green-700 mb-3">
                    ✅ Safe Practices
                  </h3>
                  <ul className="space-y-2">
                    {topic.safePractices.map((practice, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-700">
                        <span className="text-green-600 font-bold">✓</span>
                        {practice}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center">
          <AlertTriangle className="w-8 h-8 text-amber-600 mx-auto mb-3" />
          <p className="text-amber-800 font-semibold">
            This information is for educational purposes only.
          </p>
          <p className="text-amber-700 text-sm mt-1">
            Always consult a healthcare professional at the University Health Center for medical advice.
          </p>
        </div>
      </div>
    </div>
  );
}