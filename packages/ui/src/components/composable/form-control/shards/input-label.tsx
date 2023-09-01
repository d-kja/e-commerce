import { ComponentProps, FC } from 'react'

interface InputLabelProps extends ComponentProps<'label'> {}

export const InputLabel: FC<InputLabelProps> = ({ children, ...props }) => {
  return (
    <label className="font-normal text-sm" {...props}>
      {children}
    </label>
  )
}
