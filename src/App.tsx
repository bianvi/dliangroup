/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import EventOrganization from './pages/EventOrganization';
import ProductionHouse from './pages/ProductionHouse';
import ImmersiveTech from './pages/ImmersiveTech';
import AmusementFacilities from './pages/AmusementFacilities';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-background-dark overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services/event-organization" element={<EventOrganization />} />
            <Route path="/services/production-house" element={<ProductionHouse />} />
            <Route path="/services/immersive-tech" element={<ImmersiveTech />} />
            <Route path="/services/amusement-facilities" element={<AmusementFacilities />} />
          </Routes>
        </main>
        <Footer />

        {/* WhatsApp FAB */}
        <a 
          href="#" 
          className="fixed bottom-8 right-8 w-16 h-16 bg-[#00A884] rounded-full flex items-center justify-center z-[100] shadow-2xl shadow-[#00A884]/40 group hover:scale-110 transition-transform"
        >
          <svg className="w-8 h-8 fill-white" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412s-1.239 6.164-3.485 8.412c-2.245 2.247-5.231 3.487-8.411 3.487-.001 0-.001 0-.002 0-2.013 0-3.992-.54-5.717-1.558l-6.081 1.599zm6.002-4.558c1.587.943 3.156 1.416 4.66 1.417 4.968 0 9.023-4.055 9.026-9.023.002-4.968-4.053-9.021-9.022-9.022-2.41-.001-4.671.935-6.371 2.636s-2.637 3.961-2.638 6.371c-.001 1.594.484 3.143 1.4 4.507l-1.041 3.806 3.986-1.048z"></path>
          </svg>
          <span className="absolute right-20 bg-deep-navy px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
            Chat with us
          </span>
        </a>

        {/* Stardust overlay */}
        <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-soft-light bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      </div>
    </Router>
  );
}
