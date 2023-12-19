import Link from 'next/link'
import { AuthenticationWrapper } from './styles'
import PhoneBoxComponet from '../PhoneBox'
import Head from 'next/head'

interface Props {
  title?: string
  children?: React.ReactElement | React.ReactElement[]
}

const AuthenticationLayout: React.FC<Props> = ({
  title = 'waref.me',
  children,
}) => {
  return (
    <AuthenticationWrapper>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="auth-sidebar">
        <Link href="/" className="sidebar-logo flex v-center gap-1">
          <img
            src="/assets/img/logo-white.svg"
            className="sidebar-logo-image"
          />

          <h1 className="title">waref.me</h1>
        </Link>

        <div className="sidebar-phone">
          <PhoneBoxComponet />
        </div>
      </div>

      <div className="auth-content">
        <div className="container">{children}</div>
      </div>
    </AuthenticationWrapper>
  )
}

export default AuthenticationLayout
