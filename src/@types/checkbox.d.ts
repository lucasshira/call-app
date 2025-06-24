import { ComponentProps } from 'react'

declare module '@ignite-ui/react' {
  interface CheckboxProps extends ComponentProps<'input'> {
    checked?: boolean
    onCheckedChange?: (checked: boolean) => void
  }
}
