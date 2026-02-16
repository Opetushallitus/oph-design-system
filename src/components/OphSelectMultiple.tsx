'use client';

import {
  Select,
  Box,
  Chip,
  MenuItem,
  useControlled,
  type SelectChangeEvent,
  useTheme,
  type SxProps,
  type InputBaseComponentProps,
} from '@mui/material';
import { type OphSelectOption } from '@/src/components/OphSelect';
import * as React from 'react';
import { Clear, Close } from '@mui/icons-material';
import { OphButton, ophColors } from '@/src';
import type { Theme } from '@mui/material/styles';

export type OphSelectChangeEvent<T> =
  | { target: { value: T } }
  | SelectChangeEvent;

export interface OphSelectMultipleProps<T> {
  value?: Array<T>;
  /**
   * Selectable options for the select component.
   */
  options: Array<OphSelectOption<T>>;
  /**
   * Function called when value is changed. Clearing and deleting chips on multiselect component call the function with { target: { value: Array<T> } }
   */
  onChange?: (
    event: OphSelectChangeEvent<Array<T>>,
    child?: React.ReactNode,
  ) => void;
  /**
   * Can the value be cleared from the select component.
   */
  clearable?: boolean;
  /**
   * Placeholder text shown when no value is selected.
   */
  placeholder?: string;
  defaultValue?: Array<T>;
  open?: boolean;
  sx?: SxProps<Theme>;
  inputProps?: InputBaseComponentProps;
  disabled?: boolean;
  labelId?: string;
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
    />
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
  open,
  sx,
  inputProps,
  labelId,
  disabled,
}: OphSelectMultipleProps<T>) => {
  const [controlledValue, setControlledValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue ?? (EMPTY_ARRAY as Array<T>),
    name: 'OphSelectMultiple',
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
      value={controlledValue}
      label={null}
      labelId={labelId}
      disabled={disabled}
      open={open}
      sx={sx}
      inputProps={inputProps}
      renderValue={(value) => {
        return value.length === 0 ? (
          <span style={{ color: ophColors.grey500 }}>{placeholder}</span>
        ) : (
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
              {value.map((val) => {
                const option = options.find((o) => o.value === val);
                return (
                  option && (
                    <Chip
                      key={val}
                      label={option.label}
                      onDelete={() => {
                        onChipDelete(val);
                      }}
                      onMouseDown={(event) => {
                        event.stopPropagation();
                      }}
                      deleteIcon={<Close data-testid={`delete-chip-${val}`} />}
                    />
                  )
                );
              })}
            </Box>
            {clearable && <ClearSelect onClick={onClear} />}
          </Box>
        );
      }}
    >
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
