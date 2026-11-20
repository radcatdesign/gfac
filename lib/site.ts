// One set of facts for the whole site. Every number here comes from the live
// getfitathleticclub.com pages (pulled Nov 17, 2026). Change it here, it changes everywhere.

const LEGACY = 'https://getfitathleticclub.com';
const IMG = 'https://i0.wp.com/getfitathleticclub.com/wp-content/uploads';

/** Site photos generated for the redesign, in public/photos. BASE keeps them working under /gfac on GitHub Pages. */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';
const local = (name: string) => `${BASE}/photos/${name}.webp`;

/** Photon-resized copy of a photo in the club's WordPress media library. Only the real trainer headshots still use this. */
const photo = (path: string, w = 1200) => `${IMG}/${path}?w=${w}&ssl=1`;

export const site = {
  name: 'Get Fit Athletic Club',
  short: 'Get Fit',
  city: 'Indianapolis',
  tagline: 'Where you belong',
  description:
    'Make this the year you hit your goal. Join Get Fit Athletic Club in Indianapolis for $1 enrollment and no dues for 30 days. Pickleball, racquetball, cardio theatre, classes and personal training.',
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
  hero: local('hero'),
  club: local('club'),
};

export const amenities = [
  {
    icon: 'film',
    title: 'Cardio theatre',
    body: 'Put in your miles with a movie on the big screen. The minutes go faster when you are not watching the clock.',
  },
  {
    icon: 'trophy',
    title: 'Pickleball',
    body: 'Cardio that feels like play. Grab a paddle, bring a partner and stay on your goal without counting minutes.',
  },
  {
    icon: 'target',
    title: 'Racquetball',
    body: 'Burn through a match on a court of your own. You will sweat more than you planned to.',
  },
  {
    icon: 'users',
    title: 'Group fitness',
    body: 'Show up for the class and let the room carry you through it. Zumba, yoga, Full Body Blast and more.',
  },
  {
    icon: 'sun',
    title: 'Tanning',
    body: 'Reward the work. Premium beds are unlimited with your Premier membership.',
  },
  {
    icon: 'clock',
    title: '24-hour access',
    body: 'No excuse left. Premier gets you in around the clock, Monday through Thursday.',
  },
] as const;

export const classes = [
  {
    name: 'Zumba®',
    body: 'Dance your cardio. Loud music, big energy, and nobody cares if you miss a step.',
    img: local('class-zumba'),
  },
  {
    name: 'Full Body Blast',
    body: 'Hit every major muscle group in one session. You walk out knowing you did the work.',
    img: local('class-full-body-blast'),
  },
  {
    name: 'Yoga',
    body: 'Slow down, breathe, stretch out. Your body loosens up and your head gets quieter.',
    img: local('class-yoga'),
  },
  {
    name: 'Zumba® Strong',
    body: 'Push yourself to the beat. Bodyweight moves and plyometrics that leave you spent in the best way.',
    img: local('class-zumba-strong'),
  },
  {
    name: 'Hula Honey',
    body: 'Work your core, hips and legs in a hula-inspired dance workout you will smile through.',
    img: local('class-hula-honey'),
  },
  {
    name: 'Zumba® Toning',
    body: 'The Zumba you love, with light weights in your hands for definition.',
    img: local('class-zumba-toning'),
  },
  {
    name: 'Aerobic Dance',
    body: 'Build your stamina and coordination with rhythmic cardio set to upbeat music.',
    img: local('class-aerobic-dance'),
  },
  {
    name: 'SilverSneakers®',
    body: 'Keep your strength and range of motion for everyday life, with music that keeps you moving.',
    img: local('class-silversneakers'),
  },
];

export const premierPerks = [
  { title: 'Bring a friend', body: 'Built-in accountability, free, every workout.' },
  { title: 'Unlimited tanning', body: 'Premium beds whenever you want.' },
  { title: 'Every class', body: 'Unlimited classes, all week.' },
  { title: '24-hour access', body: 'Train at any hour, Monday to Thursday.' },
  { title: 'Cardio theatre', body: 'Miles go faster with a movie.' },
  { title: 'Racquetball', body: 'Court time included.' },
  { title: 'Training studio', body: 'Unlimited functional training.' },
  { title: "Women's area", body: 'A workout space just for women.' },
];

export const training = {
  programs: [
    {
      tag: 'Complimentary',
      strike: '$50',
      title: 'Smart Start',
      body: 'One hour with a coach. You say where you want to be this year, and you leave with the plan to get there. Free when you join.',
      points: ['Your goal, on paper', 'A plan built for you', 'Free with your membership'],
      cta: 'Claim my free session',
      featured: false,
    },
    {
      tag: '$199',
      strike: '',
      title: 'Kickstarter',
      body: 'Our most popular program. Four coaching sessions to build momentum, plus two more on us.',
      points: ['Six sessions total', 'Game plan set in session one', 'Smart Start included'],
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
    blurb: 'Every tool in the club, and a friend to train with.',
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
    cta: 'Start Premier for $1',
  },
  {
    id: 'basic',
    name: 'Basic',
    badge: '',
    featured: false,
    monthly: { price: '$19.95', per: '/month', note: '$89 enrollment.', href: links.joinBasic },
    prepaid: { price: '$249', per: 'for 18 months', note: 'Pay for 12 months, get 6 free.', href: links.joinBasicYearly },
    blurb: 'Everything you need to get to work.',
    features: ['All cardio and weight equipment', 'Your Smart Start session with a coach'],
    cta: 'Start Basic',
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
