import React from 'react';

export default function Testimonials() {
  return (
    <section className="relative z-10">
      <div className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 opacity-30 grayscale contrast-150">
            {/* Placeholder logos */}
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="h-10 w-40 bg-gray-400 rounded-sm"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-deep-navy py-32 relative overflow-hidden innovation-glow">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-xs uppercase tracking-[0.6em] text-cyan-accent font-bold mb-4">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">Trusted by Industry Leaders</h3>
          </div>

          <div className="max-w-4xl mx-auto relative px-12 md:px-0">
            <button className="absolute -left-20 top-1/2 -translate-y-1/2 text-cyan-accent hover:scale-110 transition-transform hidden md:block">
              <span className="material-icons text-5xl">chevron_left</span>
            </button>
            <button className="absolute -right-20 top-1/2 -translate-y-1/2 text-cyan-accent hover:scale-110 transition-transform hidden md:block">
              <span className="material-icons text-5xl">chevron_right</span>
            </button>

            <div className="testimonial-glass p-12 md:p-16 rounded-[2.5rem] shadow-2xl relative">
              <div className="mb-8">
                <span className="material-icons text-cyan-accent text-6xl">format_quote</span>
              </div>
              <blockquote className="text-2xl md:text-3xl font-normal leading-relaxed text-white mb-10 italic">
                "The integration of AI into our fashion launch was seamless. D'Lian Group didn't just produce an event; they created a sensory journey that left our audience speechless. A new standard for our industry."
              </blockquote>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20"></div>
                <div>
                  <p className="text-xl font-bold text-accent-blue tracking-wide">Alexander Vauthier</p>
                  <p className="text-sm font-semibold text-accent-blue/80 uppercase tracking-widest">Creative Director, AV Studio</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-3 mt-12">
              <div className="w-3 h-3 rounded-full bg-cyan-accent"></div>
              <div className="w-3 h-3 rounded-full bg-cyan-accent/30 hover:bg-cyan-accent/60 transition-colors cursor-pointer"></div>
              <div className="w-3 h-3 rounded-full bg-cyan-accent/30 hover:bg-cyan-accent/60 transition-colors cursor-pointer"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
