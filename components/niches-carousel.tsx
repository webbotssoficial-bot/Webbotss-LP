"use client"

import { useCallback, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Stethoscope, Scale, Calculator, Smile, ChevronRight } from "lucide-react"
import { useTranslation } from "@/components/language-provider"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const niches = [
  {
    id: "medicos",
    icon: Stethoscope,
    titleKey: "nicheMedicos" as const,
    descKey: "nicheMedicosDesc" as const,
    gradient: "from-emerald-500/20 via-primary/10 to-teal-500/20",
    iconBg: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
    borderGlow: "border-emerald-500/30 hover:border-emerald-400/50",
  },
  {
    id: "advogados",
    icon: Scale,
    titleKey: "nicheAdvogados" as const,
    descKey: "nicheAdvogadosDesc" as const,
    gradient: "from-amber-500/20 via-primary/10 to-orange-500/20",
    iconBg: "bg-amber-500/20 text-amber-600 dark:text-amber-400",
    borderGlow: "border-amber-500/30 hover:border-amber-400/50",
  },
  {
    id: "contadores",
    icon: Calculator,
    titleKey: "nicheContadores" as const,
    descKey: "nicheContadoresDesc" as const,
    gradient: "from-blue-500/20 via-primary/10 to-indigo-500/20",
    iconBg: "bg-blue-500/20 text-blue-600 dark:text-blue-400",
    borderGlow: "border-blue-500/30 hover:border-blue-400/50",
  },
  {
    id: "dentistas",
    icon: Smile,
    titleKey: "nicheDentistas" as const,
    descKey: "nicheDentistasDesc" as const,
    gradient: "from-rose-500/20 via-primary/10 to-pink-500/20",
    iconBg: "bg-rose-500/20 text-rose-600 dark:text-rose-400",
    borderGlow: "border-rose-500/30 hover:border-rose-400/50",
  },
] as const

export default function NichesCarousel() {
  const { t } = useTranslation()
  const [api, setApi] = useState<CarouselApi>(null)
  const [current, setCurrent] = useState(0)

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on("select", api => setCurrent(api.selectedScrollSnap()))
  }, [api, onSelect])

  useEffect(() => {
    if (!api) return
    const interval = setInterval(() => api.scrollNext(), 5000)
    return () => clearInterval(interval)
  }, [api])

  return (
    <motion.section
      id="nichos"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="w-full py-16 md:py-24 lg:py-28 overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background"
    >
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-14"
        >
          <span className="inline-block rounded-full bg-primary/15 text-primary px-4 py-1.5 text-sm font-semibold mb-4">
            {t("nichesBadge")}
          </span>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl/none text-balance">
            {t("nichesTitle")}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg md:text-xl leading-relaxed">
            {t("nichesSubtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative max-w-5xl mx-auto"
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
              skipSnaps: false,
              dragFree: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {niches.map((niche, index) => {
                const Icon = niche.icon
                return (
                  <CarouselItem
                    key={niche.id}
                    className="pl-2 md:pl-4 basis-full sm:basis-[85%] md:basis-[70%] lg:basis-[45%]"
                  >
                    <Card
                      className={cn(
                        "relative overflow-hidden border-2 bg-card/95 backdrop-blur transition-all duration-300",
                        "shadow-lg hover:shadow-xl hover:shadow-primary/5",
                        niche.borderGlow,
                        `bg-gradient-to-br ${niche.gradient}`,
                      )}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-background/50 pointer-events-none" />
                      <CardContent className="relative p-6 md:p-8 flex flex-col min-h-[220px] md:min-h-[260px]">
                        <div
                          className={cn(
                            "inline-flex h-14 w-14 rounded-2xl items-center justify-center mb-5 transition-transform hover:scale-110",
                            niche.iconBg,
                          )}
                        >
                          <Icon className="h-7 w-7" strokeWidth={2} />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
                          {t(niche.titleKey)}
                        </h3>
                        <p className="mt-2 text-muted-foreground leading-relaxed flex-1 text-sm md:text-base">
                          {t(niche.descKey)}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                          {t("seeHowToAutomate")}
                          <ChevronRight className="h-4 w-4" />
                        </span>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-12 h-10 w-10 rounded-full border-2 bg-background/90 shadow-md hover:bg-primary hover:text-primary-foreground hover:border-primary" />
            <CarouselNext className="right-0 md:-right-12 h-10 w-10 rounded-full border-2 bg-background/90 shadow-md hover:bg-primary hover:text-primary-foreground hover:border-primary" />
          </Carousel>

          <div className="flex justify-center gap-2 mt-6">
            {niches.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  current === i
                    ? "w-8 bg-primary"
                    : "w-2 bg-primary/30 hover:bg-primary/50",
                )}
                aria-label={`Ir para nicho ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
