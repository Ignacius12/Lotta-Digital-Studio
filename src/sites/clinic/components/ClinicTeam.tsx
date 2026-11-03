import { useClinic } from '../content'
import { useInView } from '../../../hooks/useInView'

export function ClinicTeam() {
  const clinic = useClinic()
  const { team } = clinic.c
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section id="equipo" ref={ref} aria-labelledby="team-heading" className="clinic-section bg-white">
      <div
        className={`clinic-container transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <div className="max-w-2xl">
          <p className="clinic-eyebrow">{team.eyebrow}</p>
          <h2
            id="team-heading"
            className="mt-4 font-sans text-[2rem] font-medium tracking-tight text-clinic-ink md:text-[2.75rem] lg:text-[3.25rem]"
          >
            {team.title}
          </h2>
          <p className="mt-4 text-clinic-muted lg:text-lg">{team.description}</p>
        </div>

        <ul className="mt-12 grid gap-10 sm:grid-cols-3 lg:mt-16 lg:gap-12">
          {clinic.team.map((member) => (
            <li key={member.id}>
              <img
                src={member.src}
                alt={member.alt}
                width={600}
                height={750}
                loading="lazy"
                decoding="async"
                className="aspect-[1/1] w-full rounded-full object-cover object-top"
              />
              <h3 className="mt-5 font-sans text-xl font-medium tracking-tight text-clinic-ink">{member.name}</h3>
              <p className="mt-1 text-sm text-clinic">{member.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
