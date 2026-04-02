// Retorna o base URL sem barra final
// Em dev: "" | Em GitHub Pages: "/oticas-monte-hebrom"
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '')
export const img = (path: string) => `${BASE}/${path}`
