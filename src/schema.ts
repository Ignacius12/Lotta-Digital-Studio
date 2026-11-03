import { langs, type Lang } from './i18n/langs'
import { urlFor, type PageId } from './routes'

export type Postal = {
  street: string
  city: string
  postalCode: string
  region: string
  country: string
  mapsUrl: string
  geo: { latitude: number; longitude: number }
}

export function postalAddress(address: Postal) {
  return {
    '@type': 'PostalAddress',
    streetAddress: address.street,
    addressLocality: address.city,
    postalCode: address.postalCode,
    addressRegion: address.region,
    addressCountry: address.country,
  }
}

export function geoCoords(address: Postal) {
  return {
    '@type': 'GeoCoordinates',
    latitude: address.geo.latitude,
    longitude: address.geo.longitude,
  }
}

export function breadcrumbList(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function webPageNode(options: {
  lang: Lang
  url: string
  title: string
  description: string
  image: string
  about?: string
  website?: string
}) {
  return {
    '@type': 'WebPage',
    '@id': options.url,
    url: options.url,
    name: options.title,
    description: options.description,
    inLanguage: options.lang,
    isPartOf: options.website ? { '@id': options.website } : undefined,
    about: options.about ? { '@id': options.about } : undefined,
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: options.image,
      width: 1200,
      height: 800,
    },
  }
}

export function localPlace(options: {
  type: string
  lang: Lang
  page: PageId
  name: string
  description: string
  image: string
  telephone: string
  email?: string
  address: Postal
  hours: { '@type': string; dayOfWeek: string[]; opens?: string; closes?: string }[]
  priceRange: string
  extra?: Record<string, unknown>
}) {
  const url = urlFor(options.page, options.lang)
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': options.type,
        '@id': `${url}#place`,
        name: options.name,
        description: options.description,
        image: options.image,
        url,
        inLanguage: options.lang,
        telephone: options.telephone,
        email: options.email,
        priceRange: options.priceRange,
        currenciesAccepted: 'EUR',
        address: postalAddress(options.address),
        geo: geoCoords(options.address),
        hasMap: options.address.mapsUrl,
        openingHoursSpecification: options.hours,
        ...options.extra,
      },
      webPageNode({
        lang: options.lang,
        url,
        title: options.name,
        description: options.description,
        image: options.image,
        about: `${url}#place`,
      }),
      breadcrumbList([
        { name: 'Lotta', url: urlFor('home', options.lang) },
        { name: options.name, url },
      ]),
    ],
  }
}

export function studioGraph(options: {
  lang: Lang
  title: string
  description: string
  jsonDescription: string
  email: string
  knowsAbout: string[]
  image: string
}) {
  const url = urlFor('home', options.lang)
  const business = `${url}#business`
  const website = `${url}#website`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': business,
        name: 'Lotta Digital Studio',
        alternateName: 'Lotta',
        description: options.jsonDescription,
        url,
        inLanguage: options.lang,
        email: options.email,
        image: options.image,
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Valencia',
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Valencia',
          addressRegion: 'Comunidad Valenciana',
          addressCountry: 'ES',
        },
        knowsAbout: options.knowsAbout,
        availableLanguage: langs,
      },
      {
        '@type': 'WebSite',
        '@id': website,
        url,
        name: 'Lotta',
        inLanguage: options.lang,
        publisher: { '@id': business },
      },
      webPageNode({
        lang: options.lang,
        url,
        title: options.title,
        description: options.description,
        image: options.image,
        about: business,
        website,
      }),
      breadcrumbList([{ name: 'Lotta', url }]),
    ],
  }
}
