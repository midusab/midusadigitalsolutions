import { motion } from "motion/react";

interface SectionTitleProps {
  tag: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({ tag, title, subtitle, centered = false }: SectionTitleProps) {
  return (
    <div className={`${centered ? "text-center mx-auto" : ""} max-w-3xl mb-16`}>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-primary font-black tracking-[0.2em] text-xs mb-4"
      >
        {tag}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-slate-500 text-lg font-medium"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
