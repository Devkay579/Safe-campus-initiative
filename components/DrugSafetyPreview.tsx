'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Pill, AlertTriangle, Ban, CheckCircle, type LucideIcon } from 'lucide-react';
import { drugSafetyTopics } from '@/data/drugSafety';

// Icon mapping for drug safety topics
const iconMap: Record<string, LucideIcon> = {
  Pill,
  AlertTriangle,
  Ban,
  CheckCircle,
};

export default function DrugSafetyPreview() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="py-20 bg-surface-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={mounted ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-medical-blue text-sm font-semibold rounded-full mb-4">
            Drug Safety Awareness
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-surface-dark mb-4">
            Drug Safety Education
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn about safe medication practices, the dangers of self-medication, and how to recognize substance abuse.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {drugSafetyTopics.map((topic, index) => {
            const IconComponent = iconMap[topic.icon] || Pill; // fallback
            return (
              <motion.div
                key={topic.id}
                initial={mounted ? { opacity: 0, y: 20 } : false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="mb-4">
                  <IconComponent className="w-8 h-8 text-medical-blue" />
                </div>
                <h3 className="font-heading font-semibold text-surface-dark mb-2">{topic.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-3">{topic.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={mounted ? { opacity: 0 } : false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/drug-safety"
            className="inline-flex items-center gap-2 px-6 py-3 bg-medical-blue text-white font-semibold rounded-xl hover:bg-medical-darkblue transition-all"
          >
            <Pill className="w-5 h-5" />
            Explore Drug Safety Guide
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}