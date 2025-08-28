'use client';

import { Select, Box, Chip } from '@mui/material';
import {
  ClearSelect,
  type OphSelectOption,
  type OphSelectProps,
  SelectOptions,
} from '@/src/components/OphSelect';

export interface OphSelectMultipleProps<T>
  extends Omit<OphSelectProps<Array<T>>, 'options'> {
  /**
   * Selectable options for the select component.
   */
  options: Array<OphSelectOption<T>>;
}

/**
 * A Multi Select component based on [MUI Select](https://mui.com/material-ui/api/select/).
 * If you need label, helper text etc. use [OphSelectFormField](/docs/components-ophselectformfield--docs) instead.
 */
export const OphSelectMultiple = <T extends string>({
  placeholder,
  options,
  clearable,
  onChange,
  ...props
}: OphSelectMultipleProps<T>) => {
  return (
    <Select
      displayEmpty
      multiple
      {...props}
      label={null}
      onChange={(event) => {
        onChange(event.target.value as Array<T>);
      }}
      renderValue={(value) => (
        <Box sx={{ display: 'flex' }}>
          {value.length === 0
            ? placeholder
            : value.map((val) => {
                const option = options.find((o) => o.value === val);
                return (
                  option && (
                    <Chip
                      key={val}
                      label={option.label}
                      sx={{ borderRadius: '0px' }}
                      onDelete={() => {
                        onChange(value.filter((v) => val !== v));
                      }}
                      onMouseDown={(event) => {
                        event.stopPropagation();
                      }}
                    />
                  )
                );
              })}
          {clearable && (
            <ClearSelect
              onClick={() => {
                onChange([]);
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
