import type React from "react"
import { Inter, Sofia_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Toaster } from "@/components/ui/toaster"
import ChatBubble from "@/components/chat/chat-bubble"

const inter = Inter({ subsets: ["latin"] })
const sofiaSans = Sofia_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-sofia-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://webbotss.com.br"),
  title: "WebBotss - Automatize seu Negócio",
  description: "Soluções de automação inteligente para impulsionar seu negócio",
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LogoWebbotss-XWROTsndNv0KasIz8vqMgkalL6eGgg.png",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LogoWebbotss-XWROTsndNv0KasIz8vqMgkalL6eGgg.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LogoWebbotss-XWROTsndNv0KasIz8vqMgkalL6eGgg.png",
        type: "image/png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LogoWebbotss-XWROTsndNv0KasIz8vqMgkalL6eGgg.png"
        />
      </head>
      <body className={`${inter.className} ${sofiaSans.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
          <ChatBubble />
        </ThemeProvider>
      </body>
    </html>
  )
}
