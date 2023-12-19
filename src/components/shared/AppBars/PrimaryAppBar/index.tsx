import * as React from 'react'
import { PrimaryAppBarWrapper } from './styles'
import Image from 'next/image'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import LogoImage from '@/assets/logo.png'
import MobileDesignComponent from './MobileDesing'
import WebDesignComponets from './WebDesing'
import Link from 'next/link'
import useWords from '@/hooks/useWords'

const PrimaryAppBar = () => {
  console.log('OK', typeof window)

  const {
    PRIMARY_APPBAR: { CREATE_A_LINK, CREATE_A_SHOP },
  } = useWords()

  const pages = [CREATE_A_LINK, CREATE_A_SHOP]

  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <PrimaryAppBarWrapper>
      <AppBar position="fixed" color="default">
        <Container>
          <Toolbar disableGutters>
            <Link href="/" className="flex middle">
              <Image className="Logo" src={LogoImage} alt="Logo Image" />
            </Link>

            <Link href="/" style={{ color: 'inherit' }}>
              <Typography
                className="app-name"
                variant="h6"
                noWrap
                sx={{
                  display: { xs: 'none', md: 'flex' },
                }}
              >
                waref.<span className="color-green">me</span>
              </Typography>
            </Link>

            {/* Diseño Web */}
            <WebDesignComponets
              pages={pages}
              handleCloseNavMenu={handleCloseNavMenu}
            />
            {/* FIN DISEÑO WEB */}

            {/* Componente del DISEÑO MOVIL */}
            <MobileDesignComponent
              anchorElNav={anchorElNav}
              handleOpenNavMenu={handleOpenNavMenu}
              handleCloseNavMenu={handleCloseNavMenu}
              pages={pages}
            />
            {/* FIN del Componente de DISEÑO MOBIL */}
          </Toolbar>
        </Container>
      </AppBar>
    </PrimaryAppBarWrapper>
  )
}

export default PrimaryAppBar
