"use client"

import { LanguageProvider } from "./language-provider"
import Features from "./features"

export default function FeaturesWithProvider() {
  return (
    <LanguageProvider>
      <Features />
    </LanguageProvider>
  )
}

