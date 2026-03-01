"use client"

import { LanguageProvider } from "./language-provider"
import Stats from "./stats"

export default function StatsWithProvider() {
  return (
    <LanguageProvider>
      <Stats />
    </LanguageProvider>
  )
}

