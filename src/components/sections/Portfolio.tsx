import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

export default function Portfolio() {
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
            <Link to="/portfolio" className="btn-secondary w-full md:w-auto inline-flex justify-center items-center">
              View All Projects
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={`portfolio-project-${project.title.replace(" ", "-")}-${idx}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative overflow-hidden rounded-[2.5rem] cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-700 bg-slate-100"
            >
              <Link to={`/portfolio/${project.id}`}>
                <div className="aspect-[4/5] overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1, rotate: 1 }}
                    transition={{ duration: 0.8 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Information Card */}
                <div className="absolute inset-x-6 bottom-6 translate-y-4 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                  <div className="glass p-6 rounded-3xl border border-white/40 shadow-2xl flex justify-between items-end backdrop-blur-xl bg-white/10">
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

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none"></div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

