import React, { useContext } from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Link from 'next/link'
import { typographyStyles, authButtonContainerStyles } from './styles'
import useWords from '@/hooks/useWords'
import { AuthContext } from '@/store/context/AuthContext'
import AddIcon from '@mui/icons-material/Add'
import { Badge, IconButton } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications'
import AvatarMenu from '@/shared/AppBars/DashboardAppBar/WebDesing/AvatarMenu'

interface WebDesignBlogProps {
  pages: string[]
  handleCloseNavMenu: () => void
}

const WebDesignBlogComponent: React.FC<WebDesignBlogProps> = ({
  pages,
  handleCloseNavMenu,
}) => {
  const { isAuth } = useContext(AuthContext)

  const {
    APPBAR_BLOG: {
      LINK_HOME,
      LINK_BLOG,
      LINK_ABOUT,
      LINK_CONTACT,
      BUTTON_SUBS,
    },
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

      {/* <LangSelector className="LangSelector mr-3" /> */}
      {!isAuth && (
        <Box sx={authButtonContainerStyles}>
          <Link href="/">
            <Button className="link-menu3">{LINK_HOME}</Button>
          </Link>

          <Link href="/">
            <Button className="link-menu3">{LINK_BLOG}</Button>
          </Link>

          <Link href="/">
            <Button className="link-menu3">{LINK_ABOUT}</Button>
          </Link>

          <Link href="/">
            <Button className="link-menu3">{LINK_CONTACT}</Button>
          </Link>

          <Link href="/register">
            <Button className="Button-menu" variant="outlined">
              {BUTTON_SUBS}
            </Button>
          </Link>
        </Box>
      )}

      {/* OPCIONES USUARIO AUTENTICADO */}
      {isAuth && (
        <Box
          sx={{
            display: {
              xs: 'none',
              md: 'flex',
              alignItems: 'center',
              gap: 4,
              marginLeft: 'auto',
            },
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

export default WebDesignBlogComponent
