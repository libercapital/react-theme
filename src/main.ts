import { createTheme, PaletteColorOptions } from '@mui/material/styles';
import baseTheme from "./Theme";

export interface ThemeColor {
  primary?: PaletteColorOptions;
  secondary?: PaletteColorOptions;
}

export default (colors: ThemeColor = {}) => {
  if (!baseTheme.palette) {
    throw new Error('Missing base palette in theme');
  }

  if (colors.primary) {
    baseTheme.palette.primary = colors.primary;
  }

  if (colors.secondary) {
    baseTheme.palette.secondary = colors.secondary;
  }

  return createTheme(baseTheme);
}

