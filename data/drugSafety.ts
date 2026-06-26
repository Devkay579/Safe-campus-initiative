export interface DrugSafetyTopic {
  id: string;
  title: string;
  icon: string; // now a string key: 'Pill', 'AlertTriangle', 'Ban', 'CheckCircle'
  description: string;
  keyPoints: string[];
  risks: string[];
  safePractices: string[];
}

export const drugSafetyTopics: DrugSafetyTopic[] = [
  {
    id: 'drug-misuse',
    title: 'Understanding Drug Misuse',
    icon: 'Pill',
    description:
      'Drug misuse occurs when medications are used in ways other than prescribed or intended. This includes taking someone else\'s prescription, taking higher doses than prescribed, or using medications for non-medical purposes.',
    keyPoints: [
      'Always follow prescribed dosage instructions exactly.',
      'Never share prescription medications with others.',
      'Complete the full course of prescribed antibiotics.',
      'Store medications in their original containers.',
    ],
    risks: [
      'Adverse drug reactions and side effects',
      'Drug interactions with other medications',
      'Development of drug resistance (especially antibiotics)',
      'Organ damage from incorrect dosing',
    ],
    safePractices: [
      'Consult a healthcare professional before taking any medication.',
      'Keep an updated list of all medications you take.',
      'Read medication labels and package inserts carefully.',
      'Dispose of expired or unused medications properly.',
    ],
  },
  {
    id: 'self-medication',
    title: 'Dangers of Self-Medication',
    icon: 'AlertTriangle',
    description:
      'Self-medication—taking drugs without professional consultation—is a common but dangerous practice among students. It can mask serious conditions, cause adverse reactions, and delay proper treatment.',
    keyPoints: [
      'Self-medication can mask symptoms of serious illnesses.',
      'OTC medications still carry risks and side effects.',
      'Antibiotics should NEVER be taken without a prescription.',
      'What works for a friend may be harmful to you.',
    ],
    risks: [
      'Incorrect self-diagnosis leading to wrong treatment',
      'Dangerous drug interactions',
      'Allergic reactions to unknown substances',
      'Antibiotic resistance from misuse',
      'Liver and kidney damage from painkiller overuse',
    ],
    safePractices: [
      'Visit the University Health Center for any health concerns.',
      'Never take antibiotics left over from a previous illness.',
      'Report all medications (including herbal) to healthcare providers.',
      'Seek professional advice before combining any medications.',
    ],
  },
  {
    id: 'drug-abuse',
    title: 'Recognizing Drug Abuse',
    icon: 'Ban',
    description:
      'Drug abuse involves the intentional use of substances for non-medical purposes, leading to physical, psychological, and social harm. Early recognition and intervention are crucial.',
    keyPoints: [
      'Drug abuse affects academic performance and relationships.',
      'It can lead to addiction, a chronic brain disease.',
      'Common signs include behavioral changes and declining grades.',
      'Help is available—reach out without shame.',
    ],
    risks: [
      'Addiction and physical dependence',
      'Mental health disorders (anxiety, depression, psychosis)',
      'Financial problems and legal consequences',
      'Overdose and death',
      'Increased risk of infectious diseases',
    ],
    safePractices: [
      'Seek help from the University Health Center or counseling services.',
      'Avoid social circles that promote substance abuse.',
      'Learn healthy stress management techniques.',
      'Support friends showing signs of substance abuse.',
    ],
  },
  {
    id: 'safe-practices',
    title: 'Safe Medication Practices',
    icon: 'CheckCircle',
    description:
      'Practicing medication safety protects your health and prevents complications. These guidelines apply to all medications—prescription, over-the-counter, and herbal supplements.',
    keyPoints: [
      'Always inform your doctor of all medications you take.',
      'Follow storage instructions on medication labels.',
      'Check expiration dates regularly.',
      'Never mix medications with alcohol without checking.',
    ],
    risks: [
      'Expired medications may lose effectiveness or become toxic.',
      'Improper storage can degrade medications.',
      'Combining alcohol with certain drugs can be fatal.',
      'Skipping doses reduces treatment effectiveness.',
    ],
    safePractices: [
      'Use a pill organizer to manage multiple medications.',
      'Set reminders for medication schedules.',
      'Keep medications in a cool, dry place away from sunlight.',
      'Return unused medications to the pharmacy for safe disposal.',
      'Always read the patient information leaflet.',
    ],
  },
];