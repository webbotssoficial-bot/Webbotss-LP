"use client"

import { Clock, TrendingUp, Award } from "lucide-react"
import { useTranslation } from "./language-provider"
import { motion } from "framer-motion"

export default function Stats() {
  const { t } = useTranslation()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  }

  const numberVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="w-full py-12 md:py-16 lg:py-20 bg-muted/50"
    >
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-12">
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center space-y-2 text-center"
          >
            <motion.div
              variants={iconVariants}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"
            >
              <Clock className="h-6 w-6 text-primary" />
            </motion.div>
            <div className="space-y-1">
              <motion.h3 variants={numberVariants} className="text-3xl font-bold" aria-hidden="true">
                40h+
              </motion.h3>
              <p className="text-sm text-muted-foreground">{t("hoursSaved")}</p>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center space-y-2 text-center"
          >
            <motion.div
              variants={iconVariants}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"
            >
              <TrendingUp className="h-6 w-6 text-primary" />
            </motion.div>
            <div className="space-y-1">
              <motion.h3 variants={numberVariants} className="text-3xl font-bold" aria-hidden="true">
                300%
              </motion.h3>
              <p className="text-sm text-muted-foreground">{t("productivityIncrease")}</p>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center space-y-2 text-center"
          >
            <motion.div
              variants={iconVariants}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"
            >
              <Award className="h-6 w-6 text-primary" />
            </motion.div>
            <div className="space-y-1">
              <motion.h3 variants={numberVariants} className="text-3xl font-bold" aria-hidden="true">
                4.9/5
              </motion.h3>
              <p className="text-sm text-muted-foreground">{t("customerRating")}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

