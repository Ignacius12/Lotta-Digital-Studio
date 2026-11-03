import { useBakery } from '../content'

export function BakeryTrust() {
  const { c } = useBakery()
  return (
    <section aria-label={c.trustLabel} className="bg-bakery text-bakery-flour">
      <ul className="bakery-container grid grid-cols-2 gap-6 py-8 md:grid-cols-4 md:py-10">
        {c.trust.map((label) => (
          <li key={label} className="display text-center text-xl italic md:text-2xl">
            {label}
          </li>
        ))}
      </ul>
    </section>
  )
}
