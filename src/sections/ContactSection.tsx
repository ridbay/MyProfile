import FadeIn from "../components/FadeIn";
import ContactButton from "../components/ContactButton";
import { PROFILE, SOCIALS } from "../data/profile";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-30 bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-10"
    >
      <div className="flex flex-col items-center gap-10 sm:gap-12 text-center">
        <FadeIn>
          <h2
            className="hero-heading font-black uppercase leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(3rem, 11vw, 150px)" }}
          >
            Let&apos;s build
            <br />
            something big
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p
            className="text-[#D7E2EA] font-light leading-relaxed max-w-[560px]"
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)", opacity: 0.7 }}
          >
            Got a product that needs building, a system that needs to scale, or
            a team that needs someone to lead the charge? Tell me what
            you&apos;re working on. The best projects start with a simple hello.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} className="flex flex-col items-center gap-3">
          <a
            href={`mailto:${PROFILE.email}`}
            className="text-[#D7E2EA] font-medium break-all hover:opacity-70 transition-opacity duration-200"
            style={{ fontSize: "clamp(1.1rem, 3vw, 2.5rem)" }}
          >
            {PROFILE.email}
          </a>
          <a
            href={PROFILE.phoneHref}
            className="text-[#D7E2EA] font-light tracking-wide opacity-60 hover:opacity-100 transition-opacity duration-200"
            style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.25rem)" }}
          >
            {PROFILE.phone}
          </a>
        </FadeIn>

        <FadeIn delay={0.3} className="flex flex-wrap justify-center gap-4">
          <ContactButton label="Email Me" href={`mailto:${PROFILE.email}`} />
        </FadeIn>

        <FadeIn delay={0.4}>
          <ul className="flex flex-wrap justify-center gap-3">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-full px-5 py-2 sm:px-6 sm:py-2.5 text-xs sm:text-sm border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest hover:bg-[#D7E2EA] hover:text-[#0C0C0C] transition-colors duration-200"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>

      <footer className="mt-24 sm:mt-32 pt-6 border-t border-[#D7E2EA]/15 flex flex-col sm:flex-row justify-between gap-3 text-[#D7E2EA] uppercase tracking-widest text-[10px] sm:text-xs opacity-50">
        <span>
          &copy; {new Date().getFullYear()} {PROFILE.fullName}
        </span>
      </footer>
    </section>
  );
}
