import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';

interface Experience {
  number: string;
  period: string;
  role: string;
  company: string;
  description: string;
}

const EXPERIENCE: Experience[] = [
  {
    number: '01',
    period: 'Oct. 2020 -- Till date',
    role: 'Senior Back-End Developer (Cryptocurrency Trading & Digital Wallets)',
    company: 'Pandar Resources, Lagos, Nigeria',
    description:
      'Developed RESTful APIs and services for e-wallet and cryptocurrency trading features.',
  },
  {
    number: '02',
    period: '2021 -- 2023',
    role: 'Software Development Engineer',
    company: 'WEMA Bank Plc., Marina, Lagos, Nigeria',
    description:
      'Designed and developed web applications for banking functions.',
  },
  {
    number: '03',
    period: 'Apr. 2020 -- Oct. 2020',
    role: 'Full-Stack Developer / Tech Lead (Remote)',
    company: 'Prudent Digital International, Dartford, Kent, England',
    description:
      'Led the development of e-commerce and real estate applications.',
  },
  {
    number: '04',
    period: 'Mar. 2019 -- Apr. 2020',
    role: 'Full-Stack Software Developer / Project Manager',
    company: 'TechDigi Media Solutions, Lagos, Nigeria',
    description:
      'Developed a full-stack banking app and a facial recognition app.',
  },
  {
    number: '05',
    period: 'Feb. 2018 -- Mar. 2019',
    role: 'Web Developer & IT Business Analyst',
    company: 'Artoas Global Limited, Lagos, Nigeria',
    description: 'Developed new websites and maintained existing ones.',
  },
  {
    number: '06',
    period: 'May 2017 -- Sept. 2017',
    role: 'Digital Marketing Analyst',
    company: 'Red Media, Lagos, Nigeria',
    description: 'Developed digital marketing campaign strategies.',
  },
  {
    number: '07',
    period: 'Oct. 2015 -- May 2017',
    role: 'Website Developer & Digital Marketer',
    company: 'Niji Group, Lagos, Nigeria',
    description:
      'Developed and maintained websites and implemented digital marketing strategies.',
  },
  {
    number: '08',
    period: 'Jan. 2015 -- July 2015',
    role: 'Team Captain',
    company: 'Google Online Marketing Challenge (Middle East & Africa Business Award Finals)',
    description:
      'Led a team in partnership with Niji Group to develop a 3-week Google AdWords campaign, driving awareness and website traffic for their processed foods, engineering, farms, and hotel services.',
  },
];

const TOTAL_CARDS = EXPERIENCE.length;

function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (TOTAL_CARDS - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="h-[85vh] sm:h-[60vh] sticky top-24 md:top-32"
      style={{ marginTop: index === 0 ? 0 : `${index * 28}px` }}
    >
      <motion.div
        style={{ scale }}
        className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:p-8 md:p-10 flex flex-col justify-between gap-6 sm:gap-8 origin-top"
      >
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {experience.number}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[#D7E2EA] uppercase tracking-widest text-xs sm:text-sm opacity-60">
                {experience.company}
              </span>
              <span className="text-[#D7E2EA] font-medium uppercase text-lg sm:text-2xl md:text-3xl">
                {experience.role}
              </span>
            </div>
          </div>
          <span className="rounded-full px-5 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest whitespace-nowrap">
            {experience.period}
          </span>
        </div>

        <p
          className="text-[#D7E2EA] font-light leading-relaxed max-w-2xl"
          style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.35rem)', opacity: 0.7 }}
        >
          {experience.description}
        </p>
      </motion.div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Experience
        </h2>
      </FadeIn>

      <div className="relative">
        {EXPERIENCE.map((experience, i) => (
          <ExperienceCard key={experience.number} experience={experience} index={i} />
        ))}
      </div>
    </section>
  );
}
