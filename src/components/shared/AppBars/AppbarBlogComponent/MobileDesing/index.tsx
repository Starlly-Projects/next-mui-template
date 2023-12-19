import React from 'react'
import {
  MobileDesignBlogWrapper,
  MobileMenuIcon,
  MobileMenu,
  MobileMenuItem,
} from './styles'
import MenuIcon from '@mui/icons-material/Menu'
import Typography from '@mui/material/Typography'

interface MobileDesignBlogComponentProps {
  anchorElNav: HTMLElement | null
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void
  handleCloseNavMenu: () => void
  pages: string[]
}

const MobileDesignBlogComponent: React.FC<MobileDesignBlogComponentProps> = ({
  anchorElNav,
  handleOpenNavMenu,
  handleCloseNavMenu,
  pages,
}) => {
  return (
    <MobileDesignBlogWrapper>
      <MobileMenuIcon
        size="large"
        aria-label="open navigation menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </MobileMenuIcon>

      <MobileMenu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
      >
        {pages.map((page) => (
          <MobileMenuItem key={page} onClick={handleCloseNavMenu}>
            <Typography textAlign="center">{page}</Typography>
          </MobileMenuItem>
        ))}
      </MobileMenu>
    </MobileDesignBlogWrapper>
  )
}

export default MobileDesignBlogComponent;
