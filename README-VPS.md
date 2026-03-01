# 🚀 Deploy WebBotss no VPS

## 📋 Pré-requisitos

- VPS com Ubuntu 20.04+ ou CentOS 8+
- Acesso root ou sudo
- Domínio configurado (webbotss.com.br)

## 🔧 Instalação

### 1. Upload dos Arquivos
```bash
# Upload do projeto para o VPS
scp -r . root@seu-vps:/var/www/webbotss
```

### 2. Executar Script de Deploy
```bash
# Conectar ao VPS
ssh root@seu-vps

# Entrar na pasta do projeto
cd /var/www/webbotss

# Dar permissão de execução
chmod +x deploy-vps.sh

# Executar deploy
./deploy-vps.sh
```

### 3. Configurar Variáveis de Ambiente
```bash
# Editar arquivo .env
nano .env

# Configurar:
SMTP_HOST=smtp.hostgator.com
SMTP_PORT=587
SMTP_USERNAME=seu-email@seudominio.com
SMTP_PASSWORD=sua-senha-smtp
N8N_WEBHOOK_URL=https://n8n-n8n.kt46lx.easypanel.host/webhook/4f92fc45-cb3f-4ba2-aecc-dab8fe33881a
```

### 4. Configurar Nginx
```bash
# Copiar configuração
sudo cp nginx.conf /etc/nginx/sites-available/webbotss
sudo ln -s /etc/nginx/sites-available/webbotss /etc/nginx/sites-enabled/

# Testar configuração
sudo nginx -t

# Reiniciar Nginx
sudo systemctl restart nginx
```

### 5. Configurar SSL (Let's Encrypt)
```bash
# Instalar Certbot
sudo apt install certbot python3-certbot-nginx

# Obter certificado
sudo certbot --nginx -d webbotss.com.br -d www.webbotss.com.br

# Renovação automática
sudo crontab -e
# Adicionar: 0 12 * * * /usr/bin/certbot renew --quiet
```

## 🎯 Comandos Úteis

### PM2 (Gerenciamento de Processos)
```bash
# Ver status
pm2 status

# Ver logs
pm2 logs webbotss

# Reiniciar
pm2 restart webbotss

# Parar
pm2 stop webbotss

# Remover
pm2 delete webbotss
```

### Nginx
```bash
# Testar configuração
sudo nginx -t

# Recarregar configuração
sudo systemctl reload nginx

# Ver status
sudo systemctl status nginx
```

### Logs
```bash
# Logs da aplicação
pm2 logs webbotss

# Logs do Nginx
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Logs do sistema
sudo journalctl -u nginx -f
```

## 🔍 Verificação

### URLs que devem funcionar:
- ✅ https://webbotss.com.br (página inicial)
- ✅ https://webbotss.com.br/contato (formulário de contato)
- ✅ https://webbotss.com.br/demo (formulário de demo)
- ✅ https://webbotss.com.br/api/contact (API de contato)
- ✅ Webhook n8n funcionando
- ✅ Emails sendo enviados

### Testar Formulários:
1. Acesse https://webbotss.com.br/contato
2. Preencha o formulário
3. Verifique se o email foi enviado
4. Verifique se o webhook foi disparado

## 🛠️ Troubleshooting

### Problema: Aplicação não inicia
```bash
# Verificar logs
pm2 logs webbotss

# Verificar se a porta 3000 está em uso
sudo netstat -tlnp | grep :3000

# Verificar variáveis de ambiente
cat .env
```

### Problema: Nginx não funciona
```bash
# Testar configuração
sudo nginx -t

# Verificar se o Nginx está rodando
sudo systemctl status nginx

# Verificar logs
sudo tail -f /var/log/nginx/error.log
```

### Problema: SSL não funciona
```bash
# Verificar certificado
sudo certbot certificates

# Renovar certificado
sudo certbot renew

# Verificar se o domínio aponta para o VPS
nslookup webbotss.com.br
```

## 📊 Monitoramento

### Uptime
```bash
# Verificar uptime da aplicação
pm2 monit

# Verificar recursos do sistema
htop
```

### Backup
```bash
# Backup do projeto
tar -czf webbotss-backup-$(date +%Y%m%d).tar.gz /var/www/webbotss

# Backup do banco (se houver)
# Configurar backup automático no crontab
```

## 🎉 Sucesso!

Se tudo estiver funcionando, você terá:
- ✅ Site funcionando com HTTPS
- ✅ Formulários enviando emails
- ✅ Webhook n8n funcionando
- ✅ Performance otimizada
- ✅ Monitoramento ativo
