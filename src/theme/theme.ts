'use client';

import { colors } from '../colors';
import type { DeepPartial } from '../util';
import type { ButtonOwnProps } from '@mui/material';
import {
  type Theme,
  type ThemeOptions,
  createTheme,
} from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

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

const themeBase = createTheme({
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

function getColorByName(
  colorName: ButtonOwnProps['color'],
  customTheme: Theme,
  mode: 'main' | 'light' | 'dark',
) {
  return colorName === 'inherit'
    ? 'inherit'
    : customTheme.palette[colorName ?? 'primary'][mode];
}

const COMMON_THEME_OPTIONS: ThemeOptions = {
  typography: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeightLight: 400,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontSize: '34px',
      fontWeight: 700,
      lineHeight: '42px',
      color: colors.grey900,
      [themeBase.breakpoints.down('sm')]: {
        fontSize: '26px',
        lineHeight: '34px',
      },
    },
    h2: {
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: '30px',
      color: colors.grey900,
      [themeBase.breakpoints.down('sm')]: {
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
      fontWeight: 400,
      lineHeight: '24px',
      color: colors.grey900,
    },
    body2: {
      fontSize: '13px',
      fontWeight: 400,
      lineHeight: '16px',
      color: colors.grey900,
    },
    button: {
      fontSize: '16px',
      fontWeight: 600,
      textTransform: 'none',
    },
    label: {
      fontFamily: 'Open Sans, sans-serif',
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '24px',
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
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: '2px',
          padding: '4px 16px',
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
            border: '2px solid transparent',
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
            border: '2px solid transparent',
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

const VIRKAILIJA_THEME_OPTIONS = {
  ...COMMON_THEME_OPTIONS,
  palette: {
    background: {
      default: colors.grey50,
    },
    primary: {
      main: colors.blue2,
      light: colors.blue3,
      dark: colors.blue1,
      contrastText: colors.white,
    },
  },
};

const OPPIJA_THEME_OPTIONS = {
  ...COMMON_THEME_OPTIONS,
  palette: {
    primary: {
      main: colors.green2,
      light: colors.green3,
      dark: colors.green1,
      contrastText: colors.white,
    },
  },
};

interface CreateOPHThemeParams {
  variant: 'oph' | 'opintopolku';
  overrides?: DeepPartial<ThemeOptions>;
}

export function createODSTheme({
  variant,
  overrides = {},
}: CreateOPHThemeParams) {
  switch (variant) {
    case 'oph':
      return createTheme(deepmerge(VIRKAILIJA_THEME_OPTIONS, overrides));
    case 'opintopolku':
      return createTheme(deepmerge(OPPIJA_THEME_OPTIONS, overrides));
    default:
      throw Error('Theme variant must be "oph" or "opintopolku"!');
  }
}

export const virkailijaTheme = createODSTheme({ variant: 'oph' });
export const oppijaTheme = createODSTheme({ variant: 'opintopolku' });
