import { motion } from "motion/react";
import { Rocket } from "lucide-react";
import { services } from "../../data/services";

export default function Services() {
  return (
    <section id="services" className="bg-transparent relative py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-black tracking-[0.2em] text-xs mb-4"
          >
            Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900"
          >
            Digital Solutions for <span className="text-gradient">Every Business</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg font-medium"
          >
            We don't just build websites; we create digital assets that grow your brand and generate revenue automatically.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={`service-card-${service.title.replace(" ", "-")}-${idx}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ 
                y: -15,
                transition: { duration: 0.3 }
              }}
              className="glass-card group relative overflow-hidden border border-white/20 flex flex-col"
            >
              {/* Image Preview for Service */}
              <div className="h-48 overflow-hidden relative">
                 <img 
                   src={`https://images.unsplash.com/photo-${[
                     "1498050108023-c5249f4df085",
                     "1558655146-d09347e92766",
                     "1517248135467-4c7edcad34c4",
                     "1585747860715-2ba37e788b70",
                     "1460925895917-afdab827c52f",
                     "1499951360447-b19be8fe80f5"
                   ][idx]}?auto=format&fit=crop&q=80&w=600`} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   alt={service.title}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
              </div>

              <div className="p-8 relative mt-[-2rem]">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-[1px] mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-primary/5`}>
                  <div className="w-full h-full glass rounded-[15px] flex items-center justify-center border-none">
                    <service.icon size={28} className="text-slate-800" />
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors text-slate-900">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 leading-relaxed font-medium group-hover:text-slate-600 transition-colors mb-8">
                  {service.description}
                </p>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-black tracking-widest text-slate-300 group-hover:text-primary transition-colors">Digital Excellence</span>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Rocket size={14} className="group-hover:text-white transition-transform group-hover:scale-125" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
