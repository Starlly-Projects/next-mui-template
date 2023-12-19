import { styled } from '@mui/material'

export const PrimaryAppBarWrapper = styled('div')`
  .color-green {
    color: #128c7e;
  }

  .LangSelector {
    @media (min-width: 1524px) {
      position: fixed;
      right: -20px;
    }
  }

  .app-name {
    font-weight: 700;
    color: inherit;
    text-decoration: none;
    margin-right: 40px;
    margin-left: 20px;
    font-size: 1.4em;
  }

  .link-menu {
    text-transform: none;
    font-size: 1em;
    font-weight: 400;
  }

  .link-menu2 {
    text-transform: none;
    margin-right: 5px;
    font-size: 1em;
    font-weight: 400;
  }

  .Button-menu {
    text-transform: none;
    font-size: 1em;
    margin-right: 5px;
    font-weight: 400;
  }

  .Logo {
    width: 42px;
    height: 42px;

    @media (max-width: 600px) {
      width: 30px;
      height: 30px;
      margin-right: -14px;
    }
  }
`
