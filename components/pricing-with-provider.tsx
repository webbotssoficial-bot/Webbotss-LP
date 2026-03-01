"use client"

import { LanguageProvider } from "./language-provider"
import Pricing from "./pricing"

export default function PricingWithProvider() {
  return (
    <LanguageProvider>
      <Pricing />
    </LanguageProvider>
  )
}

