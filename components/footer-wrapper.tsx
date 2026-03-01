"use client"

import { LanguageProvider } from "./language-provider"
import Footer from "./footer"

export default function FooterWrapper() {
  return (
    <LanguageProvider>
      <Footer />
    </LanguageProvider>
  )
}

