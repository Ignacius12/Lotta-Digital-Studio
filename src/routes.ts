import { isLang, langs, type Lang } from './i18n/langs'

export const siteOrigin = 'https://ignacius12.github.io'
export const base = import.meta.env.BASE_URL

export type DemoId = 'restaurant' | 'clinic' | 'bakery' | 'pub'
export type PageId = 'home' | DemoId
export type Route = { page: PageId; lang: Lang }

export const demoIds: DemoId[] = ['restaurant', 'clinic', 'bakery', 'pub']

export const slugs: Record<DemoId, Record<Lang, string>> = {
  restaurant: { es: 'restaurante', en: 'restaurant', ca: 'restaurant', gl: 'restaurante', eu: 'jatetxea' },
  clinic: { es: 'clinica-dental', en: 'dental-clinic', ca: 'clinica-dental', gl: 'clinica-dental', eu: 'hortz-klinika' },
  bakery: { es: 'horno', en: 'bakery', ca: 'forn', gl: 'forno', eu: 'okindegia' },
  pub: { es: 'pub', en: 'pub', ca: 'pub', gl: 'pub', eu: 'taberna' },
}

/** Unprefixed slugs from before /es /en… that now point at the Spanish pages. */
export const legacySlugs: Record<string, DemoId> = {
  restaurante: 'restaurant',
  restaurant: 'restaurant',
  jatetxea: 'restaurant',
  clinica: 'clinic',
  'clinica-dental': 'clinic',
  'dental-clinic': 'clinic',
  'hortz-klinika': 'clinic',
  horno: 'bakery',
  bakery: 'bakery',
  forn: 'bakery',
  forno: 'bakery',
  okindegia: 'bakery',
  pub: 'pub',
  taberna: 'pub',
}

export const routes: Route[] = langs.flatMap((lang) =>
  (['home', ...demoIds] as PageId[]).map((page) => ({ page, lang })),
)

export function pathFor(page: PageId, lang: Lang) {
  return page === 'home' ? `${base}${lang}/` : `${base}${lang}/${slugs[page][lang]}/`
}

export function urlFor(page: PageId, lang: Lang) {
  return `${siteOrigin}${pathFor(page, lang)}`
}

function segments(pathname: string) {
  const path = pathname.endsWith('/') ? pathname : `${pathname}/`
  if (!path.startsWith(base)) return null
  return path.slice(base.length).split('/').filter(Boolean)
}

export function matchRoute(pathname: string): Route | null {
  const parts = segments(pathname)
  if (!parts) return null
  const [lang, slug, ...rest] = parts
  if (!isLang(lang) || rest.length > 0) return null
  if (!slug) return { page: 'home', lang }
  const page = demoIds.find((id) => slugs[id][lang] === slug)
  return page ? { page, lang } : null
}

/** Where the bare base URL or a legacy slug should send the visitor, if anywhere. */
export function redirectFor(pathname: string, saved: Lang | null = null): string | null {
  const parts = segments(pathname)
  if (!parts) return null
  if (parts.length === 0) return saved ? pathFor('home', saved) : null
  if (parts.length === 1 && legacySlugs[parts[0]]) return pathFor(legacySlugs[parts[0]], 'es')
  return null
}
