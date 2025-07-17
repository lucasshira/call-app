import { ComponentProps } from 'react'

declare module '@ignite-ui/react' {
  export interface TextInputProps extends ComponentProps<'input'> {
    size?: 'sm' | 'md' | 'lg'
    prefix?: string
    placeholder?: string
    id?: string
    name?: string
    type?: string
  }
}
