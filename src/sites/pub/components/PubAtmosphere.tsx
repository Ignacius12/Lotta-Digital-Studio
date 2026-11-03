import { usePub } from '../content'
import { useInView } from '../../../hooks/useInView'

export function PubAtmosphere() {
  const { c, gallery } = usePub()
  const { atmosphere } = c
  const { ref, visible } = useInView<HTMLElement>()
  const moodImage = gallery[0]

  return (
    <section
      id="ambiente"
      ref={ref}
      aria-labelledby="atmosphere-heading"
      className="pub-section bg-pub-panel"
    >
      <div
        className={`pub-container transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-2xl text-left lg:max-w-4xl lg:text-center">
          <p className="pub-eyebrow lg:text-sm">{atmosphere.eyebrow}</p>
          <h2
            id="atmosphere-heading"
            className="mt-3 font-sans text-[2rem] font-bold leading-tight text-pub-cream md:text-[2.5rem] lg:mt-4 lg:text-[3.5rem] xl:text-[4rem]"
          >
            {atmosphere.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-pub-muted md:text-lg lg:mx-auto lg:mt-6 lg:max-w-2xl lg:text-xl">
            {atmosphere.body}
          </p>
        </div>

        <div className="mt-10 grid items-start gap-10 md:mt-14 md:grid-cols-12 md:gap-14 lg:gap-16">
          <div className="md:col-span-6 lg:col-span-7">
            <img
              src={moodImage.src}
              alt={moodImage.alt}
              width={moodImage.width}
              height={moodImage.height}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover lg:aspect-[16/11] lg:min-h-[26rem]"
            />
          </div>
          <ul className="md:col-span-6 lg:col-span-5 lg:pt-4">
            {atmosphere.points.map((point, index) => (
              <li
                key={point}
                className="border-t border-pub-line py-4 text-lg text-pub-cream first:border-t-0 first:pt-0 md:first:border-t md:first:pt-4 lg:py-5 lg:text-xl"
              >
                <span className="mr-3 text-[0.7rem] font-semibold tracking-[0.18em] text-pub uppercase" aria-hidden>
                  {String(index + 1).padStart(2, '0')}
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
