import { useClinic } from '../content'
import { useInView } from '../../../hooks/useInView'

export function ClinicAbout() {
  const { aboutImage, c } = useClinic()
  const { about } = c
  const { ref, visible } = useInView<HTMLElement>()

  return (
    <section
      id="clinica"
      ref={ref}
      aria-labelledby="clinic-about-heading"
      className="clinic-section bg-clinic-mint"
    >
      <div
        className={`clinic-container grid items-center gap-12 transition-all duration-700 lg:grid-cols-12 lg:gap-20 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <div className="lg:col-span-6">
          <p className="clinic-eyebrow">{about.eyebrow}</p>
          <h2
            id="clinic-about-heading"
            className="mt-4 max-w-[16ch] font-sans text-[2rem] font-medium tracking-tight text-clinic-ink md:text-[2.75rem] lg:text-[3.25rem]"
          >
            {about.title}
          </h2>
          <ul className="mt-10 space-y-8">
            {about.blocks.map((block) => (
              <li key={block.heading}>
                <h3 className="font-sans text-lg font-medium text-clinic-ink">{block.heading}</h3>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-clinic-ink-soft lg:text-lg">
                  {block.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-6">
          <div className="bg-white p-2 sm:p-3 lg:p-4">
            <img
              src={aboutImage.src}
              alt={about.imageAlt}
              width={aboutImage.width}
              height={aboutImage.height}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
