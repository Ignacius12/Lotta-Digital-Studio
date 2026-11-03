import { languages, rememberLang, type Lang } from '../../i18n/langs'
import { pathFor, type DemoId } from '../../routes'
import { demoCopy } from './demo'

/** Footer line shared by the demos: who made it and the same page in the other languages. */
export function DemoCredits({
  page,
  lang,
  name,
  linkClassName,
  activeClassName,
}: {
  page: DemoId
  lang: Lang
  name: string
  linkClassName: string
  activeClassName: string
}) {
  const t = demoCopy[lang]
  return (
    <div className="flex flex-col gap-3">
      <p>
        © {new Date().getFullYear()} {name}. {t.demo} ·{' '}
        <a href={pathFor('home', lang)} className={`underline underline-offset-4 ${linkClassName}`}>
          {t.madeBy}
        </a>
      </p>
      <nav aria-label={t.language}>
        <ul className="flex flex-wrap gap-x-4 gap-y-2">
          {languages.map((item) => {
            const current = item.id === lang
            return (
              <li key={item.id}>
                <a
                  href={pathFor(page, item.id)}
                  hrefLang={item.id}
                  lang={item.id}
                  aria-current={current ? 'page' : undefined}
                  onClick={() => rememberLang(item.id)}
                  className={current ? activeClassName : linkClassName}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
