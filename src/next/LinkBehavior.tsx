import { isString } from '@/src/util';
import NextLink, { type LinkProps } from 'next/link';
import React from 'react';
import { EXTERNAL_LINK_REGEX } from '../common';

export const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  React.PropsWithChildren<LinkProps>
>(function renderLinkBehavior({ href, children, ...props }, ref) {
  const externalLinkHref =
    isString(href) && EXTERNAL_LINK_REGEX.test(href) ? href : undefined;
  return externalLinkHref ? (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      ref={ref}
      href={externalLinkHref}
    >
      {children}
    </a>
  ) : (
    <NextLink ref={ref} {...props} href={href}>
      {children}
    </NextLink>
  );
});
