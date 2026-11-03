export type Lang = 'es' | 'en' | 'ca' | 'gl' | 'eu'

export const langs: Lang[] = ['es', 'en', 'ca', 'gl', 'eu']

export const languages: { id: Lang; label: string }[] = [
  { id: 'es', label: 'Español' },
  { id: 'en', label: 'English' },
  { id: 'ca', label: 'Català' },
  { id: 'gl', label: 'Galego' },
  { id: 'eu', label: 'Euskara' },
]

export const ogLocales: Record<Lang, string> = {
  es: 'es_ES',
  en: 'en_GB',
  ca: 'ca_ES',
  gl: 'gl_ES',
  eu: 'eu_ES',
}

export function isLang(value: unknown): value is Lang {
  return langs.includes(value as Lang)
}

export function rememberLang(lang: Lang) {
  try {
    localStorage.setItem('lotta-lang', lang)
  } catch {
    /* storage unavailable */
  }
}

export function storedLang(): Lang | null {
  try {
    const saved = localStorage.getItem('lotta-lang')
    return isLang(saved) ? saved : null
  } catch {
    return null
  }
}

export function preferredLang(): Lang {
  const saved = storedLang()
  if (saved) return saved
  for (const tag of navigator.languages ?? [navigator.language]) {
    const code = tag?.slice(0, 2).toLowerCase()
    if (isLang(code)) return code
  }
  return 'es'
}
