import { useState, type ReactNode } from 'react'

export type AlertVariant = 'info' | 'success' | 'warning' | 'error'

interface AlertProps {
  variant?: AlertVariant
  title?: string
  children?: ReactNode
  dismissible?: boolean
  onDismiss?: () => void
}

const variantConfig: Record<
  AlertVariant,
  { bg: string; border: string; textColor: string; icon: string }
> = {
  info: {
    bg:        'bg-blue-50 dark:bg-blue-950/30',
    border:    'border-blue-300 dark:border-blue-700',
    textColor: 'text-blue-800 dark:text-blue-200',
    icon:      'ℹ️',
  },
  success: {
    bg:        'bg-green-50 dark:bg-green-950/30',
    border:    'border-green-300 dark:border-green-700',
    textColor: 'text-green-800 dark:text-green-200',
    icon:      '✅',
  },
  warning: {
    bg:        'bg-yellow-50 dark:bg-yellow-950/30',
    border:    'border-yellow-300 dark:border-yellow-700',
    textColor: 'text-yellow-800 dark:text-yellow-200',
    icon:      '⚠️',
  },
  error: {
    bg:        'bg-red-50 dark:bg-red-950/30',
    border:    'border-red-300 dark:border-red-700',
    textColor: 'text-red-800 dark:text-red-200',
    icon:      '❌',
  },
}

export default function Alert({
  variant = 'info',
  title,
  children,
  dismissible = false,
  onDismiss,
}: AlertProps) {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  const { bg, border, textColor, icon } = variantConfig[variant]

  const handleDismiss = () => {
    setDismissed(true)
    onDismiss?.()
  }

  return (
    <div
      role="alert"
      className={[
        'flex items-start gap-3 p-4 rounded-md border',
        bg,
        border,
      ].join(' ')}
    >
      {/* İkon */}
      <span aria-hidden="true" className="text-lg leading-none shrink-0 mt-0.5">
        {icon}
      </span>

      {/* İçerik */}
      <div className="flex-1 min-w-0">
        {title && (
          <p className={`font-semibold leading-snug ${textColor}`}>{title}</p>
        )}
        {children && (
          <p className={`text-sm mt-0.5 ${textColor}`}>{children}</p>
        )}
      </div>

      {/* Kapatma butonu */}
      {dismissible && (
        <button
          onClick={handleDismiss}
          aria-label="Uyarıyı kapat"
          className="shrink-0 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors text-xl leading-none"
        >
          ×
        </button>
      )}
    </div>
  )
}
