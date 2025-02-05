'use client';

import { OphNextJsLinkBehavior } from '@/src/next/OphNextJsLinkBehavior';
import { Open_Sans } from 'next/font/google';

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
        component: OphNextJsLinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: OphNextJsLinkBehavior,
      },
    },
  },
} as const;
