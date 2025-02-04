'use client';

import { Select, MenuItem, type SelectProps } from '@mui/material';
import {
  OphFormFieldWrapper,
  type OphFieldWrapperCommonProps,
} from './OphFormFieldWrapper';

export type OphSelectValue<T> = SelectProps<T>['value'];

export interface OphSelectOption<T> {
  label: string;
  value: OphSelectValue<T>;
}

export interface OphSelectProps<T>
  extends Omit<SelectProps<T>, 'children' | 'label' | 'variant'> {
  options: Array<OphSelectOption<T>>;
  clearable?: boolean;
  placeholder?: string;
}

export interface OphSelectFormFieldProps<T>
  extends OphFieldWrapperCommonProps,
    OphSelectProps<T> {
  options: Array<OphSelectOption<T>>;
  clearable?: boolean;
  placeholder?: string;
}

export const OphSelect = <T extends string>({
  placeholder,
  clearable,
  options,
  ...props
}: OphSelectProps<T | ''>) => {
  return (
    <Select defaultValue="" displayEmpty {...props} label={null}>
      <MenuItem sx={{ display: clearable ? 'block' : 'none' }} value="">
        {placeholder}
      </MenuItem>
      {options.map(({ value, label }) => {
        return (
          <MenuItem value={value} key={value}>
            {label}
          </MenuItem>
        );
      })}
    </Select>
  );
};

export const OphSelectFormField = <T extends string>({
  required,
  label,
  helperText,
  errorMessage,
  ...props
}: OphSelectFormFieldProps<T | ''>) => {
  return (
    <OphFormFieldWrapper
      required={required}
      label={label}
      helperText={helperText}
      errorMessage={errorMessage}
      renderInput={({ labelId }) => <OphSelect {...props} labelId={labelId} />}
    />
  );
};
