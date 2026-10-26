import FadeIn from '../components/FadeIn';

const SERVICES = [
  {
    number: '01',
    name: 'Backend & API Engineering',
    description:
      'APIs that move money without breaking a sweat. RESTful services and microservices in Node.js and TypeScript, backed by PostgreSQL, MySQL, and Redis, built for e-wallets, crypto trading, and payments where every kobo counts.',
  },
  {
    number: '02',
    name: 'Cloud & Serverless Architecture',
    description:
      'No servers to babysit. No bills for idle machines. I architect serverless and edge systems on AWS and Cloudflare (Workers, Pages, D1, R2, Workers AI) that scale up when traffic spikes and cost almost nothing while they sleep.',
  },
  {
    number: '03',
    name: 'DevOps & IT/AI Ops',
    description:
      'The calm behind production. Docker, Kubernetes, CI/CD, Linux servers, and cPanel/WHM, plus AI-assisted operations that catch trouble early and automate the boring parts.',
  },
  {
    number: '04',
    name: 'Frontend & Mobile Development',
    description:
      'Interfaces people actually enjoy. Fast, responsive web and mobile apps in React, Next.js, Redux, and React Native that turn complicated money flows into a few satisfying taps.',
  },
  {
    number: '05',
    name: 'Engineering Leadership',
    description:
      'I turn groups of engineers into teams that ship. Clear architecture, honest code reviews, real test coverage, steady agile delivery, and mentoring that leaves everyone sharper than they started.',
  },
  {
    number: '06',
    name: 'Tech Training & Mentorship',
    description:
      'From your first “hello world” to production-grade backends. Patient, hands-on tutoring for individuals, teams, and organisations that want real skills, not just certificates.',
  },
  {
    number: '07',
    name: 'IT Business Analysis & Digital Marketing',
    description:
      'I speak fluent business and fluent code. Requirements, process flows, and use cases developers love, plus SEO, SEM, and campaigns that get products seen. I once captained a team all the way to the Google Online Marketing Challenge finals.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
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
