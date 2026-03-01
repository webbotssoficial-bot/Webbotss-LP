"use client"

import { LanguageProvider } from "./language-provider"
import Cta from "./cta"

export default function CtaWithProvider() {
  return (
    <LanguageProvider>
      <Cta />
    </LanguageProvider>
  )
}

