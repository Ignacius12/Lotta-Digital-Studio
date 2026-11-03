import { ArrowRight } from 'lucide-react'
import { languages, rememberLang } from '../i18n/langs'
import { pathFor } from '../routes'

const lines = {
  chooser: ['Elige idioma', 'Choose your language', 'Tria l’idioma', 'Escolle idioma', 'Aukeratu hizkuntza'],
  notFound: ['Página no encontrada', 'Page not found', 'Pàgina no trobada', 'Páxina non atopada', 'Ez da orria aurkitu'],
}

/** Language-neutral page: the x-default chooser at the site root, and the 404. */
export function LanguageIndex({ notFound = false }: { notFound?: boolean }) {
  const heading = notFound ? lines.notFound : lines.chooser

  return (
    <div className="theme-lotta flex min-h-svh items-center bg-lotta-ink text-white">
      <main className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-10">
        <p className="font-lotta text-sm font-semibold tracking-[0.18em] text-white/60 uppercase">
          {notFound ? '404 · Lotta Digital Studio' : 'Lotta Digital Studio'}
        </p>
        <h1 className="font-lotta mt-4 text-4xl font-bold tracking-[-0.015em] sm:text-5xl">
          {heading[0]}
        </h1>
        <p className="mt-3 text-lg text-white/70">{heading.slice(1).join(' · ')}</p>
        <ul className="mt-10 grid border-t border-white/10">
          {languages.map((item) => (
            <li key={item.id} className="border-b border-white/10">
              <a
                href={pathFor('home', item.id)}
                hrefLang={item.id}
                lang={item.id}
                onClick={() => rememberLang(item.id)}
                className="flex min-h-14 items-center justify-between py-4 text-xl text-white/90 transition-colors hover:text-white"
              >
                {item.label}
                <ArrowRight size={20} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
