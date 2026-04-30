import { motion } from "motion/react";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
          alt="Modern Office Background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-primary/5"></div>
      </div>

      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/10 blur-[120px] rounded-full" />

      <div className="section-container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full text-xs font-bold tracking-widest text-primary border border-primary/10 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            KICKSTART YOUR DIGITAL JOURNEY
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-black leading-[1.1] mb-8 pb-1 text-slate-900">
            We Build Websites That <span className="text-gradient">Bring You Clients</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
            Modern, high-performance websites designed for ambitious businesses. We combine premium aesthetics with conversion science to grow your brand.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button key="btn-start" className="btn-primary" onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}>
              Start Your Project <ArrowRight size={20} />
            </button>
            <button key="btn-portfolio" className="btn-secondary" onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}>
              View Portfolio <Play size={18} fill="currentColor" />
            </button>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {["High Conversion", "SEO Optimized", "Ultra Fast Loading"].map((item, idx) => (
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
          {/* Main Visual: Floating Cards */}
          <div className="relative z-20 space-y-6">
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card p-6 w-72 ml-auto"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Play size={16} className="text-primary" />
                </div>
                <div>
                  <div className="h-2 w-24 bg-white/20 rounded-full mb-2"></div>
                  <div className="h-2 w-16 bg-white/10 rounded-full"></div>
                </div>
              </div>
              <div className="h-32 w-full bg-gradient-to-br from-white/5 to-white/10 rounded-xl"></div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="glass-card p-6 w-80 mr-auto -mt-12"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="h-3 w-32 bg-accent/20 rounded-full"></div>
                <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20"></div>
              </div>
              <div className="flex gap-3">
                <div className="h-20 w-1/3 bg-white/5 rounded-lg"></div>
                <div className="h-20 w-2/3 bg-white/5 rounded-lg"></div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ x: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card p-4 w-64 absolute -bottom-10 -right-10 z-30"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent"></div>
                <div>
                  <div className="text-sm font-bold">New Client</div>
                  <div className="text-[10px] text-white/50">Project Approved</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Decorative Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full z-0"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-white/5 rounded-full z-0 opacity-50"></div>
        </motion.div>
      </div>
    </section>
  );
}
