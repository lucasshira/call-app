import '../lib/dayjs'

import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

import { SessionProvider } from 'next-auth/react'

// execute global styles
globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
