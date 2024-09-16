import { Typography, type Theme, type TypographyProps } from '@mui/material';
import { type SystemProps } from '@mui/system';
import { forwardRef } from 'react';

type OmittedSystemPropNames = keyof Omit<SystemProps<Theme>, 'color'>;

export type OphTypographyProps = Omit<
  TypographyProps & {
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
  },
  OmittedSystemPropNames | 'paragraph' | 'variantMapping'
>;

export const OphTypography = forwardRef<HTMLElement, OphTypographyProps>(
  function renderTypography(props, ref) {
    return <Typography {...props} ref={ref} />;
  },
);
