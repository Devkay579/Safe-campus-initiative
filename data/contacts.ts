export interface EmergencyContact {
  id: string;
  name: string;
  number: string;
  displayNumber: string;
  description: string;
  icon: string;
  category: 'national' | 'state' | 'campus' | 'support';
  color: string;
}

export const emergencyContacts: EmergencyContact[] = [
  {
    id: 'national-emergency',
    name: 'National Emergency Toll-Free Line',
    number: 'tel:112',
    displayNumber: '112',
    description: 'Connects to Police, Fire, and Medical Dispatch across all networks in Nigeria.',
    icon: '📞',
    category: 'national',
    color: 'bg-emergency-red',
  },
  {
    id: 'frsc',
    name: 'Federal Road Safety Corps (FRSC)',
    number: 'tel:122',
    displayNumber: '122',
    description: 'For road accidents and highway emergencies nationwide.',
    icon: '🚗',
    category: 'national',
    color: 'bg-medical-blue',
  },
  {
    id: 'fire-service-ikole',
    name: 'Ekiti State Fire Service (Ikole/Oye Axis)',
    number: 'tel:07069582273',
    displayNumber: '07069582273',
    description: 'Fire service for Ikole and Oye axis zone. Alternate: 08057651948',
    icon: '🚒',
    category: 'state',
    color: 'bg-orange-600',
  },
  {
    id: 'fire-service-ado',
    name: 'Ekiti State Fire Service HQ (Ado-Ekiti)',
    number: 'tel:08030790296',
    displayNumber: '08030790296',
    description: 'Fire service headquarters in Ado-Ekiti. Alternate: 08057651977',
    icon: '🚒',
    category: 'state',
    color: 'bg-orange-600',
  },
  {
    id: 'moremi-clinic',
    name: 'Moremi Clinic (Sexual Assault Referral Centre)',
    number: 'tel:07050752287',
    displayNumber: '07050752287',
    description: 'Ekiti State Sexual Assault Referral Centre providing free, confidential services. Alternate: 07039786904',
    icon: '🛡️',
    category: 'support',
    color: 'bg-purple-600',
  },
  {
    id: 'rrs',
    name: 'Ekiti State Rapid Response Squad (RRS)',
    number: 'tel:08100567264',
    displayNumber: '08100567264',
    description: 'Rapid response for security emergencies. Alternate: 07031620186',
    icon: '🚔',
    category: 'state',
    color: 'bg-safety-teal',
  },
  {
    id: 'health-center',
    name: 'FUOYE University Health Center',
    number: 'tel:',
    displayNumber: 'Visit Phase 2',
    description: 'Located at Phase 2, directly opposite the FUOYE Printing Press. Proceed there for all medical emergencies.',
    icon: '🏥',
    category: 'campus',
    color: 'bg-green-600',
  },
];

export const contactsByCategory = {
  national: emergencyContacts.filter(c => c.category === 'national'),
  state: emergencyContacts.filter(c => c.category === 'state'),
  campus: emergencyContacts.filter(c => c.category === 'campus'),
  support: emergencyContacts.filter(c => c.category === 'support'),
};