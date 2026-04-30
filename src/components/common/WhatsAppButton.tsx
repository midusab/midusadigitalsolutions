import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/254112478220"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.5)] cursor-pointer group"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
      <MessageCircle size={32} className="relative z-10" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 bg-white text-navy px-4 py-2 rounded-xl font-bold text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-white/20">
        Chat with us on WhatsApp
        {/* Triangle */}
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-white rotate-45"></div>
      </div>
    </motion.a>
  );
}
