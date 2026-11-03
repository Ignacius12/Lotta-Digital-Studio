import { Phone } from 'lucide-react'
import { usePub } from '../content'
import { Button } from './Button'
import { useInView } from '../../../hooks/useInView'

export function PubReservations() {
  const pub = usePub()
  const copy = pub.c.reservations
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section id="reservas" ref={ref} aria-labelledby="pub-reservas-heading" className="bg-pub">
      <div
        className={`pub-container pub-section max-w-3xl text-center text-pub-bg transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <p className="text-[0.7rem] font-semibold tracking-[0.22em] uppercase">{copy.eyebrow}</p>
        <h2
          id="pub-reservas-heading"
          className="mt-4 font-sans text-[2.15rem] font-bold md:text-[3rem] lg:text-[3.5rem]"
        >
          {copy.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pub-bg/80 lg:text-lg">{copy.description}</p>
        <a
          href={`tel:${pub.phone.tel}`}
          className="mt-8 inline-flex min-h-12 items-center font-sans text-4xl font-bold md:text-5xl"
        >
          {pub.phone.display}
        </a>
        <div className="mt-8 flex justify-center">
          <Button href={`tel:${pub.phone.tel}`} variant="secondary" size="lg" className="gap-2 border-pub-bg text-pub-bg hover:bg-pub-bg hover:text-pub">
            <Phone size={16} aria-hidden />
            {copy.call}
          </Button>
        </div>
      </div>
    </section>
  )
}
