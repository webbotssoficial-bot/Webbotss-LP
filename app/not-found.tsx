import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Bot, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-secondary/5 to-background p-4">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* Animated Robot Icon */}
        <div className="relative">
          <div className="inline-block p-6 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg animate-bounce">
            <Bot className="w-20 h-20 text-white" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-ping"></div>
        </div>

        {/* Error Code */}
        <div className="space-y-2">
          <h1 className="text-8xl font-bold font-sofia-sans bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            404
          </h1>
          <p className="text-2xl font-semibold text-foreground">
            Oops! Página não encontrada
          </p>
        </div>

        {/* Description */}
        <div className="space-y-4">
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            Parece que nossos bots ainda não automatizaram esta página. 
            A página que você procura não existe ou foi movida.
          </p>
          
          {/* Fun message */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-sm text-primary font-medium">
              💡 Dica: Nossos bots estão trabalhando 24/7 para melhorar sua experiência!
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="min-w-[160px] font-semibold">
            <Link href="/" className="flex items-center gap-2">
              <Home className="w-5 h-5" />
              Voltar ao Início
            </Link>
          </Button>
          
          <Button variant="outline" asChild size="lg" className="min-w-[160px] font-semibold">
            <Link href="javascript:history.back()" className="flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              Página Anterior
            </Link>
          </Button>
        </div>

        {/* Additional Help */}
        <div className="pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-4">
            Precisa de ajuda? Entre em contato conosco:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link 
              href="/contato" 
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              📞 Contato
            </Link>
            <Link 
              href="/faq" 
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              ❓ FAQ
            </Link>
            <Link 
              href="/demo" 
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              🤖 Demonstração
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
