"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Heart, Star } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { Footer } from "@/components/footer"

// Complete portfolio with alternating layouts (REPLACE WITH YOUR ACTUAL IMAGES)
const portfolioItems = [
  {
    id: 1,
    title: "Cosmic Brand Identity Revolution",
    description:
      "A complete brand transformation that elevated a tech startup from obscurity to industry recognition. This comprehensive identity package included logo design, color palette, typography system, and brand guidelines that resulted in a 200% increase in client engagement and a successful Series A funding round.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Brand Identity",
    client: "TechNova Inc.",
    year: "2024",
    layout: "left", // Image on left, text on right
    // REPLACE: image: "/images/portfolio/cosmic-brand-full.jpg"
  },
  {
    id: 2,
    title: "Nebula Fashion Collection",
    description:
      "An ethereal fashion line that captured the essence of celestial beauty. Each design tells a story of cosmic wonder, featuring intricate patterns inspired by nebulae and star formations. The collection became an instant hit, selling out within 48 hours of launch.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Fashion Design",
    client: "Stellar Threads",
    year: "2024",
    layout: "right", // Image on right, text on left
    // REPLACE: image: "/images/portfolio/nebula-fashion-full.jpg"
  },
  {
    id: 3,
    title: "Galaxy Gaming Universe",
    description:
      "A comprehensive gaming brand identity that resonated with millions of players worldwide. From logo design to merchandise, every element was crafted to embody the spirit of adventure and exploration that defines the gaming community.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Gaming Branding",
    client: "Cosmic Games",
    year: "2023",
    layout: "left",
    // REPLACE: image: "/images/portfolio/galaxy-gaming-full.jpg"
  },
  {
    id: 4,
    title: "Stardust Skincare Elegance",
    description:
      "Luxury skincare packaging that embodies sophistication and celestial beauty. Each product design reflects the brand's commitment to natural ingredients and cosmic-inspired wellness, resulting in a 150% increase in premium product sales.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Package Design",
    client: "Stardust Beauty",
    year: "2024",
    layout: "right",
    // REPLACE: image: "/images/portfolio/stardust-skincare-full.jpg"
  },
  {
    id: 5,
    title: "Aurora Athletic Apparel",
    description:
      "Dynamic sports branding that captures the energy and determination of athletes. The visual identity system spans across apparel, digital platforms, and marketing materials, creating a cohesive brand experience that inspires performance.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Sports Branding",
    client: "Aurora Athletics",
    year: "2023",
    layout: "left",
    // REPLACE: image: "/images/portfolio/aurora-athletic-full.jpg"
  },
  {
    id: 6,
    title: "Moonbeam Mobile Experience",
    description:
      "A meditation app interface that guides users through serene digital landscapes. The UI/UX design creates a calming, intuitive experience that has helped over 100,000 users find peace and mindfulness in their daily lives.",
    image: "/placeholder.svg?height=600&width=800",
    category: "UI/UX Design",
    client: "Mindful Tech",
    year: "2024",
    layout: "right",
    // REPLACE: image: "/images/portfolio/moonbeam-mobile-full.jpg"
  },
]

const categories = [
  "All",
  "Brand Identity",
  "Fashion Design",
  "Gaming Branding",
  "Package Design",
  "Sports Branding",
  "UI/UX Design",
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredItems, setFilteredItems] = useState(portfolioItems)

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredItems(portfolioItems)
    } else {
      setFilteredItems(portfolioItems.filter((item) => item.category === selectedCategory))
    }
  }, [selectedCategory])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted dark:from-black dark:via-purple-900/20 dark:to-black">
      {/* Navigation */}
      <Navigation show={true} />

      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-40">
        <ThemeToggle />
      </div>

      <div className="pt-20">
        {/* Header */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Button variant="ghost" className="mb-6" asChild>
                <Link href="/home">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                My Complete{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 dark:from-purple-400 dark:via-pink-400 dark:to-purple-600 bg-clip-text text-transparent">
                  Creative Universe
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore my full galaxy of creative collaborations, each uniquely crafted to tell a brand's story
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`rounded-full px-6 py-2 transition-all duration-300 ${
                    selectedCategory === category ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white" : ""
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Portfolio Items - Alternating Layout */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`mb-20 ${
                    index % 2 === 0
                      ? "bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10"
                      : "bg-gradient-to-l from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10"
                  } rounded-3xl p-8 md:p-12`}
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-12 items-center ${
                      item.layout === "right" ? "lg:grid-flow-col-dense" : ""
                    }`}
                  >
                    {/* Image */}
                    <motion.div
                      className={`${item.layout === "right" ? "lg:col-start-2" : ""} relative group`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          width={800}
                          height={600}
                          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                      className={`${item.layout === "right" ? "lg:col-start-1 lg:row-start-1" : ""} space-y-6`}
                      initial={{ opacity: 0, x: item.layout === "right" ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm font-medium text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full">
                          {item.category}
                        </span>
                        <span className="text-sm text-muted-foreground">{item.year}</span>
                      </div>

                      <h2
                        className={`text-3xl md:text-4xl font-bold text-foreground ${
                          index % 2 === 0 ? "font-serif" : "font-sans"
                        }`}
                      >
                        {item.title}
                      </h2>

                      <p
                        className={`text-lg text-muted-foreground leading-relaxed ${
                          index % 2 === 0 ? "font-light italic" : "font-normal"
                        }`}
                      >
                        {item.description}
                      </p>

                      <div className="flex items-center justify-between pt-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Client</p>
                          <p className="font-semibold text-foreground">{item.client}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Heart className="w-5 h-5 text-pink-500" />
                          <Star className="w-5 h-5 text-yellow-500" />
                          <ExternalLink className="w-5 h-5 text-purple-500" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600/10 to-pink-600/10 dark:from-purple-600/20 dark:to-pink-600/20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Ready to Create Your{" "}
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400 bg-clip-text text-transparent">
                  Next Masterpiece?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's collaborate and bring your brand's unique story to life
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg"
                asChild
              >
                <Link href="/about">
                  Start Your Project <Star className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
