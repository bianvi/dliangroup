'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center items-center pt-24 pb-24 md:pt-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-60"
            src="https://res.cloudinary.com/dhgu45hvi/video/upload/v1773546987/Mascot_Introduction_Video_Creation_jseosd.mp4"
          />
        </div>
        <div className="absolute inset-0 cinematic-overlay"></div>
        <div className="absolute inset-0 hero-gradient"></div>
        
        {/* Animated background shapes */}
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-[600px] h-[600px] floating-shape rounded-full opacity-40"
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 -right-20 w-[700px] h-[700px] floating-shape rounded-full opacity-30"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 mb-16"
        >
          {/* <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[1.02] tracking-tight text-white drop-shadow-2xl">
            Create immersive <span className="gradient-text">experiences</span> <br className="hidden md:block"/> that enhance emotions
          </h1> */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-normal leading-relaxed drop-shadow-lg">
            Transforming spaces through AI innovation and high-fashion aesthetics. 
            From couture runways to professional media production, we merge digital frontiers with human connection.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 py-8"
        >
          <a href="#contact" className="group relative primary-glow-btn w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-accent-blue to-cyan-accent text-white rounded-full font-bold text-lg text-center">
            Book a Consultation
          </a>
          <button 
            onClick={(e) => {
              e.preventDefault();
              setIsVideoModalOpen(true);
            }} 
            className="group primary-glow-btn w-full sm:w-auto px-12 py-5 border border-white/20 backdrop-blur-sm rounded-full font-bold text-lg flex items-center justify-center gap-3"
          >
            <span className="material-icons text-white/60 group-hover:text-cyan-accent transition-colors">play_circle_filled</span>
            Watch Showreel
          </button>
        </motion.div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm">
          <button 
            onClick={() => setIsVideoModalOpen(false)}
            className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/30 p-2 rounded-full transition-all z-[101]"
            aria-label="Close modal"
          >
            <span className="material-icons">close</span>
          </button>
          <div className="w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl relative z-[100]">
            <video 
              controls 
              autoPlay 
              className="w-full h-full object-cover"
              src="https://res.cloudinary.com/dhgu45hvi/video/upload/v1773546987/Mascot_Introduction_Video_Creation_jseosd.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
