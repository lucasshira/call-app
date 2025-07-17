// types/text-input.d.ts
import 'react'

declare module '@ignite-ui/react' {
  import * as React from 'react'

  export interface TextInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    prefix?: string
    size?: 'sm' | 'md'
  }

  export const TextInput: React.ForwardRefExoticComponent<
    TextInputProps & React.RefAttributes<HTMLInputElement>
  >
}
