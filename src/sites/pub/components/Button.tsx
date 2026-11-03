import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

type CommonProps = {
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type ButtonProps = ButtonAsButton | ButtonAsLink

const base =
  'inline-flex items-center justify-center gap-2 rounded-none text-[0.75rem] font-semibold tracking-[0.18em] uppercase transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-55 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3'

const sizes: Record<Size, string> = {
  md: 'min-h-11 px-5 text-sm',
  lg: 'min-h-12 px-6 text-[0.95rem]',
}

const variants: Record<Variant, string> = {
  primary:
    'bg-pub text-pub-bg hover:bg-pub-deep focus-visible:outline-pub',
  secondary:
    'bg-transparent text-pub-cream border border-pub-cream/35 hover:border-pub hover:text-pub focus-visible:outline-pub',
  ghost: 'bg-transparent text-pub-cream hover:text-pub focus-visible:outline-pub',
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
