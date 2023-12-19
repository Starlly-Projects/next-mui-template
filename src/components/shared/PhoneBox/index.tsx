import React, { useState } from 'react'
import {
  BlackRectangle,
  Phone,
  StyledAppBar,
  StyledAvatar,
  StyledBottomAppBar,
} from './styles'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import SendIcon from '@mui/icons-material/Send'
import AddIcon from '@mui/icons-material/Add'
import { Avatar } from '@mui/material'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

function PhoneBoxComponet() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <BlackRectangle>
      <Phone>
        <div>
          {/* Barra de menú superior */}
          <StyledAppBar position="static">
            <Toolbar className='toolbar' disableGutters>
              <div className="AppBar">
                <Avatar />

                <Typography variant="h6" className="title-Appbar">
                  +57
                </Typography>
              </div>

              <div className="notch" />
            </Toolbar>
          </StyledAppBar>

          {/* Espacio entre las barras */}
          <div style={{ height: '100%' }} />

          {/* Barra de menú inferior */}
          <StyledBottomAppBar position="static">
            {/* <Container maxWidth="xl"> */}
            <Toolbar disableGutters>
              <div className="AppBarInferior">
                <IconButton className="IconButton-1">
                  <AddIcon />
                </IconButton>

                <TextField
                  className="inputProps"
                  id="outlined-search"
                  size='small'
                  type="search"
                  variant="outlined"
                  InputLabelProps={{
                    style: { color: 'primary' },
                  }}
                  InputProps={{
                    style: {
                      margin: '0 4px',
                      color: 'primary',
                      background: '#FFF',
                      height: '40px',
                      border: '1px solid #E2E2E2',
                      position: 'relative',
                      borderRadius: '40px',
                    },
                  }}
                />

                <IconButton className="IconButton-2">
                  <SendIcon />
                </IconButton>
              </div>
            </Toolbar>
            {/* </Container> */}
          </StyledBottomAppBar>
        </div>
      </Phone>
    </BlackRectangle>
  )
}

export default PhoneBoxComponet
