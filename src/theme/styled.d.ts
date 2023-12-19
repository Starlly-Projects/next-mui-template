import {
  PaletteColor,
  SimplePaletteColorOptions,
  Theme,
  ThemeOptions,
} from '@mui/material'

import { ColorScale } from './types'

declare module '@mui/material/styles' {
  interface Palette {
    customColor: ColorScale
    custonButtonColor: SimplePaletteColorOptions
  }

  interface PaletteOptions {
    customColor?: ColorScale
    custonButtonColor?: SimplePaletteColorOptions
    pink?: SimplePaletteColorOptions
    black?: SimplePaletteColorOptions
  }

  export function createTheme(options?: ThemeOptions, ...args: object[]): Theme
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    custonButtonColor: true
    pink: true
    black: true
  }
}

export default createTheme({ palette })
