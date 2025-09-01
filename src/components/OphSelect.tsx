'use client';

import {
  Select,
  MenuItem,
  type SelectProps,
  Box,
  type SelectChangeEvent,
} from '@mui/material';
import { Clear } from '@mui/icons-material';
import * as React from 'react';

export type OphSelectChangeEvent<T> =
  | { target: { value: T } }
  | SelectChangeEvent;

export interface OphSelectOption<T> {
  label: string;
  value: T;
}

export interface OphSelectProps<T>
  extends Omit<
    SelectProps<T>,
    | 'children'
    | 'label'
    | 'variant'
    | 'components'
    | 'componentsProps'
    | 'disableUnderline'
    | 'value'
    | 'onChange'
  > {
  value?: T;
  /**
   * Selectable options for the select component.
   */
  options: Array<OphSelectOption<T>>;
  /**
   * Can the value be cleared from the select component.
   */
  clearable?: boolean;
  /**
   * Placeholder text shown when no value is selected.
   */
  placeholder?: string;
  /**
   * Function called when value is changed. Clearing and deleting chips on multiselect component call the function with { target: { value: T } }
   */
  onChange?: (event: OphSelectChangeEvent<T>, child?: React.ReactNode) => void;
}

export const ClearSelect = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Clear
      sx={{ marginLeft: '4px' }}
      onClick={onClick}
      onMouseDown={(event) => {
        event.stopPropagation();
      }}
    ></Clear>
  );
};

/**
 * A Select component based on [MUI Select](https://mui.com/material-ui/api/select/).
 * If you need label, helper text etc. use [OphSelectFormField](/docs/components-ophselectformfield--docs) instead.
 */
export const OphSelect = <T extends string>({
  placeholder,
  options,
  onChange,
  clearable,
  ...props
}: OphSelectProps<T>) => {
  const onClear = () =>
    onChange
      ? () => {
          onChange({ target: { value: '' as T } });
        }
      : undefined;

  return (
    <Select
      displayEmpty
      {...props}
      onChange={onChange}
      label={null}
      renderValue={(val) => (
        <Box sx={{ display: 'flex' }}>
          {options.find((option) => option.value === val)?.label ?? placeholder}
          {clearable && <ClearSelect onClick={onClear} />}
        </Box>
      )}
    >
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
