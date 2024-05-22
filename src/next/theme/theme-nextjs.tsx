"use client";
import { createODSTheme } from '../../theme';
import { Open_Sans } from 'next/font/google';
import NextLink, { type LinkProps } from 'next/link';
import React from 'react';

const openSans = Open_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const LinkBehaviour = React.forwardRef<HTMLAnchorElement, LinkProps>(
  function LinkBehaviour(props, ref) {
    return <NextLink ref={ref} {...props} />;
  },
);

const MUI_NEXTJS_OVERRIDES = {
  typography: {
    fontFamily: openSans.style.fontFamily,
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehaviour,
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
