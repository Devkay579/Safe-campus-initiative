'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Phone,
  AlertOctagon,
  Flame,
  Stethoscope,
  LineSquiggleIcon,
  Skull,
  Sun,
  PersonStandingIcon,
  Wind,
  Shield,
  Siren,
  Dumbbell,
  type LucideIcon,
} from 'lucide-react';
import type { EmergencyProtocol } from '@/data/emergencies';
import { getSeverityColor } from '@/lib/utils';
import { DisclaimerFooter } from './Disclaimer';

const iconMap: Record<string, LucideIcon> = {
  Flame,
  Stethoscope,
  LineSquiggleIcon,
  Skull,
  Sun,
  PersonStandingIcon,
  Wind,
  Shield,
  Siren,
  Dumbbell,
};

interface EmergencyDetailProps {
  protocol: EmergencyProtocol;
}

export default function EmergencyDetail({ protocol }: EmergencyDetailProps) {
  const IconComponent = iconMap[protocol.icon] || Flame;

  return (
    <div className="min-h-screen pt-20 pb-16 bg-surface-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Link
            href="/emergency"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-emergency-red transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Emergency Guides
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 mb-6"
        >
          <div className="flex items-start gap-4 md:gap-6">
            <div className="flex-shrink-0">
              <IconComponent className="w-12 h-12 md:w-14 md:h-14 text-emergency-red" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-2xl md:text-3xl font-heading font-bold text-surface-dark">
                  {protocol.title}
                </h1>
                <span
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold border ${getSeverityColor(protocol.severity)}`}
                >
                  <AlertOctagon className="w-3 h-3" />
                  {protocol.severity}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">{protocol.description}</p>
            </div>
          </div>
        </motion.div>

        {/* Immediate Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 mb-6"
        >
          <h2 className="text-xl font-heading font-bold text-surface-dark mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-emergency-red rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-white" />
            </span>
            Immediate Actions
          </h2>
          <ol className="space-y-4">
            {protocol.immediateActions.map((action, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex gap-4"
              >
                <span className="flex-shrink-0 w-8 h-8 bg-red-50 text-emergency-red font-bold rounded-full flex items-center justify-center text-sm">
                  {index + 1}
                </span>
                <p className="text-gray-700 pt-1">{action}</p>
              </motion.li>
            ))}
          </ol>
        </motion.div>

        {/* Do's and Don'ts */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Do's */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-green-100"
          >
            <h3 className="text-lg font-heading font-bold text-green-700 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6" />
              ✅ What To Do
            </h3>
            <ul className="space-y-3">
              {protocol.dos.map((item, index) => (
                <li key={index} className="flex gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Don'ts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-red-100"
          >
            <h3 className="text-lg font-heading font-bold text-red-700 mb-4 flex items-center gap-2">
              <XCircle className="w-6 h-6" />
              ❌ What Not To Do
            </h3>
            <ul className="space-y-3">
              {protocol.donts.map((item, index) => (
                <li key={index} className="flex gap-3 text-gray-700">
                  <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* When to Seek Help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 mb-6"
        >
          <h3 className="text-lg font-heading font-bold text-surface-dark mb-3">
            🏥 When to Seek Medical Help
          </h3>
          <p className="text-gray-700">{protocol.whenToSeekHelp}</p>
          {protocol.additionalNotes && (
            <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-sm text-blue-800">
                <strong>📝 Note:</strong> {protocol.additionalNotes}
              </p>
            </div>
          )}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center mb-6"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="tel:112"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emergency-red text-white font-semibold rounded-2xl hover:bg-emergency-darkred transition-all animate-pulse-emergency"
            >
              <Phone className="w-5 h-5" />
              Call Emergency: 112
            </a>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emergency-red font-semibold rounded-2xl border-2 border-emergency-red hover:bg-red-50 transition-all"
            >
              View All Emergency Contacts
            </Link>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <DisclaimerFooter />
        </motion.div>
      </div>
    </div>
  );
}