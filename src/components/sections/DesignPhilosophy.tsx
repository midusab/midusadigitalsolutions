import { motion } from "motion/react";
import { Layout, Cpu, Sparkles, Zap, Eye, Code2 } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

export default function DesignPhilosophy() {
  const pillars = [
    {
      icon: <Layout className="text-secondary" size={24} />,
      title: "clean ui/ux",
      description: "minimalist interfaces focused on clarity, removing friction and guiding users naturally through every interaction.",
      color: "bg-secondary/10"
    },
    {
      icon: <Cpu className="text-accent" size={24} />,
      title: "ai-powered",
      description: "we leverage cutting-edge ai models to accelerate development, optimize performance, and create smarter user experiences.",
      color: "bg-accent/10"
    },
    {
      icon: <Sparkles className="text-emerald-500" size={24} />,
      title: "modern aesthetics",
      description: "bold typography and intentional whitespace blended with modern design trends that elevate your brand's presence.",
      color: "bg-emerald-500/10"
    }
  ];

  const highlights = [
    { label: "intelligent workflows", icon: <Zap size={16} /> },
    { label: "predictive analytics", icon: <Eye size={16} /> },
    { label: "automated scaling", icon: <Code2 size={16} /> }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionTitle 
              tag="our philosophy"
              title="where clean design meets intelligent code"
              subtitle="we don't just build websites; we craft digital ecosystems that are beautiful at the surface and intelligent at the core. our process combines human creativity with artificial intelligence to deliver results faster and more accurately."
            />
            
            <div className="grid gap-6 mt-12">
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={`pillar-${idx}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 p-6 rounded-3xl border border-slate-50 hover:border-slate-100 transition-all hover:bg-slate-50/50 group"
                >
                  <div className={`w-14 h-14 shrink-0 rounded-2xl ${pillar.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-slate-900 mb-2">{pillar.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-medium">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden border-8 border-slate-50 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" 
                alt="AI Development"
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass p-6 rounded-2xl border border-white/20 backdrop-blur-md bg-white/10">
                  <p className="text-white font-display font-bold mb-4">ai-driven enhancements</p>
                  <div className="flex flex-wrap gap-3">
                    {highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-lg text-white text-[10px] font-bold tracking-widest border border-white/5 uppercase">
                        {h.icon}
                        {h.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 p-4 bg-secondary text-white rounded-2xl shadow-xl shadow-secondary/30 z-10"
            >
              <Cpu size={32} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
