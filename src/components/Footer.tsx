import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 bg-deep-navy border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
              <span className="material-icons text-white text-sm">auto_awesome</span>
            </div>
            <span className="text-lg font-bold tracking-[0.2em] uppercase text-white">D'lian Connection</span>
          </div>
          
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-white/50">
            <a href="#" className="hover:text-cyan-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-cyan-accent transition-colors">Legal</a>
          </div>
          
          <p className="text-white/40 text-sm font-medium">© 2024 D'lian Connection. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
