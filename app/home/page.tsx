"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Star, Sparkles, Palette, Target } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// Featured portfolio items for homepage (REPLACE WITH YOUR ACTUAL IMAGES)
const featuredPortfolio = [
  {
    id: 1,
    title: "Cosmic Brand Identity",
    description: "A stellar brand transformation that boosted sales by 180%",
    image: "/placeholder.svg?height=400&width=600",
    category: "Brand Identity",
    // REPLACE: image: "/images/portfolio/cosmic-brand.jpg"
  },
  {
    id: 2,
    title: "Nebula Fashion Line",
    description: "T-shirt designs that captured the essence of modern streetwear",
    image: "/placeholder.svg?height=400&width=600",
    category: "T-Shirt Design",
    // REPLACE: image: "/images/portfolio/nebula-fashion.jpg"
  },
  {
    id: 3,
    title: "Galaxy Gaming Merch",
    description: "Gaming merchandise that resonated with the community",
    image: "/placeholder.svg?height=400&width=600",
    category: "Merchandise",
    // REPLACE: image: "/images/portfolio/galaxy-gaming.jpg"
  },
  {
    id: 4,
    title: "Stellar Startup Branding",
    description: "Complete brand package for a tech startup's launch",
    image: "/placeholder.svg?height=400&width=600",
    category: "Brand Identity",
    // REPLACE: image: "/images/portfolio/stellar-startup.jpg"
  },
  {
    id: 5,
    title: "Constellation Collection",
    description: "Limited edition designs inspired by celestial patterns",
    image: "/placeholder.svg?height=400&width=600",
    category: "T-Shirt Design",
    // REPLACE: image: "/images/portfolio/constellation.jpg"
  },
  {
    id: 6,
    title: "Cosmic Coffee Co.",
    description: "Brand identity that made this coffee shop a local favorite",
    image: "/placeholder.svg?height=400&width=600",
    category: "Brand Identity",
    // REPLACE: image: "/images/portfolio/cosmic-coffee.jpg"
  },
]

export default function HomePage() {
  const [showNavigation, setShowNavigation] = useState(false)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, 100])

  useEffect(() => {
    const handleScroll = () => {
      setShowNavigation(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted dark:from-black dark:via-purple-900/20 dark:to-black">
      {/* Animated Navigation */}
      <Navigation show={showNavigation} />

      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-40">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-pink-600/10 dark:from-purple-600/20 dark:to-pink-600/20"
        />

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 dark:bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Every Stitch a Star,{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 dark:from-purple-400 dark:via-pink-400 dark:to-purple-600 bg-clip-text text-transparent">
                Every Design a Galaxy
              </span>{" "}
              of Possibilities
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Crafting Stories, Stitching Identity
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full"
                asChild
              >
                <Link href="/portfolio">
                  Explore My Universe <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-3 rounded-full bg-transparent" asChild>
                <Link href="/about">Connect With Me</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-muted/30 dark:bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              My Creative{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforming brands through innovative design and strategic creativity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                title: "Branding Beyond Ordinary",
                desc: "Creating visual identities that resonate and inspire",
                gradient: "from-blue-500 to-purple-600",
              },
              {
                icon: Sparkles,
                title: "Identities Shaped by Creativity",
                desc: "Crafting unique brand personalities that stand out",
                gradient: "from-purple-500 to-pink-600",
              },
              {
                icon: Target,
                title: "Artful Graphics, Iconic Videos",
                desc: "Designing visuals that captivate and convert",
                gradient: "from-pink-500 to-red-600",
              },
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="text-center group"
              >
                <div
                  className={`bg-gradient-to-br ${skill.gradient} rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                >
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Masterpieces
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">A glimpse into my creative universe</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredPortfolio.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group cursor-pointer"
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-purple-600 dark:text-purple-400 mb-2">{item.category}</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Show All Magic Work Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-foreground mb-2">
                Show All Our{" "}
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400 bg-clip-text text-transparent">
                  Magic Work
                </span>
              </h3>
              <p className="text-muted-foreground">Discover the full spectrum of my creative universe</p>
            </div>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full"
              asChild
            >
              <Link href="/portfolio">
                View All Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/10 to-pink-600/10 dark:from-purple-600/20 dark:to-pink-600/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Create{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400 bg-clip-text text-transparent">
                Something Extraordinary?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's collaborate and bring your brand's unique story to life through stellar design
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg"
              asChild
            >
              <Link href="/about">
                Start Your Journey <Star className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
