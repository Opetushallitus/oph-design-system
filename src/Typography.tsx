import {
  Typography as MuiTypography,
  type TypographyProps as MuiTypographyProps,
} from '@mui/material';
import type { FunctionComponent } from 'react';

export type TypographyProps = Omit<MuiTypographyProps, 'variantMapping'>;

export const Typography: FunctionComponent<TypographyProps> = (props) => {
  return <MuiTypography {...props} />;
};
