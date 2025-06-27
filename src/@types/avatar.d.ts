import { ComponentProps } from 'react'

declare module '@ignite-ui/react' {
  export interface AvatarProps extends ComponentProps {
    src?: string | null
    alt?: string | null
  }
}
