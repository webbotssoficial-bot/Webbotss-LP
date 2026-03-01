"use client"

import { useState, useEffect, useCallback } from "react"

interface UseChatSessionProps {
  clientId?: string
}

interface Message {
  id: string
  content: string
  isBot: boolean
  timestamp: Date
}

export function useChatSession({ clientId = "website_visitor" }: UseChatSessionProps = {}) {
  const [messages, setMessages] = useState<Message[]>([])
  const [sessionId, setSessionId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [currentInput, setCurrentInput] = useState<any>(null)

  // Gerar um identificador único para o usuário
  const [userId] = useState(() => {
    // Verificar se já existe um ID no localStorage
    if (typeof window === "undefined") return "temp_user_id"

    const storedId = localStorage.getItem("chat_user_id")
    if (storedId) return storedId

    // Gerar novo ID
    const newId = `user_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
    localStorage.setItem("chat_user_id", newId)
    return newId
  })

  // Carregar mensagens anteriores e sessionId do localStorage
  useEffect(() => {
    if (typeof window === "undefined") return

    const storedMessages = localStorage.getItem("chat_messages")
    const storedSessionId = localStorage.getItem("chat_session_id")

    if (storedMessages) {
      try {
        const parsedMessages = JSON.parse(storedMessages)
        // Converter strings de data para objetos Date
        const messagesWithDates = parsedMessages.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp),
        }))
        setMessages(messagesWithDates)
      } catch (e) {
        console.error("Erro ao carregar mensagens:", e)
        // Se houver erro, limpar o localStorage
        localStorage.removeItem("chat_messages")
      }
    }

    if (storedSessionId) {
      console.log("Carregando sessionId do localStorage:", storedSessionId)
      setSessionId(storedSessionId)
    }
  }, [])

  // Salvar mensagens no localStorage quando atualizadas
  useEffect(() => {
    if (typeof window === "undefined" || messages.length === 0) return
    localStorage.setItem("chat_messages", JSON.stringify(messages))
  }, [messages])

  // Salvar sessionId no localStorage quando atualizado
  useEffect(() => {
    if (typeof window === "undefined") return

    if (sessionId) {
      console.log("Salvando sessionId no localStorage:", sessionId)
      localStorage.setItem("chat_session_id", sessionId)
    } else {
      localStorage.removeItem("chat_session_id")
    }
  }, [sessionId])

  const sendMessage = useCallback(
    async (content: string) => {
      if (content.trim() === "" || isLoading) return

      // Adicionar mensagem do usuário IMEDIATAMENTE
      const userMessage: Message = {
        id: Date.now().toString(),
        content,
        isBot: false,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, userMessage])
      setIsLoading(true)
      setError(null)

      try {
        console.log("Enviando mensagem para API:", {
          message: content,
          sessionId,
          cliente: clientId,
          identificador: userId,
        })

        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: content,
            sessionId,
            cliente: clientId,
            identificador: userId,
          }),
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || "Erro na comunicação com o servidor")
        }

        const data = await response.json()
        console.log("Resposta da API:", data)

        // Salvar o sessionId imediatamente após recebê-lo
        if (data.sessionId && (!sessionId || sessionId !== data.sessionId)) {
          console.log("Salvando novo sessionId:", data.sessionId)
          setSessionId(data.sessionId)
        } else if (data.sessionId === "") {
          console.log("Sessão expirada, limpando sessionId")
          setSessionId(null)
        }

        // Atualizar o input atual se existir
        if (data.input) {
          setCurrentInput(data.input)
        }

        // Só adicionar resposta do bot se houver uma mensagem
        if (data.message && data.message.trim() !== "") {
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            content: data.message,
            isBot: true,
            timestamp: new Date(),
          }

          setMessages((prev) => [...prev, botMessage])
        }
      } catch (err) {
        console.error("Erro ao enviar mensagem:", err)
        setError(err instanceof Error ? err.message : "Erro desconhecido")

        // Se o erro for relacionado à sessão, limpar o sessionId
        if (err instanceof Error && (err.message.includes("sessão") || err.message.includes("session"))) {
          console.log("Limpando sessionId devido a erro de sessão")
          setSessionId(null)
        }
      } finally {
        setIsLoading(false)
      }
    },
    [clientId, isLoading, sessionId, userId],
  )

  const clearChat = useCallback(() => {
    setMessages([])
    setSessionId(null)
    setError(null)
    setCurrentInput(null)
    if (typeof window !== "undefined") {
      localStorage.removeItem("chat_messages")
      localStorage.removeItem("chat_session_id")
    }
  }, [])

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearChat,
    userId,
    sessionId,
    currentInput,
  }
}

