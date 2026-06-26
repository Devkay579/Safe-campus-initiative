'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, Phone, QrCode, Clock } from 'lucide-react';

const stats = [
  { icon: BookOpen, value: 10, suffix: '+', label: 'Emergency Protocols', color: 'text-emergency-red' },
  { icon: Phone, value: 7, suffix: '', label: 'Emergency Contacts', color: 'text-medical-blue' },
  { icon: QrCode, value: 100, suffix: '%', label: 'QR Enabled Access', color: 'text-safety-teal' },
  { icon: Clock, value: 24, suffix: '/7', label: 'Information Availability', color: 'text-purple-600' },
];

function AnimatedCounter({ target, suffix, isInView }: { target: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target, isInView]);

  return <span>{count}{suffix}</span>;
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className={`w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center ${stat.color} bg-current/10`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className={`text-3xl md:text-4xl font-heading font-bold ${stat.color} mb-1`}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} isInView={isInView} />
              </div>
              <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}