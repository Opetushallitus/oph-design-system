'use client';

import {
  OphThemeProvider,
  useOphTheme,
  type CreateOPHThemeParams,
} from '../../theme';
import { LinkBehavior as LB } from '../LinkBehavior';
import { deepmerge } from '@mui/utils';
import { Open_Sans } from 'next/font/google';
import { useMemo } from 'react';

export const LinkBehavior = LB;

export const openSans = Open_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const MUI_NEXTJS_OVERRIDES = {
  typography: {
    fontFamily: openSans.style.fontFamily,
    label: {
      fontFamily: openSans.style.fontFamily,
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
} as const;

export const useOphNextJsTheme = ({
  variant,
  lang,
  overrides,
}: CreateOPHThemeParams) => {
  const nextOverrides = useMemo(
    () => deepmerge(MUI_NEXTJS_OVERRIDES, overrides, { clone: true }),
    [overrides],
  );
  return useOphTheme({
    lang,
    variant,
    overrides: nextOverrides,
  });
};

export function OphNextJsThemeProvider({
  lang,
  variant,
  overrides,
  children,
}: CreateOPHThemeParams & { children: React.ReactNode }) {
  return (
    <OphThemeProvider variant={variant} lang={lang} overrides={overrides}>
      {children}
    </OphThemeProvider>
  );
}
