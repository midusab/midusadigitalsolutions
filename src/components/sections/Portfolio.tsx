import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, X, CheckCircle2, Globe, Calendar } from "lucide-react";
import { useState } from "react";
import { projects, type Project } from "../../data/projects";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-black tracking-[0.2em] text-xs uppercase mb-4"
            >
              Our Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-display font-bold text-slate-900"
            >
              Recent Projects That <span className="text-gradient">Deliver Results</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-full md:w-auto"
          >
            <button className="btn-secondary w-full md:w-auto">View All Projects</button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={`portfolio-project-${project.title.replace(" ", "-")}-${idx}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-[2.5rem] cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-700 bg-slate-100"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="glass p-6 rounded-3xl border border-white/20 shadow-2xl flex justify-between items-end">
                  <div>
                    <span className="text-primary text-[10px] font-black tracking-widest uppercase mb-1 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-display font-bold text-slate-900 leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-[0_5px_15px_rgba(0,102,255,0.3)] transition-colors shrink-0 ml-4"
                  >
                    <ExternalLink size={20} />
                  </motion.div>
                </div>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-primary/20 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative w-full max-w-5xl max-h-[90vh] glass-card overflow-hidden flex flex-col md:flex-row bg-white border border-slate-200"
            >
              <button 
                className="absolute top-6 right-6 z-20 w-10 h-10 glass rounded-full flex items-center justify-center text-slate-400 hover:text-primary hover:bg-primary/5 transition-all shadow-sm"
                onClick={() => setSelectedProject(null)}
              >
                <X size={24} />
              </button>

              {/* Left Column: Image & Gallery */}
              <div className="w-full md:w-1/2 h-[300px] md:h-auto overflow-y-auto custom-scrollbar bg-slate-50">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full aspect-video md:aspect-[4/5] object-cover" />
                <div className="grid grid-cols-2 gap-2 p-2">
                  {selectedProject.gallery.map((img, i) => (
                    <img key={i} src={img} alt={`${selectedProject.title} gallery ${i}`} className="w-full aspect-square object-cover rounded-lg hover:opacity-80 transition-opacity cursor-zoom-in" />
                  ))}
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto custom-scrollbar flex flex-col">
                <div className="mb-8">
                  <div className="flex items-center gap-4 text-xs font-bold tracking-widest text-primary uppercase mb-4">
                    <span className="px-3 py-1 bg-primary/5 border border-primary/10 rounded-full">{selectedProject.category}</span>
                    <div className="flex items-center gap-1 text-slate-400"><Calendar size={14} /> {selectedProject.date}</div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-slate-900">{selectedProject.title}</h2>
                  <p className="text-slate-600 font-medium leading-relaxed mb-8">
                    {selectedProject.longDescription}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Client</h4>
                    <p className="font-display font-bold text-slate-900">{selectedProject.client}</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Live Link</h4>
                    <a href="#" className="font-display font-bold text-primary flex items-center gap-2 hover:underline">
                      View Live Site <Globe size={16} />
                    </a>
                  </div>
                </div>

                <div className="mb-10">
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Key Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                        <CheckCircle2 size={16} className="text-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <button className="btn-primary w-full shadow-lg" onClick={() => setSelectedProject(null)}>
                    Start a Project Like This
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

