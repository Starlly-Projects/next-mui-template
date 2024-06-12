import Img from '@/modules/core/components/shared/Img'
import { ButtonOpenFilter, ToolsHeaderWrapper } from './styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Image from 'next/image'

const ToolsHeader = () => {
  return (
    <ToolsHeaderWrapper>
      <ButtonOpenFilter>
        <KeyboardArrowDownIcon className='icon' />
      </ButtonOpenFilter>

      <Image src='/img/cover.png' className='cover-image' alt='Cover Image' width={200} height={200}/>

      <div className='img-bg' />

      <div className='container'>
        <Image src='/img/avatar.jpg' className='img-user' alt='Avatar Image' width={200} height={200} />

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
