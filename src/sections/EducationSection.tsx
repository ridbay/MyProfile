import FadeIn from '../components/FadeIn';

interface Education {
  period: string;
  degree: string;
  school: string;
  note?: string;
}

const EDUCATION: Education[] = [
  {
    period: '2024 – 2026',
    degree: 'M.I.T. – Masters in Information Technology',
    school: 'Department of Computer Sciences, University of Lagos (UNILAG)',
    note: 'Thesis: Design and Implementation of a Scalable Human Resource Management System Using Serverless Cloud Architecture',
  },
  {
    period: '2010 – 2015',
    degree: 'B.Eng. Metallurgical and Materials Engineering',
    school: 'Federal University of Technology, Akure',
  },
];

const CERTIFICATIONS = [
  { name: 'Become a Full-Stack Web Developer', year: '2024' },
  { name: 'Career Essentials in Generative AI – Microsoft & LinkedIn', year: '2023' },
  { name: 'Become a Cybersecurity Professional', year: '2023' },
  { name: 'Design Thinking for Innovation – Coursera', year: '2022' },
  { name: 'Introduction to Data Analytics – Coursera', year: '2022' },
  { name: 'The Complete ASP.NET MVC 5 Course – Teachable', year: '2021' },
  { name: 'Microservices with Node JS & ReactJS – Udemy', year: '2020' },
  { name: 'Complete React Developer (Redux, Hooks, GraphQL, PWA) – Udemy', year: '2019' },
  { name: 'JavaScript, React, HTML, CSS, Redux Proficiency – Pluralsight', year: '2019' },
  { name: 'Mobile Web Specialist – Andela Learning Community', year: '2018' },
  { name: 'Front End Web Development – Andela Learning Community', year: '2018' },
  { name: 'Telecommunication Power Training – University of Huawei', year: '2018' },
  { name: 'Online Marketing Fundamentals – Google Digital Skills for Africa', year: '2017' },
  { name: 'Google AdWords Business Finalist – Google Online Marketing Challenge', year: '2015' },
];

export default function EducationSection() {
  return (
    <section id="education" className="relative bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pb-24 sm:pb-28 md:pb-36">
      <FadeIn>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Education
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto grid gap-4 sm:gap-6 md:grid-cols-2 mb-20 sm:mb-24 md:mb-32">
        {EDUCATION.map((item, i) => (
          <FadeIn key={item.degree} delay={i * 0.1}>
            <div className="h-full rounded-[32px] sm:rounded-[40px] border-2 border-[#D7E2EA] p-6 sm:p-8 md:p-10 flex flex-col gap-6">
              <span className="self-start rounded-full px-5 py-2 text-xs sm:text-sm border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest">
                {item.period}
              </span>
              <div className="flex flex-col gap-2">
                <h3
                  className="text-[#D7E2EA] font-medium uppercase leading-tight"
                  style={{ fontSize: 'clamp(1.25rem, 2.4vw, 2rem)' }}
                >
                  {item.degree}
                </h3>
                <p className="text-[#D7E2EA] uppercase tracking-widest text-xs sm:text-sm opacity-60">
                  {item.school}
                </p>
              </div>
              {item.note && (
                <a
                  href="#projects"
                  className="text-[#D7E2EA] font-light leading-relaxed opacity-70 hover:opacity-100 transition-opacity duration-200 underline decoration-[#D7E2EA]/30 underline-offset-4"
                  style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1rem)' }}
                >
                  {item.note}
                </a>
              )}
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h3
            className="text-[#D7E2EA] font-black uppercase mb-8 sm:mb-10"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 3.5rem)' }}
          >
            Certifications
          </h3>
        </FadeIn>
        <ul className="grid md:grid-cols-2 md:gap-x-12">
          {CERTIFICATIONS.map((cert, i) => (
            <FadeIn key={cert.name} as="li" delay={(i % 2) * 0.05}>
              <div className="flex items-baseline justify-between gap-6 py-4 sm:py-5 border-b border-[#D7E2EA]/15">
                <span className="text-[#D7E2EA] font-light leading-snug" style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1.1rem)' }}>
                  {cert.name}
                </span>
                <span className="text-[#D7E2EA] font-medium tracking-widest text-xs sm:text-sm opacity-60 shrink-0">
                  {cert.year}
                </span>
              </div>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
