import { motion } from "motion/react";
import { Send } from "lucide-react";

export default function CTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="glass-card mb-24 p-12 text-center relative overflow-hidden bg-slate-50 border border-slate-100 section-container"
    >
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 blur-3xl -ml-16 -mt-16"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/10 blur-3xl -mr-16 -mb-16"></div>
      
      <h2 className="text-4xl md:text-5xl font-display font-medium mb-6 relative z-10 text-slate-900">
        Ready to Take Your <span className="text-gradient">Business Online?</span>
      </h2>
      <p className="text-slate-600 mb-10 max-w-xl mx-auto relative z-10 text-lg font-medium">
        Let's start your journey today. Get a high-converting website that truly represents your brand.
      </p>
      <button className="btn-primary mx-auto relative z-10 px-12 py-5 text-lg shadow-2xl">
        Start Your Project <Send size={20} />
      </button>
    </motion.div>
  );
}
