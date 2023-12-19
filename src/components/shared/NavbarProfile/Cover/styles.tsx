import { Skeleton, styled } from '@mui/material'

export const CoverWrapperSkeleton = styled(Skeleton)`
  width: 100%;
  height: 100%;
  aspect-ratio: 4 / 1;
`

export const CoverWrapper = styled('div')`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 1;
  background: linear-gradient(134deg, #003399 0%, #ff5733 100%);

  .btnChangeImage {
    position: absolute;
    right: 20px;
    bottom: 20px;
    padding-left: 30px;
    padding-right: 30px;
  }
`

export const AvatarUserContent = styled('div')`
  position: relative;
  background-color: #ffffff;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  box-shadow: 0 0 2px #666666;
  display: flex;
  justify-content: center;
  align-items: center;

  &.admin {
    width: 140px;
    height: 140px;
  }

  .MuiAvatar-root {
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    border: 1px solid #999999;
    font-size: 4rem;
  }

  .btnUpdatePhoto {
    position: absolute;
    min-width: unset;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    padding: 0;
    right: 0px;
    bottom: 0px;
    border: 1px solid #ffffff;
    box-shadow: 0px 1px 2px #000000, 1px 0px 2px #000000;
  }
`
