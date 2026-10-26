import FadeIn from '../components/FadeIn';
import FloatingArt from '../components/FloatingArt';
import ProjectCard from '../components/ProjectCard';
import { PROJECTS, SDKS } from '../data/projects';

const STATS = [
  { value: '911', label: 'Automated tests, all green' },
  { value: '~250ms', label: 'Response time from Lagos' },
  { value: '$5/mo', label: 'A month, for up to 5,000 staff' },
  { value: '~300', label: 'API endpoints' },
];

const HIGHLIGHTS = [
  'Every company’s data walled off from the next, enforced right at the data layer',
  'Payroll that knows Nigerian law: PAYE, pension, NHF, NSITF, and ITF, with every remittance deadline turned into a dated task',
  'An AI HR assistant that re-checks who’s asking before every single answer',
  'Everything else HR needs: people, attendance, leave, hiring, performance reviews, offboarding, and payslips',
];

const STACK = [
  'Cloudflare Workers',
  'D1',
  'R2',
  'Workers AI',
  'Cloudflare Pages',
  'React',
  'TypeScript',
  'TanStack Query',
  'Wrangler',
];

export default function ProjectSection() {
  return (
    <section id="projects" className="relative bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pb-24 sm:pb-28 md:pb-36">
      <FadeIn>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <FadeIn className="max-w-6xl mx-auto">
        <article className="relative rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-6 sm:p-8 md:p-12 flex flex-col gap-10 sm:gap-12">
          <FloatingArt
            primary="/3d/cloud.png"
            secondary="/3d/gear.png"
            className="hidden lg:block absolute right-[7%] top-[9%] w-[clamp(180px,17vw,240px)]"
          />

          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="flex flex-col gap-3 max-w-3xl lg:max-w-[60%]">
              <span className="text-[#D7E2EA] uppercase tracking-widest text-xs sm:text-sm opacity-60">
                MIT Thesis – University of Lagos
              </span>
              <h3
                className="text-[#D7E2EA] font-black uppercase leading-none"
                style={{ fontSize: 'clamp(2.5rem, 7vw, 96px)' }}
              >
                ZenHR
              </h3>
              <p className="text-[#D7E2EA] font-medium uppercase leading-snug" style={{ fontSize: 'clamp(1rem, 1.8vw, 1.5rem)' }}>
                A scalable human resource management system on serverless cloud architecture
              </p>
            </div>
            <span className="relative z-10 rounded-full px-5 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest whitespace-nowrap">
              2026
            </span>
          </div>

          <p
            className="text-[#D7E2EA] font-light leading-relaxed max-w-3xl lg:max-w-[60%]"
            style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.2rem)', opacity: 0.7 }}
          >
            Many Nigerian businesses still run payroll on spreadsheets, and the cloud HR tools that could save them cost
            more than they can afford. So I built ZenHR: a complete HR and payroll platform with no servers at all. It runs
            entirely on Cloudflare&apos;s edge, works out payroll for 100 staff in under half a second, and costs
            practically nothing when nobody&apos;s using it.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2">
                <span className="hero-heading font-black leading-none" style={{ fontSize: 'clamp(2rem, 4.5vw, 64px)' }}>
                  {stat.value}
                </span>
                <span className="text-[#D7E2EA] uppercase tracking-widest text-[10px] sm:text-xs opacity-60">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <ul className="grid md:grid-cols-2 gap-x-10 gap-y-4">
            {HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-[#D7E2EA] font-light leading-relaxed"
                style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)' }}
              >
                <span
                  className="mt-[0.55em] w-2 h-2 rounded-full shrink-0"
                  style={{ background: 'linear-gradient(123deg, #B600A8, #7621B0, #BE4C00)' }}
                />
                <span className="opacity-80">{item}</span>
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap gap-2">
            {STACK.map((tag) => (
              <li
                key={tag}
                className="rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs uppercase tracking-widest text-[#D7E2EA] bg-[#D7E2EA]/10"
              >
                {tag}
              </li>
            ))}
          </ul>
        </article>
      </FadeIn>

      <div className="max-w-6xl mx-auto mt-4 sm:mt-5">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {PROJECTS.map((project, i) => (
            <FadeIn key={project.name} delay={(i % 3) * 0.08} className="h-full">
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-20 sm:mt-24">
        <FadeIn>
          <h3
            className="text-[#D7E2EA] font-black uppercase mb-8 sm:mb-10"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 3.5rem)' }}
          >
            Open-source SDKs
          </h3>
        </FadeIn>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {SDKS.map((project, i) => (
            <FadeIn key={project.name} delay={(i % 3) * 0.08} className="h-full">
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
