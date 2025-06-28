"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Mail, Linkedin, Instagram, Calendar, Star, Heart, Zap } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { useState } from "react"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You can integrate with your preferred form handling service
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
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
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Button variant="ghost" className="mb-6" asChild>
                <Link href="/home">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                About{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 dark:from-purple-400 dark:via-pink-400 dark:to-purple-600 bg-clip-text text-transparent">
                  Yagnik Goswami
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The Designer, The Graphic Expert - Where Creativity Meets Purpose
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=600&width=500"
                    alt="Yagnik Goswami - Designer & Graphic Expert"
                    width={500}
                    height={600}
                    className="rounded-2xl shadow-2xl"
                    // REPLACE: src="/images/yagnik-profile.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-2xl" />
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full p-4"
                >
                  <Star className="w-6 h-6 text-white" />
                </motion.div>
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute -bottom-4 -left-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full p-4"
                >
                  <Heart className="w-6 h-6 text-white" />
                </motion.div>
              </motion.div>

              {/* About Text */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  I'm Yagnik Goswami,{" "}
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-500 dark:from-yellow-400 dark:to-orange-400 bg-clip-text text-transparent">
                    A Passionate Designer
                  </span>
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm Yagnik Goswami, a passionate designer who weaves creativity into every brand. With years of
                  experience in graphic design and brand identity, I specialize in creating visual stories that don't
                  just look beautiful—they perform, convert, and elevate businesses to new heights.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  My approach combines strategic thinking with artistic vision, ensuring every design decision serves
                  both aesthetic and business goals. From T-shirt designs that capture brand essence to complete visual
                  identities that transform companies, I craft experiences that resonate deeply with audiences.
                </p>

                <div className="grid grid-cols-3 gap-6 py-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground mb-2">200%</div>
                    <div className="text-muted-foreground text-sm">Average Sales Boost</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground mb-2">50+</div>
                    <div className="text-muted-foreground text-sm">Brands Transformed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-foreground mb-2">5+</div>
                    <div className="text-muted-foreground text-sm">Years Experience</div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                    asChild
                  >
                    <Link href="#contact">Let's Collaborate</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/portfolio">View My Work</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-muted/30 dark:bg-black/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-foreground mb-4">
                My{" "}
                <span className="bg-gradient-to-r from-green-500 to-blue-500 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
                  Expertise
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">Transforming visions into visual masterpieces</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "T-Shirt Design",
                  description:
                    "Custom designs that capture your brand's essence and resonate with your target audience",
                  gradient: "from-blue-500 to-purple-600",
                },
                {
                  icon: Star,
                  title: "Brand Identity",
                  description: "Complete visual identity packages that make your brand unforgettable and distinctive",
                  gradient: "from-purple-500 to-pink-600",
                },
                {
                  icon: Heart,
                  title: "Creative Consultation",
                  description: "Strategic creative guidance to ensure your brand stands out in crowded markets",
                  gradient: "from-pink-500 to-red-600",
                },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border h-full hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <div
                        className={`bg-gradient-to-br ${service.gradient} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg`}
                      >
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Let's Create{" "}
                  <span className="bg-gradient-to-r from-pink-500 to-purple-500 dark:from-pink-400 dark:to-purple-400 bg-clip-text text-transparent">
                    Something Amazing
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Ready to transform your brand with designs that resonate? Let's start a conversation about your vision
                  and bring it to life.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-full p-3">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-foreground font-semibold">Email</div>
                      <a
                        href="mailto:yagnik@example.com"
                        className="text-muted-foreground hover:text-purple-600 transition-colors"
                      >
                        yagnik@example.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-3">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-foreground font-semibold">LinkedIn</div>
                      <a
                        href="https://linkedin.com/in/yagnik-goswami"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-blue-600 transition-colors"
                      >
                        linkedin.com/in/yagnik-goswami
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-full p-3">
                      <Instagram className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-foreground font-semibold">Instagram</div>
                      <a
                        href="https://instagram.com/yagnik.designs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-pink-600 transition-colors"
                      >
                        @yagnik.designs
                      </a>
                    </div>
                  </div>
                </div>

                {/* Meeting Booking */}
                <div className="mt-8 p-6 bg-gradient-to-r from-purple-600/10 to-pink-600/10 dark:from-purple-600/20 dark:to-pink-600/20 rounded-2xl border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-4">Book a Free Consultation</h3>
                  <p className="text-muted-foreground mb-4">
                    Schedule a 30-minute discovery call to discuss your project and explore how we can bring your vision
                    to life.
                  </p>
                  <Button
                    className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white"
                    asChild
                  >
                    <a
                      href="https://calendly.com/yagnik-goswami/consultation"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Meeting
                    </a>
                  </Button>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-6">Send me a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-foreground mb-2">Name</label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-foreground mb-2">Company</label>
                          <Input
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your company"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-foreground mb-2">Email</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-foreground mb-2">Message</label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="min-h-[120px]"
                          placeholder="Tell me about your project..."
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
