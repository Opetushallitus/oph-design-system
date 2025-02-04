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
 * An Input component based on [MUI OutlinedInput](https://mui.com/material-ui/api/outlined-input/).
 */
export const OphInput = forwardRef<HTMLInputElement, OphInputProps>(
  function renderInput(props, ref) {
    return <OutlinedInput {...props} ref={ref} />;
  },
);
