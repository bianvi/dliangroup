'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Contact from '../../../components/Contact';

export default function EventOrganization() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentLaunchIndex, setCurrentLaunchIndex] = useState(0);
  const [currentArtIndex, setCurrentArtIndex] = useState(0);

  const fashionShowImages = [
    "/image/Fashion Show/1.jpg",
    "/image/Fashion Show/2.jpg",
    "/image/Fashion Show/3.jpg",
    "/image/Fashion Show/4.jpg",
    "/image/Fashion Show/5.jpg",
  ];

  const launchEventImages = [
    "/image/Launch Event/1.JPG",
    "/image/Launch Event/2.jpg",
    "/image/Launch Event/3.jpg",
    "/image/Launch Event/4.jpg",
    "/image/Launch Event/5.jpg",
    "/image/Launch Event/6.jpg",
    "/image/Launch Event/7.jpg",
    "/image/Launch Event/8.jpg",
    "/image/Launch Event/9.jpg",
    "/image/Launch Event/10.jpg",
  ];

  const artExhibitionImages = [
    "/image/Art Exhibition/1.jpg",
    "/image/Art Exhibition/2.jpg",
    "/image/Art Exhibition/3.jpg",
    "/image/Art Exhibition/4.jpg",
    "/image/Art Exhibition/5.jpg",
  ];

  const [fashionInteraction, setFashionInteraction] = useState(0);
  const [launchInteraction, setLaunchInteraction] = useState(0);
  const [artInteraction, setArtInteraction] = useState(0);

  const nextImage = () => { setCurrentImageIndex((prev) => (prev + 1) % fashionShowImages.length); setFashionInteraction(Date.now()); };
  const prevImage = () => { setCurrentImageIndex((prev) => (prev - 1 + fashionShowImages.length) % fashionShowImages.length); setFashionInteraction(Date.now()); };
  const setFashionIndex = (idx: number) => { setCurrentImageIndex(idx); setFashionInteraction(Date.now()); };

  const nextLaunch = () => { setCurrentLaunchIndex((prev) => (prev + 1) % launchEventImages.length); setLaunchInteraction(Date.now()); };
  const prevLaunch = () => { setCurrentLaunchIndex((prev) => (prev - 1 + launchEventImages.length) % launchEventImages.length); setLaunchInteraction(Date.now()); };
  const setLaunchIndex = (idx: number) => { setCurrentLaunchIndex(idx); setLaunchInteraction(Date.now()); };

  const nextArt = () => { setCurrentArtIndex((prev) => (prev + 1) % artExhibitionImages.length); setArtInteraction(Date.now()); };
  const prevArt = () => { setCurrentArtIndex((prev) => (prev - 1 + artExhibitionImages.length) % artExhibitionImages.length); setArtInteraction(Date.now()); };
  const setArtIndex = (idx: number) => { setCurrentArtIndex(idx); setArtInteraction(Date.now()); };

  useEffect(() => {
    const timerFashion = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % fashionShowImages.length);
    }, 10000);
    return () => clearInterval(timerFashion);
  }, [fashionShowImages.length, fashionInteraction]);

  useEffect(() => {
    const timerLaunch = setInterval(() => {
      setCurrentLaunchIndex((prev) => (prev + 1) % launchEventImages.length);
    }, 10000);
    return () => clearInterval(timerLaunch);
  }, [launchEventImages.length, launchInteraction]);

  useEffect(() => {
    const timerArt = setInterval(() => {
      setCurrentArtIndex((prev) => (prev + 1) % artExhibitionImages.length);
    }, 10000);
    return () => clearInterval(timerArt);
  }, [artExhibitionImages.length, artInteraction]);

  const steps = [
    {
      num: "01",
      title: "Concept",
      desc: "Defining the \"Why\" and the \"Mood.\" We establish the emotional core and visual North Star of your event."
    },
    {
      num: "02",
      title: "Design",
      desc: "Translating ideas into 3D renderings and technical blueprints for spatial awareness and lighting precision."
    },
    {
      num: "03",
      title: "Execution",
      desc: "On-site management and flawless delivery. Our technical crews ensure every gear turns with absolute timing."
    },
    {
      num: "04",
      title: "Recap Project",
      desc: "Capturing the energy for digital distribution. High-end cinematography to ensure the event lives on forever."
    }
  ];

  return (
    <div className="bg-background-dark text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[140vh] w-full flex items-center justify-center overflow-hidden pt-24 md:pt-32">
        <div className="absolute inset-0 z-0">
          <img
            alt="High-end fashion runway"
            className="w-full h-full object-cover object-top opacity-60"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhrhSFX5WPecMFh346nTTParL_be-wAXMGZ4wysdr8FuoJvGxpearvqFElXi348zdWR38XfUoj19Vq00tfHIKsGmdi4ZyBI5q2qojw77B433u646QaPTaCXPjb2ZJSa8fCUVtkdaWfyN689mnLDaTwM3Poo7CPsOL2zg4JeV0J5ol-8UCApu9FSmorUCI2cJVf_RD96Y9xYxP5EGvYITzKoY2ooaXB6-20vjtrua_MNeUoXC0wO_ncPKkmym4BNADsg53qPy3pLoM"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/40 to-background-dark"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight mb-6"
          >
            Crafting Moments <br />into <span className="text-cyan-accent">Legacies</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto"
          >
            D'lian Connection defines the intersection of high-concept design and flawless event execution.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10"
          >
            <a
              className="inline-block bg-gradient-to-r from-accent-blue to-cyan-accent text-white font-bold px-10 py-4 rounded-full text-lg uppercase tracking-widest hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all shadow-lg"
              href="#contact"
            >
              Request a Consultation
            </a>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-icons text-cyan-accent text-3xl">expand_more</span>
        </div>
      </section>

      {/* Editorial Sections */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-screen-2xl mx-auto space-y-40">
        {/* Service 1: Fashion Shows */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-7 overflow-hidden rounded-2xl relative group">
            <img
              alt="Fashion Show Lighting"
              className="w-full aspect-[16/9] object-cover transition-transform duration-700"
              src={fashionShowImages[currentImageIndex]}
            />
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 hover:text-cyan-accent text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all"
            >
              <span className="material-icons">chevron_left</span>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 hover:text-cyan-accent text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all"
            >
              <span className="material-icons">chevron_right</span>
            </button>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {fashionShowImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setFashionIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentImageIndex ? 'bg-cyan-accent w-4' : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-cyan-accent font-bold tracking-widest uppercase mb-4">01. Production</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Fashion Shows</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We curate immersive runways where high-concept lighting, immersive soundscapes, and digital integration collide. Every step is synchronized, every spotlight is intentional, transforming a catwalk into a multi-sensory journey of brand identity.
            </p>
          </div>
        </motion.div>

        {/* Service 2: Launch Events */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
            <span className="text-cyan-accent font-bold tracking-widest uppercase mb-4">02. Innovation</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Launch Events & Activation</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Creating high-impact product reveals through kinetic technology and architectural staging. We don’t just announce products; we orchestrate moments of awe that resonate across global digital networks and physical audiences alike.
            </p>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 overflow-hidden rounded-2xl relative group">
            <img
              alt="Product Launch Technology"
              className="w-full aspect-[16/9] object-cover transition-transform duration-700"
              src={launchEventImages[currentLaunchIndex]}
            />
            
            <button
              onClick={prevLaunch}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 hover:text-cyan-accent text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all"
            >
              <span className="material-icons">chevron_left</span>
            </button>
            <button
              onClick={nextLaunch}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 hover:text-cyan-accent text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all"
            >
              <span className="material-icons">chevron_right</span>
            </button>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 flex-wrap justify-center w-[80%]">
              {launchEventImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setLaunchIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentLaunchIndex ? 'bg-cyan-accent w-4' : 'bg-white/50 hover:bg-white/80 w-2'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Service 3: Art Exhibitions */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-7 overflow-hidden rounded-2xl relative group">
            <img
              alt="Curated Art Exhibition"
              className="w-full aspect-[16/9] object-cover transition-transform duration-700"
              src={artExhibitionImages[currentArtIndex]}
            />
            
            <button
              onClick={prevArt}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 hover:text-cyan-accent text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all"
            >
              <span className="material-icons">chevron_left</span>
            </button>
            <button
              onClick={nextArt}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 hover:text-cyan-accent text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all"
            >
              <span className="material-icons">chevron_right</span>
            </button>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {artExhibitionImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setArtIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentArtIndex ? 'bg-cyan-accent w-4' : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-cyan-accent font-bold tracking-widest uppercase mb-4">03. Curation</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Art Exhibitions</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Bridging the gap between the physical and digital. Our curated spaces leverage minimalist aesthetics and sophisticated layouts to showcase artists and collections in environments designed for deep contemplation and modern engagement.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="bg-white/5 py-32 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-16">
          <h2 className="text-3xl md:text-4xl border-l-4 border-cyan-accent pl-6 font-bold">
            The Process
          </h2>
        </div>
        <div className="flex overflow-x-auto pb-12 px-6 md:px-12 gap-8 scroll-smooth no-scrollbar">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              whileHover={{ backgroundColor: 'rgba(37, 99, 235, 0.1)' }}
              className="min-w-[300px] md:min-w-[400px] bg-background-dark border border-white/10 p-10 flex flex-col justify-between transition-colors rounded-2xl"
            >
              <div>
                <span className="text-5xl font-bold text-white/10 mb-6 block">{step.num}</span>
                <h3 className="text-2xl font-bold mb-4 text-cyan-accent">{step.title}</h3>
                <p className="text-gray-400">
                  {step.desc}
                </p>
              </div>
              <div className="mt-8 h-1 w-full bg-cyan-accent"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
