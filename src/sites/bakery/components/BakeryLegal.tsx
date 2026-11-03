import { useBakery } from '../content'

export function BakeryLegal() {
  const { c, name, t } = useBakery()
  return (
    <section className="border-t border-bakery-line bg-bakery-flour" aria-label={t.legalLabel}>
      <div className="bakery-container grid gap-10 py-12 text-sm text-bakery-muted md:grid-cols-3">
        <article id="aviso-legal">
          <h2 className="text-base font-medium text-bakery-ink">{t.legal}</h2>
          <p className="mt-3 leading-relaxed">{t.legalText(name)}</p>
        </article>
        <article id="privacidad">
          <h2 className="text-base font-medium text-bakery-ink">{t.privacy}</h2>
          <p className="mt-3 leading-relaxed">{c.privacy}</p>
        </article>
        <article id="cookies">
          <h2 className="text-base font-medium text-bakery-ink">{t.cookies}</h2>
          <p className="mt-3 leading-relaxed">{t.cookiesText}</p>
        </article>
      </div>
    </section>
  )
}
