export type Severity = 'Low' | 'Moderate' | 'High' | 'Critical';

export interface EmergencyStep {
  title: string;
  steps: string[];
}

export interface EmergencyProtocol {
  id: string;
  title: string;
  slug: string;
  icon: string; // String key: 'Flame', 'Stethoscope', 'Snake', etc.
  severity: Severity;
  description: string;
  immediateActions: string[];
  dos: string[];
  donts: string[];
  whenToSeekHelp: string;
  additionalNotes?: string;
}

export const emergencyProtocols: EmergencyProtocol[] = [
  {
    id: 'fire-burns',
    title: 'Fire Outbreak & Burns',
    slug: 'fire-burns',
    icon: 'Flame',
    severity: 'Critical',
    description: 'Immediate response for fire emergencies and burn injuries on campus.',
    immediateActions: [
      'If your clothes catch fire: STOP where you are, DROP to the ground, and ROLL to smother the flames.',
      'Evacuate immediately via the nearest safe exit. Never use elevators during a fire.',
      'Stay low to the ground to avoid inhaling toxic smoke.',
    ],
    dos: [
      'Cool the burn immediately under cold, running tap water for at least 10–20 minutes.',
      'Remove jewelry or tight clothing near the burned area before swelling begins.',
      'Cover loosely with a clean, non-stick cloth or plastic wrap.',
      'Call emergency services immediately for severe burns.',
    ],
    donts: [
      'Never apply oil, grease, toothpaste, butter, or ice to a burn.',
      'Do not peel off clothing stuck to the burn.',
      'Do not break blisters.',
      'Do not use cotton wool or fluffy materials on the wound.',
    ],
    whenToSeekHelp:
      'Seek immediate medical attention for burns larger than the victim\'s palm, burns on the face/hands/feet/genitals, electrical burns, or if the victim is a child or elderly.',
    additionalNotes:
      'For chemical burns, flush with running water for at least 20 minutes. For electrical burns, ensure the power source is disconnected before approaching.',
  },
  {
    id: 'choking',
    title: 'Choking',
    slug: 'choking',
    icon: 'Stethoscope',   // StethoscopeIcon → Stethoscope
    severity: 'Critical',
    description: 'Emergency response for conscious and unconscious choking victims.',
    immediateActions: [
      'If the person is conscious: Stand behind them and lean them slightly forward.',
      'Give 5 sharp back blows between their shoulder blades using the heel of your hand.',
      'If unresolved, perform 5 abdominal thrusts (Heimlich maneuver): Wrap arms around their waist, place a fist just above the navel, and pull sharply inward and upward.',
      'Alternate 5 back blows and 5 abdominal thrusts until the object is expelled.',
      'If the person becomes unconscious, lay them flat on their back and transport them to the Phase 2 Health Center immediately.',
    ],
    dos: [
      'Encourage the person to cough forcefully if they can.',
      'Call for emergency help if the obstruction does not clear.',
      'If the person becomes unconscious, lay them flat and begin CPR if trained.',
    ],
    donts: [
      'Do not perform abdominal thrusts on pregnant women or infants under 1 year.',
      'Do not slap a choking person on the back if they are able to cough.',
      'Never put your fingers blindly into their mouth to remove an object.',
    ],
    whenToSeekHelp:
      'If the person becomes unconscious, if the obstruction cannot be cleared after several attempts, or if breathing does not return to normal after the object is expelled. Transport unconscious victims immediately to the Phase 2 Health Center.',
    additionalNotes:
      'For infants under 1 year, use 5 back blows followed by 5 chest thrusts (using two fingers on the breastbone). For pregnant women, use chest thrusts instead of abdominal thrusts.',
  },
  {
    id: 'snake-bite',
    title: 'Snake Bite',
    slug: 'snake-bite',
    icon: 'Snake',          // LineSquiggleIcon → Snake (the actual Lucide icon)
    severity: 'High',
    description: 'Critical first-aid response for snake bites on or near campus.',
    immediateActions: [
      'Move away from the snake\'s striking distance immediately.',
      'Stay calm and keep still to slow the spread of venom through the body.',
      'Keep the bitten limb completely still and immobilized at or below heart level.',
      'Remove rings, watches, or tight clothing near the bite area as severe swelling can happen fast.',
    ],
    dos: [
      'Clean the wound gently with water.',
      'Cover the bite with a dry, clean bandage.',
      'Note the time of the bite and any symptoms.',
      'Seek immediate medical evaluation at the Health Center.',
    ],
    donts: [
      'Never cut the wound or attempt to suck out venom.',
      'Do not apply a tight tourniquet.',
      'Do not apply ice or electric shock.',
      'Do not try to capture or kill the snake.',
      'Do not drink alcohol or caffeine.',
    ],
    whenToSeekHelp:
      'All snake bites require immediate medical evaluation. Even if symptoms seem mild, venom effects can be delayed. Transport the victim to the Phase 2 Health Center immediately.',
    additionalNotes:
      'If possible, note the snake\'s color and pattern for identification, but do not risk another bite. Keep the victim warm and reassured while transporting.',
  },
  {
    id: 'poisoning',
    title: 'Poisoning',
    slug: 'poisoning',
    icon: 'Skull',
    severity: 'Critical',
    description:
      'Emergency response for various types of poisoning including ingested, inhaled, and contact poisoning.',
    immediateActions: [
      'Identify what substance was taken, how much, and when if possible.',
      'For swallowed poison: Do NOT induce vomiting unless explicitly instructed by medical professionals.',
      'If the person is conscious, have them rinse their mouth with water.',
      'For inhaled poison: Move the victim to fresh air immediately.',
      'For skin/eye contact: Flush thoroughly with clean running water for at least 15–20 minutes.',
    ],
    dos: [
      'Call emergency services immediately.',
      'Keep the poison container or label for identification.',
      'Monitor breathing and consciousness.',
      'Place unconscious victims in the recovery position.',
    ],
    donts: [
      'Do not induce vomiting unless instructed by medical professionals.',
      'Do not give anything to drink unless instructed.',
      'Do not use syrup of ipecac.',
      'Do not neutralize acids with alkalis or vice versa.',
    ],
    whenToSeekHelp:
      'All suspected poisoning cases require immediate medical attention. Call 112 or proceed to the Health Center immediately.',
    additionalNotes:
      'Keep emergency numbers saved. For chemical exposure, use emergency eyewash stations if available in labs. Always read product labels before use.',
  },
  {
    id: 'heat-exhaustion',
    title: 'Heat Exhaustion',
    slug: 'heat-exhaustion',
    icon: 'Sun',
    severity: 'Moderate',
    description:
      'Response for heat exhaustion, common during sunny campus treks and outdoor activities.',
    immediateActions: [
      'Move the student to a cool, shaded area or air-conditioned room immediately.',
      'Loosen tight clothing and remove excess layers.',
      'Give cool water or an electrolyte drink to sip slowly (only if fully conscious).',
      'Apply cool, wet cloths to the forehead, neck, and underarms.',
    ],
    dos: [
      'Encourage slow sipping of cool fluids.',
      'Fan the person to promote cooling.',
      'Monitor for worsening symptoms.',
      'Rest for at least 24 hours after recovery.',
    ],
    donts: [
      'Do not give ice-cold drinks as they can cause stomach cramps.',
      'Do not leave the person alone.',
      'Do not give salt tablets.',
      'Do not ignore symptoms that worsen.',
    ],
    whenToSeekHelp:
      'If the person vomits, refuses to drink, loses consciousness, or symptoms worsen despite cooling measures, transport to the Health Center immediately. Heat exhaustion can progress to heat stroke.',
    additionalNotes:
      'Prevention: Stay hydrated, wear light-colored loose clothing, avoid peak sun hours (11am–3pm), and use umbrellas or hats when walking across campus.',
  },
  {
    id: 'fainting',
    title: 'Fainting',
    slug: 'fainting',
    icon: 'PersonStandingIcon',
    severity: 'Moderate',
    description: 'First-aid response for fainting (syncope) episodes on campus.',
    immediateActions: [
      'Lay the person flat on their back.',
      'Elevate their legs about 12 inches (30 cm) above heart level to restore blood flow to the brain.',
      'Loosen tight clothing including collars, belts, or ties.',
      'Ensure the area has plenty of fresh air; fan them and clear any crowding.',
    ],
    dos: [
      'Check for breathing and responsiveness.',
      'Keep the person lying down for at least 10–15 minutes after they wake.',
      'Offer water once they are fully conscious.',
      'Reassure them calmly.',
    ],
    donts: [
      'Do not splash cold water on their face.',
      'Do not try to sit them up immediately.',
      'Do not slap or shake them.',
      'Do not give anything to eat or drink until fully alert.',
    ],
    whenToSeekHelp:
      'If they do not regain consciousness within 1 minute, roll them into the recovery position and call for medical help. Also seek help if fainting recurs, occurs during exercise, or is accompanied by chest pain or irregular heartbeat.',
    additionalNotes:
      'Common triggers include dehydration, standing for long periods, sudden emotional stress, or low blood sugar. Recovery position: Roll them onto their side with top leg bent for stability.',
  },
  {
    id: 'asthma-attack',
    title: 'Asthma Attack',
    slug: 'asthma-attack',
    icon: 'Wind',
    severity: 'High',
    description: 'Emergency assistance for someone experiencing an asthma attack.',
    immediateActions: [
      'Help the person sit upright comfortably; do not let them lie down.',
      'Loosen tight clothing around their neck and chest.',
      'Assist them in using their reliever inhaler (usually blue) — give 2 to 4 puffs, waiting about 60 seconds between each puff.',
      'Calm and reassure them; anxiety can worsen respiratory distress.',
    ],
    dos: [
      'Encourage slow, deep breaths.',
      'Stay with the person and remain calm.',
      'Help them find a comfortable position (usually sitting slightly forward).',
      'Call for emergency help if no improvement.',
    ],
    donts: [
      'Do not leave the person alone.',
      'Do not make them lie down flat.',
      'Do not use someone else\'s inhaler unless it\'s an emergency.',
      'Do not hesitate to call for emergency help.',
    ],
    whenToSeekHelp:
      'If symptoms do not improve after 5–10 minutes, if they struggle to speak in full sentences, if their lips turn blue, or if they become exhausted, seek immediate medical care.',
    additionalNotes:
      'Signs of a severe attack: unable to complete sentences, rapid breathing, blue-tinged lips or fingers, and exhaustion. Always take asthma symptoms seriously.',
  },
  {
    id: 'sexual-assault',
    title: 'Sexual Assault Support',
    slug: 'sexual-assault',
    icon: 'Shield',
    severity: 'Critical',
    description:
      'Immediate support and guidance for sexual assault survivors. Preserving evidence and accessing care within 72 hours is vital.',
    immediateActions: [
      'Ensure immediate safety: Move the survivor to a safe, private location away from the perpetrator.',
      'Reassure them: "You are safe now. This was not your fault. I believe you."',
      'Preserve forensic evidence: Instruct the survivor NOT to bathe, shower, change clothes, brush teeth, or wash the area.',
      'If clothes must be changed, store the original clothing in a clean paper bag (not plastic).',
    ],
    dos: [
      'Believe and support the survivor without judgment.',
      'Accompany them to the Phase 2 Health Center or Moremi Clinic.',
      'Respect their choices about reporting.',
      'Offer to contact a trusted friend or family member.',
      'Ensure they receive medical attention within 72 hours.',
    ],
    donts: [
      'Never force the survivor to report to law enforcement.',
      'Do not question their account or imply blame.',
      'Do not clean up or disturb the scene.',
      'Do not pressure them to make decisions.',
      'Never share their story without explicit consent.',
    ],
    whenToSeekHelp:
      'Medical attention within 72 hours is vital for emergency contraception, STI prevention, and HIV Post-Exposure Prophylaxis (PEP). Proceed to the Health Center or Moremi Clinic immediately.',
    additionalNotes:
      'Moremi Clinic (Ekiti State Sexual Assault Referral Centre) provides free, confidential services. Contact: 07050752287 or 07039786904. All services are confidential and survivor-centered.',
  },
  {
    id: 'alcohol-overdose',
    title: 'Alcohol Poisoning / Substance Overdose',
    slug: 'alcohol-overdose',
    icon: 'Siren',
    severity: 'Critical',
    description:
      'Emergency response for suspected alcohol poisoning or substance overdose. This is a life-threatening condition.',
    immediateActions: [
      'Never leave the person alone to "sleep it off."',
      'Keep them sitting up if conscious.',
      'If unconscious or vomiting, roll them onto their side (recovery position) to prevent choking.',
      'Check breathing regularly — slow or irregular breathing is a critical warning sign.',
    ],
    dos: [
      'Call for emergency medical help immediately.',
      'Stay with the person at all times.',
      'Keep them warm with a blanket.',
      'Monitor consciousness and breathing continuously.',
    ],
    donts: [
      'Do not give coffee, cold showers, or food — these do not help and can be dangerous.',
      'Do not try to make them vomit.',
      'Do not let them walk around.',
      'Do not assume they will be fine after sleeping.',
    ],
    whenToSeekHelp:
      'Seek immediate medical help if: breathing is slow/irregular (less than 8 breaths per minute), skin is cold/clammy/pale/bluish, they cannot be woken up, or they are having seizures. Transport to the Phase 2 clinic immediately.',
    additionalNotes:
      'Critical signs of alcohol poisoning: confusion, vomiting, seizures, slow breathing, hypothermia, and unconsciousness. Even if the person stops drinking, alcohol continues to be absorbed. Time is critical.',
  },
  {
    id: 'sports-injuries',
    title: 'Sports Injuries & Sprains',
    slug: 'sports-injuries',
    icon: 'Dumbbell',
    severity: 'Low',
    description: 'First-aid using the R.I.C.E. method for sprains, strains, and minor sports injuries.',
    immediateActions: [
      'Rest: Stop the activity immediately and keep the injured limb still.',
      'Ice: Apply an ice pack wrapped in a cloth for 15–20 minutes to reduce swelling.',
      'Compression: Lightly wrap the area with an elastic bandage to support it.',
      'Elevate: Raise the injured limb above heart level whenever possible.',
    ],
    dos: [
      'Apply ice for 15–20 minutes every 2–3 hours for the first 48 hours.',
      'Use a proper elastic bandage for compression.',
      'Rest the injury for at least 24–48 hours.',
      'Seek medical evaluation if pain is severe or swelling persists.',
    ],
    donts: [
      'Never apply ice directly to skin — always wrap in a cloth.',
      'Do not apply heat in the first 48 hours.',
      'Do not massage the injured area.',
      'Do not continue playing or exercising with the injury.',
      'Do not wrap bandages too tightly.',
    ],
    whenToSeekHelp:
      'Seek medical help if: you cannot bear weight on the injured limb, there is visible deformity, numbness or tingling, severe pain, or no improvement after 48 hours of R.I.C.E.',
    additionalNotes:
      'The R.I.C.E. method is most effective when started immediately after the injury. After 48 hours, gentle movement and heat may be introduced if swelling has reduced. Prevent sports injuries with proper warm-up and stretching.',
  },
];

export const emergencyQuickList = emergencyProtocols.map(
  ({ id, title, slug, icon, severity, description }) => ({
    id,
    title,
    slug,
    icon,
    severity,
    description,
  }),
);