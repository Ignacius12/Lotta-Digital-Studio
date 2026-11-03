import { MapPin, Navigation } from 'lucide-react'
import { usePub } from '../content'
import { Button } from './Button'
import { useInView } from '../../../hooks/useInView'

export function PubLocation() {
  const { address, c, hours, name, phone, t } = usePub()
  const fullAddress = `${address.street}, ${address.postalCode} ${address.city}`
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section
      id="contacto"
      ref={ref}
      aria-labelledby="pub-location-heading"
      className="pub-section bg-pub-bg"
    >
      <div
        className={`pub-container transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-2xl text-left lg:max-w-4xl lg:text-center">
          <p className="pub-eyebrow lg:text-sm">{c.locationEyebrow}</p>
          <h2
            id="pub-location-heading"
            className="mt-3 font-sans text-[2rem] font-bold text-pub-cream md:text-[2.5rem] lg:mt-4 lg:text-[3.5rem] xl:text-[4rem]"
          >
            {name}
          </h2>
        </div>

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:gap-14 lg:gap-20">
          <div className="md:col-span-5">
            <address className="not-italic">
              <p className="font-sans text-[1.65rem] font-bold leading-snug text-pub-cream md:text-[1.9rem]">
                {fullAddress}
              </p>
              <p className="mt-3 flex items-start gap-2 text-pub-muted lg:text-lg">
                <MapPin
                  size={18}
                  className="mt-1 shrink-0 text-pub"
                  aria-hidden
                />
                <span>{name}</span>
              </p>
              <a
                href={`tel:${phone.tel}`}
                className="mt-3 inline-flex min-h-11 items-center font-medium text-pub hover:text-pub-deep lg:text-lg"
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
                className="gap-2 lg:min-h-14 lg:px-8 lg:text-base"
              >
                <Navigation size={16} aria-hidden />
                {t.directions}
              </Button>
            </div>
          </div>

          <div className="md:col-span-7">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-pub lg:text-base">
              {t.hours}
            </h3>
            <dl className="mt-5 divide-y divide-pub-line border-y border-pub-line">
              {hours.map((row) => (
                <div
                  key={row.days}
                  className="flex items-baseline justify-between gap-4 py-3.5 lg:py-4"
                >
                  <dt className="text-pub-muted lg:text-lg">{row.days}</dt>
                  <dd className="text-right font-semibold tabular-nums text-pub-cream lg:text-lg">
                    {row.hours}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
