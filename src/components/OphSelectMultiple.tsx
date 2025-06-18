'use client';

import { Select, MenuItem, Box, Chip } from '@mui/material';
import { Clear } from '@mui/icons-material';
import type {
  OphSelectOption,
  OphSelectProps,
} from '@/src/components/OphSelect';

export interface OphSelectMultipleProps<T>
  extends Omit<OphSelectProps<Array<T>>, 'options'> {
  /**
   * Selectable options for the select component.
   */
  options: Array<OphSelectOption<T>>;
}

/**
 * A Select component based on [MUI Select](https://mui.com/material-ui/api/select/).
 * If you need label, helper text etc. use [OphSelectFormField](/docs/components-ophselectformfield--docs) instead.
 */
export const OphSelectMultiple = <T extends string>({
  placeholder,
  clearable,
  options,
  onClear,
  ...props
}: OphSelectMultipleProps<T>) => {
  return (
    <Select
      displayEmpty
      multiple
      {...props}
      label={null}
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
                      onDelete={() => {}}
                      onMouseDown={(event) => {
                        event.stopPropagation();
                      }}
                    />
                  )
                );
              })}
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
