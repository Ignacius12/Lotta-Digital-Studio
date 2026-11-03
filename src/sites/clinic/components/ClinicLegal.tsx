import { useClinic } from '../content'

export function ClinicLegal() {
  const { c, name, t } = useClinic()
  return (
    <section className="border-t border-clinic-line bg-white" aria-label={t.legalLabel}>
      <div className="clinic-container grid gap-10 py-12 text-sm text-clinic-muted md:grid-cols-3">
        <article id="aviso-legal">
          <h2 className="text-base font-medium text-clinic-ink">{t.legal}</h2>
          <p className="mt-3 leading-relaxed">{t.legalText(name)}</p>
        </article>
        <article id="privacidad">
          <h2 className="text-base font-medium text-clinic-ink">{t.privacy}</h2>
          <p className="mt-3 leading-relaxed">{c.privacy}</p>
        </article>
        <article id="cookies">
          <h2 className="text-base font-medium text-clinic-ink">{t.cookies}</h2>
          <p className="mt-3 leading-relaxed">{t.cookiesText}</p>
        </article>
      </div>
    </section>
  )
}
