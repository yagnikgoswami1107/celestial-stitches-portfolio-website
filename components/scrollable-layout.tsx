"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import HomePage from "@/app/home/page"
import PortfolioPage from "@/app/portfolio/page"
import AboutPage from "@/app/about/page"
import TestimonialsPage from "@/app/testimonials/page"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const sections = [
  { id: "home", component: HomePage, name: "Home" },
  { id: "portfolio", component: PortfolioPage, name: "Portfolio" },
  { id: "about", component: AboutPage, name: "About" },
  { id: "testimonials", component: TestimonialsPage, name: "Testimonials" },
]

export function ScrollableLayout() {
  const [currentSection, setCurrentSection] = useState(0)
  const [showNavigation, setShowNavigation] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const sectionIndex = Math.floor(scrollPosition / windowHeight)

      setCurrentSection(Math.min(sectionIndex, sections.length - 1))
      // Show navigation after user starts scrolling
      setShowNavigation(scrollPosition > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (index: number) => {
    const targetPosition = index * window.innerHeight
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative">
      <Navigation show={showNavigation} />

      {/* Section Indicators */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 space-y-4">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSection === index
                ? "bg-cyan-400 scale-125 shadow-lg shadow-cyan-400/50"
                : "bg-muted-foreground/30 hover:bg-cyan-400/50"
            }`}
            aria-label={`Go to ${section.name} section`}
          />
        ))}
      </div>

      {/* Sections */}
      <div className="snap-y snap-mandatory">
        {sections.map((section, index) => {
          const Component = section.component
          return (
            <motion.section
              key={section.id}
              id={section.id}
              className="min-h-screen snap-start"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Component />
            </motion.section>
          )
        })}

        {/* Footer Section */}
        <motion.section
          className="snap-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Footer />
        </motion.section>
      </div>
    </div>
  )
}
