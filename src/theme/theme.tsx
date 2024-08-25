'use client';

import { ophColors } from '../colors';
import type { DeepPartial } from '../util';
import type { ButtonOwnProps } from '@mui/material';
import { fiFI, svSE, enUS } from '@mui/material/locale';
import {
  type Theme,
  type ThemeOptions,
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import { useMemo, type ReactNode } from 'react';

declare module '@mui/material/styles' {
  interface CustomTypographyVariants {
    label: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface CustomTypographyVariantsOptions {
    label?: React.CSSProperties;
  }

  /* eslint-disable-next-line @typescript-eslint/no-empty-object-type */
  interface TypographyVariants extends CustomTypographyVariants {}
  /* eslint-disable-next-line @typescript-eslint/no-empty-object-type */
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
      color: ophColors.grey900,
      [themeBase.breakpoints.down('sm')]: {
        fontSize: '26px',
        lineHeight: '34px',
      },
    },
    h2: {
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: '30px',
      color: ophColors.grey900,
      [themeBase.breakpoints.down('sm')]: {
        fontSize: '22px',
        lineHeight: '28px',
      },
    },
    h3: {
      fontSize: '20px',
      fontWeight: 700,
      lineHeight: '26px',
      color: ophColors.grey900,
    },
    h4: {
      fontSize: '18px',
      fontWeight: 700,
      lineHeight: '24px',
      color: ophColors.grey900,
    },
    h5: {
      fontSize: '16px',
      fontWeight: 700,
      lineHeight: '24px',
      color: ophColors.grey900,
    },
    h6: undefined,
    body1: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
      color: ophColors.grey900,
    },
    body2: {
      fontSize: '13px',
      fontWeight: 400,
      lineHeight: '16px',
      color: ophColors.grey900,
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
      color: ophColors.grey900,
    },
  },
  components: {
    MuiAccordion: {
      defaultProps: {
        disableGutters: true,
      },
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
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
        disableRipple: true,
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
              backgroundColor: ophColors.grey400,
              color: ophColors.white,
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
              color: ophColors.grey400,
              borderColor: ophColors.grey400,
            },
            '&:hover': {
              borderWidth: '2px',
              backgroundColor: ophColors.white,
              color: getColorByName(ownerState.color, theme, 'light'),
              borderColor: getColorByName(ownerState.color, theme, 'light'),
            },
            '&:active, &.Mui-focusVisible': {
              borderWidth: '2px',
              backgroundColor: ophColors.white,
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
              color: ophColors.grey400,
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
          color: ophColors.black,
          '&.Mui-focused': {
            color: ophColors.black,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: ophColors.black,
          '&.Mui-focused': {
            color: ophColors.black,
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
              backgroundColor: ophColors.grey50,
              color: theme.palette.primary.main,
              '&:hover': {
                backgroundColor: ophColors.grey50,
              },
            },
            '&.Mui-selected.Mui-focusVisible': {
              backgroundColor: ophColors.grey50,
              color: theme.palette.primary.main,
            },
          };
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-root': {
            fontSize: 'inherit',
          },
        },
      },
    },
  },
};

const VIRKAILIJA_THEME_OPTIONS = Object.freeze({
  ...COMMON_THEME_OPTIONS,
  palette: {
    background: {
      default: ophColors.grey50,
    },
    primary: {
      main: ophColors.blue2,
      light: ophColors.blue3,
      dark: ophColors.blue1,
      contrastText: ophColors.white,
    },
  },
} as const);

const OPPIJA_THEME_OPTIONS = Object.freeze({
  ...COMMON_THEME_OPTIONS,
  palette: {
    primary: {
      main: ophColors.green2,
      light: ophColors.green3,
      dark: ophColors.green1,
      contrastText: ophColors.white,
    },
  },
} as const);

export type Language = 'fi' | 'sv' | 'en';

export type ThemeVariant = 'oph' | 'opintopolku';

export interface CreateOPHThemeParams {
  variant: ThemeVariant;
  lang?: Language;
  overrides?: DeepPartial<ThemeOptions>;
}

function getLocale(lang?: Language) {
  switch (lang) {
    case 'fi':
      return fiFI;
    case 'sv':
      return svSE;
    case 'en':
      return enUS;
    default:
      return fiFI;
  }
}

export function createOphTheme({
  variant,
  overrides = {},
  lang,
}: CreateOPHThemeParams) {
  switch (variant) {
    case 'oph':
      return createTheme(
        deepmerge(VIRKAILIJA_THEME_OPTIONS, overrides, { clone: true }),
        getLocale(lang),
      );
    case 'opintopolku':
      return createTheme(
        deepmerge(OPPIJA_THEME_OPTIONS, overrides, { clone: true }),
        getLocale(lang),
      );
    default:
      throw Error('Theme variant must be "oph" or "opintopolku"!');
  }
}

export const useOphTheme = ({
  variant,
  lang,
  overrides,
}: CreateOPHThemeParams) =>
  useMemo(
    () => createOphTheme({ variant, lang, overrides }),
    [variant, lang, overrides],
  );

export const OphThemeProvider = ({
  variant,
  lang,
  overrides,
  children,
}: CreateOPHThemeParams & { children: ReactNode }) => {
  const theme = useOphTheme({ variant, lang, overrides });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
