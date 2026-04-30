import { motion } from "motion/react";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function Card({ children, className = "", delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`glass-card bg-white border border-slate-200/60 shadow-sm ${className}`}
    >
      {children}
    </motion.div>
  );
}
