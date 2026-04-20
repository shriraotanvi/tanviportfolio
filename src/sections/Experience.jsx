import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      company: "MRV - Mahindra Research Valley",
      role: "Client Industry Project",
      period: "Feb 2026 — Mar 2026",
      description: "Architected a structured technical solution for a real-world industry use case, reducing manual effort by roughly 85%.",
      achievements: [
        "Formulated a working prototype within 2 weeks",
        "Presented solution architecture to industry stakeholders",
        "Collaborated in a team of 4 using agile methodologies"
      ]
    },
    {
      company: "Tata Technologies",
      role: "Software Engineering Intern",
      period: "Dec 2025 — Jan 2026",
      description: "Developed and optimized ML models improving prediction accuracy; contributed to full-stack modules via REST APIs.",
      achievements: [
        "Handled 100+ users via REST APIs and backend logic",
        "Completed 10+ technical tasks within deadlines",
        "Applied SDLC best practices in an agile CI/CD environment"
      ]
    }
  ]

  return (
    <section id="experience" className="py-32 bg-surface/20">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-outfit font-black tracking-tighter mb-24">
          PROFESSIONAL <br />
          <span className="gold-gradient">JOURNEY.</span>
        </h2>

        <div className="relative border-l border-white/5 ml-4 md:ml-0 md:pl-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="mb-20 md:grid md:grid-cols-12 gap-10 relative"
            >
              <div className="md:col-span-4 text-right mb-4 md:mb-0">
                <div className="text-gold font-outfit uppercase tracking-widest text-xs font-black mb-1">
                  {exp.period}
                </div>
                <div className="text-xl font-bold text-white">{exp.company}</div>
              </div>
              
              <div className="md:col-span-1 flex justify-center py-2 relative">
                <div className="w-1.5 h-1.5 bg-gold rounded-full z-10 animate-pulse border-[4px] border-obsidian" />
              </div>

              <div className="md:col-span-7 pb-10 border-b border-white/5 md:border-b-0">
                <h3 className="text-2xl font-outfit font-bold mb-4 text-white/90">{exp.role}</h3>
                <p className="text-white/50 mb-6 leading-relaxed max-w-xl">
                  {exp.description}
                </p>
                <ul className="space-y-3">
                  {exp.achievements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-white/40">
                      <span className="mt-1.5 w-1 h-1 bg-gold rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
