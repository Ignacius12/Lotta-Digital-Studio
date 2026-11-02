import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Mail, MapPin, Menu, X } from 'lucide-react'
import { OfficeStage } from '../components/office/OfficeStage'
import { useInView } from '../hooks/useInView'

const mail = 'lotta.digital.studio@gmail.com'
const mailto = `mailto:${mail}?subject=${encodeURIComponent('Auditoría de la web')}`

const shell = 'mx-auto w-full max-w-[1760px] px-4 sm:px-6 lg:px-8 xl:px-10'

const nav = [
  { href: '#recorrido', label: 'Recorrido' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#ejemplos', label: 'Ejemplos' },
  { href: '#contacto', label: 'Contacto' },
]

const beats = [
  { n: '01', title: 'Te entienden', text: 'Qué haces y para quién, en la primera pantalla.' },
  { n: '02', title: 'Siguen un camino', text: 'De esa frase al contacto, sin distracciones.' },
  { n: '03', title: 'Te escriben', text: 'El email está a la vista y se entiende qué pasa al pulsarlo.' },
]

const outcomes = [
  {
    n: '01',
    title: 'La primera pantalla decide',
    text: 'Si hace falta un párrafo para saber qué vendes, el visitante se va antes de bajar.',
  },
  {
    n: '02',
    title: 'Un camino, no un menú de dudas',
    text: 'Cada bloque empuja al siguiente. Nada compite con la acción que te interesa.',
  },
  {
    n: '03',
    title: 'El email no se esconde',
    text: 'Quien ya está convencido encuentra dónde escribir sin rebuscar en el pie.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Nos cuentas el negocio',
    text: 'Qué vendes, a quién y qué debería hacer alguien que llega a la web por primera vez.',
  },
  {
    number: '02',
    title: 'Auditamos el recorrido',
    text: 'Si ya hay web, la cruzamos como un cliente con prisa. Si no existe, definimos el hueco que tiene que ocupar.',
  },
  {
    number: '03',
    title: 'Diseñamos y construimos',
    text: 'Mensaje, páginas y botón en una sola historia. El diseño sostiene esa historia, no la sustituye.',
  },
  {
    number: '04',
    title: 'La publicamos',
    text: 'Queda online, es tuya y se puede ver qué hacen las visitas después de entrar.',
  },
]

const services = [
  {
    number: '01',
    name: 'Auditoría',
    title: 'Ver la web con los ojos de quien compra.',
    body: 'Señalamos dónde se pierde el mensaje, dónde sobra ruido y qué impide que te escriban.',
    points: [
      'Recorrido real, de la entrada al email',
      'Mensaje, jerarquía y puntos de fricción',
      'Informe corto, en orden de prioridad',
    ],
  },
  {
    number: '02',
    name: 'Creación',
    title: 'La web que tu empresa puede defender.',
    body: 'La construimos de cero o desde lo que la auditoría ha dejado claro. Una dirección visual propia, no una plantilla con el logo cambiado.',
    points: [
      'Textos que se entienden a la primera',
      'Diseño a medida, con carácter propio',
      'Web publicada y lista para medir',
    ],
  },
]

const examples = [
  {
    to: '/restaurante',
    label: 'Restaurante',
    name: 'Casa Oliva',
    description: 'Cena para compartir: producto, mesa larga y reserva a la vista.',
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80&auto=format&fit=crop',
    imageAlt: 'Mesa de restaurante con platos mediterráneos',
  },
  {
    to: '/clinica',
    label: 'Clínica dental',
    name: 'Clínica Alba',
    description: 'Primera visita sin sorpresas: calma, claridad y una cita fácil.',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1400&q=80&auto=format&fit=crop',
    imageAlt: 'Recepción luminosa de clínica dental moderna',
  },
  {
    to: '/horno',
    label: 'Horno',
    name: 'Horno La Espiga',
    description: 'La compra de la mañana: pan, bollería y encargos del domingo.',
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1400&q=80&auto=format&fit=crop',
    imageAlt: 'Panes artesanos recién horneados',
  },
  {
    to: '/pub',
    label: 'Pub',
    name: 'El Candil',
    description: 'Quedar con amigos: cañas, ambiente y mesas de grupo.',
    image:
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1400&q=80&auto=format&fit=crop',
    imageAlt: 'Interior cálido de pub con barra de madera',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Lotta Digital Studio',
  description:
    'Estudio en Valencia de auditoría y creación de webs para empresas.',
  url: 'https://ignacius12.github.io/PruebaWeb/',
  email: mail,
  areaServed: 'ES',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Valencia',
    addressCountry: 'ES',
  },
  knowsAbout: ['Auditoría web', 'Diseño de experiencia', 'Creación de páginas web'],
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

function Mark({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-block size-2.5 rounded-sm bg-lotta-glow ${className}`}
      aria-hidden="true"
    />
  )
}

function TalkLink({ className = '' }: { className?: string }) {
  return (
    <a
      href="#contacto"
      className={`inline-flex h-12 items-center justify-center gap-2 rounded-none bg-white px-5 text-base font-semibold whitespace-nowrap text-lotta-ink transition duration-300 hover:-translate-y-0.5 hover:bg-lotta-glow sm:h-[3.75rem] sm:px-8 sm:text-lg ${className}`}
    >
      Hablemos
      <ArrowRight size={18} aria-hidden="true" />
    </a>
  )
}

function StudioHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#101614] text-white">
      <div className={`relative z-50 flex h-20 items-center justify-between gap-3 sm:h-24 ${shell}`}>
        <a href="#inicio" className="inline-flex min-w-0 items-center gap-2.5" onClick={close}>
          <Mark />
          <span className="font-lotta text-2xl leading-none font-bold tracking-[-0.015em] sm:text-[1.7rem]">
            Lotta
          </span>
          <span className="hidden text-xs font-medium tracking-[0.14em] text-white/55 uppercase lg:inline">
            Digital Studio · Valencia
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Secciones">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base text-white/75 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <TalkLink />
          <button
            type="button"
            className="inline-flex size-12 items-center justify-center rounded-none border border-white/15 lg:hidden"
            aria-expanded={open}
            aria-controls="menu-lotta"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-lotta"
          aria-label="Secciones"
          className="fixed inset-0 z-40 flex flex-col bg-[#101614] px-5 pt-28 text-white sm:px-8 lg:hidden"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
              className="border-b border-white/10 py-4 font-lotta text-4xl font-bold tracking-[-0.015em]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={close}
            className="mt-8 inline-flex h-14 items-center justify-center rounded-none bg-white text-base font-semibold text-lotta-ink"
          >
            Hablemos
          </a>
        </nav>
      )}
    </header>
  )
}

function Hero() {
  const glow = useRef<HTMLDivElement>(null)

  const onMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    if (glow.current) {
      glow.current.style.background = `radial-gradient(540px circle at ${x}px ${y}px, rgb(45 212 191 / 0.22), transparent 62%)`
    }
  }

  return (
    <section
      aria-labelledby="reclamo"
      onMouseMove={onMouseMove}
      className="relative overflow-hidden bg-[#101614] text-white"
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
        className="lotta-orb-delayed pointer-events-none absolute -right-20 bottom-0 size-[24rem] rounded-full bg-emerald-300/20 blur-3xl"
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

      <div className={`relative grid items-center gap-8 py-12 sm:py-16 lg:grid-cols-2 lg:items-stretch lg:gap-6 lg:py-14 ${shell}`}>
        <div className="lotta-rise flex flex-col justify-center">
          <p className="inline-flex items-center gap-2 text-sm font-medium text-lotta-glow">
            <MapPin size={16} aria-hidden="true" />
            Estudio digital en Valencia
          </p>
          <h1
            id="reclamo"
            className="font-lotta mt-5 text-[clamp(2.7rem,3.5vw,4.25rem)] leading-[1.05] font-bold tracking-[-0.03em]"
          >
            Una web clara
            <span className="mt-1 block text-lotta-glow">vende antes de la llamada.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/72 sm:text-lg">
            Auditamos cómo te leen tus clientes y creamos la web que lo deja resuelto. El orden es
            siempre el mismo: primero te entienden, después avanzan, al final te escriben.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TalkLink />
            <a
              href="#ejemplos"
              className="inline-flex h-12 items-center justify-center rounded-none border border-white/20 px-5 text-base font-semibold transition duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/10 sm:h-[3.75rem] sm:px-8 sm:text-lg"
            >
              Ver ejemplos
            </a>
          </div>
        </div>
        <div className="lotta-rise-2 h-full min-h-[300px] lg:min-h-[640px]">
          <OfficeStage />
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

export function Hub() {
  useEffect(() => {
    document.title = 'Lotta Digital Studio | Auditoría y creación web'
  }, [])

  return (
    <div id="inicio" className="theme-lotta min-h-svh bg-lotta-paper text-lotta-ink">
      <ScrollProgress />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <StudioHeader />

      <main id="contenido">
        <Hero />

        <section aria-label="La promesa, en tres pasos" className="border-b border-lotta-line bg-white">
          <ol className={`grid sm:grid-cols-3 ${shell}`}>
            {beats.map((beat, index) => (
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
          index="02 — El recorrido"
          title="De la primera conversación a la web publicada."
          intro="Cuatro pasos, siempre en este orden. Cada uno deja algo concreto: contexto, diagnóstico, la web y la publicación."
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 80} className="h-full">
                <article className="flex h-full flex-col rounded-none border border-lotta-line bg-white p-6 transition duration-300 hover:-translate-y-1.5 hover:border-lotta-signal/40 hover:shadow-[0_20px_50px_rgb(16_22_20/0.08)]">
                  <span className="font-lotta grid size-12 place-items-center rounded-none bg-[#101614] text-lg font-bold text-white">
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
          id="resultados"
          index="03 — Lo que queda resuelto"
          title="Si esto no ocurre, la web no está terminada."
          intro="No medimos el diseño por cómo se ve en una captura. Lo medimos por si un cliente nuevo puede avanzar solo."
          tone="white"
        >
          <div className="grid gap-4 lg:grid-cols-3">
            {outcomes.map((item, index) => (
              <Reveal key={item.n} delay={index * 90}>
                <article className="h-full rounded-none bg-[#101614] p-6 text-white transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgb(16_22_20/0.18)] sm:p-8">
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
          index="04 — Servicios"
          title="Dos encargos. Juntos o por separado."
          intro="Puedes pedir solo el diagnóstico o la web completa. En los dos casos el criterio es el mismo: claridad y un siguiente paso."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.number} delay={index * 100}>
                <article className="h-full overflow-hidden rounded-none border border-lotta-line bg-white transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgb(16_22_20/0.08)]">
                  <div className="flex items-center justify-between bg-[#101614] px-6 py-5 text-white sm:px-8">
                    <p className="font-lotta text-xl font-bold tracking-[0.08em] uppercase sm:text-2xl">{service.name}</p>
                    <p className="font-lotta text-3xl font-bold text-lotta-glow">{service.number}</p>
                  </div>
                  <div className="p-6 sm:p-8">
                    <h3 className="font-lotta text-[clamp(1.6rem,2vw,2.1rem)] leading-snug font-bold tracking-[-0.015em]">
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
          index="05 — Ejemplos"
          title="Entra y recorre el criterio."
          intro="Cuatro webs de ejemplo, cuatro oficios. En todas pasa lo mismo: un mensaje, un camino y una forma clara de seguir. Son demostraciones, no clientes."
          tone="white"
        >
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {examples.map((example, index) => (
              <Reveal key={example.to} delay={index * 70} className="h-full">
                <Link
                  to={example.to}
                  className="group flex h-full flex-col overflow-hidden rounded-none border border-lotta-line bg-lotta-paper transition duration-300 hover:-translate-y-1.5 hover:border-lotta-signal/40 hover:shadow-[0_20px_50px_rgb(16_22_20/0.1)]"
                >
                  <span className="relative block overflow-hidden">
                    <img
                      src={example.image}
                      alt={example.imageAlt}
                      width={1400}
                      height={933}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </span>
                  <span className="flex flex-1 flex-col p-5">
                    <span className="font-lotta text-base font-bold tracking-[0.08em] text-lotta-signal uppercase sm:text-lg">
                      {example.label}
                    </span>
                    <span className="font-lotta mt-2 text-2xl font-bold tracking-[-0.015em]">
                      {example.name}
                    </span>
                    <span className="mt-2 flex-1 text-sm text-lotta-muted">{example.description}</span>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
                      Entrar
                      <ArrowUpRight
                        size={16}
                        aria-hidden="true"
                        className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Chapter>

        <section id="contacto" aria-labelledby="contacto-heading" className="scroll-mt-28 bg-lotta-paper">
          <div className={`${shell} py-16 sm:py-20 lg:py-24`}>
            <div className="relative overflow-hidden rounded-none bg-[#101614] px-5 py-12 text-white sm:px-10 sm:py-16 lg:px-14">
              <div
                className="lotta-orb pointer-events-none absolute -top-20 -right-10 size-72 rounded-full bg-lotta-signal/50 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative grid items-end gap-10 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <p className="inline-flex items-center gap-3 font-lotta text-2xl font-bold tracking-[0.08em] text-lotta-glow uppercase sm:text-3xl">
                    <MapPin size={22} aria-hidden="true" />
                    06 — Contacto · Valencia
                  </p>
                  <h2
                    id="contacto-heading"
                    className="font-lotta mt-4 text-[clamp(2.4rem,4vw,4.2rem)] leading-[1.08] font-bold tracking-[-0.02em]"
                  >
                    Cuéntanos el negocio por email.
                  </h2>
                  <p className="mt-5 text-base text-white/75 sm:text-lg">Envía un email a</p>
                  <a
                    href={mailto}
                    className="mt-2 block max-w-full font-lotta text-[clamp(1.15rem,2vw,1.7rem)] leading-snug font-bold break-words text-lotta-glow underline decoration-lotta-glow/40 underline-offset-4"
                  >
                    lotta.digital.studio<wbr />@gmail.com
                  </a>
                  <p className="mt-4 max-w-xl text-base text-white/75 sm:text-lg">
                    Qué vendes, a quién, y si ya tienes web. Te decimos si toca auditar, crear, o
                    las dos cosas.
                  </p>
                </div>
                <div className="lg:col-span-5 lg:justify-self-end">
                  <a
                    href={mailto}
                    className="inline-flex h-16 items-center justify-center gap-3 rounded-none bg-white px-8 text-lg font-semibold text-lotta-ink transition duration-300 hover:-translate-y-0.5 hover:bg-lotta-glow"
                  >
                    <Mail size={20} aria-hidden="true" />
                    Enviar un email
                  </a>
                  <p className="mt-4 text-sm text-white/55">Respuesta en un día laborable · Valencia</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-lotta-line bg-white">
        <div className={`flex flex-col gap-8 py-10 md:flex-row md:items-end md:justify-between ${shell}`}>
          <div>
            <p className="inline-flex items-center gap-2.5">
              <Mark />
              <span className="font-lotta text-3xl font-bold tracking-[-0.015em]">Lotta</span>
            </p>
            <p className="mt-3 text-sm text-lotta-muted">
              Digital Studio · Auditoría y creación web · Valencia
            </p>
          </div>
          <nav aria-label="Pie" className="flex flex-wrap gap-x-6 gap-y-2">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-lotta-muted hover:text-lotta-ink">
                {item.label}
              </a>
            ))}
          </nav>
          <p className="text-sm text-lotta-muted">© 2026</p>
        </div>
      </footer>
    </div>
  )
}
