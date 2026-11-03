import { useEffect, useId, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useBakery } from '../content'
import { useInView } from '../../../hooks/useInView'

const AUTO_MS = 4500

export function BakeryProducts() {
  const bakery = useBakery()
  const { products } = bakery
  const copy = bakery.c.products
  const labelId = useId()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [stopped, setStopped] = useState(false)
  const active = products[index]
  const { ref, visible } = useInView<HTMLElement>()

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || paused || stopped || products.length < 2) return

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % products.length)
    }, AUTO_MS)

    return () => window.clearInterval(timer)
  }, [paused, stopped, products.length])

  const goTo = (next: number) => {
    setStopped(true)
    setIndex((next + products.length) % products.length)
  }

  return (
    <section
      id="panes"
      ref={ref}
      aria-labelledby="products-heading"
      className="bakery-section bg-bakery-paper"
    >
      <div
        className={`bakery-container transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <p className="bakery-eyebrow">{copy.eyebrow}</p>
          <h2
            id="products-heading"
            className="display mt-3 text-[2rem] text-bakery-ink md:text-[2.6rem] lg:mt-4 lg:text-[3.5rem] xl:text-[4rem]"
          >
            {copy.title}
          </h2>
          <p className="mt-4 text-bakery-muted lg:mx-auto lg:mt-5 lg:max-w-2xl lg:text-lg">
            {copy.description}
          </p>
        </div>

        <div
          className="mt-10 grid items-start gap-8 lg:mt-14 lg:grid-cols-12 lg:gap-12 xl:gap-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
              setPaused(false)
            }
          }}
        >
          <div className="lg:col-span-7 xl:col-span-8">
            <div
              role="group"
              aria-roledescription={copy.carousel}
              aria-labelledby={labelId}
              className="overflow-hidden bg-bakery-flour"
            >
              <p id={labelId} className="sr-only">
                {copy.slide(index + 1, products.length, active.name)}
              </p>

              <div className="relative aspect-[4/3] w-full overflow-hidden bg-bakery-paper md:aspect-[16/10] lg:aspect-[16/11]">
                {products.map((item, i) => (
                  <img
                    key={item.id}
                    src={item.src}
                    alt={item.alt}
                    width={1000}
                    height={750}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                      i === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-end justify-between gap-4 border-t border-bakery-line px-5 py-5 md:px-7 md:py-6 lg:px-8 lg:py-7">
                <div>
                  <h3 className="display text-2xl text-bakery-ink md:text-[1.85rem] lg:text-[2.15rem]">
                    {active.name}
                  </h3>
                  <p className="mt-1 text-sm text-bakery-muted lg:text-base">
                    {active.description}
                  </p>
                </div>
                <p className="shrink-0 text-xl font-medium tabular-nums text-bakery md:text-2xl lg:text-3xl">
                  {active.price}
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-4 lg:hidden">
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                className="inline-flex min-h-11 min-w-11 items-center justify-center border border-bakery-line text-bakery-ink hover:border-bakery hover:text-bakery"
                aria-label={copy.prev}
              >
                <ChevronLeft aria-hidden size={20} />
              </button>

              <div
                className="flex flex-wrap items-center justify-center"
                role="tablist"
                aria-label={copy.dots}
              >
                {products.map((item, i) => (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={copy.see(item.name)}
                    onClick={() => goTo(i)}
                    className="group inline-flex h-6 w-6 items-center justify-center"
                  >
                    <span
                      aria-hidden
                      className={`h-2.5 w-2.5 rounded-none transition-colors ${
                        i === index ? 'bg-bakery' : 'bg-bakery-line group-hover:bg-bakery/50'
                      }`}
                    />
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => goTo(index + 1)}
                className="inline-flex min-h-11 min-w-11 items-center justify-center border border-bakery-line text-bakery-ink hover:border-bakery hover:text-bakery"
                aria-label={copy.next}
              >
                <ChevronRight aria-hidden size={20} />
              </button>
            </div>
          </div>

          <aside className="hidden lg:col-span-5 lg:block xl:col-span-4">
            <p className="text-sm font-medium uppercase tracking-[0.14em] text-bakery">
              {copy.side}
            </p>
            <ul className="mt-4 divide-y divide-bakery-line border-y border-bakery-line">
              {products.map((item, i) => {
                const selected = i === index
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => goTo(i)}
                      className={`flex w-full items-baseline justify-between gap-4 py-4 text-left transition-colors lg:py-5 ${
                        selected
                          ? 'text-bakery'
                          : 'text-bakery-ink hover:text-bakery'
                      }`}
                      aria-current={selected ? 'true' : undefined}
                    >
                      <span
                        className={`text-base lg:text-lg ${
                          selected ? 'font-medium' : ''
                        }`}
                      >
                        {item.name}
                      </span>
                      <span className="shrink-0 tabular-nums text-bakery-muted">
                        {item.price}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                className="inline-flex min-h-11 min-w-11 items-center justify-center border border-bakery-line text-bakery-ink hover:border-bakery hover:text-bakery"
                aria-label={copy.prev}
              >
                <ChevronLeft aria-hidden size={20} />
              </button>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                className="inline-flex min-h-11 min-w-11 items-center justify-center border border-bakery-line text-bakery-ink hover:border-bakery hover:text-bakery"
                aria-label={copy.next}
              >
                <ChevronRight aria-hidden size={20} />
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
