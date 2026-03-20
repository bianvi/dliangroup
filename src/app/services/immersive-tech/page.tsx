'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Contact from '../../../components/Contact';
import VisualGallery from '../../../components/VisualGallery';

export default function ImmersiveTech() {
  const [selectedCaseMediaIndex, setSelectedCaseMediaIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedCaseMediaIndex === null) return;
      if (e.key === 'ArrowLeft') {
        setSelectedCaseMediaIndex((prev) => (prev !== null ? (prev - 1 + caseStudyMedia.length) % caseStudyMedia.length : null));
      } else if (e.key === 'ArrowRight') {
        setSelectedCaseMediaIndex((prev) => (prev !== null ? (prev + 1) % caseStudyMedia.length : null));
      } else if (e.key === 'Escape') {
        setSelectedCaseMediaIndex(null);
      }
    };

    if (selectedCaseMediaIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCaseMediaIndex]);

  const labExperiments = [
    {
      id: "Exp_01",
      title: "Fluid Dynamics",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNAa4BRxEAw6uBUL7_p57MW14UeJPvI_BTC_lPY4N08-majkBHta6gOpE2FCxJL2SJ5ReJb2jhvGOLiPLgQPJsERacjbgeywKMOdTVmzDD9k4mbtc86gLA7dXxU86oooKgRMZz4J1yn6HQJzAcMRvaYnKEXiRMgS2-_HtsCTONaW7HIU8akXcD9Z4d6LWn-AVpfvuauRvtJE2yFFM2F8wShSGmb75-Vbx4tujSYA_5x0ejA0f6tb0XxHqHPtZ1gzQGk7yMykIN8Ow",
      desc: "Particle Flow Experiment"
    },
    {
      id: "Exp_02",
      title: "Neural Mapping",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNBUgThW5SmfG0Fe4y1dGxlxiS3rIi9tCNhE2pTgFEaSsyU9rYovxUDXLaGkQ3FtE7OqAWdyRdeuehNkWoXwGtpX5fkjV3LEev4UtLyGt-tnasNVLjKQ2K4kgRl_TNY-4fG6sWtlRBbvQH5XyUQ3mI22rEhm8iqzde_8JqxZMWj3D5CC1u9wpKN1HVwPri5v8Sw8BESQ9XoXKcLRSHrh7VlSt7ZW0Q_clVgNmlVY-pIK_6Ri2kiDJMob_WU5_ATwWLBzlnmSn33iE",
      desc: "Neural Mesh Experiment"
    },
    {
      id: "Exp_03",
      title: "Spatial Cloud",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAS8CRorZnCN1FDgOVPh4XlL-pJalXFhJzGSyOz8_YDEy78lzzlNsY7lGFI_Y42VfXafKl0jUsMKFfl6lywz9fmKo-oBqubhFlR0yw7J_NA7_Gv23pFUfPbz94Owg54Lx-v3IIn-maJsKozcyO7Q1y155Q5wzZW53t99oC-s7su3b0iaz5fRmO2q1ei5kUG0kxNH6uBdWzSMUmTveJNyjYH4jxBjmJO-ot-GSQ7Wnxmocc7KFZJlfU4UQB2yPhj-rfUYBtzcYQL9ug",
      desc: "LiDAR Cloud Experiment"
    },
    {
      id: "Exp_04",
      title: "Haptic Feedback",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3XnT_vk7MicvOODCXT3Mkv0Ob2scq_GfH9iJYah5ATvOUgk9GRIL6YG6XWsM8N8hSn7jf0FaDPWQR_ACF_Fc16dGDWciC2PFsHv-fIgntzOAkRs-qaHVzLIVdo0ddAH_CN2ds85R18qpZstYyf5jks67Dt_I9PrrFT_jCBlalYqXKwXQ1YX5ZgHBpIY8zJkznZNNVjl-p7kQ9FYyP9ObatwkwC_YXKU9JXnt_zzo6H1SXfVTZfBGojMxeCjZonpGNPzNoV8D4IY",
      desc: "Bio Reactive Experiment"
    }
  ];

  const techStack = [
    {
      title: "Core Engines",
      items: ["Unreal Engine 5", "Unity", "TouchDesigner"],
      icon: "bolt"
    },
    {
      title: "Interactive Frameworks",
      items: ["LiDAR Integration", "Gesture Control", "Haptic Systems"],
      icon: "touch_app"
    },
    {
      title: "Creative Software",
      items: ["Adobe Creative Cloud", "Maya", "Blender"],
      icon: "palette"
    },
    {
      title: "Hardware",
      items: ["High-Performance Workstations", "Industrial Projectors", "VR/AR Headsets"],
      icon: "monitor"
    }
  ];

  const caseStudyMedia = [
    { type: 'video', src: 'https://res.cloudinary.com/dhgu45hvi/video/upload/v1773995515/rR_u5c2wd.mp4', label: 'Main View' },
    { type: 'video', src: 'https://res.cloudinary.com/dhgu45hvi/video/upload/v1773565368/Picture_10_gjyodc.mp4', label: 'Tracking' },
    { type: 'image', src: '/image/AR-VR/1.png', label: 'Interface' },
    { type: 'video', src: 'https://res.cloudinary.com/dhgu45hvi/video/upload/v1773565367/Picture_11_jidcn0.mp4', label: 'Simulation' }
  ];

  const handleCaseMediaPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedCaseMediaIndex !== null) {
        setSelectedCaseMediaIndex((selectedCaseMediaIndex - 1 + caseStudyMedia.length) % caseStudyMedia.length);
    }
  };

  const handleCaseMediaNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedCaseMediaIndex !== null) {
        setSelectedCaseMediaIndex((selectedCaseMediaIndex + 1) % caseStudyMedia.length);
    }
  };

  const selectedCaseMedia = selectedCaseMediaIndex !== null ? caseStudyMedia[selectedCaseMediaIndex] : null;

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle, #2563eb 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent-blue opacity-20 blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-24 w-80 h-80 bg-cyan-accent opacity-10 blur-[100px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-[120vh] flex flex-col items-center justify-center px-6 text-center pt-32 md:pt-40 pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 px-4 py-1 border border-cyan-accent/30 rounded-full text-[10px] tracking-widest uppercase text-cyan-accent bg-cyan-accent/5"
        >
          Next-Generation Experience Design
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-[0.2em] uppercase mb-8 max-w-6xl leading-tight"
        >
          Step Into the <br />
          <span className="gradient-text">New Reality</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed tracking-wide"
        >
          We build "Living Environments." Our work uses AI and sensors to ensure
          that when you move, the environment responds.
        </motion.p>

        {/* Scroll Indicator */}
        <div className="mt-20 animate-bounce">
          <div className="w-[1px] h-16 bg-gradient-to-b from-accent-blue to-transparent"></div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="relative z-10 py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Case Study Text Content */}
            <div>
                <header className="mb-12">
                    <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-xs tracking-[0.4em] text-cyan-accent uppercase mb-4 font-bold"
                    >
                        Featured Case Study
                    </motion.h2>
                    <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-normal tracking-widest uppercase leading-tight"
                    >
                        Interactive <br />
                        <span className="gradient-text">LED Tunnel</span> <br />
                        for Brand X
                    </motion.h3>
                </header>

                <div className="space-y-6">
                    {[
                    { num: "01", title: "Challenge", color: "accent-blue", desc: "Creating a 30-meter immersive transit system that maintains high-fidelity visuals while tracking hundreds of unique visitors simultaneously." },
                    { num: "02", title: "Solution", color: "cyan-accent", desc: "180-degree LED walls synced with LiDAR motion sensors. Custom AI algorithms process spatial data in real-time to generate reactive visual ripples." },
                    { num: "03", title: "Result", color: "white", desc: "50,000+ social media mentions in 48 hours. Average dwell time increased by 300% compared to traditional brand installations." }
                    ].map((card, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="testimonial-glass p-8 flex gap-6 group rounded-2xl border border-white/5 hover:border-cyan-accent/20 transition-all duration-500"
                    >
                        <div className="text-cyan-accent font-bold text-lg opacity-40 group-hover:opacity-100 transition-opacity">
                            {card.num}
                        </div>
                        <div>
                            <h4 className="text-md tracking-widest uppercase mb-2 font-bold">{card.title}</h4>
                            <p className="text-gray-400 leading-relaxed text-sm font-light">
                                {card.desc}
                            </p>
                        </div>
                    </motion.div>
                    ))}
                </div>
            </div>

            {/* Case Study Multiple Media Showcase */}
            <div className="grid grid-cols-2 gap-4 lg:h-[600px]">
                {caseStudyMedia.map((media, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, duration: 0.8 }}
                        onClick={() => setSelectedCaseMediaIndex(i)}
                        onMouseEnter={(e) => {
                            const video = e.currentTarget.querySelector('video');
                            if (video) video.play().catch(() => {});
                        }}
                        onMouseLeave={(e) => {
                            const video = e.currentTarget.querySelector('video');
                            if (video) {
                                video.pause();
                                video.currentTime = 0;
                            }
                        }}
                        className={`relative rounded-3xl overflow-hidden border border-white/10 group shadow-xl cursor-pointer ${
                            i === 0 ? 'row-span-2' : ''
                        }`}
                    >
                        {media.type === 'video' ? (
                            <div className="w-full h-full relative">
                                <video 
                                    src={media.src}
                                    muted loop playsInline
                                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                                />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cyan-accent/20 border border-cyan-accent/50 flex items-center justify-center text-cyan-accent opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                                    <Play size={20} fill="currentColor" />
                                </div>
                            </div>
                        ) : (
                            <img 
                                src={media.src}
                                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                                alt={media.label}
                            />
                        )}
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                            <span className="text-[10px] tracking-widest uppercase text-cyan-accent font-bold translate-y-2 group-hover:translate-y-0 transition-transform">
                                {media.label}
                            </span>
                        </div>
                        
                        {/* Status bar for first large item */}
                        {i === 0 && (
                            <div className="absolute top-4 left-4 right-4 flex justify-between items-center pointer-events-none">
                                <div className="text-[10px] tracking-[0.2em] uppercase text-cyan-accent font-bold bg-black/40 px-3 py-1 rounded backdrop-blur-sm border border-cyan-accent/20">
                                    LIVE STREAM
                                </div>
                                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Modal Portal */}
      {isMounted && selectedCaseMedia && createPortal(
          <div className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-12 lg:p-24" 
               onClick={() => setSelectedCaseMediaIndex(null)}>
              
              {/* Close Button */}
              <button 
                  onClick={() => setSelectedCaseMediaIndex(null)}
                  className="absolute top-8 right-8 text-white hover:text-cyan-accent transition-all z-[10001] bg-black/40 hover:bg-black/60 p-2 rounded-full border border-white/20"
              >
                  <X size={32} />
              </button>

              {/* Navigation Controls */}
              <button 
                onClick={handleCaseMediaPrev}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-cyan-accent transition-all z-[10001] bg-white/5 hover:bg-white/10 p-4 rounded-full border border-white/10 backdrop-blur-md"
              >
                <ChevronLeft size={40} />
              </button>

              <button 
                onClick={handleCaseMediaNext}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-cyan-accent transition-all z-[10001] bg-white/5 hover:bg-white/10 p-4 rounded-full border border-white/10 backdrop-blur-md"
              >
                <ChevronRight size={40} />
              </button>

              <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                  {selectedCaseMedia.type === 'video' ? (
                      <video key={selectedCaseMedia.src} src={selectedCaseMedia.src} autoPlay controls className="max-w-full max-h-full object-contain rounded-xl shadow-2xl" />
                  ) : (
                      <img key={selectedCaseMedia.src} src={selectedCaseMedia.src} className="max-w-full max-h-full object-contain rounded-xl shadow-2xl" alt={selectedCaseMedia.label} />
                  )}
              </div>
              <div className="mt-8 text-center">
                  <h3 className="text-2xl font-light tracking-widest text-white uppercase">{selectedCaseMedia.label}</h3>
                  <div className="text-white/30 text-[10px] tracking-widest uppercase mt-4">
                    {selectedCaseMediaIndex !== null ? selectedCaseMediaIndex + 1 : 0} / {caseStudyMedia.length}
                  </div>
              </div>
          </div>,
          document.body
      )}

      <VisualGallery />

      {/* Innovation Lab */}
      <section className="relative z-10 py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-transparent to-accent-blue/5">
        <div className="max-w-7xl mx-auto">
          <header className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-xs tracking-[0.2em] text-cyan-accent uppercase mb-4">
                Visual Experiments
              </h2>
              <h3 className="text-4xl font-normal tracking-widest uppercase">
                Innovation Lab
              </h3>
            </div>
            <a className="text-xs tracking-widest uppercase border-b border-cyan-accent text-cyan-accent pb-1 hover:text-white hover:border-white transition-all" href="#">
              View All Experiments
            </a>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {labExperiments.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group aspect-square overflow-hidden bg-zinc-900 border border-white/10 rounded-xl"
              >
                <img
                  alt={exp.desc}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  src={exp.image}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] tracking-widest uppercase text-cyan-accent">{exp.id}</span>
                  <span className="text-sm tracking-widest uppercase font-bold">{exp.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative z-10 py-24 px-6 md:px-12 lg:px-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <header className="mb-16 text-center md:text-left">
            <h2 className="text-xs tracking-[0.2em] text-cyan-accent uppercase mb-4">
              Capabilities
            </h2>
            <h3 className="text-4xl font-normal tracking-widest uppercase">
              Our Tech Stack
            </h3>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="testimonial-glass p-8 group hover:border-cyan-accent/40 transition-all duration-500 rounded-2xl"
              >
                <div className="mb-6 text-cyan-accent">
                  <span className="material-icons text-4xl">{stack.icon}</span>
                </div>
                <h4 className="text-sm tracking-widest uppercase font-bold mb-4 text-white">
                  {stack.title}
                </h4>
                <ul className="text-xs tracking-widest uppercase text-gray-400 space-y-2">
                  {stack.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-t from-accent-blue/10 to-transparent border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-normal tracking-[0.2em] uppercase text-white mb-6">
            Ready to Innovate?
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-light tracking-wide mb-12">
            Let's push the boundaries of reality together.
          </p>
          <a
            className="inline-block px-10 py-5 bg-gradient-to-r from-accent-blue to-cyan-accent text-white text-sm tracking-widest uppercase font-bold hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all duration-300 transform hover:-translate-y-1 rounded-full"
            href="#contact"
          >
            Book a Consultation
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
