import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const testimonials = [
  {
    quote: "The integration of AI into our fashion launch was seamless. D'Lian Group didn't just produce an event; they created a sensory journey that left our audience speechless. A new standard for our industry.",
    author: "Alexander Vauthier",
    role: "Creative Director, AV Studio",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?bg=white&auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "Their immersive VR experience transformed our marketing strategy. We saw a 40% increase in audience engagement within the first month. They are truly visionaries in the tech-art space.",
    author: "Elena Rossi",
    role: "Head of Digital, Luxury Brands",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?bg=white&auto=format&fit=crop&q=80&w=200"
  },
  {
    quote: "Working with D'Lian Group on our theme park transformation was a game-changer. Their interactive systems are durable, beautiful, and most importantly, incredibly engaging for all ages.",
    author: "James Chen",
    role: "Director of Parks, Leisure Global",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?bg=white&auto=format&fit=crop&q=80&w=200"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    })
  };

  return (
    <section className="relative z-10">
      <div className="bg-gray-100 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 opacity-30 grayscale contrast-150">
            {/* Placeholder logos with subtle hover effect */}
            {['VOGUE', 'CHANNEL', 'GUCCI', 'DISNEY', 'SAMSUNG'].map(brand => (
              <span key={brand} className="text-3xl font-black tracking-tighter text-gray-500 hover:text-gray-900 transition-colors cursor-default">{brand}</span>
            ))}
          </div>
        </div>
      </div>

      <div 
        className="py-32 relative overflow-hidden innovation-glow min-h-[700px]"
        style={{ backgroundColor: '#091526' }}
      >
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-xs uppercase tracking-[0.6em] text-cyan-accent font-bold mb-4">Testimonials</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">Trusted by Industry Leaders</h3>
          </div>

          <div className="max-w-4xl mx-auto relative group">
            <button 
              onClick={prevSlide}
              className="absolute -left-20 top-1/2 -translate-y-1/2 text-cyan-accent hover:scale-125 hover:text-white transition-all hidden lg:block z-20"
            >
              <span className="material-icons text-6xl">chevron_left</span>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute -right-20 top-1/2 -translate-y-1/2 text-cyan-accent hover:scale-125 hover:text-white transition-all hidden lg:block z-20"
            >
              <span className="material-icons text-6xl">chevron_right</span>
            </button>

            <div className="relative overflow-hidden min-h-[450px]">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div 
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.4 },
                    scale: { duration: 0.4 }
                  }}
                  className="p-8 md:p-16 rounded-[2.5rem] shadow-2xl relative border border-white/5 backdrop-blur-sm"
                  style={{ backgroundColor: '#19243B' }}
                >
                  <div className="mb-8">
                    <span className="material-icons text-cyan-accent text-6xl">format_quote</span>
                  </div>
                  <blockquote className="text-xl md:text-2xl lg:text-3xl font-normal leading-relaxed text-white mb-10 italic">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-accent/30 bg-white/10 group-hover:border-cyan-accent transition-colors">
                      <img 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].author} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-white tracking-wide">{testimonials[currentIndex].author}</p>
                      <p className="text-sm font-semibold text-cyan-accent uppercase tracking-widest">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center gap-4 mt-12">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > currentIndex ? 1 : -1);
                    setCurrentIndex(i);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === i ? 'bg-cyan-accent w-8' : 'bg-cyan-accent/30 hover:bg-cyan-accent/60'}`}
                />
              ))}
            </div>

            {/* Mobile Controls */}
            <div className="flex justify-between w-full mt-8 lg:hidden">
              <button 
                onClick={prevSlide}
                className="p-4 bg-white/5 rounded-full text-cyan-accent hover:bg-white/10"
              >
                <span className="material-icons text-3xl">arrow_back</span>
              </button>
              <button 
                onClick={nextSlide}
                className="p-4 bg-white/5 rounded-full text-cyan-accent hover:bg-white/10"
              >
                <span className="material-icons text-3xl">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
