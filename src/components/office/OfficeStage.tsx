import { useEffect, useRef, useState, type PointerEvent } from 'react'
import type { mountOffice } from './mountOffice'

type Stage = ReturnType<typeof mountOffice>

export function OfficeStage() {
  const host = useRef<HTMLDivElement>(null)
  const stage = useRef<Stage | null>(null)
  const [failed, setFailed] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const node = host.current
    if (!node) return
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(media.matches)

    let mounted: Stage | null = null
    let cancelled = false
    let idle = 0

    const start = () => {
      void import('./mountOffice')
        .then(({ mountOffice: create }) => {
          if (cancelled || !host.current) return
          mounted = create(host.current, media.matches, () => setFailed(true))
          stage.current = mounted
        })
        .catch(() => {
          if (!cancelled) setFailed(true)
        })
    }

    const arm = () => {
      const requestIdle = window.requestIdleCallback
      if (requestIdle) idle = requestIdle(start, { timeout: 1200 })
      else idle = window.setTimeout(start, 1)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        observer.disconnect()
        arm()
      },
      { rootMargin: '240px' },
    )
    observer.observe(node)

    const onChange = () => {
      setReduced(media.matches)
      mounted?.setReduced(media.matches)
    }
    media.addEventListener('change', onChange)

    return () => {
      cancelled = true
      observer.disconnect()
      if (window.cancelIdleCallback && idle) window.cancelIdleCallback(idle)
      else window.clearTimeout(idle)
      media.removeEventListener('change', onChange)
      mounted?.destroy()
      stage.current = null
    }
  }, [])

  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || reduced) return
    const rect = event.currentTarget.getBoundingClientRect()
    stage.current?.setPointer(
      ((event.clientX - rect.left) / rect.width) * 2 - 1,
      ((event.clientY - rect.top) / rect.height) * 2 - 1,
    )
  }

  return (
    <div
      ref={host}
      className="relative h-[min(82vw,420px)] min-h-[280px] w-full bg-transparent lg:h-full lg:min-h-[640px]"
      onPointerMove={move}
      onPointerLeave={() => stage.current?.setPointer(0, 0)}
    >
      <p className="sr-only">
        Oficina vista desde arriba, sin fondo. Hay personas trabajando en las mesas. El texto de la
        página está fuera de esta animación.
      </p>
      {failed && (
        <div className="absolute inset-0 grid place-items-center px-6 text-center text-sm text-white/70">
          La oficina animada no está disponible en este navegador. El resto de la página sigue
          igual.
        </div>
      )}
    </div>
  )
}
