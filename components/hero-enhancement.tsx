"use client"

import { useEffect, useRef } from "react"
import { useAnimation, useInView } from "framer-motion"
import { useTranslation } from "./language-provider"

export default function HeroEnhancement() {
  const { t } = useTranslation()
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  // Removendo todos os efeitos de partículas e gradientes
  return null
}

