import {
  Checkbox,
  FormControlLabel,
  type CheckboxProps,
  type FormControlLabelProps,
} from '@mui/material';
import React, { forwardRef } from 'react';

export type OphCheckboxProps = Omit<
  CheckboxProps,
  | 'centerRipple'
  | 'checkedIcon'
  | 'disableRipple'
  | 'icon'
  | 'indeterminateIcon'
  | 'size'
  | 'LinkComponent'
> & {
  formControlLabelProps?: Omit<FormControlLabelProps, 'label' | 'control'>;
  label?: React.ReactNode;
  error?: boolean;
};

export const OphCheckbox = forwardRef<HTMLButtonElement, OphCheckboxProps>(
  function renderCheckbox(
    { label, error, formControlLabelProps, ...props },
    ref,
  ) {
    const checkboxProps = {
      ...props,
      color: error ? 'error' : props.color,
      ref,
    };
    return label ? (
      <FormControlLabel
        {...formControlLabelProps}
        label={label}
        control={<Checkbox {...checkboxProps} />}
      />
    ) : (
      <Checkbox {...checkboxProps} />
    );
  },
);
