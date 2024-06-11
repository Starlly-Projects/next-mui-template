import { styled } from '@mui/material'
import MuiList from '@mui/material/List'
import MuiListItemButton from '@mui/material/ListItemButton'
import MuiListSubheader from '@mui/material/ListSubheader'
import MuiStack from '@mui/material/Stack'
import MuiIconButton from '@mui/material/IconButton'

export const LEFT_MENU_WIDTH = 340

export const ToolTipCustom = styled('div')`
  background-color: #ffffff;
  box-shadow: 1px 0px 2px #333333;
  color: #333333;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 14px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  z-index: 9999999;
  display: none;
  font-weight: 500;
  font-size: 0.8em;
  white-space: nowrap;
  border-radius: 0px 4px 4px 0px;

  .label {
    margin-left: 8px;
  }
`

export const LeftPanelWrapper = styled('div')`
  z-index: 10;
  transition: width 0.2s;
  flex: 0 0 auto;
  background-color: #ffffff;
  width: ${LEFT_MENU_WIDTH + 'px'};
  border-right: 1px solid #dfdfdf;
  height: calc(100vh - 64px);
  position: sticky;
  top: 64px;
  /* overflow: auto; */

  @media (max-width: 1200px) {
    width: 60px;

    .MuiListSubheader-root {
      display: none;
    }

    .MuiButtonBase-root {
      position: relative;
      padding-left: 20px;
      padding-right: 20px;
      display: flex;
      justify-content: center;
      align-items: center;

      .MuiListItemText-root {
        white-space: nowrap;
        display: none;
      }

      .MuiListItemIcon-root {
        min-width: unset;
      }

      &:hover {
        .MuiListItemText-root {
          opacity: 1;
          margin-left: 1px;
        }

        .ToolTip {
          display: flex;
        }
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const LeftPanelContainer = styled('div')`
  position: sticky;
  top: 64px;
  min-height: calc(100vh - 64px);
  overflow: auto;
`

export const List = styled(MuiList)``

export const ListItemButton = styled(MuiListItemButton)`
  position: relative;
  padding-left: 50px;
  padding-right: 50px;
  .MuiListItemIcon-root,
  .MuiListItemText-root {
    color: #666666;
  }

  &.active {
    .MuiListItemIcon-root,
    .MuiListItemText-root {
      color: ${({ theme }) => theme.palette.primary.main};
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 4px;
      height: 100%;
      background-color: ${({ theme }) => theme.palette.primary.main};
      z-index: 9;
    }
  }

  .MuiListItemIcon-root {
    min-width: 40px;
  }
`

export const ListSubheader = styled(MuiListSubheader)`
  text-transform: uppercase;
  font-size: 0.8em;
  padding-left: 40px;
  color: #555555;
  margin-top: 6px;
`

export const RSSStack = styled(MuiStack)`
  justify-content: center;
  background-color: #f4f4f4;
  padding: 14px;
`

export const SocialIconButton = styled(MuiIconButton)`
  padding: 0;
  transition: transform 0.1s ease-in-out; /* Transición suave de la propiedad "transform" */
  &:active {
    transform: scale(1.2);
  }
`
