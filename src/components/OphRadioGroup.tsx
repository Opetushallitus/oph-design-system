'use client';

import {
  RadioGroup,
  styled,
  type FormControlLabelProps,
  type RadioGroupProps,
} from '@mui/material';
import { OphRadio } from './OphRadio';

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
  /** the ID of the label element that is passed to "aria-labelledby"-attribute. */
  labelId: string | undefined;
  /** props that are passed to option labels, see [MUI FormControlLabel](https://mui.com/material-ui/api/form-control-label/) */
  formControlLabelProps?: Omit<FormControlLabelProps, 'label' | 'control'>;
  /** is the component disabled */
  disabled?: boolean;
  /** is the component in error state */
  error?: boolean;
}

const StyledRadioGroup = styled(RadioGroup)(() => ({
  rowGap: '9px',
  '&.MuiRadioGroup-row': {
    marginBottom: 0,
    columnGap: '27px',
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
