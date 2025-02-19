import { isString } from '@/src/util';
import NextLink, { type LinkProps } from 'next/link';
import React from 'react';
import { EXTERNAL_LINK_REGEX } from '@/src/common';

/**
 * A custom link behavior component for Next.js that handles both internal and external links.
 *
 * This component uses Next.js Link-component for internal links and a standard a-tag for external links.
 * External links are identified using a regular expression and are opened in a new tab with
 * `noopener noreferrer` by default for security.
 */
export const OphNextJsLinkBehavior = React.forwardRef<
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
