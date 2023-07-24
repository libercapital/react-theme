import {
  ThemeOptions,
  createTheme,
  PaletteColorOptions,
  Shadows,
  Palette,
  alpha,
  lighten,
  Breakpoints,
} from '@mui/material';

export const PRIMARY_FONT = "'Public Sans', Arial, sans-serif";
export const SECONDARY_FONT = "'Sora', Arial, sans-serif";
export const MONOSPACE_FONT = "'JetBrains Mono', monospace";

export const HOVER_OPACITY = 0.15;
export const SELECTED_OPACITY = 0.3;
export const DISABLED_OPACITY = 0.4;
export const FOCUS_OPACITY = 0.15;
export const ACTIVATED_OPACITY = 0.6;

const breakpoints: Partial<Breakpoints> = {
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

const COLORS = {
  common: {
    black: '#000000',
    white: '#FFFFFF',
  },
  primary: {
    light: '#84BCFF',
    main: '#006AEB',
    dark: '#002654',
    contrastText: '#FFFFFF',
  },
  secondary: {
    light: '#6AE8DF',
    main: '#429BAD',
    dark: '#133044',
    contrastText: 'rgba(0, 0, 0, 0.8)',
  },
  error: {
    light: '#F8B5B3',
    main: '#D53F50',
    dark: '#A6002A',
    contrastText: '#FFFFFF',
  },
  warning: {
    light: '#FFDDA9',
    main: '#FFA11D',
    dark: '#BF6C00',
    contrastText: 'rgba(0, 0, 0, 0.80)',
  },
  info: {
    light: '#A8E4FF',
    main: '#2FBBE7',
    dark: '#007FAC',
    contrastText: 'rgba(0, 0, 0, 0.80)',
  },
  success: {
    light: '#B0D1B6',
    main: '#2F854B',
    dark: '#005924',
    contrastText: '#FFFFFF',
  },
  grey: {
    '50': '#EEF1F7',
    '100': '#D5DCEB',
    '200': '#B6C4DF',
    '300': '#9AAACB',
    '400': '#7B8FB7',
    '500': '#6A7CA0',
    '600': '#506286',
    '700': '#3D4D6B',
    '800': '#2B354A',
    '900': '#141D2E',
    A100: '#D9DBE2',
    A200: '#C1C6D0',
    A400: '#939BAD',
    A700: '#3C4556',
  },
};

const palette: Partial<Palette> = {
  ...COLORS,
  contrastThreshold: 4.5,
  tonalOffset: 0.2,
  text: {
    primary: '#464F61',
    secondary: '#506286',
    disabled: '#9AAACB',
  },
  divider: 'rgba(84, 97, 123, 0.5)',
  background: {
    paper: '#FFFFFF',
    default: lighten(COLORS.grey[50], 0.5),
  },
  action: {
    active: `rgba(63, 77, 105, ${ACTIVATED_OPACITY})`,
    activatedOpacity: ACTIVATED_OPACITY,
    hover: alpha(COLORS.primary.main, HOVER_OPACITY),
    hoverOpacity: HOVER_OPACITY,
    selected: alpha(COLORS.primary.main, SELECTED_OPACITY),
    selectedOpacity: SELECTED_OPACITY,
    disabled: '#9AAACB',
    disabledBackground: '#D5DCEB',
    disabledOpacity: DISABLED_OPACITY,
    focus: `rgba(63, 77, 105, ${FOCUS_OPACITY})`,
    focusOpacity: FOCUS_OPACITY,
  },
};

const shadows: Shadows = [
  'none',
  '0px 1px 1px 0px #50628638,0px 1px 0px 1px #6A7CA014',
  '0px 2px 4px 0px #5062864D,0px 1px 0px 1px #6A7CA014',
  '0px 4px 10px -2px #50628666,0px 2px 0px 1px #6A7CA01A',
  '0px 6px 14px -4px #50628666,0px 2px 0px 1px #6A7CA01A',
  '0px 8px 20px -4px #50628666,0px 2px 0px 1px #6A7CA01A',
  '0px 12px 20px -4px #50628666,0px 4px 0px 1px #6A7CA01A',
  '0px 4px 2px -1px rgba(106, 124, 160, 0.18), 0px 16px 32px rgba(80, 98, 134, 0.3), inset 0px 0px 0px 1px rgba(80, 98, 134, 0.25)',
  '0px 6px 4px -2px rgba(106, 124, 160, 0.15), 0px 20px 40px 4px rgba(80, 98, 134, 0.3), inset 0px 0px 0px 1px rgba(80, 98, 134, 0.25)',
  '0px 8px 6px -2px rgba(106, 124, 160, 0.2), 0px 24px 44px 6px rgba(80, 98, 134, 0.32), inset 0px 0px 0px 1px rgba(80, 98, 134, 0.25)',
  '0px 12px 10px -4px rgba(106, 124, 160, 0.25), 0px 36px 48px 14px rgba(80, 98, 134, 0.3), inset 0px 0px 0px 1px rgba(80, 98, 134, 0.25)',
  '0px 20px 16px -4px rgba(106, 124, 160, 0.25), 0px 36px 64px 24px rgba(80, 98, 134, 0.3), inset 0px 0px 0px 1px rgba(80, 98, 134, 0.25)',
  '0px 24px 24px -4px rgba(106, 124, 160, 0.25), 0px 36px 72px 24px rgba(80, 98, 134, 0.3), inset 0px 0px 0px 1px rgba(80, 98, 134, 0.25)',
  '0px -1px 1px 0px #50628638,0px -1px 0px 1px #6A7CA014',
  '0px -2px 4px 0px #5062864D,0px -1px 0px 1px #6A7CA014',
  '0px -4px 10px -2px #50628666,0px -2px 0px 1px #6A7CA01A',
  '0px -6px 14px -4px #50628666,0px -2px 0px 1px #6A7CA01A',
  '0px -8px 20px -4px #50628666,0px -2px 0px 1px #6A7CA01A',
  '0px -12px 20px -4px #50628666,0px -4px 0px 1px #6A7CA01A',
  '0px -4px 2px -1px rgba(106, 124, 160, 0.18), 0px -16px 32px rgba(80, 98, 134, 0.3), inset 0px 0px 0px 1px rgba(80, 98, 134, 0.25)',
  '0px -6px 4px -2px rgba(106, 124, 160, 0.15), 0px -20px 40px 4px rgba(80, 98, 134, 0.3), inset 0px 0px 0px 1px rgba(80, 98, 134, 0.25)',
  '0px -8px 6px -2px rgba(106, 124, 160, 0.2), 0px -24px 44px 6px rgba(80, 98, 134, 0.32), inset 0px 0px 0px 1px rgba(80, 98, 134, 0.25)',
  '0px -12px 10px -4px rgba(106, 124, 160, 0.25), 0px -36px 48px 14px rgba(80, 98, 134, 0.3), inset 0px 0px 0px 1px rgba(80, 98, 134, 0.25)',
  '0px -20px 16px -4px rgba(106, 124, 160, 0.25), 0px -36px 64px 24px rgba(80, 98, 134, 0.3), inset 0px 0px 0px 1px rgba(80, 98, 134, 0.25)',
  '0px -24px 24px -4px rgba(106, 124, 160, 0.25), 0px -36px 72px 24px rgba(80, 98, 134, 0.3), inset 0px 0px 0px 1px rgba(80, 98, 134, 0.25)',
];


const transitions = {
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  duration: {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  },
};

const typography = {
  fontFamily: PRIMARY_FONT,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  h1: {
    fontFamily: SECONDARY_FONT,
    fontWeight: 600,
    lineHeight: '32px',
    letterSpacing: '-0.5px',
    fontSize: '1.625rem',
    [`@media (max-width:${breakpoints.values?.sm}px)`]: {
      fontSize: 24,
      lineHeight: '28px',
    },
  },
  h2: {
    fontFamily: SECONDARY_FONT,
    fontWeight: 600,
    lineHeight: '28px',
    letterSpacing: '-0.5px',
    fontSize: '1.375rem',
    [`@media (max-width:${breakpoints.values?.sm}px)`]: {
      fontSize: 20,
      lineHeight: '28px',
    },
  },
  h3: {
    fontFamily: SECONDARY_FONT,
    fontWeight: 600,
    lineHeight: '28px',
    letterSpacing: '-0.5px',
    fontSize: '1.25rem',
    [`@media (max-width:${breakpoints.values?.sm}px)`]: {
      fontSize: 16,
      lineHeight: '24px',
    },
  },
  h4: {
    fontFamily: SECONDARY_FONT,
    fontWeight: 600,
    lineHeight: '28px',
    letterSpacing: '0px',
    fontSize: '1.125rem',
    [`@media (max-width:${breakpoints.values?.sm}px)`]: {
      fontSize: 14,
      lineHeight: '20px',
    },
  },
  h5: {
    fontFamily: SECONDARY_FONT,
    fontWeight: 600,
    lineHeight: '24px',
    letterSpacing: '0px',
    fontSize: '1rem',
    [`@media (max-width:${breakpoints.values?.sm}px)`]: {
      fontSize: 14,
      lineHeight: '20px',
    },
  },
  h6: {
    fontFamily: SECONDARY_FONT,
    fontWeight: 600,
    lineHeight: '20px',
    letterSpacing: '0px',
    fontSize: '0.875rem',
    [`@media (max-width:${breakpoints.values?.sm}px)`]: {
      fontSize: 14,
      lineHeight: '20px',
    },
  },
  subtitle1: {
    fontFamily: PRIMARY_FONT,
    fontWeight: 600,
    lineHeight: '24px',
    letterSpacing: '0px',
    fontSize: '1.0625rem',
  },
  subtitle2: {
    fontFamily: PRIMARY_FONT,
    fontWeight: 600,
    lineHeight: '20px',
    letterSpacing: '0px',
    fontSize: '0.9375rem',
  },
  body1: {
    fontFamily: PRIMARY_FONT,
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '0px',
    fontSize: '1rem',
  },
  body2: {
    fontFamily: PRIMARY_FONT,
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '0px',
    fontSize: '0.875rem',
  },
  button: {
    fontFamily: PRIMARY_FONT,
    fontWeight: 600,
  },
  caption: {
    fontFamily: PRIMARY_FONT,
    fontWeight: 400,
    lineHeight: '20px',
    letterSpacing: '0px',
    fontSize: '0.8125rem',
  },
  overline: {
    fontFamily: PRIMARY_FONT,
    fontWeight: 700,
    lineHeight: '16px',
    letterSpacing: '0.5px',
    fontSize: '0.8125rem',
  },
};

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
}

export interface ThemeColor {
  primary?: PaletteColorOptions;
  secondary?: PaletteColorOptions;
}

const getTheme = (colors: ThemeColor = {}) => {
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

export default getTheme
