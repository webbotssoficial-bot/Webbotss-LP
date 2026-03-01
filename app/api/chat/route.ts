import { type NextRequest, NextResponse } from "next/server"

// Tipos para as mensagens e respostas
interface ChatRequest {
  message: string
  sessionId?: string
  cliente: string
  identificador: string
}

interface TypebotMessage {
  id: string
  type: string
  content: {
    type: string
    richText?: any
    text?: string
  }
}

interface TypebotInput {
  id: string
  type: string
  options: any
}

interface TypebotResponse {
  sessionId: string
  messages: TypebotMessage[]
  input?: TypebotInput
  resultId?: string
  dynamicTheme?: any
  logs?: any[]
  clientSideActions?: any[]
  progress?: number
}

interface ChatResponse {
  message: string
  sessionId: string
  input?: any
}

export async function POST(request: NextRequest) {
  try {
    const body: ChatRequest = await request.json()
    const { message, sessionId, cliente, identificador } = body

    console.log("Recebida requisição de chat:", { message, sessionId, cliente, identificador })

    let respostaTypebot: ChatResponse;
    let sessionIdFinal = sessionId; // Variável para armazenar o sessionId final

    // Se já existir uma sessão, continua o chat com a mensagem
    if (sessionId) {
      console.log("Continuando chat com sessionId existente:", sessionId)
      respostaTypebot = await continuarChat(sessionId, message)
      sessionIdFinal = sessionId; // Mantém o sessionId existente
    } else {
      // Caso não exista sessão, cria a sessão e logo depois continua o chat
      console.log("Iniciando novo chat e criando sessão")
      const sessionResponse = await criarSessao(message, cliente, identificador)

      // Verifica se a sessão foi criada com sucesso
      if (sessionResponse.sessionId) {
        console.log("Sessão criada com sucesso, continuando chat para obter resposta")
        sessionIdFinal = sessionResponse.sessionId; // Armazena o novo sessionId
        respostaTypebot = await continuarChat(sessionResponse.sessionId, message)
      } else {
        // Se não foi possível criar a sessão, retorna o erro obtido
        respostaTypebot = sessionResponse
        sessionIdFinal = ""; // SessionId vazio em caso de erro
      }
    }

    // Capturar IP do cliente (considerando proxies e CDNs)
    const forwardedFor = request.headers.get('x-forwarded-for')
    const realIp = request.headers.get('x-real-ip')
    const cfConnectingIp = request.headers.get('cf-connecting-ip') // Cloudflare
    const clientIp = cfConnectingIp || realIp || (forwardedFor ? forwardedFor.split(',')[0].trim() : null) || 'unknown'

    // Enviar dados para o webhook N8N APÓS processar a mensagem
    const webhookResponse = await enviarParaWebhook({
      message,
      sessionId: sessionIdFinal,
      cliente,
      identificador,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || 'unknown',
      ip: clientIp
    })

    // Se o webhook retornou uma resposta, usar ela como resposta do bot
    if (webhookResponse && webhookResponse.output) {
      console.log("Usando resposta do webhook:", webhookResponse.output)
      return NextResponse.json({
        message: webhookResponse.output,
        sessionId: sessionIdFinal,
        input: respostaTypebot.input
      })
    }

    return NextResponse.json(respostaTypebot)
  } catch (error) {
    console.error("Erro ao processar requisição de chat:", error)
    return NextResponse.json(
      {
        error: "Erro ao processar a mensagem",
        message: "Desculpe, ocorreu um erro. Por favor, tente novamente.",
        sessionId: "",
      },
      { status: 500 }
    )
  }
}

// Função para criar uma nova sessão no Typebot
async function criarSessao(message: string, cliente: string, identificador: string): Promise<ChatResponse> {
  try {
    const typebotUrl = process.env.NEXT_PUBLIC_TYPEBOT_URL || "https://bot.webbotss.com.br"
    const typebotId = "chatbot-webbotss-landing-page-to8gps5"
    const url = `${typebotUrl}/api/v1/typebots/${typebotId}/startChat`

    console.log(`Criando sessão no Typebot: ${url}`)

    const requestBody = {
      message: {
        type: "text",
        text: message,
      },
      resultId: identificador,
      isStreamEnabled: false,
      prefilledVariables: {
        number: cliente.replace(/\D/g, ""),
        pushName: cliente,
      },
      textBubbleContentFormat: "richText",
    }

    console.log("Corpo da requisição startChat:", JSON.stringify(requestBody, null, 2))

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })

    if (!response.ok) {
      console.error(`Erro ao criar sessão: ${response.status} ${response.statusText}`)
      const errorText = await response.text()
      console.error(`Resposta de erro: ${errorText}`)
      throw new Error(`Erro ao criar sessão: ${response.statusText}`)
    }

    const data: TypebotResponse = await response.json()
    console.log("Resposta do Typebot (criarSessao):", data)

    // Verificar se recebemos um sessionId
    if (!data.sessionId) {
      console.error("Resposta não contém sessionId:", data)
      throw new Error("Resposta não contém sessionId")
    }

    // Retornamos apenas o sessionId, sem mensagem ainda
    return {
      message: "",
      sessionId: data.sessionId,
      input: data.input,
    }
  } catch (error) {
    console.error("Erro ao criar sessão com Typebot:", error)
    return {
      message: "Erro ao conectar com o assistente. Por favor, tente novamente.",
      sessionId: "",
    }
  }
}

// Função para continuar um chat existente
async function continuarChat(sessionId: string, message: string): Promise<ChatResponse> {
  try {
    const typebotUrl = process.env.NEXT_PUBLIC_TYPEBOT_URL || "https://bot.webbotss.com.br"
    const url = `${typebotUrl}/api/v1/sessions/${sessionId}/continueChat`

    console.log(`Continuando chat com Typebot: ${url}`)

    // Se não houver mensagem, enviamos apenas o formato do texto
    const requestBody = message.trim()
      ? {
          message: {
            type: "text",
            text: message,
          },
          textBubbleContentFormat: "richText",
        }
      : {
          textBubbleContentFormat: "richText",
        }

    console.log("Corpo da requisição continueChat:", JSON.stringify(requestBody, null, 2))

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
    console.log(response)

    if (!response.ok) {
      console.error(`Erro ao continuar chat: ${response.status} ${response.statusText}`)
      const errorText = await response.text()
      console.error(`Resposta de erro: ${errorText}`)

      // Se o erro for 404, a sessão pode ter expirado
      if (response.status === 404) {
        console.log("Sessão expirada ou não encontrada (404). Será necessário iniciar uma nova sessão.")
        return {
          message: "Sua sessão expirou. Por favor, envie uma nova mensagem para continuar.",
          sessionId: "", // Retorna sessionId vazio para forçar uma nova sessão
        }
      }

      throw new Error(`Erro ao continuar chat: ${response.statusText}`)
    }

    const data: TypebotResponse = await response.json()
    console.log("Resposta do Typebot (continuarChat):", data)

    // Extrair a mensagem de texto da resposta
    let botMessage = ""
    if (data.messages && data.messages.length > 0) {
      botMessage = extrairTextoMensagens(data.messages)
    }

    return {
      message: botMessage,
      sessionId: sessionId,
      input: data.input,
    }
  } catch (error) {
    console.error("Erro ao continuar chat com Typebot:", error)
    return {
      message: "Erro na comunicação. Por favor, envie sua mensagem novamente.",
      sessionId: "", // Retorna sessionId vazio para forçar uma nova sessão
    }
  }
}

// Função para extrair texto das mensagens
function extrairTextoMensagens(messages: TypebotMessage[]): string {
  let texto = ""

  console.log("Processando mensagens:", JSON.stringify(messages, null, 2))

  for (const message of messages) {
    if (message.type === "text") {
      if (message.content) {
        if (message.content.type === "richText" && message.content.richText) {
          texto += processarRichText(message.content.richText)
        } else if (message.content.text) {
          texto += message.content.text
        }
      }
      texto += "\n"
    }
  }

  return texto.trim()
}

// Função para processar richText e extrair texto
function processarRichText(richText: any[]): string {
  if (!Array.isArray(richText)) {
    console.warn("richText não é um array:", richText)
    return ""
  }

  let texto = ""

  function extrairTexto(elemento: any): string {
    if (!elemento) return ""

    let textoElemento = ""

    if (elemento.text) {
      textoElemento += elemento.text + " "
    }

    if (elemento.children && Array.isArray(elemento.children)) {
      for (const child of elemento.children) {
        textoElemento += extrairTexto(child)
      }
    }

    return textoElemento
  }

  for (const bloco of richText) {
    texto += extrairTexto(bloco) + "\n"
  }

  return texto.trim()
}

// Função para enviar dados para o webhook N8N
async function enviarParaWebhook(data: {
  message: string
  sessionId?: string
  cliente: string
  identificador: string
  timestamp: string
  userAgent: string
  ip: string
}): Promise<any> {
  try {
    const webhookUrl = process.env.N8N_WEBHOOK_URL
    
    if (!webhookUrl) {
      console.error("N8N_WEBHOOK_URL não configurada no .env")
      return null
    }
    
    console.log("URL do webhook sendo usada:", webhookUrl)
    console.log("Enviando dados para webhook N8N:", data)
    
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        source: "webbotss-landing-page",
        type: "chat_message"
      }),
    })

    if (!response.ok) {
      console.error(`Erro ao enviar para webhook: ${response.status} ${response.statusText}`)
      return null
    } else {
      console.log("Dados enviados para webhook N8N com sucesso")
      
      // Tentar obter a resposta do webhook
      try {
        const responseData = await response.json()
        console.log("Resposta do webhook:", responseData)
        return responseData
      } catch (parseError) {
        console.log("Webhook não retornou JSON válido, continuando com resposta padrão")
        return null
      }
    }
  } catch (error) {
    console.error("Erro ao enviar para webhook N8N:", error)
    // Não falha a requisição principal se o webhook falhar
    return null
  }
}

