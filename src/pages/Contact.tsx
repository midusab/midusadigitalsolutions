import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-32 pb-24 section-container">
      <div className="grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-5xl font-display font-bold mb-8 text-slate-900">
            Let's <span className="text-gradient">Work Together</span>
          </h1>
          <p className="text-slate-600 text-lg mb-12 font-medium">
            Ready to scale your business? Fill out the form or reach out directly to start your digital transformation.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Email Us</p>
                <p className="font-display font-bold text-slate-900">bochieng228@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Call Us</p>
                <p className="font-display font-bold text-slate-900">+254 112 478 220</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Location</p>
                <p className="font-display font-bold text-slate-900">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-slate-50 p-6 md:p-10 rounded-[2.5rem] border border-slate-100"
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-2">Name</label>
                <input type="text" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-2">Email</label>
                <input type="email" className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-2">Project Type</label>
              <select className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none cursor-pointer">
                <option>Business Website</option>
                <option>E-commerce</option>
                <option>Portfolio</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-2">Message</label>
              <textarea rows={4} className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" placeholder="Tell us about your project..."></textarea>
            </div>
            <button className="btn-primary w-full py-5 text-lg shadow-xl shadow-primary/20">
              Send Message <Send size={20} />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
