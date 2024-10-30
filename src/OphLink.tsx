import OpenInNew from '@mui/icons-material/OpenInNew';
import { Link, type LinkProps, type Theme } from '@mui/material';
import { EXTERNAL_LINK_REGEX } from './common';
import { type SystemProps } from '@mui/system';
import { forwardRef } from 'react';

type OmittedPropNames =
  | keyof SystemProps<Theme>
  | 'paragraph'
  | 'TypographyClasses'
  | 'variantMapping'
  | 'align'
  | 'gutterBottom'
  | 'underline';

export type OphLinkProps = Omit<LinkProps, OmittedPropNames> & {
  /** Icon visibility override. If not given, icon visibility is deduced from href (relative links without icon) */
  iconVisible?: boolean;
};

export const OphLink = forwardRef<HTMLAnchorElement, OphLinkProps>(
  function renderLink({ iconVisible, children, href, ...rest }, ref) {
    const realIconVisibility =
      iconVisible ?? (href && EXTERNAL_LINK_REGEX.test(href));
    return (
      <Link href={href} {...rest} ref={ref}>
        {children}
        {realIconVisibility && <OpenInNew className="OphLink-OpenInNewIcon" />}
      </Link>
    );
  },
);
