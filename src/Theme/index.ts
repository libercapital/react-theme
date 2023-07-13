import { ThemeOptions } from '@mui/material';
import breakpoints from "./Breakpoints"
import palette from "./Palette"
import typography from "./Typography"
import transitions from "./Transitions"
import shadows from "./Shadows"

const baseTheme: ThemeOptions = {
  breakpoints,
  direction: 'ltr',
  components: {},
  palette,
  shadows,
  typography,
  shape: {
    borderRadius: 4,
  },
  transitions,
};

export default baseTheme;
