"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Linkedin, Instagram, Heart, Star } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      href: "mailto:yagnik@example.com",
      icon: Mail,
      label: "Email",
      color: "hover:text-blue-500",
    },
    {
      href: "https://linkedin.com/in/yagnik-goswami",
      icon: Linkedin,
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      href: "https://instagram.com/yagnik.designs",
      icon: Instagram,
      label: "Instagram",
      color: "hover:text-pink-500",
    },
  ]

  const footerLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/sitemap", label: "Sitemap" },
  ]

  return (
    <footer className="bg-muted/30 dark:bg-black/30 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Yagnik Goswami
            </h3>
            <p className="text-muted-foreground">The Designer, The Graphic Expert</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Crafting stellar brands across the creative universe. Every stitch a star, every design a galaxy of
              possibilities.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-muted-foreground ${social.color} transition-colors duration-200`}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Ready to start your project?{" "}
              <Link href="/about#contact" className="text-purple-600 hover:text-purple-700 transition-colors">
                Get in touch
              </Link>
            </p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">© {currentYear} Yagnik Goswami. All rights reserved.</p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>and</span>
              <Star className="w-4 h-4 text-yellow-500" />
              <span>by Yagnik</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
