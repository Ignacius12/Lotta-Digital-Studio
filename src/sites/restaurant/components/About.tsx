import { useRestaurant } from '../content'
import { useInView } from '../../../hooks/useInView'

export function About() {
  const { c, aboutImage } = useRestaurant()
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section
      id="nosotros"
      ref={ref}
      aria-labelledby="about-heading"
      className="section-pad bg-cream"
    >
      <div
        className={`container-page grid items-center gap-12 transition-all duration-700 lg:grid-cols-12 lg:gap-20 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <div className="lg:col-span-5">
          <p className="eyebrow">{c.about.eyebrow}</p>
          <div className="rest-rule mt-4 mb-6" aria-hidden="true" />
          <h2
            id="about-heading"
            className="display text-[2.15rem] leading-[1.08] text-ink md:text-[3rem] lg:text-[3.5rem]"
          >
            {c.about.title}
          </h2>
          <div className="relative mt-10 overflow-hidden lg:mt-14">
            <img
              src={aboutImage.src}
              alt={c.about.imageAlt}
              width={aboutImage.width}
              height={aboutImage.height}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-7 lg:pt-24">
          <ol className="space-y-10 lg:space-y-14">
            {c.about.blocks.map((block, index) => (
              <li key={block.heading} className="grid grid-cols-[auto_1fr] gap-5 lg:gap-8">
                <span className="display text-2xl text-olive-gold lg:text-3xl">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-[0.72rem] font-medium tracking-[0.2em] text-olive uppercase">
                    {block.heading}
                  </h3>
                  <p className="mt-3 max-w-xl text-lg leading-relaxed text-ink-soft lg:text-xl">
                    {block.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
