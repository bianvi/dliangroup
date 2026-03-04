import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
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
                onClick={onClose}
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
