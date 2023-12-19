import { styled } from '@mui/material'

export const BreadcrumbWrapper = styled('div')`
  display: flex; 
  flex-direction: column;
  background-color: #ffffff;
  width: 100%;

  .Breadcrumb {
    display: flex;
    width: 100%;
    height: 60px;
    justify-content: center;
    align-items: flex-start;
    padding-left: 50px;
    flex-direction: column;
    background-color: #f4f4f4;

    @media screen and (max-width: 768px) {
      width: 100%;
    }

    @media screen and (min-width: 768px) and (max-width: 1024px) {
      width: 100%;
      margin-left: 0;
    }
  }
`
