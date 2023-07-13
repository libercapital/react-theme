import { Palette, alpha, lighten } from '@mui/material/styles';

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

const HOVER_OPACITY = 0.15;
const SELECTED_OPACITY = 0.3;
const DISABLED_OPACITY = 0.4;
const FOCUS_OPACITY = 0.15;
const ACTIVATED_OPACITY = 0.6;

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

export default palette
