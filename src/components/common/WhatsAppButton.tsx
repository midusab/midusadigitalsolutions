import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      <Tooltip>
        <TooltipTrigger
          render={
            <motion.a
              href="https://wa.me/254112478220"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(37,211,102,0.5)] cursor-pointer group relative"
            />
          }
        >
          <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
          <MessageCircle size={32} className="relative z-10" />
        </TooltipTrigger>
        <TooltipContent side="left" className="mr-4 bg-white text-navy font-bold shadow-xl border-slate-100">
          Chat with us on WhatsApp
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
