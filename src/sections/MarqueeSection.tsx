interface Skill {
  name: string;
  category: string;
}

const ROW_1: Skill[] = [
  { name: 'TypeScript', category: 'Language' },
  { name: 'Node.js', category: 'Runtime' },
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Express', category: 'Backend' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Cloudflare Workers', category: 'Serverless' },
  { name: 'Serverless', category: 'Architecture' },
  { name: 'Workers AI', category: 'AI' },
];

const ROW_2: Skill[] = [
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MySQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Redis', category: 'Cache' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Kubernetes', category: 'DevOps' },
  { name: 'Linux', category: 'Servers' },
  { name: 'cPanel / WHM', category: 'Hosting' },
  { name: 'IT / AI Ops', category: 'Operations' },
  { name: 'Microservices', category: 'Architecture' },
];

// Each row is rendered twice so translating by -50% loops seamlessly.
const ROW_1_LOOP = [...ROW_1, ...ROW_1];
const ROW_2_LOOP = [...ROW_2, ...ROW_2];

function Tile({ skill, filled }: { skill: Skill; filled: boolean }) {
  return (
    <div
      className={`rounded-2xl shrink-0 flex flex-col justify-between p-6 sm:p-8 border-2 border-[#D7E2EA] ${
        filled ? 'bg-[#D7E2EA] text-[#0C0C0C]' : 'text-[#D7E2EA]'
      }`}
      style={{ width: 'clamp(240px, 30vw, 380px)', height: 'clamp(140px, 16vw, 200px)' }}
    >
      <span className="uppercase tracking-widest text-xs sm:text-sm opacity-60">{skill.category}</span>
      <span className="font-black uppercase leading-none" style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.8rem)' }}>
        {skill.name}
      </span>
    </div>
  );
}

export default function MarqueeSection() {
  return (
    <section className="marquee bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden" aria-label="Tech stack">
      <div className="marquee-track flex w-max gap-3 mb-3" style={{ animationDuration: '55s' }}>
        {ROW_1_LOOP.map((skill, i) => (
          <Tile key={`row1-${i}`} skill={skill} filled={i % 3 === 1} />
        ))}
      </div>
      <div className="marquee-track marquee-reverse flex w-max gap-3" style={{ animationDuration: '60s' }}>
        {ROW_2_LOOP.map((skill, i) => (
          <Tile key={`row2-${i}`} skill={skill} filled={i % 3 === 0} />
        ))}
      </div>
    </section>
  );
}
