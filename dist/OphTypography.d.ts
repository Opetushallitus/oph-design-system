import * as react from 'react';
import { TypographyProps, Theme } from '@mui/material';
import { SystemProps } from '@mui/system';

type OmittedSystemPropNames = keyof Omit<SystemProps<Theme>, 'color'>;
type OphTypographyProps = Omit<TypographyProps & {
    variant?: 'button' | 'body1' | 'body2' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'label';
}, OmittedSystemPropNames | 'paragraph' | 'variantMapping'>;
declare const OphTypography: react.ForwardRefExoticComponent<Omit<OphTypographyProps, "ref"> & react.RefAttributes<HTMLElement>>;

export { OphTypography, type OphTypographyProps };
