import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Portfolio from "../components/sections/Portfolio";
import Pricing from "../components/sections/Pricing";
import Process from "../components/sections/Process";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";
import SEO from "../components/sections/SEO";
import DesignPhilosophy from "../components/sections/DesignPhilosophy";

export default function Home() {
  return (
    <main>
      <Hero key="hero-section" />
      
      <div key="sep-1" className="w-full h-px bg-slate-100" />
      
      <Services key="services-section" />
      
      <div key="sep-seo-1" className="w-full h-px bg-slate-100" />

      <SEO key="seo-section" />

      <div key="sep-philosophy" className="w-full h-px bg-slate-100" />

      <DesignPhilosophy key="philosophy-section" />
      
      <div key="sep-2" className="w-full h-px bg-slate-100" />
      
      <Portfolio key="portfolio-section" />
      
      <div key="sep-3" className="w-full h-px bg-slate-100" />
      
      <Pricing key="pricing-section" />
      
      <div key="sep-4" className="w-full h-px bg-slate-100" />
      
      <Process key="process-section" />
      
      <div key="sep-5" className="w-full h-px bg-slate-100" />
      
      <Testimonials key="testimonials-section" />
      
      <div key="sep-6" className="w-full h-px bg-slate-100 pb-24" />
      
      <CTA key="cta-section" />
    </main>
  );
}
