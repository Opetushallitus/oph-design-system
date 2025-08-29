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
  /**
   * FUnction called when the delete icon on a chip is clicked. If set, the delete icon will be shown.
   */
  onChipDelete?: (value: T) => void;
}

/**
 * A Multi Select component based on [MUI Select](https://mui.com/material-ui/api/select/).
 * If you need label, helper text etc. use [OphSelectFormField](/docs/components-ophselectformfield--docs) instead.
 */
export const OphSelectMultiple = <T extends string>({
  placeholder,
  options,
  onClear,
  onChipDelete,
  ...props
}: OphSelectMultipleProps<T>) => {
  return (
    <Select
      displayEmpty
      defaultValue={[]}
      multiple
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
                        onChipDelete
                          ? () => {
                              onChipDelete(val);
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
