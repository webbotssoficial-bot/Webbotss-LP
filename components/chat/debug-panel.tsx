"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X } from "lucide-react"

interface DebugPanelProps {
  sessionId: string | null
  messages: any[]
  currentInput?: any
  onClose: () => void
}

export default function DebugPanel({ sessionId, messages, currentInput, onClose }: DebugPanelProps) {
  const [expanded, setExpanded] = useState(false)
  const typebotSlug = "chatbot-webbotss-landing-page-to8gps5"
  const TYPEBOT_URL = process.env.NEXT_PUBLIC_TYPEBOT_URL || "https://bot.webbotss.com.br"

  return (
    <Card className="fixed bottom-24 left-6 w-[350px] max-w-[calc(100vw-2rem)] bg-background border border-border shadow-lg z-50">
      <CardHeader className="p-3 flex flex-row items-center justify-between bg-muted">
        <CardTitle className="text-sm font-medium">Debug: Chat Session</CardTitle>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="p-3 text-xs space-y-2 max-h-[300px] overflow-auto">
        <div>
          <strong>Session ID:</strong> {sessionId || "No active session"}
        </div>
        <div>
          <strong>Messages:</strong> {messages.length}
        </div>

        {currentInput && (
          <div className="pt-2 border-t mt-2">
            <strong>Current Input:</strong>
            <pre className="bg-muted p-2 rounded overflow-auto max-h-[100px] whitespace-pre-wrap mt-1">
              {JSON.stringify(currentInput, null, 2)}
            </pre>
          </div>
        )}

        {expanded && (
          <pre className="bg-muted p-2 rounded overflow-auto max-h-[200px] whitespace-pre-wrap">
            {JSON.stringify(messages, null, 2)}
          </pre>
        )}
        <Button variant="outline" size="sm" className="w-full text-xs" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Hide Details" : "Show Details"}
        </Button>

        <div className="pt-2 border-t mt-2">
          <strong>API Endpoints:</strong>
          <div className="mt-1 text-xs">
            <div>
              <code>POST /api/v1/typebots/{typebotSlug}/startChat</code> - Iniciar chat
            </div>
            <div>
              <code>POST /api/v1/sessions/{sessionId}/continueChat</code> - Continuar chat
            </div>
          </div>
        </div>

        <div className="pt-2 border-t mt-2">
          <strong>Typebot Config:</strong>
          <div className="mt-1">
            <div>
              URL: <code>{TYPEBOT_URL}</code>
            </div>
            <div>
              Slug: <code>{typebotSlug}</code>
            </div>
          </div>
        </div>

        <div className="pt-2 border-t mt-2">
          <strong>Resposta Typebot:</strong>
          <div className="mt-1 text-xs">
            <p>A resposta do Typebot inclui:</p>
            <ul className="list-disc pl-4 mt-1 space-y-1">
              <li>sessionId - ID único da sessão</li>
              <li>messages - Mensagens do bot</li>
              <li>input - Próximo input esperado</li>
              <li>clientSideActions - Ações para o cliente</li>
              <li>dynamicTheme - Configurações de tema</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

