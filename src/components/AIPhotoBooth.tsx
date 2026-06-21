'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Printer, Share2, Users, Clock, Settings, Maximize2, X } from 'lucide-react';

interface EventPhoto {
  src: string;
  label: string;
}

const eventPhotos: EventPhoto[] = [
  { src: 'https://inrifz8adj9odids.public.blob.vercel-storage.com/AI%20photo%20booth/47c3bc71ad166d78f7aced640a590031.jpg', label: 'Interactive Kiosk Setup'},
  { src: 'https://inrifz8adj9odids.public.blob.vercel-storage.com/AI%20photo%20booth/698aa9b01ebf056beb7f572edf703394%20%281%29.jpg', label: 'Interactive Kiosk Setup'},
  { src: 'https://inrifz8adj9odids.public.blob.vercel-storage.com/AI%20photo%20booth/8c38a119d5635407b9ae29a37e46fd01.jpg', label: 'Interactive Kiosk Setup'},
  { src: 'https://inrifz8adj9odids.public.blob.vercel-storage.com/AI%20photo%20booth/AIPHOTO_1779619840162-2.png', label: 'Interactive Kiosk Setup'},
  { src: 'https://inrifz8adj9odids.public.blob.vercel-storage.com/AI%20photo%20booth/AIPHOTO_1779619840197-2.png', label: 'Interactive Kiosk Setup'},
  { src: 'https://inrifz8adj9odids.public.blob.vercel-storage.com/AI%20photo%20booth/AIPHOTO_1779619840197.png', label: 'Interactive Kiosk Setup'},
  { src: 'https://inrifz8adj9odids.public.blob.vercel-storage.com/AI%20photo%20booth/AIPHOTO_1779619840203-2.png', label: 'Interactive Kiosk Setup'},
];

export default function AIPhotoBooth() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const activePhoto = selectedPhotoIndex !== null ? eventPhotos[selectedPhotoIndex] : null;

  return (
    <section className="relative z-10 py-28 px-6 md:px-12 lg:px-24 border-t border-white/5 bg-gradient-to-b from-black to-zinc-950">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Summarized Copy & Package Details */}
          <div className="lg:col-span-6 space-y-10">
            
            {/* Header copy */}
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-xs tracking-[0.4em] text-cyan-accent uppercase block font-bold"
              >
                Event Activations
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-wider uppercase leading-tight text-white"
              >
                AI Photo <span className="gradient-text">Booth</span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 text-base md:text-lg leading-relaxed font-light"
              >
                People forget event details, but they remember experiences worth sharing. 
                Our AI Photo Booth turns standard gatherings and brand launches into 
                interactive, highly social moments.
              </motion.p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { 
                  icon: <Sparkles className="text-cyan-accent shrink-0" size={20} />, 
                  title: 'Bespoke AI Styles', 
                  desc: 'Instantly transform guests into custom-themed digital avatars matching your event.' 
                },
                { 
                  icon: <Printer className="text-cyan-accent shrink-0" size={20} />, 
                  title: '200+ Instant Prints', 
                  desc: 'High-quality, branded physical prints that guests can carry home.' 
                },
                { 
                  icon: <Share2 className="text-cyan-accent shrink-0" size={20} />, 
                  title: 'Social-First Sharing', 
                  desc: 'Instant QR code downloads designed to fuel digital buzz and social reach.' 
                },
                { 
                  icon: <Users className="text-cyan-accent shrink-0" size={20} />, 
                  title: 'Dwell Time Driver', 
                  desc: 'An immersive interaction that increases active audience participation.' 
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex gap-4 items-start"
                >
                  <div className="p-2.5 rounded-xl border border-cyan-accent/20 bg-cyan-accent/5">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold tracking-wider uppercase text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Standard Package Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="testimonial-glass p-8 rounded-3xl border border-cyan-accent/20 hover:border-cyan-accent/40 transition-all duration-500 relative overflow-hidden group"
            >
              {/* Highlight bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-blue via-cyan-accent to-accent-blue"></div>
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-bold tracking-widest uppercase text-white">Standard Package</h3>
                  <p className="text-xs text-cyan-accent uppercase tracking-wider mt-1">Perfect for most activations</p>
                </div>
                <div className="text-left md:text-right shrink-0">
                  <span className="text-[10px] tracking-widest text-gray-400 uppercase block">Starting From</span>
                  <span className="text-2xl font-bold text-cyan-accent font-mono">12,000,000 VND</span>
                  <span className="text-xs text-gray-500 block mt-0.5">per event activation</span>
                </div>
              </div>

              {/* Package Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/5 pt-6 mb-6">
                {[
                  { icon: <Clock size={14} />, text: '4-Hour Active Operation' },
                  { icon: <Settings size={14} />, text: 'Dedicated Onsite Support & Setup' },
                  { icon: <Sparkles size={14} />, text: 'Custom Event-Branded Frames' },
                  { icon: <Printer size={14} />, text: '200+ Complete AI Transformations' }
                ].map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2.5 text-xs text-gray-300 font-light">
                    <span className="text-cyan-accent shrink-0">{spec.icon}</span>
                    <span>{spec.text}</span>
                  </div>
                ))}
              </div>

              {/* Targets */}
              <div className="text-[10px] tracking-wider text-gray-500 border-t border-white/5 pt-4">
                <span className="font-bold text-white uppercase mr-2">BEST FOR:</span>
                Corporate Events • Schools • Workshops • Brand Activations • Community Events
              </div>
            </motion.div>

          </div>

          {/* Right Column: Beautiful Offset Event Gallery Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 auto-rows-[160px] grid-flow-dense">
              {eventPhotos.map((photo, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.6 }}
                  onClick={() => setSelectedPhotoIndex(i)}
                  className={`relative rounded-2xl overflow-hidden border border-white/5 bg-zinc-900 group cursor-pointer ${
                    i === 0 ? 'row-span-2 col-span-2 md:col-span-1 xl:col-span-1' : ''
                  } ${
                    i === 1 ? 'row-span-1 col-span-1 md:col-span-2 xl:col-span-2' : ''
                  } ${
                    i === 4 ? 'row-span-2' : ''
                  }`}
                >
                  <img 
                    src={photo.src} 
                    alt={photo.label} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out brightness-[0.85] group-hover:brightness-100"
                  />
                  {/* Subtle Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="text-[8px] tracking-widest text-cyan-accent font-bold uppercase mb-0.5">{photo.category}</span>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] tracking-wider text-white uppercase truncate pr-2">{photo.label}</span>
                      <Maximize2 size={12} className="text-white/60 shrink-0" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-12 lg:p-24"
            onClick={() => setSelectedPhotoIndex(null)}
          >
            {/* Close Button */}
            <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPhotoIndex(null);
                }}
                className="absolute top-8 right-8 text-white hover:text-cyan-accent transition-all z-[10001] bg-black/40 hover:bg-black/60 p-2 rounded-full border border-white/20"
                aria-label="Close Lightbox"
            >
              <X size={32} />
            </button>

            <motion.div 
              key={activePhoto.src}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[75vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={activePhoto.src} className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-white/10" alt={activePhoto.label} />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-center"
            >
              <span className="text-cyan-accent text-xs font-bold uppercase tracking-[0.3em] block mb-2">{activePhoto.category}</span>
              <h3 className="text-xl md:text-2xl font-light tracking-widest text-white uppercase">{activePhoto.label}</h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
