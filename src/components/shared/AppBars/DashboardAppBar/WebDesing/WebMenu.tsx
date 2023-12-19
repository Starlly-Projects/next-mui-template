import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import Link from 'next/link'
import useWords from '@/hooks/useWords'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { useContext } from 'react'
import { AuthContext } from '@/store/context/AuthContext'
import { useRouter } from 'next/router'

interface MenuProps {
  anchorEl: any
  menuId: string
  isMenuOpen: boolean
  handleMenuClose: any
  type: 'admin' | 'customer'
}

export const WebMenuComponent = ({
  anchorEl,
  menuId,
  isMenuOpen,
  handleMenuClose,
  type = 'customer',
}: MenuProps) => {
  const { logout } = useContext(AuthContext)
  const { pathname } = useRouter()
  const {
    APPBAR_ADMIN: { PROFILE, CLOSE_SESSION },
  } = useWords()

  return (
    <Menu
      sx={{ mt: type === 'customer' ? '60px' : '45px' }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      disableScrollLock
    >
      <Link href="/dashboard/profile" style={{ color: '#000' }}>
        <MenuItem>
          <AccountCircleIcon /> <span className="ml-1">{PROFILE}</span>
        </MenuItem>
      </Link>

      {pathname?.indexOf('/dashboard') < 0 && (
        <Link href="/dashboard/" style={{ color: '#000' }}>
          <MenuItem>
            <DashboardIcon />
            <span className="ml-1">Administrador</span>
          </MenuItem>
        </Link>
      )}

      <Link href="/login" style={{ color: '#000' }} onClick={logout}>
        <MenuItem>
          <ExitToAppIcon />
          <span className="ml-1">{CLOSE_SESSION}</span>
        </MenuItem>
      </Link>
    </Menu>
  )
}
