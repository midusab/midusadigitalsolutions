import { motion } from "motion/react";

export default function About() {
  return (
    <div className="pt-32 pb-24 section-container">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-display font-bold mb-8 text-slate-900"
      >
        About <span className="text-gradient">Midusa Digital</span>
      </motion.h1>
      <p className="text-slate-600 text-lg max-w-3xl leading-relaxed">
        We are a premier digital agency focused on building high-end, conversion-optimized websites for businesses across Africa and beyond. Our mission is to bridge the gap between aesthetics and functionality.
      </p>
    </div>
  );
}
