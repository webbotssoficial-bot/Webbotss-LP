"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useTranslation } from "./language-provider"
import { motion } from "framer-motion"

export default function Cta() {
  const { t } = useTranslation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.95 },
  }

  return (
    <motion.section
      id="contato"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
    >
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div variants={itemVariants} className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">{t("ctaTitle")}</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">{t("ctaSubtitle")}</p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="https://app.webbotss.com.br/signup">
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Button size="lg" className="gap-1.5 whitespace-nowrap">
                  {t("startFreeNow")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
            </Link>
            <Link href="/contato">
              <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                <Button size="lg" variant="outline" className="whitespace-nowrap">
                  {t("talkToExpert")}
                </Button>
              </motion.div>
            </Link>
          </motion.div>
          <motion.p variants={itemVariants} className="text-sm text-muted-foreground">
            {t("freeTrial")}
          </motion.p>
        </div>
      </div>
    </motion.section>
  )
}

