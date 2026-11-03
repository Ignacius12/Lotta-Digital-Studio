import { useRestaurant } from '../content'

export function TrustBar() {
  const { c, trust } = useRestaurant()

  return (
    <section aria-label={c.trustLabel} className="bg-olive text-white">
      <div className="container-page">
        <p className="pt-8 text-center text-[0.65rem] font-medium tracking-[0.24em] text-olive-gold uppercase md:pt-10">
          {c.trustEyebrow}
        </p>
        <ul className="grid grid-cols-2 gap-px py-8 md:grid-cols-4 md:py-10">
          {trust.map((item, index) => (
            <li
              key={item.label}
              className={`flex flex-col items-start gap-1 px-0 py-3 md:items-center md:px-6 md:text-center ${
                index > 0 ? 'md:border-l md:border-white/15' : ''
              }`}
            >
              <p className="display text-[1.65rem] leading-none text-white md:text-[1.9rem]">{item.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
