import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline-light' | 'inverse'
type Size = 'md' | 'lg'

type CommonProps = {
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
  }

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsLink

const base =
  'inline-flex items-center justify-center gap-2 rounded-none font-medium uppercase tracking-[0.16em] transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-55 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3'

const sizes: Record<Size, string> = {
  md: 'min-h-11 px-6 text-[0.68rem]',
  lg: 'min-h-12 px-8 text-[0.72rem]',
}

const variants: Record<Variant, string> = {
  primary: 'bg-olive text-white hover:bg-olive-deep focus-visible:outline-olive',
  secondary:
    'bg-transparent text-ink border border-ink/25 hover:border-olive hover:text-olive focus-visible:outline-olive',
  ghost: 'bg-transparent text-ink hover:text-olive focus-visible:outline-olive',
  'outline-light':
    'bg-transparent text-white border border-white/80 hover:bg-white hover:text-ink focus-visible:outline-white',
  inverse: 'bg-white text-olive-deep hover:bg-cream focus-visible:outline-white',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`.trim()

  if ('href' in props && props.href) {
    const { href, ...rest } = props
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  const buttonProps = props as ButtonAsButton
  return (
    <button type={buttonProps.type ?? 'button'} className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
