import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full"
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
          <span className="text-xs font-bold tracking-widest uppercase text-gold">Available for Impact</span>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-9xl font-outfit font-black mb-6 leading-[0.9] tracking-tighter"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          CRAFTING <br />
          <span className="gold-gradient text-glow">DIGITAL </span> 
          IDENTITIES
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 font-inter leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Senior Frontend Engineer & Product Designer specializing in <span className="text-white">high-stakes engineering</span> and <span className="text-white">luxury creative design</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <a href="#projects" className="btn-primary group">
            Explore Work
            <ArrowDownRight className="inline-block ml-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" size={20} />
          </a>
          <a href="#contact" className="px-6 py-3 text-white/70 hover:text-white transition-colors flex items-center gap-2">
            Let's Talk
          </a>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-gold/50 to-transparent" />
      </motion.div>
    </section>
  )
}

export default Hero
