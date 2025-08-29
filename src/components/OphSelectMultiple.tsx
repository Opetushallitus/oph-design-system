'use client';

import { Select, Box, Chip, type SelectChangeEvent } from '@mui/material';
import {
  ClearSelect,
  type OphSelectOption,
  type OphSelectProps,
  SelectOptions,
} from '@/src/components/OphSelect';
import { useCallback, useState } from 'react';

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
  value: valueProp,
  defaultValue,
  clearable,
  ...props
}: OphSelectMultipleProps<T>) => {
  const [selectedValues, setSelectedValues] = useState<Array<T>>(
    valueProp ?? defaultValue ?? (EMPTY_ARRAY as Array<T>),
  );
  const handleChange = useCallback(
    (event: SelectChangeEvent<Array<T>>, child: React.ReactNode) => {
      setSelectedValues(event.target.value as Array<T>);
      onChange?.(event, child);
    },
    [onChange, setSelectedValues],
  );
  return (
    <Select
      displayEmpty
      value={selectedValues}
      multiple
      {...props}
      onChange={handleChange}
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
                      onDelete={() => {
                        setSelectedValues((prev) =>
                          prev.filter((v) => val !== v),
                        );
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
                setSelectedValues(EMPTY_ARRAY as Array<T>);
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
