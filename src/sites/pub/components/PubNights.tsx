import { usePub } from '../content'
import { useInView } from '../../../hooks/useInView'

export function PubNights() {
  const pub = usePub()
  const copy = pub.c.nights
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section
      id="noches"
      ref={ref}
      aria-labelledby="nights-heading"
      className="pub-section bg-pub-wood"
    >
      <div
        className={`pub-container transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <div className="max-w-2xl">
          <p className="pub-eyebrow">{copy.eyebrow}</p>
          <h2
            id="nights-heading"
            className="mt-4 font-sans text-[2rem] font-bold text-pub-cream md:text-[2.5rem] lg:text-[3.5rem]"
          >
            {copy.title}
          </h2>
        </div>
        <ul className="mt-10 divide-y divide-pub-line border-y border-pub-line lg:mt-14">
          {pub.nights.map((night) => (
            <li
              key={night.id}
              className="grid gap-3 py-7 md:grid-cols-[8rem_1fr] md:items-baseline md:gap-10 lg:py-9"
            >
              <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-pub uppercase">
                {night.day}
              </p>
              <div>
                <h3 className="text-xl font-bold text-pub-cream lg:text-2xl">{night.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-pub-muted lg:text-base">
                  {night.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
