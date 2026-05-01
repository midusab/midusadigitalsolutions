import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Portfolio from "../components/sections/Portfolio";
import Pricing from "../components/sections/Pricing";
import Process from "../components/sections/Process";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";
import SEO from "../components/sections/SEO";
import DesignPhilosophy from "../components/sections/DesignPhilosophy";
import ScrollReveal from "../components/common/ScrollReveal";

export default function Home() {
  return (
    <main>
      <Hero key="hero-section" />
      
      <div key="sep-1" className="w-full h-px bg-slate-100" />
      
      <ScrollReveal delay={0.1}>
        <Services key="services-section" />
      </ScrollReveal>
      
      <div key="sep-seo-1" className="w-full h-px bg-slate-100" />

      <ScrollReveal delay={0.2}>
        <SEO key="seo-section" />
      </ScrollReveal>

      <div key="sep-philosophy" className="w-full h-px bg-slate-100" />

      <ScrollReveal delay={0.1}>
        <DesignPhilosophy key="philosophy-section" />
      </ScrollReveal>
      
      <div key="sep-2" className="w-full h-px bg-slate-100" />
      
      <ScrollReveal delay={0.2}>
        <Portfolio key="portfolio-section" />
      </ScrollReveal>
      
      <div key="sep-3" className="w-full h-px bg-slate-100" />
      
      <ScrollReveal delay={0.1}>
        <Pricing key="pricing-section" />
      </ScrollReveal>
      
      <div key="sep-4" className="w-full h-px bg-slate-100" />
      
      <ScrollReveal delay={0.2}>
        <Process key="process-section" />
      </ScrollReveal>
      
      <div key="sep-5" className="w-full h-px bg-slate-100" />
      
      <ScrollReveal delay={0.1}>
        <Testimonials key="testimonials-section" />
      </ScrollReveal>
      
      <div key="sep-6" className="w-full h-px bg-slate-100 pb-24" />
      
      <ScrollReveal delay={0.3} direction="down">
        <CTA key="cta-section" />
      </ScrollReveal>
    </main>
  );
}
