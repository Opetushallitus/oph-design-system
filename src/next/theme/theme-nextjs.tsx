'use client';

import { createODSTheme } from '../../theme';
import { Open_Sans } from 'next/font/google';
import NextLink, { type LinkProps } from 'next/link';
import React from 'react';
import { isString } from 'src/util';

export const openSans = Open_Sans({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const LinkBehaviour = React.forwardRef<HTMLAnchorElement, LinkProps>(
  function LinkBehaviour({ href, ...props }, ref) {
    const externalLinkHref =
      isString(href) && href.match(/^https?:\/\//) ? href : undefined;
    return externalLinkHref ? (
      <a ref={ref} {...props} href={externalLinkHref} />
    ) : (
      <NextLink ref={ref} {...props} href={href} />
    );
  },
);

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
        component: LinkBehaviour,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehaviour,
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
