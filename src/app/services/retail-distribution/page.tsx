'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Warehouse, 
  Network, 
  ShoppingCart, 
  Utensils, 
  Factory, 
  Fish, 
  Beef, 
  Globe, 
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Volleyball,
  ShieldCheck
} from 'lucide-react';
import Contact from '../../../components/Contact';
import ProjectModal from '../../../components/ProjectModal';
import { projects } from '../../../data/projects';

export default function RetailDistributionPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenProject = (id: number) => {
    const project = projects.find(p => p.id === id);
    if (project) {
      setSelectedProject(project);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="bg-background-dark text-white overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #2563eb 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-accent-blue opacity-10 blur-[150px]"></div>
        <div className="absolute bottom-1/4 -right-24 w-[400px] h-[400px] bg-cyan-accent opacity-5 blur-[120px]"></div>
      </div>

      {/* SECTION 1: HERO BANNER */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 px-6 py-2 border border-cyan-accent/30 rounded-full text-[10px] tracking-[0.3em] uppercase text-cyan-accent bg-cyan-accent/5 backdrop-blur-sm"
        >
          Connect Global Brands & Premium Distribution
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xs tracking-widest uppercase text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          D'lian Connection is a trusted partner specializing in importing and distributing premium products, 
          bridging the gap between international manufacturers and Vietnamese consumers.
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight uppercase mb-8 max-w-6xl leading-[0.9] text-balance"
        >
          Hai Dang Phat: Your Trusted <br />
          <span className="gradient-text">Gateway to Vietnam</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed tracking-wide mb-12"
        >
          Leading Importer and Distributor of Premium International Foods and Specialized Industrial Facilities. 
          We bridge the gap from global excellence to local demand.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a href="#overview" className="primary-glow-btn px-10 py-5 bg-gradient-to-r from-accent-blue to-cyan-accent text-white rounded-full font-bold text-sm tracking-widest uppercase flex items-center gap-2">
            Explore Our Solutions <ArrowRight size={16} />
          </a>
          <a href="#contact" className="px-10 py-5 border border-white/20 hover:border-cyan-accent/50 hover:bg-white/5 transition-all rounded-full font-bold text-sm tracking-widest uppercase">
            Inquire Now
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-accent to-transparent"></div>
        </div>
      </section>

      {/* SECTION 2: AT A GLANCE - COMPANY OVERVIEW */}
      <section id="overview" className="relative z-10 py-32 px-6 md:px-12 lg:px-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs tracking-[0.3em] text-cyan-accent uppercase mb-6">At a Glance</h2>
              <h3 className="text-4xl md:text-5xl font-normal tracking-tight uppercase mb-8 leading-tight">
                Connecting Global Brands.<br />
                <span className="text-white/50">Empowering Local Business.</span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-10 font-light">
                D’Lian Connection delivers more than themed entertainment solutions. Alongside importing and setting up international-standard theme park facilities, we also bridge global supply with local markets. Through our strategic partnership with Hai Đăng Phát, we distribute high-quality imported frozen meats and fruits to local retailers, helping businesses access trusted products while elevating everyday consumer experiences.”
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {[
                  { icon: <MapPin className="text-cyan-accent" />, stat: "3+", label: "Strategic Locations", sub: "Hanoi, HCMC" },
                  { icon: <Warehouse className="text-cyan-accent" />, stat: "Modern", label: "Cold Storage", sub: "& Processing" },
                  { icon: <Network className="text-cyan-accent" />, stat: "100+ ", label: "Buyers, Whole sellers", sub: "& Retails" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-3">
                    <div className="w-12 h-12 rounded-xl bg-cyan-accent/10 border border-cyan-accent/20 flex items-center justify-center mb-2">
                      {item.icon}
                    </div>
                    <div className="text-3xl font-bold text-white">{item.stat}</div>
                    <div className="text-xs tracking-[0.2em] uppercase text-gray-400 leading-tight">
                      {item.label} <br />
                      <span className="text-cyan-accent/60">{item.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-cyan-accent/20 rounded-3xl blur-3xl opacity-30"></div>
              <img 
                src="https://inrifz8adj9odids.public.blob.vercel-storage.com/13414842104209026519.jpg" 
                alt="Logistics and Distribution" 
                className="w-full h-full object-cover rounded-3xl border border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-background-dark border border-white/10 p-8 rounded-2xl shadow-2xl backdrop-blur-xl hidden md:block">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-3 h-3 rounded-full bg-cyan-accent animate-pulse"></div>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-cyan-accent">Market Intelligence</span>
                </div>
                <div className="text-2xl font-bold">Vietnam Gateway</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE PILLAR 1 - PREMIUM FOOD & SEAFOOD WHOLESALE */}
      <section className="relative z-10 py-32 px-6 md:px-12 lg:px-24 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <header className="mb-20 text-center">
            <h2 className="text-xs tracking-[0.3em] text-cyan-accent uppercase mb-6">Case Business 01</h2>
            <h3 className="text-4xl md:text-6xl font-normal tracking-tight uppercase mb-8">
              The Heart of Your Menu.<br />
              <span className="gradient-text">Premium Wholesale Food.</span>
            </h3>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed font-light">
              In partnership with Hai Đăng Phát, we are a leading force in the import and wholesale distribution of high-quality proteins and diverse frozen food products across Vietnam. With direct sourcing and specialized processing, we guarantee quality from port to plate.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { 
                title: "Global Beef Imports", 
                icon: <Beef size={32} />, 
                desc: "Premium Beef from USA, Canada, Australia, and Russia.",
                image: "https://inrifz8adj9odids.public.blob.vercel-storage.com/3403682138995096993.jpg"
              },
              { 
                title: "Vietnamese Seafood", 
                icon: <Fish size={32} />, 
                desc: "Top-quality seafood sourced from Vietnam's pristine coastal waters.",
                image: "https://inrifz8adj9odids.public.blob.vercel-storage.com/3403682138995096995.jpg"
              },
              { 
                title: "Diverse Frozen Foods", 
                icon: <Warehouse size={32} />, 
                desc: "Comprehensive range serving multiple industry segments.",
                image: "https://inrifz8adj9odids.public.blob.vercel-storage.com/9479512103075192406.jpg"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-background-dark/50"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/20 to-transparent p-8 flex flex-col justify-end">
                  <div className="text-cyan-accent mb-4">{item.icon}</div>
                  <h4 className="text-2xl font-bold mb-4 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-background-dark border border-white/10 rounded-3xl p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-accent/10 blur-[100px]"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-cyan-accent/20 flex items-center justify-center text-cyan-accent">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="text-xs tracking-[0.3em] uppercase text-cyan-accent">Quality Assurance</span>
                </div>
                <h4 className="text-3xl font-bold mb-6 uppercase tracking-tight">Facilities Highlight</h4>
                <p className="text-gray-400 leading-relaxed font-light">
                  In-house state-of-the-art storage, processing, and packaging facilities in both Hanoi and Ho Chi Minh City, ensuring strict quality control and efficient logistics. We maintain the cold chain integrity from the moment of import to the final delivery.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                  <div className="text-2xl font-bold text-white mb-1">Hanoi</div>
                  <div className="text-[10px] tracking-widest uppercase text-cyan-accent">Main Hub</div>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                  <div className="text-2xl font-bold text-white mb-1">HCMC</div>
                  <div className="text-[10px] tracking-widest uppercase text-cyan-accent">Strategic Hub</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CORE PILLAR 2 - AMUSEMENT PARK FACILITIES DISTRIBUTION */}
      <section className="relative z-10 py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 mb-24">
            <div className="lg:w-1/2">
              <h2 className="text-xs tracking-[0.3em] text-cyan-accent uppercase mb-6">Case Business 02</h2>
              <h3 className="text-4xl md:text-5xl font-normal tracking-tight uppercase mb-8 leading-tight">
                Elevating Experiences.<br />
                <span className="text-white/50">Building Vietnam’s Leisure Future.</span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed font-light mb-10">
                D'lian Connection is the exclusive/strategic distribution partner for world-class amusement and leisure park facilities, delivering innovation and safety to premier Vietnamese destinations.
              </p>
              <div className="space-y-6">
                {[
                  "Technical Expertise & Engineering Support",
                  "Market Insights for Leisure Developers",
                  "Dedicated After-Sales & Maintenance",
                  "Global Sourcing of Innovative Attractions"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="text-cyan-accent" size={20} />
                    <span className="text-sm tracking-widest uppercase text-white/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 gap-8">
              <h4 className="text-xs tracking-[0.3em] text-cyan-accent uppercase mb-2">Case Studies</h4>
              {[
                {
                  id: 8,
                  title: "Lang Biang Land, Da Lat",
                  desc: "Strategic provider of specialized leisure park equipment for Da Lat's iconic destination.",
                  image: "https://res.cloudinary.com/dhgu45hvi/image/upload/v1774084304/d6e73bbe7952c50c9c43_rmxwsx.jpg"
                },
                {
                  id: 9,
                  title: "My Khánh Village",
                  desc: "Primary distributor of diverse amusement and tourist facilities for this thriving Southern eco-tourism hub.",
                  image: "https://res.cloudinary.com/dhgu45hvi/image/upload/v1774107509/645677017_967862532476975_5230929743128581835_n_ueoifb.jpg"
                }
              ].map((caseStudy, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  onClick={() => handleOpenProject(caseStudy.id)}
                  className="group flex flex-col sm:flex-row gap-6 p-6 bg-white/5 border border-white/10 rounded-3xl hover:border-cyan-accent/30 transition-all duration-500 cursor-pointer"
                >
                  <div className="sm:w-1/3 aspect-video sm:aspect-square overflow-hidden rounded-2xl">
                    <img 
                      src={caseStudy.image} 
                      alt={caseStudy.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="sm:w-2/3 flex flex-col justify-center">
                    <h5 className="text-xl font-bold mb-3 uppercase tracking-tight">{caseStudy.title}</h5>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">{caseStudy.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: TRUSTED PARTNERSHIPS & NETWORK */}
      <section className="relative z-10 py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-transparent to-accent-blue/5">
        <div className="max-w-7xl mx-auto">
          <header className="mb-20 text-center">
            <h2 className="text-xs tracking-[0.3em] text-cyan-accent uppercase mb-6">Our Network</h2>
            <h3 className="text-4xl md:text-5xl font-normal tracking-tight uppercase mb-8 text-white">
              Your Success is Our <span className="gradient-text">Commitment.</span>
            </h3>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed font-light">
              At D’Lian Connection, our growth is driven by powerful, long-term partnerships built on trust and shared value. We proudly serve a diverse portfolio of clients across multiple channels, from national supermarket chains and modern trade to e-commerce platforms and large-scale industrial partners. Our network is designed to help our partners expand faster, operate smarter, and succeed sustainably.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              { 
                title: "Supermarket & Retail",
                icon: <ShoppingCart className="text-cyan-accent" size={32} />, 
                desc: " We supply imported premium foods and global-standard products to supermarkets and retail shops.",
                label: "Modern Trade (MT)",
                image: "https://inrifz8adj9odids.public.blob.vercel-storage.com/216834852282965448710.jpg"
              },
              { 
                title: "Theme Park & Kids Playground", 
                icon:  <Volleyball className="text-cyan-accent" size={32} />,
                desc: " We import and deliver world-class playground equipment and theme park facilities for modern entertainment spaces.",
                label: "Amusement park",
                image: "https://res.cloudinary.com/dhgu45hvi/image/upload/v1774084164/DJI_0002_sv2wh4.jpg"
              },
              { 
                title: "B2B & Restaurant", 
                icon: <Utensils className="text-cyan-accent" size={32} />, 
                desc: "We provide imported foods and specialized equipment solutions for restaurants, corporate clients, and large-scale projects.",
                label: "Industrial & Corporate",
                image: "https://inrifz8adj9odids.public.blob.vercel-storage.com/9479512103075192407.jpg",
              }
            ].map((channel, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative overflow-hidden p-10 rounded-3xl border border-white/10 hover:border-cyan-accent/30 transition-all group min-h-[320px] flex flex-col justify-start"
              >
                {/* Background Image with Overlay */}
                <div 
                  className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  style={{ backgroundImage: `url(${channel.image})` }}
                />
                <div className="absolute inset-0 z-10 bg-background-dark/60 group-hover:bg-background-dark/40 transition-colors duration-500" />

                <div className="relative z-20">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-accent/10 backdrop-blur-md flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    {channel.icon}
                  </div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-cyan-accent mb-2 font-bold">{channel.label}</div>
                  <h4 className="text-2xl font-bold mb-4 uppercase tracking-tight">{channel.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">
                    {channel.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Partner Logos Placeholder */}
          <div className="mt-24 pt-24 border-t border-white/5">
            <h4 className="text-center text-[10px] tracking-[0.4em] uppercase text-white/30 mb-12">Supply Chain Partners</h4>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
              {/* These would be actual logos in a real app */}
              <div className="text-2xl font-black tracking-tighter">US BEEF</div>
              <div className="text-2xl font-black tracking-tighter italic">ANGUS</div>
              <div className="text-2xl font-black tracking-tighter">CANADA PORK</div>
              <div className="text-2xl font-black tracking-tighter">AUS MEAT</div>
              <div className="text-2xl font-black tracking-tighter">EURO FOODS</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: INQUIRE & PARTNER (CONTACT) */}
      <section id="contact" className="relative z-10 py-32 px-6 md:px-12 lg:px-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-xs tracking-[0.3em] text-cyan-accent uppercase mb-6">Partner With Us</h2>
          <h3 className="text-4xl md:text-6xl font-normal tracking-tight uppercase mb-8">
            Ready to Grow in Vietnam?<br />
            <span className="gradient-text">Let's Connect.</span>
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed font-light">
            Whether you are an international brand seeking a strategic importer or a local business looking for a reliable wholesale partner, Hai Dang Phat is ready to discuss how we can accelerate your growth.
          </p>
        </div>
        <Contact />
      </section>

      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
