import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { ArrowLeft, CheckCircle2, Calendar, User, Globe, ExternalLink } from "lucide-react";
import { useEffect } from "react";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Project Not Found</h2>
          <Link to="/" className="btn-primary">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="pt-32 pb-24">
      <div className="section-container">
        <Link 
          to="/#portfolio" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-bold text-sm mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 rounded-full text-[10px] font-black tracking-widest text-primary border border-primary/10 mb-6 uppercase">
              {project.category}
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-8 text-slate-900 leading-tight">
              {project.title}
            </h1>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
              {project.longDescription}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-slate-400">
                  <User size={14} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Client</span>
                </div>
                <p className="font-bold text-slate-900 text-sm">{project.client}</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-slate-400">
                  <Calendar size={14} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Date</span>
                </div>
                <p className="font-bold text-slate-900 text-sm">{project.date}</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-slate-400">
                  <Globe size={14} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Type</span>
                </div>
                <p className="font-bold text-slate-900 text-sm">{project.category}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/10 border border-slate-100 ring-8 ring-slate-50"
          >
            <img 
              src={project.image} 
              className="w-full aspect-square object-cover" 
              alt={project.title}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Features & Gallery */}
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-display font-bold mb-8 text-slate-900">Key Features</h2>
            <div className="space-y-4">
              {project.features.map((feature, idx) => (
                <motion.div
                  key={`feature-${idx}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="font-bold text-slate-700 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-3xl font-display font-bold mb-8 text-slate-900">Project Gallery</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {project.gallery.map((img, idx) => (
                <motion.div
                  key={`gallery-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="rounded-3xl overflow-hidden shadow-lg border border-slate-100 aspect-video group cursor-zoom-in"
                >
                  <img 
                    src={img} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={`${project.title} screenshot ${idx + 1}`}
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 bg-slate-900 rounded-[3rem] text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
          <h2 className="text-4xl font-display font-bold text-white mb-6 relative z-10">Ready to build something similar?</h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto relative z-10">
            Let's discuss how we can bring your vision to life with a custom, high-performance solution tailored to your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link to="/contact" className="btn-primary">
              Start Your Project
            </Link>
            <Link to="/#portfolio" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-display font-bold transition-all border border-white/10 flex items-center justify-center gap-2">
              View More Work <ExternalLink size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
