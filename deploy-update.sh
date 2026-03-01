#!/bin/bash

# 🚀 Script de Deploy - WebBotss Landing Page
# Este script atualiza o sistema na VPS de forma segura

set -e  # Parar se houver erro

echo "🚀 Iniciando deploy do WebBotss..."

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Função para log
log() {
    echo -e "${BLUE}[$(date +'%H:%M:%S')]${NC} $1"
}

error() {
    echo -e "${RED}[ERRO]${NC} $1"
}

success() {
    echo -e "${GREEN}[SUCESSO]${NC} $1"
}

warning() {
    echo -e "${YELLOW}[AVISO]${NC} $1"
}

# Verificar se está na VPS
if [ ! -d "/root/Webbotss-LP" ]; then
    error "Diretório Webbotss-LP não encontrado. Execute este script na VPS."
    exit 1
fi

cd /root/Webbotss-LP

# 1. Backup do sistema atual
log "📦 Fazendo backup do sistema atual..."
BACKUP_DIR="/root/Webbotss-LP-backup-$(date +%Y%m%d-%H%M%S)"
cp -r /root/Webbotss-LP "$BACKUP_DIR"
success "Backup criado em: $BACKUP_DIR"

# 2. Parar PM2
log "⏹️ Parando PM2..."
pm2 stop webbotss || warning "PM2 não estava rodando"
success "PM2 parado"

# 3. Verificar se .env existe
log "🔧 Verificando arquivo .env..."
if [ ! -f ".env" ]; then
    warning "Arquivo .env não encontrado. Copiando do exemplo..."
    cp env.example .env
    warning "IMPORTANTE: Configure o arquivo .env com suas credenciais!"
    echo "Pressione Enter para continuar após configurar o .env..."
    read
fi

# 4. Instalar dependências
log "📦 Instalando dependências..."
npm install --legacy-peer-deps
success "Dependências instaladas"

# 5. Build do projeto
log "🔨 Fazendo build do projeto..."
npm run build
success "Build concluído"

# 6. Iniciar PM2
log "🚀 Iniciando PM2..."
pm2 start npm --name "webbotss" -- start
success "PM2 iniciado"

# 7. Verificar status
log "📊 Verificando status..."
sleep 3
pm2 status

# 8. Verificar se site está funcionando
log "🌐 Verificando se site está funcionando..."
sleep 5

if curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 | grep -q "200"; then
    success "Site está funcionando!"
else
    error "Site não está respondendo. Verifique os logs:"
    pm2 logs webbotss --lines 20
fi

# 9. Verificar Nginx
log "🔧 Verificando Nginx..."
if systemctl is-active --quiet nginx; then
    success "Nginx está rodando"
else
    warning "Nginx não está rodando. Iniciando..."
    sudo systemctl start nginx
fi

# 10. Teste final
log "🧪 Fazendo teste final..."
if curl -s -o /dev/null -w "%{http_code}" https://webbotss.com.br | grep -q "200"; then
    success "✅ Deploy concluído com sucesso!"
    success "🌐 Site: https://webbotss.com.br"
    success "📱 Chat funcionando com animação de digitação"
    success "🔗 Webhook N8N configurado"
else
    error "❌ Site não está acessível via HTTPS"
    warning "Verifique a configuração do Nginx e SSL"
fi

echo ""
echo "📋 Próximos passos:"
echo "1. Teste o chat no site"
echo "2. Verifique se o webhook N8N está recebendo dados"
echo "3. Monitore os logs: pm2 logs webbotss"
echo ""
echo "🆘 Se algo der errado, restaure o backup:"
echo "   pm2 stop webbotss"
echo "   rm -rf /root/Webbotss-LP"
echo "   mv $BACKUP_DIR /root/Webbotss-LP"
echo "   cd /root/Webbotss-LP && pm2 start npm --name 'webbotss' -- start"
echo ""
success "Deploy finalizado! 🎉"
