import React, { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 25, stiffness: 150 }
  const mainX = useSpring(cursorX, springConfig)
  const mainY = useSpring(cursorY, springConfig)
  
  const ringX = useSpring(cursorX, { damping: 40, stiffness: 100 })
  const ringY = useSpring(cursorY, { damping: 40, stiffness: 100 })

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleHover = (e) => {
      if (
        e.target.tagName === 'A' || 
        e.target.tagName === 'BUTTON' || 
        e.target.closest('a') || 
        e.target.closest('button') ||
        e.target.dataset.hover === 'true'
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleHover)
    
    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleHover)
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Main Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-gold rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: mainX,
          y: mainY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 border border-gold pointer-events-none z-[9998] rounded-full"
        animate={{
          width: isHovered ? 60 : 32,
          height: isHovered ? 60 : 32,
          backgroundColor: isHovered ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
          borderColor: isHovered ? 'rgba(212, 175, 55, 0.5)' : 'rgba(212, 175, 55, 0.3)',
        }}
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  )
}

export default CustomCursor
