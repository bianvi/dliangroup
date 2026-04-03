'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav h-20' : 'bg-transparent h-24'}`}>
      <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            {/* Logo Aura - Powerful vibrant glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/40 via-blue-500/30 to-purple-500/40 rounded-[24px] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
            
            <img 
              src="/image/logo_simple.png" 
              alt="D'lian Connection Logo" 
              className="relative h-16 w-auto object-contain bg-gradient-to-br from-cyan-300 via-white to-sky-200 rounded-[20px] p-1.5 shadow-[0_15px_35px_-10px_rgba(6,182,212,0.5)] border-2 border-white transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-1"
              referrerPolicy="no-referrer"
            />
            
            {/* Vivid Glass Shine */}
            <div className="absolute inset-0 rounded-[20px] bg-gradient-to-tr from-transparent via-white/40 to-transparent pointer-events-none group-hover:via-white/60 transition-all duration-500"></div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-12 text-sm font-semibold tracking-wide text-white/70">
          <Link href="/" className={`hover:text-cyan-accent transition-colors ${isActive('/') ? 'text-cyan-accent border-b-2 border-cyan-accent' : ''}`}>Home</Link>
          <Link href="/about" className={`hover:text-cyan-accent transition-colors ${isActive('/about') ? 'text-cyan-accent border-b-2 border-cyan-accent' : ''}`}>About us</Link>
          
          <div className="relative group">
            <button className="hover:text-cyan-accent transition-colors flex items-center gap-1 cursor-pointer">
              Services <span className="material-icons text-xs">expand_more</span>
            </button>
            <div className="absolute top-full left-0 min-w-[260px] bg-background-dark/95 backdrop-blur-2xl border border-white/10 border-t-2 border-t-cyan-accent rounded-b-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 py-4 shadow-2xl">
              <Link href="/services/event-organization" className="block px-6 py-3 text-white/70 hover:bg-cyan-accent/10 hover:text-cyan-accent transition-all">Event Organization</Link>
              <Link href="/services/production-house" className="block px-6 py-3 text-white/70 hover:bg-cyan-accent/10 hover:text-cyan-accent transition-all">Production House</Link>
              <Link href="/services/immersive-tech" className="block px-6 py-3 text-white/70 hover:bg-cyan-accent/10 hover:text-cyan-accent transition-all">VR–AR / Interaction</Link>
              <Link href="/services/retail-distribution" className="block px-6 py-3 text-white/70 hover:bg-cyan-accent/10 hover:text-cyan-accent transition-all">Retail Distribution in Vietnam</Link>
            </div>
          </div>

          <Link href="/portfolio" className={`hover:text-cyan-accent transition-colors ${isActive('/portfolio') ? 'text-cyan-accent border-b-2 border-cyan-accent' : ''}`}>Portfolio</Link>
          <Link href="/contact" className={`hover:text-cyan-accent transition-colors ${isActive('/contact') ? 'text-cyan-accent border-b-2 border-cyan-accent' : ''}`}>Contact</Link>
          
          <Link href="/contact" className="primary-glow-btn px-6 py-2.5 bg-gradient-to-r from-accent-blue to-cyan-accent text-white rounded-full font-bold text-sm">
            Get started
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white/70">
            <span className="material-icons">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background-dark border-b border-white/10 overflow-hidden"
          >
            <div className="px-8 py-6 flex flex-col gap-4 text-white/70">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-accent">Home</Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-accent">About us</Link>
              <Link href="/services/event-organization" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-accent">Event Organization</Link>
              <Link href="/services/production-house" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-accent">Production House</Link>
              <Link href="/services/immersive-tech" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-accent">VR–AR / Interaction</Link>
              <Link href="/services/retail-distribution" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-accent">Retail Distribution in Vietnam</Link>
              <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-accent">Portfolio</Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-accent">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
