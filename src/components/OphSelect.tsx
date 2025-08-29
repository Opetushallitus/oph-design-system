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
   * Function called when the clear icon is clicked. If set, the clear icon will be shown.
   */
  onClear?: () => void;
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
  onClear,
  ...props
}: OphSelectProps<T | ''>) => {
  return (
    <Select
      defaultValue=""
      displayEmpty
      {...props}
      label={null}
      renderValue={(val) => (
        <Box sx={{ display: 'flex' }}>
          {options.find((option) => option.value === val)?.label ?? placeholder}
          {onClear && <ClearSelect onClick={onClear} />}
        </Box>
      )}
    >
      <SelectOptions
        options={options}
        placeholder={placeholder}
        clearable={Boolean(onClear)}
      />
    </Select>
  );
};
