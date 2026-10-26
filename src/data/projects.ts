export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  name: string;
  category: string;
  description: string;
  stack: string[];
  art: string;
  image?: string;
  // Brand logo for SDK cards, shown on a light panel.
  logo?: string;
  url?: string;
  links?: ProjectLink[];
}

export const PROJECTS: Project[] = [
  {
    name: 'Pandar',
    category: 'Fintech · Wallets & Crypto',
    description:
      'Got crypto? Pandar turns it into naira in your Nigerian bank account, instantly. Gift cards, bills, airtime, and virtual dollar cards too. I lead the backend that keeps the money flowing: wallets, trading, background jobs, and integrations.',
    stack: ['Node.js', 'Express', 'TypeORM', 'MySQL', 'Redis', 'BullMQ'],
    art: '/3d/mobile_phone.png',
    image: '/projects/pandar.jpg',
    url: 'https://pandar.ng/',
  },
  {
    name: 'Crane',
    category: 'Fintech · Crypto Payments',
    description:
      'Work for clients anywhere, get paid in crypto, and cash out to naira instantly. I built the TypeScript backend that makes the money land: trading flows, queues, feature flags, and Dockerised deployment.',
    stack: ['TypeScript', 'Express', 'TypeORM', 'MySQL', 'BullMQ', 'Docker'],
    art: '/3d/wrapped_gift.png',
    image: '/projects/crane.jpg',
    url: 'https://www.usecrane.co/',
  },
  {
    name: 'Redem',
    category: 'Fintech · Gift Cards & Crypto',
    description:
      'A gift card and crypto trading platform with its own dashboard and landing page. Its proudest moment was its exit: I led the zero-downtime migration of every Redem user and record into Pandar after the merger.',
    stack: ['TypeScript', 'Express', 'MySQL', 'React'],
    art: '/3d/gem_stone.png',
  },
  {
    name: 'YouseWire',
    category: 'Fintech · Cross-Border Payments',
    description:
      'Send money across borders without the fees, delays, and drama. Cross-border payments, multi-currency wallets, and remittance, with automated KYC/KYB, fraud and risk controls, and consoles for users, admins, and support.',
    stack: ['Node.js', 'TypeScript', 'TypeORM', 'Redis', 'React 19', 'Vitest'],
    art: '/3d/globe_with_meridians.png',
    image: '/projects/yousewire.jpg',
    url: 'https://yousewire.com/',
  },
  {
    name: 'ComfortSphere',
    category: 'HealthTech · Mental Wellness',
    description:
      'A safe place to talk, even at 3 AM. Free, anonymous, culturally aware emotional support: a community, real-time chats with volunteer Caring Listeners, Jessy the 24/7 AI companion, and a crisis protocol that knows when to escalate.',
    stack: ['Cloudflare Workers', 'Hono', 'Durable Objects', 'D1', 'Drizzle', 'React'],
    art: '/3d/smiling_face_with_hearts.png',
    image: '/projects/comfortsphere.jpg',
    url: 'https://mymind-mental-health-landing-page.pages.dev',
  },
  {
    name: 'Kalenda',
    category: 'SaaS · Appointment Booking',
    description:
      'Find your next favourite barber, salon, clinic, or studio in Lagos, see real naira prices and open slots, and book in a few taps. Businesses get a dashboard for services, hours, and bookings. All serverless, all at the edge.',
    stack: ['Cloudflare Workers', 'Hono', 'D1', 'R2', 'Drizzle', 'React'],
    art: '/3d/spiral_calendar.png',
    image: '/projects/kalenda.jpg',
    url: 'https://kalenda-dashboard.balogunridwan.workers.dev/',
  },
  {
    name: 'Academiq',
    category: 'EdTech · School ERP SaaS',
    description:
      'The operating system for forward-thinking schools. Admissions, attendance, automated gradebooks, cashless fee billing, exams, timetables, a parent portal, and verifiable certificates, with any number of schools on one platform.',
    stack: ['Cloudflare Workers', 'Hono', 'D1', 'R2', 'Drizzle', 'React'],
    art: '/3d/school.png',
    image: '/projects/academiq.jpg',
    url: 'https://academiq-3s9.pages.dev/',
  },
  {
    name: 'TipFi',
    category: 'Fintech · Social Payments',
    description:
      'Payments with a party mode. Wallets, instant P2P transfers, shareable pay links, crowdfunding, and digital money spraying for owambes and celebrations.',
    stack: ['Cloudflare Workers', 'D1', 'Workers KV', 'React Native', 'React'],
    art: '/3d/party_popper.png',
    image: '/projects/tipfi.jpg',
    url: 'https://tipfi.io/',
  },
  {
    name: 'EstateSync',
    category: 'PropTech · Estate Management',
    description:
      'Estate life, organised. One app that brings residents and their association together, first rolled out for the Beachland Estate Residence Association (BERA).',
    stack: ['React Native', 'Expo', 'Express', 'TypeORM', 'MySQL', 'Redis'],
    art: '/3d/house_with_garden.png',
  },
];

export const SDKS: Project[] = [
  {
    name: 'Quidax SDKs',
    category: 'Open Source · Crypto',
    description:
      'Skip the boilerplate and start building crypto products. Fully typed Node.js SDKs for the Quidax exchange and ramp/custodial APIs, published on npm and ready to install.',
    stack: ['TypeScript', 'Node.js', 'npm'],
    art: '/3d/chart_increasing.png',
    logo: '/logos/quidax.svg',
    links: [
      { label: 'quidax-node', href: 'https://www.npmjs.com/package/quidax-node' },
      { label: 'quidax-package', href: 'https://www.npmjs.com/package/quidax-package' },
      { label: 'GitHub', href: 'https://github.com/ridbay/quidax-node' },
    ],
  },
  {
    name: 'Termii SDK',
    category: 'Open Source · Messaging',
    description:
      'Send SMS, fire off OTPs, and manage sender IDs in a few lines of TypeScript. A clean, fully typed Node.js SDK for the Termii API.',
    stack: ['TypeScript', 'Node.js'],
    art: '/3d/speech_balloon.png',
    logo: '/logos/termii.svg',
    links: [{ label: 'GitHub', href: 'https://github.com/ridbay/Termii-SDK-NodeJs' }],
  },
  {
    name: 'VTPass SDK',
    category: 'Open Source · Bill Payments',
    description:
      'Airtime, data, TV, electricity, and WAEC and JAMB services in a few typed lines of code. Input validation and sandbox support built in.',
    stack: ['TypeScript', 'Node.js'],
    art: '/3d/high_voltage.png',
    logo: '/logos/vtpass.png',
  },
  {
    name: 'Paybeta SDK',
    category: 'Open Source · Bill Payments',
    description:
      'Airtime, data, cable TV, electricity, betting wallet top-ups, and Showmax vouchers, all from one typed client. A robust TypeScript SDK for the Paybeta API that works in TypeScript and JavaScript alike.',
    stack: ['TypeScript', 'Node.js', 'npm'],
    art: '/3d/credit_card.png',
    logo: '/logos/paybeta.png',
    links: [
      { label: 'npm', href: 'https://www.npmjs.com/package/paybetasdk' },
      { label: 'GitHub', href: 'https://github.com/ridbay/PaybetaSDK' },
    ],
  },
];
