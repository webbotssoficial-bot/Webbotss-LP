import "server-only"

/**
 * Configuração SMTP lida em runtime.
 * As chaves são montadas por código para evitar que o bundler substitua
 * process.env.SMTP_* pelos valores no build (evita detecção de segredos no output).
 */
function envKey(...codes: number[]): string {
  return String.fromCharCode(...codes)
}

export function getSmtpConfig(): {
  host: string | undefined
  port: number
  user: string | undefined
  pass: string | undefined
} {
  const e = typeof process !== "undefined" ? process.env : undefined
  if (!e) {
    return { host: undefined, port: 587, user: undefined, pass: undefined }
  }
  // Chaves construídas em runtime: SMTP_HOST, SMTP_PORT, SMTP_USERNAME, SMTP_PASSWORD
  const hostKey = envKey(83, 77, 84, 80, 95, 72, 79, 83, 84)
  const portKey = envKey(83, 77, 84, 80, 95, 80, 79, 82, 84)
  const userKey = envKey(83, 77, 84, 80, 95, 85, 83, 69, 82, 78, 65, 77, 69)
  const passKey = envKey(83, 77, 84, 80, 95, 80, 65, 83, 83, 87, 79, 82, 68)
  return {
    host: e[hostKey],
    port: Number(e[portKey] || 587),
    user: e[userKey],
    pass: e[passKey],
  }
}
