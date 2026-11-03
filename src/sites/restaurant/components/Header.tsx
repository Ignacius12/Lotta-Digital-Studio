import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { useRestaurant } from '../content'
import { MobileMenu } from './MobileMenu'
import { Button } from './ui/Button'

export function Header() {
  const restaurant = useRestaurant()
  const { c, t } = restaurant
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const overHero = !scrolled && !menuOpen

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,color,box-shadow] duration-300 ${
          overHero
            ? 'border-b border-transparent bg-transparent text-white'
            : 'border-b border-line/80 bg-cream/95 text-ink shadow-soft backdrop-blur-md'
        }`}
      >
        <div className="container-page flex h-16 items-center justify-between gap-4 md:h-[4.25rem] lg:h-[5.25rem]">
          <a
            href="#inicio"
            className="display text-[1.35rem] tracking-[0.14em] md:text-[1.5rem] lg:text-[1.75rem]"
            aria-label={`${restaurant.name} — ${c.homeLabel}`}
          >
            {restaurant.shortName}
          </a>

          <nav aria-label={t.mainNav} className="hidden items-center gap-8 lg:flex xl:gap-10">
            {restaurant.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[0.8rem] tracking-[0.14em] uppercase transition-colors ${
                  overHero ? 'text-white/80 hover:text-white' : 'text-ink-soft hover:text-olive'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              href="#reservas"
              variant={overHero ? 'outline-light' : 'primary'}
              className="hidden sm:inline-flex"
            >
              {c.book}
            </Button>

            <button
              type="button"
              className={`inline-flex min-h-11 min-w-11 items-center justify-center lg:hidden ${
                overHero ? 'text-white' : 'text-ink hover:text-olive'
              }`}
              aria-label={t.openMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu-panel"
              onClick={() => setMenuOpen(true)}
            >
              <Menu aria-hidden="true" size={22} strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
