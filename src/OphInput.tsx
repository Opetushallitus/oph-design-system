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

export const OphInput = forwardRef<HTMLInputElement, OphInputProps>(
  function renderInput(props, ref) {
    return <OutlinedInput {...props} ref={ref} />;
  },
);
