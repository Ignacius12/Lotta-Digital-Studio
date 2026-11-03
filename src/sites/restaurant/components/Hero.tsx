import { ChevronDown } from 'lucide-react'
import { unsplashSrcSet } from '../../shared/demo'
import { useRestaurant } from '../content'
import { Button } from './ui/Button'

export function Hero() {
  const { c, t, heroImage, shortName } = useRestaurant()

  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[min(100svh,52rem)] overflow-hidden bg-ink lg:min-h-svh"
    >
      <img
        src={heroImage.src}
        srcSet={unsplashSrcSet(heroImage.src)}
        sizes="100vw"
        alt={c.hero.imageAlt}
        width={heroImage.width}
        height={heroImage.height}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-ink/90 via-ink/72 to-ink/94"
        aria-hidden="true"
      />

      <div className="container-page relative flex min-h-[min(100svh,52rem)] flex-col justify-center pb-12 pt-20 md:pb-20 md:pt-28 lg:min-h-svh lg:pb-24 lg:pt-32">
        <div className="max-w-3xl text-white lg:max-w-4xl lg:text-center lg:mx-auto">
          <p className="fade-up text-[0.7rem] font-medium tracking-[0.28em] text-olive-gold uppercase">
            {shortName}
          </p>
          <div className="rest-rule mt-5 mb-7 bg-olive-gold lg:mx-auto" aria-hidden="true" />
          <h1
            id="hero-heading"
            className="display fade-up delay-1 text-[2.35rem] leading-[1.05] sm:text-[3.1rem] md:text-[3.75rem] lg:text-[5rem] xl:text-[5.6rem]"
          >
            {c.hero.title}
          </h1>
          <p className="fade-up delay-2 mt-6 max-w-xl text-base text-white/80 md:text-lg lg:mx-auto lg:mt-7 lg:max-w-2xl lg:text-xl">
            {c.hero.subtitle}
          </p>

          <div className="fade-up delay-3 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-12 lg:justify-center lg:gap-4">
            <Button href="#reservas" size="lg" className="w-full sm:w-auto">
              {c.book}
            </Button>
            <Button href="#menu" variant="outline-light" size="lg" className="w-full sm:w-auto">
              {c.seeMenu}
            </Button>
          </div>

          <ul className="fade-up delay-3 mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.7rem] tracking-[0.18em] text-white/70 uppercase lg:justify-center">
            {c.hero.meta.map((item, index) => (
              <li key={item} className="flex items-center gap-4">
                {index > 0 ? <span className="h-px w-4 bg-white/30" aria-hidden="true" /> : null}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <a
          href="#nosotros"
          className="scroll-hint absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/70 transition-colors hover:text-white lg:flex"
          aria-label={t.more}
        >
          <span className="text-[0.6rem] font-medium uppercase tracking-[0.24em]">{t.discover}</span>
          <ChevronDown size={20} strokeWidth={1.5} className="scroll-hint-icon" aria-hidden />
        </a>
      </div>
    </section>
  )
}
