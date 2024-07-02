import { isString } from '@/src/util';
import NextLink, { type LinkProps } from 'next/link';
import React from 'react';

export const LinkBehavior = React.forwardRef<HTMLAnchorElement, LinkProps>(
  function LinkBehavior({ href, ...props }, ref) {
    const externalLinkHref =
      isString(href) && href.match(/^https?:\/\//) ? href : undefined;
    return externalLinkHref ? (
      <a ref={ref} {...props} href={externalLinkHref} />
    ) : (
      <NextLink ref={ref} {...props} href={href} />
    );
  },
);
