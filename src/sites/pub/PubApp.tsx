import type { Lang } from '../../i18n/langs'
import { PubAtmosphere } from './components/PubAtmosphere'
import { PubFooter } from './components/PubFooter'
import { PubGallery } from './components/PubGallery'
import { PubHeader } from './components/PubHeader'
import { PubHero } from './components/PubHero'
import { PubJsonLd } from './components/PubJsonLd'
import { PubLegal } from './components/PubLegal'
import { PubLocation } from './components/PubLocation'
import { PubMenu } from './components/PubMenu'
import { PubNights } from './components/PubNights'
import { PubReservations } from './components/PubReservations'
import { getPub, PubContext } from './content'

export function PubApp({ lang }: { lang: Lang }) {
  const pub = getPub(lang)

  return (
    <PubContext.Provider value={pub}>
      <div className="theme-pub min-h-svh bg-pub-bg text-pub-cream">
        <PubJsonLd />
        <a href="#carta" className="skip-link skip-link-pub">
          {pub.c.skip}
        </a>
        <PubHeader />
        <main>
          <PubHero />
          <PubAtmosphere />
          <PubMenu />
          <PubNights />
          <PubGallery />
          <PubReservations />
          <PubLocation />
          <PubLegal />
        </main>
        <PubFooter />
      </div>
    </PubContext.Provider>
  )
}
