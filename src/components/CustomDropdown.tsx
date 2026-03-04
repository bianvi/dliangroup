import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface CustomDropdownProps {
  label: string;
  options: string[];
  placeholder: string;
  onSelect: (value: string) => void;
  required?: boolean;
  labelClassName?: string;
}

export default function CustomDropdown({ label, options, placeholder, onSelect, required, labelClassName }: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
        className={`w-full px-6 py-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between group ${
          isOpen ? 'border-cyan-accent bg-white/10' : 'border-white/10 bg-white/5 hover:border-white/20'
        }`}
      >
        <span className={`${selectedOption ? 'text-white' : 'text-gray-500'}`}>
          {selectedOption || placeholder}
        </span>
        <ChevronDown 
          size={18} 
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-accent' : 'text-white/40'}`} 
        />
      </div>

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
      
      {/* Hidden input for form validation if needed */}
      {required && (
        <input 
          type="hidden" 
          value={selectedOption || ''} 
          required 
        />
      )}
    </div>
  );
}
