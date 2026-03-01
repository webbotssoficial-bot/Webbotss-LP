"use client"

import { LanguageProvider } from "./language-provider"
import Hero from "./hero"

export default function HeroWithProvider() {
  return (
    <LanguageProvider>
      <Hero />
    </LanguageProvider>
  )
}

