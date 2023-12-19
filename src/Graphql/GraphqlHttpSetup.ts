import { ApolloClient, InMemoryCache } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'

const BASE_URL: string = 'http://localhost:4000/graphql'

const getApolloClient = (token?: string) => {
  const link: any = createUploadLink({
    headers: {
      'apollo-require-preflight': 'true',
      authorization: `Bearer ${token}`,
    },
    uri: BASE_URL,
  })

  const client: ApolloClient<any> = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  })

  return client
}

export default getApolloClient
