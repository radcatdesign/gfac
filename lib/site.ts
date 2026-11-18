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
    'Get Fit Athletic Club in Indianapolis. Premier membership for $1 enrollment and no dues for 30 days. Pickleball, racquetball, cardio theatre, group fitness and personal training.',
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
    body: 'A full movie on the big screen while you put in the miles. The treadmill has never gone faster.',
  },
  {
    icon: 'trophy',
    title: 'Pickleball',
    body: 'The newest addition to the club. Grab a paddle, bring a partner, play indoors all year.',
  },
  {
    icon: 'target',
    title: 'Racquetball',
    body: 'Multiple courts, ready when you are. Singles, doubles, or just you against the wall.',
  },
  {
    icon: 'users',
    title: 'Group fitness',
    body: 'Zumba, yoga, Full Body Blast and more, led by instructors who know your name.',
  },
  {
    icon: 'sun',
    title: 'Tanning',
    body: 'Premium tanning beds, unlimited with a Premier membership.',
  },
  {
    icon: 'clock',
    title: '24-hour access',
    body: 'Open every day, with round-the-clock access Monday through Thursday for Premier members.',
  },
] as const;

export const classes = [
  {
    name: 'Zumba®',
    body: 'Latin-inspired dance cardio. Loud music, big energy, zero pressure to get the steps right.',
    img: photo('2017/09/GetFit_Zumba_GroupFitness_1.jpg'),
  },
  {
    name: 'Full Body Blast',
    body: 'Strength, cardio and core in one session. Every major muscle group, no wasted minutes.',
    img: photo('2017/09/GETFIT_Group-Classes_1.jpg'),
  },
  {
    name: 'Yoga',
    body: 'Breath, posture and a little quiet. Good for flexibility, better for your head.',
    img: photo('2017/09/GETFIT_Group-Classes_5.jpg'),
  },
  {
    name: 'Zumba® Strong',
    body: 'Bodyweight moves and plyometrics synced to the beat. High intensity, full body.',
    img: photo('2017/09/GetFit_Krav_Group-Fitness_1.jpg'),
  },
  {
    name: 'Hula Honey',
    body: 'A hula-inspired dance workout that works your core, hips and legs.',
    img: photo('2017/09/GETFIT_Group-Classes_6.jpg'),
  },
  {
    name: 'Zumba® Toning',
    body: 'The Zumba you know, with light weights added for muscle definition.',
    img: photo('2017/09/GETFIT_Group-Classes_8.jpg'),
  },
  {
    name: 'Aerobic Dance',
    body: 'Rhythmic cardio set to upbeat music. Builds stamina and coordination.',
    img: photo('2017/09/GetFit_Pilates_Group-Fitness_2.jpg'),
  },
  {
    name: 'SilverSneakers®',
    body: 'Music-driven movement that builds strength and range of motion for everyday life.',
    img: photo('2017/09/GETFIT_Group-Classes_7.jpg'),
  },
];

export const premierPerks = [
  { title: 'Bring a friend', body: 'A guest, free, every single workout.' },
  { title: 'Unlimited tanning', body: 'Premium beds whenever you want them.' },
  { title: 'Every class', body: 'Unlimited group fitness, all week.' },
  { title: '24-hour access', body: 'Around the clock, Monday to Thursday.' },
  { title: 'Cardio theatre', body: 'Movies on the big screen while you train.' },
  { title: 'Racquetball', body: 'Court access is part of the plan.' },
  { title: 'Training studio', body: 'Unlimited use of the functional training studio.' },
  { title: "Women's area", body: 'A women-only workout space.' },
];

export const training = {
  programs: [
    {
      tag: 'Complimentary',
      strike: '$50',
      title: 'Smart Start',
      body: 'One hour with a fitness coach to set goals and build your game plan. Free for every new member.',
      points: ['One-hour goal-setting session', 'A personal road map', 'Included when you join'],
      cta: 'Claim your session',
      featured: false,
    },
    {
      tag: '$199',
      strike: '',
      title: 'Kickstarter',
      body: 'Our most popular program. Four coaching sessions, plus two more on us.',
      points: ['Six sessions total', 'Goals and game plan in session one', 'Smart Start included'],
      cta: 'Start the Kickstarter',
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
    blurb: 'The whole club, plus a guest every time you train.',
    features: [
      'Bring a friend free, every workout',
      '24-hour access Monday to Thursday',
      'Unlimited group fitness classes',
      'Unlimited tanning',
      'Racquetball and cardio theatre',
      'Functional training studio',
      "Women's-only workout area",
      'All Get Fit locations',
      'Smart Start session with a coach',
    ],
    cta: 'Join Premier for $1',
  },
  {
    id: 'basic',
    name: 'Basic',
    badge: '',
    featured: false,
    monthly: { price: '$19.95', per: '/month', note: '$89 enrollment.', href: links.joinBasic },
    prepaid: { price: '$249', per: 'for 18 months', note: 'Pay for 12 months, get 6 free.', href: links.joinBasicYearly },
    blurb: 'Everything you need to train, nothing you do not.',
    features: ['All cardio and weight equipment', 'Smart Start session with a coach'],
    cta: 'Join Basic',
  },
];

export const pricingFinePrint =
  'Monthly memberships are month to month with an easy 30-day cancellation notice and a $10 processing fee. A $49 annual rate guarantee fee is charged 60 days after joining. EFT on file is required for all memberships.';

export const faqs = [
  {
    q: 'Is there a contract?',
    a: 'No. Monthly memberships are month to month. To cancel, give 30 days notice. There is a $10 processing fee.',
  },
  {
    q: 'What do I get with the $1 offer?',
    a: 'Premier membership with a $1 enrollment fee and no dues for your first 30 days. After that it is $34.95 a month. The offer is for a limited time.',
  },
  {
    q: 'What is the difference between Basic and Premier?',
    a: 'Basic covers all cardio and weight equipment. Premier adds unlimited classes, tanning, racquetball, the cardio theatre, the functional training studio, 24-hour access Monday to Thursday, every Get Fit location, and a free guest every workout.',
  },
  {
    q: 'Are there any other fees?',
    a: 'A $49 annual rate guarantee fee is charged 60 days after you join. EFT on file is required for all memberships.',
  },
  {
    q: 'Can I try the club before I join?',
    a: 'Yes. The free 3-day pass gives you the full Get Fit experience. Fill out the form on this page and we will get your pass to you.',
  },
  {
    q: 'What is Smart Start?',
    a: 'A free one-hour session with a fitness coach for every new member. You set goals, build a plan, and leave knowing exactly what to do next.',
  },
  {
    q: 'When is the club open 24 hours?',
    a: 'Premier members have 24-hour access Monday through Thursday. The club is open every day. Call (317) 357-4653 for current staffed hours.',
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
