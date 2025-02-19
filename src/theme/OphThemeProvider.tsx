'use client';

import type { ReactNode } from 'react';
import type { OphThemeParams } from '../types';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { useOphTheme } from './useOphTheme';

/**
 * A component for wrapping your React-application with the OPH theme. Based on [MUI ThemeProvider](https://mui.com/material-ui/customization/theming/#themeprovider).
 */
export const OphThemeProvider = ({
  lang,
  variant,
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
