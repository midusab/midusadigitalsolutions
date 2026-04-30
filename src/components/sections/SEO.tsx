import { motion } from "motion/react";
import { Search, Zap, BarChart3, Target, CheckCircle2 } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

export default function SEO() {
  const seoFeatures = [
    {
      title: "Technical SEO",
      desc: "We optimize your site's architecture, meta tags, and schema markup for Google's latest algorithms.",
      icon: Search,
      color: "bg-blue-500"
    },
    {
      title: "Speed Performance",
      desc: "Lightning-fast load times that lower bounce rates and improve your quality score.",
      icon: Zap,
      color: "bg-amber-500"
    },
    {
      title: "Conversion Tracking",
      desc: "Advanced analytics setup to track your ROI and see exactly where your customers come from.",
      icon: BarChart3,
      color: "bg-emerald-500"
    }
  ];

  return (
    <section id="seo" className="py-24 bg-slate-50/50 overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionTitle 
              tag="Visibility"
              title="Dominate Your Market with Professional SEO"
              subtitle="Having a beautiful website is only half the battle. We ensure your ideal clients actually find you when they're ready to buy."
            />
            
            <div className="space-y-8 mt-10">
              {seoFeatures.map((feature, idx) => (
                <motion.div 
                  key={`seo-feature-${idx}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className={`w-14 h-14 rounded-2xl ${feature.color}/10 flex items-center justify-center text-slate-800 shrink-0 group-hover:scale-110 transition-transform`}>
                    <feature.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Target size={20} />
              </div>
              <p className="text-slate-600 font-bold">92% of our clients see Page 1 results within 6 months.</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main SEO Visual */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" 
                alt="SEO Analytics Dashboard"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
            </div>

            {/* Floating Stats UI */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 glass p-6 rounded-3xl shadow-2xl z-20 border border-white/40 w-56"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white">
                  <BarChart3 size={20} />
                </div>
                <p className="font-display font-bold text-slate-900">Traffic Spike</p>
              </div>
              <div className="h-24 w-full flex items-end gap-1">
                {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                  <motion.div 
                    key={`bar-${i}`}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
                    className="flex-1 bg-emerald-500/20 rounded-t-sm relative group"
                  >
                    <div className="absolute inset-0 bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-sm" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Google Result Preview */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-8 -left-8 glass p-5 rounded-2xl shadow-2xl z-20 border border-white/40 max-w-xs"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full" />
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  <div className="h-2 w-3/4 bg-primary/20 rounded-full" />
                </div>
                <div className="h-2 w-1/2 bg-slate-50 rounded-full" />
              </div>
            </motion.div>

            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/[0.03] rounded-full -z-10 blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
