import { localPlace } from '../../../schema'
import { openingHoursSpecification } from '../../shared/demo'
import { usePub } from '../content'

export function PubJsonLd() {
  const { address, bites, c, drinks, lang, name, ogImage, phone, schemaHours } = usePub()

  const data = localPlace({
    type: 'BarOrPub',
    lang,
    page: 'pub',
    name,
    description: c.description,
    image: ogImage,
    telephone: phone.tel,
    address,
    hours: openingHoursSpecification(schemaHours),
    priceRange: '€',
    extra: {
      servesCuisine: 'Tapas',
      acceptsReservations: true,
      hasMenu: {
        '@type': 'Menu',
        hasMenuSection: [
          {
            '@type': 'MenuSection',
            name: c.menu.drinks,
            hasMenuItem: drinks.map((item) => ({
              '@type': 'MenuItem',
              name: item.name,
              description: item.description,
            })),
          },
          {
            '@type': 'MenuSection',
            name: c.menu.bites,
            hasMenuItem: bites.map((item) => ({
              '@type': 'MenuItem',
              name: item.name,
              description: item.description,
            })),
          },
        ],
      },
    },
  })

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
