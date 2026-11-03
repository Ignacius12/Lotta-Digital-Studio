import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { storedLang } from './i18n/langs'
import { redirectFor } from './routes'

const { pathname, hash } = window.location
const target = redirectFor(pathname, storedLang())

if (target) {
  window.location.replace(`${target}${hash}`)
} else {
  const root = document.getElementById('root')!
  const app = (
    <StrictMode>
      <App url={pathname} />
    </StrictMode>
  )
  if (root.firstElementChild) hydrateRoot(root, app)
  else createRoot(root).render(app)
}
