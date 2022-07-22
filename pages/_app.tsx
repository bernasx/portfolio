import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {SessionProvider} from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps:{session, ...pageProps} }: AppProps) {
  return( 
    <SessionProvider session={session}>
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}

export default appWithTranslation(MyApp);
