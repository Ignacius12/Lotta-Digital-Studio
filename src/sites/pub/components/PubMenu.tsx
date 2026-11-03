import { usePub } from '../content'
import { useInView } from '../../../hooks/useInView'

function MenuList({
  title,
  items,
}: {
  title: string
  items: { id: string; name: string; price: string; description: string }[]
}) {
  return (
    <div>
      <h3 className="text-[0.7rem] font-semibold tracking-[0.22em] text-pub uppercase">{title}</h3>
      <ul className="mt-6 space-y-5">
        {items.map((item) => (
          <li key={item.id}>
            <div className="flex items-baseline gap-1">
              <p className="font-semibold text-pub-cream lg:text-lg">{item.name}</p>
              <span
                className="mx-3 mb-1 flex-1 border-b border-dotted border-pub-cream/25"
                aria-hidden
              />
              <p className="shrink-0 tabular-nums text-pub">{item.price}</p>
            </div>
            <p className="mt-1 text-sm text-pub-muted">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function PubMenu() {
  const pub = usePub()
  const copy = pub.c.menu
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section id="carta" ref={ref} aria-labelledby="menu-heading" className="pub-section bg-pub-bg">
      <div
        className={`pub-container transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <div className="max-w-2xl lg:mx-auto lg:text-center">
          <p className="pub-eyebrow">{copy.eyebrow}</p>
          <h2
            id="menu-heading"
            className="mt-4 font-sans text-[2rem] font-bold text-pub-cream md:text-[2.75rem] lg:text-[3.5rem]"
          >
            {copy.title}
          </h2>
        </div>
        <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-24">
          <MenuList title={copy.drinks} items={pub.drinks} />
          <MenuList title={copy.bites} items={pub.bites} />
        </div>
      </div>
    </section>
  )
}
