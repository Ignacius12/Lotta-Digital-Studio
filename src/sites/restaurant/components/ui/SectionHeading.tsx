interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  id?: string
  as?: 'h2' | 'h3'
  className?: string
  light?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  id,
  as: Tag = 'h2',
  className = '',
  light = false,
}: SectionHeadingProps) {
  const alignClass =
    align === 'left' ? 'text-left' : 'text-left lg:mx-auto lg:max-w-3xl lg:text-center'

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`.trim()}>
      {eyebrow ? (
        <p
          className={`eyebrow mb-3 lg:text-[0.7rem] lg:tracking-[0.22em] ${light ? 'text-olive-gold' : ''}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <div className={`rest-rule mb-6 ${align === 'center' ? 'lg:mx-auto' : ''}`} aria-hidden="true" />
      <Tag
        id={id}
        className={`display text-[2.15rem] leading-[1.08] md:text-[3rem] lg:text-[3.65rem] xl:text-[4.15rem] ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={`mt-5 max-w-xl text-base leading-relaxed md:text-lg lg:mt-6 lg:max-w-2xl lg:text-xl ${
            align === 'center' ? 'lg:mx-auto' : ''
          } ${light ? 'text-white/75' : 'text-muted'}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
