import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Tailwind id'si ile <label> eşlemesi için zorunlu */
  id: string
  label?: string
  error?: string
  helpText?: string
}

export default function Input({
  id,
  label,
  error,
  helpText,
  disabled = false,
  className = '',
  ...props
}: InputProps) {
  const helpId  = helpText ? `${id}-help`  : undefined
  const errorId = error    ? `${id}-error` : undefined
  const describedBy = [helpId, errorId].filter(Boolean).join(' ') || undefined

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-semibold text-gray-700 dark:text-gray-200"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        disabled={disabled}
        aria-describedby={describedBy}
        aria-invalid={!!error || undefined}
        className={[
          'w-full px-3 py-2 border rounded-md font-sans text-base',
          'bg-white dark:bg-gray-800 dark:text-white',
          'transition-colors duration-150',
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100 dark:disabled:bg-gray-700',
          error
            ? 'border-error focus:ring-red-400 focus:border-error'
            : 'border-border dark:border-gray-600 focus:ring-blue-400 focus:border-secondary',
          className,
        ].join(' ')}
        {...props}
      />

      {helpText && !error && (
        <p id={helpId} className="text-sm text-muted dark:text-gray-400">
          {helpText}
        </p>
      )}
      {error && (
        <p id={errorId} role="alert" className="text-sm text-error font-medium">
          {error}
        </p>
      )}
    </div>
  )
}
