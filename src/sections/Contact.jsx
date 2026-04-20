import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Copy, Check } from 'lucide-react'

const Contact = () => {
  const [copied, setCopied] = useState(false)
  const email = "shrirao.tanvii@gmail.com"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const socials = [
    { name: "LinkedIn", icon: <Linkedin size={24} />, link: "https://www.linkedin.com/in/tanviishrirao/" },
    { name: "GitHub", icon: <Github size={24} />, link: "https://github.com/shriraotanvi" },
    { name: "Mail", icon: <Mail size={24} />, link: `mailto:${email}` }
  ]

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-obsidian">
      {/* Decorative Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-6xl md:text-8xl font-outfit font-black tracking-tighter mb-10">
              LET'S BUILD <br />
              <span className="gold-gradient">SOMETHING.</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/40 font-inter leading-relaxed max-w-2xl">
              Always open to discussing high-impact engineering roles, design collaborations, or your next big idea.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Email Interaction */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 glass rounded-[2.5rem] border border-white/5 group transition-all hover:bg-white/[0.04]"
            >
              <div className="text-xs uppercase tracking-widest text-gold font-black mb-6">Drop a line</div>
              <div className="flex flex-col gap-4">
                <a href={`mailto:${email}`} className="text-2xl md:text-3xl font-outfit font-black text-white hover:text-gold transition-colors break-all">
                  {email}
                </a>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
                >
                  {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                  {copied ? "Copied to clipboard" : "Copy email address"}
                </button>
              </div>
            </motion.div>

            {/* Social Links */}
            <div className="flex flex-col gap-6">
              {socials.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex justify-between items-center p-8 glass rounded-3xl border border-white/5 transition-all hover:bg-gold hover:translate-x-4"
                >
                  <div className="flex items-center gap-6">
                    <div className="text-white group-hover:text-obsidian transition-colors">
                      {social.icon}
                    </div>
                    <span className="text-xl font-outfit font-black text-white group-hover:text-obsidian transition-colors">
                      {social.name}
                    </span>
                  </div>
                  <div className="text-gold group-hover:text-obsidian transition-colors opacity-40 group-hover:opacity-100">
                    →
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
