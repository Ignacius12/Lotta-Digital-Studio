import { formatEuro } from '../../shared/demo'
import { useRestaurant, type Restaurant } from '../content'

interface MenuItemProps {
  item: Restaurant['menu'][number]
}

export function MenuItem({ item }: MenuItemProps) {
  const { lang } = useRestaurant()
  return (
    <article className="py-5 first:pt-0 lg:py-6">
      <div className="flex items-baseline gap-1">
        <h3 className="display text-[1.35rem] leading-none text-ink md:text-[1.5rem]">{item.name}</h3>
        <span className="rest-leader" aria-hidden="true" />
        <p className="shrink-0 text-sm tabular-nums tracking-wide text-olive md:text-base">
          {formatEuro(item.price, lang)}
        </p>
      </div>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted lg:text-[0.95rem]">{item.description}</p>
    </article>
  )
}
