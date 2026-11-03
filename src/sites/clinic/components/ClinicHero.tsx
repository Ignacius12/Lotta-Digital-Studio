import { Fragment } from 'react'
import { unsplashSrcSet } from '../../shared/demo'
import { useClinic } from '../content'
import { Button } from './Button'

export function ClinicHero() {
  const { c, heroImage } = useClinic()
  const { hero } = c

  return (
    <section id="inicio" aria-labelledby="clinic-hero-heading" className="bg-clinic-ice">
      <div className="clinic-container grid items-center gap-10 py-12 md:gap-14 md:py-16 lg:min-h-[min(88svh,48rem)] lg:grid-cols-12 lg:gap-16 lg:py-20">
        <div className="order-2 md:order-1 lg:col-span-5">
          <p className="clinic-eyebrow">{hero.eyebrow}</p>
          <h1
            id="clinic-hero-heading"
            className="mt-5 max-w-[14ch] font-sans text-[2.35rem] font-medium leading-[1.12] tracking-tight text-clinic-ink sm:text-[2.85rem] md:text-[3.25rem] lg:text-[3.75rem] xl:text-[4.25rem]"
          >
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-clinic-ink-soft md:text-lg lg:text-xl">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-10">
            <Button href="#cita" size="lg">
              {c.book}
            </Button>
            <Button href="#tratamientos" variant="secondary" size="lg">
              {c.seeTreatments}
            </Button>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-sm text-clinic-muted lg:text-base">
            {hero.meta.map((item, index) => (
              <Fragment key={item}>
                {index > 0 ? (
                  <li aria-hidden="true" className="text-clinic-line">
                    ·
                  </li>
                ) : null}
                <li>{item}</li>
              </Fragment>
            ))}
          </ul>
        </div>

        <div className="order-1 md:order-2 lg:col-span-7">
          <div className="bg-clinic-mint p-2 sm:p-3 lg:p-4">
            <img
              src={heroImage.src}
              srcSet={unsplashSrcSet(heroImage.src)}
              sizes="(min-width: 1024px) 55vw, 100vw"
              alt={hero.imageAlt}
              width={heroImage.width}
              height={heroImage.height}
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/5] w-full object-cover sm:aspect-[16/10] lg:aspect-[5/4] lg:min-h-[30rem]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
