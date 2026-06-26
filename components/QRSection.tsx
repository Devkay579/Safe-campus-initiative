'use client';

import { motion } from 'framer-motion';
import { QrCode, Smartphone, MapPin } from 'lucide-react';

const locations = [
  'Student Hostels',
  'Lecture Halls',
  'University Library',
  'Health Center',
  'Sports Facilities',
  'Cafeteria',
  'Admin Buildings',
];

export default function QRSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-teal-50 text-safety-teal text-sm font-semibold rounded-full mb-4">
              Smart QR Infrastructure
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-surface-dark mb-4">
              Instant Access via QR Codes
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              QR code stickers are strategically placed across the FUOYE campus. Simply scan any code
              with your smartphone camera to instantly access all emergency protocols, contacts, and
              health center information — no login required.
            </p>
            <div className="space-y-3">
              {locations.map((location, index) => (
                <motion.div
                  key={location}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 text-gray-700"
                >
                  <MapPin className="w-4 h-4 text-safety-teal flex-shrink-0" />
                  <span>{location}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-[500px] bg-surface-dark rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden flex flex-col">
                  <div className="bg-emergency-red h-12 flex items-center justify-center text-white text-xs font-semibold">
                    🚨 Emergency Access
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center p-6">
                    <QrCode className="w-24 h-24 text-surface-dark mb-4" />
                    <p className="text-xs text-center text-gray-500 font-medium">Scan QR Code</p>
                    <p className="text-xs text-center text-gray-400 mt-1">for instant emergency access</p>
                    <div className="mt-4 space-y-2 w-full">
                      <div className="h-2 bg-emergency-red rounded-full" />
                      <div className="h-2 bg-medical-blue rounded-full w-3/4" />
                      <div className="h-2 bg-safety-teal rounded-full w-1/2" />
                    </div>
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 shadow-lg"
              >
                <Smartphone className="w-8 h-8 text-safety-teal" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}