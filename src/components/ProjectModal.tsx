'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState<number | null>(null);

  const getYoutubeEmbedUrl = (url: string) => {
    let videoId = '';
    if (url.includes('v=')) {
      videoId = url.split('v=')[1].split('&')[0];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    }
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

  const isYoutube = (url: string) => url.includes('youtube.com') || url.includes('youtu.be');

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedGalleryIndex === null || !project?.gallery) return;
      
      if (e.key === 'ArrowLeft') {
        setSelectedGalleryIndex((prev) => (prev !== null ? (prev - 1 + project.gallery!.length) % project.gallery!.length : null));
      } else if (e.key === 'ArrowRight') {
        setSelectedGalleryIndex((prev) => (prev !== null ? (prev + 1) % project.gallery!.length : null));
      } else if (e.key === 'Escape') {
        setSelectedGalleryIndex(null);
      }
    };

    if (selectedGalleryIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedGalleryIndex, project?.gallery]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.main
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl max-h-[90vh] bg-[#1B4F8C] rounded-3xl overflow-y-auto shadow-2xl ring-1 ring-white/10 animate-fluid custom-scrollbar"
          >
            {/* Modal Header / Hero Section */}
            <header className="relative h-[300px] md:h-[450px] overflow-hidden">
              <img
                alt={project.title}
                className="w-full h-full object-cover"
                src={project.image}
                referrerPolicy="no-referrer"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B4F8C] via-transparent to-black/30"></div>
              
              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close Case Study"
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-all border border-white/20 z-50 shadow-lg"
              >
                <X size={24} strokeWidth={2.5} />
              </button>

              {/* Hero Content */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-4 py-1.5 bg-[#06B6D4] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg shadow-cyan-500/20">
                    {project.category}
                  </span>
                  <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md text-white/80 text-xs font-bold rounded-full border border-white/10">
                    {project.year}
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-md">
                  {project.title}
                </h1>
                <p className="text-cyan-400 text-lg font-medium">{project.client}</p>
              </div>
            </header>

            {/* Content Body */}
            <section className="p-8 md:p-12 space-y-12">
              {/* Project Metadata Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-card p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <p className="text-cyan-400 text-sm font-bold uppercase tracking-widest mb-2">Duration</p>
                  <p className="text-white text-xl">{project.duration}</p>
                </div>
                <div className="glass-card p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <p className="text-cyan-400 text-sm font-bold uppercase tracking-widest mb-2">Client</p>
                  <p className="text-white text-xl">{project.client}</p>
                </div>
                <div className="glass-card p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <p className="text-cyan-400 text-sm font-bold uppercase tracking-widest mb-2">Year</p>
                  <p className="text-white text-xl">{project.year}</p>
                </div>
              </div>

              {/* Project Overview */}
              <div className="max-w-3xl">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                  Project Overview
                  <span className="ml-4 h-0.5 w-20 bg-[#06B6D4] rounded-full"></span>
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* Narrative Section */}
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">The Challenge</h3>
                  <p className="text-blue-200/80 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Our Solution</h3>
                  <p className="text-blue-200/80 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Key Results */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Key Results</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.results.map((result, i) => (
                    <div
                      key={i}
                      className="bg-cyan-500/10 border border-cyan-500/30 p-8 rounded-2xl text-center flex flex-col items-center justify-center"
                    >
                      <span className="text-3xl font-black text-cyan-400 mb-2">{result.value}</span>
                      <span className="text-cyan-100 text-sm font-medium">{result.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <h3 className="text-sm font-bold text-blue-300 uppercase tracking-widest mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-blue-600/20 text-blue-100 text-sm rounded-lg border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Media Gallery - Simplified Scrollable Row */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-white flex items-center">
                    Project Media
                    <span className="ml-4 h-0.5 w-16 bg-cyan-accent rounded-full opacity-30"></span>
                  </h2>
                  
                  <div className="relative group/gallery">
                    <div className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory custom-scrollbar scroll-smooth">
                      {project.gallery.map((item, i) => (
                        <button 
                          key={i} 
                          onClick={() => setSelectedGalleryIndex(i)}
                          className="flex-none w-[280px] md:w-[400px] aspect-[16/10] rounded-2xl overflow-hidden bg-black/40 border border-white/10 ring-1 ring-white/5 snap-start shadow-xl transition-all hover:scale-[1.02] hover:border-cyan-accent/50 group/item"
                        >
                          {item.type === 'video' ? (
                            <div className="relative w-full h-full">
                              {isYoutube(item.url) ? (
                                <div className="w-full h-full bg-slate-900 flex items-center justify-center">
                                  <span className="text-white font-bold text-xs">YOUTUBE VIDEO</span>
                                </div>
                              ) : (
                                <video 
                                  src={item.url} 
                                  muted loop playsInline
                                  className="w-full h-full object-cover"
                                  onMouseEnter={(e) => e.currentTarget.play()}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.pause();
                                    e.currentTarget.currentTime = 0;
                                  }}
                                />
                              )}
                              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover/item:text-cyan-accent transition-colors">
                                <Play size={16} fill="currentColor" />
                              </div>
                            </div>
                          ) : (
                            <img 
                              src={item.url} 
                              alt={`Gallery ${i + 1}`}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110"
                            />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Lightbox for Gallery Items */}
              {selectedGalleryIndex !== null && project.gallery && (
                createPortal(
                  <div className="fixed inset-0 z-[10001] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-12 lg:p-24" onClick={() => setSelectedGalleryIndex(null)}>
                    
                    <button 
                      onClick={() => setSelectedGalleryIndex(null)}
                      className="absolute top-8 right-8 text-white hover:text-cyan-accent transition-all z-[10002] bg-white/5 hover:bg-white/10 p-3 rounded-full border border-white/10"
                    >
                      <X size={32} />
                    </button>

                    <button 
                      onClick={(e) => { e.stopPropagation(); setSelectedGalleryIndex((selectedGalleryIndex - 1 + project.gallery!.length) % project.gallery!.length); }}
                      className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-cyan-accent transition-all z-[10002] bg-white/5 hover:bg-white/10 p-4 rounded-full border border-white/10"
                    >
                      <ChevronLeft size={40} />
                    </button>

                    <button 
                      onClick={(e) => { e.stopPropagation(); setSelectedGalleryIndex((selectedGalleryIndex + 1) % project.gallery!.length); }}
                      className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-cyan-accent transition-all z-[10002] bg-white/5 hover:bg-white/10 p-4 rounded-full border border-white/10"
                    >
                      <ChevronRight size={40} />
                    </button>

                    <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={selectedGalleryIndex}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.05 }}
                          className="w-full h-full flex items-center justify-center"
                        >
                          {project.gallery[selectedGalleryIndex].type === 'video' ? (
                            isYoutube(project.gallery[selectedGalleryIndex].url) ? (
                              <iframe 
                                key={project.gallery[selectedGalleryIndex].url}
                                src={getYoutubeEmbedUrl(project.gallery[selectedGalleryIndex].url)} 
                                className="w-full md:w-[80vw] aspect-video max-w-full rounded-xl shadow-2xl"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                              />
                            ) : (
                              <video key={project.gallery[selectedGalleryIndex].url} src={project.gallery[selectedGalleryIndex].url} autoPlay controls className="max-w-full max-h-full object-contain rounded-xl shadow-2xl" />
                            )
                          ) : (
                            <img key={project.gallery[selectedGalleryIndex].url} src={project.gallery[selectedGalleryIndex].url} className="max-w-full max-h-full object-contain rounded-xl shadow-2xl" alt="Gallery Detail" />
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    <div className="absolute bottom-8 text-white/30 text-xs font-bold tracking-[0.4em] uppercase">
                      {selectedGalleryIndex + 1} / {project.gallery.length}
                    </div>
                  </div>,
                  document.body
                )
              )}

              {/* Project Outcome */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-white mb-4">Project Outcome</h3>
                <p className="text-blue-200/80 leading-relaxed">
                  {project.outcome}
                </p>
              </div>
            </section>

            {/* Footer CTA */}
            <footer className="p-8 md:px-12 md:pb-12 bg-black/20 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  onClose();
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 300);
                }}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-xl shadow-blue-500/20"
              >
                Start Similar Project
              </button>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white/80 font-bold rounded-xl hover:bg-white/10 transition-colors border border-white/10"
              >
                Close Case Study
              </button>
            </footer>
          </motion.main>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
