/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from 'next-auth'

declare module 'next-auth' {
  export interface User {
    id: string
    name: string
    email: string
    username: string
    avatar_url?: string
  }

  export interface Session {
    user: {
      id: string
      name?: string | null
      email?: string | null
      image?: string | null
      avatar_url?: string | null
      username?: string | null
    }
  }
}
