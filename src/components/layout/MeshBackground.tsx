import { motion } from "motion/react";

export default function MeshBackground() {
  return (
    <div className="mesh-gradient">
      <motion.div
        animate={{
          x: [0, 150, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="mesh-circle w-[800px] h-[800px] bg-[#2E5BFF]/15 -top-48 -left-48"
      />
      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 180, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="mesh-circle w-[700px] h-[700px] bg-[#8A2BE2]/12 top-1/2 -right-48"
      />
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -150, 0],
          rotate: [0, 45, 0],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="mesh-circle w-[900px] h-[900px] bg-[#FFBF00]/08 bottom-0 left-1/4"
      />
      <motion.div
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="mesh-circle w-[600px] h-[600px] bg-[#4B0082]/10 top-1/4 left-1/2 blur-[150px]"
      />
    </div>
  );
}
