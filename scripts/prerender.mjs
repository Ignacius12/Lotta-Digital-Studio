// Turns the client build into one static HTML file per language and page,
// plus the root language chooser, legacy redirects, 404, sitemap and robots.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const server = await import(pathToFileURL(join(root, 'dist-ssr', 'entry-server.js')).href)
const { base, headFor, langs, legacySlugs, pathFor, render, routes, siteOrigin, urlFor } = server

const template = readFileSync(join(dist, 'index.html'), 'utf8')
const headPattern = /<!--head:start-->[\s\S]*?<!--head:end-->/
if (!headPattern.test(template) || !template.includes('<!--app-html-->')) {
  throw new Error('dist/index.html is missing the head or app markers')
}

const escape = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function headHtml(head, { robots = 'index, follow', canonical = true, extra = '' } = {}) {
  const lines = [
    `<title>${escape(head.title)}</title>`,
    `<meta name="description" content="${escape(head.description)}" />`,
    `<meta name="robots" content="${robots}" />`,
    canonical ? `<link rel="canonical" href="${head.canonical}" />` : '',
    ...(canonical ? head.alternates.map((alt) => `<link rel="alternate" hreflang="${alt.hrefLang}" href="${alt.href}" />`) : []),
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Lotta" />`,
    `<meta property="og:locale" content="${head.ogLocale}" />`,
    ...head.ogLocaleAlternates.map((locale) => `<meta property="og:locale:alternate" content="${locale}" />`),
    `<meta property="og:url" content="${head.canonical}" />`,
    `<meta property="og:title" content="${escape(head.title)}" />`,
    `<meta property="og:description" content="${escape(head.description)}" />`,
    `<meta property="og:image" content="${escape(head.ogImage)}" />`,
    `<meta property="og:image:width" content="${head.ogImageWidth}" />`,
    `<meta property="og:image:height" content="${head.ogImageHeight}" />`,
    `<meta property="og:image:alt" content="${escape(head.ogImageAlt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escape(head.title)}" />`,
    `<meta name="twitter:description" content="${escape(head.description)}" />`,
    `<meta name="twitter:image" content="${escape(head.ogImage)}" />`,
    `<meta name="theme-color" content="${head.themeColor}" />`,
    `<link rel="stylesheet" href="${head.fonts}" />`,
    extra,
  ]
  return lines.filter(Boolean).join('\n    ')
}

function page({ lang, head, body }) {
  return template
    .replace(/<html lang="[^"]*">/, `<html lang="${lang}">`)
    .replace(headPattern, () => head)
    .replace('<!--app-html-->', () => body)
}

function write(urlPath, html) {
  const relative = urlPath.slice(base.length)
  const file = relative.endsWith('.html') ? join(dist, relative) : join(dist, relative, 'index.html')
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, html)
}

for (const route of routes) {
  const path = pathFor(route.page, route.lang)
  const head = headFor(route.page, route.lang)
  write(path, page({ lang: route.lang, head: headHtml(head), body: render(path) }))
}

const rootUrl = `${siteOrigin}${base}`
const rootHead = { ...headFor('home', 'es'), canonical: rootUrl }
const redirectScript = `<script>(function(){var l=${JSON.stringify(langs)},s;try{s=localStorage.getItem('lotta-lang')}catch(e){}if(l.indexOf(s)>=0)location.replace(${JSON.stringify(base)}+s+'/'+location.hash)})()</script>`
write(base, page({ lang: 'es', head: headHtml(rootHead, { extra: redirectScript }), body: render(base) }))

const notFoundHead = {
  ...headFor('home', 'es'),
  title: '404 · Lotta Digital Studio',
  description: 'Página no encontrada · Page not found',
}
write(`${base}404.html`, page({ lang: 'es', head: headHtml(notFoundHead, { robots: 'noindex', canonical: false }), body: render(`${base}404/`) }))

for (const [slug, demo] of Object.entries(legacySlugs)) {
  const target = pathFor(demo, 'es')
  write(
    `${base}${slug}/`,
    `<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <title>${escape(headFor(demo, 'es').title)}</title>
    <meta name="robots" content="noindex" />
    <link rel="canonical" href="${urlFor(demo, 'es')}" />
    <meta http-equiv="refresh" content="0; url=${target}" />
    <script>location.replace(${JSON.stringify(target)} + location.hash)</script>
  </head>
  <body>
    <a href="${target}">${escape(headFor(demo, 'es').title)}</a>
  </body>
</html>
`,
  )
}

const today = new Date().toISOString().slice(0, 10)
const entries = routes.map((route) => {
  const head = headFor(route.page, route.lang)
  const links = head.alternates
    .map((alt) => `    <xhtml:link rel="alternate" hreflang="${alt.hrefLang}" href="${alt.href}" />`)
    .join('\n')
  return `  <url>
    <loc>${head.canonical}</loc>
    <lastmod>${today}</lastmod>
${links}
  </url>`
})
const homeLinks = langs
  .map((id) => `    <xhtml:link rel="alternate" hreflang="${id}" href="${urlFor('home', id)}" />`)
  .join('\n')
entries.unshift(`  <url>
    <loc>${rootUrl}</loc>
    <lastmod>${today}</lastmod>
${homeLinks}
    <xhtml:link rel="alternate" hreflang="x-default" href="${rootUrl}" />
  </url>`)

writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`,
)

writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: ${base}404.html\n\nSitemap: ${rootUrl}sitemap.xml\n`)
writeFileSync(join(dist, '.nojekyll'), '')

console.log(`Prerendered ${routes.length} pages, root chooser, 404, ${Object.keys(legacySlugs).length} redirects, sitemap and robots.`)
