"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { motion } from "framer-motion"
import { useTranslation } from "./language-provider"

export default function Pricing() {
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

  const titleVariants = {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
      },
    },
  }

  const checkVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  }

  return (
    <motion.section
      id="precos"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="w-full py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          variants={titleVariants}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">{t("pricingBadge")}</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              {t("pricingTitle")}
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("pricingSubtitle")}
            </p>
          </div>

        </motion.div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 pt-12">
          <motion.div variants={cardVariants}>
            <Card className="border-border/50 flex flex-col h-full transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle>{t("starter")}</CardTitle>
                <CardDescription>{t("starterDesc")}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  <motion.li variants={checkVariants} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{t("numericBot")}</span>
                  </motion.li>
                  <motion.li variants={checkVariants} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{t("highlyCustomizable")}</span>
                  </motion.li>
                  <motion.li variants={checkVariants} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{t("dashboardInsights")}</span>
                  </motion.li>
                  <motion.li variants={checkVariants} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{t("support24_7NoInterruption")}</span>
                  </motion.li>
                  <motion.li variants={checkVariants} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{t("upTo5Users")}</span>
                  </motion.li>
                  <motion.li variants={checkVariants} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{t("emailSupport")}</span>
                  </motion.li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link
                  href="https://wa.me/5585999269030?text=Olá! Gostaria de saber mais sobre o plano Iniciante da WebBotss."
                  className="w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full">{t("getStarted")}</Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants}>
            <Card className="border-primary/50 flex flex-col relative h-full transition-all hover:shadow-lg">
              <div className="absolute top-0 right-0 rounded-bl-lg rounded-tr-lg bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                {t("popular")}
              </div>
              <CardHeader>
                <CardTitle>{t("professional")}</CardTitle>
                <CardDescription>{t("professionalDesc")}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  <motion.li variants={checkVariants} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{t("allStarterBenefits")}</span>
                  </motion.li>
                  <motion.li variants={checkVariants} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{t("aiSupport")}</span>
                  </motion.li>
                  <motion.li variants={checkVariants} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{t("massMessagingMultimedia")}</span>
                  </motion.li>
                  <motion.li variants={checkVariants} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{t("multichannelIntegration")}</span>
                  </motion.li>
                  <motion.li variants={checkVariants} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{t("upTo20Users")}</span>
                  </motion.li>
                  <motion.li variants={checkVariants} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{t("prioritySupport")}</span>
                  </motion.li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link
                  href="https://wa.me/5585999269030?text=Olá! Gostaria de saber mais sobre o plano Profissional da WebBotss."
                  className="w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full">{t("getStarted")}</Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants}>
            <Card className="border-border/50 flex flex-col h-full transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle>{t("enterprise")}</CardTitle>
                <CardDescription>{t("enterpriseDesc")}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  <motion.li variants={checkVariants} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{t("allProfessionalBenefits")}</span>
                  </motion.li>
                  <motion.li variants={checkVariants} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{t("unlimitedUsers")}</span>
                  </motion.li>
                  <motion.li variants={checkVariants} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{t("unlimitedSending")}</span>
                  </motion.li>
                  <motion.li variants={checkVariants} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{t("aiAgentMissions")}</span>
                  </motion.li>
                  <motion.li variants={checkVariants} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{t("advancedContextUnderstanding")}</span>
                  </motion.li>
                  <motion.li variants={checkVariants} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{t("dedicatedSupport247")}</span>
                  </motion.li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link
                  href="https://wa.me/5585999269030?text=Olá! Gostaria de saber mais sobre o plano Empresarial da WebBotss."
                  className="w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full">{t("getStarted")}</Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

