import { useRestaurant } from '../content'
import { Button } from './ui/Button'
import { SectionHeading } from './ui/SectionHeading'

export function Location() {
  const { address, c, hours, name, phone, t } = useRestaurant()
  const fullAddress = `${address.street}, ${address.postalCode} ${address.city}`

  return (
    <section id="contacto" aria-labelledby="location-heading" className="section-pad bg-cream">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow={c.locationEyebrow}
            title={name}
            id="location-heading"
            align="left"
          />
          <address className="mt-10 not-italic">
            <p className="display text-2xl leading-snug text-ink lg:text-3xl">{fullAddress}</p>
            <a
              href={`tel:${phone.tel}`}
              className="mt-5 inline-flex min-h-11 items-center text-lg text-olive hover:text-olive-deep"
            >
              {phone.display}
            </a>
          </address>
          <div className="mt-8">
            <Button
              href={address.mapsUrl}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.directions}
            </Button>
          </div>
        </div>

        <div className="lg:col-span-7 lg:pt-16">
          <h3 className="text-[0.7rem] font-medium tracking-[0.22em] text-olive uppercase">{t.hours}</h3>
          <dl className="mt-6 border-t border-line">
            {hours.map((row) => (
              <div
                key={row.days}
                className="flex items-baseline justify-between gap-6 border-b border-line py-4 lg:py-5"
              >
                <dt className="text-ink-soft lg:text-lg">{row.days}</dt>
                <dd className="text-right tabular-nums text-ink lg:text-lg">{row.hours}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
