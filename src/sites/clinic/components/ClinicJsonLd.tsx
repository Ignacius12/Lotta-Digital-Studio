import { localPlace } from '../../../schema'
import { openingHoursSpecification } from '../../shared/demo'
import { useClinic } from '../content'

export function ClinicJsonLd() {
  const { address, c, email, lang, name, ogImage, phone, schemaHours, treatments } = useClinic()

  const data = localPlace({
    type: 'Dentist',
    lang,
    page: 'clinic',
    name,
    description: c.description,
    image: ogImage,
    telephone: phone.tel,
    email,
    address,
    hours: openingHoursSpecification(schemaHours),
    priceRange: '€€',
    extra: {
      medicalSpecialty: 'Dentistry',
      isAcceptingNewPatients: true,
      availableService: treatments.map((item) => ({
        '@type': 'MedicalProcedure',
        name: item.name,
        description: item.description,
      })),
    },
  })

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
