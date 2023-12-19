import React from 'react'
import { LeftPanelContainer, LeftPanelWrapper } from './styles'
import MenuListComponent from './MenuList'

const NormalMenu = ({ type }: any) => {
  return (
    <LeftPanelWrapper className='LeftPanel'>
      <LeftPanelContainer>
        <MenuListComponent type={type} />
      </LeftPanelContainer>
    </LeftPanelWrapper>
  )
}

export default NormalMenu
