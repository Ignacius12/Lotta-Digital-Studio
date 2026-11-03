import { Phone } from 'lucide-react'
import { useRestaurant } from '../content'
import { Button } from './ui/Button'
import { SectionHeading } from './ui/SectionHeading'
import { unsplashSrcSet } from '../../shared/demo'
import { useInView } from '../../../hooks/useInView'

export function Reservations() {
  const { c, phone, reservationsImage } = useRestaurant()
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section
      id="reservas"
      ref={ref}
      aria-labelledby="reservas-heading"
      className="relative isolate overflow-hidden bg-olive"
    >
      <img
        src={reservationsImage}
        srcSet={unsplashSrcSet(reservationsImage)}
        sizes="100vw"
        alt=""
        width={1200}
        height={900}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-olive/80" aria-hidden="true" />

      <div
        className={`container-page relative section-pad max-w-3xl text-center transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <SectionHeading
          eyebrow={c.reservations.eyebrow}
          title={c.reservations.title}
          description={c.reservations.description}
          id="reservas-heading"
          light
        />

        <p className="mt-10 text-[0.7rem] font-medium tracking-[0.22em] text-olive-gold uppercase">
          {c.reservations.question}
        </p>
        <a
          href={`tel:${phone.tel}`}
          className="display mt-4 inline-flex min-h-12 items-center text-4xl text-white transition-colors hover:text-olive-gold md:text-5xl lg:text-6xl"
        >
          {phone.display}
        </a>
        <div className="mt-8 flex justify-center">
          <Button href={`tel:${phone.tel}`} variant="inverse" size="lg" className="gap-2">
            <Phone size={16} aria-hidden="true" />
            {c.reservations.call}
          </Button>
        </div>
      </div>
    </section>
  )
}
