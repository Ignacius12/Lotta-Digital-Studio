import { Phone } from 'lucide-react'
import { useClinic } from '../content'
import { Button } from './Button'
import { useInView } from '../../../hooks/useInView'

export function ClinicAppointment() {
  const clinic = useClinic()
  const { appointment } = clinic.c
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section id="cita" ref={ref} aria-labelledby="cita-heading" className="bg-clinic text-white">
      <div
        className={`clinic-container clinic-section max-w-3xl text-center transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <p className="text-[0.75rem] font-medium tracking-[0.2em] text-white/70 uppercase">{appointment.eyebrow}</p>
        <h2
          id="cita-heading"
          className="mt-4 font-sans text-[2.15rem] font-medium tracking-tight md:text-[3rem] lg:text-[3.5rem]"
        >
          {appointment.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/80 lg:text-lg">{appointment.description}</p>
        <p className="mt-10 text-sm text-white/60">{appointment.phoneLabel}</p>
        <a
          href={`tel:${clinic.phone.tel}`}
          className="mt-2 inline-flex min-h-12 items-center font-sans text-4xl font-medium tracking-tight md:text-5xl"
        >
          {clinic.phone.display}
        </a>
        <div className="mt-8 flex justify-center">
          <Button href={`tel:${clinic.phone.tel}`} variant="secondary" size="lg" className="gap-2">
            <Phone size={16} aria-hidden />
            {appointment.call}
          </Button>
        </div>
      </div>
    </section>
  )
}
