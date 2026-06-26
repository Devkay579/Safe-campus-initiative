'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Search,
  ArrowRight,
  Flame,
  Stethoscope,
  LineSquiggleIcon,
  Skull,
  Sun,
  
  Wind,
  Shield,
  Siren,
  Dumbbell,
  type LucideIcon,
  PersonStandingIcon,
} from 'lucide-react';
import { emergencyQuickList } from '@/data/emergencies';

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

export default function EmergencyCards() {
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const filteredEmergencies = emergencyQuickList.filter(
    (emergency) =>
      emergency.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emergency.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <section className="py-20 bg-surface-light" id="emergency-guides">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-red-50 text-emergency-red text-sm font-semibold rounded-full mb-4">
            Emergency Quick Access
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-surface-dark mb-4">
            Emergency Response Protocols
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select an emergency category below to view step-by-step first-aid instructions. All
            protocols are designed for immediate response while professional help is on the way.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto mb-10"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search emergencies... (e.g. burn, choking, snake bite)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emergency-red/30 focus:border-emergency-red transition-all shadow-sm"
            />
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
          {filteredEmergencies.map((emergency, index) => {
            const IconComponent = iconMap[emergency.icon] || Flame;
            return (
              <motion.div
                key={emergency.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredCard(emergency.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Link href={`/emergency/${emergency.slug}`}>
                  <motion.div
                    whileHover={{ scale: 1.03, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative h-full p-5 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden group ${
                      hoveredCard === emergency.id
                        ? 'border-emergency-red bg-white shadow-xl shadow-red-100'
                        : 'border-gray-200 bg-white shadow-sm hover:shadow-lg'
                    }`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-red-50 via-transparent to-transparent opacity-0 transition-opacity duration-300 ${
                        hoveredCard === emergency.id ? 'opacity-100' : ''
                      }`}
                    />
                    <div className="relative z-10">
                      <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
                        <IconComponent className="w-8 h-8 text-emergency-red" />
                      </div>
                      <h3 className="font-heading font-semibold text-surface-dark mb-1.5 group-hover:text-emergency-red transition-colors">
                        {emergency.title}
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                        {emergency.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                            emergency.severity === 'Critical'
                              ? 'bg-red-100 text-red-700'
                              : emergency.severity === 'High'
                                ? 'bg-orange-100 text-orange-700'
                                : emergency.severity === 'Moderate'
                                  ? 'bg-yellow-100 text-yellow-700'
                                  : 'bg-green-100 text-green-700'
                          }`}
                        >
                          {emergency.severity}
                        </span>
                        <ArrowRight
                          className={`w-4 h-4 transition-all duration-300 ${
                            hoveredCard === emergency.id
                              ? 'text-emergency-red translate-x-1'
                              : 'text-gray-400'
                          }`}
                        />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {filteredEmergencies.length === 0 && (
          <motion.div
            initial={false}
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">
              No emergency protocols found matching &quot;{searchTerm}&quot;
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-3 text-emergency-red font-semibold hover:underline"
            >
              Clear search
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}