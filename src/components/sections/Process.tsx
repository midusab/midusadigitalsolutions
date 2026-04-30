import { motion } from "motion/react";
import { MessageSquare, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    title: "Consultation",
    description: "We discuss your goals, target audience, and business needs to create a roadmap.",
    icon: MessageSquare,
  },
  {
    title: "Design",
    description: "Our designers craft a modern, high-end UI mockup that aligns with your brand identity.",
    icon: PenTool,
  },
  {
    title: "Development",
    description: "We turn the design into a fast, secure, and mobile-friendly functional website.",
    icon: Code,
  },
  {
    title: "Launch",
    description: "Your site goes live! We handle SEO, performance checks, and hand over the keys.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-white">
      {/* Background line */}
      <div className="absolute top-[41%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent hidden lg:block" />

      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-black tracking-[0.2em] text-xs uppercase mb-4"
          >
            How it works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900"
          >
            Our Simple <span className="text-gradient">4-Step Process</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={`process-step-${step.title.replace(" ", "-")}-${idx}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative group text-center"
            >
              <div className="w-20 h-20 mx-auto rounded-3xl bg-white border border-slate-100 flex items-center justify-center mb-8 relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-primary/5 group-hover:border-primary/20 shadow-sm hover:shadow-xl">
                <step.icon size={32} className="text-slate-800 transition-transform group-hover:scale-110 group-hover:text-primary" />
                
                {/* Step number badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white border-4 border-white flex items-center justify-center text-[10px] font-black font-display z-20 shadow-lg">
                  {idx + 1}
                </div>
              </div>

              <h3 className="text-xl font-display font-bold mb-4 text-slate-900">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-[200px] mx-auto group-hover:text-slate-700 transition-colors font-medium">
                {step.description}
              </p>

              {/* Decorative connector for mobile */}
              {idx !== steps.length - 1 && (
                <div className="lg:hidden w-[1px] h-12 bg-slate-100 mx-auto mt-8" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
