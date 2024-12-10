'use client';

import {
  focusOutlineStyle,
  getLocale
} from "./chunk-OLXJFWUE.js";
import {
  createSvgIcon
} from "./chunk-NF6FGVLU.js";
import {
  ophColors
} from "./chunk-T2QMLCJ4.js";

// src/theme/theme.tsx
import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider
} from "@mui/material/styles";
import { deepmerge } from "@mui/utils";
import { useMemo } from "react";

// node_modules/@mui/icons-material/esm/CheckBoxOutlined.js
import { jsx as _jsx } from "react/jsx-runtime";
var CheckBoxOutlined_default = createSvgIcon(/* @__PURE__ */ _jsx("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"
}), "CheckBoxOutlined");

// node_modules/@mui/icons-material/esm/IndeterminateCheckBoxOutlined.js
import { jsx as _jsx2 } from "react/jsx-runtime";
var IndeterminateCheckBoxOutlined_default = createSvgIcon(/* @__PURE__ */ _jsx2("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM7 11h10v2H7z"
}), "IndeterminateCheckBoxOutlined");

// src/theme/theme.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var themeBase = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1600,
      xxl: 1920
    }
  }
});
var COMMON_THEME_OPTIONS = {
  palette: {
    error: {
      main: ophColors.alias.error
    }
  },
  components: {
    MuiAccordion: {
      defaultProps: {
        disableGutters: true
      },
      styleOverrides: {
        root: {
          boxShadow: "none"
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true
      },
      styleOverrides: {
        root: {
          borderRadius: "2px",
          padding: "4px 16px",
          "&.Mui-disabled": {
            cursor: "not-allowed"
          },
          "& .MuiButton-startIcon svg": {
            width: "24px",
            height: "24px"
          },
          ...focusOutlineStyle(),
          variants: [
            {
              props: { variant: "contained", color: "primary" },
              style: ({ theme }) => {
                return {
                  border: "2px solid transparent",
                  "&.Mui-disabled": {
                    backgroundColor: ophColors.grey400,
                    color: ophColors.white
                  },
                  "&:hover": {
                    backgroundColor: theme.palette.primary.light
                  },
                  "&:active": {
                    backgroundColor: theme.palette.primary.dark
                  }
                };
              }
            },
            {
              props: { variant: "outlined", color: "primary" },
              style: ({ theme }) => {
                return {
                  backgroundColor: ophColors.white,
                  color: theme.palette.primary.main,
                  borderWidth: "2px",
                  borderColor: theme.palette.primary.main,
                  "&.Mui-disabled": {
                    borderWidth: "2px",
                    color: ophColors.grey400,
                    borderColor: ophColors.grey400
                  },
                  "&:hover": {
                    borderWidth: "2px",
                    backgroundColor: ophColors.white,
                    color: theme.palette.primary.light,
                    borderColor: theme.palette.primary.light
                  },
                  "&:active": {
                    borderWidth: "2px",
                    backgroundColor: ophColors.white,
                    color: theme.palette.primary.dark,
                    borderColor: theme.palette.primary.dark
                  }
                };
              }
            },
            {
              props: { variant: "text", color: "primary" },
              style: ({ theme }) => {
                return {
                  border: "2px solid transparent",
                  color: theme.palette.primary.main,
                  "&.Mui-disabled": {
                    color: ophColors.grey400
                  },
                  "&:hover": {
                    color: theme.palette.primary.light,
                    background: "none"
                  },
                  "&:active": {
                    color: theme.palette.primary.dark,
                    background: "none"
                  }
                };
              }
            }
          ]
        }
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          margin: 0
        },
        label: ({ theme }) => ({
          paddingLeft: theme.spacing(1)
        })
      }
    },
    MuiCheckbox: {
      defaultProps: {
        disableRipple: true,
        checkedIcon: /* @__PURE__ */ jsx(CheckBoxOutlined_default, {}),
        indeterminateIcon: /* @__PURE__ */ jsx(IndeterminateCheckBoxOutlined_default, {})
      },
      styleOverrides: {
        root: {
          borderRadius: "2px",
          padding: 0,
          zIndex: 0,
          color: ophColors.grey800,
          // Checkbox white background that doesn't overflow
          "&:before": {
            position: "absolute",
            top: "4px",
            left: "4px",
            backgroundColor: ophColors.white,
            content: '""',
            width: "calc(100% - 8px)",
            height: "calc(100% - 8px)",
            zIndex: 1
          },
          "&.Mui-disabled": {
            color: ophColors.grey400,
            "&:before": {
              backgroundColor: ophColors.grey100
            }
          },
          "& input": {
            zIndex: 2
          },
          "& .MuiSvgIcon-root": {
            zIndex: 1
          },
          ...focusOutlineStyle({ outlineOffset: "-2px", borderRadius: "5px" }),
          variants: [
            {
              props: { color: "primary" },
              style: ({ theme }) => ({
                "&.Mui-focusVisible:not(.Mui-disabled)": {
                  color: theme.palette.primary.light
                },
                "&:hover": {
                  color: theme.palette.primary.main
                }
              })
            },
            {
              props: { color: "error" },
              style: ({ theme }) => ({
                color: theme.palette.error.main,
                "&.Mui-focusVisible:not(.Mui-disabled), &:hover": {
                  color: theme.palette.error.main
                }
              })
            }
          ]
        }
      }
    },
    MuiFormControl: {
      defaultProps: {
        size: "small"
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          ...theme.typography.label,
          color: ophColors.black,
          "&.Mui-focused": {
            color: ophColors.black
          }
        })
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: ophColors.black,
          "&.Mui-focused": {
            color: ophColors.black
          }
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          "&:hover, &:active": {
            textDecoration: "underline"
          },
          ...focusOutlineStyle({
            textDecoration: "underline",
            borderRadius: "1px"
          }),
          "& svg.OphLink-OpenInNewIcon": {
            fontSize: "1.2em",
            marginLeft: "0.15em",
            verticalAlign: "middle",
            marginTop: "-0.15em"
          }
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            "&.Mui-selected": {
              backgroundColor: ophColors.grey50,
              color: theme.palette.primary.main,
              "&:hover": {
                backgroundColor: ophColors.grey50
              }
            },
            "&.Mui-selected.Mui-focusVisible": {
              backgroundColor: ophColors.grey50,
              color: theme.palette.primary.main
            }
          };
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            backgroundColor: ophColors.white,
            ".MuiOutlinedInput-notchedOutline": {
              borderRadius: "2px",
              borderWidth: "1px"
            },
            "&:hover:not(.Mui-disabled) .MuiOutlinedInput-notchedOutline": {
              borderWidth: "2px",
              borderColor: theme.palette.primary.main
            }
          };
        }
      }
    },
    MuiPagination: {
      defaultProps: {
        variant: "text",
        shape: "rounded"
      }
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          borderRadius: "2px"
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          padding: "12px"
        }
      }
    },
    MuiTable: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-root": {
            fontSize: "inherit"
          }
        }
      }
    },
    MuiToggleButton: {
      defaultProps: {
        disableRipple: true
      },
      styleOverrides: {
        root: ({ theme }) => ({
          paddingTop: 0,
          paddingBottom: 0,
          color: ophColors.grey900,
          borderColor: theme.palette.primary.main,
          borderWidth: "2px",
          borderRadius: "2px",
          "&.Mui-selected": {
            backgroundColor: theme.palette.primary.main,
            color: ophColors.white,
            "&:hover": {
              backgroundColor: theme.palette.primary.light,
              color: ophColors.white
            },
            "&:active, &.Mui-focusVisible": {
              backgroundColor: theme.palette.primary.dark
            }
          },
          "&:hover": {
            backgroundColor: ophColors.white,
            borderColor: theme.palette.primary.light,
            color: theme.palette.primary.main
          },
          "&.Mui-disabled": {}
        })
      }
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          subtitle1: "body1",
          subtitle2: "body2"
        }
      }
    }
  },
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontWeightLight: 400,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontSize: "34px",
      fontWeight: 700,
      lineHeight: "42px",
      color: ophColors.grey900,
      [themeBase.breakpoints.down("sm")]: {
        fontSize: "26px",
        lineHeight: "34px"
      }
    },
    h2: {
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: "30px",
      color: ophColors.grey900,
      [themeBase.breakpoints.down("sm")]: {
        fontSize: "22px",
        lineHeight: "28px"
      }
    },
    h3: {
      fontSize: "20px",
      fontWeight: 700,
      lineHeight: "26px",
      color: ophColors.grey900
    },
    h4: {
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: "24px",
      color: ophColors.grey900
    },
    h5: {
      fontSize: "16px",
      fontWeight: 700,
      lineHeight: "24px",
      color: ophColors.grey900
    },
    h6: void 0,
    body1: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      color: ophColors.grey900
    },
    body2: {
      fontSize: "13px",
      fontWeight: 400,
      lineHeight: "16px",
      color: ophColors.grey900
    },
    button: {
      fontSize: "16px",
      fontWeight: 600,
      textTransform: "none"
    },
    label: {
      fontFamily: "Open Sans, sans-serif",
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: "24px",
      color: ophColors.grey900
    }
  }
};
var OPH_THEME_OPTIONS = Object.freeze(
  deepmerge(
    COMMON_THEME_OPTIONS,
    {
      palette: {
        background: {
          default: ophColors.grey50
        },
        primary: {
          main: ophColors.blue2,
          light: ophColors.blue3,
          dark: ophColors.blue1,
          contrastText: ophColors.white
        }
      }
    },
    { clone: true }
  )
);
var OPINTOPOLKU_THEME_OPTIONS = Object.freeze(
  deepmerge(
    COMMON_THEME_OPTIONS,
    {
      palette: {
        primary: {
          main: ophColors.green2,
          light: ophColors.green3,
          dark: ophColors.green1,
          contrastText: ophColors.white
        }
      }
    },
    { clone: true }
  )
);
var EMPTY_OBJECT = {};
function createOphTheme({
  variant,
  lang,
  overrides = EMPTY_OBJECT
}) {
  switch (variant) {
    case "oph":
      return createTheme(
        deepmerge(OPH_THEME_OPTIONS, overrides, { clone: true }),
        getLocale(lang)
      );
    case "opintopolku":
      return createTheme(
        deepmerge(OPINTOPOLKU_THEME_OPTIONS, overrides, { clone: true }),
        getLocale(lang)
      );
    default:
      throw Error('Theme variant must be "oph" or "opintopolku"!');
  }
}
var useOphTheme = ({ variant, lang, overrides }) => useMemo(
  () => createOphTheme({ variant, lang, overrides }),
  [variant, lang, overrides]
);
var OphThemeProvider = ({
  variant,
  lang,
  overrides,
  children
}) => {
  const theme = useOphTheme({ variant, lang, overrides });
  return /* @__PURE__ */ jsxs(ThemeProvider, { theme, children: [
    /* @__PURE__ */ jsx(CssBaseline, {}),
    children
  ] });
};

export {
  createOphTheme,
  useOphTheme,
  OphThemeProvider
};
//# sourceMappingURL=chunk-CL32TMTX.js.map