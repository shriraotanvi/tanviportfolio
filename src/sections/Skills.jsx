import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      name: "Core Tech",
      skills: [
        { name: "Python", level: 95 },
        { name: "C++", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "React.js", level: 92 }
      ]
    },
    {
      name: "AI & ML",
      skills: [
        { name: "TensorFlow", level: 80 },
        { name: "LightGBM", level: 85 },
        { name: "SHAP", level: 75 },
        { name: "Scikit-learn", level: 88 }
      ]
    },
    {
      name: "Cloud & Ops",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 70 },
        { name: "CI/CD", level: 65 },
        { name: "SQL", level: 88 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-gold mx-auto mb-8 rounded-full"
          />
          <h2 className="text-5xl md:text-7xl font-outfit font-black tracking-tighter mb-6">
            TECHNICAL <span className="gold-gradient">ARSENAL</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto font-inter">
            A comprehensive overview of my capabilities in software engineering, machine learning, and cloud infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-10 rounded-[3rem] border border-white/5 relative group hover:border-gold/20 transition-all duration-500"
            >
              <h3 className="text-2xl font-outfit font-black mb-10 text-white group-hover:text-gold transition-colors">
                {category.name}
              </h3>
              
              <div className="space-y-8">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-bold tracking-widest text-white/70 uppercase">{skill.name}</span>
                      <span className="text-xs font-black text-gold">{skill.level}%</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full bg-gradient-to-r from-gold/50 to-gold shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative Number */}
              <div className="absolute top-10 right-10 text-8xl font-black text-white/[0.02] pointer-events-none group-hover:text-gold/[0.03] transition-all">
                0{idx + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -rotate-90 origin-left text-[15rem] font-black text-white/[0.01] pointer-events-none select-none">
        CAPABILITIES
      </div>
    </section>
  )
}

export default Skills
