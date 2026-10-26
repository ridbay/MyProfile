import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectSection from './sections/ProjectSection';
import EducationSection from './sections/EducationSection';
import BeyondSection from './sections/BeyondSection';
import TestimonialsSection from './sections/TestimonialsSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  return (
    <div className="bg-[#0C0C0C]" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <ProjectSection />
      <EducationSection />
      <BeyondSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
