"use client"

import { Bot, Zap, BarChart3, Globe, Shield, Repeat } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from "./language-provider"
import { motion } from "framer-motion"
import Image from "next/image"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import campanhas from "../public/CampanhaWhatsApp.png"
import automacao from "../public/AutomacaoInteligente.png"

import Seguranca from "../public/Segurança.png"
import Globalizado from "../public/Globalizado.png"
import Integracaocontinua from "../public/Integração.png"
import Analitcs from "../public/Analiticz.png"

export default function Features() {
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
    hidden: { opacity: 0, y: 40 },
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

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: 0.2,
      },
    },
  }

  return (
    <motion.section
      id="recursos"
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
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              {t("features")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">{t("featuresTitle") }</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("featuresSubtitle")}
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-12">
          <HoverCard>
            <HoverCardTrigger asChild>
              <motion.div variants={cardVariants}>
                <Card className="h-full transition-all hover:shadow-lg overflow-hidden cursor-pointer group">
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={automacao || "/placeholder.svg"}
                      alt="Automação Inteligente"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                      quality={80}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                  <CardHeader className="pb-2 relative">
                    <motion.div variants={iconVariants}>
                      <Bot className="h-12 w-12 text-primary mb-4" />
                    </motion.div>
                    <CardTitle>{t("intelligentAutomation")}</CardTitle>
                    <CardDescription>{t("intelligentAutomationDesc")}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                      <li>{t("customWorkflows")}</li>
                      <li>{t("appIntegrations")}</li>
                      <li>Robô Numérico Avançado</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">{t("intelligentAutomation")}</h4>
                <p className="text-xs">
                  Automatize processos complexos com nossa tecnologia de IA que aprende com o tempo e se adapta às
                  necessidades do seu negócio.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger asChild>
              <motion.div variants={cardVariants}>
                <Card className="h-full transition-all hover:shadow-lg overflow-hidden cursor-pointer group">
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={campanhas|| "/placeholder.svg"}
                      alt="Campanhas WhatsApp"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                      quality={80}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                  <CardHeader className="pb-2">
                    <motion.div variants={iconVariants}>
                      <Zap className="h-12 w-12 text-primary mb-4" />
                    </motion.div>
                    <CardTitle>Campanhas WhatsApp</CardTitle>
                    <CardDescription>
                      Lance campanhas de marketing eficientes diretamente pelo WhatsApp com recursos avançados.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                      <li>Mensagens em massa com multimídia</li>
                      <li>Agendamento de campanhas</li>
                      <li>Segmentação de público</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Campanhas WhatsApp</h4>
                <p className="text-xs">
                  Alcance seus clientes onde eles estão com campanhas personalizadas via WhatsApp que geram até 3x mais
                  engajamento que emails tradicionais.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>

          {/* Remaining cards follow the same pattern with HoverCard wrappers */}
          <motion.div variants={cardVariants}>
            <Card className="h-full transition-all hover:shadow-lg overflow-hidden group">
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={Analitcs || "/placeholder.svg"}
                  alt="Análise Avançada"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                  quality={80}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <CardHeader className="pb-2">
                <motion.div variants={iconVariants}>
                  <BarChart3 className="h-12 w-12 text-primary mb-4" />
                </motion.div>
                <CardTitle>{t("advancedAnalytics")}</CardTitle>
                <CardDescription>{t("advancedAnalyticsDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>{t("customDashboards")}</li>
                  <li>{t("automatedReports")}</li>
                  <li>{t("aiPredictions")}</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants}>
            <Card className="h-full transition-all hover:shadow-lg overflow-hidden group">
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={Globalizado || "/placeholder.svg"}
                  alt="Acessibilidade Global"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                  quality={80}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <CardHeader className="pb-2">
                <motion.div variants={iconVariants}>
                  <Globe className="h-12 w-12 text-primary mb-4" />
                </motion.div>
                <CardTitle>{t("globalAccess")}</CardTitle>
                <CardDescription>{t("globalAccessDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>{t("responsiveInterface")}</li>
                  <li>{t("nativeApps")}</li>
                  <li>{t("realTimeSync")}</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants}>
            <Card className="h-full transition-all hover:shadow-lg overflow-hidden group">
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={Seguranca || "/placeholder.svg"}
                  alt="Segurança Avançada"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                  quality={80}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <CardHeader className="pb-2">
                <motion.div variants={iconVariants}>
                  <Shield className="h-12 w-12 text-primary mb-4" />
                </motion.div>
                <CardTitle>{t("advancedSecurity")}</CardTitle>
                <CardDescription>{t("advancedSecurityDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>{t("endToEndEncryption")}</li>
                  <li>{t("lgpdCompliance")}</li>
                  <li>{t("twoFactorAuth")}</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={cardVariants}>
            <Card className="h-full transition-all hover:shadow-lg overflow-hidden group">
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={Integracaocontinua || "/placeholder.svg"}
                  alt="Integração Contínua"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                  quality={80}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <CardHeader className="pb-2">
                <motion.div variants={iconVariants}>
                  <Repeat className="h-12 w-12 text-primary mb-4" />
                </motion.div>
                <CardTitle>{t("continuousIntegration")}</CardTitle>
                <CardDescription>{t("continuousIntegrationDesc")}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                  <li>{t("restfulApis")}</li>
                  <li>{t("customWebhooks")}</li>
                  <li>{t("prebuiltConnectors")}</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

