import {
  Typography as MuiTypography,
  type TypographyProps as MuiTypographyProps,
} from '@mui/material';
import type { FunctionComponent } from 'react';

export type OphTypographyProps = Omit<MuiTypographyProps, 'variantMapping'>;

export const OphTypography: FunctionComponent<OphTypographyProps> = (props) => {
  return <MuiTypography {...props} />;
};
