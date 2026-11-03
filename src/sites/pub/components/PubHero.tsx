import { ChevronDown } from 'lucide-react'
import { unsplashSrcSet } from '../../shared/demo'
import { usePub } from '../content'
import { Button } from './Button'

export function PubHero() {
  const { c, heroImage, name, t } = usePub()
  const { hero } = c

  return (
    <section
      id="inicio"
      aria-labelledby="pub-hero-heading"
      className="relative isolate min-h-[min(100svh,54rem)] overflow-hidden bg-pub-bg lg:min-h-svh"
    >
      <img
        src={heroImage.src}
        srcSet={unsplashSrcSet(heroImage.src)}
        sizes="100vw"
        alt={hero.imageAlt}
        width={heroImage.width}
        height={heroImage.height}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-pub-bg/92 via-pub-bg/72 to-pub-bg" aria-hidden />

      <div className="pub-container relative flex min-h-[min(100svh,54rem)] flex-col justify-center pb-12 pt-20 lg:min-h-svh lg:pb-24 lg:pt-32">
        <div className="max-w-3xl lg:mx-auto lg:text-center">
          <p className="text-[0.7rem] font-semibold tracking-[0.28em] text-pub uppercase">{hero.eyebrow}</p>
          <h1 id="pub-hero-heading" className="mt-5">
            <span className="block font-sans text-[2.6rem] font-bold leading-none tracking-tight text-pub-cream sm:text-[3.4rem] lg:text-[5rem]">
              {name}
            </span>
            <span className="mt-4 block max-w-[16ch] font-sans text-[1.45rem] font-medium leading-snug text-pub-cream/90 sm:text-[1.85rem] lg:mx-auto lg:text-[2.35rem]">
              {hero.title}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-pub-muted md:text-lg lg:mx-auto lg:text-xl">
            {hero.subtitle}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row lg:justify-center">
            <Button href="#reservas" size="lg">
              {c.bookTable}
            </Button>
            <Button href="#carta" variant="secondary" size="lg">
              {c.seeMenu}
            </Button>
          </div>
        </div>
        <a
          href="#ambiente"
          className="scroll-hint absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-pub-cream/70 lg:flex"
          aria-label={t.more}
        >
          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.24em]">{t.discover}</span>
          <ChevronDown size={20} strokeWidth={1.5} className="scroll-hint-icon" aria-hidden />
        </a>
      </div>
    </section>
  )
}
