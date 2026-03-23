'use client';

import React, { useState, useRef } from 'react';
import { Instagram, Linkedin, Youtube } from 'lucide-react';
import CustomDropdown from './CustomDropdown';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    service: '',
    budget: '',
    brief: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const briefRef = useRef<HTMLTextAreaElement>(null);

  const services = [
    "Event Organization",
    "Production House",
    "VR/AR Tech Studio",
    "Amusement Facilities"
  ];

  const budgets = [
    "$10k - $25k",
    "$25k - $50k",
    "$50k - $100k",
    "$100k+"
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.service) newErrors.service = 'Please select an interested service';
    if (!formData.brief.trim()) newErrors.brief = 'Project Brief is required';
    
    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      alert('Thank you for your inquiry. Our team will contact you shortly.');
      // Reset form if needed or navigate
    } else {
      // Scroll to and focus the first error in order
      if (newErrors.fullName) {
        fullNameRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        fullNameRef.current?.focus();
      } else if (newErrors.email) {
        emailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        emailRef.current?.focus();
      } else if (newErrors.service) {
        serviceRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Focusing the CustomDropdown div
        const toggler = serviceRef.current?.querySelector('[tabindex="0"]') as HTMLElement;
        toggler?.focus();
      } else if (newErrors.brief) {
        briefRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        briefRef.current?.focus();
      }
    }
  };

  return (
    <section className="relative z-10 py-40 bg-background-dark overflow-hidden" id="contact">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-blue/10 blur-[120px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-xs uppercase tracking-[0.6em] text-cyan-accent font-bold">Connect</h2>
            <h3 className="text-5xl md:text-6xl font-bold">Let's <span className="gradient-text">Collaborate</span></h3>
            <p className="text-white/60 text-lg max-w-md">Ready to redefine the boundaries of your brand? Our team is standing by to transform your vision into an immersive reality.</p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full bg-deep-navy/30 border border-white/10 flex items-center justify-center group-hover:border-cyan-accent transition-colors">
                <span className="material-icons text-cyan-accent">email</span>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Email Us</p>
                <p className="text-lg font-medium">Contact@dliangroup.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 shrink-0 rounded-full bg-deep-navy/30 border border-white/10 flex items-center justify-center group-hover:border-cyan-accent transition-colors mt-1">
                <span className="material-icons text-cyan-accent">call</span>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Call Us</p>
                <div className="space-y-1">
                  <p className="text-lg font-medium flex items-center gap-2"><span className="text-sm text-white/60 w-28">WhatsApp:</span> +84 984807169</p>
                  <p className="text-lg font-medium flex items-center gap-2"><span className="text-sm text-white/60 w-28">Zalo/Wechat:</span> +84 903423135</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <a href="#" className="w-14 h-14 rounded-full bg-deep-navy/30 border border-white/10 flex items-center justify-center hover:bg-cyan-accent hover:text-black hover:border-cyan-accent transition-all hover:scale-110 shadow-lg">
                <Instagram size={24} />
              </a>
              <a href="#" className="w-14 h-14 rounded-full bg-deep-navy/30 border border-white/10 flex items-center justify-center hover:bg-cyan-accent hover:text-black hover:border-cyan-accent transition-all hover:scale-110 shadow-lg">
                <Linkedin size={24} />
              </a>
              <a href="#" className="w-14 h-14 rounded-full bg-deep-navy/30 border border-white/10 flex items-center justify-center hover:bg-cyan-accent hover:text-black hover:border-cyan-accent transition-all hover:scale-110 shadow-lg">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="service-card p-8 md:p-12 rounded-[2rem] border border-white/5">
          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1 min-h-[2.5rem] flex items-end pb-1">Full Name</label>
                <input 
                  ref={fullNameRef}
                  className={`w-full px-6 py-4 rounded-xl border transition-all text-white outline-none focus:ring-1 focus:ring-cyan-accent ${
                    errors.fullName ? 'border-red-500 bg-red-500/5' : 'border-white/10 bg-white/5 focus:border-cyan-accent'
                  }`}
                  placeholder="John Doe" 
                  required 
                  type="text"
                  onChange={(e) => {
                    setFormData({...formData, fullName: e.target.value});
                    if (errors.fullName) setErrors({...errors, fullName: ''});
                  }}
                />
                {errors.fullName && <span className="text-red-500 text-xs ml-1">{errors.fullName}</span>}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1 min-h-[2.5rem] flex items-end pb-1">Company Name <span className="text-[10px] lowercase opacity-50 ml-1">(Optional)</span></label>
                <input 
                  className="w-full px-6 py-4 rounded-xl border border-white/10 bg-white/5 focus:border-cyan-accent transition-all text-white outline-none" 
                  placeholder="Brand Studio Inc." 
                  type="text"
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1 min-h-[2.5rem] flex items-end pb-1">Email Address</label>
              <input 
                ref={emailRef}
                className={`w-full px-6 py-4 rounded-xl border transition-all text-white outline-none focus:ring-1 focus:ring-cyan-accent ${
                  errors.email ? 'border-red-500 bg-red-500/5' : 'border-white/10 bg-white/5 focus:border-cyan-accent'
                }`}
                placeholder="john@example.com" 
                required 
                type="email"
                onChange={(e) => {
                  setFormData({...formData, email: e.target.value});
                  if (errors.email) setErrors({...errors, email: ''});
                }}
              />
              {errors.email && <span className="text-red-500 text-xs ml-1">{errors.email}</span>}
            </div>

            <div ref={serviceRef}>
              <CustomDropdown 
                label="Interested Service"
                options={services}
                placeholder="Select a Service"
                onSelect={(val) => {
                  setFormData({...formData, service: val});
                  if (errors.service) setErrors({...errors, service: ''});
                }}
                required
                labelClassName="text-xs font-bold uppercase tracking-widest text-white/40 ml-1 min-h-[2.5rem] flex items-end pb-1"
                error={errors.service}
              />
            </div>
            <CustomDropdown 
              label={<span>Project Budget Range <span className="text-[10px] lowercase opacity-50 ml-1 font-normal">(Optional)</span></span>}
              options={budgets}
              placeholder="Select Budget"
              onSelect={(val) => setFormData({...formData, budget: val})}
              labelClassName="text-xs font-bold uppercase tracking-widest text-white/40 ml-1 min-h-[2.5rem] flex items-end pb-1"
            />

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1 min-h-[2.5rem] flex items-end pb-1">Project Brief</label>
              <textarea 
                ref={briefRef}
                className={`w-full px-6 py-4 rounded-xl border transition-all text-white resize-none outline-none focus:ring-1 focus:ring-cyan-accent ${
                  errors.brief ? 'border-red-500 bg-red-500/5' : 'border-white/10 bg-white/5 focus:border-cyan-accent'
                }`}
                placeholder="Tell us about your project vision..." 
                required 
                rows={6}
                onChange={(e) => {
                  setFormData({...formData, brief: e.target.value});
                  if (errors.brief) setErrors({...errors, brief: ''});
                }}
              ></textarea>
              {errors.brief && <span className="text-red-500 text-xs ml-1">{errors.brief}</span>}
            </div>

            <button className="primary-glow-btn w-full py-5 bg-gradient-to-r from-accent-blue to-cyan-accent text-white rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02]" type="submit">
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
