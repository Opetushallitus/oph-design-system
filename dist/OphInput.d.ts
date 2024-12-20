import * as react from 'react';
import { OutlinedInputProps, Theme } from '@mui/material';
import { SystemProps } from '@mui/system';

type OphInputProps = Omit<OutlinedInputProps, keyof SystemProps<Theme> | 'label'>;
declare const OphInput: react.ForwardRefExoticComponent<Omit<OphInputProps, "ref"> & react.RefAttributes<HTMLInputElement>>;

export { OphInput, type OphInputProps };
