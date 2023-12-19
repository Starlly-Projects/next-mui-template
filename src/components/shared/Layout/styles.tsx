import { styled } from '@mui/material'

export const Body = styled('main')`
  min-height: 100vh;
  margin-top: 64px;
`
export const LayoutBody = styled('div')`
  position: relative;
  margin-top: 64px;
  display: flex;

  .LayoutContent {
    @media (max-width: 1200px) {
      width: calc(100% - 60px);
    }
    
    @media (max-width: 769px) {
      width: 100%;
    }
  }
`

export const LayoutContent = styled('div')`
  width: calc(100% - 300px);
  height: max-content;
  min-height: calc(100vh - 80px);

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
