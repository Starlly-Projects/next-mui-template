import useEnv from '@/core/hooks/useEnv'
import useWords from '@/modules/core/hooks/useWords'
import { Container } from '@mui/material'

const HomeView = () => {
  const { getKey } = useEnv()
  const { WELCOME } = useWords()

  return (
    <Container>
      <h1>
        <span className='mr-1'>{WELCOME}</span>
        <b style={{ color: 'blue' }}>{getKey('APP_NAME')}</b>
      </h1>
    </Container>
  )
}

export default HomeView
