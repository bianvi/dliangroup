import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav h-20' : 'bg-transparent h-24'}`}>
      <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="https://storage.googleapis.com/test-api-416107.appspot.com/aistudio/AB6AXuC6Y7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v7v" 
            alt="D'Lian Group Logo" 
            className="h-16 w-auto object-contain invert hue-rotate-180"
            referrerPolicy="no-referrer"
          />
        </Link>

        <div className="hidden md:flex items-center gap-12 text-sm font-semibold tracking-wide text-white/70">
          <Link to="/" className={`hover:text-cyan-accent transition-colors ${isActive('/') ? 'text-cyan-accent border-b-2 border-cyan-accent' : ''}`}>Home</Link>
          <Link to="/about" className={`hover:text-cyan-accent transition-colors ${isActive('/about') ? 'text-cyan-accent border-b-2 border-cyan-accent' : ''}`}>About us</Link>
          
          <div className="relative group">
            <button className="hover:text-cyan-accent transition-colors flex items-center gap-1 cursor-pointer">
              Services <span className="material-icons text-xs">expand_more</span>
            </button>
            <div className="absolute top-full left-0 min-w-[260px] bg-background-dark/95 backdrop-blur-2xl border border-white/10 border-t-2 border-t-cyan-accent rounded-b-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 py-4 shadow-2xl">
              <Link to="/services/event-organization" className="block px-6 py-3 text-white/70 hover:bg-cyan-accent/10 hover:text-cyan-accent transition-all">Event Organization</Link>
              <Link to="/services/production-house" className="block px-6 py-3 text-white/70 hover:bg-cyan-accent/10 hover:text-cyan-accent transition-all">Production House</Link>
              <Link to="/services/immersive-tech" className="block px-6 py-3 text-white/70 hover:bg-cyan-accent/10 hover:text-cyan-accent transition-all">VR–AR / Interaction</Link>
              <Link to="/services/amusement-facilities" className="block px-6 py-3 text-white/70 hover:bg-cyan-accent/10 hover:text-cyan-accent transition-all">Amusement Park Facilities</Link>
            </div>
          </div>

          <Link to="/portfolio" className={`hover:text-cyan-accent transition-colors ${isActive('/portfolio') ? 'text-cyan-accent border-b-2 border-cyan-accent' : ''}`}>Portfolio</Link>
          <Link to="/contact" className={`hover:text-cyan-accent transition-colors ${isActive('/contact') ? 'text-cyan-accent border-b-2 border-cyan-accent' : ''}`}>Contact</Link>
          
          <Link to="/contact" className="primary-glow-btn px-6 py-2.5 bg-gradient-to-r from-accent-blue to-cyan-accent text-white rounded-full font-bold text-sm">
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
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-accent">Home</Link>
              <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-accent">About us</Link>
              <Link to="/services/event-organization" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-accent">Event Organization</Link>
              <Link to="/services/production-house" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-accent">Production House</Link>
              <Link to="/services/immersive-tech" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-accent">VR–AR / Interaction</Link>
              <Link to="/services/amusement-facilities" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-accent">Amusement Park Facilities</Link>
              <Link to="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-accent">Portfolio</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-accent">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
