import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { appWithTranslation } from 'next-i18next'
import Layout from '../components/portfolio/layout'

function MyApp({ Component, pageProps:{session, ...pageProps} }: AppProps) {
  return( 
      <ThemeProvider enableSystem={true} attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
  )
}

export default appWithTranslation(MyApp);
