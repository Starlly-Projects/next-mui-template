import { ButtonBase, styled } from '@mui/material'

export const ButtonOpenFilter = styled(ButtonBase)`
  position: absolute !important;
  z-index: 4;
  top: -5px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  background: rgba(0, 0, 0, 0.3);
  padding: 0 9px;
  border: 1px solid rgba(0, 0, 0, 1);
  border-radius: 0 0 20px 20px;
  text-decoration: none;
  font-size: 17px;
  height: 21px;
  width: 31px;
  color: #fff !important;
  line-height: 20px;
  text-align: center;
  -webkit-transition: all 0.2s cubic-bezier(0.34, 1.25, 0.6, 1);
  transition: all 0.2s cubic-bezier(0.34, 1.25, 0.6, 1);
  -webkit-box-shadow: 0 0 2px rgba(136, 106, 181, 0.3);
  box-shadow: 0 0 2px rgba(136, 106, 181, 0.3);
  opacity: 1;
`

export const ToolsHeaderWrapper = styled('div')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 140px;
  overflow: hidden;

  .cover-image {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.5;
  }

  .img-bg {
    position: absolute;
    z-index: 2;
    background: linear-gradient(
      45deg,
      rgba(32, 37, 55, 1) 0%,
      rgba(91, 124, 241, 1) 100%
    );
    width: 100%;
    height: 100%;
    opacity: 0.3;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    width: 100%;
    height: 100%;
    z-index: 3;

    .img-user {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 2px solid #ffffff;
      object-fit: cover;
    }

    .header-content {
      display: flex;
      flex-direction: column;
      color: #ffffff;

      .small-label {
        font-size: 0.8em;
      }

      .label-user {
        font-size: 1.1em;
        line-height: 1em;
        font-weight: bold;
      }

      .label-description {
        font-size: 0.9em;
      }
    }
  }
`
