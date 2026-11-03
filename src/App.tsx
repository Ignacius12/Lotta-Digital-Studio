import { useEffect } from 'react'
import { LanguageIndex } from './pages/LanguageIndex'
import { Hub } from './pages/Hub'
import { base, matchRoute } from './routes'
import { applyHead, headFor } from './seo'
import { BakeryApp } from './sites/bakery/BakeryApp'
import { ClinicApp } from './sites/clinic/ClinicApp'
import { PubApp } from './sites/pub/PubApp'
import { RestaurantApp } from './sites/restaurant/RestaurantApp'

export default function App({ url }: { url: string }) {
  const route = matchRoute(url)

  useEffect(() => {
    if (!route) return
    applyHead(headFor(route.page, route.lang))
  }, [route?.page, route?.lang])

  if (!route) return <LanguageIndex notFound={url !== base} />

  switch (route.page) {
    case 'home':
      return <Hub lang={route.lang} />
    case 'restaurant':
      return <RestaurantApp lang={route.lang} />
    case 'clinic':
      return <ClinicApp lang={route.lang} />
    case 'bakery':
      return <BakeryApp lang={route.lang} />
    case 'pub':
      return <PubApp lang={route.lang} />
  }
}
