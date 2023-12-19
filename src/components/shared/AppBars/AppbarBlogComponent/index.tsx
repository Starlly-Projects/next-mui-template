import React from 'react'
import { AppbarBlogWrapper } from './styles'
import Image from 'next/image'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import LogoImage from '@/assets/logo.png'
import Link from 'next/link'
import MobileDesignBlogComponent from './MobileDesing'
import WebDesignBlogComponent from './WebDesing'

const AppbarBlogComponent = () => {
  // const {
  //   PRIMARY_APPBAR: { CREATE_A_LINK, CREATE_A_SHOP },
  // } = useWords()

  const pages = ['crear link', 'CREATE_A_SHOP']

  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  return (
    <AppbarBlogWrapper>
      <AppBar className="Appbar" position="fixed" color="default">
        <Container>
          <Toolbar disableGutters>
            <div className="content-Appname">
              <div className="content-logo">
                <Link href="/">
                  <Image className="Logo" src={LogoImage} alt="Logo Image" />
                </Link>
              </div>

              <Typography
                className="app-name"
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                }}
              >
                waref.<span className="color-green">me</span>
              </Typography>
            </div>

            <div className="Blog">
              <span className='blogs_text'>BLOGS</span>
            </div>

            {/* Diseño Web */}
            <WebDesignBlogComponent
              pages={pages}
              handleCloseNavMenu={handleCloseNavMenu}
            />
            {/* FIN DISEÑO WEB */}

            {/* Componente del DISEÑO MOVIL */}
            <MobileDesignBlogComponent
              anchorElNav={anchorElNav}
              handleOpenNavMenu={handleOpenNavMenu}
              handleCloseNavMenu={handleCloseNavMenu}
              pages={pages}
            />
            {/* FIN del Componente de DISEÑO MOBIL */}
          </Toolbar>
        </Container>
      </AppBar>
    </AppbarBlogWrapper>
  )
}

export default AppbarBlogComponent
