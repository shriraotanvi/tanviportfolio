import React from 'react'
import { motion } from 'framer-motion'
import { Trello as Tennis, Music, Palette, CircleDot as Pottery } from 'lucide-react'

const Hobbies = () => {
  const hobbies = [
    {
      id: "tennis",
      title: "Lawn Tennis",
      icon: <Tennis className="text-gold" size={32} />,
      color: "rgba(212, 175, 55, 0.1)",
      story: "Strategic precision on the court translates to meticulous code on the screen. It's about anticipation and perfect execution.",
      detail: "Advocate of the baseline game."
    },
    {
      id: "dancing",
      title: "Dancing",
      icon: <Music className="text-gold" size={32} />,
      color: "rgba(212, 175, 55, 0.1)",
      story: "Fluid movement and rhythm. Dancing teaches me how to find the flow in complex UI interactions and user journeys.",
      detail: "Contemporary & Freestyle."
    },
    {
      id: "painting",
      title: "Painting",
      icon: <Palette className="text-gold" size={32} />,
      color: "rgba(212, 175, 55, 0.1)",
      story: "Where color meets canvas. My design intuition is born here—exploring textures, gradients, and the emotional weight of visuals.",
      detail: "Abstract Oils & Watercolors."
    },
    {
      id: "pottery",
      title: "Pottery",
      icon: <Pottery className="text-gold" size={32} />,
      color: "rgba(212, 175, 55, 0.1)",
      story: "Molding clay requires patience and a hands-on approach. It's the ultimate grounding experience in a digital world.",
      detail: "Wheel-thrown Ceramics."
    }
  ]

  return (
    <section id="hobbies" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-gold font-outfit uppercase tracking-[0.3em] text-xs font-bold mb-4"
          >
            Behind the Screens
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-outfit font-black tracking-tighter mb-6">
            CREATIVE <span className="gold-gradient">STUDIO.</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto font-inter">
            Designing a balanced life. These are the passions that fuel my creativity and keep my engineering sharp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby, i) => (
            <motion.div
              key={hobby.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative h-[450px] overflow-hidden rounded-[3rem] glass border border-white/5 p-8 transition-colors hover:bg-white/[0.04]"
            >
              <div className="h-full flex flex-col justify-between">
                <div className="mb-10 p-5 bg-obsidian rounded-full w-fit group-hover:scale-110 group-hover:bg-gold group-hover:text-obsidian transition-all duration-500">
                  {hobby.icon}
                </div>
                
                <div>
                  <h3 className="text-2xl font-outfit font-black mb-4 group-hover:text-gold transition-colors">{hobby.title}</h3>
                  <div className="space-y-4">
                    <p className="text-sm text-white/40 font-inter leading-relaxed">
                      {hobby.story}
                    </p>
                    <div className="text-[10px] uppercase tracking-widest text-gold font-black opacity-0 group-hover:opacity-100 transition-opacity">
                      {hobby.detail}
                    </div>
                  </div>
                </div>
              </div>

              {/* Atmospheric Background Element */}
              <div 
                className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-10 transition-opacity duration-700"
                style={{ background: `radial-gradient(circle at center, ${hobby.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hobbies
