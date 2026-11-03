import { Phone } from 'lucide-react'
import { useBakery } from '../content'
import { Button } from './Button'
import { useInView } from '../../../hooks/useInView'

export function BakeryOrder() {
  const bakery = useBakery()
  const copy = bakery.c.orderSection
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section id="encargar" ref={ref} aria-labelledby="order-heading" className="bg-bakery text-bakery-flour">
      <div
        className={`bakery-container bakery-section max-w-3xl text-center transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <p className="text-[0.75rem] font-medium tracking-[0.2em] text-bakery-wheat uppercase">{copy.eyebrow}</p>
        <h2 id="order-heading" className="display mt-4 text-[2.15rem] md:text-[3rem] lg:text-[3.5rem]">
          {copy.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-bakery-flour/80 lg:text-lg">{copy.description}</p>
        <a
          href={`tel:${bakery.phone.tel}`}
          className="display mt-8 inline-flex min-h-12 items-center text-4xl md:text-5xl lg:text-6xl"
        >
          {bakery.phone.display}
        </a>
        <div className="mt-8 flex justify-center">
          <Button href={`tel:${bakery.phone.tel}`} size="lg" className="gap-2 bg-bakery-flour text-bakery hover:bg-white">
            <Phone size={16} aria-hidden />
            {copy.call}
          </Button>
        </div>
      </div>
    </section>
  )
}
