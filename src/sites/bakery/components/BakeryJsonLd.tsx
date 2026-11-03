import { localPlace } from '../../../schema'
import { openingHoursSpecification } from '../../shared/demo'
import { useBakery } from '../content'

export function BakeryJsonLd() {
  const { address, c, lang, name, ogImage, phone, products, schemaHours } = useBakery()

  const data = localPlace({
    type: 'Bakery',
    lang,
    page: 'bakery',
    name,
    description: c.description,
    image: ogImage,
    telephone: phone.tel,
    address,
    hours: openingHoursSpecification(schemaHours),
    priceRange: '€',
    extra: {
      makesOffer: products.map((product) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: product.name,
          description: product.description,
        },
      })),
    },
  })

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
