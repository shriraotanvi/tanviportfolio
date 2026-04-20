import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Cpu, BarChart3, Mail, X } from 'lucide-react'

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10"
    >
      {/* Backdrop */}
      <motion.div 
        className="absolute inset-0 bg-obsidian/90 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto glass border border-white/10 rounded-[3rem] p-8 md:p-16 scrollbar-hide"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 p-3 glass rounded-full hover:bg-gold hover:text-obsidian transition-all group"
        >
          <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
        </button>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Side: Info */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-gold/10 rounded-2xl border border-gold/20">
                {project.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-gold">{project.subtitle}</h4>
                <h3 className="text-4xl font-outfit font-black tracking-tight">{project.title}</h3>
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <h5 className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold mb-4">The Challenge</h5>
                <p className="text-white/60 leading-relaxed font-inter">{project.details.problem}</p>
              </div>

              <div>
                <h5 className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold mb-4">Strategic Execution</h5>
                <p className="text-white/60 leading-relaxed font-inter">{project.details.solution}</p>
              </div>

              <div>
                <h5 className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold mb-4">Impact & Metrics</h5>
                <div className="p-6 bg-gold/5 rounded-3xl border border-gold/10">
                  <p className="text-gold font-bold">{project.stats}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Features & Tech */}
          <div className="space-y-12">
            <div>
              <h5 className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold mb-6">Key Capabilities</h5>
              <div className="grid gap-4">
                {project.details.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                    <div className="mt-1.5 w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                    <p className="text-sm text-white/70">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold mb-6">Tech Stack</h5>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-4 py-2 bg-white/5 rounded-full text-xs font-medium text-white/60 uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-10 flex gap-6">
              <a href="#" className="flex-1 btn-primary text-center flex items-center justify-center gap-2">
                <Github size={20} /> Repository
              </a>
              <a href="#" className="flex-1 p-4 rounded-full glass text-center font-bold flex items-center justify-center gap-2 hover:bg-white/5 transition-all">
                <ExternalLink size={20} /> Live Demo
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      title: "MIRA",
      subtitle: "AI Health Assistant",
      description: "AI-driven application for PCOS/PCOD risk assessment with SHAP interpretability.",
      tags: ["Python", "React", "LightGBM", "SHAP"],
      icon: <Cpu className="text-gold" />,
      stats: "85% reduction in manual effort",
      link: "#",
      details: {
        problem: "Manual PCOS screening is often slow and lacks data-driven transparency, leading to delayed interventions for women's health.",
        solution: "Engineered a full-stack platform integrating LightGBM models. Leveraged SHAP values to provide explainable 'black-box' predictions, ensuring medical trust.",
        features: [
          "Explainable AI diagnostics using SHAP interpretability",
          "Dynamic weekly diet and workout plan generator",
          "Secure user data visualizer for health tracking",
          "RESTful API integration with a React-based frontend"
        ]
      }
    },
    {
      title: "ByteShots",
      subtitle: "Automated Newsletter",
      description: "Fully automated AI newsletter pipeline using n8n and GPT-4o for curated content.",
      tags: ["n8n", "GPT-4o", "REST APIs", "Telegram"],
      icon: <Mail className="text-gold" />,
      stats: "90% time reduction",
      link: "#",
      details: {
        problem: "Content curation for technical newsletters is labor-intensive and prone to inconsistencies in delivery and quality.",
        solution: "Built a headless automation system using n8n that orchestrates GPT-4o for content synthesis and multi-channel distribution.",
        features: [
          "Automated GPT-4o curation from RSS and Webhooks",
          "Multi-channel distribution to Telegram and Slack",
          "Lightweight CRM using Google Sheets integration",
          "Zero-touch weekly deployment pipeline"
        ]
      }
    },
    {
      title: "SkinSense",
      subtitle: "Cancer Detection CNN",
      description: "CNN trained to classify skin lesions as cancerous or non-cancerous using TensorFlow.",
      tags: ["CNN", "TensorFlow", "Keras", "OpenCV"],
      icon: <BarChart3 className="text-gold" />,
      stats: "High precision classification",
      link: "#",
      details: {
        problem: "Early detection of dermatological conditions is critical but expert access is often a bottleneck.",
        solution: "Trained a convolutional neural network (CNN) on extensive dermoscopic datasets to achieve high-precision classification.",
        features: [
          "High-accuracy CNN architecture using Keras",
          "Advanced image preprocessing with OpenCV and NumPy",
          "Automated feature extraction and classification",
          "Performance evaluation using F1-score and Recall metrics"
        ]
      }
    }
  ]

  return (
    <section id="projects" className="py-32 bg-surface/30 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-gold font-outfit uppercase tracking-[0.3em] text-xs font-bold mb-4"
            >
              Selected Engineering
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-outfit font-black tracking-tighter">
              BEYOND THE <br />
              <span className="gold-gradient">INTERFACE.</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-sm font-inter text-sm mb-4">
            A showcase of systems that solve real problems, from diagnostic health AI to high-scale automation pipelines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-[2.5rem] glass border border-white/5 p-8 transition-all hover:bg-white/[0.04]"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-12">
                <div className="p-4 bg-obsidian rounded-3xl border border-white/10 group-hover:bg-gold group-hover:border-gold transition-all duration-500">
                  <div className="group-hover:text-obsidian group-hover:scale-110 transition-all">
                    {project.icon}
                  </div>
                </div>
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href={project.link} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <Github size={20} className="text-white/60" />
                  </a>
                  <a href={project.link} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <ExternalLink size={20} className="text-white/60" />
                  </a>
                </div>
              </div>

              {/* Card Content */}
              <div className="cursor-pointer" onClick={() => setSelectedProject(project)}>
                <h3 className="text-xs uppercase tracking-[0.2em] text-white/40 font-bold mb-2">
                  {project.subtitle}
                </h3>
                <h4 className="text-3xl font-outfit font-black mb-4 group-hover:text-gold transition-all">
                  {project.title}
                </h4>
                <p className="text-white/50 text-sm leading-relaxed mb-8 line-clamp-2 group-hover:text-white/80 transition-colors">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase font-bold tracking-widest text-white/50 group-hover:text-gold/80 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-gold font-black">{project.stats}</span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-tighter text-white hover:text-gold transition-colors"
                  >
                    View Details →
                  </button>
                </div>
              </div>

              {/* Subtle Decorative Blob */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl group-hover:bg-gold/20 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
