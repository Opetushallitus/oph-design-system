import OpenInNew from '@mui/icons-material/OpenInNew';
import { Link, type LinkOwnProps, type Theme } from '@mui/material';
import { EXTERNAL_LINK_REGEX } from '../common';
import { type SystemProps } from '@mui/system';
import { forwardRef } from 'react';
import type {
  OverridableComponent,
  OverrideProps,
} from '@mui/material/OverridableComponent';

type OmittedPropNames =
  | keyof SystemProps<Theme>
  | 'paragraph'
  | 'TypographyClasses'
  | 'variantMapping'
  | 'align'
  | 'gutterBottom';

interface OphAdditionalLinkProps {
  /**
   * Icon visibility override. If not given, icon visibility is deduced from href.
   * If href is an URL with protocol, then the icon is shown by default.
   */
  iconVisible?: boolean;
  underline?: 'hover' | 'always';
  variant?: 'inherit' | 'body1' | 'body2';
}

interface OphLinkTypeMap<
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  AdditionalProps = {},
  RootComponent extends React.ElementType = 'a',
> {
  props: AdditionalProps & Omit<LinkOwnProps, OmittedPropNames>;
  defaultComponent: RootComponent;
}

type MuiOphLinkProps<
  RootComponent extends React.ElementType = OphLinkTypeMap['defaultComponent'],
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  AdditionalProps = {},
> = OverrideProps<
  OphLinkTypeMap<AdditionalProps, RootComponent>,
  RootComponent
> & {
  component?: React.ElementType;
};

export type OphLinkProps<
  C extends React.ElementType = React.ElementType,
  D extends React.ElementType = OphLinkTypeMap['defaultComponent'],
> = {
  component?: C;
} & Omit<MuiOphLinkProps<D, OphAdditionalLinkProps>, 'component'>;

/**
 * A Link component based on [MUI Link](https://mui.com/material-ui/api/link/).
 */
// https://github.com/mui/material-ui/issues/32420
export const OphLink: OverridableComponent<OphLinkTypeMap<OphLinkProps>> =
  forwardRef(function renderLink<C extends React.ElementType>(
    { iconVisible, children, href, ...rest }: OphLinkProps<C>,
    ref: React.Ref<HTMLAnchorElement> | null,
  ) {
    const realIconVisibility =
      iconVisible ?? (href && EXTERNAL_LINK_REGEX.test(href));
    return (
      <Link href={href} {...rest} ref={ref}>
        {children}
        {realIconVisibility && <OpenInNew className="OphLink-OpenInNewIcon" />}
      </Link>
    );
  }) as OverridableComponent<OphLinkTypeMap<OphLinkProps>>;
