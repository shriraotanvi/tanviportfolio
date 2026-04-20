import React, { useEffect } from 'react'
import { ReactLenis } from 'lenis/react'
import CustomCursor from './components/CustomCursor'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Skills from './sections/Skills'
import Hobbies from './sections/Hobbies'
import Contact from './sections/Contact'

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <div className="relative bg-obsidian min-h-screen selection:bg-gold/30">
        <CustomCursor />
        <Nav />
        
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Hobbies />
          <Contact />
        </main>
        
        <footer className="py-10 text-center text-white/30 text-sm border-t border-white/5 font-inter">
          <p>© {new Date().getFullYear()} Tanvi Shrirao. Crafted with passion & code.</p>
        </footer>
      </div>
    </ReactLenis>
  )
}

export default App
