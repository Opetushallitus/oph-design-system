'use client';

import {
  Select,
  Box,
  Chip,
  MenuItem,
  useControlled,
  type SelectChangeEvent,
  useTheme,
} from '@mui/material';
import {
  type OphSelectOption,
  type OphSelectProps,
} from '@/src/components/OphSelect';
import * as React from 'react';
import { Clear, Close } from '@mui/icons-material';
import { OphButton, ophColors } from '@/src';

export type OphSelectChangeEvent<T> =
  | { target: { value: T } }
  | SelectChangeEvent;

export interface OphSelectMultipleProps<T>
  extends Omit<OphSelectProps<Array<T>>, 'options' | 'value'> {
  value?: Array<T>;
  /**
   * Selectable options for the select component.
   */
  options: Array<OphSelectOption<T>>;
  /**
   * Function called when value is changed. Clearing and deleting chips on multiselect component call the function with { target: { value: T } }
   */
  onChange?: (
    event: OphSelectChangeEvent<Array<T>>,
    child?: React.ReactNode,
  ) => void;
}

export const ClearSelect = ({ onClick }: { onClick: () => void }) => {
  const theme = useTheme();
  const ariaLabel = () => {
    switch (theme.lang) {
      case 'en':
        return 'Clear';
      case 'sv':
        return 'Rensa';
      default:
        return 'Tyhjennä';
    }
  };
  return (
    <OphButton
      sx={{ height: '26px', alignSelf: 'center' }}
      startIcon={<Clear />}
      onClick={onClick}
      onMouseDown={(event) => {
        event.stopPropagation();
      }}
      aria-label={ariaLabel()}
    ></OphButton>
  );
};

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
  value: valueProp,
  defaultValue,
  ...props
}: OphSelectMultipleProps<T>) => {
  const [controlledValue, setControlledValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue ?? (EMPTY_ARRAY as Array<T>),
    name: 'SelectMultiple',
  });
  const handleChange = (
    event: OphSelectChangeEvent<Array<T>>,
    child?: React.ReactNode,
  ) => {
    setControlledValueState(event.target.value as Array<T>);
    if (onChange) {
      onChange(event, child);
    }
  };

  const onClear = () => {
    handleChange({ target: { value: EMPTY_ARRAY as Array<T> } });
  };

  const onChipDelete = (chipValue: T) => {
    handleChange({
      target: {
        value: controlledValue.filter((v) => chipValue !== v),
      },
    });
  };

  return (
    <Select
      displayEmpty
      multiple
      onChange={handleChange}
      {...props}
      value={controlledValue}
      label={null}
      sx={{
        '& .MuiSelect-select': {
          paddingTop: '7px',
          paddingBottom: '7px',
        },
      }}
      renderValue={(value) => (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: '5px' }}>
            {value.length === 0 ? (
              <span style={{ color: ophColors.grey500 }}>{placeholder}</span>
            ) : (
              value.map((val) => {
                const option = options.find((o) => o.value === val);
                return (
                  option && (
                    <Chip
                      key={val}
                      label={option.label}
                      sx={{
                        borderRadius: '0px',
                        height: '26px',
                        '& span': {
                          paddingLeft: '5px',
                        },
                      }}
                      onDelete={() => {
                        onChipDelete(val);
                      }}
                      onMouseDown={(event) => {
                        event.stopPropagation();
                      }}
                      deleteIcon={
                        <Close
                          style={{
                            color: ophColors.black,
                          }}
                          data-testid={`delete-chip-${val}`}
                        />
                      }
                    />
                  )
                );
              })
            )}
          </Box>
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
