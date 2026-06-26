'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Copy, Share2, Check } from 'lucide-react';
import type { EmergencyContact } from '@/data/contacts';

interface ContactCardProps {
  contact: EmergencyContact;
  index: number;
}

export default function ContactCard({ contact, index }: ContactCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!contact.displayNumber || contact.displayNumber === 'Visit Phase 2') return;
    await navigator.clipboard.writeText(contact.displayNumber.replace(/\s/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: contact.name,
        text: `${contact.name}: ${contact.displayNumber}`,
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all"
    >
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 ${contact.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
          <span className="text-2xl">{contact.icon}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-heading font-semibold text-surface-dark mb-1">{contact.name}</h3>
          <p className="text-sm text-gray-500 mb-3">{contact.description}</p>
          <div className="flex items-center gap-2 flex-wrap">
            {contact.displayNumber && contact.displayNumber !== 'Visit Phase 2' ? (
              <a
                href={contact.number}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-emergency-red text-white text-sm font-semibold rounded-xl hover:bg-emergency-darkred transition-all"
              >
                <Phone className="w-4 h-4" />
                {contact.displayNumber}
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-xl">
                🏥 {contact.displayNumber}
              </span>
            )}
            {contact.displayNumber && contact.displayNumber !== 'Visit Phase 2' && (
              <>
                <button
                  onClick={handleCopy}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Copy number"
                >
                  {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-gray-600" />}
                </button>
                <button
                  onClick={handleShare}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Share contact"
                >
                  <Share2 className="w-4 h-4 text-gray-600" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}