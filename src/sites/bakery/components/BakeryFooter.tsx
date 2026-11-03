import { DemoCredits } from '../../shared/DemoCredits'
import { useBakery } from '../content'

export function BakeryFooter() {
  const { address, c, footerLinks, hours, lang, legalLinks, name, phone, t } = useBakery()
  const fullAddress = `${address.street}, ${address.postalCode} ${address.city}`

  return (
    <footer className="border-t border-bakery-deep/30 bg-bakery-ink text-bakery-flour">
      <div className="bakery-container grid gap-10 py-14 md:grid-cols-12 md:gap-8 md:py-16">
        <div className="md:col-span-4">
          <p className="display text-2xl tracking-[0.08em]">{name}</p>
          <div className="mt-4 h-px w-16 bg-bakery-wheat" aria-hidden />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-bakery-flour/70">
            {c.description}
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-bakery-flour/50">
            {t.explore}
          </p>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-10 items-center text-sm text-bakery-flour/75 hover:text-bakery-flour"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-5">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-bakery-flour/50">
            {t.info}
          </p>
          <address className="mt-4 space-y-3 text-sm not-italic text-bakery-flour/75">
            <p>
              <span className="text-bakery-flour">{name}</span>
              <br />
              {fullAddress}
            </p>
            <p>
              <a href={`tel:${phone.tel}`} className="hover:text-bakery-flour">
                {phone.display}
              </a>
            </p>
            <ul className="space-y-1">
              {hours.map((row) => (
                <li key={row.days}>
                  {row.days}: {row.hours}
                </li>
              ))}
            </ul>
          </address>
        </div>
      </div>
      <div className="border-t border-bakery-flour/10">
        <div className="bakery-container flex flex-col gap-4 py-6 text-xs text-bakery-flour/50 sm:flex-row sm:items-start sm:justify-between">
          <DemoCredits page="bakery" lang={lang} name={name} linkClassName="hover:text-bakery-flour/80" activeClassName="text-bakery-flour/80" />
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-bakery-flour/80">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
