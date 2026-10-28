import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "../components/FadeIn";
import FloatingArt from "../components/FloatingArt";

interface Experience {
  number: string;
  period: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
  art: [string, string?];
}

const EXPERIENCE: Experience[] = [
  {
    number: "01",
    period: "2023",
    role: "Senior Software Engineer",
    company: "Pandar Resources, Lagos",
    description:
      "I lead the team behind the APIs that power e-wallets and crypto trading for Pandar, Redem, and Crane. When Redem merged into Pandar, I moved every user and every record across with zero downtime and nothing lost. Code reviews, unit tests, and CI/CD aren't extras on my team. They're the standard.",
    tags: ["Node.js", "TypeScript", "Express", "MySQL", "Redis", "Linux"],
    art: ["/3d/coin.png", "/3d/money_with_wings.png"],
  },
  {
    number: "02",
    period: "2021",
    role: "Software Development Engineer",
    company: "WEMA Bank Plc., Marina, Lagos",
    description:
      "Inside one of Nigeria's oldest banks, I built and maintained the web applications behind account management, transactions, payments, and reporting, shipping side by side with designers, product owners, scrum masters, and testers. Banking software has to be trusted, and I built it that way.",
    tags: ["Banking", "Web Apps", "Unit Testing", "Code Review"],
    art: ["/3d/bank.png", "/3d/credit_card.png"],
  },
  {
    number: "03",
    period: "2020",
    role: "Full-Stack Developer / Tech Lead (Remote)",
    company: "Prudent Digital International, Kent, England",
    description:
      "Remote, for a team in Kent, England. I built both sides of e-commerce and real estate applications, set the technical direction for the project team, and mentored the junior engineers coming up behind me.",
    tags: ["Full-Stack", "E-commerce", "Tech Lead", "Mentoring"],
    art: ["/3d/shopping_cart.png", "/3d/house.png"],
  },
  {
    number: "04",
    period: "2018",
    role: "Website Developer & IT Business Analyst",
    company: "Artoas Global Limited, Lagos",
    description:
      "Half analyst, half builder. I translated business needs into crisp requirements, process flows, and use cases, then built and rebuilt the websites myself and kept the Linux servers underneath them humming.",
    tags: ["Business Analysis", "Web Development", "Linux Admin", "QA"],
    art: ["/3d/bar_chart.png", "/3d/clipboard.png"],
  },
  {
    number: "05",
    period: "2015",
    role: "Website Developer & Digital Marketer",
    company: "Niji Group, Lagos",
    description:
      "I built every one of the company's websites, then made sure people actually found them: SEO, SEM, social media, and email campaigns that put an agricultural conglomerate firmly on the map online.",
    tags: ["Web Development", "SEO", "SEM", "Social Media"],
    art: ["/3d/megaphone.png", "/3d/globe_with_meridians.png"],
  },
  {
    number: "06",
    period: "2015",
    role: "Team Captain, Business Award Finalist",
    company: "Google Online Marketing Challenge (Middle East & Africa)",
    description:
      "My first big stage. I captained a team that ran a 3-week Google AdWords campaign for Niji Group and took it all the way to the Middle East & Africa Business Award finals: 75,800 impressions, 694 clicks, and a 0.92% CTR.",
    tags: ["Google AdWords", "Leadership", "Campaign Strategy"],
    art: ["/3d/trophy.png"],
  },
];

const TOTAL_CARDS = EXPERIENCE.length;

function ExperienceCard({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const targetScale = 1 - (TOTAL_CARDS - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="h-[85vh] sm:h-[70vh] sticky top-24 md:top-32"
      style={{ marginTop: index === 0 ? 0 : `${index * 28}px` }}
    >
      <motion.div
        style={{ scale }}
        className="relative overflow-hidden w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:p-8 md:p-10 flex flex-col justify-between gap-6 sm:gap-8 origin-top"
      >
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
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

        <div className="lg:hidden flex-1 min-h-0 flex items-center justify-center">
          <FloatingArt
            primary={experience.art[0]}
            secondary={experience.art[1]}
            className="relative h-full max-h-[200px] sm:max-h-[180px] md:max-h-[220px]"
          />
        </div>

        <FloatingArt
          primary={experience.art[0]}
          secondary={experience.art[1]}
          className="hidden lg:block absolute right-[8%] top-1/2 -translate-y-[42%] w-[clamp(200px,20vw,280px)]"
        />

        <div className="relative flex flex-col gap-5 sm:gap-6">
          <p
            className="text-[#D7E2EA] font-light leading-relaxed max-w-3xl lg:max-w-[58%]"
            style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.25rem)", opacity: 0.7 }}
          >
            {experience.description}
          </p>
          <ul className="flex flex-wrap gap-2">
            {experience.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs uppercase tracking-widest text-[#D7E2EA] bg-[#D7E2EA]/10"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Experience
        </h2>
      </FadeIn>

      <div className="relative">
        {EXPERIENCE.map((experience, i) => (
          <ExperienceCard
            key={experience.number}
            experience={experience}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
