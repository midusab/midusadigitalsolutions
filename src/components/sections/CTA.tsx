import { motion } from "motion/react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CTA() {
  return (
    <Card className="mb-24 relative overflow-hidden glass-card border-none section-container shadow-none py-16 md:py-24 px-8 md:px-16 text-center rounded-[3rem]">
      <div className="absolute top-0 left-0 w-32 h-32 bg-primary/20 blur-3xl -ml-16 -mt-16"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent/20 blur-3xl -mr-24 -mb-24"></div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-display font-black mb-6 text-slate-900 leading-[1.1]">
          Ready to Take Your <span className="text-gradient">Business Online?</span>
        </h2>
        <p className="text-slate-600 mb-12 max-w-xl mx-auto text-lg md:text-xl font-medium">
          Let's start your journey today. Get a high-converting website that truly represents your brand.
        </p>
        <Button 
          variant="premium" 
          size="xl" 
          className="mx-auto px-12 py-8 text-xl shadow-2xl shadow-primary/30"
          onClick={() => window.location.href = "/contact"}
        >
          Start Your Project <Send size={24} />
        </Button>
      </motion.div>
    </Card>
  );
}
