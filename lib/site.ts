// One set of facts for the whole site. Every number here comes from the live
// getfitathleticclub.com pages (pulled Nov 17, 2026). Change it here, it changes everywhere.

const LEGACY = 'https://getfitathleticclub.com';
const IMG = 'https://i0.wp.com/getfitathleticclub.com/wp-content/uploads';

/** Photon-resized copy of a photo already in the club's WordPress media library. */
const photo = (path: string, w = 1200) => `${IMG}/${path}?w=${w}&ssl=1`;

export const site = {
  name: 'Get Fit Athletic Club',
  short: 'Get Fit',
  city: 'Indianapolis',
  tagline: 'Where you belong',
  description:
    'Your gym in Indianapolis. Start Premier for $1 enrollment and pay no dues for 30 days. Pickleball, racquetball, cardio theatre, classes and personal training.',
  phone: '(317) 357-4653',
  phoneHref: 'tel:+13173574653',
  address: { street: '7140 E Washington St.', cityLine: 'Indianapolis, IN 46219' },
  mapHref: 'https://www.google.com/maps/search/?api=1&query=7140+E+Washington+St+Indianapolis+IN+46219',
  social: {
    facebook: 'https://www.facebook.com/getfitathleticclubindianapolis',
    instagram: 'https://www.instagram.com/getfitindy/',
  },
};

export const links = {
  joinPremier: `${LEGACY}/join-now/?dc=indianapolis-premier`,
  joinPremierYearly: `${LEGACY}/join-now/?dc=indianapolis-premier-yearly`,
  joinBasic: `${LEGACY}/join-now/?dc=indianapolis-basic`,
  joinBasicYearly: `${LEGACY}/join-now/?dc=indianapolis-basic-yearly`,
  trialPage: `${LEGACY}/trial-pass/`,
  ptSignup: `${LEGACY}/personal-training-signup/`,
  schedule: `${LEGACY}/indianapolis-class-schedule/`,
  blog: `${LEGACY}/blog/`,
  careers: `${LEGACY}/careers/`,
  privacy: `${LEGACY}/privacy-policy/`,
  terms: `${LEGACY}/terms-of-service/`,
  contact: `${LEGACY}/contact-us/`,
};

export const nav = [
  { label: 'Amenities', href: '#amenities' },
  { label: 'Classes', href: '#classes' },
  { label: 'Training', href: '#training' },
  { label: 'Results', href: '#results' },
  { label: 'Pricing', href: '#pricing' },
];

export const offer = {
  eyebrow: 'Limited-time Premier offer',
  enrollment: '$1',
  line: '$1 enrollment. No dues for 30 days.',
  proof: ['Month to month', 'No contract', '24-hour access Mon to Thu'],
};

export const images = {
  hero: photo('2017/09/GetFit_PersonalTraining_1.jpg', 2000),
  club: photo('2017/09/GETFIT_Indianapolis_26.jpg', 1100),
  training: photo('2017/09/GetFit_PersonalTraining_1.jpg', 1400),
};

export const amenities = [
  {
    icon: 'film',
    title: 'Cardio theatre',
    body: 'Watch a full movie on the big screen while you put in your miles. You will forget you are on a treadmill.',
  },
  {
    icon: 'trophy',
    title: 'Pickleball',
    body: 'Grab a paddle and a partner and play indoors all year. New to it? You will pick it up in one game.',
  },
  {
    icon: 'target',
    title: 'Racquetball',
    body: 'Take a court whenever you want one. Play singles, doubles, or just you against the wall.',
  },
  {
    icon: 'users',
    title: 'Group fitness',
    body: 'Find your class and your people. Zumba, yoga, Full Body Blast and more, with instructors who learn your name.',
  },
  {
    icon: 'sun',
    title: 'Tanning',
    body: 'Finish your workout with a tan. Premium beds are unlimited with your Premier membership.',
  },
  {
    icon: 'clock',
    title: '24-hour access',
    body: 'Train on your schedule, not ours. Premier gets you in around the clock, Monday through Thursday.',
  },
] as const;

export const classes = [
  {
    name: 'Zumba®',
    body: 'Dance your cardio. Loud music, big energy, and nobody cares if you miss a step.',
    img: photo('2017/09/GetFit_Zumba_GroupFitness_1.jpg'),
  },
  {
    name: 'Full Body Blast',
    body: 'Hit every major muscle group in one session. You walk out knowing you did the work.',
    img: photo('2017/09/GETFIT_Group-Classes_1.jpg'),
  },
  {
    name: 'Yoga',
    body: 'Slow down, breathe, stretch out. Your body loosens up and your head gets quieter.',
    img: photo('2017/09/GETFIT_Group-Classes_5.jpg'),
  },
  {
    name: 'Zumba® Strong',
    body: 'Push yourself to the beat. Bodyweight moves and plyometrics that leave you spent in the best way.',
    img: photo('2017/09/GetFit_Krav_Group-Fitness_1.jpg'),
  },
  {
    name: 'Hula Honey',
    body: 'Work your core, hips and legs in a hula-inspired dance workout you will smile through.',
    img: photo('2017/09/GETFIT_Group-Classes_6.jpg'),
  },
  {
    name: 'Zumba® Toning',
    body: 'The Zumba you love, with light weights in your hands for definition.',
    img: photo('2017/09/GETFIT_Group-Classes_8.jpg'),
  },
  {
    name: 'Aerobic Dance',
    body: 'Build your stamina and coordination with rhythmic cardio set to upbeat music.',
    img: photo('2017/09/GetFit_Pilates_Group-Fitness_2.jpg'),
  },
  {
    name: 'SilverSneakers®',
    body: 'Keep your strength and range of motion for everyday life, with music that keeps you moving.',
    img: photo('2017/09/GETFIT_Group-Classes_7.jpg'),
  },
];

export const premierPerks = [
  { title: 'Bring a friend', body: 'Your guest trains free, every workout.' },
  { title: 'Unlimited tanning', body: 'Use the premium beds whenever you want.' },
  { title: 'Every class', body: 'Take as many classes as you like.' },
  { title: '24-hour access', body: 'Get in around the clock, Monday to Thursday.' },
  { title: 'Cardio theatre', body: 'Watch a movie while you train.' },
  { title: 'Racquetball', body: 'Your court time is included.' },
  { title: 'Training studio', body: 'Use the functional training studio any time.' },
  { title: "Women's area", body: 'A workout space just for women.' },
];

export const training = {
  programs: [
    {
      tag: 'Complimentary',
      strike: '$50',
      title: 'Smart Start',
      body: 'Sit down with a fitness coach for an hour, set your goals and leave with your game plan. It is free when you join.',
      points: ['One hour on your goals', 'Your personal road map', 'Free with your membership'],
      cta: 'Claim my free session',
      featured: false,
    },
    {
      tag: '$199',
      strike: '',
      title: 'Kickstarter',
      body: 'Our most popular program. You get four coaching sessions, plus two more on us.',
      points: ['Six sessions, all yours', 'Your goals and game plan in session one', 'Your Smart Start included'],
      cta: 'Start my Kickstarter',
      featured: true,
    },
  ],
  trainers: [
    { name: 'Travis', img: photo('2023/01/Travis.jpg', 600) },
    { name: 'Mr. Scott', img: photo('2023/01/Mr-Scott.jpg', 600) },
    { name: 'Erick', img: photo('2023/01/Erik.jpg', 600) },
    { name: 'Bryan', img: photo('2023/01/Bryan.jpg', 600) },
    { name: 'Jordan', img: photo('2023/01/Jordan.jpg', 600) },
  ],
};

// Member-reported results as published on the club's personal training page.
export const results = {
  stats: [
    { value: 200, unit: 'lbs', label: 'lost by one member, along with 27% body fat' },
    { value: 130, unit: 'lbs', label: 'lost in 7 months' },
    { value: 118, unit: 'lbs', label: 'lost with personal training' },
    { value: 100, unit: 'lbs', label: 'lost in 12 months' },
  ],
  stories: [
    {
      headline: 'Down 98 lbs.',
      body: 'Andy lost 98 pounds working with a Get Fit personal trainer.',
      name: 'Andy Critz',
    },
    {
      headline: 'Back to 140 lbs.',
      body: 'After a 2009 spinal cord injury, Chris went from 103 pounds back to 140 training at Get Fit.',
      name: 'Chris Campbell',
    },
    {
      headline: 'Training since 2015.',
      body: 'Theresa has been a Get Fit personal training client since March 2015.',
      name: 'Theresa Collins',
    },
  ],
  disclaimer: 'Member-reported results. Individual results vary.',
};

export const plans = [
  {
    id: 'premier',
    name: 'Premier',
    badge: 'Most popular',
    featured: true,
    monthly: { price: '$34.95', per: '/month', note: '$1 enrollment. No dues for 30 days.', href: links.joinPremier },
    prepaid: { price: '$349', per: 'for 18 months', note: 'Pay for 12 months, get 6 free.', href: links.joinPremierYearly },
    blurb: 'You get the whole club, and your friend trains free.',
    features: [
      'Bring your friend free, every workout',
      '24-hour access Monday to Thursday',
      'Unlimited group fitness classes',
      'Unlimited tanning',
      'Racquetball and cardio theatre',
      'Functional training studio',
      "Women's-only workout area",
      'All Get Fit locations',
      'Your Smart Start session with a coach',
    ],
    cta: 'Start my Premier for $1',
  },
  {
    id: 'basic',
    name: 'Basic',
    badge: '',
    featured: false,
    monthly: { price: '$19.95', per: '/month', note: '$89 enrollment.', href: links.joinBasic },
    prepaid: { price: '$249', per: 'for 18 months', note: 'Pay for 12 months, get 6 free.', href: links.joinBasicYearly },
    blurb: 'Everything you need to train, nothing you do not.',
    features: ['All cardio and weight equipment', 'Your Smart Start session with a coach'],
    cta: 'Start my Basic',
  },
];

export const pricingFinePrint =
  'Monthly memberships are month to month with an easy 30-day cancellation notice and a $10 processing fee. A $49 annual rate guarantee fee is charged 60 days after joining. EFT on file is required for all memberships.';

export const faqs = [
  {
    q: 'Am I signing a contract?',
    a: 'No. You stay month to month. If you ever want to cancel, give 30 days notice. There is a $10 processing fee.',
  },
  {
    q: 'What do I get with the $1 offer?',
    a: 'You get Premier membership, you pay $1 to enroll, and you pay no dues for your first 30 days. After that it is $34.95 a month. The offer is for a limited time.',
  },
  {
    q: 'Should I pick Basic or Premier?',
    a: 'If you only want the cardio and weight equipment, Basic covers you. Premier adds unlimited classes, tanning, racquetball, the cardio theatre, the functional training studio, 24-hour access Monday to Thursday, every Get Fit location, and a free guest every workout.',
  },
  {
    q: 'Will I pay any other fees?',
    a: 'One. You pay a $49 annual rate guarantee fee 60 days after you join. Every membership also needs EFT on file.',
  },
  {
    q: 'Can I try the club before I join?',
    a: 'Yes. Your free 3-day pass gives you the full Get Fit experience. Fill out the form on this page and we will get your pass to you.',
  },
  {
    q: 'What is Smart Start?',
    a: 'Your free one-hour session with a fitness coach. You set your goals, build your plan, and leave knowing exactly what to do next.',
  },
  {
    q: 'When can I get in 24 hours a day?',
    a: 'With Premier you can get in around the clock, Monday through Thursday. The club is open every day. Call (317) 357-4653 for current staffed hours.',
  },
];

export const footerLinks = [
  {
    heading: 'The club',
    items: [
      { label: 'Amenities', href: '#amenities' },
      { label: 'Classes', href: '#classes' },
      { label: 'Personal training', href: '#training' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  {
    heading: 'Members',
    items: [
      { label: 'Class schedule', href: links.schedule },
      { label: 'Blog', href: links.blog },
      { label: 'Contact us', href: links.contact },
      { label: 'Careers', href: links.careers },
    ],
  },
  {
    heading: 'Legal',
    items: [
      { label: 'Privacy policy', href: links.privacy },
      { label: 'Terms of service', href: links.terms },
    ],
  },
];
