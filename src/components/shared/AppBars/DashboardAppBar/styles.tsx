import { styled } from '@mui/material'
import { alpha } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import InputBase from '@mui/material/InputBase'
import MuiIconButton from '@mui/material/IconButton'
import MuiBox from '@mui/material/Box'

export const AppBar = styled(MuiAppBar)`
  background-color: #333333;

  .AppBarControl {
    color: #ffffff;
    margin-left: -10px;
    margin-right: 10px;
    @media (min-width: 769px) {
      display: none;
    }
  }

  .content-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;

    .Logo {
      display: flex;
      width: 40px;
      height: 40px;
      align-items: center;
      justify-content: center;

      @media (max-width: 600px) {
        width: 30px;
        height: 30px;
        margin-right: -14px;
      }
    }
  }

  .app-name {
    font-weight: 700;
    color: #ffffff;
    text-decoration: none;
    margin-right: 40px;
    margin-left: 10px;
    font-size: 1.4em;
  }

  .color-green {
    color: #128c7e;
  }
`

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    color: '#FFFFFF',
    // [theme.breakpoints.up('md')]: {
    //   width: '20ch',
    // },
  },
}))

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '30px',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '& .MuiInputBase-root': {
    width: '100%',
  },
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  width: '30%',
}))

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& .search-icon': {
    color: '#FFFFFF',
  },
}))

export const IconButton = styled(MuiIconButton)`
  &.primary {
    color: #ffffff;
  }
`

export const AvatarBox = styled(MuiBox)`
  cursor: pointer;
  display: flex;
  margin-left: 20px;
  align-items: center;

  .avatar-button {
    margin-right: -18px;
    margin-left: -18px;
  }
`
