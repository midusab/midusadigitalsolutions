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
    <section id="process" className="py-24 relative overflow-hidden bg-transparent">
      {/* Background line */}
      <div className="absolute top-[41%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent hidden lg:block" />

      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-black tracking-[0.2em] text-xs uppercase mb-4"
          >
            How It Works
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative group text-center"
            >
              <div className="relative mb-8">
                {/* Step Image Visual */}
                <div className="w-full aspect-square rounded-[2rem] overflow-hidden mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-500 border border-slate-100 relative">
                  <img 
                    src={[
                      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80",
                      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80",
                      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
                      "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80"
                    ][idx]} 
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Step Icon Badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center z-10 transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2 group-hover:rotate-3 shadow-xl">
                  <step.icon size={28} className="text-slate-800 transition-transform group-hover:scale-110 group-hover:text-primary" />
                  
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-slate-900 text-white border-2 border-white flex items-center justify-center text-[10px] font-black font-display z-20 shadow-lg">
                    {idx + 1}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-display font-bold mb-4 text-slate-900 mt-6">{step.title}</h3>
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
