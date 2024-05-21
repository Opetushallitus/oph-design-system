'use client';

import type { ButtonOwnProps } from '@mui/material';
import {
  type Theme,
  type ThemeOptions,
  createTheme,
} from '@mui/material/styles';
import NextLink, { type LinkProps } from 'next/link';
import React from 'react';

declare module '@mui/material/styles' {
  interface CustomTypographyVariants {
    label: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface CustomTypographyVariantsOptions {
    label?: React.CSSProperties;
  }

  /*eslint-disable-next-line @typescript-eslint/no-empty-interface */
  interface TypographyVariants extends CustomTypographyVariants {}
  /*eslint-disable-next-line @typescript-eslint/no-empty-interface */
  interface TypographyVariantsOptions extends CustomTypographyVariants {}

  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    label: true;
    h6: false;
    overline: false;
  }
}

const LinkBehaviour = React.forwardRef<HTMLAnchorElement, LinkProps>(
  function LinkBehaviour(props, ref) {
    return <NextLink ref={ref} {...props} />;
  },
);

export const colors = {
  grey900: '#1D1D1D',
  grey800: '#454545',
  grey700: '#4C4C4C',
  grey600: '#5D5D5D',
  grey500: '#6D6D6D',
  grey400: '#B2B2B2',
  grey300: '#C8C8C8',
  grey200: '#DFDFDF',
  grey100: '#EDEDED',
  grey50: '#F6F6F6',

  white: '#FFFFFF',
  black: '#000000',

  blue1: '#000066',
  blue2: '#0033CC',
  blue3: '#0041DC',
  cyan1: '#006699',
  cyan2: '#66CCCC',
  cyan3: '#99FFFF',
  lightBlue1: '#82D4FF',
  lightBlue2: '#C1EAFF',

  green1: '#254905',
  green2: '#378703', // Success
  green3: '#5BCA13',
  green4: '#9CFF5A',
  green5: '#CCFFCC',

  red1: '#990066',
  red2: '#E60895',
  
  orange1: '#663300',
  orange2: '#993300',
  orange3: '#CC3300', // Error
  orange4: '#FF5500',

  yellow1: '#FFCC33',
  yellow2: '#FFD900',
  yellow3: '#FFFF33',

  pink1: '#FF66CC',
  pink2: '#FFCCFF',

  purple1: '#660066',
  purple2: '#660099',
  purple3: '#C227B9',
  purple4: '#CC99FF',
};

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1600,
      xxl: 1920,
    },
  },
});

const COMMON_THEME_OPTIONS: ThemeOptions = {
  typography: {
    fontFamily: 'Open Sans',
    h1: {
      fontSize: '34px',
      fontWeight: 700,
      lineHeight: '42px',
      color: colors.grey900,
      [theme.breakpoints.down('sm')]: {
        fontSize: '26px',
        lineHeight: '34px',
      },
    },
    h2: {
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: '30px',
      color: colors.grey900,
      [theme.breakpoints.down('sm')]: {
        fontSize: '22px',
        lineHeight: '28px',
      },
    },
    h3: {
      fontSize: '20px',
      fontWeight: 700,
      lineHeight: '26px',
      color: colors.grey900,
    },
    h4: {
      fontSize: '18px',
      fontWeight: 700,
      lineHeight: '24px',
      color: colors.grey900,
    },
    h5: {
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: '24px',
      color: colors.grey900,
    },
    h6: undefined,
    body1: {
      fontSize: '16px',
      lineHeight: '24px',
      color: colors.grey900,
    },
    body2: {
      fontSize: '13px',
      lineHeight: '16px',
      color: colors.grey900,
    },
    button: {
      fontSize: '16px',
      fontWeight: 600,
      textTransform: 'none',
    },
    label: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 600,
      color: colors.grey900,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          subtitle1: 'body1',
          subtitle2: 'body2',
        },
      },
    },
    MuiLink: {
      defaultProps: {
        component: LinkBehaviour,
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: '2px',
          padding: '6px 18px',
          '&.Mui-disabled': {
            cursor: 'not-allowed',
          },
          '& .MuiButton-startIcon svg': {
            width: '24px',
            height: '24px',
          },
        },
        contained: ({ ownerState, theme }) => {
          return {
            '&.Mui-disabled': {
              backgroundColor: colors.grey400,
              color: colors.white,
            },
            '&:hover': {
              backgroundColor: getColorByName(ownerState.color, theme, 'light'),
            },
            '&:active, &.Mui-focusVisible': {
              backgroundColor: getColorByName(ownerState.color, theme, 'dark'),
            },
          };
        },
        outlined: ({ ownerState, theme }) => {
          return {
            color: getColorByName(ownerState.color, theme, 'main'),
            borderWidth: '2px',
            borderColor: getColorByName(ownerState.color, theme, 'main'),
            '&.Mui-disabled': {
              borderWidth: '2px',
              color: colors.grey400,
              borderColor: colors.grey400,
            },
            '&:hover': {
              borderWidth: '2px',
              backgroundColor: colors.white,
              color: getColorByName(ownerState.color, theme, 'light'),
              borderColor: getColorByName(ownerState.color, theme, 'light'),
            },
            '&:active, &.Mui-focusVisible': {
              borderWidth: '2px',
              backgroundColor: colors.white,
              color: getColorByName(ownerState.color, theme, 'dark'),
              borderColor: getColorByName(ownerState.color, theme, 'dark'),
            },
          };
        },
        text: ({ ownerState, theme }) => {
          return {
            color: getColorByName(ownerState.color, theme, 'main'),
            background: 'none',
            '&.Mui-disabled': {
              color: colors.grey400,
            },
            '&:hover': {
              color: getColorByName(ownerState.color, theme, 'light'),
              background: 'none',
            },
            '&:active, &.Mui-focusVisible': {
              color: getColorByName(ownerState.color, theme, 'dark'),
              background: 'none',
            },
          };
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: colors.black,
          '&.Mui-focused': {
            color: colors.black,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: colors.black,
          '&.Mui-focused': {
            color: colors.black,
          },
        },
      },
    },
    MuiPagination: {
      defaultProps: {
        variant: 'text',
        shape: 'rounded',
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          borderRadius: '2px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            '.MuiOutlinedInput-notchedOutline': {
              borderRadius: '2px',
              borderWidth: '1px',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderWidth: '2px',
              borderColor: theme.palette.primary.main,
            },
          };
        },
      },
    },
    MuiFormControl: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            '&.Mui-selected': {
              backgroundColor: colors.grey50,
              color: theme.palette.primary.main,
              '&:hover': {
                backgroundColor: colors.grey50,
              },
            },
            '&.Mui-selected.Mui-focusVisible': {
              backgroundColor: colors.grey50,
              color: theme.palette.primary.main,
            },
          };
        },
      },
    },
  },
};

export const virkailijaTheme = createTheme({
  ...COMMON_THEME_OPTIONS,
  palette: {
    primary: {
      main: colors.blue2,
      light: colors.blue3,
      dark: colors.blue1,
      contrastText: colors.white,
    },
  },
});

export const oppijaTheme = createTheme({
  ...COMMON_THEME_OPTIONS,
  palette: {
    primary: {
      main: colors.green2,
      light: colors.green3,
      dark: colors.green1,
      contrastText: colors.white,
    },
  },
});

function getColorByName(
  colorName: ButtonOwnProps['color'],
  customTheme: Theme,
  mode: 'main' | 'light' | 'dark',
) {
  return colorName === 'inherit'
    ? 'inherit'
    : customTheme.palette[colorName ?? 'primary'][mode];
}
