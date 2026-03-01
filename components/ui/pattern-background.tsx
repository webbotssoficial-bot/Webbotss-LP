"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface PatternBackgroundProps {
  className?: string
  density?: "light" | "medium" | "dense"
  invert?: boolean
}

export function PatternBackground({ className = "", density = "medium", invert = false }: PatternBackgroundProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"
  const patternColor = isDark
    ? invert
      ? "rgba(255, 255, 255, 0.03)"
      : "rgba(2, 195, 154, 0.05)"
    : invert
      ? "rgba(0, 0, 0, 0.03)"
      : "rgba(2, 195, 154, 0.05)"

  const dotSize = 1
  const dotSpacing = density === "light" ? 30 : density === "medium" ? 20 : 15

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `radial-gradient(${patternColor} ${dotSize}px, transparent 0)`,
        backgroundSize: `${dotSpacing}px ${dotSpacing}px`,
        backgroundPosition: "0 0",
        zIndex: 0,
      }}
    />
  )
}

