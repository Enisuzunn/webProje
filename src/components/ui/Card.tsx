import type { ReactNode } from 'react'

export type CardVariant = 'elevated' | 'outlined' | 'filled'

interface CardProps {
  variant?: CardVariant
  title?: string
  image?: string
  imageAlt?: string
  footer?: ReactNode
  children?: ReactNode
  className?: string
}

const variantClasses: Record<CardVariant, string> = {
  elevated: 'bg-white dark:bg-gray-800 shadow-lg',
  outlined: 'bg-white dark:bg-gray-800 border border-border dark:border-gray-600',
  filled: 'bg-surface dark:bg-gray-700',
}

export default function Card({
  variant = 'elevated',
  title,
  image,
  imageAlt = '',
  footer,
  children,
  className = '',
}: CardProps) {
  return (
    <div
      className={[
        'flex flex-col rounded-lg overflow-hidden',
        'transition-transform duration-300 hover:-translate-y-1',
        variantClasses[variant],
        className,
      ].join(' ')}
    >
      {image && (
        <img src={image} alt={imageAlt} className="w-full h-48 object-cover" />
      )}

      <div className="flex-1 p-5">
        {title && (
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {title}
          </h3>
        )}
        <div className="text-muted dark:text-gray-300 text-sm leading-relaxed">{children}</div>
      </div>

      {footer && <div className="px-5 pb-5">{footer}</div>}
    </div>
  )
}
