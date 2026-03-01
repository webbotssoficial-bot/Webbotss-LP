# 🤖 Sistema de Chat WebBotss

## 📋 Visão Geral

O sistema de chat da WebBotss implementa um chat funcional com identificação única de usuários e integração com webhook N8N para processamento de mensagens.

## 🔧 Funcionalidades

### ✅ Identificação de Usuário
- **ID Único:** Cada usuário recebe um ID único baseado em timestamp + random
- **Persistência:** ID salvo no localStorage do navegador
- **Reutilização:** Mesmo usuário mantém o mesmo ID entre sessões

### ✅ Sistema de Sessão
- **Session ID:** Gerenciado pelo Typebot para continuidade da conversa
- **Persistência:** Session ID salvo no localStorage
- **Expiração:** Sessão expira automaticamente, forçando nova sessão

### ✅ Webhook N8N
- **URL:** `https://n8n-n8n.kt46lx.easypanel.host/webhook-test/506088ae-2fff-4d7a-a766-e040658d4cec`
- **Método:** POST
- **Dados Enviados:** Mensagem, identificador, timestamp, IP, User-Agent

## 📊 Dados Enviados para Webhook

```json
{
  "message": "Texto da mensagem do usuário",
  "sessionId": "user_1234567890_abc123",
  "cliente": "website_visitor",
  "identificador": "user_1234567890_abc123",
  "timestamp": "2025-09-15T22:30:00.000Z",
  "userAgent": "Mozilla/5.0...",
  "ip": "IP real do cliente (considerando proxies/CDNs)",
  "source": "webbotss-landing-page",
  "type": "chat_message"
}
```

**Nota importante**: O `sessionId` agora é sempre o `chat_user_id` (identificador único do usuário), que é persistente e permite rastrear todas as mensagens do mesmo usuário.

## 🔄 Resposta do Webhook

O webhook N8N pode retornar uma resposta que será usada como resposta do bot:

```json
[
  {
    "output": "Bom dia! Como posso ajudar você hoje? 🚀"
  }
]
```

- **Se webhook retornar resposta**: Usa a resposta do webhook como resposta do bot
- **Se webhook não retornar**: Usa a resposta do Typebot como fallback
- **Se webhook falhar**: Continua com Typebot normalmente

## 🔄 Fluxo de Funcionamento

1. **Usuário abre o chat**
   - Sistema verifica se existe ID no localStorage
   - Se não existir, gera novo ID único
   - Salva ID no localStorage

2. **Usuário envia mensagem**
   - Sistema envia dados para webhook N8N
   - Se webhook retornar resposta, usa ela como resposta do bot
   - Se não, processa mensagem com Typebot como fallback
   - Retorna resposta para o usuário

3. **Persistência de dados**
   - Mensagens salvas no localStorage
   - Session ID salvo no localStorage
   - Histórico mantido entre sessões

## 🛠️ Configuração

### Variáveis de Ambiente

```env
# Webhook N8N (OBRIGATÓRIO)
N8N_WEBHOOK_URL=https://n8n-n8n.kt46lx.easypanel.host/webhook/506088ae-2fff-4d7a-a766-e040658d4cec

# Typebot
NEXT_PUBLIC_TYPEBOT_URL=https://bot.webbotss.com.br
```

**⚠️ Importante**: A variável `N8N_WEBHOOK_URL` é obrigatória. Se não estiver configurada no `.env`, o webhook não funcionará.

### Estrutura de Arquivos

```
app/
├── api/
│   └── chat/
│       └── route.ts          # API de chat com webhook
components/
├── chat/
│   └── chat-bubble.tsx       # Interface do chat
hooks/
└── use-chat-session.ts       # Hook de gerenciamento de sessão
```

## 🎯 Benefícios

- **Rastreamento:** Cada usuário tem identificação única
- **Histórico:** Conversas mantidas entre sessões
- **Integração:** Dados enviados para N8N em tempo real
- **Escalabilidade:** Sistema preparado para múltiplos usuários
- **Analytics:** Dados de IP, User-Agent e timestamp para análise

## 🔍 Monitoramento

### Logs do Sistema
- Todas as mensagens são logadas no console
- Webhook responses são monitoradas
- Erros são capturados e logados

### Dados no N8N
- Mensagens em tempo real
- Identificação única de usuários
- Metadados de sessão e navegação

## 🚀 Próximos Passos

1. **Configurar N8N** para processar os dados recebidos
2. **Implementar analytics** baseado nos dados do webhook
3. **Adicionar notificações** para novos usuários
4. **Criar dashboard** de monitoramento de conversas
