import { useEffect, useId, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useBakery } from '../content'
import { Button } from './Button'

export function BakeryHeader() {
  const bakery = useBakery()
  const { c, t } = bakery
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
          scrolled
            ? 'border-bakery-line bg-bakery-flour/95 backdrop-blur-md'
            : 'border-bakery-line/60 bg-bakery-flour/90'
        }`}
      >
        <div className="bakery-container flex h-[4.25rem] items-center justify-between gap-3 md:h-[4.75rem] lg:h-[5.25rem]">
          <a
            href="#inicio"
            className="display text-[1.45rem] leading-none tracking-[0.06em] text-bakery sm:text-[1.7rem] md:text-[1.85rem] lg:text-[2.15rem]"
          >
            {bakery.name}
          </a>

          <nav aria-label={t.mainNav} className="hidden items-center gap-7 lg:flex xl:gap-10">
            {bakery.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.75rem] tracking-[0.16em] text-bakery-ink-soft uppercase hover:text-bakery"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button href="#encargar" className="px-3.5 text-sm sm:px-5 lg:min-h-12 lg:px-6 lg:text-base">
              {c.order}
            </Button>
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center text-bakery-ink hover:text-bakery lg:hidden"
              aria-label={t.openMenu}
              aria-expanded={open}
              aria-controls="bakery-mobile-menu"
              onClick={() => setOpen(true)}
            >
              <Menu aria-hidden size={22} strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </header>
      <BakeryMobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  )
}

function BakeryMobileMenu({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const bakery = useBakery()
  const { c, t } = bakery
  const titleId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const frame = requestAnimationFrame(() => closeRef.current?.focus())
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => {
      cancelAnimationFrame(frame)
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal aria-labelledby={titleId}>
      <button
        type="button"
        className="absolute inset-0 bg-bakery-ink/40"
        aria-label={t.closeMenu}
        onClick={onClose}
      />
      <div
        id="bakery-mobile-menu"
        className="absolute inset-y-0 right-0 flex w-[min(100%,20.5rem)] flex-col bg-bakery-flour px-6 pb-8 pt-5"
      >
        <div className="mb-8 flex items-center justify-between">
          <p id={titleId} className="display text-xl text-bakery-ink">
            {bakery.name}
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex min-h-11 min-w-11 items-center justify-center"
            aria-label={t.closeMenuNav}
          >
            <X aria-hidden size={22} />
          </button>
        </div>
        <nav aria-label={t.mobileNav} className="flex flex-col">
          {bakery.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="min-h-12 border-b border-bakery-line py-3 text-lg text-bakery-ink-soft"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-auto pt-8">
          <Button href="#encargar" className="w-full" onClick={onClose}>
            {c.order}
          </Button>
        </div>
      </div>
    </div>
  )
}
