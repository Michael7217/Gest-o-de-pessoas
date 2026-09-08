const CHAVE = 'gestor_usuario_uid'

function gerarUid(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export function obterUid(): string {
  let uid = localStorage.getItem(CHAVE)
  if (!uid) {
    uid = gerarUid()
    localStorage.setItem(CHAVE, uid)
  }
  return uid
}