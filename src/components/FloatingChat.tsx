'use client';

import React, { useState } from 'react';

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
      {/* Box containing Zalo and WhatsApp links */}
      {isOpen && (
        <div className="bg-deep-navy border border-white/10 rounded-2xl shadow-2xl p-4 flex flex-col gap-3 min-w-[200px] mb-2 origin-bottom-right transition-all animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex justify-between items-center mb-1">
            <span className="text-white font-bold tracking-wider uppercase text-xs">Chat with us</span>
            <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white transition-colors">
              <span className="material-icons text-sm">close</span>
            </button>
          </div>
          
          <a
            href="https://zalo.me/84903423135"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#0068FF]/10 hover:bg-[#0068FF]/20 border border-[#0068FF]/30 p-3 rounded-xl transition-all group"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" 
              alt="Zalo Logo" 
              className="w-8 h-8 shrink-0 object-contain" 
            />
            <span className="text-white font-medium group-hover:text-[#0068FF] transition-colors">Zalo Chat</span>
          </a>

          <a
            href="https://wa.me/84984807169"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#00A884]/10 hover:bg-[#00A884]/20 border border-[#00A884]/30 p-3 rounded-xl transition-all group"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
              alt="WhatsApp Logo" 
              className="w-8 h-8 shrink-0 object-contain" 
            />
            <span className="text-white font-medium group-hover:text-[#00A884] transition-colors">WhatsApp</span>
          </a>
        </div>
      )}

      {/* Main trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-cyan-accent text-white rounded-full flex items-center justify-center shadow-2xl shadow-cyan-accent/40 hover:scale-[1.05] transition-transform group relative"
      >
        <span className="material-icons text-3xl relative z-10">{isOpen ? 'close' : 'chat'}</span>
        {!isOpen && (
          <span className="absolute right-20 bg-deep-navy px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">
            Chat with us
          </span>
        )}
      </button>
    </div>
  );
}
