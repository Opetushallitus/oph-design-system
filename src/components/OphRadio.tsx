import { forwardRef } from 'react';
import { FocusBorderFormControlLabel } from './FocusBorderFormControlLabel';
import Radio, { type RadioProps } from '@mui/material/Radio';
import type { FormControlLabelProps } from '@mui/material/FormControlLabel';

export type OphRadioProps = Omit<
  RadioProps,
  'checkedIcon' | 'disableRipple' | 'icon' | 'size'
> & {
  /** label of the radio input */
  label: string;
  /** is the radio input in error state */
  error?: boolean;
  /** props that are passed to option labels, see [MUI FormControlLabel](https://mui.com/material-ui/api/form-control-label/) */
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
