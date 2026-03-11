'use client';

import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

const services = [
  {
    title: "Event Organization",
    icon: "event_seat",
    items: ["Fashion Shows", "Launch Events"],
    link: "/services/event-organization"
  },
  {
    title: "Production House",
    icon: "movie_filter",
    items: ["TVC", "Viral Clips"],
    link: "/services/production-house"
  },
  {
    title: "VR/AR Tech Studio",
    icon: "view_in_ar",
    items: ["Immersive VR/AR", "Digital Art"],
    link: "/services/immersive-tech"
  },
  {
    title: "Amusement Facilities",
    icon: "architecture",
    items: ["Playground Design", "Equipment"],
    link: "/services/amusement-facilities"
  }
];

export default function Services() {
  return (
    <section className="relative z-10 py-40 bg-background-dark">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col items-center text-center mb-24 space-y-6">
          <h2 className="text-xs uppercase tracking-[0.6em] text-cyan-accent font-bold">Expertise</h2>
          <h3 className="text-4xl md:text-6xl font-bold">Our Core Services</h3>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-accent to-transparent rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:px-12">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="service-card p-14 md:p-20 rounded-3xl flex flex-col h-full min-h-[420px]"
            >
              <div className="mb-12">
                <span className="material-symbols-outlined text-cyan-accent text-7xl opacity-80">{service.icon}</span>
              </div>
              <h4 className="text-3xl font-bold mb-8">{service.title}</h4>
              <div className="flex flex-col gap-5 mb-12">
                {service.items.map((item, i) => (
                  <span key={i} className="text-white/50 text-base flex items-center gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent"></span> {item}
                  </span>
                ))}
              </div>
              <div className="mt-auto">
                <Link href={service.link} className="text-cyan-accent text-sm font-bold tracking-[0.25em] uppercase flex items-center gap-3 hover:gap-5 transition-all">
                  Learn More <span className="material-icons text-sm">arrow_forward</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#contact" className="group relative primary-glow-btn px-12 py-5 bg-gradient-to-r from-accent-blue to-cyan-accent text-white rounded-full font-bold text-lg transition-all duration-500 hover:scale-105 inline-block text-center">
            Start your project
          </a>
          <Link href="/portfolio" className="group relative px-12 py-5 bg-white text-background-dark rounded-full font-bold text-lg shadow-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-500 hover:scale-105 inline-block text-center">
            View our work
          </Link>
        </div>
      </div>
    </section>
  );
}
