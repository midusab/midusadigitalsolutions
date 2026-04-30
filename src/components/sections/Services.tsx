import { motion } from "motion/react";
import { Rocket } from "lucide-react";
import { services } from "../../data/services";

export default function Services() {
  return (
    <section id="services" className="bg-slate-50/50 relative py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-black tracking-[0.2em] text-xs uppercase mb-4"
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 group relative overflow-hidden bg-white border border-slate-200/60"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity blur-2xl rounded-full -mr-10 -mt-10`}></div>
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-[1px] mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                <div className="w-full h-full bg-white rounded-[15px] flex items-center justify-center">
                  <service.icon size={28} className="text-slate-800" />
                </div>
              </div>

              <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors text-slate-900">
                {service.title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed font-medium group-hover:text-slate-600 transition-colors">
                {service.description}
              </p>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-black tracking-widest text-slate-300 uppercase group-hover:text-primary transition-colors">Learn More</span>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Rocket size={14} className="group-hover:text-white transition-transform group-hover:scale-125" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
