import FadeIn from '../components/FadeIn';

const SERVICES = [
  {
    number: '01',
    name: 'Software Engineering',
    description:
      'Diligent software engineer with 5+ years of experience, building innovative and cutting-edge business solutions for an impressive suite of clients within its global reach.',
  },
  {
    number: '02',
    name: 'Digital Marketing/SEO',
    description:
      'Highly capable marketing manager with 8+ years experience, seeking to leverage proven leadership and strategy skills to grow revenue.',
  },
  {
    number: '03',
    name: 'IT Business Analysis',
    description:
      'Experienced professional with comprehensive strategic planning and implementation skills. Innovative problem solver, with the ability to see the business and technical sides of a problem.',
  },
  {
    number: '04',
    name: 'IT Project Management',
    description:
      'Experienced in overseeing software projects, detail oriented, a team player, effective at managing all phases of the project life cycle, from planning through deployment.',
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Services
      </h2>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1}>
            <div
              className="flex items-start gap-6 sm:gap-8 md:gap-10 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: i === 0 ? '1px solid rgba(12, 12, 12, 0.15)' : undefined,
                borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
              }}
            >
              <span
                className="font-black text-[#0C0C0C] leading-none"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </span>
              <div className="flex flex-col gap-3 sm:gap-4 pt-2">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
