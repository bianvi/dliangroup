import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { projects } from '../data/projects';
import ProjectModal from './ProjectModal';
import { Project } from '../types';

export default function Portfolio() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const categories = ['All', 'Event', 'Production', 'VR/AR', 'Park Facilities'];

  const filteredProjects = projects.filter(p => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Event") return p.category === "Event Organization";
    if (activeCategory === "Production") return p.category === "Production House";
    if (activeCategory === "VR/AR") return p.category === "Immersive Tech Studio";
    if (activeCategory === "Park Facilities") return p.category === "Amusement Park Facilities";
    return true;
  }).slice(0, 6);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const handleManualNav = (direction: 'next' | 'prev') => {
    setIsAutoplayEnabled(false);
    if (direction === 'next') nextSlide();
    else prevSlide();
  };

  // Autoplay logic
  useEffect(() => {
    if (!isAutoplayEnabled || filteredProjects.length <= 1) return;
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, [isAutoplayEnabled, filteredProjects.length]);

  // Sync scroll position with currentIndex without jumping the page vertically
  useEffect(() => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const children = container.children;
      const targetChild = children[currentIndex] as HTMLElement;
      
      if (targetChild) {
        const targetLeft = targetChild.offsetLeft - (container.offsetWidth / 2) + (targetChild.offsetWidth / 2);
        container.scrollTo({
          left: targetLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [currentIndex, filteredProjects]);

  return (
    <section className="relative z-10 py-40 bg-background-dark overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 mb-16 flex flex-col gap-12 items-center">
        <div className="space-y-6 text-center">
          <h2 className="text-xs uppercase tracking-[0.6em] text-cyan-accent font-bold">Showcase</h2>
          <h3 className="text-4xl md:text-6xl font-bold">Featured Projects</h3>
          <p className="text-lg md:text-xl text-medium-gray-text max-w-2xl font-normal leading-relaxed mt-6 mx-auto">
            Discover how Connection D'Lian has transformed ideas into immersive realities, creating breakthrough experiences that captivate audiences.
          </p>
          
          <div className="flex flex-wrap gap-x-8 gap-y-4 text-xs font-bold uppercase tracking-[0.3em] mt-8 justify-center">
            {categories.map((filter) => (
              <button 
                key={filter} 
                onClick={() => {
                  setActiveCategory(filter);
                  setCurrentIndex(0);
                }}
                className={`py-2 transition-all border-b-2 ${activeCategory === filter ? 'text-cyan-accent border-cyan-accent' : 'text-white/40 border-transparent hover:text-white'}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="relative group">
        <div 
          ref={carouselRef}
          className="carousel-container flex overflow-x-auto snap-x snap-mandatory gap-8 px-8 md:px-[calc((100vw-80rem)/2)] pb-16 custom-scrollbar"
        >
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className={`snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[50vw] aspect-[16/11] relative rounded-3xl overflow-hidden bg-deep-navy/20 shadow-2xl group/card cursor-pointer transition-all duration-500 ${
                currentIndex === index ? 'ring-2 ring-cyan-accent/50 scale-[1.02]' : 'opacity-50 grayscale-[0.5]'
              }`}
              onClick={() => {
                setCurrentIndex(index);
                openModal(project);
              }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/95 via-transparent to-transparent"></div>
              
              <div className="absolute inset-x-0 bottom-0 p-10 md:p-16 flex flex-col justify-end">
                <div className="flex justify-between items-end mb-2">
                  <div>
                    <span className="text-cyan-accent text-sm font-bold tracking-[0.3em] mb-2 block uppercase">{project.category}</span>
                    <h4 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h4>
                    <p className="text-white/70 font-normal text-sm">Client: {project.client}</p>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setExpandedIndex(expandedIndex === index ? null : index);
                    }}
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all active:scale-95 bg-cyan-accent/10 border border-cyan-accent/30 hover:bg-cyan-accent/20"
                  >
                    <span className="material-icons text-cyan-accent text-2xl">
                      {expandedIndex === index ? 'close' : 'add'}
                    </span>
                  </button>
                </div>

                <motion.div 
                  initial={false}
                  animate={{ height: expandedIndex === index ? 'auto' : 0, opacity: expandedIndex === index ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="bg-background-dark/75 backdrop-blur-md border border-cyan-accent/20 rounded-2xl p-6 mt-4">
                    <p className="text-white/90 text-sm leading-relaxed line-clamp-2">{project.overview}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-8 flex justify-end gap-6 mb-20">
          <button 
            onClick={() => handleManualNav('prev')}
            className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-cyan-accent hover:text-background-dark hover:border-cyan-accent transition-all duration-300"
          >
            <span className="material-icons">chevron_left</span>
          </button>
          <button 
            onClick={() => handleManualNav('next')}
            className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-cyan-accent hover:text-background-dark hover:border-cyan-accent transition-all duration-300"
          >
            <span className="material-icons">chevron_right</span>
          </button>
        </div>

        <div className="flex justify-center pb-20">
          <a href="#contact" className="primary-glow-btn px-12 py-5 bg-gradient-to-r from-accent-blue to-cyan-accent text-white rounded-full font-bold text-lg inline-flex items-center gap-3">
            Request a Quotation
            <span className="material-icons">receipt_long</span>
          </a>
        </div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
