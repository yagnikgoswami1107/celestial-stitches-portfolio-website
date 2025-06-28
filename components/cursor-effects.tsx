"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Ripple {
  id: number
  x: number
  y: number
}

export function CursorEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [ripples, setRipples] = useState<Ripple[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleClick = (e: MouseEvent) => {
      const newRipple: Ripple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      }
      setRipples((prev) => [...prev, newRipple])

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id))
      }, 1000)
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeaveInteractive = () => setIsHovering(false)

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]')

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeaveInteractive)
    })

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("click", handleClick)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeaveInteractive)
      })
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-purple-600 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Trailing cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-purple-400 rounded-full pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
      />

      {/* Cursor Trail Effect */}
      {isVisible && (
        <motion.div
          className="absolute w-6 h-6 rounded-full border-2 border-primary/30 bg-primary/10 backdrop-blur-sm"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Water Wave Effect */}
      {isVisible && (
        <motion.div
          className="absolute w-20 h-20 rounded-full border border-primary/20 bg-gradient-radial from-primary/5 to-transparent"
          style={{
            left: mousePosition.x - 40,
            top: mousePosition.y - 40,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Click Ripple Effects */}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="absolute rounded-full border-2 border-primary/40 bg-primary/10"
          style={{
            left: ripple.x - 25,
            top: ripple.y - 25,
          }}
          initial={{
            width: 50,
            height: 50,
            opacity: 0.6,
          }}
          animate={{
            width: 200,
            height: 200,
            opacity: 0,
            left: ripple.x - 100,
            top: ripple.y - 100,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Floating Particles */}
      {isVisible && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/40 rounded-full"
              style={{
                left: mousePosition.x + (i - 1) * 20,
                top: mousePosition.y + (i - 1) * 20,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </>
      )}

      {/* Ambient Glow */}
      {isVisible && (
        <motion.div
          className="absolute w-32 h-32 rounded-full bg-gradient-radial from-primary/10 via-primary/5 to-transparent blur-xl"
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      )}
    </div>
  )
}
