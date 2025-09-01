'use client';

import { Select, Box, Chip, MenuItem } from '@mui/material';
import {
  ClearSelect,
  type OphSelectOption,
  type OphSelectProps,
} from '@/src/components/OphSelect';
import * as React from 'react';

export interface OphSelectMultipleProps<T>
  extends Omit<OphSelectProps<Array<T>>, 'options'> {
  /**
   * Selectable options for the select component.
   */
  options: Array<OphSelectOption<T>>;
}

const EMPTY_ARRAY: Array<unknown> = [];
/**
 * A Multi Select component based on [MUI Select](https://mui.com/material-ui/api/select/).
 * If you need label, helper text etc. use [OphSelectFormField](/docs/components-ophselectformfield--docs) instead.
 */
export const OphSelectMultiple = <T extends string>({
  placeholder,
  options,
  onChange,
  clearable,
  ...props
}: OphSelectMultipleProps<T>) => {
  return (
    <Select
      displayEmpty
      multiple
      onChange={
        onChange
          ? (event, child) => {
              onChange(event, child);
            }
          : undefined
      }
      {...props}
      label={null}
      sx={{
        '& .MuiSelect-select': {
          paddingTop: '7px',
          paddingBottom: '7px',
        },
      }}
      renderValue={(value) => (
        <Box sx={{ display: 'flex', gap: '5px' }}>
          {value.length === 0
            ? placeholder
            : value.map((val) => {
                const option = options.find((o) => o.value === val);
                return (
                  option && (
                    <Chip
                      key={val}
                      label={option.label}
                      sx={{ borderRadius: '0px', height: '26px' }}
                      onDelete={
                        onChange
                          ? () => {
                              onChange({
                                target: {
                                  value: value.filter((v) => val !== v),
                                },
                              });
                            }
                          : undefined
                      }
                      onMouseDown={(event) => {
                        event.stopPropagation();
                      }}
                    />
                  )
                );
              })}
          {clearable && (
            <ClearSelect
              onClick={
                onChange
                  ? () => {
                      onChange({ target: { value: EMPTY_ARRAY as Array<T> } });
                    }
                  : undefined
              }
            />
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
