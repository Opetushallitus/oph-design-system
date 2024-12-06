import * as react from 'react';
import { ButtonProps } from '@mui/material';

type OphButtonProps = Omit<ButtonProps, 'endIcon'>;
declare const OphButton: react.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & react.RefAttributes<HTMLButtonElement>>;

export { OphButton, type OphButtonProps };
