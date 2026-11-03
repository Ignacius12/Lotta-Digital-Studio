import type { Lang } from '../../i18n/langs'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { JsonLd } from './components/JsonLd'
import { LegalNotes } from './components/LegalNotes'
import { Location } from './components/Location'
import { MenuSection } from './components/MenuSection'
import { Reservations } from './components/Reservations'
import { TrustBar } from './components/TrustBar'
import { getRestaurant, RestaurantContext } from './content'

export function RestaurantApp({ lang }: { lang: Lang }) {
  const restaurant = getRestaurant(lang)

  return (
    <RestaurantContext.Provider value={restaurant}>
      <div className="theme-restaurant min-h-svh bg-cream text-ink">
        <JsonLd />
        <a href="#menu" className="skip-link">
          {restaurant.c.skip}
        </a>
        <Header />
        <main id="contenido-principal">
          <Hero />
          <TrustBar />
          <About />
          <MenuSection />
          <Gallery />
          <Reservations />
          <Location />
          <LegalNotes />
        </main>
        <Footer />
      </div>
    </RestaurantContext.Provider>
  )
}
