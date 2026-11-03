import { DemoCredits } from '../../shared/DemoCredits'
import { useClinic } from '../content'

export function ClinicFooter() {
  const { address, c, footerLinks, hours, lang, legalLinks, name, phone, t } = useClinic()
  const fullAddress = `${address.street}, ${address.postalCode} ${address.city}`

  return (
    <footer className="border-t border-clinic-line bg-clinic-ink text-white">
      <div className="clinic-container grid gap-10 py-14 md:grid-cols-12 md:gap-8 md:py-16">
        <div className="md:col-span-4">
          <p className="font-sans text-xl font-medium tracking-tight">{name}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">{c.description}</p>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/50">{t.explore}</p>
          <ul className="mt-4 space-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="inline-flex min-h-10 items-center text-sm text-white/75 hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-5">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/50">{t.info}</p>
          <address className="mt-4 space-y-3 text-sm not-italic text-white/75">
            <p>
              <span className="text-white">{name}</span>
              <br />
              {fullAddress}
            </p>
            <p>
              <a href={`tel:${phone.tel}`} className="hover:text-white">
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
      <div className="border-t border-white/10">
        <div className="clinic-container flex flex-col gap-4 py-6 text-xs text-white/50 sm:flex-row sm:items-start sm:justify-between">
          <DemoCredits page="clinic" lang={lang} name={name} linkClassName="hover:text-white/80" activeClassName="text-white/80" />
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-white/80">
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
