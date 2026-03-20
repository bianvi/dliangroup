'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Maximize2, X } from 'lucide-react';

interface MediaItem {
  type: 'image' | 'video' | 'youtube';
  url: string;
  title: string;
  category: string;
  thumbnail?: string;
}

const showcaseMedia: MediaItem[] = [
  {
    type: 'image',
    url: '/image/AR-VR/1.png',
    title: 'Precision Capture',
    category: 'Spatial Visualization'
  },
  {
    type: 'video',
    url: 'https://res.cloudinary.com/dhgu45hvi/video/upload/v1773995515/rR_u5c2wd.mp4',
    title: 'Immersive Environment',
    category: 'Motion Design'
  },
  {
    type: 'image',
    url: '/image/AR-VR/2.jpg',
    title: 'Neural Link',
    category: 'VR Interface'
  },
  {
    type: 'youtube',
    url: 'uA9z3Q0Mszs',
    title: 'Future Tech #1',
    category: 'Social Highlight',
    thumbnail: 'https://img.youtube.com/vi/uA9z3Q0Mszs/maxresdefault.jpg'
  },
  {
    type: 'image',
    url: '/image/AR-VR/3.jpg',
    title: 'Spatial Cloud',
    category: 'AR Overlay'
  },
  {
    type: 'youtube',
    url: '5oksH3KGoIg',
    title: 'Future Tech #2',
    category: 'Production Short',
    thumbnail: 'https://img.youtube.com/vi/5oksH3KGoIg/maxresdefault.jpg'
  },
  {
    type: 'video',
    url: 'https://res.cloudinary.com/dhgu45hvi/video/upload/v1773565368/Picture_10_gjyodc.mp4',
    title: 'Core Dynamics',
    category: 'Technical Demo'
  },
  {
    type: 'video',
    url: 'https://res.cloudinary.com/dhgu45hvi/video/upload/v1773565367/Picture_11_jidcn0.mp4',
    title: 'Digital Twin',
    category: 'Simulation'
  }
];

export default function VisualGallery() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const lightboxContent = (
    <AnimatePresence>
      {selectedMedia && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-12 lg:p-24"
          onClick={() => setSelectedMedia(null)}
        >
          <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedMedia(null);
              }}
              className="absolute top-8 right-8 text-white hover:text-cyan-accent transition-all z-[10001] bg-black/40 hover:bg-black/60 p-2 rounded-full border border-white/20"
              aria-label="Close Lightbox"
          >
            <X size={32} />
          </button>
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 text-center"
          >
              <div className="text-cyan-accent text-xs font-bold uppercase tracking-[0.4em] mb-2">{selectedMedia.category}</div>
              <h3 className="text-3xl font-light tracking-widest text-white uppercase">{selectedMedia.title}</h3>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[450px] grid-flow-dense">
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
              onClick={() => setSelectedMedia(item)}
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

      {isMounted && createPortal(lightboxContent, document.body)}
    </section>
  );
}
