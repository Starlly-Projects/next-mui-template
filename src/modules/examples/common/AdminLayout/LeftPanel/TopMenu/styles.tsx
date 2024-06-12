import { styled } from '@mui/material'

export const TopMenuWrapper = styled('div')`
  .appbar {
    position: relative;
    background-color: #ffffff;
    padding-top: 4px;
    padding-bottom: 4px;
    box-shadow: 0 0 1px #333333;

    .app-name {
      font-weight: 700;
      letter-spacing: '.3rem';
      color: 'inherit';
      text-decoration: 'none';
      text-transform: uppercase;
      color: #333333;
    }

    .logo-img {
      height: 50px;
      margin-right: 10px;
    }

    .toolbar {
      padding: 0;
    }
  }
`

export const BreadcrumbWrapper = styled('div')`
  background-color: #F0F0F0;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
`
