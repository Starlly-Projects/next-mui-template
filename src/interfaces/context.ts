export interface ContextProps {
  children?: React.ReactElement | React.ReactElement[]
  pageProps?: any
}

export interface AuthUserProps extends UserInterface {
  aud: string
  exp: number
  iat: number
  iss: string
  sub: string
}
