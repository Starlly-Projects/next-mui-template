import { SxProps } from '@mui/material'
import { Box, styled } from '@mui/material'

export const typographyStyles: SxProps = {
  mr: 2,
  display: { xs: 'flex', md: 'none' },
  flexGrow: 1,
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',
}

export const linkMenuStyles: SxProps = {
  my: 2,
  display: 'block',
}

export const authButtonContainerStyles: SxProps = {
  flexGrow: 0,
  display: { xs: 'none', md: 'flex' },
}

export const BoxGroupAuthButtons = styled(Box)``
