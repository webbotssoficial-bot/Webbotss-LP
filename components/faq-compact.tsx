"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FaqAccordion } from "@/components/faq-accordion"
import { ArrowRight } from "lucide-react"
import { getFaqItems } from "@/lib/faq"

import { useTranslation } from "@/components/language-provider"
import { SectionHeading } from "./ui/section-heading"

interface FaqCompactProps {
  category?: string
  limit?: number
  showAllLink?: boolean
}

export default function FaqCompact({ category, limit = 5, showAllLink = true }: FaqCompactProps) {
  const { t } = useTranslation()
  const allFaqItems = getFaqItems()

  // Filtrar por categoria se especificada
  const filteredItems = category ? allFaqItems.filter((item) => item.category === category) : allFaqItems

  // Limitar o número de itens
  const displayedItems = filteredItems.slice(0, limit)

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

  return (
    <motion.section
      id="faq"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="w-full py-12 md:py-24"
    >
      <div className="container px-4 md:px-6">
        <SectionHeading badge={t("faq")} title={t("faqTitle")} description={t("faqSubtitle")} />

        <motion.div variants={itemVariants} className="max-w-3xl mx-auto mt-10">
          <FaqAccordion items={displayedItems} />
        </motion.div>

        {showAllLink && (
          <motion.div variants={itemVariants} className="flex justify-center mt-8">
            <Link href="/faq">
              <Button variant="outline" className="gap-2">
                {t("viewAllFaq")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}

