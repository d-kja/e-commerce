import { FC, ReactNode } from 'react'
import { ErrorLabel } from './error-label'

interface ControlProps {
  children: ReactNode
  error?:
    | {
        type?: 'error' | 'warning'
        icon?: ReactNode
        message: string
      }
    | false
}

export const Control: FC<ControlProps> = ({ children, error = false }) => {
  const hasError = !!error

  return (
    <div className="flex flex-col gap-2">
      {children}
      {hasError && (
        <ErrorLabel errorIcon={error.icon} type={error.type ?? 'error'}>
          {error.message}
        </ErrorLabel>
      )}
    </div>
  )
}
