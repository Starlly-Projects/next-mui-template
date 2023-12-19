import { styled } from '@mui/material'

export const AppbarBlogWrapper = styled('div')`
  .Appbar {
    background-color: #232536;

    .content-Appname {
      display: flex;
      align-items: center;
      justify-content: center;

      .content-logo {
        width: 42px;
        height: 42px;
        align-items: center;
        justify-content: center;

        .Logo {
          width: 42px;
          height: 42px;

          @media (max-width: 600px) {
            width: 30px;
            height: 30px;
            margin-right: -14px;
          }
        }
      }
    }

    .Blog {
      position: absolute;
      bottom: 6px;
      left: 135px;

      @media (max-width: 1024px) {
        bottom: 4px;
        left: 135px;
      }

      @media (max-width: 720px) and (max-width: 1024px) {
        bottom: 4px;
        left: 173px;
      }

      .blogs_text {
        font-size: 0.6em;
        font-weight: bold;
        color: #ffffff;
      }
    }

    .app-name {
      font-weight: 700;
      color: inherit;
      text-decoration: none;
      margin-right: 40px;
      margin-left: 20px;
      font-size: 1.4em;
      color: #ffffff;

      .color-green {
        color: #128c7e;
      }
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

    .link-menu3 {
      text-transform: none;
      margin-right: 5px;
      font-size: 1em;
      font-weight: 400;
      color: #ffffff;
    }

    .Button-menu {
      text-transform: none;
      font-size: 1em;
      margin-right: 5px;
      font-weight: 400;
      border-radius: 1px;
      color: #232536;
      background-color: #ffffff;
    }
  }
`
