import { usePub } from '../content'

export function PubLegal() {
  const { c, name, t } = usePub()
  return (
    <section className="border-t border-pub-line bg-pub-bg" aria-label={t.legalLabel}>
      <div className="pub-container grid gap-10 py-12 text-sm text-pub-muted md:grid-cols-3">
        <article id="aviso-legal">
          <h2 className="text-base font-semibold text-pub-cream">{t.legal}</h2>
          <p className="mt-3 leading-relaxed">{t.legalText(name)}</p>
        </article>
        <article id="privacidad">
          <h2 className="text-base font-semibold text-pub-cream">{t.privacy}</h2>
          <p className="mt-3 leading-relaxed">{c.privacy}</p>
        </article>
        <article id="cookies">
          <h2 className="text-base font-semibold text-pub-cream">{t.cookies}</h2>
          <p className="mt-3 leading-relaxed">{t.cookiesText}</p>
        </article>
      </div>
    </section>
  )
}
