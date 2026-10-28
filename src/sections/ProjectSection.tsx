import FadeIn from "../components/FadeIn";
import FloatingArt from "../components/FloatingArt";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS, SDKS } from "../data/projects";

// const STATS = [
//   { value: "911", label: "Automated tests, all green" },
//   { value: "~250ms", label: "Response time from Lagos" },
//   { value: "$5/mo", label: "A month, for up to 5,000 staff" },
//   { value: "~300", label: "API endpoints" },
// ];

// const HIGHLIGHTS = [
//   'Every company’s data walled off from the next, enforced right at the data layer',
//   'Payroll that knows Nigerian law: PAYE, pension, NHF, NSITF, and ITF, with every remittance deadline turned into a dated task',
//   'An AI HR assistant that re-checks who’s asking before every single answer',
//   'Everything else HR needs: people, attendance, leave, hiring, performance reviews, offboarding, and payslips',
// ];

const STACK = [
  "Cloudflare Workers",
  "D1",
  "R2",
  "Workers AI",
  "Cloudflare Pages",
  "React",
  "TypeScript",
  "TanStack Query",
  "Wrangler",
];

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="relative bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pb-24 sm:pb-28 md:pb-36"
    >
      <FadeIn>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
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
                style={{ fontSize: "clamp(2.5rem, 7vw, 96px)" }}
              >
                ZenHR
              </h3>
              <p
                className="text-[#D7E2EA] font-medium uppercase leading-snug"
                style={{ fontSize: "clamp(1rem, 1.8vw, 1.5rem)" }}
              >
                A scalable human resource management system on serverless cloud
                architecture
              </p>
            </div>
            <div className="relative z-10 flex items-center gap-3 flex-wrap">
              <a
                href="https://automated-hrms-and-payroll.pages.dev/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm text-white font-medium uppercase tracking-widest transition-transform duration-200 hover:scale-[1.03] whitespace-nowrap"
                style={{
                  background:
                    "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
                  boxShadow:
                    "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
                }}
              >
                <span>Live Dashboard</span>
                <span aria-hidden="true">↗</span>
              </a>
              <span className="rounded-full px-5 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest whitespace-nowrap">
                2026
              </span>
            </div>
          </div>

          <a
            href="https://automated-hrms-and-payroll.pages.dev/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open ZenHR Dashboard"
            className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D7E2EA]/20 bg-[#161616] transition-all duration-300 hover:border-[#D7E2EA]/60 shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
          >
            <div className="flex items-center justify-between px-3.5 py-2.5 sm:px-5 sm:py-3 border-b border-[#D7E2EA]/10 bg-[#121212]/90 backdrop-blur">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                <span className="ml-2 truncate text-[11px] sm:text-xs tracking-wide text-[#D7E2EA]/50 font-mono">
                  automated-hrms-and-payroll.pages.dev/dashboard
                </span>
              </div>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#D7E2EA]/60 group-hover:text-white transition-colors duration-200 inline-flex items-center gap-1">
                <span>Open Dashboard</span>
                <span aria-hidden="true">↗</span>
              </span>
            </div>
            <div className="aspect-[16/10] overflow-hidden bg-[#0C0C0C]">
              <img
                src="/projects/zenhr.jpg"
                alt="ZenHR Enterprise HRMS & Payroll Dashboard"
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
          </a>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <p
              className="text-[#D7E2EA] font-light leading-relaxed"
              style={{
                fontSize: "clamp(0.95rem, 1.5vw, 1.2rem)",
                opacity: 0.7,
              }}
            >
              Many Nigerian businesses still run payroll on spreadsheets, and
              the cloud HR tools that could save them cost more than they can
              afford. So I built ZenHR: a complete HR and payroll platform with
              no servers at all. It runs entirely on Cloudflare&apos;s edge,
              works out payroll for 100 staff in under half a second, and costs
              practically nothing when nobody&apos;s using it.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
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
            <a
              href="https://automated-hrms-and-payroll.pages.dev/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D7E2EA] text-xs sm:text-sm font-medium uppercase tracking-widest underline decoration-[#B600A8] decoration-2 underline-offset-[6px] hover:opacity-70 transition-opacity duration-200 inline-flex items-center gap-1.5"
            >
              <span>Visit Live Dashboard</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      </FadeIn>

      <div className="max-w-6xl mx-auto mt-4 sm:mt-5">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {PROJECTS.map((project, i) => (
            <FadeIn
              key={project.name}
              delay={(i % 3) * 0.08}
              className="h-full"
            >
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-20 sm:mt-24">
        <FadeIn>
          <h3
            className="text-[#D7E2EA] font-black uppercase mb-8 sm:mb-10"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3.5rem)" }}
          >
            Open-source SDKs
          </h3>
        </FadeIn>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {SDKS.map((project, i) => (
            <FadeIn
              key={project.name}
              delay={(i % 3) * 0.08}
              className="h-full"
            >
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
