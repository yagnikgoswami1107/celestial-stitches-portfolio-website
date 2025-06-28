"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Star, Quote } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState, useEffect } from "react"
import { Footer } from "@/components/footer"

// Client testimonials (REPLACE WITH YOUR ACTUAL TESTIMONIALS)
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "TechNova Inc.",
    role: "CEO",
    image: "/placeholder.svg?height=100&width=100",
    testimonial:
      "Yagnik's designs elevated our brand and boosted sales tremendously. His creative vision transformed our entire identity, resulting in a 200% increase in customer engagement. Exceptional creativity and professionalism!",
    rating: 5,
    project: "Complete Brand Identity",
    // REPLACE: image: "/images/testimonials/sarah-johnson.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "Stellar Threads",
    role: "Founder",
    image: "/placeholder.svg?height=100&width=100",
    testimonial:
      "Working with Yagnik was a game-changer for our fashion brand. His T-shirt designs captured our vision perfectly and resonated with our audience. Our collection sold out within 48 hours of launch!",
    rating: 5,
    project: "Fashion Collection Design",
    // REPLACE: image: "/images/testimonials/michael-chen.jpg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "Cosmic Games",
    role: "Marketing Director",
    image: "/placeholder.svg?height=100&width=100",
    testimonial:
      "Yagnik understood our gaming community like no other designer. His branding work helped us connect with millions of players worldwide. The attention to detail and creative execution was outstanding.",
    rating: 5,
    project: "Gaming Brand Identity",
    // REPLACE: image: "/images/testimonials/emily-rodriguez.jpg"
  },
  {
    id: 4,
    name: "David Thompson",
    company: "Stardust Beauty",
    role: "Brand Manager",
    image: "/placeholder.svg?height=100&width=100",
    testimonial:
      "The packaging designs Yagnik created for our skincare line were absolutely stunning. They perfectly captured our luxury positioning and helped increase our premium product sales by 150%.",
    rating: 5,
    project: "Luxury Package Design",
    // REPLACE: image: "/images/testimonials/david-thompson.jpg"
  },
  {
    id: 5,
    name: "Lisa Park",
    company: "Aurora Athletics",
    role: "Creative Director",
    image: "/placeholder.svg?height=100&width=100",
    testimonial:
      "Yagnik's sports branding work energized our entire company. The dynamic visual identity he created perfectly represents our athletic spirit and has inspired both our team and customers.",
    rating: 5,
    project: "Sports Branding",
    // REPLACE: image: "/images/testimonials/lisa-park.jpg"
  },
  {
    id: 6,
    name: "James Wilson",
    company: "Mindful Tech",
    role: "Product Manager",
    image: "/placeholder.svg?height=100&width=100",
    testimonial:
      "The UI/UX design for our meditation app was exceptional. Yagnik created a serene, intuitive experience that has helped over 100,000 users find peace and mindfulness in their daily lives.",
    rating: 5,
    project: "Mobile App Design",
    // REPLACE: image: "/images/testimonials/james-wilson.jpg"
  },
]

export default function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000) // Auto-advance every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

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
                Client{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 dark:from-purple-400 dark:via-pink-400 dark:to-purple-600 bg-clip-text text-transparent">
                  Testimonials
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Brands Transformed. Dreams Woven. Results Delivered.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Testimonial Carousel */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-border shadow-2xl">
                  <CardContent className="p-12 text-center">
                    <Quote className="w-12 h-12 text-purple-500 mx-auto mb-6" />

                    <blockquote className="text-2xl md:text-3xl font-light text-foreground mb-8 leading-relaxed italic">
                      "{testimonials[currentIndex].testimonial}"
                    </blockquote>

                    <div className="flex items-center justify-center space-x-4 mb-6">
                      <Image
                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        width={80}
                        height={80}
                        className="rounded-full border-4 border-purple-200 dark:border-purple-800"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{testimonials[currentIndex].name}</h3>
                        <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                        <p className="text-sm text-purple-600 dark:text-purple-400">
                          {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-center space-x-1 mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <div className="text-sm text-muted-foreground">Project: {testimonials[currentIndex].project}</div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Navigation Controls */}
              <div className="flex justify-center items-center space-x-4 mt-8">
                <Button variant="outline" size="sm" onClick={prevTestimonial} className="rounded-full bg-transparent">
                  ←
                </Button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "bg-purple-600 scale-125"
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>

                <Button variant="outline" size="sm" onClick={nextTestimonial} className="rounded-full bg-transparent">
                  →
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* All Testimonials Grid */}
        <section className="py-16 bg-muted/30 dark:bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-foreground mb-4">
                What My{" "}
                <span className="bg-gradient-to-r from-green-500 to-blue-500 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
                  Clients Say
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">Real feedback from real projects</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border h-full hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                        <div>
                          <h3 className="font-bold text-foreground">{testimonial.name}</h3>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          <p className="text-xs text-purple-600 dark:text-purple-400">{testimonial.company}</p>
                        </div>
                      </div>

                      <div className="flex space-x-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      <blockquote className="text-muted-foreground mb-4 italic">"{testimonial.testimonial}"</blockquote>

                      <div className="text-xs text-muted-foreground border-t border-border pt-4">
                        Project: {testimonial.project}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
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
                Ready to Join These{" "}
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400 bg-clip-text text-transparent">
                  Success Stories?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's create your next testimonial together. Transform your brand with designs that deliver results.
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
