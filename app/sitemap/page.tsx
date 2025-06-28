"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Home, User, Briefcase, MessageSquare, FileText } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { Footer } from "@/components/footer"

const siteMap = [
  {
    title: "Main Pages",
    icon: Home,
    pages: [
      { name: "Home", path: "/home", description: "Landing page with hero section and featured work" },
      { name: "About", path: "/about", description: "Personal introduction and contact information" },
      { name: "Portfolio", path: "/portfolio", description: "Complete showcase of creative projects" },
      { name: "Testimonials", path: "/testimonials", description: "Client feedback and success stories" },
    ],
  },
  {
    title: "Legal Pages",
    icon: FileText,
    pages: [
      { name: "Privacy Policy", path: "/privacy", description: "How we handle and protect your data" },
      { name: "Terms of Service", path: "/terms", description: "Terms and conditions for our services" },
    ],
  },
  {
    title: "Contact & Social",
    icon: MessageSquare,
    pages: [
      { name: "Contact Form", path: "/about#contact", description: "Get in touch for project inquiries" },
      {
        name: "LinkedIn",
        path: "https://linkedin.com/in/yagnik-goswami",
        description: "Professional profile",
        external: true,
      },
      {
        name: "Instagram",
        path: "https://instagram.com/yagnik.designs",
        description: "Design portfolio",
        external: true,
      },
      { name: "Email", path: "mailto:yagnik@example.com", description: "Direct email contact", external: true },
    ],
  },
]

export default function SitemapPage() {
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
                Site{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 dark:from-purple-400 dark:via-pink-400 dark:to-purple-600 bg-clip-text text-transparent">
                  Map
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Navigate through all pages and sections of our creative universe
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {siteMap.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: sectionIndex * 0.2, duration: 0.8 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-full p-2">
                          <section.icon className="w-5 h-5 text-white" />
                        </div>
                        <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
                      </div>

                      <div className="space-y-4">
                        {section.pages.map((page, pageIndex) => (
                          <motion.div
                            key={page.name}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: sectionIndex * 0.2 + pageIndex * 0.1, duration: 0.6 }}
                            className="group"
                          >
                            {page.external ? (
                              <a
                                href={page.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                              >
                                <div className="flex items-center justify-between mb-1">
                                  <h3 className="font-semibold text-foreground group-hover:text-purple-600 transition-colors">
                                    {page.name}
                                  </h3>
                                  <span className="text-xs text-muted-foreground">↗</span>
                                </div>
                                <p className="text-sm text-muted-foreground">{page.description}</p>
                              </a>
                            ) : (
                              <Link
                                href={page.path}
                                className="block p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                              >
                                <h3 className="font-semibold text-foreground group-hover:text-purple-600 transition-colors mb-1">
                                  {page.name}
                                </h3>
                                <p className="text-sm text-muted-foreground">{page.description}</p>
                              </Link>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Quick Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-16"
            >
              <Card className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 dark:from-purple-600/20 dark:to-pink-600/20 border-border">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-foreground mb-4">Quick Navigation</h2>
                    <p className="text-muted-foreground">Jump to the most important pages</p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { name: "Home", path: "/home", icon: Home },
                      { name: "Portfolio", path: "/portfolio", icon: Briefcase },
                      { name: "About", path: "/about", icon: User },
                      { name: "Contact", path: "/about#contact", icon: MessageSquare },
                    ].map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Button
                          variant="outline"
                          className="w-full h-auto p-4 flex flex-col items-center space-y-2 bg-card/50 backdrop-blur-sm"
                          asChild
                        >
                          <Link href={item.path}>
                            <item.icon className="w-6 h-6" />
                            <span className="font-medium">{item.name}</span>
                          </Link>
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Footer Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mt-8 text-center text-sm text-muted-foreground"
            >
              <p>Last updated: December 2024 | Celestial Stitches Portfolio</p>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
