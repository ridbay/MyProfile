import FadeIn from '../components/FadeIn';

interface Testimonial {
  name: string;
  company?: string;
  quote: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Femi Aisida',
    company: 'Black Falcon Ltd',
    quote:
      'Ridwan has done for my organisation everything from website design, e-commerce integration, SEO, social media support, e-forms for surveys, online advertising and a lot more. He has been technically knowledgeable, extremely quick with response times and constantly suggests ways to improve our online presence even when not officially engaged by us for support. He has been a consummate professional and a delight to have in our service over the last 9 years.',
  },
  {
    name: 'Wendy Etafo',
    company: 'ALAT by WEMA',
    quote:
      'I see Ridwan as a very skilled software engineer, I have thoroughly enjoyed working with him, he communicates where need be and I appreciate how he gets tasks done quickly.',
  },
  {
    name: 'Luqman Bello',
    company: 'Pristine Services',
    quote:
      'Ridbay was one of the best software engineers I have worked with. Very clear in his communication, prompt in his delivery with a high level of clean concise code development. He was truly a joy to work with.',
  },
  {
    name: 'Mr. Busayo',
    company: 'CEO, Almond Group',
    quote:
      'I will admit - originally the thought of outsourcing scared the hell out of me. As a business owner I am used to control and always having my finger on the pulse of my employees and contractors. Ridwan has delivered great results and has convinced me of the value of outsourcing. I have really enjoyed working with Ridwan and he can really deliver outstanding results.',
  },
  {
    name: 'Babatunde Oladele',
    company: 'TRW Consult',
    quote:
      'What I liked best about Ridwan during our time together was his patience and resourcefulness. He was very patient in taking on assignments and requests from team members. He was also quite resourceful in finding innovative ways to solve some of the issues that arose that there was no conventional fix for.',
  },
  {
    name: 'Kazeem O. Yusuf',
    company: 'Niji Group',
    quote:
      'I worked with Ridwan as a colleague in an agricultural conglomerate. He led and handled the IT department of the company meticulously. He is well known for thoroughness and promptness in handling and completing projects.',
  },
  {
    name: 'Oluwapelumi Adesanya',
    company: 'Plaqad',
    quote:
      'After evaluating a few outsourcers I decided to work with Ridwan because of his professional approach and ability to make changes to what we wanted. I appreciate his promptness, quality of work, IT expertise and would recommend his services.',
  },
  {
    name: 'Toyosi Habeeb',
    company: 'CoolTelecoms',
    quote:
      'I recently had the pleasure of working with Ridbay and was blown away by the level of professionalism and expertise he brought to the table. One of the things I liked best is his ability to clearly communicate and explain the various options and strategies available to me. I would highly recommend Ridbay to others looking for top-notch service and results.',
  },
  {
    name: 'Rahaman Abiola',
    company: 'LEGIT.ng',
    quote:
      "Ridwan 'Ridbay' Balogun provides an amazing, excellent service. He is a result-oriented guy with impeccable customer relations. Besides, his services are reliable and affordable. Having worked with him for over 6 years, I'll recommend him to potential clients in need of top-notch services.",
  },
  {
    name: 'Rokeeb Oyebola',
    company: 'Digital Flames Internet Technologies',
    quote:
      'Working with Ridwan Balogun for several years has made me realize consistency can be mixed with efficiency. Ridwan is a very prudent person to work with and always goes out of the norm to find a solution to the problem at hand.',
  },
  {
    name: 'Nelly Essien',
    company: '24 Pages',
    quote:
      "Balogun Ridwan was great at handling the issue with my website. It was hacked and he effortlessly fixed it and offered additional value. He's really great at what he does and I'll always recommend his services.",
  },
  {
    name: 'Kawthar Babatunde',
    quote:
      'Ridwan went over and beyond what was expected. I really liked how much of himself he dedicated to the work and I particularly look forward to working with him again.',
  },
];

function initials(name: string) {
  return name
    .replace(/^Mr\.\s+/, '')
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join('');
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative z-20 bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-32 sm:pb-36 md:pb-44"
    >
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center leading-none mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(2.5rem, 10vw, 140px)' }}
      >
        Don&apos;t take my word for it
      </h2>

      <div className="max-w-6xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-4 sm:gap-6">
        {TESTIMONIALS.map((t, i) => (
          <FadeIn key={t.name} delay={(i % 3) * 0.08} className="break-inside-avoid mb-4 sm:mb-6">
            <figure className="rounded-[28px] sm:rounded-[32px] border border-[#0C0C0C]/15 p-6 sm:p-8 flex flex-col gap-6">
              <span className="font-black text-[#0C0C0C] leading-none text-5xl select-none" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote
                className="text-[#0C0C0C] font-light leading-relaxed -mt-4"
                style={{ fontSize: 'clamp(0.95rem, 1.2vw, 1.05rem)', opacity: 0.75 }}
              >
                {t.quote}
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <span
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-medium shrink-0"
                  style={{ background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)' }}
                >
                  {initials(t.name)}
                </span>
                <span className="flex flex-col">
                  <span className="text-[#0C0C0C] font-medium uppercase tracking-wide text-sm">{t.name}</span>
                  {t.company && (
                    <span className="text-[#0C0C0C] uppercase tracking-widest text-[10px] sm:text-xs opacity-50">
                      {t.company}
                    </span>
                  )}
                </span>
              </figcaption>
            </figure>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
