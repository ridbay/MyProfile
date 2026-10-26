import FadeIn from '../components/FadeIn';
import FloatingArt from '../components/FloatingArt';

interface Passion {
  title: string;
  tag: string;
  description: string;
  art: string;
  links?: { label: string; href: string }[];
}

const PASSIONS: Passion[] = [
  {
    title: 'Tutor & Mentor',
    tag: 'Teaching',
    description:
      "Explaining things is my superpower. I've trained 100+ young people in web development, graphic design, and digital marketing, kept classes running online through the COVID-19 lockdowns, and mentor the engineers on every team I lead. Watching something finally click for someone never gets old.",
    art: '/3d/graduation_cap.png',
  },
  {
    title: 'Content Creator',
    tag: 'Creating',
    description:
      'As @ridbay on Instagram and TikTok, I turn tech into content people actually want to watch: practical tips and the honest, behind-the-scenes reality of building software. The mission? Pull more people into tech.',
    art: '/3d/clapper_board.png',
    links: [
      { label: 'Instagram', href: 'https://www.instagram.com/ridbay/' },
      { label: 'TikTok', href: 'https://www.tiktok.com/@ridbay' },
    ],
  },
  {
    title: 'Footballer',
    tag: 'Playing',
    description:
      "Football is my reset button. Honestly, the pitch taught me half of what I know about leadership: communicate early, read the play, trust your team. And when I'm not on the pitch, I'm in the pool.",
    art: '/3d/soccer_ball.png',
  },
  {
    title: 'Real Estate',
    tag: 'Investing',
    description:
      "By the side, I do real estate. It keeps me grounded in a market I care about, and it's exactly why EstateSync exists: I've seen the problems up close.",
    art: '/3d/key.png',
  },
];

export default function BeyondSection() {
  return (
    <section id="beyond" className="relative bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pb-24 sm:pb-28 md:pb-36">
      <FadeIn>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-6 sm:mb-8"
          style={{ fontSize: 'clamp(2.75rem, 10vw, 140px)' }}
        >
          Beyond code
        </h2>
      </FadeIn>
      <FadeIn delay={0.1}>
        <p
          className="text-[#D7E2EA] font-light text-center leading-relaxed max-w-[560px] mx-auto mb-16 sm:mb-20"
          style={{ fontSize: 'clamp(1rem, 1.6vw, 1.2rem)', opacity: 0.7 }}
        >
          Code is what I do. It&apos;s not all I am.
        </p>
      </FadeIn>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-4 sm:gap-5">
        {PASSIONS.map((item, i) => (
          <FadeIn key={item.title} delay={(i % 2) * 0.1} className="h-full">
            <article className="group relative h-full overflow-hidden rounded-[32px] sm:rounded-[40px] border-2 border-[#D7E2EA]/25 hover:border-[#D7E2EA] p-6 sm:p-8 md:p-10 flex flex-col gap-5 transition-colors duration-300">
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <span className="text-[#D7E2EA] uppercase tracking-widest text-[10px] sm:text-xs opacity-60">
                    {item.tag}
                  </span>
                  <h3
                    className="text-[#D7E2EA] font-black uppercase leading-none"
                    style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)' }}
                  >
                    {item.title}
                  </h3>
                </div>
                <FloatingArt
                  primary={item.art}
                  className="relative w-[88px] sm:w-[110px] md:w-[130px] shrink-0 -mt-2 -mr-2"
                />
              </div>
              <p
                className="text-[#D7E2EA] font-light leading-relaxed flex-1"
                style={{ fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)', opacity: 0.7 }}
              >
                {item.description}
              </p>
              {item.links && (
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {item.links.map((link) => (
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
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
