"use client";

import React, { useState, useEffect, FormEvent } from "react";

export default function TypebotChat() {
  // Substitua pelos valores do seu projeto:
  const TYPEBOT_API_KEY = "4VQ9Boc0KkWz2HZgrrTXXjti";
  const FLOW_ID = "chatbot-webbotss-landing-page-to8gps5"; 

  // Armazena o ID e token da sessão do chat
  const [chatSessionId, setChatSessionId] = useState<string | null>(null);
  const [chatToken, setChatToken] = useState<string | null>(null);

  // Armazena o histórico de mensagens (bot e usuário)
  const [messages, setMessages] = useState<
    { sender: "bot" | "user"; text: string }[]
  >([]);

  // Campo de input do usuário
  const [userInput, setUserInput] = useState("");

  // 1. Ao montar o componente, iniciamos o chat automaticamente
  useEffect(() => {
    startChat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  async function startChat() {
    try {
      const res = await fetch(
        `https://bot.webbotss.com.br/v1/chats/${FLOW_ID}/start`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${TYPEBOT_API_KEY}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error(`Erro ao iniciar chat: ${res.status}`);
      }

      const data = await res.json();
      // Armazena dados da sessão
      setChatSessionId(data.chatSessionId);
      setChatToken(data.chatToken);

      // Se a API retornar a primeira mensagem, adicionamos ao histórico
      if (data.messages && Array.isArray(data.messages)) {
        const botMessages = data.messages.map((m: any) => ({
          sender: "bot" as const,
          text: m.text || "",
        }));
        setMessages((prev) => [...prev, ...botMessages]);
      }
    } catch (error: any) {
      console.error("Erro ao iniciar chat:", error);
    }
  }

  /**
   * Envia uma mensagem do usuário e recebe a resposta do bot.
   */
  async function sendMessageToBot(userText: string) {
    if (!chatSessionId || !chatToken) {
      console.error("Sessão de chat não iniciada ou token ausente.");
      return;
    }

    // Adiciona a mensagem do usuário ao histórico
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);

    try {
      // POST /v1/chats/{chatSessionId}/next
      const res = await fetch(
        `https://bot.webbotss.com.br/v1/chats/${chatSessionId}/next`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${TYPEBOT_API_KEY}`,
          },
          body: JSON.stringify({ text: userText }),
        }
      );

      if (!res.ok) {
        throw new Error(`Erro ao enviar mensagem: ${res.status}`);
      }

      const data = await res.json();

      // Se vierem mensagens de resposta, adicionamos ao histórico
      if (data.messages && Array.isArray(data.messages)) {
        const botMessages = data.messages.map((m: any) => ({
          sender: "bot" as const,
          text: m.text || "",
        }));
        setMessages((prev) => [...prev, ...botMessages]);
      }
    } catch (error: any) {
      console.error("Erro ao enviar mensagem:", error);
    }
  }

  /**
   * Lida com o envio do formulário (mensagem do usuário).
   */
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (userInput.trim() === "") return;
    sendMessageToBot(userInput.trim());
    setUserInput("");
  }

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "0 auto",
        padding: "1rem",
        background: "#f5f5f5",
        borderRadius: 8,
      }}
    >
      <h2>Chat Typebot (Exemplo)</h2>

    
      <div
        style={{
          border: "1px solid #ccc",
          padding: "1rem",
          marginBottom: "1rem",
          height: "300px",
          overflowY: "auto",
          background: "#fff",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              margin: "0.5rem 0",
              textAlign: msg.sender === "user" ? "right" : "left",
            }}
          >
            <strong>{msg.sender === "user" ? "Você" : "Bot"}: </strong>
            <span>{msg.text}</span>
          </div>
        ))}
      </div>

      {/* Formulário para enviar mensagem */}
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0.5rem" }}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          style={{ flex: 1, padding: "0.5rem" }}
          placeholder="Digite sua mensagem..."
        />
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          Enviar
        </button>
      </form>
    </div>
  );
}
