'use client';

import {
  Select,
  MenuItem,
  type SelectProps,
  Box,
  type SelectChangeEvent,
} from '@mui/material';
import { Clear } from '@mui/icons-material';
import { useCallback, useState } from 'react';

export type OphSelectValue<T> = SelectProps<T>['value'];

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
}

export const ClearSelect = ({ onClick }: { onClick: () => void }) => {
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

export const SelectOptions = <T extends string>({
  options,
  clearable,
  placeholder,
}: {
  options: Array<OphSelectOption<T>>;
  clearable?: boolean;
  placeholder?: string;
}) => {
  return (
    <>
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
    </>
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
  value: valueProp,
  defaultValue,
  clearable,
  ...props
}: OphSelectProps<T>) => {
  const [selectedValue, setSelectedValue] = useState<T>(
    valueProp ?? defaultValue ?? ('' as T),
  );
  const handleChange = useCallback(
    (event: SelectChangeEvent<T>, child: React.ReactNode) => {
      setSelectedValue(event.target.value as T);
      onChange?.(event, child);
    },
    [onChange, setSelectedValue],
  );
  return (
    <Select
      displayEmpty
      {...props}
      label={null}
      value={selectedValue}
      onChange={handleChange}
      renderValue={(val) => (
        <Box sx={{ display: 'flex' }}>
          {options.find((option) => option.value === val)?.label ?? placeholder}
          {clearable && (
            <ClearSelect
              onClick={() => {
                setSelectedValue('' as T);
              }}
            />
          )}
        </Box>
      )}
    >
      <SelectOptions
        options={options}
        placeholder={placeholder}
        clearable={clearable}
      />
    </Select>
  );
};
