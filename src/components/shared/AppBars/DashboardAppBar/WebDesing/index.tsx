import React from 'react'
import { IconButton } from '../styles'
import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import AddIcon from '@mui/icons-material/Add'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SearchFormComponent from './SearchForm'
import AvatarMenu from './AvatarMenu'

const WebDesing = () => {
  return (
    <>
      <SearchFormComponent />
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
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

        <AvatarMenu type="admin" />
      </Box>
    </>
  )
}

export default WebDesing
