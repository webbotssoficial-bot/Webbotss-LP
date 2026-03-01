"use client"

import { LanguageProvider } from "./language-provider"
import Navbar from "./navbar"

export default function NavbarWrapper() {
  return (
    <LanguageProvider>
      <Navbar />
    </LanguageProvider>
  )
}

