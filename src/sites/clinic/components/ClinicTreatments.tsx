import { useClinic } from '../content'
import { useInView } from '../../../hooks/useInView'

export function ClinicTreatments() {
  const clinic = useClinic()
  const { treatments } = clinic.c
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section
      id="tratamientos"
      ref={ref}
      aria-labelledby="treatments-heading"
      className="clinic-section bg-white"
    >
      <div
        className={`clinic-container transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <div className="max-w-2xl">
          <p className="clinic-eyebrow">{treatments.eyebrow}</p>
          <h2
            id="treatments-heading"
            className="mt-4 font-sans text-[2rem] font-medium tracking-tight text-clinic-ink md:text-[2.75rem] lg:text-[3.25rem]"
          >
            {treatments.title}
          </h2>
          <p className="mt-4 text-clinic-muted lg:text-lg">{treatments.description}</p>
        </div>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <img
              src={clinic.treatmentsImage}
              alt={treatments.imageAlt}
              width={1400}
              height={700}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover lg:sticky lg:top-28 lg:aspect-[4/5]"
            />
          </div>
          <ol className="divide-y divide-clinic-line border-y border-clinic-line lg:col-span-7">
            {clinic.treatments.map((item, index) => (
              <li key={item.id} className="grid grid-cols-[auto_1fr] gap-5 py-6 lg:gap-8 lg:py-8">
                <span className="font-sans text-sm font-medium text-clinic">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-sans text-xl font-medium tracking-tight text-clinic-ink lg:text-2xl">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-clinic-muted lg:text-base">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
