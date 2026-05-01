import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { plans } from "../../data/pricing";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50/50">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-black tracking-[0.2em] text-xs mb-4"
          >
            pricing plans
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6 text-slate-900"
          >
            Transparent Pricing for <span className="text-gradient">Every Budget</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 font-medium"
          >
            All prices are in Kenyan Shillings (KES). No hidden fees, just pure value for your business.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 gap-y-12 items-start">
          {plans.map((plan, idx) => (
            <motion.div
              key={`pricing-plan-${plan.name}-${idx}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className={`relative flex flex-col h-full overflow-hidden border-none shadow-none rounded-[2rem] ${
                plan.highlight 
                  ? "bg-slate-900 text-white lg:scale-110 z-10 shadow-2xl shadow-primary/20" 
                  : "bg-white border border-slate-200/60 shadow-sm"
              }`}>
                {plan.highlight && (
                  <>
                    <div key="most-popular-badge" className="absolute top-0 right-0 px-6 py-2 bg-primary text-white text-[10px] font-black tracking-[0.2em] rounded-bl-3xl z-20">
                      most popular
                    </div>
                    <motion.div 
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0]
                      }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute -top-32 -right-32 w-80 h-80 bg-primary/20 blur-[120px] rounded-full pointer-events-none" 
                    />
                  </>
                )}

                <CardHeader className="relative z-10 pt-10">
                  <CardTitle className={`text-2xl font-display font-bold mb-2 ${plan.highlight ? "text-white" : "text-slate-900"}`}>{plan.name}</CardTitle>
                  <CardDescription className={`${plan.highlight ? "text-slate-400" : "text-slate-500"} text-sm mb-4 font-medium`}>{plan.description}</CardDescription>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className={`text-sm font-bold ${plan.highlight ? "text-primary" : "text-slate-400"}`}>KES</span>
                    <span className={`text-4xl font-display font-black ${plan.highlight ? "text-white" : "text-slate-900"}`}>{plan.price}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4 mb-10 flex-grow relative z-10 pt-6">
                  {plan.features.map((feature, fIdx) => (
                    <div key={`feature-${plan.name}-${fIdx}`} className={`flex items-start gap-3 text-sm font-medium ${plan.highlight ? "text-slate-300" : "text-slate-600"}`}>
                      <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlight ? "bg-primary text-white" : "bg-primary/10 text-primary"}`}>
                        <Check size={12} />
                      </div>
                      {feature}
                    </div>
                  ))}
                </CardContent>

                <CardFooter className="relative z-10 pb-10">
                  <Button
                    variant={plan.highlight ? "premium" : "outline"}
                    size="xl"
                    className={`w-full group ${!plan.highlight ? "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100" : ""}`}
                  >
                    {plan.cta} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center text-slate-400 text-sm bg-white border border-slate-100 p-6 rounded-3xl max-w-xl mx-auto shadow-sm"
        >
          Need something custom? <span className="text-primary font-bold cursor-pointer hover:underline">Contact us for a tailored quote.</span>
        </motion.div>
      </div>
    </section>
  );
}
