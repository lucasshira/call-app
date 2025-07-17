import { ForwardRefExoticComponent, RefAttributes } from 'react'

declare module '@ignite-ui/react' {
  interface TextInputCustomProps {
    type?: string
    id?: string
    size?: 'sm' | 'md'
    prefix?: string
    placeholder?: string
    error?: string
    disabled?: boolean
    name?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
    ref?: React.Ref<HTMLInputElement>
  }

  export const TextInput: ForwardRefExoticComponent<
    TextInputCustomProps & RefAttributes<HTMLInputElement>
  >
}
