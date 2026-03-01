"use client"

import { LanguageProvider } from "./language-provider"
import About from "./about"

export default function AboutWithProvider() {
  return (
    <LanguageProvider>
      <About />
    </LanguageProvider>
  )
}

