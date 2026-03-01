"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "./language-provider"
import { motion } from "framer-motion"
import banner from "../public/ImagemInicialWebbotss.png"

export default function Hero() {
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
        damping: 10,
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: 0.5,
      },
    },
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="w-full min-h-[calc(100vh-4rem)] flex items-center py-8 md:py-12 lg:py-16 xl:py-20 bg-background"
    >
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
          <motion.div variants={itemVariants} className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Automação Inteligente</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                {t("heroTitle")}
                <span className="text-primary">.</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">{t("heroSubtitle")}</p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="https://app.webbotss.com.br/signup">
                <Button size="lg" className="gap-1.5 w-full min-[400px]:w-auto">
                  {t("startNow")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                  {t("seeDemo")}
                </Button>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-sm">
              <div className="flex -space-x-2">
                <div className="inline-block h-8 w-8 rounded-full overflow-hidden ring-2 ring-background">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SL.jpg-68kqooPTm4MpFPAYnMRLvr0ndDoCOr.jpeg"
                    alt="SL Performance Marketing"
                    width={32}
                    height={32}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="inline-block h-8 w-8 rounded-full overflow-hidden ring-2 ring-background">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/web-app-manifest-512x512-EiNYmqfvDK6ozatXf0lpCUW1Mdwc4f.png"
                    alt="AM Finance"
                    width={32}
                    height={32}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="inline-block h-8 w-8 rounded-full overflow-hidden ring-2 ring-background">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WALLTRAVELL%20%281%29.jpg-4CLn1dFb4jhpxFNHwDktfYMDZO1Y1n.jpeg"
                    alt="WallTravel"
                    width={32}
                    height={32}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="text-muted-foreground">{t("trustedBy")}</div>
            </motion.div>
          </div>
          <motion.div variants={imageVariants} className="flex items-center justify-center">
            <div className="relative h-[350px] w-full md:h-[450px] lg:h-[450px] xl:h-[550px] rounded-lg overflow-hidden border shadow-xl">
              <Image
                src={banner}
                alt="Dashboard da plataforma WebBotss"
                fill
                className="object-cover"
                priority
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

