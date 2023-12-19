import { styled } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'

export const BlackRectangle = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  aspect-ratio: 0.544;
  background-color: #000000;
  border-radius: 34px;
  z-index: 3;
  box-shadow: 2px 0 4px #128c7e;
`

export const Phone = styled('div')`
  position: absolute;
  top: 3%;
  left: 5%;
  right: 5%;
  bottom: 3%;
  height: auto;
  background-color: #ece5dd;
  border-radius: 20px;
`

export const StyledAppBar = styled(AppBar)`
  box-shadow: none;
  width: 100%;
  height: auto;
  background-color: #ededed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  .toolbar {
    width: 100%;
    padding: 0 12px;
  }

  .AppBar {
    display: flex;
    align-items: center;
  }

  .title-Appbar {
    margin-left: 0.5rem;
    font-size: 1rem;
    color: #000000;
  }

  .notch {
    position: absolute;
    bottom: 70%;
    left: 50%;
    transform: translateX(-50%);
    width: 30%;
    height: 34%;
    background-color: #000000;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`

export const StyledAvatar = styled(Avatar)`
  position: relative;
  margin-left: 5%;
  width: 15%;
  height: 15%;
  aspect-ratio: 1;
`

export const StyledBottomAppBar = styled(AppBar)`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-radius: 0px 0px 20px 20px;
  background-color: #ededed;
  display: flex;
  justify-content: center;

  .AppBarInferior {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 10px;

    .MuiFormControl-root {
      width: 100%;
    } 

    .IconButton-1 {
      display: flex;
      align-items: center;
      position: relative;
      aspect-ratio: 1;
      color: #0680f4;
    }

    .IconButton-2 {
      display: flex;
      align-items: center;
      position: relative;
      aspect-ratio: 1;
      color: #ffffff;
      background-color: #0680f4;
    }
  }
`

export const WhatsappButton = styled('button')`
  font-size: 1em;
  height: 100%;
  width: 100%;
  text-transform: none;
  background: var(--primary-600, #128c7e);
  border: none;
  cursor: pointer;
`
