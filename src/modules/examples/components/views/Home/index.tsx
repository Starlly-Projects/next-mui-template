import useEnv from '@/core/hooks/useEnv'
import useWords from '@/modules/core/hooks/useWords'
import { HomeContainer } from './styles'
import LangSelector from '../../shared/LangSelector'
import ThemeSwitch from '../../shared/ThemeSwitch'

const HomeView = () => {
  const { getKey } = useEnv()
  const {
    HOME: { WELCOME },
  } = useWords()

  return (
    <HomeContainer>
      <div className='header-container'>
        <div className='title-container'>
          <h1 className='title'>
            <span className='mr-1'>{WELCOME}</span>
            <b style={{ color: 'blue' }}>{getKey('APP_NAME')}</b>
          </h1>
        </div>

        <div className='options-container'>
          <ThemeSwitch />
          <LangSelector />
        </div>
      </div>
    </HomeContainer>
  )
}

export default HomeView
