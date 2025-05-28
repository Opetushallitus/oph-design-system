'use client';

import { Select, MenuItem, type SelectProps, Box } from '@mui/material';
import { Clear } from '@mui/icons-material';

export type OphSelectValue<T> = SelectProps<T>['value'];

export interface OphSelectOption<T> {
  label: string;
  value: OphSelectValue<T>;
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
  > {
  /**
   * Selectable options for the select component.
   */
  options: Array<OphSelectOption<T>>;
  /**
   * Can the value be cleared from the select component.
   */
  clearable?: boolean;
  /**
   * Function called when clear icon is clicked
   */
  onClear?: () => void;
  /**
   * Placeholder text shown when no value is selected.
   */
  placeholder?: string;
}

/**
 * A Select component based on [MUI Select](https://mui.com/material-ui/api/select/).
 * If you need label, helper text etc. use [OphSelectFormField](/docs/components-ophselectformfield--docs) instead.
 */
export const OphSelect = <T extends string>({
  placeholder,
  clearable,
  options,
  onClear,
  ...props
}: OphSelectProps<T | ''>) => {
  return (
    <Select
      defaultValue=""
      displayEmpty
      {...props}
      label={null}
      renderValue={(value) => (
        <Box sx={{ display: 'flex' }}>
          {options.find((option) => option.value === value)?.label ??
            placeholder}
          {clearable && (
            <Clear
              sx={{ marginLeft: '4px' }}
              onClick={onClear}
              onMouseDown={(event) => {
                event.stopPropagation();
              }}
            ></Clear>
          )}
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
