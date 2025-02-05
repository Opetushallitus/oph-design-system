'use client';

import { OphThemeProvider } from '@/src/theme';
import type { OphThemeParams } from '../../types';
import { useMemo, type ReactNode } from 'react';
import { deepmerge } from '@mui/utils';
import { MUI_NEXTJS_OVERRIDES } from './theme-nextjs';

/**
 * A component for wrapping your Next.js application with the OPH theme.
 * Based on [MUI ThemeProvider](https://mui.com/material-ui/customization/theming/#themeprovider).
 * Compared to [OphThemeProvider](/docs/theme-ophthemeprovider--docs) this overrides some theme options with Next.js specific ones:
 * - Links automatically try to detect if it's an internal or external link and use Next.js Link-component or normal a-tag
 * - Open Sans font is automatically loaded using next/font/google
 */
export const OphNextJsThemeProvider = ({
  lang,
  variant,
  overrides,
  children,
}: OphThemeParams & { children: ReactNode }) => {
  const mergedOverrides = useMemo(
    () => deepmerge(MUI_NEXTJS_OVERRIDES, overrides, { clone: true }),
    [overrides],
  );

  return (
    <OphThemeProvider variant={variant} lang={lang} overrides={mergedOverrides}>
      {children}
    </OphThemeProvider>
  );
};
