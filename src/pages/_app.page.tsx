import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

// execute global styles
globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
