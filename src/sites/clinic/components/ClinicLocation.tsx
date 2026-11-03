import { MapPin, Navigation } from 'lucide-react'
import { useClinic } from '../content'
import { Button } from './Button'
import { useInView } from '../../../hooks/useInView'

export function ClinicLocation() {
  const { address, c, hours, name, phone, t } = useClinic()
  const fullAddress = `${address.street}, ${address.postalCode} ${address.city}`
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section
      id="contacto"
      ref={ref}
      aria-labelledby="location-heading"
      className="clinic-section bg-clinic-ice"
    >
      <div
        className={`clinic-container transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-2xl text-left lg:max-w-4xl lg:text-center">
          <p className="clinic-eyebrow">{c.locationEyebrow}</p>
          <h2
            id="location-heading"
            className="mt-4 font-sans text-[2rem] font-medium tracking-tight text-clinic-ink md:text-[2.75rem] lg:text-[3.25rem]"
          >
            {name}
          </h2>
        </div>

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12 md:gap-14 lg:gap-20">
          <div className="md:col-span-5">
            <address className="not-italic">
              <p className="flex items-start gap-2 text-clinic-ink-soft lg:text-lg">
                <MapPin
                  size={18}
                  className="mt-1 shrink-0 text-clinic"
                  aria-hidden
                />
                <span>{fullAddress}</span>
              </p>
              <a
                href={`tel:${phone.tel}`}
                className="mt-3 inline-flex min-h-11 items-center text-clinic hover:text-clinic-deep lg:text-lg"
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
            <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-clinic lg:text-base">
              {t.hours}
            </h3>
            <dl className="mt-5 divide-y divide-clinic-line border-y border-clinic-line">
              {hours.map((row) => (
                <div
                  key={row.days}
                  className="flex items-baseline justify-between gap-4 py-3.5 lg:py-4"
                >
                  <dt className="text-clinic-ink-soft lg:text-lg">{row.days}</dt>
                  <dd className="text-right font-medium tabular-nums text-clinic-ink lg:text-lg">
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
