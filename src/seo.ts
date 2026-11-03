import { copy } from './i18n/copy'
import { langs, ogLocales, type Lang } from './i18n/langs'
import { base, siteOrigin, urlFor, type PageId } from './routes'
import { getBakery } from './sites/bakery/content'
import { getClinic } from './sites/clinic/content'
import { getPub } from './sites/pub/content'
import { getRestaurant } from './sites/restaurant/content'

const fontsBase = 'https://fonts.googleapis.com/css2?'
const fonts = {
  lotta: `${fontsBase}family=Source+Sans+3:wght@400;500;600;700&display=swap`,
  serif: `${fontsBase}family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Outfit:wght@300;400;500;600;700&display=swap`,
  sans: `${fontsBase}family=Outfit:wght@300;400;500;600;700&display=swap`,
}

export type Head = {
  lang: Lang
  title: string
  description: string
  canonical: string
  alternates: { hrefLang: string; href: string }[]
  ogLocale: string
  ogLocaleAlternates: string[]
  ogImage: string
  ogImageWidth: string
  ogImageHeight: string
  ogImageAlt: string
  themeColor: string
  fonts: string
}

function pageMeta(page: PageId, lang: Lang) {
  switch (page) {
    case 'home':
      return {
        title: copy[lang].metaTitle,
        description: copy[lang].metaDescription,
        ogImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&auto=format&fit=crop',
        themeColor: '#080F1B',
        fonts: fonts.lotta,
      }
    case 'restaurant': {
      const site = getRestaurant(lang)
      return { ...site.c.seo, ogImage: site.ogImage, themeColor: '#F5F2EB', fonts: fonts.serif }
    }
    case 'clinic': {
      const site = getClinic(lang)
      return { ...site.c.seo, ogImage: site.ogImage, themeColor: '#F7FAF9', fonts: fonts.serif }
    }
    case 'bakery': {
      const site = getBakery(lang)
      return { ...site.c.seo, ogImage: site.ogImage, themeColor: '#FAF6EF', fonts: fonts.serif }
    }
    case 'pub': {
      const site = getPub(lang)
      return { ...site.c.seo, ogImage: site.ogImage, themeColor: '#14110E', fonts: fonts.sans }
    }
  }
}

export function headFor(page: PageId, lang: Lang): Head {
  const meta = pageMeta(page, lang)
  const title = page === 'home' ? meta.title : `${meta.title} · Demo Lotta`
  return {
    lang,
    title,
    description: meta.description,
    canonical: urlFor(page, lang),
    alternates: [
      ...langs.map((id) => ({ hrefLang: id, href: urlFor(page, id) })),
      { hrefLang: 'x-default', href: page === 'home' ? `${siteOrigin}${base}` : urlFor(page, 'es') },
    ],
    ogLocale: ogLocales[lang],
    ogLocaleAlternates: langs.filter((id) => id !== lang).map((id) => ogLocales[id]),
    ogImage: meta.ogImage,
    ogImageWidth: '1200',
    ogImageHeight: '800',
    ogImageAlt: title,
    themeColor: meta.themeColor,
    fonts: meta.fonts,
  }
}

function setMeta(attr: 'name' | 'property', key: string, value: string) {
  const selector = `meta[${attr}="${key}"]`
  let node = document.head.querySelector(selector)
  if (!node) {
    node = document.createElement('meta')
    node.setAttribute(attr, key)
    document.head.appendChild(node)
  }
  node.setAttribute('content', value)
}

function setLink(rel: string, href: string, extra?: Record<string, string>) {
  const extraKey = extra ? Object.entries(extra).map(([k, v]) => `[${k}="${v}"]`).join('') : ''
  const selector = extra ? `link[rel="${rel}"]${extraKey}` : `link[rel="${rel}"]:not([hreflang])`
  let node = document.head.querySelector(selector)
  if (!node) {
    node = document.createElement('link')
    node.setAttribute('rel', rel)
    document.head.appendChild(node)
  }
  if (extra) {
    for (const [k, v] of Object.entries(extra)) node.setAttribute(k, v)
  }
  node.setAttribute('href', href)
}

/** Keeps title, description, canonical and hreflang in sync on the client (dev and hydration). */
export function applyHead(head: Head) {
  document.title = head.title
  document.documentElement.lang = head.lang
  setMeta('name', 'description', head.description)
  setMeta('name', 'robots', 'index, follow')
  setMeta('name', 'theme-color', head.themeColor)
  setMeta('property', 'og:type', 'website')
  setMeta('property', 'og:site_name', 'Lotta')
  setMeta('property', 'og:locale', head.ogLocale)
  setMeta('property', 'og:url', head.canonical)
  setMeta('property', 'og:title', head.title)
  setMeta('property', 'og:description', head.description)
  setMeta('property', 'og:image', head.ogImage)
  setMeta('property', 'og:image:width', head.ogImageWidth)
  setMeta('property', 'og:image:height', head.ogImageHeight)
  setMeta('property', 'og:image:alt', head.ogImageAlt)
  setMeta('name', 'twitter:card', 'summary_large_image')
  setMeta('name', 'twitter:title', head.title)
  setMeta('name', 'twitter:description', head.description)
  setMeta('name', 'twitter:image', head.ogImage)
  setLink('canonical', head.canonical)
  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((node) => node.remove())
  for (const alt of head.alternates) {
    const link = document.createElement('link')
    link.rel = 'alternate'
    link.hreflang = alt.hrefLang
    link.href = alt.href
    document.head.appendChild(link)
  }
}
