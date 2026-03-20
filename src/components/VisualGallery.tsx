'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface MediaItem {
  type: 'image' | 'video' | 'youtube';
  url: string;
  title: string;
  category: string;
  thumbnail?: string;
}

const showcaseMedia: MediaItem[] = [
  { type: 'video', url: 'https://res.cloudinary.com/dhgu45hvi/video/upload/v1774023854/VR_ad91an.mov', title: 'VR Reality', category: 'Immersive VR' },
  { type: 'image', url: '/image/AR-VR/1.png', title: 'Precision Spatial', category: 'Visualization' },
  { type: 'video', url: 'https://res.cloudinary.com/dhgu45hvi/video/upload/v1774022367/5480_htfjgr.mp4', title: 'Tech Interface', category: 'Interaction' },
  { type: 'image', url: '/image/AR-VR/2.jpg', title: 'Neural Link', category: 'VR Interface' },
  { type: 'video', url: 'https://res.cloudinary.com/dhgu45hvi/video/upload/v1774022367/Ph_q8hosf.mp4', title: 'Motion Capture', category: 'Animation' },
  { type: 'image', url: '/image/AR-VR/3.jpg', title: 'Spatial Cloud', category: 'AR Overlay' },
  { type: 'video', url: 'https://res.cloudinary.com/dhgu45hvi/video/upload/v1774022367/AI_goywo8.mp4', title: 'AI Simulation', category: 'Artificial Intelligence' },
  { type: 'image', url: '/image/AR-VR/compressed_DSC04219.jpg', title: 'Future Lab', category: 'Environment' },
  { type: 'video', url: 'https://res.cloudinary.com/dhgu45hvi/video/upload/v1774022047/Chung_3_1_cuokah.mp4', title: 'Holistic Design', category: '3D Space' },
  { type: 'image', url: '/image/AR-VR/compressed_DSC04228.jpg', title: 'Technical Blueprint', category: 'Design' },
  { type: 'video', url: 'https://res.cloudinary.com/dhgu45hvi/video/upload/v1774022047/Chung3_1_x8ract.mp4', title: 'Cyber Dynamics', category: 'Motion' },
  { type: 'image', url: '/image/AR-VR/compressed_DSC04235.jpg', title: 'Core Projection', category: 'Hardware' },
  { type: 'video', url: 'https://res.cloudinary.com/dhgu45hvi/video/upload/v1774021936/VR_DEMO_Home_Future_V2_d74apl.mp4', title: 'Future Living', category: 'VR Experience' },
  { type: 'image', url: '/image/AR-VR/compressed_DSC04241.jpg', title: 'Visual Synapse', category: 'Creative' },
  { type: 'video', url: 'https://res.cloudinary.com/dhgu45hvi/video/upload/v1774021867/VU%CC%83_CA%CC%81T_TU%CC%9BO%CC%9B%CC%80NG_-_LIVE_CONCERT_INNER_ME_-_OFFICIAL_TRAILER_twibft.mp4', title: 'Live Performance', category: 'Event Tech' },
  { type: 'image', url: '/image/AR-VR/compressed_DSC04246.jpg', title: 'Interactive Mesh', category: 'Haptics' },
  { type: 'video', url: 'https://res.cloudinary.com/dhgu45hvi/video/upload/v1774021858/IMG_1089_ngn5ui.mov', title: 'Raw Interaction', category: 'Prototype' },
  { type: 'image', url: '/image/AR-VR/compressed_DSC04250.jpg', title: 'Quantum Flow', category: 'Data Viz' },
  { type: 'video', url: 'https://res.cloudinary.com/dhgu45hvi/video/upload/v1774021856/559_dbwals.mp4', title: 'Dynamic Tracking', category: 'LiDAR' },
  { type: 'image', url: '/image/AR-VR/compressed_DSC04252.jpg', title: 'Circuit World', category: 'Network' },
  { type: 'video', url: 'https://res.cloudinary.com/dhgu45hvi/video/upload/v1774021853/720_smrgeb.mp4', title: 'Vortex Simulation', category: 'Fluid Dynamics' },
  { type: 'image', url: '/image/AR-VR/compressed_DSC04269.jpg', title: 'Digital Senses', category: 'Sensors' },
  { type: 'video', url: 'https://res.cloudinary.com/dhgu45hvi/video/upload/v1774021853/310_adhncy.mp4', title: 'Atmospheric Link', category: 'Cloud Tech' },
  { type: 'image', url: '/image/AR-VR/compressed_DSC04276.jpg', title: 'Spatial Echo', category: 'Acoustics' },
  { type: 'video', url: 'https://res.cloudinary.com/dhgu45hvi/video/upload/v1773995515/rR_u5c2wd.mp4', title: 'Reactive Tunnel', category: 'Interactive' },
  { type: 'image', url: '/image/AR-VR/compressed_DSC04281.jpg', title: 'Virtual Pulse', category: 'Experience' },
  { type: 'video', url: 'https://res.cloudinary.com/dhgu45hvi/video/upload/v1773565368/Picture_10_gjyodc.mp4', title: 'Core Motion', category: 'Tracking' },
  { type: 'image', url: '/image/AR-VR/compressed_DSC04288.jpg', title: 'Visual Core', category: 'Technology' },
  { type: 'video', url: 'https://res.cloudinary.com/dhgu45hvi/video/upload/v1773565367/Picture_11_jidcn0.mp4', title: 'Spatial Twin', category: 'Digital Twin' },
  { type: 'image', url: '/image/AR-VR/compressed_DSC04294.jpg', title: 'Tech Canvas', category: 'Art' },
  { type: 'image', url: '/image/AR-VR/compressed_DSC04301.jpg', title: 'Future Interface', category: 'HCI' },
  { type: 'image', url: '/image/AR-VR/compressed_DSC04319.jpg', title: 'Digital Horizon', category: 'Innovation' },
  { type: 'image', url: '/image/AR-VR/compressed_DSC04329.jpg', title: 'Nexus Space', category: 'Connectivity' }
];

export default function VisualGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowLeft') {
        setSelectedIndex((selectedIndex - 1 + showcaseMedia.length) % showcaseMedia.length);
      } else if (e.key === 'ArrowRight') {
        setSelectedIndex((selectedIndex + 1) % showcaseMedia.length);
      } else if (e.key === 'Escape') {
        setSelectedIndex(null);
      }
    };

    if (selectedIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + showcaseMedia.length) % showcaseMedia.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % showcaseMedia.length);
    }
  };

  const selectedMedia = selectedIndex !== null ? showcaseMedia[selectedIndex] : null;

  const lightboxContent = (
    <AnimatePresence mode="wait">
      {selectedMedia && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-12 lg:p-24"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close Button */}
          <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(null);
              }}
              className="absolute top-8 right-8 text-white hover:text-cyan-accent transition-all z-[10001] bg-black/40 hover:bg-black/60 p-2 rounded-full border border-white/20"
              aria-label="Close Lightbox"
          >
            <X size={32} />
          </button>

          {/* Navigation Controls */}
          <button 
            onClick={handlePrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-cyan-accent transition-all z-[10001] bg-white/5 hover:bg-white/10 p-4 rounded-full border border-white/10 backdrop-blur-md"
          >
            <ChevronLeft size={40} />
          </button>

          <button 
            onClick={handleNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-cyan-accent transition-all z-[10001] bg-white/5 hover:bg-white/10 p-4 rounded-full border border-white/10 backdrop-blur-md"
          >
            <ChevronRight size={40} />
          </button>
          
          <motion.div 
            key={selectedMedia.url}
            initial={{ scale: 0.9, opacity: 0, x: 20 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            exit={{ scale: 0.9, opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.type === 'image' && (
              <img src={selectedMedia.url} className="max-w-full max-h-full object-contain rounded-xl shadow-2xl" alt={selectedMedia.title} />
            )}
            {selectedMedia.type === 'video' && (
              <video src={selectedMedia.url} autoPlay controls className="max-w-full max-h-full object-contain rounded-xl shadow-2xl" />
            )}
            {selectedMedia.type === 'youtube' && (
              <iframe 
                className="w-80 h-[568px] md:w-96 md:h-[684px] max-w-full aspect-[9/16] rounded-xl shadow-2xl"
                src={`https://www.youtube.com/embed/${selectedMedia.url}?autoplay=1`}
                title={selectedMedia.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </motion.div>
          
          <motion.div 
            key={`${selectedMedia.title}-info`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-center"
          >
              <div className="text-cyan-accent text-xs font-bold uppercase tracking-[0.4em] mb-2">{selectedMedia.category}</div>
              <h3 className="text-2xl md:text-3xl font-light tracking-widest text-white uppercase">{selectedMedia.title}</h3>
              {selectedIndex !== null && (
                <div className="text-white/30 text-[10px] tracking-widest uppercase mt-4">
                  {selectedIndex + 1} / {showcaseMedia.length}
                </div>
              )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <section className="relative z-10 py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-xs tracking-[0.6em] text-cyan-accent uppercase block mb-4 font-bold"
          >
            Digital Realities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-normal tracking-widest uppercase mb-6"
          >
            Atmospheric <span className="gradient-text">Showcase</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            className="h-1 bg-cyan-accent rounded-full mb-12"
          ></motion.div>
        </header>

        <div className="max-h-[1000px] overflow-y-auto overflow-x-hidden pr-4 scrollbar-thin scrollbar-track-white/5 scrollbar-thumb-cyan-accent/20 hover:scrollbar-thumb-cyan-accent/40 rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[450px] grid-flow-dense pb-12">
            {showcaseMedia.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className={`relative overflow-hidden group rounded-3xl border border-white/5 bg-zinc-900 cursor-pointer ${
                i % 4 === 0 ? 'lg:col-span-2' : ''
              }`}
              onClick={() => setSelectedIndex(i)}
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
            >
              {item.type === 'image' && (
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 ease-out"
                />
              )}
              {item.type === 'video' && (
                <div className="w-full h-full relative">
                  <video
                    src={item.url}
                    muted loop playsInline
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 ease-out"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-cyan-accent/20 border border-cyan-accent/50 flex items-center justify-center text-cyan-accent opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                    <Play size={24} fill="currentColor" />
                  </div>
                </div>
              )}
              {item.type === 'youtube' && (
                <div className="w-full h-full relative">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 ease-out"
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-red-600/20 border border-red-600/50 flex items-center justify-center text-red-500 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                    <Play size={24} fill="currentColor" />
                  </div>
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-10 flex flex-col justify-end">
                <span className="text-cyan-accent text-[10px] font-bold tracking-[0.4em] mb-2 uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.category}
                </span>
                <div className="flex justify-between items-end">
                  <h3 className="text-2xl font-normal tracking-widest uppercase text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {item.title}
                  </h3>
                  <Maximize2 size={18} className="text-white/40 group-hover:text-cyan-accent transition-colors translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100" />
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </div>

      {isMounted && createPortal(lightboxContent, document.body)}
    </section>
  );
}
