"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import type { FaqItem } from "@/lib/faq"
import { useTranslation } from "@/components/language-provider"
import { typographyVariants } from "@/components/ui/typography"

interface FaqAccordionProps {
  items: FaqItem[]
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const { t } = useTranslation()
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-8">
        <p className={typographyVariants.muted}>Não há perguntas disponíveis nesta categoria.</p>
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div key={item.id} className="border rounded-lg overflow-hidden dark:border-gray-700">
          <button
            onClick={() => toggleItem(item.id)}
            className={cn(
              "flex items-center justify-between w-full p-3 text-left transition-colors",
              typographyVariants.h4,
              openItems[item.id]
                ? "bg-muted hover:bg-muted/80 dark:bg-gray-800 dark:hover:bg-gray-700"
                : "hover:bg-muted/50 dark:hover:bg-gray-800/70",
            )}
            aria-expanded={openItems[item.id]}
            aria-controls={`faq-${item.id}-content`}
          >
            <span className="text-balance">{item.question}</span>
            <ChevronDown
              className={cn(
                "h-5 w-5 text-primary transition-transform duration-200",
                openItems[item.id] && "rotate-180",
              )}
            />
          </button>
          <AnimatePresence>
            {openItems[item.id] && (
              <motion.div
                id={`faq-${item.id}-content`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div
                  className="faq-answer px-3 pb-3 pt-0 max-w-none text-foreground/90 dark:text-gray-300 text-[15px] leading-7"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

