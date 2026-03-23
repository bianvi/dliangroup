'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface CustomDropdownProps {
  label: React.ReactNode;
  options: string[];
  placeholder: string;
  onSelect: (value: string) => void;
  required?: boolean;
  labelClassName?: string;
  error?: string;
  name?: string;
}

const CustomDropdown = React.forwardRef<HTMLDivElement, CustomDropdownProps>(
  ({ label, options, placeholder, onSelect, required, labelClassName, error, name }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Combine refs
    React.useImperativeHandle(ref, () => dropdownRef.current!);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (option: string) => {
      setSelectedOption(option);
      onSelect(option);
      setIsOpen(false);
    };

    return (
      <div className="flex flex-col gap-2 relative" ref={dropdownRef}>
        <label className={labelClassName || "text-xs font-bold uppercase tracking-widest text-white/40 ml-1"}>{label}</label>
        <div 
          onClick={() => setIsOpen(!isOpen)}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsOpen(!isOpen);
            }
          }}
          className={`w-full px-6 py-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between group outline-none focus:ring-1 focus:ring-cyan-accent ${
            isOpen ? 'border-cyan-accent bg-white/10' : error ? 'border-red-500 bg-red-500/5' : 'border-white/10 bg-white/5 hover:border-white/20'
          }`}
        >
          <span className={`${selectedOption ? 'text-white' : 'text-gray-500'}`}>
            {selectedOption || placeholder}
          </span>
          <ChevronDown 
            size={18} 
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-accent' : error ? 'text-red-500' : 'text-white/40'}`} 
          />
        </div>

        {error && (
          <span className="text-red-500 text-xs mt-1 ml-1">{error}</span>
        )}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute z-50 left-0 right-0 mt-2 bg-background-dark/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl"
            >
              <div className="max-h-60 overflow-y-auto custom-scrollbar">
                {options.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleSelect(option)}
                    className={`px-6 py-3 text-sm cursor-pointer transition-colors ${
                      selectedOption === option 
                      ? 'bg-cyan-accent/20 text-cyan-accent font-bold' 
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Hidden input for form validation and submission */}
        <input 
          name={name}
          tabIndex={-1}
          autoComplete="off"
          style={{ 
            opacity: 0, 
            width: '100%', 
            height: 0, 
            position: 'absolute', 
            bottom: 0, 
            left: 0,
            pointerEvents: 'none'
          }}
          value={selectedOption || ''} 
          required={required}
          onChange={() => {}}
        />
      </div>
    );
  }
);

CustomDropdown.displayName = 'CustomDropdown';

export default CustomDropdown;
