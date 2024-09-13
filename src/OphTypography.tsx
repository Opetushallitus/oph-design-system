import { Typography, type TypographyProps } from '@mui/material';
import { forwardRef } from 'react';

export type OphTypographyProps = Pick<
  TypographyProps,
  | 'align'
  | 'children'
  | 'classes'
  | 'color'
  | 'component'
  | 'gutterBottom'
  | 'noWrap'
  | 'sx'
  | 'variant'
> & {
  variant?:
    | 'button'
    | 'body1'
    | 'body2'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'label';
};

export const OphTypography = forwardRef<HTMLElement, OphTypographyProps>(
  function renderTypography(props, ref) {
    return <Typography {...props} ref={ref} />;
  },
);
