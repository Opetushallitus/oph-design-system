'use client';

import { ophColors } from '../colors';
import { CssBaseline } from '@mui/material';
import { fiFI, svSE, enUS } from '@mui/material/locale';
import {
  type Theme,
  type ThemeOptions,
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import { useMemo, type ReactNode } from 'react';
import type { OphLanguage, OphThemeParams } from '../types';
import {
  CheckBoxOutlined,
  IndeterminateCheckBoxOutlined,
} from '@mui/icons-material';

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

const COMMON_THEME_OPTIONS: ThemeOptions = {
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
          variants: [
            {
              props: { variant: 'contained', color: 'primary' },
              style: ({ theme }) => {
                return {
                  border: '2px solid transparent',
                  '&.Mui-disabled': {
                    backgroundColor: ophColors.grey400,
                    color: ophColors.white,
                  },
                  '&:hover': {
                    backgroundColor: theme.palette.primary.light,
                  },
                  '&:active, &.Mui-focusVisible': {
                    backgroundColor: theme.palette.primary.dark,
                  },
                };
              },
            },
            {
              props: { variant: 'outlined', color: 'primary' },
              style: ({ theme }) => {
                return {
                  color: theme.palette.primary.main,
                  borderWidth: '2px',
                  borderColor: theme.palette.primary.main,
                  '&.Mui-disabled': {
                    borderWidth: '2px',
                    color: ophColors.grey400,
                    borderColor: ophColors.grey400,
                  },
                  '&:hover': {
                    borderWidth: '2px',
                    backgroundColor: ophColors.white,
                    color: theme.palette.primary.light,
                    borderColor: theme.palette.primary.light,
                  },
                  '&:active, &.Mui-focusVisible': {
                    borderWidth: '2px',
                    backgroundColor: ophColors.white,
                    color: theme.palette.primary.dark,
                    borderColor: theme.palette.primary.dark,
                  },
                };
              },
            },
            {
              props: { variant: 'text', color: 'primary' },
              style: ({ theme }) => {
                return {
                  border: '2px solid transparent',
                  color: theme.palette.primary.main,
                  background: 'none',
                  '&.Mui-disabled': {
                    color: ophColors.grey400,
                  },
                  '&:hover': {
                    color: theme.palette.primary.light,
                    background: 'none',
                  },
                  '&:active, &.Mui-focusVisible': {
                    color: theme.palette.primary.dark,
                    background: 'none',
                  },
                };
              },
            },
          ],
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          margin: 0,
        },
        label: ({ theme }) => ({
          paddingLeft: theme.spacing(1),
        }),
      },
    },
    MuiCheckbox: {
      defaultProps: {
        disableRipple: true,
        checkedIcon: <CheckBoxOutlined />,
        indeterminateIcon: <IndeterminateCheckBoxOutlined />,
      },
      styleOverrides: {
        root: {
          padding: 0,
          variants: [
            {
              props: { color: 'primary' },
              style: ({ theme }) => ({
                '&.Mui-focusVisible:not(.Mui-disabled)': {
                  color: theme.palette.primary.light,
                  '& svg > path': {
                    filter: `drop-shadow( 0px 0px 1.5px ${theme.palette.primary.light})`,
                  },
                },
                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }),
            },
            {
              props: { color: 'error' },
              style: {
                color: ophColors.alias.error,
                '&.Mui-focusVisible:not(.Mui-disabled), &:hover': {
                  color: ophColors.alias.error,
                },
              },
            },
          ],
        },
      },
    },
    MuiFormControl: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.label,
          color: ophColors.black,
          '&.Mui-focused': {
            color: ophColors.black,
          },
        }),
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
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            '.MuiOutlinedInput-notchedOutline': {
              borderRadius: '2px',
              borderWidth: '1px',
            },
            '&:hover:not(.Mui-disabled) .MuiOutlinedInput-notchedOutline': {
              borderWidth: '2px',
              borderColor: theme.palette.primary.main,
            },
          };
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
    MuiSelect: {
      styleOverrides: {
        select: {
          padding: '12px',
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
    MuiToggleButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          paddingTop: 0,
          paddingBottom: 0,
          color: ophColors.grey900,
          borderColor: theme.palette.primary.main,
          borderWidth: '2px',
          borderRadius: '2px',
          '&.Mui-selected': {
            backgroundColor: theme.palette.primary.main,
            color: ophColors.white,
            '&:hover': {
              backgroundColor: theme.palette.primary.light,
              color: ophColors.white,
            },
            '&:active, &.Mui-focusVisible': {
              backgroundColor: theme.palette.primary.dark,
            },
          },
          '&:hover': {
            backgroundColor: ophColors.white,
            borderColor: theme.palette.primary.light,
            color: theme.palette.primary.main,
          },
          '&.Mui-disabled': {},
        }),
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
  },
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
};

const OPH_THEME_OPTIONS = Object.freeze({
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

const OPINTOPOLKU_THEME_OPTIONS = Object.freeze({
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

function getLocale(lang?: OphLanguage) {
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

const EMPTY_OBJECT = {} as const;

export function createOphTheme({
  variant,
  lang,
  overrides = EMPTY_OBJECT,
}: OphThemeParams) {
  switch (variant) {
    case 'oph':
      return createTheme(
        deepmerge(OPH_THEME_OPTIONS, overrides, { clone: true }),
        getLocale(lang),
      );
    case 'opintopolku':
      return createTheme(
        deepmerge(OPINTOPOLKU_THEME_OPTIONS, overrides, { clone: true }),
        getLocale(lang),
      );
    default:
      throw Error('Theme variant must be "oph" or "opintopolku"!');
  }
}

export const useOphTheme = ({ variant, lang, overrides }: OphThemeParams) =>
  useMemo(
    () => createOphTheme({ variant, lang, overrides }),
    [variant, lang, overrides],
  );

export const OphThemeProvider = ({
  variant,
  lang,
  overrides,
  children,
}: OphThemeParams & { children: ReactNode }) => {
  const theme = useOphTheme({ variant, lang, overrides });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
