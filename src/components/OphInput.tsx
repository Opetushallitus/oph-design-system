'use client';

import {
  OutlinedInput,
  type OutlinedInputProps,
  type Theme,
} from '@mui/material';
import { forwardRef } from 'react';
import { type SystemProps } from '@mui/system';

export type OphInputProps = Omit<
  OutlinedInputProps,
  keyof SystemProps<Theme> | 'label'
>;

/**
 * A text input component based on [MUI OutlinedInput](https://mui.com/material-ui/api/outlined-input/).
 * If you need label, helper text etc. use [OphInputFormField](/docs/components-ophinputformfield--docs) instead.
 */
export const OphInput = forwardRef<HTMLInputElement, OphInputProps>(
  function renderInput(props, ref) {
    return <OutlinedInput {...props} ref={ref} />;
  },
);
