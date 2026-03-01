"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useTranslation } from "./language-provider"
import { motion } from "framer-motion"

// Atribui o motion.section a uma variável
const MotionSection = motion.section

export default function Testimonials() {
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

  const starVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3 + i * 0.1,
        type: "spring",
        stiffness: 200,
      },
    }),
  }

  return (
    <MotionSection
      id="depoimentos"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          variants={titleVariants}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              {t("testimonials")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">{t("testimonialsTitle")}</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t("testimonialsSubtitle")}
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-12">
          <motion.div variants={cardVariants}>
            <Card className="border-0 bg-background shadow-md hover:shadow-lg transition-all h-full">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div key={i} custom={i} variants={starVariants}>
                      <Star className="h-5 w-5 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "A WebBotss revolucionou nossas campanhas de marketing digital. Conseguimos automatizar tarefas que antes
                  consumiam horas da nossa equipe, permitindo que foquem em estratégias criativas."
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-muted h-10 w-10 overflow-hidden flex items-center justify-center">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SL.jpg-68kqooPTm4MpFPAYnMRLvr0ndDoCOr.jpeg"
                      alt="SL Performance Marketing Logo"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Carlos Mendes</p>
                    <p className="text-xs text-muted-foreground">Diretor, SL Performance Marketing</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
          <motion.div variants={cardVariants}>
            <Card className="border-0 bg-background shadow-md hover:shadow-lg transition-all h-full">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div key={i} custom={i} variants={starVariants}>
                      <Star className="h-5 w-5 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "Implementamos a solução da WebBotss há 6 meses e já vimos um aumento de 200% na produtividade. A integração com nosso sistema financeiro foi perfeita e o suporte técnico é excepcional."
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-muted h-10 w-10 overflow-hidden flex items-center justify-center">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/web-app-manifest-512x512-EiNYmqfvDK6ozatXf0lpCUW1Mdwc4f.png"
                      alt="AM Finance Logo"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Ana Silva</p>
                    <p className="text-xs text-muted-foreground">CEO, AM Finance</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
          <motion.div variants={cardVariants}>
            <Card className="border-0 bg-background shadow-md hover:shadow-lg transition-all h-full">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div key={i} custom={i} variants={starVariants}>
                      <Star className="h-5 w-5 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "Como uma agência de turismo, precisávamos de uma solução que nos ajudasse a organizar roteiros de viagem de forma eficiente. A WebBotss não só atendeu nossas expectativas como superou em todos os aspectos."
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-muted h-10 w-10 overflow-hidden flex items-center justify-center">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WALLTRAVELL%20%281%29.jpg-4CLn1dFb4jhpxFNHwDktfYMDZO1Y1n.jpeg"
                      alt="WallTravel Logo"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Juliana Costa</p>
                    <p className="text-xs text-muted-foreground">Diretora, WallTravel</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </MotionSection>
  );
}
