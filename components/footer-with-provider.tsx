"use client"

import { LanguageProvider } from "./language-provider"
import Footer from "./footer"

export default function FooterWithProvider() {
  return (
    <LanguageProvider>
      <Footer />
    </LanguageProvider>
  )
}

