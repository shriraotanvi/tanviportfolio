import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Palette, Zap, Brain } from 'lucide-react'

const About = () => {
  const traits = [
    {
      icon: <Brain size={24} className="text-gold" />,
      title: "Analytical Depth",
      description: "Rooted in Computer Science foundations with a focus on data structures and algorithms."
    },
    {
      icon: <Palette size={24} className="text-gold" />,
      title: "Design Intuition",
      description: "Bridging the gap between engineering rigor and high-end aesthetic precision."
    },
    {
      icon: <Code2 size={24} className="text-gold" />,
      title: "Modern Stack",
      description: "Expertise in React, Python, and AI integration for scalable product solutions."
    },
    {
      icon: <Zap size={24} className="text-gold" />,
      title: "Rapid Execution",
      description: "Proven ability to deliver high-quality modules in agile CI/CD environments."
    }
  ]

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-outfit font-black mb-8">
              THE <span className="gold-gradient">PHILOSOPHY</span>
            </h2>
            <div className="space-y-6 text-white/60 font-inter text-lg leading-relaxed">
              <p>
                I am <span className="text-white font-medium">Tanvi Shrirao</span>, a B.Tech CSE student at SRM Institute, dedicated to building systems that don't just work—they inspire.
              </p>
              <p>
                 My approach combines the logical precision of a backend engineer with the fluid creativity of a frontend designer. Whether it's optimizing ML models for health diagnostics or architecting intuitive web experiences, I aim for excellence in every line of code.
              </p>
              <p>
                I believe that technology should be a seamless extension of human intent, crafted with attention to detail and a relentless pursuit of performance.
              </p>
            </div>
            
            <motion.div 
              className="mt-10 grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="glass p-4 rounded-xl">
                <div className="text-3xl font-outfit font-black text-gold">9.17</div>
                <div className="text-xs uppercase tracking-widest text-white/40">GPA Standard</div>
              </div>
              <div className="glass p-4 rounded-xl">
                <div className="text-3xl font-outfit font-black text-gold">AWS</div>
                <div className="text-xs uppercase tracking-widest text-white/40">Certified Dev</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Trait Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {traits.map((trait, i) => (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl glass transition-all hover:bg-white/[0.05] hover:-translate-y-2 border border-white/5 active:scale-95"
              >
                <div className="mb-4 p-3 bg-obsidian rounded-2xl w-fit group-hover:scale-110 transition-transform">
                  {trait.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">{trait.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                  {trait.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
