import type { Lang } from '../../i18n/langs'
import { BakeryAbout } from './components/BakeryAbout'
import { BakeryFooter } from './components/BakeryFooter'
import { BakeryGallery } from './components/BakeryGallery'
import { BakeryHeader } from './components/BakeryHeader'
import { BakeryHero } from './components/BakeryHero'
import { BakeryJsonLd } from './components/BakeryJsonLd'
import { BakeryLegal } from './components/BakeryLegal'
import { BakeryLocation } from './components/BakeryLocation'
import { BakeryOrder } from './components/BakeryOrder'
import { BakeryProducts } from './components/BakeryProducts'
import { BakerySpecialties } from './components/BakerySpecialties'
import { BakeryTrust } from './components/BakeryTrust'
import { BakeryContext, getBakery } from './content'

export function BakeryApp({ lang }: { lang: Lang }) {
  const bakery = getBakery(lang)

  return (
    <BakeryContext.Provider value={bakery}>
      <div className="theme-bakery min-h-svh bg-bakery-flour text-bakery-ink">
        <BakeryJsonLd />
        <a href="#panes" className="skip-link skip-link-bakery">
          {bakery.c.skip}
        </a>
        <BakeryHeader />
        <main>
          <BakeryHero />
          <BakeryTrust />
          <BakeryAbout />
          <BakeryProducts />
          <BakerySpecialties />
          <BakeryGallery />
          <BakeryOrder />
          <BakeryLocation />
          <BakeryLegal />
        </main>
        <BakeryFooter />
      </div>
    </BakeryContext.Provider>
  )
}
