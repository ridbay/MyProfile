import type { Project } from '../data/projects';

function hostname(url: string) {
  return new URL(url).hostname.replace(/^www\./, '');
}

function Media({ project }: { project: Project }) {
  if (project.logo) {
    return (
      <div className="relative">
        <div className="aspect-[16/7] rounded-2xl sm:rounded-3xl bg-white flex items-center justify-center overflow-hidden">
          <img
            src={project.logo}
            alt={`${project.name.replace(/ SDKs?$/, '')} logo`}
            loading="lazy"
            className="w-[52%] max-h-[45%] object-contain transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
        <img
          src={project.art}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="pointer-events-none absolute -bottom-5 -right-2 w-[56px] sm:w-[64px] h-auto drop-shadow-[0_12px_20px_rgba(0,0,0,0.6)] transition-transform duration-500 ease-out group-hover:-translate-y-1.5 group-hover:rotate-6 group-hover:scale-110"
        />
      </div>
    );
  }

  if (!project.image) {
    return (
      <div className="relative aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#D7E2EA]/[0.04] border border-[#D7E2EA]/10 flex items-center justify-center">
        <div
          className="absolute inset-[18%] rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition-opacity duration-300"
          style={{ background: 'radial-gradient(circle, #B600A8 0%, #7621B0 50%, transparent 75%)' }}
          aria-hidden="true"
        />
        <img
          src={project.art}
          alt=""
          loading="lazy"
          className="relative w-[38%] h-auto drop-shadow-[0_20px_30px_rgba(0,0,0,0.55)] transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:rotate-6 group-hover:scale-110"
        />
      </div>
    );
  }

  const frame = (
    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D7E2EA]/15 bg-[#161616]">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[#D7E2EA]/10">
        <span className="w-2 h-2 rounded-full bg-[#FF5F57]" />
        <span className="w-2 h-2 rounded-full bg-[#FEBC2E]" />
        <span className="w-2 h-2 rounded-full bg-[#28C840]" />
        {project.url && (
          <span className="ml-2 truncate text-[10px] tracking-wide text-[#D7E2EA]/50">{hostname(project.url)}</span>
        )}
      </div>
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={`${project.name} website`}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
    </div>
  );

  return (
    <div className="relative">
      {project.url ? (
        <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name}`} className="block">
          {frame}
        </a>
      ) : (
        frame
      )}
      <img
        src={project.art}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute -bottom-5 -right-2 w-[64px] sm:w-[72px] h-auto drop-shadow-[0_12px_20px_rgba(0,0,0,0.6)] transition-transform duration-500 ease-out group-hover:-translate-y-1.5 group-hover:rotate-6 group-hover:scale-110"
      />
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const links = [...(project.url ? [{ label: 'Visit site', href: project.url }] : []), ...(project.links ?? [])];

  return (
    <article className="group relative h-full rounded-[32px] sm:rounded-[40px] border-2 border-[#D7E2EA]/25 hover:border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-5 flex flex-col gap-5 transition-colors duration-300">
      <Media project={project} />

      <div className="flex flex-col gap-4 px-2 sm:px-3 pb-2 flex-1">
        <div className="flex flex-col gap-2">
          <span className="text-[#D7E2EA] uppercase tracking-widest text-[10px] sm:text-xs opacity-60">
            {project.category}
          </span>
          <h4
            className="text-[#D7E2EA] font-black uppercase leading-none [overflow-wrap:anywhere]"
            style={{ fontSize: 'clamp(1.6rem, 2.3vw, 2.1rem)' }}
          >
            {project.name}
          </h4>
        </div>

        <p
          className="text-[#D7E2EA] font-light leading-relaxed flex-1"
          style={{ fontSize: 'clamp(0.9rem, 1.1vw, 1rem)', opacity: 0.7 }}
        >
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2">
          {project.stack.map((tag) => (
            <li
              key={tag}
              className="rounded-full px-3 py-1 text-[10px] sm:text-[11px] uppercase tracking-widest text-[#D7E2EA] bg-[#D7E2EA]/10"
            >
              {tag}
            </li>
          ))}
        </ul>

        {links.length > 0 && (
          <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D7E2EA] text-xs sm:text-sm font-medium uppercase tracking-widest underline decoration-[#B600A8] decoration-2 underline-offset-[6px] hover:opacity-70 transition-opacity duration-200"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
