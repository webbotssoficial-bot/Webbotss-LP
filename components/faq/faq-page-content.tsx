"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TypographyH3, TypographyMuted } from "@/components/ui/typography"
import { Search } from "lucide-react"
import { getFaqItems, getFaqCategories } from "@/lib/faq"
import { useTranslation } from "@/components/language-provider"
import { FaqAccordion } from "../faq-accordion"

export default function FaqPageContent() {
  const { t } = useTranslation()
  const [searchQuery, setSearchQuery] = useState("")
  const categories = getFaqCategories()
  const allFaqItems = getFaqItems()

  // Filtrar itens com base na pesquisa
  const filteredItems =
    searchQuery.trim() === ""
      ? allFaqItems
      : allFaqItems.filter(
          (item) =>
            item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.answer.toLowerCase().includes(searchQuery.toLowerCase()),
        )

  // Agrupar itens filtrados por categoria
  const groupedItems = categories.reduce(
    (acc, category) => {
      acc[category.id] = filteredItems.filter((item) => item.category === category.id)
      return acc
    },
    {} as Record<string, typeof allFaqItems>,
  )

  // Verificar se há resultados para exibir
  const hasResults = Object.values(groupedItems).some((items) => items.length > 0)

  // Mapeamento category id -> chave de tradução (evita exibir "faqCategoryGeral" nas abas)
  const categoryLabelKeys: Record<string, string> = {
    geral: "faqCategoryGeneral",
    precos: "faqCategoryPricing",
    implementacao: "faqCategoryImplementation",
    integracao: "faqCategoryIntegration",
    whatsapp: "faqCategoryWhatsapp",
    suporte: "faqCategorySupport",
    seguranca: "faqCategorySecurity",
  }

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
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full py-6 md:py-10 lg:py-12"
    >
      <div className="container px-4 md:px-6">
        <motion.div variants={itemVariants} className="max-w-md mx-auto mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="search"
              placeholder={t("searchFaq")}
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>

        <Tabs defaultValue={categories[0].id} className="w-full max-w-4xl mx-auto">
          <motion.div variants={itemVariants} className="mb-4">
            <TabsList className="w-full justify-start overflow-auto pb-2 flex-wrap">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="whitespace-nowrap">
                  {t(categoryLabelKeys[category.id] ?? `faqCategory${category.id.charAt(0).toUpperCase() + category.id.slice(1)}`)}
                </TabsTrigger>
              ))}
            </TabsList>
          </motion.div>

          {hasResults ? (
            categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <motion.div variants={itemVariants}>
                  <FaqAccordion items={groupedItems[category.id]} />
                </motion.div>
              </TabsContent>
            ))
          ) : (
            <motion.div variants={itemVariants} className="text-center py-12 space-y-2">
              <TypographyH3>{t("noResults")}</TypographyH3>
              <TypographyMuted>{t("noResultsDesc")}</TypographyMuted>
            </motion.div>
          )}
        </Tabs>
      </div>
    </motion.section>
  )
}

