import React from 'react';

export default function MissionVision() {
  return (
    <section className="relative z-10 bg-deep-navy overflow-hidden flex flex-col md:flex-row min-h-[700px]">
      
      {/* Decorative blurs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-accent/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-blue/10 blur-[100px] rounded-full translate-x-1/3 translate-y-1/3 z-0 pointer-events-none"></div>
      
      {/* Center divider line */}
      <div className="hidden md:block absolute left-1/2 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent backdrop-blur-sm -translate-x-1/2 z-20 pointer-events-none"></div>

      {/* Mission Half (Left) */}
      <div className="w-full md:w-1/2 relative group flex justify-end py-32 px-8">
        <div className="absolute inset-0 overflow-hidden z-0">
          <img src="/image/mission_background.png" alt="Mission Background" className="w-full h-full object-cover opacity-30 group-hover:opacity-60 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 scale-105 group-hover:scale-100" />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/90 via-deep-navy/60 to-deep-navy/80 md:to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-[600px] md:pr-12 lg:pr-20 space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 shadow-xl">
            <span className="material-symbols-outlined text-cyan-accent text-5xl">rocket_launch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-accent tracking-tight">Our Mission</h2>
          <p className="text-lg md:text-xl text-white/80 leading-[1.6]">
            At D'lian Connection, our mission is to redefine reality by transforming physical spaces into immersive, emotive experiences through advanced AI innovation. We bridge the gap between high-fashion aesthetics and cutting-edge technology to create unforgettable human connections.
          </p>
        </div>
      </div>

      {/* Vision Half (Right) */}
      <div className="w-full md:w-1/2 relative group flex justify-start py-32 px-8">
        <div className="absolute inset-0 overflow-hidden z-0">
          <img src="/image/vision_background.png" alt="Vision Background" className="w-full h-full object-cover opacity-30 group-hover:opacity-60 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700 scale-105 group-hover:scale-100" />
          <div className="absolute inset-0 bg-gradient-to-l from-deep-navy/90 via-deep-navy/60 to-deep-navy/80 md:to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-[600px] md:pl-12 lg:pl-20 space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 shadow-xl">
            <span className="material-symbols-outlined text-cyan-accent text-5xl">public</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-accent tracking-tight">Our Vision</h2>
          <p className="text-lg md:text-xl text-white/80 leading-[1.6]">
            We envision ourselves as the Vietnamese pioneering force in the AI-driven creative landscape. By continually pushing the boundaries of digital artistry and production, we aim to lead a new era of entertainment in which technology enhances every facet of our sensory world.
          </p>
        </div>
      </div>

    </section>
  );
}
