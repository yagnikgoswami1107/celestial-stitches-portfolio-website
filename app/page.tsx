"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollableLayout } from "@/components/scrollable-layout"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  const [showIntro, setShowIntro] = useState(true)
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [animationComplete, setAnimationComplete] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const roles = ["Graphic Expert", "Video Editor"]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // Wait for one complete cycle of both roles
    const totalAnimationTime = roles.length * 3000 + 2000 // Each role takes ~3s, plus initial delay

    const timer = setTimeout(() => {
      setAnimationComplete(true)
      setTimeout(() => setShowIntro(false), 800) // Small delay for smooth transition
    }, totalAnimationTime)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!showIntro || animationComplete) return

    const currentText = roles[currentRole]
    let charIndex = 0

    const typeText = () => {
      if (charIndex < currentText.length) {
        setDisplayText(currentText.slice(0, charIndex + 1))
        charIndex++
        setTimeout(typeText, 100)
      } else {
        setTimeout(() => {
          const clearText = () => {
            if (charIndex > 0) {
              setDisplayText(currentText.slice(0, charIndex - 1))
              charIndex--
              setTimeout(clearText, 50)
            } else {
              setCurrentRole((prev) => (prev + 1) % roles.length)
            }
          }
          clearText()
        }, 1500)
      }
    }

    typeText()
  }, [currentRole, showIntro, animationComplete])

  const ThemeToggleButton = () => {
    if (!mounted) {
      return (
        <Button variant="outline" size="icon" className="w-10 h-10 bg-transparent">
          <div className="w-4 h-4" />
        </Button>
      )
    }

    return (
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-blue-600" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <>
      {/* Theme Toggle - Only visible during splash screen */}
      {showIntro && (
        <div className="fixed top-6 right-6 z-[60]">
          <ThemeToggleButton />
        </div>
      )}

      <AnimatePresence mode="wait">
        {showIntro ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-black dark:to-blue-950"
          >
            <div className="text-center w-full max-w-4xl mx-auto px-4">
              {/* Professional Name Display */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
                className="mb-12 w-full"
              >
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 leading-tight font-montserrat"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 100 }}
                >
                  <div className="flex flex-col items-center justify-center gap-2 w-full">
                    <motion.span
                      className="bg-gradient-to-r from-slate-700 via-blue-600 to-purple-600 dark:from-slate-200 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                    >
                      Yagnik Goswami
                    </motion.span>
                    <motion.div
                      className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: 64 }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                    />
                  </div>
                </motion.h1>
              </motion.div>

              {/* Professional Subtitle with Typing Effect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="text-center w-full"
              >
                <div className="text-lg md:text-xl font-medium mb-4 font-poppins text-slate-600 dark:text-slate-400">
                  Professional
                </div>
                <div className="text-xl md:text-2xl font-semibold h-12 flex items-center justify-center font-poppins">
                  <motion.span
                    key={currentRole}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent"
                  >
                    {displayText}
                  </motion.span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                    className="ml-1 text-blue-600 dark:text-blue-400"
                  >
                    |
                  </motion.span>
                </div>
              </motion.div>

              {/* Professional Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.6 }}
                className="mt-8"
              >
                <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-poppins">
                  Crafting Visual Excellence • Elevating Brands
                </p>
              </motion.div>

              {/* Minimal Background Elements */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="absolute inset-0 overflow-hidden pointer-events-none"
              >
                {/* Simple dots pattern */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-blue-300/40 dark:bg-blue-600/40 rounded-full"
                    style={{
                      left: `${25 + i * 20}%`,
                      top: `${40 + i * 5}%`,
                    }}
                    animate={{
                      y: [0, -8, 0],
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ScrollableLayout />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
