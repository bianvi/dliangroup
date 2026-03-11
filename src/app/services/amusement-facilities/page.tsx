'use client';

import React from 'react';
import { motion } from 'motion/react';
import Contact from '../../../components/Contact';

export default function AmusementFacilities() {
  const expertise = [
    {
      title: "Interactive Playgrounds",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWsLIoHPLqO26qyS70nJIymecfIoyuah8_psQ4j09sYz7ufuMlPmhWZoy0281TGP5GU8mqnSguLLlKs3lmSOdtbqtF9_LxwvEyTxA4kzgdVHlJtgOeJ9eMFEyU3t6fYgJvA0sHECAtYv7YSljuFjNXzlhBtHhOh9CD83J9JTQsTxGOmX7Yvd6MMQRldbOIoojXJt8VJ_rUHiOB0GhTZ3bxBsa1gRgREmd7Q9nbGN4ZUYct2nRr51MnEkLg_INOWCYG4JfyuJfATBM",
      icon: "monitor",
      desc: "Physical play meets high-end digital projection technology, creating immersive physical environments for all ages."
    },
    {
      title: "Attraction Rides",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL0PIxj3H-AdC9qDeR7XrhntmI9ZyPn-j3A5tVrEZlFzk7bQmMzkB4uCd1QcgZqU8sIHljMI1_8QjSPen76PzGLLmUxkvAaR9oTfw7M6XCqDDlDF1cnci2GoQ0LWZDu2TLdE78n_3nSphfHkD-BlpNvuR1ZDJOqN_sQRqnRFk6GmmZVkz10tJBdq7pKyE_4f90Uz_T62mXZM8CPVuKlUhUAtPBLmy1OQq3C9YehdmpNrFQm0KuKgWwRlSOxZUWB80giS4Z7UEXi74",
      icon: "bolt",
      desc: "Modern, safe, and high-capacity entertainment solutions engineered for durability and maximum throughput."
    },
    {
      title: "Interactive Exhibits",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVo1PLPAGGsXTbZj6xQHdZzQqbrlDYupp2TYGDT-s6X3qwVzNNueckbu6H1woei9-Y18wqHEw7aSJs15mbIpTsrk77gxDILXzunvnHhIYxJVAfTtvIarwQiXoaaEN34MdA5Y280GYyirdLjGkUjIpQMvtgxgEk5-UTYS6EpK_-IVrQJP7dozmovinOmq94PF139nBSVHNrS9rFsbxMYNupLuGv7HYbIU3htmiRAEv1MirFprepvE6fUbXL3NTvMrcTPBeeijDW-r0",
      icon: "lightbulb",
      desc: "Education through active engagement. We design gallery spaces that spark curiosity and encourage discovery."
    },
    {
      title: "Custom Theming",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTCjTA7BMcm-adcRKd3UrBe8jF0NK2xlFGUS4V7dtGH13mdu_-_iTe7-9kZ9IrOoqytMa6fKdLNEE-VDCS_cf2dphL4kAVOwhM4Y4A2XBUsXmqB41Mwmxm54i3bWBVZF_firxZlS8fO-E68cha3zK_DEw63FunpatDMxg3_WcymBxRupDYhLqcTxhtnJzEsim3v1-9nQp_h34hPXSWkjWw0yQO7ZQ-3pf8thUFWaHC3UJNTBZXZa1o6_pvFkENiuI8dTD72ZN74Nc",
      icon: "domain",
      desc: "Building worlds that feel real. Our artists and engineers collaborate to create tactile, high-fidelity environments."
    }
  ];

  const safetyStandards = [
    {
      title: "ISO 9001:2015",
      subtitle: "Quality Management",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnO5xTZN0S8sCNKTyxsuBRW1xQRL9q1mo2xDSMDycld4Ix_fONRqzvi0V4zbJ6mmincpBvmxKFx2X5-OEtlH0C6Ls64So-io8At7ZPY6qcSGzruyJyMFPIMgWH0wE-2bkqv8litRZBoB6c5UDvfeGhPsZbnc4x-GKgvnK3fpR2ysZPqDwZf4-A5dgbzNTCPqGDzU1CG7fLdsS5mIrnM_pQg-T54sm3vf76fwH7lgHkEiSiLAw6brFjHE4IeXlgrGP5aYF784_Xae4"
    },
    {
      title: "ASTM F2291",
      subtitle: "Amusement Standards",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7LY_lEoDPfj1YhKpnd0oXLDY9VRtvbkRucAytbH4uvITeH_mWauKrbMpjwv1C2ce7vM1YmSZBOAZrsBWr0k6WAMhsQtS6bqLv_7_hSF5DhmaInn8t5vtlnjAKp6zFx_3NQ5QHpNNRPFr9en7vWcMPqZAjEZeP6wbqqdCKCYzSN7_huYzLDPhDWNFsI2353jcjarKP0KdH1nc3CK9Q7lgKa4ecEmhGRqbP5KiG-sW3WEK2Gva0hPKN4j6XN6YT4quibp9Gq0Kp4pk"
    },
    {
      title: "TÜV SÜD",
      subtitle: "Safety Inspected",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8mUMCgR6rZqjf2_TZoe2d4_liVcMKr09Mzb8O53v-GOxbNo2ENjZb8XmutzaO2zaQkmSxWwokE-ngzWi3cNeOsrISiGPQv5axaYBzPDbGwtVwdrqpE4yzbSAs5D4I8jROpSDfZcekkU3R383_F0GL6yc4xKSt92iozQiWOq0z-Z7_OUr2aplrjLkhdEpPVcRMv9lN7q9dMRlzd2hW0MNda8TsC-PUsiOSeobW2rF96kdWrXZNt4U-191BufejOtwauOkIz_YGq8g"
    }
  ];

  return (
    <div className="bg-background-dark text-white overflow-x-hidden">
      {/* Hero Section */}
      <header className="relative h-[80vh] flex items-center justify-center overflow-hidden pt-24 md:pt-32">
        <img
          alt="Futuristic Theme Park Rendering"
          className="absolute inset-0 w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAujEVHXCKx60v1Holx6ZE71rFJJTd9qQG_LUmY3ekzMyXF3DSUMcoVTmgU8E4RCTFcAAc8WqejQHlhJNMez4hTm2irkH36iPKwyCFKqTn5dkKDiuuZjXoRxLRQyIJ_7TtJp9KlBUNrMMksj6zsegLwolRMyEh90-wAMOdAvdNc-9l0_fw1NkvyunzQGj6T8VXNbhvOREJe7SWdX37T16C3FjMZXkYZyqnE0O-BqaSSlaZw8c0EFSJkgLbS64pRauzKKceuoTJryXo"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/60 via-background-dark/80 to-background-dark"></div>
        
        <div className="relative z-10 max-w-4xl px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight"
          >
            Engineering Joy, <br />
            <span className="gradient-text">Safely.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-light mb-10 opacity-90 leading-relaxed max-w-2xl mx-auto"
          >
            We provide a turn-key solution: from the first conceptual sketch to
            the final safety certification.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              className="bg-gradient-to-r from-accent-blue to-cyan-accent text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg hover:scale-105"
              href="#categories"
            >
              VIEW FACILITIES
            </a>
            <a
              className="border border-white/20 bg-white/5 hover:bg-white/10 text-white px-10 py-4 rounded-full font-bold transition-all"
              href="#certifications"
            >
              SAFETY STANDARDS
            </a>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Facility Categories */}
          <div className="flex-1" id="categories">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
              <div className="w-20 h-1.5 bg-cyan-accent rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {expertise.map((item, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-accent/50 transition-all duration-300"
                >
                  <div className="h-56 overflow-hidden">
                    <img
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={item.image}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="p-2 mr-4">
                        <span className="material-icons text-cyan-accent text-3xl">{item.icon}</span>
                      </div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-80 space-y-8" id="certifications">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="testimonial-glass p-8 rounded-2xl border border-white/10"
            >
              <h4 className="text-lg font-bold mb-6 border-b border-cyan-accent pb-2">
                Safety Standards
              </h4>
              <p className="text-sm opacity-80 mb-8 leading-relaxed">
                Our facilities exceed global B2B safety requirements, ensuring
                zero-compromise reliability.
              </p>
              <div className="space-y-6">
                {safetyStandards.map((std, i) => (
                  <div key={i} className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <img
                      alt={std.title}
                      className="w-12 h-12 rounded bg-white p-1 object-contain"
                      src={std.image}
                      referrerPolicy="no-referrer"
                    />
                    <div className="ml-4">
                      <span className="block font-bold text-sm">{std.title}</span>
                      <span className="text-xs opacity-70">{std.subtitle}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl"
            >
              <h4 className="font-bold mb-4">Engineering Support</h4>
              <ul className="text-sm space-y-3 text-slate-400">
                {["Structural Calculations", "MEP Documentation", "Operations Training"].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="material-icons text-cyan-accent text-lg mr-2">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </aside>
        </div>
      </main>

      {/* Quotation Section */}
      <section className="py-24 px-6 border-t border-white/10 bg-background-dark/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Request a Technical Specification
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our engineering team will review your project requirements and
              provide a preliminary scope within 48 hours.
            </p>
          </div>
          
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 p-8 md:p-12 rounded-3xl shadow-2xl border border-white/10"
            onSubmit={(e) => { e.preventDefault(); alert('Request submitted successfully.'); }}
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-cyan-accent/70">Full Name</label>
                <input
                  className="w-full rounded-xl border-white/10 bg-white/5 text-white focus:ring-cyan-accent focus:border-cyan-accent p-4 outline-none transition-all"
                  placeholder="John Doe"
                  required
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-cyan-accent/70">Company Name</label>
                <input
                  className="w-full rounded-xl border-white/10 bg-white/5 text-white focus:ring-cyan-accent focus:border-cyan-accent p-4 outline-none transition-all"
                  placeholder="Global Leisure Ltd."
                  required
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-cyan-accent/70">Work Email</label>
                <input
                  className="w-full rounded-xl border-white/10 bg-white/5 text-white focus:ring-cyan-accent focus:border-cyan-accent p-4 outline-none transition-all"
                  placeholder="j.doe@company.com"
                  required
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-cyan-accent/70">Project Type</label>
                <select
                  className="w-full rounded-xl border-white/10 bg-white/5 text-white focus:ring-cyan-accent focus:border-cyan-accent p-4 outline-none transition-all appearance-none cursor-pointer"
                >
                  <option className="bg-background-dark">Interactive Playground</option>
                  <option className="bg-background-dark">Full Theme Park Development</option>
                  <option className="bg-background-dark">Individual Attraction</option>
                  <option className="bg-background-dark">Museum/Exhibit Space</option>
                </select>
              </div>
            </div>
            <div className="space-y-2 mb-8">
              <label className="block text-xs font-bold uppercase tracking-widest text-cyan-accent/70">Project Details</label>
              <textarea
                className="w-full rounded-xl border-white/10 bg-white/5 text-white focus:ring-cyan-accent focus:border-cyan-accent p-4 outline-none transition-all resize-none"
                placeholder="Please describe your facility requirements, estimated capacity, and target launch date..."
                required
                rows={4}
              ></textarea>
            </div>
            <button
              className="w-full bg-gradient-to-r from-accent-blue to-cyan-accent hover:opacity-90 text-white font-bold py-5 rounded-full transition-all flex items-center justify-center gap-3 shadow-lg shadow-accent-blue/20"
              type="submit"
            >
              <span>SUBMIT REQUEST</span>
              <span className="material-icons">send</span>
            </button>
          </motion.form>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
