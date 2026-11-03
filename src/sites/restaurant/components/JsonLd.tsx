import { localPlace } from '../../../schema'
import { openingHoursSpecification } from '../../shared/demo'
import { useRestaurant } from '../content'

export function JsonLd() {
  const { address, c, categories, email, lang, menu, name, ogImage, phone, schemaHours } =
    useRestaurant()

  const data = localPlace({
    type: 'Restaurant',
    lang,
    page: 'restaurant',
    name,
    description: c.description,
    image: ogImage,
    telephone: phone.tel,
    email,
    address,
    hours: openingHoursSpecification(schemaHours),
    priceRange: '€€',
    extra: {
      servesCuisine: c.cuisine,
      acceptsReservations: true,
      hasMenu: {
        '@type': 'Menu',
        name: c.menu.title,
        hasMenuSection: categories.map((category) => ({
          '@type': 'MenuSection',
          name: category.label,
          hasMenuItem: menu
            .filter((item) => item.category === category.id)
            .map((item) => ({
              '@type': 'MenuItem',
              name: item.name,
              description: item.description,
              offers: {
                '@type': 'Offer',
                price: item.price,
                priceCurrency: 'EUR',
              },
            })),
        })),
      },
    },
  })

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
