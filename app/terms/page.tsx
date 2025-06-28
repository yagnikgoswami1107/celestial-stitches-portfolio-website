"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, FileText, Scale, AlertCircle, CheckCircle } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { Footer } from "@/components/footer"

export default function TermsPage() {
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
                Terms of{" "}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-800 dark:from-purple-400 dark:via-pink-400 dark:to-purple-600 bg-clip-text text-transparent">
                  Service
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Please read these terms carefully before using our services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-8">
              {[
                {
                  icon: FileText,
                  title: "Service Agreement",
                  content:
                    "By engaging our design services, you agree to these terms and conditions. Our services include graphic design, brand identity development, and creative consultation as outlined in individual project agreements.",
                },
                {
                  icon: Scale,
                  title: "Intellectual Property",
                  content:
                    "Upon full payment, you will own the rights to the final approved designs. We retain the right to showcase completed work in our portfolio unless otherwise agreed. All preliminary concepts and unused designs remain our property.",
                },
                {
                  icon: AlertCircle,
                  title: "Project Scope & Revisions",
                  content:
                    "Each project includes a specified number of revision rounds as outlined in the project agreement. Additional revisions beyond the agreed scope may incur extra charges. Project timelines are estimates and may vary based on client feedback and approval speed.",
                },
                {
                  icon: CheckCircle,
                  title: "Payment & Cancellation",
                  content:
                    "Payment terms are specified in individual project agreements. Generally, a 50% deposit is required to begin work, with the remainder due upon project completion. Cancellation policies vary by project scope and will be clearly outlined in your agreement.",
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

            {/* Additional Terms */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-16"
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Additional Terms</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <strong>Confidentiality:</strong> We maintain strict confidentiality regarding all client projects
                      and business information.
                    </p>
                    <p>
                      <strong>Liability:</strong> Our liability is limited to the total amount paid for services. We are
                      not responsible for any indirect or consequential damages.
                    </p>
                    <p>
                      <strong>Modifications:</strong> These terms may be updated periodically. Clients will be notified
                      of any significant changes.
                    </p>
                    <p>
                      <strong>Governing Law:</strong> These terms are governed by the laws of the jurisdiction in which
                      our business operates.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-16 text-center"
            >
              <Card className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 dark:from-purple-600/20 dark:to-pink-600/20 border-border">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Questions About Our Terms?</h2>
                  <p className="text-muted-foreground mb-6">
                    If you have any questions about these Terms of Service, please contact us before starting any
                    project.
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
