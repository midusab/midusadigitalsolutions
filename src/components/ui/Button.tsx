import { motion } from "motion/react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, variant = "primary", className = "", onClick }: ButtonProps) {
  const baseClasses = "btn-" + variant;
  
  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </motion.button>
  );
}
