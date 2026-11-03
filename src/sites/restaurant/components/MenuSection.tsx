import { useState, type KeyboardEvent } from 'react'
import { useRestaurant, type MenuCategoryId } from '../content'
import { MenuItem } from './MenuItem'
import { SectionHeading } from './ui/SectionHeading'
import { useInView } from '../../../hooks/useInView'

export function MenuSection() {
  const { c, categories, menu } = useRestaurant()
  const [active, setActive] = useState<MenuCategoryId>('compartir')
  const { ref, visible } = useInView<HTMLElement>()

  const items = menu.filter((item) => item.category === active)
  const activeCategory = categories.find((category) => category.id === active) ?? categories[0]

  const selectCategory = (id: MenuCategoryId) => {
    setActive(id)
    requestAnimationFrame(() => {
      document.getElementById(`menu-tab-${id}`)?.focus()
    })
  }

  const onTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()
    const last = categories.length - 1
    let next = index
    if (event.key === 'ArrowRight') next = index === last ? 0 : index + 1
    if (event.key === 'ArrowLeft') next = index === 0 ? last : index - 1
    if (event.key === 'Home') next = 0
    if (event.key === 'End') next = last
    selectCategory(categories[next].id)
  }

  return (
    <section
      id="menu"
      ref={ref}
      aria-labelledby="menu-heading"
      className="section-pad bg-cream-deep/60"
    >
      <div
        className={`container-page transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <SectionHeading
          eyebrow={c.menu.eyebrow}
          title={c.menu.title}
          description={c.menu.description}
          id="menu-heading"
        />

        <div
          role="tablist"
          aria-label={c.menu.tabs}
          className="-mx-4 mt-10 flex gap-0 overflow-x-auto px-4 [scrollbar-width:thin] md:mx-0 md:flex-wrap md:justify-center md:overflow-visible md:px-0 lg:mt-14"
        >
          {categories.map((category, index) => {
            const selected = category.id === active
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                id={`menu-tab-${category.id}`}
                aria-selected={selected}
                aria-controls="menu-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(category.id)}
                onKeyDown={(event) => onTabKeyDown(event, index)}
                className={`min-h-11 shrink-0 border-b-2 px-4 text-[0.72rem] tracking-[0.16em] uppercase transition-colors lg:min-h-12 lg:px-5 ${
                  selected
                    ? 'border-olive text-olive'
                    : 'border-transparent text-muted hover:text-ink'
                }`}
              >
                {category.label}
              </button>
            )
          })}
        </div>

        <div className="mt-12 grid items-start gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-16 xl:gap-24">
          <div
            id="menu-panel"
            role="tabpanel"
            aria-labelledby={`menu-tab-${active}`}
            className="lg:col-span-7"
          >
            <h3 className="display mb-6 text-3xl italic text-ink lg:text-4xl">{activeCategory.label}</h3>
            {items.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>

          <aside className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28">
              <img
                key={active}
                src={activeCategory.src}
                alt={activeCategory.alt}
                width={1000}
                height={1250}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover animate-[fade-up_0.55s_ease_both]"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
