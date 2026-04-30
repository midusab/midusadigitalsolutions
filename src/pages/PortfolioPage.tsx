import { motion } from "motion/react";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import { ExternalLink, Filter } from "lucide-react";
import { useState } from "react";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(projects.map(p => p.category))];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <main className="pt-32 pb-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-black tracking-[0.2em] text-xs mb-4"
          >
            case studies
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-bold text-slate-900 mb-8"
          >
            Our <span className="text-gradient">Portfolio</span>
          </motion.h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            Explore our latest work and see how we've helped businesses like yours dominate their digital landscape.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-widest transition-all border ${
                filter === cat
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                  : "bg-white text-slate-500 border-slate-100 hover:border-primary/20 hover:text-primary"
              }`}
            >
              {cat.toLowerCase()}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={`portfolio-project-${project.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
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
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="absolute inset-x-6 bottom-6 translate-y-4 group-hover:translate-y-0 transition-all duration-500 opacity-0 group-hover:opacity-100">
                  <div className="glass p-6 rounded-3xl border border-white/40 shadow-2xl flex justify-between items-end backdrop-blur-xl bg-white/10">
                    <div>
                      <span className="text-primary text-[10px] font-black tracking-widest mb-1 block">
                        {project.category.toLowerCase()}
                      </span>
                      <h3 className="text-xl font-display font-bold text-slate-900 leading-tight">
                        {project.title}
                      </h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-[0_5px_15px_rgba(0,102,255,0.3)]">
                      <ExternalLink size={20} />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none"></div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
