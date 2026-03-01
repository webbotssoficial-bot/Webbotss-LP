"use client"

import { useTranslation } from "./language-provider"
import { motion } from "framer-motion"
import { Building, Users, Award, Target } from "lucide-react"

export default function About() {
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

  return (
    <motion.section
      id="sobre"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="w-full py-12 md:py-24 lg:py-32 bg-muted/30"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              {t("aboutUs")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">{t("aboutTitle")}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("aboutSubtitle")}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
            <motion.div variants={iconVariants} className="mb-4 p-3 rounded-full bg-primary/10">
              <Building className="h-8 w-8 text-primary" />
            </motion.div>
            <h3 className="text-xl font-bold mb-2">{t("ourHistory")}</h3>
            <p className="text-muted-foreground">
              {t("ourHistoryDesc")}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
            <motion.div variants={iconVariants} className="mb-4 p-3 rounded-full bg-primary/10">
              <Target className="h-8 w-8 text-primary" />
            </motion.div>
            <h3 className="text-xl font-bold mb-2">{t("ourMission")}</h3>
            <p className="text-muted-foreground">
              {t("ourMissionDesc")}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
            <motion.div variants={iconVariants} className="mb-4 p-3 rounded-full bg-primary/10">
              <Users className="h-8 w-8 text-primary" />
            </motion.div>
            <h3 className="text-xl font-bold mb-2">{t("ourTeam")}</h3>
            <p className="text-muted-foreground">
              {t("ourTeamDesc")}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-center text-center">
            <motion.div variants={iconVariants} className="mb-4 p-3 rounded-full bg-primary/10">
              <Award className="h-8 w-8 text-primary" />
            </motion.div>
            <h3 className="text-xl font-bold mb-2">{t("ourValues")}</h3>
            <p className="text-muted-foreground">
              {t("ourValuesDesc")}
            </p>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="mt-16 text-center">
          <p className="max-w-[900px] mx-auto text-muted-foreground">
            {t("contactUs")}{" "}
            <a href="mailto:webbotssoficial@gmail.com" className="text-primary hover:underline">
              webbotssoficial@gmail.com
            </a>{" "}
            {t("toKnowMore")}
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

