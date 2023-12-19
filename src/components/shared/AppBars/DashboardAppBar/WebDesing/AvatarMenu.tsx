import MoreVertIcon from '@mui/icons-material/MoreVert'
import Avatar from '@mui/material/Avatar'
import { IconButton, AvatarBox } from '../styles'
import React, { useContext } from 'react'
import { WebMenuComponent } from './WebMenu'
import classNames from 'classnames'
import { AuthContext } from '@/store/context/AuthContext'
import { getAvatarName } from '@/utils/parsers'
import { deepPurple } from '@mui/material/colors'

interface Props {
  type?: 'customer' | 'admin'
  theme?: 'light' | 'dark'
}

const AvatarMenu: React.FC<Props> = ({
  theme = 'light',
  type = 'customer',
}) => {
  const { user } = useContext(AuthContext)
  const menuId = 'avatar-menu'
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const isMenuOpen = Boolean(anchorEl)
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <AvatarBox
        className={classNames('AvatarBox', { light: theme === 'light' })}
      >
        <IconButton className="avatar-button" onClick={handleProfileMenuOpen}>
          <Avatar
            sx={{ bgcolor: deepPurple[500] }}
            src={user?.profileImage?.src}
          >
            {getAvatarName(user)}
          </Avatar>
        </IconButton>

        <IconButton
          className={classNames(
            'dot-button',
            { dark: theme === 'dark' },
            { primary: theme === 'light' }
          )}
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          color="inherit"
          onClick={handleProfileMenuOpen}
        >
          <MoreVertIcon />
        </IconButton>
      </AvatarBox>

      <WebMenuComponent
        anchorEl={anchorEl}
        isMenuOpen={isMenuOpen}
        menuId={menuId}
        handleMenuClose={handleMenuClose}
        type={type}
      />
    </>
  )
}

export default AvatarMenu
