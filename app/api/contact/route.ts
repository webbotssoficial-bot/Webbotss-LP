import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { source, name, email, whatsapp, message, needs } = body || {}

    if (!name || !email) {
      return NextResponse.json({ error: "Dados inválidos" }, { status: 400 })
    }

    // Validar formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "E-mail inválido" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    const now = new Date()
    const dateTime = now.toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })

    const subject = source === "contato" ? "🤖 Novo contato - Fale com um Especialista" : "🚀 Nova solicitação de Demo"

    const html = `
 <!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  </style>
</head>
<body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #374151; margin: 0; padding: 20px; background: #f8fafc;">
  
  <!-- Email Container -->
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); overflow: hidden;">
    
    <!-- Simplified header with clean design -->
    <div style="background: linear-gradient(135deg, #10b981 0%, #0c4a6e 100%); padding: 24px; text-align: center;">
      <!-- Updated logo to use the real WebBotss logo URL -->
      <img src="https://webbotss.com.br/_next/static/media/logowebbotss.0bfea86b.png" alt="WebBotss" style="height: 80px; margin-bottom: 8px;">
      <h1 style="color: #ffffff; margin: 0 0 8px 0; font-size: 24px; font-weight: 700;">
        ${source === "contato" ? "Novo Contato Recebido" : "Nova Solicitação de Demo"}
      </h1>
      <p style="color: rgba(255, 255, 255, 0.9); margin: 0; font-size: 14px;">
        ${dateTime}
      </p>
    </div>
    
    <!-- Simplified content area with reduced padding -->
    <div style="padding: 24px;">
      
      <!-- Simple source badge -->
      <div style="margin-bottom: 24px; text-align: center;">
        <span style="background: #10b981; color: white; padding: 6px 16px; border-radius: 20px; font-weight: 600; font-size: 12px; text-transform: uppercase;">
          ${source === "contato" ? "CONTATO" : "DEMO"}
        </span>
      </div>

      <!-- Clean client information section -->
      <div style="margin-bottom: 24px;">
        <h2 style="color: #111827; margin: 0 0 16px 0; font-size: 18px; font-weight: 600; border-left: 3px solid #10b981; padding-left: 12px;">
          Informações do Cliente
        </h2>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0;">
          <div style="margin-bottom: 12px;">
            <strong style="color: #6b7280; font-size: 12px; text-transform: uppercase; display: block; margin-bottom: 4px;">Nome</strong>
            <span style="color: #111827; font-weight: 600;">${name}</span>
          </div>
          
          <div style="margin-bottom: 12px;">
            <strong style="color: #6b7280; font-size: 12px; text-transform: uppercase; display: block; margin-bottom: 4px;">Email</strong>
            <a href="mailto:${email}" style="color: #10b981; text-decoration: none; font-weight: 600;">${email}</a>
          </div>
          
          ${whatsapp ? `
          <div>
            <strong style="color: #6b7280; font-size: 12px; text-transform: uppercase; display: block; margin-bottom: 4px;">WhatsApp</strong>
            <a href="https://wa.me/${whatsapp.replace(/\D/g, '')}" style="color: #10b981; text-decoration: none; font-weight: 600;">${whatsapp}</a>
          </div>
          ` : ""}
        </div>
      </div>

      ${message ? `
      <!-- Simplified message section -->
      <div style="margin-bottom: 24px;">
        <h2 style="color: #111827; margin: 0 0 16px 0; font-size: 18px; font-weight: 600; border-left: 3px solid #10b981; padding-left: 12px;">
          Mensagem
        </h2>
        <div style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; border-left: 3px solid #10b981;">
          <p style="color: #374151; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
      </div>
      ` : ""}

      ${needs ? `
      <!-- Simplified needs section -->
      <div style="margin-bottom: 24px;">
        <h2 style="color: #111827; margin: 0 0 16px 0; font-size: 18px; font-weight: 600; border-left: 3px solid #10b981; padding-left: 12px;">
          Necessidades
        </h2>
        <div style="background: #ffffff; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; border-left: 3px solid #10b981;">
          <p style="color: #374151; margin: 0; line-height: 1.6; white-space: pre-wrap;">${needs}</p>
        </div>
      </div>
      ` : ""}

      <!-- Simple CTA button -->
      <div style="text-align: center; margin-bottom: 24px;">
        <a href="mailto:${email}" style="display: inline-block; background: #10b981; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px;">
          ${source === "contato" ? "Entrar em Contato" : "Agendar Demo"}
        </a>
      </div>
    </div>
    
    <!-- Clean footer -->
    <div style="background: #f8fafc; padding: 16px; text-align: center; border-top: 1px solid #e2e8f0;">
      <div style="color: #10b981; font-weight: 600; font-size: 14px; margin-bottom: 4px;">WebBotss</div>
      <p style="color: #6b7280; font-size: 12px; margin: 0;">Sistema automático de notificações</p>
    </div>
  </div>
  
</body>
</html>


    `

    // E-mail para a WebBotss
    await transporter.sendMail({
      from: `WebBotss <${process.env.SMTP_USERNAME}>`,
      to: process.env.SMTP_USERNAME,
      subject,
      html,
    })

    // Enviar webhook para n8n
    try {
      const webhookData = {
        source,
        name,
        email,
        whatsapp: whatsapp || null,
        message: message || null,
        needs: needs || null,
        timestamp: new Date().toISOString(),
        dateTime,
        subject
      }

      console.log("Enviando webhook para n8n:", webhookData)

      const webhookResponse = await fetch('https://n8n-n8n.kt46lx.easypanel.host/webhook/4f92fc45-cb3f-4ba2-aecc-dab8fe33881a', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      })

      if (webhookResponse.ok) {
        console.log("Webhook enviado com sucesso para n8n")
      } else {
        console.error("Erro ao enviar webhook para n8n:", webhookResponse.status, webhookResponse.statusText)
      }
    } catch (webhookError) {
      console.error("Erro ao enviar webhook para n8n:", webhookError)
      // Não falha a operação se o webhook falhar
    }

    // E-mail de confirmação para o cliente
    const clientSubject = source === "contato" 
      ? "✅ Recebemos seu contato - WebBotss" 
      : "✅ Demonstração solicitada - WebBotss"

    console.log("Enviando e-mail de confirmação para:", email)

    const clientHtml = `
    <!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${clientSubject}</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.5; color: #374151; max-width: 500px; margin: 0 auto; padding: 16px; background-color: #f9fafb;">
  <div style="background: white; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); overflow: hidden;">
    <!-- Added WebBotss logo to header -->
    <div style="background: linear-gradient(135deg, #10b981 0%, #0c4a6e 100%); padding: 24px; text-align: center;">
      <img src="https://webbotss.com.br/_next/static/media/logowebbotss.0bfea86b.png" alt="WebBotss" style="height: 80px; margin-bottom: 8px;">
      <h1 style="color: white; margin: 0; font-size: 20px; font-weight: 600;">
        ${source === "contato" ? "✅ Contato Recebido" : "✅ Demo Solicitada"}
      </h1>
      <p style="color: rgba(255,255,255,0.9); margin: 4px 0 0 0; font-size: 14px;">
        Automação Inteligente para seu Negócio
      </p>
    </div>
    
    <div style="padding: 24px;">
      <div style="margin-bottom: 20px;">
        <h2 style="color: #111827; margin: 0 0 12px 0; font-size: 18px; font-weight: 600;">
          Olá, ${name}! 👋
        </h2>
        <p style="color: #6b7280; margin: 0 0 16px 0; font-size: 14px; line-height: 1.6;">
          ${source === "contato" 
            ? "Recebemos sua mensagem e nossos especialistas em automação já foram notificados. Em breve, entraremos em contato para agendar uma conversa personalizada."
            : "Sua solicitação de demonstração foi recebida com sucesso! Nossa equipe preparará uma apresentação personalizada da plataforma WebBotss para seu negócio."
          }
        </p>
      </div>

      <!-- Improved info box styling -->
      <div style="background: #f0f9ff; padding: 18px; border-radius: 8px; border-left: 4px solid #10b981; margin-bottom: 20px;">
        <h3 style="color: #0c4a6e; margin: 0 0 12px 0; font-size: 15px; font-weight: 600;">📋 Resumo da sua solicitação</h3>
        <div style="font-size: 14px; color: #0c4a6e;">
          <p style="margin: 6px 0;"><strong>Nome:</strong> ${name}</p>
          <p style="margin: 6px 0;"><strong>Email:</strong> ${email}</p>
          ${whatsapp ? `<p style="margin: 6px 0;"><strong>WhatsApp:</strong> ${whatsapp}</p>` : ""}
          <p style="margin: 6px 0;"><strong>Data:</strong> ${dateTime}</p>
        </div>
      </div>

      <!-- Enhanced next steps section -->
      <div style="background: #f8fafc; padding: 18px; border-radius: 8px; border-left: 4px solid #0c4a6e; margin-bottom: 24px;">
        <h3 style="color: #111827; margin: 0 0 12px 0; font-size: 15px; font-weight: 600;">⏰ Próximos passos</h3>
        <ul style="margin: 0; padding-left: 18px; font-size: 14px; color: #6b7280; line-height: 1.6;">
          <li style="margin-bottom: 4px;">Nossa equipe analisará suas necessidades</li>
          <li style="margin-bottom: 4px;">Entraremos em contato em até 24 horas</li>
          <li style="margin-bottom: 4px;">${source === "contato" ? "Agendaremos uma conversa com um especialista" : "Prepararemos uma demonstração personalizada"}</li>
          <li>Apresentaremos soluções específicas para seu negócio</li>
        </ul>
      </div>

      <!-- Improved CTA buttons -->
      <div style="text-align: center; margin-bottom: 24px;">
        <p style="color: #6b7280; font-size: 14px; margin: 0 0 16px 0;">
          Enquanto isso, conheça mais sobre a WebBotss:
        </p>
        <div style="display: inline-block;">
          <a href="https://webbotss.com.br" style="background: #10b981; color: white; padding: 12px 20px; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 500; margin: 0 6px; display: inline-block;">
            🌐 Site Oficial
          </a>
          <a href="https://wa.me/5585999269030" style="background: #25d366; color: white; padding: 12px 20px; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 500; margin: 0 6px; display: inline-block;">
            💬 WhatsApp
          </a>
        </div>
      </div>

      <div style="margin-top: 20px; text-align: center; padding-top: 16px; border-top: 1px solid #e5e7eb;">
        <p style="color: #9ca3af; font-size: 11px; margin: 0;">
          Este e-mail foi enviado automaticamente. Não responda a esta mensagem.
        </p>
        <p style="color: #9ca3af; font-size: 11px; margin: 4px 0 0 0;">
          WebBotss • Transformando negócios com automação inteligente
        </p>
      </div>
    </div>
  </div>
</body>
</html>

    `

    try {
      console.log("Tentando enviar e-mail de confirmação para:", email)
      console.log("Assunto:", clientSubject)
      
      const result = await transporter.sendMail({
        from: `WebBotss <${process.env.SMTP_USERNAME}>`,
        to: email,
        subject: clientSubject,
        html: clientHtml,
      })
      
      console.log("E-mail de confirmação enviado com sucesso para:", email)
      console.log("Resultado:", result.messageId)
    } catch (clientError) {
      console.error("Erro ao enviar e-mail de confirmação:", clientError)
      console.error("Detalhes do erro:", clientError instanceof Error ? clientError.message : String(clientError))
      // Não falha a operação se o e-mail de confirmação falhar
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("contact api error", error)
    return NextResponse.json({ error: "Erro ao enviar e-mail" }, { status: 500 })
  }
}


