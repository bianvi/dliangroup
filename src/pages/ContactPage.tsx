import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Linkedin, Instagram, Youtube } from 'lucide-react';
import CustomDropdown from '../components/CustomDropdown';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    service: '',
    budget: '',
    brief: ''
  });

  const services = [
    "High-end Event Production",
    "Commercial & Cinematic Film",
    "VR/AR & Immersive Tech",
    "Amusement Park Design & Equipment"
  ];

  const budgets = [
    "< $50k",
    "$50k - $200k",
    "$200k - $1M",
    "$1M+"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. Our team will contact you shortly.');
  };

  return (
    <main className="min-h-screen flex flex-col pt-24">
      {/* Top Split Section */}
      <section className="flex flex-col md:flex-row flex-grow min-h-[80vh]">
        {/* Left Side - Brand Identity & Info */}
        <div className="w-full md:w-1/2 bg-[#050B18] p-8 md:p-16 flex flex-col justify-between text-white relative overflow-hidden">
          {/* Subtle Animated Background Element */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-accent/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            {/* Logo Placeholder */}
            <motion.div 
              animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-24 h-24 mb-12 flex items-center justify-center border border-cyan-accent/50 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.2)]"
            >
              <span className="text-cyan-accent text-xs font-bold tracking-widest uppercase">D'Lian</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Let’s Build the Future Together.<br />
              <span className="text-cyan-accent">The First Step to Innovation.</span>
            </h1>
            
            <p className="text-gray-300 max-w-md mb-12">
              Whether you're planning a global fashion event or developing a next-generation amusement park, our team is ready to bring your vision to life.
            </p>
            
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="space-y-6">
                {[
                  {
                    title: "General Inquiries",
                    value: "Contact@dliangroup.com",
                    icon: "mail"
                  },
                  {
                    title: "Business & Partnerships",
                    value: "partnerships@dliangroup.com",
                    icon: "business_center"
                  },
                  {
                    title: "Global HQ",
                    value: "123 Innovation Drive, Creative District, [City, Country]",
                    icon: "location_on"
                  },
                  {
                    title: "Studio Hours",
                    value: "Mon-Fri: 09:00 – 18:00 GMT+7",
                    icon: "schedule"
                  },
                  {
                    title: "Quick Connect",
                    value: "WhatsApp/Zalo: +84 XX XXX XXXX",
                    icon: "chat"
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 text-cyan-accent flex-shrink-0">
                      <span className="material-icons text-xl">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-accent mb-1">{item.title}</h3>
                      <p className="text-gray-200 text-sm whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Social Media Links */}
          <div className="mt-16 flex gap-6 relative z-10">
            {[
              { name: 'LinkedIn', icon: <Linkedin size={24} /> },
              { name: 'Instagram', icon: <Instagram size={24} /> },
              { name: 'YouTube', icon: <Youtube size={24} /> }
            ].map((social) => (
              <a 
                key={social.name}
                href="#" 
                aria-label={social.name}
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-cyan-accent hover:text-black hover:border-cyan-accent transition-all hover:scale-110 shadow-lg"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side - Inquiry Form */}
        <div className="w-full md:w-1/2 bg-[#0A1120] p-8 md:p-16 flex items-center justify-center border-l border-white/5">
          <div className="w-full max-w-lg">
            <h2 className="text-3xl font-bold mb-8 text-white">Inquiry Form</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-cyan-accent/70 ml-1 min-h-[2.5rem] flex items-end pb-1">Full Name</label>
                  <input 
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-cyan-accent focus:bg-white/10 transition-all outline-none text-white placeholder:text-gray-500 rounded-lg"
                    placeholder="John Doe"
                    required
                    type="text"
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-cyan-accent/70 ml-1 min-h-[2.5rem] flex items-end pb-1">Company Name</label>
                  <input 
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-cyan-accent focus:bg-white/10 transition-all outline-none text-white placeholder:text-gray-500 rounded-lg"
                    placeholder="D'Lian Enterprises"
                    required
                    type="text"
                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-cyan-accent/70 ml-1 min-h-[2.5rem] flex items-end pb-1">Email Address</label>
                <input 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-cyan-accent focus:bg-white/10 transition-all outline-none text-white placeholder:text-gray-500 rounded-lg"
                  placeholder="email@example.com"
                  required
                  type="email"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              
              <CustomDropdown 
                label="Interested Service"
                options={services}
                placeholder="Select a service"
                onSelect={(val) => setFormData({...formData, service: val})}
                required
                labelClassName="text-xs font-bold uppercase tracking-widest text-cyan-accent/70 ml-1 min-h-[2.5rem] flex items-end pb-1"
              />
              
              <CustomDropdown 
                label="Project Budget Range (Optional)"
                options={budgets}
                placeholder="Select range"
                onSelect={(val) => setFormData({...formData, budget: val})}
                labelClassName="text-xs font-bold uppercase tracking-widest text-cyan-accent/70 ml-1 min-h-[2.5rem] flex items-end pb-1"
              />
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest text-cyan-accent/70 ml-1 min-h-[2.5rem] flex items-end pb-1">Tell us about your vision</label>
                <textarea 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 focus:border-cyan-accent focus:bg-white/10 transition-all outline-none text-white placeholder:text-gray-500 resize-none rounded-lg"
                  placeholder="Share your ideas with us..."
                  required
                  rows={4}
                  onChange={(e) => setFormData({...formData, brief: e.target.value})}
                ></textarea>
              </div>
              
              <button 
                className="w-full py-4 bg-gradient-to-r from-accent-blue to-cyan-accent text-white font-bold tracking-widest uppercase rounded-lg hover:opacity-90 transition-all shadow-lg hover:shadow-accent-blue/20"
                type="submit"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[400px] bg-[#050B18] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0a192f] opacity-90">
          <iframe
            frameBorder="0"
            height="100%"
            marginHeight={0}
            marginWidth={0}
            scrolling="no"
            src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Ho%20Chi%20Minh%20City&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            style={{ filter: "grayscale(100%) invert(90%) contrast(1.2) hue-rotate(200deg)" }}
            width="100%"
          ></iframe>
        </div>
        <div className="absolute inset-0 pointer-events-none border-t-2 border-[#050B18]"></div>
      </section>
    </main>
  );
}
