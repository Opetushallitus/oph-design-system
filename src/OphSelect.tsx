'use client';

import { Select, MenuItem, type SelectProps } from '@mui/material';

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
