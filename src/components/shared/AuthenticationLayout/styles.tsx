import { styled } from '@mui/material'

export const AuthenticationWrapper = styled('div')`
  display: flex;

  .auth-sidebar {
    width: 28%;
    min-width: 400px;
    background: linear-gradient(90deg, #0c5e99 0%, #1cd9c3 100%);
    padding: 30px;
    height: 100vh;
    position: sticky;
    top: 0;

    @media (max-width: 990px) {
      display: none;
    }

    .sidebar-logo {
      color: #ffffff;
      text-shadow: 0 1px 1px #333333;

      .sidebar-logo-image {
        width: 40px;
      }

      .title {
        font-size: 1.6em;
      }
    }

    .sidebar-phone {
      aspect-ratio: 0.544;
      height: 76%;
      max-height: 800px;
      position: absolute;
      top: 50%;
      right: -40px;
      transform: translateY(-50%);
    }
  }

  .auth-content {
    min-height: 100vh;
    width: calc(74%);
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 990px) {
      width: 100%;
    }

    .container {
      max-width: 480px;
      margin-left: 200px;
      padding: 30px 0;

      @media (max-width: 1200px) {
        min-width: 450px;
        margin: 0 auto;
        padding-left: 30px;
      }

      @media (max-width: 990px) {
        padding: 30px 20px;
      }
    }
  }
`
