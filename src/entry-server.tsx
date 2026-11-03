import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'

export { langs, languages } from './i18n/langs'
export { base, legacySlugs, pathFor, routes, siteOrigin, urlFor } from './routes'
export { headFor } from './seo'

export function render(url: string) {
  return renderToString(
    <StrictMode>
      <App url={url} />
    </StrictMode>,
  )
}
