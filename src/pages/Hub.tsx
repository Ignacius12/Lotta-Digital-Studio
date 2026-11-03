import { createContext, useContext, useEffect, useRef, useState, type MouseEvent, type ReactNode, type TransitionEvent } from 'react'
import { createPortal } from 'react-dom'
import { ArrowRight, ArrowUpRight, ChevronDown, Mail, MapPin, Menu, X } from 'lucide-react'
import logo from '../assets/logo-lotta.png'
import logoDark from '../assets/logo-lotta-dark.png'
import { useInView } from '../hooks/useInView'
import { copy, languages, type Lang, type LottaCopy } from '../i18n/copy'
import { rememberLang } from '../i18n/langs'
import { pathFor, type DemoId } from '../routes'
import { studioGraph } from '../schema'
import { unsplashSrcSet } from '../sites/shared/demo'

const mail = 'lotta.digital.studio@gmail.com'

const shell = 'mx-auto w-full max-w-[1760px] px-4 sm:px-6 lg:px-8 xl:px-10'

function nightRandom(seed: number) {
  let value = seed
  return () => {
    value = (value * 16807) % 2147483647
    return (value - 1) / 2147483646
  }
}

const nightStars = Array.from({ length: 96 }, (_, id) => {
  const random = nightRandom(1103 + id * 97)
  const bright = random() > 0.78
  return {
    id,
    left: random() * 100,
    top: random() * 100,
    size: bright ? 3.4 + random() * 1.8 : 2 + random() * 1.2,
    delay: random() * 5.5,
    duration: 2.2 + random() * 3.4,
    peak: bright ? 1 : 0.62 + random() * 0.32,
    tone: random() > 0.72 ? '#e9d5ff' : '#ffffff',
  }
})

const serviceMeta = ['Lotta Essential', 'Lotta Business', 'Lotta Premium']

const exampleMeta: { page: DemoId; name: string; image: string }[] = [
  {
    page: 'restaurant',
    name: 'Casa Oliva',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80&auto=format&fit=crop',
  },
  {
    page: 'clinic',
    name: 'Clínica Alba',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1400&q=80&auto=format&fit=crop',
  },
  {
    page: 'bakery',
    name: 'Horno La Espiga',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1400&q=80&auto=format&fit=crop',
  },
  {
    page: 'pub',
    name: 'El Candil',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1400&q=80&auto=format&fit=crop',
  },
]

const Language = createContext<{
  lang: Lang
  t: LottaCopy
} | null>(null)

function useCopy() {
  const value = useContext(Language)
  if (!value) throw new Error('Language')
  return value
}

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const { ref, visible } = useInView<HTMLDivElement>()
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition duration-700 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}

type Star = {
  id: number
  x: number
  y: number
  dx: number
  dy: number
  rot: number
  size: number
  color: string
}

const starColors = ['#c084fc', '#f7f7ff', '#7c3aed', '#ffe08a']
const Stars = createContext<(event: MouseEvent<HTMLElement>) => void>(() => {})

function useStarBurst() {
  const [stars, setStars] = useState<Star[]>([])
  const seq = useRef(0)

  const burst = (event: MouseEvent<HTMLElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX || rect.left + rect.width / 2
    const y = event.clientY || rect.top + rect.height / 2
    const batch = Array.from({ length: 14 }, (_, index) => {
      const angle = (Math.PI * 2 * index) / 14 + (Math.random() - 0.5) * 0.55
      const dist = 32 + Math.random() * 58
      seq.current += 1
      return {
        id: seq.current,
        x,
        y,
        dx: Math.cos(angle) * dist,
        dy: Math.sin(angle) * dist - 10,
        rot: (Math.random() - 0.5) * 200,
        size: 7 + Math.random() * 9,
        color: starColors[index % starColors.length],
      }
    })
    setStars((current) => [...current, ...batch])
    const ids = new Set(batch.map((star) => star.id))
    window.setTimeout(() => {
      setStars((current) => current.filter((star) => !ids.has(star.id)))
    }, 760)
  }

  return { stars, burst }
}

function StarLayer({ stars }: { stars: Star[] }) {
  if (stars.length === 0) return null
  return (
    <div className="pointer-events-none fixed inset-0 z-[80]" aria-hidden="true">
      {stars.map((star) => (
        <span
          key={star.id}
          className="lotta-star"
          style={{
            left: star.x,
            top: star.y,
            ['--dx' as string]: `${star.dx}px`,
            ['--dy' as string]: `${star.dy}px`,
            ['--rot' as string]: `${star.rot}deg`,
            ['--size' as string]: `${star.size}px`,
            ['--tone' as string]: star.color,
          }}
        />
      ))}
    </div>
  )
}

function FillLink({
  href,
  className = '',
  children,
  onClick,
}: {
  href: string
  className?: string
  children: ReactNode
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
}) {
  const burst = useContext(Stars)
  return (
    <a
      href={href}
      className={`lotta-fill ${className}`}
      onClick={(event) => {
        burst(event)
        onClick?.(event)
      }}
    >
      {children}
    </a>
  )
}

function TalkLink({ className = '' }: { className?: string }) {
  const { t } = useCopy()
  return (
    <FillLink
      href="#contacto"
      className={`inline-flex h-12 items-center justify-center gap-2 rounded-none bg-lotta-wash px-5 text-base font-semibold whitespace-nowrap text-lotta-ink sm:h-[3.75rem] sm:px-8 sm:text-lg ${className}`}
    >
      {t.write}
      <ArrowRight size={18} aria-hidden="true" />
    </FillLink>
  )
}

function StudioHeader() {
  const { t, lang } = useCopy()
  const [open, setOpen] = useState(false)
  const [hold, setHold] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const menuRef = useRef<HTMLElement>(null)
  const openRef = useRef(open)
  openRef.current = open

  useEffect(() => {
    if (!open || !hold) return
    let inner = 0
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => {
        if (openRef.current) menuRef.current?.classList.add('is-open')
      })
    })
    return () => {
      cancelAnimationFrame(outer)
      cancelAnimationFrame(inner)
    }
  }, [open, hold])

  useEffect(() => {
    if (open || !hold) return
    const timer = window.setTimeout(() => setHold(false), 560)
    return () => window.clearTimeout(timer)
  }, [open, hold])

  useEffect(() => {
    if (!hold) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const desktop = window.matchMedia('(min-width: 1024px)').matches
    const previous = document.body.style.overflow
    if (!desktop) document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [hold])

  const close = () => {
    setOpen(false)
    setLangOpen(false)
    menuRef.current?.classList.remove('is-open')
  }

  const onMenuTransition = (event: TransitionEvent<HTMLElement>) => {
    if (event.target !== event.currentTarget || event.propertyName !== 'opacity') return
    if (!open) setHold(false)
  }

  return (
    <header className="sticky top-0 z-50 text-white">
      <div
        className={`pointer-events-none absolute top-0 left-0 h-36 backdrop-blur-lg sm:h-52 ${hold ? 'right-0 lg:right-96' : 'right-0'}`}
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(to bottom, rgb(8 15 27 / 0.98) 0%, rgb(8 15 27 / 0.78) 40%, rgb(8 15 27 / 0.22) 72%, rgb(8 15 27 / 0) 100%)',
          maskImage: 'linear-gradient(to bottom, #000 0%, #000 38%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, #000 0%, #000 38%, transparent 100%)',
        }}
      />
      <div className={`relative z-50 flex h-20 items-center justify-between gap-3 sm:h-24 ${shell}`}>
        <a href="#inicio" className="inline-flex min-w-0 items-center" onClick={close}>
          <img src={logoDark} alt="Lotta Digital Studio" className="h-11 w-auto sm:h-16" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label={t.navLabel}>
          {t.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base text-white/75 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex size-12 items-center justify-center bg-transparent text-white"
          aria-expanded={open}
          aria-controls="menu-lotta"
          aria-label={open ? t.closeMenu : t.openMenu}
          onClick={() => {
            if (open) close()
            else {
              setHold(true)
              setOpen(true)
            }
          }}
        >
          {open ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </button>
      </div>

      {hold &&
        createPortal(
          <nav
            ref={menuRef}
            id="menu-lotta"
            aria-label={t.navLabel}
            onTransitionEnd={onMenuTransition}
            className="lotta-menu flex flex-col overflow-y-auto bg-lotta-ink px-5 pt-28 pb-12 text-white sm:px-10 lg:px-8"
          >
            <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col lg:max-w-none">
              <div className="grid lg:hidden">
                {t.nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={close}
                    className="border-b border-white/10 py-4 font-lotta text-4xl font-bold tracking-[-0.015em]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="mt-6 border-b border-white/10 lg:mt-0">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-4 font-lotta text-2xl font-bold"
                  aria-expanded={langOpen}
                  aria-controls="idiomas-lotta"
                  onClick={() => setLangOpen((value) => !value)}
                >
                  {t.language}
                  <ChevronDown
                    size={22}
                    aria-hidden="true"
                    className={`transition duration-300 ${langOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {langOpen && (
                  <ul id="idiomas-lotta" className="grid gap-1 pb-4 sm:grid-cols-2 lg:grid-cols-1">
                    {languages.map((item) => (
                      <li key={item.id}>
                        <a
                          href={pathFor('home', item.id)}
                          hrefLang={item.id}
                          lang={item.id}
                          aria-current={lang === item.id ? 'page' : undefined}
                          className={`inline-block px-1 py-2 text-left text-lg ${lang === item.id ? 'font-semibold' : ''}`}
                          onClick={() => rememberLang(item.id)}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <FillLink
                href="#contacto"
                onClick={close}
                className="mt-8 inline-flex h-14 w-full items-center justify-center rounded-none bg-lotta-wash text-base font-semibold text-lotta-ink"
              >
                {t.write}
              </FillLink>
            </div>
          </nav>,
          document.body,
        )}
    </header>
  )
}

function Hero() {
  const { t } = useCopy()
  const glow = useRef<HTMLDivElement>(null)

  const onMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    if (glow.current) {
      glow.current.style.background = `radial-gradient(540px circle at ${x}px ${y}px, rgb(124 58 237 / 0.28), transparent 62%)`
    }
  }

  return (
    <section
      aria-labelledby="reclamo"
      onMouseMove={onMouseMove}
      className="relative -mt-20 overflow-hidden bg-lotta-ink pt-20 text-white sm:-mt-24 sm:pt-24"
    >
      <div
        ref={glow}
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        aria-hidden="true"
      />
      <div
        className="lotta-orb pointer-events-none absolute -top-24 -left-16 size-[28rem] rounded-full bg-lotta-signal/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="lotta-orb-delayed pointer-events-none absolute -right-20 bottom-0 size-[24rem] rounded-full bg-lotta-glow/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(255 255 255 / 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.05) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 78%)',
        }}
      />
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {nightStars.map((star) => (
          <span
            key={star.id}
            className="lotta-night"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: star.size,
              height: star.size,
              background: star.tone,
              ['--delay' as string]: `${star.delay}s`,
              ['--dur' as string]: `${star.duration}s`,
              ['--peak' as string]: String(star.peak),
            }}
          />
        ))}
      </div>

      <div className={`relative flex justify-center py-16 sm:py-20 lg:py-40 ${shell}`}>
        <div className="lotta-rise flex max-w-3xl flex-col items-center text-center">
          <p className="inline-flex items-center gap-2 text-sm font-medium text-lotta-glow">
            <MapPin size={16} aria-hidden="true" />
            {t.kicker}
          </p>
          <h1
            id="reclamo"
            className="font-lotta mt-5 text-[clamp(2.7rem,3.5vw,4.25rem)] leading-[1.05] font-bold tracking-[-0.03em]"
          >
            {t.heroTitle}
            <span className="mt-1 block text-lotta-glow">{t.heroAccent}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/90 sm:text-lg">{t.heroBody}</p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <TalkLink />
            <FillLink
              href="#ejemplos"
              className="lotta-fill-line inline-flex h-12 items-center justify-center rounded-none border border-white/20 px-5 text-base font-semibold sm:h-[3.75rem] sm:px-8 sm:text-lg"
            >
              {t.seeExamples}
            </FillLink>
          </div>
          <a href="#sigue" className="mt-12 inline-flex text-white/80 sm:mt-16">
            <ChevronDown className="lotta-scroll-arrow" size={32} aria-hidden="true" />
            <span className="sr-only">{t.scroll}</span>
          </a>
        </div>
      </div>
    </section>
  )
}

function Chapter({
  index,
  title,
  id,
  intro,
  children,
  tone = 'paper',
}: {
  index: string
  title: string
  id: string
  intro: string
  children: ReactNode
  tone?: 'paper' | 'white'
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`scroll-mt-28 ${tone === 'white' ? 'bg-white' : 'bg-lotta-paper'}`}
    >
      <div className={`${shell} py-16 sm:py-20 lg:py-24`}>
        <Reveal>
          <p className="font-lotta text-2xl font-bold tracking-[0.08em] text-lotta-signal uppercase sm:text-3xl">
            {index}
          </p>
          <div className="mt-3 grid items-end gap-4 lg:grid-cols-12">
            <h2
              id={`${id}-heading`}
              className="font-lotta text-[clamp(2rem,3.2vw,3.4rem)] leading-[1.05] font-bold tracking-[-0.02em] lg:col-span-7"
            >
              {title}
            </h2>
            <p className="text-base text-lotta-muted lg:col-span-5 lg:text-lg">{intro}</p>
          </div>
        </Reveal>
        <div className="mt-8 sm:mt-10">{children}</div>
      </div>
    </section>
  )
}

function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? window.scrollY / max : 0
      if (bar.current) bar.current.style.transform = `scaleX(${progress})`
    }
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-1 bg-white/10" aria-hidden="true">
      <div ref={bar} className="h-full origin-left bg-lotta-glow" style={{ transform: 'scaleX(0)' }} />
    </div>
  )
}

export function Hub({ lang }: { lang: Lang }) {
  return (
    <Language.Provider value={{ lang, t: copy[lang] }}>
      <HubPage />
    </Language.Provider>
  )
}

function HubPage() {
  const { stars, burst } = useStarBurst()
  const { t, lang } = useCopy()
  const mailto = `mailto:${mail}?subject=${encodeURIComponent(t.mailtoSubject)}`
  const jsonLd = studioGraph({
    lang,
    title: t.metaTitle,
    description: t.metaDescription,
    jsonDescription: t.jsonDescription,
    email: mail,
    knowsAbout: t.knowsAbout,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&auto=format&fit=crop',
  })

  return (
    <Stars.Provider value={burst}>
    <div id="inicio" className="theme-lotta min-h-svh bg-lotta-paper text-lotta-ink">
      <ScrollProgress />
      <StarLayer stars={stars} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#contenido" className="skip-link">
        {t.skip}
      </a>
      <StudioHeader />

      <main id="contenido">
        <Hero />

        <section id="sigue" aria-label={t.beatsLabel} className="scroll-mt-24 border-b border-lotta-line bg-white sm:scroll-mt-28">
          <ol className={`grid sm:grid-cols-3 ${shell}`}>
            {t.beats.map((beat, index) => (
              <li
                key={beat.n}
                className="lotta-rise border-b border-lotta-line py-6 sm:border-b-0 sm:border-l sm:px-6 sm:first:border-l-0 sm:first:pl-0 lg:py-8"
                style={{ animationDelay: `${0.18 + index * 0.08}s` }}
              >
                <p className="font-lotta text-2xl font-bold tracking-[0.08em] text-lotta-signal sm:text-3xl">
                  {beat.n}
                </p>
                <h2 className="font-lotta mt-2 text-2xl font-bold tracking-[-0.015em]">{beat.title}</h2>
                <p className="mt-2 text-sm text-lotta-muted sm:text-base">{beat.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <Chapter
          id="recorrido"
          index={t.processIndex}
          title={t.processTitle}
          intro={t.processIntro}
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {t.steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 80} className="h-full">
                <article className="flex h-full flex-col rounded-none border border-lotta-line bg-white p-6 transition duration-300 hover:-translate-y-1.5 hover:border-lotta-signal/40 hover:shadow-[0_20px_50px_rgb(8_15_27/0.08)]">
                  <span className="font-lotta grid size-12 place-items-center rounded-none bg-lotta-ink text-lg font-bold text-white">
                    {step.number}
                  </span>
                  <h3 className="font-lotta mt-5 text-2xl leading-snug font-bold tracking-[-0.015em]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-lotta-muted sm:text-base">{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Chapter>

        <Chapter
          id="partida"
          index={t.startIndex}
          title={t.startTitle}
          intro={t.startIntro}
          tone="white"
        >
          <div className="grid gap-4 lg:grid-cols-3">
            {t.starts.map((item, index) => (
              <Reveal key={item.n} delay={index * 90}>
                <article className="h-full rounded-none bg-lotta-ink p-6 text-white transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgb(8_15_27/0.18)] sm:p-8">
                  <p className="font-lotta text-4xl font-bold tracking-[-0.02em] text-lotta-glow">
                    {item.n}
                  </p>
                  <h3 className="font-lotta mt-4 text-2xl font-bold tracking-[-0.015em]">{item.title}</h3>
                  <p className="mt-3 text-white/70">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Chapter>

        <Chapter
          id="servicios"
          index={t.servicesIndex}
          title={t.servicesTitle}
          intro={t.servicesIntro}
        >
          <div className="grid gap-4 lg:grid-cols-3">
            {t.services.map((service, index) => (
              <Reveal key={serviceMeta[index]} delay={index * 100}>
                <article className="flex h-full flex-col overflow-hidden rounded-none border border-lotta-line bg-white transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgb(8_15_27/0.08)]">
                  <div className="bg-lotta-ink px-6 py-5 text-white sm:px-8">
                    <p className="font-lotta text-xl font-bold tracking-[0.04em] uppercase sm:text-2xl">{serviceMeta[index]}</p>
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <h3 className="font-lotta text-[clamp(1.4rem,1.6vw,1.8rem)] leading-snug font-bold tracking-[-0.015em]">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-lotta-muted">{service.body}</p>
                    <ul className="mt-6 grid gap-3">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-sm sm:text-base">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-lotta-signal" aria-hidden="true" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Chapter>

        <Chapter
          id="ejemplos"
          index={t.examplesIndex}
          title={t.examplesTitle}
          intro={t.examplesIntro}
          tone="white"
        >
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {exampleMeta.map((example, index) => (
              <Reveal key={example.page} delay={index * 70} className="h-full">
                <a
                  href={pathFor(example.page, lang)}
                  className="group flex h-full flex-col overflow-hidden rounded-none border border-lotta-line bg-lotta-paper transition duration-300 hover:-translate-y-1.5 hover:border-lotta-signal/40 hover:shadow-[0_20px_50px_rgb(8_15_27/0.1)]"
                >
                  <span className="relative block overflow-hidden">
                    <img
                      src={example.image}
                      srcSet={unsplashSrcSet(example.image, [480, 720, 960])}
                      sizes="(min-width: 1280px) 22vw, (min-width: 640px) 45vw, 100vw"
                      alt={t.examples[index].imageAlt}
                      width={1400}
                      height={933}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </span>
                  <span className="flex flex-1 flex-col p-5">
                    <span className="font-lotta text-base font-bold tracking-[0.08em] text-lotta-signal uppercase sm:text-lg">
                      {t.examples[index].label}
                    </span>
                    <span className="font-lotta mt-2 text-2xl font-bold tracking-[-0.015em]">
                      {example.name}
                    </span>
                    <span className="mt-2 flex-1 text-sm text-lotta-muted">{t.examples[index].description}</span>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                      {t.enter}
                      <ArrowUpRight
                        size={16}
                        aria-hidden="true"
                        className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </Chapter>

        <section id="contacto" aria-labelledby="contacto-heading" className="scroll-mt-28 bg-lotta-paper">
          <div className={`${shell} py-16 sm:py-20 lg:py-24`}>
            <div className="relative overflow-hidden rounded-none bg-lotta-ink px-5 py-12 text-white sm:px-10 sm:py-16 lg:px-14">
              <div
                className="lotta-orb pointer-events-none absolute -top-20 -right-10 size-72 rounded-full bg-lotta-signal/50 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative grid items-end gap-10 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <p className="inline-flex items-center gap-3 font-lotta text-2xl font-bold tracking-[0.08em] text-lotta-glow uppercase sm:text-3xl">
                    <MapPin size={22} aria-hidden="true" />
                    {t.contactIndex}
                  </p>
                  <h2
                    id="contacto-heading"
                    className="font-lotta mt-4 text-[clamp(2.4rem,4vw,4.2rem)] leading-[1.08] font-bold tracking-[-0.02em]"
                  >
                    {t.contactTitle}
                  </h2>
                  <p className="mt-5 max-w-xl text-base text-white/75 sm:text-lg">{t.contactBody}</p>
                  <a
                    href={mailto}
                    className="mt-6 block max-w-full font-lotta text-[clamp(1.15rem,2vw,1.7rem)] leading-snug font-bold break-words text-lotta-glow underline decoration-lotta-glow/40 underline-offset-4"
                  >
                    lotta.digital.studio<wbr />@gmail.com
                  </a>
                </div>
                <div className="lg:col-span-5 lg:justify-self-end">
                  <FillLink
                    href={mailto}
                    className="inline-flex h-16 items-center justify-center gap-3 rounded-none bg-lotta-wash px-8 text-lg font-semibold text-lotta-ink"
                  >
                    <Mail size={20} aria-hidden="true" />
                    {t.sendMail}
                  </FillLink>
                  <p className="mt-4 text-sm text-white/55">{t.contactReply}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-lotta-line bg-white">
        <div className={`flex flex-col gap-8 py-10 md:flex-row md:items-end md:justify-between ${shell}`}>
          <div>
            <img src={logo} alt="Lotta Digital Studio" className="h-12 w-auto sm:h-14" />
            <p className="mt-3 text-sm text-lotta-muted">{t.footer}</p>
          </div>
          <nav aria-label={t.footerNav} className="flex flex-wrap gap-x-6 gap-y-2">
            {t.nav.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-lotta-muted hover:text-lotta-ink">
                {item.label}
              </a>
            ))}
          </nav>
          <p className="text-sm text-lotta-muted">© 2026</p>
        </div>
      </footer>
    </div>
    </Stars.Provider>
  )
}
