'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { createPortal } from 'react-dom';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Contact from '../../../components/Contact';

export default function ProductionHouse() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedGalleryIndex, setSelectedGalleryIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const videoUrl = "https://res.cloudinary.com/dhgu45hvi/video/upload/v1774024524/15s_ENG_phjcsh.mp4";
  
  const galleryMedia = [
    { type: 'video', url: 'https://res.cloudinary.com/dhgu45hvi/video/upload/v1774024530/CLIP_DR_G_26-04mp4_ipexmw.mp4', title: 'DR. G Creative', category: 'TVC', filter: 'tvc' },
    { type: 'video', url: 'https://res.cloudinary.com/dhgu45hvi/video/upload/v1774024527/Radianc_15ver_fin_master_H264_cgvclp.mp4', title: 'Radiance Global', category: 'Viral', filter: 'viral' },
    { type: 'video', url: 'https://res.cloudinary.com/dhgu45hvi/video/upload/v1774024529/KV_LED_Central_Island_4480x1152_V05_rsbrrn.mp4', title: 'Central Island LED', category: 'TVC', filter: 'tvc' },
    { type: 'video', url: 'https://res.cloudinary.com/dhgu45hvi/video/upload/v1774024526/0501_R__NEO_CUSHION_1_a9v2f9.mp4', title: 'Neo Cushion Design', category: 'TVC', filter: 'tvc' },
    { type: 'video', url: 'https://res.cloudinary.com/dhgu45hvi/video/upload/v1774064164/ELISE___CCFILM_cfewr7.mp4', title: 'ELISE Creative', category: 'TVC', filter: 'tvc' },
    { type: 'video', url: 'https://res.cloudinary.com/dhgu45hvi/video/upload/v1774064159/HomecreditVN_BacLieu_edwnvb.mp4', title: 'HomeCredit VN', category: 'TVC', filter: 'tvc' },
    { type: 'video', url: 'https://res.cloudinary.com/dhgu45hvi/video/upload/v1774064158/Mastering_Taste_Through_Time_tlqwhe.mp4', title: 'Mastering Taste', category: 'TVC', filter: 'tvc' },
    { type: 'video', url: 'https://res.cloudinary.com/dhgu45hvi/video/upload/v1774024524/15s_ENG_phjcsh.mp4', title: 'Engagement Campaign', category: 'Viral', filter: 'viral' },
    { type: 'video', url: 'https://res.cloudinary.com/dhgu45hvi/video/upload/v1774024523/Samsung_x_Dentsu_Redder_toub8i.mp4', title: 'Samsung X Dentsu', category: 'TVC', filter: 'tvc' },
    { type: 'video', url: 'https://res.cloudinary.com/dhgu45hvi/video/upload/v1774024520/royye_eli8ha.mp4', title: 'Royye Interaction', category: 'Viral', filter: 'viral' },
    { type: 'video', url: 'https://res.cloudinary.com/dhgu45hvi/video/upload/v1774024520/pods_ozd9jd.mp4', title: 'Pods Animation', category: 'Viral', filter: 'viral' },
    { type: 'video', url: 'https://res.cloudinary.com/dhgu45hvi/video/upload/v1774024519/CIMB_Finhay_arsmmd.mp4', title: 'CIMB X Finhay', category: 'Viral', filter: 'viral' },
    { type: 'video', url: 'https://res.cloudinary.com/dhgu45hvi/video/upload/v1774024519/Roman_a6qkwo.mp4', title: 'Roman Aesthetics', category: 'Viral', filter: 'viral' },
    { type: 'video', url: 'https://res.cloudinary.com/dhgu45hvi/video/upload/v1774024515/mede_d2w9s9.mp4', title: 'Mede Experience', category: 'Viral', filter: 'viral' },
    { type: 'video', url: 'https://res.cloudinary.com/dhgu45hvi/video/upload/v1774024515/1234_qjb9ab.mp4', title: 'Sequence 1234', category: 'Viral', filter: 'viral' },
    { type: 'image', url: '/image/Production House/3.jpg', title: 'Studio Craft', category: 'BTS Gallery', filter: 'bts' },
    { type: 'image', url: '/image/Production House/1.jpg', title: 'Technical Setup', category: 'BTS Gallery', filter: 'bts' },
    { type: 'image', url: '/image/Production House/2.jpg', title: 'Production Flow', category: 'BTS Gallery', filter: 'bts' },
  ];

  const filteredMedia = activeFilter === 'all' 
    ? galleryMedia 
    : galleryMedia.filter(item => item.filter === activeFilter);

  const handleGalleryNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedGalleryIndex !== null) {
      setSelectedGalleryIndex((selectedGalleryIndex + 1) % filteredMedia.length);
    }
  };

  const handleGalleryPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedGalleryIndex !== null) {
      setSelectedGalleryIndex((selectedGalleryIndex - 1 + filteredMedia.length) % filteredMedia.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedGalleryIndex === null) return;
      if (e.key === 'ArrowLeft') {
        setSelectedGalleryIndex((prev) => (prev !== null ? (prev - 1 + filteredMedia.length) % filteredMedia.length : null));
      } else if (e.key === 'ArrowRight') {
        setSelectedGalleryIndex((prev) => (prev !== null ? (prev + 1) % filteredMedia.length : null));
      } else if (e.key === 'Escape') {
        setSelectedGalleryIndex(null);
      }
    };
    if (selectedGalleryIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedGalleryIndex, filteredMedia.length]);

  const selectedGalleryItem = selectedGalleryIndex !== null ? filteredMedia[selectedGalleryIndex] : null;

  const productionServices = [
    {
      title: "TVC Production",
      category: "TV Commercials",
      filterId: "tvc",
      desc: "High-stakes commercial production for global brands. We bridge the gap between creative vision and market-leading execution.",
      image: "/image/Production House/1.jpg"
    },
    {
      title: "Viral Clips",
      category: "Social Media",
      filterId: "viral",
      desc: "Fast-paced, high-engagement content for social dominance. Engineered for shareability and algorithmic impact.",
      image: "/image/Production House/2.jpg"
    },
    {
      title: "BTS Gallery",
      category: "Behind the scenes",
      filterId: "bts",
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
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 md:px-16 bg-[#F6F5F3]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-primary text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Our Expertise
          </h2>
          <div className="h-1 w-24 bg-cyan-accent mx-auto rounded-full"></div>
        </div>
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
                  <button 
                    onClick={() => {
                      setActiveFilter(service.filterId);
                      document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center text-white font-bold text-sm gap-2 hover:text-cyan-accent transition-colors"
                  >
                    VIEW PROJECTS
                    <span className="material-icons text-sm">arrow_forward</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section id="showcase" className="py-24 px-6 md:px-16 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <header className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="text-accent-blue text-xs font-bold uppercase tracking-[0.4em] mb-4">Portfolio</h2>
              <h3 className="text-primary text-4xl md:text-6xl font-normal tracking-tight uppercase">
                Project <span className="text-cyan-accent font-bold italic">Showcase</span>
              </h3>
            </div>
            
            {/* Gallery Filters */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'tvc', label: 'TVC' },
                { id: 'viral', label: 'Viral' },
                { id: 'bts', label: 'BTS' }
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-full text-[10px] tracking-widest uppercase font-bold transition-all duration-300 border ${
                    activeFilter === filter.id 
                    ? 'bg-primary text-white border-primary shadow-xl scale-105' 
                    : 'bg-transparent text-primary/40 border-primary/10 hover:border-primary/40'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </header>

          <AnimatePresence mode="popLayout">
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredMedia.map((item, i) => (
                <motion.div
                  key={item.url}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative aspect-square overflow-hidden rounded-3xl cursor-pointer group group/item shadow-lg hover:shadow-2xl transition-all"
                  onClick={() => setSelectedGalleryIndex(i)}
                >
                  {item.type === 'video' ? (
                    <div className="w-full h-full relative">
                      <video 
                        src={item.url}
                        muted loop playsInline
                        className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-1000"
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => {
                          e.currentTarget.pause();
                          e.currentTarget.currentTime = 0;
                        }}
                      />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover/item:opacity-100 transition-all scale-50 group-hover/item:scale-100 backdrop-blur-md">
                        <Play size={24} fill="currentColor" />
                      </div>
                    </div>
                  ) : (
                    <img 
                      src={item.url} 
                      className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-1000"
                      alt={item.title}
                    />
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                    <span className="text-cyan-accent text-[10px] font-bold tracking-widest uppercase mb-1">{item.category}</span>
                    <h4 className="text-white text-xl font-bold tracking-tight">{item.title}</h4>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
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
      {/* Gallery Modal Portal */}
      {isMounted && selectedGalleryItem && createPortal(
        <div className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-12 lg:p-24" 
             onClick={() => setSelectedGalleryIndex(null)}>
            
            <button 
                onClick={() => setSelectedGalleryIndex(null)}
                className="absolute top-8 right-8 text-white hover:text-cyan-accent transition-all z-[10001] bg-black/40 hover:bg-black/60 p-2 rounded-full border border-white/20"
            >
                <X size={32} />
            </button>

            <button 
              onClick={handleGalleryPrev}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-cyan-accent transition-all z-[10001] bg-white/5 hover:bg-white/10 p-4 rounded-full border border-white/10 backdrop-blur-md"
            >
              <ChevronLeft size={40} />
            </button>

            <button 
              onClick={handleGalleryNext}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-cyan-accent transition-all z-[10001] bg-white/5 hover:bg-white/10 p-4 rounded-full border border-white/10 backdrop-blur-md"
            >
              <ChevronRight size={40} />
            </button>

            <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                {selectedGalleryItem.type === 'video' ? (
                    <video key={selectedGalleryItem.url} src={selectedGalleryItem.url} autoPlay controls className="max-w-full max-h-full object-contain rounded-xl shadow-2xl" />
                ) : (
                    <img key={selectedGalleryItem.url} src={selectedGalleryItem.url} className="max-w-full max-h-full object-contain rounded-xl shadow-2xl" alt={selectedGalleryItem.title} />
                )}
            </div>
            <div className="mt-8 text-center text-white">
                <span className="text-cyan-accent text-xs font-bold uppercase tracking-[0.4em] mb-2 block">{selectedGalleryItem.category}</span>
                <h3 className="text-2xl md:text-3xl font-light tracking-widest uppercase">{selectedGalleryItem.title}</h3>
                <div className="text-white/30 text-[10px] tracking-widest uppercase mt-4">
                  {selectedGalleryIndex !== null ? selectedGalleryIndex + 1 : 0} / {filteredMedia.length}
                </div>
            </div>
        </div>,
        document.body
      )}
    </div>
  );
}
