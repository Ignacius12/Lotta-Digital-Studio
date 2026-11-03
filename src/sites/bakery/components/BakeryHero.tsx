import { unsplashSrcSet } from '../../shared/demo'
import { useBakery } from '../content'
import { Button } from './Button'

export function BakeryHero() {
  const { c, heroImage, name } = useBakery()
  const { hero } = c

  return (
    <section id="inicio" aria-labelledby="bakery-hero-heading" className="bg-bakery-flour">
      <div className="bakery-container grid items-center gap-10 py-12 md:gap-14 md:py-16 lg:min-h-[min(88svh,48rem)] lg:grid-cols-12 lg:gap-16 lg:py-20">
        <div className="order-2 lg:order-1 lg:col-span-5">
          <p className="bakery-eyebrow">{hero.eyebrow}</p>
          <div className="mt-5 h-px w-16 bg-bakery-wheat" aria-hidden />
          <h1 id="bakery-hero-heading" className="mt-6">
            <span className="display block text-[2.6rem] leading-none text-bakery sm:text-[3.4rem] md:text-[4rem] lg:text-[4.75rem]">
              {name}
            </span>
            <span className="display mt-4 block max-w-[16ch] text-[1.7rem] italic leading-[1.15] text-bakery-ink sm:text-[2.1rem] lg:text-[2.6rem]">
              {hero.title}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-bakery-ink-soft md:text-lg lg:text-xl">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#encargar" size="lg">
              {c.orderByPhone}
            </Button>
            <Button href="#panes" variant="secondary" size="lg">
              {c.seeBreads}
            </Button>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-3 gap-y-2 text-sm text-bakery-muted">
            {hero.meta.map((item, index) => (
              <li key={item} className="flex items-center gap-3">
                {index > 0 ? <span className="text-bakery-wheat" aria-hidden>·</span> : null}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-7">
          <div className="bg-bakery-paper p-3 sm:p-4 lg:p-5">
            <img
              src={heroImage.src}
              srcSet={unsplashSrcSet(heroImage.src)}
              sizes="(min-width: 1024px) 55vw, 100vw"
              alt={hero.imageAlt}
              width={heroImage.width}
              height={heroImage.height}
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/5] w-full object-cover sm:aspect-[16/10] lg:aspect-[4/5] lg:min-h-[34rem]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
