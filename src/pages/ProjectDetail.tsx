import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { ArrowLeft, CheckCircle2, Calendar, User, Globe, ExternalLink, Quote, TrendingUp } from "lucide-react";
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
          to="/portfolio" 
          className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors font-bold text-sm mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 rounded-full text-[10px] font-black tracking-widest text-primary border border-primary/10 mb-6 font-primary">
              {project.category.toLowerCase()}
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-8 text-slate-900 leading-[1.1]">
              {project.title}
            </h1>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
              {project.longDescription}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-slate-400">
                  <User size={14} />
                  <span className="text-[10px] font-black tracking-widest">client</span>
                </div>
                <p className="font-bold text-slate-900 text-sm">{project.client}</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-slate-400">
                  <Calendar size={14} />
                  <span className="text-[10px] font-black tracking-widest">date</span>
                </div>
                <p className="font-bold text-slate-900 text-sm">{project.date}</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-slate-400">
                  <Globe size={14} />
                  <span className="text-[10px] font-black tracking-widest">type</span>
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

        {/* Stats Section */}
        {project.stats && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {project.stats.map((stat, idx) => (
              <motion.div
                key={`stat-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm flex items-center gap-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary">
                  <TrendingUp size={28} />
                </div>
                <div>
                  <p className="text-3xl font-display font-black text-slate-900">{stat.value}</p>
                  <p className="text-xs font-bold text-slate-400 tracking-widest">{stat.label.toLowerCase()}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-16 mb-24">
          {/* Features */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-display font-bold mb-8 text-slate-900">Key Features</h2>
            <div className="space-y-4">
              {project.features.map((feature, idx) => (
                <motion.div
                  key={`feature-${idx}`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="font-bold text-slate-700 text-sm leading-relaxed">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Testimonial & Gallery Preview */}
          <div className="lg:col-span-2 space-y-16">
            {/* Project Testimonial */}
            {project.testimonial && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-10 md:p-12 bg-slate-900 rounded-[3rem] relative overflow-hidden"
              >
                <Quote className="absolute top-8 right-10 text-white/5" size={120} />
                <div className="relative z-10">
                  <p className="text-xl md:text-2xl text-white font-medium italic leading-relaxed mb-8">
                    "{project.testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    {project.testimonial.avatar && (
                      <img 
                        src={project.testimonial.avatar} 
                        className="w-14 h-14 rounded-full border-2 border-primary/30" 
                        alt={project.testimonial.author} 
                      />
                    )}
                    <div>
                      <p className="text-white font-display font-bold">{project.testimonial.author}</p>
                      <p className="text-slate-400 text-sm font-medium">{project.testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            <div>
              <h2 className="text-3xl font-display font-bold mb-8 text-slate-900">Visual Showcase</h2>
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
        </div>

        {/* Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-12 md:p-20 bg-slate-50 rounded-[4rem] text-center relative overflow-hidden border border-slate-100"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Inspired by this project?</h2>
            <p className="text-slate-500 mb-10 max-w-2xl mx-auto text-lg font-medium">
              We can help you achieve similar results. Let's discuss your vision and build a high-performance solution tailored to your brand's growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary px-10">
                Start Your Journey
              </Link>
              <Link to="/portfolio" className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-display font-bold transition-all border border-slate-200 hover:border-primary/30 flex items-center justify-center gap-2 shadow-sm">
                Explore More Work <ExternalLink size={20} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
