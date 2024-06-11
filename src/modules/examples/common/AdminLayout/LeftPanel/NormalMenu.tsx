import React from 'react'
import { LeftPanelContainer, LeftPanelWrapper } from './styles'
import MenuListComponent from './MenuList'
import Scrollbar from '@/modules/core/components/shared/Scrollbar'

const NormalMenu = ({ type }: any) => {
  return (
    <LeftPanelWrapper className='LeftPanel'>
      <Scrollbar autoHide className='divscroll'>
        <LeftPanelContainer>
          <MenuListComponent type={type} />
        </LeftPanelContainer>
      </Scrollbar>
    </LeftPanelWrapper>
  )
}

export default NormalMenu
