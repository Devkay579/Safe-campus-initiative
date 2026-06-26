'use client';

import { type Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, AlertTriangle } from 'lucide-react';

const categories = [
  {
    label: '01',
    title: 'Emergency Guides',
    desc: 'Fires, injuries, cardiac events',
    href: '/emergency',
    accent: '#DC2626',
  },
  {
    label: '02',
    title: 'Drug Safety',
    desc: 'Substance awareness & reporting',
    href: '/drug-safety',
    accent: '#2563EB',
  },
  {
    label: '03',
    title: 'Health Center',
    desc: 'On-campus medical services',
    href: '/health-center',
    accent: '#0D9488',
  },
];

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const line: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden pt-16">

      {/* Vertical red rule */}
      <div
        className="absolute left-0 top-0 h-full w-1.5 bg-emergency-red"
        aria-hidden="true"
      />

      {/* Faint institutional grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(#DC2626 1px, transparent 1px),
                            linear-gradient(90deg, #DC2626 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 py-16 sm:py-20">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-xs font-bold tracking-[0.22em] uppercase text-emergency-red mb-6 sm:mb-8 ml-0.5"
        >
          Federal University Oye-Ekiti &nbsp;·&nbsp; Safety Initiative
        </motion.p>

        <div className="grid lg:grid-cols-[1fr_360px] gap-10 lg:gap-16 items-start">

          {/* LEFT: Typographic headline */}
          <div>
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={line} className="overflow-hidden">
                <h1
                  className="font-heading font-extrabold leading-[0.92] tracking-tight text-surface-dark"
                  style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}
                >
                  Safe
                </h1>
              </motion.div>
              <motion.div variants={line} className="overflow-hidden">
                <h1
                  className="font-heading font-extrabold leading-[0.92] tracking-tight text-emergency-red"
                  style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}
                >
                  Campus
                </h1>
              </motion.div>
              <motion.div variants={line} className="overflow-hidden">
                <h1
                  className="font-heading font-extrabold leading-[0.92] tracking-tight text-surface-dark"
                  style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)' }}
                >
                  Initiative
                </h1>
              </motion.div>
            </motion.div>

            <motion.p
              variants={fadeIn}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.55 }}
              className="mt-6 sm:mt-8 text-base sm:text-lg text-gray-500 leading-relaxed max-w-lg"
            >
              QR-enabled emergency preparedness, first aid, and drug safety
              infrastructure across FUOYE, scan any campus QR code for instant
              guidance.
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.4 }}
              className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10"
            >
              <Link href="/emergency">
                <button className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-emergency-red text-white font-semibold text-sm tracking-wide rounded-xl hover:bg-red-700 transition-colors">
                  Emergency Guide
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/report">
                <button className="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-transparent text-emergency-red font-semibold text-sm tracking-wide rounded-xl border border-red-200 hover:border-emergency-red hover:bg-red-50 transition-colors">
                  <AlertTriangle className="w-4 h-4" />
                  Report Incident
                </button>
              </Link>
            </motion.div>

            {/* Mobile category list — shown below md */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.4 }}
              className="lg:hidden mt-10 border border-gray-100 rounded-2xl overflow-hidden"
            >
              {categories.map((cat, i) => (
                <Link key={cat.label} href={cat.href}>
                  <div
                    className={`group flex items-center gap-4 px-5 py-4 bg-white hover:bg-gray-50 active:bg-gray-100 transition-colors
                      ${i < categories.length - 1 ? 'border-b border-gray-100' : ''}`}
                  >
                    <div className="flex-shrink-0 flex flex-col items-center gap-1">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: cat.accent }}
                      />
                      <span className="text-[9px] font-bold text-gray-300 tracking-widest">{cat.label}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-heading font-bold text-surface-dark text-sm leading-tight">{cat.title}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{cat.desc}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors flex-shrink-0" />
                  </div>
                </Link>
              ))}
              <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-gray-400 font-medium">Available 24 / 7 via QR scan</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Desktop-only access panel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
            className="hidden lg:flex flex-col border border-gray-100 rounded-2xl overflow-hidden"
          >
            {categories.map((cat, i) => (
              <Link key={cat.label} href={cat.href}>
                <div
                  className={`group flex items-center gap-5 px-7 py-6 bg-white hover:bg-gray-50 transition-colors cursor-pointer
                    ${i < categories.length - 1 ? 'border-b border-gray-100' : ''}`}
                >
                  <div className="flex-shrink-0 flex flex-col items-center gap-1.5">
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: cat.accent }}
                    />
                    <span className="text-[10px] font-bold text-gray-300 tracking-widest">{cat.label}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-heading font-bold text-surface-dark text-base leading-tight">{cat.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{cat.desc}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-gray-600 transition-colors flex-shrink-0" />
                </div>
              </Link>
            ))}
            <div className="px-7 py-4 bg-gray-50 border-t border-gray-100 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-gray-400 font-medium">Available 24 / 7 via QR scan</span>
            </div>
          </motion.div>

        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 sm:mt-20 pt-6 sm:pt-8 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-400"
        >
          <span>Scan any QR code placed across campus facilities for instant access.</span>
          <span className="font-medium text-gray-300 tracking-widest uppercase">FUOYE · 2026</span>
        </motion.div>
      </div>
    </section>
  );
}