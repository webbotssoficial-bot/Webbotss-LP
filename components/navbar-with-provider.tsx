"use client"

import { LanguageProvider } from "./language-provider"
import Navbar from "./navbar"

export default function NavbarWithProvider() {
  return (
    <LanguageProvider>
      <Navbar />
    </LanguageProvider>
  )
}

