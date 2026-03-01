"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { X, Send, Loader2, RefreshCw } from "lucide-react"
import Image from "next/image"
import robotHead from "../../public/RobotWebbotssHead.png"
import { cn } from "@/lib/utils"
import { useChatSession } from "@/hooks/use-chat-session"
import TypingAnimation from "./typing-animation"

export default function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [showBubbleMessage, setShowBubbleMessage] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const { messages, isLoading, sendMessage, clearChat } = useChatSession()

  // Simular o delay para mostrar a mensagem de preview
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowBubbleMessage(true)
      }
    }, 5000) // 5 segundos

    return () => clearTimeout(timer)
  }, [isOpen])

  // Remover a mensagem automática inicial

  // Remover este useEffect que envia uma mensagem automática
  // useEffect(() => {
  //   if (isOpen && messages.length === 0) {
  //     // Enviar uma mensagem inicial para iniciar a conversa
  //     sendMessage("Olá");
  //   }
  // }, [isOpen, messages.length, sendMessage]);

  // Rolar para a última mensagem
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  // Focar no input quando o chat é aberto
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const toggleChat = () => {
    setIsOpen(!isOpen)
    setShowBubbleMessage(false)
  }

  const handleSendMessage = async () => {
    if (inputValue.trim() === "" || isLoading) return

    await sendMessage(inputValue)
    setInputValue("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Botão do chat */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={toggleChat}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
           className="relative flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground shadow-2xl hover:shadow-primary/25 transition-all duration-300 ring-4 ring-white/20"
          aria-label={isOpen ? "Fechar chat" : "Abrir chat"}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="robot"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={robotHead || "/placeholder.svg"}
                  alt="WebBotss Chat"
                  width={44}
                  height={44}
                  className="rounded-full ring-2 ring-white/30"
                />
              </motion.div>
            )}
          </AnimatePresence>

           {!isOpen && (
             <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
           )}
        </motion.button>

         <AnimatePresence>
           {showBubbleMessage && !isOpen && (
             <motion.div
               initial={{ opacity: 0, y: 10, scale: 0.9 }}
               animate={{ opacity: 1, y: 0, scale: 1 }}
               exit={{ opacity: 0, y: 10, scale: 0.9 }}
               className="absolute bottom-20 right-0 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-2xl max-w-[320px] text-sm border border-emerald-100 dark:border-gray-700"
             >
               <button
                 onClick={() => setShowBubbleMessage(false)}
                 className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                 aria-label="Fechar mensagem"
               >
                 <X size={14} />
               </button>
                <div className="flex items-center gap-2 pr-6">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <p className="text-gray-700 dark:text-gray-200 font-medium whitespace-nowrap">Você precisa de ajuda?</p>
                </div>
               <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Clique para conversar comigo!</p>
             </motion.div>
           )}
         </AnimatePresence>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-6 w-[380px] max-w-[calc(100vw-2rem)] h-[520px] max-h-[calc(100vh-10rem)] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden z-50 flex flex-col backdrop-blur-sm"
          >
             <div className="p-5 border-b border-gray-200 dark:border-gray-700 bg-primary text-primary-foreground">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Image
                      src={robotHead || "/placeholder.svg"}
                      alt="WebBotss"
                      width={44}
                      height={44}
                      className="rounded-full ring-2 ring-white/30"
                    />
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">WebBotss</h3>
                    <p className="text-xs text-white/80">Assistente Virtual</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={clearChat}
                    className="text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all"
                    aria-label="Reiniciar chat"
                    title="Reiniciar conversa"
                  >
                    <RefreshCw size={18} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleChat}
                    className="text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all"
                    aria-label="Fechar chat"
                  >
                    <X size={20} />
                  </motion.button>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-800/50 dark:to-gray-900">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={cn("flex", message.isBot ? "justify-start" : "justify-end")}
                >
                  <div
                    className={cn(
                      "max-w-[85%] rounded-2xl p-4 shadow-sm",
                       message.isBot
                         ? "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700"
                         : "bg-primary text-primary-foreground",
                    )}
                  >
                    {message.isBot ? (
                      <TypingAnimation 
                        text={message.content} 
                        speed={30}
                      />
                    ) : (
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                    )}
                    <span className="text-xs opacity-70 mt-2 block text-right">
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 max-w-[85%] rounded-2xl p-4 shadow-sm">
                     <div className="flex items-center gap-3">
                       <div className="flex space-x-1">
                         <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                         <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                         <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                       </div>
                       <span className="text-sm text-gray-600 dark:text-gray-300">Digitando...</span>
                     </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <div className="flex items-center gap-3">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Digite sua mensagem..."
                   className="flex-1 p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  disabled={inputValue.trim() === "" || isLoading}
                   className="p-3 rounded-xl bg-primary text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-primary/25 transition-all"
                  aria-label="Enviar mensagem"
                >
                  <Send size={18} />
                </motion.button>
              </div>
              <div className="mt-3 text-center">
                 <span className="text-xs text-gray-500 dark:text-gray-400">
                   Powered by <span className="font-semibold text-primary">WebBotss</span>
                 </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
