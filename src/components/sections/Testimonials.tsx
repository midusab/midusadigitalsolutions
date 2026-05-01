import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-transparent">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-black tracking-[0.2em] text-xs mb-4"
          >
            Success Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900"
          >
            What Our <span className="text-gradient">Clients Say</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={`testimonial-card-${testimonial.name.replace(" ", "-")}-${idx}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 md:p-10 relative bg-white border border-slate-100 shadow-sm"
            >
              <Quote className="absolute top-8 right-8 text-primary/5" size={64} strokeWidth={1} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={`testimonial-star-${idx}-${i}`} size={16} className="fill-primary text-primary" />
                ))}
              </div>

              <p className="text-slate-600 font-medium italic mb-8 relative z-10 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-primary/10 shadow-sm"
                />
                <div>
                  <h4 className="font-display font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-slate-400 text-[10px] font-black tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
