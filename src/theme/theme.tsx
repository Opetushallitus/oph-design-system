'use client';

import {
  type Theme,
  type ThemeOptions,
  createTheme,
} from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
import CheckBoxOutlined from '@mui/icons-material/CheckBoxOutlined';
import IndeterminateCheckBoxOutlined from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import { focusOutlineStyle } from './theme-utils';
import { ophColors } from '../ophColors';

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
  palette: {
    error: {
      main: ophColors.alias.error,
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
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
        loadingPosition: 'start',
      },
      styleOverrides: {
        root: {
          borderRadius: '2px',
          padding: '6px 16px',
          lineHeight: '24px',
          '&.Mui-disabled': {
            cursor: 'not-allowed',
          },
          '& .MuiButton-startIcon svg': {
            width: '24px',
            height: '24px',
          },
          '&.Mui-focusVisible': focusOutlineStyle(),
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
                  '&:active': {
                    backgroundColor: theme.palette.primary.dark,
                  },
                };
              },
            },
            {
              props: { variant: 'outlined', color: 'primary' },
              style: ({ theme }) => {
                return {
                  backgroundColor: ophColors.white,
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
                  '&:active': {
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
                  '&.Mui-disabled': {
                    color: ophColors.grey400,
                  },
                  '&:hover': {
                    color: theme.palette.primary.light,
                    background: 'none',
                  },
                  '&:active': {
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
          borderRadius: '2px',
          padding: 0,
          zIndex: 0,
          color: ophColors.grey800,
          // Checkbox white background that doesn't overflow
          '&:before': {
            position: 'absolute',
            top: '4px',
            left: '4px',
            backgroundColor: ophColors.white,
            content: '""',
            width: 'calc(100% - 8px)',
            height: 'calc(100% - 8px)',
            zIndex: 1,
          },
          '&.Mui-disabled': {
            color: ophColors.grey400,
            '&:before': {
              backgroundColor: ophColors.grey100,
            },
          },
          '& input': {
            zIndex: 2,
          },
          '& .MuiSvgIcon-root': {
            zIndex: 1,
          },
          '&.Mui-focusVisible': focusOutlineStyle({
            outlineOffset: '-2px',
            borderRadius: '5px',
          }),
          variants: [
            {
              props: { color: 'primary' },
              style: ({ theme }) => ({
                '&.Mui-focusVisible:not(.Mui-disabled)': {
                  color: theme.palette.primary.light,
                },
                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }),
            },
            {
              props: { color: 'error' },
              style: ({ theme }) => ({
                color: theme.palette.error.main,
                '&.Mui-focusVisible:not(.Mui-disabled), &:hover': {
                  color: theme.palette.error.main,
                },
              }),
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
    MuiFormHelperText: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.body2,
          color: ophColors.black,
        }),
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
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
      styleOverrides: {
        root: {
          '&.Mui-focusVisible': focusOutlineStyle({
            borderRadius: '1px',
          }),
          '& svg.OphLink-OpenInNewIcon': {
            fontSize: '1.2em',
            marginLeft: '0.15em',
            verticalAlign: 'middle',
            marginTop: '-0.15em',
          },
          variants: [
            {
              props: { underline: 'hover' },
              style: {
                textDecoration: 'none',
                '&:hover, &:active, &.Mui-focusVisible': {
                  textDecoration: 'underline',
                },
              },
            },
          ],
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
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderColor: ophColors.grey800,
          borderRadius: '2px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: ({ theme }) => ({
          padding: theme.spacing(1, 1.5),
          lineHeight: '24px',
          height: 'auto',
        }),
        root: {
          variants: [
            {
              props: () => true,
              style: ({ theme }) => ({
                '& .MuiInputAdornment-root': {
                  margin: theme.spacing(1, 1, 1, 0),
                },
                padding: 0,
                backgroundColor: ophColors.white,
                borderRadius: '2px',
                '&:has(input:focus-visible)': focusOutlineStyle({
                  borderRadius: '2px',
                }),
                '& .MuiSvgIcon-root': {
                  color: ophColors.grey800,
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: ophColors.grey800,
                  borderRadius: '2px',
                  borderWidth: '1px',
                },
              }),
            },
            {
              props: { error: true },
              style: ({ theme }) => ({
                color: theme.palette.error.main,
                '& .MuiSvgIcon-root': {
                  color: theme.palette.error.main,
                },
              }),
            },
            {
              props: (props) => props.color === 'primary' && !props.disabled,
              style: ({ theme }) => ({
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderWidth: '2px',
                  borderColor: theme.palette.primary.main,
                },
              }),
            },
            {
              props: { disabled: true },
              style: {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: ophColors.grey400,
                },
                '& .MuiSvgIcon-root': {
                  color: ophColors.grey400,
                },
              },
            },
          ],
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
          '&:focus-visible': focusOutlineStyle({
            borderRadius: '2px',
          }),
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
          borderRadius: '2px',
          padding: '6px 16px',
          lineHeight: '24px',
          borderWidth: '2px',
          color: ophColors.grey900,
          borderColor: theme.palette.primary.main,
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

export const OPH_THEME_OPTIONS = Object.freeze(
  deepmerge(
    COMMON_THEME_OPTIONS,
    {
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
    },
    { clone: true },
  ),
);

export const OPINTOPOLKU_THEME_OPTIONS = Object.freeze(
  deepmerge(
    COMMON_THEME_OPTIONS,
    {
      palette: {
        primary: {
          main: ophColors.green2,
          light: ophColors.green3,
          dark: ophColors.green1,
          contrastText: ophColors.white,
        },
      },
    },
    { clone: true },
  ),
);
