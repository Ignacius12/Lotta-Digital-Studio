import { useClinic } from '../content'

export function ClinicTrust() {
  const { c, trust } = useClinic()
  return (
    <section aria-label={c.trustLabel} className="border-y border-clinic-line bg-white">
      <ul className="clinic-container grid grid-cols-2 gap-8 py-10 md:grid-cols-4 md:gap-6 md:py-14">
        {trust.map((item) => (
          <li key={item.label}>
            <p className="font-sans text-3xl font-medium tracking-tight text-clinic md:text-4xl">{item.value}</p>
            <p className="mt-2 text-sm text-clinic-ink-soft md:text-base">{item.label}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
