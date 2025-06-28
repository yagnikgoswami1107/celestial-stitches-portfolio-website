"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Shield, Eye, Lock, UserCheck } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
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
                Privacy{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 dark:from-purple-400 dark:via-pink-400 dark:to-purple-600 bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Your privacy is important to us. Learn how we protect and handle your information.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-8">
              {[
                {
                  icon: Shield,
                  title: "Information We Collect",
                  content:
                    "We collect information you provide directly to us, such as when you contact us through our forms, email, or social media. This may include your name, email address, company information, and project details.",
                },
                {
                  icon: Eye,
                  title: "How We Use Your Information",
                  content:
                    "We use the information we collect to respond to your inquiries, provide our services, improve our website, and communicate with you about projects and updates. We never sell or share your personal information with third parties for marketing purposes.",
                },
                {
                  icon: Lock,
                  title: "Data Security",
                  content:
                    "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All data transmission is encrypted using industry-standard protocols.",
                },
                {
                  icon: UserCheck,
                  title: "Your Rights",
                  content:
                    "You have the right to access, update, or delete your personal information at any time. You may also opt out of communications from us. Contact us directly to exercise these rights or if you have any privacy concerns.",
                },
              ].map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-full p-3 flex-shrink-0">
                          <section.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-foreground mb-4">{section.title}</h2>
                          <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-16 text-center"
            >
              <Card className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 dark:from-purple-600/20 dark:to-pink-600/20 border-border">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Questions About Privacy?</h2>
                  <p className="text-muted-foreground mb-6">
                    If you have any questions about this Privacy Policy or how we handle your data, please don't
                    hesitate to contact us.
                  </p>
                  <Button
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                    asChild
                  >
                    <Link href="/about#contact">Contact Us</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Last Updated */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mt-8 text-center text-sm text-muted-foreground"
            >
              Last updated: December 2024
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
