'use client';

import {
  Checkbox,
  type CheckboxProps,
  type FormControlLabelProps,
} from '@mui/material';
import React, { forwardRef } from 'react';
import { FocusBorderFormControlLabel } from './FocusBorderFormControlLabel';

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

/**
 * A Checkbox component based on [MUI Checkbox](https://mui.com/material-ui/api/checkbox/).
 */
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
      <FocusBorderFormControlLabel
        {...formControlLabelProps}
        label={label}
        control={<Checkbox {...checkboxProps} />}
      />
    ) : (
      <Checkbox {...checkboxProps} />
    );
  },
);
