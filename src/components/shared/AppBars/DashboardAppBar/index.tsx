import * as React from 'react'
import { AppBar } from './styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import WebDesing from './WebDesing'
import MobileDesing from './MobileDesing'
import Link from 'next/link'
import Image from 'next/image'
import LogoImage from '@/assets/logo.png'
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

export default function DashboardAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <IconButton className="AppBarControl">
            <MenuIcon />
          </IconButton>

          <div className="content-logo">
            <Link href="/">
              <Image className="Logo" src={LogoImage} alt="Logo Image" />
            </Link>
          </div>

          <Link href="/" style={{ color: 'inherit' }}>
            <Typography
              className="app-name"
              variant="h6"
              noWrap
              sx={{
                display: 'flex',
              }}
            >
              waref.<span className="color-green">me</span>
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { md: 'none' } }} />

          <WebDesing />

          <MobileDesing />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
