import { createTheme } from '@mui/material'

/* Create a theme instance.
 * DOCS: https://mui.com/material-ui/customization/default-theme/#main-content
 */
const theme = createTheme({
  palette: {
    primary: {
      main: '#221F69',
    },
    secondary: {
      main: '#4FFDD3',
    },
    warning: {
      main: '#FFA500',
    },
    pink: {
      main: '#CF1C6A',
      contrastText: '#FFFFFF',
    },
    black: {
      main: '#000000',
      contrastText: '#FFFFFF',
    },
  },
})

export default theme
