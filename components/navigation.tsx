"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, Briefcase, User, MessageSquare, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect } from "react"

interface NavigationProps {
  show: boolean
}

export function Navigation({ show }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { href: "/home", label: "Home", icon: Home },
    { href: "/portfolio", label: "Portfolio", icon: Briefcase },
    { href: "/about", label: "About", icon: User },
    { href: "/testimonials", label: "Testimonials", icon: MessageSquare },
  ]

  const ThemeToggleButton = () => {
    if (!mounted) {
      return (
        <Button variant="ghost" size="sm" className="w-9 h-9">
          <div className="w-4 h-4" />
        </Button>
      )
    }

    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-9 h-9 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
      >
        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-slate-600 dark:text-slate-400" />
        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-slate-600 dark:text-slate-400" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Animated Brand Logo */}
              <Link href="/" className="flex items-center space-x-2">
                <motion.div whileHover={{ scale: 1.05 }} className="text-xl font-medium">
                  <motion.span
                    className="inline-block font-semibold bg-gradient-to-r from-slate-700 via-blue-600 to-purple-600 dark:from-slate-200 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    Yagnik Goswami
                  </motion.span>
                </motion.div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2 font-medium"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                ))}
                <ThemeToggleButton />
              </div>

              {/* Mobile Navigation */}
              <div className="md:hidden flex items-center space-x-2">
                <ThemeToggleButton />
                <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </Button>
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden overflow-hidden"
                >
                  <div className="py-4 space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center space-x-3 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2 font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}
