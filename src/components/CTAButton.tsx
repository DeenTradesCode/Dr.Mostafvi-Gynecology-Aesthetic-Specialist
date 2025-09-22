'use client'

import { cn } from '@/lib/utils'

interface CTAButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  target?: string
  rel?: string
}

export default function CTAButton({
  variant = 'primary',
  size = 'md',
  children,
  href,
  onClick,
  className,
  target,
  rel,
}: CTAButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variantClasses = {
    primary: 'bg-accent text-white hover:bg-accent/90 focus:ring-accent shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-ink border-2 border-accent hover:bg-accent-2 focus:ring-accent',
  }
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  )

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={classes}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  )
}
