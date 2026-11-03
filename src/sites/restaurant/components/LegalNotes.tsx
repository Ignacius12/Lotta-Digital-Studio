import { useRestaurant } from '../content'

export function LegalNotes() {
  const { c, name, t } = useRestaurant()
  return (
    <section className="border-t border-line bg-cream-deep/50" aria-label={t.legalLabel}>
      <div className="container-page grid gap-10 py-14 text-sm text-muted md:grid-cols-3">
        <article id="aviso-legal">
          <h2 className="text-[0.7rem] font-medium tracking-[0.18em] text-ink uppercase">{t.legal}</h2>
          <p className="mt-4 leading-relaxed">{t.legalText(name)}</p>
        </article>
        <article id="privacidad">
          <h2 className="text-[0.7rem] font-medium tracking-[0.18em] text-ink uppercase">{t.privacy}</h2>
          <p className="mt-4 leading-relaxed">{c.privacy}</p>
        </article>
        <article id="cookies">
          <h2 className="text-[0.7rem] font-medium tracking-[0.18em] text-ink uppercase">{t.cookies}</h2>
          <p className="mt-4 leading-relaxed">{t.cookiesText}</p>
        </article>
      </div>
    </section>
  )
}
