import { useEffect, useId, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { usePub } from '../content'
import { Button } from './Button'

export function PubHeader() {
  const pub = usePub()
  const { c, t } = pub
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
        className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
          scrolled
            ? 'border-pub-line bg-pub-bg/95 backdrop-blur-md'
            : 'border-transparent bg-transparent'
        }`}
      >
        <div className="pub-container flex h-[4.25rem] items-center justify-between gap-3 md:h-[4.75rem] lg:h-[5.25rem]">
          <a
            href="#inicio"
            className="font-sans text-[1.4rem] font-bold tracking-tight text-pub-cream sm:text-[1.6rem] md:text-[1.75rem] lg:text-[2rem]"
          >
            {pub.name}
          </a>

          <nav aria-label={t.mainNav} className="hidden items-center gap-8 lg:flex xl:gap-10">
            {pub.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.75rem] font-medium tracking-[0.16em] text-pub-cream/75 uppercase hover:text-pub"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button href="#reservas" className="px-3.5 text-sm sm:px-5 lg:min-h-12 lg:px-6 lg:text-base">
              {c.book}
            </Button>
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center text-pub-cream hover:text-pub lg:hidden"
              aria-label={t.openMenu}
              aria-expanded={open}
              aria-controls="pub-mobile-menu"
              onClick={() => setOpen(true)}
            >
              <Menu aria-hidden size={22} strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </header>
      <PubMobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  )
}

function PubMobileMenu({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const pub = usePub()
  const { c, t } = pub
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
        className="absolute inset-0 bg-black/60"
        aria-label={t.closeMenu}
        onClick={onClose}
      />
      <div
        id="pub-mobile-menu"
        className="absolute inset-y-0 right-0 flex w-[min(100%,20.5rem)] flex-col bg-pub-panel px-6 pb-8 pt-5"
      >
        <div className="mb-8 flex items-center justify-between">
          <p id={titleId} className="text-xl font-bold text-pub-cream">
            {pub.name}
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex min-h-11 min-w-11 items-center justify-center text-pub-cream"
            aria-label={t.closeMenuNav}
          >
            <X aria-hidden size={22} />
          </button>
        </div>
        <nav aria-label={t.mobileNav} className="flex flex-col">
          {pub.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="min-h-12 border-b border-pub-line py-3 text-lg text-pub-muted"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mt-auto pt-8">
          <Button href="#reservas" className="w-full" onClick={onClose}>
            {c.book}
          </Button>
        </div>
      </div>
    </div>
  )
}
