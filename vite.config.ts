import { tmpdir } from 'node:os'
import { join } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages: https://Ignacius12.github.io/PruebaWeb/
// `npm run build` prerenders every page into dist/<lang>/<slug>/index.html (scripts/prerender.mjs).
export default defineConfig({
  base: '/PruebaWeb/',
  cacheDir: join(tmpdir(), 'pruebaweb-vite'),
  plugins: [react(), tailwindcss()],
  ssr: {
    noExternal: true,
  },
})
