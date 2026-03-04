import React, { useState } from 'react';
import { motion } from 'motion/react';
import Contact from '../components/Contact';
import { projects } from '../data/projects';
import ProjectModal from '../components/ProjectModal';
import { Project } from '../types';

const categories = ["All", "Events", "Production", "Immersive Tech", "Amusement Parks"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => {
        if (activeCategory === "Events") return p.category === "Event Organization";
        if (activeCategory === "Production") return p.category === "Production House";
        if (activeCategory === "Immersive Tech") return p.category === "Immersive Tech Studio";
        if (activeCategory === "Amusement Parks") return p.category === "Amusement Park Facilities";
        return true;
      });

  return (
    <div className="pt-24 bg-background-light dark:bg-background-dark">
      {/* Hero Section */}
      <section className="px-6 md:px-20 pt-16 pb-12 max-w-[1440px] mx-auto">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight text-slate-900 dark:text-white"
          >
            The Gallery of <span className="gradient-text">Innovation</span>
          </motion.h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            Transforming Visions into Reality.
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-500 max-w-2xl">
            Explore our latest work across the realms of cinematic production, immersive technology, and experiential design.
          </p>
        </div>
      </section>

      {/* Filter System */}
      <section className="px-6 md:px-20 mb-12 max-w-[1440px] mx-auto">
        <div className="flex flex-wrap border-b border-slate-200 dark:border-slate-800 gap-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`pb-4 text-sm font-bold uppercase tracking-widest border-b-2 transition-all ${
                activeCategory === cat 
                ? 'border-cyan-accent text-cyan-accent' 
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Project Grid */}
      <section className="bg-deep-navy py-20 px-6 md:px-20">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative flex flex-col gap-6 cursor-pointer ${index % 2 !== 0 ? 'md:mt-12' : ''}`}
              onClick={() => openModal(project)}
            >
              <div className="relative overflow-hidden rounded-xl aspect-[16/10] bg-slate-800 shadow-2xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                <div className="absolute inset-x-0 bottom-0 p-8 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(project);
                    }}
                    className="bg-white text-background-dark px-6 py-3 rounded-full font-bold flex items-center gap-2 text-sm hover:bg-cyan-accent hover:text-white transition-colors"
                  >
                    View Case Study
                    <span className="material-icons text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <span className="inline-block self-start px-3 py-1 border border-cyan-accent text-[10px] font-bold uppercase tracking-widest text-cyan-accent rounded">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white leading-tight">
                  {project.title}
                </h3>
                <p className="text-slate-300 font-medium">{project.client}</p>
                <p className="text-slate-400 text-sm leading-relaxed max-w-md line-clamp-3">
                  {project.overview}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer CTA Block */}
      <section className="px-6 md:px-20 py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1440px] mx-auto">
          <div className="bg-slate-900 dark:bg-primary/5 border border-slate-800 dark:border-primary/20 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Ready to start your project?
              </h2>
              <p className="text-slate-400 text-lg max-w-lg">
                Let's collaborate to build the next generation of digital and physical experiences.
              </p>
            </div>
            <a href="#contact" className="min-w-[280px] py-5 px-10 rounded-full font-bold text-white bg-gradient-to-r from-accent-blue to-cyan-accent hover:scale-[1.02] active:scale-95 transition-all text-lg shadow-xl shadow-accent-blue/20 text-center">
              Request a Quotation
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
