import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';

const STATS = [
  { value: '10+', label: 'Years shipping software' },
  { value: '100+', label: 'Young people trained in tech' },
  { value: '14', label: 'Certifications earned' },
];

const MOON_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png';
const P59_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png';
const LEGO_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png';
const GROUP_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png';

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20">
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[2%] left-[1%] sm:top-[4%] sm:left-[2%] md:left-[4%] w-[72px] sm:w-[160px] md:w-[210px]"
      >
        <img src={MOON_URL} alt="" className="w-full h-auto" />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="hidden sm:block absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]"
      >
        <img src={P59_URL} alt="" className="w-full h-auto" />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[2%] right-[1%] sm:top-[4%] sm:right-[2%] md:right-[4%] w-[72px] sm:w-[160px] md:w-[210px]"
      >
        <img src={LEGO_URL} alt="" className="w-full h-auto" />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="hidden sm:block absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]"
      >
        <img src={GROUP_URL} alt="" className="w-full h-auto" />
      </FadeIn>

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
          <AnimatedText
            text="Every day, people trade crypto, pay bills, and send money across borders on systems I've built. That's the job I love: making money move instantly, safely, and without drama. For 10+ years I've built the backends, frontends, and cloud platforms behind fintech, banking, and e-commerce products, and led the teams that ship them. I architect on AWS and Cloudflare, obsess over security and uptime, and keep production calm with IT and AI ops. Off the clock, I'm teaching, creating content, chasing a football, or closing a real estate deal. Let's build something people can't stop using."
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />

          <div className="grid grid-cols-3 gap-4 sm:gap-10 md:gap-16 max-w-[720px] w-full">
            {STATS.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1} className="flex flex-col items-center text-center gap-2">
                <span className="hero-heading font-black leading-none" style={{ fontSize: 'clamp(2.25rem, 6vw, 80px)' }}>
                  {stat.value}
                </span>
                <span className="text-[#D7E2EA] uppercase tracking-widest text-[10px] sm:text-xs md:text-sm opacity-60">
                  {stat.label}
                </span>
              </FadeIn>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <ContactButton />
          </div>
        </div>
      </div>
    </section>
  );
}
