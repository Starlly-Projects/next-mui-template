import useEnv from '@/hooks/useEnv'

const HomeView = () => {
  const { getKey } = useEnv()

  return (
    <h1>
      <span className='mr-1'>Hola mundo!, esta es mi</span>
      <b style={{ color: 'blue' }}>{getKey('APP_NAME')}</b>
    </h1>
  )
}

export default HomeView
