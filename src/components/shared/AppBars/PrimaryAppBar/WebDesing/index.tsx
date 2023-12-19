import React, { useContext } from 'react'
import {
  typographyStyles,
  linkMenuStyles,
  authButtonContainerStyles,
  BoxGroupAuthButtons,
} from './styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Link from 'next/link'
import useWords from '@/hooks/useWords'
import LangSelector from '@/shared/LangSelector'
import { Badge, IconButton } from '@mui/material'
import { AuthContext } from '@/store/context/AuthContext'
import AvatarMenu from '@/shared/AppBars/DashboardAppBar/WebDesing/AvatarMenu'
import AddIcon from '@mui/icons-material/Add'
import NotificationsIcon from '@mui/icons-material/Notifications'

interface WebDesignProps {
  pages: string[]
  handleCloseNavMenu: () => void
}

const WebDesignComponent: React.FC<WebDesignProps> = ({
  pages,
  handleCloseNavMenu,
}) => {
  const { isAuth } = useContext(AuthContext)

  const {
    PRIMARY_APPBAR: { SIGN_IN, SIGN_UP },
  } = useWords()

  return (
    <>
      <Typography
        className="app-name"
        variant="h5"
        noWrap
        component="a"
        href="/"
        sx={typographyStyles}
      >
        waref.<span className="color-green">me</span>
      </Typography>

      <LangSelector className="LangSelector mr-3" />

      {/* LINKS */}
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={linkMenuStyles}
            className="link-menu"
          >
            {page}
          </Button>
        ))}
      </Box>
      {/* FIN LINKS */}

      {/* BOTONES AUTENTICACION */}
      {!isAuth && (
        <BoxGroupAuthButtons sx={authButtonContainerStyles}>
          <Link href="/login">
            <Button className="link-menu2">{SIGN_IN}</Button>
          </Link>

          <Link href="/register">
            <Button className="Button-menu" variant="outlined">
              {SIGN_UP}
            </Button>
          </Link>
        </BoxGroupAuthButtons>
      )}
      {/* FIN BOTONES AUTENTICACION */}

      {/* OPCIONES USUARIO AUTENTICADO */}
      {isAuth && (
        <Box
          sx={{
            display: { xs: 'none', md: 'flex', alignItems: 'center', gap: 4 },
          }}
        >
          <IconButton
            className="primary"
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <AddIcon />
          </IconButton>

          <IconButton
            size="large"
            className="primary"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <AvatarMenu theme="dark" />
        </Box>
      )}
      {/* FIN OPCIONES USUARIO AUTENTICADO  */}
    </>
  )
}

export default WebDesignComponent
