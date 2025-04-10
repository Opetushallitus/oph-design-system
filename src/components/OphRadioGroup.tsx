'use client';

import {
  Radio,
  RadioGroup,
  styled,
  type FormControlLabelProps,
  type RadioGroupProps,
  type RadioProps,
} from '@mui/material';
import React, { forwardRef } from 'react';
import { FocusBorderFormControlLabel } from './FocusBorderFormControlLabel';

export interface OphRadioOption<T> {
  value: T;
  label: string;
}

export interface OphRadioGroupProps<T>
  extends Omit<RadioGroupProps, 'children'> {
  /**
   * Options for the RadioGroup component.
   */
  options: Array<OphRadioOption<T>>;
  labelId: string | undefined;
  formControlLabelProps?: Omit<FormControlLabelProps, 'label' | 'control'>;
  disabled?: boolean;
  error?: boolean;
}

export type OphRadioProps = Omit<
  RadioProps,
  'checkedIcon' | 'disableRipple' | 'icon' | 'size'
> & {
  label: string;
  error?: boolean;
  formControlLabelProps?: Omit<FormControlLabelProps, 'label' | 'control'>;
};

/**
 * A Radio component based on [MUI Radio](https://mui.com/material-ui/api/radio/).
 */
export const OphRadio = forwardRef<HTMLButtonElement, OphRadioProps>(
  function renderRadioButton(
    { label, error, formControlLabelProps, ...props },
    ref,
  ) {
    const radioProps = {
      ...props,
      color: error ? 'error' : props.color,
      ref,
    };
    return (
      <FocusBorderFormControlLabel
        {...formControlLabelProps}
        control={<Radio {...radioProps} />}
        label={label}
      />
    );
  },
);

const StyledRadioGroup = styled(RadioGroup)(() => ({
  '& .MuiFormControlLabel-root:not(:last-of-type)': {
    marginBottom: '9px',
  },
  '&.MuiRadioGroup-row .MuiFormControlLabel-root:not(:last-of-type)': {
    marginBottom: 0,
    marginRight: 27,
  },
}));

/**
 * A Radio Group component based on [MUI Radio Group](https://mui.com/material-ui/api/radio-group/).
 * If you need label, helper text etc. use [OphRadioGroupFormField](/docs/components-ophradiogroupformfield--docs) instead.
 */
export const OphRadioGroup = <T extends string>({
  options,
  labelId,
  formControlLabelProps,
  disabled,
  error,
  ...props
}: OphRadioGroupProps<T | ''>) => {
  const radioFormControlLabelProps = {
    ...formControlLabelProps,
    disabled: disabled,
  };
  return (
    <StyledRadioGroup
      sx={{ width: '100%' }}
      name={labelId}
      aria-invalid={error ? 'true' : undefined}
      aria-labelledby={labelId}
      {...props}
    >
      {options.map((o) => {
        return (
          <OphRadio
            formControlLabelProps={radioFormControlLabelProps}
            error={error}
            key={String(o.value)}
            value={o.value}
            label={o.label}
          />
        );
      })}
    </StyledRadioGroup>
  );
};
