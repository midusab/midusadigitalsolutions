import { motion } from "motion/react";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[200] bg-white flex items-center justify-center">
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-slate-100 border-t-primary rounded-full mb-6 mx-auto"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-display font-bold text-2xl tracking-tighter text-slate-900"
        >
          Midusa<span className="text-primary">Digital</span>
        </motion.div>
      </div>
    </div>
  );
}
