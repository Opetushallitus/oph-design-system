import * as react from 'react';
import { OutlinedInputProps, Theme } from '@mui/material';
import { SystemProps } from '@mui/system';
import { OphFieldWrapperCommonProps } from './OphFormFieldWrapper.js';
import 'react/jsx-runtime';

type OphInputProps = Omit<OutlinedInputProps, keyof SystemProps<Theme> | 'label'>;
type OphInputFormFieldProps = OphInputProps & OphFieldWrapperCommonProps;
declare const OphInput: react.ForwardRefExoticComponent<Omit<OphInputProps, "ref"> & react.RefAttributes<HTMLInputElement>>;
declare const OphInputFormField: react.ForwardRefExoticComponent<Omit<OphInputFormFieldProps, "ref"> & react.RefAttributes<HTMLInputElement>>;

export { OphInput, OphInputFormField, type OphInputFormFieldProps, type OphInputProps };
