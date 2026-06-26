'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-br from-emergency-red to-emergency-darkred">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
            <AlertTriangle className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-semibold">Need Help?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Report a Situation
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-2xl mx-auto">
            If you&apos;re experiencing an emergency, safety concern, or need to report an incident,
            use the button below to access our confidential reporting form.
          </p>
          <Link href="/report" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-emergency-red font-bold rounded-2xl hover:bg-red-50 transition-all shadow-lg shadow-red-900/30"
            >
              📋 Open Report Form
            </motion.button>
          </Link>
          <p className="text-red-200 text-sm mt-4">All submissions are confidential and handled with care</p>
        </motion.div>
      </div>
    </section>
  );
}