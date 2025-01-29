'use client';

import {
  OutlinedInput,
  type OutlinedInputProps,
  type Theme,
} from '@mui/material';
import { forwardRef } from 'react';
import { type SystemProps } from '@mui/system';
import {
  OphFormFieldWrapper,
  type OphFieldWrapperCommonProps,
} from './OphFormFieldWrapper';

export type OphInputProps = Omit<
  OutlinedInputProps,
  keyof SystemProps<Theme> | 'label'
>;

export type OphInputFormFieldProps = OphInputProps & OphFieldWrapperCommonProps;

export const OphInput = forwardRef<HTMLInputElement, OphInputProps>(
  function renderInput(props, ref) {
    return <OutlinedInput {...props} ref={ref} />;
  },
);

export const OphInputFormField = forwardRef<
  HTMLInputElement,
  OphInputFormFieldProps
>(function renderInputFormField(
  { required, inputProps, label, helperText, errorMessage, ...rest },
  ref,
) {
  return (
    <OphFormFieldWrapper
      required={required}
      label={label}
      helperText={helperText}
      errorMessage={errorMessage}
      renderInput={({ labelId }) => (
        <OutlinedInput
          {...rest}
          inputProps={{
            ...(inputProps ?? {}),
            ...(label ? { 'aria-labelledby': labelId } : {}),
          }}
          ref={ref}
        />
      )}
    />
  );
});
