import breakpoints from '../Breakpoints';

export const PRIMARY_FONT = "'Public Sans', Arial, sans-serif";
export const SECONDARY_FONT = "'Sora', Arial, sans-serif";
export const MONOSPACE_FONT = "'JetBrains Mono', monospace";

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

export default typography;
