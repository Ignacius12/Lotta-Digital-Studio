import { DemoCredits } from '../../shared/DemoCredits'
import { usePub } from '../content'

export function PubFooter() {
  const { address, c, footerLinks, hours, lang, legalLinks, name, phone, t } = usePub()
  const fullAddress = `${address.street}, ${address.postalCode} ${address.city}`

  return (
    <footer className="border-t border-pub-line bg-pub-wood text-pub-cream">
      <div className="pub-container grid gap-10 py-14 md:grid-cols-12 md:gap-8 md:py-16">
        <div className="md:col-span-4">
          <p className="text-2xl font-bold tracking-tight">{name}</p>
          <div className="mt-4 h-px w-16 bg-pub" aria-hidden />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-pub-muted">{c.description}</p>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-pub-muted/80">
            {t.explore}
          </p>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-10 items-center text-sm text-pub-muted hover:text-pub"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-pub-muted/80">
            {t.info}
          </p>
          <address className="mt-4 space-y-3 text-sm not-italic text-pub-muted">
            <p>
              <span className="text-pub-cream">{name}</span>
              <br />
              {fullAddress}
            </p>
            <p>
              <a href={`tel:${phone.tel}`} className="hover:text-pub">
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
      <div className="border-t border-pub-line">
        <div className="pub-container flex flex-col gap-4 py-6 text-xs text-pub-muted/70 sm:flex-row sm:justify-between">
          <DemoCredits page="pub" lang={lang} name={name} linkClassName="hover:text-pub-cream" activeClassName="text-pub-cream" />
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-pub-cream">
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
