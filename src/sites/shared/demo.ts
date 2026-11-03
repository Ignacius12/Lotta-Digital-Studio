import type { Lang } from '../../i18n/langs'

export type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'

/** A row of the opening hours. No `opens` means closed those days. */
export type Hours = { days: Day[]; opens?: string; closes?: string }

const dayNames: Record<Lang, Record<Day, string>> = {
  es: { Monday: 'Lunes', Tuesday: 'Martes', Wednesday: 'Miércoles', Thursday: 'Jueves', Friday: 'Viernes', Saturday: 'Sábado', Sunday: 'Domingo' },
  en: { Monday: 'Monday', Tuesday: 'Tuesday', Wednesday: 'Wednesday', Thursday: 'Thursday', Friday: 'Friday', Saturday: 'Saturday', Sunday: 'Sunday' },
  ca: { Monday: 'Dilluns', Tuesday: 'Dimarts', Wednesday: 'Dimecres', Thursday: 'Dijous', Friday: 'Divendres', Saturday: 'Dissabte', Sunday: 'Diumenge' },
  gl: { Monday: 'Luns', Tuesday: 'Martes', Wednesday: 'Mércores', Thursday: 'Xoves', Friday: 'Venres', Saturday: 'Sábado', Sunday: 'Domingo' },
  eu: { Monday: 'Astelehena', Tuesday: 'Asteartea', Wednesday: 'Asteazkena', Thursday: 'Osteguna', Friday: 'Ostirala', Saturday: 'Larunbata', Sunday: 'Igandea' },
}

export function dayName(day: Day, lang: Lang) {
  return dayNames[lang][day]
}

export function hoursRows(hours: Hours[], lang: Lang, closed: string) {
  return hours.map((row) => {
    const first = dayName(row.days[0], lang)
    const last = dayName(row.days[row.days.length - 1], lang)
    return {
      days: row.days.length > 1 ? `${first} – ${last}` : first,
      hours: row.opens ? `${row.opens} – ${row.closes}` : closed,
    }
  })
}

export function openingHoursSpecification(hours: Hours[]) {
  return hours
    .filter((row) => row.opens)
    .map((row) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: row.days,
      opens: row.opens,
      closes: row.closes,
    }))
}

export function formatEuro(value: number, lang: Lang) {
  const amount = Number.isInteger(value) ? String(value) : value.toFixed(2)
  return lang === 'en' ? `€${amount}` : `${amount.replace('.', ',')}\u00a0€`
}

/** Responsive candidates for an Unsplash URL, so phones don't download the desktop file. */
export function unsplashSrcSet(src: string, widths = [640, 960, 1280, 1600]) {
  if (!src.includes('images.unsplash.com')) return undefined
  return widths.map((width) => `${src.replace(/([?&])w=\d+/, `$1w=${width}`)} ${width}w`).join(', ')
}

export type DemoCopy = {
  openMenu: string
  closeMenu: string
  closeMenuNav: string
  mainNav: string
  mobileNav: string
  explore: string
  info: string
  hours: string
  directions: string
  closed: string
  more: string
  discover: string
  demo: string
  madeBy: string
  language: string
  legalLabel: string
  legal: string
  privacy: string
  cookies: string
  cookiesText: string
  legalText: (name: string) => string
  instagram: (name: string) => string
}

export const demoCopy: Record<Lang, DemoCopy> = {
  es: {
    openMenu: 'Abrir menú de navegación',
    closeMenu: 'Cerrar menú',
    closeMenuNav: 'Cerrar menú de navegación',
    mainNav: 'Navegación principal',
    mobileNav: 'Navegación móvil',
    explore: 'Explorar',
    info: 'Información',
    hours: 'Horario',
    directions: 'Cómo llegar',
    closed: 'Cerrado',
    more: 'Ver más contenido',
    discover: 'Descubre',
    demo: 'Demo comercial',
    madeBy: 'Demo creada por Lotta',
    language: 'Idioma',
    legalLabel: 'Información legal',
    legal: 'Aviso legal',
    privacy: 'Privacidad',
    cookies: 'Cookies',
    cookiesText: 'Esta demostración no utiliza cookies de analítica ni publicidad.',
    legalText: (name) =>
      `Esta web es una demostración comercial ficticia. ${name} y sus datos son de ejemplo y no corresponden a un establecimiento real.`,
    instagram: (name) => `Instagram de ${name} (se abre en una pestaña nueva)`,
  },
  en: {
    openMenu: 'Open navigation menu',
    closeMenu: 'Close menu',
    closeMenuNav: 'Close navigation menu',
    mainNav: 'Main navigation',
    mobileNav: 'Mobile navigation',
    explore: 'Explore',
    info: 'Information',
    hours: 'Opening hours',
    directions: 'Get directions',
    closed: 'Closed',
    more: 'See more',
    discover: 'Discover',
    demo: 'Commercial demo',
    madeBy: 'Demo made by Lotta',
    language: 'Language',
    legalLabel: 'Legal information',
    legal: 'Legal notice',
    privacy: 'Privacy',
    cookies: 'Cookies',
    cookiesText: 'This demo does not use analytics or advertising cookies.',
    legalText: (name) =>
      `This website is a fictional commercial demo. ${name} and its details are examples and do not belong to a real business.`,
    instagram: (name) => `${name} on Instagram (opens in a new tab)`,
  },
  ca: {
    openMenu: 'Obre el menú de navegació',
    closeMenu: 'Tanca el menú',
    closeMenuNav: 'Tanca el menú de navegació',
    mainNav: 'Navegació principal',
    mobileNav: 'Navegació mòbil',
    explore: 'Explora',
    info: 'Informació',
    hours: 'Horari',
    directions: 'Com arribar-hi',
    closed: 'Tancat',
    more: 'Mostra més contingut',
    discover: 'Descobreix',
    demo: 'Demo comercial',
    madeBy: 'Demo creada per Lotta',
    language: 'Idioma',
    legalLabel: 'Informació legal',
    legal: 'Avís legal',
    privacy: 'Privadesa',
    cookies: 'Galetes',
    cookiesText: 'Aquesta demostració no utilitza galetes d’analítica ni de publicitat.',
    legalText: (name) =>
      `Aquest web és una demostració comercial fictícia. ${name} i les seves dades són d’exemple i no corresponen a cap establiment real.`,
    instagram: (name) => `Instagram de ${name} (s’obre en una pestanya nova)`,
  },
  gl: {
    openMenu: 'Abrir o menú de navegación',
    closeMenu: 'Pechar o menú',
    closeMenuNav: 'Pechar o menú de navegación',
    mainNav: 'Navegación principal',
    mobileNav: 'Navegación móbil',
    explore: 'Explorar',
    info: 'Información',
    hours: 'Horario',
    directions: 'Como chegar',
    closed: 'Pechado',
    more: 'Ver máis contido',
    discover: 'Descobre',
    demo: 'Demo comercial',
    madeBy: 'Demo creada por Lotta',
    language: 'Idioma',
    legalLabel: 'Información legal',
    legal: 'Aviso legal',
    privacy: 'Privacidade',
    cookies: 'Cookies',
    cookiesText: 'Esta demostración non utiliza cookies de analítica nin de publicidade.',
    legalText: (name) =>
      `Esta web é unha demostración comercial ficticia. ${name} e os seus datos son de exemplo e non corresponden a ningún establecemento real.`,
    instagram: (name) => `Instagram de ${name} (ábrese nunha pestana nova)`,
  },
  eu: {
    openMenu: 'Ireki nabigazio-menua',
    closeMenu: 'Itxi menua',
    closeMenuNav: 'Itxi nabigazio-menua',
    mainNav: 'Nabigazio nagusia',
    mobileNav: 'Mugikorreko nabigazioa',
    explore: 'Arakatu',
    info: 'Informazioa',
    hours: 'Ordutegia',
    directions: 'Nola iritsi',
    closed: 'Itxita',
    more: 'Ikusi eduki gehiago',
    discover: 'Ezagutu',
    demo: 'Demo komertziala',
    madeBy: 'Lottak egindako demoa',
    language: 'Hizkuntza',
    legalLabel: 'Lege-informazioa',
    legal: 'Lege-oharra',
    privacy: 'Pribatutasuna',
    cookies: 'Cookieak',
    cookiesText: 'Demo honek ez du analitikako ez publizitateko cookierik erabiltzen.',
    legalText: (name) =>
      `Webgune hau demo komertzial fiktizio bat da. ${name} eta haren datuak adibideak dira, eta ez dagozkio benetako establezimendu bati.`,
    instagram: (name) => `Instagram: ${name} (fitxa berri batean irekitzen da)`,
  },
}

export function legalLinks(t: DemoCopy) {
  return [
    { label: t.legal, href: '#aviso-legal' },
    { label: t.privacy, href: '#privacidad' },
    { label: t.cookies, href: '#cookies' },
  ]
}

export function zipLabels(hrefs: string[], labels: string[]) {
  return hrefs.map((href, index) => ({ href, label: labels[index] }))
}
