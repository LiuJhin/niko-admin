const TOKEN_KEY = 'Authorization'

export function getToken(): string {
  return localStorage.getItem(TOKEN_KEY) || ''
}

export function setToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token)
}

export function removeToken() {
  localStorage.removeItem(TOKEN_KEY)
}
