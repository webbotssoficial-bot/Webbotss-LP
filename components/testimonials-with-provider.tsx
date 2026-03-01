"use client"

import { LanguageProvider } from "./language-provider"
import Testimonials from "./testimonials"

export default function TestimonialsWithProvider() {
  return (
    <LanguageProvider>
      <Testimonials />
    </LanguageProvider>
  )
}

