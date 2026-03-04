import React from 'react';
import { motion } from 'motion/react';
import Contact from '../components/Contact';

export default function About() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative min-h-[130vh] flex flex-col items-center justify-center overflow-hidden hero-gradient pt-32 md:pt-40 pb-24 md:pb-32">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        <div className="relative z-10 max-w-4xl px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="testimonial-glass p-12 rounded-3xl shadow-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
              The Intersection of<br/>
              <span className="text-cyan-accent">Technology & Artistry</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
              We are the architects of immersive experiences, blending <span className="text-accent-blue font-semibold">AI</span> innovation with creative excellence to transform moments into memories.
            </p>
          </motion.div>
          
          <div className="mt-12 animate-bounce flex flex-col items-center">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-cyan-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-24 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="uppercase tracking-[0.2em] text-cyan-600 font-bold text-sm">Our Genesis</span>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900">Pioneering Creative Innovation</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                At D'Lian Group, we don't just produce content; we engineer atmosphere. Founded on the belief that technology should be a bridge to deeper human emotion, we have emerged as a pioneering force in Southeast Asia’s creative landscape.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                What started as a boutique creative studio has evolved into a powerhouse of AI innovation and high-end media production. Our journey is rooted in the belief that technology shouldn't just serve function—it should elevate art.
              </p>
              <div className="pl-6 border-l-4 border-cyan-500 italic text-xl text-blue-800 font-medium">
                "We don't just use technology; we orchestrate it to evoke emotion and inspire wonder."
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                alt="Creative Innovation" 
                className="rounded-3xl shadow-2xl" 
                src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background-dark">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="testimonial-glass p-10 rounded-2xl relative overflow-hidden group flex flex-col justify-center"
          >
            <div className="absolute top-6 right-6 text-cyan-500 opacity-20 group-hover:opacity-40 transition-opacity">
              <span className="material-icons text-6xl">bolt</span>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white">Our Mission</h3>
            <p className="text-lg text-gray-400 leading-relaxed">To transform spaces and moments into immersive, memorable experiences through the power of AI innovation and interactive technology.</p>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="testimonial-glass p-10 rounded-2xl relative overflow-hidden group flex flex-col justify-center"
          >
            <div className="absolute top-6 right-6 text-cyan-500 opacity-20 group-hover:opacity-40 transition-opacity">
              <span className="material-icons text-6xl">visibility</span>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-white">Our Vision</h3>
            <p className="text-lg text-gray-400 leading-relaxed">To be the global leader in creative digital innovation, pushing the boundaries of what’s possible to connect people through limitless creativity.</p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="uppercase tracking-[0.2em] text-cyan-600 font-bold text-sm block mb-4">Foundational Pillars</span>
          <h2 className="text-4xl font-bold mb-16 text-blue-900">The Values That Drive Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { icon: "bolt", title: "Innovation", desc: "Pushing technological limits through R&D." },
              { icon: "palette", title: "Creativity", desc: "Unlocking original expressions in digital art." },
              { icon: "favorite", title: "Engagement", desc: "Creating deep and lasting audience connections." },
              { icon: "verified", title: "Excellence", desc: "Unyielding standards in every craft." },
              { icon: "groups", title: "Collaboration", desc: "Stronger together through multidisciplinary synergy." }
            ].map((value, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-16 h-16 mb-6 flex items-center justify-center border border-cyan-200 rounded-full bg-cyan-50/50 group-hover:bg-cyan-100 transition-colors">
                  <span className="material-icons text-cyan-accent">{value.icon}</span>
                </div>
                <h4 className="font-bold text-blue-900 mb-2 uppercase tracking-tight">{value.title}</h4>
                <p className="text-sm text-slate-500 max-w-[150px]">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Dolphin Story */}
      <section className="py-24 bg-background-dark">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative w-80 h-80 flex items-center justify-center">
              <div className="absolute inset-0 border border-cyan-500/30 rounded-full animate-pulse"></div>
              <div className="absolute inset-4 border border-blue-500/20 rounded-full"></div>
              <div className="z-10 text-6xl text-cyan-400">
                <span className="material-icons text-9xl">waves</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-4xl font-bold text-white">The Dolphin Spirit</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our logo—a stylized dolphin within a cosmic sphere—symbolizes our agility in navigating complex creative challenges and our intelligence in applying AI to real-world experiences.
            </p>
            <p className="text-lg text-gray-400">
              Like the dolphin, we move with grace through fluid environments, using sophisticated communication and intelligence to bridge the gap between technology and the organic world.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <img 
                alt="Fashion Excellence" 
                className="w-full h-[600px] object-cover rounded-2xl shadow-xl" 
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:w-1/2 flex flex-col gap-8">
              <div className="h-1/2 bg-slate-100 rounded-2xl p-8 flex flex-col justify-end overflow-hidden">
                <div className="p-4">
                  <h4 className="text-3xl font-bold text-blue-900 mb-6">Expertise Pillars</h4>
                  <div className="space-y-6">
                    {[
                      { title: "Fashion & Event Excellence", desc: "Designing high-end, immersive runways and architectural exhibitions." },
                      { title: "Cinematic Production", desc: "Developing high-impact TVCs, viral digital content, and branded stories." },
                      { title: "Tech Frontiers", desc: "Specializing in VR/AR integration and interactive TouchDesigner systems." },
                      { title: "Leisure Engineering", desc: "Conceptualizing and equipping next-gen theme parks and interactive centers." }
                    ].map((pillar, i) => (
                      <div key={i}>
                        <h5 className="text-blue-900 font-bold uppercase text-xs tracking-widest mb-1">{pillar.title}</h5>
                        <p className="text-slate-600 text-sm">{pillar.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <img 
                alt="Tech Camera" 
                className="h-1/2 object-cover rounded-2xl shadow-xl" 
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1000"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-background-dark">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Our Collaborative Core</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg">
            The D'Lian Group is a unique collective of <span className="text-white font-semibold">Technologists, Artists, and Producers</span> working in perfect synchronicity.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { role: "Lead Producer", name: "Executive Vision", desc: "Architecting the strategic vision and high-level client partnerships." },
              { role: "Digital Artist", name: "Creative Lead", desc: "Defining the visual language and aesthetic integrity." },
              { role: "Technologist", name: "Tech Director", desc: "Engineering the backend complexity and AI systems." },
              { role: "Operations Producer", name: "Project Head", desc: "Ensuring operational excellence and precision delivery." }
            ].map((member, i) => (
              <div key={i} className="group">
                <div className="aspect-[3/4] overflow-hidden rounded-xl mb-4 bg-gray-900 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img 
                    alt={member.role} 
                    className="w-full h-full object-cover grayscale contrast-125" 
                    src={`https://picsum.photos/seed/${member.role}/600/800`}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-white font-bold">{member.name}</h4>
                <p className="text-cyan-accent text-xs font-bold uppercase tracking-widest mb-2">{member.role}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-slate-950 opacity-90"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to define the future?</h2>
          <p className="text-xl text-blue-200 mb-10 leading-relaxed">
            Join us in exploring the next frontier of digital media and technology. Let's create something extraordinary together.
          </p>
          <a href="#contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 px-10 rounded-full text-lg tracking-wide uppercase shadow-xl hover:shadow-cyan-500/50 transition-all text-center inline-block">
            Start a Project
          </a>
        </div>
      </section>

      {/* Let's Collaborate Section */}
      <Contact />
    </div>
  );
}
