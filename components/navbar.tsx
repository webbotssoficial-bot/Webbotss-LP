"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import { LanguageSwitcher, useTranslation } from "./language-provider"
import Logo from "./logo"
import { motion } from "framer-motion"

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [scrolled, setScrolled] = useState(false)
  const { t } = useTranslation()
  const isHome = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state for navbar background change
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Handle active section
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100 // offset for navbar height

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).clientHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const yOffset = -80 // navbar height offset
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200 ${
        scrolled ? "bg-background/95 shadow-sm" : "bg-background/50"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div variants={itemVariants} className="flex items-center gap-2">
          <Logo />
        </motion.div>

        <motion.nav variants={itemVariants} className="hidden lg:flex items-center gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("recursos")}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              activeSection === "recursos" ? "text-primary" : ""
            }`}
          >
            {t("resources")}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("depoimentos")}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              activeSection === "depoimentos" ? "text-primary" : ""
            }`}
          >
            {t("testimonials")}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("precos")}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              activeSection === "precos" ? "text-primary" : ""
            }`}
          >
            {t("pricing")}
          </motion.button>

          {isHome ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("faq")}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === "faq" ? "text-primary" : ""
              }`}
            >
              FAQ
            </motion.button>
          ) : (
            <Link href="/faq">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-sm font-medium transition-colors hover:text-primary cursor-pointer"
              >
                FAQ
              </motion.span>
            </Link>
          )}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contato")}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              activeSection === "contato" ? "text-primary" : ""
            }`}
          >
            {t("contact")}
          </motion.button>
        </motion.nav>

        <motion.div variants={itemVariants} className="flex items-center gap-4">
          <LanguageSwitcher />
          <ModeToggle />
          <div className="hidden lg:flex items-center gap-4">
            <Link href="https://app.webbotss.com.br/login">
              <Button variant="outline">{t("login")}</Button>
            </Link>
            <Link href="https://app.webbotss.com.br/signup">
              <Button>{t("startFree")}</Button>
            </Link>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </motion.div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden container py-4 pb-6 border-t"
        >
          <nav className="flex flex-col gap-4">
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              onClick={() => scrollToSection("recursos")}
              className={`text-sm font-medium transition-colors hover:text-primary text-left ${
                activeSection === "recursos" ? "text-primary" : ""
              }`}
            >
              {t("resources")}
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={() => scrollToSection("depoimentos")}
              className={`text-sm font-medium transition-colors hover:text-primary text-left ${
                activeSection === "depoimentos" ? "text-primary" : ""
              }`}
            >
              {t("testimonials")}
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => scrollToSection("precos")}
              className={`text-sm font-medium transition-colors hover:text-primary text-left ${
                activeSection === "precos" ? "text-primary" : ""
              }`}
            >
              {t("pricing")}
            </motion.button>

            {isHome ? (
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 }}
                onClick={() => scrollToSection("faq")}
                className={`text-sm font-medium transition-colors hover:text-primary text-left w-full ${
                  activeSection === "faq" ? "text-primary" : ""
                }`}
              >
                FAQ
              </motion.button>
            ) : (
              <Link href="/faq">
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 }}
                  className="text-sm font-medium transition-colors hover:text-primary text-left block"
                >
                  FAQ
                </motion.span>
              </Link>
            )}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-2 mt-2"
            >
              <Link href="https://app.webbotss.com.br/login" className="w-full">
                <Button variant="outline" className="w-full">
                  {t("login")}
                </Button>
              </Link>
              <Link href="https://app.webbotss.com.br/signup" className="w-full">
                <Button className="w-full">{t("startFree")}</Button>
              </Link>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}

