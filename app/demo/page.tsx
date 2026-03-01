"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import SuccessMessage from "@/components/success-message"

export default function DemoPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [needs, setNeeds] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "demo",
          name,
          email,
          whatsapp,
          needs,
        }),
      })

      if (!response.ok) {
        throw new Error("Falha ao enviar solicitação")
      }

      setIsSuccess(true)

      // Reset form
      setName("")
      setEmail("")
      setWhatsapp("")
      setNeeds("")
    } catch (error) {
      toast({
        title: "Erro ao enviar solicitação",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
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

  if (isSuccess) {
    return (
      <div className="min-h-[calc(100vh-4rem)] bg-background flex items-center justify-center py-8">
        <div className="container max-w-md">
          <SuccessMessage
            title="Demonstração Solicitada!"
            description="Entraremos em contato em breve para agendar sua demonstração personalizada."
          />
          <div className="mt-8 text-center">
            <Link href="/" className="text-primary hover:underline">
              Voltar para a página inicial
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background flex items-center">
      <div className="container py-8 md:py-12 lg:py-16 w-full">
        <Link href="/" className="inline-flex items-center gap-2 mb-8 text-primary hover:underline">
          <ArrowLeft className="h-4 w-4" />
          <span>Voltar para a página inicial</span>
        </Link>

        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-md mx-auto">
          <Card className="border-primary/20 shadow-lg">
            <CardHeader className="space-y-1 pb-6">
              <motion.div variants={itemVariants}>
                <CardTitle className="text-2xl font-bold">Solicitar Demonstração</CardTitle>
                <CardDescription className="text-base">
                  Preencha o formulário abaixo para agendar uma demonstração personalizada da WebBotss.
                </CardDescription>
              </motion.div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div variants={itemVariants} className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    placeholder="Seu nome completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="border-input/60"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-input/60"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp</Label>
                  <Input
                    id="whatsapp"
                    placeholder="(00) 00000-0000"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    required
                    className="border-input/60"
                  />
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-2">
                  <Label htmlFor="needs">Necessidades</Label>
                  <Textarea
                    id="needs"
                    placeholder="Conte-nos sobre suas necessidades e como podemos ajudar"
                    value={needs}
                    onChange={(e) => setNeeds(e.target.value)}
                    rows={4}
                    required
                    className="border-input/60"
                  />
                </motion.div>
              </form>
            </CardContent>
            <CardFooter>
              <motion.div variants={itemVariants} className="w-full">
                <Button type="submit" className="w-full" disabled={isSubmitting} onClick={handleSubmit} size="lg">
                  {isSubmitting ? "Enviando..." : "Solicitar Demonstração"}
                </Button>
              </motion.div>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

