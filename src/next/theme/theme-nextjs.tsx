'use client';

import { useMemo } from 'react';
import { OphThemeProvider } from '@/src/theme/theme';
import { LinkBehavior as LB } from '@/src/next/LinkBehavior';
import { Open_Sans } from 'next/font/google';
import { deepmerge } from '@mui/utils';
import type { OphThemeParams } from '@/src/types';

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

export function OphNextJsThemeProvider({
  lang,
  variant,
  overrides,
  children,
}: OphThemeParams & { children: React.ReactNode }) {
  const mergedOverrides = useMemo(
    () => deepmerge(MUI_NEXTJS_OVERRIDES, overrides, { clone: true }),
    [overrides],
  );

  return (
    <OphThemeProvider variant={variant} lang={lang} overrides={mergedOverrides}>
      {children}
    </OphThemeProvider>
  );
}
