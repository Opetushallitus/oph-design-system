import { CheckboxProps, FormControlLabelProps } from '@mui/material';
import react__default from 'react';

type OphCheckboxProps = Omit<CheckboxProps, 'centerRipple' | 'checkedIcon' | 'disableRipple' | 'icon' | 'indeterminateIcon' | 'size' | 'LinkComponent'> & {
    formControlLabelProps?: Omit<FormControlLabelProps, 'label' | 'control'>;
    label?: react__default.ReactNode;
    error?: boolean;
};
declare const OphCheckbox: react__default.ForwardRefExoticComponent<Omit<OphCheckboxProps, "ref"> & react__default.RefAttributes<HTMLButtonElement>>;

export { OphCheckbox, type OphCheckboxProps };
