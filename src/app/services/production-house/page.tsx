'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import Contact from '../../../components/Contact';

export default function ProductionHouse() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoUrl = "https://res.cloudinary.com/dhgu45hvi/video/upload/v1772619953/production_house_kxyiro.webm";
  const productionServices = [
    {
      title: "TVC Production",
      category: "TV Commercials",
      desc: "High-stakes commercial production for global brands. We bridge the gap between creative vision and market-leading execution.",
      image: "/image/Production House/1.jpg"
    },
    {
      title: "Viral Clips",
      category: "Social Media",
      desc: "Fast-paced, high-engagement content for social dominance. Engineered for shareability and algorithmic impact.",
      image: "/image/Production House/2.jpg"
    },
    {
      title: "BTS Gallery",
      category: "Behind the scenes",
      desc: "Showcasing the craftsmanship and energy on set. A deep dive into our technical workflow and creative process.",
      image: "/image/Production House/3.jpg"
    }
  ];

  const featuredProjects = [
    {
      title: "The New Horizon",
      category: "LUXURY AUTOMOTIVE",
      specs: "Resolution: 8K, Camera: RED V-Raptor",
      image: "/image/Production House/4.jpg"
    },
    {
      title: "Infinite Connectivity",
      category: "TECH GLOBAL",
      specs: "Resolution: 4K, Camera: Arri Alexa 35",
      image: "/image/Production House/5.jpg"
    },
    {
      title: "Street Aesthetics",
      category: "URBAN FASHION",
      specs: "Resolution: 6K, Camera: Sony Venice 2",
      image: "/image/Production House/6.jpg"
    }
  ];

  const studioSetup = [
    {
      icon: "camera_outdoor",
      title: "Camera Authority",
      desc: "Full-spectrum digital cinema capabilities including RED V-Raptor and Arri Alexa 35 ecosystems for 8K resolution and unmatched dynamic range."
    },
    {
      icon: "highlight",
      title: "Lighting & Grip",
      desc: "Precision illumination utilizing Arri Skypanel and Aputure ecosystems. Intelligent DMX control for dynamic lighting environments."
    },
    {
      icon: "edit_square",
      title: "Post-Production",
      desc: "Mastering in DaVinci Resolve. High-speed fiber-connected server rendering and 4K HDR color-accurate monitoring for pixel-perfect finishing."
    }
  ];

  return (
    <div className="bg-background-dark text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[120vh] w-full flex flex-col items-center justify-center overflow-hidden bg-black pt-24 md:pt-32 pb-48 md:pb-64">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="w-full h-full bg-slate-900 flex items-center justify-center relative">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-60 scale-105"
            >
              <source src={videoUrl} type="video/webm" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent"></div>
          </div>
        </div>
        <div className="relative z-10 w-full max-w-5xl px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-accent/30 bg-cyan-accent/10 px-4 py-1 text-cyan-accent backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-accent"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest">2024 SHOWREEL LIVE</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight"
          >
            Visual Stories Told with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-cyan-accent">Cinematic Precision.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            High-end production meeting technical horsepower. Crafting experiences that resonate across every screen.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative group cursor-pointer inline-block"
            onClick={() => setIsVideoModalOpen(true)}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-cyan-accent rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <button className="relative flex items-center justify-center rounded-full w-20 h-20 bg-primary text-white border border-white/20">
              <span className="material-icons text-4xl">play_arrow</span>
            </button>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center">
          <div className="w-full max-w-4xl px-4">
            <div className="flex h-1 items-center justify-center bg-white/20 rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-cyan-accent"></div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-white/60 text-xs font-medium tracking-widest">0:45</p>
              <p className="text-white/60 text-xs font-medium tracking-widest">3:20</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 md:px-16 bg-[#F6F5F3]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {productionServices.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-slate-800 h-[500px]"
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  alt={service.title}
                  src={service.image}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full text-left">
                  <span className="text-cyan-accent font-bold text-xs uppercase tracking-widest mb-2 block">{service.category}</span>
                  <h3 className="text-white text-3xl font-bold mb-4">{service.title}</h3>
                  <p className="text-slate-200 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {service.desc}
                  </p>
                  <a className="inline-flex items-center text-white font-bold text-sm gap-2 hover:text-cyan-accent transition-colors" href="#">
                    VIEW PROJECTS
                    <span className="material-icons text-sm">arrow_forward</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured TVC Section */}
      <section className="py-24 px-6 md:px-16 bg-primary relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Featured TVC Productions
            </h2>
            <div className="h-1 w-24 bg-cyan-accent mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden rounded-xl mb-4 border border-white/10">
                  <img
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    src={project.image}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <p className="text-cyan-accent text-xs font-bold uppercase tracking-widest mb-1">{project.category}</p>
                <h4 className="text-white text-xl font-bold mb-3">{project.title}</h4>
                <p className="text-slate-400 text-[10px] font-medium uppercase tracking-widest mb-3">
                  {project.specs}
                </p>
                <a className="inline-flex items-center text-cyan-accent hover:text-accent-blue font-bold text-sm gap-2 transition-colors" href="#">
                  VIEW PROJECT
                  <span className="material-icons text-sm">arrow_forward</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Setup Section */}
      <section className="py-24 px-6 md:px-16 bg-background-dark relative border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Our Studio Setup
            </h2>
            <div className="h-1 w-24 bg-cyan-accent mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {studioSetup.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-accent/50 transition-colors"
              >
                <div className="bg-cyan-accent/10 p-4 rounded-xl mb-6">
                  <span className="material-icons text-cyan-accent text-5xl">{item.icon}</span>
                </div>
                <h4 className="text-white text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-6 md:px-16 bg-[#F3F4F6]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-primary text-[32px] font-bold mb-16 uppercase tracking-tight">
            Our Trusted Partners
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-8 md:gap-x-10 lg:gap-x-12 opacity-50 grayscale">
            {['token', 'diamond', 'all_inclusive', 'motion_photos_on', 'view_in_ar'].map((icon, i) => (
              <div key={i} className="flex items-center justify-center">
                <span className="material-icons text-6xl text-primary">{icon}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-all"
              >
                <X size={24} />
              </button>
              <video
                autoPlay
                controls
                className="w-full h-full"
              >
                <source src={videoUrl} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
