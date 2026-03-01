#!/bin/bash

# Script de Deploy para VPS
echo "🚀 Iniciando deploy do WebBotss no VPS..."

# 1. Instalar Node.js 18+ (se não estiver instalado)
echo "📦 Verificando Node.js..."
if ! command -v node &> /dev/null; then
    echo "Instalando Node.js 18..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

# 2. Instalar PM2 globalmente
echo "📦 Instalando PM2..."
sudo npm install -g pm2

# 3. Instalar dependências
echo "📦 Instalando dependências..."
npm install

# 4. Build do projeto
echo "🔨 Fazendo build do projeto..."
npm run build

# 5. Configurar variáveis de ambiente
echo "⚙️ Configurando variáveis de ambiente..."
if [ ! -f .env ]; then
    echo "Criando arquivo .env..."
    cat > .env << EOF
SMTP_HOST=smtp.hostgator.com
SMTP_PORT=587
SMTP_USERNAME=seu-email@seudominio.com
SMTP_PASSWORD=sua-senha-smtp
N8N_WEBHOOK_URL=https://n8n-n8n.kt46lx.easypanel.host/webhook/4f92fc45-cb3f-4ba2-aecc-dab8fe33881a
EOF
    echo "⚠️ Configure as variáveis no arquivo .env antes de continuar!"
fi

# 6. Iniciar com PM2
echo "🚀 Iniciando aplicação com PM2..."
pm2 start npm --name "webbotss" -- start

# 7. Salvar configuração do PM2
pm2 save
pm2 startup

echo "✅ Deploy concluído!"
echo "🌐 Aplicação rodando em: http://localhost:3000"
echo "📊 Para ver logs: pm2 logs webbotss"
echo "🔄 Para reiniciar: pm2 restart webbotss"
