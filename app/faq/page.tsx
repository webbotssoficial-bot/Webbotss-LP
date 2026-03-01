import type { Metadata } from "next"
import { Providers } from "@/app/providers"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { PatternBackground } from "@/components/ui/pattern-background"
import { TypographyH1, TypographyLead } from "@/components/ui/typography"
import FaqPageContent from "@/components/faq/faq-page-content"

export const metadata: Metadata = {
  title: "Perguntas Frequentes | WebBotss",
  description:
    "Encontre respostas para as perguntas mais comuns sobre nossos serviços, preços, implementação e suporte.",
}

export default function FaqPage() {
  return (
    <Providers>
      <Navbar />
      <main className="flex-1">
        <section className="w-full py-8 md:py-12 lg:py-14 bg-muted/30 relative overflow-hidden">
          <PatternBackground density="light" />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center space-y-2 mb-4">
              <div className="space-y-1">
                <TypographyH1 className="text-center">Perguntas Frequentes</TypographyH1>
                <TypographyLead className="max-w-[700px] mx-auto">
                  Encontre respostas para as perguntas mais comuns sobre nossos serviços, preços, implementação e
                  suporte.
                </TypographyLead>
              </div>
            </div>
          </div>
        </section>

        <FaqPageContent />
      </main>
      <Footer />
    </Providers>
  )
}

