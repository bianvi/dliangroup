import React from 'react';

const values = [
  {
    title: "Innovation",
    icon: "memory",
    desc: "We push the boundaries of what's possible, constantly exploring new technologies and creative approaches."
  },
  {
    title: "Creativity",
    icon: "auto_fix_high",
    desc: "Every project is a unique canvas for artistic expression, where technical excellence meets creative vision."
  },
  {
    title: "Engagement",
    icon: "sensors",
    desc: "We create experiences that captivate and inspire audiences, fostering meaningful connections."
  },
  {
    title: "Excellence",
    icon: "workspace_premium",
    desc: "Quality and attention to detail in every deliverable, ensuring that our solutions exceed expectations."
  },
  {
    title: "Collaboration",
    icon: "hub",
    desc: "Partnership-driven approach to bring visions to life, working closely with clients to understand their goals."
  },
  {
    title: "Impact",
    icon: "public",
    desc: "Creating solutions that make a lasting difference, transforming how people interact with spaces."
  }
];

export default function CoreValues() {
  return (
    <section className="relative z-10 py-40 bg-light-gray-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-24 space-y-6">
          <h2 className="text-xs uppercase tracking-[0.6em] text-deep-navy font-bold">Principles</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-deep-navy">Core Values</h3>
          <p className="text-lg md:text-xl text-medium-gray-text max-w-3xl mx-auto mt-6 font-normal leading-relaxed">
            These principles guide every decision we make and every project we deliver, ensuring excellence and innovation.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-accent to-transparent rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {values.map((value, i) => (
            <div key={i} className="bg-white p-12 rounded-3xl border border-gray-100 flex flex-col items-start transition-all hover:-translate-y-2 hover:shadow-xl">
              <div className="mb-8">
                <span className="material-symbols-outlined text-cyan-accent text-5xl">{value.icon}</span>
              </div>
              <h4 className="text-2xl font-bold text-deep-navy mb-4">{value.title}</h4>
              <p className="text-medium-gray-text leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-40 flex flex-col items-center text-center mb-20 space-y-6">
          <h3 className="text-4xl md:text-5xl font-bold text-deep-navy">Our Unique Approach</h3>
          <p className="text-lg md:text-xl text-medium-gray-text max-w-4xl mx-auto font-normal leading-relaxed">
            What sets D'LIAN CONNECTION apart is our holistic approach to experiential design. We don't just implement technology—we craft narratives and build emotional connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: "🧠", title: "AI-First Thinking", desc: "Leveraging artificial intelligence to create smarter, more responsive experiences." },
            { icon: "🎨", title: "Creative Excellence", desc: "Balancing technical innovation with artistic vision and creative storytelling." },
            { icon: "👥", title: "Human-Centered Design", desc: "Putting people at the heart of every technological solution we create." }
          ].map((item, i) => (
            <div key={i} className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-6 transition-all hover:shadow-md">
              <div className="text-4xl">{item.icon}</div>
              <h4 className="text-2xl font-bold text-deep-navy">{item.title}</h4>
              <p className="text-medium-gray-text leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <a href="#contact" className="group relative primary-glow-btn px-12 py-5 bg-gradient-to-r from-accent-blue to-cyan-accent text-white rounded-full font-bold text-xl transition-all duration-500 hover:scale-105 inline-flex items-center gap-4">
            Let's Build Your Next Experience
            <span className="material-icons group-hover:translate-x-2 transition-transform">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
}
