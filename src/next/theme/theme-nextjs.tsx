'use client';

import { createODSTheme } from '../../theme';
import { Open_Sans } from 'next/font/google';
import { LinkBehavior as LB } from '../LinkBehavior';

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
};

export const virkailijaTheme = createODSTheme({
  variant: 'oph',
  overrides: MUI_NEXTJS_OVERRIDES,
});

export const oppijaTheme = createODSTheme({
  variant: 'opintopolku',
  overrides: MUI_NEXTJS_OVERRIDES,
});
