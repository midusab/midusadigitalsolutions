import { motion } from "motion/react";
import { ArrowRight, Play, CheckCircle2, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Dynamic Background Image with Overlay */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
          alt="Modern Office Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-primary/5"></div>
      </motion.div>

      {/* Floating Decorative Elements */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" 
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 blur-[120px] rounded-full" 
      />

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full text-xs font-bold tracking-widest text-primary border border-primary/10 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            kickstart your digital journey
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-display font-black leading-[1.1] mb-8 pb-1 text-slate-900"
          >
            We Build Websites That <span className="text-gradient">Bring You Clients</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl font-medium"
          >
            Modern, high-performance websites designed for ambitious businesses. We combine premium aesthetics with conversion science to grow your brand.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button key="btn-start" className="btn-primary" onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}>
              Start Your Project <ArrowRight size={20} />
            </button>
            <button key="btn-portfolio" className="btn-secondary" onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}>
              View Portfolio <Play size={18} fill="currentColor" />
            </button>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {["high conversion", "seo optimized", "ultra fast loading"].map((item, idx) => (
              <div key={`hero-feature-${idx}`} className="flex items-center gap-2 text-sm font-semibold text-slate-500">
                <CheckCircle2 size={16} className="text-primary" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          {/* Main Visual: Dynamic UI Showcase */}
          <div className="relative z-20">
            {/* Main Portal View */}
            <motion.div 
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/20 bg-white border border-slate-200 transform -rotate-2"
            >
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" 
                className="w-[500px] aspect-[4/3] object-cover"
                alt="Digital Platform Preview"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                <div className="glass p-4 rounded-2xl border border-white/20 shadow-2xl">
                  <p className="text-[10px] font-black tracking-widest text-white/70 mb-1">conversion tracking</p>
                  <h3 className="text-xl font-display font-bold text-white">+84% Revenue Growth</h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
                  <ArrowRight size={24} />
                </div>
              </div>
            </motion.div>

            {/* Floating Element: Booking UI */}
            <motion.div 
              animate={{ 
                y: [0, 20, 0],
                x: [0, 5, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-12 -right-12 glass p-6 rounded-3xl shadow-2xl z-30 border border-white/40 w-64"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 tracking-widest">new booking</p>
                  <p className="font-display font-bold text-slate-900 text-sm">Table for 4 at 7:00 PM</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ width: ["0%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="h-full bg-primary"
                  />
                </div>
              </div>
            </motion.div>

            {/* Floating Element: Lead Generation */}
            <motion.div 
              animate={{ 
                y: [0, -20, 0],
                x: [0, -5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-8 -left-12 glass p-5 rounded-3xl shadow-2xl z-30 border border-white/40 w-56"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Lead Captured</p>
                  <p className="text-[10px] text-slate-500 font-medium">Ready to convert</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-slate-100 rounded-full z-0 pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary/[0.02] rounded-full z-0 pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}
