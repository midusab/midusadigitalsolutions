import { motion } from "motion/react";

export default function About() {
  return (
    <main className="pt-32 pb-24">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-primary font-black tracking-[0.2em] text-xs mb-4"
            >
              our agency
            </motion.p>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-8 text-slate-900 leading-tight">
              Crafting <span className="text-gradient">Digital Success</span> in Africa
            </h1>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
              Midusa Digital was born out of a simple observation: African businesses deserve world-class digital representation. We're not just building websites; we're building growth engines.
            </p>
            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="text-4xl font-display font-black text-primary mb-2">98%</h3>
                <p className="text-sm font-bold text-slate-500 tracking-widest">client satisfaction</p>
              </div>
              <div>
                <h3 className="text-4xl font-display font-black text-primary mb-2">150+</h3>
                <p className="text-sm font-bold text-slate-500 tracking-widest">projects delivered</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/10 border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                className="w-full h-full object-cover"
                alt="Our Team Workspace"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl border border-white/40 shadow-2xl max-w-[240px] hidden md:block">
              <p className="text-slate-900 font-display font-bold text-lg mb-2">Innovation First</p>
              <p className="text-slate-500 text-sm font-medium">We use the latest technologies to ensure your site is future-proof.</p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Strategic Design",
              desc: "Every pixel has a purpose. We design with your business goals in mind.",
              img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80"
            },
            {
              title: "Modern AI Stack",
              desc: "We use high-performance frameworks and AI-assisted development for lightning-fast delivery.",
              img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
            },
            {
              title: "Growth Focused",
              desc: "SEO and conversion optimization are baked into every project we launch.",
              img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
            }
          ].map((item, idx) => (
            <motion.div
              key={`about-feature-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card group overflow-hidden bg-white border border-slate-100"
            >
              <div className="h-48 overflow-hidden">
                <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-display font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
