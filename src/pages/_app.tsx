import '@/core/theme/global.css'
import 'nprogress/nprogress.css'
import Router from 'next/router'
import theme from '@/core/theme'
import type { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'
import createEmotionCache from '@/core/config/cache/createEmotionCache'
import AppComponent from '@/core/components/shared/app'
import NProgress from 'nprogress'
import { ApolloProvider } from '@apollo/client'
// import { getCookie } from '@/utils/cookie'
// import { CURRENT_LANG, SESSION_TOKEN } from '@/constants/cookieConstants'
// import { checkSessionAndRedirect } from '@/utils/serverFunctions'
import getApolloClient from '@/core/Graphql/GraphqlHttpSetup'
import { getCookie } from '@/core/utils/cookie'
import { CURRENT_LANG } from '@/core/constants/cookieConstants'
import { getProp } from '@/core/utils'
import { checkSessionAndRedirect } from '@/core/utils/serverFunctions'
import { SESSION_TOKEN } from '@/modules/auth/constants/cookies'
// import { getCurrentUser } from '@/api/system/auth'
// import { getProp } from '@/utils'

Router.events.on('routeChangeStart', (url: any) => {
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => () => NProgress.done())

interface WarefAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

const App = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: WarefAppProps) => {
  const client = getApolloClient(pageProps?.session)

  return (
    <>
      <CacheProvider value={emotionCache}>
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <AppComponent pageProps={pageProps} Component={Component} />
          </ThemeProvider>
        </ApolloProvider>
      </CacheProvider>
    </>
  )
}

const redirect = (ctx: any, uri: string) => {
  if (!ctx || !ctx.req) {
    if (typeof window !== 'object') {
      return
    }
    location.href = uri
  }
  if (ctx && ctx.res && ctx.res.writeHead) {
    ctx.res.writeHead(302, { Location: uri })
    ctx.res.end()
  }
}

App.getInitialProps = async ({ Component, ctx }: any) => {
  App.getServerSideProps ? App.getServerSideProps(ctx) : null
  const langHeader = ctx?.req?.headers['accept-language']
  const locale = ctx.locale || (langHeader || '').match(/^[a-zA-Z]{2,10}/)?.[0] || 'en'
  const query = getProp(ctx, 'query', {})

  const pageProps = Component.getInitialProps
    ? (await Component.getInitialProps(ctx)) || {}
    : {}

  const session = getCookie(SESSION_TOKEN, ctx)
  const lang = getCookie(CURRENT_LANG, ctx)
  pageProps.session = session
  // pageProps.user = await getCurrentUser(session)
  pageProps.lang = lang || locale
  return { pageProps: { ...pageProps, ...query, env: process.env } }
}

App.getServerSideProps = (ctx: any) => {
  const resultRedirect = checkSessionAndRedirect({
    targetPath: '/dashboard',
    pathMatching: 'partial',
    destination: '/login',
    conditionType: 'negative',
  })(ctx)

  if (resultRedirect.redirect) {
    redirect(ctx, resultRedirect?.redirect?.destination)
  }
}

// export async function getStaticProps() {
//   console.log(process.env.NODE_ENV)
//   console.log(process.env.APP_NAME)

//   return {
//     props: {
//       env: process.env,
//     },
//   }
// }

export default App
