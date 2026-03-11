import React from 'react';

export default function MissionVision() {
  return (
    <section className="relative z-10 py-32 bg-deep-navy overflow-hidden">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-accent/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-blue/10 blur-[100px] rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-0 relative">
          <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent backdrop-blur-sm -translate-x-1/2"></div>
          
          <div className="md:pr-20 space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 shadow-xl">
              <span className="material-symbols-outlined text-cyan-accent text-5xl">rocket_launch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-accent tracking-tight">Our Mission</h2>
            <p className="text-lg md:text-xl text-white/80 leading-[1.6]">
              At D'LIAN CONNECTION, our mission is to redefine reality by transforming physical spaces into immersive, emotive experiences through advanced AI innovation. We bridge the gap between high-fashion aesthetics and cutting-edge technology to create unforgettable human connections.
            </p>
          </div>

          <div className="md:pl-20 space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 shadow-xl">
              <span className="material-symbols-outlined text-cyan-accent text-5xl">public</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-accent tracking-tight">Our Vision</h2>
            <p className="text-lg md:text-xl text-white/80 leading-[1.6]">
              We envision ourselves as the global pioneering force in the AI-driven creative landscape. By continuously pushing the boundaries of digital artistry and production, we aim to lead a new era of entertainment where technology enhances every facet of our sensory world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
