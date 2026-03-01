"use client"

import { useRef } from "react"
import { MessageSquare, Bot } from "lucide-react"

import { AnimatedBeam } from "../components/magicui/animated-beam"

export default function SimpleConnectionDemo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sourceRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef}
      className="relative flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-10 shadow-md"
    >
      <div className="flex w-full max-w-md justify-between">
        {/* Primeiro nó */}
        <div className="flex flex-col items-center gap-2">
          <div
            ref={sourceRef}
            className="z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
          >
            <MessageSquare className="h-8 w-8 text-green-500" />
          </div>
          <span className="font-medium">WhatsApp</span>
        </div>

        {/* Segundo nó */}
        <div className="flex flex-col items-center gap-2">
          <div
            ref={targetRef}
            className="z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]"
          >
            <Bot className="h-8 w-8 text-blue-500" />
          </div>
          <span className="font-medium">IA</span>
        </div>
      </div>

      {/* Animação de conexão */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={sourceRef}
        toRef={targetRef}
        curvature={-30}
        gradientStartColor="#10b981" // verde
        gradientStopColor="#3b82f6" // azul
        pathWidth={3}
      />
    </div>
  )
}
