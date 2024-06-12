import Img from '@/modules/core/components/shared/Img'
import { ButtonOpenFilter, ToolsHeaderWrapper } from './styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const ToolsHeader = () => {
  return (
    <ToolsHeaderWrapper>
      <ButtonOpenFilter>
        <KeyboardArrowDownIcon className='icon' />
      </ButtonOpenFilter>

      <Img src='/img/cover.png' className='cover-image' />

      <div className='img-bg' />

      <div className='container'>
        <Img className='img-user' />

        <div className='header-content'>
          <span className='small-label'>Bienvenido</span>
          <label className='label-user'>Dr. Codex Lantern</label>
          <span className='label-description'>Nombre de sucursal</span>
        </div>
      </div>
    </ToolsHeaderWrapper>
  )
}

export default ToolsHeader
