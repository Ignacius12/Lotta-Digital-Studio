import { MapPin, Navigation } from 'lucide-react'
import { useBakery } from '../content'
import { Button } from './Button'
import { useInView } from '../../../hooks/useInView'

export function BakeryLocation() {
  const { address, c, hours, name, phone, t } = useBakery()
  const fullAddress = `${address.street}, ${address.postalCode} ${address.city}`
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section
      id="contacto"
      ref={ref}
      aria-labelledby="bakery-location-heading"
      className="bakery-section bg-bakery-paper"
    >
      <div
        className={`bakery-container transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-2xl text-left lg:max-w-4xl lg:text-center">
          <p className="bakery-eyebrow">{c.locationEyebrow}</p>
          <h2
            id="bakery-location-heading"
            className="display mt-3 text-[2rem] text-bakery-ink md:text-[2.6rem] lg:mt-4 lg:text-[3.5rem] xl:text-[4rem]"
          >
            {name}
          </h2>
        </div>

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:gap-14 lg:gap-20">
          <div className="md:col-span-5">
            <address className="not-italic">
              <p className="display text-[1.65rem] leading-snug text-bakery-ink md:text-[1.9rem]">
                {fullAddress}
              </p>
              <p className="mt-3 flex items-start gap-2 text-bakery-ink-soft lg:text-lg">
                <MapPin
                  size={18}
                  className="mt-1 shrink-0 text-bakery"
                  aria-hidden
                />
                <span>{name}</span>
              </p>
              <a
                href={`tel:${phone.tel}`}
                className="mt-3 inline-flex min-h-11 items-center text-bakery hover:text-bakery-deep lg:text-lg"
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
                className="gap-2"
              >
                <Navigation size={16} aria-hidden />
                {t.directions}
              </Button>
            </div>
          </div>

          <div className="md:col-span-7">
            <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-bakery lg:text-base">
              {t.hours}
            </h3>
            <dl className="mt-5 divide-y divide-bakery-line border-y border-bakery-line">
              {hours.map((row) => (
                <div
                  key={row.days}
                  className="flex items-baseline justify-between gap-4 py-3.5 lg:py-4"
                >
                  <dt className="text-bakery-ink-soft lg:text-lg">{row.days}</dt>
                  <dd className="text-right font-medium tabular-nums text-bakery-ink lg:text-lg">
                    {row.hours}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm text-bakery-muted lg:text-base">
              {c.locationNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
