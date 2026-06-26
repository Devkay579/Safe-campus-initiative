'use client';

import { AlertTriangle, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Disclaimer() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const dismissed = localStorage.getItem('disclaimer-dismissed');
    if (dismissed) setIsVisible(false);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('disclaimer-dismissed', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={false}                     // 👈 no hidden state – always visible
          animate={{ opacity: 1, y: 0 }}      // stays fully visible
          exit={{ opacity: 0, y: -20 }}        // exit animation still works
          className="bg-amber-50 border-b border-amber-200"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-amber-800 font-medium">
                  <strong>⚠️ IMPORTANT DISCLAIMER:</strong> The protocols listed on this hub are
                  strictly immediate first-aid emergency responses to stabilize a victim while
                  professional help is on the way. They <strong>do not replace formal medical treatment</strong>.
                </p>
                <p className="text-sm text-amber-700 mt-1">
                  <strong>🏥 For FUOYE Students:</strong> The University Health Center is located at
                  Phase 2, directly opposite the FUOYE Printing Press. Proceed there or transport the
                  victim immediately after providing initial first aid.
                </p>
              </div>
              <button
                onClick={handleDismiss}
                className="mt-2 sm:mt-0 sm:ml-auto p-1.5 rounded-lg hover:bg-amber-100 transition-colors flex-shrink-0"
                aria-label="Dismiss disclaimer"
              >
                <X className="w-4 h-4 text-amber-600" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function DisclaimerFooter() {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm text-amber-800 font-semibold mb-1">⚠️ IMPORTANT DISCLAIMER</p>
          <p className="text-sm text-amber-700">
            The information provided is intended only for immediate first-aid response while
            professional help is being sought. This platform does not replace professional medical
            evaluation, diagnosis, or treatment.
          </p>
        </div>
      </div>
    </div>
  );
}